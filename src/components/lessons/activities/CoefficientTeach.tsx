import { useState } from 'react'
import { Target, ArrowRight, Info } from 'lucide-react'

interface CoefficientTeachProps {
  isPresenting?: boolean
}

export default function CoefficientTeach({ isPresenting }: CoefficientTeachProps) {
  const [revealedSteps, setRevealedSteps] = useState(0)
  const [selectedValue, setSelectedValue] = useState<number | null>(null)
  const [showInterpretation, setShowInterpretation] = useState(false)

  const coefficientExamples = [
    { value: -1.0, label: 'Perfect negative', strength: 'Perfect', direction: 'Negative', color: 'red' },
    { value: -0.85, label: 'Strong negative', strength: 'Strong', direction: 'Negative', color: 'red' },
    { value: -0.45, label: 'Moderate negative', strength: 'Moderate', direction: 'Negative', color: 'orange' },
    { value: -0.15, label: 'Weak negative', strength: 'Weak', direction: 'Negative', color: 'yellow' },
    { value: 0, label: 'No correlation', strength: 'None', direction: 'None', color: 'gray' },
    { value: 0.25, label: 'Weak positive', strength: 'Weak', direction: 'Positive', color: 'yellow' },
    { value: 0.55, label: 'Moderate positive', strength: 'Moderate', direction: 'Positive', color: 'lime' },
    { value: 0.9, label: 'Strong positive', strength: 'Strong', direction: 'Positive', color: 'green' },
    { value: 1.0, label: 'Perfect positive', strength: 'Perfect', direction: 'Positive', color: 'green' }
  ]

  const keyPoints = [
    {
      step: 1,
      title: "The Range",
      content: "Correlation coefficients range from -1 to +1",
      detail: "This is a standardised scale used worldwide"
    },
    {
      step: 2,
      title: "The Sign (+ or -)",
      content: "The sign tells us the DIRECTION",
      detail: "+ means positive (both increase), - means negative (one increases, other decreases)"
    },
    {
      step: 3,
      title: "The Number",
      content: "The number tells us the STRENGTH",
      detail: "Closer to 1 (or -1) = stronger; closer to 0 = weaker"
    }
  ]

  const getColorClass = (value: number): string => {
    if (value <= -0.7) return 'bg-red-500'
    if (value <= -0.3) return 'bg-orange-500'
    if (value < 0) return 'bg-yellow-500'
    if (value === 0) return 'bg-gray-500'
    if (value < 0.3) return 'bg-yellow-500'
    if (value < 0.7) return 'bg-lime-500'
    return 'bg-green-500'
  }

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-rose-400 mb-2">Correlation Coefficients</h2>
        <p className="text-gray-400 mb-6">Click through to learn how to interpret correlation values</p>

        {/* Main Definition */}
        <div className="bg-gray-800/50 rounded-xl p-6 border border-rose-500/30 mb-6">
          <p className="text-xl text-gray-200">
            A number between <span className="text-rose-400 font-bold">-1 and +1</span> representing the <span className="text-rose-400 font-bold">direction</span> and <span className="text-rose-400 font-bold">strength</span> of the relationship.
          </p>
        </div>

        {/* Step-by-Step Reveal */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {keyPoints.map((point, index) => {
            const isRevealed = index < revealedSteps
            return (
              <button
                key={index}
                onClick={() => !isRevealed && setRevealedSteps(prev => prev + 1)}
                className={`bg-gray-800/50 rounded-xl p-4 border transition-all duration-300 ${
                  isRevealed 
                    ? 'border-cyan-500/50 bg-cyan-900/20' 
                    : 'border-gray-600 hover:border-gray-500 cursor-pointer'
                }`}
              >
                {isRevealed ? (
                  <div className="animate-fadeIn text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {point.step}
                      </span>
                      <h3 className="font-bold text-cyan-400">{point.title}</h3>
                    </div>
                    <p className="text-white font-medium mb-1">{point.content}</p>
                    <p className="text-gray-400 text-sm">{point.detail}</p>
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-gray-400 font-bold">{point.step}</span>
                    </div>
                    <p className="text-gray-500 text-sm">Click to reveal</p>
                  </div>
                )}
              </button>
            )
          })}
        </div>

        {/* Visual Scale */}
        {revealedSteps >= 3 && (
          <div className="animate-fadeIn">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 mb-4">
              <h3 className="text-lg font-bold text-purple-400 mb-4">📊 The Coefficient Scale</h3>
              
              {/* Interactive Scale */}
              <div className="relative mb-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-red-400">-1</p>
                    <p className="text-gray-400 text-xs">Perfect<br/>negative</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-400">0</p>
                    <p className="text-gray-400 text-xs">No<br/>correlation</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-400">+1</p>
                    <p className="text-gray-400 text-xs">Perfect<br/>positive</p>
                  </div>
                </div>
                <div className="h-4 bg-gradient-to-r from-red-500 via-gray-500 to-green-500 rounded-full"></div>
              </div>

              {/* Clickable Examples */}
              <p className="text-gray-300 mb-3">Click a coefficient value to see its interpretation:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {coefficientExamples.map((ex, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedValue(selectedValue === ex.value ? null : ex.value)}
                    className={`px-3 py-2 rounded-lg transition-all ${
                      selectedValue === ex.value 
                        ? `${getColorClass(ex.value)} text-white font-bold scale-110` 
                        : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                    }`}
                  >
                    {ex.value > 0 ? `+${ex.value}` : ex.value}
                  </button>
                ))}
              </div>

              {/* Selected Interpretation */}
              {selectedValue !== null && (
                <div className="mt-4 animate-fadeIn">
                  {coefficientExamples.filter(ex => ex.value === selectedValue).map(ex => (
                    <div key={ex.value} className="bg-gray-700/50 rounded-lg p-4">
                      <p className="text-lg">
                        <span className={`font-bold ${
                          ex.direction === 'Positive' ? 'text-green-400' : 
                          ex.direction === 'Negative' ? 'text-red-400' : 'text-gray-400'
                        }`}>{ex.value > 0 ? `+${ex.value}` : ex.value}</span>
                        {' = '}
                        <span className="text-white">{ex.label}</span>
                      </p>
                      <p className="text-gray-400 mt-1">
                        Strength: <span className="font-bold">{ex.strength}</span> | 
                        Direction: <span className="font-bold">{ex.direction}</span>
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Key Takeaway */}
            <button
              onClick={() => setShowInterpretation(!showInterpretation)}
              className="w-full bg-amber-900/30 rounded-xl p-4 border border-amber-500/50 hover:bg-amber-900/40 transition-all"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-amber-400">
                  <Info className="w-5 h-5 inline mr-2" />
                  Quick Interpretation Guide
                </h3>
                <span className="text-gray-400 text-sm">{showInterpretation ? '▼' : '▶'}</span>
              </div>
              {showInterpretation && (
                <div className="mt-4 text-left animate-fadeIn grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-bold text-gray-300 mb-2">Strength (ignore the sign):</p>
                    <ul className="space-y-1 text-sm">
                      <li className="text-gray-300">• <span className="text-green-400">0.7-1.0</span> = Strong</li>
                      <li className="text-gray-300">• <span className="text-yellow-400">0.4-0.69</span> = Moderate</li>
                      <li className="text-gray-300">• <span className="text-orange-400">0.1-0.39</span> = Weak</li>
                      <li className="text-gray-300">• <span className="text-gray-400">0-0.09</span> = None/negligible</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-gray-300 mb-2">Direction (check the sign):</p>
                    <ul className="space-y-1 text-sm">
                      <li className="text-gray-300">• <span className="text-green-400">+</span> = Positive (both increase)</li>
                      <li className="text-gray-300">• <span className="text-red-400">-</span> = Negative (inverse)</li>
                    </ul>
                  </div>
                </div>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
