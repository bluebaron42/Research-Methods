import React, { useState } from 'react'
import { ChevronRight, FileText, Mic, MessageSquare, CheckSquare, List, Scale, ThumbsUp, ThumbsDown, Lightbulb } from 'lucide-react'

interface Props {
  isPresenting: boolean
}

export const SelfReportTeach: React.FC<Props> = ({ isPresenting }) => {
  const [revealedCount, setRevealedCount] = useState(0)
  const [expandedMethod, setExpandedMethod] = useState<number | null>(null)
  const [showQuestionTypes, setShowQuestionTypes] = useState(false)

  const methods = [
    { 
      title: 'Questionnaires', 
      icon: <FileText size={isPresenting ? 24 : 18} />, 
      color: 'blue',
      desc: 'Written set of questions that participants complete themselves, either on paper or electronically.',
      pros: ['Can reach many people quickly', 'Cheap to administer', 'Anonymous - honest answers', 'Can be posted/emailed', 'Easy to analyse (closed Qs)'],
      cons: ['Low response rates', 'Cannot clarify questions', 'Social desirability bias', 'Reading ability required', 'No follow-up possible'],
      bestFor: 'Large samples, sensitive topics, quantitative data collection'
    },
    { 
      title: 'Structured Interviews', 
      icon: <CheckSquare size={isPresenting ? 24 : 18} />, 
      color: 'green',
      desc: 'Pre-determined questions asked in a fixed order. Same questions for all participants.',
      pros: ['Easy to replicate', 'Easy to analyse', 'Can clarify questions', 'Consistent data', 'Reduces interviewer bias'],
      cons: ['Cannot explore unexpected answers', 'May feel impersonal', 'Limited depth', 'Cannot adapt to individual'],
      bestFor: 'Quantitative data, comparing responses across participants'
    },
    { 
      title: 'Unstructured Interviews', 
      icon: <MessageSquare size={isPresenting ? 24 : 18} />, 
      color: 'amber',
      desc: 'Flexible conversation guided by topics. Questions emerge from responses.',
      pros: ['Rich, detailed data', 'Can follow interesting leads', 'Natural conversation', 'Unexpected insights', 'Good rapport'],
      cons: ['Hard to analyse', 'Time-consuming', 'Hard to replicate', 'Interviewer bias', 'Need skilled interviewer'],
      bestFor: 'Qualitative research, exploring complex issues, building rapport'
    },
    { 
      title: 'Semi-Structured Interviews', 
      icon: <List size={isPresenting ? 24 : 18} />, 
      color: 'purple',
      desc: 'Core questions prepared, but flexibility to follow up and probe interesting responses.',
      pros: ['Balance of structure & flexibility', 'Can compare core themes', 'Rich follow-up data', 'Fairly replicable'],
      cons: ['Requires skilled interviewer', 'Some analysis challenges', 'More time than questionnaires', 'Some interviewer effects'],
      bestFor: 'When you want both comparable and in-depth data'
    },
  ]

  const questionTypes = [
    { name: 'Open Questions', desc: 'Allow any response', example: '"How did you feel?"', pros: 'Rich data, unexpected insights', cons: 'Hard to analyse, time-consuming' },
    { name: 'Closed Questions', desc: 'Fixed response options', example: '"Yes/No" or "1-5"', pros: 'Easy to analyse, quantifiable', cons: 'Limited depth, may miss nuance' },
    { name: 'Likert Scales', desc: 'Rate agreement/frequency', example: '"Strongly agree to Strongly disagree"', pros: 'Quantifiable attitudes', cons: 'Central tendency bias' },
  ]

  const colorMap: Record<string, { border: string, bg: string, text: string, iconBg: string, activeBorder: string }> = {
    blue:   { border: 'border-blue-500/50',   bg: 'bg-blue-900/30',   text: 'text-blue-300',   iconBg: 'bg-blue-500/30', activeBorder: 'border-blue-400' },
    green:  { border: 'border-green-500/50',  bg: 'bg-green-900/30',  text: 'text-green-300',  iconBg: 'bg-green-500/30', activeBorder: 'border-green-400' },
    amber:  { border: 'border-amber-500/50',  bg: 'bg-amber-900/30',  text: 'text-amber-300',  iconBg: 'bg-amber-500/30', activeBorder: 'border-amber-400' },
    purple: { border: 'border-purple-500/50', bg: 'bg-purple-900/30', text: 'text-purple-300', iconBg: 'bg-purple-500/30', activeBorder: 'border-purple-400' },
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-4'} overflow-auto`}>
      <div className="mb-3 text-center">
        <h2 className={`${isPresenting ? 'text-4xl' : 'text-2xl'} font-black text-white mb-1`}>Self-Report Methods</h2>
        <p className={`${isPresenting ? 'text-lg' : 'text-xs'} text-gray-400`}>Click each method to reveal - asking people directly about their thoughts and feelings</p>
      </div>

      {/* Click-to-Reveal Cards - 2x2 Grid */}
      <div className={`grid grid-cols-2 max-w-5xl mx-auto w-full ${isPresenting ? 'gap-4' : 'gap-2'} mb-3`}>
        {methods.map((m, i) => (
          <div 
            key={i}
            onClick={() => i === revealedCount && setRevealedCount(prev => prev + 1)}
            className={`rounded-xl border-2 ${colorMap[m.color].border} ${colorMap[m.color].bg} ${isPresenting ? 'p-4' : 'p-2'} transition-all duration-500 cursor-pointer ${
              i < revealedCount 
                ? 'opacity-100 scale-100' 
                : i === revealedCount 
                  ? 'opacity-100 scale-100 ring-2 ring-white/20 animate-pulse' 
                  : 'opacity-30 scale-95'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className={`${isPresenting ? 'w-9 h-9' : 'w-7 h-7'} rounded-full ${colorMap[m.color].iconBg} flex items-center justify-center ${colorMap[m.color].text}`}>
                {m.icon}
              </div>
              <h3 className={`${isPresenting ? 'text-lg' : 'text-sm'} font-bold ${colorMap[m.color].text}`}>{m.title}</h3>
            </div>
            {i < revealedCount ? (
              <div className="animate-fadeIn">
                <p className={`text-gray-200 ${isPresenting ? 'text-base' : 'text-xs'} mb-2`}>{m.desc}</p>
                <span className={`inline-block px-2 py-0.5 ${colorMap[m.color].bg} ${colorMap[m.color].text} rounded text-[10px] font-semibold border ${colorMap[m.color].border}`}>
                  Best for: {m.bestFor}
                </span>
              </div>
            ) : i === revealedCount ? (
              <p className={`${colorMap[m.color].text} text-xs italic`}>Click to reveal...</p>
            ) : (
              <p className="text-gray-600 text-xs">Locked</p>
            )}
          </div>
        ))}
      </div>

      {/* Progress indicator */}
      <div className="flex justify-center items-center gap-2 mb-3">
        {methods.map((_, i) => (
          <div key={i} className={`w-2 h-2 rounded-full transition-colors ${i < revealedCount ? 'bg-green-500' : 'bg-gray-600'}`} />
        ))}
        <span className="ml-2 text-gray-400 text-xs">{revealedCount}/4</span>
        {revealedCount < 4 && (
          <button onClick={() => setRevealedCount(4)} className="ml-2 text-gray-500 hover:text-gray-300 text-xs">Skip →</button>
        )}
      </div>

      {/* Evaluation Accordion - Shows after all revealed */}
      {revealedCount >= 4 && (
        <div className="max-w-4xl mx-auto w-full animate-fadeIn flex-1 overflow-auto">
          <h3 className={`${isPresenting ? 'text-xl' : 'text-base'} font-bold text-white mb-2 text-center`}>Strengths & Limitations</h3>
          <div className="space-y-1.5 max-h-[30vh] overflow-auto">
            {methods.map((m, i) => (
              <div 
                key={i}
                className={`rounded-lg border-2 transition-all duration-300 overflow-hidden ${
                  expandedMethod === i 
                    ? `${colorMap[m.color].activeBorder} ${colorMap[m.color].bg}` 
                    : `${colorMap[m.color].border} bg-gray-900/40`
                }`}
              >
                <button
                  onClick={() => setExpandedMethod(expandedMethod === i ? null : i)}
                  className="w-full flex items-center justify-between p-2 text-left"
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full ${colorMap[m.color].bg} border ${colorMap[m.color].border} flex items-center justify-center ${colorMap[m.color].text}`}>
                      {m.icon}
                    </div>
                    <h4 className={`${isPresenting ? 'text-base' : 'text-sm'} font-bold ${colorMap[m.color].text}`}>{m.title}</h4>
                  </div>
                  <ChevronRight 
                    className={`${colorMap[m.color].text} transition-transform duration-300 ${expandedMethod === i ? 'rotate-90' : ''}`} 
                    size={16} 
                  />
                </button>

                <div className={`transition-all duration-300 ${expandedMethod === i ? 'max-h-56 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-2 pb-2">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-green-900/20 rounded p-2 border border-green-500/30">
                        <div className="flex items-center gap-1 mb-1">
                          <ThumbsUp className="text-green-400" size={12} />
                          <span className="text-[10px] text-green-400 font-semibold">Strengths</span>
                        </div>
                        <ul className="text-[10px] text-gray-300 space-y-0.5">
                          {m.pros.slice(0, 3).map((pro, j) => (
                            <li key={j} className="flex items-start gap-1">
                              <span className="text-green-400">✓</span>{pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-red-900/20 rounded p-2 border border-red-500/30">
                        <div className="flex items-center gap-1 mb-1">
                          <ThumbsDown className="text-red-400" size={12} />
                          <span className="text-[10px] text-red-400 font-semibold">Limitations</span>
                        </div>
                        <ul className="text-[10px] text-gray-300 space-y-0.5">
                          {m.cons.slice(0, 3).map((con, j) => (
                            <li key={j} className="flex items-start gap-1">
                              <span className="text-red-400">✗</span>{con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Question Types Button & Panel */}
      {revealedCount >= 4 && (
        <div className="mt-2 flex flex-col items-center">
          <button
            onClick={() => setShowQuestionTypes(!showQuestionTypes)}
            className={`px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-lg transition-all`}
          >
            {showQuestionTypes ? 'Hide Question Types' : 'Show Question Types'}
          </button>
          {showQuestionTypes && (
            <div className="mt-2 max-w-4xl w-full rounded-xl border border-cyan-500/50 bg-cyan-900/20 p-3 animate-fadeIn">
              <h4 className="text-sm font-bold text-cyan-300 mb-2">📋 Types of Questions</h4>
              <div className="grid grid-cols-3 gap-2">
                {questionTypes.map((q, i) => (
                  <div key={i} className="bg-gray-800/50 rounded p-2 border border-gray-700">
                    <p className="text-xs text-cyan-300 font-semibold">{q.name}</p>
                    <p className="text-[10px] text-gray-400">{q.desc}</p>
                    <p className="text-[10px] text-gray-500 italic">e.g., {q.example}</p>
                    <div className="mt-1 flex gap-2">
                      <span className="text-[8px] text-green-400">✓ {q.pros}</span>
                    </div>
                    <span className="text-[8px] text-red-400">✗ {q.cons}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
