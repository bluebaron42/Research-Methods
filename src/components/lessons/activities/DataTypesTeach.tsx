import React, { useState } from 'react'
import { ChevronRight, Database, FileText, BookOpen, Search, ThumbsUp, ThumbsDown, Lightbulb } from 'lucide-react'

interface Props {
  isPresenting: boolean
}

export const DataTypesTeach: React.FC<Props> = ({ isPresenting }) => {
  const [revealedCount, setRevealedCount] = useState(0)
  const [expandedType, setExpandedType] = useState<number | null>(null)

  const dataTypes = [
    { 
      title: 'Quantitative Data', 
      icon: <Database size={isPresenting ? 24 : 18} />, 
      color: 'blue',
      desc: 'Numerical data that can be measured and counted.',
      examples: ['Reaction times in milliseconds', 'Test scores out of 100', 'Number of words recalled', 'Heart rate in BPM'],
      analysis: 'Statistical analysis - means, medians, standard deviations, inferential tests',
      pros: ['Easy to analyse statistically', 'Can compare groups objectively', 'Easy to replicate', 'Can identify patterns'],
      cons: ['May oversimplify complex phenomena', 'Lacks depth and context', 'May miss individual differences']
    },
    { 
      title: 'Qualitative Data', 
      icon: <FileText size={isPresenting ? 24 : 18} />, 
      color: 'green',
      desc: 'Non-numerical data - words, descriptions, observations.',
      examples: ['Interview transcripts', 'Diary entries', 'Open-ended survey responses', 'Observational notes'],
      analysis: 'Thematic analysis - identifying patterns, themes, categories in the data',
      pros: ['Rich, detailed insights', 'Captures complexity', 'Unexpected findings', 'Participant perspective'],
      cons: ['Harder to analyse', 'Subjective interpretation', 'Time-consuming', 'Cannot generalise easily']
    },
    { 
      title: 'Primary Data', 
      icon: <Search size={isPresenting ? 24 : 18} />, 
      color: 'amber',
      desc: 'Data collected first-hand by the researcher for their specific study.',
      examples: ['Conducting your own experiment', 'Running your own interviews', 'Your own observations'],
      analysis: 'Depends on whether quantitative or qualitative',
      pros: ['Designed for your research question', 'You know how it was collected', 'More control over quality'],
      cons: ['Time-consuming to collect', 'Expensive', 'May have smaller sample', 'Researcher bias possible']
    },
    { 
      title: 'Secondary Data', 
      icon: <BookOpen size={isPresenting ? 24 : 18} />, 
      color: 'purple',
      desc: 'Data that already exists, collected by someone else for a different purpose.',
      examples: ['Government statistics', 'Previous research data', 'Medical records', 'School attendance data'],
      analysis: 'Often involves meta-analysis or secondary analysis techniques',
      pros: ['Large datasets available', 'Saves time and money', 'Can study historical trends', 'Often representative samples'],
      cons: ['May not fit your needs exactly', 'Unknown quality/bias', 'May be outdated', 'Ethical issues with use']
    },
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
        <h2 className={`${isPresenting ? 'text-4xl' : 'text-2xl'} font-black text-white mb-1`}>Types of Data</h2>
        <p className={`${isPresenting ? 'text-lg' : 'text-xs'} text-gray-400`}>Click each type to reveal - understanding what you're working with</p>
      </div>

      {/* Click-to-Reveal Cards - 2x2 Grid */}
      <div className={`grid grid-cols-2 max-w-5xl mx-auto w-full ${isPresenting ? 'gap-4' : 'gap-2'} mb-3`}>
        {dataTypes.map((d, i) => (
          <div 
            key={i}
            onClick={() => i === revealedCount && setRevealedCount(prev => prev + 1)}
            className={`rounded-xl border-2 ${colorMap[d.color].border} ${colorMap[d.color].bg} ${isPresenting ? 'p-4' : 'p-2'} transition-all duration-500 cursor-pointer ${
              i < revealedCount 
                ? 'opacity-100 scale-100' 
                : i === revealedCount 
                  ? 'opacity-100 scale-100 ring-2 ring-white/20 animate-pulse' 
                  : 'opacity-30 scale-95'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className={`${isPresenting ? 'w-9 h-9' : 'w-7 h-7'} rounded-full ${colorMap[d.color].iconBg} flex items-center justify-center ${colorMap[d.color].text}`}>
                {d.icon}
              </div>
              <h3 className={`${isPresenting ? 'text-lg' : 'text-sm'} font-bold ${colorMap[d.color].text}`}>{d.title}</h3>
            </div>
            {i < revealedCount ? (
              <div className="animate-fadeIn">
                <p className={`text-gray-200 ${isPresenting ? 'text-base' : 'text-xs'} mb-2`}>{d.desc}</p>
                <div className={`${colorMap[d.color].bg} rounded p-2 border ${colorMap[d.color].border}`}>
                  <span className={`text-[10px] ${colorMap[d.color].text} font-semibold`}>Examples: </span>
                  <span className="text-[10px] text-gray-300">{d.examples.slice(0, 2).join(', ')}</span>
                </div>
              </div>
            ) : i === revealedCount ? (
              <p className={`${colorMap[d.color].text} text-xs italic`}>Click to reveal...</p>
            ) : (
              <p className="text-gray-600 text-xs">Locked</p>
            )}
          </div>
        ))}
      </div>

      {/* Progress indicator */}
      <div className="flex justify-center items-center gap-2 mb-3">
        {dataTypes.map((_, i) => (
          <div key={i} className={`w-2 h-2 rounded-full transition-colors ${i < revealedCount ? 'bg-green-500' : 'bg-gray-600'}`} />
        ))}
        <span className="ml-2 text-gray-400 text-xs">{revealedCount}/4</span>
        {revealedCount < 4 && (
          <button onClick={() => setRevealedCount(4)} className="ml-2 text-gray-500 hover:text-gray-300 text-xs">Skip →</button>
        )}
      </div>

      {/* Detailed Accordion - Shows after all revealed */}
      {revealedCount >= 4 && (
        <div className="max-w-4xl mx-auto w-full animate-fadeIn flex-1 overflow-auto">
          <h3 className={`${isPresenting ? 'text-xl' : 'text-base'} font-bold text-white mb-2 text-center`}>Analysis & Evaluation</h3>
          <div className="space-y-1.5 max-h-[35vh] overflow-auto">
            {dataTypes.map((d, i) => (
              <div 
                key={i}
                className={`rounded-lg border-2 transition-all duration-300 overflow-hidden ${
                  expandedType === i 
                    ? `${colorMap[d.color].activeBorder} ${colorMap[d.color].bg}` 
                    : `${colorMap[d.color].border} bg-gray-900/40`
                }`}
              >
                <button
                  onClick={() => setExpandedType(expandedType === i ? null : i)}
                  className="w-full flex items-center justify-between p-2 text-left"
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full ${colorMap[d.color].bg} border ${colorMap[d.color].border} flex items-center justify-center ${colorMap[d.color].text}`}>
                      {d.icon}
                    </div>
                    <h4 className={`${isPresenting ? 'text-base' : 'text-sm'} font-bold ${colorMap[d.color].text}`}>{d.title}</h4>
                  </div>
                  <ChevronRight 
                    className={`${colorMap[d.color].text} transition-transform duration-300 ${expandedType === i ? 'rotate-90' : ''}`} 
                    size={16} 
                  />
                </button>

                <div className={`transition-all duration-300 ${expandedType === i ? 'max-h-56 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-2 pb-2 space-y-2">
                    <div className={`${colorMap[d.color].bg} rounded p-2 border ${colorMap[d.color].border}`}>
                      <span className={`text-xs ${colorMap[d.color].text} font-semibold`}>📊 Analysis: </span>
                      <span className="text-xs text-gray-300">{d.analysis}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-green-900/20 rounded p-2 border border-green-500/30">
                        <div className="flex items-center gap-1 mb-1">
                          <ThumbsUp className="text-green-400" size={12} />
                          <span className="text-[10px] text-green-400 font-semibold">Strengths</span>
                        </div>
                        <ul className="text-[10px] text-gray-300 space-y-0.5">
                          {d.pros.map((pro, j) => (
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
                          {d.cons.map((con, j) => (
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

      {/* Key Point */}
      {revealedCount >= 4 && (
        <div className="mt-2 max-w-4xl mx-auto w-full rounded-xl border border-cyan-500/50 bg-cyan-900/20 p-2 animate-fadeIn">
          <div className="flex gap-2">
            <Lightbulb className="text-cyan-400 flex-shrink-0" size={16} />
            <p className="text-xs text-cyan-200">
              <span className="font-bold">Key Point:</span> Quant vs Qual and Primary vs Secondary are <span className="text-cyan-400 font-semibold">independent dimensions</span>. You can have primary quantitative data, secondary qualitative data, etc.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
