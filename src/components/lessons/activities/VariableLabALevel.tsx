import React, { useState } from 'react'

interface Props {
  isPresenting: boolean
}

export const VariableLabALevel: React.FC<Props> = ({ isPresenting }) => {
  // Available experiments
  const experiments = [
    {
      id: 'stroop',
      name: 'Stroop Effect',
      icon: '🎨',
      description: 'Test how conflicting information affects processing speed',
      iv: 'Word-colour congruence',
      ivLevels: ['Congruent (word matches colour)', 'Incongruent (word differs from colour)'],
      dv: 'Reaction time (ms)',
      baseTime: 450,
      effect: 150
    },
    {
      id: 'memory',
      name: 'Memory Span Test',
      icon: '🧠',
      description: 'How does list length affect recall accuracy?',
      iv: 'List length',
      ivLevels: ['Short list (5 items)', 'Long list (10 items)'],
      dv: 'Items correctly recalled',
      baseScore: 4.2,
      effect: -1.8
    },
    {
      id: 'attention',
      name: 'Selective Attention',
      icon: '👁️',
      description: 'Does background noise impair concentration?',
      iv: 'Background noise level',
      ivLevels: ['Silent condition', 'Noisy condition (65dB)'],
      dv: 'Accuracy score (%)',
      baseScore: 85,
      effect: -15
    },
    {
      id: 'caffeine',
      name: 'Caffeine & Alertness',
      icon: '☕',
      description: 'Does caffeine improve reaction time?',
      iv: 'Caffeine intake',
      ivLevels: ['Placebo (no caffeine)', 'Caffeine (200mg)'],
      dv: 'Reaction time (ms)',
      baseTime: 380,
      effect: -45
    }
  ]

  const [selectedExperiment, setSelectedExperiment] = useState<string | null>(null)
  const [currentCondition, setCurrentCondition] = useState<0 | 1>(0)
  const [trials, setTrials] = useState<{condition: number, result: number}[]>([])
  const [isRunning, setIsRunning] = useState(false)
  const [participantCount, setParticipantCount] = useState(0)

  const currentExp = experiments.find(e => e.id === selectedExperiment)

  const runTrial = () => {
    if (!currentExp) return
    setIsRunning(true)
    
    setTimeout(() => {
      const baseValue = currentExp.baseTime || currentExp.baseScore || 0
      const effect = currentCondition === 1 ? (currentExp.effect || 0) : 0
      const noise = (Math.random() - 0.5) * 40
      const result = Math.round(baseValue + effect + noise)
      
      setTrials(prev => [...prev, { condition: currentCondition, result }])
      setParticipantCount(prev => prev + 1)
      setIsRunning(false)
    }, 1500)
  }

  const getConditionData = (cond: number) => trials.filter(t => t.condition === cond).map(t => t.result)
  const getMean = (data: number[]) => data.length ? (data.reduce((a,b) => a+b, 0) / data.length).toFixed(1) : '-'

  const resetExperiment = () => {
    setSelectedExperiment(null)
    setCurrentCondition(0)
    setTrials([])
    setParticipantCount(0)
  }

  return (
    <div className="flex flex-col h-full overflow-auto custom-scrollbar animate-fadeIn p-5">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-bold text-green-400 mb-0.5 flex items-center gap-2">
            <span className="w-1 h-5 bg-green-500 rounded-full"></span>
            🧪 Virtual Psychology Lab
          </h2>
          <p className="text-sm text-gray-500">Conduct experiments with virtual participants</p>
        </div>
        {selectedExperiment && (
          <button onClick={resetExperiment} className="px-3 py-1.5 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg text-xs text-gray-400">
            Choose Different Experiment
          </button>
        )}
      </div>

      {/* Experiment Selection */}
      {!selectedExperiment && (
        <div>
          <h3 className="text-sm font-bold text-amber-400 mb-3">Choose an Experiment to Run</h3>
          <div className="grid grid-cols-2 gap-3">
            {experiments.map((exp, idx) => (
              <button
                key={exp.id}
                onClick={() => setSelectedExperiment(exp.id)}
                className="p-4 bg-gray-800/50 border border-gray-700/50 rounded-lg hover:border-green-500/50 transition-all text-left card-hover animate-slide-in-left"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="text-2xl mb-2">{exp.icon}</div>
                <h4 className="font-bold text-white text-sm mb-1">{exp.name}</h4>
                <p className="text-xs text-gray-500 mb-2">{exp.description}</p>
                <div className="text-xs space-y-0.5">
                  <p className="text-blue-400"><strong>IV:</strong> {exp.iv}</p>
                  <p className="text-pink-400"><strong>DV:</strong> {exp.dv}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Active Experiment */}
      {currentExp && (
        <div className="animate-fadeIn space-y-4">
          {/* Experiment Info */}
          <div className="glass-clean rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{currentExp.icon}</span>
              <div>
                <h3 className="text-base font-bold text-white">{currentExp.name}</h3>
                <p className="text-xs text-gray-500">{currentExp.description}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg p-2.5">
                <p className="text-blue-400 font-bold text-xs">Independent Variable (IV)</p>
                <p className="text-gray-300">{currentExp.iv}</p>
              </div>
              <div className="bg-pink-900/20 border border-pink-500/20 rounded-lg p-2.5">
                <p className="text-pink-400 font-bold text-xs">Dependent Variable (DV)</p>
                <p className="text-gray-300">{currentExp.dv}</p>
              </div>
            </div>
          </div>

          {/* Condition Selector */}
          <div>
            <h4 className="text-xs font-bold text-amber-400 mb-2">Select Condition to Test</h4>
            <div className="grid grid-cols-2 gap-2">
              {currentExp.ivLevels.map((level, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentCondition(idx as 0 | 1)}
                  className={`p-3 rounded-lg border transition-all text-sm ${
                    currentCondition === idx
                      ? 'border-green-500/50 bg-green-600/20 text-white'
                      : 'border-gray-700/50 bg-gray-800/50 text-gray-400 hover:border-gray-600'
                  }`}
                >
                  <p className="font-bold text-xs">Condition {idx + 1}</p>
                  <p className="text-xs opacity-80">{level}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Run Trial Button */}
          <button
            onClick={runTrial}
            disabled={isRunning}
            className={`w-full py-3 rounded-lg font-medium text-sm transition-all ${
              isRunning
                ? 'bg-gray-700/50 text-gray-500 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-500 text-white shadow-md shadow-green-600/20'
            }`}
          >
            {isRunning ? '⏳ Testing Participant...' : `🧑‍🔬 Run Trial (Participant ${participantCount + 1})`}
          </button>

          {/* Results Table */}
          {trials.length > 0 && (
            <div className="glass-clean rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-1 h-4 bg-amber-500 rounded-full"></span>
                📊 Data Collection
              </h4>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* Condition 1 Data */}
                <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg p-3">
                  <h5 className="text-blue-400 font-bold mb-2 text-xs">Condition 1: {currentExp.ivLevels[0]}</h5>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {getConditionData(0).length > 0 ? (
                      getConditionData(0).map((r, i) => (
                        <span key={i} className="px-1.5 py-0.5 bg-blue-800/50 rounded text-blue-200 text-xs">{r}</span>
                      ))
                    ) : (
                      <span className="text-gray-600 text-xs">No data yet</span>
                    )}
                  </div>
                  <p className="text-blue-300 text-xs">
                    n = {getConditionData(0).length} | Mean = {getMean(getConditionData(0))}
                  </p>
                </div>

                {/* Condition 2 Data */}
                <div className="bg-rose-900/20 border border-rose-500/20 rounded-lg p-3">
                  <h5 className="text-rose-400 font-bold mb-2 text-xs">Condition 2: {currentExp.ivLevels[1]}</h5>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {getConditionData(1).length > 0 ? (
                      getConditionData(1).map((r, i) => (
                        <span key={i} className="px-1.5 py-0.5 bg-rose-800/50 rounded text-rose-200 text-xs">{r}</span>
                      ))
                    ) : (
                      <span className="text-gray-600 text-xs">No data yet</span>
                    )}
                  </div>
                  <p className="text-rose-300 text-xs">
                    n = {getConditionData(1).length} | Mean = {getMean(getConditionData(1))}
                  </p>
                </div>
              </div>

              {/* Analysis */}
              {getConditionData(0).length >= 3 && getConditionData(1).length >= 3 && (
                <div className="bg-amber-900/20 border border-amber-500/20 rounded-lg p-3 animate-scale-up">
                  <h5 className="text-amber-400 font-bold mb-1 text-xs">📈 Analysis</h5>
                  <p className="text-gray-300 text-xs">
                    Condition 1 Mean: <strong>{getMean(getConditionData(0))}</strong> | 
                    Condition 2 Mean: <strong>{getMean(getConditionData(1))}</strong>
                  </p>
                  <p className="text-amber-200 text-xs mt-1">
                    {Number(getMean(getConditionData(1))) < Number(getMean(getConditionData(0)))
                      ? `The IV appears to have decreased the DV by ${(Number(getMean(getConditionData(0))) - Number(getMean(getConditionData(1)))).toFixed(1)} units.`
                      : Number(getMean(getConditionData(1))) > Number(getMean(getConditionData(0)))
                        ? `The IV appears to have increased the DV by ${(Number(getMean(getConditionData(1))) - Number(getMean(getConditionData(0)))).toFixed(1)} units.`
                        : 'The IV does not appear to have affected the DV.'}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
