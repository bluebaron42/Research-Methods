import React, { useState } from 'react'
import { Eye, EyeOff, Lightbulb } from 'lucide-react'

interface Props {
  isPresenting: boolean
}

export const HypothesisWriterASLevel: React.FC<Props> = ({ isPresenting }) => {
  const [isDirectional, setIsDirectional] = useState<boolean | null>(null)
  const [showHypothesis, setShowHypothesis] = useState(false)
  
  // Template options
  const [population, setPopulation] = useState('Students')
  const [condition1, setCondition1] = useState('who revise for 2 hours')
  const [condition2, setCondition2] = useState('who revise for 30 minutes')
  const [outcome, setOutcome] = useState('exam scores')

  const populationOptions = ['Students', 'Participants', 'Adults', 'Children', 'Teenagers']
  const condition1Options = ['who revise for 2 hours', 'who study quietly', 'who take breaks', 'who use flashcards', 'who work in groups']
  const condition2Options = ['who revise for 30 minutes', 'who study with distractions', 'who study continuously', 'who use notes only', 'who work alone']
  const outcomeOptions = ['exam scores', 'reaction times', 'memory recall', 'concentration levels', 'performance']

  const textSize = isPresenting ? 'text-base' : 'text-sm'
  const padding = isPresenting ? 'p-6' : 'p-5'

  const generatedHypothesis = isDirectional
    ? `"${population} ${condition1} will score higher on ${outcome} than ${population.toLowerCase()} ${condition2}"`
    : `"There will be a difference in ${outcome} between ${population.toLowerCase()} ${condition1} and those ${condition2}"`

  return (
    <div className={`w-full h-full ${padding} flex flex-col overflow-auto custom-scrollbar`}>
      <h2 className="text-xl font-bold text-rose-400 mb-1 flex items-center gap-2">
        <span className="w-1 h-5 bg-rose-500 rounded-full"></span>
        Hypothesis Builder
      </h2>
      <p className="text-sm text-gray-500 mb-4">Build directional or non-directional hypotheses</p>

      {/* Type Selection - Clean toggle */}
      <div className="flex gap-2 mb-4 bg-gray-900/50 p-1 rounded-lg">
        <button
          onClick={() => { setIsDirectional(true); setShowHypothesis(false); }}
          className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all duration-300 ${
            isDirectional === true
              ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20'
              : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
          }`}
        >
          Directional →
        </button>
        <button
          onClick={() => { setIsDirectional(false); setShowHypothesis(false); }}
          className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all duration-300 ${
            isDirectional === false
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
              : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
          }`}
        >
          Non-Directional
        </button>
      </div>

      {/* Template Builder - Clean compact style */}
      {isDirectional !== null && (
        <div className="bg-gray-900/40 border border-gray-700/30 rounded-lg p-4 mb-4 animate-fadeIn space-y-4">
          
          {/* Option Groups - More compact */}
          {[
            { label: 'Population', options: populationOptions, value: population, setter: setPopulation, color: 'rose' },
            { label: 'Condition 1 (Group A)', options: condition1Options, value: condition1, setter: setCondition1, color: 'blue' },
            { label: 'Condition 2 (Group B)', options: condition2Options, value: condition2, setter: setCondition2, color: 'cyan' },
            { label: 'Outcome (DV)', options: outcomeOptions, value: outcome, setter: setOutcome, color: 'amber' }
          ].map((group, groupIdx) => (
            <div key={group.label}>
              <label className="block text-xs text-gray-500 mb-1.5 uppercase tracking-wide">{group.label}</label>
              <div className="flex flex-wrap gap-1.5">
                {group.options.map((opt, idx) => (
                  <button
                    key={opt}
                    onClick={() => { group.setter(opt); setShowHypothesis(false); }}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${
                      group.value === opt
                        ? `bg-${group.color}-600 text-white shadow-md shadow-${group.color}-600/20`
                        : 'bg-gray-800/80 text-gray-400 hover:text-gray-200 hover:bg-gray-700/80 border border-gray-700/50'
                    } animate-scale-up`}
                    style={{ animationDelay: `${idx * 0.02}s` }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Click to Reveal - Clean card */}
          <button
            onClick={() => setShowHypothesis(!showHypothesis)}
            className="w-full glass-clean p-3 rounded-lg border-l-2 border-amber-500/60 hover:bg-gray-800/60 transition-all text-left group"
          >
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Generated Hypothesis</p>
              <div className="flex items-center gap-1.5 text-amber-400 text-xs">
                {showHypothesis ? <EyeOff size={14} /> : <Eye size={14} className="animate-subtle-pulse" />}
                <span>{showHypothesis ? 'Hide' : 'Reveal'}</span>
              </div>
            </div>
            {showHypothesis ? (
              <p className="text-sm text-gray-200 italic animate-fadeIn">{generatedHypothesis}</p>
            ) : (
              <div className="h-5 bg-gray-700/50 rounded animate-pulse"></div>
            )}
          </button>
        </div>
      )}

      {/* Example Format - Minimal */}
      {isDirectional !== null && (
        <div className="bg-gray-900/30 border border-gray-700/30 rounded-lg p-3 mb-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Formula</p>
          <div className="bg-gray-800/50 p-2.5 rounded border-l-2 border-gray-600/50">
            <p className="text-xs text-gray-400 italic font-mono">
              {isDirectional
                ? '[Population] [condition 1] will [direction] on [DV] than [population] [condition 2]'
                : 'There will be a difference in [DV] between [population] [condition 1] and those [condition 2]'}
            </p>
          </div>
        </div>
      )}

      {/* Tip Box - Minimal */}
      <div className="mt-auto">
        <div className="glass-clean p-3 rounded-lg flex gap-2 border-l-2 border-blue-500/50">
          <Lightbulb className="text-blue-400 flex-shrink-0 animate-subtle-pulse" size={16} />
          <p className="text-xs text-blue-200/80">
            <span className="font-semibold">Tip:</span> Select options above to build hypothesis combinations, then reveal.
          </p>
        </div>
      </div>
    </div>
  )
}
