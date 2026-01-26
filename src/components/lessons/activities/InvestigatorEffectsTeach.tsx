import React, { useState } from 'react'
import { ChevronRight, User, Smile, Volume2, Brain, ClipboardList } from 'lucide-react'

interface Props {
  isPresenting: boolean
}

export const InvestigatorEffectsTeach: React.FC<Props> = ({ isPresenting }) => {
  const [revealedCount, setRevealedCount] = useState(0)
  const [expandedType, setExpandedType] = useState<number | null>(null)
  const [showSolutions, setShowSolutions] = useState(false)

  const mainConcepts = [
    { 
      title: 'What are Investigator Effects?', 
      icon: <User size={isPresenting ? 28 : 20} />, 
      color: 'cyan',
      desc: 'Any effect of the investigator\'s behaviour (conscious or unconscious) on the research outcome - from design through to data interpretation.'
    },
    { 
      title: 'Direct vs Indirect Effects', 
      icon: <Volume2 size={isPresenting ? 28 : 20} />, 
      color: 'rose',
      desc: 'Direct: physically influencing participants. Indirect: bias in design, selection, or interpretation that affects results without direct contact.'
    },
    { 
      title: 'When Do They Occur?', 
      icon: <ClipboardList size={isPresenting ? 28 : 20} />, 
      color: 'amber',
      desc: 'At any stage: study design choices, participant selection, during testing/interaction, and even during data analysis and interpretation.'
    },
  ]

  const effectTypes = [
    {
      title: 'Leading Questions & Instructions',
      icon: <Volume2 size={isPresenting ? 22 : 18} />,
      color: 'purple',
      desc: 'How questions are phrased can suggest desired answers',
      examples: 'Asking "Don\'t you think...?" vs "What do you think...?"',
      impact: 'Biases participant responses towards expected outcomes'
    },
    {
      title: 'Differential Treatment',
      icon: <Smile size={isPresenting ? 22 : 18} />,
      color: 'green',
      desc: 'Treating participants in different conditions differently',
      examples: 'Smiling more at experimental group, spending longer explaining to control group',
      impact: 'Creates confounding variables between conditions'
    },
    {
      title: 'Expectancy Effects',
      icon: <Brain size={isPresenting ? 22 : 18} />,
      color: 'blue',
      desc: 'Unconsciously communicating expectations to participants',
      examples: 'Researcher expects caffeine to improve performance and subtly encourages those participants',
      impact: 'Participants may conform to perceived expectations'
    },
    {
      title: 'Physical Characteristics',
      icon: <User size={isPresenting ? 22 : 18} />,
      color: 'orange',
      desc: 'Researcher\'s age, gender, ethnicity affecting responses',
      examples: 'Male participants responding differently to female researchers on sensitive topics',
      impact: 'Systematic bias based on who collects the data'
    },
  ]

  const colorMap: Record<string, { border: string, bg: string, text: string, iconBg: string, activeBorder: string }> = {
    cyan:   { border: 'border-cyan-500/50',   bg: 'bg-cyan-900/30',   text: 'text-cyan-300',   iconBg: 'bg-cyan-500/30', activeBorder: 'border-cyan-400' },
    rose:   { border: 'border-rose-500/50',   bg: 'bg-rose-900/30',   text: 'text-rose-300',   iconBg: 'bg-rose-500/30', activeBorder: 'border-rose-400' },
    amber:  { border: 'border-amber-500/50',  bg: 'bg-amber-900/30',  text: 'text-amber-300',  iconBg: 'bg-amber-500/30', activeBorder: 'border-amber-400' },
    purple: { border: 'border-purple-500/50', bg: 'bg-purple-900/30', text: 'text-purple-300', iconBg: 'bg-purple-500/30', activeBorder: 'border-purple-400' },
    green:  { border: 'border-green-500/50',  bg: 'bg-green-900/30',  text: 'text-green-300',  iconBg: 'bg-green-500/30', activeBorder: 'border-green-400' },
    blue:   { border: 'border-blue-500/50',   bg: 'bg-blue-900/30',   text: 'text-blue-300',   iconBg: 'bg-blue-500/30', activeBorder: 'border-blue-400' },
    orange: { border: 'border-orange-500/50', bg: 'bg-orange-900/30', text: 'text-orange-300', iconBg: 'bg-orange-500/30', activeBorder: 'border-orange-400' },
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-10' : 'p-6'} overflow-auto`}>
      <div className="mb-4 text-center">
        <h2 className={`${isPresenting ? 'text-5xl' : 'text-3xl'} font-black text-white mb-2`}>Investigator Effects</h2>
        <p className={`${isPresenting ? 'text-xl' : 'text-sm'} text-gray-400`}>Click cards in order to reveal concepts</p>
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
              <h3 className={`${isPresenting ? 'text-xl' : 'text-sm'} font-bold ${colorMap[p.color].text}`}>{p.title}</h3>
            </div>
            {i < revealedCount ? (
              <p className={`text-gray-200 leading-relaxed ${isPresenting ? 'text-lg' : 'text-sm'} animate-fadeIn`}>{p.desc}</p>
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
        {mainConcepts.map((_, i) => (
          <div key={i} className={`${isPresenting ? 'w-3 h-3' : 'w-2 h-2'} rounded-full transition-colors ${i < revealedCount ? 'bg-green-500' : 'bg-gray-600'}`} />
        ))}
        <span className={`ml-2 text-gray-400 ${isPresenting ? 'text-base' : 'text-xs'}`}>{revealedCount}/3</span>
        {revealedCount < 3 && (
          <button onClick={() => setRevealedCount(3)} className="ml-3 text-gray-500 hover:text-gray-300 text-xs">Skip →</button>
        )}
      </div>

      {/* Types Accordion - Shows after cards revealed */}
      {revealedCount >= 3 && (
        <div className="max-w-4xl mx-auto w-full animate-fadeIn flex-1">
          <h3 className={`${isPresenting ? 'text-2xl' : 'text-lg'} font-bold text-white mb-3 text-center`}>Types of Investigator Effects</h3>
          <div className="space-y-2">
            {effectTypes.map((e, i) => (
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
                  className={`w-full flex items-center justify-between ${isPresenting ? 'p-4' : 'p-3'} text-left`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`${isPresenting ? 'w-10 h-10' : 'w-8 h-8'} rounded-full ${colorMap[e.color].bg} border ${colorMap[e.color].border} flex items-center justify-center ${colorMap[e.color].text}`}>
                      {e.icon}
                    </div>
                    <div>
                      <h4 className={`${isPresenting ? 'text-lg' : 'text-sm'} font-bold ${colorMap[e.color].text}`}>{e.title}</h4>
                      <p className={`${isPresenting ? 'text-sm' : 'text-xs'} text-gray-400`}>{e.desc}</p>
                    </div>
                  </div>
                  <ChevronRight 
                    className={`${colorMap[e.color].text} transition-transform duration-300 ${expandedType === i ? 'rotate-90' : ''}`} 
                    size={isPresenting ? 22 : 18} 
                  />
                </button>

                <div className={`transition-all duration-300 ${expandedType === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className={`${isPresenting ? 'px-4 pb-4' : 'px-3 pb-3'} space-y-2`}>
                    <div className={`${colorMap[e.color].bg} rounded-lg ${isPresenting ? 'p-3' : 'p-2'}`}>
                      <span className={`${isPresenting ? 'text-sm' : 'text-xs'} ${colorMap[e.color].text} font-semibold`}>📝 Example: </span>
                      <span className={`${isPresenting ? 'text-sm' : 'text-xs'} text-gray-300`}>{e.examples}</span>
                    </div>
                    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-2">
                      <span className={`${isPresenting ? 'text-sm' : 'text-xs'} text-red-300 font-semibold`}>⚠️ Impact: </span>
                      <span className={`${isPresenting ? 'text-sm' : 'text-xs'} text-gray-300`}>{e.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Solutions Panel */}
      {revealedCount >= 3 && (
        <div className="mt-4 flex flex-col items-center">
          <button
            onClick={() => setShowSolutions(!showSolutions)}
            className={`${isPresenting ? 'px-5 py-2.5 text-base' : 'px-4 py-2 text-sm'} bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-lg transition-all`}
          >
            {showSolutions ? 'Hide Solutions' : 'How to Control Investigator Effects'}
          </button>
          {showSolutions && (
            <div className={`mt-3 max-w-4xl w-full rounded-xl border border-green-500/50 bg-green-900/20 ${isPresenting ? 'p-4' : 'p-3'} animate-fadeIn`}>
              <h4 className={`${isPresenting ? 'text-lg' : 'text-base'} font-bold text-green-400 mb-2`}>🛡️ Control Methods</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <p className={`${isPresenting ? 'text-base' : 'text-sm'} text-green-300 font-semibold`}>Single Blind</p>
                  <p className={`${isPresenting ? 'text-sm' : 'text-xs'} text-gray-300`}>Participants don't know which condition they're in</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <p className={`${isPresenting ? 'text-base' : 'text-sm'} text-green-300 font-semibold`}>Double Blind</p>
                  <p className={`${isPresenting ? 'text-sm' : 'text-xs'} text-gray-300`}>Neither researcher nor participants know conditions</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <p className={`${isPresenting ? 'text-base' : 'text-sm'} text-green-300 font-semibold`}>Standardised Instructions</p>
                  <p className={`${isPresenting ? 'text-sm' : 'text-xs'} text-gray-300`}>Read from a script to ensure consistency</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <p className={`${isPresenting ? 'text-base' : 'text-sm'} text-green-300 font-semibold`}>Inter-rater Reliability</p>
                  <p className={`${isPresenting ? 'text-sm' : 'text-xs'} text-gray-300`}>Multiple researchers compare interpretations</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
