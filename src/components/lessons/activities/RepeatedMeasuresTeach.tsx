import React, { useState } from 'react'
import { RefreshCw, CheckCircle2, XCircle, Lightbulb, ArrowLeftRight } from 'lucide-react'

interface RepeatedMeasuresTeachProps {
  isPresenting?: boolean
}

const RepeatedMeasuresTeach: React.FC<RepeatedMeasuresTeachProps> = ({ isPresenting }) => {
  const [revealedCount, setRevealedCount] = useState(0)
  const [showSolution, setShowSolution] = useState(false)
  const [showExample, setShowExample] = useState(false)

  const strengths = [
    { text: 'Controls participant variables', detail: 'Same person in both conditions eliminates individual differences' },
    { text: 'Fewer participants needed', detail: 'Half the number of participants for the same amount of data' }
  ]

  const limitations = [
    { text: 'Order effects', detail: 'Performance may change due to practice, fatigue, or boredom' },
    { text: 'Demand characteristics', detail: 'Participants more likely to guess the aim of the study' }
  ]

  const colorMap = {
    strength: { bg: 'bg-green-900/30', border: 'border-green-500/50', text: 'text-green-400', icon: 'text-green-400' },
    limitation: { bg: 'bg-red-900/30', border: 'border-red-500/50', text: 'text-red-400', icon: 'text-red-400' }
  }

  const totalItems = strengths.length + limitations.length

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-3 bg-purple-500/20 px-6 py-3 rounded-full mb-4">
            <RefreshCw className="w-8 h-8 text-purple-400" />
            <h2 className="text-3xl font-bold text-purple-400">Repeated Measures Design</h2>
          </div>
        </div>

        {/* Definition Card with Animation */}
        <div className="bg-gray-800/50 rounded-xl p-6 border border-purple-500/30 mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-500/30 rounded-lg flex items-center justify-center text-blue-400 font-bold text-sm">A</div>
              <ArrowLeftRight className="w-6 h-6 text-purple-400" />
              <div className="w-10 h-10 bg-purple-500/30 rounded-lg flex items-center justify-center text-purple-400 font-bold text-sm">B</div>
            </div>
            <p className="text-xl text-gray-200">
              <span className="text-purple-400 font-bold">All participants</span> take part in <span className="text-purple-400 font-bold">all conditions</span> of the experiment.
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

        {/* Solution Panel - only shows after all cards revealed */}
        {revealedCount >= totalItems && (
          <div className="animate-fadeIn space-y-4">
            <button
              onClick={() => setShowSolution(!showSolution)}
              className="w-full bg-purple-900/30 rounded-xl p-4 border border-purple-500/50 hover:bg-purple-900/50 transition-colors text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ArrowLeftRight className="w-6 h-6 text-purple-400" />
                  <span className="text-lg font-bold text-purple-400">How to Deal With Order Effects?</span>
                </div>
                <span className="text-purple-400">{showSolution ? '▲' : '▼'}</span>
              </div>
              {showSolution && (
                <div className="mt-4 pt-4 border-t border-purple-500/30 animate-fadeIn">
                  <p className="text-purple-300 text-lg mb-3">
                    Use <span className="font-bold text-purple-400">Counterbalancing</span>
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800/50 rounded-lg p-3">
                      <p className="text-blue-400 font-bold text-sm">Half of participants:</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="bg-blue-500/30 px-2 py-1 rounded text-blue-300 text-sm">Condition A</span>
                        <span className="text-gray-500">→</span>
                        <span className="bg-purple-500/30 px-2 py-1 rounded text-purple-300 text-sm">Condition B</span>
                      </div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3">
                      <p className="text-purple-400 font-bold text-sm">Other half:</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="bg-purple-500/30 px-2 py-1 rounded text-purple-300 text-sm">Condition B</span>
                        <span className="text-gray-500">→</span>
                        <span className="bg-blue-500/30 px-2 py-1 rounded text-blue-300 text-sm">Condition A</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mt-3">
                    This balances out order effects across the whole sample.
                  </p>
                </div>
              )}
            </button>

            <button
              onClick={() => setShowExample(!showExample)}
              className="w-full bg-amber-900/30 rounded-xl p-4 border border-amber-500/50 hover:bg-amber-900/50 transition-colors text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-amber-400" />
                  <span className="text-lg font-bold text-amber-400">Example Study</span>
                </div>
                <span className="text-amber-400">{showExample ? '▲' : '▼'}</span>
              </div>
              {showExample && (
                <div className="mt-4 pt-4 border-t border-amber-500/30 animate-fadeIn">
                  <p className="text-amber-300">
                    <span className="font-bold">Testing music on concentration:</span>
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 mt-3">
                    <div className="flex items-center justify-center gap-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-2xl">🧑</span>
                        </div>
                        <p className="text-gray-300 text-xs">Same participant</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500">→</span>
                          <span className="bg-blue-500/20 px-3 py-1 rounded text-blue-300 text-sm">With music 🎵</span>
                          <span className="text-gray-500">→</span>
                          <span className="text-gray-400 text-sm">Score: 45</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500">→</span>
                          <span className="bg-purple-500/20 px-3 py-1 rounded text-purple-300 text-sm">Without music 🔇</span>
                          <span className="text-gray-500">→</span>
                          <span className="text-gray-400 text-sm">Score: 52</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </button>
          </div>
        )}

        {/* Exam tip */}
        <div className="mt-4 bg-cyan-900/30 rounded-lg p-3 border border-cyan-500/30">
          <p className="text-cyan-300 text-sm">
            <span className="font-bold">📝 Exam tip:</span> When evaluating RM design, always mention order effects as the main weakness and counterbalancing as the solution!
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

export default RepeatedMeasuresTeach
