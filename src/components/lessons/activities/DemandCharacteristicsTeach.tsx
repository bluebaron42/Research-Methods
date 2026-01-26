import React, { useState } from 'react'
import { ChevronRight, Eye, UserCheck, UserX, AlertTriangle, Lightbulb, ShieldAlert } from 'lucide-react'

interface Props {
  isPresenting: boolean
}

export const DemandCharacteristicsTeach: React.FC<Props> = ({ isPresenting }) => {
  const [revealedCount, setRevealedCount] = useState(0)
  const [expandedEffect, setExpandedEffect] = useState<number | null>(null)
  const [showExample, setShowExample] = useState(false)

  const mainPoints = [
    { 
      title: 'What are Demand Characteristics?', 
      icon: <Eye size={isPresenting ? 28 : 20} />, 
      color: 'rose',
      desc: 'Cues from the researcher or research situation that may reveal the purpose of the investigation, causing participants to change their natural behaviour.',
      highlight: 'reduce validity'
    },
    { 
      title: 'Why Do They Matter?', 
      icon: <AlertTriangle size={isPresenting ? 28 : 20} />, 
      color: 'amber',
      desc: 'When participants guess the aim, their behaviour becomes artificial rather than natural - this means we cannot be sure results reflect real-world behaviour.',
      highlight: 'artificial behaviour'
    },
    { 
      title: 'Sources of Cues', 
      icon: <ShieldAlert size={isPresenting ? 28 : 20} />, 
      color: 'purple',
      desc: 'Instructions, questions asked, experimental setup, the presence of equipment, even the researcher\'s body language can all give away the study\'s purpose.',
      highlight: 'multiple sources'
    },
  ]

  const effects = [
    {
      title: "The 'Please-U' Effect",
      icon: <UserCheck size={isPresenting ? 24 : 20} />,
      color: 'green',
      desc: 'Participants work out the hypothesis and act to support it.',
      detail: 'They want to be "good participants" and help the researcher get the results they expect. This can inflate effect sizes.',
      example: 'A participant in a memory study tries extra hard when they think the researcher expects improvement.'
    },
    {
      title: "The 'Screw-U' Effect", 
      icon: <UserX size={isPresenting ? 24 : 20} />,
      color: 'red',
      desc: 'Participants deliberately underperform to sabotage results.',
      detail: 'They may resent being studied or want to spoil the experiment. This can mask real effects or create false negatives.',
      example: 'A student participant deliberately answers incorrectly because they feel the study is wasting their time.'
    },
  ]

  const colorMap: Record<string, { border: string, bg: string, text: string, iconBg: string, activeBorder: string }> = {
    rose:   { border: 'border-rose-500/50',   bg: 'bg-rose-900/30',   text: 'text-rose-300',   iconBg: 'bg-rose-500/30', activeBorder: 'border-rose-400' },
    amber:  { border: 'border-amber-500/50',  bg: 'bg-amber-900/30',  text: 'text-amber-300',  iconBg: 'bg-amber-500/30', activeBorder: 'border-amber-400' },
    purple: { border: 'border-purple-500/50', bg: 'bg-purple-900/30', text: 'text-purple-300', iconBg: 'bg-purple-500/30', activeBorder: 'border-purple-400' },
    green:  { border: 'border-green-500/50',  bg: 'bg-green-900/30',  text: 'text-green-300',  iconBg: 'bg-green-500/30', activeBorder: 'border-green-400' },
    red:    { border: 'border-red-500/50',    bg: 'bg-red-900/30',    text: 'text-red-300',    iconBg: 'bg-red-500/30', activeBorder: 'border-red-400' },
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-10' : 'p-6'}`}>
      <div className="mb-4 text-center">
        <h2 className={`${isPresenting ? 'text-5xl' : 'text-3xl'} font-black text-white mb-2`}>Demand Characteristics</h2>
        <p className={`${isPresenting ? 'text-xl' : 'text-sm'} text-gray-400`}>Click each card to reveal key concepts</p>
      </div>

      {/* Click-to-Reveal Cards */}
      <div className={`grid grid-cols-3 max-w-6xl mx-auto w-full ${isPresenting ? 'gap-5' : 'gap-3'} mb-4`}>
        {mainPoints.map((p, i) => (
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
                <p className={`text-gray-200 leading-relaxed ${isPresenting ? 'text-lg' : 'text-sm'}`}>{p.desc}</p>
                <span className={`inline-block mt-2 px-2 py-1 ${colorMap[p.color].bg} ${colorMap[p.color].text} rounded text-xs font-semibold`}>
                  Key: {p.highlight}
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
      <div className="flex justify-center items-center gap-3 mb-3">
        {mainPoints.map((_, i) => (
          <div key={i} className={`${isPresenting ? 'w-3 h-3' : 'w-2 h-2'} rounded-full transition-colors ${i < revealedCount ? 'bg-green-500' : 'bg-gray-600'}`} />
        ))}
        <span className={`ml-2 text-gray-400 ${isPresenting ? 'text-base' : 'text-xs'}`}>{revealedCount}/3</span>
        {revealedCount < 3 && (
          <button onClick={() => setRevealedCount(3)} className="ml-3 text-gray-500 hover:text-gray-300 text-xs">Skip →</button>
        )}
      </div>

      {/* Effects Accordion - Shows after cards revealed */}
      {revealedCount >= 3 && (
        <div className="max-w-4xl mx-auto w-full animate-fadeIn">
          <h3 className={`${isPresenting ? 'text-2xl' : 'text-lg'} font-bold text-white mb-3 text-center`}>Types of Participant Responses</h3>
          <div className="space-y-2">
            {effects.map((e, i) => (
              <div 
                key={i}
                className={`rounded-xl border-2 transition-all duration-300 overflow-hidden ${
                  expandedEffect === i 
                    ? `${colorMap[e.color].activeBorder} ${colorMap[e.color].bg}` 
                    : `${colorMap[e.color].border} bg-gray-900/40 hover:${colorMap[e.color].bg}`
                }`}
              >
                <button
                  onClick={() => setExpandedEffect(expandedEffect === i ? null : i)}
                  className={`w-full flex items-center justify-between ${isPresenting ? 'p-4' : 'p-3'} text-left`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`${isPresenting ? 'w-10 h-10' : 'w-8 h-8'} rounded-full ${colorMap[e.color].bg} border ${colorMap[e.color].border} flex items-center justify-center ${colorMap[e.color].text}`}>
                      {e.icon}
                    </div>
                    <div>
                      <h4 className={`${isPresenting ? 'text-xl' : 'text-base'} font-bold ${colorMap[e.color].text}`}>{e.title}</h4>
                      <p className={`${isPresenting ? 'text-base' : 'text-sm'} text-gray-400`}>{e.desc}</p>
                    </div>
                  </div>
                  <ChevronRight 
                    className={`${colorMap[e.color].text} transition-transform duration-300 ${expandedEffect === i ? 'rotate-90' : ''}`} 
                    size={isPresenting ? 24 : 18} 
                  />
                </button>

                <div className={`transition-all duration-300 ${expandedEffect === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className={`${isPresenting ? 'px-4 pb-4' : 'px-3 pb-3'} space-y-2`}>
                    <p className={`text-gray-200 ${isPresenting ? 'text-base' : 'text-sm'}`}>{e.detail}</p>
                    <div className={`${colorMap[e.color].bg} rounded-lg ${isPresenting ? 'p-3' : 'p-2'}`}>
                      <span className={`${isPresenting ? 'text-sm' : 'text-xs'} ${colorMap[e.color].text} font-semibold`}>📝 Example: </span>
                      <span className={`${isPresenting ? 'text-sm' : 'text-xs'} text-gray-300`}>{e.example}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Example Button & Panel */}
      {revealedCount >= 3 && (
        <div className="mt-4 flex flex-col items-center">
          <button
            onClick={() => setShowExample(!showExample)}
            className={`${isPresenting ? 'px-5 py-2.5 text-base' : 'px-4 py-2 text-sm'} bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-bold rounded-lg transition-all`}
          >
            {showExample ? 'Hide Key Point' : 'Show Key Point'}
          </button>
          {showExample && (
            <div className={`mt-3 max-w-4xl w-full rounded-xl border border-amber-500/50 bg-amber-900/20 ${isPresenting ? 'p-4' : 'p-3'} animate-fadeIn`}>
              <div className="flex gap-3">
                <Lightbulb className="text-amber-400 flex-shrink-0" size={isPresenting ? 24 : 20} />
                <p className={`${isPresenting ? 'text-lg' : 'text-sm'} text-amber-200`}>
                  <span className="font-bold">⚠️ Key Point:</span> In either case, behaviour is no longer natural - this reduces the <span className="text-amber-400 font-semibold">internal validity</span> of the findings because we cannot be sure the IV caused the change in the DV.
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
