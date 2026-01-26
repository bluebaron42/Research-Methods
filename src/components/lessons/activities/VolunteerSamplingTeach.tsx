import React, { useState } from 'react'
import { Hand, CheckCircle2, XCircle, Lightbulb, AlertTriangle } from 'lucide-react'

interface VolunteerSamplingTeachProps {
  isPresenting?: boolean
}

const VolunteerSamplingTeach: React.FC<VolunteerSamplingTeachProps> = ({ isPresenting }) => {
  const [revealedCount, setRevealedCount] = useState(0)
  const [showEvaluation, setShowEvaluation] = useState(false)
  const [showBias, setShowBias] = useState(false)

  const methods = [
    { text: 'Adverts in newspapers', icon: '📰' },
    { text: 'Notice boards', icon: '📌' },
    { text: 'Raising hands when asked', icon: '✋' },
    { text: 'Online posts / social media', icon: '💻' }
  ]

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-3 bg-rose-500/20 px-6 py-3 rounded-full mb-4">
            <Hand className="w-8 h-8 text-rose-400" />
            <h2 className="text-3xl font-bold text-rose-400">Volunteer Sampling</h2>
          </div>
          <p className="text-gray-400">(Also called self-selection sampling)</p>
        </div>

        {/* Definition Card */}
        <div className="bg-gray-800/50 rounded-xl p-6 border border-rose-500/30 mb-6">
          <p className="text-xl text-gray-200">
            Participants <span className="text-rose-400 font-bold">select themselves</span> to be part of the sample.
          </p>
        </div>

        {/* Methods - Click to reveal */}
        <div className="mb-6">
          <p className="text-gray-400 text-sm mb-3 text-center">Click to reveal common methods ({revealedCount}/4)</p>
          <div className="grid grid-cols-4 gap-3">
            {methods.map((method, idx) => {
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
                  className={`text-center p-4 rounded-xl border transition-all duration-500 ${
                    isRevealed
                      ? 'bg-rose-900/30 border-rose-500/50'
                      : revealedCount === idx
                      ? 'bg-gray-700/50 border-gray-600 hover:border-rose-500/50 cursor-pointer animate-pulse'
                      : 'bg-gray-800/30 border-gray-700 opacity-50'
                  }`}
                >
                  {isRevealed ? (
                    <div className="animate-fadeIn">
                      <span className="text-2xl block mb-2">{method.icon}</span>
                      <p className="text-gray-300 text-xs">{method.text}</p>
                    </div>
                  ) : (
                    <div className="h-16 flex items-center justify-center">
                      <span className="text-gray-500 text-xs">
                        {revealedCount === idx ? '👆' : '?'}
                      </span>
                    </div>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Evaluation & Bias panels - show after all revealed */}
        {revealedCount >= 4 && (
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
                      <h4 className="font-bold text-green-400">Strengths</h4>
                    </div>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• <span className="font-bold text-green-400">Easy</span> - minimal input from researcher</li>
                      <li>• Participants are <span className="font-bold text-green-400">engaged and motivated</span></li>
                    </ul>
                  </div>
                  <div className="bg-red-900/30 rounded-lg p-4 border border-red-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <XCircle className="w-5 h-5 text-red-400" />
                      <h4 className="font-bold text-red-400">Limitation</h4>
                    </div>
                    <p className="text-gray-300 text-sm">
                      <span className="font-bold text-red-400">Volunteer bias</span> - attracts a certain type of person.
                    </p>
                  </div>
                </div>
              )}
            </button>

            {/* Volunteer Bias */}
            <button
              onClick={() => setShowBias(!showBias)}
              className="w-full bg-amber-900/30 rounded-xl p-4 border border-amber-500/50 hover:bg-amber-900/50 transition-colors text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-400" />
                  <span className="text-lg font-bold text-amber-400">🔍 What is Volunteer Bias?</span>
                </div>
                <span className="text-amber-400">{showBias ? '▲' : '▼'}</span>
              </div>
              {showBias && (
                <div className="mt-4 pt-4 border-t border-amber-500/30 animate-fadeIn">
                  <p className="text-amber-300 mb-3">Volunteers tend to share certain characteristics:</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                      <span className="text-2xl">🤝</span>
                      <p className="text-gray-300 text-xs mt-1">Helpful</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                      <span className="text-2xl">🧐</span>
                      <p className="text-gray-300 text-xs mt-1">Curious</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                      <span className="text-2xl">😊</span>
                      <p className="text-gray-300 text-xs mt-1">Eager to please</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                      <span className="text-2xl">⏰</span>
                      <p className="text-gray-300 text-xs mt-1">More free time</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mt-3">
                    This means the sample may not represent the general population who are less willing to participate.
                  </p>
                </div>
              )}
            </button>

            {/* Famous Example */}
            <div className="bg-cyan-900/30 rounded-lg p-4 border border-cyan-500/30">
              <div className="flex items-center gap-3 mb-2">
                <Lightbulb className="w-5 h-5 text-cyan-400" />
                <p className="text-cyan-400 font-bold">Famous Example: Milgram (1963)</p>
              </div>
              <p className="text-cyan-300 text-sm">
                Milgram used a newspaper advert for volunteers. Critics argue this attracted people who were unusually obedient and eager to please - affecting the results!
              </p>
            </div>
          </div>
        )}

        {/* Exam tip */}
        <div className="mt-4 bg-purple-900/30 rounded-lg p-3 border border-purple-500/30">
          <p className="text-purple-300 text-sm">
            <span className="font-bold">📝 Exam tip:</span> Volunteer sampling = self-selection. Remember the key limitation is that volunteers may be atypical of the population!
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

export default VolunteerSamplingTeach
