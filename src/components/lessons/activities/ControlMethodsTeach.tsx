import React, { useState } from 'react'
import { ChevronRight, Shuffle, ClipboardList, ShieldCheck, Lightbulb } from 'lucide-react'

interface Props {
  isPresenting: boolean
}

export const ControlMethodsTeach: React.FC<Props> = ({ isPresenting }) => {
  const [revealedCount, setRevealedCount] = useState(0)
  const [expandedMethod, setExpandedMethod] = useState<number | null>(null)

  const mainConcepts = [
    { 
      title: 'Randomisation', 
      icon: <Shuffle size={isPresenting ? 28 : 20} />, 
      color: 'blue',
      desc: 'Using chance to control for bias when designing materials and deciding order of conditions.',
      uses: ['Order of word lists', 'Condition assignment', 'Stimulus presentation order'],
      keyPoint: 'Eliminates experimenter bias in decisions'
    },
    { 
      title: 'Standardisation', 
      icon: <ClipboardList size={isPresenting ? 28 : 20} />, 
      color: 'green',
      desc: 'Ensuring all participants are subject to the same environment, information and experience.',
      uses: ['Written scripts for instructions', 'Identical testing environments', 'Same time limits for all'],
      keyPoint: 'Ensures consistent procedures'
    },
    { 
      title: 'Counterbalancing', 
      icon: <ShieldCheck size={isPresenting ? 28 : 20} />, 
      color: 'purple',
      desc: 'Systematically varying the order of conditions to control for order effects in repeated measures designs.',
      uses: ['ABBA design', 'Latin square design', 'Half do A then B, half do B then A'],
      keyPoint: 'Controls for practice/fatigue effects'
    },
  ]

  const colorMap: Record<string, { border: string, bg: string, text: string, iconBg: string, activeBorder: string }> = {
    blue:   { border: 'border-blue-500/50',   bg: 'bg-blue-900/30',   text: 'text-blue-300',   iconBg: 'bg-blue-500/30', activeBorder: 'border-blue-400' },
    green:  { border: 'border-green-500/50',  bg: 'bg-green-900/30',  text: 'text-green-300',  iconBg: 'bg-green-500/30', activeBorder: 'border-green-400' },
    purple: { border: 'border-purple-500/50', bg: 'bg-purple-900/30', text: 'text-purple-300', iconBg: 'bg-purple-500/30', activeBorder: 'border-purple-400' },
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-10' : 'p-6'}`}>
      <div className="mb-4 text-center">
        <h2 className={`${isPresenting ? 'text-5xl' : 'text-3xl'} font-black text-white mb-2`}>Control Methods</h2>
        <p className={`${isPresenting ? 'text-xl' : 'text-sm'} text-gray-400`}>Randomisation, Standardisation & Counterbalancing</p>
      </div>

      {/* Click-to-Reveal Cards */}
      <div className={`grid grid-cols-3 max-w-6xl mx-auto w-full ${isPresenting ? 'gap-5' : 'gap-3'} mb-4`}>
        {mainConcepts.map((p, i) => (
          <div 
            key={i}
            onClick={() => i === revealedCount && setRevealedCount(prev => prev + 1)}
            className={`rounded-2xl border-2 ${colorMap[p.color].border} ${colorMap[p.color].bg} ${isPresenting ? 'p-5' : 'p-4'} transition-all duration-500 cursor-pointer ${
              i < revealedCount 
                ? 'opacity-100 scale-100' 
                : i === revealedCount 
                  ? 'opacity-100 scale-100 ring-2 ring-white/20 animate-pulse' 
                  : 'opacity-30 scale-95'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`${isPresenting ? 'w-12 h-12' : 'w-9 h-9'} rounded-full ${colorMap[p.color].iconBg} flex items-center justify-center ${colorMap[p.color].text}`}>
                {p.icon}
              </div>
              <h3 className={`${isPresenting ? 'text-xl' : 'text-base'} font-bold ${colorMap[p.color].text}`}>{p.title}</h3>
            </div>
            {i < revealedCount ? (
              <div className="animate-fadeIn">
                <p className={`text-gray-200 leading-relaxed ${isPresenting ? 'text-lg' : 'text-sm'} mb-3`}>{p.desc}</p>
                <div className={`${colorMap[p.color].bg} rounded-lg p-2`}>
                  <p className={`${isPresenting ? 'text-sm' : 'text-xs'} ${colorMap[p.color].text} font-semibold mb-1`}>Uses:</p>
                  <ul className={`${isPresenting ? 'text-sm' : 'text-xs'} text-gray-300 space-y-1`}>
                    {p.uses.map((use, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-current rounded-full"></span>
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className={`inline-block mt-2 px-2 py-1 bg-gray-800/50 ${colorMap[p.color].text} rounded text-xs font-semibold`}>
                  ✓ {p.keyPoint}
                </span>
              </div>
            ) : i === revealedCount ? (
              <p className={`${colorMap[p.color].text} ${isPresenting ? 'text-base' : 'text-sm'} italic`}>Click to reveal...</p>
            ) : (
              <p className="text-gray-600 text-sm">Locked</p>
            )}
          </div>
        ))}
      </div>

      {/* Progress indicator */}
      <div className="flex justify-center items-center gap-3 mb-4">
        {mainConcepts.map((_, i) => (
          <div key={i} className={`${isPresenting ? 'w-3 h-3' : 'w-2 h-2'} rounded-full transition-colors ${i < revealedCount ? 'bg-green-500' : 'bg-gray-600'}`} />
        ))}
        <span className={`ml-2 text-gray-400 ${isPresenting ? 'text-base' : 'text-xs'}`}>{revealedCount}/3</span>
        {revealedCount < 3 && (
          <button onClick={() => setRevealedCount(3)} className="ml-3 text-gray-500 hover:text-gray-300 text-xs">Skip →</button>
        )}
      </div>

      {/* Detailed Examples Accordion - Shows after all revealed */}
      {revealedCount >= 3 && (
        <div className="max-w-4xl mx-auto w-full animate-fadeIn">
          <h3 className={`${isPresenting ? 'text-2xl' : 'text-lg'} font-bold text-white mb-3 text-center`}>Detailed Examples</h3>
          <div className="space-y-2">
            {mainConcepts.map((m, i) => (
              <div 
                key={i}
                className={`rounded-xl border-2 transition-all duration-300 overflow-hidden ${
                  expandedMethod === i 
                    ? `${colorMap[m.color].activeBorder} ${colorMap[m.color].bg}` 
                    : `${colorMap[m.color].border} bg-gray-900/40`
                }`}
              >
                <button
                  onClick={() => setExpandedMethod(expandedMethod === i ? null : i)}
                  className={`w-full flex items-center justify-between ${isPresenting ? 'p-4' : 'p-3'} text-left`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`${isPresenting ? 'w-10 h-10' : 'w-8 h-8'} rounded-full ${colorMap[m.color].bg} border ${colorMap[m.color].border} flex items-center justify-center ${colorMap[m.color].text}`}>
                      {m.icon}
                    </div>
                    <h4 className={`${isPresenting ? 'text-lg' : 'text-base'} font-bold ${colorMap[m.color].text}`}>{m.title} Example</h4>
                  </div>
                  <ChevronRight 
                    className={`${colorMap[m.color].text} transition-transform duration-300 ${expandedMethod === i ? 'rotate-90' : ''}`} 
                    size={isPresenting ? 22 : 18} 
                  />
                </button>

                <div className={`transition-all duration-300 ${expandedMethod === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className={`${isPresenting ? 'px-4 pb-4' : 'px-3 pb-3'}`}>
                    {i === 0 && (
                      <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-500/30">
                        <p className={`${isPresenting ? 'text-base' : 'text-sm'} text-gray-200 mb-2`}>
                          <strong className="text-blue-300">Memory study:</strong> When creating word lists for recall, use a random number generator to determine the order rather than choosing what "feels right".
                        </p>
                        <p className={`${isPresenting ? 'text-sm' : 'text-xs'} text-blue-300`}>
                          ✓ This prevents the experimenter unconsciously placing easier words at certain positions.
                        </p>
                      </div>
                    )}
                    {i === 1 && (
                      <div className="bg-green-900/20 rounded-lg p-3 border border-green-500/30">
                        <p className={`${isPresenting ? 'text-base' : 'text-sm'} text-gray-200 mb-2`}>
                          <strong className="text-green-300">Reaction time study:</strong> All participants receive identical written instructions, the same lighting conditions, and exactly 30 seconds per trial.
                        </p>
                        <p className={`${isPresenting ? 'text-sm' : 'text-xs'} text-green-300`}>
                          ✓ Any differences between conditions can only be due to the IV, not environmental factors.
                        </p>
                      </div>
                    )}
                    {i === 2 && (
                      <div className="bg-purple-900/20 rounded-lg p-3 border border-purple-500/30">
                        <p className={`${isPresenting ? 'text-base' : 'text-sm'} text-gray-200 mb-2`}>
                          <strong className="text-purple-300">Repeated measures:</strong> Half the participants do Condition A first then B; the other half do B then A. Average performance is compared.
                        </p>
                        <p className={`${isPresenting ? 'text-sm' : 'text-xs'} text-purple-300`}>
                          ✓ If participants improve due to practice, this affects both conditions equally.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Key Summary */}
      {revealedCount >= 3 && (
        <div className={`mt-4 max-w-4xl mx-auto w-full rounded-xl border border-rose-500/50 bg-rose-900/20 ${isPresenting ? 'p-4' : 'p-3'} animate-fadeIn`}>
          <div className="flex gap-3">
            <Lightbulb className="text-rose-400 flex-shrink-0" size={isPresenting ? 24 : 20} />
            <p className={`${isPresenting ? 'text-lg' : 'text-sm'} text-rose-200`}>
              <span className="font-bold">Key Point:</span> These methods ensure non-standardised changes don't become <span className="text-rose-400 font-semibold">extraneous variables</span> that threaten the validity of your findings.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
