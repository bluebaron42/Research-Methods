import { useState } from 'react'
import { Beaker, BarChart3, ArrowRight, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'

interface CorrelationVsExperimentTeachProps {
  isPresenting?: boolean
}

export default function CorrelationVsExperimentTeach({ isPresenting }: CorrelationVsExperimentTeachProps) {
  const [activeTab, setActiveTab] = useState<'experiment' | 'correlation' | null>(null)
  const [showThirdVariable, setShowThirdVariable] = useState(false)
  const [revealedComparisons, setRevealedComparisons] = useState(0)

  const comparisons = [
    {
      aspect: 'Variable manipulation',
      experiment: 'Researcher MANIPULATES the IV',
      correlation: 'NO manipulation - just measures',
      icon: '🔬'
    },
    {
      aspect: 'Cause and effect',
      experiment: 'CAN establish cause & effect',
      correlation: 'CANNOT establish cause & effect',
      icon: '🎯'
    },
    {
      aspect: 'Variable names',
      experiment: 'IV and DV',
      correlation: 'Co-variables (CV1 & CV2)',
      icon: '📝'
    },
    {
      aspect: 'Control',
      experiment: 'High control possible',
      correlation: 'Limited control',
      icon: '🎛️'
    }
  ]

  const thirdVariableExamples = [
    {
      var1: 'Ice cream sales',
      var2: 'Shark attacks',
      hidden: 'Hot weather',
      explanation: 'Hot weather causes both more ice cream buying AND more swimming (shark encounters)'
    },
    {
      var1: 'Number of firefighters',
      var2: 'Fire damage',
      hidden: 'Fire severity',
      explanation: 'Bigger fires have both more firefighters called AND more damage done'
    },
    {
      var1: 'Hours of TV watched',
      var2: 'Grades at school',
      hidden: 'Study time',
      explanation: 'Less study time means both more TV AND lower grades'
    }
  ]

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-rose-400 mb-2">Correlations vs Experiments</h2>
        <p className="text-gray-400 mb-6">Understanding the key difference - click to compare</p>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => setActiveTab(activeTab === 'experiment' ? null : 'experiment')}
            className={`rounded-xl p-6 border-2 transition-all duration-300 ${
              activeTab === 'experiment' 
                ? 'bg-blue-900/40 border-blue-500 ring-2 ring-blue-500/50' 
                : 'bg-gray-800/50 border-blue-500/30 hover:border-blue-500/60'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <Beaker className={`w-8 h-8 ${activeTab === 'experiment' ? 'text-blue-400' : 'text-blue-400/70'}`} />
              <h3 className={`text-xl font-bold ${activeTab === 'experiment' ? 'text-blue-400' : 'text-blue-400/70'}`}>
                Experiments
              </h3>
            </div>
            <p className="text-gray-300">Researcher <span className="font-bold">manipulates</span> the IV to measure effect on DV</p>
            {activeTab === 'experiment' && (
              <div className="mt-4 animate-fadeIn">
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-bold">CAN establish cause and effect</span>
                </div>
              </div>
            )}
          </button>

          <button
            onClick={() => setActiveTab(activeTab === 'correlation' ? null : 'correlation')}
            className={`rounded-xl p-6 border-2 transition-all duration-300 ${
              activeTab === 'correlation' 
                ? 'bg-purple-900/40 border-purple-500 ring-2 ring-purple-500/50' 
                : 'bg-gray-800/50 border-purple-500/30 hover:border-purple-500/60'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <BarChart3 className={`w-8 h-8 ${activeTab === 'correlation' ? 'text-purple-400' : 'text-purple-400/70'}`} />
              <h3 className={`text-xl font-bold ${activeTab === 'correlation' ? 'text-purple-400' : 'text-purple-400/70'}`}>
                Correlations
              </h3>
            </div>
            <p className="text-gray-300"><span className="font-bold">No manipulation</span> - just measuring relationship between co-variables</p>
            {activeTab === 'correlation' && (
              <div className="mt-4 animate-fadeIn">
                <div className="flex items-center gap-2 text-red-400">
                  <XCircle className="w-5 h-5" />
                  <span className="font-bold">CANNOT establish cause and effect</span>
                </div>
              </div>
            )}
          </button>
        </div>

        {/* Comparison Table - Click to Reveal */}
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-bold text-cyan-400 mb-4">📊 Key Differences (click to reveal each)</h3>
          <div className="space-y-3">
            {comparisons.map((comp, index) => {
              const isRevealed = index < revealedComparisons
              return (
                <button
                  key={index}
                  onClick={() => !isRevealed && setRevealedComparisons(prev => prev + 1)}
                  className={`w-full text-left transition-all duration-300 ${
                    isRevealed ? 'cursor-default' : 'cursor-pointer hover:bg-gray-700/30'
                  }`}
                >
                  {isRevealed ? (
                    <div className="grid grid-cols-3 gap-4 bg-gray-700/30 rounded-lg p-3 animate-fadeIn">
                      <div className="text-gray-400">
                        <span className="text-xl mr-2">{comp.icon}</span>
                        {comp.aspect}
                      </div>
                      <div className="text-blue-400">{comp.experiment}</div>
                      <div className="text-purple-400">{comp.correlation}</div>
                    </div>
                  ) : (
                    <div className="bg-gray-700/20 rounded-lg p-3 border border-dashed border-gray-600">
                      <span className="text-gray-500">Click to reveal comparison {index + 1}...</span>
                    </div>
                  )}
                </button>
              )
            })}
          </div>
          
          {/* Progress */}
          <div className="flex justify-center gap-2 mt-4">
            {comparisons.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all ${
                  i < revealedComparisons ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Third Variable Problem */}
        {revealedComparisons >= 4 && (
          <button
            onClick={() => setShowThirdVariable(!showThirdVariable)}
            className="w-full animate-fadeIn"
          >
            <div className="bg-amber-900/30 rounded-xl p-6 border border-amber-500/50 hover:bg-amber-900/40 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-400" />
                  <h3 className="text-xl font-bold text-amber-400">The Third Variable Problem</h3>
                </div>
                <span className="text-gray-400">{showThirdVariable ? '▼' : '▶ Click to explore'}</span>
              </div>
              
              <p className="text-gray-300 text-left mb-4">
                An <span className="text-amber-400 font-bold">untested variable</span> may be causing both co-variables to change - this is why correlations cannot prove causation!
              </p>

              {showThirdVariable && (
                <div className="space-y-4 mt-4 animate-fadeIn">
                  {thirdVariableExamples.map((ex, i) => (
                    <div key={i} className="bg-gray-800/50 rounded-lg p-4 text-left">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-purple-500/30 text-purple-400 px-2 py-1 rounded text-sm">{ex.var1}</span>
                        <span className="text-gray-500">correlates with</span>
                        <span className="bg-purple-500/30 text-purple-400 px-2 py-1 rounded text-sm">{ex.var2}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <ArrowRight className="w-4 h-4 text-amber-400" />
                        <span className="text-amber-400 font-bold">Hidden third variable:</span>
                        <span className="bg-amber-500/30 text-amber-300 px-2 py-1 rounded text-sm">{ex.hidden}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{ex.explanation}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </button>
        )}
      </div>
    </div>
  )
}
