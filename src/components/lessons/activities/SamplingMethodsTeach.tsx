import React, { useState } from 'react'
import { ChevronRight, Shuffle, Target, List, Users, Megaphone, ThumbsUp, ThumbsDown, Lightbulb } from 'lucide-react'

interface Props {
  isPresenting: boolean
}

export const SamplingMethodsTeach: React.FC<Props> = ({ isPresenting }) => {
  const [revealedCount, setRevealedCount] = useState(0)
  const [expandedMethod, setExpandedMethod] = useState<number | null>(null)
  const [showSummary, setShowSummary] = useState(false)

  const methods = [
    { 
      title: 'Random Sampling', 
      icon: <Shuffle size={isPresenting ? 24 : 18} />, 
      color: 'blue',
      desc: 'Every member of the target population has an equal chance of being selected.',
      how: 'Names drawn from a hat, random number generator, lottery method',
      pros: ['Unbiased', 'Most representative', 'Generalisable results'],
      cons: ['Need complete population list', 'Time-consuming', 'May still get unrepresentative sample by chance'],
      bias: 'Low - if done correctly'
    },
    { 
      title: 'Systematic Sampling', 
      icon: <List size={isPresenting ? 24 : 18} />, 
      color: 'green',
      desc: 'Selecting every nth person from a list after a random starting point.',
      how: 'Every 10th person on a class register, every 5th house on a street',
      pros: ['Quick & easy', 'Fairly representative', 'Avoids researcher bias'],
      cons: ['List may have hidden pattern', 'Not truly random', 'Need numbered list'],
      bias: 'Low-Medium'
    },
    { 
      title: 'Stratified Sampling', 
      icon: <Target size={isPresenting ? 24 : 18} />, 
      color: 'purple',
      desc: 'Population divided into subgroups (strata), then random sampling from each in proportion.',
      how: 'If population is 60% female, 40% male - sample reflects this ratio',
      pros: ['Ensures representation of subgroups', 'More accurate than simple random', 'Good for diverse populations'],
      cons: ['Need population data on strata', 'Complex to organise', 'Time-consuming'],
      bias: 'Very Low'
    },
    { 
      title: 'Opportunity Sampling', 
      icon: <Users size={isPresenting ? 24 : 18} />, 
      color: 'amber',
      desc: 'Using whoever is available and willing at the time.',
      how: 'Asking people in a shopping centre, using students in your class',
      pros: ['Quick & convenient', 'Cheap', 'Easy to do'],
      cons: ['Highly biased', 'Not representative', 'Cannot generalise'],
      bias: 'High'
    },
    { 
      title: 'Volunteer (Self-Selected)', 
      icon: <Megaphone size={isPresenting ? 24 : 18} />, 
      color: 'rose',
      desc: 'Participants volunteer by responding to an advert or request.',
      how: 'Newspaper adverts, posters, online requests for participants',
      pros: ['Participants are willing', 'Less ethical issues', 'Can reach specific groups'],
      cons: ['Volunteer bias - not typical', 'May attract certain personality types', 'Not representative'],
      bias: 'High'
    },
  ]

  const colorMap: Record<string, { border: string, bg: string, text: string, iconBg: string, activeBorder: string }> = {
    blue:   { border: 'border-blue-500/50',   bg: 'bg-blue-900/30',   text: 'text-blue-300',   iconBg: 'bg-blue-500/30', activeBorder: 'border-blue-400' },
    green:  { border: 'border-green-500/50',  bg: 'bg-green-900/30',  text: 'text-green-300',  iconBg: 'bg-green-500/30', activeBorder: 'border-green-400' },
    purple: { border: 'border-purple-500/50', bg: 'bg-purple-900/30', text: 'text-purple-300', iconBg: 'bg-purple-500/30', activeBorder: 'border-purple-400' },
    amber:  { border: 'border-amber-500/50',  bg: 'bg-amber-900/30',  text: 'text-amber-300',  iconBg: 'bg-amber-500/30', activeBorder: 'border-amber-400' },
    rose:   { border: 'border-rose-500/50',   bg: 'bg-rose-900/30',   text: 'text-rose-300',   iconBg: 'bg-rose-500/30', activeBorder: 'border-rose-400' },
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-4'} overflow-auto`}>
      <div className="mb-3 text-center">
        <h2 className={`${isPresenting ? 'text-4xl' : 'text-2xl'} font-black text-white mb-1`}>Sampling Methods</h2>
        <p className={`${isPresenting ? 'text-lg' : 'text-xs'} text-gray-400`}>Click each method to reveal - best to worst for representativeness</p>
      </div>

      {/* Click-to-Reveal Cards - Horizontal scroll on smaller views */}
      <div className={`flex gap-2 max-w-6xl mx-auto w-full mb-3 overflow-x-auto pb-2`}>
        {methods.map((m, i) => (
          <div 
            key={i}
            onClick={() => i === revealedCount && setRevealedCount(prev => prev + 1)}
            className={`flex-shrink-0 ${isPresenting ? 'w-52' : 'w-40'} rounded-xl border-2 ${colorMap[m.color].border} ${colorMap[m.color].bg} ${isPresenting ? 'p-3' : 'p-2'} transition-all duration-500 cursor-pointer ${
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
              <h3 className={`${isPresenting ? 'text-sm' : 'text-xs'} font-bold ${colorMap[m.color].text} leading-tight`}>{m.title}</h3>
            </div>
            {i < revealedCount ? (
              <div className="animate-fadeIn">
                <p className={`text-gray-200 ${isPresenting ? 'text-sm' : 'text-[10px]'} mb-2 leading-snug`}>{m.desc}</p>
                <span className={`inline-block px-2 py-0.5 ${colorMap[m.color].bg} ${colorMap[m.color].text} rounded text-[10px] font-semibold`}>
                  Bias: {m.bias}
                </span>
              </div>
            ) : i === revealedCount ? (
              <p className={`${colorMap[m.color].text} text-xs italic`}>Click to reveal...</p>
            ) : (
              <p className="text-gray-600 text-[10px]">Locked</p>
            )}
          </div>
        ))}
      </div>

      {/* Progress indicator */}
      <div className="flex justify-center items-center gap-2 mb-3">
        {methods.map((_, i) => (
          <div key={i} className={`w-2 h-2 rounded-full transition-colors ${i < revealedCount ? 'bg-green-500' : 'bg-gray-600'}`} />
        ))}
        <span className="ml-2 text-gray-400 text-xs">{revealedCount}/5</span>
        {revealedCount < 5 && (
          <button onClick={() => setRevealedCount(5)} className="ml-2 text-gray-500 hover:text-gray-300 text-xs">Skip →</button>
        )}
      </div>

      {/* Details Accordion - Shows after all revealed */}
      {revealedCount >= 5 && (
        <div className="max-w-4xl mx-auto w-full animate-fadeIn flex-1 overflow-auto">
          <h3 className={`${isPresenting ? 'text-xl' : 'text-base'} font-bold text-white mb-2 text-center`}>How to Do It & Evaluation</h3>
          <div className="space-y-1.5 max-h-[35vh] overflow-auto">
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
                  className={`w-full flex items-center justify-between p-2 text-left`}
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
                  <div className="px-2 pb-2 space-y-2">
                    {/* How to do it */}
                    <div className={`${colorMap[m.color].bg} rounded p-2 border ${colorMap[m.color].border}`}>
                      <span className={`text-xs ${colorMap[m.color].text} font-semibold`}>📝 How: </span>
                      <span className="text-xs text-gray-300">{m.how}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-green-900/20 rounded p-2 border border-green-500/30">
                        <div className="flex items-center gap-1 mb-1">
                          <ThumbsUp className="text-green-400" size={12} />
                          <span className="text-[10px] text-green-400 font-semibold">Strengths</span>
                        </div>
                        <ul className="text-[10px] text-gray-300 space-y-0.5">
                          {m.pros.map((pro, j) => (
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
                          {m.cons.map((con, j) => (
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

      {/* Quick Summary Toggle */}
      {revealedCount >= 5 && (
        <div className="mt-2 flex flex-col items-center">
          <button
            onClick={() => setShowSummary(!showSummary)}
            className={`px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-lg transition-all`}
          >
            {showSummary ? 'Hide Bias Ranking' : 'Show Bias Ranking'}
          </button>
          {showSummary && (
            <div className="mt-2 max-w-4xl w-full rounded-xl border border-gray-500/50 bg-gray-900/50 p-3 animate-fadeIn">
              <div className="flex items-center justify-between text-xs">
                <div className="text-center flex-1">
                  <div className="h-3 bg-gradient-to-r from-green-500 via-amber-500 to-red-500 rounded mb-1"></div>
                  <div className="flex justify-between text-gray-400">
                    <span>Low Bias</span>
                    <span>High Bias</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-2 text-[10px]">
                <span className="text-purple-300">Stratified</span>
                <span className="text-blue-300">Random</span>
                <span className="text-green-300">Systematic</span>
                <span className="text-amber-300">Opportunity</span>
                <span className="text-rose-300">Volunteer</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
