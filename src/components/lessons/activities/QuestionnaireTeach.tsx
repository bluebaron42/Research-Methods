import { useState } from 'react'
import { FileText, CheckCircle, XCircle, Send, Users } from 'lucide-react'

interface Props {
  isPresenting?: boolean
}

export default function QuestionnaireTeach({ isPresenting }: Props) {
  const [revealedStrengths, setRevealedStrengths] = useState(0)
  const [revealedLimitations, setRevealedLimitations] = useState(0)
  const [showBiases, setShowBiases] = useState(false)

  const strengths = [
    {
      title: "Cost-effective",
      description: "Gather large amounts of data quickly and cheaply",
      icon: "💰"
    },
    {
      title: "Easy to analyse",
      description: "Especially closed questions - can be statistically analysed",
      icon: "📊"
    },
    {
      title: "Replicable",
      description: "Standardised questions can be repeated for reliability",
      icon: "🔄"
    },
    {
      title: "Anonymous",
      description: "May encourage honest answers on sensitive topics",
      icon: "🔒"
    }
  ]

  const limitations = [
    {
      title: "Response bias",
      description: "Social desirability and acquiescence bias can distort answers",
      icon: "⚠️"
    },
    {
      title: "Misunderstanding",
      description: "Questions may be interpreted differently by different people",
      icon: "❓"
    },
    {
      title: "Low response rate",
      description: "Many people don't complete or return questionnaires",
      icon: "📉"
    },
    {
      title: "Lacks depth",
      description: "Cannot explore unexpected or complex responses",
      icon: "🔍"
    }
  ]

  const biases = [
    {
      name: "Social Desirability",
      description: "Answering in a way that makes you look good rather than truthfully",
      example: "Underreporting alcohol consumption"
    },
    {
      name: "Acquiescence Bias",
      description: "Tendency to agree with statements regardless of content",
      example: "Repeatedly selecting 'agree' or 'yes'"
    }
  ]

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-rose-400 mb-2">Questionnaires</h2>
          <p className="text-gray-400">A self-report method for gathering data</p>
        </div>

        {/* Definition Card */}
        <div className="bg-gradient-to-r from-rose-500/20 to-pink-500/10 rounded-xl p-6 border border-rose-500/30 mb-6">
          <div className="flex items-center gap-4">
            <FileText className="w-10 h-10 text-rose-400" />
            <div>
              <p className="text-xl text-gray-200">
                A <span className="text-rose-400 font-bold">pre-set list of written questions</span> to which 
                participants respond. Used to assess thoughts and/or feelings.
              </p>
            </div>
          </div>
        </div>

        {/* Strengths and Limitations */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Strengths */}
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-xl p-5 border border-green-500/30">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <h3 className="text-lg font-bold text-green-400">✓ Strengths</h3>
              </div>
              <span className="text-sm text-gray-400">{revealedStrengths}/4</span>
            </div>
            
            <div className="space-y-2">
              {strengths.map((item, idx) => {
                const isRevealed = revealedStrengths > idx
                return (
                  <div
                    key={idx}
                    onClick={() => !isRevealed && setRevealedStrengths(idx + 1)}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 cursor-pointer
                      ${isRevealed 
                        ? 'bg-green-500/10' 
                        : 'bg-gray-800/50 hover:bg-gray-800'
                      }`}
                  >
                    <span className={`text-xl ${!isRevealed && 'opacity-30'}`}>{item.icon}</span>
                    <div>
                      <p className={`font-bold text-sm ${isRevealed ? 'text-green-400' : 'text-gray-500'}`}>
                        {isRevealed ? item.title : 'Click to reveal'}
                      </p>
                      {isRevealed && (
                        <p className="text-xs text-gray-400 mt-1">{item.description}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Limitations */}
          <div className="bg-gradient-to-br from-red-500/20 to-rose-500/10 rounded-xl p-5 border border-red-500/30">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <XCircle className="w-6 h-6 text-red-400" />
                <h3 className="text-lg font-bold text-red-400">✗ Limitations</h3>
              </div>
              <span className="text-sm text-gray-400">{revealedLimitations}/4</span>
            </div>
            
            <div className="space-y-2">
              {limitations.map((item, idx) => {
                const isRevealed = revealedLimitations > idx
                return (
                  <div
                    key={idx}
                    onClick={() => !isRevealed && setRevealedLimitations(idx + 1)}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 cursor-pointer
                      ${isRevealed 
                        ? 'bg-red-500/10' 
                        : 'bg-gray-800/50 hover:bg-gray-800'
                      }`}
                  >
                    <span className={`text-xl ${!isRevealed && 'opacity-30'}`}>{item.icon}</span>
                    <div>
                      <p className={`font-bold text-sm ${isRevealed ? 'text-red-400' : 'text-gray-500'}`}>
                        {isRevealed ? item.title : 'Click to reveal'}
                      </p>
                      {isRevealed && (
                        <p className="text-xs text-gray-400 mt-1">{item.description}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Response Biases */}
        <div 
          onClick={() => setShowBiases(!showBiases)}
          className={`rounded-xl p-5 border transition-all duration-300 cursor-pointer
            ${showBiases 
              ? 'bg-gradient-to-br from-amber-500/20 to-orange-500/10 border-amber-500/30' 
              : 'bg-gray-800/50 border-gray-700 hover:border-amber-500/30'
            }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <Users className="w-6 h-6 text-amber-400" />
            <h3 className="text-lg font-bold text-amber-400">⚠️ Key Response Biases</h3>
          </div>
          
          {showBiases ? (
            <div className="grid grid-cols-2 gap-4 animate-fade-in">
              {biases.map((bias, idx) => (
                <div key={idx} className="bg-gray-800/50 rounded-lg p-3">
                  <p className="font-bold text-amber-400 text-sm">{bias.name}</p>
                  <p className="text-gray-300 text-xs mt-1">{bias.description}</p>
                  <p className="text-gray-500 text-xs mt-2 italic">e.g., {bias.example}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">Click to learn about response biases...</p>
          )}
        </div>

        {/* Progress Indicator */}
        <div className="mt-6 flex justify-center gap-2">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                (i < 4 && revealedStrengths > i) || 
                (i >= 4 && i < 8 && revealedLimitations > (i - 4)) ||
                (i === 8 && showBiases)
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
