import React, { useState } from 'react'
import { ChevronRight, Eye, EyeOff, UserCheck, Users, LayoutGrid, Clock, ThumbsUp, ThumbsDown, Lightbulb } from 'lucide-react'

interface Props {
  isPresenting: boolean
}

export const ObservationsTeach: React.FC<Props> = ({ isPresenting }) => {
  const [revealedCount, setRevealedCount] = useState(0)
  const [expandedType, setExpandedType] = useState<number | null>(null)
  const [showTechniques, setShowTechniques] = useState(false)

  const observationTypes = [
    { 
      title: 'Naturalistic vs Controlled', 
      icon: <Eye size={isPresenting ? 24 : 18} />, 
      color: 'blue',
      desc: 'Where the observation takes place - natural environment or artificial setting.',
      comparison: {
        left: { name: 'Naturalistic', points: ['Real-world setting', 'High ecological validity', 'Less control over EVs', 'Behaviour is natural'] },
        right: { name: 'Controlled', points: ['Lab/artificial setting', 'Can control EVs', 'May alter behaviour', 'Easier to replicate'] }
      }
    },
    { 
      title: 'Covert vs Overt', 
      icon: <EyeOff size={isPresenting ? 24 : 18} />, 
      color: 'amber',
      desc: 'Whether participants know they\'re being observed.',
      comparison: {
        left: { name: 'Covert', points: ['Participants unaware', 'Natural behaviour', 'Ethical issues (consent)', 'No demand characteristics'] },
        right: { name: 'Overt', points: ['Participants know', 'Ethically better', 'May change behaviour', 'Can gain consent'] }
      }
    },
    { 
      title: 'Participant vs Non-Participant', 
      icon: <UserCheck size={isPresenting ? 24 : 18} />, 
      color: 'green',
      desc: 'Whether the researcher joins in with the group being observed.',
      comparison: {
        left: { name: 'Participant', points: ['Researcher joins in', 'Insider perspective', 'May lose objectivity', 'Deep understanding'] },
        right: { name: 'Non-Participant', points: ['Researcher outside group', 'More objective', 'May miss nuances', 'Less intrusive'] }
      }
    },
    { 
      title: 'Structured vs Unstructured', 
      icon: <LayoutGrid size={isPresenting ? 24 : 18} />, 
      color: 'purple',
      desc: 'How behaviour is recorded - using a coding system or free description.',
      comparison: {
        left: { name: 'Structured', points: ['Predetermined categories', 'Easy to analyse', 'May miss unexpected', 'High reliability'] },
        right: { name: 'Unstructured', points: ['Free-flowing notes', 'Captures everything', 'Hard to analyse', 'Subjective'] }
      }
    },
  ]

  const techniques = [
    { name: 'Behavioural Categories', desc: 'Define specific observable behaviours to record', example: 'Smile, frown, talk, gesture' },
    { name: 'Event Sampling', desc: 'Record every time a target behaviour occurs', example: 'Count each instance of aggression' },
    { name: 'Time Sampling', desc: 'Record behaviour at set time intervals', example: 'Record behaviour every 30 seconds' },
  ]

  const colorMap: Record<string, { border: string, bg: string, text: string, iconBg: string, activeBorder: string }> = {
    blue:   { border: 'border-blue-500/50',   bg: 'bg-blue-900/30',   text: 'text-blue-300',   iconBg: 'bg-blue-500/30', activeBorder: 'border-blue-400' },
    amber:  { border: 'border-amber-500/50',  bg: 'bg-amber-900/30',  text: 'text-amber-300',  iconBg: 'bg-amber-500/30', activeBorder: 'border-amber-400' },
    green:  { border: 'border-green-500/50',  bg: 'bg-green-900/30',  text: 'text-green-300',  iconBg: 'bg-green-500/30', activeBorder: 'border-green-400' },
    purple: { border: 'border-purple-500/50', bg: 'bg-purple-900/30', text: 'text-purple-300', iconBg: 'bg-purple-500/30', activeBorder: 'border-purple-400' },
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-4'} overflow-auto`}>
      <div className="mb-3 text-center">
        <h2 className={`${isPresenting ? 'text-4xl' : 'text-2xl'} font-black text-white mb-1`}>Observational Research</h2>
        <p className={`${isPresenting ? 'text-lg' : 'text-xs'} text-gray-400`}>Click each type to reveal the key distinctions</p>
      </div>

      {/* Click-to-Reveal Cards - 2x2 Grid */}
      <div className={`grid grid-cols-2 max-w-5xl mx-auto w-full ${isPresenting ? 'gap-4' : 'gap-2'} mb-3`}>
        {observationTypes.map((o, i) => (
          <div 
            key={i}
            onClick={() => i === revealedCount && setRevealedCount(prev => prev + 1)}
            className={`rounded-xl border-2 ${colorMap[o.color].border} ${colorMap[o.color].bg} ${isPresenting ? 'p-4' : 'p-2'} transition-all duration-500 cursor-pointer ${
              i < revealedCount 
                ? 'opacity-100 scale-100' 
                : i === revealedCount 
                  ? 'opacity-100 scale-100 ring-2 ring-white/20 animate-pulse' 
                  : 'opacity-30 scale-95'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className={`${isPresenting ? 'w-9 h-9' : 'w-7 h-7'} rounded-full ${colorMap[o.color].iconBg} flex items-center justify-center ${colorMap[o.color].text}`}>
                {o.icon}
              </div>
              <h3 className={`${isPresenting ? 'text-lg' : 'text-sm'} font-bold ${colorMap[o.color].text}`}>{o.title}</h3>
            </div>
            {i < revealedCount ? (
              <p className={`text-gray-200 ${isPresenting ? 'text-base' : 'text-xs'} animate-fadeIn`}>{o.desc}</p>
            ) : i === revealedCount ? (
              <p className={`${colorMap[o.color].text} text-xs italic`}>Click to reveal...</p>
            ) : (
              <p className="text-gray-600 text-xs">Locked</p>
            )}
          </div>
        ))}
      </div>

      {/* Progress indicator */}
      <div className="flex justify-center items-center gap-2 mb-3">
        {observationTypes.map((_, i) => (
          <div key={i} className={`w-2 h-2 rounded-full transition-colors ${i < revealedCount ? 'bg-green-500' : 'bg-gray-600'}`} />
        ))}
        <span className="ml-2 text-gray-400 text-xs">{revealedCount}/4</span>
        {revealedCount < 4 && (
          <button onClick={() => setRevealedCount(4)} className="ml-2 text-gray-500 hover:text-gray-300 text-xs">Skip →</button>
        )}
      </div>

      {/* Comparison Accordion - Shows after all revealed */}
      {revealedCount >= 4 && (
        <div className="max-w-4xl mx-auto w-full animate-fadeIn flex-1 overflow-auto">
          <h3 className={`${isPresenting ? 'text-xl' : 'text-base'} font-bold text-white mb-2 text-center`}>Detailed Comparisons</h3>
          <div className="space-y-1.5 max-h-[30vh] overflow-auto">
            {observationTypes.map((o, i) => (
              <div 
                key={i}
                className={`rounded-lg border-2 transition-all duration-300 overflow-hidden ${
                  expandedType === i 
                    ? `${colorMap[o.color].activeBorder} ${colorMap[o.color].bg}` 
                    : `${colorMap[o.color].border} bg-gray-900/40`
                }`}
              >
                <button
                  onClick={() => setExpandedType(expandedType === i ? null : i)}
                  className="w-full flex items-center justify-between p-2 text-left"
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full ${colorMap[o.color].bg} border ${colorMap[o.color].border} flex items-center justify-center ${colorMap[o.color].text}`}>
                      {o.icon}
                    </div>
                    <h4 className={`${isPresenting ? 'text-base' : 'text-sm'} font-bold ${colorMap[o.color].text}`}>{o.title}</h4>
                  </div>
                  <ChevronRight 
                    className={`${colorMap[o.color].text} transition-transform duration-300 ${expandedType === i ? 'rotate-90' : ''}`} 
                    size={16} 
                  />
                </button>

                <div className={`transition-all duration-300 ${expandedType === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-2 pb-2">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-blue-900/20 rounded p-2 border border-blue-500/30">
                        <h5 className="text-xs text-blue-300 font-semibold mb-1">{o.comparison.left.name}</h5>
                        <ul className="text-[10px] text-gray-300 space-y-0.5">
                          {o.comparison.left.points.map((point, j) => (
                            <li key={j} className="flex items-start gap-1">
                              <span className="text-blue-400">•</span>{point}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-rose-900/20 rounded p-2 border border-rose-500/30">
                        <h5 className="text-xs text-rose-300 font-semibold mb-1">{o.comparison.right.name}</h5>
                        <ul className="text-[10px] text-gray-300 space-y-0.5">
                          {o.comparison.right.points.map((point, j) => (
                            <li key={j} className="flex items-start gap-1">
                              <span className="text-rose-400">•</span>{point}
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

      {/* Sampling Techniques Button & Panel */}
      {revealedCount >= 4 && (
        <div className="mt-2 flex flex-col items-center">
          <button
            onClick={() => setShowTechniques(!showTechniques)}
            className={`px-4 py-2 text-sm bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-lg transition-all`}
          >
            {showTechniques ? 'Hide Sampling Techniques' : 'Show Sampling Techniques'}
          </button>
          {showTechniques && (
            <div className="mt-2 max-w-4xl w-full rounded-xl border border-cyan-500/50 bg-cyan-900/20 p-3 animate-fadeIn">
              <h4 className="text-sm font-bold text-cyan-300 mb-2">📋 Recording Behaviour</h4>
              <div className="grid grid-cols-3 gap-2">
                {techniques.map((t, i) => (
                  <div key={i} className="bg-gray-800/50 rounded p-2 border border-gray-700">
                    <p className="text-xs text-cyan-300 font-semibold">{t.name}</p>
                    <p className="text-[10px] text-gray-400">{t.desc}</p>
                    <p className="text-[10px] text-gray-500 italic mt-1">e.g., {t.example}</p>
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
