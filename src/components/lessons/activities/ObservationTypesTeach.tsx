import { useState } from 'react'
import { Trees, Microscope, CheckCircle, XCircle, ArrowRight } from 'lucide-react'

interface Props {
  isPresenting?: boolean
}

export default function ObservationTypesTeach({ isPresenting }: Props) {
  const [revealedNat, setRevealedNat] = useState(0)
  const [revealedCon, setRevealedCon] = useState(0)

  const naturalisticFeatures = [
    { text: "Natural setting - real world environment", positive: true },
    { text: "No intervention from researcher", positive: true },
    { text: "All variables free to vary", neutral: true },
    { text: "High external validity - generalisable", positive: true },
    { text: "Lack of control - hard to replicate", positive: false },
    { text: "Many extraneous variables", positive: false }
  ]

  const controlledFeatures = [
    { text: "Controlled environment (often lab)", positive: true },
    { text: "Researcher controls certain variables", positive: true },
    { text: "Specific behaviours can be isolated", neutral: true },
    { text: "Easier to replicate", positive: true },
    { text: "Fewer confounding variables", positive: true },
    { text: "May not apply to real-life settings", positive: false }
  ]

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-rose-400 mb-2">Naturalistic vs Controlled Observations</h2>
          <p className="text-gray-400">Two different approaches to observational research</p>
        </div>

        {/* Two Column Comparison */}
        <div className="grid grid-cols-2 gap-6">
          {/* Naturalistic */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-xl p-5 border border-green-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Trees className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-400">🌳 Naturalistic</h3>
                  <p className="text-sm text-gray-400">In the real world</p>
                </div>
              </div>
              
              <p className="text-gray-200 mb-4">
                Behaviour observed in its <span className="text-green-400 font-bold">natural setting</span>. 
                All aspects of environment <span className="text-green-400 font-bold">free to vary</span>.
              </p>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Click to reveal features</span>
                  <span className="text-xs text-green-400">{revealedNat}/6</span>
                </div>
                {naturalisticFeatures.map((feature, idx) => {
                  const isRevealed = revealedNat > idx
                  return (
                    <div
                      key={idx}
                      onClick={() => !isRevealed && setRevealedNat(idx + 1)}
                      className={`flex items-center gap-2 p-2 rounded-lg transition-all duration-300 cursor-pointer
                        ${isRevealed 
                          ? feature.positive === false ? 'bg-red-500/10' : 'bg-green-500/10'
                          : 'bg-gray-800/50 hover:bg-gray-800'
                        }`}
                    >
                      {isRevealed ? (
                        feature.positive === false 
                          ? <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                          : <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      ) : (
                        <div className="w-4 h-4 rounded-full bg-gray-600 flex-shrink-0"></div>
                      )}
                      <span className={`text-sm ${isRevealed ? 'text-gray-200' : 'text-gray-500'}`}>
                        {isRevealed ? feature.text : 'Click to reveal'}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Example */}
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
              <p className="text-sm text-gray-400">
                <span className="text-green-400 font-bold">Example:</span> Observing children's play behaviour 
                in a school playground during break time.
              </p>
            </div>
          </div>

          {/* Controlled */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-xl p-5 border border-blue-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Microscope className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-400">🔬 Controlled</h3>
                  <p className="text-sm text-gray-400">In a controlled setting</p>
                </div>
              </div>
              
              <p className="text-gray-200 mb-4">
                Researcher <span className="text-blue-400 font-bold">controls certain variables</span> to 
                observe specific behaviours under <span className="text-blue-400 font-bold">standardised conditions</span>.
              </p>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Click to reveal features</span>
                  <span className="text-xs text-blue-400">{revealedCon}/6</span>
                </div>
                {controlledFeatures.map((feature, idx) => {
                  const isRevealed = revealedCon > idx
                  return (
                    <div
                      key={idx}
                      onClick={() => !isRevealed && setRevealedCon(idx + 1)}
                      className={`flex items-center gap-2 p-2 rounded-lg transition-all duration-300 cursor-pointer
                        ${isRevealed 
                          ? feature.positive === false ? 'bg-red-500/10' : 'bg-blue-500/10'
                          : 'bg-gray-800/50 hover:bg-gray-800'
                        }`}
                    >
                      {isRevealed ? (
                        feature.positive === false 
                          ? <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                          : <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      ) : (
                        <div className="w-4 h-4 rounded-full bg-gray-600 flex-shrink-0"></div>
                      )}
                      <span className={`text-sm ${isRevealed ? 'text-gray-200' : 'text-gray-500'}`}>
                        {isRevealed ? feature.text : 'Click to reveal'}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Example */}
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
              <p className="text-sm text-gray-400">
                <span className="text-blue-400 font-bold">Example:</span> Ainsworth's Strange Situation - 
                observing attachment in a controlled room with set procedures.
              </p>
            </div>
          </div>
        </div>

        {/* Key Difference Summary */}
        <div className="mt-6 bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="flex items-center justify-center gap-8">
            <div className="text-center">
              <span className="text-green-400 font-bold">Naturalistic</span>
              <p className="text-xs text-gray-500">High ecological validity</p>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-gray-500" />
              <span className="text-gray-500 text-sm">Trade-off</span>
              <ArrowRight className="w-4 h-4 text-gray-500 rotate-180" />
            </div>
            <div className="text-center">
              <span className="text-blue-400 font-bold">Controlled</span>
              <p className="text-xs text-gray-500">High internal validity</p>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-6 flex justify-center gap-2">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                (i < 3 && revealedNat > i * 2) || (i >= 3 && revealedCon > (i - 3) * 2)
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
