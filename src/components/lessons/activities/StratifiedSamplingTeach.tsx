import React, { useState } from 'react'
import { PieChart, CheckCircle2, XCircle, ListOrdered, Lightbulb } from 'lucide-react'

interface StratifiedSamplingTeachProps {
  isPresenting?: boolean
}

const StratifiedSamplingTeach: React.FC<StratifiedSamplingTeachProps> = ({ isPresenting }) => {
  const [revealedStep, setRevealedStep] = useState(0)
  const [showEvaluation, setShowEvaluation] = useState(false)
  const [showExample, setShowExample] = useState(false)

  const steps = [
    { num: 1, text: 'Identify different strata (subgroups) in the population' },
    { num: 2, text: 'Work out proportions needed for representation' },
    { num: 3, text: 'Randomly select participants from each stratum' }
  ]

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-3 bg-green-500/20 px-6 py-3 rounded-full mb-4">
            <PieChart className="w-8 h-8 text-green-400" />
            <h2 className="text-3xl font-bold text-green-400">Stratified Sampling</h2>
          </div>
        </div>

        {/* Definition Card */}
        <div className="bg-gray-800/50 rounded-xl p-6 border border-green-500/30 mb-6">
          <p className="text-xl text-gray-200">
            The sample <span className="text-green-400 font-bold">reflects the proportions</span> of sub-groups (strata) within the target population.
          </p>
        </div>

        {/* Visual Example */}
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 mb-6">
          <p className="text-gray-400 text-sm mb-3">Example: A school with 60% girls, 40% boys</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-400 text-xs mb-2 text-center">Population (1000)</p>
              <div className="flex justify-center gap-1">
                <div className="w-24 h-6 bg-pink-500/50 rounded-l flex items-center justify-center text-xs text-pink-200">60%</div>
                <div className="w-16 h-6 bg-blue-500/50 rounded-r flex items-center justify-center text-xs text-blue-200">40%</div>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-2 text-center">Sample (100)</p>
              <div className="flex justify-center gap-1">
                <div className="w-24 h-6 bg-pink-500/50 rounded-l flex items-center justify-center text-xs text-pink-200">60</div>
                <div className="w-16 h-6 bg-blue-500/50 rounded-r flex items-center justify-center text-xs text-blue-200">40</div>
              </div>
            </div>
          </div>
          <p className="text-green-400 text-xs mt-2 text-center">✓ Sample mirrors population proportions</p>
        </div>

        {/* Method Steps - Click to reveal */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <ListOrdered className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-bold text-green-400">Method: Click each step to reveal</h3>
            <div className="flex gap-1 ml-auto">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i < revealedStep ? 'bg-green-400' : 'bg-gray-600'
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
                      ? 'bg-green-900/30 border-green-500/50'
                      : revealedStep === idx
                      ? 'bg-gray-700/50 border-gray-600 hover:border-green-500/50 cursor-pointer animate-pulse'
                      : 'bg-gray-800/30 border-gray-700 opacity-50'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    isRevealed ? 'bg-green-500/30 text-green-400' : 'bg-gray-700 text-gray-500'
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
                      <h4 className="font-bold text-green-400">Strengths</h4>
                    </div>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• <span className="font-bold text-green-400">Avoids researcher bias</span></li>
                      <li>• Produces <span className="font-bold text-green-400">representative sample</span></li>
                      <li>• Enables generalisation to population</li>
                    </ul>
                  </div>
                  <div className="bg-red-900/30 rounded-lg p-4 border border-red-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <XCircle className="w-5 h-5 text-red-400" />
                      <h4 className="font-bold text-red-400">Limitation</h4>
                    </div>
                    <p className="text-gray-300 text-sm">
                      <span className="font-bold text-red-400">Cannot reflect ALL ways people differ</span> - complete representation is impossible (can't stratify by every characteristic).
                    </p>
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
                  <p className="text-amber-300 mb-3">Studying stress levels by year group (100 student sample):</p>
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-gray-400">
                          <th className="text-left">Year</th>
                          <th>Population %</th>
                          <th>Sample needed</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr><td>Year 7</td><td className="text-center">20%</td><td className="text-center text-green-400">20</td></tr>
                        <tr><td>Year 8</td><td className="text-center">20%</td><td className="text-center text-green-400">20</td></tr>
                        <tr><td>Year 9</td><td className="text-center">20%</td><td className="text-center text-green-400">20</td></tr>
                        <tr><td>Year 10</td><td className="text-center">20%</td><td className="text-center text-green-400">20</td></tr>
                        <tr><td>Year 11</td><td className="text-center">20%</td><td className="text-center text-green-400">20</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-400 text-xs mt-2">Then randomly select 20 from each year group</p>
                </div>
              )}
            </button>
          </div>
        )}

        {/* Exam tip */}
        <div className="mt-4 bg-cyan-900/30 rounded-lg p-3 border border-cyan-500/30">
          <p className="text-cyan-300 text-sm">
            <span className="font-bold">📝 Exam tip:</span> "Strata" = layers/groups. The key is that your sample proportions MATCH the population proportions!
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

export default StratifiedSamplingTeach
