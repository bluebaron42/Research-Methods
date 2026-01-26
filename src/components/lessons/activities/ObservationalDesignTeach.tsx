import { useState } from 'react'
import { ClipboardList, Clock, Hash, CheckCircle, AlertCircle } from 'lucide-react'

interface Props {
  isPresenting?: boolean
}

export default function ObservationalDesignTeach({ isPresenting }: Props) {
  const [revealedCategories, setRevealedCategories] = useState(0)
  const [activeMethod, setActiveMethod] = useState<'event' | 'time' | null>(null)

  const categoryRules = [
    {
      rule: "Operationalised",
      description: "Precisely defined so behaviours can be identified",
      example: "'Aggression' → hitting, kicking, pushing, verbal threats",
      icon: "📝"
    },
    {
      rule: "Non-overlapping",
      description: "Categories must be distinct - a behaviour can only fit one",
      example: "Don't have 'hitting' and 'physical contact' as separate categories",
      icon: "🔀"
    },
    {
      rule: "Exhaustive",
      description: "Must cover all possible behaviours that might occur",
      example: "Include an 'other' category for unexpected behaviours",
      icon: "📋"
    }
  ]

  const affectionExample = [
    "Hugging",
    "Kissing",
    "Smiling at partner",
    "Holding hands",
    "Sitting close together",
    "Eye contact"
  ]

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-rose-400 mb-2">Observational Design</h2>
          <p className="text-gray-400">How to structure and record observations systematically</p>
        </div>

        {/* Behavioural Categories Section */}
        <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/10 rounded-xl p-6 border border-amber-500/30 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <ClipboardList className="w-8 h-8 text-amber-400" />
            <div>
              <h3 className="text-xl font-bold text-amber-400">Behavioural Categories</h3>
              <p className="text-sm text-gray-400">Breaking target behaviour into a systematic checklist</p>
            </div>
          </div>

          {/* Rules Grid */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            {categoryRules.map((rule, idx) => {
              const isRevealed = revealedCategories > idx
              return (
                <div
                  key={idx}
                  onClick={() => !isRevealed && setRevealedCategories(idx + 1)}
                  className={`rounded-xl p-4 border transition-all duration-300 cursor-pointer
                    ${isRevealed 
                      ? 'bg-gray-800/50 border-amber-500/30' 
                      : 'bg-gray-800/30 border-gray-700 hover:border-amber-500/30'
                    }`}
                >
                  <div className="text-center">
                    <span className={`text-2xl ${!isRevealed && 'opacity-30'}`}>{rule.icon}</span>
                    <h4 className={`font-bold mt-2 ${isRevealed ? 'text-amber-400' : 'text-gray-500'}`}>
                      {isRevealed ? rule.rule : `Rule ${idx + 1}`}
                    </h4>
                    {isRevealed ? (
                      <div className="mt-2 animate-fade-in">
                        <p className="text-sm text-gray-300">{rule.description}</p>
                        <p className="text-xs text-amber-400 mt-2 italic">e.g., {rule.example}</p>
                      </div>
                    ) : (
                      <p className="text-xs text-gray-500 mt-2">Click to reveal</p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Example Box */}
          {revealedCategories >= 3 && (
            <div className="bg-gray-800/50 rounded-lg p-4 animate-fade-in">
              <p className="text-sm text-gray-400 mb-2">
                <span className="text-amber-400 font-bold">Example:</span> Operationalising "affection" into behavioural categories:
              </p>
              <div className="flex flex-wrap gap-2">
                {affectionExample.map((behaviour, idx) => (
                  <span key={idx} className="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-sm">
                    {behaviour}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sampling Methods */}
        <div className="grid grid-cols-2 gap-6">
          {/* Event Sampling */}
          <div 
            onClick={() => setActiveMethod(activeMethod === 'event' ? null : 'event')}
            className={`rounded-xl p-5 border transition-all duration-300 cursor-pointer
              ${activeMethod === 'event' 
                ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border-blue-500/50' 
                : 'bg-gray-800/50 border-gray-700 hover:border-blue-500/30'
              }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center
                ${activeMethod === 'event' ? 'bg-blue-500/20' : 'bg-gray-700'}`}
              >
                <Hash className={`w-5 h-5 ${activeMethod === 'event' ? 'text-blue-400' : 'text-gray-500'}`} />
              </div>
              <h3 className={`text-lg font-bold ${activeMethod === 'event' ? 'text-blue-400' : 'text-gray-400'}`}>
                📊 Event Sampling
              </h3>
            </div>

            {activeMethod === 'event' ? (
              <div className="space-y-3 animate-fade-in">
                <p className="text-gray-200">
                  Record <span className="text-blue-400 font-bold">every time</span> a target behaviour occurs.
                </p>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Good for <span className="text-blue-400">infrequent behaviours</span></p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Captures all instances of the behaviour</p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Can be overwhelming if behaviour is frequent</p>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-2 mt-2">
                  <p className="text-xs text-gray-400">
                    <span className="text-blue-400 font-bold">Example:</span> Tally each time a child shows aggressive behaviour
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-sm">Click to learn about event sampling...</p>
            )}
          </div>

          {/* Time Sampling */}
          <div 
            onClick={() => setActiveMethod(activeMethod === 'time' ? null : 'time')}
            className={`rounded-xl p-5 border transition-all duration-300 cursor-pointer
              ${activeMethod === 'time' 
                ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/10 border-green-500/50' 
                : 'bg-gray-800/50 border-gray-700 hover:border-green-500/30'
              }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center
                ${activeMethod === 'time' ? 'bg-green-500/20' : 'bg-gray-700'}`}
              >
                <Clock className={`w-5 h-5 ${activeMethod === 'time' ? 'text-green-400' : 'text-gray-500'}`} />
              </div>
              <h3 className={`text-lg font-bold ${activeMethod === 'time' ? 'text-green-400' : 'text-gray-400'}`}>
                ⏱️ Time Sampling
              </h3>
            </div>

            {activeMethod === 'time' ? (
              <div className="space-y-3 animate-fade-in">
                <p className="text-gray-200">
                  Record behaviour at <span className="text-green-400 font-bold">fixed intervals</span> (e.g., every 30 seconds).
                </p>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Reduces number of observations needed</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">More manageable for <span className="text-green-400">frequent behaviours</span></p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">May miss behaviours between intervals</p>
                </div>
                <div className="bg-green-500/10 rounded-lg p-2 mt-2">
                  <p className="text-xs text-gray-400">
                    <span className="text-green-400 font-bold">Example:</span> Every 30 seconds, note what activity the child is doing
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-sm">Click to learn about time sampling...</p>
            )}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-6 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                (i < 3 && revealedCategories > i) || 
                (i === 3 && activeMethod === 'event') || 
                (i === 4 && activeMethod === 'time')
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
