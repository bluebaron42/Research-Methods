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
    
    const isDirectionCorrect = 
      (currentHypothesis.direction === 'n/a' && selectedDirection === null) || // For Null
      (currentHypothesis.direction !== 'n/a' && selectedDirection === currentHypothesis.direction) ||
      (currentHypothesis.type === 'null' && selectedDirection === null); // Implicitly nulls don't have direction usually, or we can treat them specifically

    // Logic refinement for "Direction":
    // If it's Null, usually we don't ask Direction, or we accept "Non-directional" sometimes, but typically Null is Null.
    // However, the prompt asks for "Direction, Operationalisation, Null/Alt".
    // If user selected "Null" for Type, maybe Direction is irrelevant?
    // Let's assume if it's Null, they shouldn't select a direction, or we disable it. 
    // BUT the prompt implies identifying direction.
    // Let's count 'correct' based on the data. For Null, data says 'n/a'.
    // If selectedDirection is null (user didn't pick), and data is n/a, that's correct? 
    // Or maybe we force them to pick "Non-directional" for Null if that's the convention?
    // Actually, Null hypotheses are usually non-directional ("no difference"). 
    // Check data: id 2 is 'n/a'.
    
    // Let's loosen the check: If it's Null, let's say direction doesn't matter or is "Non-directional".
    // Actually, let's treat 'n/a' as requiring NO selection? Or handle it in UI?
    // Let's simple check against data. If data is 'n/a', maybe we shouldn't show the Direction buttons?
    // Or simpler: If type is Null, direction check is skipped or auto-passed?
    // Let's stick to the data. 

    const directionCorrect = 
        currentHypothesis.direction === 'n/a' ? true : // If N/A, any or no selection is "skipped/correct" effectively, or we ignore
        selectedDirection === currentHypothesis.direction;

    const opCorrect = selectedOp === currentHypothesis.operationalisation
    const typeCorrect = selectedType === currentHypothesis.type
    
    // Overall correct?
    // If direction is N/A, we only care about Op and Type.
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
    <div className="flex flex-col h-full bg-slate-900/50 rounded-xl p-6 border border-purple-500/20 shadow-2xl overflow-y-auto">
      
      {/* Header Area */}
      <div className="flex items-center justify-between mb-8 border-b border-purple-500/30 pb-4">
        <div>
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400 flex items-center gap-3">
            <RotateCw className={`w-8 h-8 text-purple-400 ${isSpinning ? 'animate-spin' : ''}`} />
            Hypothesis Wheel
          </h2>
          <p className="text-slate-400 text-sm mt-1">Spin to test your knowledge!</p>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-slate-800 rounded-lg px-4 py-2 border border-slate-700">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <div className="flex flex-col items-end">
                <span className="text-xs text-slate-400 uppercase font-bold">Score</span>
                <span className="text-lg font-mono font-bold text-white">{score.correct}/{score.total}</span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <label className="text-xs text-purple-400 uppercase font-bold flex items-center gap-1">
              <Settings className="w-3 h-3" /> Difficulty
            </label>
            <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-slate-500">1</span>
                <input 
                    type="range" 
                    min="1" 
                    max="5" 
                    value={difficulty} 
                    onChange={(e) => setDifficulty(parseInt(e.target.value))}
                    className="w-32 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
                <span className="text-sm font-bold text-slate-500">5</span>
                <span className="ml-2 w-6 h-6 flex items-center justify-center bg-purple-500 text-white font-bold rounded-full text-sm">
                    {difficulty}
                </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Game Area */}
      <div className="flex-1 flex flex-col items-center max-w-4xl mx-auto w-full gap-8">
        
        {/* The Wheel / Display */}
        <div className="w-full relative">
            <div className={`
                relative bg-slate-800 border-4 border-slate-700 rounded-2xl p-8 min-h-[200px] flex items-center justify-center text-center shadow-inner
                ${isSpinning ? 'animate-pulse' : ''}
            `}>
                {!currentHypothesis ? (
                    <div className="text-slate-500 flex flex-col items-center gap-4">
                        <HelpCircle className="w-16 h-16 opacity-20" />
                        <p className="text-lg">Set difficulty and click Spin to start!</p>
                    </div>
                ) : (
                    <p className={`text-2xl md:text-3xl font-medium text-white leading-relaxed ${isSpinning ? 'blur-sm scale-95 opacity-50' : 'scale-100 opacity-100'} transition-all duration-100`}>
                        "{currentHypothesis.text}"
                    </p>
                )}
                
                {/* Decoration */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 px-4 py-1 rounded-full border border-slate-700">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Active Hypothesis</span>
                </div>
            </div>

            <button 
                onClick={spinWheel}
                disabled={isSpinning}
                className={`
                    absolute -bottom-6 left-1/2 -translate-x-1/2 px-8 py-3 rounded-full font-bold text-lg shadow-xl
                    transition-all transform hover:scale-105 active:scale-95 z-10
                    ${isSpinning 
                        ? 'bg-slate-600 text-slate-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-pink-500/25 ring-4 ring-slate-900'}
                `}
            >
                {isSpinning ? 'Spinning...' : 'SPIN WHEEL'}
            </button>
        </div>

        {/* Controls */}
        <div className={`w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 transition-opacity duration-500 ${!currentHypothesis || isSpinning ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
            
            {/* Direction Control */}
            <div className="flex flex-col gap-3">
                <span className="text-sm font-semibold text-slate-400 uppercase text-center">Direction</span>
                <div className="flex flex-col gap-2">
                    <button
                        onClick={() => !showResults && setSelectedDirection('directional')}
                        className={`p-3 rounded-lg border-2 transition-all font-medium ${selectedDirection === 'directional' ? 'border-blue-500 bg-blue-500/20 text-white' : 'border-slate-700 bg-slate-800 text-slate-400 hover:border-slate-600'}`}
                    >
                        Directional
                    </button>
                    <button
                        onClick={() => !showResults && setSelectedDirection('non-directional')}
                        className={`p-3 rounded-lg border-2 transition-all font-medium ${selectedDirection === 'non-directional' ? 'border-blue-500 bg-blue-500/20 text-white' : 'border-slate-700 bg-slate-800 text-slate-400 hover:border-slate-600'}`}
                    >
                        Non-directional
                    </button>
                </div>
                {showResults && currentHypothesis && (
                    <div className="text-center text-sm">
                        {currentHypothesis.direction === 'n/a' ? (
                           <span className="text-slate-500">N/A for this type</span>
                        ) : (
                           selectedDirection === currentHypothesis.direction 
                            ? <span className="text-green-400 font-bold flex items-center justify-center gap-1"><CheckCircle className="w-4 h-4"/> Correct</span>
                            : <span className="text-red-400 font-bold flex items-center justify-center gap-1"><XCircle className="w-4 h-4"/> Was {currentHypothesis.direction}</span>
                        )}
                    </div>
                )}
            </div>

            {/* Type Control */}
            <div className="flex flex-col gap-3">
                <span className="text-sm font-semibold text-slate-400 uppercase text-center">Hypothesis Type</span>
                <div className="flex flex-col gap-2">
                    <button
                        onClick={() => !showResults && setSelectedType('alternative')}
                        className={`p-3 rounded-lg border-2 transition-all font-medium ${selectedType === 'alternative' ? 'border-green-500 bg-green-500/20 text-white' : 'border-slate-700 bg-slate-800 text-slate-400 hover:border-slate-600'}`}
                    >
                        Alternative
                    </button>
                    <button
                        onClick={() => !showResults && setSelectedType('null')}
                        className={`p-3 rounded-lg border-2 transition-all font-medium ${selectedType === 'null' ? 'border-green-500 bg-green-500/20 text-white' : 'border-slate-700 bg-slate-800 text-slate-400 hover:border-slate-600'}`}
                    >
                        Null
                    </button>
                </div>
                {showResults && currentHypothesis && (
                    <div className="text-center text-sm">
                       {selectedType === currentHypothesis.type 
                        ? <span className="text-green-400 font-bold flex items-center justify-center gap-1"><CheckCircle className="w-4 h-4"/> Correct</span>
                        : <span className="text-red-400 font-bold flex items-center justify-center gap-1"><XCircle className="w-4 h-4"/> Was {currentHypothesis.type}</span>
                       }
                    </div>
                )}
            </div>

            {/* Operationalisation Control */}
            <div className="flex flex-col gap-3">
                <span className="text-sm font-semibold text-slate-400 uppercase text-center">Operationalisation</span>
                <div className="flex flex-col gap-2">
                    <button
                        onClick={() => !showResults && setSelectedOp('good')}
                        className={`p-3 rounded-lg border-2 transition-all font-medium ${selectedOp === 'good' ? 'border-orange-500 bg-orange-500/20 text-white' : 'border-slate-700 bg-slate-800 text-slate-400 hover:border-slate-600'}`}
                    >
                        Well Operationalised
                    </button>
                    <button
                        onClick={() => !showResults && setSelectedOp('poor')}
                        className={`p-3 rounded-lg border-2 transition-all font-medium ${selectedOp === 'poor' ? 'border-orange-500 bg-orange-500/20 text-white' : 'border-slate-700 bg-slate-800 text-slate-400 hover:border-slate-600'}`}
                    >
                        Poorly Operationalised
                    </button>
                </div>
                 {showResults && currentHypothesis && (
                    <div className="text-center text-sm">
                       {selectedOp === currentHypothesis.operationalisation 
                        ? <span className="text-green-400 font-bold flex items-center justify-center gap-1"><CheckCircle className="w-4 h-4"/> Correct</span>
                        : <span className="text-red-400 font-bold flex items-center justify-center gap-1"><XCircle className="w-4 h-4"/> Was {currentHypothesis.operationalisation}</span>
                       }
                    </div>
                )}
            </div>
            
        </div>
        
        {/* Check Button */}
        {currentHypothesis && !isSpinning && !showResults && (
            <div className="animate-fadeIn mt-4">
                <button 
                    onClick={checkAnswers}
                    disabled={!selectedOp || !selectedType || (currentHypothesis.direction !== 'n/a' && !selectedDirection)}
                    className="px-12 py-3 bg-white text-slate-900 rounded-lg font-bold hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg"
                >
                    Check Answers
                </button>
            </div>
        )}

      </div>
    </div>
  )
}
