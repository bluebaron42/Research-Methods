import { useState, useEffect } from 'react'
import { RotateCw, CheckCircle, XCircle, Settings, HelpCircle, Trophy } from 'lucide-react'
import { hypotheses, Hypothesis } from './hypothesesData'

export default function HypothesisWheel() {
  const [difficulty, setDifficulty] = useState(1)
  const [currentHypothesis, setCurrentHypothesis] = useState<Hypothesis | null>(null)
  const [isSpinning, setIsSpinning] = useState(false)
  const [showResults, setShowResults] = useState(false)
  
  // User selections
  const [selectedDirection, setSelectedDirection] = useState<'directional' | 'non-directional' | null>(null)
  const [selectedOp, setSelectedOp] = useState<'good' | 'poor' | null>(null)
  const [selectedType, setSelectedType] = useState<'null' | 'alternative' | null>(null)

  const [score, setScore] = useState({ correct: 0, total: 0 })
  const [streak, setStreak] = useState(0)

  const spinWheel = () => {
    if (isSpinning) return
    
    // Reset selections
    setSelectedDirection(null)
    setSelectedOp(null)
    setSelectedType(null)
    setShowResults(false)
    setIsSpinning(true)

    // Filter hypotheses by exact difficulty match for targeted practice
    const availableHypotheses = hypotheses.filter(h => h.difficulty === difficulty)
    
    // Fallback if empty (shouldn't happen with our data)
    const pool = availableHypotheses.length > 0 ? availableHypotheses : hypotheses

    let duration = 0
    const maxDuration = 1500 // 1.5s spin
    const intervalTime = 100

    const interval = setInterval(() => {
      duration += intervalTime
      const randomIndex = Math.floor(Math.random() * pool.length)
      setCurrentHypothesis(pool[randomIndex])

      if (duration >= maxDuration) {
        clearInterval(interval)
        setIsSpinning(false)
      }
    }, intervalTime)
  }

  const checkAnswers = () => {
    if (!currentHypothesis) return
    setShowResults(true)

    const directionCorrect = 
        currentHypothesis.direction === 'n/a' ? true :
        selectedDirection === currentHypothesis.direction;

    const opCorrect = selectedOp === currentHypothesis.operationalisation
    const typeCorrect = selectedType === currentHypothesis.type
    
    const allCorrect = (currentHypothesis.direction === 'n/a' ? (opCorrect && typeCorrect) : (directionCorrect && opCorrect && typeCorrect));

    if (allCorrect) {
        setScore(s => ({ ...s, correct: s.correct + 1, total: s.total + 1 }))
        setStreak(s => s + 1)
    } else {
        setScore(s => ({ ...s, total: s.total + 1 }))
        setStreak(0)
    }
  }

  return (
    <div className="flex flex-col h-full p-5 overflow-y-auto custom-scrollbar">
      
      {/* Header Area */}
      <div className="flex items-center justify-between mb-4 border-b border-purple-500/20 pb-3">
        <div>
          <h2 className="text-lg font-bold text-purple-400 flex items-center gap-2">
            <span className="w-1 h-5 bg-purple-500 rounded-full"></span>
            <RotateCw className={`w-5 h-5 text-purple-400 ${isSpinning ? 'animate-spin' : ''}`} />
            Hypothesis Wheel
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">Spin to test your knowledge!</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-gray-800/50 rounded-lg px-3 py-1.5 border border-gray-700/50">
            <Trophy className="w-4 h-4 text-yellow-400" />
            <div className="flex flex-col items-end">
                <span className="text-[10px] text-gray-500 uppercase font-bold">Score</span>
                <span className="text-sm font-mono font-bold text-white">{score.correct}/{score.total}</span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-0.5">
            <label className="text-[10px] text-purple-400 uppercase font-bold flex items-center gap-1">
              <Settings className="w-3 h-3" /> Difficulty
            </label>
            <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-gray-600">1</span>
                <input 
                    type="range" 
                    min="1" 
                    max="5" 
                    value={difficulty} 
                    onChange={(e) => setDifficulty(parseInt(e.target.value))}
                    className="w-20 h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
                <span className="text-xs font-bold text-gray-600">5</span>
                <span className="ml-1 w-5 h-5 flex items-center justify-center bg-purple-500 text-white font-bold rounded-full text-xs">
                    {difficulty}
                </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Game Area */}
      <div className="flex-1 flex flex-col items-center max-w-3xl mx-auto w-full gap-4">
        
        {/* The Wheel / Display */}
        <div className="w-full relative">
            <div className={`
                relative glass-clean rounded-xl p-6 min-h-[140px] flex items-center justify-center text-center
                ${isSpinning ? 'animate-pulse' : ''}
            `}>
                {!currentHypothesis ? (
                    <div className="text-gray-600 flex flex-col items-center gap-2">
                        <HelpCircle className="w-10 h-10 opacity-20" />
                        <p className="text-sm">Set difficulty and click Spin to start!</p>
                    </div>
                ) : (
                    <p className={`text-base md:text-lg font-medium text-white leading-relaxed ${isSpinning ? 'blur-sm scale-95 opacity-50' : 'scale-100 opacity-100'} transition-all duration-100`}>
                        "{currentHypothesis.text}"
                    </p>
                )}
                
                {/* Decoration */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 px-3 py-0.5 rounded-full border border-gray-700/50">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Active Hypothesis</span>
                </div>
            </div>

            <button 
                onClick={spinWheel}
                disabled={isSpinning}
                className={`
                    absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full font-bold text-sm shadow-lg
                    transition-all transform hover:scale-105 active:scale-95 z-10
                    ${isSpinning 
                        ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
                        : 'bg-purple-600 text-white hover:bg-purple-500 shadow-purple-600/20'}
                `}
            >
                {isSpinning ? 'Spinning...' : 'SPIN WHEEL'}
            </button>
        </div>

        {/* Controls */}
        <div className={`w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 transition-opacity duration-500 ${!currentHypothesis || isSpinning ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
            
            {/* Direction Control */}
            <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-gray-500 uppercase text-center">Direction</span>
                <div className="flex flex-col gap-1.5">
                    <button
                        onClick={() => !showResults && setSelectedDirection('directional')}
                        className={`p-2 rounded-lg border transition-all font-medium text-sm ${selectedDirection === 'directional' ? 'border-blue-500/50 bg-blue-500/20 text-white' : 'border-gray-700/50 bg-gray-800/50 text-gray-500 hover:border-gray-600'}`}
                    >
                        Directional
                    </button>
                    <button
                        onClick={() => !showResults && setSelectedDirection('non-directional')}
                        className={`p-2 rounded-lg border transition-all font-medium text-sm ${selectedDirection === 'non-directional' ? 'border-blue-500/50 bg-blue-500/20 text-white' : 'border-gray-700/50 bg-gray-800/50 text-gray-500 hover:border-gray-600'}`}
                    >
                        Non-directional
                    </button>
                </div>
                {showResults && currentHypothesis && (
                    <div className="text-center text-xs animate-scale-up">
                        {currentHypothesis.direction === 'n/a' ? (
                           <span className="text-gray-500">N/A for this type</span>
                        ) : (
                           selectedDirection === currentHypothesis.direction 
                            ? <span className="text-green-400 font-bold flex items-center justify-center gap-1"><CheckCircle className="w-3 h-3"/> Correct</span>
                            : <span className="text-red-400 font-bold flex items-center justify-center gap-1"><XCircle className="w-3 h-3"/> Was {currentHypothesis.direction}</span>
                        )}
                    </div>
                )}
            </div>

            {/* Type Control */}
            <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-gray-500 uppercase text-center">Hypothesis Type</span>
                <div className="flex flex-col gap-1.5">
                    <button
                        onClick={() => !showResults && setSelectedType('alternative')}
                        className={`p-2 rounded-lg border transition-all font-medium text-sm ${selectedType === 'alternative' ? 'border-green-500/50 bg-green-500/20 text-white' : 'border-gray-700/50 bg-gray-800/50 text-gray-500 hover:border-gray-600'}`}
                    >
                        Alternative
                    </button>
                    <button
                        onClick={() => !showResults && setSelectedType('null')}
                        className={`p-2 rounded-lg border transition-all font-medium text-sm ${selectedType === 'null' ? 'border-green-500/50 bg-green-500/20 text-white' : 'border-gray-700/50 bg-gray-800/50 text-gray-500 hover:border-gray-600'}`}
                    >
                        Null
                    </button>
                </div>
                {showResults && currentHypothesis && (
                    <div className="text-center text-xs animate-scale-up">
                       {selectedType === currentHypothesis.type 
                        ? <span className="text-green-400 font-bold flex items-center justify-center gap-1"><CheckCircle className="w-3 h-3"/> Correct</span>
                        : <span className="text-red-400 font-bold flex items-center justify-center gap-1"><XCircle className="w-3 h-3"/> Was {currentHypothesis.type}</span>
                       }
                    </div>
                )}
            </div>

            {/* Operationalisation Control */}
            <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-gray-500 uppercase text-center">Operationalisation</span>
                <div className="flex flex-col gap-1.5">
                    <button
                        onClick={() => !showResults && setSelectedOp('good')}
                        className={`p-2 rounded-lg border transition-all font-medium text-sm ${selectedOp === 'good' ? 'border-orange-500/50 bg-orange-500/20 text-white' : 'border-gray-700/50 bg-gray-800/50 text-gray-500 hover:border-gray-600'}`}
                    >
                        Well Operationalised
                    </button>
                    <button
                        onClick={() => !showResults && setSelectedOp('poor')}
                        className={`p-2 rounded-lg border transition-all font-medium text-sm ${selectedOp === 'poor' ? 'border-orange-500/50 bg-orange-500/20 text-white' : 'border-gray-700/50 bg-gray-800/50 text-gray-500 hover:border-gray-600'}`}
                    >
                        Poorly Operationalised
                    </button>
                </div>
                 {showResults && currentHypothesis && (
                    <div className="text-center text-xs animate-scale-up">
                       {selectedOp === currentHypothesis.operationalisation 
                        ? <span className="text-green-400 font-bold flex items-center justify-center gap-1"><CheckCircle className="w-3 h-3"/> Correct</span>
                        : <span className="text-red-400 font-bold flex items-center justify-center gap-1"><XCircle className="w-3 h-3"/> Was {currentHypothesis.operationalisation}</span>
                       }
                    </div>
                )}
            </div>
            
        </div>
        
        {/* Check Button */}
        {currentHypothesis && !isSpinning && !showResults && (
            <div className="animate-fadeIn mt-2">
                <button 
                    onClick={checkAnswers}
                    disabled={!selectedOp || !selectedType || (currentHypothesis.direction !== 'n/a' && !selectedDirection)}
                    className="px-8 py-2 bg-white text-gray-900 rounded-lg font-bold text-sm hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
                >
                    Check Answers
                </button>
            </div>
        )}

      </div>
    </div>
  )
}
