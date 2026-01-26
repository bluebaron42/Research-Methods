import React, { useState, useMemo, useCallback } from 'react'
import { FlaskConical, Building2, Trees, Users, CheckCircle, XCircle, Trophy, ArrowRight, Lightbulb, Beaker, Factory, Leaf } from 'lucide-react'

interface Scenario {
  id: number
  title: string
  description: string
  correctType: 'lab' | 'field' | 'natural' | 'quasi'
  explanation: string
  keyFeatures: string[]
}

interface Props {
  isPresenting?: boolean
}

const ExperimentTypeSorter: React.FC<Props> = ({ isPresenting = false }) => {
  const [currentScenario, setCurrentScenario] = useState(0)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState<number[]>([])

  const scenarios: Scenario[] = useMemo(() => [
    {
      id: 1,
      title: "Memory Test in a University",
      description: "Participants are brought into a university testing room. The researcher controls the lighting, temperature, and noise levels. Half the participants are shown images with colour, half see black-and-white versions. Their recall is tested after 10 minutes.",
      correctType: 'lab',
      explanation: "This is a LABORATORY experiment because it takes place in a controlled artificial environment (university lab) where the researcher manipulates the IV (colour vs B&W images) and controls extraneous variables (lighting, temperature, noise).",
      keyFeatures: ["Artificial/controlled setting", "Researcher manipulates IV", "High control over EVs"]
    },
    {
      id: 2,
      title: "Helpfulness in a Shopping Centre",
      description: "A researcher wants to study helping behaviour. They have confederates 'accidentally' drop shopping bags in a busy shopping centre. Half the time the confederate is dressed smartly, half the time casually. The researcher records how many passers-by stop to help.",
      correctType: 'field',
      explanation: "This is a FIELD experiment because it takes place in a natural everyday setting (shopping centre) where participants don't know they're being studied. The researcher still manipulates the IV (smart vs casual dress) but in a real-world environment.",
      keyFeatures: ["Natural setting", "Researcher manipulates IV", "Participants unaware"]
    },
    {
      id: 3,
      title: "Effects of a Factory Closure",
      description: "A town's main factory closes down. Psychologists study stress levels and mental health in residents before and after the closure, comparing them to a similar town where the factory stayed open.",
      correctType: 'natural',
      explanation: "This is a NATURAL experiment because the IV (factory closure) is a naturally occurring event that the researcher cannot manipulate or control. The researcher simply measures the effects of something that happened naturally.",
      keyFeatures: ["Naturally occurring IV", "Researcher cannot manipulate IV", "Studies real-world events"]
    },
    {
      id: 4,
      title: "Gender and Risk-Taking",
      description: "A psychologist studies whether males take more risks than females. 100 participants (50 male, 50 female) complete a computer task measuring risky decision-making in a psychology lab.",
      correctType: 'quasi',
      explanation: "This is a QUASI-experiment because the IV (gender) is a pre-existing characteristic of participants that cannot be manipulated or randomly allocated. You cannot randomly assign someone to be male or female.",
      keyFeatures: ["Pre-existing participant characteristic as IV", "Cannot manipulate IV", "Cannot randomly allocate"]
    },
    {
      id: 5,
      title: "Obedience Study",
      description: "Participants arrive at a research facility and are told they're testing a 'learning machine'. They're instructed to administer increasing electric shocks (actually fake) when a confederate gives wrong answers. Cameras record their behaviour.",
      correctType: 'lab',
      explanation: "This is a LABORATORY experiment (like Milgram's study) because it takes place in a controlled research facility where the researcher manipulates the situation and controls all aspects of the environment, despite studying a real psychological phenomenon.",
      keyFeatures: ["Controlled artificial setting", "Researcher creates the situation", "High experimental control"]
    },
    {
      id: 6,
      title: "Train Station Queue Study",
      description: "Researchers observe commuters at a train station. They have confederates deliberately push into queues during rush hour vs quiet periods. Hidden observers record people's reactions.",
      correctType: 'field',
      explanation: "This is a FIELD experiment because it takes place in a real-world setting (train station) where the researcher manipulates the IV (confederate queue-jumping) but participants are in their natural environment and unaware of the study.",
      keyFeatures: ["Real-world natural setting", "IV is manipulated", "Natural behaviour observed"]
    },
    {
      id: 7,
      title: "Romanian Orphan Study",
      description: "Researchers study children adopted from Romanian orphanages after the fall of communism. They compare the cognitive development of children adopted before age 2 vs after age 2.",
      correctType: 'natural',
      explanation: "This is a NATURAL experiment because the IV (time spent in institutional care/age at adoption) was determined by historical circumstances, not the researchers. The fall of communism and adoptions were naturally occurring events.",
      keyFeatures: ["Historical/naturally occurring IV", "Researcher studies existing situation", "No manipulation possible"]
    },
    {
      id: 8,
      title: "Age and Driving Ability",
      description: "A researcher tests reaction time on a driving simulator across three age groups: 18-25, 40-50, and 65+. All testing occurs in the same laboratory conditions.",
      correctType: 'quasi',
      explanation: "This is a QUASI-experiment because the IV (age group) is a pre-existing characteristic. Participants cannot be randomly allocated to age groups - they already belong to them. Despite the controlled lab setting, the key variable is a participant characteristic.",
      keyFeatures: ["Pre-existing characteristic as IV", "No random allocation possible", "Comparing existing groups"]
    }
  ], [])

  const experimentTypes = useMemo(() => [
    {
      id: 'lab',
      name: 'Laboratory',
      icon: FlaskConical,
      color: 'bg-blue-600',
      shortDesc: 'Controlled artificial setting'
    },
    {
      id: 'field',
      name: 'Field',
      icon: Trees,
      color: 'bg-green-600',
      shortDesc: 'Natural setting, IV manipulated'
    },
    {
      id: 'natural',
      name: 'Natural',
      icon: Leaf,
      color: 'bg-amber-600',
      shortDesc: 'Naturally occurring IV'
    },
    {
      id: 'quasi',
      name: 'Quasi',
      icon: Users,
      color: 'bg-purple-600',
      shortDesc: 'Pre-existing participant IV'
    }
  ], [])

  const handleSelectType = useCallback((typeId: string) => {
    if (showFeedback) return
    setSelectedType(typeId)
    setShowFeedback(true)
    
    const scenario = scenarios[currentScenario]
    if (typeId === scenario.correctType) {
      setScore(prev => prev + 1)
      setCompleted(prev => [...prev, scenario.id])
    }
  }, [showFeedback, scenarios, currentScenario])

  const handleNext = useCallback(() => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(prev => prev + 1)
      setSelectedType(null)
      setShowFeedback(false)
    }
  }, [currentScenario, scenarios.length])

  const handleRestart = useCallback(() => {
    setCurrentScenario(0)
    setSelectedType(null)
    setShowFeedback(false)
    setScore(0)
    setCompleted([])
  }, [])

  const scenario = scenarios[currentScenario]
  const isCorrect = selectedType === scenario.correctType
  const isComplete = currentScenario === scenarios.length - 1 && showFeedback

  const getExpertRank = useCallback(() => {
    const percentage = (score / scenarios.length) * 100
    if (percentage === 100) return { rank: "Research Director", emoji: "🎓" }
    if (percentage >= 75) return { rank: "Senior Researcher", emoji: "🔬" }
    if (percentage >= 50) return { rank: "Research Associate", emoji: "📊" }
    if (percentage >= 25) return { rank: "Lab Assistant", emoji: "🧪" }
    return { rank: "Trainee", emoji: "📚" }
  }, [score, scenarios.length])

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-6 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-500/20 rounded-lg">
              <Beaker className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Experiment Type Sorter</h2>
              <p className="text-indigo-300 text-sm">Classify each study correctly</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
              <span className="text-slate-400 text-sm">Score: </span>
              <span className="text-white font-bold">{score}/{scenarios.length}</span>
            </div>
            <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
              <span className="text-slate-400 text-sm">Study: </span>
              <span className="text-white font-bold">{currentScenario + 1}/{scenarios.length}</span>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="flex gap-1 mb-6">
          {scenarios.map((s, i) => (
            <div
              key={s.id}
              className={`h-2 flex-1 rounded-full transition-all ${
                i === currentScenario 
                  ? 'bg-indigo-400' 
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
          <div className="bg-slate-800/50 rounded-2xl border border-indigo-500/30 p-8 text-center">
            <div className="text-6xl mb-4">{getExpertRank().emoji}</div>
            <h3 className="text-3xl font-bold text-white mb-2">Sorting Complete!</h3>
            <p className="text-xl text-indigo-300 mb-4">Rank: {getExpertRank().rank}</p>
            <div className="text-4xl font-bold text-white mb-6">
              {score}/{scenarios.length} Correctly Classified
            </div>
            <div className="grid grid-cols-4 gap-4 mb-6">
              {experimentTypes.map(type => {
                const correctCount = scenarios.filter(s => s.correctType === type.id && completed.includes(s.id)).length
                const totalOfType = scenarios.filter(s => s.correctType === type.id).length
                return (
                  <div key={type.id} className="bg-slate-700/50 rounded-lg p-4">
                    <type.icon className="w-8 h-8 mx-auto mb-2 text-slate-300" />
                    <p className="text-sm text-slate-400">{type.name}</p>
                    <p className="text-white font-bold">{correctCount}/{totalOfType}</p>
                  </div>
                )
              })}
            </div>
            <button
              onClick={handleRestart}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-colors"
            >
              Sort Again 🔄
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Scenario Card */}
            <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm font-medium">
                  Study #{scenario.id}
                </span>
                <h3 className="text-xl font-bold text-white">{scenario.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">{scenario.description}</p>
            </div>

            {/* Type Selection Grid */}
            <div className="grid grid-cols-4 gap-4">
              {experimentTypes.map(type => {
                const isSelected = selectedType === type.id
                const isAnswer = showFeedback && type.id === scenario.correctType
                const isWrong = showFeedback && isSelected && !isCorrect
                
                return (
                  <button
                    key={type.id}
                    onClick={() => handleSelectType(type.id)}
                    disabled={showFeedback}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      isAnswer
                        ? 'border-green-500 bg-green-900/30 scale-105'
                        : isWrong
                          ? 'border-red-500 bg-red-900/30'
                          : isSelected
                            ? 'border-indigo-500 bg-indigo-900/30'
                            : 'border-slate-600 bg-slate-800/50 hover:border-slate-500 hover:bg-slate-700/50'
                    } ${showFeedback ? 'cursor-default' : 'cursor-pointer'}`}
                  >
                    <div className={`p-3 rounded-lg ${type.color} w-fit mx-auto mb-3`}>
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-bold text-white text-lg">{type.name}</p>
                    <p className="text-sm text-slate-400">{type.shortDesc}</p>
                  </button>
                )
              })}
            </div>

            {/* Feedback */}
            {showFeedback && (
              <div className={`p-5 rounded-xl border ${
                isCorrect 
                  ? 'bg-green-900/30 border-green-500/50' 
                  : 'bg-red-900/30 border-red-500/50'
              }`}>
                <div className="flex items-center gap-2 mb-3">
                  {isCorrect ? (
                    <>
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      <span className="text-green-400 font-bold text-lg">Correct Classification!</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-6 h-6 text-red-400" />
                      <span className="text-red-400 font-bold text-lg">Not Quite Right</span>
                    </>
                  )}
                </div>
                <p className="text-gray-300 mb-3">{scenario.explanation}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm text-slate-400">Key features:</span>
                  {scenario.keyFeatures.map((feature, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-700 rounded text-sm text-slate-300">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Next Button */}
            {showFeedback && currentScenario < scenarios.length - 1 && (
              <div className="flex justify-center">
                <button
                  onClick={handleNext}
                  className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-colors flex items-center gap-2"
                >
                  Next Study <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Quick Reference */}
        <div className="mt-6 p-4 bg-slate-800/30 rounded-lg border border-slate-700">
          <div className="grid grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <FlaskConical className="w-4 h-4 mx-auto text-blue-400 mb-1" />
              <span className="text-slate-300"><strong>Lab:</strong> Artificial setting, IV manipulated</span>
            </div>
            <div className="text-center">
              <Trees className="w-4 h-4 mx-auto text-green-400 mb-1" />
              <span className="text-slate-300"><strong>Field:</strong> Natural setting, IV manipulated</span>
            </div>
            <div className="text-center">
              <Leaf className="w-4 h-4 mx-auto text-amber-400 mb-1" />
              <span className="text-slate-300"><strong>Natural:</strong> IV occurs naturally</span>
            </div>
            <div className="text-center">
              <Users className="w-4 h-4 mx-auto text-purple-400 mb-1" />
              <span className="text-slate-300"><strong>Quasi:</strong> IV is participant characteristic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperimentTypeSorter
