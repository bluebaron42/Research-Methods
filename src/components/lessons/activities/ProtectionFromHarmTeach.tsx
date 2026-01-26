import { useState } from 'react'
import { Shield, AlertTriangle, CheckCircle, Heart, Brain, ArrowRight } from 'lucide-react'

interface Props {
  isPresenting?: boolean
}

export default function ProtectionFromHarmTeach({ isPresenting }: Props) {
  const [revealedHarms, setRevealedHarms] = useState(0)
  const [showSolutions, setShowSolutions] = useState(false)

  const harmTypes = [
    {
      type: "Embarrassment",
      description: "Feeling uncomfortable or ashamed during the study",
      icon: "😳",
      color: "red"
    },
    {
      type: "Feeling Inadequate",
      description: "Tasks designed to make participants feel they've failed",
      icon: "😔",
      color: "orange"
    },
    {
      type: "Undue Stress",
      description: "Psychological pressure beyond normal daily levels",
      icon: "😰",
      color: "amber"
    },
    {
      type: "Physical Discomfort",
      description: "Any physical pain or discomfort",
      icon: "🤕",
      color: "rose"
    }
  ]

  const solutions = [
    {
      method: "Right to Withdraw",
      description: "Constantly remind participants they can leave at any point",
      icon: "🚪"
    },
    {
      method: "Reassurance",
      description: "Tell participants their behaviour/performance was normal",
      icon: "🤝"
    },
    {
      method: "Counselling",
      description: "Provide professional support if participants are distressed",
      icon: "💬"
    },
    {
      method: "Risk Assessment",
      description: "Evaluate potential harm before the study begins",
      icon: "📋"
    }
  ]

  const colorMap: Record<string, string> = {
    red: 'from-red-500/20 to-red-600/10 border-red-500/50',
    orange: 'from-orange-500/20 to-orange-600/10 border-orange-500/50',
    amber: 'from-amber-500/20 to-amber-600/10 border-amber-500/50',
    rose: 'from-rose-500/20 to-rose-600/10 border-rose-500/50'
  }

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-rose-400 mb-2">Protection from Harm</h2>
          <p className="text-gray-400">Keeping participants safe - physically and psychologically</p>
        </div>

        {/* Definition Card */}
        <div className="bg-gradient-to-r from-rose-500/20 to-pink-500/10 rounded-xl p-6 border border-rose-500/30 mb-6">
          <div className="flex items-center gap-4">
            <Shield className="w-10 h-10 text-rose-400" />
            <div>
              <p className="text-xl text-gray-200">
                Participants should not be placed at any <span className="text-rose-400 font-bold">more risk than in daily life</span> - 
                protected from <span className="text-rose-400 font-bold">physical AND psychological</span> harm.
              </p>
            </div>
          </div>
        </div>

        {/* Types of Harm */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-red-400 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Types of Harm to Avoid
            </h3>
            <span className="text-sm text-gray-400">Click to reveal ({revealedHarms}/4)</span>
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            {harmTypes.map((harm, idx) => {
              const isRevealed = revealedHarms > idx
              
              return (
                <div
                  key={idx}
                  onClick={() => !isRevealed && setRevealedHarms(idx + 1)}
                  className={`relative rounded-xl p-4 border transition-all duration-500 cursor-pointer
                    ${isRevealed 
                      ? `bg-gradient-to-br ${colorMap[harm.color]}` 
                      : 'bg-gray-800/50 border-gray-700 hover:border-red-500/30'
                    }`}
                >
                  <div className="text-center">
                    <span className={`text-3xl ${!isRevealed && 'opacity-30'}`}>{harm.icon}</span>
                    <h4 className={`font-bold text-sm mt-2 ${isRevealed ? 'text-white' : 'text-gray-500'}`}>
                      {isRevealed ? harm.type : '???'}
                    </h4>
                    {isRevealed && (
                      <p className="text-xs text-gray-300 mt-2">{harm.description}</p>
                    )}
                  </div>
                  {!isRevealed && (
                    <div className="absolute bottom-2 left-0 right-0 text-center">
                      <span className="text-gray-500 text-xs">Click to reveal</span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-2 gap-6">
          {/* Risk Scale Visual */}
          <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
            <h3 className="text-lg font-bold text-amber-400 mb-4">⚖️ The Risk Scale</h3>
            <div className="relative h-8 bg-gradient-to-r from-green-500 via-amber-500 to-red-500 rounded-full overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <span className="text-xs font-bold text-white bg-green-600/80 px-2 py-0.5 rounded">Daily Life</span>
                <span className="text-xs font-bold text-white bg-red-600/80 px-2 py-0.5 rounded">Harm</span>
              </div>
            </div>
            <div className="flex justify-center mt-3">
              <div className="bg-gray-700/50 rounded-full px-4 py-1">
                <span className="text-amber-400 font-bold text-sm">← Research should stay here →</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm text-center mt-3">
              Participants should face no more risk than they would in everyday life
            </p>
          </div>

          {/* Solutions */}
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-xl p-5 border border-green-500/30">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <h3 className="text-lg font-bold text-green-400">✓ Ways to Deal With It</h3>
              </div>
              <button
                onClick={() => setShowSolutions(!showSolutions)}
                className="text-xs bg-green-500/20 hover:bg-green-500/30 text-green-400 px-3 py-1 rounded-full transition-colors"
              >
                {showSolutions ? 'Hide' : 'Reveal'}
              </button>
            </div>
            
            {showSolutions ? (
              <div className="space-y-2 animate-fade-in">
                {solutions.map((solution, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-3 bg-gray-800/30 rounded-lg p-2"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <span className="text-xl">{solution.icon}</span>
                    <div>
                      <p className="font-bold text-white text-sm">{solution.method}</p>
                      <p className="text-gray-400 text-xs">{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-sm italic">Click above to reveal 4 protective measures...</p>
            )}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-6 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                (i < revealedHarms || (i === 4 && showSolutions)) ? 'bg-rose-400' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
