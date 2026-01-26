import { useState } from 'react'

interface TeachSlideProps {
  isPresenting: boolean
}

// ============= LESSON 31: CORRELATION ANALYSIS =============

export const CoefficientsTeach = ({ isPresenting }: TeachSlideProps) => {
  const [revealedSteps, setRevealedSteps] = useState<number[]>([])
  const steps = [
    { title: "What is a Correlation Coefficient?", content: "A number between -1 and +1 that tells us the strength and direction of a relationship between two co-variables.", icon: "📊" },
    { title: "Direction of Correlation", content: "Positive (+): Both variables increase together. Negative (-): As one increases, the other decreases.", icon: "↗️" },
    { title: "Strength of Correlation", content: "Closer to +1 or -1 = stronger relationship. Closer to 0 = weaker relationship. ±0.5 is as strong as ∓0.5!", icon: "💪" },
    { title: "Key Insight", content: "A coefficient of -0.85 shows a STRONGER relationship than +0.40 because the absolute value is higher!", icon: "💡" }
  ]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>📈 Correlation Coefficients</h2>
        <p className="text-purple-400">Understanding strength and direction</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            onClick={() => !revealedSteps.includes(idx) && setRevealedSteps([...revealedSteps, idx])}
            className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
              revealedSteps.includes(idx)
                ? 'bg-purple-900/40 border-purple-500/50 scale-100 opacity-100'
                : 'bg-gray-800/50 border-gray-700 hover:border-purple-500/30 scale-95 opacity-70'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{step.icon}</span>
              <h3 className="text-lg font-bold text-white">{step.title}</h3>
            </div>
            {revealedSteps.includes(idx) ? (
              <p className="text-gray-300 animate-fadeIn">{step.content}</p>
            ) : (
              <p className="text-gray-500 italic">Click to reveal...</p>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <p className="text-gray-400 text-sm">Revealed: {revealedSteps.length}/{steps.length}</p>
        <button onClick={() => setRevealedSteps(steps.map((_, i) => i))} className="text-purple-400 hover:text-purple-300 text-sm">Show All</button>
      </div>
      <div className="mt-6 p-4 bg-blue-900/30 rounded-xl border border-blue-500/30">
        <p className="text-blue-300 text-sm">📝 <strong>Exam Tip:</strong> Remember - the SIGN (+ or -) tells you direction, the NUMBER tells you strength!</p>
      </div>
    </div>
  )
}

export const InterpretationTeach = ({ isPresenting }: TeachSlideProps) => {
  const [selectedCorr, setSelectedCorr] = useState<number | null>(null)
  const correlations = [
    { value: "+1.0", desc: "Perfect positive", color: "green", dots: "All points on upward line" },
    { value: "+0.85", desc: "Strong positive", color: "emerald", dots: "Points cluster around upward trend" },
    { value: "+0.30", desc: "Weak positive", color: "yellow", dots: "Scattered with slight upward trend" },
    { value: "0", desc: "No correlation", color: "gray", dots: "Random scatter, no pattern" },
    { value: "-0.76", desc: "Strong negative", color: "orange", dots: "Points cluster around downward trend" },
    { value: "-1.0", desc: "Perfect negative", color: "red", dots: "All points on downward line" }
  ]
  const colorMap: Record<string, string> = { green: 'bg-green-900/40 border-green-500', emerald: 'bg-emerald-900/40 border-emerald-500', yellow: 'bg-yellow-900/40 border-yellow-500', gray: 'bg-gray-800/40 border-gray-500', orange: 'bg-orange-900/40 border-orange-500', red: 'bg-red-900/40 border-red-500' }
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>🔍 Interpreting Coefficients</h2>
        <p className="text-blue-400">Click each coefficient to see what it means</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {correlations.map((corr, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedCorr(selectedCorr === idx ? null : idx)}
            className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
              selectedCorr === idx ? `${colorMap[corr.color]} scale-[1.02] shadow-lg` : 'bg-gray-800/50 border-gray-700 opacity-60 hover:opacity-80'
            }`}
          >
            <p className="text-2xl font-bold text-white text-center mb-1">{corr.value}</p>
            {selectedCorr === idx && (
              <div className="animate-fadeIn">
                <p className="text-gray-300 text-sm text-center">{corr.desc}</p>
                <p className="text-gray-400 text-xs mt-1 text-center italic">{corr.dots}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="p-4 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
        <p className="text-indigo-300 text-sm">💡 <strong>Key Point:</strong> A scattergram visually shows the correlation - the tighter the cluster of points around the line of best fit, the stronger the correlation.</p>
      </div>
    </div>
  )
}

export const CorrVsExpTeach = ({ isPresenting }: TeachSlideProps) => {
  const [activeTab, setActiveTab] = useState<'correlation' | 'experiment'>('correlation')
  const data = {
    correlation: { title: "Correlational Research", points: ["Measures relationship between co-variables", "NO manipulation of variables", "Variables measured as they naturally occur", "CANNOT establish cause and effect", "Third variable problem may exist"], color: "purple" },
    experiment: { title: "Experimental Research", points: ["Tests effect of IV on DV", "IV is MANIPULATED by researcher", "Other variables controlled", "CAN establish cause and effect", "Uses control group/condition"], color: "green" }
  }
  const active = data[activeTab]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-indigo-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>⚖️ Correlations vs Experiments</h2>
        <p className="text-indigo-400">Key differences you MUST know</p>
      </div>
      <div className="flex gap-2 mb-6">
        <button onClick={() => setActiveTab('correlation')} className={`flex-1 px-4 py-3 rounded-xl font-bold transition-all ${activeTab === 'correlation' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}>
          📊 Correlation
        </button>
        <button onClick={() => setActiveTab('experiment')} className={`flex-1 px-4 py-3 rounded-xl font-bold transition-all ${activeTab === 'experiment' ? 'bg-green-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}>
          🧪 Experiment
        </button>
      </div>
      <div className={`p-6 rounded-xl border ${activeTab === 'correlation' ? 'bg-purple-900/30 border-purple-500/30' : 'bg-green-900/30 border-green-500/30'}`}>
        <h3 className={`text-xl font-bold ${activeTab === 'correlation' ? 'text-purple-300' : 'text-green-300'} mb-4`}>{active.title}</h3>
        <ul className="space-y-3">
          {active.points.map((p, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-200">
              <span className={`mt-1 ${activeTab === 'correlation' ? 'text-purple-400' : 'text-green-400'}`}>•</span>
              {p}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 p-4 bg-yellow-900/30 rounded-xl border border-yellow-500/30">
        <p className="text-yellow-300 text-sm">⚠️ <strong>Common Mistake:</strong> Students often say correlations "prove" a relationship. Remember - correlations show a relationship EXISTS but not WHY!</p>
      </div>
    </div>
  )
}

export const CoefficientInterpreter = ({ isPresenting }: TeachSlideProps) => {
  const [inputValue, setInputValue] = useState('')
  const getInterpretation = (val: number) => {
    const abs = Math.abs(val)
    const direction = val > 0 ? 'positive' : val < 0 ? 'negative' : 'no'
    let strength = 'no correlation'
    if (abs >= 0.9) strength = 'Very strong'
    else if (abs >= 0.7) strength = 'Strong'
    else if (abs >= 0.5) strength = 'Moderate'
    else if (abs >= 0.3) strength = 'Weak'
    else if (abs > 0) strength = 'Very weak'
    return { direction, strength, abs }
  }
  const parsed = parseFloat(inputValue)
  const isValid = !isNaN(parsed) && parsed >= -1 && parsed <= 1
  const interpretation = isValid ? getInterpretation(parsed) : null
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-cyan-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>🎯 Coefficient Interpreter</h2>
        <p className="text-cyan-400">Enter a value to see its interpretation</p>
      </div>
      <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter coefficient (e.g., -0.72)"
          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white text-center text-2xl focus:outline-none focus:border-cyan-500"
        />
      </div>
      {inputValue && !isValid && (
        <div className="max-w-md mx-auto p-4 bg-red-900/30 rounded-xl border border-red-500/30">
          <p className="text-red-300 text-center">⚠️ Enter a valid number between -1 and +1</p>
        </div>
      )}
      {interpretation && (
        <div className="max-w-md mx-auto p-6 bg-gray-800/50 rounded-xl border border-cyan-500/30 animate-fadeIn">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-gray-400 text-sm">Direction</p>
              <p className={`text-xl font-bold ${interpretation.direction === 'positive' ? 'text-green-400' : interpretation.direction === 'negative' ? 'text-red-400' : 'text-gray-400'}`}>
                {interpretation.direction === 'positive' ? '↗️ Positive' : interpretation.direction === 'negative' ? '↘️ Negative' : '➖ None'}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Strength</p>
              <p className="text-xl font-bold text-cyan-300">{interpretation.strength}</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="text-gray-300 text-center">
              This is a <strong>{interpretation.strength.toLowerCase()} {interpretation.direction}</strong> correlation
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

// ============= LESSON 32: CASE STUDIES & CONTENT ANALYSIS =============

export const CasestudyTeach = ({ isPresenting }: TeachSlideProps) => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null)
  const cards = [
    { title: "What is a Case Study?", content: "In-depth investigation of a single individual, group, or event. Uses multiple sources of data (interviews, observations, documents).", icon: "🔍" },
    { title: "Famous Examples", content: "HM (amnesia), Phineas Gage (brain damage), Genie (language development), Little Hans (phobia). Each provided unique insights!", icon: "📚" },
    { title: "When Used", content: "When studying rare conditions, unique cases, or when ethical/practical issues prevent experiments.", icon: "❓" },
    { title: "Data Types", content: "Usually qualitative (rich descriptions), but can include quantitative measures too. Often longitudinal (over time).", icon: "📊" }
  ]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-teal-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>📋 Case Studies</h2>
        <p className="text-teal-400">Click cards to learn more</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedCard(selectedCard === idx ? null : idx)}
            className={`p-5 rounded-xl border cursor-pointer transition-all duration-300 ${
              selectedCard === idx ? 'bg-teal-900/40 border-teal-500/50' : 'bg-gray-800/50 border-gray-700 hover:border-teal-500/30'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{card.icon}</span>
              <h3 className="text-lg font-bold text-white">{card.title}</h3>
            </div>
            {selectedCard === idx && <p className="text-gray-300 animate-fadeIn">{card.content}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export const CasestudyEvalTeach = ({ isPresenting }: TeachSlideProps) => {
  const [showStrengths, setShowStrengths] = useState(true)
  const strengths = ["Rich, detailed data about unique cases", "Can generate hypotheses for future research", "Can study cases that can't be experimentally created", "High ecological validity - real situations"]
  const limitations = ["Cannot generalise findings (one person)", "Researcher bias in interpretation", "Time-consuming and expensive", "Cause and effect cannot be established"]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-amber-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>⚖️ Evaluating Case Studies</h2>
        <p className="text-amber-400">Toggle to see strengths and limitations</p>
      </div>
      <div className="flex gap-2 mb-4">
        <button onClick={() => setShowStrengths(true)} className={`flex-1 px-4 py-2 rounded-xl font-bold transition-all ${showStrengths ? 'bg-green-600 text-white' : 'bg-gray-800 text-gray-400'}`}>
          ✅ Strengths
        </button>
        <button onClick={() => setShowStrengths(false)} className={`flex-1 px-4 py-2 rounded-xl font-bold transition-all ${!showStrengths ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-400'}`}>
          ⚠️ Limitations
        </button>
      </div>
      <div className={`p-6 rounded-xl ${showStrengths ? 'bg-green-900/30 border border-green-500/30' : 'bg-red-900/30 border border-red-500/30'}`}>
        <ul className="space-y-3">
          {(showStrengths ? strengths : limitations).map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-200">
              <span className={showStrengths ? 'text-green-400' : 'text-red-400'}>{showStrengths ? '✓' : '✗'}</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export const ContentTeach = ({ isPresenting }: TeachSlideProps) => {
  const [currentStep, setCurrentStep] = useState(0)
  const steps = [
    { title: "1. Select Material", desc: "Choose what to analyse - TV programmes, newspapers, social media, etc. Use sampling (time or event sampling).", icon: "📺" },
    { title: "2. Develop Coding Categories", desc: "Create meaningful units to look for - words, phrases, themes, behaviours. Categories must be operationalised.", icon: "📋" },
    { title: "3. Record Data", desc: "Count frequencies (quantitative) OR identify themes (qualitative/thematic analysis).", icon: "📊" },
    { title: "4. Check Reliability", desc: "Use inter-rater reliability - two coders analyse same material, correlate results (need r ≥ +.80).", icon: "✅" }
  ]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-indigo-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>📰 Content Analysis</h2>
        <p className="text-indigo-400">Studying behaviour through communications</p>
      </div>
      <div className="mb-4">
        <div className="flex gap-2 mb-4">
          {steps.map((_, i) => (
            <button key={i} onClick={() => setCurrentStep(i)} className={`flex-1 h-2 rounded-full transition-all ${currentStep >= i ? 'bg-indigo-500' : 'bg-gray-700'}`} />
          ))}
        </div>
        <div className="p-6 bg-gray-800/50 rounded-xl border border-indigo-500/30">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">{steps[currentStep].icon}</span>
            <h3 className="text-xl font-bold text-white">{steps[currentStep].title}</h3>
          </div>
          <p className="text-gray-300">{steps[currentStep].desc}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <button onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} disabled={currentStep === 0} className="px-4 py-2 bg-gray-700 rounded-lg text-white disabled:opacity-50">
          Previous
        </button>
        <button onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))} disabled={currentStep === steps.length - 1} className="px-4 py-2 bg-indigo-600 rounded-lg text-white disabled:opacity-50">
          Next
        </button>
      </div>
    </div>
  )
}

export const ThematicTeach = ({ isPresenting }: TeachSlideProps) => {
  const [expandedTheme, setExpandedTheme] = useState<number | null>(null)
  const themes = [
    { title: "1. Familiarisation", desc: "Read and re-read the data, noting initial ideas" },
    { title: "2. Generate Codes", desc: "Identify interesting features systematically" },
    { title: "3. Search for Themes", desc: "Collate codes into potential themes" },
    { title: "4. Review Themes", desc: "Check themes work with coded extracts and full dataset" },
    { title: "5. Define Themes", desc: "Name and define each theme clearly" },
    { title: "6. Write Up", desc: "Final analysis with quotes as evidence" }
  ]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-pink-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>🎨 Thematic Analysis</h2>
        <p className="text-pink-400">Braun & Clarke's 6-step process</p>
      </div>
      <div className="space-y-2">
        {themes.map((theme, idx) => (
          <div
            key={idx}
            onClick={() => setExpandedTheme(expandedTheme === idx ? null : idx)}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              expandedTheme === idx ? 'bg-pink-900/30 border-pink-500/30' : 'bg-gray-800/50 border-gray-700 hover:border-pink-500/30'
            }`}
          >
            <h4 className="text-white font-semibold">{theme.title}</h4>
            {expandedTheme === idx && <p className="text-gray-300 mt-2 animate-fadeIn">{theme.desc}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export const ContentCoder = ({ isPresenting }: TeachSlideProps) => {
  const [codingResults, setCodingResults] = useState<Record<string, number>>({ professional: 0, domestic: 0, assertive: 0, passive: 0 })
  const sampleData = [
    { text: "Woman shown cooking dinner for family", category: "domestic" },
    { text: "Man presenting business proposal", category: "professional" },
    { text: "Woman leading team meeting", category: "assertive" },
    { text: "Man waiting for instructions", category: "passive" }
  ]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-violet-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>🏷️ Content Analysis Practice</h2>
        <p className="text-violet-400">Code these adverts for gender stereotypes</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {Object.entries(codingResults).map(([cat, count]) => (
          <div key={cat} className="p-3 bg-gray-800/50 rounded-xl text-center">
            <p className="text-gray-400 text-sm capitalize">{cat}</p>
            <p className="text-2xl font-bold text-violet-400">{count}</p>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {sampleData.map((item, idx) => (
          <div key={idx} className="p-4 bg-gray-800/50 rounded-xl flex justify-between items-center">
            <p className="text-gray-300">{item.text}</p>
            <button
              onClick={() => setCodingResults({ ...codingResults, [item.category]: codingResults[item.category] + 1 })}
              className="px-3 py-1 bg-violet-600 text-white rounded-lg text-sm hover:bg-violet-500"
            >
              Code as {item.category}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

// ============= LESSON 33: RELIABILITY =============

export const ReliabilityIntroTeach = ({ isPresenting }: TeachSlideProps) => {
  const [revealed, setRevealed] = useState<number[]>([])
  const concepts = [
    { title: "What is Reliability?", content: "Consistency - getting the same results when a study is repeated under the same conditions.", icon: "🔄" },
    { title: "Internal Reliability", content: "Consistency WITHIN a measure - do all items in a questionnaire measure the same thing?", icon: "📋" },
    { title: "External Reliability", content: "Consistency OVER TIME - do you get the same results when you repeat the measurement?", icon: "⏰" },
    { title: "Why It Matters", content: "If a study isn't reliable, we can't trust the results. It's essential for scientific credibility.", icon: "⚠️" }
  ]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>🔄 Understanding Reliability</h2>
        <p className="text-blue-400">Click to reveal key concepts</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {concepts.map((c, idx) => (
          <div
            key={idx}
            onClick={() => !revealed.includes(idx) && setRevealed([...revealed, idx])}
            className={`p-5 rounded-xl border cursor-pointer transition-all ${
              revealed.includes(idx) ? 'bg-blue-900/40 border-blue-500/50' : 'bg-gray-800/50 border-gray-700 hover:border-blue-500/30'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{c.icon}</span>
              <h3 className="text-lg font-bold text-white">{c.title}</h3>
            </div>
            {revealed.includes(idx) && <p className="text-gray-300 animate-fadeIn">{c.content}</p>}
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-end">
        <button onClick={() => setRevealed(concepts.map((_, i) => i))} className="text-blue-400 hover:text-blue-300 text-sm">Show All</button>
      </div>
    </div>
  )
}

export const TestretestTeach = ({ isPresenting }: TeachSlideProps) => {
  const [step, setStep] = useState(0)
  const steps = [
    { text: "1. Give the same test to the same participants", icon: "📝" },
    { text: "2. Wait a period of time (e.g., 2 weeks)", icon: "⏰" },
    { text: "3. Administer the test again", icon: "📝" },
    { text: "4. Correlate the two sets of scores", icon: "📊" },
    { text: "5. High correlation (r ≥ +.80) = good reliability", icon: "✅" }
  ]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-green-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>🔁 Test-Retest Reliability</h2>
        <p className="text-green-400">Step through the process</p>
      </div>
      <div className="space-y-3 mb-4">
        {steps.map((s, idx) => (
          <div key={idx} className={`p-4 rounded-xl border transition-all ${idx <= step ? 'bg-green-900/30 border-green-500/30' : 'bg-gray-800/50 border-gray-700 opacity-50'}`}>
            <div className="flex items-center gap-3">
              <span className="text-2xl">{s.icon}</span>
              <p className="text-gray-200">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <button onClick={() => setStep(Math.max(0, step - 1))} className="px-4 py-2 bg-gray-700 rounded-lg text-white">Back</button>
        <button onClick={() => setStep(Math.min(steps.length - 1, step + 1))} className="px-4 py-2 bg-green-600 rounded-lg text-white">Next</button>
      </div>
    </div>
  )
}

export const InterobserverTeach = ({ isPresenting }: TeachSlideProps) => {
  const [showProcess, setShowProcess] = useState(false)
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>👥 Inter-Observer Reliability</h2>
        <p className="text-purple-400">Ensuring observers are consistent</p>
      </div>
      <div className="p-6 bg-gray-800/50 rounded-xl border border-purple-500/30 mb-4">
        <p className="text-gray-200 text-lg">When two or more observers independently observe and record the <strong>same behaviour</strong>, their results should be highly correlated.</p>
      </div>
      <button onClick={() => setShowProcess(!showProcess)} className="w-full px-4 py-3 bg-purple-600 text-white rounded-xl font-semibold mb-4">
        {showProcess ? 'Hide' : 'Show'} Process
      </button>
      {showProcess && (
        <div className="grid grid-cols-4 gap-2 animate-fadeIn">
          <div className="p-3 bg-gray-800/50 rounded-xl text-center">
            <span className="text-3xl">👁️ 👁️</span>
            <p className="text-gray-300 text-sm mt-2">Two observers watch same event</p>
          </div>
          <div className="p-3 bg-gray-800/50 rounded-xl text-center">
            <span className="text-3xl">📝 📝</span>
            <p className="text-gray-300 text-sm mt-2">Record data independently</p>
          </div>
          <div className="p-3 bg-gray-800/50 rounded-xl text-center">
            <span className="text-3xl">📊</span>
            <p className="text-gray-300 text-sm mt-2">Correlate results (need r ≥ +.80)</p>
          </div>
          <div className="p-3 bg-gray-800/50 rounded-xl text-center">
            <span className="text-3xl">✅</span>
            <p className="text-gray-300 text-sm mt-2">High correlation = reliable</p>
          </div>
        </div>
      )}
      <div className="mt-4 p-3 bg-purple-900/30 rounded-xl border border-purple-500/30">
        <p className="text-purple-300 text-sm">💡 Also applies to: <strong>Inter-rater reliability</strong> (content analysis) and <strong>Inter-interviewer reliability</strong></p>
      </div>
    </div>
  )
}

export const ImprovingReliabilityTeach = ({ isPresenting }: TeachSlideProps) => {
  const [activeMethod, setActiveMethod] = useState<string>('questionnaires')
  const methods: Record<string, { tips: string[], icon: string }> = {
    questionnaires: { tips: ["Rewrite ambiguous/complex items", "Replace open questions with closed alternatives", "Remove items that produce low correlations", "Ensure questions aren't open to misinterpretation"], icon: "📋" },
    interviews: { tips: ["Use the same interviewer each time", "Train all interviewers consistently", "Use structured format with fixed questions", "Avoid leading or ambiguous questions"], icon: "🎤" },
    observations: { tips: ["Operationalise behavioural categories clearly", "Make categories measurable and self-evident (e.g., 'pushing' not 'aggression')", "Ensure categories don't overlap", "Train observers to apply categories consistently"], icon: "👁️" },
    experiments: { tips: ["Standardise procedures for all participants", "Use detailed protocols and scripts", "Control extraneous variables consistently", "Document all procedures clearly"], icon: "🔬" }
  }
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-amber-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>🔧 Improving Reliability</h2>
        <p className="text-amber-400">Different methods for different research types</p>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.keys(methods).map(m => (
          <button key={m} onClick={() => setActiveMethod(m)} className={`px-4 py-2 rounded-lg font-semibold capitalize transition-all ${activeMethod === m ? 'bg-amber-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}>
            {methods[m].icon} {m}
          </button>
        ))}
      </div>
      <div className="p-6 bg-amber-900/30 rounded-xl border border-amber-500/30">
        <h4 className="text-amber-300 font-bold mb-3 capitalize">{activeMethod}</h4>
        <ul className="space-y-2">
          {methods[activeMethod].tips.map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-200">
              <span className="text-amber-400">•</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export const ReliabilityAssessor = ({ isPresenting }: TeachSlideProps) => {
  const [scores, setScores] = useState<{ test1: number[], test2: number[] }>({ test1: [8, 12, 15, 10, 14], test2: [9, 11, 16, 9, 13] })
  const calculateCorrelation = (): string => {
    const n = scores.test1.length
    const sum1 = scores.test1.reduce((a, b) => a + b, 0)
    const sum2 = scores.test2.reduce((a, b) => a + b, 0)
    const sum1Sq = scores.test1.reduce((a, b) => a + b * b, 0)
    const sum2Sq = scores.test2.reduce((a, b) => a + b * b, 0)
    const pSum = scores.test1.reduce((a, b, i) => a + b * scores.test2[i], 0)
    const num = pSum - (sum1 * sum2 / n)
    const den = Math.sqrt((sum1Sq - sum1 * sum1 / n) * (sum2Sq - sum2 * sum2 / n))
    return den === 0 ? '0.00' : (num / den).toFixed(2)
  }
  const r = parseFloat(calculateCorrelation())
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-green-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>📊 Reliability Calculator</h2>
        <p className="text-green-400">See how test-retest correlation works</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-4 bg-gray-800/50 rounded-xl">
          <h4 className="text-blue-300 font-bold mb-2">Test 1 Scores</h4>
          {scores.test1.map((s, i) => (
            <input key={i} type="number" value={s} onChange={e => { const newScores = [...scores.test1]; newScores[i] = parseInt(e.target.value) || 0; setScores({ ...scores, test1: newScores }); }}
              className="w-full mb-2 px-3 py-2 bg-gray-900 border border-gray-600 rounded text-white" />
          ))}
        </div>
        <div className="p-4 bg-gray-800/50 rounded-xl">
          <h4 className="text-purple-300 font-bold mb-2">Test 2 Scores</h4>
          {scores.test2.map((s, i) => (
            <input key={i} type="number" value={s} onChange={e => { const newScores = [...scores.test2]; newScores[i] = parseInt(e.target.value) || 0; setScores({ ...scores, test2: newScores }); }}
              className="w-full mb-2 px-3 py-2 bg-gray-900 border border-gray-600 rounded text-white" />
          ))}
        </div>
      </div>
      <div className={`p-4 rounded-xl border ${r >= 0.8 ? 'bg-green-900/30 border-green-500/30' : 'bg-red-900/30 border-red-500/30'}`}>
        <h4 className={`font-bold ${r >= 0.8 ? 'text-green-300' : 'text-red-300'}`}>Correlation: r = {calculateCorrelation()}</h4>
        <p className="text-gray-300 mt-1">{r >= 0.8 ? '✅ Good reliability! (r ≥ +0.80)' : '⚠️ Low reliability - needs improvement (r < +0.80)'}</p>
      </div>
    </div>
  )
}

// ============= LESSON 34: VALIDITY =============

export const ValidityTypesTeach = ({ isPresenting }: TeachSlideProps) => {
  const [selectedType, setSelectedType] = useState<number | null>(null)
  const types = [
    { title: "Internal Validity", desc: "Whether the study measures what it claims to measure. Did the IV cause the change in DV?", icon: "🎯", color: "blue" },
    { title: "External Validity", desc: "Whether findings can be generalised beyond the study - to other people, settings, times.", icon: "🌍", color: "green" },
    { title: "Face Validity", desc: "Does the measure LOOK like it measures what it's supposed to? (Surface level check)", icon: "👀", color: "purple" },
    { title: "Concurrent Validity", desc: "Does the measure correlate with an established measure of the same thing?", icon: "🔗", color: "orange" }
  ]
  const colorMap: Record<string, string> = { blue: 'bg-blue-900/40 border-blue-500', green: 'bg-green-900/40 border-green-500', purple: 'bg-purple-900/40 border-purple-500', orange: 'bg-orange-900/40 border-orange-500' }
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-cyan-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>🎯 Types of Validity</h2>
        <p className="text-cyan-400">Click each type to learn more</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {types.map((t, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedType(selectedType === idx ? null : idx)}
            className={`p-5 rounded-xl border cursor-pointer transition-all ${selectedType === idx ? colorMap[t.color] : 'bg-gray-800/50 border-gray-700 hover:border-cyan-500/30'}`}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{t.icon}</span>
              <h3 className="text-lg font-bold text-white">{t.title}</h3>
            </div>
            {selectedType === idx && <p className="text-gray-300 animate-fadeIn">{t.desc}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export const FaceConcurrentTeach = ({ isPresenting }: TeachSlideProps) => {
  const [activeTab, setActiveTab] = useState<'face' | 'concurrent'>('face')
  const data = {
    face: { title: "Face Validity", icon: "👀", points: ["Does it LOOK like it measures what it should?", "Subjective assessment by experts/participants", "Easy and quick to establish", "Limited - just surface level, can be misleading"], example: "A memory test with word recall tasks has face validity for measuring memory." },
    concurrent: { title: "Concurrent Validity", icon: "🔗", points: ["Correlate new measure with established measure", "Both administered at the same time", "High correlation = good concurrent validity", "More objective than face validity"], example: "A new IQ test correlates highly (+0.85) with the established WAIS test." }
  }
  const active = data[activeTab]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-indigo-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>⚖️ Face vs Concurrent Validity</h2>
        <p className="text-indigo-400">Two ways to assess if a measure is valid</p>
      </div>
      <div className="flex gap-2 mb-4">
        <button onClick={() => setActiveTab('face')} className={`flex-1 px-4 py-2 rounded-xl font-bold ${activeTab === 'face' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-400'}`}>
          👀 Face Validity
        </button>
        <button onClick={() => setActiveTab('concurrent')} className={`flex-1 px-4 py-2 rounded-xl font-bold ${activeTab === 'concurrent' ? 'bg-orange-600 text-white' : 'bg-gray-800 text-gray-400'}`}>
          🔗 Concurrent Validity
        </button>
      </div>
      <div className={`p-6 rounded-xl ${activeTab === 'face' ? 'bg-purple-900/30 border border-purple-500/30' : 'bg-orange-900/30 border border-orange-500/30'}`}>
        <h3 className={`text-xl font-bold ${activeTab === 'face' ? 'text-purple-300' : 'text-orange-300'} mb-3`}>{active.icon} {active.title}</h3>
        <ul className="space-y-2 mb-4">
          {active.points.map((p, i) => (
            <li key={i} className="text-gray-200 flex items-start gap-2">
              <span className={activeTab === 'face' ? 'text-purple-400' : 'text-orange-400'}>•</span>
              {p}
            </li>
          ))}
        </ul>
        <div className="p-3 bg-gray-800/50 rounded-lg">
          <p className="text-gray-400 text-sm"><strong>Example:</strong> {active.example}</p>
        </div>
      </div>
    </div>
  )
}

export const EcologicalTemporalTeach = ({ isPresenting }: TeachSlideProps) => {
  const [showExamples, setShowExamples] = useState({ eco: false, temp: false })
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-emerald-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>🌍 External Validity Types</h2>
        <p className="text-emerald-400">Can we generalise beyond the study?</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 bg-green-900/30 rounded-xl border border-green-500/30">
          <h3 className="text-lg font-bold text-green-300 mb-2">🌿 Ecological Validity</h3>
          <p className="text-gray-200 mb-3">Can findings be generalised to <strong>other settings</strong>? Does the study reflect real-life situations?</p>
          <button onClick={() => setShowExamples({ ...showExamples, eco: !showExamples.eco })} className="text-green-400 text-sm hover:text-green-300">
            {showExamples.eco ? 'Hide' : 'Show'} Example
          </button>
          {showExamples.eco && (
            <div className="mt-2 p-3 bg-gray-800/50 rounded-lg animate-fadeIn">
              <p className="text-gray-400 text-sm">A lab study of memory using word lists may lack ecological validity because we rarely memorise random words in real life.</p>
            </div>
          )}
        </div>
        <div className="p-5 bg-blue-900/30 rounded-xl border border-blue-500/30">
          <h3 className="text-lg font-bold text-blue-300 mb-2">⏰ Temporal Validity</h3>
          <p className="text-gray-200 mb-3">Can findings be generalised to <strong>other time periods</strong>? Would results be the same today?</p>
          <button onClick={() => setShowExamples({ ...showExamples, temp: !showExamples.temp })} className="text-blue-400 text-sm hover:text-blue-300">
            {showExamples.temp ? 'Hide' : 'Show'} Example
          </button>
          {showExamples.temp && (
            <div className="mt-2 p-3 bg-gray-800/50 rounded-lg animate-fadeIn">
              <p className="text-gray-400 text-sm">Milgram's (1963) obedience study may lack temporal validity - attitudes to authority have changed since the 1960s.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export const ImprovingValidityTeach = ({ isPresenting }: TeachSlideProps) => {
  const [expanded, setExpanded] = useState<number | null>(null)
  const strategies = [
    { title: "Increase Realism", desc: "Use naturalistic settings, realistic tasks, and meaningful stimuli", icon: "🎭" },
    { title: "Use Diverse Samples", desc: "Recruit participants from different populations, ages, cultures", icon: "👥" },
    { title: "Control Extraneous Variables", desc: "Ensure only the IV affects the DV through standardisation", icon: "🔬" },
    { title: "Replicate Studies", desc: "Repeat with different samples, settings, and time periods", icon: "🔄" },
    { title: "Use Multiple Measures", desc: "Triangulation - use different methods to measure the same thing", icon: "📐" }
  ]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-amber-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>🔧 Improving Validity</h2>
        <p className="text-amber-400">Strategies to increase internal and external validity</p>
      </div>
      <div className="space-y-2">
        {strategies.map((s, idx) => (
          <div
            key={idx}
            onClick={() => setExpanded(expanded === idx ? null : idx)}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${expanded === idx ? 'bg-amber-900/30 border-amber-500/30' : 'bg-gray-800/50 border-gray-700 hover:border-amber-500/30'}`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{s.icon}</span>
              <h4 className="text-white font-semibold">{s.title}</h4>
            </div>
            {expanded === idx && <p className="text-gray-300 mt-2 ml-10 animate-fadeIn">{s.desc}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export const ValidityChecker = ({ isPresenting }: TeachSlideProps) => {
  const [scenario, setScenario] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const scenarios = [
    { text: "A lab study measures reaction time using a computer task with artificial stimuli", issue: "Low ecological validity - artificial task doesn't reflect real-world reactions", type: "Ecological" },
    { text: "Asch's (1951) conformity study using line judgement tasks", issue: "Low temporal validity - social norms have changed; low ecological validity - artificial task", type: "Temporal & Ecological" },
    { text: "A new anxiety questionnaire is assessed by psychology professors who confirm it 'looks right'", issue: "Only has face validity - needs concurrent validity check with established measure", type: "Face (limited)" },
    { text: "Participants know they're being observed so behave differently", issue: "Low internal validity due to demand characteristics", type: "Internal" }
  ]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-teal-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>🔍 Validity Issue Spotter</h2>
        <p className="text-teal-400">Identify the validity issues in each scenario</p>
      </div>
      <div className="p-6 bg-gray-800/50 rounded-xl border border-teal-500/30 mb-4">
        <p className="text-gray-200 text-lg mb-4">Scenario {scenario + 1}/{scenarios.length}</p>
        <p className="text-white text-xl">{scenarios[scenario].text}</p>
      </div>
      <button onClick={() => setShowAnswer(!showAnswer)} className="w-full px-4 py-3 bg-teal-600 text-white rounded-xl font-semibold mb-4">
        {showAnswer ? 'Hide Answer' : 'Show Answer'}
      </button>
      {showAnswer && (
        <div className="p-4 bg-teal-900/30 rounded-xl border border-teal-500/30 animate-fadeIn mb-4">
          <p className="text-teal-300 font-bold">Validity Type: {scenarios[scenario].type}</p>
          <p className="text-gray-300 mt-2">{scenarios[scenario].issue}</p>
        </div>
      )}
      <div className="flex gap-2">
        <button onClick={() => { setScenario(Math.max(0, scenario - 1)); setShowAnswer(false); }} className="flex-1 px-4 py-2 bg-gray-700 rounded-lg text-white">Previous</button>
        <button onClick={() => { setScenario(Math.min(scenarios.length - 1, scenario + 1)); setShowAnswer(false); }} className="flex-1 px-4 py-2 bg-teal-600 rounded-lg text-white">Next</button>
      </div>
    </div>
  )
}

// ============= LESSON 35: CHOOSING A STATISTICAL TEST =============

export const TestFactorsTeach = ({ isPresenting }: TeachSlideProps) => {
  const [currentFactor, setCurrentFactor] = useState(0)
  const factors = [
    { title: "1. Difference or Correlation?", desc: "Are you testing for a DIFFERENCE between conditions/groups, or a RELATIONSHIP between co-variables?", icon: "↔️", examples: "Difference: 'Is Group A faster than Group B?' | Correlation: 'Is there a relationship between age and memory?'" },
    { title: "2. Experimental Design", desc: "For difference tests: Independent groups (different pps), Repeated measures (same pps), or Matched pairs?", icon: "👥", examples: "Independent: Different people in each condition | Repeated: Same people do both conditions" },
    { title: "3. Level of Measurement", desc: "What type of data? Nominal (categories), Ordinal (ranks), or Interval (meaningful numbers with equal intervals)?", icon: "📏", examples: "Nominal: Yes/No | Ordinal: 1st, 2nd, 3rd | Interval: Time in seconds, temperature" }
  ]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>🧮 Three Key Factors</h2>
        <p className="text-blue-400">What you need to know to choose a test</p>
      </div>
      <div className="flex gap-2 mb-4">
        {factors.map((_, i) => (
          <button key={i} onClick={() => setCurrentFactor(i)} className={`flex-1 px-4 py-2 rounded-lg font-semibold ${currentFactor === i ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400'}`}>
            Factor {i + 1}
          </button>
        ))}
      </div>
      <div className="p-6 bg-gray-800/50 rounded-xl border border-blue-500/30">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">{factors[currentFactor].icon}</span>
          <h3 className="text-xl font-bold text-white">{factors[currentFactor].title}</h3>
        </div>
        <p className="text-gray-200 mb-4">{factors[currentFactor].desc}</p>
        <div className="p-3 bg-blue-900/30 rounded-lg">
          <p className="text-blue-300 text-sm">{factors[currentFactor].examples}</p>
        </div>
      </div>
    </div>
  )
}

export const LevelsMeasurementTeach = ({ isPresenting }: TeachSlideProps) => {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null)
  const levels = [
    { title: "Nominal", desc: "Categories with no order. Data in distinct groups.", examples: ["Male/Female", "Yes/No", "Eye colour"], icon: "🏷️", color: "pink" },
    { title: "Ordinal", desc: "Data in order but gaps between values aren't equal.", examples: ["Race positions (1st, 2nd)", "Likert scales", "Grades (A, B, C)"], icon: "📊", color: "orange" },
    { title: "Interval", desc: "Meaningful numbers with equal intervals. True zero possible.", examples: ["Temperature", "Time in seconds", "Test scores"], icon: "📏", color: "green" }
  ]
  const colorMap: Record<string, string> = { pink: 'bg-pink-900/40 border-pink-500', orange: 'bg-orange-900/40 border-orange-500', green: 'bg-green-900/40 border-green-500' }
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-violet-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>📏 Levels of Measurement</h2>
        <p className="text-violet-400">Click each level to see details and examples</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {levels.map((level, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedLevel(selectedLevel === idx ? null : idx)}
            className={`p-5 rounded-xl border cursor-pointer transition-all ${selectedLevel === idx ? colorMap[level.color] : 'bg-gray-800/50 border-gray-700 hover:border-violet-500/30'}`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{level.icon}</span>
              <h3 className="text-lg font-bold text-white">{level.title}</h3>
            </div>
            {selectedLevel === idx && (
              <div className="animate-fadeIn">
                <p className="text-gray-300 mb-3">{level.desc}</p>
                <div className="space-y-1">
                  {level.examples.map((ex, i) => (
                    <p key={i} className="text-gray-400 text-sm">• {ex}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 p-4 bg-violet-900/30 rounded-xl border border-violet-500/30">
        <p className="text-violet-300 text-sm">💡 <strong>Remember:</strong> Ordinal data CAN be used with parametric tests if it approximates interval data (e.g., treating Likert scale totals as interval)</p>
      </div>
    </div>
  )
}

export const TestSelectorSim = ({ isPresenting }: TeachSlideProps) => {
  const [answers, setAnswers] = useState({ type: '', design: '', level: '' })
  const getTest = () => {
    if (answers.type === 'correlation') {
      return answers.level === 'interval' ? 'Pearson\'s r' : 'Spearman\'s rho'
    }
    if (answers.type === 'difference') {
      if (answers.design === 'independent') {
        if (answers.level === 'nominal') return 'Chi-squared'
        return answers.level === 'interval' ? 'Unrelated t-test' : 'Mann-Whitney U'
      } else {
        return answers.level === 'interval' ? 'Related t-test' : 'Wilcoxon'
      }
    }
    return null
  }
  const result = answers.type && (answers.type === 'correlation' || answers.design) && answers.level ? getTest() : null
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-cyan-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>🔬 Test Selector</h2>
        <p className="text-cyan-400">Answer the questions to find the right test</p>
      </div>
      <div className="space-y-4 mb-6">
        <div className="p-4 bg-gray-800/50 rounded-xl">
          <p className="text-white font-semibold mb-2">1. What are you testing?</p>
          <div className="flex gap-2">
            <button onClick={() => setAnswers({ ...answers, type: 'difference' })} className={`flex-1 px-4 py-2 rounded-lg ${answers.type === 'difference' ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-300'}`}>Difference</button>
            <button onClick={() => setAnswers({ ...answers, type: 'correlation', design: '' })} className={`flex-1 px-4 py-2 rounded-lg ${answers.type === 'correlation' ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-300'}`}>Correlation</button>
          </div>
        </div>
        {answers.type === 'difference' && (
          <div className="p-4 bg-gray-800/50 rounded-xl animate-fadeIn">
            <p className="text-white font-semibold mb-2">2. What design?</p>
            <div className="flex gap-2">
              <button onClick={() => setAnswers({ ...answers, design: 'independent' })} className={`flex-1 px-4 py-2 rounded-lg ${answers.design === 'independent' ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-300'}`}>Independent</button>
              <button onClick={() => setAnswers({ ...answers, design: 'repeated' })} className={`flex-1 px-4 py-2 rounded-lg ${answers.design === 'repeated' ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-300'}`}>Repeated/Matched</button>
            </div>
          </div>
        )}
        {(answers.type === 'correlation' || answers.design) && (
          <div className="p-4 bg-gray-800/50 rounded-xl animate-fadeIn">
            <p className="text-white font-semibold mb-2">{answers.type === 'correlation' ? '2' : '3'}. Level of measurement?</p>
            <div className="flex gap-2">
              {answers.type === 'difference' && answers.design === 'independent' && (
                <button onClick={() => setAnswers({ ...answers, level: 'nominal' })} className={`flex-1 px-4 py-2 rounded-lg ${answers.level === 'nominal' ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-300'}`}>Nominal</button>
              )}
              <button onClick={() => setAnswers({ ...answers, level: 'ordinal' })} className={`flex-1 px-4 py-2 rounded-lg ${answers.level === 'ordinal' ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-300'}`}>Ordinal</button>
              <button onClick={() => setAnswers({ ...answers, level: 'interval' })} className={`flex-1 px-4 py-2 rounded-lg ${answers.level === 'interval' ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-300'}`}>Interval</button>
            </div>
          </div>
        )}
      </div>
      {result && (
        <div className="p-6 bg-green-900/30 rounded-xl border border-green-500/30 animate-fadeIn">
          <h3 className="text-2xl font-bold text-green-300 text-center">✅ Use: {result}</h3>
        </div>
      )}
      <button onClick={() => setAnswers({ type: '', design: '', level: '' })} className="mt-4 w-full px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600">Reset</button>
    </div>
  )
}

// ============= LESSON 36: PROBABILITY & SIGNIFICANCE =============

export const ProbabilityTeach = ({ isPresenting }: TeachSlideProps) => {
  const [revealedCards, setRevealedCards] = useState<number[]>([])
  const cards = [
    { title: "What is Probability?", content: "The likelihood something will happen by chance, expressed as a value between 0 and 1 (or 0% to 100%).", icon: "🎲" },
    { title: "In Psychology", content: "We ask: 'What's the probability our results occurred by chance?' If low, results are likely meaningful.", icon: "🧠" },
    { title: "The p Value", content: "p = probability. A small p value (e.g., p < 0.05) means results are unlikely to be due to chance.", icon: "📊" },
    { title: "Decision Making", content: "If p is small enough, we reject the null hypothesis and accept there's a real effect.", icon: "✅" }
  ]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>🎲 Understanding Probability</h2>
        <p className="text-purple-400">Click cards to reveal</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {cards.map((card, idx) => (
          <div
            key={idx}
            onClick={() => !revealedCards.includes(idx) && setRevealedCards([...revealedCards, idx])}
            className={`p-5 rounded-xl border cursor-pointer transition-all ${revealedCards.includes(idx) ? 'bg-purple-900/40 border-purple-500/50' : 'bg-gray-800/50 border-gray-700 hover:border-purple-500/30'}`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{card.icon}</span>
              <h3 className="font-bold text-white">{card.title}</h3>
            </div>
            {revealedCards.includes(idx) ? <p className="text-gray-300 animate-fadeIn">{card.content}</p> : <p className="text-gray-500 italic">Click to reveal...</p>}
          </div>
        ))}
      </div>
      <button onClick={() => setRevealedCards(cards.map((_, i) => i))} className="text-purple-400 hover:text-purple-300 text-sm">Show All</button>
    </div>
  )
}

export const SignificanceTeach = ({ isPresenting }: TeachSlideProps) => {
  const [activeLevel, setActiveLevel] = useState(1)
  const levels = [
    { value: "p < 0.10 (10%)", desc: "Lenient - 10% chance of being wrong. Used in pilot studies.", risk: "Higher risk of Type I error", color: "yellow" },
    { value: "p < 0.05 (5%)", desc: "Standard in psychology - 5% chance results are due to chance.", risk: "Good balance of Type I and II errors", color: "green" },
    { value: "p < 0.01 (1%)", desc: "Stringent - only 1% chance. Used when consequences of error are serious.", risk: "Lower Type I error, higher Type II", color: "blue" }
  ]
  const colorMap: Record<string, string> = { yellow: 'bg-yellow-900/40 border-yellow-500', green: 'bg-green-900/40 border-green-500', blue: 'bg-blue-900/40 border-blue-500' }
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-green-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>📊 Significance Levels</h2>
        <p className="text-green-400">The threshold for accepting results as significant</p>
      </div>
      <div className="flex gap-2 mb-4">
        {levels.map((_, i) => (
          <button key={i} onClick={() => setActiveLevel(i)} className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all ${activeLevel === i ? 'bg-green-600 text-white' : 'bg-gray-800 text-gray-400'}`}>
            {levels[i].value.split(' ')[0]}
          </button>
        ))}
      </div>
      <div className={`p-6 rounded-xl border ${colorMap[levels[activeLevel].color]}`}>
        <h3 className="text-xl font-bold text-white mb-2">{levels[activeLevel].value}</h3>
        <p className="text-gray-200 mb-3">{levels[activeLevel].desc}</p>
        <p className="text-gray-400 text-sm">{levels[activeLevel].risk}</p>
      </div>
      <div className="mt-4 p-4 bg-gray-800/50 rounded-xl">
        <p className="text-gray-300 text-sm">💡 <strong>Key Point:</strong> p {'<'} 0.05 means there is a less than 5% probability that results are due to chance alone.</p>
      </div>
    </div>
  )
}

export const CriticalValuesTeach = ({ isPresenting }: TeachSlideProps) => {
  const [step, setStep] = useState(0)
  const steps = [
    { text: "1. Calculate your test statistic using the formula", icon: "🔢" },
    { text: "2. Find the critical value table for your test", icon: "📋" },
    { text: "3. Locate the row for your sample size (N or df)", icon: "👆" },
    { text: "4. Find the column for your significance level (usually 0.05)", icon: "👉" },
    { text: "5. Compare: calculated value vs critical value", icon: "⚖️" }
  ]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-indigo-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>📋 Using Critical Value Tables</h2>
        <p className="text-indigo-400">Step through the process</p>
      </div>
      <div className="space-y-3 mb-4">
        {steps.map((s, idx) => (
          <div key={idx} className={`p-4 rounded-xl border transition-all ${idx <= step ? 'bg-indigo-900/30 border-indigo-500/30' : 'bg-gray-800/50 border-gray-700 opacity-50'}`}>
            <div className="flex items-center gap-3">
              <span className="text-2xl">{s.icon}</span>
              <p className="text-gray-200">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <button onClick={() => setStep(Math.max(0, step - 1))} className="flex-1 px-4 py-2 bg-gray-700 rounded-lg text-white">Back</button>
        <button onClick={() => setStep(Math.min(steps.length - 1, step + 1))} className="flex-1 px-4 py-2 bg-indigo-600 rounded-lg text-white">Next</button>
      </div>
    </div>
  )
}

export const TypeErrorsTeach = ({ isPresenting }: TeachSlideProps) => {
  const [activeTab, setActiveTab] = useState<'type1' | 'type2'>('type1')
  const errors = {
    type1: { title: "Type I Error", desc: "Rejecting the null hypothesis when it's TRUE (false positive)", example: "Concluding a drug works when it actually doesn't", cause: "Significance level too lenient (e.g., p < 0.10)", color: "red" },
    type2: { title: "Type II Error", desc: "Accepting the null hypothesis when it's FALSE (false negative)", example: "Concluding a drug doesn't work when it actually does", cause: "Significance level too stringent (e.g., p < 0.01) or small sample", color: "blue" }
  }
  const active = errors[activeTab]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-amber-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>⚠️ Type I vs Type II Errors</h2>
        <p className="text-amber-400">Two ways statistical decisions can go wrong</p>
      </div>
      <div className="flex gap-2 mb-4">
        <button onClick={() => setActiveTab('type1')} className={`flex-1 px-4 py-3 rounded-xl font-bold ${activeTab === 'type1' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-400'}`}>
          Type I Error
        </button>
        <button onClick={() => setActiveTab('type2')} className={`flex-1 px-4 py-3 rounded-xl font-bold ${activeTab === 'type2' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400'}`}>
          Type II Error
        </button>
      </div>
      <div className={`p-6 rounded-xl ${activeTab === 'type1' ? 'bg-red-900/30 border border-red-500/30' : 'bg-blue-900/30 border border-blue-500/30'}`}>
        <h3 className={`text-xl font-bold ${activeTab === 'type1' ? 'text-red-300' : 'text-blue-300'} mb-3`}>{active.title}</h3>
        <p className="text-gray-200 mb-4">{active.desc}</p>
        <div className="p-3 bg-gray-800/50 rounded-lg mb-3">
          <p className="text-gray-400 text-sm"><strong>Example:</strong> {active.example}</p>
        </div>
        <p className="text-gray-400 text-sm"><strong>Common cause:</strong> {active.cause}</p>
      </div>
    </div>
  )
}

export const SignificanceCalculator = ({ isPresenting }: TeachSlideProps) => {
  const [values, setValues] = useState({ calculated: '', critical: '', hasR: false })
  const calc = parseFloat(values.calculated)
  const crit = parseFloat(values.critical)
  const isValid = !isNaN(calc) && !isNaN(crit)
  const isSignificant = values.hasR ? calc >= crit : calc <= crit
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-teal-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>🧮 Significance Checker</h2>
        <p className="text-teal-400">Enter your values to check significance</p>
      </div>
      <div className="max-w-md mx-auto space-y-4">
        <div>
          <label className="text-gray-300 text-sm">Calculated Value</label>
          <input type="text" value={values.calculated} onChange={(e) => setValues({ ...values, calculated: e.target.value })}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white" placeholder="e.g., 23" />
        </div>
        <div>
          <label className="text-gray-300 text-sm">Critical Value</label>
          <input type="text" value={values.critical} onChange={(e) => setValues({ ...values, critical: e.target.value })}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white" placeholder="e.g., 27" />
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" checked={values.hasR} onChange={(e) => setValues({ ...values, hasR: e.target.checked })}
            className="w-5 h-5 rounded" id="hasR" />
          <label htmlFor="hasR" className="text-gray-300 text-sm">Test with 'r' in name (correlation tests, Chi-squared) - calculated must be GREATER</label>
        </div>
        {isValid && (
          <div className={`p-6 rounded-xl border ${isSignificant ? 'bg-green-900/30 border-green-500/30' : 'bg-red-900/30 border-red-500/30'}`}>
            <h4 className={`text-xl font-bold ${isSignificant ? 'text-green-300' : 'text-red-300'}`}>
              {isSignificant ? '✅ Significant!' : '❌ Not Significant'}
            </h4>
            <p className="text-gray-300 mt-2">
              {values.hasR
                ? `Calculated (${calc}) ${isSignificant ? '≥' : '<'} Critical (${crit})`
                : `Calculated (${calc}) ${isSignificant ? '≤' : '>'} Critical (${crit})`}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

// ============= More teach slides would continue here for Lessons 37-42 =============
// Due to the large number of components, I'll include a few more key ones

// LESSON 37: Non-Parametric Tests
export const NonparamIntroTeach = ({ isPresenting }: TeachSlideProps) => {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const cards = [
    { title: "What are Non-Parametric Tests?", content: "Statistical tests that make NO assumptions about the distribution of data. Used with ordinal data or when parametric assumptions aren't met.", icon: "📊" },
    { title: "When to Use", content: "When data is ordinal (ranks), when data isn't normally distributed, or when sample is small.", icon: "❓" },
    { title: "Advantages", content: "Can be used with any data distribution. Easier calculations. Fewer assumptions to check.", icon: "✅" },
    { title: "Disadvantages", content: "Less powerful than parametric tests - more likely to make Type II errors. Converts interval to ordinal, losing information.", icon: "⚠️" }
  ]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-orange-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>📊 Non-Parametric Tests</h2>
        <p className="text-orange-400">Tests that work with ordinal data</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {cards.map((card, idx) => (
          <div key={idx} onClick={() => setActiveCard(activeCard === idx ? null : idx)}
            className={`p-5 rounded-xl border cursor-pointer transition-all ${activeCard === idx ? 'bg-orange-900/40 border-orange-500/50' : 'bg-gray-800/50 border-gray-700 hover:border-orange-500/30'}`}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{card.icon}</span>
              <h3 className="font-bold text-white">{card.title}</h3>
            </div>
            {activeCard === idx && <p className="text-gray-300 animate-fadeIn">{card.content}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export const MannwhitneyTeach = ({ isPresenting }: TeachSlideProps) => {
  const [step, setStep] = useState(0)
  const steps = [
    { text: "1. Combine all scores and rank them (lowest = 1)", icon: "📝" },
    { text: "2. Add up ranks for each group separately", icon: "➕" },
    { text: "3. Use smaller rank total as U₁", icon: "📊" },
    { text: "4. Calculate U₂ = n₁n₂ + n₁(n₁+1)/2 - R₁", icon: "🔢" },
    { text: "5. Use smaller U value as your test statistic", icon: "📉" },
    { text: "6. Compare with critical value (must be ≤ to be significant)", icon: "✅" }
  ]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>📈 Mann-Whitney U Test</h2>
        <p className="text-blue-400">For independent groups with ordinal data</p>
      </div>
      <div className="space-y-3 mb-4">
        {steps.map((s, idx) => (
          <div key={idx} className={`p-4 rounded-xl border transition-all ${idx <= step ? 'bg-blue-900/30 border-blue-500/30' : 'bg-gray-800/50 border-gray-700 opacity-50'}`}>
            <div className="flex items-center gap-3">
              <span className="text-2xl">{s.icon}</span>
              <p className="text-gray-200">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <button onClick={() => setStep(Math.max(0, step - 1))} className="flex-1 px-4 py-2 bg-gray-700 rounded-lg text-white">Back</button>
        <button onClick={() => setStep(Math.min(steps.length - 1, step + 1))} className="flex-1 px-4 py-2 bg-blue-600 rounded-lg text-white">Next</button>
      </div>
    </div>
  )
}

export const WilcoxonTeach = ({ isPresenting }: TeachSlideProps) => {
  const [step, setStep] = useState(0)
  const steps = [
    { text: "1. Calculate difference between paired scores", icon: "➖" },
    { text: "2. Ignore any zero differences", icon: "🚫" },
    { text: "3. Rank the differences by absolute value (ignore sign)", icon: "📊" },
    { text: "4. Add up ranks of positive differences (T+)", icon: "➕" },
    { text: "5. Add up ranks of negative differences (T-)", icon: "➖" },
    { text: "6. Smaller T value is your test statistic (must be ≤ critical value)", icon: "✅" }
  ]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>📊 Wilcoxon Signed-Ranks Test</h2>
        <p className="text-purple-400">For repeated measures/matched pairs with ordinal data</p>
      </div>
      <div className="space-y-3 mb-4">
        {steps.map((s, idx) => (
          <div key={idx} className={`p-4 rounded-xl border transition-all ${idx <= step ? 'bg-purple-900/30 border-purple-500/30' : 'bg-gray-800/50 border-gray-700 opacity-50'}`}>
            <div className="flex items-center gap-3">
              <span className="text-2xl">{s.icon}</span>
              <p className="text-gray-200">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <button onClick={() => setStep(Math.max(0, step - 1))} className="flex-1 px-4 py-2 bg-gray-700 rounded-lg text-white">Back</button>
        <button onClick={() => setStep(Math.min(steps.length - 1, step + 1))} className="flex-1 px-4 py-2 bg-purple-600 rounded-lg text-white">Next</button>
      </div>
    </div>
  )
}

// LESSON 42: Features of Science
export const ScienceFeaturesTeach = ({ isPresenting }: TeachSlideProps) => {
  const [revealedFeatures, setRevealedFeatures] = useState<number[]>([])
  const features = [
    { title: "Objectivity", content: "Research is unbiased and not influenced by personal feelings. Achieved through standardised procedures and operationalised variables.", icon: "🎯" },
    { title: "Control", content: "Controlling extraneous variables to establish cause and effect. Allows us to say IV caused changes in DV.", icon: "🔬" },
    { title: "Replicability", content: "Studies can be repeated by others to verify findings. Requires detailed methods and standardised procedures.", icon: "🔄" },
    { title: "Hypothesis Testing", content: "Making predictions that can be tested. Using evidence to support or refute theories.", icon: "📊" }
  ]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-indigo-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>🔬 Features of Science</h2>
        <p className="text-indigo-400">Click to reveal each feature</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {features.map((f, idx) => (
          <div key={idx} onClick={() => !revealedFeatures.includes(idx) && setRevealedFeatures([...revealedFeatures, idx])}
            className={`p-5 rounded-xl border cursor-pointer transition-all ${revealedFeatures.includes(idx) ? 'bg-indigo-900/40 border-indigo-500/50' : 'bg-gray-800/50 border-gray-700 hover:border-indigo-500/30'}`}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{f.icon}</span>
              <h3 className="font-bold text-white">{f.title}</h3>
            </div>
            {revealedFeatures.includes(idx) ? <p className="text-gray-300 animate-fadeIn">{f.content}</p> : <p className="text-gray-500 italic">Click to reveal...</p>}
          </div>
        ))}
      </div>
      <button onClick={() => setRevealedFeatures(features.map((_, i) => i))} className="text-indigo-400 hover:text-indigo-300 text-sm">Show All</button>
    </div>
  )
}

export const FalsifiabilityTeach = ({ isPresenting }: TeachSlideProps) => {
  const [showExample, setShowExample] = useState(false)
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-red-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>❌ Falsifiability</h2>
        <p className="text-red-400">Popper's criterion for science</p>
      </div>
      <div className="p-6 bg-gray-800/50 rounded-xl border border-red-500/30 mb-4">
        <p className="text-gray-200 text-lg">A scientific theory must be <strong>falsifiable</strong> - it must be possible to prove it wrong. If a theory explains everything and can never be disproved, it's not scientific.</p>
      </div>
      <button onClick={() => setShowExample(!showExample)} className="w-full px-4 py-3 bg-red-600 text-white rounded-xl font-semibold mb-4">
        {showExample ? 'Hide' : 'Show'} Freud Example
      </button>
      {showExample && (
        <div className="p-4 bg-red-900/30 rounded-xl border border-red-500/30 animate-fadeIn">
          <h4 className="text-red-300 font-bold mb-2">Freud's Psychoanalysis - NOT Falsifiable?</h4>
          <p className="text-gray-300 mb-2">Popper argued Freud's theories could explain ANY behaviour:</p>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>• Person is generous → sublimated aggression</li>
            <li>• Person is aggressive → failed sublimation</li>
            <li>• Either way, theory is "confirmed"</li>
          </ul>
          <p className="text-gray-300 mt-2">If a theory can't be proved wrong, it's not science!</p>
        </div>
      )}
    </div>
  )
}

export const ParadigmsTeach = ({ isPresenting }: TeachSlideProps) => {
  const [stage, setStage] = useState(0)
  const stages = [
    { title: "Pre-Science", desc: "No shared paradigm. Competing schools of thought.", icon: "❓" },
    { title: "Normal Science", desc: "Dominant paradigm accepted. Scientists work within it.", icon: "📚" },
    { title: "Anomalies", desc: "Findings that don't fit the paradigm accumulate.", icon: "⚠️" },
    { title: "Crisis & Revolution", desc: "Paradigm shift! New paradigm replaces the old.", icon: "💥" }
  ]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-amber-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>🔄 Kuhn's Paradigm Shifts</h2>
        <p className="text-amber-400">How scientific revolutions happen</p>
      </div>
      <div className="space-y-3 mb-4">
        {stages.map((s, idx) => (
          <div key={idx} className={`p-4 rounded-xl border transition-all ${idx <= stage ? 'bg-amber-900/30 border-amber-500/30' : 'bg-gray-800/50 border-gray-700 opacity-50'}`}>
            <div className="flex items-center gap-3">
              <span className="text-2xl">{s.icon}</span>
              <div>
                <h4 className="text-white font-semibold">{s.title}</h4>
                {idx <= stage && <p className="text-gray-300 text-sm">{s.desc}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <button onClick={() => setStage(Math.max(0, stage - 1))} className="flex-1 px-4 py-2 bg-gray-700 rounded-lg text-white">Back</button>
        <button onClick={() => setStage(Math.min(stages.length - 1, stage + 1))} className="flex-1 px-4 py-2 bg-amber-600 rounded-lg text-white">Next</button>
      </div>
      <div className="mt-4 p-4 bg-gray-800/50 rounded-xl">
        <p className="text-gray-300 text-sm">💡 <strong>Psychology Example:</strong> Shift from behaviourism (focus on observable behaviour) to cognitive psychology (focus on mental processes)</p>
      </div>
    </div>
  )
}

export const PsychAsScienceTeach = ({ isPresenting }: TeachSlideProps) => {
  const [activeTab, setActiveTab] = useState<'yes' | 'no'>('yes')
  const data = {
    yes: { title: "Psychology IS a Science", points: ["Uses scientific method (hypothesis testing, experiments)", "Has objectivity through standardised procedures", "Studies can be replicated", "Uses empirical methods - observable, measurable data"], color: "green" },
    no: { title: "Psychology is NOT a Science", points: ["Lacks a single paradigm (multiple competing approaches)", "Human behaviour is too complex to control all variables", "Subjective experiences can't be directly observed", "Findings often lack replicability (replication crisis)"], color: "red" }
  }
  const active = data[activeTab]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>🧠 Is Psychology a Science?</h2>
        <p className="text-purple-400">The ongoing debate</p>
      </div>
      <div className="flex gap-2 mb-4">
        <button onClick={() => setActiveTab('yes')} className={`flex-1 px-4 py-3 rounded-xl font-bold ${activeTab === 'yes' ? 'bg-green-600 text-white' : 'bg-gray-800 text-gray-400'}`}>
          ✅ Yes, it is
        </button>
        <button onClick={() => setActiveTab('no')} className={`flex-1 px-4 py-3 rounded-xl font-bold ${activeTab === 'no' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-400'}`}>
          ❌ No, it isn't
        </button>
      </div>
      <div className={`p-6 rounded-xl ${activeTab === 'yes' ? 'bg-green-900/30 border border-green-500/30' : 'bg-red-900/30 border border-red-500/30'}`}>
        <h3 className={`text-xl font-bold ${activeTab === 'yes' ? 'text-green-300' : 'text-red-300'} mb-3`}>{active.title}</h3>
        <ul className="space-y-2">
          {active.points.map((p, i) => (
            <li key={i} className="text-gray-200 flex items-start gap-2">
              <span className={activeTab === 'yes' ? 'text-green-400' : 'text-red-400'}>•</span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export const ScienceQuiz = ({ isPresenting }: TeachSlideProps) => {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const questions = [
    { q: "Must be possible to prove a theory wrong", a: "Falsifiability" },
    { q: "Research unbiased by personal feelings", a: "Objectivity" },
    { q: "Studies can be repeated by others", a: "Replicability" },
    { q: "A shared framework accepted by scientists", a: "Paradigm" }
  ]
  const options = ["Falsifiability", "Objectivity", "Replicability", "Paradigm"]
  const allCorrect = questions.every((q, i) => answers[i.toString()] === q.a)
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-teal-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>🎯 Match the Features</h2>
        <p className="text-teal-400">Match each description to the correct term</p>
      </div>
      <div className="space-y-4 mb-4">
        {questions.map((q, idx) => (
          <div key={idx} className="p-4 bg-gray-800/50 rounded-xl">
            <p className="text-gray-200 mb-2">{q.q}</p>
            <select value={answers[idx.toString()] || ''} onChange={(e) => setAnswers({ ...answers, [idx.toString()]: e.target.value })}
              className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white">
              <option value="">Select...</option>
              {options.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
            {answers[idx.toString()] && (
              <p className={`mt-2 text-sm ${answers[idx.toString()] === q.a ? 'text-green-400' : 'text-red-400'}`}>
                {answers[idx.toString()] === q.a ? '✅ Correct!' : '❌ Try again'}
              </p>
            )}
          </div>
        ))}
      </div>
      {allCorrect && (
        <div className="p-4 bg-green-900/30 rounded-xl border border-green-500/30 animate-fadeIn">
          <p className="text-green-300 font-bold text-center">🎉 All correct! You understand the features of science.</p>
        </div>
      )}
    </div>
  )
}

// ============= LESSON 35: ADDITIONAL COMPONENTS =============

export const TestFlowchartTeach = ({ isPresenting }: TeachSlideProps) => {
  const [activeNode, setActiveNode] = useState<string | null>(null)
  const flowSteps = [
    { id: 'design', label: 'What design?', options: ['Correlation → Spearman/Pearson', 'Independent Groups → Mann-Whitney/Unrelated t', 'Repeated Measures → Wilcoxon/Related t'] },
    { id: 'data', label: 'What level of data?', options: ['Nominal → Chi-squared', 'Ordinal → Non-parametric', 'Interval/Ratio → Parametric (if criteria met)'] },
    { id: 'criteria', label: 'Parametric criteria met?', options: ['Normal distribution', 'Homogeneity of variance', 'Interval data', 'If NO to any → Use non-parametric'] }
  ]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-cyan-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>🔀 Test Selection Flowchart</h2>
        <p className="text-cyan-400">Follow the decision tree to choose the right test</p>
      </div>
      <div className="space-y-4">
        {flowSteps.map((step, idx) => (
          <div key={step.id} onClick={() => setActiveNode(activeNode === step.id ? null : step.id)}
            className={`p-5 rounded-xl border-2 cursor-pointer transition-all duration-300 ${activeNode === step.id ? 'bg-cyan-900/40 border-cyan-500 scale-[1.02]' : 'bg-gray-800/50 border-gray-700 hover:border-cyan-500/50'}`}>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold">{idx + 1}</span>
              <h3 className="text-lg font-bold text-white">{step.label}</h3>
            </div>
            {activeNode === step.id && (
              <ul className="mt-3 space-y-2 animate-fadeIn">
                {step.options.map((opt, i) => (
                  <li key={i} className="text-gray-300 pl-11 flex items-center gap-2">
                    <span className="text-cyan-400">→</span> {opt}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-yellow-900/30 rounded-xl border border-yellow-500/30">
        <p className="text-yellow-300 text-sm">💡 <strong>Exam Tip:</strong> Always state your reasons when justifying test choice - design, data type, and whether criteria are met!</p>
      </div>
    </div>
  )
}

// ============= LESSON 37: ADDITIONAL COMPONENTS =============

export const MannwhitneyCalcTeach = ({ isPresenting }: TeachSlideProps) => {
  const [step, setStep] = useState(0)
  const steps = [
    { title: "Step 1: Rank All Scores", content: "Combine both groups and rank from lowest (1) to highest. If scores are the same, give them the average rank.", icon: "📊" },
    { title: "Step 2: Sum Ranks for Each Group", content: "Add up all the ranks for Group A (R₁) and Group B (R₂) separately.", icon: "➕" },
    { title: "Step 3: Calculate U Values", content: "U₁ = n₁n₂ + [n₁(n₁+1)/2] - R₁\nU₂ = n₁n₂ + [n₂(n₂+1)/2] - R₂\nWhere n = sample size", icon: "🔢" },
    { title: "Step 4: Select Smaller U", content: "The calculated U value is the SMALLER of U₁ and U₂. This is compared to the critical value.", icon: "📉" },
    { title: "Step 5: Compare to Critical Value", content: "If calculated U ≤ critical U, the result is SIGNIFICANT (reject null hypothesis).", icon: "✅" }
  ]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-orange-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>📐 Mann-Whitney U Calculation</h2>
        <p className="text-orange-400">Step-by-step guide to calculating U</p>
      </div>
      <div className="space-y-3">
        {steps.map((s, idx) => (
          <div key={idx} onClick={() => setStep(idx)}
            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${step === idx ? 'bg-orange-900/40 border-orange-500' : 'bg-gray-800/50 border-gray-700'}`}>
            <div className="flex items-center gap-3">
              <span className="text-2xl">{s.icon}</span>
              <h3 className="font-bold text-white">{s.title}</h3>
            </div>
            {step === idx && <p className="mt-2 text-gray-300 whitespace-pre-line animate-fadeIn">{s.content}</p>}
          </div>
        ))}
      </div>
      <div className="mt-4 p-4 bg-blue-900/30 rounded-xl border border-blue-500/30">
        <p className="text-blue-300 text-sm">📝 <strong>Remember:</strong> Mann-Whitney tests for DIFFERENCE, not correlation. Used with independent groups design.</p>
      </div>
    </div>
  )
}

export const WilcoxonCalcTeach = ({ isPresenting }: TeachSlideProps) => {
  const [step, setStep] = useState(0)
  const steps = [
    { title: "Step 1: Calculate Differences", content: "For each participant, calculate the difference between their two scores (Condition A - Condition B).", icon: "➖" },
    { title: "Step 2: Rank the Differences", content: "Ignore the sign (+/-) and rank the absolute differences from smallest to largest. Ignore any zeros.", icon: "📊" },
    { title: "Step 3: Add Signs Back", content: "Put the original signs (+ or -) back onto each rank.", icon: "±" },
    { title: "Step 4: Sum Positive & Negative Ranks", content: "Add up all positive ranks (T+) and all negative ranks (T-) separately.", icon: "➕" },
    { title: "Step 5: Select Smaller T", content: "The calculated T value is the SMALLER of T+ and T-. If calculated T ≤ critical T, result is SIGNIFICANT.", icon: "✅" }
  ]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>📐 Wilcoxon Signed-Rank Calculation</h2>
        <p className="text-purple-400">Step-by-step guide to calculating T</p>
      </div>
      <div className="space-y-3">
        {steps.map((s, idx) => (
          <div key={idx} onClick={() => setStep(idx)}
            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${step === idx ? 'bg-purple-900/40 border-purple-500' : 'bg-gray-800/50 border-gray-700'}`}>
            <div className="flex items-center gap-3">
              <span className="text-2xl">{s.icon}</span>
              <h3 className="font-bold text-white">{s.title}</h3>
            </div>
            {step === idx && <p className="mt-2 text-gray-300 animate-fadeIn">{s.content}</p>}
          </div>
        ))}
      </div>
      <div className="mt-4 p-4 bg-green-900/30 rounded-xl border border-green-500/30">
        <p className="text-green-300 text-sm">📝 <strong>Remember:</strong> Wilcoxon tests for DIFFERENCE with repeated measures/matched pairs design.</p>
      </div>
    </div>
  )
}

export const NonparamTestCalculator = ({ isPresenting }: TeachSlideProps) => {
  const [testType, setTestType] = useState<'mannwhitney' | 'wilcoxon'>('mannwhitney')
  const [n1, setN1] = useState('')
  const [n2, setN2] = useState('')
  const [criticalValue, setCriticalValue] = useState<number | null>(null)
  const mwTable: Record<string, Record<string, number>> = {
    '5': { '5': 2, '6': 3, '7': 3, '8': 4, '9': 4, '10': 5 },
    '6': { '6': 5, '7': 5, '8': 6, '9': 7, '10': 8 },
    '7': { '7': 6, '8': 8, '9': 9, '10': 10 },
    '8': { '8': 10, '9': 11, '10': 13 },
    '9': { '9': 14, '10': 16 },
    '10': { '10': 19 }
  }
  const wilcoxonTable: Record<string, number> = { '5': 0, '6': 2, '7': 3, '8': 5, '9': 8, '10': 10, '11': 13, '12': 17, '15': 30, '20': 60 }
  
  const lookupCritical = () => {
    if (testType === 'mannwhitney' && n1 && n2) {
      const [small, large] = [n1, n2].sort()
      setCriticalValue(mwTable[small]?.[large] || null)
    } else if (testType === 'wilcoxon' && n1) {
      setCriticalValue(wilcoxonTable[n1] || null)
    }
  }
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-emerald-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>🧮 Critical Value Lookup</h2>
        <p className="text-emerald-400">Find the critical value for your test</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {['mannwhitney', 'wilcoxon'].map((t) => (
          <button key={t} onClick={() => { setTestType(t as 'mannwhitney' | 'wilcoxon'); setCriticalValue(null) }}
            className={`p-4 rounded-xl border-2 transition-all ${testType === t ? 'bg-emerald-900/40 border-emerald-500' : 'bg-gray-800/50 border-gray-700'}`}>
            <p className="text-white font-bold">{t === 'mannwhitney' ? 'Mann-Whitney U' : 'Wilcoxon T'}</p>
          </button>
        ))}
      </div>
      <div className="space-y-4 mb-6">
        <div>
          <label className="text-gray-400 text-sm">N{testType === 'mannwhitney' ? '₁' : ''} (sample size)</label>
          <input type="number" value={n1} onChange={(e) => setN1(e.target.value)} className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white mt-1" placeholder="Enter N1..." />
        </div>
        {testType === 'mannwhitney' && (
          <div>
            <label className="text-gray-400 text-sm">N₂ (sample size)</label>
            <input type="number" value={n2} onChange={(e) => setN2(e.target.value)} className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white mt-1" placeholder="Enter N2..." />
          </div>
        )}
        <button onClick={lookupCritical} className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-white font-bold transition-all">
          Look Up Critical Value
        </button>
      </div>
      {criticalValue !== null && (
        <div className="p-4 bg-emerald-900/40 rounded-xl border border-emerald-500/50 animate-fadeIn">
          <p className="text-emerald-300 text-center text-lg">Critical value (p ≤ 0.05, two-tailed): <strong className="text-2xl">{criticalValue}</strong></p>
          <p className="text-gray-400 text-sm text-center mt-2">Your calculated value must be ≤ {criticalValue} to be significant</p>
        </div>
      )}
    </div>
  )
}

// ============= LESSON 38: PARAMETRIC TESTS =============

export const ParamAssumptionsTeach = ({ isPresenting }: TeachSlideProps) => {
  const [revealed, setRevealed] = useState<number[]>([])
  const assumptions = [
    { title: "Normal Distribution", desc: "Data should be normally distributed (bell curve). Can check with histograms or statistical tests.", icon: "📊", color: "blue" },
    { title: "Homogeneity of Variance", desc: "The spread of scores should be similar in both conditions/groups being compared.", icon: "⚖️", color: "green" },
    { title: "Interval or Ratio Data", desc: "The data must be measured on an interval or ratio scale (not ordinal or nominal).", icon: "📏", color: "purple" },
    { title: "Independence (Unrelated t only)", desc: "For unrelated t-test, participants in each group must be independent of each other.", icon: "👥", color: "orange" }
  ]
  const colorMap: Record<string, string> = { blue: 'bg-blue-900/40 border-blue-500', green: 'bg-green-900/40 border-green-500', purple: 'bg-purple-900/40 border-purple-500', orange: 'bg-orange-900/40 border-orange-500' }
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>📋 Parametric Test Assumptions</h2>
        <p className="text-blue-400">Click each assumption to learn more</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {assumptions.map((a, idx) => (
          <div key={idx} onClick={() => !revealed.includes(idx) && setRevealed([...revealed, idx])}
            className={`p-5 rounded-xl border-2 cursor-pointer transition-all ${revealed.includes(idx) ? colorMap[a.color] : 'bg-gray-800/50 border-gray-700 hover:border-blue-500/50'}`}>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{a.icon}</span>
              <h3 className="font-bold text-white">{a.title}</h3>
            </div>
            {revealed.includes(idx) ? (
              <p className="text-gray-300 animate-fadeIn">{a.desc}</p>
            ) : (
              <p className="text-gray-500 italic">Click to reveal...</p>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-red-900/30 rounded-xl border border-red-500/30">
        <p className="text-red-300 text-sm">⚠️ <strong>Important:</strong> If ANY assumption is violated, use a non-parametric test instead!</p>
      </div>
    </div>
  )
}

export const UnrelatedTTeach = ({ isPresenting }: TeachSlideProps) => {
  const [step, setStep] = useState(0)
  const steps = [
    { title: "When to Use", content: "Independent groups design with TWO separate groups. Data must meet parametric assumptions.", icon: "📋" },
    { title: "Calculate Means", content: "Find the mean (x̄) of each group separately: x̄₁ and x̄₂", icon: "📊" },
    { title: "Calculate Variance", content: "Find the variance (s²) for each group. Variance = Σ(x-x̄)² / (n-1)", icon: "📈" },
    { title: "Apply Formula", content: "t = (x̄₁ - x̄₂) / √[(s₁²/n₁) + (s₂²/n₂)]", icon: "🔢" },
    { title: "Find df and Compare", content: "df = n₁ + n₂ - 2. Compare t to critical value. If calculated t ≥ critical t, result is significant.", icon: "✅" }
  ]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-indigo-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>📐 Unrelated t-Test</h2>
        <p className="text-indigo-400">Comparing two independent groups</p>
      </div>
      <div className="space-y-3">
        {steps.map((s, idx) => (
          <div key={idx} onClick={() => setStep(idx)}
            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${step === idx ? 'bg-indigo-900/40 border-indigo-500' : 'bg-gray-800/50 border-gray-700'}`}>
            <div className="flex items-center gap-3">
              <span className="text-2xl">{s.icon}</span>
              <h3 className="font-bold text-white">{s.title}</h3>
            </div>
            {step === idx && <p className="mt-2 text-gray-300 animate-fadeIn">{s.content}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export const RelatedTTeach = ({ isPresenting }: TeachSlideProps) => {
  const [step, setStep] = useState(0)
  const steps = [
    { title: "When to Use", content: "Repeated measures or matched pairs design. Same participants tested twice OR matched pairs.", icon: "📋" },
    { title: "Calculate Differences", content: "Find the difference (d) between each pair of scores: d = score₁ - score₂", icon: "➖" },
    { title: "Calculate Mean Difference", content: "Find d̄ (mean of all differences) and Sd (standard deviation of differences)", icon: "📊" },
    { title: "Apply Formula", content: "t = d̄ / (Sd / √n) where n = number of pairs", icon: "🔢" },
    { title: "Find df and Compare", content: "df = n - 1 (number of pairs minus 1). Compare t to critical value.", icon: "✅" }
  ]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-violet-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>📐 Related t-Test</h2>
        <p className="text-violet-400">Comparing two related conditions</p>
      </div>
      <div className="space-y-3">
        {steps.map((s, idx) => (
          <div key={idx} onClick={() => setStep(idx)}
            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${step === idx ? 'bg-violet-900/40 border-violet-500' : 'bg-gray-800/50 border-gray-700'}`}>
            <div className="flex items-center gap-3">
              <span className="text-2xl">{s.icon}</span>
              <h3 className="font-bold text-white">{s.title}</h3>
            </div>
            {step === idx && <p className="mt-2 text-gray-300 animate-fadeIn">{s.content}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export const TtestCalculator = ({ isPresenting }: TeachSlideProps) => {
  const [df, setDf] = useState('')
  const [criticalValue, setCriticalValue] = useState<number | null>(null)
  const critTable: Record<string, number> = { '5': 2.571, '6': 2.447, '7': 2.365, '8': 2.306, '9': 2.262, '10': 2.228, '12': 2.179, '15': 2.131, '20': 2.086, '25': 2.060, '30': 2.042, '40': 2.021, '60': 2.000 }
  const lookup = () => {
    if (df) {
      const dfNum = parseInt(df)
      const keys = Object.keys(critTable).map(k => parseInt(k)).sort((a, b) => a - b)
      const closest = keys.reduce((prev, curr) => Math.abs(curr - dfNum) < Math.abs(prev - dfNum) ? curr : prev)
      setCriticalValue(critTable[closest.toString()])
    }
  }
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-pink-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>🧮 t-Test Critical Value Lookup</h2>
        <p className="text-pink-400">Find the critical value for your t-test</p>
      </div>
      <div className="max-w-md mx-auto space-y-4">
        <div>
          <label className="text-gray-400 text-sm">Degrees of Freedom (df)</label>
          <input type="number" value={df} onChange={(e) => setDf(e.target.value)} className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white mt-1" placeholder="Enter df..." />
          <p className="text-gray-500 text-xs mt-1">Unrelated: df = n₁ + n₂ - 2 | Related: df = n - 1</p>
        </div>
        <button onClick={lookup} className="w-full py-3 bg-pink-600 hover:bg-pink-500 rounded-xl text-white font-bold transition-all">
          Look Up Critical Value
        </button>
        {criticalValue !== null && (
          <div className="p-4 bg-pink-900/40 rounded-xl border border-pink-500/50 animate-fadeIn">
            <p className="text-pink-300 text-center text-lg">Critical t (p ≤ 0.05, two-tailed): <strong className="text-2xl">{criticalValue}</strong></p>
            <p className="text-gray-400 text-sm text-center mt-2">Your calculated t must be ≥ {criticalValue} to be significant</p>
          </div>
        )}
      </div>
    </div>
  )
}

// ============= LESSON 39: TESTS OF CORRELATION =============

export const SpearmansTeach = ({ isPresenting }: TeachSlideProps) => {
  const [step, setStep] = useState(0)
  const steps = [
    { title: "When to Use Spearman's", content: "Correlational design. Ordinal data OR interval/ratio data that doesn't meet parametric assumptions.", icon: "📋" },
    { title: "Step 1: Rank Each Variable", content: "Rank each variable separately from lowest to highest. Use average ranks for ties.", icon: "📊" },
    { title: "Step 2: Find Differences", content: "Calculate d (difference) between ranks for each participant: d = Rank₁ - Rank₂", icon: "➖" },
    { title: "Step 3: Square Differences", content: "Square each difference (d²) and sum them all: Σd²", icon: "✖️" },
    { title: "Step 4: Apply Formula", content: "rs = 1 - [6Σd² / n(n²-1)] where n = number of participants", icon: "🔢" },
    { title: "Step 5: Compare", content: "Compare calculated rs to critical value. If calculated rs ≥ critical rs, result is significant.", icon: "✅" }
  ]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-amber-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>📈 Spearman's Rank Correlation</h2>
        <p className="text-amber-400">Non-parametric correlation coefficient</p>
      </div>
      <div className="space-y-3">
        {steps.map((s, idx) => (
          <div key={idx} onClick={() => setStep(idx)}
            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${step === idx ? 'bg-amber-900/40 border-amber-500' : 'bg-gray-800/50 border-gray-700'}`}>
            <div className="flex items-center gap-3">
              <span className="text-2xl">{s.icon}</span>
              <h3 className="font-bold text-white">{s.title}</h3>
            </div>
            {step === idx && <p className="mt-2 text-gray-300 animate-fadeIn">{s.content}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export const SpearmansCalcTeach = ({ isPresenting }: TeachSlideProps) => {
  const [showWorked, setShowWorked] = useState(false)
  const example = { data: [{ x: 3, y: 5 }, { x: 7, y: 8 }, { x: 2, y: 1 }, { x: 9, y: 10 }, { x: 6, y: 4 }], n: 5 }
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-amber-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>🔢 Spearman's Worked Example</h2>
        <p className="text-amber-400">See the calculation in action</p>
      </div>
      <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
        <p className="text-gray-300 mb-2"><strong>Data:</strong> X = {example.data.map(d => d.x).join(', ')} | Y = {example.data.map(d => d.y).join(', ')}</p>
        <button onClick={() => setShowWorked(!showWorked)} className="px-4 py-2 bg-amber-600 hover:bg-amber-500 rounded-lg text-white font-bold">
          {showWorked ? 'Hide Working' : 'Show Working'}
        </button>
      </div>
      {showWorked && (
        <div className="space-y-4 animate-fadeIn">
          <div className="p-4 bg-gray-800/50 rounded-xl">
            <h4 className="text-amber-400 font-bold mb-2">Step 1: Rank the data</h4>
            <table className="w-full text-gray-300 text-sm">
              <thead><tr><th>X</th><th>Rank X</th><th>Y</th><th>Rank Y</th><th>d</th><th>d²</th></tr></thead>
              <tbody>
                <tr><td>2</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td></tr>
                <tr><td>3</td><td>2</td><td>5</td><td>3</td><td>-1</td><td>1</td></tr>
                <tr><td>6</td><td>3</td><td>4</td><td>2</td><td>1</td><td>1</td></tr>
                <tr><td>7</td><td>4</td><td>8</td><td>4</td><td>0</td><td>0</td></tr>
                <tr><td>9</td><td>5</td><td>10</td><td>5</td><td>0</td><td>0</td></tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-amber-900/30 rounded-xl border border-amber-500/30">
            <p className="text-amber-300">Σd² = 2, n = 5</p>
            <p className="text-amber-300">rs = 1 - [6(2) / 5(25-1)] = 1 - [12/120] = 1 - 0.1 = <strong>0.90</strong></p>
          </div>
        </div>
      )}
    </div>
  )
}

export const PearsonsTeach = ({ isPresenting }: TeachSlideProps) => {
  const [revealed, setRevealed] = useState<number[]>([])
  const points = [
    { title: "When to Use", content: "Correlational design with interval/ratio data that meets parametric assumptions.", icon: "📋" },
    { title: "Parametric Requirements", content: "Normal distribution of both variables, linear relationship, homoscedasticity (similar spread).", icon: "📊" },
    { title: "More Powerful", content: "Pearson's is more powerful than Spearman's - more likely to detect a real correlation if one exists.", icon: "💪" },
    { title: "Interpretation", content: "r ranges from -1 to +1. Interpret same as any correlation coefficient.", icon: "🔍" }
  ]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-cyan-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>📈 Pearson's Product-Moment</h2>
        <p className="text-cyan-400">Parametric correlation coefficient</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {points.map((p, idx) => (
          <div key={idx} onClick={() => !revealed.includes(idx) && setRevealed([...revealed, idx])}
            className={`p-5 rounded-xl border-2 cursor-pointer transition-all ${revealed.includes(idx) ? 'bg-cyan-900/40 border-cyan-500' : 'bg-gray-800/50 border-gray-700'}`}>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{p.icon}</span>
              <h3 className="font-bold text-white">{p.title}</h3>
            </div>
            {revealed.includes(idx) ? <p className="text-gray-300 animate-fadeIn">{p.content}</p> : <p className="text-gray-500 italic">Click to reveal...</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export const PearsonsCalcTeach = ({ isPresenting }: TeachSlideProps) => {
  const [showFormula, setShowFormula] = useState(false)
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-cyan-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>🔢 Pearson's Calculation</h2>
        <p className="text-cyan-400">The formula and key points</p>
      </div>
      <div className="bg-gray-800/50 rounded-xl p-6 mb-6">
        <button onClick={() => setShowFormula(!showFormula)} className="w-full px-4 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-white font-bold mb-4">
          {showFormula ? 'Hide Formula' : 'Reveal Formula'}
        </button>
        {showFormula && (
          <div className="animate-fadeIn">
            <div className="p-4 bg-gray-900 rounded-lg mb-4">
              <p className="text-cyan-300 text-center text-lg font-mono">r = Σ(x-x̄)(y-ȳ) / √[Σ(x-x̄)²·Σ(y-ȳ)²]</p>
            </div>
            <div className="space-y-2 text-gray-300">
              <p>• x̄ = mean of X values</p>
              <p>• ȳ = mean of Y values</p>
              <p>• Calculate deviation from mean for each score</p>
              <p>• Multiply deviations together and sum</p>
              <p>• Divide by product of summed squared deviations</p>
            </div>
          </div>
        )}
      </div>
      <div className="p-4 bg-green-900/30 rounded-xl border border-green-500/30">
        <p className="text-green-300 text-sm">💡 <strong>Exam Tip:</strong> You won't need to calculate Pearson's by hand in the exam, but understand WHEN to use it and how to INTERPRET the output.</p>
      </div>
    </div>
  )
}

export const CorrelationCalculator = ({ isPresenting }: TeachSlideProps) => {
  const [n, setN] = useState('')
  const [criticalValue, setCriticalValue] = useState<{ spearman: number | null, pearson: number | null }>({ spearman: null, pearson: null })
  const spearmanTable: Record<string, number> = { '5': 0.900, '6': 0.829, '7': 0.714, '8': 0.643, '9': 0.600, '10': 0.564, '12': 0.506, '15': 0.441, '20': 0.380 }
  const pearsonTable: Record<string, number> = { '5': 0.878, '6': 0.811, '7': 0.754, '8': 0.707, '9': 0.666, '10': 0.632, '12': 0.576, '15': 0.514, '20': 0.444 }
  const lookup = () => {
    if (n) {
      const nNum = parseInt(n)
      const keys = Object.keys(spearmanTable).map(k => parseInt(k)).sort((a, b) => a - b)
      const closest = keys.reduce((prev, curr) => Math.abs(curr - nNum) < Math.abs(prev - nNum) ? curr : prev)
      setCriticalValue({ spearman: spearmanTable[closest.toString()], pearson: pearsonTable[closest.toString()] })
    }
  }
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-rose-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>🧮 Correlation Critical Values</h2>
        <p className="text-rose-400">Look up critical values for correlation tests</p>
      </div>
      <div className="max-w-md mx-auto space-y-4">
        <div>
          <label className="text-gray-400 text-sm">N (number of participants)</label>
          <input type="number" value={n} onChange={(e) => setN(e.target.value)} className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white mt-1" placeholder="Enter N..." />
        </div>
        <button onClick={lookup} className="w-full py-3 bg-rose-600 hover:bg-rose-500 rounded-xl text-white font-bold transition-all">
          Look Up Critical Values
        </button>
        {criticalValue.spearman !== null && (
          <div className="space-y-3 animate-fadeIn">
            <div className="p-4 bg-amber-900/40 rounded-xl border border-amber-500/50">
              <p className="text-amber-300 text-center">Spearman's rs (p ≤ 0.05): <strong className="text-xl">{criticalValue.spearman}</strong></p>
            </div>
            <div className="p-4 bg-cyan-900/40 rounded-xl border border-cyan-500/50">
              <p className="text-cyan-300 text-center">Pearson's r (p ≤ 0.05): <strong className="text-xl">{criticalValue.pearson}</strong></p>
            </div>
            <p className="text-gray-400 text-sm text-center">Your calculated r must be ≥ critical value to be significant</p>
          </div>
        )}
      </div>
    </div>
  )
}

// ============= LESSON 40: CHI-SQUARED TEST =============

export const ChisquaredIntroTeach = ({ isPresenting }: TeachSlideProps) => {
  const [revealed, setRevealed] = useState<number[]>([])
  const points = [
    { title: "What is Chi-Squared?", content: "A test of association/difference for NOMINAL data (categories). Tests if observed frequencies differ from expected.", icon: "📊" },
    { title: "When to Use", content: "Independent groups design. Data in CATEGORIES (frequencies/counts). Looking for association between variables.", icon: "📋" },
    { title: "Data Format", content: "Data must be in a contingency table showing frequencies (counts), NOT percentages or means.", icon: "📝" },
    { title: "Key Rule", content: "Expected frequencies must be at least 5 in each cell. If not, combine categories or use different test.", icon: "⚠️" }
  ]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-fuchsia-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>📊 Chi-Squared Test (χ²)</h2>
        <p className="text-fuchsia-400">Testing association with categorical data</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {points.map((p, idx) => (
          <div key={idx} onClick={() => !revealed.includes(idx) && setRevealed([...revealed, idx])}
            className={`p-5 rounded-xl border-2 cursor-pointer transition-all ${revealed.includes(idx) ? 'bg-fuchsia-900/40 border-fuchsia-500' : 'bg-gray-800/50 border-gray-700'}`}>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{p.icon}</span>
              <h3 className="font-bold text-white">{p.title}</h3>
            </div>
            {revealed.includes(idx) ? <p className="text-gray-300 animate-fadeIn">{p.content}</p> : <p className="text-gray-500 italic">Click to reveal...</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export const ObservedExpectedTeach = ({ isPresenting }: TeachSlideProps) => {
  const [showExpected, setShowExpected] = useState(false)
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-fuchsia-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>📝 Observed vs Expected Frequencies</h2>
        <p className="text-fuchsia-400">Understanding the key concepts</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="p-5 bg-blue-900/30 rounded-xl border border-blue-500/30">
          <h3 className="text-blue-400 font-bold mb-2">Observed Frequencies (O)</h3>
          <p className="text-gray-300">The actual counts you collected in your study. What you ACTUALLY found.</p>
          <div className="mt-3 p-3 bg-gray-800/50 rounded-lg">
            <p className="text-gray-400 text-sm">Example: 25 passed, 15 failed</p>
          </div>
        </div>
        <div className="p-5 bg-green-900/30 rounded-xl border border-green-500/30">
          <h3 className="text-green-400 font-bold mb-2">Expected Frequencies (E)</h3>
          <p className="text-gray-300">What we would EXPECT if there was no association/difference (null hypothesis true).</p>
          <div className="mt-3 p-3 bg-gray-800/50 rounded-lg">
            <p className="text-gray-400 text-sm">Example: 20 passed, 20 failed (if 50/50 expected)</p>
          </div>
        </div>
      </div>
      <button onClick={() => setShowExpected(!showExpected)} className="w-full py-3 bg-fuchsia-600 hover:bg-fuchsia-500 rounded-xl text-white font-bold mb-4">
        {showExpected ? 'Hide Formula' : 'Show Expected Frequency Formula'}
      </button>
      {showExpected && (
        <div className="p-4 bg-fuchsia-900/30 rounded-xl border border-fuchsia-500/30 animate-fadeIn">
          <p className="text-fuchsia-300 text-center text-lg font-mono mb-2">E = (Row Total × Column Total) / Grand Total</p>
          <p className="text-gray-400 text-sm text-center">Calculate for each cell in your contingency table</p>
        </div>
      )}
    </div>
  )
}

export const ChisquaredCalcTeach = ({ isPresenting }: TeachSlideProps) => {
  const [step, setStep] = useState(0)
  const steps = [
    { title: "Step 1: Create Contingency Table", content: "Set up a table with observed frequencies. Include row and column totals.", icon: "📊" },
    { title: "Step 2: Calculate Expected", content: "For each cell: E = (Row Total × Column Total) / Grand Total", icon: "🔢" },
    { title: "Step 3: Apply Formula", content: "For each cell: (O-E)² / E\nThen sum all values to get χ²", icon: "➕" },
    { title: "Step 4: Find df", content: "df = (rows - 1) × (columns - 1)\nFor a 2×2 table: df = 1", icon: "📐" },
    { title: "Step 5: Compare", content: "If calculated χ² ≥ critical χ², result is SIGNIFICANT", icon: "✅" }
  ]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-fuchsia-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>📐 Chi-Squared Calculation</h2>
        <p className="text-fuchsia-400">Step-by-step guide</p>
      </div>
      <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
        <p className="text-fuchsia-300 text-center text-lg font-mono">χ² = Σ [(O-E)² / E]</p>
      </div>
      <div className="space-y-3">
        {steps.map((s, idx) => (
          <div key={idx} onClick={() => setStep(idx)}
            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${step === idx ? 'bg-fuchsia-900/40 border-fuchsia-500' : 'bg-gray-800/50 border-gray-700'}`}>
            <div className="flex items-center gap-3">
              <span className="text-2xl">{s.icon}</span>
              <h3 className="font-bold text-white">{s.title}</h3>
            </div>
            {step === idx && <p className="mt-2 text-gray-300 animate-fadeIn">{s.content}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export const ChisquaredCalculator = ({ isPresenting }: TeachSlideProps) => {
  const [df, setDf] = useState('')
  const [criticalValue, setCriticalValue] = useState<number | null>(null)
  const chiTable: Record<string, number> = { '1': 3.84, '2': 5.99, '3': 7.82, '4': 9.49, '5': 11.07, '6': 12.59, '7': 14.07, '8': 15.51 }
  const lookup = () => { if (df) setCriticalValue(chiTable[df] || null) }
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-fuchsia-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>🧮 Chi-Squared Critical Values</h2>
        <p className="text-fuchsia-400">Look up your critical value</p>
      </div>
      <div className="max-w-md mx-auto space-y-4">
        <div>
          <label className="text-gray-400 text-sm">Degrees of Freedom (df)</label>
          <input type="number" value={df} onChange={(e) => setDf(e.target.value)} className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white mt-1" placeholder="df = (rows-1)(cols-1)" />
        </div>
        <button onClick={lookup} className="w-full py-3 bg-fuchsia-600 hover:bg-fuchsia-500 rounded-xl text-white font-bold">
          Look Up Critical Value
        </button>
        {criticalValue !== null && (
          <div className="p-4 bg-fuchsia-900/40 rounded-xl border border-fuchsia-500/50 animate-fadeIn">
            <p className="text-fuchsia-300 text-center text-lg">Critical χ² (p ≤ 0.05): <strong className="text-2xl">{criticalValue}</strong></p>
            <p className="text-gray-400 text-sm text-center mt-2">Your calculated χ² must be ≥ {criticalValue} to be significant</p>
          </div>
        )}
      </div>
    </div>
  )
}

// ============= LESSON 41: REPORTING INVESTIGATIONS =============

export const ReportStructureTeach = ({ isPresenting }: TeachSlideProps) => {
  const [activeSection, setActiveSection] = useState<number | null>(null)
  const sections = [
    { title: "Title", content: "Clear, concise description of what was studied. Should include IV and DV.", icon: "📌" },
    { title: "Abstract", content: "Brief summary (150-200 words) covering aims, method, results, and conclusions.", icon: "📄" },
    { title: "Introduction", content: "Background research, rationale, aims, and hypotheses. Funnel from broad to specific.", icon: "📚" },
    { title: "Method", content: "Design, participants, materials, procedure. Enough detail to replicate.", icon: "🔬" },
    { title: "Results", content: "Descriptive statistics, inferential statistics, tables, and graphs.", icon: "📊" },
    { title: "Discussion", content: "Interpret findings, relate to hypotheses, evaluate, suggest improvements.", icon: "💬" },
    { title: "References", content: "All sources cited in Harvard format (Author, Date).", icon: "📖" }
  ]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-sky-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>📝 Report Structure</h2>
        <p className="text-sky-400">Click each section to learn what to include</p>
      </div>
      <div className="space-y-2">
        {sections.map((s, idx) => (
          <div key={idx} onClick={() => setActiveSection(activeSection === idx ? null : idx)}
            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${activeSection === idx ? 'bg-sky-900/40 border-sky-500' : 'bg-gray-800/50 border-gray-700'}`}>
            <div className="flex items-center gap-3">
              <span className="text-xl">{s.icon}</span>
              <h3 className="font-bold text-white">{s.title}</h3>
            </div>
            {activeSection === idx && <p className="mt-2 text-gray-300 animate-fadeIn">{s.content}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export const AbstractIntroTeach = ({ isPresenting }: TeachSlideProps) => {
  const [revealed, setRevealed] = useState<string[]>([])
  const components = [
    { id: 'aim', label: 'Aim', content: 'What was the study investigating?', example: '"This study aimed to investigate whether..."' },
    { id: 'method', label: 'Method', content: 'Brief description of participants and procedure', example: '"20 participants completed a memory task..."' },
    { id: 'results', label: 'Results', content: 'Key findings with statistics', example: '"Results showed a significant difference (p<0.05)..."' },
    { id: 'conclusion', label: 'Conclusion', content: 'What does this mean?', example: '"These findings suggest that..."' }
  ]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-sky-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>📄 Abstract & Introduction</h2>
        <p className="text-sky-400">The opening sections of your report</p>
      </div>
      <div className="space-y-4">
        <div className="p-4 bg-sky-900/30 rounded-xl border border-sky-500/30 mb-4">
          <h3 className="text-sky-400 font-bold mb-2">Abstract Components (AMRC)</h3>
          <p className="text-gray-300 text-sm">Write LAST but appears FIRST. 150-200 words.</p>
        </div>
        {components.map((c) => (
          <div key={c.id} onClick={() => !revealed.includes(c.id) && setRevealed([...revealed, c.id])}
            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${revealed.includes(c.id) ? 'bg-sky-900/40 border-sky-500' : 'bg-gray-800/50 border-gray-700'}`}>
            <h4 className="font-bold text-white">{c.label}</h4>
            {revealed.includes(c.id) && (
              <div className="animate-fadeIn mt-2">
                <p className="text-gray-300">{c.content}</p>
                <p className="text-sky-400 text-sm italic mt-1">{c.example}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export const MethodResultsTeach = ({ isPresenting }: TeachSlideProps) => {
  const [activeTab, setActiveTab] = useState<'method' | 'results'>('method')
  const methodContent = [
    { title: "Design", points: ["Type of experiment/study", "IV and DV (operationalised)", "Experimental design used"] },
    { title: "Participants", points: ["Number and characteristics", "Sampling method", "How recruited"] },
    { title: "Materials", points: ["Equipment used", "Stimuli/questionnaires", "Standardised instructions"] },
    { title: "Procedure", points: ["Step-by-step what happened", "Controls implemented", "Debriefing"] }
  ]
  const resultsContent = [
    { title: "Descriptive Stats", points: ["Measures of central tendency", "Measures of dispersion", "Tables and graphs"] },
    { title: "Inferential Stats", points: ["Name of test used", "Calculated value", "Critical value", "df (if applicable)", "Significance level", "One/two-tailed"] }
  ]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-sky-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>🔬 Method & Results</h2>
        <p className="text-sky-400">The core sections of your report</p>
      </div>
      <div className="flex gap-2 mb-4">
        {(['method', 'results'] as const).map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 rounded-lg font-bold transition-all ${activeTab === tab ? 'bg-sky-600 text-white' : 'bg-gray-800 text-gray-400'}`}>
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <div className="space-y-4">
        {(activeTab === 'method' ? methodContent : resultsContent).map((section, idx) => (
          <div key={idx} className="p-4 bg-gray-800/50 rounded-xl">
            <h4 className="font-bold text-sky-400 mb-2">{section.title}</h4>
            <ul className="space-y-1">
              {section.points.map((point, i) => (
                <li key={i} className="text-gray-300 flex items-center gap-2">
                  <span className="text-sky-400">•</span> {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export const DiscussionRefsTeach = ({ isPresenting }: TeachSlideProps) => {
  const [showExample, setShowExample] = useState(false)
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-sky-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>💬 Discussion & References</h2>
        <p className="text-sky-400">Interpreting and citing your work</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="p-5 bg-purple-900/30 rounded-xl border border-purple-500/30">
          <h3 className="text-purple-400 font-bold mb-3">Discussion Should Include:</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• Summary of findings</li>
            <li>• Relate to hypotheses (supported/not)</li>
            <li>• Relate to background research</li>
            <li>• Evaluate methodology</li>
            <li>• Suggest improvements</li>
            <li>• Implications and applications</li>
            <li>• Ideas for future research</li>
          </ul>
        </div>
        <div className="p-5 bg-amber-900/30 rounded-xl border border-amber-500/30">
          <h3 className="text-amber-400 font-bold mb-3">Harvard Referencing:</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• In-text: (Author, Year)</li>
            <li>• Reference list: alphabetical</li>
            <li>• Include all cited sources</li>
            <li>• Journal articles, books, websites</li>
          </ul>
          <button onClick={() => setShowExample(!showExample)} className="mt-3 text-amber-400 text-sm underline">
            {showExample ? 'Hide example' : 'Show example'}
          </button>
          {showExample && (
            <p className="mt-2 text-amber-300 text-xs italic animate-fadeIn">
              Baddeley, A.D. (1966). The influence of acoustic and semantic similarity on long-term memory for word sequences. Quarterly Journal of Experimental Psychology, 18(4), 302-309.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export const ReportBuilder = ({ isPresenting }: TeachSlideProps) => {
  const [sections, setSections] = useState<string[]>([])
  const allSections = ['Title', 'Abstract', 'Introduction', 'Method', 'Results', 'Discussion', 'References']
  const correctOrder = ['Title', 'Abstract', 'Introduction', 'Method', 'Results', 'Discussion', 'References']
  const isCorrect = sections.length === 7 && sections.every((s, i) => s === correctOrder[i])
  const addSection = (section: string) => {
    if (!sections.includes(section)) setSections([...sections, section])
  }
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-sky-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>🏗️ Build Your Report</h2>
        <p className="text-sky-400">Click sections in the correct order</p>
      </div>
      <div className="grid grid-cols-4 gap-2 mb-6">
        {allSections.filter(s => !sections.includes(s)).map((section) => (
          <button key={section} onClick={() => addSection(section)}
            className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white hover:bg-sky-900/40 hover:border-sky-500 transition-all">
            {section}
          </button>
        ))}
      </div>
      <div className="p-4 bg-gray-800/50 rounded-xl min-h-[200px]">
        <p className="text-gray-400 text-sm mb-3">Your report structure:</p>
        {sections.length === 0 ? (
          <p className="text-gray-500 italic">Click sections above to build your report...</p>
        ) : (
          <div className="space-y-2">
            {sections.map((s, i) => (
              <div key={i} className={`p-2 rounded-lg ${s === correctOrder[i] ? 'bg-green-900/40 text-green-400' : 'bg-red-900/40 text-red-400'}`}>
                {i + 1}. {s}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex gap-2 mt-4">
        <button onClick={() => setSections([])} className="flex-1 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white">Reset</button>
      </div>
      {isCorrect && (
        <div className="mt-4 p-4 bg-green-900/30 rounded-xl border border-green-500/30 animate-fadeIn">
          <p className="text-green-300 font-bold text-center">🎉 Perfect! You know the correct report structure!</p>
        </div>
      )}
    </div>
  )
}

// ============= LESSON 42: ADDITIONAL COMPONENTS =============

export const ReplicabilityTeach = ({ isPresenting }: TeachSlideProps) => {
  const [revealed, setRevealed] = useState<number[]>([])
  const points = [
    { title: "What is Replicability?", content: "The ability to repeat a study using the same method and get similar results.", icon: "🔄" },
    { title: "Why It Matters", content: "If results can't be replicated, we can't be confident the findings are reliable or genuine.", icon: "❓" },
    { title: "The Replication Crisis", content: "Many psychology studies have failed to replicate. This has led to calls for more rigorous methods.", icon: "⚠️" },
    { title: "How to Ensure Replicability", content: "Standardised procedures, clear operationalisation, detailed reporting, pre-registration of hypotheses.", icon: "✅" }
  ]
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-teal-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white mb-2`}>🔄 Replicability</h2>
        <p className="text-teal-400">A cornerstone of scientific research</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {points.map((p, idx) => (
          <div key={idx} onClick={() => !revealed.includes(idx) && setRevealed([...revealed, idx])}
            className={`p-5 rounded-xl border-2 cursor-pointer transition-all ${revealed.includes(idx) ? 'bg-teal-900/40 border-teal-500' : 'bg-gray-800/50 border-gray-700'}`}>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{p.icon}</span>
              <h3 className="font-bold text-white">{p.title}</h3>
            </div>
            {revealed.includes(idx) ? <p className="text-gray-300 animate-fadeIn">{p.content}</p> : <p className="text-gray-500 italic">Click to reveal...</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export const ScienceEvaluator = ({ isPresenting }: TeachSlideProps) => {
  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const questions = [
    { q: "Which feature means a theory must be testable and potentially disprovable?", options: ["Objectivity", "Falsifiability", "Replicability", "Paradigm"], correct: "Falsifiability" },
    { q: "What did Thomas Kuhn call the dominant framework of assumptions in science?", options: ["Theory", "Hypothesis", "Paradigm", "Methodology"], correct: "Paradigm" },
    { q: "Research that is free from bias and personal feelings demonstrates:", options: ["Subjectivity", "Replicability", "Falsifiability", "Objectivity"], correct: "Objectivity" },
    { q: "What is it called when other scientists can repeat a study?", options: ["Validity", "Replicability", "Reliability", "Generalisability"], correct: "Replicability" },
    { q: "A paradigm shift occurs when:", options: ["A study is replicated", "A new theory replaces the old framework", "Findings are falsified", "Data is collected objectively"], correct: "A new theory replaces the old framework" }
  ]
  const handleAnswer = (opt: string) => {
    setSelected(opt)
    if (opt === questions[currentQ].correct) setScore(score + 1)
    setTimeout(() => {
      if (currentQ < questions.length - 1) {
        setCurrentQ(currentQ + 1)
        setSelected(null)
      }
    }, 1500)
  }
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 via-teal-900/20 to-gray-900 overflow-y-auto custom-scrollbar`}>
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h2 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black text-white`}>🎓 Science Knowledge Check</h2>
          <span className="text-teal-400">Score: {score}/{questions.length}</span>
        </div>
        <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
          <div className="bg-teal-500 h-2 rounded-full transition-all" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}></div>
        </div>
      </div>
      {currentQ < questions.length ? (
        <>
          <div className="p-4 bg-gray-800/50 rounded-xl mb-4">
            <p className="text-gray-300 text-lg">{questions[currentQ].q}</p>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {questions[currentQ].options.map((opt) => (
              <button key={opt} onClick={() => !selected && handleAnswer(opt)} disabled={!!selected}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  selected === opt
                    ? opt === questions[currentQ].correct ? 'bg-green-900/40 border-green-500' : 'bg-red-900/40 border-red-500'
                    : selected && opt === questions[currentQ].correct ? 'bg-green-900/40 border-green-500'
                    : 'bg-gray-800/50 border-gray-700 hover:border-teal-500'
                }`}>
                <span className="text-white">{opt}</span>
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="p-6 bg-teal-900/30 rounded-xl border border-teal-500/30 text-center">
          <p className="text-teal-300 text-2xl font-bold mb-2">Quiz Complete!</p>
          <p className="text-white text-xl">You scored {score}/{questions.length}</p>
          <button onClick={() => { setCurrentQ(0); setScore(0); setSelected(null) }} className="mt-4 px-6 py-2 bg-teal-600 hover:bg-teal-500 rounded-lg text-white">
            Try Again
          </button>
        </div>
      )}
    </div>
  )
}
