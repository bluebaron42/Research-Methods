import React, { useState, useMemo, useCallback } from 'react'
import { FileQuestion, CheckCircle, XCircle, ArrowRight, AlertTriangle, ThumbsUp, ThumbsDown, Scale, MessageSquare, ClipboardCheck } from 'lucide-react'

interface QuestionItem {
  id: number
  text: string
  type: 'open' | 'closed'
  issues: string[]
  improvedVersion: string
  explanation: string
}

interface Props {
  isPresenting?: boolean
}

const QuestionQualityControl: React.FC<Props> = ({ isPresenting = false }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedIssues, setSelectedIssues] = useState<string[]>([])
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState<number[]>([])

  const possibleIssues = useMemo(() => [
    { id: 'leading', name: 'Leading Question', description: 'Suggests a particular answer' },
    { id: 'double', name: 'Double-Barrelled', description: 'Asks two things at once' },
    { id: 'jargon', name: 'Jargon/Complex', description: 'Uses technical or confusing language' },
    { id: 'ambiguous', name: 'Ambiguous', description: 'Can be interpreted multiple ways' },
    { id: 'social', name: 'Social Desirability', description: 'Encourages socially acceptable answers' },
    { id: 'none', name: 'No Major Issues', description: 'This question is well-written' }
  ], [])

  const questions: QuestionItem[] = useMemo(() => [
    {
      id: 1,
      text: "Don't you agree that the government should do more to help homeless people?",
      type: 'closed',
      issues: ['leading'],
      improvedVersion: "To what extent do you agree or disagree that the government should increase support for homeless people?",
      explanation: "This is a LEADING question because 'Don't you agree...' pushes respondents toward agreeing. It assumes a particular viewpoint and makes disagreement feel awkward."
    },
    {
      id: 2,
      text: "How satisfied are you with your salary and work-life balance?",
      type: 'closed',
      issues: ['double'],
      improvedVersion: "How satisfied are you with your salary?\nHow satisfied are you with your work-life balance?",
      explanation: "This is a DOUBLE-BARRELLED question. Someone might be satisfied with their salary but not their work-life balance. Asking both together makes the answer uninterpretable."
    },
    {
      id: 3,
      text: "Have you experienced any significant cognitive dissonance when your behaviour contradicts your attitudes?",
      type: 'closed',
      issues: ['jargon'],
      improvedVersion: "Have you ever felt uncomfortable when your actions didn't match what you believe?",
      explanation: "This uses JARGON ('cognitive dissonance') that most people won't understand. Questions should use simple, everyday language that all participants can understand."
    },
    {
      id: 4,
      text: "How often do you exercise?",
      type: 'closed',
      issues: ['ambiguous'],
      improvedVersion: "In a typical week, on how many days do you do at least 30 minutes of moderate physical activity?",
      explanation: "This is AMBIGUOUS because 'exercise' could mean different things to different people, and 'how often' has no defined timeframe. Does walking to work count? Is it per day, week, or month?"
    },
    {
      id: 5,
      text: "Do you always wash your hands after using the toilet?",
      type: 'closed',
      issues: ['social'],
      improvedVersion: "Some people wash their hands after using the toilet and some don't. Which best describes you?",
      explanation: "This encourages SOCIAL DESIRABILITY bias. Most people know hand-washing is expected, so they'll say 'yes' even if untrue. The improved version normalises both responses."
    },
    {
      id: 6,
      text: "On a scale of 1-5, how would you rate the quality of teaching in your psychology class?",
      type: 'closed',
      issues: ['none'],
      improvedVersion: "This question is well-designed.",
      explanation: "This is a well-written closed question. It's clear, specific (psychology class), unambiguous (1-5 scale), and doesn't lead or suggest a particular answer."
    },
    {
      id: 7,
      text: "Wouldn't you say that violent video games are harmful to children and should be banned?",
      type: 'closed',
      issues: ['leading', 'double'],
      improvedVersion: "To what extent do you agree that violent video games negatively affect children's behaviour?",
      explanation: "This has TWO issues: It's LEADING ('Wouldn't you say...') AND DOUBLE-BARRELLED (asks about harm AND banning). Separate questions needed for each topic."
    },
    {
      id: 8,
      text: "What are your thoughts on the current educational system?",
      type: 'open',
      issues: ['ambiguous'],
      improvedVersion: "What do you think are the main strengths and weaknesses of secondary school education in the UK?",
      explanation: "Too AMBIGUOUS for an open question. 'Educational system' is vast - primary? University? UK? Global? Good open questions still need focus to generate useful data."
    }
  ], [])

  const handleToggleIssue = useCallback((issueId: string) => {
    if (showFeedback) return
    
    if (issueId === 'none') {
      setSelectedIssues(prev => prev.includes('none') ? [] : ['none'])
    } else {
      setSelectedIssues(prev => {
        const withoutNone = prev.filter(id => id !== 'none')
        return withoutNone.includes(issueId)
          ? withoutNone.filter(id => id !== issueId)
          : [...withoutNone, issueId]
      })
    }
  }, [showFeedback])

  const handleSubmit = useCallback(() => {
    setShowFeedback(true)
    
    const question = questions[currentQuestion]
    const correctIssues = question.issues
    
    // Check if selected issues match correct issues
    const correctlyIdentified = selectedIssues.filter(id => correctIssues.includes(id)).length
    const incorrectlySelected = selectedIssues.filter(id => !correctIssues.includes(id)).length
    const missed = correctIssues.filter(id => !selectedIssues.includes(id)).length
    
    // Perfect match = full points, partial = partial points
    const maxPoints = correctIssues.length
    const points = Math.max(0, correctlyIdentified - (incorrectlySelected * 0.5) - (missed * 0.5))
    
    if (points >= maxPoints * 0.5) {
      setCompleted(prev => [...prev, question.id])
    }
    setScore(prev => prev + points)
  }, [selectedIssues, questions, currentQuestion])

  const handleNext = useCallback(() => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
      setSelectedIssues([])
      setShowFeedback(false)
    }
  }, [currentQuestion, questions.length])

  const handleRestart = useCallback(() => {
    setCurrentQuestion(0)
    setSelectedIssues([])
    setShowFeedback(false)
    setScore(0)
    setCompleted([])
  }, [])

  const question = questions[currentQuestion]
  const isComplete = currentQuestion === questions.length - 1 && showFeedback

  const getInspectorRank = useCallback(() => {
    const percentage = (score / questions.length) * 100
    if (percentage >= 90) return { rank: "Chief Inspector", emoji: "🏆" }
    if (percentage >= 70) return { rank: "Senior Inspector", emoji: "✅" }
    if (percentage >= 50) return { rank: "Quality Inspector", emoji: "🔍" }
    return { rank: "Trainee Inspector", emoji: "📋" }
  }, [score, questions.length])

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-6 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <ClipboardCheck className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Question Quality Control</h2>
              <p className="text-purple-300 text-sm">Identify problems in questionnaire items</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
              <span className="text-slate-400 text-sm">Score: </span>
              <span className="text-white font-bold">{score.toFixed(1)}/{questions.length}</span>
            </div>
            <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
              <span className="text-slate-400 text-sm">Question: </span>
              <span className="text-white font-bold">{currentQuestion + 1}/{questions.length}</span>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="flex gap-1 mb-6">
          {questions.map((q, i) => (
            <div
              key={q.id}
              className={`h-2 flex-1 rounded-full transition-all ${
                i === currentQuestion ? 'bg-purple-400' : completed.includes(q.id) ? 'bg-green-500' : i < currentQuestion ? 'bg-red-500' : 'bg-slate-600'
              }`}
            />
          ))}
        </div>

        {isComplete ? (
          /* Final Results */
          <div className="bg-slate-800/50 rounded-2xl border border-purple-500/30 p-8 text-center">
            <div className="text-6xl mb-4">{getInspectorRank().emoji}</div>
            <h3 className="text-3xl font-bold text-white mb-2">Inspection Complete!</h3>
            <p className="text-xl text-purple-300 mb-4">Rank: {getInspectorRank().rank}</p>
            <div className="text-4xl font-bold text-white mb-6">
              {score.toFixed(1)}/{questions.length} Points
            </div>
            <div className="max-w-md mx-auto mb-6 p-4 bg-slate-700/50 rounded-lg">
              <p className="text-gray-300 text-sm">
                <strong>Remember:</strong> Good questionnaire questions should be clear, unambiguous, 
                not leading, ask one thing at a time, and avoid encouraging socially desirable responses.
              </p>
            </div>
            <button
              onClick={handleRestart}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-colors"
            >
              Inspect Again 🔄
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {/* Question Display */}
            <div className="col-span-2 space-y-4">
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="w-5 h-5 text-purple-400" />
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    question.type === 'open' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'
                  }`}>
                    {question.type === 'open' ? 'Open Question' : 'Closed Question'}
                  </span>
                </div>
                <div className="p-4 bg-slate-700/50 rounded-lg border-l-4 border-purple-500">
                  <p className="text-xl text-white italic">"{question.text}"</p>
                </div>
              </div>

              {/* Issue Selection */}
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
                <h4 className="text-lg font-bold text-white mb-4">
                  {showFeedback ? 'Analysis Results' : 'What issues does this question have?'}
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {possibleIssues.map(issue => {
                    const isSelected = selectedIssues.includes(issue.id)
                    const isCorrect = showFeedback && question.issues.includes(issue.id)
                    const isFalsePositive = showFeedback && isSelected && !question.issues.includes(issue.id)
                    const isMissed = showFeedback && isCorrect && !isSelected
                    
                    return (
                      <button
                        key={issue.id}
                        onClick={() => handleToggleIssue(issue.id)}
                        disabled={showFeedback}
                        className={`p-3 rounded-lg border-2 transition-all text-left ${
                          isCorrect && isSelected
                            ? 'border-green-500 bg-green-900/30'
                            : isFalsePositive
                              ? 'border-red-500 bg-red-900/30'
                              : isMissed
                                ? 'border-amber-500 bg-amber-900/30'
                                : isSelected
                                  ? 'border-purple-500 bg-purple-900/30'
                                  : 'border-slate-600 bg-slate-700/30 hover:border-slate-500'
                        } ${showFeedback ? 'cursor-default' : 'cursor-pointer'}`}
                      >
                        <div className="flex items-center justify-between">
                          <p className="font-bold text-white">{issue.name}</p>
                          {showFeedback && isCorrect && isSelected && (
                            <CheckCircle className="w-5 h-5 text-green-400" />
                          )}
                          {showFeedback && isFalsePositive && (
                            <XCircle className="w-5 h-5 text-red-400" />
                          )}
                          {showFeedback && isMissed && (
                            <AlertTriangle className="w-5 h-5 text-amber-400" />
                          )}
                        </div>
                        <p className="text-xs text-slate-400 mt-1">{issue.description}</p>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Feedback */}
              {showFeedback && (
                <div className="bg-slate-800/50 rounded-xl border border-purple-500/30 p-6">
                  <h4 className="text-lg font-bold text-white mb-3">Analysis:</h4>
                  <p className="text-gray-300 mb-4">{question.explanation}</p>
                  <div className="p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                    <h5 className="text-green-400 font-bold mb-2">✨ Improved Version:</h5>
                    <p className="text-white italic">"{question.improvedVersion}"</p>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-4">
                <h4 className="text-sm font-bold text-slate-400 mb-3">QUALITY CHECKLIST</h4>
                <div className="space-y-2 text-sm text-slate-300">
                  <p>✓ Is it clear and unambiguous?</p>
                  <p>✓ Does it ask only ONE thing?</p>
                  <p>✓ Is the language simple?</p>
                  <p>✓ Is it neutral (not leading)?</p>
                  <p>✓ Does it avoid social pressure?</p>
                </div>
              </div>

              {!showFeedback ? (
                <button
                  onClick={handleSubmit}
                  disabled={selectedIssues.length === 0}
                  className={`w-full py-3 font-bold rounded-xl transition-colors ${
                    selectedIssues.length === 0
                      ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                      : 'bg-purple-600 hover:bg-purple-500 text-white'
                  }`}
                >
                  Submit Analysis
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="w-full py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  Next Question <ArrowRight className="w-4 h-4" />
                </button>
              )}

              <div className="bg-purple-900/30 rounded-lg border border-purple-500/30 p-4">
                <p className="text-purple-300 text-sm">
                  <strong>Tip:</strong> Open questions gather rich qualitative data but are 
                  harder to analyse. Closed questions give quantitative data but may miss nuance.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default QuestionQualityControl
