import React, { useState, useMemo, useCallback } from 'react'
import { Users, Repeat, UserCheck, CheckCircle, XCircle, Trophy, Building, Lightbulb, Shuffle, ArrowRight } from 'lucide-react'

interface Scenario {
  id: number
  title: string
  description: string
  correctDesign: 'independent' | 'repeated' | 'matched'
  explanation: string
  hint: string
}

interface Props {
  isPresenting?: boolean
}

const DesignArchitect: React.FC<Props> = ({ isPresenting = false }) => {
  const [currentScenario, setCurrentScenario] = useState(0)
  const [selectedDesign, setSelectedDesign] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState<number[]>([])

  const scenarios: Scenario[] = useMemo(() => [
    {
      id: 1,
      title: "Memory Drug Trial",
      description: "A pharmaceutical company wants to test a new memory-enhancing drug. They recruit 60 participants aged 60-70 with similar memory decline. They want to compare the drug group to a placebo group.",
      correctDesign: 'independent',
      explanation: "Independent groups is best here because: (1) The drug may have lasting effects, making repeated measures unsuitable; (2) Learning effects could occur if the same people do the memory test twice; (3) With 60 participants, there are enough for two separate groups.",
      hint: "Think about what would happen if the same participants did both conditions - could the drug's effects wear off between tests?"
    },
    {
      id: 2,
      title: "Reading Speed Study",
      description: "A researcher wants to see if font type affects reading speed. They will time how fast participants read a passage in Arial vs Times New Roman. There are only 15 participants available.",
      correctDesign: 'repeated',
      explanation: "Repeated measures is best because: (1) The limited sample (15) would be too small if split into groups; (2) Individual differences in reading speed vary hugely - same participants control this; (3) No lasting effects from reading one font that would affect reading the other.",
      hint: "With only 15 participants, how would you get enough data? Would reading in Arial permanently affect reading in Times New Roman?"
    },
    {
      id: 3,
      title: "Twin Aggression Study",
      description: "Psychologists investigate whether violent video games increase aggression. They have access to 20 pairs of identical twins. One twin will play violent games, the other will play non-violent games, then both take an aggression test.",
      correctDesign: 'matched',
      explanation: "Matched pairs is perfect here because: (1) Identical twins share genetics and upbringing, controlling major participant variables; (2) Exposure to violent games may have lasting effects, so repeated measures would be problematic; (3) Natural pairs already exist - no artificial matching needed.",
      hint: "What's special about identical twins that makes them ideal for comparing two different conditions?"
    },
    {
      id: 4,
      title: "Caffeine & Reaction Time",
      description: "A sports scientist tests whether caffeine improves reaction time. She has 30 athletes and wants to test each athlete's reaction time after consuming caffeine vs a placebo (one week apart to allow caffeine to clear).",
      correctDesign: 'repeated',
      explanation: "Repeated measures is ideal because: (1) One week is enough time for caffeine to leave the system, avoiding carry-over effects; (2) Individual differences in baseline reaction time are controlled; (3) Fewer participants needed for the same statistical power.",
      hint: "If caffeine wears off after a few days, can the same person safely do both conditions?"
    },
    {
      id: 5,
      title: "Teaching Method Comparison",
      description: "A school wants to compare traditional teaching vs computer-based learning for GCSE maths. They have 200 students across 8 classes. They'll measure exam performance at the end of the year.",
      correctDesign: 'independent',
      explanation: "Independent groups is necessary because: (1) You can't teach the same content twice in different ways - massive learning effects; (2) A whole year of teaching can't be undone; (3) With 200 students, there are plenty for two groups; (4) Practical constraints - classes can't switch teaching method halfway.",
      hint: "Could students 'unlearn' a whole year of maths to try the other teaching method?"
    },
    {
      id: 6,
      title: "IQ and Puzzle Performance",
      description: "A researcher matches participants by IQ score, then assigns one from each pair to solve puzzles with background music and one to solve puzzles in silence.",
      correctDesign: 'matched',
      explanation: "Matched pairs is used here because: (1) IQ strongly affects puzzle performance - controlling this removes a major confound; (2) Participants can only solve each puzzle once (learning effects); (3) The matching on IQ ensures groups are equivalent on this key variable.",
      hint: "The researcher has already matched participants on something important. What design does this describe?"
    }
  ], [])

  const designs = useMemo(() => [
    {
      id: 'independent',
      name: 'Independent Groups',
      icon: Users,
      color: 'bg-blue-600',
      description: 'Different participants in each condition'
    },
    {
      id: 'repeated',
      name: 'Repeated Measures',
      icon: Repeat,
      color: 'bg-green-600',
      description: 'Same participants do all conditions'
    },
    {
      id: 'matched',
      name: 'Matched Pairs',
      icon: UserCheck,
      color: 'bg-purple-600',
      description: 'Participants paired on key variables'
    }
  ], [])

  const handleSelectDesign = useCallback((designId: string) => {
    if (showFeedback) return
    setSelectedDesign(designId)
    setShowFeedback(true)
    setShowHint(false)
    
    const scenario = scenarios[currentScenario]
    if (designId === scenario.correctDesign) {
      setScore(prev => prev + 1)
      setCompleted(prev => [...prev, scenario.id])
    }
  }, [showFeedback, scenarios, currentScenario])

  const handleNext = useCallback(() => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(prev => prev + 1)
      setSelectedDesign(null)
      setShowFeedback(false)
      setShowHint(false)
    }
  }, [currentScenario, scenarios.length])

  const handleRestart = useCallback(() => {
    setCurrentScenario(0)
    setSelectedDesign(null)
    setShowFeedback(false)
    setShowHint(false)
    setScore(0)
    setCompleted([])
  }, [])

  const scenario = scenarios[currentScenario]
  const isCorrect = selectedDesign === scenario.correctDesign
  const isComplete = currentScenario === scenarios.length - 1 && showFeedback

  const getArchitectRank = useCallback(() => {
    const percentage = (score / scenarios.length) * 100
    if (percentage === 100) return { rank: "Master Architect", emoji: "🏛️" }
    if (percentage >= 80) return { rank: "Senior Designer", emoji: "📐" }
    if (percentage >= 60) return { rank: "Design Associate", emoji: "✏️" }
    if (percentage >= 40) return { rank: "Junior Architect", emoji: "📋" }
    return { rank: "Apprentice", emoji: "🔨" }
  }, [score, scenarios.length])

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Building className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Design Architect</h2>
              <p className="text-blue-300 text-sm">Match the research design to the scenario</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
              <span className="text-slate-400 text-sm">Score: </span>
              <span className="text-white font-bold">{score}/{scenarios.length}</span>
            </div>
            <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
              <span className="text-slate-400 text-sm">Blueprint: </span>
              <span className="text-white font-bold">{currentScenario + 1}/{scenarios.length}</span>
            </div>
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-6">
          {scenarios.map((s, i) => (
            <div
              key={s.id}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentScenario 
                  ? 'bg-blue-400 scale-125' 
                  : completed.includes(s.id)
                    ? 'bg-green-500'
                    : i < currentScenario
                      ? 'bg-red-500'
                      : 'bg-slate-600'
              }`}
            />
          ))}
        </div>

        {isComplete ? (
          /* Final Results */
          <div className="bg-slate-800/50 rounded-2xl border border-blue-500/30 p-8 text-center">
            <div className="text-6xl mb-4">{getArchitectRank().emoji}</div>
            <h3 className="text-3xl font-bold text-white mb-2">Blueprint Complete!</h3>
            <p className="text-xl text-blue-300 mb-4">Rank: {getArchitectRank().rank}</p>
            <div className="text-4xl font-bold text-white mb-6">
              {score}/{scenarios.length} Designs Correct
            </div>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {designs.map(design => {
                const correctCount = scenarios.filter(s => s.correctDesign === design.id && completed.includes(s.id)).length
                const totalOfType = scenarios.filter(s => s.correctDesign === design.id).length
                return (
                  <div key={design.id} className="bg-slate-700/50 rounded-lg p-4">
                    <design.icon className="w-8 h-8 mx-auto mb-2 text-slate-300" />
                    <p className="text-sm text-slate-400">{design.name}</p>
                    <p className="text-white font-bold">{correctCount}/{totalOfType}</p>
                  </div>
                )
              })}
            </div>
            <button
              onClick={handleRestart}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors"
            >
              Design Again 🔄
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {/* Scenario Card */}
            <div className="col-span-2 bg-slate-800/50 rounded-xl border border-slate-700 p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium">
                  Blueprint #{scenario.id}
                </span>
                <h3 className="text-xl font-bold text-white">{scenario.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">{scenario.description}</p>
              
              {!showHint && !showFeedback && (
                <button
                  onClick={() => setShowHint(true)}
                  className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <Lightbulb className="w-4 h-4" />
                  <span className="text-sm">Need a hint?</span>
                </button>
              )}
              
              {showHint && !showFeedback && (
                <div className="p-3 bg-amber-900/30 border border-amber-500/30 rounded-lg">
                  <p className="text-amber-300 text-sm"><strong>💡 Hint:</strong> {scenario.hint}</p>
                </div>
              )}

              {showFeedback && (
                <div className={`p-4 rounded-lg border ${
                  isCorrect 
                    ? 'bg-green-900/30 border-green-500/50' 
                    : 'bg-red-900/30 border-red-500/50'
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    {isCorrect ? (
                      <>
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-green-400 font-bold">Excellent Architecture!</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 text-red-400" />
                        <span className="text-red-400 font-bold">Design Flaw Detected</span>
                      </>
                    )}
                  </div>
                  <p className="text-gray-300 text-sm">{scenario.explanation}</p>
                </div>
              )}
            </div>

            {/* Design Options */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white mb-2">Select Design:</h4>
              {designs.map(design => {
                const isSelected = selectedDesign === design.id
                const isAnswer = showFeedback && design.id === scenario.correctDesign
                
                return (
                  <button
                    key={design.id}
                    onClick={() => handleSelectDesign(design.id)}
                    disabled={showFeedback}
                    className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                      isAnswer
                        ? 'border-green-500 bg-green-900/30'
                        : isSelected && !isCorrect
                          ? 'border-red-500 bg-red-900/30'
                          : isSelected
                            ? 'border-blue-500 bg-blue-900/30'
                            : 'border-slate-600 bg-slate-800/50 hover:border-slate-500 hover:bg-slate-700/50'
                    } ${showFeedback ? 'cursor-default' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${design.color}`}>
                        <design.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-white">{design.name}</p>
                        <p className="text-sm text-slate-400">{design.description}</p>
                      </div>
                    </div>
                  </button>
                )
              })}

              {showFeedback && currentScenario < scenarios.length - 1 && (
                <button
                  onClick={handleNext}
                  className="w-full mt-4 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  Next Blueprint <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Key at bottom */}
        <div className="mt-6 p-4 bg-slate-800/30 rounded-lg border border-slate-700">
          <div className="flex justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-slate-300"><strong>IG:</strong> Different people, each condition</span>
            </div>
            <div className="flex items-center gap-2">
              <Repeat className="w-4 h-4 text-green-400" />
              <span className="text-slate-300"><strong>RM:</strong> Same people, all conditions</span>
            </div>
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-purple-400" />
              <span className="text-slate-300"><strong>MP:</strong> Paired on key variables</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesignArchitect
