import { useState } from 'react'
import { TrendingUp, TrendingDown, Minus, CheckCircle, XCircle, AlertTriangle } from 'lucide-react'

interface Props {
  isPresenting?: boolean
}

export default function CorrelationTeach({ isPresenting }: Props) {
  const [activeCorrelation, setActiveCorrelation] = useState<'positive' | 'negative' | 'zero' | null>(null)
  const [showStrengths, setShowStrengths] = useState(false)
  const [showLimitations, setShowLimitations] = useState(false)

  const correlationTypes = {
    positive: {
      title: "Positive Correlation",
      description: "As one variable increases, the other also increases",
      example: "More hours of study → Higher exam grades",
      icon: TrendingUp,
      color: "green",
      coefficient: "+0.8"
    },
    negative: {
      title: "Negative Correlation",
      description: "As one variable increases, the other decreases",
      example: "More hours of sleep deprivation → Lower reaction time scores",
      icon: TrendingDown,
      color: "red",
      coefficient: "-0.7"
    },
    zero: {
      title: "Zero/No Correlation",
      description: "No relationship between the variables",
      example: "Shoe size and intelligence",
      icon: Minus,
      color: "gray",
      coefficient: "0.0"
    }
  }

  const strengths = [
    "Can identify relationships between variables",
    "No manipulation - high ecological validity",
    "Can study variables that can't be experimentally manipulated",
    "Quick and cost-effective"
  ]

  const limitations = [
    "Cannot establish cause and effect",
    "Third variables may explain relationship",
    "Correlations can be misinterpreted"
  ]

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-rose-400 mb-2">Correlations</h2>
          <p className="text-gray-400">Measuring relationships between variables</p>
        </div>

        {/* Definition Card */}
        <div className="bg-gradient-to-r from-rose-500/20 to-pink-500/10 rounded-xl p-6 border border-rose-500/30 mb-6">
          <p className="text-xl text-gray-200 text-center">
            A correlation measures the <span className="text-rose-400 font-bold">relationship</span> between 
            two <span className="text-rose-400 font-bold">co-variables</span>. The correlation coefficient 
            ranges from <span className="text-green-400">+1</span> to <span className="text-red-400">-1</span>.
          </p>
        </div>

        {/* Correlation Types Selection */}
        <div className="flex justify-center gap-4 mb-6">
          {Object.entries(correlationTypes).map(([key, type]) => {
            const Icon = type.icon
            const isActive = activeCorrelation === key
            return (
              <button
                key={key}
                onClick={() => setActiveCorrelation(key as 'positive' | 'negative' | 'zero')}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300
                  ${isActive 
                    ? `bg-gradient-to-r from-${type.color}-500/30 to-${type.color}-600/20 border border-${type.color}-500/50 text-${type.color}-400` 
                    : 'bg-gray-800/50 border border-gray-700 text-gray-400 hover:border-gray-600'
                  }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-bold text-sm">{type.title.split(' ')[0]}</span>
              </button>
            )
          })}
        </div>

        {/* Active Correlation Detail */}
        {activeCorrelation && (
          <div className={`rounded-xl p-6 border mb-6 animate-fade-in
            ${activeCorrelation === 'positive' 
              ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/10 border-green-500/30' 
              : activeCorrelation === 'negative'
                ? 'bg-gradient-to-br from-red-500/20 to-rose-500/10 border-red-500/30'
                : 'bg-gradient-to-br from-gray-500/20 to-slate-500/10 border-gray-500/30'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {(() => {
                  const Icon = correlationTypes[activeCorrelation].icon
                  return <Icon className={`w-12 h-12 ${
                    activeCorrelation === 'positive' ? 'text-green-400' 
                    : activeCorrelation === 'negative' ? 'text-red-400' 
                    : 'text-gray-400'
                  }`} />
                })()}
                <div>
                  <h3 className={`text-xl font-bold ${
                    activeCorrelation === 'positive' ? 'text-green-400' 
                    : activeCorrelation === 'negative' ? 'text-red-400' 
                    : 'text-gray-400'
                  }`}>
                    {correlationTypes[activeCorrelation].title}
                  </h3>
                  <p className="text-gray-300">{correlationTypes[activeCorrelation].description}</p>
                </div>
              </div>
              <div className={`text-3xl font-bold px-4 py-2 rounded-xl ${
                activeCorrelation === 'positive' ? 'bg-green-500/20 text-green-400' 
                : activeCorrelation === 'negative' ? 'bg-red-500/20 text-red-400' 
                : 'bg-gray-500/20 text-gray-400'
              }`}>
                {correlationTypes[activeCorrelation].coefficient}
              </div>
            </div>
            <div className="mt-4 bg-gray-800/50 rounded-lg p-3">
              <p className="text-sm text-gray-400">
                <span className="font-bold text-white">Example:</span> {correlationTypes[activeCorrelation].example}
              </p>
            </div>
          </div>
        )}

        {/* Strengths and Limitations */}
        <div className="grid grid-cols-2 gap-4">
          {/* Strengths */}
          <div 
            onClick={() => setShowStrengths(!showStrengths)}
            className={`rounded-xl p-5 border transition-all duration-300 cursor-pointer
              ${showStrengths 
                ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/10 border-green-500/30' 
                : 'bg-gray-800/50 border-gray-700 hover:border-green-500/30'
              }`}
          >
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-400">✓ Strengths</h3>
            </div>
            {showStrengths ? (
              <ul className="space-y-2 animate-fade-in">
                {strengths.map((s, i) => (
                  <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                    <span className="text-green-400">•</span> {s}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-sm">Click to reveal strengths...</p>
            )}
          </div>

          {/* Limitations */}
          <div 
            onClick={() => setShowLimitations(!showLimitations)}
            className={`rounded-xl p-5 border transition-all duration-300 cursor-pointer
              ${showLimitations 
                ? 'bg-gradient-to-br from-red-500/20 to-rose-500/10 border-red-500/30' 
                : 'bg-gray-800/50 border-gray-700 hover:border-red-500/30'
              }`}
          >
            <div className="flex items-center gap-2 mb-3">
              <XCircle className="w-5 h-5 text-red-400" />
              <h3 className="text-lg font-bold text-red-400">✗ Limitations</h3>
            </div>
            {showLimitations ? (
              <ul className="space-y-2 animate-fade-in">
                {limitations.map((l, i) => (
                  <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                    <span className="text-red-400">•</span> {l}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-sm">Click to reveal limitations...</p>
            )}
          </div>
        </div>

        {/* Key Warning */}
        <div className="mt-4 bg-amber-500/10 rounded-xl p-4 border border-amber-500/30">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            <p className="text-gray-300 text-sm">
              <span className="text-amber-400 font-bold">IMPORTANT:</span> Correlation does NOT equal causation! 
              Just because two variables are related doesn't mean one causes the other.
            </p>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-4 flex justify-center gap-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                (i < 2 && activeCorrelation) || (i === 2 && showStrengths) || (i === 3 && showLimitations)
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
