import React, { useState } from 'react'
import { ChevronRight, TrendingUp, TrendingDown, Minus, BarChart3, ThumbsUp, ThumbsDown, Lightbulb, AlertTriangle } from 'lucide-react'

interface Props {
  isPresenting: boolean
}

export const CorrelationsTeach: React.FC<Props> = ({ isPresenting }) => {
  const [revealedCount, setRevealedCount] = useState(0)
  const [showCoefficient, setShowCoefficient] = useState(false)
  const [showCaution, setShowCaution] = useState(false)

  const correlationTypes = [
    { 
      title: 'Positive Correlation', 
      icon: <TrendingUp size={isPresenting ? 28 : 20} />, 
      color: 'green',
      desc: 'As one variable increases, the other variable also increases.',
      example: 'Height and shoe size - taller people tend to have bigger feet',
      coefficient: '+0.01 to +1.00',
      graphDirection: '↗️ Line goes up'
    },
    { 
      title: 'Negative Correlation', 
      icon: <TrendingDown size={isPresenting ? 28 : 20} />, 
      color: 'rose',
      desc: 'As one variable increases, the other variable decreases.',
      example: 'Hours of sleep and tiredness - more sleep, less tired',
      coefficient: '-0.01 to -1.00',
      graphDirection: '↘️ Line goes down'
    },
    { 
      title: 'No Correlation', 
      icon: <Minus size={isPresenting ? 28 : 20} />, 
      color: 'gray',
      desc: 'No consistent relationship between the two variables.',
      example: 'Shoe size and intelligence - no relationship',
      coefficient: '0.00',
      graphDirection: '⚪ No clear pattern'
    },
  ]

  const evaluation = {
    pros: [
      'Can study variables that cannot be manipulated',
      'Often high ecological validity (real-world data)',
      'Can identify relationships for further research',
      'Quick and easy to conduct',
      'Can use existing data (secondary data analysis)'
    ],
    cons: [
      'Cannot establish cause and effect',
      'Third variable problem - unknown factor may cause both',
      'Only measures linear relationships',
      'Correlation can be coincidental',
      'Can be misinterpreted by the public'
    ]
  }

  const colorMap: Record<string, { border: string, bg: string, text: string, iconBg: string }> = {
    green: { border: 'border-green-500/50', bg: 'bg-green-900/30', text: 'text-green-300', iconBg: 'bg-green-500/30' },
    rose:  { border: 'border-rose-500/50',  bg: 'bg-rose-900/30',  text: 'text-rose-300',  iconBg: 'bg-rose-500/30' },
    gray:  { border: 'border-gray-500/50',  bg: 'bg-gray-800/30',  text: 'text-gray-300',  iconBg: 'bg-gray-500/30' },
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-8' : 'p-5'} overflow-auto`}>
      <div className="mb-4 text-center">
        <h2 className={`${isPresenting ? 'text-5xl' : 'text-3xl'} font-black text-white mb-2`}>Correlations</h2>
        <p className={`${isPresenting ? 'text-xl' : 'text-sm'} text-gray-400`}>Click each type to reveal - measuring relationships between variables</p>
      </div>

      {/* Click-to-Reveal Cards */}
      <div className={`grid grid-cols-3 max-w-5xl mx-auto w-full ${isPresenting ? 'gap-5' : 'gap-3'} mb-4`}>
        {correlationTypes.map((c, i) => (
          <div 
            key={i}
            onClick={() => i === revealedCount && setRevealedCount(prev => prev + 1)}
            className={`rounded-2xl border-2 ${colorMap[c.color].border} ${colorMap[c.color].bg} ${isPresenting ? 'p-5' : 'p-4'} transition-all duration-500 cursor-pointer ${
              i < revealedCount 
                ? 'opacity-100 scale-100' 
                : i === revealedCount 
                  ? 'opacity-100 scale-100 ring-2 ring-white/20 animate-pulse' 
                  : 'opacity-30 scale-95'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`${isPresenting ? 'w-12 h-12' : 'w-10 h-10'} rounded-full ${colorMap[c.color].iconBg} flex items-center justify-center ${colorMap[c.color].text}`}>
                {c.icon}
              </div>
              <h3 className={`${isPresenting ? 'text-xl' : 'text-base'} font-bold ${colorMap[c.color].text}`}>{c.title}</h3>
            </div>
            {i < revealedCount ? (
              <div className="animate-fadeIn space-y-2">
                <p className={`text-gray-200 leading-relaxed ${isPresenting ? 'text-lg' : 'text-sm'}`}>{c.desc}</p>
                <div className={`${colorMap[c.color].bg} rounded-lg p-2 border ${colorMap[c.color].border}`}>
                  <p className={`${isPresenting ? 'text-sm' : 'text-xs'} text-gray-300`}>
                    <span className={`${colorMap[c.color].text} font-semibold`}>Example: </span>{c.example}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`px-2 py-1 ${colorMap[c.color].bg} ${colorMap[c.color].text} rounded text-xs font-mono`}>
                    r = {c.coefficient}
                  </span>
                  <span className={`text-sm ${colorMap[c.color].text}`}>{c.graphDirection}</span>
                </div>
              </div>
            ) : i === revealedCount ? (
              <p className={`${colorMap[c.color].text} ${isPresenting ? 'text-base' : 'text-sm'} italic`}>Click to reveal...</p>
            ) : (
              <p className="text-gray-600 text-sm">Locked</p>
            )}
          </div>
        ))}
      </div>

      {/* Progress indicator */}
      <div className="flex justify-center items-center gap-3 mb-4">
        {correlationTypes.map((_, i) => (
          <div key={i} className={`${isPresenting ? 'w-3 h-3' : 'w-2 h-2'} rounded-full transition-colors ${i < revealedCount ? 'bg-green-500' : 'bg-gray-600'}`} />
        ))}
        <span className={`ml-2 text-gray-400 ${isPresenting ? 'text-base' : 'text-xs'}`}>{revealedCount}/3</span>
        {revealedCount < 3 && (
          <button onClick={() => setRevealedCount(3)} className="ml-3 text-gray-500 hover:text-gray-300 text-xs">Skip →</button>
        )}
      </div>

      {/* Buttons Row - Shows after all revealed */}
      {revealedCount >= 3 && (
        <div className="flex justify-center gap-3 mb-4 animate-fadeIn">
          <button
            onClick={() => setShowCoefficient(!showCoefficient)}
            className={`${isPresenting ? 'px-5 py-2.5 text-base' : 'px-4 py-2 text-sm'} bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-lg transition-all`}
          >
            {showCoefficient ? 'Hide Coefficient Scale' : 'Show Coefficient Scale'}
          </button>
          <button
            onClick={() => setShowCaution(!showCaution)}
            className={`${isPresenting ? 'px-5 py-2.5 text-base' : 'px-4 py-2 text-sm'} bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold rounded-lg transition-all`}
          >
            {showCaution ? 'Hide Evaluation' : 'Evaluation'}
          </button>
        </div>
      )}

      {/* Coefficient Scale Panel */}
      {showCoefficient && (
        <div className={`max-w-4xl mx-auto w-full rounded-xl border border-cyan-500/50 bg-cyan-900/20 ${isPresenting ? 'p-4' : 'p-3'} mb-4 animate-fadeIn`}>
          <h4 className={`${isPresenting ? 'text-lg' : 'text-sm'} font-bold text-cyan-300 mb-3`}>📊 Correlation Coefficient Scale</h4>
          <div className="relative h-8 mb-2">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500 via-gray-500 to-green-500"></div>
            <div className="absolute inset-0 flex justify-between items-center px-2">
              <span className="text-xs font-bold text-white bg-rose-600/80 px-1.5 py-0.5 rounded">-1.0</span>
              <span className="text-xs font-bold text-white bg-gray-600/80 px-1.5 py-0.5 rounded">0</span>
              <span className="text-xs font-bold text-white bg-green-600/80 px-1.5 py-0.5 rounded">+1.0</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="text-rose-300">Strong negative → Weak negative</div>
            <div className="text-gray-400">No correlation</div>
            <div className="text-green-300">Weak positive → Strong positive</div>
          </div>
          <p className={`${isPresenting ? 'text-sm' : 'text-xs'} text-gray-400 mt-2 text-center`}>
            The closer to ±1.0, the stronger the relationship. ±0.7+ is strong, ±0.4-0.7 is moderate, below ±0.4 is weak.
          </p>
        </div>
      )}

      {/* Evaluation Panel */}
      {showCaution && (
        <div className={`max-w-4xl mx-auto w-full rounded-xl border border-amber-500/50 bg-amber-900/20 ${isPresenting ? 'p-4' : 'p-3'} animate-fadeIn`}>
          <h4 className={`${isPresenting ? 'text-lg' : 'text-sm'} font-bold text-amber-300 mb-3`}>⚖️ Evaluating Correlational Research</h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-green-900/20 rounded-lg p-3 border border-green-500/30">
              <div className="flex items-center gap-2 mb-2">
                <ThumbsUp className="text-green-400" size={isPresenting ? 18 : 14} />
                <span className={`${isPresenting ? 'text-sm' : 'text-xs'} text-green-400 font-semibold`}>Strengths</span>
              </div>
              <ul className={`${isPresenting ? 'text-sm' : 'text-xs'} text-gray-300 space-y-1`}>
                {evaluation.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>{pro}
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
                {evaluation.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>{con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-3 p-2 bg-red-900/30 border border-red-500/50 rounded-lg flex gap-2">
            <AlertTriangle className="text-red-400 flex-shrink-0" size={isPresenting ? 20 : 16} />
            <p className={`${isPresenting ? 'text-sm' : 'text-xs'} text-red-200`}>
              <span className="font-bold">⚠️ Critical Point:</span> Correlation does NOT equal causation! Just because two variables are related doesn't mean one causes the other.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
