import React, { useState, useMemo, useCallback } from 'react'
import { FlaskConical, CheckCircle, XCircle, ArrowRight, Users, Repeat, TrendingUp, Binary, HelpCircle } from 'lucide-react'

interface TestScenario {
  id: number
  title: string
  description: string
  correctTest: 'sign'
  design: string
  dataType: string
  question: string
  explanation: string
}

interface Props {
  isPresenting?: boolean
}

const StatisticalTestSelector: React.FC<Props> = ({ isPresenting = false }) => {
  const [currentScenario, setCurrentScenario] = useState(0)
  const [answers, setAnswers] = useState<{ [key: string]: string }>({})
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [phase, setPhase] = useState<'tutorial' | 'practice' | 'results'>('tutorial')
  const [completed, setCompleted] = useState<number[]>([])

  const decisionQuestions = useMemo(() => [
    { id: 'looking', question: "Are you looking for a difference or a correlation?", options: ['Difference', 'Correlation'] },
    { id: 'design', question: "What is the experimental design?", options: ['Repeated Measures', 'Independent Groups', 'Correlation'] },
    { id: 'data', question: "What type of data do you have?", options: ['Nominal', 'Ordinal (at least)'] }
  ], [])

  const scenarios: TestScenario[] = useMemo(() => [
    {
      id: 1,
      title: "Sleep and Memory Study",
      description: "A researcher tests whether sleep affects memory. 12 participants complete a memory test after 8 hours of sleep, then after 4 hours of sleep (one week later). Scores are out of 20.",
      correctTest: 'sign',
      design: 'Repeated Measures',
      dataType: 'Ordinal (at least)',
      question: 'Difference',
      explanation: "The Sign Test is appropriate because: (1) We're looking for a DIFFERENCE (not correlation); (2) It's a REPEATED MEASURES design (same participants in both conditions); (3) The data is at least ORDINAL (scores can be ranked)."
    },
    {
      id: 2,
      title: "Music and Concentration",
      description: "A study examines whether background music affects concentration. 15 students complete a task twice: once with music and once in silence (counterbalanced). Performance is measured by errors made.",
      correctTest: 'sign',
      design: 'Repeated Measures',
      dataType: 'Ordinal (at least)',
      question: 'Difference',
      explanation: "The Sign Test is suitable because: (1) We're testing for a DIFFERENCE in performance; (2) REPEATED MEASURES design (same students both conditions); (3) Error counts provide at least ORDINAL data."
    },
    {
      id: 3,
      title: "Therapy Effectiveness",
      description: "A clinical psychologist measures anxiety levels before and after a 6-week therapy programme in 10 patients using a standardised anxiety scale (scores 0-50).",
      correctTest: 'sign',
      design: 'Repeated Measures',
      dataType: 'Ordinal (at least)',
      question: 'Difference',
      explanation: "The Sign Test is correct because: (1) We're looking for a DIFFERENCE (before vs after); (2) REPEATED MEASURES (same patients measured twice); (3) Anxiety scale scores are at least ORDINAL."
    },
    {
      id: 4,
      title: "Phone Use and Reaction Time",
      description: "Each participant completes a reaction time task before and after 30 minutes of phone use. 8 participants took part, and reaction time was measured in milliseconds.",
      correctTest: 'sign',
      design: 'Repeated Measures',
      dataType: 'Ordinal (at least)',
      question: 'Difference',
      explanation: "The Sign Test applies because: (1) Testing for a DIFFERENCE in reaction time; (2) REPEATED MEASURES (same people in both conditions); (3) Reaction times are interval/ratio data (which qualifies as 'at least ordinal')."
    },
    {
      id: 5,
      title: "Revision Technique Comparison",
      description: "A teacher tests whether a new revision technique improves test scores. 14 students take a test, learn the technique, then take an equivalent test. Both tests are marked out of 40.",
      correctTest: 'sign',
      design: 'Repeated Measures',
      dataType: 'Ordinal (at least)',
      question: 'Difference',
      explanation: "The Sign Test fits because: (1) Looking for a DIFFERENCE in scores; (2) REPEATED MEASURES (same students, before and after); (3) Test scores provide at least ordinal data."
    }
  ], [])

  const scenario = scenarios[currentScenario]
  const isComplete = phase === 'results'

  const handleAnswer = useCallback((questionId: string, answer: string) => {
    if (showFeedback) return
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
  }, [showFeedback])

  const checkAllAnswers = useCallback(() => {
    const correct = 
      answers.looking === scenario.question &&
      answers.design === scenario.design &&
      answers.data === scenario.dataType

    if (correct) {
      setScore(prev => prev + 1)
      setCompleted(prev => [...prev, scenario.id])
    }
    setShowFeedback(true)
  }, [answers, scenario])

  const handleNext = useCallback(() => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(prev => prev + 1)
      setAnswers({})
      setShowFeedback(false)
    } else {
      setPhase('results')
    }
  }, [currentScenario, scenarios.length])

  const handleStart = useCallback(() => {
    setPhase('practice')
    setCurrentScenario(0)
    setAnswers({})
    setShowFeedback(false)
    setScore(0)
    setCompleted([])
  }, [])

  const handleRestart = useCallback(() => {
    setPhase('tutorial')
    setCurrentScenario(0)
    setAnswers({})
    setShowFeedback(false)
    setScore(0)
    setCompleted([])
  }, [])

  const getSelectorRank = useCallback(() => {
    const percentage = (score / scenarios.length) * 100
    if (percentage >= 80) return { rank: "Stats Specialist", emoji: "📊" }
    if (percentage >= 60) return { rank: "Test Technician", emoji: "🔬" }
    if (percentage >= 40) return { rank: "Analysis Apprentice", emoji: "📈" }
    return { rank: "Stats Student", emoji: "📝" }
  }, [score, scenarios.length])

  const allAnswered = decisionQuestions.every(q => answers[q.id])

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-6 bg-gradient-to-br from-slate-900 via-violet-900/20 to-slate-900`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-violet-500/20 rounded-lg">
              <FlaskConical className="w-6 h-6 text-violet-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Statistical Test Selector</h2>
              <p className="text-violet-300 text-sm">Learn to choose the Sign Test</p>
            </div>
          </div>
          {phase === 'practice' && (
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
                <span className="text-slate-400 text-sm">Score: </span>
                <span className="text-white font-bold">{score}/{scenarios.length}</span>
              </div>
              <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
                <span className="text-slate-400 text-sm">Scenario: </span>
                <span className="text-white font-bold">{currentScenario + 1}/{scenarios.length}</span>
              </div>
            </div>
          )}
        </div>

        {phase === 'tutorial' && (
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-xl border border-violet-500/30 p-6">
              <h3 className="text-xl font-bold text-white mb-4">📚 When to Use the Sign Test</h3>
              <p className="text-gray-300 mb-4">
                The Sign Test is a simple statistical test used at AS Level. It's appropriate when:
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-700/50 rounded-lg p-4 border border-blue-500/30">
                  <TrendingUp className="w-8 h-8 text-blue-400 mb-2" />
                  <h4 className="font-bold text-white mb-1">Looking for a Difference</h4>
                  <p className="text-sm text-gray-300">Testing if there's a significant difference between two conditions</p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4 border border-green-500/30">
                  <Repeat className="w-8 h-8 text-green-400 mb-2" />
                  <h4 className="font-bold text-white mb-1">Repeated Measures</h4>
                  <p className="text-sm text-gray-300">Same participants tested in both conditions</p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4 border border-amber-500/30">
                  <Binary className="w-8 h-8 text-amber-400 mb-2" />
                  <h4 className="font-bold text-white mb-1">Ordinal Data (at least)</h4>
                  <p className="text-sm text-gray-300">Data that can be ranked from lowest to highest</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
              <h4 className="font-bold text-white mb-4">Decision Flowchart</h4>
              <div className="flex items-center justify-center gap-4 text-sm">
                <div className="p-3 bg-blue-900/50 rounded-lg border border-blue-500/50 text-center">
                  <p className="text-blue-400 font-bold">1. Difference?</p>
                  <p className="text-gray-300">Yes ✓</p>
                </div>
                <ArrowRight className="w-6 h-6 text-slate-500" />
                <div className="p-3 bg-green-900/50 rounded-lg border border-green-500/50 text-center">
                  <p className="text-green-400 font-bold">2. Repeated Measures?</p>
                  <p className="text-gray-300">Yes ✓</p>
                </div>
                <ArrowRight className="w-6 h-6 text-slate-500" />
                <div className="p-3 bg-amber-900/50 rounded-lg border border-amber-500/50 text-center">
                  <p className="text-amber-400 font-bold">3. At least Ordinal?</p>
                  <p className="text-gray-300">Yes ✓</p>
                </div>
                <ArrowRight className="w-6 h-6 text-slate-500" />
                <div className="p-3 bg-violet-900/50 rounded-lg border border-violet-500 text-center">
                  <p className="text-violet-400 font-bold">= Sign Test</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleStart}
                className="px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-xl transition-colors text-lg"
              >
                Start Practice 🧪
              </button>
            </div>
          </div>
        )}

        {phase === 'practice' && (
          <div className="space-y-6">
            {/* Progress */}
            <div className="flex gap-1">
              {scenarios.map((s, i) => (
                <div
                  key={s.id}
                  className={`h-2 flex-1 rounded-full transition-all ${
                    i === currentScenario ? 'bg-violet-400'
                      : completed.includes(s.id) ? 'bg-green-500'
                      : i < currentScenario ? 'bg-red-500'
                      : 'bg-slate-600'
                  }`}
                />
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6">
              {/* Scenario */}
              <div className="col-span-2 space-y-4">
                <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{scenario.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{scenario.description}</p>
                </div>

                {/* Decision Questions */}
                <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
                  <h4 className="text-lg font-bold text-white mb-4">Answer the Decision Questions:</h4>
                  <div className="space-y-4">
                    {decisionQuestions.map(q => {
                      const isCorrect = showFeedback && (
                        (q.id === 'looking' && answers[q.id] === scenario.question) ||
                        (q.id === 'design' && answers[q.id] === scenario.design) ||
                        (q.id === 'data' && answers[q.id] === scenario.dataType)
                      )
                      const correctAnswer = q.id === 'looking' ? scenario.question
                        : q.id === 'design' ? scenario.design
                        : scenario.dataType

                      return (
                        <div key={q.id} className={`p-4 rounded-lg border ${
                          showFeedback && isCorrect ? 'border-green-500/50 bg-green-900/20'
                            : showFeedback && !isCorrect ? 'border-red-500/50 bg-red-900/20'
                            : 'border-slate-600 bg-slate-700/30'
                        }`}>
                          <p className="text-white font-bold mb-3">{q.question}</p>
                          <div className="flex gap-2">
                            {q.options.map(option => {
                              const isSelected = answers[q.id] === option
                              const isAnswer = showFeedback && option === correctAnswer
                              
                              return (
                                <button
                                  key={option}
                                  onClick={() => handleAnswer(q.id, option)}
                                  disabled={showFeedback}
                                  className={`flex-1 py-2 px-4 rounded-lg border-2 transition-all ${
                                    isAnswer ? 'border-green-500 bg-green-900/30 text-white'
                                      : isSelected && showFeedback && !isAnswer ? 'border-red-500 bg-red-900/30 text-white'
                                      : isSelected ? 'border-violet-500 bg-violet-900/30 text-white'
                                      : 'border-slate-600 bg-slate-800 text-slate-300 hover:border-slate-500'
                                  } ${showFeedback ? 'cursor-default' : 'cursor-pointer'}`}
                                >
                                  {option}
                                </button>
                              )
                            })}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Feedback */}
                {showFeedback && (
                  <div className="bg-violet-900/30 border border-violet-500/50 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <FlaskConical className="w-6 h-6 text-violet-400" />
                      <span className="text-violet-400 font-bold text-lg">Correct Test: Sign Test</span>
                    </div>
                    <p className="text-gray-300">{scenario.explanation}</p>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-4">
                <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-4">
                  <h4 className="text-sm font-bold text-slate-400 mb-3">SIGN TEST CRITERIA</h4>
                  <div className="space-y-2">
                    <div className={`flex items-center gap-2 p-2 rounded ${
                      answers.looking === 'Difference' ? 'bg-green-900/30' : 'bg-slate-700/50'
                    }`}>
                      <TrendingUp className={`w-4 h-4 ${answers.looking === 'Difference' ? 'text-green-400' : 'text-slate-400'}`} />
                      <span className="text-sm text-slate-300">Looking for difference</span>
                    </div>
                    <div className={`flex items-center gap-2 p-2 rounded ${
                      answers.design === 'Repeated Measures' ? 'bg-green-900/30' : 'bg-slate-700/50'
                    }`}>
                      <Repeat className={`w-4 h-4 ${answers.design === 'Repeated Measures' ? 'text-green-400' : 'text-slate-400'}`} />
                      <span className="text-sm text-slate-300">Repeated measures</span>
                    </div>
                    <div className={`flex items-center gap-2 p-2 rounded ${
                      answers.data === 'Ordinal (at least)' ? 'bg-green-900/30' : 'bg-slate-700/50'
                    }`}>
                      <Binary className={`w-4 h-4 ${answers.data === 'Ordinal (at least)' ? 'text-green-400' : 'text-slate-400'}`} />
                      <span className="text-sm text-slate-300">At least ordinal data</span>
                    </div>
                  </div>
                </div>

                {!showFeedback ? (
                  <button
                    onClick={checkAllAnswers}
                    disabled={!allAnswered}
                    className={`w-full py-3 font-bold rounded-xl transition-colors ${
                      !allAnswered
                        ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                        : 'bg-violet-600 hover:bg-violet-500 text-white'
                    }`}
                  >
                    Check Answers
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="w-full py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    {currentScenario < scenarios.length - 1 ? 'Next Scenario' : 'See Results'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {phase === 'results' && (
          <div className="bg-slate-800/50 rounded-2xl border border-violet-500/30 p-8 text-center">
            <div className="text-6xl mb-4">{getSelectorRank().emoji}</div>
            <h3 className="text-3xl font-bold text-white mb-2">Test Selection Complete!</h3>
            <p className="text-xl text-violet-300 mb-4">Rank: {getSelectorRank().rank}</p>
            <div className="text-4xl font-bold text-white mb-6">
              {score}/{scenarios.length} Correct
            </div>
            <div className="max-w-md mx-auto mb-6 p-4 bg-slate-700/50 rounded-lg">
              <p className="text-gray-300 text-sm">
                <strong>Remember:</strong> The Sign Test requires: <br/>
                (1) Looking for a <span className="text-blue-400">difference</span>, 
                (2) <span className="text-green-400">Repeated measures</span> design, 
                (3) At least <span className="text-amber-400">ordinal</span> data
              </p>
            </div>
            <button
              onClick={handleRestart}
              className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-xl transition-colors"
            >
              Practice Again 🔄
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default StatisticalTestSelector
