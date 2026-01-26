import React, { useState, useMemo, useCallback, useEffect } from 'react'
import { Calculator, CheckCircle, XCircle, ArrowRight, Timer, Zap, Trophy, Percent, Divide, Plus, Minus } from 'lucide-react'

interface MathQuestion {
  id: number
  question: string
  answer: number
  type: 'percentage' | 'fraction' | 'decimal' | 'ratio' | 'arithmetic'
  hint: string
  tolerance?: number
}

interface Props {
  isPresenting?: boolean
}

const MathsSkillsBootCamp: React.FC<Props> = ({ isPresenting = false }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(60)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [phase, setPhase] = useState<'ready' | 'playing' | 'results'>('ready')
  const [questionResults, setQuestionResults] = useState<boolean[]>([])

  const questions: MathQuestion[] = useMemo(() => [
    {
      id: 1,
      question: "Calculate 25% of 80",
      answer: 20,
      type: 'percentage',
      hint: "25% = 25/100 = 0.25, then multiply by 80"
    },
    {
      id: 2,
      question: "Express 3/4 as a decimal",
      answer: 0.75,
      type: 'fraction',
      hint: "Divide the numerator by the denominator",
      tolerance: 0.01
    },
    {
      id: 3,
      question: "What is 40% as a fraction in its simplest form? (Enter as decimal, e.g., 2/5 = 0.4)",
      answer: 0.4,
      type: 'percentage',
      hint: "40/100, then simplify by dividing both by 20",
      tolerance: 0.01
    },
    {
      id: 4,
      question: "In a study, 15 out of 60 participants showed improvement. What percentage is this?",
      answer: 25,
      type: 'percentage',
      hint: "(15 ÷ 60) × 100"
    },
    {
      id: 5,
      question: "Calculate the mean of: 4, 6, 8, 10, 12",
      answer: 8,
      type: 'arithmetic',
      hint: "Add all values, divide by 5"
    },
    {
      id: 6,
      question: "Express 0.35 as a percentage",
      answer: 35,
      type: 'decimal',
      hint: "Multiply by 100"
    },
    {
      id: 7,
      question: "If p < 0.05, what is the minimum significance level? (Enter as percentage)",
      answer: 5,
      type: 'percentage',
      hint: "0.05 × 100"
    },
    {
      id: 8,
      question: "Calculate: 2/5 + 1/5 (enter as decimal)",
      answer: 0.6,
      type: 'fraction',
      hint: "Same denominator, so add numerators: 3/5",
      tolerance: 0.01
    },
    {
      id: 9,
      question: "A ratio of males to females is 3:2. If there are 30 males, how many females?",
      answer: 20,
      type: 'ratio',
      hint: "If 3 parts = 30, then 1 part = 10. Females = 2 parts"
    },
    {
      id: 10,
      question: "Find 15% of 200",
      answer: 30,
      type: 'percentage',
      hint: "15/100 × 200 = 0.15 × 200"
    },
    {
      id: 11,
      question: "What is 120 as a percentage of 400?",
      answer: 30,
      type: 'percentage',
      hint: "(120 ÷ 400) × 100"
    },
    {
      id: 12,
      question: "Calculate: 1/2 + 1/4 (enter as decimal)",
      answer: 0.75,
      type: 'fraction',
      hint: "Convert to same denominator: 2/4 + 1/4 = 3/4",
      tolerance: 0.01
    },
    {
      id: 13,
      question: "Express 7/8 as a decimal",
      answer: 0.875,
      type: 'fraction',
      hint: "7 ÷ 8",
      tolerance: 0.01
    },
    {
      id: 14,
      question: "In a sample of 80, 60 prefer treatment A. What percentage?",
      answer: 75,
      type: 'percentage',
      hint: "(60 ÷ 80) × 100"
    },
    {
      id: 15,
      question: "Calculate the range of: 12, 18, 25, 31, 44",
      answer: 32,
      type: 'arithmetic',
      hint: "Highest (44) - Lowest (12)"
    }
  ], [])

  // Timer effect
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1)
      }, 1000)
    } else if (timeLeft === 0 && isTimerRunning) {
      setIsTimerRunning(false)
      setPhase('results')
    }
    return () => clearInterval(interval)
  }, [isTimerRunning, timeLeft])

  const checkAnswer = useCallback(() => {
    const userNum = parseFloat(userAnswer)
    const question = questions[currentQuestion]
    const tolerance = question.tolerance || 0.01
    
    const isCorrect = Math.abs(userNum - question.answer) <= tolerance
    
    setQuestionResults(prev => [...prev, isCorrect])
    if (isCorrect) {
      setScore(prev => prev + 1)
    }
    setShowFeedback(true)
  }, [userAnswer, questions, currentQuestion])

  const handleNext = useCallback(() => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
      setUserAnswer('')
      setShowFeedback(false)
    } else {
      setIsTimerRunning(false)
      setPhase('results')
    }
  }, [currentQuestion, questions.length])

  const handleStart = useCallback(() => {
    setPhase('playing')
    setIsTimerRunning(true)
    setCurrentQuestion(0)
    setUserAnswer('')
    setScore(0)
    setTimeLeft(90) // 90 seconds for 15 questions
    setShowFeedback(false)
    setQuestionResults([])
  }, [])

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !showFeedback && userAnswer) {
      checkAnswer()
    } else if (e.key === 'Enter' && showFeedback) {
      handleNext()
    }
  }, [showFeedback, userAnswer, checkAnswer, handleNext])

  const question = questions[currentQuestion]
  const userNum = parseFloat(userAnswer)
  const isCorrect = showFeedback && Math.abs(userNum - question.answer) <= (question.tolerance || 0.01)

  const getBootCampRank = useCallback(() => {
    const percentage = (score / questions.length) * 100
    if (percentage >= 90) return { rank: "Maths Master", emoji: "🏆" }
    if (percentage >= 70) return { rank: "Number Ninja", emoji: "🥷" }
    if (percentage >= 50) return { rank: "Calculation Cadet", emoji: "📊" }
    return { rank: "Boot Camp Beginner", emoji: "📝" }
  }, [score, questions.length])

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'percentage': return Percent
      case 'fraction': return Divide
      case 'decimal': return Calculator
      case 'ratio': return Plus
      case 'arithmetic': return Minus
      default: return Calculator
    }
  }

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-6 bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-500/20 rounded-lg">
              <Zap className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Maths Skills Boot Camp</h2>
              <p className="text-red-300 text-sm">Quick-fire calculation practice</p>
            </div>
          </div>
          {phase === 'playing' && (
            <div className="flex items-center gap-4">
              <div className={`px-4 py-2 rounded-lg border flex items-center gap-2 ${
                timeLeft <= 10 ? 'bg-red-900/50 border-red-500 animate-pulse' : 'bg-slate-800 border-slate-700'
              }`}>
                <Timer className={`w-4 h-4 ${timeLeft <= 10 ? 'text-red-400' : 'text-slate-400'}`} />
                <span className={`font-mono font-bold ${timeLeft <= 10 ? 'text-red-400' : 'text-white'}`}>{timeLeft}s</span>
              </div>
              <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
                <span className="text-slate-400 text-sm">Score: </span>
                <span className="text-white font-bold">{score}/{questionResults.length}</span>
              </div>
            </div>
          )}
        </div>

        {phase === 'ready' && (
          <div className="bg-slate-800/50 rounded-2xl border border-red-500/30 p-8 text-center">
            <div className="text-6xl mb-4">🧮</div>
            <h3 className="text-3xl font-bold text-white mb-4">Ready for Boot Camp?</h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Test your mathematical skills with 15 rapid-fire questions covering percentages, fractions, decimals, and ratios.
              You have 90 seconds!
            </p>
            <div className="grid grid-cols-5 gap-4 max-w-lg mx-auto mb-6">
              <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                <Percent className="w-6 h-6 mx-auto mb-1 text-blue-400" />
                <p className="text-xs text-slate-400">Percentages</p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                <Divide className="w-6 h-6 mx-auto mb-1 text-green-400" />
                <p className="text-xs text-slate-400">Fractions</p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                <Calculator className="w-6 h-6 mx-auto mb-1 text-purple-400" />
                <p className="text-xs text-slate-400">Decimals</p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                <Plus className="w-6 h-6 mx-auto mb-1 text-amber-400" />
                <p className="text-xs text-slate-400">Ratios</p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                <Minus className="w-6 h-6 mx-auto mb-1 text-pink-400" />
                <p className="text-xs text-slate-400">Arithmetic</p>
              </div>
            </div>
            <button
              onClick={handleStart}
              className="px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl transition-colors text-lg"
            >
              Start Boot Camp! 💪
            </button>
          </div>
        )}

        {phase === 'playing' && (
          <div className="space-y-6">
            {/* Progress */}
            <div className="flex gap-1">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 flex-1 rounded-full transition-all ${
                    i === currentQuestion ? 'bg-red-400'
                      : questionResults[i] === true ? 'bg-green-500'
                      : questionResults[i] === false ? 'bg-red-500'
                      : 'bg-slate-600'
                  }`}
                />
              ))}
            </div>

            {/* Question Card */}
            <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className={`p-2 rounded-lg ${
                  question.type === 'percentage' ? 'bg-blue-600'
                    : question.type === 'fraction' ? 'bg-green-600'
                    : question.type === 'decimal' ? 'bg-purple-600'
                    : question.type === 'ratio' ? 'bg-amber-600'
                    : 'bg-pink-600'
                }`}>
                  {React.createElement(getTypeIcon(question.type), { className: 'w-5 h-5 text-white' })}
                </span>
                <span className="text-sm text-slate-400 capitalize">{question.type}</span>
                <span className="ml-auto text-slate-400">Q{currentQuestion + 1}/{questions.length}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-6">{question.question}</h3>
              
              <div className="flex gap-4">
                <input
                  type="number"
                  step="0.001"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={showFeedback}
                  placeholder="Enter your answer..."
                  autoFocus
                  className={`flex-1 px-4 py-3 text-xl rounded-xl border bg-slate-800 text-white font-mono ${
                    showFeedback
                      ? isCorrect ? 'border-green-500' : 'border-red-500'
                      : 'border-slate-600 focus:border-red-500'
                  } focus:outline-none`}
                />
                {!showFeedback ? (
                  <button
                    onClick={checkAnswer}
                    disabled={!userAnswer}
                    className={`px-6 py-3 font-bold rounded-xl transition-colors ${
                      !userAnswer
                        ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                        : 'bg-red-600 hover:bg-red-500 text-white'
                    }`}
                  >
                    Check
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-colors flex items-center gap-2"
                  >
                    {currentQuestion < questions.length - 1 ? 'Next' : 'Finish'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Feedback */}
              {showFeedback && (
                <div className={`mt-4 p-4 rounded-lg border ${
                  isCorrect ? 'bg-green-900/30 border-green-500/50' : 'bg-red-900/30 border-red-500/50'
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    {isCorrect ? (
                      <>
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-green-400 font-bold">Correct!</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 text-red-400" />
                        <span className="text-red-400 font-bold">Answer: {question.answer}</span>
                      </>
                    )}
                  </div>
                  <p className="text-gray-300 text-sm"><strong>Method:</strong> {question.hint}</p>
                </div>
              )}
            </div>

            {/* Hint */}
            {!showFeedback && (
              <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-4">
                <p className="text-amber-300 text-sm">💡 <strong>Tip:</strong> {question.hint}</p>
              </div>
            )}
          </div>
        )}

        {phase === 'results' && (
          <div className="bg-slate-800/50 rounded-2xl border border-red-500/30 p-8 text-center">
            <div className="text-6xl mb-4">{getBootCampRank().emoji}</div>
            <h3 className="text-3xl font-bold text-white mb-2">Boot Camp Complete!</h3>
            <p className="text-xl text-red-300 mb-4">Rank: {getBootCampRank().rank}</p>
            <div className="text-5xl font-bold text-white mb-6">
              {score}/{questions.length}
            </div>
            <div className="flex justify-center gap-1 mb-6">
              {questionResults.map((correct, i) => (
                <div
                  key={i}
                  className={`w-4 h-4 rounded-full ${correct ? 'bg-green-500' : 'bg-red-500'}`}
                />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto mb-6">
              <div className="bg-slate-700/50 rounded-lg p-3">
                <p className="text-2xl font-bold text-green-400">{score}</p>
                <p className="text-xs text-slate-400">Correct</p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-3">
                <p className="text-2xl font-bold text-red-400">{questionResults.length - score}</p>
                <p className="text-xs text-slate-400">Wrong</p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-3">
                <p className="text-2xl font-bold text-amber-400">{Math.round((score / questions.length) * 100)}%</p>
                <p className="text-xs text-slate-400">Accuracy</p>
              </div>
            </div>
            <button
              onClick={handleStart}
              className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl transition-colors"
            >
              Try Again 🔄
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default MathsSkillsBootCamp
