import React, { useState } from 'react'
import { Users, Globe, ArrowRight, AlertTriangle } from 'lucide-react'

interface PopulationSampleTeachProps {
  isPresenting?: boolean
}

const PopulationSampleTeach: React.FC<PopulationSampleTeachProps> = ({ isPresenting }) => {
  const [revealedCount, setRevealedCount] = useState(0)
  const [showBias, setShowBias] = useState(false)

  const concepts = [
    {
      title: 'Population',
      icon: '🌍',
      definition: 'The large group of individuals a researcher is interested in studying.',
      examples: 'E.g., students in the South East, children with autism, men, or simply "people".',
      note: 'This is too large to study directly!',
      color: 'blue'
    },
    {
      title: 'Sample',
      icon: '👥',
      definition: 'A smaller group drawn from the target population.',
      examples: 'Presumed to be representative of that population.',
      note: 'Allows generalisations to be made.',
      color: 'green'
    }
  ]

  const colorMap: Record<string, { bg: string; border: string; text: string }> = {
    blue: { bg: 'bg-blue-900/30', border: 'border-blue-500/50', text: 'text-blue-400' },
    green: { bg: 'bg-green-900/30', border: 'border-green-500/50', text: 'text-green-400' }
  }

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-3 bg-rose-500/20 px-6 py-3 rounded-full mb-4">
            <Users className="w-8 h-8 text-rose-400" />
            <h2 className="text-3xl font-bold text-rose-400">Populations and Samples</h2>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-gray-400 text-sm">Click cards to reveal ({revealedCount}/2)</span>
          <div className="flex gap-1">
            {[0, 1].map((i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i < revealedCount ? 'bg-rose-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Visual: Population → Sample flow */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="bg-blue-500/20 rounded-full p-6">
            <Globe className="w-16 h-16 text-blue-400" />
          </div>
          <ArrowRight className="w-8 h-8 text-gray-500" />
          <div className="bg-green-500/20 rounded-full p-6">
            <Users className="w-12 h-12 text-green-400" />
          </div>
        </div>

        {/* Concepts Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {concepts.map((concept, idx) => {
            const isRevealed = idx < revealedCount
            const colors = colorMap[concept.color]
            return (
              <button
                key={idx}
                onClick={() => {
                  if (!isRevealed && revealedCount === idx) {
                    setRevealedCount(prev => prev + 1)
                  }
                }}
                disabled={isRevealed || revealedCount !== idx}
                className={`w-full text-left p-6 rounded-xl border transition-all duration-500 ${
                  isRevealed
                    ? `${colors.bg} ${colors.border}`
                    : revealedCount === idx
                    ? 'bg-gray-700/50 border-gray-600 hover:border-rose-500/50 cursor-pointer animate-pulse'
                    : 'bg-gray-800/30 border-gray-700 opacity-50'
                }`}
              >
                {isRevealed ? (
                  <div className="animate-fadeIn">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{concept.icon}</span>
                      <h3 className={`text-xl font-bold ${colors.text}`}>{concept.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-2">{concept.definition}</p>
                    <p className="text-gray-400 text-sm mb-2">{concept.examples}</p>
                    <p className={`text-sm ${colors.text}`}>{concept.note}</p>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-32">
                    <span className="text-gray-500 text-lg">
                      {revealedCount === idx ? '👆 Click to reveal' : concept.title}
                    </span>
                  </div>
                )}
              </button>
            )
          })}
        </div>

        {/* Bias Warning - shows after both revealed */}
        {revealedCount >= 2 && (
          <div className="animate-fadeIn">
            <button
              onClick={() => setShowBias(!showBias)}
              className="w-full bg-amber-900/30 rounded-xl p-4 border border-amber-500/50 hover:bg-amber-900/50 transition-colors text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-400" />
                  <span className="text-lg font-bold text-amber-400">⚠️ The Problem: Sampling Bias</span>
                </div>
                <span className="text-amber-400">{showBias ? '▲' : '▼'}</span>
              </div>
              {showBias && (
                <div className="mt-4 pt-4 border-t border-amber-500/30 animate-fadeIn">
                  <p className="text-amber-300 mb-3">
                    Most samples contain some degree of <span className="font-bold">bias</span> - they don't perfectly represent the population.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-800/50 rounded-lg p-3">
                      <p className="text-gray-400 mb-1">Example of bias:</p>
                      <p className="text-gray-300">Studying "students" but only sampling from one school in London</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3">
                      <p className="text-gray-400 mb-1">Why it matters:</p>
                      <p className="text-gray-300">Biased samples mean we can't generalise findings to the population</p>
                    </div>
                  </div>
                </div>
              )}
            </button>
          </div>
        )}

        {/* Key Question */}
        <div className="mt-4 bg-purple-900/30 rounded-lg p-4 border border-purple-500/30">
          <p className="text-purple-300">
            <span className="font-bold">🤔 Key Question:</span> How do researchers select their sample? There are 5 main sampling methods...
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

export default PopulationSampleTeach
