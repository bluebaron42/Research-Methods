import React, { useState, useMemo, useCallback } from 'react'
import { Users, CheckCircle, XCircle, ArrowRight, AlertTriangle, Star, FileText, Lightbulb, Target, Zap } from 'lucide-react'

interface ResearchPaper {
  id: number
  title: string
  abstract: string
  methodology: string
  reviewAreas: ReviewArea[]
}

interface ReviewArea {
  category: string
  content: string
  issues: string[]
  correctIssues: string[]
  feedback: string
  icon: React.ReactNode
}

interface Props {
  isPresenting?: boolean
}

const PeerReviewSimulator: React.FC<Props> = ({ isPresenting = false }) => {
  const [currentPaper, setCurrentPaper] = useState(0)
  const [currentArea, setCurrentArea] = useState(0)
  const [selectedIssues, setSelectedIssues] = useState<{ [key: number]: string[] }>({})
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [totalPossible, setTotalPossible] = useState(0)
  const [phase, setPhase] = useState<'intro' | 'review' | 'results'>('intro')
  const [paperScores, setPaperScores] = useState<number[]>([])

  const papers: ResearchPaper[] = useMemo(() => [
    {
      id: 1,
      title: "The Effect of Background Music on Revision Effectiveness",
      abstract: "This study investigated whether students who listen to classical music while revising perform better on memory tests.",
      methodology: "20 sixth form students from one school completed a memory task. Group A revised with classical music, Group B revised in silence. Memory was tested immediately after.",
      reviewAreas: [
        {
          category: "Sampling",
          content: "20 sixth form students from one school completed a memory task. They were divided into two groups of 10.",
          issues: ["Sample too small", "All from one school (not generalisable)", "Volunteer sample", "No mention of gender/age breakdown", "Opportunity sampling used"],
          correctIssues: ["Sample too small", "All from one school (not generalisable)", "Opportunity sampling used"],
          feedback: "The sample of 20 is quite small for generalisation. Using students from just one school limits how much we can apply findings to all students. Opportunity sampling may introduce bias.",
          icon: <Users className="w-5 h-5" />
        },
        {
          category: "Variables",
          content: "Group A revised with classical music, Group B revised in silence. They tested memory 'immediately after'.",
          issues: ["IV not fully operationalised", "DV not clearly measured", "No control of extraneous variables", "Time of day not controlled", "Participant variables not controlled"],
          correctIssues: ["IV not fully operationalised", "DV not clearly measured", "No control of extraneous variables"],
          feedback: "The IV (music type/volume/duration) and DV (what kind of memory test? How is it scored?) need clearer operationalisation. No mention of controlling other variables like time of day or room conditions.",
          icon: <Target className="w-5 h-5" />
        },
        {
          category: "Validity",
          content: "Memory was tested using a 'memory task' immediately after a revision session.",
          issues: ["Low ecological validity", "Demand characteristics possible", "Social desirability may affect results", "Artificial environment", "Type of memory task unclear"],
          correctIssues: ["Low ecological validity", "Demand characteristics possible", "Type of memory task unclear"],
          feedback: "Testing memory immediately in a controlled setting may not reflect real exam conditions (low ecological validity). Participants may guess the purpose and change behaviour (demand characteristics).",
          icon: <Zap className="w-5 h-5" />
        }
      ]
    },
    {
      id: 2,
      title: "Social Media Use and Self-Esteem in Teenagers",
      abstract: "This research examined the relationship between hours spent on social media and self-esteem scores.",
      methodology: "50 teenagers aged 13-16 completed a questionnaire about their social media use and a self-esteem scale. The data was correlated.",
      reviewAreas: [
        {
          category: "Design",
          content: "Participants reported their social media use and completed a self-esteem scale. Data was correlated.",
          issues: ["Correlation cannot show causation", "Self-report may be inaccurate", "No control group", "Cross-sectional design limitations", "Retrospective data unreliable"],
          correctIssues: ["Correlation cannot show causation", "Self-report may be inaccurate", "Cross-sectional design limitations"],
          feedback: "Correlational design means we cannot say social media CAUSES low self-esteem. Self-reported hours may be inaccurate. A snapshot at one time point limits what we can conclude.",
          icon: <FileText className="w-5 h-5" />
        },
        {
          category: "Measurement",
          content: "Teenagers completed a questionnaire about their daily social media use (in hours) and a 10-item self-esteem scale.",
          issues: ["Self-esteem scale not specified (validity?)", "Social desirability bias", "Recall accuracy for hours", "Definition of 'social media' unclear", "Response bias possible"],
          correctIssues: ["Self-esteem scale not specified (validity?)", "Social desirability bias", "Recall accuracy for hours"],
          feedback: "Was the self-esteem scale standardised and validated? Teenagers may underreport or overreport usage due to social desirability. Memory for exact hours is often inaccurate.",
          icon: <Target className="w-5 h-5" />
        },
        {
          category: "Ethics",
          content: "50 teenagers aged 13-16 completed the study. Results were kept anonymous.",
          issues: ["Parental consent needed", "Sensitive topic (self-esteem)", "Debriefing not mentioned", "Right to withdraw unclear", "Age-appropriate materials?"],
          correctIssues: ["Parental consent needed", "Sensitive topic (self-esteem)", "Debriefing not mentioned"],
          feedback: "Working with under-16s requires parental consent. Self-esteem is a sensitive topic - were participants supported? Debriefing should be mentioned, especially for potentially upsetting findings.",
          icon: <AlertTriangle className="w-5 h-5" />
        }
      ]
    }
  ], [])

  const paper = papers[currentPaper]
  const area = paper.reviewAreas[currentArea]

  const handleToggleIssue = useCallback((issue: string) => {
    if (showFeedback) return
    setSelectedIssues(prev => {
      const key = currentPaper * 10 + currentArea
      const current = prev[key] || []
      if (current.includes(issue)) {
        return { ...prev, [key]: current.filter(i => i !== issue) }
      } else {
        return { ...prev, [key]: [...current, issue] }
      }
    })
  }, [currentPaper, currentArea, showFeedback])

  const getCurrentSelected = useCallback(() => {
    const key = currentPaper * 10 + currentArea
    return selectedIssues[key] || []
  }, [currentPaper, currentArea, selectedIssues])

  const checkAnswer = useCallback(() => {
    const selected = getCurrentSelected()
    const correct = area.correctIssues
    
    // Count correct identifications and false positives
    const correctIdentified = selected.filter(s => correct.includes(s)).length
    const falsePositives = selected.filter(s => !correct.includes(s)).length
    
    // Calculate area score
    const areaScore = Math.max(0, correctIdentified - falsePositives)
    setScore(prev => prev + areaScore)
    setTotalPossible(prev => prev + correct.length)
    
    setShowFeedback(true)
  }, [getCurrentSelected, area])

  const handleNext = useCallback(() => {
    if (currentArea < paper.reviewAreas.length - 1) {
      setCurrentArea(prev => prev + 1)
      setShowFeedback(false)
    } else if (currentPaper < papers.length - 1) {
      // Save current paper score and move to next paper
      setPaperScores(prev => [...prev, score])
      setCurrentPaper(prev => prev + 1)
      setCurrentArea(0)
      setShowFeedback(false)
    } else {
      setPhase('results')
    }
  }, [currentArea, currentPaper, paper.reviewAreas.length, papers.length, score])

  const handleStart = useCallback(() => {
    setPhase('review')
    setCurrentPaper(0)
    setCurrentArea(0)
    setSelectedIssues({})
    setShowFeedback(false)
    setScore(0)
    setTotalPossible(0)
    setPaperScores([])
  }, [])

  const handleRestart = useCallback(() => {
    setPhase('intro')
    setCurrentPaper(0)
    setCurrentArea(0)
    setSelectedIssues({})
    setShowFeedback(false)
    setScore(0)
    setTotalPossible(0)
    setPaperScores([])
  }, [])

  const getReviewerRank = useCallback(() => {
    const percentage = totalPossible > 0 ? (score / totalPossible) * 100 : 0
    if (percentage >= 80) return { rank: "Expert Reviewer", emoji: "🎓" }
    if (percentage >= 60) return { rank: "Critical Analyst", emoji: "🔍" }
    if (percentage >= 40) return { rank: "Developing Reviewer", emoji: "📋" }
    return { rank: "Novice Reviewer", emoji: "📝" }
  }, [score, totalPossible])

  const selected = getCurrentSelected()

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-6 bg-gradient-to-br from-slate-900 via-emerald-900/20 to-slate-900`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/20 rounded-lg">
              <FileText className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Peer Review Simulator</h2>
              <p className="text-emerald-300 text-sm">Critically evaluate psychological research</p>
            </div>
          </div>
          {phase === 'review' && (
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
                <span className="text-slate-400 text-sm">Paper: </span>
                <span className="text-white font-bold">{currentPaper + 1}/{papers.length}</span>
              </div>
              <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
                <span className="text-slate-400 text-sm">Area: </span>
                <span className="text-white font-bold">{currentArea + 1}/{paper.reviewAreas.length}</span>
              </div>
            </div>
          )}
        </div>

        {phase === 'intro' && (
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-xl border border-emerald-500/30 p-6">
              <h3 className="text-xl font-bold text-white mb-4">📋 What is Peer Review?</h3>
              <p className="text-gray-300 mb-4">
                Peer review is the process where experts critically evaluate research before it's published.
                As a psychology student, you need to be able to identify methodological issues in studies.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-700/50 rounded-lg p-4 border border-blue-500/30">
                  <Users className="w-8 h-8 text-blue-400 mb-2" />
                  <h4 className="font-bold text-white mb-1">Sampling Issues</h4>
                  <p className="text-sm text-gray-300">Sample size, representativeness, generalisability</p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4 border border-amber-500/30">
                  <Target className="w-8 h-8 text-amber-400 mb-2" />
                  <h4 className="font-bold text-white mb-1">Design Issues</h4>
                  <p className="text-sm text-gray-300">Variables, controls, validity concerns</p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4 border border-red-500/30">
                  <AlertTriangle className="w-8 h-8 text-red-400 mb-2" />
                  <h4 className="font-bold text-white mb-1">Ethical Issues</h4>
                  <p className="text-sm text-gray-300">Consent, debrief, protection, confidentiality</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
              <h4 className="font-bold text-white mb-3">Your Task</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li>Read each section of the research carefully</li>
                <li>Identify the <strong className="text-emerald-400">genuine methodological issues</strong> from the options</li>
                <li>Avoid selecting issues that aren't actually present (false positives lose marks!)</li>
                <li>Review the expert feedback to learn from your choices</li>
              </ol>
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleStart}
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-colors text-lg"
              >
                Start Reviewing 📝
              </button>
            </div>
          </div>
        )}

        {phase === 'review' && (
          <div className="space-y-6">
            {/* Paper Info */}
            <div className="bg-slate-800/50 rounded-xl border border-emerald-500/30 p-4">
              <h3 className="text-lg font-bold text-emerald-400 mb-1">{paper.title}</h3>
              <p className="text-gray-300 text-sm">{paper.abstract}</p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {/* Review Area */}
              <div className="col-span-2 space-y-4">
                {/* Navigation Tabs */}
                <div className="flex gap-2">
                  {paper.reviewAreas.map((ra, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm ${
                        i === currentArea
                          ? 'bg-emerald-600 text-white'
                          : i < currentArea
                          ? 'bg-emerald-900/30 text-emerald-400'
                          : 'bg-slate-700/50 text-slate-400'
                      }`}
                    >
                      {ra.icon}
                      <span>{ra.category}</span>
                      {i < currentArea && <CheckCircle className="w-4 h-4" />}
                    </div>
                  ))}
                </div>

                {/* Content to Review */}
                <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    {area.icon}
                    Reviewing: {area.category}
                  </h4>
                  <div className="bg-slate-700/50 rounded-lg p-4 border-l-4 border-emerald-500">
                    <p className="text-gray-300 italic">"{area.content}"</p>
                  </div>
                </div>

                {/* Issue Selection */}
                <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
                  <h4 className="text-sm font-bold text-slate-400 mb-3">SELECT ALL GENUINE ISSUES:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {area.issues.map((issue, i) => {
                      const isSelected = selected.includes(issue)
                      const isCorrect = area.correctIssues.includes(issue)
                      
                      return (
                        <button
                          key={i}
                          onClick={() => handleToggleIssue(issue)}
                          disabled={showFeedback}
                          className={`p-3 rounded-lg border-2 text-left text-sm transition-all ${
                            showFeedback && isCorrect
                              ? 'border-green-500 bg-green-900/30'
                              : showFeedback && isSelected && !isCorrect
                              ? 'border-red-500 bg-red-900/30'
                              : isSelected
                              ? 'border-emerald-500 bg-emerald-900/30'
                              : 'border-slate-600 bg-slate-700/30 hover:border-slate-500'
                          } ${showFeedback ? 'cursor-default' : 'cursor-pointer'}`}
                        >
                          <div className="flex items-center gap-2">
                            {showFeedback && isCorrect && <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />}
                            {showFeedback && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />}
                            {!showFeedback && isSelected && <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />}
                            <span className="text-gray-300">{issue}</span>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Expert Feedback */}
                {showFeedback && (
                  <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Lightbulb className="w-6 h-6 text-emerald-400" />
                      <span className="text-emerald-400 font-bold text-lg">Expert Feedback</span>
                    </div>
                    <p className="text-gray-300">{area.feedback}</p>
                    <div className="mt-3 text-sm text-emerald-400">
                      ✓ Correct issues: {area.correctIssues.join(', ')}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-4">
                <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-4">
                  <h4 className="text-sm font-bold text-slate-400 mb-3">REVIEW CHECKLIST</h4>
                  <div className="space-y-2 text-sm">
                    {['Sampling', 'Variables', 'Controls', 'Validity', 'Ethics'].map(item => (
                      <div key={item} className="flex items-center gap-2 text-slate-300">
                        <div className="w-3 h-3 rounded-full border border-slate-500" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-4">
                  <h4 className="text-sm font-bold text-slate-400 mb-2">SELECTED: {selected.length}</h4>
                  <p className="text-xs text-slate-500">
                    Be careful! Selecting incorrect issues will reduce your score.
                  </p>
                </div>

                {!showFeedback ? (
                  <button
                    onClick={checkAnswer}
                    disabled={selected.length === 0}
                    className={`w-full py-3 font-bold rounded-xl transition-colors ${
                      selected.length === 0
                        ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                        : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                    }`}
                  >
                    Submit Review
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    {currentArea < paper.reviewAreas.length - 1 
                      ? 'Next Area'
                      : currentPaper < papers.length - 1
                      ? 'Next Paper'
                      : 'See Results'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {phase === 'results' && (
          <div className="bg-slate-800/50 rounded-2xl border border-emerald-500/30 p-8 text-center">
            <div className="text-6xl mb-4">{getReviewerRank().emoji}</div>
            <h3 className="text-3xl font-bold text-white mb-2">Review Complete!</h3>
            <p className="text-xl text-emerald-300 mb-4">Rank: {getReviewerRank().rank}</p>
            <div className="text-4xl font-bold text-white mb-6">
              {score}/{totalPossible} Points
            </div>
            
            <div className="max-w-md mx-auto mb-6 p-4 bg-slate-700/50 rounded-lg text-left">
              <h4 className="font-bold text-white mb-2">Key Review Skills:</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>✓ Identify sampling limitations</li>
                <li>✓ Spot operationalisation issues</li>
                <li>✓ Recognise validity threats</li>
                <li>✓ Consider ethical concerns</li>
                <li>✓ Evaluate design choices</li>
              </ul>
            </div>
            
            <button
              onClick={handleRestart}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-colors"
            >
              Review Again 🔄
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default PeerReviewSimulator
