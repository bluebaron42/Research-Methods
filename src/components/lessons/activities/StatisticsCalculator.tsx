import React, { useState, useMemo, useCallback } from 'react'
import { Calculator, CheckCircle, XCircle, ArrowRight, BarChart2, TrendingUp, MinusCircle } from 'lucide-react'

interface Dataset {
  id: number
  title: string
  context: string
  data: number[]
  questions: {
    type: 'mean' | 'median' | 'mode' | 'range'
    answer: number | string
  }[]
}

interface Props {
  isPresenting?: boolean
}

const StatisticsCalculator: React.FC<Props> = ({ isPresenting = false }) => {
  const [currentDataset, setCurrentDataset] = useState(0)
  const [answers, setAnswers] = useState<{ [key: string]: string }>({})
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [totalQuestions, setTotalQuestions] = useState(0)

  const datasets: Dataset[] = useMemo(() => [
    {
      id: 1,
      title: "Memory Test Scores",
      context: "10 participants completed a word recall test. Their scores (words remembered):",
      data: [12, 15, 18, 15, 20, 15, 14, 16, 15, 10],
      questions: [
        { type: 'mean', answer: 15 },
        { type: 'median', answer: 15 },
        { type: 'mode', answer: 15 },
        { type: 'range', answer: 10 }
      ]
    },
    {
      id: 2,
      title: "Reaction Times (ms)",
      context: "Response times from a cognitive task (in milliseconds):",
      data: [245, 320, 280, 265, 290, 310, 275, 285],
      questions: [
        { type: 'mean', answer: 283.75 },
        { type: 'median', answer: 282.5 },
        { type: 'range', answer: 75 }
      ]
    },
    {
      id: 3,
      title: "Anxiety Ratings",
      context: "Self-reported anxiety levels (1-10 scale) before an exam:",
      data: [7, 8, 5, 9, 7, 6, 8, 7, 9, 8, 7, 6],
      questions: [
        { type: 'mean', answer: 7.25 },
        { type: 'median', answer: 7 },
        { type: 'mode', answer: 7 },
        { type: 'range', answer: 4 }
      ]
    },
    {
      id: 4,
      title: "Study Hours Per Week",
      context: "Hours spent studying by psychology students:",
      data: [5, 12, 8, 15, 10, 6, 20, 8, 11, 8],
      questions: [
        { type: 'mean', answer: 10.3 },
        { type: 'median', answer: 9 },
        { type: 'mode', answer: 8 },
        { type: 'range', answer: 15 }
      ]
    },
    {
      id: 5,
      title: "Conformity Scores",
      context: "Number of times participants conformed in an Asch-style experiment:",
      data: [0, 3, 5, 7, 2, 4, 6, 3, 4, 5, 3, 4],
      questions: [
        { type: 'mean', answer: 3.83 },
        { type: 'median', answer: 4 },
        { type: 'mode', answer: 3 },
        { type: 'range', answer: 7 }
      ]
    }
  ], [])

  const dataset = datasets[currentDataset]
  const isComplete = currentDataset === datasets.length - 1 && showFeedback

  const sortedData = useMemo(() => [...dataset.data].sort((a, b) => a - b), [dataset])

  const handleInputChange = useCallback((type: string, value: string) => {
    if (showFeedback) return
    setAnswers(prev => ({ ...prev, [type]: value }))
  }, [showFeedback])

  const checkAnswer = useCallback((type: string, correctAnswer: number | string) => {
    const userAnswer = parseFloat(answers[type] || '0')
    const correct = typeof correctAnswer === 'number' ? correctAnswer : parseFloat(correctAnswer)
    
    // Allow small tolerance for decimal answers
    return Math.abs(userAnswer - correct) < 0.1
  }, [answers])

  const handleSubmit = useCallback(() => {
    setShowFeedback(true)
    
    let correct = 0
    dataset.questions.forEach(q => {
      if (checkAnswer(q.type, q.answer)) correct++
    })
    
    setScore(prev => prev + correct)
    setTotalQuestions(prev => prev + dataset.questions.length)
  }, [dataset, checkAnswer])

  const handleNext = useCallback(() => {
    if (currentDataset < datasets.length - 1) {
      setCurrentDataset(prev => prev + 1)
      setAnswers({})
      setShowFeedback(false)
    }
  }, [currentDataset, datasets.length])

  const handleRestart = useCallback(() => {
    setCurrentDataset(0)
    setAnswers({})
    setShowFeedback(false)
    setScore(0)
    setTotalQuestions(0)
  }, [])

  const getStatLabel = (type: string) => {
    switch (type) {
      case 'mean': return { name: 'Mean', hint: 'Add all values ÷ count', icon: BarChart2 }
      case 'median': return { name: 'Median', hint: 'Middle value when ordered', icon: TrendingUp }
      case 'mode': return { name: 'Mode', hint: 'Most frequent value', icon: BarChart2 }
      case 'range': return { name: 'Range', hint: 'Highest - Lowest', icon: MinusCircle }
      default: return { name: type, hint: '', icon: BarChart2 }
    }
  }

  const getCalculatorRank = useCallback(() => {
    if (totalQuestions === 0) return { rank: "Statistician", emoji: "📊" }
    const percentage = (score / totalQuestions) * 100
    if (percentage >= 90) return { rank: "Master Statistician", emoji: "🏆" }
    if (percentage >= 70) return { rank: "Senior Analyst", emoji: "📈" }
    if (percentage >= 50) return { rank: "Data Cruncher", emoji: "🔢" }
    return { rank: "Trainee Calculator", emoji: "📝" }
  }, [score, totalQuestions])

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-6 bg-gradient-to-br from-slate-900 via-orange-900/20 to-slate-900`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-500/20 rounded-lg">
              <Calculator className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Statistics Calculator Challenge</h2>
              <p className="text-orange-300 text-sm">Calculate measures of central tendency & dispersion</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
              <span className="text-slate-400 text-sm">Score: </span>
              <span className="text-white font-bold">{score}/{totalQuestions}</span>
            </div>
            <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
              <span className="text-slate-400 text-sm">Dataset: </span>
              <span className="text-white font-bold">{currentDataset + 1}/{datasets.length}</span>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="flex gap-1 mb-6">
          {datasets.map((_, i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded-full transition-all ${
                i === currentDataset ? 'bg-orange-400' : i < currentDataset ? 'bg-green-500' : 'bg-slate-600'
              }`}
            />
          ))}
        </div>

        {isComplete ? (
          /* Final Results */
          <div className="bg-slate-800/50 rounded-2xl border border-orange-500/30 p-8 text-center">
            <div className="text-6xl mb-4">{getCalculatorRank().emoji}</div>
            <h3 className="text-3xl font-bold text-white mb-2">Challenge Complete!</h3>
            <p className="text-xl text-orange-300 mb-4">Rank: {getCalculatorRank().rank}</p>
            <div className="text-4xl font-bold text-white mb-6">
              {score}/{totalQuestions} Correct
            </div>
            <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto mb-6">
              <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                <p className="text-2xl">Σ/n</p>
                <p className="text-sm text-slate-400">Mean</p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                <p className="text-2xl">↕️</p>
                <p className="text-sm text-slate-400">Median</p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                <p className="text-2xl">🔁</p>
                <p className="text-sm text-slate-400">Mode</p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                <p className="text-2xl">↔️</p>
                <p className="text-sm text-slate-400">Range</p>
              </div>
            </div>
            <button
              onClick={handleRestart}
              className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl transition-colors"
            >
              Calculate Again 🔄
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-6">
            {/* Data Display */}
            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
                <h3 className="text-xl font-bold text-white mb-2">{dataset.title}</h3>
                <p className="text-gray-400 mb-4">{dataset.context}</p>
                <div className="flex flex-wrap gap-2">
                  {dataset.data.map((value, i) => (
                    <span key={i} className="px-3 py-2 bg-orange-900/30 border border-orange-500/30 rounded-lg text-white font-mono text-lg">
                      {value}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-slate-400 mt-4">n = {dataset.data.length}</p>
              </div>

              {/* Sorted Data (Helper) */}
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-4">
                <p className="text-sm text-slate-400 mb-2">📊 Sorted (for median):</p>
                <div className="flex flex-wrap gap-1">
                  {sortedData.map((value, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-700 rounded text-white font-mono text-sm">
                      {value}
                    </span>
                  ))}
                </div>
              </div>

              {/* Formula Reminders */}
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-4">
                <h4 className="text-sm font-bold text-slate-400 mb-3">FORMULAS</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-300"><span className="text-orange-400">Mean:</span> Sum of all values ÷ Number of values</p>
                  <p className="text-gray-300"><span className="text-orange-400">Median:</span> Middle value when data is ordered</p>
                  <p className="text-gray-300"><span className="text-orange-400">Mode:</span> Most frequently occurring value</p>
                  <p className="text-gray-300"><span className="text-orange-400">Range:</span> Highest value - Lowest value</p>
                </div>
              </div>
            </div>

            {/* Calculation Inputs */}
            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
                <h4 className="text-lg font-bold text-white mb-4">Calculate:</h4>
                <div className="space-y-4">
                  {dataset.questions.map(q => {
                    const stat = getStatLabel(q.type)
                    const isCorrect = showFeedback && checkAnswer(q.type, q.answer)
                    const isWrong = showFeedback && !checkAnswer(q.type, q.answer)
                    
                    return (
                      <div key={q.type} className={`p-4 rounded-lg border ${
                        isCorrect ? 'border-green-500 bg-green-900/20'
                          : isWrong ? 'border-red-500 bg-red-900/20'
                          : 'border-slate-600 bg-slate-700/30'
                      }`}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <stat.icon className={`w-5 h-5 ${isCorrect ? 'text-green-400' : isWrong ? 'text-red-400' : 'text-orange-400'}`} />
                            <span className="font-bold text-white">{stat.name}</span>
                          </div>
                          {showFeedback && (
                            isCorrect ? <CheckCircle className="w-5 h-5 text-green-400" />
                              : <XCircle className="w-5 h-5 text-red-400" />
                          )}
                        </div>
                        <p className="text-xs text-slate-400 mb-2">{stat.hint}</p>
                        <div className="flex items-center gap-2">
                          <input
                            type="number"
                            step="0.01"
                            value={answers[q.type] || ''}
                            onChange={(e) => handleInputChange(q.type, e.target.value)}
                            disabled={showFeedback}
                            placeholder="Enter answer..."
                            className={`flex-1 px-3 py-2 rounded-lg border bg-slate-800 text-white font-mono ${
                              showFeedback ? 'border-slate-600' : 'border-slate-500 focus:border-orange-500'
                            } focus:outline-none`}
                          />
                          {showFeedback && (
                            <span className={`px-3 py-2 rounded-lg font-mono ${
                              isCorrect ? 'bg-green-900/50 text-green-400' : 'bg-red-900/50 text-red-400'
                            }`}>
                              = {typeof q.answer === 'number' ? q.answer.toFixed(2) : q.answer}
                            </span>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Submit/Next */}
              {!showFeedback ? (
                <button
                  onClick={handleSubmit}
                  className="w-full py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl transition-colors"
                >
                  Check Answers ✓
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="w-full py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  Next Dataset <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default StatisticsCalculator
