import React, { useState, useMemo, useCallback, useEffect } from 'react'
import { Eye, Clock, CheckCircle, XCircle, Play, Pause, RotateCcw, Award, ClipboardList, Users, Timer } from 'lucide-react'

interface Behaviour {
  id: string
  emoji: string
  name: string
  category: string
}

interface ObservationEvent {
  time: number
  behaviourId: string
  personId: number
}

interface Props {
  isPresenting?: boolean
}

const ObserverTrainingAcademy: React.FC<Props> = ({ isPresenting = false }) => {
  const [phase, setPhase] = useState<'tutorial' | 'practice' | 'results'>('tutorial')
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [observations, setObservations] = useState<ObservationEvent[]>([])
  const [selectedPerson, setSelectedPerson] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)

  const behaviourCategories: Behaviour[] = useMemo(() => [
    { id: 'talk', emoji: '💬', name: 'Talking', category: 'Social' },
    { id: 'phone', emoji: '📱', name: 'Using Phone', category: 'Distraction' },
    { id: 'write', emoji: '✍️', name: 'Writing/Notes', category: 'Academic' },
    { id: 'raise', emoji: '🙋', name: 'Hand Raised', category: 'Participation' },
    { id: 'sleep', emoji: '😴', name: 'Disengaged/Sleepy', category: 'Distraction' },
    { id: 'help', emoji: '🤝', name: 'Helping Others', category: 'Social' }
  ], [])

  // Simulated classroom with 6 students
  const students = useMemo(() => [
    { id: 1, name: 'Student A', position: { x: 15, y: 20 } },
    { id: 2, name: 'Student B', position: { x: 45, y: 20 } },
    { id: 3, name: 'Student C', position: { x: 75, y: 20 } },
    { id: 4, name: 'Student D', position: { x: 15, y: 55 } },
    { id: 5, name: 'Student E', position: { x: 45, y: 55 } },
    { id: 6, name: 'Student F', position: { x: 75, y: 55 } }
  ], [])

  // Scripted behaviours that occur during the observation
  const scriptedEvents = useMemo(() => [
    { time: 2, personId: 1, behaviourId: 'write', duration: 8 },
    { time: 3, personId: 3, behaviourId: 'phone', duration: 5 },
    { time: 5, personId: 2, behaviourId: 'talk', duration: 4 },
    { time: 5, personId: 5, behaviourId: 'talk', duration: 4 },
    { time: 8, personId: 4, behaviourId: 'raise', duration: 3 },
    { time: 10, personId: 6, behaviourId: 'sleep', duration: 6 },
    { time: 12, personId: 1, behaviourId: 'help', duration: 4 },
    { time: 12, personId: 4, behaviourId: 'help', duration: 4 },
    { time: 15, personId: 3, behaviourId: 'write', duration: 5 },
    { time: 18, personId: 2, behaviourId: 'raise', duration: 2 },
    { time: 20, personId: 5, behaviourId: 'phone', duration: 4 },
    { time: 22, personId: 6, behaviourId: 'talk', duration: 3 },
    { time: 22, personId: 4, behaviourId: 'talk', duration: 3 },
    { time: 25, personId: 1, behaviourId: 'raise', duration: 2 },
    { time: 27, personId: 3, behaviourId: 'sleep', duration: 3 }
  ], [])

  const maxTime = 30

  // Get current behaviours happening at this time
  const getCurrentBehaviours = useCallback(() => {
    return scriptedEvents.filter(event => 
      currentTime >= event.time && currentTime < event.time + event.duration
    )
  }, [currentTime, scriptedEvents])

  // Timer effect
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    if (isPlaying && currentTime < maxTime) {
      interval = setInterval(() => {
        setCurrentTime(prev => Math.min(prev + 1, maxTime))
      }, 1000)
    } else if (currentTime >= maxTime) {
      setIsPlaying(false)
      setShowFeedback(true)
      calculateScore()
    }
    return () => clearInterval(interval)
  }, [isPlaying, currentTime])

  const recordObservation = useCallback((behaviourId: string) => {
    if (!selectedPerson || !isPlaying) return
    
    const newObs: ObservationEvent = {
      time: currentTime,
      behaviourId,
      personId: selectedPerson
    }
    setObservations(prev => [...prev, newObs])
    setSelectedPerson(null)
  }, [selectedPerson, currentTime, isPlaying])

  const calculateScore = useCallback(() => {
    let points = 0
    const tolerance = 2 // seconds tolerance for timing

    scriptedEvents.forEach(event => {
      // Check if observation was recorded within tolerance window
      const match = observations.find(obs => 
        obs.personId === event.personId &&
        obs.behaviourId === event.behaviourId &&
        Math.abs(obs.time - event.time) <= tolerance
      )
      if (match) points += 1
    })

    setScore(points)
  }, [observations, scriptedEvents])

  const handleStartPractice = useCallback(() => {
    setPhase('practice')
    setCurrentTime(0)
    setObservations([])
    setIsPlaying(false)
    setShowFeedback(false)
    setScore(0)
  }, [])

  const handleRestart = useCallback(() => {
    setCurrentTime(0)
    setObservations([])
    setIsPlaying(false)
    setShowFeedback(false)
    setScore(0)
  }, [])

  const getObserverRank = useCallback(() => {
    const percentage = (score / scriptedEvents.length) * 100
    if (percentage >= 80) return { rank: "Expert Observer", emoji: "🎯" }
    if (percentage >= 60) return { rank: "Skilled Observer", emoji: "👁️" }
    if (percentage >= 40) return { rank: "Developing Observer", emoji: "📝" }
    return { rank: "Trainee Observer", emoji: "🔍" }
  }, [score, scriptedEvents.length])

  const currentBehaviours = getCurrentBehaviours()

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-6 bg-gradient-to-br from-slate-900 via-cyan-900/20 to-slate-900`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500/20 rounded-lg">
              <Eye className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Observer Training Academy</h2>
              <p className="text-cyan-300 text-sm">Practice systematic observation techniques</p>
            </div>
          </div>
          {phase === 'practice' && (
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 flex items-center gap-2">
                <Timer className="w-4 h-4 text-cyan-400" />
                <span className="text-white font-mono font-bold">{currentTime}s / {maxTime}s</span>
              </div>
              <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
                <span className="text-slate-400 text-sm">Recorded: </span>
                <span className="text-white font-bold">{observations.length}</span>
              </div>
            </div>
          )}
        </div>

        {phase === 'tutorial' && (
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-xl border border-cyan-500/30 p-6">
              <h3 className="text-xl font-bold text-white mb-4">📚 Observer Training</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-bold text-cyan-400 mb-3">Your Mission:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Watch the simulated classroom for 30 seconds</li>
                    <li>• Click on a student to select them</li>
                    <li>• Record their behaviour using the categories</li>
                    <li>• Try to record all observable behaviours</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-amber-400 mb-3">Key Concepts:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• <strong>Behavioural Categories:</strong> Pre-defined observable behaviours</li>
                    <li>• <strong>Time Sampling:</strong> Record what happens at specific moments</li>
                    <li>• <strong>Event Sampling:</strong> Record each time a behaviour occurs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
              <h4 className="text-lg font-bold text-white mb-4">Behaviour Categories to Record:</h4>
              <div className="grid grid-cols-3 gap-4">
                {behaviourCategories.map(b => (
                  <div key={b.id} className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg">
                    <span className="text-2xl">{b.emoji}</span>
                    <div>
                      <p className="text-white font-bold">{b.name}</p>
                      <p className="text-xs text-slate-400">{b.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleStartPractice}
                className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-colors text-lg"
              >
                Start Observation Practice 👁️
              </button>
            </div>
          </div>
        )}

        {phase === 'practice' && (
          <div className="grid grid-cols-3 gap-6">
            {/* Classroom View */}
            <div className="col-span-2 space-y-4">
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-4 relative" style={{ height: '350px' }}>
                <div className="absolute top-2 left-2 px-3 py-1 bg-slate-700 rounded text-sm text-white">
                  🏫 Classroom View
                </div>
                
                {/* Students */}
                {students.map(student => {
                  const activeBehaviour = currentBehaviours.find(e => e.personId === student.id)
                  const behaviour = activeBehaviour ? behaviourCategories.find(b => b.id === activeBehaviour.behaviourId) : null
                  const isSelected = selectedPerson === student.id
                  
                  return (
                    <button
                      key={student.id}
                      onClick={() => isPlaying && setSelectedPerson(student.id)}
                      disabled={!isPlaying}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all ${
                        isPlaying ? 'cursor-pointer hover:scale-110' : 'cursor-default'
                      }`}
                      style={{ left: `${student.position.x}%`, top: `${student.position.y}%` }}
                    >
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl border-4 transition-all ${
                        isSelected 
                          ? 'border-cyan-400 bg-cyan-900/50 scale-110' 
                          : behaviour 
                            ? 'border-amber-400 bg-amber-900/50 animate-pulse' 
                            : 'border-slate-600 bg-slate-700'
                      }`}>
                        {behaviour ? behaviour.emoji : '👤'}
                      </div>
                      <p className="text-center text-xs text-slate-300 mt-1">{student.name}</p>
                      {behaviour && (
                        <p className="text-center text-xs text-amber-400 font-bold">{behaviour.name}</p>
                      )}
                    </button>
                  )
                })}

                {/* Teacher area */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="px-4 py-2 bg-slate-600 rounded-lg text-slate-300 text-sm">
                    📚 Teacher's Desk
                  </div>
                </div>
              </div>

              {/* Playback Controls */}
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`px-6 py-3 rounded-xl font-bold transition-colors flex items-center gap-2 ${
                    isPlaying 
                      ? 'bg-amber-600 hover:bg-amber-500 text-white' 
                      : 'bg-green-600 hover:bg-green-500 text-white'
                  }`}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  {isPlaying ? 'Pause' : 'Start'}
                </button>
                <button
                  onClick={handleRestart}
                  className="px-6 py-3 bg-slate-600 hover:bg-slate-500 text-white rounded-xl font-bold transition-colors flex items-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  Restart
                </button>
              </div>

              {/* Progress Bar */}
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-cyan-500 transition-all"
                  style={{ width: `${(currentTime / maxTime) * 100}%` }}
                />
              </div>
            </div>

            {/* Recording Panel */}
            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-4">
                <h4 className="text-sm font-bold text-slate-400 mb-3">
                  {selectedPerson ? `Recording for Student ${String.fromCharCode(64 + selectedPerson)}` : 'Select a student first'}
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {behaviourCategories.map(b => (
                    <button
                      key={b.id}
                      onClick={() => recordObservation(b.id)}
                      disabled={!selectedPerson || !isPlaying}
                      className={`p-2 rounded-lg border transition-all text-left ${
                        selectedPerson && isPlaying
                          ? 'border-slate-600 bg-slate-700/50 hover:border-cyan-500 hover:bg-cyan-900/30 cursor-pointer'
                          : 'border-slate-700 bg-slate-800 opacity-50 cursor-not-allowed'
                      }`}
                    >
                      <span className="text-xl">{b.emoji}</span>
                      <p className="text-xs text-white mt-1">{b.name}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Observations */}
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-4">
                <h4 className="text-sm font-bold text-slate-400 mb-3 flex items-center gap-2">
                  <ClipboardList className="w-4 h-4" />
                  Recent Records
                </h4>
                <div className="space-y-1 max-h-32 overflow-y-auto">
                  {observations.slice(-5).reverse().map((obs, i) => {
                    const behaviour = behaviourCategories.find(b => b.id === obs.behaviourId)
                    return (
                      <div key={i} className="flex items-center gap-2 text-sm p-1 bg-slate-700/50 rounded">
                        <span className="text-cyan-400 font-mono">{obs.time}s</span>
                        <span className="text-slate-400">|</span>
                        <span className="text-white">Student {String.fromCharCode(64 + obs.personId)}</span>
                        <span className="text-slate-400">|</span>
                        <span>{behaviour?.emoji} {behaviour?.name}</span>
                      </div>
                    )
                  })}
                  {observations.length === 0 && (
                    <p className="text-slate-500 text-sm">No observations recorded yet</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        {showFeedback && (
          <div className="mt-6 bg-slate-800/50 rounded-xl border border-cyan-500/30 p-6">
            <div className="text-center mb-6">
              <div className="text-5xl mb-2">{getObserverRank().emoji}</div>
              <h3 className="text-2xl font-bold text-white">{getObserverRank().rank}</h3>
              <p className="text-cyan-300">You recorded {score} of {scriptedEvents.length} behaviours correctly</p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-white">{observations.length}</p>
                <p className="text-slate-400 text-sm">Total Observations</p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-green-400">{score}</p>
                <p className="text-slate-400 text-sm">Correct Matches</p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-amber-400">{Math.round((score / scriptedEvents.length) * 100)}%</p>
                <p className="text-slate-400 text-sm">Accuracy</p>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={handleRestart}
                className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-colors"
              >
                Try Again 🔄
              </button>
              <button
                onClick={() => setPhase('tutorial')}
                className="px-6 py-3 bg-slate-600 hover:bg-slate-500 text-white font-bold rounded-xl transition-colors"
              >
                Back to Tutorial
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ObserverTrainingAcademy
