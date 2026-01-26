import React, { useState } from 'react'
import { Shuffle, CheckCircle2, XCircle, ListOrdered, Lightbulb } from 'lucide-react'

interface RandomSamplingTeachProps {
  isPresenting?: boolean
}

const RandomSamplingTeach: React.FC<RandomSamplingTeachProps> = ({ isPresenting }) => {
  const [revealedStep, setRevealedStep] = useState(0)
  const [showEvaluation, setShowEvaluation] = useState(false)
  const [showExample, setShowExample] = useState(false)

  const steps = [
    { num: 1, text: 'Obtain a complete list of all members of the target population' },
    { num: 2, text: 'Assign all names a number' },
    { num: 3, text: 'Use lottery method (computer randomiser or hat) to select' }
  ]

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-3 bg-blue-500/20 px-6 py-3 rounded-full mb-4">
            <Shuffle className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold text-blue-400">Random Sampling</h2>
          </div>
        </div>

        {/* Definition Card */}
        <div className="bg-gray-800/50 rounded-xl p-6 border border-blue-500/30 mb-6">
          <p className="text-xl text-gray-200">
            All members of the target population have an <span className="text-blue-400 font-bold">equal chance</span> of being selected.
          </p>
        </div>

        {/* Method Steps - Click to reveal */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <ListOrdered className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-bold text-blue-400">Method: Click each step to reveal</h3>
            <div className="flex gap-1 ml-auto">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i < revealedStep ? 'bg-blue-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <div className="space-y-3">
            {steps.map((step, idx) => {
              const isRevealed = idx < revealedStep
              return (
                <button
                  key={idx}
                  onClick={() => {
                    if (!isRevealed && revealedStep === idx) {
                      setRevealedStep(prev => prev + 1)
                    }
                  }}
                  disabled={isRevealed || revealedStep !== idx}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-500 flex items-center gap-4 ${
                    isRevealed
                      ? 'bg-blue-900/30 border-blue-500/50'
                      : revealedStep === idx
                      ? 'bg-gray-700/50 border-gray-600 hover:border-blue-500/50 cursor-pointer animate-pulse'
                      : 'bg-gray-800/30 border-gray-700 opacity-50'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    isRevealed ? 'bg-blue-500/30 text-blue-400' : 'bg-gray-700 text-gray-500'
                  }`}>
                    {step.num}
                  </div>
                  {isRevealed ? (
                    <p className="text-gray-200 animate-fadeIn">{step.text}</p>
                  ) : (
                    <p className="text-gray-500">
                      {revealedStep === idx ? '👆 Click to reveal step ' + step.num : 'Step ' + step.num}
                    </p>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Evaluation & Example - show after all steps revealed */}
        {revealedStep >= 3 && (
          <div className="animate-fadeIn space-y-4">
            {/* Evaluation */}
            <button
              onClick={() => setShowEvaluation(!showEvaluation)}
              className="w-full bg-gray-800/50 rounded-xl p-4 border border-gray-600 hover:border-gray-500 transition-colors text-left"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-200">📊 Evaluation</span>
                <span className="text-gray-400">{showEvaluation ? '▲' : '▼'}</span>
              </div>
              {showEvaluation && (
                <div className="mt-4 pt-4 border-t border-gray-700 animate-fadeIn grid md:grid-cols-2 gap-4">
                  <div className="bg-green-900/30 rounded-lg p-4 border border-green-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <h4 className="font-bold text-green-400">Strength</h4>
                    </div>
                    <p className="text-gray-300 text-sm">
                      <span className="font-bold text-green-400">Free from researcher bias</span> - researcher has no influence over selection.
                    </p>
                  </div>
                  <div className="bg-red-900/30 rounded-lg p-4 border border-red-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <XCircle className="w-5 h-5 text-red-400" />
                      <h4 className="font-bold text-red-400">Limitations</h4>
                    </div>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Time-consuming to set up</li>
                      <li>• Complete list of population needed</li>
                      <li>• May still be unrepresentative by chance</li>
                      <li>• Selected people may refuse</li>
                    </ul>
                  </div>
                </div>
              )}
            </button>

            {/* Example */}
            <button
              onClick={() => setShowExample(!showExample)}
              className="w-full bg-amber-900/30 rounded-xl p-4 border border-amber-500/50 hover:bg-amber-900/50 transition-colors text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-amber-400" />
                  <span className="text-lg font-bold text-amber-400">Example in Practice</span>
                </div>
                <span className="text-amber-400">{showExample ? '▲' : '▼'}</span>
              </div>
              {showExample && (
                <div className="mt-4 pt-4 border-t border-amber-500/30 animate-fadeIn">
                  <p className="text-amber-300 mb-3">Selecting 30 students randomly from a school of 1000:</p>
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="bg-gray-800/50 rounded-lg px-3 py-2 text-sm">
                      <span className="text-gray-400">1.</span> <span className="text-gray-300">Get student list</span>
                    </div>
                    <span className="text-gray-500">→</span>
                    <div className="bg-gray-800/50 rounded-lg px-3 py-2 text-sm">
                      <span className="text-gray-400">2.</span> <span className="text-gray-300">Number 1-1000</span>
                    </div>
                    <span className="text-gray-500">→</span>
                    <div className="bg-gray-800/50 rounded-lg px-3 py-2 text-sm">
                      <span className="text-gray-400">3.</span> <span className="text-gray-300">Computer picks 30 numbers</span>
                    </div>
                  </div>
                </div>
              )}
            </button>
          </div>
        )}

        {/* Exam tip */}
        <div className="mt-4 bg-purple-900/30 rounded-lg p-3 border border-purple-500/30">
          <p className="text-purple-300 text-sm">
            <span className="font-bold">📝 Exam tip:</span> Don't confuse random SAMPLING with random ALLOCATION. Random sampling = selecting participants. Random allocation = assigning to conditions.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default RandomSamplingTeach
