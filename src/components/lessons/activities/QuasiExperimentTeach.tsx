import React, { useState } from 'react'
import { UserCheck, CheckCircle2, XCircle, Lightbulb, HelpCircle } from 'lucide-react'

interface QuasiExperimentTeachProps {
  isPresenting?: boolean
}

const QuasiExperimentTeach: React.FC<QuasiExperimentTeachProps> = ({ isPresenting }) => {
  const [revealedCount, setRevealedCount] = useState(0)
  const [showExample, setShowExample] = useState(false)
  const [showComparison, setShowComparison] = useState(false)

  const strengths = [
    { text: 'Controlled conditions', detail: 'Often conducted in a lab with good control over extraneous variables' },
    { text: 'Studies real differences', detail: 'Allows investigation of variables that cannot be manipulated (age, gender, diagnosis)' }
  ]

  const limitations = [
    { text: 'No random allocation', detail: 'Groups are pre-existing, so participants cannot be randomly assigned' },
    { text: 'Confounding variables', detail: 'Other differences between groups may explain results, not just the IV' }
  ]

  const colorMap = {
    strength: { bg: 'bg-green-900/30', border: 'border-green-500/50', text: 'text-green-400' },
    limitation: { bg: 'bg-red-900/30', border: 'border-red-500/50', text: 'text-red-400' }
  }

  const totalItems = strengths.length + limitations.length

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-3 bg-purple-500/20 px-6 py-3 rounded-full mb-4">
            <UserCheck className="w-8 h-8 text-purple-400" />
            <h2 className="text-3xl font-bold text-purple-400">Quasi-Experiments</h2>
          </div>
        </div>

        {/* Definition Card */}
        <div className="bg-gray-800/50 rounded-xl p-6 border border-purple-500/30 mb-6">
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              <HelpCircle className="w-10 h-10 text-purple-400" />
            </div>
            <p className="text-xl text-gray-200">
              The IV is based on an <span className="text-purple-400 font-bold">existing difference between people</span> (e.g., age, gender, diagnosis). No one manipulates this variable - it simply exists.
            </p>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-gray-400 text-sm">Click cards to reveal ({revealedCount}/{totalItems})</span>
          <div className="flex gap-1">
            {[...Array(totalItems)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i < revealedCount ? 'bg-purple-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Strengths & Limitations Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Strengths Column */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-bold text-green-400 mb-3">
              <CheckCircle2 className="w-5 h-5" /> Strengths
            </h3>
            <div className="space-y-3">
              {strengths.map((item, idx) => {
                const isRevealed = idx < revealedCount
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      if (!isRevealed && revealedCount === idx) {
                        setRevealedCount(prev => prev + 1)
                      }
                    }}
                    disabled={isRevealed || revealedCount !== idx}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-500 ${
                      isRevealed
                        ? `${colorMap.strength.bg} ${colorMap.strength.border}`
                        : revealedCount === idx
                        ? 'bg-gray-700/50 border-gray-600 hover:border-green-500/50 cursor-pointer animate-pulse'
                        : 'bg-gray-800/30 border-gray-700 opacity-50'
                    }`}
                  >
                    {isRevealed ? (
                      <div className="animate-fadeIn">
                        <p className="font-bold text-green-400">{item.text}</p>
                        <p className="text-sm text-gray-300 mt-1">{item.detail}</p>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-12">
                        <span className="text-gray-500">
                          {revealedCount === idx ? '👆 Click to reveal' : `Strength ${idx + 1}`}
                        </span>
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Limitations Column */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-bold text-red-400 mb-3">
              <XCircle className="w-5 h-5" /> Limitations
            </h3>
            <div className="space-y-3">
              {limitations.map((item, idx) => {
                const actualIdx = strengths.length + idx
                const isRevealed = actualIdx < revealedCount
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      if (!isRevealed && revealedCount === actualIdx) {
                        setRevealedCount(prev => prev + 1)
                      }
                    }}
                    disabled={isRevealed || revealedCount !== actualIdx}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-500 ${
                      isRevealed
                        ? `${colorMap.limitation.bg} ${colorMap.limitation.border}`
                        : revealedCount === actualIdx
                        ? 'bg-gray-700/50 border-gray-600 hover:border-red-500/50 cursor-pointer animate-pulse'
                        : 'bg-gray-800/30 border-gray-700 opacity-50'
                    }`}
                  >
                    {isRevealed ? (
                      <div className="animate-fadeIn">
                        <p className="font-bold text-red-400">{item.text}</p>
                        <p className="text-sm text-gray-300 mt-1">{item.detail}</p>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-12">
                        <span className="text-gray-500">
                          {revealedCount === actualIdx ? '👆 Click to reveal' : `Limitation ${idx + 1}`}
                        </span>
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Expandable panels - only after all revealed */}
        {revealedCount >= totalItems && (
          <div className="animate-fadeIn space-y-4">
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="w-full bg-amber-900/30 rounded-xl p-4 border border-amber-500/50 hover:bg-amber-900/50 transition-colors text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🔄</span>
                  <span className="text-lg font-bold text-amber-400">Quasi vs Natural Experiment</span>
                </div>
                <span className="text-amber-400">{showComparison ? '▲' : '▼'}</span>
              </div>
              {showComparison && (
                <div className="mt-4 pt-4 border-t border-amber-500/30 animate-fadeIn">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-amber-900/20 rounded-lg p-3">
                      <p className="text-amber-400 font-bold text-sm mb-2">🌍 Natural Experiment</p>
                      <p className="text-gray-300 text-sm">
                        IV is an <span className="text-amber-400 font-bold">event</span> that occurs naturally (e.g., a flood, policy change)
                      </p>
                    </div>
                    <div className="bg-purple-900/20 rounded-lg p-3">
                      <p className="text-purple-400 font-bold text-sm mb-2">👤 Quasi-Experiment</p>
                      <p className="text-gray-300 text-sm">
                        IV is a <span className="text-purple-400 font-bold">characteristic</span> of the participant (e.g., age, gender, diagnosis)
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mt-3 text-center">Both lack random allocation - researcher cannot assign participants to conditions</p>
                </div>
              )}
            </button>

            <button
              onClick={() => setShowExample(!showExample)}
              className="w-full bg-cyan-900/30 rounded-xl p-4 border border-cyan-500/50 hover:bg-cyan-900/50 transition-colors text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-cyan-400" />
                  <span className="text-lg font-bold text-cyan-400">Example: Comparing Phobic vs Non-Phobic</span>
                </div>
                <span className="text-cyan-400">{showExample ? '▲' : '▼'}</span>
              </div>
              {showExample && (
                <div className="mt-4 pt-4 border-t border-cyan-500/30 animate-fadeIn">
                  <p className="text-cyan-300 mb-3">
                    Comparing anxiety responses in people with and without spider phobia.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-3 text-sm">
                    <p className="text-gray-300 mb-2">
                      <span className="text-blue-400 font-bold">IV:</span> Having spider phobia (yes/no)
                    </p>
                    <p className="text-gray-300 mb-2">
                      <span className="text-purple-400 font-bold">DV:</span> Physiological anxiety response to spider images
                    </p>
                    <p className="text-gray-300">
                      <span className="text-purple-400 font-bold">Why quasi:</span> The IV (having a phobia) is a pre-existing characteristic - researcher can't randomly give someone a phobia!
                    </p>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                    <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                      <p className="text-gray-400">Other examples:</p>
                    </div>
                    <div className="bg-purple-500/20 rounded-lg p-2 text-center">
                      <p className="text-purple-300">Male vs Female</p>
                    </div>
                    <div className="bg-purple-500/20 rounded-lg p-2 text-center">
                      <p className="text-purple-300">Young vs Old</p>
                    </div>
                  </div>
                </div>
              )}
            </button>
          </div>
        )}

        {/* Exam tip */}
        <div className="mt-4 bg-rose-900/30 rounded-lg p-3 border border-rose-500/30">
          <p className="text-rose-300 text-sm">
            <span className="font-bold">📝 Exam tip:</span> "Quasi" means "almost" - it's almost a true experiment, but the IV cannot be manipulated or randomly allocated!
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default QuasiExperimentTeach
