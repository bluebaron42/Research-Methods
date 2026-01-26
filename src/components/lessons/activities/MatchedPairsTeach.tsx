import React, { useState } from 'react'
import { Link2, CheckCircle2, XCircle, Lightbulb, Users } from 'lucide-react'

interface MatchedPairsTeachProps {
  isPresenting?: boolean
}

const MatchedPairsTeach: React.FC<MatchedPairsTeachProps> = ({ isPresenting }) => {
  const [revealedCount, setRevealedCount] = useState(0)
  const [showProcess, setShowProcess] = useState(false)
  const [showExample, setShowExample] = useState(false)

  const strengths = [
    { text: 'No order effects', detail: 'Each participant only does one condition once' },
    { text: 'Reduced participant variables', detail: 'Key variables are controlled through matching' },
    { text: 'Fewer demand characteristics', detail: 'Participants only see one condition' }
  ]

  const limitations = [
    { text: 'Never perfectly matched', detail: 'Important differences may still remain between pairs' },
    { text: 'Time-consuming & expensive', detail: 'Pre-testing needed to identify matching variables' }
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
          <div className="inline-flex items-center gap-3 bg-cyan-500/20 px-6 py-3 rounded-full mb-4">
            <Link2 className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl font-bold text-cyan-400">Matched Pairs Design</h2>
          </div>
        </div>

        {/* Definition Card with Matching Visual */}
        <div className="bg-gray-800/50 rounded-xl p-6 border border-cyan-500/30 mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-blue-500/30 rounded-lg flex items-center justify-center text-blue-400 font-bold text-sm">P1</div>
                <div className="h-4 w-0.5 bg-cyan-500/50"></div>
                <div className="w-10 h-10 bg-purple-500/30 rounded-lg flex items-center justify-center text-purple-400 font-bold text-sm">P2</div>
              </div>
              <Link2 className="w-5 h-5 text-cyan-400 rotate-90 mx-2" />
            </div>
            <p className="text-xl text-gray-200">
              Pairs of participants are <span className="text-cyan-400 font-bold">matched</span> on key variables, then one member goes to <span className="text-cyan-400 font-bold">each condition</span>.
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
                  i < revealedCount ? 'bg-cyan-400' : 'bg-gray-600'
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

        {/* Process & Example Panels - only show after all cards revealed */}
        {revealedCount >= totalItems && (
          <div className="animate-fadeIn space-y-4">
            <button
              onClick={() => setShowProcess(!showProcess)}
              className="w-full bg-cyan-900/30 rounded-xl p-4 border border-cyan-500/50 hover:bg-cyan-900/50 transition-colors text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-cyan-400" />
                  <span className="text-lg font-bold text-cyan-400">How Does Matching Work?</span>
                </div>
                <span className="text-cyan-400">{showProcess ? '▲' : '▼'}</span>
              </div>
              {showProcess && (
                <div className="mt-4 pt-4 border-t border-cyan-500/30 animate-fadeIn">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-cyan-500/30 rounded-full flex items-center justify-center text-cyan-400 font-bold">1</div>
                      <p className="text-gray-300">Identify <span className="text-cyan-400 font-bold">key variables</span> that might affect the DV (e.g., age, IQ, experience)</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-cyan-500/30 rounded-full flex items-center justify-center text-cyan-400 font-bold">2</div>
                      <p className="text-gray-300"><span className="text-cyan-400 font-bold">Pre-test</span> all participants on these variables</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-cyan-500/30 rounded-full flex items-center justify-center text-cyan-400 font-bold">3</div>
                      <p className="text-gray-300"><span className="text-cyan-400 font-bold">Create pairs</span> of participants with similar scores</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-cyan-500/30 rounded-full flex items-center justify-center text-cyan-400 font-bold">4</div>
                      <p className="text-gray-300"><span className="text-cyan-400 font-bold">Randomly assign</span> one from each pair to each condition</p>
                    </div>
                  </div>
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
                  <p className="text-amber-300 mb-3">
                    <span className="font-bold">Testing teaching method on exam scores:</span>
                  </p>
                  <p className="text-gray-400 text-sm mb-3">Students matched on prior ability (from mock exam scores)</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800/50 rounded-lg p-3">
                      <p className="text-cyan-400 font-bold text-sm mb-2">Matched Pair 1:</p>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="bg-blue-500/20 px-2 py-1 rounded text-blue-300">Amy (65%)</span>
                        <Link2 className="w-4 h-4 text-cyan-400" />
                        <span className="bg-purple-500/20 px-2 py-1 rounded text-purple-300">Ben (64%)</span>
                      </div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3">
                      <p className="text-cyan-400 font-bold text-sm mb-2">Matched Pair 2:</p>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="bg-blue-500/20 px-2 py-1 rounded text-blue-300">Cho (82%)</span>
                        <Link2 className="w-4 h-4 text-cyan-400" />
                        <span className="bg-purple-500/20 px-2 py-1 rounded text-purple-300">Dan (81%)</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-3">
                    <div className="bg-blue-500/10 rounded-lg p-2 text-center">
                      <p className="text-blue-400 font-bold text-sm">Method A</p>
                      <p className="text-gray-400 text-xs">Amy, Cho</p>
                    </div>
                    <div className="bg-purple-500/10 rounded-lg p-2 text-center">
                      <p className="text-purple-400 font-bold text-sm">Method B</p>
                      <p className="text-gray-400 text-xs">Ben, Dan</p>
                    </div>
                  </div>
                </div>
              )}
            </button>
          </div>
        )}

        {/* Exam tip */}
        <div className="mt-4 bg-pink-900/30 rounded-lg p-3 border border-pink-500/30">
          <p className="text-pink-300 text-sm">
            <span className="font-bold">📝 Exam tip:</span> MP combines the best of both worlds - controls participant variables like RM but avoids order effects like IG. The trade-off is time and cost!
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

export default MatchedPairsTeach
