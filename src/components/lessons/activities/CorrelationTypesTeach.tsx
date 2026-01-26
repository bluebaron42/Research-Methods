import { useState } from 'react'
import { TrendingUp, TrendingDown, Minus, Target } from 'lucide-react'

interface CorrelationTypesTeachProps {
  isPresenting?: boolean
}

export default function CorrelationTypesTeach({ isPresenting }: CorrelationTypesTeachProps) {
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [showStrength, setShowStrength] = useState(false)

  const correlationTypes = [
    {
      type: 'positive',
      title: 'Positive Correlation',
      icon: <TrendingUp className="w-8 h-8" />,
      description: 'As one co-variable increases, the other INCREASES',
      pattern: 'Both variables move in the SAME direction',
      examples: [
        { text: 'More people in room → More noise', emoji: '👥🔊' },
        { text: 'Height → Weight', emoji: '📏⚖️' },
        { text: 'Hours of revision → Exam grades', emoji: '📚✨' }
      ],
      scatterPattern: [
        { x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 2.5 }, { x: 4, y: 4 }, { x: 5, y: 4.5 },
        { x: 1.5, y: 1.5 }, { x: 2.5, y: 3 }, { x: 3.5, y: 3.5 }, { x: 4.5, y: 5 }
      ],
      color: 'green',
      bgColor: 'bg-green-900/30',
      borderColor: 'border-green-500/50',
      textColor: 'text-green-400'
    },
    {
      type: 'negative',
      title: 'Negative Correlation',
      icon: <TrendingDown className="w-8 h-8" />,
      description: 'As one co-variable increases, the other DECREASES',
      pattern: 'Variables move in OPPOSITE directions',
      examples: [
        { text: 'More people → Less personal space', emoji: '👥📐' },
        { text: 'Age → Reaction speed', emoji: '🎂⚡' },
        { text: 'Screen time → Sleep quality', emoji: '📱😴' }
      ],
      scatterPattern: [
        { x: 1, y: 5 }, { x: 2, y: 4 }, { x: 3, y: 3 }, { x: 4, y: 2 }, { x: 5, y: 1 },
        { x: 1.5, y: 4.5 }, { x: 2.5, y: 3.5 }, { x: 3.5, y: 2.5 }, { x: 4.5, y: 1.5 }
      ],
      color: 'red',
      bgColor: 'bg-red-900/30',
      borderColor: 'border-red-500/50',
      textColor: 'text-red-400'
    },
    {
      type: 'zero',
      title: 'Zero Correlation',
      icon: <Minus className="w-8 h-8" />,
      description: 'NO relationship between the co-variables',
      pattern: 'Changes in one variable do NOT predict changes in the other',
      examples: [
        { text: 'Shoe size → Intelligence', emoji: '👟🧠' },
        { text: 'People in Manchester → Rainfall in Peru', emoji: '🏙️🌧️' },
        { text: 'Eye colour → Maths ability', emoji: '👁️➗' }
      ],
      scatterPattern: [
        { x: 1, y: 3 }, { x: 2, y: 1 }, { x: 3, y: 4 }, { x: 4, y: 2 }, { x: 5, y: 3 },
        { x: 1.5, y: 2 }, { x: 2.5, y: 5 }, { x: 3.5, y: 1 }, { x: 4.5, y: 4 }
      ],
      color: 'gray',
      bgColor: 'bg-gray-700/30',
      borderColor: 'border-gray-500/50',
      textColor: 'text-gray-400'
    }
  ]

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-rose-400 mb-2">Types of Correlation</h2>
        <p className="text-gray-400 mb-6">Click each type to explore its characteristics</p>

        {/* Type Selector Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {correlationTypes.map((corr) => (
            <button
              key={corr.type}
              onClick={() => setSelectedType(selectedType === corr.type ? null : corr.type)}
              className={`${corr.bgColor} rounded-xl p-5 border-2 ${
                selectedType === corr.type ? `${corr.borderColor} ring-2 ring-offset-2 ring-offset-gray-900 ${corr.borderColor.replace('border-', 'ring-')}` : corr.borderColor
              } text-left transition-all duration-300 hover:scale-[1.02]`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={corr.textColor}>{corr.icon}</div>
                <h3 className={`text-lg font-bold ${corr.textColor}`}>{corr.title.replace(' Correlation', '')}</h3>
              </div>
              <p className="text-gray-300 text-sm">{corr.description}</p>
            </button>
          ))}
        </div>

        {/* Detailed View */}
        {selectedType && (
          <div className="animate-fadeIn">
            {correlationTypes.filter(c => c.type === selectedType).map(corr => (
              <div key={corr.type} className={`${corr.bgColor} rounded-xl p-6 border ${corr.borderColor}`}>
                <div className="grid grid-cols-2 gap-6">
                  {/* Left: Details */}
                  <div>
                    <h3 className={`text-xl font-bold ${corr.textColor} mb-4`}>
                      {corr.icon} {corr.title}
                    </h3>
                    <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
                      <p className="text-white font-medium mb-2">{corr.pattern}</p>
                      <p className="text-gray-400 text-sm">{corr.description}</p>
                    </div>
                    <h4 className="font-bold text-gray-300 mb-2">📌 Examples:</h4>
                    <ul className="space-y-2">
                      {corr.examples.map((ex, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                          <span className="text-lg">{ex.emoji}</span>
                          <span>{ex.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: Visual Scattergram */}
                  <div className="bg-gray-800/80 rounded-lg p-4">
                    <h4 className="text-center text-gray-400 text-sm mb-3">Scattergram Pattern</h4>
                    <div className="relative w-full h-48 border-l-2 border-b-2 border-gray-600">
                      {/* Y-axis label */}
                      <span className="absolute -left-6 top-1/2 -translate-y-1/2 -rotate-90 text-xs text-gray-500">Co-var 2</span>
                      {/* X-axis label */}
                      <span className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-xs text-gray-500">Co-variable 1</span>
                      {/* Points */}
                      {corr.scatterPattern.map((point, i) => (
                        <div
                          key={i}
                          className={`absolute w-3 h-3 rounded-full ${
                            corr.type === 'positive' ? 'bg-green-500' :
                            corr.type === 'negative' ? 'bg-red-500' : 'bg-gray-500'
                          }`}
                          style={{
                            left: `${(point.x / 5.5) * 100}%`,
                            bottom: `${(point.y / 5.5) * 100}%`,
                            animation: `fadeIn 0.3s ease-out ${i * 0.1}s both`
                          }}
                        />
                      ))}
                      {/* Trend line */}
                      {corr.type !== 'zero' && (
                        <div
                          className={`absolute h-0.5 ${
                            corr.type === 'positive' ? 'bg-green-400/60' : 'bg-red-400/60'
                          }`}
                          style={{
                            width: '80%',
                            left: '10%',
                            bottom: corr.type === 'positive' ? '15%' : '75%',
                            transform: corr.type === 'positive' ? 'rotate(-35deg)' : 'rotate(35deg)',
                            transformOrigin: 'left center'
                          }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Strength Preview */}
        {selectedType && (
          <button
            onClick={() => setShowStrength(!showStrength)}
            className="mt-4 w-full bg-gray-800/50 rounded-xl p-4 border border-purple-500/30 hover:bg-gray-700/50 transition-all"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-purple-400">
                <Target className="w-5 h-5 inline mr-2" />
                How Strong Is the Relationship?
              </h3>
              <span className="text-gray-400 text-sm">{showStrength ? '▼' : '▶'}</span>
            </div>
            {showStrength && (
              <div className="mt-4 text-left animate-fadeIn">
                <p className="text-gray-300 mb-3">The <span className="text-purple-400 font-bold">closer</span> the points are to a line, the <span className="text-purple-400 font-bold">stronger</span> the correlation:</p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                    <p className="text-green-400 font-bold">Strong</p>
                    <p className="text-gray-400 text-xs">Points close to line</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                    <p className="text-yellow-400 font-bold">Moderate</p>
                    <p className="text-gray-400 text-xs">Some scatter</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                    <p className="text-red-400 font-bold">Weak</p>
                    <p className="text-gray-400 text-xs">Wide scatter</p>
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
