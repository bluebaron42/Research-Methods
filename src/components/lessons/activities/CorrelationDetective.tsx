import { useState, useMemo } from 'react'
import { Search, TrendingUp, TrendingDown, Minus, AlertTriangle, Check, X, RotateCcw, Trophy, Lightbulb, ArrowRight } from 'lucide-react'

interface CorrelationCase {
  id: number
  title: string
  variable1: string
  variable2: string
  correlationType: 'positive' | 'negative' | 'none'
  thirdVariable: string
  explanation: string
  realWorld: string
  dataPoints: { x: number; y: number }[]
}

const correlationCases: CorrelationCase[] = [
  {
    id: 1,
    title: "Ice Cream & Drowning",
    variable1: "Ice cream sales",
    variable2: "Drowning deaths",
    correlationType: 'positive',
    thirdVariable: "Hot weather / Summer temperature",
    explanation: "Both ice cream sales and drowning deaths increase in summer because of hot weather. The heat makes people buy more ice cream AND go swimming more often, increasing drowning risk.",
    realWorld: "This is a classic example used to teach that correlation ≠ causation. Ice cream doesn't cause drowning!",
    dataPoints: [
      { x: 10, y: 5 }, { x: 15, y: 8 }, { x: 25, y: 15 }, { x: 30, y: 18 },
      { x: 40, y: 25 }, { x: 50, y: 30 }, { x: 55, y: 35 }, { x: 60, y: 38 },
      { x: 70, y: 42 }, { x: 80, y: 50 }
    ]
  },
  {
    id: 2,
    title: "Shoe Size & Reading Ability",
    variable1: "Shoe size",
    variable2: "Reading ability (score)",
    correlationType: 'positive',
    thirdVariable: "Age",
    explanation: "As children get older, their feet grow AND their reading improves. Age is the third variable causing both to increase together.",
    realWorld: "This shows why you can't conclude that buying bigger shoes will help children read better!",
    dataPoints: [
      { x: 8, y: 10 }, { x: 10, y: 20 }, { x: 12, y: 30 }, { x: 14, y: 45 },
      { x: 16, y: 55 }, { x: 18, y: 65 }, { x: 20, y: 72 }, { x: 22, y: 78 },
      { x: 24, y: 85 }, { x: 26, y: 90 }
    ]
  },
  {
    id: 3,
    title: "Fire Truck Count & Fire Damage",
    variable1: "Number of fire trucks at scene",
    variable2: "Amount of fire damage (£)",
    correlationType: 'positive',
    thirdVariable: "Size / Severity of fire",
    explanation: "Larger fires cause more damage AND require more fire trucks. The fire severity is the third variable linking both.",
    realWorld: "This doesn't mean fire trucks cause damage - more trucks are sent to bigger fires!",
    dataPoints: [
      { x: 1, y: 5 }, { x: 1, y: 8 }, { x: 2, y: 15 }, { x: 2, y: 20 },
      { x: 3, y: 35 }, { x: 4, y: 45 }, { x: 4, y: 55 }, { x: 5, y: 70 },
      { x: 6, y: 80 }, { x: 7, y: 95 }
    ]
  },
  {
    id: 4,
    title: "Happiness & Income",
    variable1: "Annual income (£)",
    variable2: "Self-reported happiness",
    correlationType: 'positive',
    thirdVariable: "Education level / Job satisfaction / Financial security",
    explanation: "Multiple third variables could explain this: education leads to both higher income AND job satisfaction; financial security reduces stress; meaningful work provides both income and purpose.",
    realWorld: "The relationship between money and happiness is complex - research shows income increases happiness but only up to a point (~£50,000).",
    dataPoints: [
      { x: 15, y: 40 }, { x: 20, y: 50 }, { x: 30, y: 55 }, { x: 35, y: 60 },
      { x: 45, y: 68 }, { x: 55, y: 72 }, { x: 65, y: 74 }, { x: 75, y: 76 },
      { x: 90, y: 78 }, { x: 100, y: 79 }
    ]
  },
  {
    id: 5,
    title: "Video Games & Violence",
    variable1: "Hours playing violent video games",
    variable2: "Aggressive behaviour score",
    correlationType: 'positive',
    thirdVariable: "Pre-existing aggression / Family environment / Personality traits",
    explanation: "People who are already more aggressive may be drawn to violent games. Family factors like parenting style affect both game choices AND aggression levels.",
    realWorld: "This is a hotly debated topic! Research is mixed, and causation cannot be established from correlation alone.",
    dataPoints: [
      { x: 0, y: 15 }, { x: 5, y: 20 }, { x: 10, y: 28 }, { x: 15, y: 35 },
      { x: 20, y: 40 }, { x: 25, y: 48 }, { x: 30, y: 52 }, { x: 35, y: 60 },
      { x: 40, y: 65 }, { x: 45, y: 70 }
    ]
  }
]

const thirdVariableOptions = [
  "Age",
  "Hot weather / Summer temperature",
  "Size / Severity of fire",
  "Education level / Job satisfaction / Financial security",
  "Pre-existing aggression / Family environment / Personality traits",
  "Amount of sleep",
  "Social media use",
  "Genetic factors"
]

interface CorrelationDetectiveProps {
  isPresenting?: boolean
}

export default function CorrelationDetective({ isPresenting = false }: CorrelationDetectiveProps) {
  const [currentCase, setCurrentCase] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)

  const caseData = correlationCases[currentCase]
  
  // Shuffle options for current case
  const shuffledOptions = useMemo(() => {
    const correct = caseData.thirdVariable
    const incorrect = thirdVariableOptions.filter(o => o !== correct).sort(() => Math.random() - 0.5).slice(0, 3)
    return [...incorrect, correct].sort(() => Math.random() - 0.5)
  }, [currentCase])

  const handleSubmit = () => {
    if (!selectedAnswer) return
    setShowFeedback(true)
    if (selectedAnswer === caseData.thirdVariable) {
      setScore(prev => prev + 1)
    }
  }

  const nextCase = () => {
    if (currentCase < correlationCases.length - 1) {
      setCurrentCase(prev => prev + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    } else {
      setCompleted(true)
    }
  }

  const restartGame = () => {
    setCurrentCase(0)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setScore(0)
    setCompleted(false)
  }

  // Calculate correlation coefficient for display
  const calculateR = (points: { x: number; y: number }[]) => {
    const n = points.length
    const sumX = points.reduce((acc, p) => acc + p.x, 0)
    const sumY = points.reduce((acc, p) => acc + p.y, 0)
    const sumXY = points.reduce((acc, p) => acc + p.x * p.y, 0)
    const sumX2 = points.reduce((acc, p) => acc + p.x * p.x, 0)
    const sumY2 = points.reduce((acc, p) => acc + p.y * p.y, 0)
    
    const numerator = n * sumXY - sumX * sumY
    const denominator = Math.sqrt((n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY))
    
    return denominator === 0 ? 0 : (numerator / denominator).toFixed(2)
  }

  // Scale data points for SVG
  const scalePoints = (points: { x: number; y: number }[]) => {
    const maxX = Math.max(...points.map(p => p.x))
    const maxY = Math.max(...points.map(p => p.y))
    return points.map(p => ({
      x: (p.x / maxX) * 280 + 30,
      y: 270 - (p.y / maxY) * 250
    }))
  }

  const scaledPoints = scalePoints(caseData.dataPoints)
  const r = calculateR(caseData.dataPoints)

  if (completed) {
    return (
      <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-indigo-900/20 to-gray-900 flex items-center justify-center`}>
        <div className="text-center animate-fadeIn max-w-lg">
          <Trophy className="w-20 h-20 text-amber-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Investigation Complete!</h2>
          <p className="text-xl text-indigo-400 font-semibold mb-2">
            You correctly identified {score}/{correlationCases.length} third variables
          </p>
          <p className="text-gray-300 mb-6">
            You now understand why correlation does not equal causation!
          </p>
          <div className="bg-gray-800/50 rounded-xl p-4 mb-6 text-left">
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-400" />
              Key Learning
            </h4>
            <p className="text-gray-300 text-sm">
              Just because two variables are correlated doesn't mean one causes the other. 
              There may be a <span className="text-indigo-400 font-semibold">third variable</span> (also called a 
              confounding variable or lurking variable) that influences both.
            </p>
          </div>
          <button
            onClick={restartGame}
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all mx-auto"
          >
            <RotateCcw className="w-5 h-5" />
            Play Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-4 bg-gradient-to-br from-gray-900 via-indigo-900/20 to-gray-900 overflow-auto`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-500/20 p-2 rounded-xl">
              <Search className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Correlation Detective</h2>
              <p className="text-gray-400 text-sm">Hunt the Third Variable</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-gray-800/50 px-4 py-2 rounded-lg">
              <span className="text-gray-400 text-sm">Case</span>
              <span className="text-white font-bold ml-2">{currentCase + 1}/{correlationCases.length}</span>
            </div>
            <div className="bg-amber-500/20 px-4 py-2 rounded-lg">
              <span className="text-amber-400 text-sm">Score</span>
              <span className="text-amber-400 font-bold ml-2">{score}</span>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="flex gap-2 mb-4">
          {correlationCases.map((_, i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded-full transition-all ${
                i < currentCase ? 'bg-green-500' :
                i === currentCase ? 'bg-indigo-500' : 'bg-gray-700'
              }`}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Scatterplot */}
          <div className="bg-gray-800/50 rounded-xl p-4 border border-indigo-500/30">
            <h3 className="text-lg font-bold text-white mb-2">{caseData.title}</h3>
            <div className="flex items-center gap-2 mb-3">
              {caseData.correlationType === 'positive' ? (
                <TrendingUp className="w-5 h-5 text-green-400" />
              ) : caseData.correlationType === 'negative' ? (
                <TrendingDown className="w-5 h-5 text-red-400" />
              ) : (
                <Minus className="w-5 h-5 text-gray-400" />
              )}
              <span className={`text-sm font-semibold ${
                caseData.correlationType === 'positive' ? 'text-green-400' :
                caseData.correlationType === 'negative' ? 'text-red-400' : 'text-gray-400'
              }`}>
                {caseData.correlationType === 'positive' ? 'Positive' : 
                 caseData.correlationType === 'negative' ? 'Negative' : 'No'} Correlation (r = {r})
              </span>
            </div>
            
            {/* SVG Scatterplot */}
            <svg viewBox="0 0 320 300" className="w-full h-auto bg-gray-900/50 rounded-lg">
              {/* Axes */}
              <line x1="30" y1="270" x2="310" y2="270" stroke="#4B5563" strokeWidth="2" />
              <line x1="30" y1="270" x2="30" y2="20" stroke="#4B5563" strokeWidth="2" />
              
              {/* Axis labels */}
              <text x="170" y="295" fill="#9CA3AF" fontSize="12" textAnchor="middle">{caseData.variable1}</text>
              <text x="15" y="150" fill="#9CA3AF" fontSize="12" textAnchor="middle" transform="rotate(-90, 15, 150)">{caseData.variable2}</text>
              
              {/* Trend line */}
              {caseData.correlationType !== 'none' && (
                <line 
                  x1={scaledPoints[0].x} 
                  y1={caseData.correlationType === 'positive' ? 250 : 40}
                  x2={scaledPoints[scaledPoints.length - 1].x}
                  y2={caseData.correlationType === 'positive' ? 40 : 250}
                  stroke={caseData.correlationType === 'positive' ? '#22C55E' : '#EF4444'}
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.5"
                />
              )}
              
              {/* Data points */}
              {scaledPoints.map((point, i) => (
                <circle
                  key={i}
                  cx={point.x}
                  cy={point.y}
                  r="8"
                  fill="#818CF8"
                  className="animate-fadeIn"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </svg>
          </div>

          {/* Investigation Panel */}
          <div className="space-y-4">
            {/* The Challenge */}
            <div className="bg-indigo-500/20 rounded-xl p-4 border border-indigo-500/30">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">The Mystery</h4>
                  <p className="text-gray-300 text-sm">
                    As <span className="text-indigo-400">{caseData.variable1}</span> increases, 
                    so does <span className="text-indigo-400">{caseData.variable2}</span>.
                    But does one CAUSE the other?
                  </p>
                </div>
              </div>
            </div>

            {/* Answer options */}
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
              <h4 className="text-white font-semibold mb-3">What's the lurking third variable?</h4>
              <div className="space-y-2">
                {shuffledOptions.map((option, idx) => {
                  const isCorrect = option === caseData.thirdVariable
                  const isSelected = selectedAnswer === option
                  
                  return (
                    <button
                      key={idx}
                      onClick={() => !showFeedback && setSelectedAnswer(option)}
                      disabled={showFeedback}
                      className={`w-full p-3 rounded-lg text-left transition-all ${
                        showFeedback 
                          ? isCorrect 
                            ? 'bg-green-500/30 border-2 border-green-500' 
                            : isSelected 
                              ? 'bg-red-500/30 border-2 border-red-500'
                              : 'bg-gray-700/50 border border-gray-600 opacity-50'
                          : isSelected
                            ? 'bg-indigo-500/30 border-2 border-indigo-500'
                            : 'bg-gray-700/50 border border-gray-600 hover:border-gray-500'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-gray-200 text-sm">{option}</span>
                        {showFeedback && isCorrect && <Check className="w-5 h-5 text-green-400" />}
                        {showFeedback && isSelected && !isCorrect && <X className="w-5 h-5 text-red-400" />}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Feedback */}
            {showFeedback && (
              <div className={`rounded-xl p-4 border animate-fadeIn ${
                selectedAnswer === caseData.thirdVariable 
                  ? 'bg-green-500/20 border-green-500/50' 
                  : 'bg-amber-500/20 border-amber-500/50'
              }`}>
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      {selectedAnswer === caseData.thirdVariable ? 'Correct!' : 'Not quite...'}
                    </h4>
                    <p className="text-gray-300 text-sm mb-2">{caseData.explanation}</p>
                    <p className="text-gray-400 text-xs italic">{caseData.realWorld}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3">
              {!showFeedback ? (
                <button
                  onClick={handleSubmit}
                  disabled={!selectedAnswer}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-700 disabled:text-gray-500 text-white rounded-lg font-semibold transition-all"
                >
                  <Check className="w-5 h-5" />
                  Submit Answer
                </button>
              ) : (
                <button
                  onClick={nextCase}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-green-600 hover:bg-green-500 text-white rounded-lg font-semibold transition-all"
                >
                  {currentCase < correlationCases.length - 1 ? 'Next Case' : 'View Results'}
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Key reminder */}
        <div className="mt-4 bg-gray-800/30 rounded-xl p-3 border border-gray-700">
          <p className="text-gray-400 text-sm text-center">
            <span className="text-amber-400 font-semibold">Remember:</span> Correlation ≠ Causation. 
            A third variable (confounding variable) may explain why two things are related without one causing the other.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
