import { useState } from 'react'
import { Users, Scale, AlertTriangle, CheckCircle, Award, Briefcase } from 'lucide-react'

interface Props {
  isPresenting?: boolean
}

export default function EthicsCommitteesTeach({ isPresenting }: Props) {
  const [showCostBenefit, setShowCostBenefit] = useState(false)
  const [showConsequences, setShowConsequences] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

  const reviewProcess = [
    {
      step: "Submission",
      description: "Researcher submits proposal detailing methods and ethical considerations",
      icon: "📝"
    },
    {
      step: "Review",
      description: "Committee examines the study design and potential risks",
      icon: "🔍"
    },
    {
      step: "Cost-Benefit Analysis",
      description: "Weighs potential harm against scientific value",
      icon: "⚖️"
    },
    {
      step: "Decision",
      description: "Approve, request changes, or reject the proposal",
      icon: "✅"
    }
  ]

  const costs = [
    "Psychological distress to participants",
    "Potential embarrassment or shame",
    "Physical discomfort or risk",
    "Invasion of privacy"
  ]

  const benefits = [
    "Advancement of psychological knowledge",
    "Potential to help future patients",
    "Understanding of human behaviour",
    "Development of treatments or interventions"
  ]

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-rose-400 mb-2">Ethics Committees & Guidelines</h2>
          <p className="text-gray-400">How ethical standards are maintained in research</p>
        </div>

        {/* Definition Card */}
        <div className="bg-gradient-to-r from-rose-500/20 to-pink-500/10 rounded-xl p-6 border border-rose-500/30 mb-6">
          <div className="flex items-center gap-4">
            <Users className="w-10 h-10 text-rose-400" />
            <div>
              <p className="text-xl text-gray-200">
                Guidelines are implemented by <span className="text-rose-400 font-bold">ethics committees</span> in 
                research institutions who use a <span className="text-rose-400 font-bold">cost-benefit approach</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Review Process Timeline */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-amber-400 mb-4">📋 The Ethics Review Process</h3>
          <div className="flex items-center justify-between">
            {reviewProcess.map((item, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveStep(idx)}
                className="flex-1 relative cursor-pointer group"
              >
                <div className={`text-center p-4 rounded-xl transition-all duration-300
                  ${activeStep >= idx 
                    ? 'bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-amber-500/30' 
                    : 'bg-gray-800/30 border border-gray-700 hover:border-amber-500/30'
                  }`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <h4 className={`font-bold text-sm mt-2 ${activeStep >= idx ? 'text-amber-400' : 'text-gray-500'}`}>
                    {item.step}
                  </h4>
                  {activeStep >= idx && (
                    <p className="text-xs text-gray-400 mt-1 animate-fade-in">{item.description}</p>
                  )}
                </div>
                {idx < reviewProcess.length - 1 && (
                  <div className={`absolute top-1/2 -right-4 w-8 h-0.5 ${activeStep > idx ? 'bg-amber-500' : 'bg-gray-700'}`}></div>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-xs mt-2">Click each step to reveal details</p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-2 gap-6">
          {/* Cost-Benefit Analysis */}
          <div 
            onClick={() => setShowCostBenefit(!showCostBenefit)}
            className={`rounded-xl p-5 border transition-all duration-300 cursor-pointer
              ${showCostBenefit 
                ? 'bg-gradient-to-br from-purple-500/20 to-indigo-500/10 border-purple-500/30' 
                : 'bg-gray-800/50 border-gray-700 hover:border-purple-500/30'
              }`}
          >
            <div className="flex items-center gap-2 mb-3">
              <Scale className="w-6 h-6 text-purple-400" />
              <h3 className="text-lg font-bold text-purple-400">⚖️ Cost-Benefit Analysis</h3>
            </div>
            
            {showCostBenefit ? (
              <div className="animate-fade-in">
                <p className="text-gray-300 mb-3">
                  Weighs <span className="text-red-400 font-bold">potential harm</span> to participants against 
                  the <span className="text-green-400 font-bold">value of the research</span> to society.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-red-500/10 rounded-lg p-3">
                    <p className="text-red-400 font-bold text-xs mb-2">COSTS (Risks)</p>
                    <ul className="space-y-1">
                      {costs.map((cost, idx) => (
                        <li key={idx} className="text-xs text-gray-400">• {cost}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-green-500/10 rounded-lg p-3">
                    <p className="text-green-400 font-bold text-xs mb-2">BENEFITS</p>
                    <ul className="space-y-1">
                      {benefits.map((benefit, idx) => (
                        <li key={idx} className="text-xs text-gray-400">• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-sm italic">Click to see how decisions are made...</p>
            )}
          </div>

          {/* Consequences */}
          <div 
            onClick={() => setShowConsequences(!showConsequences)}
            className={`rounded-xl p-5 border transition-all duration-300 cursor-pointer
              ${showConsequences 
                ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border-cyan-500/30' 
                : 'bg-gray-800/50 border-gray-700 hover:border-cyan-500/30'
              }`}
          >
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-6 h-6 text-cyan-400" />
              <h3 className="text-lg font-bold text-cyan-400">⚡ Consequences of Breaches</h3>
            </div>
            
            {showConsequences ? (
              <div className="animate-fade-in space-y-3">
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-bold text-sm">NOT Criminal</span>
                  </div>
                  <p className="text-xs text-gray-400">
                    Researchers won't go to prison for ethical breaches (unless they break other laws)
                  </p>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-5 h-5 text-red-400" />
                    <span className="text-red-400 font-bold text-sm">Professional Consequences</span>
                  </div>
                  <ul className="space-y-1 text-xs text-gray-400">
                    <li>• May <span className="text-red-400 font-bold">lose their job</span></li>
                    <li>• Research may be discredited/unpublished</li>
                    <li>• Reputation damaged in academic community</li>
                    <li>• May lose funding for future research</li>
                  </ul>
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-sm italic">Click to learn what happens when guidelines are breached...</p>
            )}
          </div>
        </div>

        {/* Key Bodies */}
        <div className="mt-6 bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="flex items-center justify-center gap-8">
            <div className="text-center">
              <Award className="w-8 h-8 text-blue-400 mx-auto mb-1" />
              <span className="text-blue-400 font-bold text-sm">BPS</span>
              <p className="text-xs text-gray-500">British Psychological Society</p>
            </div>
            <div className="h-8 w-px bg-gray-700"></div>
            <div className="text-center">
              <Award className="w-8 h-8 text-green-400 mx-auto mb-1" />
              <span className="text-green-400 font-bold text-sm">APA</span>
              <p className="text-xs text-gray-500">American Psychological Association</p>
            </div>
            <div className="h-8 w-px bg-gray-700"></div>
            <div className="text-center">
              <Users className="w-8 h-8 text-purple-400 mx-auto mb-1" />
              <span className="text-purple-400 font-bold text-sm">IRB</span>
              <p className="text-xs text-gray-500">Institutional Review Board</p>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-6 flex justify-center gap-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                (i === 0 && activeStep > 0) || 
                (i === 1 && activeStep >= 3) ||
                (i === 2 && showCostBenefit) || 
                (i === 3 && showConsequences)
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
