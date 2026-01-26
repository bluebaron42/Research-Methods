import { useState } from 'react'
import { EyeOff, Eye, CheckCircle, XCircle, AlertTriangle } from 'lucide-react'

interface Props {
  isPresenting?: boolean
}

export default function CovertOvertTeach({ isPresenting }: Props) {
  const [activeTab, setActiveTab] = useState<'covert' | 'overt'>('covert')
  const [revealedCovert, setRevealedCovert] = useState(0)
  const [revealedOvert, setRevealedOvert] = useState(0)

  const covertPoints = [
    { text: "Participants unaware they're being observed", type: "definition", icon: "🔍" },
    { text: "No participant reactivity - natural behaviour", type: "strength", icon: "✓" },
    { text: "Higher validity - genuine responses", type: "strength", icon: "✓" },
    { text: "Ethical issues - no informed consent", type: "limitation", icon: "✗" },
    { text: "Invasion of privacy concerns", type: "limitation", icon: "✗" }
  ]

  const overtPoints = [
    { text: "Participants know they're being observed", type: "definition", icon: "🔍" },
    { text: "Informed consent can be obtained", type: "strength", icon: "✓" },
    { text: "More ethically acceptable", type: "strength", icon: "✓" },
    { text: "Risk of behaviour change (Hawthorne effect)", type: "limitation", icon: "✗" },
    { text: "Demand characteristics may emerge", type: "limitation", icon: "✗" }
  ]

  const currentPoints = activeTab === 'covert' ? covertPoints : overtPoints
  const revealedCount = activeTab === 'covert' ? revealedCovert : revealedOvert
  const setRevealedCount = activeTab === 'covert' ? setRevealedCovert : setRevealedOvert

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-rose-400 mb-2">Covert vs Overt Observations</h2>
          <p className="text-gray-400">Does the participant know they're being watched?</p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setActiveTab('covert')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300
              ${activeTab === 'covert' 
                ? 'bg-gradient-to-r from-purple-500/30 to-indigo-500/20 border border-purple-500/50 text-purple-400' 
                : 'bg-gray-800/50 border border-gray-700 text-gray-400 hover:border-purple-500/30'
              }`}
          >
            <EyeOff className="w-5 h-5" />
            <span className="font-bold">Covert</span>
            <span className="text-xs">(Hidden)</span>
          </button>
          <button
            onClick={() => setActiveTab('overt')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300
              ${activeTab === 'overt' 
                ? 'bg-gradient-to-r from-amber-500/30 to-orange-500/20 border border-amber-500/50 text-amber-400' 
                : 'bg-gray-800/50 border border-gray-700 text-gray-400 hover:border-amber-500/30'
              }`}
          >
            <Eye className="w-5 h-5" />
            <span className="font-bold">Overt</span>
            <span className="text-xs">(Open)</span>
          </button>
        </div>

        {/* Content Card */}
        <div className={`rounded-xl p-6 border transition-all duration-300
          ${activeTab === 'covert' 
            ? 'bg-gradient-to-br from-purple-500/20 to-indigo-500/10 border-purple-500/30' 
            : 'bg-gradient-to-br from-amber-500/20 to-orange-500/10 border-amber-500/30'
          }`}
        >
          {/* Icon and Title */}
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center
              ${activeTab === 'covert' ? 'bg-purple-500/20' : 'bg-amber-500/20'}`}
            >
              {activeTab === 'covert' 
                ? <EyeOff className="w-8 h-8 text-purple-400" />
                : <Eye className="w-8 h-8 text-amber-400" />
              }
            </div>
            <div>
              <h3 className={`text-2xl font-bold ${activeTab === 'covert' ? 'text-purple-400' : 'text-amber-400'}`}>
                {activeTab === 'covert' ? '🕵️ Covert Observation' : '👀 Overt Observation'}
              </h3>
              <p className="text-gray-400">
                {activeTab === 'covert' 
                  ? 'Behaviour observed secretly - participants unaware'
                  : 'Participants know they are being watched'
                }
              </p>
            </div>
          </div>

          {/* Points - Click to Reveal */}
          <div className="space-y-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">Click to reveal key points</span>
              <span className={`text-sm ${activeTab === 'covert' ? 'text-purple-400' : 'text-amber-400'}`}>
                {revealedCount}/5
              </span>
            </div>
            
            {currentPoints.map((point, idx) => {
              const isRevealed = revealedCount > idx
              return (
                <div
                  key={`${activeTab}-${idx}`}
                  onClick={() => !isRevealed && setRevealedCount(idx + 1)}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 cursor-pointer
                    ${isRevealed 
                      ? point.type === 'limitation' 
                        ? 'bg-red-500/10 border border-red-500/20' 
                        : point.type === 'strength'
                          ? 'bg-green-500/10 border border-green-500/20'
                          : 'bg-gray-800/50 border border-gray-700'
                      : 'bg-gray-800/30 border border-gray-700 hover:border-gray-600'
                    }`}
                >
                  {isRevealed ? (
                    <span className="text-xl">{point.icon}</span>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                      <span className="text-gray-500 text-xs">{idx + 1}</span>
                    </div>
                  )}
                  <span className={`${isRevealed ? 'text-gray-200' : 'text-gray-500'}`}>
                    {isRevealed ? point.text : 'Click to reveal...'}
                  </span>
                  {isRevealed && point.type === 'strength' && (
                    <CheckCircle className="w-4 h-4 text-green-400 ml-auto" />
                  )}
                  {isRevealed && point.type === 'limitation' && (
                    <XCircle className="w-4 h-4 text-red-400 ml-auto" />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Example Box */}
        <div className="mt-6 bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="flex items-start gap-3">
            <AlertTriangle className={`w-5 h-5 mt-0.5 ${activeTab === 'covert' ? 'text-purple-400' : 'text-amber-400'}`} />
            <div>
              <p className="font-bold text-white text-sm mb-1">Example:</p>
              {activeTab === 'covert' ? (
                <p className="text-sm text-gray-400">
                  A researcher secretly observes commuters' mobile phone use on public transport without 
                  their knowledge. Natural behaviour is captured, but ethical concerns arise about consent.
                </p>
              ) : (
                <p className="text-sm text-gray-400">
                  A researcher tells parents their children will be observed during play. Participants 
                  have given consent, but children may behave differently knowing they're being watched.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="mt-4 text-center">
          <p className="text-gray-400 text-sm">
            <span className="text-rose-400 font-bold">Key Trade-off:</span> Covert = more natural behaviour, less ethical | 
            Overt = more ethical, less natural behaviour
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mt-4 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                revealedCount > i ? 'bg-rose-400' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
