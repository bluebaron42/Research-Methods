import { useState } from 'react'
import { Users, CheckCircle2, Target, ArrowRight, BarChart3 } from 'lucide-react'

interface Props {
  isPresenting?: boolean
}

export default function InterObserverReliabilityTeach({ isPresenting }: Props) {
  const [revealedStep, setRevealedStep] = useState(0)
  const [showCorrelation, setShowCorrelation] = useState(false)

  const steps = [
    {
      step: 1,
      title: "Familiarisation",
      description: "Observers familiarise themselves with behavioural categories",
      detail: "Both observers study the coding scheme and discuss what each category means",
      icon: "📖"
    },
    {
      step: 2,
      title: "Pilot Observation",
      description: "Observe the same behaviour at the same time",
      detail: "Conduct a practice observation together to test the system",
      icon: "👀"
    },
    {
      step: 3,
      title: "Compare & Discuss",
      description: "Compare recorded data and discuss any differences",
      detail: "Identify where disagreements occurred and refine categories if needed",
      icon: "🔄"
    },
    {
      step: 4,
      title: "Calculate Correlation",
      description: "Calculate correlation between observations",
      detail: "Use statistical analysis to quantify agreement level",
      icon: "📊"
    }
  ]

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-rose-400 mb-2">Inter-Observer Reliability</h2>
          <p className="text-gray-400">Ensuring consistency between observers</p>
        </div>

        {/* Definition Card */}
        <div className="bg-gradient-to-r from-rose-500/20 to-pink-500/10 rounded-xl p-6 border border-rose-500/30 mb-6">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center border-2 border-gray-800">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center border-2 border-gray-800">
                <Users className="w-5 h-5 text-white" />
              </div>
            </div>
            <p className="text-xl text-gray-200">
              Ensuring two or more observers record <span className="text-rose-400 font-bold">consistent</span> data 
              when observing the <span className="text-rose-400 font-bold">same behaviour</span>.
            </p>
          </div>
        </div>

        {/* Steps Process */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-amber-400">📋 How to Establish Inter-Observer Reliability</h3>
            <span className="text-sm text-gray-400">Click each step ({revealedStep}/4)</span>
          </div>

          <div className="space-y-3">
            {steps.map((item, idx) => {
              const isRevealed = revealedStep > idx
              const isCurrent = revealedStep === idx
              
              return (
                <div
                  key={idx}
                  onClick={() => !isRevealed && setRevealedStep(idx + 1)}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 cursor-pointer
                    ${isRevealed 
                      ? 'bg-gradient-to-r from-green-500/10 to-emerald-500/5 border-green-500/30' 
                      : isCurrent
                        ? 'bg-gray-800/70 border-amber-500/50 hover:border-amber-500'
                        : 'bg-gray-800/30 border-gray-700 hover:border-gray-600'
                    }`}
                >
                  {/* Step Number */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0
                    ${isRevealed 
                      ? 'bg-green-500/20 text-green-400' 
                      : isCurrent 
                        ? 'bg-amber-500/20 text-amber-400'
                        : 'bg-gray-700 text-gray-500'
                    }`}
                  >
                    {isRevealed ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : (
                      <span className="text-xl">{item.icon}</span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-bold ${isRevealed ? 'text-green-400' : isCurrent ? 'text-amber-400' : 'text-gray-500'}`}>
                        Step {item.step}
                      </span>
                      {isRevealed && (
                        <span className="text-white font-bold">{item.title}</span>
                      )}
                    </div>
                    {isRevealed ? (
                      <div className="mt-1 animate-fade-in">
                        <p className="text-gray-300 text-sm">{item.description}</p>
                        <p className="text-gray-500 text-xs mt-1">{item.detail}</p>
                      </div>
                    ) : (
                      <p className="text-gray-500 text-sm">{isCurrent ? 'Click to reveal this step' : 'Complete previous steps first'}</p>
                    )}
                  </div>

                  {/* Arrow */}
                  {idx < steps.length - 1 && (
                    <ArrowRight className={`w-5 h-5 ${isRevealed ? 'text-green-400' : 'text-gray-600'}`} />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Correlation Target */}
        {revealedStep >= 4 && (
          <div 
            onClick={() => setShowCorrelation(!showCorrelation)}
            className={`rounded-xl p-5 border transition-all duration-300 cursor-pointer animate-fade-in
              ${showCorrelation 
                ? 'bg-gradient-to-br from-purple-500/20 to-indigo-500/10 border-purple-500/50' 
                : 'bg-gray-800/50 border-gray-700 hover:border-purple-500/30'
              }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Target className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-purple-400">🎯 Target Correlation</h3>
                {showCorrelation ? (
                  <div className="animate-fade-in">
                    <p className="text-gray-200 mt-1">
                      Aim for a correlation of <span className="text-purple-400 font-bold text-2xl">≥ +0.80</span>
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                      This indicates high agreement between observers. If lower, refine categories and re-test.
                    </p>
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm">Click to reveal the target correlation...</p>
                )}
              </div>
            </div>

            {showCorrelation && (
              <div className="mt-4 animate-fade-in">
                {/* Visual Scale */}
                <div className="relative h-6 bg-gradient-to-r from-red-500 via-amber-500 to-green-500 rounded-full overflow-hidden">
                  <div className="absolute top-0 bottom-0 left-0 flex items-center justify-between w-full px-2 text-xs text-white font-bold">
                    <span>0</span>
                    <span>0.5</span>
                    <span>0.8</span>
                    <span>1.0</span>
                  </div>
                  {/* Target Marker */}
                  <div className="absolute top-0 bottom-0 left-[80%] w-1 bg-white"></div>
                </div>
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <span>Low agreement</span>
                  <span className="text-green-400 font-bold">Target: +0.80 or higher</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Key Points */}
        <div className="mt-6 bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="flex items-center gap-3">
            <BarChart3 className="w-5 h-5 text-cyan-400" />
            <p className="text-gray-300 text-sm">
              <span className="text-cyan-400 font-bold">Why it matters:</span> High inter-observer reliability ensures 
              the data is objective and not dependent on which researcher collected it.
            </p>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-6 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                (i < 4 && revealedStep > i) || (i === 4 && showCorrelation)
                  ? 'bg-rose-400' 
                  : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
