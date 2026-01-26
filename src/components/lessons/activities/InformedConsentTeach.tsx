import { useState } from 'react'
import { FileCheck, AlertTriangle, Shield, CheckCircle, Users, Clock, ArrowRight } from 'lucide-react'

interface Props {
  isPresenting?: boolean
}

export default function InformedConsentTeach({ isPresenting }: Props) {
  const [revealedStep, setRevealedStep] = useState(0)
  const [showSolutions, setShowSolutions] = useState(false)

  const keyElements = [
    {
      icon: FileCheck,
      title: "The Aims",
      description: "What the research is trying to find out",
      color: "blue"
    },
    {
      icon: Clock,
      title: "The Procedures",
      description: "What they will actually be asked to do",
      color: "cyan"
    },
    {
      icon: Shield,
      title: "Their Rights",
      description: "Including the right to withdraw at any time",
      color: "green"
    },
    {
      icon: Users,
      title: "Data Usage",
      description: "What their data will be used for",
      color: "purple"
    }
  ]

  const solutions = [
    {
      method: "Consent Form",
      description: "Written document detailing all relevant information about the study",
      icon: "📝"
    },
    {
      method: "Parental Consent",
      description: "Required for participants under 16 years old",
      icon: "👨‍👩‍👧"
    },
    {
      method: "Presumptive Consent",
      description: "Ask a similar group of people if the study would be acceptable",
      icon: "🤔"
    },
    {
      method: "Retrospective Consent",
      description: "Ask for consent after participation (when deception was necessary)",
      icon: "🔄"
    }
  ]

  const colorMap: Record<string, string> = {
    blue: 'from-blue-500/20 to-blue-600/10 border-blue-500/50 text-blue-400',
    cyan: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/50 text-cyan-400',
    green: 'from-green-500/20 to-green-600/10 border-green-500/50 text-green-400',
    purple: 'from-purple-500/20 to-purple-600/10 border-purple-500/50 text-purple-400'
  }

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-rose-400 mb-2">Informed Consent</h2>
          <p className="text-gray-400">An essential ethical principle in psychological research</p>
        </div>

        {/* Definition Card */}
        <div className="bg-gradient-to-r from-rose-500/20 to-pink-500/10 rounded-xl p-6 border border-rose-500/30 mb-6">
          <p className="text-xl text-gray-200 text-center">
            Making participants aware of the <span className="text-rose-400 font-bold">aims</span>, <span className="text-rose-400 font-bold">procedures</span>, 
            their <span className="text-rose-400 font-bold">rights</span> (including right to withdraw), and what their <span className="text-rose-400 font-bold">data</span> will be used for.
          </p>
        </div>

        {/* Key Elements - Click to Reveal */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-amber-400">📋 Key Elements of Informed Consent</h3>
            <span className="text-sm text-gray-400">Click cards to reveal ({revealedStep}/4)</span>
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            {keyElements.map((element, idx) => {
              const Icon = element.icon
              const isRevealed = revealedStep > idx
              
              return (
                <div
                  key={idx}
                  onClick={() => !isRevealed && setRevealedStep(idx + 1)}
                  className={`relative rounded-xl p-4 border transition-all duration-500 cursor-pointer
                    ${isRevealed 
                      ? `bg-gradient-to-br ${colorMap[element.color]}` 
                      : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                    }`}
                >
                  <div className="text-center">
                    <Icon className={`w-8 h-8 mx-auto mb-2 ${isRevealed ? colorMap[element.color].split(' ').pop() : 'text-gray-500'}`} />
                    <h4 className={`font-bold ${isRevealed ? 'text-white' : 'text-gray-500'}`}>
                      {isRevealed ? element.title : `Element ${idx + 1}`}
                    </h4>
                    {isRevealed && (
                      <p className="text-sm text-gray-300 mt-2">{element.description}</p>
                    )}
                  </div>
                  {!isRevealed && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800/80 rounded-xl">
                      <span className="text-gray-400 text-sm">Click to reveal</span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Problem & Solutions */}
        <div className="grid grid-cols-2 gap-6">
          {/* The Problem */}
          <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/10 rounded-xl p-5 border border-amber-500/30">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-6 h-6 text-amber-400" />
              <h3 className="text-lg font-bold text-amber-400">⚠️ The Problem</h3>
            </div>
            <p className="text-gray-300">
              Knowing the aims may make behaviour <span className="text-amber-400 font-bold">unnatural</span>, 
              reducing the <span className="text-amber-400 font-bold">validity</span> of results.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              This creates tension between ethics and good research design.
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
                {showSolutions ? 'Hide' : 'Show'} Solutions
              </button>
            </div>
            
            {showSolutions ? (
              <div className="space-y-2">
                {solutions.map((solution, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-3 bg-gray-800/30 rounded-lg p-2 animate-fade-in"
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
              <p className="text-gray-400 text-sm italic">Click above to reveal 4 solutions...</p>
            )}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-6 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                (i < revealedStep || (i === 4 && showSolutions)) ? 'bg-rose-400' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
