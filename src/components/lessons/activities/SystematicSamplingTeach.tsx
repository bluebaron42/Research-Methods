import React, { useState } from 'react'
import { List, CheckCircle2, XCircle, ListOrdered, Lightbulb } from 'lucide-react'

interface SystematicSamplingTeachProps {
  isPresenting?: boolean
}

const SystematicSamplingTeach: React.FC<SystematicSamplingTeachProps> = ({ isPresenting }) => {
  const [revealedStep, setRevealedStep] = useState(0)
  const [showEvaluation, setShowEvaluation] = useState(false)
  const [showExample, setShowExample] = useState(false)

  const steps = [
    { num: 1, text: 'Produce a sampling frame (list in order, e.g., alphabetical)' },
    { num: 2, text: 'Nominate a sampling system (every 3rd, 6th, 8th person)' },
    { num: 3, text: 'Work through the frame until sample is complete' }
  ]

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-3 bg-purple-500/20 px-6 py-3 rounded-full mb-4">
            <List className="w-8 h-8 text-purple-400" />
            <h2 className="text-3xl font-bold text-purple-400">Systematic Sampling</h2>
          </div>
        </div>

        {/* Definition Card */}
        <div className="bg-gray-800/50 rounded-xl p-6 border border-purple-500/30 mb-6">
          <p className="text-xl text-gray-200">
            Every <span className="text-purple-400 font-bold">nth member</span> of the target population is selected (e.g., every 5th pupil on a register).
          </p>
        </div>

        {/* Visual Example */}
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 mb-6">
          <p className="text-gray-400 text-sm mb-2">Example: Every 3rd person selected</p>
          <div className="flex gap-2 flex-wrap justify-center">
            {[1,2,3,4,5,6,7,8,9,10,11,12].map(n => (
              <div 
                key={n} 
                className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${
                  n % 3 === 0 
                    ? 'bg-purple-500/40 text-purple-300 border-2 border-purple-500' 
                    : 'bg-gray-700/50 text-gray-500'
                }`}
              >
                {n}
              </div>
            ))}
          </div>
          <p className="text-purple-400 text-xs mt-2 text-center">Selected: 3, 6, 9, 12</p>
        </div>

        {/* Method Steps - Click to reveal */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <ListOrdered className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-bold text-purple-400">Method: Click each step to reveal</h3>
            <div className="flex gap-1 ml-auto">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i < revealedStep ? 'bg-purple-400' : 'bg-gray-600'
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
                      ? 'bg-purple-900/30 border-purple-500/50'
                      : revealedStep === idx
                      ? 'bg-gray-700/50 border-gray-600 hover:border-purple-500/50 cursor-pointer animate-pulse'
                      : 'bg-gray-800/30 border-gray-700 opacity-50'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    isRevealed ? 'bg-purple-500/30 text-purple-400' : 'bg-gray-700 text-gray-500'
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
                      <li>• Usually fairly representative</li>
                    </ul>
                  </div>
                  <div className="bg-red-900/30 rounded-lg p-4 border border-red-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <XCircle className="w-5 h-5 text-red-400" />
                      <h4 className="font-bold text-red-400">Limitation</h4>
                    </div>
                    <p className="text-gray-300 text-sm">
                      <span className="font-bold text-red-400">Could be unrepresentative</span> if list is organised in a particular way that creates patterns.
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
                  <p className="text-amber-300 mb-3">Selecting from a school register of 300 students (want 30):</p>
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <p className="text-gray-300 text-sm mb-2">
                      <span className="text-purple-400 font-bold">Calculate:</span> 300 ÷ 30 = every <span className="text-purple-400 font-bold">10th</span> student
                    </p>
                    <p className="text-gray-300 text-sm">
                      Select: Student 10, 20, 30, 40, 50... until you have 30
                    </p>
                  </div>
                  <div className="mt-3 bg-red-900/20 rounded-lg p-2 text-xs">
                    <p className="text-red-300">⚠️ <span className="font-bold">Potential problem:</span> If the list alternates boys/girls, selecting every 2nd person would give you only one gender!</p>
                  </div>
                </div>
              )}
            </button>
          </div>
        )}

        {/* Exam tip */}
        <div className="mt-4 bg-cyan-900/30 rounded-lg p-3 border border-cyan-500/30">
          <p className="text-cyan-300 text-sm">
            <span className="font-bold">📝 Exam tip:</span> Systematic sampling is often seen as a 'middle ground' - easier than random but more objective than opportunity sampling.
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

export default SystematicSamplingTeach
