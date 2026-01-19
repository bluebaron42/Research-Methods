import { useState } from 'react'
import { Beaker, ArrowRight, Check, X, RotateCcw, Microscope, RefreshCw } from 'lucide-react'

// Scenarios from the Textbook and similar examples
const scenarios = [
  {
    id: 1,
    title: "Balls in a Bucket",
    description: "A researcher wants to see if people are better at throwing balls into a bucket when an audience is watching versus when they are alone.",
    ivOps: ["Audience present vs. Alone", "Size of bucket", "Number of balls", "Time of day"],
    dvOps: ["Number of balls thrown in (out of 20)", "How happy they felt", "How loud the audience was", "Color of the balls"],
    correctIV: 0,
    correctDV: 0,
    hypothesis: {
      null: "There is no difference in the number of balls thrown into the bucket between those with an audience and those alone.",
      alt: "There is a difference in the number of balls thrown into the bucket between those with an audience and those alone."
    }
  },
  {
    id: 2,
    title: "The Midas Touch",
    description: "A researcher investigates if students rate a canteen worker as more 'likeable' if the worker lightly touches their hand when giving change.",
    ivOps: ["Gender of student", "Amount of change given", "Touch vs. No Touch", "Time spent in canteen"],
    dvOps: ["Amount of food bought", "Likeability rating (1-7)", "Speed of service", "Student heart rate"],
    correctIV: 2,
    correctDV: 1,
    hypothesis: {
      null: "Changing the type of touch (touch vs no touch) will have no effect on likeability ratings.",
      alt: "Students who are touched will rate the worker differently (e.g. higher) than those not touched."
    }
  },
  {
    id: 3,
    title: "Caffeine & Memory",
    description: "Does drinking coffee before a test improve recall of a list of 20 words?",
    ivOps: ["Age of participant", "Coffee (Caffeine) vs. Water (No Caffeine)", "Number of words", "Room temperature"],
    dvOps: ["Number of cups drunk", "Brand of coffee", "Time taken to drink", "Number of words correctly recalled"],
    correctIV: 1,
    correctDV: 3,
    hypothesis: {
      null: "There is no relationship between caffeine consumption and word recall score.",
      alt: "Participants who drink caffeine will recall more words than those who drink water."
    }
  }
]

export default function HypothesisLab() {
  const [level, setLevel] = useState(0) // Scenario index
  const [step, setStep] = useState<'iv' | 'dv' | 'hypo' | 'complete'>('iv')
  const [selected, setSelected] = useState<number | null>(null)
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null)
  const [score, setScore] = useState(0)
  const [hypoChoice, setHypoChoice] = useState<'null' | 'alt' | null>(null)

  const currentScenario = scenarios[level]

  const handleSelection = (idx: number) => {
    setSelected(idx)
    setFeedback(null)
  }

  const checkObservation = () => {
    if (selected === null) return

    let isCorrect = false
    if (step === 'iv' && selected === currentScenario.correctIV) isCorrect = true
    if (step === 'dv' && selected === currentScenario.correctDV) isCorrect = true

    if (isCorrect) {
      setFeedback('correct')
      setTimeout(() => {
        setFeedback(null)
        setSelected(null)
        if (step === 'iv') setStep('dv')
        else if (step === 'dv') setStep('hypo')
      }, 1000)
    } else {
      setFeedback('incorrect')
    }
  }

  const checkHypothesis = (type: 'null' | 'alt') => {
    // In this mini-game, we just asking them to identify which text corresponds to "Null" or "Alt"
    // Let's change the game mechanic: Show a statement, ask if it's Null or Alt
    // Randomly pick one of the two descriptions
  }

  // Simplified Hypo Step: Just show both and ask to identify the ALTERNATIVE
  const checkHypothesisID = (idx: number) => {
    // 0 = Null, 1 = Alt
    if (idx === 1) { // Asking to find the Alternative
       setFeedback('correct')
       setTimeout(() => {
         setFeedback(null)
         setScore(s => s + 1)
         if (level < scenarios.length - 1) {
            setLevel(level + 1)
            setStep('iv')
         } else {
            setStep('complete')
         }
       }, 1000)
    } else {
        setFeedback('incorrect')
    }
  }

  if (step === 'complete') {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-slate-900 rounded-xl p-8 text-center animate-fadeIn">
        <Microscope className="w-24 h-24 text-green-400 mb-6" />
        <h2 className="text-3xl font-bold text-white mb-4">Lab Work Complete!</h2>
        <p className="text-xl text-gray-300 mb-8">You successfully operationalised all variables.</p>
        <button 
          onClick={() => { setLevel(0); setStep('iv'); setScore(0); }}
          className="flex items-center gap-2 px-6 py-3 bg-pink-600 hover:bg-pink-500 text-white rounded-lg font-bold transition-colors"
        >
          <RotateCcw className="w-5 h-5" />
          Reset Lab
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 shadow-xl">
      {/* Header */}
      <div className="bg-slate-900/80 p-4 border-b border-slate-700 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-pink-500/20 p-2 rounded-lg">
            <Beaker className="w-6 h-6 text-pink-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Hypothesis Lab</h3>
            <p className="text-xs text-slate-400">Scenario {level + 1} of {scenarios.length}</p>
          </div>
        </div>
        <div className="flex gap-1">
          {scenarios.map((_, i) => (
            <div key={i} className={`h-2 w-8 rounded-full ${i <= level ? 'bg-pink-500' : 'bg-slate-700'}`} />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Scenario - Left Side */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-600">
            <h4 className="text-pink-400 font-bold uppercase tracking-wider text-sm mb-2">Research Scenario</h4>
            <h2 className="text-2xl font-bold text-white mb-4">{currentScenario.title}</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {currentScenario.description}
            </p>
          </div>

          <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
            <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
              <Microscope className="w-4 h-4" />
              Current Task:
            </h4>
            <p className="text-blue-100">
              {step === 'iv' && "Identify the INDEPENDENT VARIABLE (IV) - What is changed?"}
              {step === 'dv' && "Identify the DEPENDENT VARIABLE (DV) - What is measured?"}
              {step === 'hypo' && "Identify the ALTERNATIVE HYPOTHESIS (The prediction of difference)"}
            </p>
          </div>
        </div>

        {/* Interaction - Right Side */}
        <div className="flex flex-col justify-center">
          <div className="grid gap-3">
            {step === 'iv' && currentScenario.ivOps.map((op, i) => (
              <button
                key={i}
                onClick={() => handleSelection(i)}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  selected === i 
                    ? 'border-pink-500 bg-pink-500/10 text-white shadow-lg shadow-pink-500/20' 
                    : 'border-slate-700 bg-slate-800/50 text-gray-400 hover:border-slate-500 hover:bg-slate-800'
                }`}
              >
                {op}
              </button>
            ))}

            {step === 'dv' && currentScenario.dvOps.map((op, i) => (
              <button
                key={i}
                onClick={() => handleSelection(i)}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  selected === i 
                    ? 'border-pink-500 bg-pink-500/10 text-white shadow-lg shadow-pink-500/20' 
                    : 'border-slate-700 bg-slate-800/50 text-gray-400 hover:border-slate-500 hover:bg-slate-800'
                }`}
              >
                {op}
              </button>
            ))}

            {step === 'hypo' && (
              <>
                {/* Randomize order in real app, hardcoded for demo simplicity */}
                {/* Option A: Null */}
                <button
                   onClick={() => checkHypothesisID(0)}
                   className="p-6 rounded-xl border-2 border-slate-700 bg-slate-800/50 text-gray-300 hover:border-slate-500 hover:bg-slate-800 text-left relative group"
                >
                  <span className="block text-xs font-bold text-slate-500 uppercase mb-2 group-hover:text-slate-300">Statement A</span>
                  {currentScenario.hypothesis.null}
                </button>
                
                {/* Option B: Alt */}
                <button
                   onClick={() => checkHypothesisID(1)}
                   className="p-6 rounded-xl border-2 border-slate-700 bg-slate-800/50 text-gray-300 hover:border-slate-500 hover:bg-slate-800 text-left relative group"
                >
                   <span className="block text-xs font-bold text-slate-500 uppercase mb-2 group-hover:text-slate-300">Statement B</span>
                   {currentScenario.hypothesis.alt}
                </button>
              </>
            )}
          </div>

          {step !== 'hypo' && (
            <div className="mt-6 h-12 flex justify-end items-center">
              {feedback === 'correct' && (
                <div className="flex items-center gap-2 text-green-400 font-bold animate-fadeIn">
                  <Check className="w-6 h-6" /> Correct!
                </div>
              )}
              {feedback === 'incorrect' && (
                <div className="flex items-center gap-2 text-red-400 font-bold animate-fadeIn">
                  <X className="w-6 h-6" /> Try Again
                </div>
              )}
              
              {!feedback && selected !== null && (
                <button
                  onClick={checkObservation}
                  className="bg-pink-600 hover:bg-pink-500 text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 transition-all"
                >
                  Check <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
