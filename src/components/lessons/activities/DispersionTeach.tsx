import { useState } from 'react'
import { Maximize2, ArrowLeftRight, Calculator } from 'lucide-react'

interface DispersionTeachProps {
  isPresenting?: boolean
}

export default function DispersionTeach({ isPresenting }: DispersionTeachProps) {
  const [selectedMeasure, setSelectedMeasure] = useState<'range' | 'sd' | null>(null)
  const [showCalculation, setShowCalculation] = useState(false)
  const [revealedEval, setRevealedEval] = useState(0)

  // Example data sets
  const dataSetA = [4, 5, 5, 6, 6, 6, 7, 7, 8] // Low dispersion
  const dataSetB = [1, 2, 3, 6, 6, 6, 9, 10, 11] // High dispersion

  const measures = [
    {
      id: 'range',
      title: 'Range',
      definition: 'The difference between the highest and lowest values',
      formula: 'Highest value − Lowest value',
      exampleA: `${Math.max(...dataSetA)} - ${Math.min(...dataSetA)} = ${Math.max(...dataSetA) - Math.min(...dataSetA)}`,
      exampleB: `${Math.max(...dataSetB)} - ${Math.min(...dataSetB)} = ${Math.max(...dataSetB) - Math.min(...dataSetB)}`,
      resultA: Math.max(...dataSetA) - Math.min(...dataSetA),
      resultB: Math.max(...dataSetB) - Math.min(...dataSetB),
      color: 'cyan',
      strengths: [
        'Very easy to calculate',
        'Quick overview of spread',
        'Easy to understand'
      ],
      limitations: [
        'Only uses 2 values',
        'Highly affected by outliers',
        'Ignores distribution shape'
      ]
    },
    {
      id: 'sd',
      title: 'Standard Deviation',
      definition: 'Average distance of each data point from the mean',
      formula: 'Shows how spread out values are from the average',
      resultA: 1.15,
      resultB: 3.27,
      color: 'purple',
      strengths: [
        'Uses ALL data points',
        'More precise measure',
        'Useful for normal distributions'
      ],
      limitations: [
        'More complex to calculate',
        'Affected by outliers (but less than range)',
        'Not intuitive for beginners'
      ]
    }
  ]

  const colorMap: Record<string, { bg: string; border: string; text: string }> = {
    cyan: { bg: 'bg-cyan-900/30', border: 'border-cyan-500/50', text: 'text-cyan-400' },
    purple: { bg: 'bg-purple-900/30', border: 'border-purple-500/50', text: 'text-purple-400' }
  }

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-rose-400 mb-2">Measures of Dispersion</h2>
        <p className="text-gray-400 mb-4">Understanding how spread out data is around the central point</p>

        {/* Definition */}
        <div className="bg-gray-800/50 rounded-xl p-4 border border-rose-500/30 mb-6">
          <div className="flex items-center gap-3">
            <ArrowLeftRight className="w-6 h-6 text-rose-400" />
            <p className="text-lg text-gray-200">
              Measures of dispersion tell us about the <span className="text-rose-400 font-bold">spread</span> or <span className="text-rose-400 font-bold">variability</span> of values in a data set.
            </p>
          </div>
        </div>

        {/* Visual Comparison */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-800/50 rounded-xl p-4 border border-green-500/30">
            <h3 className="text-sm font-bold text-green-400 mb-2">Data Set A: Low Dispersion</h3>
            <div className="flex gap-1 justify-center flex-wrap mb-2">
              {dataSetA.map((val, i) => (
                <span key={i} className="px-2 py-1 bg-green-900/30 rounded text-green-300 text-sm font-mono">
                  {val}
                </span>
              ))}
            </div>
            <div className="bg-gray-700/50 h-2 rounded-full relative mt-3">
              <div className="absolute top-0 left-[35%] right-[15%] h-full bg-green-500/50 rounded-full"></div>
            </div>
            <p className="text-center text-xs text-gray-500 mt-1">Values clustered together</p>
          </div>
          
          <div className="bg-gray-800/50 rounded-xl p-4 border border-red-500/30">
            <h3 className="text-sm font-bold text-red-400 mb-2">Data Set B: High Dispersion</h3>
            <div className="flex gap-1 justify-center flex-wrap mb-2">
              {dataSetB.map((val, i) => (
                <span key={i} className="px-2 py-1 bg-red-900/30 rounded text-red-300 text-sm font-mono">
                  {val}
                </span>
              ))}
            </div>
            <div className="bg-gray-700/50 h-2 rounded-full relative mt-3">
              <div className="absolute top-0 left-[5%] right-[5%] h-full bg-red-500/50 rounded-full"></div>
            </div>
            <p className="text-center text-xs text-gray-500 mt-1">Values spread widely</p>
          </div>
        </div>

        {/* Measure Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {measures.map((measure) => {
            const colors = colorMap[measure.color]
            const isSelected = selectedMeasure === measure.id
            return (
              <button
                key={measure.id}
                onClick={() => {
                  setSelectedMeasure(selectedMeasure === measure.id ? null : measure.id as 'range' | 'sd')
                  setRevealedEval(0)
                  setShowCalculation(false)
                }}
                className={`${colors.bg} rounded-xl p-5 border-2 transition-all duration-300 text-left ${
                  isSelected 
                    ? `${colors.border} ring-2 ring-offset-2 ring-offset-gray-900 ${colors.border.replace('border-', 'ring-')}` 
                    : `${colors.border} hover:scale-[1.02]`
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  {measure.id === 'range' ? (
                    <Maximize2 className={`w-6 h-6 ${colors.text}`} />
                  ) : (
                    <Calculator className={`w-6 h-6 ${colors.text}`} />
                  )}
                  <h3 className={`text-xl font-bold ${colors.text}`}>{measure.title}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">{measure.definition}</p>
                
                {/* Comparison */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-800/80 rounded-lg p-2 text-center">
                    <span className="text-xs text-gray-500">Set A</span>
                    <p className={`text-lg font-bold ${colors.text}`}>{measure.resultA}</p>
                  </div>
                  <div className="bg-gray-800/80 rounded-lg p-2 text-center">
                    <span className="text-xs text-gray-500">Set B</span>
                    <p className={`text-lg font-bold ${colors.text}`}>{measure.resultB}</p>
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Selected Measure Details */}
        {selectedMeasure && (
          <div className="animate-fadeIn">
            {measures.filter(m => m.id === selectedMeasure).map(measure => {
              const colors = colorMap[measure.color]
              return (
                <div key={measure.id} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className={`text-xl font-bold ${colors.text} mb-4`}>
                    {measure.title} - In Detail
                  </h3>

                  {/* Formula & Calculation */}
                  {measure.id === 'range' && (
                    <button
                      onClick={() => setShowCalculation(!showCalculation)}
                      className="w-full bg-gray-700/30 rounded-lg p-4 mb-4 text-left hover:bg-gray-700/50 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-gray-300">📐 Calculation Example</span>
                        <span className="text-gray-400 text-sm">{showCalculation ? '▼' : '▶'}</span>
                      </div>
                      {showCalculation && (
                        <div className="mt-3 animate-fadeIn space-y-2">
                          <p className={`font-mono ${colors.text}`}>{measure.formula}</p>
                          <div className="grid grid-cols-2 gap-3 mt-2">
                            <div className="bg-green-900/20 rounded p-2">
                              <p className="text-xs text-gray-500 mb-1">Data Set A:</p>
                              <p className="text-green-300 text-sm">{measure.exampleA}</p>
                            </div>
                            <div className="bg-red-900/20 rounded p-2">
                              <p className="text-xs text-gray-500 mb-1">Data Set B:</p>
                              <p className="text-red-300 text-sm">{measure.exampleB}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </button>
                  )}

                  {measure.id === 'sd' && (
                    <div className="bg-gray-700/30 rounded-lg p-4 mb-4">
                      <p className="font-bold text-gray-300 mb-2">📐 Understanding Standard Deviation</p>
                      <p className="text-gray-400 text-sm mb-3">{measure.formula}</p>
                      <div className="bg-amber-900/30 rounded p-3 border border-amber-500/30">
                        <p className="text-amber-300 text-sm">
                          💡 <strong>Rule of thumb:</strong> In a normal distribution, about 68% of data falls within 1 SD of the mean
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Evaluation */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-green-400 mb-2">✓ Strengths (click to reveal)</h4>
                      <div className="space-y-2">
                        {measure.strengths.map((point, i) => {
                          const isRevealed = i < revealedEval
                          return (
                            <button
                              key={i}
                              onClick={() => !isRevealed && setRevealedEval(prev => prev + 1)}
                              className={`w-full text-left p-2 rounded transition-all text-sm ${
                                isRevealed 
                                  ? 'bg-green-900/30 text-gray-300' 
                                  : 'bg-gray-700/30 text-gray-500 hover:bg-gray-700/50 cursor-pointer border border-dashed border-gray-600'
                              }`}
                            >
                              {isRevealed ? `✓ ${point}` : 'Click to reveal...'}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-red-400 mb-2">✗ Limitations</h4>
                      <div className="space-y-2">
                        {measure.limitations.map((point, i) => {
                          const isRevealed = i < revealedEval
                          return (
                            <div
                              key={i}
                              className={`p-2 rounded text-sm ${
                                isRevealed 
                                  ? 'bg-red-900/30 text-gray-300' 
                                  : 'bg-gray-700/30 text-gray-500 border border-dashed border-gray-600'
                              }`}
                            >
                              {isRevealed ? `✗ ${point}` : '...'}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
