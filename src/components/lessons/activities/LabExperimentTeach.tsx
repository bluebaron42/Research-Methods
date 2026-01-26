import React, { useState } from 'react'
import { FlaskConical, CheckCircle2, XCircle, Lightbulb, Settings } from 'lucide-react'

interface LabExperimentTeachProps {
  isPresenting?: boolean
}

const LabExperimentTeach: React.FC<LabExperimentTeachProps> = ({ isPresenting }) => {
  const [revealedCount, setRevealedCount] = useState(0)
  const [showExample, setShowExample] = useState(false)
  const [showKeyTerm, setShowKeyTerm] = useState(false)

  const strengths = [
    { text: 'High control', detail: 'Can be confident the IV caused the change in DV (internal validity)' },
    { text: 'Replication', detail: 'Standardised procedures make it easy to repeat the study' }
  ]

  const limitations = [
    { text: 'Low ecological validity', detail: 'Artificial setting - behaviour may not reflect real life' },
    { text: 'Demand characteristics', detail: 'Participants know they\'re being tested and may change behaviour' },
    { text: 'Low mundane realism', detail: 'Tasks may be artificial and not relate to everyday life' }
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
          <div className="inline-flex items-center gap-3 bg-blue-500/20 px-6 py-3 rounded-full mb-4">
            <FlaskConical className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold text-blue-400">Laboratory Experiments</h2>
          </div>
        </div>

        {/* Definition Card */}
        <div className="bg-gray-800/50 rounded-xl p-6 border border-blue-500/30 mb-6">
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              <Settings className="w-10 h-10 text-blue-400 animate-spin-slow" />
            </div>
            <p className="text-xl text-gray-200">
              Conducted in a <span className="text-blue-400 font-bold">highly controlled environment</span>. The researcher manipulates the IV and measures the DV whilst maintaining strict control of extraneous variables.
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
                  i < revealedCount ? 'bg-blue-400' : 'bg-gray-600'
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
              onClick={() => setShowKeyTerm(!showKeyTerm)}
              className="w-full bg-purple-900/30 rounded-xl p-4 border border-purple-500/50 hover:bg-purple-900/50 transition-colors text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📚</span>
                  <span className="text-lg font-bold text-purple-400">Key Term: Internal Validity</span>
                </div>
                <span className="text-purple-400">{showKeyTerm ? '▲' : '▼'}</span>
              </div>
              {showKeyTerm && (
                <div className="mt-4 pt-4 border-t border-purple-500/30 animate-fadeIn">
                  <p className="text-purple-300">
                    <span className="font-bold text-purple-400">Internal validity</span> = the extent to which we can be confident the IV caused the change in DV.
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Lab experiments have HIGH internal validity because of tight control of extraneous variables.
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
                  <span className="text-lg font-bold text-amber-400">Classic Example: Loftus & Palmer (1974)</span>
                </div>
                <span className="text-amber-400">{showExample ? '▲' : '▼'}</span>
              </div>
              {showExample && (
                <div className="mt-4 pt-4 border-t border-amber-500/30 animate-fadeIn">
                  <p className="text-amber-300 mb-3">
                    Participants watched video of car crash in a <span className="font-bold">lab setting</span>.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-3 text-sm">
                    <p className="text-gray-300 mb-2">
                      <span className="text-blue-400 font-bold">IV:</span> Verb used ('smashed' vs 'hit')
                    </p>
                    <p className="text-gray-300 mb-2">
                      <span className="text-purple-400 font-bold">DV:</span> Estimated speed
                    </p>
                    <p className="text-gray-300">
                      <span className="text-green-400 font-bold">Control:</span> Same video, same room, same instructions
                    </p>
                  </div>
                </div>
              )}
            </button>
          </div>
        )}

        {/* Exam tip */}
        <div className="mt-4 bg-cyan-900/30 rounded-lg p-3 border border-cyan-500/30">
          <p className="text-cyan-300 text-sm">
            <span className="font-bold">📝 Exam tip:</span> "Internal validity = Confident the IV caused change in DV" - memorise this!
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
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default LabExperimentTeach
