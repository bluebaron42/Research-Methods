import React, { useState } from 'react'
import { MapPin, CheckCircle2, XCircle, Lightbulb, AlertTriangle } from 'lucide-react'

interface OpportunitySamplingTeachProps {
  isPresenting?: boolean
}

const OpportunitySamplingTeach: React.FC<OpportunitySamplingTeachProps> = ({ isPresenting }) => {
  const [revealedCount, setRevealedCount] = useState(0)
  const [showEvaluation, setShowEvaluation] = useState(false)
  const [showBias, setShowBias] = useState(false)

  const keyPoints = [
    { text: 'Selecting anyone who is willing and available at the time', icon: '👋' },
    { text: 'The researcher takes the chance to ask whoever is around', icon: '📍' },
    { text: 'Common method: approaching people in the street', icon: '🚶' }
  ]

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-3 bg-amber-500/20 px-6 py-3 rounded-full mb-4">
            <MapPin className="w-8 h-8 text-amber-400" />
            <h2 className="text-3xl font-bold text-amber-400">Opportunity Sampling</h2>
          </div>
        </div>

        {/* Definition Card */}
        <div className="bg-gray-800/50 rounded-xl p-6 border border-amber-500/30 mb-6">
          <p className="text-xl text-gray-200">
            Selecting anyone who is <span className="text-amber-400 font-bold">willing and available</span> at the time of the study.
          </p>
        </div>

        {/* Progress indicator */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-gray-400 text-sm">Click cards to reveal ({revealedCount}/3)</span>
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i < revealedCount ? 'bg-amber-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Key Points - Click to reveal */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {keyPoints.map((point, idx) => {
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
                className={`text-left p-4 rounded-xl border transition-all duration-500 ${
                  isRevealed
                    ? 'bg-amber-900/30 border-amber-500/50'
                    : revealedCount === idx
                    ? 'bg-gray-700/50 border-gray-600 hover:border-amber-500/50 cursor-pointer animate-pulse'
                    : 'bg-gray-800/30 border-gray-700 opacity-50'
                }`}
              >
                {isRevealed ? (
                  <div className="animate-fadeIn text-center">
                    <span className="text-3xl mb-2 block">{point.icon}</span>
                    <p className="text-gray-300 text-sm">{point.text}</p>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-20">
                    <span className="text-gray-500 text-sm">
                      {revealedCount === idx ? '👆 Click' : 'Point ' + (idx + 1)}
                    </span>
                  </div>
                )}
              </button>
            )
          })}
        </div>

        {/* Evaluation & Bias panels - show after all revealed */}
        {revealedCount >= 3 && (
          <div className="animate-fadeIn space-y-4">
            {/* Evaluation */}
            <button
              onClick={() => setShowEvaluation(!showEvaluation)}
              className="w-full bg-gray-800/50 rounded-xl p-4 border border-gray-600 hover:border-gray-500 transition-colors text-left"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-200">📊 Evaluation</span>
                <span className="text-gray-400">{showEvaluation ? '▲' : '▼'}</span>
              </div>
              {showEvaluation && (
                <div className="mt-4 pt-4 border-t border-gray-700 animate-fadeIn grid md:grid-cols-2 gap-4">
                  <div className="bg-green-900/30 rounded-lg p-4 border border-green-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <h4 className="font-bold text-green-400">Strength</h4>
                    </div>
                    <p className="text-gray-300 text-sm">
                      <span className="font-bold text-green-400">Convenient</span> - saves time and effort; much less costly than random or stratified sampling.
                    </p>
                  </div>
                  <div className="bg-red-900/30 rounded-lg p-4 border border-red-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <XCircle className="w-5 h-5 text-red-400" />
                      <h4 className="font-bold text-red-400">Limitations</h4>
                    </div>
                    <p className="text-gray-300 text-sm">
                      <span className="font-bold text-red-400">Two forms of bias:</span> (1) unrepresentative - drawn from specific area; (2) researcher may avoid certain people.
                    </p>
                  </div>
                </div>
              )}
            </button>

            {/* Bias Warning */}
            <button
              onClick={() => setShowBias(!showBias)}
              className="w-full bg-red-900/30 rounded-xl p-4 border border-red-500/50 hover:bg-red-900/50 transition-colors text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                  <span className="text-lg font-bold text-red-400">⚠️ Why Opportunity Sampling is Often Biased</span>
                </div>
                <span className="text-red-400">{showBias ? '▲' : '▼'}</span>
              </div>
              {showBias && (
                <div className="mt-4 pt-4 border-t border-red-500/30 animate-fadeIn">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-800/50 rounded-lg p-3">
                      <p className="text-red-400 font-bold text-sm mb-2">Location Bias 📍</p>
                      <p className="text-gray-300 text-sm">
                        Asking people in a shopping centre on Tuesday morning = mainly retired people and stay-at-home parents
                      </p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3">
                      <p className="text-red-400 font-bold text-sm mb-2">Researcher Bias 🚶</p>
                      <p className="text-gray-300 text-sm">
                        Researcher might unconsciously avoid approaching people who look busy, intimidating, or different from themselves
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </button>

            {/* Quick Example */}
            <div className="bg-cyan-900/30 rounded-lg p-4 border border-cyan-500/30">
              <div className="flex items-center gap-3 mb-2">
                <Lightbulb className="w-5 h-5 text-cyan-400" />
                <p className="text-cyan-400 font-bold">Typical Example</p>
              </div>
              <p className="text-cyan-300 text-sm">
                A psychology student approaches people walking past the college canteen to ask about their study habits.
              </p>
            </div>
          </div>
        )}

        {/* Exam tip */}
        <div className="mt-4 bg-purple-900/30 rounded-lg p-3 border border-purple-500/30">
          <p className="text-purple-300 text-sm">
            <span className="font-bold">📝 Exam tip:</span> When evaluating opportunity sampling, always mention it has BOTH location bias AND researcher selection bias!
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

export default OpportunitySamplingTeach
