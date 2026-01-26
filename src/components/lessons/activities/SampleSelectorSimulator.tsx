import { useState, useEffect } from 'react'
import { Users, Shuffle, Grid, Layers, Hand, Megaphone, Check, RotateCcw, Trophy, BarChart3, AlertTriangle } from 'lucide-react'

interface Person {
  id: number
  age: 'young' | 'middle' | 'older'
  gender: 'male' | 'female'
  occupation: 'student' | 'worker' | 'retired'
  available: boolean // for opportunity sampling
  volunteer: boolean // for volunteer sampling
  x: number
  y: number
}

interface SamplingMethod {
  id: string
  name: string
  icon: JSX.Element
  description: string
  color: string
  instructions: string
}

const samplingMethods: SamplingMethod[] = [
  {
    id: 'random',
    name: 'Random Sampling',
    icon: <Shuffle className="w-5 h-5" />,
    description: 'Every member has equal chance of selection',
    color: 'bg-blue-500',
    instructions: 'Click "Randomise" to select 10 participants randomly from the population.'
  },
  {
    id: 'systematic',
    name: 'Systematic Sampling',
    icon: <Grid className="w-5 h-5" />,
    description: 'Select every nth person from a list',
    color: 'bg-green-500',
    instructions: 'Population listed alphabetically. Every 5th person will be selected.'
  },
  {
    id: 'stratified',
    name: 'Stratified Sampling',
    icon: <Layers className="w-5 h-5" />,
    description: 'Proportional selection from subgroups',
    color: 'bg-purple-500',
    instructions: 'Set proportions for each age group to match the population. Total must equal 10.'
  },
  {
    id: 'opportunity',
    name: 'Opportunity Sampling',
    icon: <Hand className="w-5 h-5" />,
    description: 'Select whoever is available',
    color: 'bg-amber-500',
    instructions: 'Only people near the entrance (highlighted) are available. Click to select 10.'
  },
  {
    id: 'volunteer',
    name: 'Volunteer Sampling',
    icon: <Megaphone className="w-5 h-5" />,
    description: 'Participants self-select to take part',
    color: 'bg-pink-500',
    instructions: 'Only those who raised their hands volunteered. These are your sample.'
  }
]

// Generate a diverse population
const generatePopulation = (): Person[] => {
  const population: Person[] = []
  const ageGroups: Array<'young' | 'middle' | 'older'> = ['young', 'middle', 'older']
  const genders: Array<'male' | 'female'> = ['male', 'female']
  const occupations: Record<string, Array<'student' | 'worker' | 'retired'>> = {
    young: ['student', 'student', 'worker'],
    middle: ['worker', 'worker', 'worker'],
    older: ['worker', 'retired', 'retired']
  }

  let id = 0
  // Create 50 people with realistic distribution
  // Young: 15, Middle: 20, Older: 15
  const distribution = { young: 15, middle: 20, older: 15 }
  
  for (const age of ageGroups) {
    for (let i = 0; i < distribution[age]; i++) {
      const gender = genders[Math.floor(Math.random() * genders.length)]
      const occOptions = occupations[age]
      const occupation = occOptions[Math.floor(Math.random() * occOptions.length)]
      
      // Position people - those with x < 25 are "near entrance" (available)
      const x = Math.random() * 90 + 5
      const y = Math.random() * 80 + 10
      
      population.push({
        id: id++,
        age,
        gender,
        occupation,
        available: x < 30, // Only people near entrance
        volunteer: Math.random() < 0.25, // 25% volunteer
        x,
        y
      })
    }
  }
  
  return population.sort(() => Math.random() - 0.5)
}

interface SampleSelectorSimulatorProps {
  isPresenting?: boolean
}

export default function SampleSelectorSimulator({ isPresenting = false }: SampleSelectorSimulatorProps) {
  const [population] = useState<Person[]>(() => generatePopulation())
  const [currentMethod, setCurrentMethod] = useState<string>('random')
  const [selectedPeople, setSelectedPeople] = useState<number[]>([])
  const [stratifiedCounts, setStratifiedCounts] = useState({ young: 3, middle: 4, older: 3 })
  const [showResults, setShowResults] = useState(false)
  const [completedMethods, setCompletedMethods] = useState<string[]>([])

  const method = samplingMethods.find(m => m.id === currentMethod)!

  const calculateRepresentativeness = () => {
    if (selectedPeople.length === 0) return 0
    
    const sample = selectedPeople.map(id => population.find(p => p.id === id)!)
    
    // Population proportions
    const popYoung = population.filter(p => p.age === 'young').length / population.length
    const popMiddle = population.filter(p => p.age === 'middle').length / population.length
    const popOlder = population.filter(p => p.age === 'older').length / population.length
    const popMale = population.filter(p => p.gender === 'male').length / population.length
    
    // Sample proportions
    const sampleYoung = sample.filter(p => p.age === 'young').length / sample.length
    const sampleMiddle = sample.filter(p => p.age === 'middle').length / sample.length
    const sampleOlder = sample.filter(p => p.age === 'older').length / sample.length
    const sampleMale = sample.filter(p => p.gender === 'male').length / sample.length
    
    // Calculate deviation
    const deviation = 
      Math.abs(popYoung - sampleYoung) +
      Math.abs(popMiddle - sampleMiddle) +
      Math.abs(popOlder - sampleOlder) +
      Math.abs(popMale - sampleMale)
    
    // Convert to percentage (0 deviation = 100%, max deviation ≈ 2 = 0%)
    return Math.max(0, Math.round((1 - deviation / 2) * 100))
  }

  const handleRandomSample = () => {
    const shuffled = [...population].sort(() => Math.random() - 0.5)
    setSelectedPeople(shuffled.slice(0, 10).map(p => p.id))
  }

  const handleSystematicSample = () => {
    const sorted = [...population].sort((a, b) => a.id - b.id)
    const selected: number[] = []
    for (let i = 4; i < sorted.length && selected.length < 10; i += 5) {
      selected.push(sorted[i].id)
    }
    setSelectedPeople(selected)
  }

  const handleStratifiedSample = () => {
    const young = population.filter(p => p.age === 'young').sort(() => Math.random() - 0.5)
    const middle = population.filter(p => p.age === 'middle').sort(() => Math.random() - 0.5)
    const older = population.filter(p => p.age === 'older').sort(() => Math.random() - 0.5)
    
    const selected = [
      ...young.slice(0, stratifiedCounts.young),
      ...middle.slice(0, stratifiedCounts.middle),
      ...older.slice(0, stratifiedCounts.older)
    ].map(p => p.id)
    
    setSelectedPeople(selected)
  }

  const handleOpportunitySample = (personId: number) => {
    const person = population.find(p => p.id === personId)
    if (!person?.available) return
    
    if (selectedPeople.includes(personId)) {
      setSelectedPeople(prev => prev.filter(id => id !== personId))
    } else if (selectedPeople.length < 10) {
      setSelectedPeople(prev => [...prev, personId])
    }
  }

  const handleVolunteerSample = () => {
    const volunteers = population.filter(p => p.volunteer).map(p => p.id)
    setSelectedPeople(volunteers)
  }

  const executeSampling = () => {
    switch (currentMethod) {
      case 'random':
        handleRandomSample()
        break
      case 'systematic':
        handleSystematicSample()
        break
      case 'stratified':
        handleStratifiedSample()
        break
      case 'volunteer':
        handleVolunteerSample()
        break
    }
  }

  const submitSample = () => {
    setShowResults(true)
    if (!completedMethods.includes(currentMethod)) {
      setCompletedMethods(prev => [...prev, currentMethod])
    }
  }

  const nextMethod = () => {
    const currentIdx = samplingMethods.findIndex(m => m.id === currentMethod)
    if (currentIdx < samplingMethods.length - 1) {
      setCurrentMethod(samplingMethods[currentIdx + 1].id)
      setSelectedPeople([])
      setShowResults(false)
    }
  }

  const resetMethod = () => {
    setSelectedPeople([])
    setShowResults(false)
  }

  const getAgeColor = (age: string) => {
    switch (age) {
      case 'young': return 'bg-green-400'
      case 'middle': return 'bg-blue-400'
      case 'older': return 'bg-purple-400'
      default: return 'bg-gray-400'
    }
  }

  const getPersonEmoji = (person: Person) => {
    const base = person.gender === 'male' ? '👨' : '👩'
    if (person.age === 'older') return person.gender === 'male' ? '👴' : '👵'
    if (person.occupation === 'student') return '🧑‍🎓'
    return base
  }

  const representativeness = calculateRepresentativeness()
  const totalStratified = stratifiedCounts.young + stratifiedCounts.middle + stratifiedCounts.older

  const allCompleted = completedMethods.length === 5

  if (allCompleted && showResults) {
    return (
      <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-emerald-900/20 to-gray-900 flex items-center justify-center`}>
        <div className="text-center animate-fadeIn max-w-lg">
          <Trophy className="w-20 h-20 text-amber-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">All Methods Explored!</h2>
          <p className="text-gray-300 mb-6">
            You've practiced all 5 sampling methods and seen how each produces different samples with varying representativeness.
          </p>
          <div className="bg-gray-800/50 rounded-xl p-4 mb-6 text-left">
            <h4 className="text-white font-semibold mb-3">Key Takeaways:</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>✓ <span className="text-blue-400">Random</span> gives everyone equal chance but may still produce unrepresentative samples</li>
              <li>✓ <span className="text-green-400">Systematic</span> is easy but depends on list order</li>
              <li>✓ <span className="text-purple-400">Stratified</span> ensures proportional subgroups but needs population data</li>
              <li>✓ <span className="text-amber-400">Opportunity</span> is quick but very biased</li>
              <li>✓ <span className="text-pink-400">Volunteer</span> produces self-selection bias</li>
            </ul>
          </div>
          <button
            onClick={() => {
              setCompletedMethods([])
              setCurrentMethod('random')
              setSelectedPeople([])
              setShowResults(false)
            }}
            className="flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-semibold transition-all mx-auto"
          >
            <RotateCcw className="w-5 h-5" />
            Practice Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-4 bg-gradient-to-br from-gray-900 via-emerald-900/20 to-gray-900 overflow-auto`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-500/20 p-2 rounded-xl">
              <Users className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Sample Selector Simulator</h2>
              <p className="text-gray-400 text-sm">Practice different sampling methods</p>
            </div>
          </div>
          <div className="flex gap-2">
            {samplingMethods.map((m) => (
              <button
                key={m.id}
                onClick={() => {
                  setCurrentMethod(m.id)
                  setSelectedPeople([])
                  setShowResults(false)
                }}
                className={`p-2 rounded-lg transition-all ${
                  currentMethod === m.id 
                    ? `${m.color} text-white` 
                    : completedMethods.includes(m.id)
                      ? 'bg-green-600/50 text-green-300'
                      : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                }`}
                title={m.name}
              >
                {completedMethods.includes(m.id) && currentMethod !== m.id ? <Check className="w-5 h-5" /> : m.icon}
              </button>
            ))}
          </div>
        </div>

        {/* Method info */}
        <div className={`${method.color}/20 rounded-xl p-4 border border-${method.color.replace('bg-', '')}/30 mb-4`}>
          <div className="flex items-center gap-3 mb-2">
            <div className={`${method.color} p-2 rounded-lg`}>{method.icon}</div>
            <div>
              <h3 className="text-lg font-bold text-white">{method.name}</h3>
              <p className="text-gray-400 text-sm">{method.description}</p>
            </div>
          </div>
          <p className="text-gray-300 text-sm">{method.instructions}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Population visualization */}
          <div className="lg:col-span-2 bg-gray-800/30 rounded-xl p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-white font-semibold">Population (N=50)</h4>
              <div className="flex gap-3 text-xs">
                <span className="flex items-center gap-1"><span className="w-3 h-3 bg-green-400 rounded-full"></span> Young (18-30)</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 bg-blue-400 rounded-full"></span> Middle (31-50)</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 bg-purple-400 rounded-full"></span> Older (51+)</span>
              </div>
            </div>
            
            {/* Population area */}
            <div className="relative bg-gray-900/50 rounded-lg h-[300px] overflow-hidden">
              {/* Entrance highlight for opportunity sampling */}
              {currentMethod === 'opportunity' && (
                <div className="absolute left-0 top-0 bottom-0 w-[30%] bg-amber-500/10 border-r-2 border-amber-500/30">
                  <span className="absolute top-2 left-2 text-amber-400 text-xs">📍 Entrance</span>
                </div>
              )}
              
              {/* People */}
              {population.map((person) => {
                const isSelected = selectedPeople.includes(person.id)
                const isAvailable = currentMethod === 'opportunity' ? person.available : true
                const isVolunteer = currentMethod === 'volunteer' ? person.volunteer : false
                
                return (
                  <button
                    key={person.id}
                    onClick={() => currentMethod === 'opportunity' && handleOpportunitySample(person.id)}
                    disabled={currentMethod !== 'opportunity' || !isAvailable || showResults}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all text-2xl
                      ${isSelected ? 'scale-125 z-10' : 'scale-100'}
                      ${currentMethod === 'opportunity' && !isAvailable ? 'opacity-40' : ''}
                      ${currentMethod === 'volunteer' && !isVolunteer ? 'opacity-30' : ''}
                      ${currentMethod === 'opportunity' && isAvailable && !showResults ? 'cursor-pointer hover:scale-110' : 'cursor-default'}
                    `}
                    style={{ left: `${person.x}%`, top: `${person.y}%` }}
                  >
                    <span className={`relative ${isSelected ? 'ring-4 ring-emerald-400 rounded-full' : ''}`}>
                      {getPersonEmoji(person)}
                      {currentMethod === 'volunteer' && isVolunteer && (
                        <span className="absolute -top-2 -right-2 text-xs">✋</span>
                      )}
                    </span>
                    <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full ${getAgeColor(person.age)}`}></span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Controls & Results */}
          <div className="space-y-4">
            {/* Stratified controls */}
            {currentMethod === 'stratified' && !showResults && (
              <div className="bg-gray-800/50 rounded-xl p-4 border border-purple-500/30">
                <h4 className="text-white font-semibold mb-3">Set Proportions</h4>
                <div className="space-y-3">
                  {(['young', 'middle', 'older'] as const).map((age) => {
                    const popCount = population.filter(p => p.age === age).length
                    const popPercent = Math.round((popCount / population.length) * 100)
                    return (
                      <div key={age} className="flex items-center gap-3">
                        <span className={`w-3 h-3 rounded-full ${getAgeColor(age)}`}></span>
                        <span className="text-gray-300 text-sm flex-1 capitalize">{age} ({popPercent}%)</span>
                        <input
                          type="number"
                          min="0"
                          max="10"
                          value={stratifiedCounts[age]}
                          onChange={(e) => setStratifiedCounts(prev => ({
                            ...prev,
                            [age]: Math.max(0, Math.min(10, parseInt(e.target.value) || 0))
                          }))}
                          className="w-16 bg-gray-700 text-white px-2 py-1 rounded text-center"
                        />
                      </div>
                    )
                  })}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-700">
                    <span className="text-gray-400 text-sm">Total:</span>
                    <span className={`font-bold ${totalStratified === 10 ? 'text-green-400' : 'text-red-400'}`}>
                      {totalStratified}/10
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Sample info */}
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
              <h4 className="text-white font-semibold mb-3">Your Sample (n={selectedPeople.length})</h4>
              {selectedPeople.length > 0 ? (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Young:</span>
                    <span className="text-green-400">
                      {selectedPeople.filter(id => population.find(p => p.id === id)?.age === 'young').length}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Middle:</span>
                    <span className="text-blue-400">
                      {selectedPeople.filter(id => population.find(p => p.id === id)?.age === 'middle').length}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Older:</span>
                    <span className="text-purple-400">
                      {selectedPeople.filter(id => population.find(p => p.id === id)?.age === 'older').length}
                    </span>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500 text-sm italic">No participants selected yet</p>
              )}
            </div>

            {/* Results */}
            {showResults && (
              <div className="bg-gray-800/50 rounded-xl p-4 border border-emerald-500/30 animate-fadeIn">
                <div className="flex items-center gap-2 mb-3">
                  <BarChart3 className="w-5 h-5 text-emerald-400" />
                  <h4 className="text-white font-semibold">Representativeness</h4>
                </div>
                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Score:</span>
                    <span className={`font-bold ${representativeness >= 70 ? 'text-green-400' : representativeness >= 40 ? 'text-amber-400' : 'text-red-400'}`}>
                      {representativeness}%
                    </span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all ${representativeness >= 70 ? 'bg-green-500' : representativeness >= 40 ? 'bg-amber-500' : 'bg-red-500'}`}
                      style={{ width: `${representativeness}%` }}
                    />
                  </div>
                </div>
                {representativeness < 50 && (
                  <div className="flex items-start gap-2 text-amber-400 text-xs">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>This sample may not represent the population well. Consider biases in this method.</span>
                  </div>
                )}
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col gap-2">
              {!showResults ? (
                <>
                  {currentMethod !== 'opportunity' && (
                    <button
                      onClick={executeSampling}
                      disabled={currentMethod === 'stratified' && totalStratified !== 10}
                      className={`flex items-center justify-center gap-2 w-full py-2.5 ${method.color} hover:opacity-90 disabled:bg-gray-700 disabled:text-gray-500 text-white rounded-lg font-semibold transition-all`}
                    >
                      {method.icon}
                      {currentMethod === 'volunteer' ? 'Show Volunteers' : 'Generate Sample'}
                    </button>
                  )}
                  <button
                    onClick={submitSample}
                    disabled={selectedPeople.length === 0}
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:bg-gray-700 disabled:text-gray-500 text-white rounded-lg font-semibold transition-all"
                  >
                    <Check className="w-5 h-5" />
                    Analyse Sample
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={resetMethod}
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-all"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Try Again
                  </button>
                  <button
                    onClick={nextMethod}
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold transition-all"
                  >
                    Next Method
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
