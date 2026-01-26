import React, { useState } from 'react'
import { Globe, CheckCircle2, XCircle, Lightbulb, Zap } from 'lucide-react'

interface NaturalExperimentTeachProps {
  isPresenting?: boolean
}

const NaturalExperimentTeach: React.FC<NaturalExperimentTeachProps> = ({ isPresenting }) => {
  const [revealedCount, setRevealedCount] = useState(0)
  const [showExample, setShowExample] = useState(false)
  const [showComparison, setShowComparison] = useState(false)

  const strengths = [
    { text: 'Unique opportunities', detail: 'Allows research that would be impossible or unethical to manipulate' },
    { text: 'High external validity', detail: 'Studies real-world events and issues as they naturally occur' }
  ]

  const limitations = [
    { text: 'Rare events', detail: 'Suitable events may happen infrequently - must wait for opportunities' },
    { text: 'No random allocation', detail: 'Cannot assign participants to conditions - less confident about causation' },
    { text: 'Confounding variables', detail: 'Many differences may exist between groups beyond the IV' }
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
          <div className="inline-flex items-center gap-3 bg-amber-500/20 px-6 py-3 rounded-full mb-4">
            <Globe className="w-8 h-8 text-amber-400" />
            <h2 className="text-3xl font-bold text-amber-400">Natural Experiments</h2>
          </div>
        </div>

        {/* Definition Card */}
        <div className="bg-gray-800/50 rounded-xl p-6 border border-amber-500/30 mb-6">
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              <Zap className="w-10 h-10 text-amber-400" />
            </div>
            <p className="text-xl text-gray-200">
              The researcher takes advantage of a <span className="text-amber-400 font-bold">pre-existing independent variable</span>. The IV would have changed even if the experimenter wasn't interested.
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
                  i < revealedCount ? 'bg-amber-400' : 'bg-gray-600'
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
              className="w-full bg-purple-900/30 rounded-xl p-4 border border-purple-500/50 hover:bg-purple-900/50 transition-colors text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🔄</span>
                  <span className="text-lg font-bold text-purple-400">Natural vs Field Experiment</span>
                </div>
                <span className="text-purple-400">{showComparison ? '▲' : '▼'}</span>
              </div>
              {showComparison && (
                <div className="mt-4 pt-4 border-t border-purple-500/30 animate-fadeIn">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-900/20 rounded-lg p-3">
                      <p className="text-green-400 font-bold text-sm mb-2">🌳 Field Experiment</p>
                      <p className="text-gray-300 text-sm">
                        Researcher <span className="text-green-400 font-bold">manipulates</span> the IV in a natural setting
                      </p>
                    </div>
                    <div className="bg-amber-900/20 rounded-lg p-3">
                      <p className="text-amber-400 font-bold text-sm mb-2">🌍 Natural Experiment</p>
                      <p className="text-gray-300 text-sm">
                        IV changes <span className="text-amber-400 font-bold">naturally</span> without researcher involvement
                      </p>
                    </div>
                  </div>
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
                  <span className="text-lg font-bold text-cyan-400">Classic Example: Romanian Orphan Studies</span>
                </div>
                <span className="text-cyan-400">{showExample ? '▲' : '▼'}</span>
              </div>
              {showExample && (
                <div className="mt-4 pt-4 border-t border-cyan-500/30 animate-fadeIn">
                  <p className="text-cyan-300 mb-3">
                    Rutter et al. studied Romanian orphans adopted into UK families.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-3 text-sm">
                    <p className="text-gray-300 mb-2">
                      <span className="text-blue-400 font-bold">IV:</span> Age at adoption (before/after 6 months)
                    </p>
                    <p className="text-gray-300 mb-2">
                      <span className="text-purple-400 font-bold">DV:</span> Cognitive development & attachment
                    </p>
                    <p className="text-gray-300">
                      <span className="text-amber-400 font-bold">Why natural:</span> Researchers didn't decide which children were adopted when - this happened naturally
                    </p>
                  </div>
                </div>
              )}
            </button>
          </div>
        )}

        {/* Exam tip */}
        <div className="mt-4 bg-pink-900/30 rounded-lg p-3 border border-pink-500/30">
          <p className="text-pink-300 text-sm">
            <span className="font-bold">📝 Exam tip:</span> Remember - the IV in natural experiments is NOT manipulated by the researcher. It would have occurred anyway!
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

export default NaturalExperimentTeach
