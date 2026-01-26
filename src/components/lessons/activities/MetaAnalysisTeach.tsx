import { useState } from 'react'
import { Layers, CheckCircle, XCircle, ArrowRight, Database } from 'lucide-react'

interface MetaAnalysisTeachProps {
  isPresenting?: boolean
}

export default function MetaAnalysisTeach({ isPresenting }: MetaAnalysisTeachProps) {
  const [revealedSteps, setRevealedSteps] = useState(0)
  const [showEvaluation, setShowEvaluation] = useState(false)
  const [revealedEval, setRevealedEval] = useState(0)

  const steps = [
    {
      step: 1,
      title: "Identify Research Question",
      description: "Define a specific question to investigate across multiple studies",
      icon: "🎯"
    },
    {
      step: 2,
      title: "Search for Studies",
      description: "Find all relevant published research on the topic",
      icon: "🔍"
    },
    {
      step: 3,
      title: "Apply Inclusion Criteria",
      description: "Select studies that meet quality and relevance standards",
      icon: "✅"
    },
    {
      step: 4,
      title: "Combine Results",
      description: "Pool the data/findings to calculate an overall effect size",
      icon: "📊"
    },
    {
      step: 5,
      title: "Draw Conclusions",
      description: "Reach more reliable conclusions than single studies",
      icon: "💡"
    }
  ]

  const evaluation = {
    strengths: [
      { point: "Increases statistical power", detail: "Larger combined sample = more reliable results" },
      { point: "Resolves conflicting findings", detail: "Can explain why studies found different results" },
      { point: "More generalisable", detail: "Combines data from different samples/settings" },
      { point: "Identifies gaps", detail: "Shows where more research is needed" }
    ],
    limitations: [
      { point: "Publication bias", detail: "Positive results more likely to be published" },
      { point: "Garbage in, garbage out", detail: "Quality depends on included studies" },
      { point: "Heterogeneity issues", detail: "Combining different methodologies may be invalid" },
      { point: "Time-consuming", detail: "Requires extensive literature searching" }
    ]
  }

  const exampleStudies = [
    { author: "Smith (2018)", sample: "n=50", finding: "+0.4 effect" },
    { author: "Jones (2019)", sample: "n=80", finding: "+0.6 effect" },
    { author: "Brown (2020)", sample: "n=120", finding: "+0.3 effect" },
    { author: "Taylor (2021)", sample: "n=65", finding: "+0.5 effect" }
  ]

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-rose-400 mb-2">Meta-Analysis</h2>
        <p className="text-gray-400 mb-6">Understanding how researchers combine findings from multiple studies</p>

        {/* Definition */}
        <div className="bg-gray-800/50 rounded-xl p-6 border border-rose-500/30 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <Layers className="w-8 h-8 text-rose-400" />
            <div>
              <p className="text-xl text-gray-200">
                A <span className="text-rose-400 font-bold">statistical technique</span> that combines results from multiple studies to reach a <span className="text-rose-400 font-bold">more powerful conclusion</span>.
              </p>
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-2">Think of it as "research about research" - pooling data for stronger findings</p>
        </div>

        {/* Process Steps - Click to Reveal */}
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-bold text-cyan-400 mb-4">📋 The Meta-Analysis Process (click to reveal each step)</h3>
          
          <div className="space-y-3">
            {steps.map((step, index) => {
              const isRevealed = index < revealedSteps
              return (
                <button
                  key={index}
                  onClick={() => !isRevealed && setRevealedSteps(prev => prev + 1)}
                  className={`w-full text-left transition-all duration-300 ${
                    isRevealed ? 'cursor-default' : 'cursor-pointer hover:bg-gray-700/30'
                  }`}
                >
                  {isRevealed ? (
                    <div className="flex items-start gap-4 bg-cyan-900/20 rounded-lg p-4 border border-cyan-500/30 animate-fadeIn">
                      <div className="flex-shrink-0 w-10 h-10 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{step.icon}</span>
                          <h4 className="font-bold text-cyan-400">{step.title}</h4>
                        </div>
                        <p className="text-gray-300 text-sm mt-1">{step.description}</p>
                      </div>
                      {index < steps.length - 1 && (
                        <ArrowRight className="w-5 h-5 text-gray-500 mt-2" />
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center gap-4 bg-gray-700/20 rounded-lg p-4 border border-dashed border-gray-600">
                      <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                        <span className="text-gray-400 font-bold">{step.step}</span>
                      </div>
                      <span className="text-gray-500">Click to reveal step {step.step}...</span>
                    </div>
                  )}
                </button>
              )
            })}
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i < revealedSteps ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Visual Example */}
        {revealedSteps >= 5 && (
          <div className="animate-fadeIn mb-6">
            <div className="bg-purple-900/30 rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-lg font-bold text-purple-400 mb-4">
                <Database className="w-5 h-5 inline mr-2" />
                Example: Combining Study Results
              </h3>
              
              <div className="grid grid-cols-4 gap-3 mb-4">
                {exampleStudies.map((study, i) => (
                  <div key={i} className="bg-gray-800/50 rounded-lg p-3 text-center">
                    <p className="text-sm font-bold text-gray-300">{study.author}</p>
                    <p className="text-xs text-gray-500">{study.sample}</p>
                    <p className="text-sm text-purple-400 font-bold mt-1">{study.finding}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-gray-800/80 rounded-lg p-4 text-center">
                <p className="text-gray-400">Combined total: n = 315</p>
                <p className="text-xl font-bold text-green-400 mt-2">Overall Effect: +0.45</p>
                <p className="text-sm text-gray-400 mt-1">More reliable than any single study!</p>
              </div>
            </div>
          </div>
        )}

        {/* Evaluation Section */}
        {revealedSteps >= 5 && (
          <button
            onClick={() => setShowEvaluation(!showEvaluation)}
            className="w-full bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:bg-gray-700/50 transition-all animate-fadeIn"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-amber-400">📊 Evaluate Meta-Analysis</h3>
              <span className="text-gray-400 text-sm">{showEvaluation ? '▼' : '▶ Click to expand'}</span>
            </div>
            
            {showEvaluation && (
              <div className="mt-4 animate-fadeIn">
                <div className="grid grid-cols-2 gap-6">
                  {/* Strengths */}
                  <div>
                    <h4 className="font-bold text-green-400 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Strengths (click to reveal)
                    </h4>
                    <div className="space-y-2">
                      {evaluation.strengths.map((item, i) => {
                        const isRevealed = i < revealedEval
                        return (
                          <button
                            key={i}
                            onClick={(e) => {
                              e.stopPropagation()
                              !isRevealed && setRevealedEval(prev => prev + 1)
                            }}
                            className={`w-full text-left p-2 rounded-lg transition-all ${
                              isRevealed 
                                ? 'bg-green-900/30 border border-green-500/30' 
                                : 'bg-gray-700/30 border border-dashed border-gray-600 hover:bg-gray-700/50 cursor-pointer'
                            }`}
                          >
                            {isRevealed ? (
                              <div className="animate-fadeIn">
                                <p className="text-gray-300 text-sm font-bold">✓ {item.point}</p>
                                <p className="text-gray-500 text-xs">{item.detail}</p>
                              </div>
                            ) : (
                              <span className="text-gray-500 text-sm">Click to reveal...</span>
                            )}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Limitations */}
                  <div>
                    <h4 className="font-bold text-red-400 mb-3 flex items-center gap-2">
                      <XCircle className="w-5 h-5" />
                      Limitations
                    </h4>
                    <div className="space-y-2">
                      {evaluation.limitations.map((item, i) => {
                        const isRevealed = i < revealedEval
                        return (
                          <div
                            key={i}
                            className={`p-2 rounded-lg transition-all ${
                              isRevealed 
                                ? 'bg-red-900/30 border border-red-500/30' 
                                : 'bg-gray-700/30 border border-dashed border-gray-600'
                            }`}
                          >
                            {isRevealed ? (
                              <div className="animate-fadeIn">
                                <p className="text-gray-300 text-sm font-bold">✗ {item.point}</p>
                                <p className="text-gray-500 text-xs">{item.detail}</p>
                              </div>
                            ) : (
                              <span className="text-gray-500 text-sm">...</span>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </button>
        )}
      </div>
    </div>
  )
}
