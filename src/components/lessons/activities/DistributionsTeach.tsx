import { useState } from 'react'
import { Activity, TrendingUp, TrendingDown, ArrowRight } from 'lucide-react'

interface DistributionsTeachProps {
  isPresenting?: boolean
}

export default function DistributionsTeach({ isPresenting }: DistributionsTeachProps) {
  const [selectedDist, setSelectedDist] = useState<string | null>(null)
  const [showComparison, setShowComparison] = useState(false)
  const [revealedFeatures, setRevealedFeatures] = useState(0)

  const distributions = [
    {
      id: 'normal',
      title: 'Normal Distribution',
      subtitle: 'The "Bell Curve"',
      icon: <Activity className="w-8 h-8" />,
      description: 'Symmetrical distribution where most scores cluster around the mean',
      features: [
        'Mean, median, and mode are the same',
        'Symmetrical around the middle',
        '68% of data within 1 SD of mean',
        '95% of data within 2 SDs of mean'
      ],
      examples: ['IQ scores', 'Height in adults', 'Exam scores (large samples)'],
      color: 'green',
      svgPath: 'M 10,80 Q 30,80 50,60 Q 70,20 90,20 Q 110,20 130,60 Q 150,80 170,80'
    },
    {
      id: 'positive',
      title: 'Positive Skew',
      subtitle: 'Tail to the right',
      icon: <TrendingUp className="w-8 h-8" />,
      description: 'Most scores at lower end, tail extends towards higher values',
      features: [
        'Mode < Median < Mean',
        'Tail points towards positive (high) values',
        'Mean is pulled up by high outliers',
        'Sometimes called "right-skewed"'
      ],
      examples: ['Reaction times', 'Income distribution', 'Age at first marriage'],
      color: 'amber',
      svgPath: 'M 10,80 Q 20,80 30,20 Q 50,40 80,60 Q 120,75 170,80'
    },
    {
      id: 'negative',
      title: 'Negative Skew',
      subtitle: 'Tail to the left',
      icon: <TrendingDown className="w-8 h-8" />,
      description: 'Most scores at higher end, tail extends towards lower values',
      features: [
        'Mean < Median < Mode',
        'Tail points towards negative (low) values',
        'Mean is pulled down by low outliers',
        'Sometimes called "left-skewed"'
      ],
      examples: ['Easy test scores', 'Age at retirement', 'Life expectancy in developed countries'],
      color: 'purple',
      svgPath: 'M 10,80 Q 50,75 90,60 Q 130,40 150,20 Q 160,80 170,80'
    }
  ]

  const colorMap: Record<string, { bg: string; border: string; text: string }> = {
    green: { bg: 'bg-green-900/30', border: 'border-green-500/50', text: 'text-green-400' },
    amber: { bg: 'bg-amber-900/30', border: 'border-amber-500/50', text: 'text-amber-400' },
    purple: { bg: 'bg-purple-900/30', border: 'border-purple-500/50', text: 'text-purple-400' }
  }

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-rose-400 mb-2">Distributions</h2>
        <p className="text-gray-400 mb-6">Understanding how data is spread and shaped</p>

        {/* Definition */}
        <div className="bg-gray-800/50 rounded-xl p-4 border border-rose-500/30 mb-6">
          <p className="text-lg text-gray-200">
            A <span className="text-rose-400 font-bold">distribution</span> shows the pattern of scores in a data set - how they are spread out and where most values fall.
          </p>
        </div>

        {/* Distribution Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {distributions.map((dist) => {
            const colors = colorMap[dist.color]
            const isSelected = selectedDist === dist.id
            return (
              <button
                key={dist.id}
                onClick={() => {
                  setSelectedDist(selectedDist === dist.id ? null : dist.id)
                  setRevealedFeatures(0)
                }}
                className={`${colors.bg} rounded-xl p-4 border-2 transition-all duration-300 text-left ${
                  isSelected 
                    ? `${colors.border} ring-2 ring-offset-2 ring-offset-gray-900 ${colors.border.replace('border-', 'ring-')}` 
                    : `${colors.border} hover:scale-[1.02]`
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={colors.text}>{dist.icon}</div>
                  <div>
                    <h3 className={`font-bold ${colors.text}`}>{dist.title}</h3>
                    <p className="text-gray-500 text-xs">{dist.subtitle}</p>
                  </div>
                </div>
                
                {/* Mini Distribution Visual */}
                <div className="bg-gray-800/80 rounded-lg p-2 mt-2">
                  <svg viewBox="0 0 180 90" className="w-full h-16">
                    <path
                      d={dist.svgPath}
                      fill="none"
                      stroke={dist.color === 'green' ? '#22c55e' : dist.color === 'amber' ? '#f59e0b' : '#a855f7'}
                      strokeWidth="3"
                    />
                    <line x1="10" y1="80" x2="170" y2="80" stroke="#4b5563" strokeWidth="1" />
                  </svg>
                </div>
              </button>
            )
          })}
        </div>

        {/* Selected Distribution Details */}
        {selectedDist && (
          <div className="animate-fadeIn">
            {distributions.filter(d => d.id === selectedDist).map(dist => {
              const colors = colorMap[dist.color]
              return (
                <div key={dist.id} className={`${colors.bg} rounded-xl p-6 border ${colors.border}`}>
                  <h3 className={`text-xl font-bold ${colors.text} mb-2`}>
                    {dist.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{dist.description}</p>

                  <div className="grid grid-cols-2 gap-6">
                    {/* Features - Click to Reveal */}
                    <div>
                      <h4 className="font-bold text-gray-300 mb-3">📊 Key Features (click to reveal)</h4>
                      <div className="space-y-2">
                        {dist.features.map((feature, i) => {
                          const isRevealed = i < revealedFeatures
                          return (
                            <button
                              key={i}
                              onClick={() => !isRevealed && setRevealedFeatures(prev => prev + 1)}
                              className={`w-full text-left p-2 rounded-lg transition-all text-sm ${
                                isRevealed 
                                  ? `${colors.bg} border ${colors.border}` 
                                  : 'bg-gray-700/30 border border-dashed border-gray-600 hover:bg-gray-700/50 cursor-pointer'
                              }`}
                            >
                              {isRevealed ? (
                                <span className={`${colors.text} animate-fadeIn`}>✓ {feature}</span>
                              ) : (
                                <span className="text-gray-500">Click to reveal...</span>
                              )}
                            </button>
                          )
                        })}
                      </div>
                      
                      {/* Progress */}
                      <div className="flex justify-center gap-2 mt-3">
                        {dist.features.map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all ${
                              i < revealedFeatures ? colors.text.replace('text-', 'bg-') : 'bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Examples & Visual */}
                    <div>
                      <h4 className="font-bold text-gray-300 mb-3">📝 Real-World Examples</h4>
                      <ul className="space-y-2 mb-4">
                        {dist.examples.map((ex, i) => (
                          <li key={i} className="bg-gray-800/50 rounded p-2 text-sm text-gray-400">
                            • {ex}
                          </li>
                        ))}
                      </ul>

                      {/* Larger Visual */}
                      <div className="bg-gray-800/80 rounded-lg p-4">
                        <svg viewBox="0 0 180 100" className="w-full h-24">
                          <defs>
                            <linearGradient id={`grad-${dist.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor={dist.color === 'green' ? '#22c55e' : dist.color === 'amber' ? '#f59e0b' : '#a855f7'} stopOpacity="0.5" />
                              <stop offset="100%" stopColor={dist.color === 'green' ? '#22c55e' : dist.color === 'amber' ? '#f59e0b' : '#a855f7'} stopOpacity="0.1" />
                            </linearGradient>
                          </defs>
                          <path
                            d={dist.svgPath + ' L 170,80 L 10,80 Z'}
                            fill={`url(#grad-${dist.id})`}
                          />
                          <path
                            d={dist.svgPath}
                            fill="none"
                            stroke={dist.color === 'green' ? '#22c55e' : dist.color === 'amber' ? '#f59e0b' : '#a855f7'}
                            strokeWidth="3"
                          />
                          <line x1="10" y1="80" x2="170" y2="80" stroke="#4b5563" strokeWidth="1" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Comparison */}
        {selectedDist && revealedFeatures >= 4 && (
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="mt-4 w-full bg-cyan-900/30 rounded-xl p-4 border border-cyan-500/30 hover:bg-cyan-900/40 transition-all animate-fadeIn"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-cyan-400">
                📈 Mean, Median, Mode Relationship
              </h3>
              <span className="text-gray-400 text-sm">{showComparison ? '▼' : '▶'}</span>
            </div>
            {showComparison && (
              <div className="mt-4 grid grid-cols-3 gap-4 text-left animate-fadeIn">
                <div className="bg-green-900/30 rounded-lg p-3 border border-green-500/30">
                  <p className="font-bold text-green-400 text-sm">Normal</p>
                  <p className="text-gray-400 text-xs">Mean = Median = Mode</p>
                  <p className="text-gray-500 text-xs mt-1">All measures are equal</p>
                </div>
                <div className="bg-amber-900/30 rounded-lg p-3 border border-amber-500/30">
                  <p className="font-bold text-amber-400 text-sm">Positive Skew</p>
                  <p className="text-gray-400 text-xs">Mode {'<'} Median {'<'} Mean</p>
                  <p className="text-gray-500 text-xs mt-1">Mean pulled right by tail</p>
                </div>
                <div className="bg-purple-900/30 rounded-lg p-3 border border-purple-500/30">
                  <p className="font-bold text-purple-400 text-sm">Negative Skew</p>
                  <p className="text-gray-400 text-xs">Mean {'<'} Median {'<'} Mode</p>
                  <p className="text-gray-500 text-xs mt-1">Mean pulled left by tail</p>
                </div>
              </div>
            )}
          </button>
        )}
      </div>
    </div>
  )
}
