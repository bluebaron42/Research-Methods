import React, { useState } from 'react'
import { ChevronRight, Users, User, RefreshCw, Scale, ThumbsUp, ThumbsDown, Lightbulb } from 'lucide-react'

interface Props {
  isPresenting: boolean
}

export const ExperimentalDesignsTeach: React.FC<Props> = ({ isPresenting }) => {
  const [revealedCount, setRevealedCount] = useState(0)
  const [expandedDesign, setExpandedDesign] = useState<number | null>(null)
  const [showComparison, setShowComparison] = useState(false)

  const designs = [
    { 
      title: 'Independent Groups', 
      icon: <Users size={isPresenting ? 28 : 20} />, 
      color: 'blue',
      desc: 'Different participants are used in each condition of the IV.',
      example: 'Group A gets caffeine, Group B gets placebo - different people in each group',
      pros: ['No order effects', 'Shorter time per participant', 'No demand characteristics from repeated testing'],
      cons: ['Need more participants', 'Participant variables may confound', 'Random allocation needed'],
      when: 'When the IV cannot be reversed (e.g., learning something new)'
    },
    { 
      title: 'Repeated Measures', 
      icon: <RefreshCw size={isPresenting ? 28 : 20} />, 
      color: 'green',
      desc: 'The same participants are used in all conditions of the IV.',
      example: 'Same participants tested first with caffeine, then without (or vice versa)',
      pros: ['Fewer participants needed', 'No participant variables between conditions', 'More sensitive to effects'],
      cons: ['Order effects (practice/fatigue)', 'Demand characteristics', 'Takes longer per participant'],
      when: 'When participant variables are a major concern'
    },
    { 
      title: 'Matched Pairs', 
      icon: <Scale size={isPresenting ? 28 : 20} />, 
      color: 'purple',
      desc: 'Pairs of participants matched on key variables, one from each pair in each condition.',
      example: 'Twins split up, or participants matched on IQ, age, gender',
      pros: ['No order effects', 'Controls participant variables', 'Combines benefits of both designs'],
      cons: ['Time-consuming to match', 'May not match on all variables', 'Need many participants initially'],
      when: 'When both participant variables AND order effects are concerns'
    },
  ]

  const colorMap: Record<string, { border: string, bg: string, text: string, iconBg: string, activeBorder: string }> = {
    blue:   { border: 'border-blue-500/50',   bg: 'bg-blue-900/30',   text: 'text-blue-300',   iconBg: 'bg-blue-500/30', activeBorder: 'border-blue-400' },
    green:  { border: 'border-green-500/50',  bg: 'bg-green-900/30',  text: 'text-green-300',  iconBg: 'bg-green-500/30', activeBorder: 'border-green-400' },
    purple: { border: 'border-purple-500/50', bg: 'bg-purple-900/30', text: 'text-purple-300', iconBg: 'bg-purple-500/30', activeBorder: 'border-purple-400' },
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-10' : 'p-6'} overflow-auto`}>
      <div className="mb-4 text-center">
        <h2 className={`${isPresenting ? 'text-5xl' : 'text-3xl'} font-black text-white mb-2`}>Experimental Designs</h2>
        <p className={`${isPresenting ? 'text-xl' : 'text-sm'} text-gray-400`}>Click each design to reveal its characteristics</p>
      </div>

      {/* Click-to-Reveal Cards */}
      <div className={`grid grid-cols-3 max-w-6xl mx-auto w-full ${isPresenting ? 'gap-5' : 'gap-3'} mb-4`}>
        {designs.map((d, i) => (
          <div 
            key={i}
            onClick={() => i === revealedCount && setRevealedCount(prev => prev + 1)}
            className={`rounded-2xl border-2 ${colorMap[d.color].border} ${colorMap[d.color].bg} ${isPresenting ? 'p-5' : 'p-4'} transition-all duration-500 cursor-pointer ${
              i < revealedCount 
                ? 'opacity-100 scale-100' 
                : i === revealedCount 
                  ? 'opacity-100 scale-100 ring-2 ring-white/20 animate-pulse' 
                  : 'opacity-30 scale-95'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`${isPresenting ? 'w-12 h-12' : 'w-9 h-9'} rounded-full ${colorMap[d.color].iconBg} flex items-center justify-center ${colorMap[d.color].text}`}>
                {d.icon}
              </div>
              <h3 className={`${isPresenting ? 'text-xl' : 'text-base'} font-bold ${colorMap[d.color].text}`}>{d.title}</h3>
            </div>
            {i < revealedCount ? (
              <div className="animate-fadeIn">
                <p className={`text-gray-200 leading-relaxed ${isPresenting ? 'text-lg' : 'text-sm'} mb-2`}>{d.desc}</p>
                <div className={`${colorMap[d.color].bg} rounded-lg p-2 border ${colorMap[d.color].border}`}>
                  <p className={`${isPresenting ? 'text-sm' : 'text-xs'} text-gray-300 italic`}>
                    <span className={`${colorMap[d.color].text} font-semibold`}>Example: </span>{d.example}
                  </p>
                </div>
              </div>
            ) : i === revealedCount ? (
              <p className={`${colorMap[d.color].text} ${isPresenting ? 'text-base' : 'text-sm'} italic`}>Click to reveal...</p>
            ) : (
              <p className="text-gray-600 text-sm">Locked</p>
            )}
          </div>
        ))}
      </div>

      {/* Progress indicator */}
      <div className="flex justify-center items-center gap-3 mb-4">
        {designs.map((_, i) => (
          <div key={i} className={`${isPresenting ? 'w-3 h-3' : 'w-2 h-2'} rounded-full transition-colors ${i < revealedCount ? 'bg-green-500' : 'bg-gray-600'}`} />
        ))}
        <span className={`ml-2 text-gray-400 ${isPresenting ? 'text-base' : 'text-xs'}`}>{revealedCount}/3</span>
        {revealedCount < 3 && (
          <button onClick={() => setRevealedCount(3)} className="ml-3 text-gray-500 hover:text-gray-300 text-xs">Skip →</button>
        )}
      </div>

      {/* Pros/Cons Accordion - Shows after all revealed */}
      {revealedCount >= 3 && (
        <div className="max-w-4xl mx-auto w-full animate-fadeIn flex-1">
          <h3 className={`${isPresenting ? 'text-2xl' : 'text-lg'} font-bold text-white mb-3 text-center`}>Strengths & Limitations</h3>
          <div className="space-y-2">
            {designs.map((d, i) => (
              <div 
                key={i}
                className={`rounded-xl border-2 transition-all duration-300 overflow-hidden ${
                  expandedDesign === i 
                    ? `${colorMap[d.color].activeBorder} ${colorMap[d.color].bg}` 
                    : `${colorMap[d.color].border} bg-gray-900/40`
                }`}
              >
                <button
                  onClick={() => setExpandedDesign(expandedDesign === i ? null : i)}
                  className={`w-full flex items-center justify-between ${isPresenting ? 'p-4' : 'p-3'} text-left`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`${isPresenting ? 'w-10 h-10' : 'w-8 h-8'} rounded-full ${colorMap[d.color].bg} border ${colorMap[d.color].border} flex items-center justify-center ${colorMap[d.color].text}`}>
                      {d.icon}
                    </div>
                    <h4 className={`${isPresenting ? 'text-lg' : 'text-base'} font-bold ${colorMap[d.color].text}`}>{d.title}</h4>
                  </div>
                  <ChevronRight 
                    className={`${colorMap[d.color].text} transition-transform duration-300 ${expandedDesign === i ? 'rotate-90' : ''}`} 
                    size={isPresenting ? 22 : 18} 
                  />
                </button>

                <div className={`transition-all duration-300 ${expandedDesign === i ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className={`${isPresenting ? 'px-4 pb-4' : 'px-3 pb-3'} grid grid-cols-2 gap-3`}>
                    <div className="bg-green-900/20 rounded-lg p-3 border border-green-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <ThumbsUp className="text-green-400" size={isPresenting ? 18 : 14} />
                        <span className={`${isPresenting ? 'text-sm' : 'text-xs'} text-green-400 font-semibold`}>Strengths</span>
                      </div>
                      <ul className={`${isPresenting ? 'text-sm' : 'text-xs'} text-gray-300 space-y-1`}>
                        {d.pros.map((pro, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span className="text-green-400 mt-0.5">✓</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-900/20 rounded-lg p-3 border border-red-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <ThumbsDown className="text-red-400" size={isPresenting ? 18 : 14} />
                        <span className={`${isPresenting ? 'text-sm' : 'text-xs'} text-red-400 font-semibold`}>Limitations</span>
                      </div>
                      <ul className={`${isPresenting ? 'text-sm' : 'text-xs'} text-gray-300 space-y-1`}>
                        {d.cons.map((con, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span className="text-red-400 mt-0.5">✗</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-span-2 bg-amber-900/20 rounded-lg p-2 border border-amber-500/30">
                      <span className={`${isPresenting ? 'text-sm' : 'text-xs'} text-amber-400 font-semibold`}>📌 When to use: </span>
                      <span className={`${isPresenting ? 'text-sm' : 'text-xs'} text-gray-300`}>{d.when}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Comparison Toggle */}
      {revealedCount >= 3 && (
        <div className="mt-4 flex flex-col items-center">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className={`${isPresenting ? 'px-5 py-2.5 text-base' : 'px-4 py-2 text-sm'} bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-lg transition-all`}
          >
            {showComparison ? 'Hide Quick Reference' : 'Show Quick Reference'}
          </button>
          {showComparison && (
            <div className={`mt-3 max-w-4xl w-full rounded-xl border border-gray-500/50 bg-gray-900/50 ${isPresenting ? 'p-4' : 'p-3'} animate-fadeIn overflow-x-auto`}>
              <table className={`w-full ${isPresenting ? 'text-sm' : 'text-xs'}`}>
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-2 text-gray-400">Design</th>
                    <th className="text-left py-2 text-gray-400">Participants</th>
                    <th className="text-left py-2 text-gray-400">Main Advantage</th>
                    <th className="text-left py-2 text-gray-400">Main Problem</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="py-2 text-blue-300 font-semibold">Independent Groups</td>
                    <td className="py-2 text-gray-300">Different in each</td>
                    <td className="py-2 text-green-300">No order effects</td>
                    <td className="py-2 text-red-300">Participant variables</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-2 text-green-300 font-semibold">Repeated Measures</td>
                    <td className="py-2 text-gray-300">Same in all</td>
                    <td className="py-2 text-green-300">No participant vars</td>
                    <td className="py-2 text-red-300">Order effects</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-purple-300 font-semibold">Matched Pairs</td>
                    <td className="py-2 text-gray-300">Matched pairs split</td>
                    <td className="py-2 text-green-300">Controls both</td>
                    <td className="py-2 text-red-300">Time-consuming</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
