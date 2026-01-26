import React, { useState, useMemo, useCallback } from 'react'
import { Shield, AlertTriangle, CheckCircle, XCircle, Scale, FileText, Heart, Eye, UserX, ArrowRight, ThumbsUp, ThumbsDown } from 'lucide-react'

interface EthicalIssue {
  id: string
  name: string
  icon: React.ElementType
  description: string
}

interface Scenario {
  id: number
  title: string
  description: string
  issues: { issueId: string; severity: 'critical' | 'moderate' | 'minor'; explanation: string }[]
  solutions: { issueId: string; solution: string }[]
}

interface Props {
  isPresenting?: boolean
}

const EthicsReviewBoard: React.FC<Props> = ({ isPresenting = false }) => {
  const [currentScenario, setCurrentScenario] = useState(0)
  const [phase, setPhase] = useState<'identify' | 'review' | 'verdict'>('identify')
  const [selectedIssues, setSelectedIssues] = useState<string[]>([])
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [totalPossible, setTotalPossible] = useState(0)

  const ethicalIssues: EthicalIssue[] = useMemo(() => [
    { id: 'consent', name: 'Informed Consent', icon: FileText, description: 'Participants must agree with full knowledge' },
    { id: 'deception', name: 'Deception', icon: Eye, description: 'Misleading participants about the study' },
    { id: 'harm', name: 'Protection from Harm', icon: Shield, description: 'Physical or psychological risk' },
    { id: 'withdraw', name: 'Right to Withdraw', icon: UserX, description: 'Freedom to leave at any time' },
    { id: 'confidentiality', name: 'Confidentiality', icon: Heart, description: 'Keeping data private and anonymous' },
    { id: 'privacy', name: 'Privacy', icon: Eye, description: 'Observing without permission' }
  ], [])

  const scenarios: Scenario[] = useMemo(() => [
    {
      id: 1,
      title: "Milgram-Style Obedience Study",
      description: "A researcher tells participants they're testing the effect of punishment on learning. Participants are instructed to deliver increasing electric shocks (actually fake) to a 'learner' (a confederate) when they answer incorrectly. The confederate screams in apparent pain. Participants show visible distress but are told to continue.",
      issues: [
        { issueId: 'deception', severity: 'critical', explanation: 'Participants deceived about true purpose (obedience, not learning) and fake shocks' },
        { issueId: 'harm', severity: 'critical', explanation: 'Extreme psychological distress observed - participants showed trembling, sweating, anxiety' },
        { issueId: 'withdraw', severity: 'moderate', explanation: 'Participants were pressured to continue despite wanting to stop ("The experiment requires you continue")' }
      ],
      solutions: [
        { issueId: 'deception', solution: 'Full debrief explaining true purpose, why deception was necessary, opportunity to withdraw data' },
        { issueId: 'harm', solution: 'Immediate debrief reassuring participants the learner was fine, follow-up support/counselling available' },
        { issueId: 'withdraw', solution: 'Make clear participants can stop at ANY time with no pressure, remove "prods" to continue' }
      ]
    },
    {
      id: 2,
      title: "Covert Observation in Toilets",
      description: "A researcher wants to study hand-washing behaviour. They hide in public toilet cubicles and secretly observe whether people wash their hands. They record descriptions of each person including age estimates and clothing.",
      issues: [
        { issueId: 'consent', severity: 'critical', explanation: 'No consent obtained - people don\'t know they\'re being observed' },
        { issueId: 'privacy', severity: 'critical', explanation: 'Toilets are private spaces where people have reasonable expectation of privacy' },
        { issueId: 'confidentiality', severity: 'moderate', explanation: 'Recording descriptions could potentially identify individuals' }
      ],
      solutions: [
        { issueId: 'consent', solution: 'Post signs that observational research is occurring, or move study to less private location' },
        { issueId: 'privacy', solution: 'Conduct observation in truly public spaces (e.g., park, cafeteria) where no privacy expectation exists' },
        { issueId: 'confidentiality', solution: 'Record only numerical data (washed/didn\'t wash), no identifying descriptions' }
      ]
    },
    {
      id: 3,
      title: "Children's Fear Response Study",
      description: "Researchers want to study fear responses in 8-year-olds. With parental consent, children watch a scary film clip alone while their reactions are secretly filmed through a one-way mirror. Some children become visibly upset.",
      issues: [
        { issueId: 'consent', severity: 'moderate', explanation: 'While parents consented, children themselves weren\'t fully informed about what would happen' },
        { issueId: 'harm', severity: 'critical', explanation: 'Deliberately causing fear and distress in young children' },
        { issueId: 'withdraw', severity: 'moderate', explanation: 'Children alone may not feel empowered to say they want to stop' }
      ],
      solutions: [
        { issueId: 'consent', solution: 'Age-appropriate explanation to children, check they understand and agree' },
        { issueId: 'harm', solution: 'Use less frightening stimuli, stop immediately if distress shown, provide reassurance and comfort after' },
        { issueId: 'withdraw', solution: 'Have a researcher present who children can tell if they want to stop, use a "stop button"' }
      ]
    },
    {
      id: 4,
      title: "Workplace Stress Interview",
      description: "A researcher interviews employees about workplace bullying and stress. Interviews are recorded with consent. The researcher promises confidentiality but later the company's HR department requests access to the recordings to 'help employees'.",
      issues: [
        { issueId: 'confidentiality', severity: 'critical', explanation: 'Researcher promised confidentiality but faces pressure to break it' },
        { issueId: 'harm', severity: 'critical', explanation: 'If recordings shared, employees could face workplace consequences for honest answers' }
      ],
      solutions: [
        { issueId: 'confidentiality', solution: 'Refuse to share recordings - confidentiality promise must be honoured. Anonymise all data.' },
        { issueId: 'harm', solution: 'Explain to HR that sharing would harm participants and undermine research trust. Offer anonymous aggregate findings only.' }
      ]
    },
    {
      id: 5,
      title: "Social Media Analysis",
      description: "A researcher studies political attitudes by analysing public Facebook posts. They collect posts, profile pictures, and location data from 10,000 users without their knowledge. Results are published with example posts quoted.",
      issues: [
        { issueId: 'consent', severity: 'moderate', explanation: 'While posts are public, users may not expect systematic research analysis' },
        { issueId: 'privacy', severity: 'moderate', explanation: 'Combining data points (posts + photos + location) may reveal identity' },
        { issueId: 'confidentiality', severity: 'critical', explanation: 'Quoting specific posts could identify and embarrass users' }
      ],
      solutions: [
        { issueId: 'consent', solution: 'Consider whether users expect this use of their data; review platform terms of service' },
        { issueId: 'privacy', solution: 'Minimise data collection to what\'s necessary; don\'t link multiple data sources unnecessarily' },
        { issueId: 'confidentiality', solution: 'Never quote posts directly; paraphrase and aggregate findings to prevent identification' }
      ]
    }
  ], [])

  const scenario = scenarios[currentScenario]

  const handleToggleIssue = useCallback((issueId: string) => {
    if (showFeedback) return
    setSelectedIssues(prev => 
      prev.includes(issueId) 
        ? prev.filter(id => id !== issueId)
        : [...prev, issueId]
    )
  }, [showFeedback])

  const handleSubmitReview = useCallback(() => {
    setShowFeedback(true)
    
    // Calculate score
    const correctIssues = scenario.issues.map(i => i.issueId)
    const correctSelections = selectedIssues.filter(id => correctIssues.includes(id)).length
    const incorrectSelections = selectedIssues.filter(id => !correctIssues.includes(id)).length
    
    const pointsEarned = correctSelections - (incorrectSelections * 0.5)
    const maxPoints = correctIssues.length
    
    setScore(prev => prev + Math.max(0, pointsEarned))
    setTotalPossible(prev => prev + maxPoints)
  }, [scenario, selectedIssues])

  const handleNext = useCallback(() => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(prev => prev + 1)
      setSelectedIssues([])
      setShowFeedback(false)
      setPhase('identify')
    } else {
      setPhase('verdict')
    }
  }, [currentScenario, scenarios.length])

  const handleRestart = useCallback(() => {
    setCurrentScenario(0)
    setSelectedIssues([])
    setShowFeedback(false)
    setPhase('identify')
    setScore(0)
    setTotalPossible(0)
  }, [])

  const getBoardRank = useCallback(() => {
    if (totalPossible === 0) return { rank: "Board Member", emoji: "⚖️" }
    const percentage = (score / totalPossible) * 100
    if (percentage >= 90) return { rank: "Ethics Chair", emoji: "🏛️" }
    if (percentage >= 70) return { rank: "Senior Reviewer", emoji: "📋" }
    if (percentage >= 50) return { rank: "Board Member", emoji: "⚖️" }
    return { rank: "Trainee Reviewer", emoji: "📚" }
  }, [score, totalPossible])

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-500'
      case 'moderate': return 'bg-amber-500'
      case 'minor': return 'bg-blue-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-6 bg-gradient-to-br from-slate-900 via-rose-900/20 to-slate-900`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-rose-500/20 rounded-lg">
              <Scale className="w-6 h-6 text-rose-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Ethics Review Board</h2>
              <p className="text-rose-300 text-sm">Identify ethical issues and evaluate research proposals</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
              <span className="text-slate-400 text-sm">Score: </span>
              <span className="text-white font-bold">{score.toFixed(1)}/{totalPossible}</span>
            </div>
            <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
              <span className="text-slate-400 text-sm">Case: </span>
              <span className="text-white font-bold">{currentScenario + 1}/{scenarios.length}</span>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="flex gap-1 mb-6">
          {scenarios.map((_, i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded-full transition-all ${
                i === currentScenario ? 'bg-rose-400' : i < currentScenario ? 'bg-green-500' : 'bg-slate-600'
              }`}
            />
          ))}
        </div>

        {phase === 'verdict' ? (
          /* Final Verdict */
          <div className="bg-slate-800/50 rounded-2xl border border-rose-500/30 p-8 text-center">
            <div className="text-6xl mb-4">{getBoardRank().emoji}</div>
            <h3 className="text-3xl font-bold text-white mb-2">Board Session Complete</h3>
            <p className="text-xl text-rose-300 mb-4">Final Rank: {getBoardRank().rank}</p>
            <div className="text-4xl font-bold text-white mb-6">
              {score.toFixed(1)}/{totalPossible} Points
            </div>
            <div className="max-w-md mx-auto mb-6 p-4 bg-slate-700/50 rounded-lg">
              <p className="text-gray-300">
                You reviewed {scenarios.length} research proposals and identified ethical issues. 
                Remember: Ethics committees use a <span className="text-rose-400 font-bold">cost-benefit analysis</span> to 
                weigh potential harm against research value.
              </p>
            </div>
            <button
              onClick={handleRestart}
              className="px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl transition-colors"
            >
              New Board Session 🔄
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {/* Scenario */}
            <div className="col-span-2 space-y-4">
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                  <h3 className="text-xl font-bold text-white">Case #{scenario.id}: {scenario.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{scenario.description}</p>
              </div>

              {/* Issue Selection */}
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
                <h4 className="text-lg font-bold text-white mb-4">
                  {showFeedback ? 'Review Results' : 'Select All Ethical Issues Present:'}
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {ethicalIssues.map(issue => {
                    const isSelected = selectedIssues.includes(issue.id)
                    const foundIssue = scenario.issues.find(i => i.issueId === issue.id)
                    const isCorrect = showFeedback && foundIssue
                    const isFalsePositive = showFeedback && isSelected && !foundIssue
                    const isMissed = showFeedback && foundIssue && !isSelected
                    
                    return (
                      <button
                        key={issue.id}
                        onClick={() => handleToggleIssue(issue.id)}
                        disabled={showFeedback}
                        className={`p-3 rounded-lg border-2 transition-all flex items-center gap-3 ${
                          isCorrect && isSelected
                            ? 'border-green-500 bg-green-900/30'
                            : isFalsePositive
                              ? 'border-red-500 bg-red-900/30'
                              : isMissed
                                ? 'border-amber-500 bg-amber-900/30'
                                : isSelected
                                  ? 'border-rose-500 bg-rose-900/30'
                                  : 'border-slate-600 bg-slate-700/30 hover:border-slate-500'
                        } ${showFeedback ? 'cursor-default' : 'cursor-pointer'}`}
                      >
                        <issue.icon className={`w-5 h-5 ${isSelected ? 'text-rose-400' : 'text-slate-400'}`} />
                        <div className="text-left">
                          <p className={`font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>{issue.name}</p>
                          <p className="text-xs text-slate-400">{issue.description}</p>
                        </div>
                        {showFeedback && foundIssue && (
                          <span className={`px-2 py-0.5 rounded text-xs ${getSeverityColor(foundIssue.severity)}`}>
                            {foundIssue.severity}
                          </span>
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Feedback Details */}
              {showFeedback && (
                <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
                  <h4 className="text-lg font-bold text-white mb-4">Detailed Analysis:</h4>
                  <div className="space-y-3">
                    {scenario.issues.map(issue => {
                      const ethIssue = ethicalIssues.find(e => e.id === issue.issueId)
                      const wasIdentified = selectedIssues.includes(issue.issueId)
                      const solution = scenario.solutions.find(s => s.issueId === issue.issueId)
                      
                      return (
                        <div key={issue.issueId} className={`p-4 rounded-lg border ${
                          wasIdentified ? 'border-green-500/50 bg-green-900/20' : 'border-amber-500/50 bg-amber-900/20'
                        }`}>
                          <div className="flex items-center gap-2 mb-2">
                            {wasIdentified ? (
                              <CheckCircle className="w-5 h-5 text-green-400" />
                            ) : (
                              <XCircle className="w-5 h-5 text-amber-400" />
                            )}
                            <span className="font-bold text-white">{ethIssue?.name}</span>
                            <span className={`px-2 py-0.5 rounded text-xs ${getSeverityColor(issue.severity)}`}>
                              {issue.severity}
                            </span>
                          </div>
                          <p className="text-gray-300 text-sm mb-2"><strong>Issue:</strong> {issue.explanation}</p>
                          {solution && (
                            <p className="text-green-300 text-sm"><strong>Solution:</strong> {solution.solution}</p>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-4">
                <h4 className="text-sm font-bold text-slate-400 mb-3">REVIEW CHECKLIST</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-slate-300">
                    <FileText className="w-4 h-4 text-blue-400" />
                    <span>Informed consent given?</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Eye className="w-4 h-4 text-purple-400" />
                    <span>Any deception involved?</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Shield className="w-4 h-4 text-red-400" />
                    <span>Risk of harm?</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <UserX className="w-4 h-4 text-amber-400" />
                    <span>Can participants withdraw?</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Heart className="w-4 h-4 text-pink-400" />
                    <span>Data kept confidential?</span>
                  </div>
                </div>
              </div>

              {!showFeedback ? (
                <button
                  onClick={handleSubmitReview}
                  disabled={selectedIssues.length === 0}
                  className={`w-full py-3 font-bold rounded-xl transition-colors ${
                    selectedIssues.length === 0
                      ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                      : 'bg-rose-600 hover:bg-rose-500 text-white'
                  }`}
                >
                  Submit Review
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="w-full py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  {currentScenario < scenarios.length - 1 ? (
                    <>Next Case <ArrowRight className="w-4 h-4" /></>
                  ) : (
                    <>Final Verdict</>
                  )}
                </button>
              )}

              <div className="bg-rose-900/30 rounded-lg border border-rose-500/30 p-4">
                <p className="text-rose-300 text-sm">
                  <strong>Remember:</strong> Ethics committees weigh the <span className="text-white">potential benefits</span> of 
                  research against the <span className="text-white">potential harm</span> to participants.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default EthicsReviewBoard
