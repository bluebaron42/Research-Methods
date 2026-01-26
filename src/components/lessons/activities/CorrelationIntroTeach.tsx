import { useState } from 'react'
import { TrendingUp, Info, Target, BarChart3 } from 'lucide-react'

interface CorrelationIntroTeachProps {
  isPresenting?: boolean
}

export default function CorrelationIntroTeach({ isPresenting }: CorrelationIntroTeachProps) {
  const [revealedCount, setRevealedCount] = useState(0)
  const [showScattergram, setShowScattergram] = useState(false)

  const keyPoints = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Strength of Association",
      description: "How closely the two variables are related - from weak to strong",
      color: "cyan"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Direction of Association",
      description: "Whether variables move together (positive) or opposite (negative)",
      color: "purple"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Co-Variables",
      description: "Both variables being measured are called co-variables (not IV/DV)",
      color: "amber"
    }
  ]

  const examples = [
    { var1: "Hours of study", var2: "Exam scores", emoji: "📚" },
    { var1: "Height", var2: "Weight", emoji: "📏" },
    { var1: "Age", var2: "Reaction time", emoji: "⏱️" },
    { var1: "Exercise frequency", var2: "Mood rating", emoji: "🏃" }
  ]

  const colorMap: Record<string, { bg: string; border: string; text: string }> = {
    cyan: { bg: 'bg-cyan-900/30', border: 'border-cyan-500/50', text: 'text-cyan-400' },
    purple: { bg: 'bg-purple-900/30', border: 'border-purple-500/50', text: 'text-purple-400' },
    amber: { bg: 'bg-amber-900/30', border: 'border-amber-500/50', text: 'text-amber-400' }
  }

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-rose-400 mb-2">What Are Correlations?</h2>
        <p className="text-gray-400 mb-6">Click to explore the key features of correlational research</p>

        {/* Main Definition */}
        <div className="bg-gray-800/50 rounded-xl p-6 border border-rose-500/30 mb-6">
          <p className="text-xl text-gray-200">
            Correlations illustrate the <span className="text-rose-400 font-bold">strength and direction</span> of an association between two or more <span className="text-rose-400 font-bold">co-variables</span>.
          </p>
        </div>

        {/* Click-to-Reveal Key Points */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {keyPoints.map((point, index) => {
            const colors = colorMap[point.color]
            const isRevealed = index < revealedCount
            return (
              <button
                key={index}
                onClick={() => !isRevealed && setRevealedCount(prev => prev + 1)}
                className={`${colors.bg} rounded-xl p-4 border ${colors.border} text-left transition-all duration-300 ${
                  isRevealed ? 'opacity-100' : 'opacity-70 hover:opacity-100 cursor-pointer'
                }`}
              >
                {isRevealed ? (
                  <div className="animate-fadeIn">
                    <div className={`${colors.text} mb-2`}>{point.icon}</div>
                    <h3 className={`font-bold ${colors.text} mb-2`}>{point.title}</h3>
                    <p className="text-gray-300 text-sm">{point.description}</p>
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <Info className={`w-8 h-8 ${colors.text} mx-auto mb-2`} />
                    <p className="text-gray-400 text-sm">Click to reveal</p>
                  </div>
                )}
              </button>
            )
          })}
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-2 mb-6">
          {keyPoints.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i < revealedCount ? 'bg-rose-500' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Examples Section */}
        {revealedCount >= 3 && (
          <div className="animate-fadeIn">
            <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700 mb-4">
              <h3 className="text-lg font-bold text-green-400 mb-3">📊 Example Co-Variables:</h3>
              <div className="grid grid-cols-4 gap-3">
                {examples.map((ex, i) => (
                  <div key={i} className="bg-gray-700/50 rounded-lg p-3 text-center">
                    <span className="text-2xl mb-2 block">{ex.emoji}</span>
                    <p className="text-sm text-gray-300">{ex.var1}</p>
                    <p className="text-xs text-gray-500">↔</p>
                    <p className="text-sm text-gray-300">{ex.var2}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Scattergram Reveal */}
            <button
              onClick={() => setShowScattergram(!showScattergram)}
              className="w-full bg-gray-800/50 rounded-xl p-4 border border-cyan-500/30 hover:bg-gray-700/50 transition-all"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-cyan-400">📈 How Are Correlations Displayed?</h3>
                <span className="text-gray-400 text-sm">{showScattergram ? '▼' : '▶'} Click to {showScattergram ? 'hide' : 'reveal'}</span>
              </div>
              {showScattergram && (
                <div className="mt-4 text-left animate-fadeIn">
                  <p className="text-gray-300 mb-3">Correlations are plotted on a <span className="text-cyan-400 font-bold">scattergram</span> (scatter graph):</p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• One co-variable is on the <span className="font-bold">x-axis</span> (horizontal)</li>
                    <li>• The other co-variable is on the <span className="font-bold">y-axis</span> (vertical)</li>
                    <li>• Each point represents a <span className="font-bold">participant's score</span> on both variables</li>
                    <li>• The pattern of points shows the type and strength of correlation</li>
                  </ul>
                </div>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
