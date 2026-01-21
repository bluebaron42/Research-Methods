import React, { useState } from 'react'

interface Props {
  isPresenting: boolean
}

export const VariableDetectiveALevel: React.FC<Props> = ({ isPresenting }) => {
  // Research topics by psychology area
  const researchTopics = {
    memory: [
      { name: 'Word List Recall', description: 'Testing how many words participants remember from a list' },
      { name: 'Serial Position Effect', description: 'Do we remember words better from the start or end of a list?' },
      { name: 'Chunking Study', description: 'Does grouping information improve recall?' }
    ],
    social: [
      { name: 'Conformity Experiment', description: 'Do people change their answers when others disagree?' },
      { name: 'Bystander Effect', description: 'Does group size affect helping behaviour?' },
      { name: 'Authority Obedience', description: 'How far will people go when instructed by authority?' }
    ],
    cognitive: [
      { name: 'Stroop Effect', description: 'Conflict between reading words and naming colours' },
      { name: 'Dual Task Performance', description: 'Can we do two things at once effectively?' },
      { name: 'Attention & Distraction', description: 'How does noise affect concentration?' }
    ]
  }

  const ivOptions = {
    memory: ['List length (10 vs 20 words)', 'Presentation time (1s vs 3s)', 'Word type (concrete vs abstract)', 'Rehearsal allowed (yes vs no)'],
    social: ['Group size (1 vs 5 confederates)', 'Authority figure present (yes vs no)', 'Similarity to confederates (high vs low)', 'Time pressure (rushed vs relaxed)'],
    cognitive: ['Congruent vs incongruent stimuli', 'Background noise (silence vs 70dB)', 'Task difficulty (easy vs hard)', 'Caffeine condition (with vs without)']
  }

  const dvMeasures = {
    memory: ['Number of words recalled', 'Recall accuracy (%)', 'Time to recall (seconds)', 'Order accuracy score'],
    social: ['Conformity rate (%)', 'Response time (seconds)', 'Helping behaviour (yes/no)', 'Obedience level (1-10)'],
    cognitive: ['Reaction time (ms)', 'Error rate (%)', 'Task completion time', 'Accuracy score']
  }

  const [selectedArea, setSelectedArea] = useState<'memory' | 'social' | 'cognitive' | null>(null)
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
  const [selectedIV, setSelectedIV] = useState<string | null>(null)
  const [selectedDV, setSelectedDV] = useState<string | null>(null)
  const [showSimulation, setShowSimulation] = useState(false)
  const [simulationData, setSimulationData] = useState<{group1: number[], group2: number[]} | null>(null)

  const runSimulation = () => {
    const generateData = (mean: number, variance: number, n: number) => 
      Array.from({ length: n }, () => Math.round(mean + (Math.random() - 0.5) * variance * 2))
    
    const group1 = generateData(65, 15, 10)
    const group2 = generateData(78, 12, 10)
    setSimulationData({ group1, group2 })
    setShowSimulation(true)
  }

  const resetStudy = () => {
    setSelectedArea(null)
    setSelectedTopic(null)
    setSelectedIV(null)
    setSelectedDV(null)
    setShowSimulation(false)
    setSimulationData(null)
  }

  return (
    <div className="flex flex-col h-full overflow-auto custom-scrollbar animate-fadeIn p-5">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-bold text-rose-400 mb-0.5 flex items-center gap-2">
            <span className="w-1 h-5 bg-rose-500 rounded-full"></span>
            🔬 Research Scenario Builder
          </h2>
          <p className="text-sm text-gray-500">Design your own psychology study step-by-step</p>
        </div>
        {selectedArea && (
          <button onClick={resetStudy} className="px-3 py-1.5 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg text-xs text-gray-400">
            Start Over
          </button>
        )}
      </div>

      {/* Step 1: Choose Research Area */}
      {!selectedArea && (
        <div className="mb-4">
          <h3 className="text-sm font-bold text-amber-400 mb-3">Step 1: Choose a Research Area</h3>
          <div className="grid grid-cols-3 gap-3">
            {(['memory', 'social', 'cognitive'] as const).map((area, idx) => (
              <button
                key={area}
                onClick={() => setSelectedArea(area)}
                className="p-4 bg-gray-800/50 border border-gray-700/50 rounded-lg hover:border-rose-500/50 transition-all text-left card-hover animate-slide-in-left"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="text-2xl mb-2">{area === 'memory' ? '🧠' : area === 'social' ? '👥' : '⚡'}</div>
                <h4 className="font-bold text-white capitalize mb-1 text-sm">{area} Psychology</h4>
                <p className="text-xs text-gray-500">
                  {area === 'memory' ? 'How we encode, store & retrieve information' : 
                   area === 'social' ? 'How others influence our behaviour' : 
                   'Mental processes like attention & perception'}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Select Topic */}
      {selectedArea && !selectedTopic && (
        <div className="mb-4 animate-fadeIn">
          <h3 className="text-sm font-bold text-amber-400 mb-3">Step 2: Select a Research Topic</h3>
          <div className="grid grid-cols-3 gap-3">
            {researchTopics[selectedArea].map((topic, idx) => (
              <button
                key={topic.name}
                onClick={() => setSelectedTopic(topic.name)}
                className="p-4 bg-gray-800/50 border border-gray-700/50 rounded-lg hover:border-blue-500/50 transition-all text-left card-hover animate-slide-in-left"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <h4 className="font-bold text-white mb-1 text-sm">{topic.name}</h4>
                <p className="text-xs text-gray-500">{topic.description}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Choose IV */}
      {selectedTopic && !selectedIV && (
        <div className="mb-4 animate-fadeIn">
          <div className="glass-clean rounded-lg p-3 mb-3">
            <p className="text-xs text-gray-400"><span className="text-rose-400 font-bold">Your Study:</span> {selectedTopic}</p>
          </div>
          <h3 className="text-sm font-bold text-amber-400 mb-2">Step 3: Choose Your Independent Variable (IV)</h3>
          <p className="text-xs text-gray-500 mb-3">The IV is what you MANIPULATE or CHANGE in your experiment</p>
          <div className="grid grid-cols-2 gap-2">
            {ivOptions[selectedArea!].map((iv, idx) => (
              <button
                key={iv}
                onClick={() => setSelectedIV(iv)}
                className="p-3 bg-gray-800/50 border border-gray-700/50 rounded-lg hover:border-blue-500/50 transition-all text-left card-hover animate-slide-in-left"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <p className="text-white font-medium text-sm">{iv}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 4: Choose DV */}
      {selectedIV && !selectedDV && (
        <div className="mb-4 animate-fadeIn">
          <div className="glass-clean rounded-lg p-3 mb-3">
            <p className="text-xs text-gray-400"><span className="text-rose-400 font-bold">Study:</span> {selectedTopic}</p>
            <p className="text-xs text-gray-400"><span className="text-blue-400 font-bold">IV:</span> {selectedIV}</p>
          </div>
          <h3 className="text-sm font-bold text-amber-400 mb-2">Step 4: Choose Your Dependent Variable (DV)</h3>
          <p className="text-xs text-gray-500 mb-3">The DV is what you MEASURE - the outcome of your experiment</p>
          <div className="grid grid-cols-2 gap-2">
            {dvMeasures[selectedArea!].map((dv, idx) => (
              <button
                key={dv}
                onClick={() => setSelectedDV(dv)}
                className="p-3 bg-gray-800/50 border border-gray-700/50 rounded-lg hover:border-cyan-500/50 transition-all text-left card-hover animate-slide-in-left"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <p className="text-white font-medium text-sm">{dv}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 5: Review & Simulate */}
      {selectedDV && !showSimulation && (
        <div className="animate-fadeIn">
          <h3 className="text-sm font-bold text-green-400 mb-3">✓ Your Research Design</h3>
          <div className="glass-clean border border-green-500/30 rounded-lg p-4 mb-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-xs text-gray-500 uppercase mb-0.5">Research Area</p>
                <p className="text-white font-bold capitalize">{selectedArea} Psychology</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase mb-0.5">Topic</p>
                <p className="text-white font-bold">{selectedTopic}</p>
              </div>
              <div>
                <p className="text-xs text-blue-400 uppercase mb-0.5">Independent Variable (IV)</p>
                <p className="text-white font-bold">{selectedIV}</p>
              </div>
              <div>
                <p className="text-xs text-cyan-400 uppercase mb-0.5">Dependent Variable (DV)</p>
                <p className="text-white font-bold">{selectedDV}</p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-700/50">
              <p className="text-xs text-amber-400 uppercase mb-1">Generated Hypothesis</p>
              <p className="text-gray-300 italic text-sm">
                "Participants in the {selectedIV?.split('(')[0].trim()} condition will show different {selectedDV?.toLowerCase()} compared to the control condition."
              </p>
            </div>
          </div>
          <button
            onClick={runSimulation}
            className="w-full py-3 bg-rose-600 hover:bg-rose-500 rounded-lg font-medium text-white text-sm transition-all shadow-md shadow-rose-600/20"
          >
            🧪 Run Simulation with Virtual Participants
          </button>
        </div>
      )}

      {/* Simulation Results */}
      {showSimulation && simulationData && (
        <div className="animate-fadeIn">
          <h3 className="text-sm font-bold text-green-400 mb-3 flex items-center gap-2">
            <span className="w-1 h-4 bg-green-500 rounded-full"></span>
            📊 Simulation Results
          </h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg p-4">
              <h4 className="text-blue-400 font-bold mb-2 text-xs">Condition 1 (Control)</h4>
              <div className="flex flex-wrap gap-1 mb-2">
                {simulationData.group1.map((score, i) => (
                  <span key={i} className="px-2 py-0.5 bg-blue-800/50 rounded text-blue-200 text-xs">{score}</span>
                ))}
              </div>
              <p className="text-blue-300 text-xs">Mean: <span className="font-bold">{(simulationData.group1.reduce((a,b) => a+b, 0) / simulationData.group1.length).toFixed(1)}</span></p>
            </div>
            <div className="bg-rose-900/20 border border-rose-500/20 rounded-lg p-4">
              <h4 className="text-rose-400 font-bold mb-2 text-xs">Condition 2 (Experimental)</h4>
              <div className="flex flex-wrap gap-1 mb-2">
                {simulationData.group2.map((score, i) => (
                  <span key={i} className="px-2 py-0.5 bg-rose-800/50 rounded text-rose-200 text-xs">{score}</span>
                ))}
              </div>
              <p className="text-rose-300 text-xs">Mean: <span className="font-bold">{(simulationData.group2.reduce((a,b) => a+b, 0) / simulationData.group2.length).toFixed(1)}</span></p>
            </div>
          </div>
          <div className="glass-clean rounded-lg p-4">
            <h4 className="text-amber-400 font-bold mb-2 text-xs">What does this tell us?</h4>
            <p className="text-gray-300 text-xs leading-relaxed">
              The experimental group (M = {(simulationData.group2.reduce((a,b) => a+b, 0) / simulationData.group2.length).toFixed(1)}) 
              showed higher scores than the control group (M = {(simulationData.group1.reduce((a,b) => a+b, 0) / simulationData.group1.length).toFixed(1)}). 
              This suggests the IV ({selectedIV}) may have affected the DV ({selectedDV}).
            </p>
          </div>
          <button
            onClick={resetStudy}
            className="w-full mt-4 py-2.5 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg font-medium text-white text-sm transition-all"
          >
            Design Another Study
          </button>
        </div>
      )}
    </div>
  )
}
