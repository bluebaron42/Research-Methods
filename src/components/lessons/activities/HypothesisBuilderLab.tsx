import { useState, useCallback } from 'react'
import { Dna, Sparkles, Check, X, RotateCcw, Trophy, Zap, ArrowRight } from 'lucide-react'

interface HypothesisPart {
  id: string
  text: string
  type: 'population' | 'iv_condition1' | 'iv_condition2' | 'dv' | 'direction' | 'comparison'
  color: string
}

interface HypothesisChallenge {
  id: number
  scenario: string
  correctOrder: string[]
  parts: HypothesisPart[]
  explanation: string
}

const challenges: HypothesisChallenge[] = [
  {
    id: 1,
    scenario: "A researcher wants to investigate whether listening to classical music improves memory recall in university students.",
    correctOrder: ['pop1', 'iv1', 'dir1', 'dv1', 'comp1', 'iv2'],
    parts: [
      { id: 'pop1', text: 'University students', type: 'population', color: 'bg-blue-500' },
      { id: 'iv1', text: 'who listen to classical music', type: 'iv_condition1', color: 'bg-green-500' },
      { id: 'dir1', text: 'will recall significantly more', type: 'direction', color: 'bg-amber-500' },
      { id: 'dv1', text: 'words from a list', type: 'dv', color: 'bg-purple-500' },
      { id: 'comp1', text: 'than those', type: 'comparison', color: 'bg-gray-500' },
      { id: 'iv2', text: 'who listen to no music', type: 'iv_condition2', color: 'bg-green-500' },
    ],
    explanation: "This is a directional hypothesis stating the expected direction (more words recalled) with both conditions of the IV clearly stated."
  },
  {
    id: 2,
    scenario: "Testing whether caffeine affects reaction time in adults aged 18-30.",
    correctOrder: ['pop2', 'iv3', 'dir2', 'dv2', 'comp2', 'iv4'],
    parts: [
      { id: 'pop2', text: 'Adults aged 18-30', type: 'population', color: 'bg-blue-500' },
      { id: 'iv3', text: 'who consume caffeine', type: 'iv_condition1', color: 'bg-green-500' },
      { id: 'dir2', text: 'will have significantly faster', type: 'direction', color: 'bg-amber-500' },
      { id: 'dv2', text: 'reaction times (measured in milliseconds)', type: 'dv', color: 'bg-purple-500' },
      { id: 'comp2', text: 'compared to those', type: 'comparison', color: 'bg-gray-500' },
      { id: 'iv4', text: 'who consume a placebo', type: 'iv_condition2', color: 'bg-green-500' },
    ],
    explanation: "The DV is operationalised (measured in milliseconds) and both conditions of the IV are clear."
  },
  {
    id: 3,
    scenario: "Investigating if sleep deprivation affects problem-solving ability in teenagers.",
    correctOrder: ['pop3', 'iv5', 'dir3', 'dv3', 'comp3', 'iv6'],
    parts: [
      { id: 'pop3', text: 'Teenagers', type: 'population', color: 'bg-blue-500' },
      { id: 'iv5', text: 'who are sleep deprived (less than 5 hours)', type: 'iv_condition1', color: 'bg-green-500' },
      { id: 'dir3', text: 'will solve significantly fewer', type: 'direction', color: 'bg-amber-500' },
      { id: 'dv3', text: 'puzzle problems correctly', type: 'dv', color: 'bg-purple-500' },
      { id: 'comp3', text: 'than those', type: 'comparison', color: 'bg-gray-500' },
      { id: 'iv6', text: 'who had a full night\'s sleep (8+ hours)', type: 'iv_condition2', color: 'bg-green-500' },
    ],
    explanation: "Both IV conditions are operationalised with specific hours of sleep, making the hypothesis testable."
  },
  {
    id: 4,
    scenario: "Does revision method affect exam performance in GCSE students?",
    correctOrder: ['pop4', 'iv7', 'dir4', 'dv4', 'comp4', 'iv8'],
    parts: [
      { id: 'pop4', text: 'GCSE students', type: 'population', color: 'bg-blue-500' },
      { id: 'iv7', text: 'using active recall revision', type: 'iv_condition1', color: 'bg-green-500' },
      { id: 'dir4', text: 'will achieve significantly higher', type: 'direction', color: 'bg-amber-500' },
      { id: 'dv4', text: 'test scores (percentage marks)', type: 'dv', color: 'bg-purple-500' },
      { id: 'comp4', text: 'compared to students', type: 'comparison', color: 'bg-gray-500' },
      { id: 'iv8', text: 'using passive re-reading', type: 'iv_condition2', color: 'bg-green-500' },
    ],
    explanation: "The hypothesis specifies the population, both conditions of the IV (revision methods), and an operationalised DV."
  },
  {
    id: 5,
    scenario: "Examining whether room temperature affects concentration levels in office workers.",
    correctOrder: ['pop5', 'iv9', 'dir5', 'dv5', 'comp5', 'iv10'],
    parts: [
      { id: 'pop5', text: 'Office workers', type: 'population', color: 'bg-blue-500' },
      { id: 'iv9', text: 'working in a cool room (18°C)', type: 'iv_condition1', color: 'bg-green-500' },
      { id: 'dir5', text: 'will make significantly fewer', type: 'direction', color: 'bg-amber-500' },
      { id: 'dv5', text: 'errors on a data entry task', type: 'dv', color: 'bg-purple-500' },
      { id: 'comp5', text: 'than those', type: 'comparison', color: 'bg-gray-500' },
      { id: 'iv10', text: 'working in a warm room (26°C)', type: 'iv_condition2', color: 'bg-green-500' },
    ],
    explanation: "Temperature is operationalised with specific values, and concentration is measured through errors on a specific task."
  }
]

const typeLabels: Record<string, { label: string; description: string }> = {
  population: { label: 'Population', description: 'Who is being studied' },
  iv_condition1: { label: 'IV Condition 1', description: 'First condition of the independent variable' },
  iv_condition2: { label: 'IV Condition 2', description: 'Second condition of the independent variable' },
  dv: { label: 'DV', description: 'The dependent variable being measured' },
  direction: { label: 'Direction', description: 'The expected outcome (more/less/higher/lower)' },
  comparison: { label: 'Comparison', description: 'Linking word between conditions' }
}

interface HypothesisBuilderLabProps {
  isPresenting?: boolean
}

export default function HypothesisBuilderLab({ isPresenting = false }: HypothesisBuilderLabProps) {
  const [currentChallenge, setCurrentChallenge] = useState(0)
  const [placedParts, setPlacedParts] = useState<string[]>([])
  const [availableParts, setAvailableParts] = useState<HypothesisPart[]>(() => 
    [...challenges[0].parts].sort(() => Math.random() - 0.5)
  )
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [draggedPart, setDraggedPart] = useState<string | null>(null)

  const challenge = challenges[currentChallenge]

  const handleDragStart = (partId: string) => {
    setDraggedPart(partId)
  }

  const handleDragEnd = () => {
    setDraggedPart(null)
  }

  const handleDrop = useCallback(() => {
    if (draggedPart && !placedParts.includes(draggedPart)) {
      setPlacedParts(prev => [...prev, draggedPart])
      setAvailableParts(prev => prev.filter(p => p.id !== draggedPart))
    }
    setDraggedPart(null)
  }, [draggedPart, placedParts])

  const handleRemovePart = (partId: string) => {
    const part = challenge.parts.find(p => p.id === partId)
    if (part) {
      setPlacedParts(prev => prev.filter(id => id !== partId))
      setAvailableParts(prev => [...prev, part])
    }
  }

  const handleClickToPlace = (partId: string) => {
    if (!placedParts.includes(partId)) {
      setPlacedParts(prev => [...prev, partId])
      setAvailableParts(prev => prev.filter(p => p.id !== partId))
    }
  }

  const checkHypothesis = () => {
    const isCorrect = placedParts.length === challenge.correctOrder.length &&
      placedParts.every((part, idx) => part === challenge.correctOrder[idx])
    
    if (isCorrect) {
      setFeedback('correct')
      setShowExplanation(true)
      setScore(prev => prev + 1)
      
      if (currentChallenge === challenges.length - 1) {
        setShowConfetti(true)
        setTimeout(() => {
          setCompleted(true)
        }, 2000)
      }
    } else {
      setFeedback('incorrect')
    }
  }

  const nextChallenge = () => {
    if (currentChallenge < challenges.length - 1) {
      const nextIdx = currentChallenge + 1
      setCurrentChallenge(nextIdx)
      setPlacedParts([])
      setAvailableParts([...challenges[nextIdx].parts].sort(() => Math.random() - 0.5))
      setFeedback(null)
      setShowExplanation(false)
    }
  }

  const resetChallenge = () => {
    setPlacedParts([])
    setAvailableParts([...challenge.parts].sort(() => Math.random() - 0.5))
    setFeedback(null)
    setShowExplanation(false)
  }

  const restartAll = () => {
    setCurrentChallenge(0)
    setPlacedParts([])
    setAvailableParts([...challenges[0].parts].sort(() => Math.random() - 0.5))
    setFeedback(null)
    setShowExplanation(false)
    setScore(0)
    setCompleted(false)
    setShowConfetti(false)
  }

  const getPartById = (id: string) => challenge.parts.find(p => p.id === id)

  if (completed) {
    return (
      <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center`}>
        <div className="text-center animate-fadeIn">
          <div className="relative mb-8">
            <Trophy className="w-24 h-24 text-amber-400 mx-auto animate-bounce" />
            <div className="absolute -top-4 -right-4">
              <Sparkles className="w-8 h-8 text-pink-400 animate-pulse" />
            </div>
            <div className="absolute -bottom-2 -left-4">
              <Sparkles className="w-6 h-6 text-blue-400 animate-pulse" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">🎉 Lab Complete!</h2>
          <p className="text-xl text-gray-300 mb-2">You've mastered hypothesis construction!</p>
          <p className="text-2xl text-amber-400 font-bold mb-8">Score: {score}/{challenges.length}</p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={restartAll}
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-semibold transition-all transform hover:scale-105"
            >
              <RotateCcw className="w-5 h-5" />
              Try Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-6 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 overflow-auto`}>
      {/* Confetti overlay */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-20px',
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              <div 
                className={`w-3 h-3 ${['bg-pink-500', 'bg-purple-500', 'bg-blue-500', 'bg-green-500', 'bg-amber-500'][Math.floor(Math.random() * 5)]}`}
                style={{ transform: `rotate(${Math.random() * 360}deg)` }}
              />
            </div>
          ))}
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="bg-purple-500/20 p-3 rounded-xl">
              <Dna className="w-8 h-8 text-purple-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Hypothesis Builder Laboratory</h2>
              <p className="text-gray-400">Construct hypotheses from component parts</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-gray-800/50 px-4 py-2 rounded-lg">
              <span className="text-gray-400 text-sm">Challenge</span>
              <span className="text-white font-bold ml-2">{currentChallenge + 1}/{challenges.length}</span>
            </div>
            <div className="bg-amber-500/20 px-4 py-2 rounded-lg">
              <span className="text-amber-400 text-sm">Score</span>
              <span className="text-amber-400 font-bold ml-2">{score}</span>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="flex gap-2 mb-6">
          {challenges.map((_, i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded-full transition-all ${
                i < currentChallenge ? 'bg-green-500' :
                i === currentChallenge ? 'bg-purple-500' : 'bg-gray-700'
              }`}
            />
          ))}
        </div>

        {/* Scenario */}
        <div className="bg-gray-800/50 rounded-xl p-5 border border-purple-500/30 mb-6">
          <div className="flex items-start gap-3">
            <Zap className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Research Scenario</h3>
              <p className="text-gray-300">{challenge.scenario}</p>
            </div>
          </div>
        </div>

        {/* Building Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Available Parts */}
          <div className="bg-gray-800/30 rounded-xl p-5 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Available Parts
            </h3>
            <p className="text-gray-400 text-sm mb-4">Click or drag parts to build your hypothesis</p>
            <div className="flex flex-wrap gap-3">
              {availableParts.map((part) => (
                <button
                  key={part.id}
                  draggable
                  onDragStart={() => handleDragStart(part.id)}
                  onDragEnd={handleDragEnd}
                  onClick={() => handleClickToPlace(part.id)}
                  className={`${part.color} px-4 py-2 rounded-lg text-white font-medium cursor-grab active:cursor-grabbing 
                    transition-all hover:scale-105 hover:shadow-lg ${draggedPart === part.id ? 'opacity-50' : ''}`}
                >
                  {part.text}
                </button>
              ))}
              {availableParts.length === 0 && (
                <p className="text-gray-500 italic">All parts placed!</p>
              )}
            </div>
          </div>

          {/* Legend */}
          <div className="bg-gray-800/30 rounded-xl p-5 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Component Guide
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(typeLabels).map(([type, { label, description }]) => {
                const colorClass = 
                  type === 'population' ? 'bg-blue-500' :
                  type.includes('iv') ? 'bg-green-500' :
                  type === 'dv' ? 'bg-purple-500' :
                  type === 'direction' ? 'bg-amber-500' : 'bg-gray-500'
                return (
                  <div key={type} className="flex items-center gap-2">
                    <div className={`w-3 h-3 ${colorClass} rounded`}></div>
                    <div>
                      <span className="text-white text-sm font-medium">{label}</span>
                      <p className="text-gray-500 text-xs">{description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Hypothesis Construction Zone */}
        <div 
          className={`bg-gray-800/50 rounded-xl p-6 border-2 border-dashed transition-all mb-6 ${
            draggedPart ? 'border-purple-500 bg-purple-500/10' : 'border-gray-600'
          }`}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Dna className="w-5 h-5 text-purple-400" />
            Your Hypothesis
          </h3>
          <div className="min-h-[80px] flex flex-wrap items-center gap-2">
            {placedParts.length === 0 ? (
              <p className="text-gray-500 italic">Drop hypothesis parts here to build your hypothesis...</p>
            ) : (
              <>
                {placedParts.map((partId, idx) => {
                  const part = getPartById(partId)
                  if (!part) return null
                  return (
                    <div key={partId} className="flex items-center gap-2">
                      <button
                        onClick={() => handleRemovePart(partId)}
                        className={`${part.color} px-4 py-2 rounded-lg text-white font-medium 
                          hover:opacity-80 transition-all group relative`}
                      >
                        {part.text}
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full 
                          flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <X className="w-3 h-3" />
                        </span>
                      </button>
                      {idx < placedParts.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-gray-500" />
                      )}
                    </div>
                  )
                })}
              </>
            )}
          </div>
        </div>

        {/* Feedback */}
        {feedback && (
          <div className={`rounded-xl p-4 mb-6 animate-fadeIn ${
            feedback === 'correct' ? 'bg-green-500/20 border border-green-500/50' : 'bg-red-500/20 border border-red-500/50'
          }`}>
            <div className="flex items-center gap-3">
              {feedback === 'correct' ? (
                <>
                  <Check className="w-6 h-6 text-green-400" />
                  <span className="text-green-400 font-semibold">Correct! Well constructed hypothesis!</span>
                </>
              ) : (
                <>
                  <X className="w-6 h-6 text-red-400" />
                  <span className="text-red-400 font-semibold">Not quite right. Check the order of components.</span>
                </>
              )}
            </div>
          </div>
        )}

        {/* Explanation */}
        {showExplanation && (
          <div className="bg-purple-500/20 rounded-xl p-5 border border-purple-500/30 mb-6 animate-fadeIn">
            <h4 className="text-purple-400 font-semibold mb-2">Why this works:</h4>
            <p className="text-gray-300">{challenge.explanation}</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={resetChallenge}
            className="flex items-center gap-2 px-5 py-2.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
          {!showExplanation ? (
            <button
              onClick={checkHypothesis}
              disabled={placedParts.length !== challenge.correctOrder.length}
              className="flex items-center gap-2 px-6 py-2.5 bg-purple-600 hover:bg-purple-500 disabled:bg-gray-700 disabled:text-gray-500 text-white rounded-lg font-semibold transition-all"
            >
              <Check className="w-5 h-5" />
              Check Hypothesis
            </button>
          ) : (
            <button
              onClick={nextChallenge}
              className="flex items-center gap-2 px-6 py-2.5 bg-green-600 hover:bg-green-500 text-white rounded-lg font-semibold transition-all"
            >
              Next Challenge
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      <style>{`
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        .animate-confetti {
          animation: confetti linear forwards;
        }
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
