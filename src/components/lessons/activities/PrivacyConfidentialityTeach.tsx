import { useState } from 'react'
import { Lock, Eye, Shield, CheckCircle, UserX, FileText } from 'lucide-react'

interface Props {
  isPresenting?: boolean
}

export default function PrivacyConfidentialityTeach({ isPresenting }: Props) {
  const [showPrivacyDetails, setShowPrivacyDetails] = useState(false)
  const [showConfidentialityDetails, setShowConfidentialityDetails] = useState(false)
  const [revealedSolutions, setRevealedSolutions] = useState(0)

  const solutions = [
    {
      method: "Maintain Anonymity",
      description: "Record no personal details that could identify participants",
      icon: UserX,
      example: "Don't record names, addresses, or identifying information"
    },
    {
      method: "Use Numbers or Initials",
      description: "Replace names with codes in all records and reports",
      icon: FileText,
      example: "Participant 1, Participant 2... or P1, P2..."
    },
    {
      method: "Use False Names",
      description: "In case studies, use pseudonyms to protect identity",
      icon: Shield,
      example: "HM (Henry Molaison), Little Hans, Anna O"
    }
  ]

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-rose-400 mb-2">Privacy and Confidentiality</h2>
          <p className="text-gray-400">Two related but distinct ethical concepts</p>
        </div>

        {/* Two Main Concepts */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Privacy */}
          <div 
            onClick={() => setShowPrivacyDetails(!showPrivacyDetails)}
            className={`rounded-xl p-6 border transition-all duration-300 cursor-pointer
              ${showPrivacyDetails 
                ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border-blue-500/50' 
                : 'bg-gray-800/50 border-gray-700 hover:border-blue-500/30'
              }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Lock className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-blue-400">🔒 Privacy</h3>
            </div>
            
            <p className="text-gray-200 mb-3">
              The right to <span className="text-blue-400 font-bold">control information about yourself</span>.
            </p>
            
            {showPrivacyDetails ? (
              <div className="space-y-3 animate-fade-in">
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <p className="text-sm text-gray-300">
                    <span className="text-blue-400 font-bold">Key Point:</span> This extends to the 
                    <span className="text-blue-400"> location of the study</span> - institutions shouldn't be named 
                    without permission.
                  </p>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-3">
                  <p className="text-sm text-gray-400">
                    <span className="text-blue-400">📍 Example:</span> "A university in the North of England" 
                    rather than "University of Manchester"
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-sm text-center mt-4">Click to reveal more details...</p>
            )}
          </div>

          {/* Confidentiality */}
          <div 
            onClick={() => setShowConfidentialityDetails(!showConfidentialityDetails)}
            className={`rounded-xl p-6 border transition-all duration-300 cursor-pointer
              ${showConfidentialityDetails 
                ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/10 border-purple-500/50' 
                : 'bg-gray-800/50 border-gray-700 hover:border-purple-500/30'
              }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-purple-400">🛡️ Confidentiality</h3>
            </div>
            
            <p className="text-gray-200 mb-3">
              If privacy is invaded, <span className="text-purple-400 font-bold">personal data must be protected</span>.
            </p>
            
            {showConfidentialityDetails ? (
              <div className="space-y-3 animate-fade-in">
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <p className="text-sm text-gray-300">
                    <span className="text-purple-400 font-bold">Legal Backing:</span> Protected by the 
                    <span className="text-purple-400"> Data Protection Act</span> - researchers have legal 
                    obligations to keep data secure.
                  </p>
                </div>
                <div className="bg-purple-500/10 rounded-lg p-3">
                  <p className="text-sm text-gray-400">
                    <span className="text-purple-400">🔐 This includes:</span> Secure storage, limited access, 
                    and eventual destruction of data.
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-sm text-center mt-4">Click to reveal more details...</p>
            )}
          </div>
        </div>

        {/* Relationship Diagram */}
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 mb-6">
          <div className="flex items-center justify-center gap-4">
            <div className="text-center">
              <Lock className="w-8 h-8 text-blue-400 mx-auto mb-1" />
              <span className="text-blue-400 font-bold text-sm">Privacy</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-500 text-xs">if invaded</span>
              <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <span className="text-gray-500 text-xs">then protect with</span>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 text-purple-400 mx-auto mb-1" />
              <span className="text-purple-400 font-bold text-sm">Confidentiality</span>
            </div>
          </div>
        </div>

        {/* Solutions */}
        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-xl p-5 border border-green-500/30">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <h3 className="text-lg font-bold text-green-400">✓ Ways to Maintain Confidentiality</h3>
            </div>
            <span className="text-sm text-gray-400">Click cards to reveal ({revealedSolutions}/3)</span>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {solutions.map((solution, idx) => {
              const Icon = solution.icon
              const isRevealed = revealedSolutions > idx
              
              return (
                <div
                  key={idx}
                  onClick={() => !isRevealed && setRevealedSolutions(idx + 1)}
                  className={`rounded-xl p-4 border transition-all duration-300 cursor-pointer
                    ${isRevealed 
                      ? 'bg-gray-800/50 border-green-500/30' 
                      : 'bg-gray-800/30 border-gray-700 hover:border-green-500/30'
                    }`}
                >
                  <div className="text-center">
                    <Icon className={`w-8 h-8 mx-auto mb-2 ${isRevealed ? 'text-green-400' : 'text-gray-500'}`} />
                    <h4 className={`font-bold text-sm ${isRevealed ? 'text-white' : 'text-gray-500'}`}>
                      {isRevealed ? solution.method : 'Method ' + (idx + 1)}
                    </h4>
                    {isRevealed ? (
                      <div className="mt-2 animate-fade-in">
                        <p className="text-xs text-gray-300">{solution.description}</p>
                        <p className="text-xs text-green-400 mt-1 italic">e.g., {solution.example}</p>
                      </div>
                    ) : (
                      <p className="text-xs text-gray-500 mt-2">Click to reveal</p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-6 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                (i === 0 && showPrivacyDetails) || 
                (i === 1 && showConfidentialityDetails) || 
                (i > 1 && revealedSolutions >= (i - 1))
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
