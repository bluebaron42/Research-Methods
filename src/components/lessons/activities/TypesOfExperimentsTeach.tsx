import React, { useState } from 'react'
import { ChevronRight, FlaskConical, TreePine, Globe, Shuffle, ThumbsUp, ThumbsDown, Lightbulb } from 'lucide-react'

interface Props {
  isPresenting: boolean
}

export const TypesOfExperimentsTeach: React.FC<Props> = ({ isPresenting }) => {
  const [revealedCount, setRevealedCount] = useState(0)
  const [expandedType, setExpandedType] = useState<number | null>(null)

  const experiments = [
    { 
      title: 'Laboratory Experiment', 
      icon: <FlaskConical size={isPresenting ? 28 : 20} />, 
      color: 'blue',
      desc: 'Conducted in a controlled, artificial environment where the researcher manipulates the IV and controls extraneous variables.',
      example: 'Loftus & Palmer (1974) - Tested memory for car accidents in a lab setting',
      pros: ['High control over EVs', 'Can establish cause & effect', 'Easy to replicate'],
      cons: ['Artificial setting - low ecological validity', 'Demand characteristics likely', 'May not generalise to real life'],
      keyFeature: 'Maximum control, artificial setting'
    },
    { 
      title: 'Field Experiment', 
      icon: <TreePine size={isPresenting ? 28 : 20} />, 
      color: 'green',
      desc: 'Conducted in a natural environment where participants are unaware they\'re being studied, but the IV is still manipulated.',
      example: 'Piliavin et al. (1969) - Bystander intervention on subway trains',
      pros: ['High ecological validity', 'Natural behaviour', 'No demand characteristics'],
      cons: ['Less control over EVs', 'Harder to replicate', 'Ethical issues (no consent)'],
      keyFeature: 'Natural setting, IV manipulated'
    },
    { 
      title: 'Natural Experiment', 
      icon: <Globe size={isPresenting ? 28 : 20} />, 
      color: 'amber',
      desc: 'The IV occurs naturally - the researcher does not manipulate it but studies its effect on the DV.',
      example: 'Studying stress in people who naturally experienced a disaster vs those who didn\'t',
      pros: ['Studies real-life events', 'Can study variables that can\'t be manipulated', 'High ecological validity'],
      cons: ['Cannot establish causation', 'No random allocation', 'May only happen once'],
      keyFeature: 'IV naturally occurring, not manipulated'
    },
    { 
      title: 'Quasi-Experiment', 
      icon: <Shuffle size={isPresenting ? 28 : 20} />, 
      color: 'purple',
      desc: 'The IV is based on an existing characteristic of participants (e.g., age, gender) that cannot be randomly allocated.',
      example: 'Comparing memory in old vs young participants - can\'t randomly allocate age',
      pros: ['Can study participant characteristics', 'Useful for real-world research', 'Natural groupings'],
      cons: ['Cannot establish causation', 'Participant variables not controlled', 'Groups may differ in other ways'],
      keyFeature: 'IV based on existing characteristics'
    },
  ]

  const colorMap: Record<string, { border: string, bg: string, text: string, iconBg: string, activeBorder: string }> = {
    blue:   { border: 'border-blue-500/50',   bg: 'bg-blue-900/30',   text: 'text-blue-300',   iconBg: 'bg-blue-500/30', activeBorder: 'border-blue-400' },
    green:  { border: 'border-green-500/50',  bg: 'bg-green-900/30',  text: 'text-green-300',  iconBg: 'bg-green-500/30', activeBorder: 'border-green-400' },
    amber:  { border: 'border-amber-500/50',  bg: 'bg-amber-900/30',  text: 'text-amber-300',  iconBg: 'bg-amber-500/30', activeBorder: 'border-amber-400' },
    purple: { border: 'border-purple-500/50', bg: 'bg-purple-900/30', text: 'text-purple-300', iconBg: 'bg-purple-500/30', activeBorder: 'border-purple-400' },
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-8' : 'p-5'} overflow-auto`}>
      <div className="mb-4 text-center">
        <h2 className={`${isPresenting ? 'text-4xl' : 'text-2xl'} font-black text-white mb-2`}>Types of Experiments</h2>
        <p className={`${isPresenting ? 'text-lg' : 'text-sm'} text-gray-400`}>Click each type to reveal characteristics</p>
      </div>

      {/* Click-to-Reveal Cards - 2x2 Grid */}
      <div className={`grid grid-cols-2 max-w-5xl mx-auto w-full ${isPresenting ? 'gap-4' : 'gap-3'} mb-4`}>
        {experiments.map((e, i) => (
          <div 
            key={i}
            onClick={() => i === revealedCount && setRevealedCount(prev => prev + 1)}
            className={`rounded-2xl border-2 ${colorMap[e.color].border} ${colorMap[e.color].bg} ${isPresenting ? 'p-4' : 'p-3'} transition-all duration-500 cursor-pointer ${
              i < revealedCount 
                ? 'opacity-100 scale-100' 
                : i === revealedCount 
                  ? 'opacity-100 scale-100 ring-2 ring-white/20 animate-pulse' 
                  : 'opacity-30 scale-95'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={`${isPresenting ? 'w-10 h-10' : 'w-8 h-8'} rounded-full ${colorMap[e.color].iconBg} flex items-center justify-center ${colorMap[e.color].text}`}>
                {e.icon}
              </div>
              <h3 className={`${isPresenting ? 'text-lg' : 'text-sm'} font-bold ${colorMap[e.color].text}`}>{e.title}</h3>
            </div>
            {i < revealedCount ? (
              <div className="animate-fadeIn">
                <p className={`text-gray-200 leading-relaxed ${isPresenting ? 'text-base' : 'text-xs'} mb-2`}>{e.desc}</p>
                <span className={`inline-block px-2 py-1 ${colorMap[e.color].bg} ${colorMap[e.color].text} rounded text-xs font-semibold border ${colorMap[e.color].border}`}>
                  🔑 {e.keyFeature}
                </span>
              </div>
            ) : i === revealedCount ? (
              <p className={`${colorMap[e.color].text} ${isPresenting ? 'text-sm' : 'text-xs'} italic`}>Click to reveal...</p>
            ) : (
              <p className="text-gray-600 text-xs">Locked</p>
            )}
          </div>
        ))}
      </div>

      {/* Progress indicator */}
      <div className="flex justify-center items-center gap-3 mb-3">
        {experiments.map((_, i) => (
          <div key={i} className={`${isPresenting ? 'w-3 h-3' : 'w-2 h-2'} rounded-full transition-colors ${i < revealedCount ? 'bg-green-500' : 'bg-gray-600'}`} />
        ))}
        <span className={`ml-2 text-gray-400 ${isPresenting ? 'text-sm' : 'text-xs'}`}>{revealedCount}/4</span>
        {revealedCount < 4 && (
          <button onClick={() => setRevealedCount(4)} className="ml-3 text-gray-500 hover:text-gray-300 text-xs">Skip →</button>
        )}
      </div>

      {/* Detailed Accordion - Shows after all revealed */}
      {revealedCount >= 4 && (
        <div className="max-w-4xl mx-auto w-full animate-fadeIn flex-1">
          <h3 className={`${isPresenting ? 'text-xl' : 'text-base'} font-bold text-white mb-3 text-center`}>Strengths, Limitations & Examples</h3>
          <div className="space-y-2 overflow-auto max-h-[40vh]">
            {experiments.map((e, i) => (
              <div 
                key={i}
                className={`rounded-xl border-2 transition-all duration-300 overflow-hidden ${
                  expandedType === i 
                    ? `${colorMap[e.color].activeBorder} ${colorMap[e.color].bg}` 
                    : `${colorMap[e.color].border} bg-gray-900/40`
                }`}
              >
                <button
                  onClick={() => setExpandedType(expandedType === i ? null : i)}
                  className={`w-full flex items-center justify-between ${isPresenting ? 'p-3' : 'p-2'} text-left`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`${isPresenting ? 'w-8 h-8' : 'w-6 h-6'} rounded-full ${colorMap[e.color].bg} border ${colorMap[e.color].border} flex items-center justify-center ${colorMap[e.color].text}`}>
                      {e.icon}
                    </div>
                    <h4 className={`${isPresenting ? 'text-base' : 'text-sm'} font-bold ${colorMap[e.color].text}`}>{e.title}</h4>
                  </div>
                  <ChevronRight 
                    className={`${colorMap[e.color].text} transition-transform duration-300 ${expandedType === i ? 'rotate-90' : ''}`} 
                    size={isPresenting ? 20 : 16} 
                  />
                </button>

                <div className={`transition-all duration-300 ${expandedType === i ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className={`${isPresenting ? 'px-3 pb-3' : 'px-2 pb-2'} space-y-2`}>
                    {/* Example */}
                    <div className={`${colorMap[e.color].bg} rounded-lg p-2 border ${colorMap[e.color].border}`}>
                      <span className={`${isPresenting ? 'text-sm' : 'text-xs'} ${colorMap[e.color].text} font-semibold`}>📚 Classic Example: </span>
                      <span className={`${isPresenting ? 'text-sm' : 'text-xs'} text-gray-300`}>{e.example}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {/* Pros */}
                      <div className="bg-green-900/20 rounded-lg p-2 border border-green-500/30">
                        <div className="flex items-center gap-1 mb-1">
                          <ThumbsUp className="text-green-400" size={isPresenting ? 14 : 12} />
                          <span className={`${isPresenting ? 'text-xs' : 'text-[10px]'} text-green-400 font-semibold`}>Strengths</span>
                        </div>
                        <ul className={`${isPresenting ? 'text-xs' : 'text-[10px]'} text-gray-300 space-y-0.5`}>
                          {e.pros.map((pro, j) => (
                            <li key={j} className="flex items-start gap-1">
                              <span className="text-green-400">✓</span>
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Cons */}
                      <div className="bg-red-900/20 rounded-lg p-2 border border-red-500/30">
                        <div className="flex items-center gap-1 mb-1">
                          <ThumbsDown className="text-red-400" size={isPresenting ? 14 : 12} />
                          <span className={`${isPresenting ? 'text-xs' : 'text-[10px]'} text-red-400 font-semibold`}>Limitations</span>
                        </div>
                        <ul className={`${isPresenting ? 'text-xs' : 'text-[10px]'} text-gray-300 space-y-0.5`}>
                          {e.cons.map((con, j) => (
                            <li key={j} className="flex items-start gap-1">
                              <span className="text-red-400">✗</span>
                              <span>{con}</span>
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

      {/* Key Summary */}
      {revealedCount >= 4 && (
        <div className={`mt-3 max-w-4xl mx-auto w-full rounded-xl border border-cyan-500/50 bg-cyan-900/20 ${isPresenting ? 'p-3' : 'p-2'} animate-fadeIn`}>
          <div className="flex gap-2">
            <Lightbulb className="text-cyan-400 flex-shrink-0" size={isPresenting ? 20 : 16} />
            <p className={`${isPresenting ? 'text-sm' : 'text-xs'} text-cyan-200`}>
              <span className="font-bold">Key Distinction:</span> In lab/field experiments the researcher <span className="text-cyan-400 font-semibold">manipulates</span> the IV. In natural/quasi experiments, the IV occurs <span className="text-cyan-400 font-semibold">naturally</span> or is based on <span className="text-cyan-400 font-semibold">existing characteristics</span>.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
