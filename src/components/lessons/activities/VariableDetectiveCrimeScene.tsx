import { useState } from 'react'
import { Search, AlertTriangle, Check, X, RotateCcw, Trophy, Eye, Users, Brain, Shield, Star } from 'lucide-react'

interface Clue {
  id: string
  text: string
  type: 'extraneous' | 'confounding' | 'demand' | 'investigator' | 'decoy'
  x: number // percentage position
  y: number // percentage position
  explanation: string
}

interface CrimeScene {
  id: number
  title: string
  description: string
  background: string
  clues: Clue[]
  targetCount: number // how many real issues to find
}

const crimeScenes: CrimeScene[] = [
  {
    id: 1,
    title: "The Memory Experiment Mess",
    description: "A researcher tested whether background music affects memory recall. Students in the music condition wore headphones playing classical music while memorizing words. The control group worked in silence. Something went wrong with the results...",
    background: "from-blue-900 to-gray-900",
    clues: [
      { id: 'c1', text: "☀️ Music group tested in the morning, silent group tested in the afternoon", type: 'confounding', x: 15, y: 25, explanation: "Time of day is a confounding variable - tiredness levels differ, systematically affecting one group more than another." },
      { id: 'c2', text: "📚 Both groups given same word list", type: 'decoy', x: 65, y: 20, explanation: "This is good practice - using the same materials is a form of standardisation." },
      { id: 'c3', text: "🎧 Music group's headphones were visible to the researcher marking their tests", type: 'investigator', x: 40, y: 55, explanation: "Investigator effect - the researcher might unconsciously mark music group differently knowing their condition." },
      { id: 'c4', text: "💡 Fluorescent light flickering in silent room only", type: 'extraneous', x: 75, y: 40, explanation: "Extraneous variable - the flickering light could distract participants, but affects only one condition so could confound." },
      { id: 'c5', text: "📝 Participants told 'we think music helps memory'", type: 'demand', x: 25, y: 70, explanation: "Demand characteristic - participants know the expected result and might try harder with music to confirm the hypothesis." },
      { id: 'c6', text: "⏱️ Both groups given 5 minutes to memorize", type: 'decoy', x: 55, y: 80, explanation: "This is standardisation - giving equal time is good experimental control." }
    ],
    targetCount: 4
  },
  {
    id: 2,
    title: "The Conformity Study Catastrophe",
    description: "A researcher replicated Asch's line study to see if people conform to incorrect answers given by confederates. The researcher sat in the room and recorded responses openly...",
    background: "from-purple-900 to-gray-900",
    clues: [
      { id: 'c7', text: "👀 Researcher sat facing participants while recording responses", type: 'investigator', x: 20, y: 30, explanation: "Investigator effect - participants may change behavior when being directly watched by the researcher." },
      { id: 'c8', text: "🎭 Confederates varied their acting enthusiasm across trials", type: 'confounding', x: 60, y: 25, explanation: "Confounding variable - inconsistent confederate behavior could affect conformity rates differently across trials." },
      { id: 'c9', text: "📋 Same line comparison task used for all participants", type: 'decoy', x: 45, y: 60, explanation: "Good practice - standardised materials ensure fair comparison." },
      { id: 'c10', text: "🏫 Study conducted in a university psychology lab with obvious observation mirrors", type: 'demand', x: 75, y: 45, explanation: "Demand characteristic - visible mirrors signal being watched, potentially reducing natural conformity." },
      { id: 'c11', text: "🌡️ Room temperature was 22°C throughout", type: 'decoy', x: 30, y: 75, explanation: "Controlled extraneous variable - temperature was kept constant." },
      { id: 'c12', text: "😊 Researcher smiled approvingly when participants gave independent answers", type: 'investigator', x: 55, y: 85, explanation: "Investigator effect - non-verbal cues from researcher may encourage certain responses." }
    ],
    targetCount: 4
  },
  {
    id: 3,
    title: "The Stress Study Scandal",
    description: "Researchers investigated whether exercise reduces stress. The exercise group did 30 minutes of jogging; the control group sat in a waiting room. Heart rate and self-reported stress were measured.",
    background: "from-red-900 to-gray-900",
    clues: [
      { id: 'c13', text: "🏃 Exercise group ran outside in a park; control group sat inside under bright lights", type: 'confounding', x: 20, y: 25, explanation: "Confounding variable - environment differs between groups (nature vs. artificial indoor setting)." },
      { id: 'c14', text: "❓ Stress questionnaire asked 'How stressed do you feel after exercising?'", type: 'demand', x: 55, y: 30, explanation: "Demand characteristic - leading question reveals hypothesis and may influence responses." },
      { id: 'c15', text: "⌚ Both groups tested at the same time of day", type: 'decoy', x: 80, y: 50, explanation: "Good practice - controlling for time of day eliminates this as an extraneous variable." },
      { id: 'c16', text: "📱 Control group participants were scrolling through stressful news on their phones", type: 'extraneous', x: 35, y: 55, explanation: "Extraneous variable - phone use not controlled, could increase stress in control group." },
      { id: 'c17', text: "🧪 Researcher who was a personal trainer administered the exercise condition", type: 'investigator', x: 65, y: 75, explanation: "Investigator effect - a fitness enthusiast might unconsciously encourage exercise participants differently." },
      { id: 'c18', text: "💊 Random assignment to conditions", type: 'decoy', x: 25, y: 80, explanation: "Good practice - random allocation helps control for participant variables." }
    ],
    targetCount: 4
  }
]

const typeInfo: Record<string, { label: string; color: string; icon: JSX.Element }> = {
  extraneous: { label: 'Extraneous Variable', color: 'bg-amber-500', icon: <AlertTriangle className="w-4 h-4" /> },
  confounding: { label: 'Confounding Variable', color: 'bg-red-500', icon: <X className="w-4 h-4" /> },
  demand: { label: 'Demand Characteristic', color: 'bg-purple-500', icon: <Eye className="w-4 h-4" /> },
  investigator: { label: 'Investigator Effect', color: 'bg-blue-500', icon: <Users className="w-4 h-4" /> },
  decoy: { label: 'Good Practice', color: 'bg-green-500', icon: <Check className="w-4 h-4" /> }
}

const ranks = [
  { minScore: 0, title: "Rookie Detective", stars: 1 },
  { minScore: 4, title: "Junior Investigator", stars: 2 },
  { minScore: 8, title: "Expert Detective", stars: 3 },
  { minScore: 12, title: "Master Investigator", stars: 4 }
]

interface VariableDetectiveCrimeSceneProps {
  isPresenting?: boolean
}

export default function VariableDetectiveCrimeScene({ isPresenting = false }: VariableDetectiveCrimeSceneProps) {
  const [currentScene, setCurrentScene] = useState(0)
  const [foundClues, setFoundClues] = useState<string[]>([])
  const [selectedClue, setSelectedClue] = useState<Clue | null>(null)
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [hoveredClue, setHoveredClue] = useState<string | null>(null)

  const scene = crimeScenes[currentScene]
  const realIssues = scene.clues.filter(c => c.type !== 'decoy')
  const foundIssues = foundClues.filter(id => {
    const clue = scene.clues.find(c => c.id === id)
    return clue && clue.type !== 'decoy'
  })

  const handleClueClick = (clue: Clue) => {
    if (foundClues.includes(clue.id)) {
      setSelectedClue(clue)
      return
    }

    setFoundClues(prev => [...prev, clue.id])
    setSelectedClue(clue)

    if (clue.type !== 'decoy') {
      setScore(prev => prev + 1)
    }
  }

  const closeClueModal = () => {
    setSelectedClue(null)
  }

  const checkScene = () => {
    setShowResults(true)
  }

  const nextScene = () => {
    if (currentScene < crimeScenes.length - 1) {
      setCurrentScene(prev => prev + 1)
      setFoundClues([])
      setSelectedClue(null)
      setShowResults(false)
    } else {
      setCompleted(true)
    }
  }

  const restartAll = () => {
    setCurrentScene(0)
    setFoundClues([])
    setSelectedClue(null)
    setScore(0)
    setShowResults(false)
    setCompleted(false)
  }

  const getRank = () => {
    return ranks.reduce((acc, rank) => score >= rank.minScore ? rank : acc, ranks[0])
  }

  if (completed) {
    const rank = getRank()
    return (
      <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 flex items-center justify-center`}>
        <div className="text-center animate-fadeIn max-w-lg">
          <div className="mb-6">
            <Shield className="w-20 h-20 text-blue-400 mx-auto mb-4" />
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(rank.stars)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-amber-400 fill-amber-400" />
              ))}
              {[...Array(4 - rank.stars)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-gray-600" />
              ))}
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Investigation Complete!</h2>
          <p className="text-xl text-blue-400 font-semibold mb-4">{rank.title}</p>
          <p className="text-gray-300 mb-6">
            You identified {score} methodological issues across {crimeScenes.length} crime scenes.
          </p>
          <div className="bg-gray-800/50 rounded-xl p-4 mb-6">
            <h4 className="text-white font-semibold mb-3">Issues You Can Now Identify:</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {Object.entries(typeInfo).filter(([key]) => key !== 'decoy').map(([key, info]) => (
                <div key={key} className={`${info.color}/20 px-3 py-2 rounded-lg flex items-center gap-2`}>
                  {info.icon}
                  <span className="text-gray-300">{info.label}</span>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={restartAll}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all mx-auto"
          >
            <RotateCcw className="w-5 h-5" />
            Investigate Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-6 bg-gradient-to-br ${scene.background} overflow-auto`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="bg-blue-500/20 p-3 rounded-xl">
              <Search className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Variable Detective</h2>
              <p className="text-gray-400">Crime Scene Investigation</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-gray-800/50 px-4 py-2 rounded-lg">
              <span className="text-gray-400 text-sm">Scene</span>
              <span className="text-white font-bold ml-2">{currentScene + 1}/{crimeScenes.length}</span>
            </div>
            <div className="bg-amber-500/20 px-4 py-2 rounded-lg">
              <span className="text-amber-400 text-sm">Issues Found</span>
              <span className="text-amber-400 font-bold ml-2">{score}</span>
            </div>
          </div>
        </div>

        {/* Scene Description */}
        <div className="bg-gray-800/50 rounded-xl p-4 border border-blue-500/30 mb-4">
          <h3 className="text-lg font-bold text-white mb-2">🔍 {scene.title}</h3>
          <p className="text-gray-300 text-sm">{scene.description}</p>
        </div>

        {/* Investigation Area */}
        <div className="relative bg-gray-800/30 rounded-xl border border-gray-700 mb-4 aspect-video min-h-[350px]">
          {/* Clue markers */}
          {scene.clues.map((clue) => {
            const isFound = foundClues.includes(clue.id)
            const info = typeInfo[clue.type]
            return (
              <button
                key={clue.id}
                onClick={() => handleClueClick(clue)}
                onMouseEnter={() => setHoveredClue(clue.id)}
                onMouseLeave={() => setHoveredClue(null)}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all z-10
                  ${isFound ? `${info.color} scale-100` : 'bg-gray-600 hover:bg-gray-500 scale-90 hover:scale-100'}
                  p-3 rounded-full shadow-lg`}
                style={{ left: `${clue.x}%`, top: `${clue.y}%` }}
              >
                {isFound ? info.icon : <Search className="w-4 h-4 text-white" />}
              </button>
            )
          })}

          {/* Hover tooltip */}
          {hoveredClue && (
            <div 
              className="absolute z-20 bg-gray-900 border border-gray-700 rounded-lg p-3 max-w-xs shadow-xl pointer-events-none"
              style={{ 
                left: `${scene.clues.find(c => c.id === hoveredClue)!.x}%`, 
                top: `${scene.clues.find(c => c.id === hoveredClue)!.y + 8}%`,
                transform: 'translateX(-50%)'
              }}
            >
              <p className="text-gray-300 text-sm">
                {foundClues.includes(hoveredClue) 
                  ? scene.clues.find(c => c.id === hoveredClue)!.text
                  : "🔍 Click to investigate this clue"}
              </p>
            </div>
          )}

          {/* Instructions overlay */}
          {foundClues.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-xl">
              <div className="text-center">
                <Search className="w-12 h-12 text-blue-400 mx-auto mb-3 animate-pulse" />
                <p className="text-white font-semibold">Click on the markers to investigate clues</p>
                <p className="text-gray-400 text-sm">Find the methodological issues in this experiment</p>
              </div>
            </div>
          )}
        </div>

        {/* Progress */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-1 bg-gray-700 rounded-full h-3">
            <div 
              className="bg-blue-500 h-3 rounded-full transition-all"
              style={{ width: `${(foundIssues.length / realIssues.length) * 100}%` }}
            />
          </div>
          <span className="text-gray-400 text-sm">{foundIssues.length}/{realIssues.length} issues found</span>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-4">
          {Object.entries(typeInfo).map(([key, info]) => (
            <div key={key} className={`${info.color}/20 px-3 py-2 rounded-lg flex items-center gap-2`}>
              {info.icon}
              <span className="text-gray-300 text-xs">{info.label}</span>
            </div>
          ))}
        </div>

        {/* Results panel */}
        {showResults && (
          <div className="bg-gray-800/50 rounded-xl p-4 border border-blue-500/30 mb-4 animate-fadeIn">
            <h4 className="text-white font-bold mb-3">Scene Report</h4>
            <div className="space-y-2">
              {scene.clues.filter(c => c.type !== 'decoy').map(clue => {
                const isFound = foundClues.includes(clue.id)
                const info = typeInfo[clue.type]
                return (
                  <div key={clue.id} className={`p-3 rounded-lg ${isFound ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                    <div className="flex items-center gap-2 mb-1">
                      {isFound ? <Check className="w-4 h-4 text-green-400" /> : <X className="w-4 h-4 text-red-400" />}
                      <span className={`text-xs px-2 py-0.5 rounded ${info.color}`}>{info.label}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{clue.text}</p>
                    {!isFound && <p className="text-gray-500 text-xs mt-1 italic">{clue.explanation}</p>}
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-4 justify-center">
          {!showResults ? (
            <button
              onClick={checkScene}
              className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all"
            >
              <Check className="w-5 h-5" />
              Submit Report
            </button>
          ) : (
            <button
              onClick={nextScene}
              className="flex items-center gap-2 px-6 py-2.5 bg-green-600 hover:bg-green-500 text-white rounded-lg font-semibold transition-all"
            >
              {currentScene < crimeScenes.length - 1 ? 'Next Scene' : 'View Final Rank'}
            </button>
          )}
        </div>
      </div>

      {/* Clue Detail Modal */}
      {selectedClue && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={closeClueModal}>
          <div 
            className="bg-gray-800 rounded-xl p-6 max-w-md w-full animate-fadeIn"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`${typeInfo[selectedClue.type].color} p-2 rounded-lg`}>
                {typeInfo[selectedClue.type].icon}
              </div>
              <div>
                <span className={`text-xs px-2 py-0.5 rounded ${typeInfo[selectedClue.type].color}`}>
                  {typeInfo[selectedClue.type].label}
                </span>
              </div>
            </div>
            <p className="text-white text-lg mb-4">{selectedClue.text}</p>
            <p className="text-gray-400 text-sm mb-6">{selectedClue.explanation}</p>
            <button
              onClick={closeClueModal}
              className="w-full py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all"
            >
              Continue Investigating
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
