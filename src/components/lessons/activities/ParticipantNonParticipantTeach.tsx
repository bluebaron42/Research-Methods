import { useState } from 'react'
import { Users, UserMinus, CheckCircle, XCircle, AlertTriangle } from 'lucide-react'

interface Props {
  isPresenting?: boolean
}

export default function ParticipantNonParticipantTeach({ isPresenting }: Props) {
  const [activeTab, setActiveTab] = useState<'participant' | 'non-participant'>('participant')
  const [revealedP, setRevealedP] = useState(0)
  const [revealedNP, setRevealedNP] = useState(0)

  const participantPoints = [
    { text: "Observer becomes part of the group being studied", type: "definition", icon: "🔍" },
    { text: "Gains first-hand experience of the situation", type: "strength", icon: "✓" },
    { text: "Increased insight into participants' lives", type: "strength", icon: "✓" },
    { text: "Can access information outsiders might miss", type: "strength", icon: "✓" },
    { text: "Risk of 'going native' - losing objectivity", type: "limitation", icon: "✗" },
    { text: "May be difficult to record observations", type: "limitation", icon: "✗" }
  ]

  const nonParticipantPoints = [
    { text: "Observer remains separate from the group", type: "definition", icon: "🔍" },
    { text: "Maintains objectivity and psychological distance", type: "strength", icon: "✓" },
    { text: "Easier to record observations systematically", type: "strength", icon: "✓" },
    { text: "Less risk of bias from personal involvement", type: "strength", icon: "✓" },
    { text: "May miss valuable insider insights", type: "limitation", icon: "✗" },
    { text: "Participants may behave differently with outsider present", type: "limitation", icon: "✗" }
  ]

  const currentPoints = activeTab === 'participant' ? participantPoints : nonParticipantPoints
  const revealedCount = activeTab === 'participant' ? revealedP : revealedNP
  const setRevealedCount = activeTab === 'participant' ? setRevealedP : setRevealedNP

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-rose-400 mb-2">Participant vs Non-Participant Observations</h2>
          <p className="text-gray-400">Is the researcher part of the group they're observing?</p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setActiveTab('participant')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300
              ${activeTab === 'participant' 
                ? 'bg-gradient-to-r from-cyan-500/30 to-blue-500/20 border border-cyan-500/50 text-cyan-400' 
                : 'bg-gray-800/50 border border-gray-700 text-gray-400 hover:border-cyan-500/30'
              }`}
          >
            <Users className="w-5 h-5" />
            <span className="font-bold">Participant</span>
            <span className="text-xs">(Inside)</span>
          </button>
          <button
            onClick={() => setActiveTab('non-participant')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300
              ${activeTab === 'non-participant' 
                ? 'bg-gradient-to-r from-gray-500/30 to-slate-500/20 border border-gray-500/50 text-gray-300' 
                : 'bg-gray-800/50 border border-gray-700 text-gray-400 hover:border-gray-500/30'
              }`}
          >
            <UserMinus className="w-5 h-5" />
            <span className="font-bold">Non-Participant</span>
            <span className="text-xs">(Outside)</span>
          </button>
        </div>

        {/* Visual Diagram */}
        <div className="flex justify-center mb-6">
          <div className="relative w-64 h-32">
            {/* Group Circle */}
            <div className="absolute inset-0 border-2 border-dashed border-gray-600 rounded-full flex items-center justify-center">
              <span className="text-gray-500 text-xs">The Group</span>
            </div>
            {/* Observer Position */}
            <div 
              className={`absolute w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500
                ${activeTab === 'participant' 
                  ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500' 
                  : 'top-1/2 -right-4 -translate-y-1/2 bg-gray-500'
                }`}
            >
              <Users className="w-4 h-4 text-white" />
            </div>
            {/* Label */}
            <div 
              className={`absolute text-xs transition-all duration-500
                ${activeTab === 'participant' 
                  ? 'bottom-2 left-1/2 -translate-x-1/2 text-cyan-400' 
                  : 'top-1/2 -right-16 -translate-y-1/2 text-gray-400'
                }`}
            >
              Observer
            </div>
          </div>
        </div>

        {/* Content Card */}
        <div className={`rounded-xl p-6 border transition-all duration-300
          ${activeTab === 'participant' 
            ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border-cyan-500/30' 
            : 'bg-gradient-to-br from-gray-500/20 to-slate-500/10 border-gray-500/30'
          }`}
        >
          {/* Title */}
          <div className="flex items-center gap-3 mb-4">
            {activeTab === 'participant' 
              ? <Users className="w-8 h-8 text-cyan-400" />
              : <UserMinus className="w-8 h-8 text-gray-400" />
            }
            <h3 className={`text-xl font-bold ${activeTab === 'participant' ? 'text-cyan-400' : 'text-gray-300'}`}>
              {activeTab === 'participant' ? '👥 Participant Observation' : '📋 Non-Participant Observation'}
            </h3>
          </div>

          {/* Points - Click to Reveal */}
          <div className="grid grid-cols-2 gap-3">
            {currentPoints.map((point, idx) => {
              const isRevealed = revealedCount > idx
              return (
                <div
                  key={`${activeTab}-${idx}`}
                  onClick={() => !isRevealed && setRevealedCount(idx + 1)}
                  className={`flex items-center gap-2 p-3 rounded-lg transition-all duration-300 cursor-pointer
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
                    <span className="text-lg">{point.icon}</span>
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center">
                      <span className="text-gray-500 text-xs">{idx + 1}</span>
                    </div>
                  )}
                  <span className={`text-sm ${isRevealed ? 'text-gray-200' : 'text-gray-500'}`}>
                    {isRevealed ? point.text : 'Click to reveal...'}
                  </span>
                </div>
              )
            })}
          </div>
          
          <div className="mt-3 text-center">
            <span className={`text-sm ${activeTab === 'participant' ? 'text-cyan-400' : 'text-gray-400'}`}>
              {revealedCount}/6 points revealed
            </span>
          </div>
        </div>

        {/* Warning Box - Going Native */}
        {activeTab === 'participant' && revealedCount >= 5 && (
          <div className="mt-4 bg-amber-500/10 rounded-xl p-4 border border-amber-500/30 animate-fade-in">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5" />
              <div>
                <p className="font-bold text-amber-400 text-sm mb-1">⚠️ "Going Native"</p>
                <p className="text-sm text-gray-400">
                  When researchers become so involved with the group that they lose their scientific objectivity. 
                  They may start to identify with the group rather than observe them impartially.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Example Box */}
        <div className="mt-4 bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <p className="text-sm text-gray-400">
            <span className={`font-bold ${activeTab === 'participant' ? 'text-cyan-400' : 'text-gray-300'}`}>Example:</span>{' '}
            {activeTab === 'participant' 
              ? "A researcher joins a religious cult to study their behaviour from the inside, participating in their rituals and daily activities."
              : "A researcher watches children through a one-way mirror in a nursery, recording their social interactions without being part of the group."
            }
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mt-4 flex justify-center gap-2">
          {[...Array(6)].map((_, i) => (
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
