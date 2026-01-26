import { useState } from 'react'
import { Calculator, Target, ArrowRight } from 'lucide-react'

interface CentralTendencyTeachProps {
  isPresenting?: boolean
}

export default function CentralTendencyTeach({ isPresenting }: CentralTendencyTeachProps) {
  const [selectedMeasure, setSelectedMeasure] = useState<string | null>(null)
  const [showCalculation, setShowCalculation] = useState(false)
  const [revealedEval, setRevealedEval] = useState(0)

  // Example data set
  const dataSet = [3, 5, 6, 6, 7, 8, 9, 10, 12]
  const mean = (dataSet.reduce((a, b) => a + b, 0) / dataSet.length).toFixed(1)
  const median = 7
  const mode = 6

  const measures = [
    {
      id: 'mean',
      title: 'Mean',
      symbol: 'x̄',
      definition: 'The arithmetic average - add all values and divide by number of values',
      formula: 'Sum of values ÷ Number of values',
      result: mean,
      color: 'blue',
      strengths: [
        'Uses all data points',
        'Good for normally distributed data',
        'Can be used in further calculations'
      ],
      limitations: [
        'Affected by extreme values (outliers)',
        'May not represent typical value',
        'Cannot use with categorical data'
      ]
    },
    {
      id: 'median',
      title: 'Median',
      symbol: 'Md',
      definition: 'The middle value when data is arranged in order',
      formula: 'Middle value (or average of two middle values)',
      result: median.toString(),
      color: 'green',
      strengths: [
        'Not affected by outliers',
        'Easy to understand',
        'Good for skewed data'
      ],
      limitations: [
        'Does not use all data',
        'Less useful in calculations',
        'Can be same as an actual value or not'
      ]
    },
    {
      id: 'mode',
      title: 'Mode',
      symbol: 'Mo',
      definition: 'The most frequently occurring value',
      formula: 'Value that appears most often',
      result: mode.toString(),
      color: 'purple',
      strengths: [
        'Easy to find',
        'Works with categorical data',
        'Not affected by outliers'
      ],
      limitations: [
        'May not exist (no mode)',
        'May be more than one (bimodal)',
        'Not useful for further calculations'
      ]
    }
  ]

  const colorMap: Record<string, { bg: string; border: string; text: string }> = {
    blue: { bg: 'bg-blue-900/30', border: 'border-blue-500/50', text: 'text-blue-400' },
    green: { bg: 'bg-green-900/30', border: 'border-green-500/50', text: 'text-green-400' },
    purple: { bg: 'bg-purple-900/30', border: 'border-purple-500/50', text: 'text-purple-400' }
  }

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-rose-400 mb-2">Measures of Central Tendency</h2>
        <p className="text-gray-400 mb-4">Understanding how we summarise the "typical" value in a data set</p>

        {/* Definition */}
        <div className="bg-gray-800/50 rounded-xl p-4 border border-rose-500/30 mb-6">
          <div className="flex items-center gap-3">
            <Target className="w-6 h-6 text-rose-400" />
            <p className="text-lg text-gray-200">
              Measures of central tendency tell us about the <span className="text-rose-400 font-bold">middle</span> or <span className="text-rose-400 font-bold">typical value</span> in a data set.
            </p>
          </div>
        </div>

        {/* Example Data Set */}
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 mb-6">
          <h3 className="text-sm font-bold text-gray-400 mb-2">Example Data Set:</h3>
          <div className="flex gap-2 justify-center flex-wrap">
            {dataSet.map((val, i) => (
              <span 
                key={i} 
                className={`px-3 py-1 rounded-lg font-mono ${
                  val === mode ? 'bg-purple-500/30 text-purple-300' : 'bg-gray-700 text-gray-300'
                }`}
              >
                {val}
              </span>
            ))}
          </div>
        </div>

        {/* Measure Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {measures.map((measure) => {
            const colors = colorMap[measure.color]
            const isSelected = selectedMeasure === measure.id
            return (
              <button
                key={measure.id}
                onClick={() => setSelectedMeasure(selectedMeasure === measure.id ? null : measure.id)}
                className={`${colors.bg} rounded-xl p-4 border-2 transition-all duration-300 text-left ${
                  isSelected 
                    ? `${colors.border} ring-2 ring-offset-2 ring-offset-gray-900 ${colors.border.replace('border-', 'ring-')}` 
                    : `${colors.border} hover:scale-[1.02]`
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`text-xl font-bold ${colors.text}`}>{measure.title}</h3>
                  <span className={`text-2xl font-mono ${colors.text}`}>{measure.symbol}</span>
                </div>
                <p className="text-gray-300 text-sm mb-3">{measure.definition}</p>
                
                {/* Result */}
                <div className="bg-gray-800/80 rounded-lg p-3 text-center">
                  <span className="text-gray-400 text-xs">Result:</span>
                  <p className={`text-2xl font-bold ${colors.text}`}>{measure.result}</p>
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
                <div key={measure.id} className={`${colors.bg} rounded-xl p-6 border ${colors.border}`}>
                  <h3 className={`text-xl font-bold ${colors.text} mb-4`}>
                    <Calculator className="w-5 h-5 inline mr-2" />
                    {measure.title} - Detailed View
                  </h3>

                  {/* How to Calculate */}
                  <button
                    onClick={() => setShowCalculation(!showCalculation)}
                    className="w-full bg-gray-800/50 rounded-lg p-4 mb-4 text-left hover:bg-gray-700/50 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-gray-300">📐 How to Calculate</span>
                      <span className="text-gray-400 text-sm">{showCalculation ? '▼' : '▶'}</span>
                    </div>
                    {showCalculation && (
                      <div className="mt-3 animate-fadeIn">
                        <p className={`font-mono ${colors.text} mb-2`}>{measure.formula}</p>
                        {measure.id === 'mean' && (
                          <p className="text-gray-400 text-sm">
                            ({dataSet.join(' + ')}) ÷ {dataSet.length} = <span className={colors.text}>{measure.result}</span>
                          </p>
                        )}
                        {measure.id === 'median' && (
                          <p className="text-gray-400 text-sm">
                            Ordered: {dataSet.join(', ')} → Middle value = <span className={colors.text}>{measure.result}</span>
                          </p>
                        )}
                        {measure.id === 'mode' && (
                          <p className="text-gray-400 text-sm">
                            6 appears twice (most frequent) = <span className={colors.text}>{measure.result}</span>
                          </p>
                        )}
                      </div>
                    )}
                  </button>

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

                  {/* Progress */}
                  <div className="flex justify-center gap-2 mt-4">
                    {measure.strengths.map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all ${
                          i < revealedEval ? colors.text.replace('text-', 'bg-') : 'bg-gray-600'
                        }`}
                      />
                    ))}
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
