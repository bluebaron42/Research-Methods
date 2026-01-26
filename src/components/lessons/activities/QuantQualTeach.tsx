import { useState } from 'react'
import { Hash, MessageSquare, ArrowRight, CheckCircle } from 'lucide-react'

interface QuantQualTeachProps {
  isPresenting?: boolean
}

export default function QuantQualTeach({ isPresenting }: QuantQualTeachProps) {
  const [activeType, setActiveType] = useState<'quantitative' | 'qualitative' | null>(null)
  const [revealedPoints, setRevealedPoints] = useState({ quantitative: 0, qualitative: 0 })
  const [showConversion, setShowConversion] = useState(false)

  const dataTypes = {
    quantitative: {
      title: 'Quantitative Data',
      icon: <Hash className="w-8 h-8" />,
      definition: 'Data in NUMERICAL form - can be counted, measured, or expressed using numbers',
      color: 'blue',
      examples: [
        { text: 'Test scores (75/100)', emoji: '📊' },
        { text: 'Reaction time in milliseconds', emoji: '⏱️' },
        { text: 'Heart rate (bpm)', emoji: '❤️' },
        { text: 'Number of words recalled', emoji: '🔢' }
      ],
      strengths: [
        'Easy to analyse statistically',
        'Can identify patterns and trends',
        'Allows objective comparisons',
        'High reliability - easy to replicate'
      ],
      limitations: [
        'May oversimplify complex behaviours',
        'Lacks depth and detail',
        'May miss important context',
        'Numbers may not capture meaning'
      ]
    },
    qualitative: {
      title: 'Qualitative Data',
      icon: <MessageSquare className="w-8 h-8" />,
      definition: 'Data in NON-NUMERICAL form - expressed through words, descriptions, images, sounds',
      color: 'purple',
      examples: [
        { text: 'Interview transcripts', emoji: '🎙️' },
        { text: 'Written descriptions of feelings', emoji: '📝' },
        { text: 'Diary entries', emoji: '📔' },
        { text: 'Observational notes', emoji: '👀' }
      ],
      strengths: [
        'Rich, detailed information',
        'Captures complexity and nuance',
        'Explores thoughts and feelings',
        'High ecological validity'
      ],
      limitations: [
        'Difficult to analyse statistically',
        'Time-consuming to collect and analyse',
        'Subjective interpretation',
        'Hard to generalise findings'
      ]
    }
  }

  const colorMap: Record<string, { bg: string; border: string; text: string; light: string }> = {
    blue: { bg: 'bg-blue-900/30', border: 'border-blue-500/50', text: 'text-blue-400', light: 'bg-blue-500/20' },
    purple: { bg: 'bg-purple-900/30', border: 'border-purple-500/50', text: 'text-purple-400', light: 'bg-purple-500/20' }
  }

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-rose-400 mb-2">Quantitative vs Qualitative Data</h2>
        <p className="text-gray-400 mb-6">Click each type to explore - then reveal strengths & limitations</p>

        {/* Type Selector */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {Object.entries(dataTypes).map(([key, data]) => {
            const colors = colorMap[data.color]
            const isActive = activeType === key
            return (
              <button
                key={key}
                onClick={() => setActiveType(activeType === key ? null : key as 'quantitative' | 'qualitative')}
                className={`${colors.bg} rounded-xl p-6 border-2 transition-all duration-300 text-left ${
                  isActive ? `${colors.border} ring-2 ring-offset-2 ring-offset-gray-900 ${colors.border.replace('border-', 'ring-')}` : colors.border
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={colors.text}>{data.icon}</div>
                  <h3 className={`text-xl font-bold ${colors.text}`}>{data.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{data.definition}</p>
                
                {/* Examples */}
                <div className="grid grid-cols-2 gap-2">
                  {data.examples.map((ex, i) => (
                    <div key={i} className="bg-gray-800/50 rounded-lg p-2 text-center">
                      <span className="text-xl">{ex.emoji}</span>
                      <p className="text-xs text-gray-400 mt-1">{ex.text}</p>
                    </div>
                  ))}
                </div>
              </button>
            )
          })}
        </div>

        {/* Detailed View */}
        {activeType && (
          <div className="animate-fadeIn">
            {Object.entries(dataTypes).filter(([key]) => key === activeType).map(([key, data]) => {
              const colors = colorMap[data.color]
              const points = revealedPoints[activeType as keyof typeof revealedPoints]
              
              return (
                <div key={key} className={`${colors.bg} rounded-xl p-6 border ${colors.border}`}>
                  <div className="grid grid-cols-2 gap-6">
                    {/* Strengths */}
                    <div>
                      <h4 className="font-bold text-green-400 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Strengths (click to reveal)
                      </h4>
                      <div className="space-y-2">
                        {data.strengths.map((point, i) => {
                          const isRevealed = i < points
                          return (
                            <button
                              key={i}
                              onClick={() => !isRevealed && setRevealedPoints(prev => ({
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
                                <span className="text-gray-300 text-sm">✓ {point}</span>
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
                      <h4 className="font-bold text-red-400 mb-3 flex items-center gap-2">
                        ✗ Limitations
                      </h4>
                      <div className="space-y-2">
                        {data.limitations.map((point, i) => {
                          const isRevealed = i < points
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
                                <span className="text-gray-300 text-sm">✗ {point}</span>
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
                          i < points ? colors.text.replace('text-', 'bg-') : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Data Conversion */}
        {activeType && revealedPoints[activeType] >= 4 && (
          <button
            onClick={() => setShowConversion(!showConversion)}
            className="mt-4 w-full bg-amber-900/30 rounded-xl p-4 border border-amber-500/50 hover:bg-amber-900/40 transition-all animate-fadeIn"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-amber-400">
                🔄 Can Qualitative Become Quantitative?
              </h3>
              <span className="text-gray-400 text-sm">{showConversion ? '▼' : '▶'}</span>
            </div>
            {showConversion && (
              <div className="mt-4 text-left animate-fadeIn">
                <p className="text-gray-300 mb-3">Yes! Qualitative data can be <span className="text-amber-400 font-bold">quantified</span> through:</p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <p className="font-bold text-cyan-400">Content Analysis</p>
                    <p className="text-xs text-gray-400">Counting themes or words</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <p className="font-bold text-cyan-400">Coding</p>
                    <p className="text-xs text-gray-400">Assigning numbers to categories</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <p className="font-bold text-cyan-400">Tallying</p>
                    <p className="text-xs text-gray-400">Frequency counts of behaviours</p>
                  </div>
                </div>
              </div>
            )}
          </button>
        )}
      </div>
    </div>
  )
}
