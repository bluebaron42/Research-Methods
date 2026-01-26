import { useState } from 'react'
import { FileText, Search, ArrowRight, RefreshCw } from 'lucide-react'

interface PrimarySecondaryTeachProps {
  isPresenting?: boolean
}

export default function PrimarySecondaryTeach({ isPresenting }: PrimarySecondaryTeachProps) {
  const [activeType, setActiveType] = useState<'primary' | 'secondary' | null>(null)
  const [revealedEval, setRevealedEval] = useState({ primary: 0, secondary: 0 })
  const [showComparison, setShowComparison] = useState(false)

  const dataTypes = {
    primary: {
      title: 'Primary Data',
      subtitle: 'First-hand data',
      icon: <FileText className="w-8 h-8" />,
      definition: 'Data collected DIRECTLY by the researcher for their specific research purpose',
      keyword: 'ORIGINAL',
      color: 'cyan',
      examples: [
        { method: 'Experiments', emoji: '🔬' },
        { method: 'Questionnaires', emoji: '📋' },
        { method: 'Interviews', emoji: '🎙️' },
        { method: 'Observations', emoji: '👁️' }
      ],
      strengths: [
        'Tailored to specific research aims',
        'Researcher has full control over quality',
        'Fresh and current data',
        'Can address specific hypotheses'
      ],
      limitations: [
        'Time-consuming to collect',
        'Expensive (resources, participants)',
        'Requires ethical approval',
        'Limited sample size often'
      ]
    },
    secondary: {
      title: 'Secondary Data',
      subtitle: 'Second-hand data',
      icon: <Search className="w-8 h-8" />,
      definition: 'Data that has ALREADY been collected by someone else for a different purpose',
      keyword: 'PRE-EXISTING',
      color: 'amber',
      examples: [
        { method: 'Government statistics', emoji: '📊' },
        { method: 'Previous research', emoji: '📚' },
        { method: 'Medical records', emoji: '🏥' },
        { method: 'School records', emoji: '🎓' }
      ],
      strengths: [
        'Quick and easy to access',
        'Often free or low-cost',
        'Large sample sizes available',
        'No need for ethical approval'
      ],
      limitations: [
        'May not fit exact research needs',
        'Cannot control data quality',
        'May be outdated',
        'May contain unknown biases'
      ]
    }
  }

  const colorMap: Record<string, { bg: string; border: string; text: string }> = {
    cyan: { bg: 'bg-cyan-900/30', border: 'border-cyan-500/50', text: 'text-cyan-400' },
    amber: { bg: 'bg-amber-900/30', border: 'border-amber-500/50', text: 'text-amber-400' }
  }

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-rose-400 mb-2">Primary vs Secondary Data</h2>
        <p className="text-gray-400 mb-6">Click each type to explore its characteristics</p>

        {/* Type Selector Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {Object.entries(dataTypes).map(([key, data]) => {
            const colors = colorMap[data.color]
            const isActive = activeType === key
            return (
              <button
                key={key}
                onClick={() => setActiveType(activeType === key ? null : key as 'primary' | 'secondary')}
                className={`${colors.bg} rounded-xl p-6 border-2 transition-all duration-300 text-left ${
                  isActive ? `${colors.border} ring-2 ring-offset-2 ring-offset-gray-900 ${colors.border.replace('border-', 'ring-')}` : colors.border
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={colors.text}>{data.icon}</div>
                  <div>
                    <h3 className={`text-xl font-bold ${colors.text}`}>{data.title}</h3>
                    <p className="text-gray-500 text-sm">{data.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-3">{data.definition}</p>
                
                <div className={`inline-block ${colors.bg} ${colors.border} border rounded-lg px-3 py-1`}>
                  <span className={`font-bold ${colors.text}`}>Key: {data.keyword}</span>
                </div>

                {/* Examples Mini Grid */}
                {isActive && (
                  <div className="mt-4 grid grid-cols-4 gap-2 animate-fadeIn">
                    {data.examples.map((ex, i) => (
                      <div key={i} className="bg-gray-800/50 rounded-lg p-2 text-center">
                        <span className="text-xl block">{ex.emoji}</span>
                        <p className="text-xs text-gray-400 mt-1">{ex.method}</p>
                      </div>
                    ))}
                  </div>
                )}
              </button>
            )
          })}
        </div>

        {/* Detailed Evaluation */}
        {activeType && (
          <div className="animate-fadeIn">
            {Object.entries(dataTypes).filter(([key]) => key === activeType).map(([key, data]) => {
              const colors = colorMap[data.color]
              const revealed = revealedEval[activeType as keyof typeof revealedEval]
              
              return (
                <div key={key} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className={`text-lg font-bold ${colors.text} mb-4`}>
                    Evaluate {data.title} (click to reveal)
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {/* Strengths */}
                    <div>
                      <h4 className="font-bold text-green-400 mb-3">✓ Strengths</h4>
                      <div className="space-y-2">
                        {data.strengths.map((point, i) => {
                          const isRevealed = i < revealed
                          return (
                            <button
                              key={i}
                              onClick={() => !isRevealed && setRevealedEval(prev => ({
                                ...prev,
                                [activeType]: prev[activeType as keyof typeof prev] + 1
                              }))}
                              className={`w-full text-left p-2 rounded-lg transition-all ${
                                isRevealed 
                                  ? 'bg-green-900/30 border border-green-500/30' 
                                  : 'bg-gray-700/30 border border-dashed border-gray-600 hover:bg-gray-700/50 cursor-pointer'
                              }`}
                            >
                              {isRevealed ? (
                                <span className="text-gray-300 text-sm animate-fadeIn">✓ {point}</span>
                              ) : (
                                <span className="text-gray-500 text-sm">Click to reveal...</span>
                              )}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Limitations */}
                    <div>
                      <h4 className="font-bold text-red-400 mb-3">✗ Limitations</h4>
                      <div className="space-y-2">
                        {data.limitations.map((point, i) => {
                          const isRevealed = i < revealed
                          return (
                            <div
                              key={i}
                              className={`p-2 rounded-lg transition-all ${
                                isRevealed 
                                  ? 'bg-red-900/30 border border-red-500/30' 
                                  : 'bg-gray-700/30 border border-dashed border-gray-600'
                              }`}
                            >
                              {isRevealed ? (
                                <span className="text-gray-300 text-sm animate-fadeIn">✗ {point}</span>
                              ) : (
                                <span className="text-gray-500 text-sm">...</span>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="flex justify-center gap-2 mt-4">
                    {data.strengths.map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all ${
                          i < revealed ? colors.text.replace('text-', 'bg-') : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Comparison Summary */}
        {activeType && revealedEval[activeType] >= 4 && (
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="mt-4 w-full bg-purple-900/30 rounded-xl p-4 border border-purple-500/50 hover:bg-purple-900/40 transition-all animate-fadeIn"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-purple-400">
                <RefreshCw className="w-5 h-5 inline mr-2" />
                When to Use Each Type?
              </h3>
              <span className="text-gray-400 text-sm">{showComparison ? '▼' : '▶'}</span>
            </div>
            {showComparison && (
              <div className="mt-4 text-left animate-fadeIn grid grid-cols-2 gap-4">
                <div className="bg-cyan-900/30 rounded-lg p-4 border border-cyan-500/30">
                  <h4 className="font-bold text-cyan-400 mb-2">Use PRIMARY when:</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• You need specific, tailored data</li>
                    <li>• No existing data fits your needs</li>
                    <li>• You need control over methodology</li>
                    <li>• You have time and resources</li>
                  </ul>
                </div>
                <div className="bg-amber-900/30 rounded-lg p-4 border border-amber-500/30">
                  <h4 className="font-bold text-amber-400 mb-2">Use SECONDARY when:</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Time or budget is limited</li>
                    <li>• Large samples are needed</li>
                    <li>• Historical data is required</li>
                    <li>• Existing data fits your aims</li>
                  </ul>
                </div>
              </div>
            )}
          </button>
        )}
      </div>
    </div>
  )
}
