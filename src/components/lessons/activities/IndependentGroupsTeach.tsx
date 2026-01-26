import React, { useState } from 'react'
import { Users, CheckCircle2, XCircle, Lightbulb, Shuffle } from 'lucide-react'

interface IndependentGroupsTeachProps {
  isPresenting?: boolean
}

const IndependentGroupsTeach: React.FC<IndependentGroupsTeachProps> = ({ isPresenting }) => {
  const [revealedCount, setRevealedCount] = useState(0)
  const [showSolution, setShowSolution] = useState(false)
  const [showExample, setShowExample] = useState(false)

  const strengths = [
    { text: 'No order effects', detail: 'Participants only do the task once, so no practice or fatigue' },
    { text: 'Less likely to guess aim', detail: 'Only see one condition, reducing demand characteristics' },
    { text: 'Can use same materials', detail: 'Both groups can see identical stimuli' }
  ]

  const limitations = [
    { text: 'Participant variables', detail: 'Individual differences may confound results between groups' },
    { text: 'Less economical', detail: 'Need twice as many participants for the same amount of data' }
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
          <div className="inline-flex items-center gap-3 bg-rose-500/20 px-6 py-3 rounded-full mb-4">
            <Users className="w-8 h-8 text-rose-400" />
            <h2 className="text-3xl font-bold text-rose-400">Independent Groups Design</h2>
          </div>
        </div>

        {/* Definition Card */}
        <div className="bg-gray-800/50 rounded-xl p-6 border border-rose-500/30 mb-6">
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <div className="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center text-blue-400 font-bold">A</div>
              <div className="w-12 h-12 bg-purple-500/30 rounded-lg flex items-center justify-center text-purple-400 font-bold">B</div>
            </div>
            <p className="text-xl text-gray-200">
              Participants are allocated to <span className="text-rose-400 font-bold">different groups</span> where each group represents one experimental condition.
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
                  i < revealedCount ? 'bg-rose-400' : 'bg-gray-600'
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
              className="w-full bg-blue-900/30 rounded-xl p-4 border border-blue-500/50 hover:bg-blue-900/50 transition-colors text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Shuffle className="w-6 h-6 text-blue-400" />
                  <span className="text-lg font-bold text-blue-400">How to Deal With Participant Variables?</span>
                </div>
                <span className="text-blue-400">{showSolution ? '▲' : '▼'}</span>
              </div>
              {showSolution && (
                <div className="mt-4 pt-4 border-t border-blue-500/30 animate-fadeIn">
                  <p className="text-blue-300 text-lg">
                    Use <span className="font-bold text-blue-400">Random Allocation</span> - each participant has an equal chance of being assigned to either condition.
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    This doesn't eliminate participant variables, but it distributes them evenly across groups.
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
                    <span className="font-bold">Testing caffeine on memory:</span>
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-3">
                    <div className="bg-blue-500/20 rounded-lg p-3">
                      <p className="text-blue-400 font-bold">Group A</p>
                      <p className="text-gray-300 text-sm">Drinks caffeinated coffee, then completes memory test</p>
                    </div>
                    <div className="bg-purple-500/20 rounded-lg p-3">
                      <p className="text-purple-400 font-bold">Group B</p>
                      <p className="text-gray-300 text-sm">Drinks decaf coffee, then completes the same memory test</p>
                    </div>
                  </div>
                </div>
              )}
            </button>
          </div>
        )}

        {/* Exam tip */}
        <div className="mt-4 bg-purple-900/30 rounded-lg p-3 border border-purple-500/30">
          <p className="text-purple-300 text-sm">
            <span className="font-bold">📝 Exam tip:</span> When evaluating IG design, always mention participant variables as the main weakness and random allocation as the solution!
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

export default IndependentGroupsTeach
