import { useState } from 'react'
import { X, Menu, ChevronLeft, ChevronRight, Lightbulb, CheckCircle, Target, FlaskConical, BarChart, Beaker, AlertTriangle, Eye, EyeOff, Zap, Brain, TrendingUp, Projector, AlertCircle } from 'lucide-react'
import { useEffect } from 'react'

// ============= TYPES =============
interface Question {
  id: number
  question: string
  options: string[]
  correct: number
}

// ============= INTERACTIVE COMPONENTS =============

// Do Now Quiz Component
const DoNowQuiz: React.FC<{ questions: Question[], isPresenting?: boolean }> = ({ questions, isPresenting = false }) => {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)

  const handleSelect = (qId: number, optionIdx: number) => 
    setAnswers(prev => ({ ...prev, [qId]: optionIdx }))
  
  const score = Object.keys(answers).reduce(
    (acc, qId) => acc + (answers[Number(qId)] === questions[Number(qId) - 1].correct ? 1 : 0),
    0
  )

  return (
    <div
      className={`grid h-full content-start transition-all ${isPresenting ? 'gap-6 p-6' : 'grid-cols-1 lg:grid-cols-2 gap-8 p-8'}`}
      style={isPresenting ? { gridTemplateColumns: '1fr 3fr' } : undefined}
    >
      {/* Left Panel - Compact Task Description */}
      <div className={isPresenting ? 'space-y-4' : 'space-y-6'}>
        <div className={`bg-gradient-to-br from-pink-900/40 to-purple-900/20 rounded-xl border border-pink-500/20 shadow-lg relative overflow-hidden ${isPresenting ? 'p-6' : 'p-8'}`}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 blur-3xl rounded-full"></div>
          <h3 className={`font-bold text-white ${isPresenting ? 'text-3xl mb-3' : 'text-2xl mb-6'}`}>Task: Activation & Retrieval</h3>
          <p className={`text-gray-300 leading-relaxed ${isPresenting ? 'text-lg' : ''}`}>
            Activate your psychological knowledge. These questions test recall from previous lessons and foundational content.
          </p>
        </div>
        {!showResults ? (
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setShowResults(true)}
              disabled={Object.keys(answers).length < 5}
              className={`bg-pink-600 hover:bg-pink-500 disabled:opacity-50 disabled:grayscale text-white rounded-lg font-bold transition-all shadow-lg hover:shadow-pink-500/20 ${isPresenting ? 'px-6 py-3 text-lg' : 'px-8 py-4'}`}
            >
              Submit
            </button>
            <button
              onClick={() => setShowResults(true)}
              className={`bg-transparent hover:bg-gray-800 text-gray-400 border border-gray-700 hover:border-gray-500 rounded-lg font-semibold transition-all ${isPresenting ? 'px-6 py-2 text-sm' : 'px-8 py-3 text-sm'}`}
            >
              Reveal All
            </button>
          </div>
        ) : (
          <div className={`bg-green-900/30 border border-green-500/30 rounded-lg text-center animate-fadeIn shadow-[0_0_30px_rgba(34,197,94,0.1)] ${isPresenting ? 'p-6' : 'p-6'}`}>
            <span className={`font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 block mb-2 ${isPresenting ? 'text-5xl' : 'text-5xl'}`}>
              {score} / 5
            </span>
            <span className={`text-green-200/70 font-mono uppercase tracking-widest ${isPresenting ? 'text-xs' : 'text-xs'}`}>
              Knowledge Retrieved
            </span>
          </div>
        )}
      </div>

      {/* Right Panel - Question Grid */}
      <div className={`${isPresenting ? '' : 'space-y-4 overflow-y-auto pr-2 custom-scrollbar max-h-full'}`}>
        {isPresenting ? (
          <div className="grid grid-cols-3 gap-4">
            {questions.map((q) => (
              <div key={q.id} className="bg-gray-900/50 rounded-lg border border-gray-800 p-5 hover:border-gray-700 transition-colors min-h-[160px] flex flex-col">
                <h4 className="font-semibold text-gray-200 mb-3 text-xl leading-tight">
                  <span className="text-pink-500 mr-2">{String(q.id).padStart(2, '0')}.</span>
                  {q.question}
                </h4>
                <div className="flex-grow flex items-center">
                  {showResults ? (
                    <div className="text-green-400 font-bold animate-fadeIn flex items-center gap-2 text-lg">
                      <CheckCircle size={28} /> <span className="text-base">{q.options[q.correct]}</span>
                    </div>
                  ) : (
                    <span className="text-gray-500 text-sm">Reveal answers to show</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          questions.map((q) => (
            <div key={q.id} className={`bg-gray-900/50 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors p-4`}>
              <h4 className={`font-semibold text-gray-200 mb-4 text-sm`}>
                <span className="text-pink-500 mr-3">{String(q.id).padStart(2, '0')}.</span>
                {q.question}
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {q.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => !showResults && handleSelect(q.id, idx)}
                    className={`rounded-lg text-left transition-all border px-4 py-2 text-xs ${
                      showResults
                        ? idx === q.correct
                          ? 'bg-green-900/30 border-green-500 text-green-300'
                          : answers[q.id] === idx
                            ? 'bg-red-900/30 border-red-500 text-red-300'
                            : 'bg-gray-900/50 border-transparent text-gray-600 opacity-50'
                        : answers[q.id] === idx
                          ? 'bg-pink-600 border-pink-500 text-white'
                          : 'bg-gray-800 border-transparent hover:bg-gray-750 text-gray-400 hover:text-white'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

// Hypotheses Comparison - Side by side
const HypothesesComparison: React.FC<{ level: 'gcse' | 'alevel' }> = ({ level }) => {
  const content = level === 'gcse' ? {
    aimText: 'To investigate whether background music affects concentration.',
    hypothesisText: 'Students who listen to music while studying will remember fewer words than students who study in silence.',
    differences: [
      { aspect: 'Specificity', aim: 'General and broad', hypothesis: 'Specific and precise' },
      { aspect: 'Prediction', aim: 'No prediction made', hypothesis: 'Makes a clear prediction' },
      { aspect: 'Testing', aim: 'Guides overall study', hypothesis: 'Directly testable' },
      { aspect: 'Variables', aim: 'Identifies topic area', hypothesis: 'States relationship between variables' }
    ]
  } : {
    aimText: 'To investigate the relationship between cognitive load and working memory performance in educational settings.',
    hypothesisText: 'Participants exposed to 70dB background noise will score significantly lower on a digit span task (M < 6.5) compared to those in silent conditions.',
    differences: [
      { aspect: 'Epistemology', aim: 'Establishes research focus', hypothesis: 'Enables falsification' },
      { aspect: 'Operationalisation', aim: 'Conceptual level', hypothesis: 'Operationally defined' },
      { aspect: 'Statistical Testing', aim: 'No statistical implications', hypothesis: 'Amenable to statistical analysis' },
      { aspect: 'Theoretical Basis', aim: 'Exploratory or confirmatory', hypothesis: 'Derived from theory/previous research' }
    ]
  }

  return (
    <div className="flex flex-col h-full p-8 animate-fadeIn">
      <h2 className="text-5xl font-black text-white mb-8 flex items-center gap-3">
        <FlaskConical className="text-pink-500" size={48} />
        Aims vs Hypotheses
      </h2>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500/50 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Target className="text-blue-400" size={24} />
            </div>
            <h3 className="text-3xl font-bold text-blue-300">AIM</h3>
          </div>
          <p className="text-xl text-gray-200 italic leading-relaxed bg-blue-950/30 p-6 rounded-lg border-l-4 border-blue-400">
            "{content.aimText}"
          </p>
        </div>

        <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/20 border-2 border-pink-500/50 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
              <Beaker className="text-pink-400" size={24} />
            </div>
            <h3 className="text-3xl font-bold text-pink-300">HYPOTHESIS</h3>
          </div>
          <p className="text-xl text-gray-200 italic leading-relaxed bg-pink-950/30 p-6 rounded-lg border-l-4 border-pink-400">
            "{content.hypothesisText}"
          </p>
        </div>
      </div>

      <div className="bg-gray-900/80 border border-gray-700 rounded-xl overflow-hidden">
        <div className="grid grid-cols-3 gap-px bg-gray-700">
          <div className="bg-gray-800 p-4">
            <h4 className="text-purple-400 font-bold uppercase text-sm">Aspect</h4>
          </div>
          <div className="bg-blue-900/30 p-4">
            <h4 className="text-blue-400 font-bold uppercase text-sm">Aim</h4>
          </div>
          <div className="bg-pink-900/30 p-4">
            <h4 className="text-pink-400 font-bold uppercase text-sm">Hypothesis</h4>
          </div>
          {content.differences.map((diff, idx) => (
            <>
              <div key={`aspect-${idx}`} className="bg-gray-800 p-4">
                <p className="text-gray-200 font-semibold">{diff.aspect}</p>
              </div>
              <div key={`aim-${idx}`} className="bg-gray-900 p-4">
                <p className="text-gray-300">{diff.aim}</p>
              </div>
              <div key={`hyp-${idx}`} className="bg-gray-900 p-4">
                <p className="text-gray-300">{diff.hypothesis}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

// Hypothesis Types - Card deck with flip
const HypothesisTypes: React.FC<{ level: 'gcse' | 'alevel' }> = ({ level }) => {
  const [selectedType, setSelectedType] = useState<string | null>(null)
  
  const types = level === 'gcse' ? [
    {
      id: 'alternative',
      name: 'Alternative Hypothesis',
      symbol: 'H₁',
      description: 'Predicts there WILL be a difference or relationship between variables.',
      example: 'There will be a difference in test scores between students who revise with music and those who revise in silence.',
      color: 'green'
    },
    {
      id: 'null',
      name: 'Null Hypothesis',
      symbol: 'H₀',
      description: 'Predicts there will be NO difference or relationship. Any difference is due to chance.',
      example: 'There will be no difference in test scores between students who revise with music and those who revise in silence.',
      color: 'red'
    }
  ] : [
    {
      id: 'alternative',
      name: 'Alternative Hypothesis',
      symbol: 'H₁',
      description: 'States that an effect, difference, or relationship exists. Forms the basis for statistical hypothesis testing.',
      example: 'Directional (one-tailed): Participants in high-stress conditions will recall fewer words than low-stress participants.\n\nNon-directional (two-tailed): There will be a significant difference in recall between high-stress and low-stress conditions.',
      color: 'green'
    },
    {
      id: 'null',
      name: 'Null Hypothesis',
      symbol: 'H₀',
      description: 'Assumes no significant effect exists in the population. Rejected when p < α (typically 0.05).',
      example: 'H₀: μ₁ = μ₂ (There is no significant difference in mean recall scores between high-stress and low-stress conditions)',
      color: 'red'
    }
  ]

  return (
    <div className="flex flex-col h-full items-center justify-center p-8 animate-fadeIn">
      <h2 className="text-5xl font-black text-white mb-12 text-center">Types of Hypotheses</h2>
      
      <div className="grid grid-cols-2 gap-8 max-w-5xl w-full">
        {types.map((type) => (
          <div
            key={type.id}
            onClick={() => setSelectedType(selectedType === type.id ? null : type.id)}
            className={`cursor-pointer group border-3 rounded-2xl transition-all duration-500 p-8 transform hover:scale-105 ${
              type.color === 'green'
                ? selectedType === type.id
                  ? 'border-green-500 bg-green-900/20 shadow-2xl shadow-green-500/30'
                  : 'border-green-700 bg-green-900/10 hover:border-green-500/70'
                : selectedType === type.id
                  ? 'border-red-500 bg-red-900/20 shadow-2xl shadow-red-500/30'
                  : 'border-red-700 bg-red-900/10 hover:border-red-500/70'
            }`}
            style={{ minHeight: '400px' }}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <div className={`text-6xl font-black ${type.color === 'green' ? 'text-green-400' : 'text-red-400'}`}>
                  {type.symbol}
                </div>
                {selectedType === type.id ? (
                  <AlertTriangle className={type.color === 'green' ? 'text-green-400' : 'text-red-400'} size={32} />
                ) : (
                  <div className="text-gray-600 group-hover:text-gray-400 text-2xl">→</div>
                )}
              </div>
              
              <h3 className={`text-2xl font-bold mb-4 ${type.color === 'green' ? 'text-green-300' : 'text-red-300'}`}>
                {type.name}
              </h3>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {type.description}
              </p>

              {selectedType === type.id && (
                <div className={`mt-auto animate-fadeIn ${type.color === 'green' ? 'bg-green-950/50' : 'bg-red-950/50'} rounded-lg p-6 border-l-4 ${type.color === 'green' ? 'border-green-500' : 'border-red-500'}`}>
                  <h4 className={`text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${type.color === 'green' ? 'text-green-400' : 'text-red-400'}`}>
                    <Lightbulb size={16} />
                    Example
                  </h4>
                  <p className="text-gray-200 whitespace-pre-line italic">
                    {type.example}
                  </p>
                </div>
              )}

              {selectedType !== type.id && (
                <p className="mt-auto text-gray-500 text-sm">Click to see example →</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Directional vs Non-directional Slider
const DirectionalSlider: React.FC<{ level: 'gcse' | 'alevel' }> = ({ level }) => {
  const [value, setValue] = useState(50)
  
  const isDirectional = value > 50
  const intensity = Math.abs(value - 50) / 50

  const content = level === 'gcse' ? {
    directional: {
      title: 'Directional (One-Tailed)',
      description: 'Predicts the DIRECTION of the effect',
      example: 'Students WITH music will score LOWER than students WITHOUT music',
      features: ['Uses words like "higher", "lower", "more", "less"', 'Specific prediction', 'One-tailed statistical test']
    },
    nonDirectional: {
      title: 'Non-Directional (Two-Tailed)',
      description: 'Predicts a difference but NOT the direction',
      example: 'There will be a DIFFERENCE between students with and without music',
      features: ['Just says there will be a "difference"', 'Less specific', 'Two-tailed statistical test']
    }
  } : {
    directional: {
      title: 'Directional Hypothesis (One-Tailed)',
      description: 'Specifies the direction of predicted effect - requires prior theoretical or empirical justification',
      example: 'H₁: μ₁ > μ₂ (High cognitive load group will score significantly higher than low load group)',
      features: ['Increased statistical power', 'α placed entirely in one tail', 'Requires strong theoretical basis', 'More precise prediction']
    },
    nonDirectional: {
      title: 'Non-Directional Hypothesis (Two-Tailed)',
      description: 'Predicts an effect exists without specifying direction - used when direction is uncertain',
      example: 'H₁: μ₁ ≠ μ₂ (There will be a significant difference in scores between groups)',
      features: ['Conservative approach', 'α split between both tails', 'Protects against Type I error', 'Appropriate for exploratory research']
    }
  }

  const currentContent = isDirectional ? content.directional : content.nonDirectional

  return (
    <div className="flex flex-col h-full items-center justify-center p-8 animate-fadeIn">
      <h2 className="text-5xl font-black text-white mb-12">Directional vs Non-Directional</h2>
      
      <div className="max-w-5xl w-full mb-12">
        <div className="relative">
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="w-full h-3 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, 
                rgb(59, 130, 246) 0%, 
                rgb(59, 130, 246) ${value}%, 
                rgb(236, 72, 153) ${value}%, 
                rgb(236, 72, 153) 100%)`
            }}
          />
          <div className="flex justify-between mt-4 text-sm font-mono text-gray-400">
            <span className={value < 50 ? 'text-blue-400 font-bold' : ''}>Non-Directional</span>
            <span className="text-gray-600">Move slider →</span>
            <span className={value > 50 ? 'text-pink-400 font-bold' : ''}>Directional</span>
          </div>
        </div>
      </div>

      <div className={`max-w-4xl w-full rounded-2xl border-2 p-10 transition-all duration-500 ${
        isDirectional
          ? 'border-pink-500 bg-gradient-to-br from-pink-900/30 to-purple-900/20 shadow-2xl shadow-pink-500/30'
          : 'border-blue-500 bg-gradient-to-br from-blue-900/30 to-cyan-900/20 shadow-2xl shadow-blue-500/30'
      }`} style={{ opacity: 0.4 + (intensity * 0.6) }}>
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-16 h-16 rounded-full ${isDirectional ? 'bg-pink-500/20' : 'bg-blue-500/20'} flex items-center justify-center`}>
            <TrendingUp size={32} className={isDirectional ? 'text-pink-400' : 'text-blue-400'} />
          </div>
          <h3 className={`text-4xl font-black ${isDirectional ? 'text-pink-300' : 'text-blue-300'}`}>
            {currentContent.title}
          </h3>
        </div>

        <p className="text-2xl text-gray-200 mb-6 leading-relaxed">
          {currentContent.description}
        </p>

        <div className={`${isDirectional ? 'bg-pink-950/30' : 'bg-blue-950/30'} rounded-lg p-6 mb-6 border-l-4 ${isDirectional ? 'border-pink-500' : 'border-blue-500'}`}>
          <p className="text-xl text-gray-200 italic">{currentContent.example}</p>
        </div>

        <ul className="space-y-3">
          {currentContent.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-300 text-lg">
              <CheckCircle size={24} className={`flex-shrink-0 mt-0.5 ${isDirectional ? 'text-pink-400' : 'text-blue-400'}`} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// Hypothesis Writer - Matching/Building Activity
const HypothesisWriter: React.FC<{ level: 'gcse' | 'alevel' }> = ({ level }) => {
  const [selectedParts, setSelectedParts] = useState<Record<string, string>>({})
  
  const exercise = level === 'gcse' ? {
    scenario: 'A psychologist wants to test if listening to classical music improves test performance.',
    parts: {
      population: ['Students', 'Teachers', 'Musicians'],
      condition1: ['listen to classical music', 'listen to rock music', 'sit in silence'],
      action: ['while taking a test', 'before the test', 'after the test'],
      prediction: ['will score higher', 'will score lower', 'will score the same'],
      condition2: ['students who sit in silence', 'students who listen to rock', 'students who don\'t take the test']
    },
    correct: {
      population: 'Students',
      condition1: 'listen to classical music',
      action: 'while taking a test',
      prediction: 'will score higher',
      condition2: 'students who sit in silence'
    }
  } : {
    scenario: 'Research investigating the effect of sleep deprivation on executive function in young adults.',
    parts: {
      population: ['Participants aged 18-25', 'All adults', 'Sleep-deprived individuals'],
      condition1: ['experiencing partial sleep deprivation (4 hours sleep)', 'who are well-rested (8 hours)', 'with varied sleep patterns'],
      measure: ['performance on a Stroop task', 'subjective tiredness ratings', 'heart rate variability'],
      prediction: ['will demonstrate significantly impaired', 'will show no difference in', 'will exhibit enhanced'],
      comparison: ['compared to well-rested controls', 'relative to baseline', 'versus the general population'],
      stats: ['(p < 0.05)', '(d > 0.5)', '(r > 0.7)']
    },
    correct: {
      population: 'Participants aged 18-25',
      condition1: 'experiencing partial sleep deprivation (4 hours sleep)',
      measure: 'performance on a Stroop task',
      prediction: 'will demonstrate significantly impaired',
      comparison: 'compared to well-rested controls',
      stats: '(p < 0.05)'
    }
  }

  const isComplete = Object.keys(exercise.correct).every(key => selectedParts[key])
  const isCorrect = isComplete && Object.keys(exercise.correct).every(
    key => selectedParts[key] === exercise.correct[key as keyof typeof exercise.correct]
  )

  return (
    <div className="flex flex-col h-full p-8 animate-fadeIn">
      <h2 className="text-5xl font-black text-white mb-6">Build a Good Hypothesis</h2>
      <p className="text-xl text-gray-300 mb-8 max-w-4xl">
        <span className="text-pink-400 font-bold">Scenario:</span> {exercise.scenario}
      </p>

      <div className="grid grid-cols-1 gap-6 mb-8 max-w-5xl">
        {Object.entries(exercise.parts).map(([partKey, options]) => (
          <div key={partKey} className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
            <h3 className="text-pink-400 font-bold uppercase text-sm mb-4 tracking-wider">
              {partKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            </h3>
            <div className="flex gap-3 flex-wrap">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedParts(prev => ({ ...prev, [partKey]: option }))}
                  className={`px-6 py-3 rounded-lg border-2 transition-all font-semibold ${
                    selectedParts[partKey] === option
                      ? 'border-pink-500 bg-pink-600 text-white shadow-lg shadow-pink-500/30'
                      : 'border-gray-600 bg-gray-800 text-gray-300 hover:border-pink-500/50 hover:bg-gray-700'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {isComplete && (
        <div className={`max-w-5xl rounded-2xl border-2 p-8 mb-6 animate-fadeIn ${
          isCorrect
            ? 'border-green-500 bg-green-900/20 shadow-lg shadow-green-500/30'
            : 'border-red-500 bg-red-900/20 shadow-lg shadow-red-500/30'
        }`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-12 h-12 rounded-full ${isCorrect ? 'bg-green-500/20' : 'bg-red-500/20'} flex items-center justify-center`}>
              {isCorrect ? <CheckCircle className="text-green-400" size={28} /> : <X className="text-red-400" size={28} />}
            </div>
            <h3 className={`text-2xl font-bold ${isCorrect ? 'text-green-300' : 'text-red-300'}`}>
              {isCorrect ? '✓ Well-Operationalised Hypothesis!' : '✗ Try Again - Check Your Selection'}
            </h3>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-6 border-l-4 border-gray-500">
            <p className="text-xl text-gray-200 leading-relaxed">
              {Object.values(selectedParts).join(' ')}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
// Knowledge Check Component - Full Width
const KnowledgeCheck: React.FC<{ questions: Question[], title: string, subtitle: string }> = ({ questions, title, subtitle }) => {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)

  const handleSelect = (qId: number, optionIdx: number) => 
    setAnswers(prev => ({ ...prev, [qId]: optionIdx }))
  
  const score = Object.keys(answers).reduce(
    (acc, qId) => acc + (answers[Number(qId)] === questions[Number(qId) - 1].correct ? 1 : 0),
    0
  )

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 animate-fadeIn">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 shadow-2xl shadow-purple-500/50 mb-4">
            <Brain size={40} className="text-white" />
          </div>
          <h2 className="text-4xl font-black text-white mb-2">{title}</h2>
          <p className="text-gray-400">{subtitle}</p>
        </div>

        <div className="space-y-4 mb-6">
          {questions.map((q) => (
            <div key={q.id} className="bg-gray-900/80 rounded-xl border border-gray-700 p-5">
              <h4 className="font-bold text-gray-100 mb-3">
                <span className="text-purple-400 mr-2">{q.id}.</span>
                {q.question}
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {q.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => !showResults && handleSelect(q.id, idx)}
                    className={`rounded-lg text-left transition-all px-4 py-3 border ${
                      showResults
                        ? idx === q.correct
                          ? 'bg-green-900/40 border-green-500 text-green-200 font-bold'
                          : answers[q.id] === idx
                            ? 'bg-red-900/40 border-red-500 text-red-200'
                            : 'bg-gray-800/50 border-transparent text-gray-500'
                        : answers[q.id] === idx
                          ? 'bg-purple-600 border-purple-500 text-white font-semibold'
                          : 'bg-gray-800 border-gray-700 hover:bg-gray-750 text-gray-300 hover:text-white hover:border-purple-500/50'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {!showResults ? (
          <button
            onClick={() => setShowResults(true)}
            disabled={Object.keys(answers).length < questions.length}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:opacity-50 disabled:grayscale text-white rounded-xl font-bold px-8 py-4 text-lg transition-all shadow-lg"
          >
            Check Answers
          </button>
        ) : (
          <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 border-2 border-purple-500/50 rounded-xl p-8 text-center shadow-[0_0_40px_rgba(168,85,247,0.2)]">
            <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 block mb-3">
              {score} / {questions.length}
            </span>
            <span className="text-purple-200 font-semibold text-xl">
              {score === questions.length ? '🎉 Perfect Score!' : score >= questions.length * 0.75 ? '✨ Great Work!' : score >= questions.length * 0.5 ? '👍 Good Try!' : '📚 Keep Learning!'}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

// Split Knowledge Check Component - Two Column Layout (for mid-lesson checks)
const SplitKnowledgeCheck: React.FC<{ questions: Question[], title: string, subtitle: string }> = ({ questions, title, subtitle }) => {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)

  const handleSelect = (qId: number, optionIdx: number) => 
    setAnswers(prev => ({ ...prev, [qId]: optionIdx }))
  
  const score = Object.keys(answers).reduce(
    (acc, qId) => acc + (answers[Number(qId)] === questions[Number(qId) - 1].correct ? 1 : 0),
    0
  )

  return (
    <div className="flex flex-col h-full p-8 animate-fadeIn">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 shadow-2xl shadow-purple-500/50 mb-4">
          <Brain size={40} className="text-white" />
        </div>
        <h2 className="text-4xl font-black text-white mb-2">{title}</h2>
        <p className="text-gray-400">{subtitle}</p>
      </div>

      {/* Two Column Questions Layout */}
      <div className="flex-grow grid grid-cols-2 gap-6 overflow-auto custom-scrollbar">
        {/* Left Column */}
        <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
          {questions.slice(0, Math.ceil(questions.length / 2)).map((q) => (
            <div key={q.id} className="bg-gray-900/80 rounded-xl border border-gray-700 p-5">
              <h4 className="font-bold text-gray-100 mb-3">
                <span className="text-purple-400 mr-2">{q.id}.</span>
                {q.question}
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {q.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => !showResults && handleSelect(q.id, idx)}
                    className={`rounded-lg text-left transition-all px-3 py-2 text-sm border ${
                      showResults
                        ? idx === q.correct
                          ? 'bg-green-900/40 border-green-500 text-green-200 font-bold'
                          : answers[q.id] === idx
                            ? 'bg-red-900/40 border-red-500 text-red-200'
                            : 'bg-gray-800/50 border-transparent text-gray-500'
                        : answers[q.id] === idx
                          ? 'bg-purple-600 border-purple-500 text-white font-semibold'
                          : 'bg-gray-800 border-gray-700 hover:bg-gray-750 text-gray-300 hover:text-white hover:border-purple-500/50'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-4 overflow-y-auto pl-2 custom-scrollbar">
          {questions.slice(Math.ceil(questions.length / 2)).map((q) => (
            <div key={q.id} className="bg-gray-900/80 rounded-xl border border-gray-700 p-5">
              <h4 className="font-bold text-gray-100 mb-3">
                <span className="text-purple-400 mr-2">{q.id}.</span>
                {q.question}
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {q.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => !showResults && handleSelect(q.id, idx)}
                    className={`rounded-lg text-left transition-all px-3 py-2 text-sm border ${
                      showResults
                        ? idx === q.correct
                          ? 'bg-green-900/40 border-green-500 text-green-200 font-bold'
                          : answers[q.id] === idx
                            ? 'bg-red-900/40 border-red-500 text-red-200'
                            : 'bg-gray-800/50 border-transparent text-gray-500'
                        : answers[q.id] === idx
                          ? 'bg-purple-600 border-purple-500 text-white font-semibold'
                          : 'bg-gray-800 border-gray-700 hover:bg-gray-750 text-gray-300 hover:text-white hover:border-purple-500/50'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer with Submit Button */}
      <div className="mt-8 pt-6 border-t border-gray-700 flex items-center justify-between">
        {!showResults ? (
          <button
            onClick={() => setShowResults(true)}
            disabled={Object.keys(answers).length < questions.length}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:opacity-50 disabled:grayscale text-white rounded-xl font-bold px-8 py-3 transition-all shadow-lg"
          >
            Check Answers ({Object.keys(answers).length}/{questions.length})
          </button>
        ) : (
          <div className="w-full bg-gradient-to-r from-purple-900/40 to-pink-900/40 border-2 border-purple-500/50 rounded-xl p-6 text-center">
            <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 block mb-2">
              {score} / {questions.length}
            </span>
            <span className="text-purple-200 font-semibold">
              {score === questions.length ? '🎉 Perfect Score!' : score >= questions.length * 0.75 ? '✨ Great Work!' : score >= questions.length * 0.5 ? '👍 Good Try!' : '📚 Keep Learning!'}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

// Aims Interactive Component - Click to reveal cards
const AimsInteractive: React.FC<{ level: 'gcse' | 'alevel' }> = ({ level }) => {
  const [revealed, setRevealed] = useState<string | null>(null)
  
  const content = level === 'gcse' ? {
    definition: 'An aim is a general statement explaining the purpose of a study. It tells us what the researcher wants to find out.',
    examples: [
      { id: 'ex1', title: 'Memory Study', aim: 'To investigate whether background music affects concentration.' },
      { id: 'ex2', title: 'Sleep Research', aim: 'To find out if lack of sleep affects reaction time.' },
      { id: 'ex3', title: 'Social Psychology', aim: 'To examine the effect of group size on helping behaviour.' }
    ],
    tips: ['States what the study is about', 'Written as a statement, not a question', 'Broad overview of the research goal']
  } : {
    definition: 'An aim provides a broad statement of intent that outlines the general purpose of an investigation. It establishes the research focus without making specific predictions about outcomes.',
    examples: [
      { id: 'ex1', title: 'Cognitive Load', aim: 'To investigate the relationship between cognitive load and working memory performance in educational settings.' },
      { id: 'ex2', title: 'Sleep Deprivation', aim: 'To examine the effects of partial sleep deprivation on executive function and attentional control in young adults.' },
      { id: 'ex3', title: 'Bystander Effect', aim: 'To explore the mediating role of diffusion of responsibility in the relationship between group size and prosocial intervention.' }
    ],
    tips: ['Provides direction for the research methodology', 'Identifies the key variables under investigation', 'Distinguishes exploratory from confirmatory research', 'Forms the basis for hypothesis development']
  }

  return (
    <div className="flex flex-col h-full p-8 animate-fadeIn">
      <div className="mb-8">
        <h2 className="text-5xl font-black text-white mb-4 flex items-center gap-3">
          <Target className="text-pink-500" size={48} />
          What is an Aim?
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
          {content.definition}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        {content.examples.map((example) => (
          <div
            key={example.id}
            onClick={() => setRevealed(revealed === example.id ? null : example.id)}
            className={`cursor-pointer group border-2 rounded-2xl transition-all duration-300 overflow-hidden p-6 ${
              revealed === example.id
                ? 'border-pink-500 bg-pink-900/10 shadow-lg shadow-pink-500/20'
                : 'border-gray-700 hover:border-pink-500/50 bg-gray-900/50'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">{example.title}</h3>
              {revealed === example.id ? <EyeOff className="text-pink-400" /> : <Eye className="text-gray-500 group-hover:text-pink-400" />}
            </div>
            {revealed === example.id && (
              <div className="animate-fadeIn">
                <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-pink-500">
                  <p className="text-gray-200 italic">{example.aim}</p>
                </div>
              </div>
            )}
            {revealed !== example.id && (
              <p className="text-gray-500 text-sm">Click to reveal aim →</p>
            )}
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6">
        <h3 className="text-pink-400 font-bold uppercase tracking-wider text-sm mb-4 flex items-center gap-2">
          <Zap size={16} />
          Key Points
        </h3>
        <ul className="grid grid-cols-2 gap-3">
          {content.tips.map((tip, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-300">
              <CheckCircle size={20} className="text-pink-400 flex-shrink-0 mt-0.5" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// Hypothesis Lab - Interactive Simulation
const HypothesisLab: React.FC<{ level: 'gcse' | 'alevel' }> = ({ level }) => {
  const [gameState, setGameState] = useState<'intro' | 'setup' | 'running' | 'results'>('intro')
  const [hypothesis, setHypothesis] = useState<'directional' | 'nondirectional' | null>(null)
  const [participants, setParticipants] = useState(20)
  const [results, setResults] = useState<{ music: number[], silence: number[] } | null>(null)
  const [conclusion, setConclusion] = useState('')

  const reset = () => {
    setGameState('setup')
    setHypothesis(null)
    setResults(null)
    setConclusion('')
  }

  const runExperiment = () => {
    setGameState('running')
    setTimeout(() => {
      // Simulate experiment results
      const musicScores = Array.from({ length: participants / 2 }, () => 
        Math.floor(Math.random() * 20) + 60) // 60-80 range
      const silenceScores = Array.from({ length: participants / 2 }, () => 
        Math.floor(Math.random() * 20) + 70) // 70-90 range (higher)
      
      setResults({ music: musicScores, silence: silenceScores })
      
      const musicMean = musicScores.reduce((a, b) => a + b) / musicScores.length
      const silenceMean = silenceScores.reduce((a, b) => a + b) / silenceScores.length
      
      if (level === 'gcse') {
        setConclusion(
          `The silence group scored higher (M = ${silenceMean.toFixed(1)}) than the music group (M = ${musicMean.toFixed(1)}). ` +
          `This supports our ${hypothesis} hypothesis that predicted ${hypothesis === 'directional' ? 'silence would score higher' : 'there would be a difference'}.`
        )
      } else {
        const diff = Math.abs(silenceMean - musicMean)
        const pooledSD = 8 // simplified
        const cohensD = (diff / pooledSD).toFixed(2)
        setConclusion(
          `Silence group (M = ${silenceMean.toFixed(2)}, SD = 8.0) significantly outperformed music group (M = ${musicMean.toFixed(2)}, SD = 8.0), ` +
          `t(${participants - 2}) = 3.45, p = 0.002, d = ${cohensD}. ` +
          `We reject H₀ in favor of H₁. Effect size is medium-to-large.`
        )
      }
      
      setGameState('results')
    }, 2000)
  }

  if (gameState === 'intro') {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8 animate-fadeIn">
        <div className="max-w-3xl text-center">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 shadow-2xl shadow-purple-500/50 mb-8">
            <Beaker size={64} className="text-white" />
          </div>
          <h2 className="text-6xl font-black text-white mb-6">Hypothesis Testing Lab</h2>
          <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
            {level === 'gcse'
              ? 'Run a virtual experiment to test if background music affects memory test scores!'
              : 'Design and execute a controlled experiment testing the effect of auditory distraction on cognitive performance.'}
          </p>
          <button
            onClick={() => setGameState('setup')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-2xl px-12 py-6 rounded-xl shadow-2xl shadow-purple-500/50 transition-all transform hover:scale-105"
          >
            Start Experiment →
          </button>
        </div>
      </div>
    )
  }

  if (gameState === 'setup') {
    return (
      <div className="flex flex-col h-full p-8 animate-fadeIn">
        <h2 className="text-5xl font-black text-white mb-8">Design Your Experiment</h2>
        
        <div className="max-w-4xl space-y-8">
          <div className="bg-gray-900/80 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-pink-400 mb-6">Step 1: Choose Your Hypothesis</h3>
            <div className="grid grid-cols-2 gap-6">
              <button
                onClick={() => setHypothesis('directional')}
                className={`p-8 rounded-xl border-2 transition-all ${
                  hypothesis === 'directional'
                    ? 'border-pink-500 bg-pink-900/20 shadow-lg shadow-pink-500/30'
                    : 'border-gray-600 bg-gray-800 hover:border-pink-500/50'
                }`}
              >
                <h4 className="text-xl font-bold text-white mb-3">Directional</h4>
                <p className="text-gray-300">
                  "Students in silence will score <span className="text-pink-400 font-bold">HIGHER</span> than students with music"
                </p>
              </button>
              <button
                onClick={() => setHypothesis('nondirectional')}
                className={`p-8 rounded-xl border-2 transition-all ${
                  hypothesis === 'nondirectional'
                    ? 'border-blue-500 bg-blue-900/20 shadow-lg shadow-blue-500/30'
                    : 'border-gray-600 bg-gray-800 hover:border-blue-500/50'
                }`}
              >
                <h4 className="text-xl font-bold text-white mb-3">Non-Directional</h4>
                <p className="text-gray-300">
                  "There will be a <span className="text-blue-400 font-bold">DIFFERENCE</span> between students with music and silence"
                </p>
              </button>
            </div>
          </div>

          <div className="bg-gray-900/80 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-purple-400 mb-6">Step 2: Set Sample Size</h3>
            <div className="flex items-center gap-6">
              <input
                type="range"
                min="10"
                max="100"
                step="10"
                value={participants}
                onChange={(e) => setParticipants(Number(e.target.value))}
                className="flex-1 h-3 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600"
              />
              <div className="text-4xl font-black text-white min-w-[100px] text-right">
                {participants}
              </div>
            </div>
            <p className="text-gray-400 mt-4">
              {level === 'gcse' 
                ? 'More participants = more reliable results'
                : 'Larger sample size increases statistical power and reduces standard error'}
            </p>
          </div>

          <button
            onClick={runExperiment}
            disabled={!hypothesis}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 disabled:opacity-50 disabled:grayscale text-white font-bold text-2xl px-12 py-6 rounded-xl shadow-2xl transition-all"
          >
            Run Experiment →
          </button>
        </div>
      </div>
    )
  }

  if (gameState === 'running') {
    return (
      <div className="flex flex-col items-center justify-center h-full animate-fadeIn">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-40 h-40 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 shadow-2xl shadow-purple-500/50 mb-8 animate-pulse">
            <Beaker size={80} className="text-white" />
          </div>
          <h2 className="text-5xl font-black text-white mb-4">Running Experiment...</h2>
          <p className="text-2xl text-gray-400">Testing {participants} participants</p>
        </div>
      </div>
    )
  }

  if (gameState === 'results' && results) {
    const musicMean = results.music.reduce((a, b) => a + b) / results.music.length
    const silenceMean = results.silence.reduce((a, b) => a + b) / results.silence.length

    return (
      <div className="flex flex-col h-full p-8 animate-fadeIn overflow-y-auto custom-scrollbar">
        <h2 className="text-5xl font-black text-white mb-8">Experimental Results</h2>
        
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500/50 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-blue-300 mb-6">🎵 Music Group</h3>
            <div className="text-6xl font-black text-blue-400 mb-4">
              {musicMean.toFixed(1)}
            </div>
            <p className="text-gray-300">Mean Score (out of 100)</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {results.music.slice(0, 10).map((score, idx) => (
                <div key={idx} className="bg-blue-950/50 px-3 py-1 rounded text-blue-200 text-sm">
                  {score}
                </div>
              ))}
              {results.music.length > 10 && (
                <div className="bg-blue-950/50 px-3 py-1 rounded text-blue-300 text-sm">
                  +{results.music.length - 10} more...
                </div>
              )}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/30 to-emerald-800/20 border-2 border-green-500/50 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-green-300 mb-6">🤫 Silence Group</h3>
            <div className="text-6xl font-black text-green-400 mb-4">
              {silenceMean.toFixed(1)}
            </div>
            <p className="text-gray-300">Mean Score (out of 100)</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {results.silence.slice(0, 10).map((score, idx) => (
                <div key={idx} className="bg-green-950/50 px-3 py-1 rounded text-green-200 text-sm">
                  {score}
                </div>
              ))}
              {results.silence.length > 10 && (
                <div className="bg-green-950/50 px-3 py-1 rounded text-green-300 text-sm">
                  +{results.silence.length - 10} more...
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border-2 border-purple-500/50 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-purple-300 mb-4 flex items-center gap-3">
            <BarChart className="text-purple-400" />
            Conclusion
          </h3>
          <p className="text-xl text-gray-200 leading-relaxed">
            {conclusion}
          </p>
        </div>

        <button
          onClick={reset}
          className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-bold text-xl px-8 py-4 rounded-xl transition-all"
        >
          ← Run Another Experiment
        </button>
      </div>
    )
  }

  return null
}

// Evaluation - Strengths and Limitations
const EvaluationSlide: React.FC<{ level: 'gcse' | 'alevel' }> = ({ level }) => {
  const [selectedPoint, setSelectedPoint] = useState<string | null>(null)

  const evaluationPoints = level === 'gcse' ? [
    {
      id: 'strength1',
      type: 'strength',
      title: 'Clear Direction',
      description: 'Good hypotheses provide a clear direction for research and tell us exactly what to look for.',
      example: 'This makes planning experiments easier and helps other researchers replicate the study.'
    },
    {
      id: 'strength2',
      type: 'strength',
      title: 'Testable',
      description: 'Hypotheses can be tested through experiments, making science objective and evidence-based.',
      example: 'We can collect data and use statistics to support or reject our predictions.'
    },
    {
      id: 'limitation1',
      type: 'limitation',
      title: 'Too Specific',
      description: 'Sometimes hypotheses are so specific that they miss important unexpected findings.',
      example: 'If we only look for what we predicted, we might ignore surprising results that could be important.'
    },
    {
      id: 'limitation2',
      type: 'limitation',
      title: 'Researcher Bias',
      description: 'Researchers might want their hypothesis to be supported, which can affect how they design or interpret studies.',
      example: 'This is why peer review and replication are important in science.'
    }
  ] : [
    {
      id: 'strength1',
      type: 'strength',
      title: 'Facilitates Falsification',
      description: 'Well-formulated hypotheses enable Popperian falsification - the cornerstone of scientific methodology.',
      example: 'The ability to reject H₀ based on empirical evidence strengthens the epistemological foundations of psychological science.'
    },
    {
      id: 'strength2',
      type: 'strength',
      title: 'Operationalisation Enhances Replicability',
      description: 'Precise operationalisation of variables in hypotheses enables systematic replication, addressing the replication crisis.',
      example: 'Studies like the Open Science Collaboration (2015) demonstrate how clear hypotheses improve reproducibility.'
    },
    {
      id: 'limitation1',
      type: 'limitation',
      title: 'Confirmation Bias',
      description: 'The HARKing problem (Hypothesising After Results are Known) undermines the integrity of hypothesis testing.',
      example: 'Kerr (1998) identified how post-hoc hypothesis construction inflates Type I error rates and threatens validity.'
    },
    {
      id: 'limitation2',
      type: 'limitation',
      title: 'Null Hypothesis Testing Limitations',
      description: 'NHST has been criticized for binary thinking and p-value misinterpretation (Cumming, 2014).',
      example: 'Alternative approaches like Bayesian inference and estimation statistics provide richer inferential frameworks.'
    }
  ]

  return (
    <div className="flex flex-col h-full p-8 animate-fadeIn">
      <h2 className="text-5xl font-black text-white mb-8">Evaluation: Aims & Hypotheses</h2>
      
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-3xl font-bold text-green-400 mb-6 flex items-center gap-3">
            <CheckCircle size={32} />
            Strengths
          </h3>
          <div className="space-y-4">
            {evaluationPoints.filter(p => p.type === 'strength').map((point) => (
              <div
                key={point.id}
                onClick={() => setSelectedPoint(selectedPoint === point.id ? null : point.id)}
                className={`cursor-pointer border-2 rounded-xl p-6 transition-all ${
                  selectedPoint === point.id
                    ? 'border-green-500 bg-green-900/20 shadow-lg shadow-green-500/30'
                    : 'border-green-700 bg-green-900/10 hover:border-green-500/70'
                }`}
              >
                <h4 className="text-xl font-bold text-green-300 mb-3">{point.title}</h4>
                <p className="text-gray-300 mb-3">{point.description}</p>
                {selectedPoint === point.id && (
                  <div className="bg-green-950/50 rounded-lg p-4 border-l-4 border-green-500 animate-fadeIn">
                    <p className="text-green-200 italic text-sm">{point.example}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-red-400 mb-6 flex items-center gap-3">
            <AlertTriangle size={32} />
            Limitations
          </h3>
          <div className="space-y-4">
            {evaluationPoints.filter(p => p.type === 'limitation').map((point) => (
              <div
                key={point.id}
                onClick={() => setSelectedPoint(selectedPoint === point.id ? null : point.id)}
                className={`cursor-pointer border-2 rounded-xl p-6 transition-all ${
                  selectedPoint === point.id
                    ? 'border-red-500 bg-red-900/20 shadow-lg shadow-red-500/30'
                    : 'border-red-700 bg-red-900/10 hover:border-red-500/70'
                }`}
              >
                <h4 className="text-xl font-bold text-red-300 mb-3">{point.title}</h4>
                <p className="text-gray-300 mb-3">{point.description}</p>
                {selectedPoint === point.id && (
                  <div className="bg-red-950/50 rounded-lg p-4 border-l-4 border-red-500 animate-fadeIn">
                    <p className="text-red-200 italic text-sm">{point.example}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Hypothesis Writing Task - Final Assessment Component
const HypothesisWritingTask: React.FC<{ level: 'gcse' | 'alevel' }> = ({ level }) => {
  const [aimText, setAimText] = useState('')
  const [hypothesisText, setHypothesisText] = useState('')
  const [feedbackShown, setFeedbackShown] = useState(false)
  const [selectedType, setSelectedType] = useState<'directional' | 'null' | null>(null)

  const scenario = level === 'gcse' 
    ? 'A psychologist believes that students who take a 10-minute break perform better on memory tests than students who don\'t take a break.'
    : 'A researcher hypothesises that acute sleep deprivation (4 hours) negatively impacts performance on a working memory task compared to normal sleep (8 hours).'

  const isAimValid = aimText.trim().length > 20
  const isHypothesisValid = hypothesisText.trim().length > 20 && selectedType !== null
  const allComplete = isAimValid && isHypothesisValid

  return (
    <div className="flex flex-col h-full p-8 animate-fadeIn">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-5xl font-black text-white mb-4 flex items-center gap-3">
          <FlaskConical className="text-cyan-500" size={48} />
          Write Your Own Hypothesis
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mb-6">
          Apply everything you've learned to write an aim and hypothesis for this scenario. This is your final assessment!
        </p>
      </div>

      {/* Scenario Box */}
      <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/20 border-2 border-cyan-500/50 rounded-2xl p-8 mb-8">
        <h3 className="text-2xl font-bold text-cyan-300 mb-4">📋 Research Scenario</h3>
        <p className="text-xl text-gray-200 leading-relaxed italic">
          {scenario}
        </p>
      </div>

      {/* Two Column Writing Area */}
      <div className="flex-grow grid grid-cols-2 gap-8 overflow-hidden">
        {/* Left Column - Aim */}
        <div className="flex flex-col">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-pink-400 mb-2 flex items-center gap-2">
              <Target size={24} />
              Step 1: Write the AIM
            </h3>
            <p className="text-sm text-gray-400">
              {level === 'gcse'
                ? 'A general statement of what the study will investigate.'
                : 'A broad statement of intent outlining the research focus without making specific outcome predictions.'}
            </p>
          </div>
          <textarea
            value={aimText}
            onChange={(e) => setAimText(e.target.value)}
            placeholder={level === 'gcse' 
              ? 'To investigate whether...'
              : 'To examine the relationship between...'}
            className="flex-grow bg-gray-800/50 border-2 border-pink-500/30 hover:border-pink-500/50 focus:border-pink-500 rounded-xl p-6 text-gray-100 placeholder-gray-500 focus:outline-none resize-none transition-all"
          />
          {isAimValid && (
            <div className="mt-3 flex items-center gap-2 text-green-400">
              <CheckCircle size={20} />
              <span className="text-sm font-semibold">Aim is ready!</span>
            </div>
          )}
          {aimText.length > 0 && !isAimValid && (
            <div className="mt-3 text-yellow-400 text-sm">
              Aim is too short - aim for 20+ characters
            </div>
          )}
        </div>

        {/* Right Column - Hypothesis */}
        <div className="flex flex-col">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-purple-400 mb-2 flex items-center gap-2">
              <Beaker size={24} />
              Step 2: Write the HYPOTHESIS
            </h3>
            <p className="text-sm text-gray-400">
              {level === 'gcse'
                ? 'A specific, testable prediction that includes variables.'
                : 'A falsifiable prediction derived from theory, operationally defined and amenable to statistical testing.'}
            </p>
          </div>

          {/* Type Selector */}
          <div className="mb-4 grid grid-cols-2 gap-2">
            <button
              onClick={() => setSelectedType('directional')}
              className={`p-3 rounded-lg border-2 text-sm font-bold transition-all ${
                selectedType === 'directional'
                  ? 'border-pink-500 bg-pink-600 text-white'
                  : 'border-gray-600 bg-gray-800 text-gray-400 hover:border-pink-500/50'
              }`}
            >
              Directional (One-Tailed)
            </button>
            <button
              onClick={() => setSelectedType('null')}
              className={`p-3 rounded-lg border-2 text-sm font-bold transition-all ${
                selectedType === 'null'
                  ? 'border-red-500 bg-red-600 text-white'
                  : 'border-gray-600 bg-gray-800 text-gray-400 hover:border-red-500/50'
              }`}
            >
              Non-Directional (Two-Tailed)
            </button>
          </div>

          <textarea
            value={hypothesisText}
            onChange={(e) => setHypothesisText(e.target.value)}
            placeholder={selectedType === 'directional'
              ? 'Students who... will... compared to...'
              : 'There will be a difference between...'}
            className="flex-grow bg-gray-800/50 border-2 border-purple-500/30 hover:border-purple-500/50 focus:border-purple-500 rounded-xl p-6 text-gray-100 placeholder-gray-500 focus:outline-none resize-none transition-all"
          />
          {isHypothesisValid && (
            <div className="mt-3 flex items-center gap-2 text-green-400">
              <CheckCircle size={20} />
              <span className="text-sm font-semibold">Hypothesis is ready!</span>
            </div>
          )}
          {hypothesisText.length > 0 && !isHypothesisValid && (
            <div className="mt-3 text-yellow-400 text-sm">
              {!selectedType ? 'Select a hypothesis type above' : 'Hypothesis is too short - aim for 20+ characters'}
            </div>
          )}
        </div>
      </div>

      {/* Footer - Submit Button */}
      <div className="mt-8 pt-6 border-t border-gray-700">
        {!feedbackShown ? (
          <button
            onClick={() => setFeedbackShown(true)}
            disabled={!allComplete}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
              allComplete
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg'
                : 'bg-gray-800 text-gray-500 cursor-not-allowed opacity-50'
            }`}
          >
            Review My Work
          </button>
        ) : (
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/30 border-2 border-green-500/50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle className="text-green-400" size={40} />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-green-300">Excellent Work!</h3>
                  <p className="text-green-200 text-lg">You've successfully completed the lesson</p>
                </div>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-6 mb-6 space-y-4">
                <div>
                  <h4 className="text-sm uppercase text-green-400 font-bold mb-2">Your Aim</h4>
                  <p className="text-gray-200 italic text-lg">{aimText}</p>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="text-sm uppercase text-purple-400 font-bold mb-2">Your Hypothesis</h4>
                  <p className="text-gray-200 italic text-lg">{hypothesisText}</p>
                  <p className="text-sm text-gray-400 mt-2 flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      selectedType === 'directional'
                        ? 'bg-pink-500/20 text-pink-300'
                        : 'bg-blue-500/20 text-blue-300'
                    }`}>
                      {selectedType === 'directional' ? 'One-Tailed' : 'Two-Tailed'}
                    </span>
                  </p>
                </div>
              </div>

              <div className="bg-blue-950/50 border-l-4 border-blue-500 rounded-lg p-6">
                <h4 className="text-blue-300 font-bold mb-3 flex items-center gap-2">
                  <Lightbulb size={20} />
                  Feedback on your work:
                </h4>
                <ul className="space-y-3 text-blue-200 text-sm">
                  <li>✓ Your aim is clear and identifies the research focus</li>
                  <li>✓ Your hypothesis is specific and testable with operationalised variables</li>
                  <li>✓ You've correctly chosen the {selectedType === 'directional' ? 'directional' : 'non-directional'} format</li>
                  <li>✓ Your wording suggests a clear understanding of the concepts</li>
                </ul>
              </div>
            </div>

            {level === 'alevel' && (
              <div className="bg-purple-950/30 border border-purple-500/30 rounded-xl p-6">
                <h4 className="text-purple-300 font-bold mb-3">A-Level Enhancement</h4>
                <p className="text-purple-200 text-sm mb-3">
                  Consider how you could strengthen this using the hypothetico-deductive framework:
                </p>
                <ul className="space-y-2 text-sm text-purple-200">
                  <li>• Could you also state the null hypothesis (H₀) explicitly?</li>
                  <li>• What statistical test would you use to analyse the data?</li>
                  <li>• What would be your significance level (α)?</li>
                  <li>• How would you measure effect size?</li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// Hypothesis Machine - interactive slot-style simulation
const HypothesisMachine: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const scenarios = [
    {
      title: 'Watching Television Before Bed',
      scenario: 'Does watching television before bed change how well people sleep?',
      nullText: 'Watching television before bed has no impact on how well you sleep.',
      altText: 'Watching scary movies before bed affects how fast you fall asleep.'
    },
    {
      title: 'Music & Learning',
      scenario: 'Does music while revising change how many words students remember?',
      nullText: 'Listening to music while revising has no effect on how many words are remembered.',
      altText: 'Students who revise with music will remember fewer words than students who revise in silence.'
    },
    {
      title: 'Caffeine & Reaction Time',
      scenario: 'Does drinking coffee before a reaction time test change performance?',
      nullText: 'Drinking coffee before a reaction time test has no effect on scores.',
      altText: 'Participants who drink coffee will react faster than those who do not drink coffee.'
    },
    {
      title: 'Background Noise & Reading',
      scenario: 'Does background noise affect reading comprehension?',
      nullText: 'Background noise has no effect on reading comprehension scores.',
      altText: 'Loud background noise reduces reading comprehension scores compared to quiet.'
    },
    {
      title: 'Breakfast & Concentration',
      scenario: 'Does eating breakfast improve concentration?',
      nullText: 'Eating breakfast has no effect on concentration test performance.',
      altText: 'Students who eat breakfast concentrate better than those who skip breakfast.'
    },
    {
      title: 'Screen Time & Sleep',
      scenario: 'Does using a phone before bed change sleep quality?',
      nullText: 'Using a phone before bed has no impact on sleep quality.',
      altText: 'Screen use before bed increases time to fall asleep.'
    },
    {
      title: 'Exercise & Memory',
      scenario: 'Does light exercise before study improve memory?',
      nullText: 'Light exercise before study has no effect on recall.',
      altText: 'Students who exercise recall more words than those who rest.'
    },
    {
      title: 'Room Temperature & Productivity',
      scenario: 'Does room temperature affect productivity?',
      nullText: 'Room temperature has no effect on task completion speed.',
      altText: 'Working in cooler rooms speeds up task completion compared to warmer rooms.'
    },
    {
      title: 'Music Type & Math Accuracy',
      scenario: 'Does the type of music affect maths accuracy?',
      nullText: 'Type of music has no effect on maths accuracy.',
      altText: 'Lyrical music reduces maths accuracy compared to instrumental music.'
    },
    {
      title: 'Lighting & Mood',
      scenario: 'Does brighter lighting improve mood?',
      nullText: 'Lighting level has no effect on reported mood.',
      altText: 'Brighter lighting increases positive mood ratings.'
    },
    {
      title: 'Study Time & Test Score',
      scenario: 'Does study duration change test scores?',
      nullText: 'Study duration has no effect on test scores.',
      altText: 'Students who study for 60 minutes score higher than those who study for 20 minutes.'
    },
    {
      title: 'Class Size & Participation',
      scenario: 'Does class size affect participation?',
      nullText: 'Class size has no effect on the number of times a student speaks.',
      altText: 'Smaller classes increase participation compared to larger classes.'
    },
    {
      title: 'Multitasking & Errors',
      scenario: 'Does multitasking increase errors?',
      nullText: 'Doing two tasks at once has no effect on error rate.',
      altText: 'Multitasking increases errors compared to single-tasking.'
    },
    {
      title: 'Social Media Break & Stress',
      scenario: 'Do social media breaks change stress levels?',
      nullText: 'A short social media break has no effect on stress ratings.',
      altText: 'Social media breaks increase stress compared to quiet breaks.'
    },
    {
      title: 'Background Colour & Memory',
      scenario: 'Does slide background colour affect memory?',
      nullText: 'Background colour of slides has no effect on recall.',
      altText: 'High-contrast slide backgrounds improve recall compared to low-contrast backgrounds.'
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [isSpinning, setIsSpinning] = useState(false)
  const [showResults, setShowResults] = useState(true) // Start true so first load shows something
  const [revealNull, setRevealNull] = useState(false)
  const [revealAlt, setRevealAlt] = useState(false)

  const startSpin = () => {
    if (isSpinning) return
    setIsSpinning(true)
    setShowResults(false)
    setRevealNull(false)
    setRevealAlt(false)

    const duration = 2000 // 2 seconds spin
    const startTime = Date.now()

    const interval = setInterval(() => {
      // Pick random scenario during spin for chaotic effect
      setActiveIndex(Math.floor(Math.random() * scenarios.length))

      if (Date.now() - startTime >= duration) {
        clearInterval(interval)
        // Land on a random final scenario
        const final = Math.floor(Math.random() * scenarios.length)
        setActiveIndex(final)
        setIsSpinning(false)
        setShowResults(true)
      }
    }, 80) // Fast updates
  }

  const current = scenarios[activeIndex]

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-8'}`}>
      {/* Machine Frame */}
      <div className={`bg-gray-800 border-4 border-gray-600 rounded-2xl shadow-2xl relative overflow-hidden group ${isPresenting ? 'p-6 flex-grow flex flex-col' : 'p-8'}`}>
        {/* Glossy overlay effect */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none rounded-t-xl"></div>
        
        {/* Header Section - Compact */}
        <div className={`flex items-center justify-between relative z-10 ${isPresenting ? 'mb-4' : 'mb-10'}`}>
          <div className="flex items-center gap-2">
            <div className={`bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg shadow-lg border border-pink-400/30 ${isPresenting ? 'p-3' : 'p-4'}`}>
              <Projector className="text-white" size={32} />
            </div>
            <div>
              <h2 className={`font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 uppercase tracking-widest ${isPresenting ? 'text-3xl leading-tight' : 'text-3xl'}`}>
                Hypothesis Gen
              </h2>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                <p className={`text-gray-400 font-mono uppercase ${isPresenting ? 'text-xs' : 'text-xs'}`}>Online</p>
              </div>
            </div>
          </div>
          {/* Button - Compact */}
          <button
            onClick={startSpin}
            disabled={isSpinning}
            className={`
              relative font-black uppercase tracking-widest transition-all transform rounded-lg
              ${isPresenting ? 'px-6 py-3 text-sm' : 'px-10 py-5 text-xl'}
              ${isSpinning 
                ? 'bg-gray-700 text-gray-500 translate-y-1 shadow-inner cursor-wait border-b-0' 
                : 'bg-red-600 hover:bg-red-500 text-white shadow-[0_4px_0_rgb(153,27,27)] hover:shadow-[0_2px_0_rgb(153,27,27)] active:shadow-none active:translate-y-1 border-b-2 border-red-800'
              }
            `}
          >
            <span className="flex items-center gap-2 relative z-10 filter drop-shadow-md">
              {isSpinning ? <Brain className="animate-spin" size={isPresenting ? 16 : 24} /> : <Zap className="fill-current" size={isPresenting ? 16 : 24} />}
              {isSpinning ? 'GEN...' : 'GEN'}
            </span>
          </button>
        </div>

        {/* The Screen / Slot Window */}
        <div className={`bg-black rounded-lg border-y-4 border-x-2 border-gray-700 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] relative overflow-hidden flex-grow flex flex-col justify-center ${isPresenting ? 'p-6 mb-4' : 'p-8 mb-10'}`}>
          {/* Scanline effect */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 pointer-events-none bg-[length:100%_4px,3px_100%]"></div>
          
          <div className="text-center flex flex-col items-center justify-center relative z-20">
            <h3 className={`text-gray-500 font-mono uppercase tracking-[0.2em] mb-3 ${isPresenting ? 'text-xs' : 'text-xs'}`}>Scenario</h3>
            <p className={`font-black font-mono leading-tight transition-all duration-75 ${isPresenting ? 'text-3xl' : 'text-2xl md:text-4xl'} text-green-400 ${
              isSpinning ? 'blur-[2px] opacity-70 scale-95' : 'blur-0 opacity-100 scale-100 text-shadow-glow'
            }`}>
              {current.scenario}
            </p>
          </div>
        </div>

        {/* Results Output Slots - Sliding Panels */}
        <div className={`grid grid-cols-2 relative z-10 ${isPresenting ? 'gap-12' : 'gap-8'}`}>
          {/* Null Slot */}
          <div
            onClick={() => showResults && !isSpinning && setRevealNull(true)}
            className={`
              border-2 border-blue-500/30 bg-gray-900/80 rounded-2xl relative transition-all duration-700 transform cursor-pointer
              ${isPresenting ? 'p-8' : 'p-6'}
              ${showResults ? 'opacity-100 translate-y-0 scale-100' : 'opacity-50 translate-y-4 scale-95 grayscale'}
              ${!showResults || isSpinning ? 'pointer-events-none' : 'hover:border-blue-400/60'}
            `}
          >
            <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 rounded-full font-bold uppercase tracking-wider shadow-lg border-2 border-gray-800 ${isPresenting ? 'py-2 text-lg' : 'py-1 text-xs'}`}>
              Null Hypothesis (H₀)
            </div>
            {showResults && revealNull ? (
              <p className={`text-blue-100 font-medium text-center mt-2 leading-relaxed font-mono ${isPresenting ? 'text-2xl' : 'text-lg'}`}>
                {`"${current.nullText}"`}
              </p>
            ) : (
              <div className={`flex flex-col items-center justify-center text-blue-200/70 mt-2 ${isPresenting ? 'py-10' : 'py-6'}`}>
                <Eye className={`mb-2 opacity-70 ${isPresenting ? 'w-16 h-16' : ''}`} />
                <span className={`${isPresenting ? 'text-2xl' : 'text-sm'} font-semibold`}>Click to reveal H₀</span>
              </div>
            )}
          </div>

          {/* Alt Slot */}
          <div
            onClick={() => showResults && !isSpinning && setRevealAlt(true)}
            className={`
              border-2 border-pink-500/30 bg-gray-900/80 rounded-2xl relative transition-all duration-700 delay-150 transform cursor-pointer
              ${isPresenting ? 'p-8' : 'p-6'}
              ${showResults ? 'opacity-100 translate-y-0 scale-100' : 'opacity-50 translate-y-4 scale-95 grayscale'}
              ${!showResults || isSpinning ? 'pointer-events-none' : 'hover:border-pink-400/60'}
            `}
          >
            <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-pink-600 text-white px-4 rounded-full font-bold uppercase tracking-wider shadow-lg border-2 border-gray-800 ${isPresenting ? 'py-2 text-lg' : 'py-1 text-xs'}`}>
              Alternative Hypothesis (H₁)
            </div>
            {showResults && revealAlt ? (
              <p className={`text-pink-100 font-medium text-center mt-2 leading-relaxed font-mono ${isPresenting ? 'text-2xl' : 'text-lg'}`}>
                {`"${current.altText}"`}
              </p>
            ) : (
              <div className={`flex flex-col items-center justify-center text-pink-200/70 mt-2 ${isPresenting ? 'py-10' : 'py-6'}`}>
                <Eye className={`mb-2 opacity-70 ${isPresenting ? 'w-16 h-16' : ''}`} />
                <span className={`font-semibold ${isPresenting ? 'text-2xl' : 'text-sm'}`}>Click to reveal H₁</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Decorative Industrial Screws */}
        <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-gray-700 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5),1px_1px_0_rgba(255,255,255,0.1)]"></div>
        <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-gray-700 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5),1px_1px_0_rgba(255,255,255,0.1)]"></div>
        <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-gray-700 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5),1px_1px_0_rgba(255,255,255,0.1)]"></div>
        <div className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-gray-700 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5),1px_1px_0_rgba(255,255,255,0.1)]"></div>
      </div>
    </div>
  )
}

// Null vs Alternative classifier - AFL
const HypothesisStatementCheck: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const statements = [
    { id: 1, text: 'Music has no effect on learning.', correct: 'null' as const },
    { id: 2, text: 'Students who revise with music will remember fewer words than those in silence.', correct: 'alternative' as const },
    { id: 3, text: 'Watching TV before bed has no impact on sleep quality.', correct: 'null' as const },
    { id: 4, text: 'Caffeine before a test will change reaction times.', correct: 'alternative' as const },
  ]

  const [answers, setAnswers] = useState<Record<number, 'null' | 'alternative' | undefined>>({})
  const [showResults, setShowResults] = useState(false)
  const [revealed, setRevealed] = useState<Record<number, boolean>>({})

  const score = statements.reduce((acc, s) => acc + (answers[s.id] === s.correct ? 1 : 0), 0)

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-8'}`}>
      <div className="mb-4">
        <h2 className={`${isPresenting ? 'text-3xl' : 'text-4xl'} font-black text-white mb-1`}>Thumbs Up/Down: Null or Alternative?</h2>
        <p className={`${isPresenting ? 'text-sm' : ''} text-gray-400`}>Classify each statement as H₀ (no effect) or H₁ (effect).</p>
      </div>

      <div className={`grid grid-cols-2 flex-grow overflow-auto custom-scrollbar ${isPresenting ? 'gap-3' : 'gap-4'}`}>
        {statements.map((s) => (
          <div key={s.id} className={`bg-gray-900/70 border border-gray-700 rounded-lg flex flex-col ${isPresenting ? 'p-4 gap-3' : 'p-5 gap-4'}`}>
            <div className="flex items-center justify-between">
              <span className={`${isPresenting ? 'text-sm' : 'text-sm'} text-pink-400 font-bold`}>Statement {s.id}</span>
              {(showResults || (isPresenting && revealed[s.id])) && (
                <span className={`${isPresenting ? 'text-xs px-2 py-1' : 'text-xs px-3 py-1'} font-bold rounded-full ${
                  s.correct === 'null' ? 'bg-blue-500/20 text-blue-300' : 'bg-pink-500/20 text-pink-300'
                }`}>
                  {s.correct === 'null' ? 'Null' : 'Alternative'}
                </span>
              )}
            </div>
            <p className={`text-gray-200 leading-relaxed ${isPresenting ? 'text-sm' : ''}`}>{s.text}</p>

            {!isPresenting && (
              <div className="flex gap-3">
                <button
                  onClick={() => !showResults && setAnswers(prev => ({ ...prev, [s.id]: 'null' }))}
                  className={`flex-1 rounded-lg border font-bold transition-all ${isPresenting ? 'px-3 py-2 text-xs' : 'px-4 py-3'} ${
                    answers[s.id] === 'null'
                      ? 'border-blue-500 bg-blue-900/30 text-blue-200'
                      : 'border-gray-700 bg-gray-800 text-gray-300 hover:border-blue-500/50'
                  }`}
                >
                  Null (H₀)
                </button>
                <button
                  onClick={() => !showResults && setAnswers(prev => ({ ...prev, [s.id]: 'alternative' }))}
                  className={`flex-1 rounded-lg border font-bold transition-all ${isPresenting ? 'px-3 py-2 text-xs' : 'px-4 py-3'} ${
                    answers[s.id] === 'alternative'
                      ? 'border-pink-500 bg-pink-900/30 text-pink-200'
                      : 'border-gray-700 bg-gray-800 text-gray-300 hover:border-pink-500/50'
                  }`}
                >
                  Alternative (H₁)
                </button>
              </div>
            )}

            {isPresenting && !revealed[s.id] && !showResults && (
              <button
                onClick={() => setRevealed(prev => ({ ...prev, [s.id]: true }))}
                className={`self-start rounded-lg border border-gray-700 text-gray-300 hover:border-pink-500/50 transition-all ${isPresenting ? 'px-3 py-1 text-xs' : 'px-4 py-2 text-sm'}`}
              >
                Reveal answer
              </button>
            )}
          </div>
        ))}
      </div>

      {!isPresenting && (
        <div className="mt-6 flex items-center gap-4">
          {!showResults ? (
            <button
              onClick={() => setShowResults(true)}
              disabled={Object.keys(answers).length < statements.length}
              className="px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white disabled:opacity-50 disabled:grayscale"
            >
              Check My Classifications
            </button>
          ) : (
            <div className="px-4 py-3 rounded-xl bg-green-900/30 border border-green-500/40 text-green-200 font-mono">
              Score: {score} / {statements.length}
            </div>
          )}
        </div>
      )}

      {isPresenting && (
        <div className="mt-4 flex items-center gap-2">
          <button
            onClick={() => setRevealed(Object.fromEntries(statements.map(s => [s.id, true])))}
            className="px-4 py-2 rounded-lg text-sm font-bold bg-pink-600 hover:bg-pink-500 text-white"
          >
            Reveal All
          </button>
          <button
            onClick={() => setRevealed({})}
            className="px-4 py-2 rounded-lg text-sm font-bold bg-gray-800 hover:bg-gray-700 text-gray-200"
          >
            Hide All
          </button>
        </div>
      )}
    </div>
  )
}

// Hypothesis writing for GCSE scenario (music & learning)
const HypothesisWriterGCSE: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1)

  const templates = {
    null: 'There will be no difference in _____ between _____ and _____.',
    alt_dir: 'Students who _____ will score higher/lower on _____ than students who _____.',
    alt_nd: 'There will be a difference in _____ between _____ and _____.'
  }

  const Header = () => (
    <div className="mb-4">
      <h2 className={`${isPresenting ? 'text-2xl' : 'text-5xl'} font-black text-white mb-1`}>Independent Task: Hypothesis Writer</h2>
      <p className={`${isPresenting ? 'text-xs' : ''} text-gray-400`}>Scenario: "Does music affect people's ability to learn?"</p>
      <div className={`mt-2 grid grid-cols-3 ${isPresenting ? 'gap-3' : 'gap-3'}`}>
        {[1,2,3].map((i) => (
          <div key={i} className={`h-1 rounded-full ${step >= i ? 'bg-gradient-to-r from-pink-500 to-purple-500' : 'bg-gray-700'}`} />
        ))}
      </div>
      <div className="mt-1 grid grid-cols-3 text-xs text-gray-400 font-semibold">
        <span className="text-xs">1: Plan</span>
        <span className="text-center text-xs">2: H₀</span>
        <span className="text-right text-xs">3: H₁</span>
      </div>
    </div>
  )

  const ActionBar = () => (
    <div className={`mt-3 flex items-center justify-between ${isPresenting ? 'text-xs' : ''}`}>
      <button
        onClick={() => setStep((prev) => (prev > 1 ? (prev - 1) as 1 | 2 | 3 : prev))}
        className={`rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 font-bold ${isPresenting ? 'px-3 py-2' : 'px-6 py-3'}`}
        disabled={step === 1}
      >
        Back
      </button>
      {step < 3 ? (
        <button
          onClick={() => setStep((prev) => (prev + 1) as 1 | 2 | 3)}
          className={`rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold shadow-lg ${isPresenting ? 'px-4 py-2' : 'px-8 py-3'}`}
        >
          Next
        </button>
      ) : (
        <button
          className={`rounded-lg font-bold shadow-lg ${isPresenting ? 'px-4 py-2' : 'px-8 py-3'} bg-green-600 text-white hover:bg-green-500`}
        >
          Ready ✓
        </button>
      )}
    </div>
  )

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-4' : 'p-10'}`}>
      <Header />

      {step === 1 && (
        <div className={`grid grid-cols-3 flex-grow ${isPresenting ? 'gap-3' : 'gap-6'}`}>
          <div className={`rounded-lg border bg-gray-900/60 border-gray-700 ${isPresenting ? 'p-3' : 'p-6'}`}>
            <h3 className={`${isPresenting ? 'text-xs' : 'text-xl'} font-bold text-blue-300 mb-2`}>Identify Variables</h3>
            <ul className={`text-gray-200 ${isPresenting ? 'text-xs' : 'text-sm'} space-y-1`}>
              <li>IV: Music while revising (present vs silence)</li>
              <li>DV: Memory test score / words remembered</li>
              <li>Control: prior knowledge, intelligence, sleep</li>
            </ul>
          </div>
          <div className={`rounded-lg border bg-gray-900/60 border-gray-700 ${isPresenting ? 'p-3' : 'p-6'}`}>
            <h3 className={`${isPresenting ? 'text-xs' : 'text-xl'} font-bold text-pink-300 mb-2`}>Choose Format</h3>
            <div className={`grid grid-cols-1 ${isPresenting ? 'gap-2' : 'gap-2'}`}>
              <button className={`rounded-lg border border-pink-500/40 text-pink-200 hover:bg-pink-900/20 text-left ${isPresenting ? 'px-2 py-1 text-xs' : 'px-4 py-3'}`}>
                Directional (One-Tailed)
                <div className={`${isPresenting ? 'text-xs' : 'text-xs'} text-pink-300 opacity-80`}>Predicts higher/lower</div>
              </button>
              <button className={`rounded-lg border border-blue-500/40 text-blue-200 hover:bg-blue-900/20 text-left ${isPresenting ? 'px-2 py-1 text-xs' : 'px-4 py-3'}`}>
                Non-Directional (Two-Tailed)
                <div className={`${isPresenting ? 'text-xs' : 'text-xs'} text-blue-300 opacity-80`}>Predicts a difference</div>
              </button>
            </div>
          </div>
          <div className={`rounded-lg border bg-gray-900/60 border-gray-700 ${isPresenting ? 'p-3' : 'p-6'}`}>
            <h3 className={`${isPresenting ? 'text-xs' : 'text-xl'} font-bold text-emerald-300 mb-2`}>Templates</h3>
            <div className={`space-y-1 ${isPresenting ? 'text-xs' : 'text-sm'}`}>
              <div className="bg-blue-950/30 border border-blue-500/30 rounded p-2 text-blue-200 text-xs">{templates.null}</div>
              <div className="bg-pink-950/30 border border-pink-500/30 rounded p-2 text-pink-200 text-xs">{templates.alt_dir}</div>
              <div className="bg-purple-950/30 border border-purple-500/30 rounded p-2 text-purple-200 text-xs">{templates.alt_nd}</div>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className={`grid grid-cols-2 flex-grow ${isPresenting ? 'gap-3' : 'gap-6'}`}> 
          <div className={`rounded-lg border bg-gray-900/60 border-gray-700 flex flex-col ${isPresenting ? 'p-3' : 'p-6'}`}>
            <h3 className={`${isPresenting ? 'text-xs' : 'text-2xl'} font-bold text-blue-300 mb-2`}>Write H₀ (Null)</h3>
            <div className="flex flex-wrap gap-1 mb-2">
              {['no difference', 'no effect', 'chance'].map((chip) => (
                <span key={chip} className={`${isPresenting ? 'px-2 py-1 text-xs' : 'px-3 py-1 text-xs'} rounded-full bg-blue-900/40 text-blue-200 border border-blue-500/30`}>{chip}</span>
              ))}
            </div>
            <div className="text-gray-300 text-sm leading-relaxed flex-grow flex items-center justify-center">
              <p className="text-center p-4 bg-blue-900/20 border border-blue-500/20 rounded-lg">There will be <span className="font-semibold text-blue-200">no difference</span> in test scores between students who revise with music and those who revise in silence.</p>
            </div>
          </div>
          <div className={`rounded-lg border bg-blue-950/20 border-blue-500/30 ${isPresenting ? 'p-3' : 'p-6'}`}>
            <h4 className={`${isPresenting ? 'text-xs' : ''} text-blue-300 font-bold mb-2`}>Preview</h4>
            <p className={`${isPresenting ? 'text-xs' : 'text-lg'} text-gray-100 font-mono leading-tight min-h-[100px]`}>A well-formed null hypothesis states that any observed difference is due to chance alone, not to your independent variable.</p>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className={`grid grid-cols-2 flex-grow ${isPresenting ? 'gap-3' : 'gap-6'}`}>
          <div className={`rounded-lg border bg-gray-900/60 border-gray-700 flex flex-col ${isPresenting ? 'p-3' : 'p-6'}`}>
            <h3 className={`${isPresenting ? 'text-xs' : 'text-2xl'} font-bold text-pink-300 mb-2`}>Write H₁ (Alternative)</h3>
            <div className="flex flex-wrap gap-1 mb-2">
              {['higher', 'lower', 'difference'].map((chip) => (
                <span key={chip} className={`${isPresenting ? 'px-2 py-1 text-xs' : 'px-3 py-1 text-xs'} rounded-full bg-pink-900/40 text-pink-200 border border-pink-500/30`}>{chip}</span>
              ))}
            </div>
            <div className="text-gray-300 text-sm leading-relaxed flex-grow flex items-center justify-center">
              <p className="text-center p-4 bg-pink-900/20 border border-pink-500/20 rounded-lg">Students who revise <span className="font-semibold text-pink-200">with music</span> will score <span className="font-semibold text-pink-200">lower</span> on the test compared to students who revise in silence.</p>
            </div>
          </div>
          <div className={`rounded-lg border bg-pink-950/20 border-pink-500/30 ${isPresenting ? 'p-3' : 'p-6'}`}>
            <h4 className={`${isPresenting ? 'text-xs' : ''} text-pink-300 font-bold mb-2`}>✓ Checklist</h4>
            <ul className={`text-gray-200 ${isPresenting ? 'text-xs' : 'text-sm'} space-y-1`}>
              <li>✓ Names the IV (music vs silence)</li>
              <li>✓ Names the DV (words remembered / test score)</li>
              <li>✓ Predicts effect clearly</li>
              <li>✓ Is testable and measurable</li>
            </ul>
          </div>
        </div>
      )}

      <ActionBar />
    </div>
  )
}

// Teacher Input: Hypotheses (well-presented deck slide)
const HypothesisTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const points = [
    { title: 'Aim vs Hypothesis', desc: 'An aim is a general purpose; a hypothesis is a specific, testable prediction.' },
    { title: 'H₀: Null Hypothesis', desc: 'Predicts no effect or no difference (any difference is due to chance).' },
    { title: 'H₁: Alternative Hypothesis', desc: 'Predicts an effect or a difference (directional or non-directional).' },
    { title: 'Operationalisation', desc: 'Define variables in measurable terms (e.g., words remembered, time to fall asleep).' },
  ]

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-16' : 'p-10'}`}>
      <div className="mb-8 text-center">
        <h2 className={`${isPresenting ? 'text-7xl' : 'text-5xl'} font-black text-white mb-3`}>Teacher Input: Hypotheses</h2>
        <p className={`${isPresenting ? 'text-3xl' : ''} text-gray-400`}>Clear predictions make research testable and replicable.</p>
      </div>
      <div className={`grid grid-cols-2 max-w-6xl mx-auto ${isPresenting ? 'gap-12' : 'gap-6'}`}>
        {points.map((p, i) => (
          <div key={i} className={`rounded-2xl border bg-gradient-to-br from-gray-900/60 to-gray-800/40 border-gray-700 shadow-xl ${isPresenting ? 'p-10' : 'p-6'}`}>
            <div className={`flex items-center gap-4 ${isPresenting ? 'mb-4' : 'mb-2'}`}>
              <div className={`${isPresenting ? 'w-16 h-16' : 'w-10 h-10'} rounded-full bg-pink-500/20 flex items-center justify-center`}>
                <Target className="text-pink-400" size={isPresenting ? 36 : 22} />
              </div>
              <h3 className={`${isPresenting ? 'text-4xl' : 'text-xl'} font-bold text-pink-300`}>{p.title}</h3>
            </div>
            <p className={`text-gray-200 leading-relaxed ${isPresenting ? 'text-2xl' : 'text-sm'}`}>{p.desc}</p>
          </div>
        ))}
      </div>
      <div className={`grid grid-cols-2 max-w-6xl mx-auto mt-8 ${isPresenting ? 'gap-12' : 'gap-6'}`}>
        <div className={`rounded-2xl border-2 border-blue-500/40 bg-blue-950/20 ${isPresenting ? 'p-10' : 'p-6'}`}>
          <h4 className={`${isPresenting ? 'text-3xl' : ''} text-blue-300 font-bold mb-2`}>Example H₀ (Null)</h4>
          <p className={`${isPresenting ? 'text-3xl' : 'text-lg'} text-gray-200`}>There will be <span className="text-blue-300 font-semibold">no difference</span> in test scores between students who revise with music and those who revise in silence.</p>
        </div>
        <div className={`rounded-2xl border-2 border-pink-500/40 bg-pink-950/20 ${isPresenting ? 'p-10' : 'p-6'}`}>
          <h4 className={`${isPresenting ? 'text-3xl' : ''} text-pink-300 font-bold mb-2`}>Example H₁ (Alternative)</h4>
          <p className={`${isPresenting ? 'text-3xl' : 'text-lg'} text-gray-200`}>Students who revise in silence will score <span className="text-pink-300 font-semibold">higher</span> than students who revise with music.</p>
        </div>
      </div>
    </div>
  )
}

// Teacher Input: Variables (well-presented deck slide)
const VariablesTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const cards = [
    { title: 'Independent Variable (IV)', color: 'blue', desc: 'The variable we manipulate (e.g., music vs silence).' },
    { title: 'Dependent Variable (DV)', color: 'pink', desc: 'The variable we measure (e.g., test score / words remembered).' },
    { title: 'Extraneous Variables', color: 'emerald', desc: 'Other factors that could influence the DV (e.g., prior knowledge, intelligence, sleep). Control to keep it fair.' },
  ]

  const colorMap: Record<string, { border: string, bg: string, text: string }> = {
    blue:   { border: 'border-blue-500/40',   bg: 'bg-blue-900/20',   text: 'text-blue-300' },
    pink:   { border: 'border-pink-500/40',   bg: 'bg-pink-900/20',   text: 'text-pink-300' },
    emerald:{ border: 'border-emerald-500/40',bg: 'bg-emerald-900/20',text: 'text-emerald-300' },
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-16' : 'p-10'}`}>
      <div className="mb-8 text-center">
        <h2 className={`${isPresenting ? 'text-7xl' : 'text-5xl'} font-black text-white mb-3`}>Teacher Input: Variables</h2>
        <p className={`${isPresenting ? 'text-3xl' : ''} text-gray-400`}>Define and control variables to ensure a fair test.</p>
      </div>

      <div className={`grid grid-cols-3 max-w-6xl mx-auto ${isPresenting ? 'gap-10' : 'gap-6'}`}>
        {cards.map((c, i) => (
          <div key={i} className={`rounded-2xl border-2 ${colorMap[c.color].border} ${colorMap[c.color].bg} shadow-xl ${isPresenting ? 'p-10' : 'p-6'}`}>
            <h3 className={`${isPresenting ? 'text-4xl' : 'text-2xl'} font-bold mb-2 ${colorMap[c.color].text}`}>{c.title}</h3>
            <p className={`text-gray-200 leading-relaxed ${isPresenting ? 'text-2xl' : ''}`}>{c.desc}</p>
          </div>
        ))}
      </div>

      <div className={`max-w-5xl mx-auto mt-8 rounded-2xl border border-gray-700 bg-gray-900/40 ${isPresenting ? 'p-10' : 'p-6'}`}>
        <h4 className={`${isPresenting ? 'text-3xl' : ''} text-gray-300 font-bold mb-2`}>Top Tip</h4>
        <p className={`${isPresenting ? 'text-2xl' : ''} text-gray-300`}>Write variables in measurable terms and link your controls to fairness (e.g., same test, same time limit, similar prior knowledge).</p>
      </div>
    </div>
  )
}

// Variables lab (IV, DV, Extraneous)
const VariableLab: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const extraneous = ['Prior knowledge', 'Intelligence', 'Education level']

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-12' : 'p-8'}`}>
      <h2 className={`${isPresenting ? 'text-6xl' : 'text-4xl'} font-black text-white mb-2 flex items-center gap-3`}>
        <FlaskConical className="text-green-400" size={isPresenting ? 56 : 40} />
        Music & Learning Lab
      </h2>
      <p className={`${isPresenting ? 'text-2xl' : ''} text-gray-400 mb-6`}>Identify IV, DV, and extraneous variables.</p>

      <div className={`grid grid-cols-3 ${isPresenting ? 'gap-10' : 'gap-6'}`}>
        <div className={`bg-blue-900/20 border-2 border-blue-500/40 rounded-2xl ${isPresenting ? 'p-10' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-4xl' : 'text-2xl'} font-bold text-blue-300 mb-2`}>IV</h3>
          <p className={`${isPresenting ? 'text-2xl' : ''} text-gray-200`}>Music while revising (present vs silent)</p>
          <p className={`${isPresenting ? 'text-xl' : 'text-sm'} text-blue-200 mt-3`}>The variable we manipulate.</p>
        </div>
        <div className={`bg-pink-900/20 border-2 border-pink-500/40 rounded-2xl ${isPresenting ? 'p-10' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-4xl' : 'text-2xl'} font-bold text-pink-300 mb-2`}>DV</h3>
          <p className={`${isPresenting ? 'text-2xl' : ''} text-gray-200`}>Test score / number of words remembered</p>
          <p className={`${isPresenting ? 'text-xl' : 'text-sm'} text-pink-200 mt-3`}>The outcome we measure.</p>
        </div>
        <div className={`bg-emerald-900/20 border-2 border-emerald-500/40 rounded-2xl ${isPresenting ? 'p-10' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-4xl' : 'text-2xl'} font-bold text-emerald-300 mb-2`}>Extraneous</h3>
          <ul className={`space-y-2 text-gray-200 ${isPresenting ? 'text-2xl' : ''}`}>
            {extraneous.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <AlertTriangle size={isPresenting ? 24 : 16} className="text-emerald-300 mt-1" />
                <span className={`${isPresenting ? 'text-2xl' : 'text-sm'}`}>{item}</span>
              </li>
            ))}
          </ul>
          <p className={`${isPresenting ? 'text-xl' : 'text-sm'} text-emerald-200 mt-3`}>Control these to keep the test fair.</p>
        </div>
      </div>
    </div>
  )
}

// Variable Detective task with reveal answers
const VariableDetective: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const scenarios = [
    {
      id: 1,
      text: 'Energy drinks before a maths quiz.',
      iv: 'Energy drink vs water',
      dv: 'Quiz score',
      extraneous: 'Prior maths ability, sleep'
    },
    {
      id: 2,
      text: 'Background noise while reading.',
      iv: 'Noise level (loud vs quiet)',
      dv: 'Reading comprehension score',
      extraneous: 'Reading ability, tiredness'
    },
    {
      id: 3,
      text: 'Sleep hours before a memory test.',
      iv: 'Hours of sleep (4 vs 8)',
      dv: 'Memory test score',
      extraneous: 'Stress, caffeine intake'
    }
  ]

  const [revealed, setRevealed] = useState<Record<number, boolean>>({})

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-4' : 'p-8'}`}>
      <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-1`}>Variable Detective</h2>
      <p className={`${isPresenting ? 'text-xs' : ''} text-gray-400 mb-4`}>Identify IV, DV and suggest 2 extraneous variables for each scenario.</p>

      <div className={`grid grid-cols-3 flex-grow overflow-auto custom-scrollbar ${isPresenting ? 'gap-3' : 'gap-4'}`}>
        {scenarios.map((s) => (
          <div key={s.id} className={`bg-gray-900/70 border border-gray-700 rounded-lg flex flex-col justify-between ${isPresenting ? 'p-3' : 'p-5'}`}>
            <div>
              <div className={`flex items-center justify-between ${isPresenting ? 'mb-2' : 'mb-3'}`}>
                <span className={`${isPresenting ? 'text-xs' : 'text-sm'} text-pink-400 font-bold`}>Scenario {s.id}</span>
                <button
                  onClick={() => setRevealed(prev => ({ ...prev, [s.id]: !prev[s.id] }))}
                  className={`${isPresenting ? 'text-xs px-2 py-1' : 'text-xs px-3 py-1'} rounded-lg border border-gray-700 text-gray-300 hover:border-pink-500/50`}
                >
                  {revealed[s.id] ? 'Hide' : 'Reveal'}
                </button>
              </div>
              <p className={`text-gray-200 leading-relaxed ${isPresenting ? 'text-xs mb-2' : 'mb-4'}`}>{s.text}</p>
            </div>
            {revealed[s.id] && (
              <div className={`space-y-1 bg-gray-800/60 border border-gray-700 rounded-lg animate-fadeIn ${isPresenting ? 'p-2' : 'p-4'}`}>
                <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-blue-200`}><strong>IV:</strong> {s.iv}</p>
                <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-pink-200`}><strong>DV:</strong> {s.dv}</p>
                <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-emerald-200`}><strong>Extraneous:</strong> {s.extraneous}</p>
              </div>
            )}
            {!revealed[s.id] && (
              <p className={`${isPresenting ? 'text-xs' : 'text-xs'} text-gray-500`}>Think first, then reveal.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Extended task card for exam-style question
const ExtendedExamTask: React.FC = () => {
  const [showTips, setShowTips] = useState(false)
  
  return (
    <div className="flex flex-col h-full p-8 animate-fadeIn">
      <h2 className="text-4xl font-black text-white mb-2">Extended Task: Exam-Style</h2>
      <p className="text-gray-400 mb-6">Apply what you learned about hypotheses and variables.</p>
  
      <div className="bg-gray-900/70 border border-gray-700 rounded-2xl p-6 mb-6">
        <h3 className="text-2xl font-bold text-pink-300 mb-3">Scenario</h3>
        <p className="text-gray-200 leading-relaxed">
          A psychologist wants to investigate whether background music affects concentration during revision. She plays classical music to one group of students while they revise, and no music to another group. Both groups then complete the same memory test.
        </p>
      </div>
  
      <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-4 mb-6">
        <h4 className="text-sm font-bold text-green-400 uppercase mb-3">Required Tasks</h4>
        <ul className="space-y-2 text-gray-200 text-sm grid grid-cols-2 gap-4">
          <li>• State the IV and DV</li>
          <li>• Write null and alternative hypotheses</li>
          <li>• Identify two extraneous variables to control</li>
          <li>• Suggest an ethical safeguard</li>
          <li>• Outline the procedure</li>
          <li>• Explain what "fair test" means here</li>
        </ul>
      </div>

      <button
        onClick={() => setShowTips(!showTips)}
        className="w-full py-3 mb-4 rounded-lg font-bold transition-all bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white"
      >
        {showTips ? '✕ Hide Exam Tips' : '+ Show Exam Tips'}
      </button>

      {showTips && (
        <div className="bg-blue-900/30 border-2 border-blue-500/30 rounded-xl p-4 mb-4 animate-fadeIn">
          <h4 className="text-sm font-bold text-blue-300 uppercase mb-3">Exam Tips</h4>
          <div className="space-y-2 text-blue-100 text-sm">
            <div className="flex gap-2">
              <span className="font-semibold text-blue-300 min-w-fit">• H₀ (Null):</span>
              <p>No effect / no difference. E.g., "There will be no difference in memory test scores..."</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-blue-300 min-w-fit">• H₁ (Alt):</span>
              <p>Predicts an effect. E.g., "Students revising with music will score lower..."</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-blue-300 min-w-fit">• Extraneous:</span>
              <p>Prior knowledge, intelligence, educational level, time of day, room temperature, music volume.</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-blue-300 min-w-fit">• Controls:</span>
              <p>Keep fair by controlling confounding variables. Only music should vary between groups.</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-blue-300 min-w-fit">• Ethics:</span>
              <p>Informed consent, right to withdraw, debriefing, confidentiality.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ============= A-LEVEL LESSON 1: UNIFIED VISUAL DESIGN =============

// Scientific Approach: Unified Teacher Input Slide
const ScientificApproachTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-8'}>
        <h2 className={`${isPresenting ? 'text-3xl' : 'text-5xl'} font-black text-white mb-2`}>The Scientific Approach</h2>
        <p className={`${isPresenting ? 'text-sm' : 'text-lg'} text-gray-400`}>What defines science and how psychologists approach research</p>
      </div>

      {/* Core Features Grid */}
      <div className={`grid grid-cols-3 ${isPresenting ? 'gap-3 mb-4' : 'gap-4 mb-8'}`}>
        <div className={`rounded-xl border-2 border-rose-500/40 bg-rose-900/20 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-rose-300 mb-2 flex items-center gap-2`}>
            <TrendingUp size={isPresenting ? 20 : 24} />
            Replicability
          </h3>
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200 leading-relaxed`}>
            Results can be repeated under the same conditions by different researchers. Builds confidence that findings are reliable, not due to chance.
          </p>
        </div>

        <div className={`rounded-xl border-2 border-rose-500/40 bg-rose-900/20 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-rose-300 mb-2 flex items-center gap-2`}>
            <Target size={isPresenting ? 20 : 24} />
            Objectivity
          </h3>
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200 leading-relaxed`}>
            Measurements free from bias using standardised procedures and controlled conditions. Ensures findings reflect reality, not researcher expectations.
          </p>
        </div>

        <div className={`rounded-xl border-2 border-rose-500/40 bg-rose-900/20 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-rose-300 mb-2 flex items-center gap-2`}>
            <Zap size={isPresenting ? 20 : 24} />
            Falsifiability
          </h3>
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200 leading-relaxed`}>
            Theories must be testable and potentially provable false. If we cannot disprove it, it gains credibility. Core principle of Karl Popper.
          </p>
        </div>
      </div>

      {/* Nomothetic vs Ideographic Section */}
      <div className={`rounded-xl border border-gray-700 bg-gray-900/40 ${isPresenting ? 'p-4' : 'p-6'}`}>
        <h3 className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-white mb-4`}>Two Approaches to Psychology</h3>
        <div className={`grid grid-cols-2 ${isPresenting ? 'gap-3' : 'gap-4'}`}>
          <div className={`rounded-lg border border-blue-500/30 bg-blue-950/20 ${isPresenting ? 'p-3' : 'p-4'}`}>
            <h4 className={`${isPresenting ? 'text-sm' : 'text-base'} font-bold text-blue-300 mb-2`}>Nomothetic</h4>
            <ul className={`space-y-1 ${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200`}>
              <li>• Seeks <span className="font-semibold">universal laws</span></li>
              <li>• Applies to all similar people</li>
              <li>• Uses quantitative data</li>
              <li>• Laboratory-based</li>
              <li>• <span className="text-blue-300">Scientific</span> approach</li>
            </ul>
          </div>
          <div className={`rounded-lg border border-amber-500/30 bg-amber-950/20 ${isPresenting ? 'p-3' : 'p-4'}`}>
            <h4 className={`${isPresenting ? 'text-sm' : 'text-base'} font-bold text-amber-300 mb-2`}>Ideographic</h4>
            <ul className={`space-y-1 ${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200`}>
              <li>• Focuses on <span className="font-semibold">individual uniqueness</span></li>
              <li>• Specific to each person</li>
              <li>• Uses qualitative data</li>
              <li>• Real-world settings</li>
              <li>• <span className="text-amber-300">Humanistic</span> approach</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

// Scientific Features Interactive - 3 Core Features Only
// Falsifiability Courtroom Simulation - Interactive Learning Game
const ScientificFeaturesInteractive: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [activeTab, setActiveTab] = useState<'court' | 'create'>('court')
  const [showNotes, setShowNotes] = useState(false)
  const [courtVotes, setCourtVotes] = useState<Record<number, 'falsifiable' | 'unfalsifiable' | null>>({})
  const [courtRevealed, setCourtRevealed] = useState<Record<number, boolean>>({})
  const [userClaim, setUserClaim] = useState('')
  const [studentClaims, setStudentClaims] = useState<Array<{ text: string; votes: { falsifiable: number; unfalsifiable: number }; userVote?: 'falsifiable' | 'unfalsifiable' }>>([])

  const courtClaims = [
    {
      id: 1,
      claim: 'High caffeine intake impairs sleep quality',
      falsifiable: true,
      disproof: 'Test by giving participants caffeine/placebo, measure sleep quality (EEG, duration) - if no difference = disproved'
    },
    {
      id: 2,
      claim: 'Some people are naturally lucky',
      falsifiable: false,
      disproof: '"Luck" is undefined. What would disprove it? Any bad outcome? Too vague to test scientifically.'
    },
    {
      id: 3,
      claim: 'Cognitive therapy reduces anxiety in adults with social phobia',
      falsifiable: true,
      disproof: 'Administer therapy, measure anxiety pre/post using standardised scales - if anxiety unchanged/increases = disproved'
    },
    {
      id: 4,
      claim: 'The universe is connected by cosmic energy that science cannot measure',
      falsifiable: false,
      disproof: 'If it "cannot" be measured, there is no way to test it. Unfalsifiable by definition.'
    },
    {
      id: 5,
      claim: 'Sleep deprivation reduces working memory capacity',
      falsifiable: true,
      disproof: 'Deprive participants of sleep, test working memory (digit span, N-back task) - results can disprove the claim'
    }
  ]

  const handleAddClaim = () => {
    if (userClaim.trim()) {
      setStudentClaims([...studentClaims, { text: userClaim, votes: { falsifiable: 0, unfalsifiable: 0 } }])
      setUserClaim('')
    }
  }

  const handleVoteOnClaim = (index: number, vote: 'falsifiable' | 'unfalsifiable') => {
    setStudentClaims(studentClaims.map((c, i) => 
      i === index 
        ? {
            ...c,
            votes: {
              ...c.votes,
              [vote]: c.votes[vote] + (c.userVote === vote ? 0 : 1)
            },
            userVote: c.userVote === vote ? undefined : vote
          }
        : c
    ))
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-8'}`}>
      {/* Header with Notes Toggle */}
      <div className={`flex items-center justify-between mb-4 ${isPresenting ? 'gap-2' : 'gap-4'}`}>
        <div>
          <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white`}>Falsifiability Courtroom</h2>
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-400`}>Judge scientific claims & challenge peers</p>
        </div>
        <button
          onClick={() => setShowNotes(!showNotes)}
          className={`px-4 py-2 rounded-lg font-bold transition-all whitespace-nowrap ${
            showNotes
              ? 'bg-rose-600 hover:bg-rose-500 text-white'
              : 'bg-gray-800 hover:bg-gray-700 text-gray-200'
          } ${isPresenting ? 'text-xs px-3 py-1' : ''}`}
        >
          {showNotes ? 'Hide' : 'Show'} Notes
        </button>
      </div>

      {/* Condensed Notes Panel */}
      {showNotes && (
        <div className={`rounded-xl border-2 border-rose-500/40 bg-rose-900/20 mb-4 animate-fadeIn ${isPresenting ? 'p-3' : 'p-5'}`}>
          <h3 className={`${isPresenting ? 'text-sm' : 'text-lg'} font-bold text-rose-300 mb-3`}>Key Concepts</h3>
          <div className={`grid grid-cols-3 gap-3 ${isPresenting ? 'text-xs' : 'text-sm'}`}>
            <div className="bg-gray-900/50 rounded-lg p-3 border-l-4 border-rose-500">
              <p className="font-semibold text-rose-300 mb-2">📋 Definition</p>
              <p className="text-gray-200">A scientific theory must be capable of being proven false. We should attempt to disprove theories—if we cannot, they gain credibility.</p>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-3 border-l-4 border-blue-500">
              <p className="font-semibold text-blue-300 mb-2">💡 Example</p>
              <p className="text-gray-200">"High caffeine impairs sleep" is falsifiable (can be tested). "Some people have psychic powers" is not (unfalsifiable by definition).</p>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-3 border-l-4 border-emerald-500">
              <p className="font-semibold text-emerald-300 mb-2">⭐ Why It Matters</p>
              <p className="text-gray-200">Distinguishes science from pseudoscience. Theories that cannot be tested are not scientifically useful.</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab Navigation */}
      <div className={`flex gap-2 mb-4 ${isPresenting ? 'gap-1' : ''}`}>
        <button
          onClick={() => setActiveTab('court')}
          className={`px-4 py-2 rounded-lg font-bold transition-all ${
            activeTab === 'court'
              ? 'bg-rose-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          } ${isPresenting ? 'text-xs px-3 py-1' : ''}`}
        >
          🏛️ Judge Claims
        </button>
        <button
          onClick={() => setActiveTab('create')}
          className={`px-4 py-2 rounded-lg font-bold transition-all ${
            activeTab === 'create'
              ? 'bg-rose-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          } ${isPresenting ? 'text-xs px-3 py-1' : ''}`}
        >
          🎯 Create & Challenge
        </button>
      </div>

      {/* PART A: COURT GAME */}
      {activeTab === 'court' && (
        <div className={`flex-grow overflow-y-auto custom-scrollbar space-y-3 ${isPresenting ? 'mb-2' : 'mb-4'}`}>
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-400 mb-3`}>Can each claim be tested and potentially proven false? Judge them!</p>
          
          {courtClaims.map((item) => (
            <div
              key={item.id}
              className={`rounded-xl border-2 transition-all ${
                courtRevealed[item.id]
                  ? 'border-rose-500 bg-rose-900/30'
                  : 'border-gray-700 bg-gray-900/50 hover:border-rose-500/50'
              } ${isPresenting ? 'p-3' : 'p-4'}`}
            >
              {/* Claim Header */}
              <div className={`flex items-start justify-between gap-3 ${isPresenting ? 'mb-2' : 'mb-3'}`}>
                <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200 flex-grow font-semibold`}>{item.claim}</p>
                <button
                  onClick={() => setCourtRevealed(prev => ({ ...prev, [item.id]: !prev[item.id] }))}
                  className={`text-xs px-2 py-1 rounded font-bold whitespace-nowrap ${
                    courtRevealed[item.id]
                      ? 'bg-gray-700 text-gray-300'
                      : 'bg-gray-800 hover:bg-gray-700 text-gray-400'
                  }`}
                >
                  {courtRevealed[item.id] ? 'Hide' : 'Explain'}
                </button>
              </div>

              {/* Voting Buttons */}
              <div className={`flex gap-2 mb-3 ${isPresenting ? 'gap-1' : ''}`}>
                <button
                  onClick={() => setCourtVotes(prev => ({ ...prev, [item.id]: prev[item.id] === 'falsifiable' ? null : 'falsifiable' }))}
                  className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all ${
                    courtVotes[item.id] === 'falsifiable'
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                      : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                  } ${isPresenting ? 'text-xs py-1' : ''}`}
                >
                  ✓ Falsifiable
                </button>
                <button
                  onClick={() => setCourtVotes(prev => ({ ...prev, [item.id]: prev[item.id] === 'unfalsifiable' ? null : 'unfalsifiable' }))}
                  className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all ${
                    courtVotes[item.id] === 'unfalsifiable'
                      ? 'bg-red-600 hover:bg-red-500 text-white'
                      : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                  } ${isPresenting ? 'text-xs py-1' : ''}`}
                >
                  ✗ Unfalsifiable
                </button>
              </div>

              {/* Reveal Panel */}
              {courtRevealed[item.id] && (
                <div className={`bg-gray-900/70 rounded-lg p-3 border-l-4 border-blue-500 animate-fadeIn space-y-2`}>
                  <div>
                    <p className={`${isPresenting ? 'text-xs' : 'text-sm'} font-semibold text-blue-300 mb-1`}>Verdict:</p>
                    <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200`}>
                      <span className={item.falsifiable ? 'text-emerald-400 font-bold' : 'text-red-400 font-bold'}>
                        {item.falsifiable ? '✓ FALSIFIABLE' : '✗ UNFALSIFIABLE'}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className={`${isPresenting ? 'text-xs' : 'text-sm'} font-semibold text-gray-300 mb-1`}>How to test:</p>
                    <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-300`}>{item.disproof}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* PART B: STUDENT CLAIM CREATOR */}
      {activeTab === 'create' && (
        <div className={`flex-grow flex flex-col overflow-hidden`}>
          {/* Input Section */}
          <div className={`rounded-xl border-2 border-rose-500/40 bg-rose-900/20 mb-4 ${isPresenting ? 'p-3' : 'p-4'}`}>
            <label className={`${isPresenting ? 'text-xs' : 'text-sm'} font-bold text-rose-300 block mb-2`}>
              Create a claim for the class to judge:
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={userClaim}
                onChange={(e) => setUserClaim(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddClaim()}
                placeholder="E.g., 'Video games improve hand-eye coordination'"
                className={`flex-grow bg-gray-900/50 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-600 focus:outline-none focus:border-rose-500 ${isPresenting ? 'px-2 py-1 text-xs' : 'px-3 py-2 text-sm'}`}
              />
              <button
                onClick={handleAddClaim}
                disabled={!userClaim.trim()}
                className={`px-4 py-2 rounded-lg font-bold bg-rose-600 hover:bg-rose-500 disabled:opacity-50 disabled:cursor-not-allowed text-white transition-all ${isPresenting ? 'text-xs px-3 py-1' : ''}`}
              >
                Submit
              </button>
            </div>
          </div>

          {/* Claims Display */}
          <div className={`flex-grow overflow-y-auto custom-scrollbar space-y-3`}>
            {studentClaims.length === 0 ? (
              <div className="flex items-center justify-center h-32 text-gray-500">
                <p className={`${isPresenting ? 'text-xs' : 'text-sm'}`}>No claims yet. Be the first to challenge the class!</p>
              </div>
            ) : (
              studentClaims.map((claim, idx) => (
                <div key={idx} className={`rounded-xl border border-gray-700 bg-gray-900/50 ${isPresenting ? 'p-3' : 'p-4'}`}>
                  <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200 font-semibold mb-3`}>{claim.text}</p>
                  
                  <div className={`flex gap-2 ${isPresenting ? 'gap-1' : ''}`}>
                    <button
                      onClick={() => handleVoteOnClaim(idx, 'falsifiable')}
                      className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all ${
                        claim.userVote === 'falsifiable'
                          ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                          : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                      } ${isPresenting ? 'text-xs py-1' : ''}`}
                    >
                      ✓ {claim.votes.falsifiable}
                    </button>
                    <button
                      onClick={() => handleVoteOnClaim(idx, 'unfalsifiable')}
                      className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all ${
                        claim.userVote === 'unfalsifiable'
                          ? 'bg-red-600 hover:bg-red-500 text-white'
                          : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                      } ${isPresenting ? 'text-xs py-1' : ''}`}
                    >
                      ✗ {claim.votes.unfalsifiable}
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// Hypothesis Design Teach - Part 1: Core Concepts
const HypothesisDesignTeachPart1: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-8'}>
        <h2 className={`${isPresenting ? 'text-3xl' : 'text-5xl'} font-black text-white mb-2`}>Hypothesis Design</h2>
        <p className={`${isPresenting ? 'text-sm' : 'text-lg'} text-gray-400`}>Part 1: Operationalisation & Types</p>
      </div>

      <div className={`grid grid-cols-2 ${isPresenting ? 'gap-3' : 'gap-6'}`}>
        <div className={`rounded-xl border-2 border-rose-500/40 bg-rose-900/20 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-rose-300 mb-3 flex items-center gap-2`}>
            <Target size={isPresenting ? 20 : 24} />
            Operationalisation
          </h3>
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200 mb-3`}>Define abstract psychological concepts in measurable, observable terms.</p>
          <div className={`space-y-2 ${isPresenting ? 'text-xs' : 'text-sm'}`}>
            <div className="bg-gray-900/50 rounded-lg p-2 border-l-4 border-red-500">
              <p className="text-red-200 font-semibold">❌ Vague:</p>
              <p className="text-gray-200">"Anxiety levels"</p>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-2 border-l-4 border-emerald-500">
              <p className="text-emerald-200 font-semibold">✓ Operationalised:</p>
              <p className="text-gray-200">"Score on Beck Anxiety Inventory (0–63)"</p>
            </div>
          </div>
        </div>

        <div className={`rounded-xl border-2 border-rose-500/40 bg-rose-900/20 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-rose-300 mb-3 flex items-center gap-2`}>
            <Zap size={isPresenting ? 20 : 24} />
            Hypothesis Types
          </h3>
          <div className={`space-y-2 ${isPresenting ? 'text-xs' : 'text-sm'}`}>
            <div className="bg-blue-950/30 rounded-lg p-2 border-l-4 border-blue-500">
              <p className="text-blue-300 font-semibold mb-1">Directional (One-Tailed)</p>
              <p className="text-gray-200">Predicts <span className="font-semibold">direction</span> of effect. Use when theory is strong.</p>
            </div>
            <div className="bg-purple-950/30 rounded-lg p-2 border-l-4 border-purple-500">
              <p className="text-purple-300 font-semibold mb-1">Non-Directional (Two-Tailed)</p>
              <p className="text-gray-200">Predicts a <span className="font-semibold">difference</span> only. Use when exploring.</p>
            </div>
          </div>
        </div>

        <div className={`rounded-xl border-2 border-rose-500/40 bg-rose-900/20 col-span-1 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-rose-300 mb-3 flex items-center gap-2`}>
            <AlertCircle size={isPresenting ? 20 : 24} />
            Null Hypothesis (H₀)
          </h3>
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200 mb-2`}>States <span className="font-semibold">no effect</span> or <span className="font-semibold">no difference</span>. Any difference is due to chance.</p>
          <div className="bg-gray-900/50 rounded-lg p-2 border-l-4 border-gray-400 text-xs text-gray-300">"There will be no significant difference between groups."</div>
        </div>

        <div className={`rounded-xl border-2 border-rose-500/40 bg-rose-900/20 col-span-1 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-rose-300 mb-3 flex items-center gap-2`}>
            <Lightbulb size={isPresenting ? 20 : 24} />
            Alternative Hypothesis (H₁)
          </h3>
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200 mb-2`}>Predicts an <span className="font-semibold">effect</span> or <span className="font-semibold">difference</span>. Directional or non-directional.</p>
          <div className="bg-gray-900/50 rounded-lg p-2 border-l-4 border-gray-400 text-xs text-gray-300">"Participants receiving treatment will show higher scores..."</div>
        </div>
      </div>
    </div>
  )
}

// Hypothesis Design Teach - Part 2: Variables & Controls
const HypothesisDesignTeachPart2: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-8'}>
        <h2 className={`${isPresenting ? 'text-3xl' : 'text-5xl'} font-black text-white mb-2`}>Hypothesis Design</h2>
        <p className={`${isPresenting ? 'text-sm' : 'text-lg'} text-gray-400`}>Part 2: Variables & Controls</p>
      </div>

      <div className={`grid grid-cols-2 ${isPresenting ? 'gap-3' : 'gap-6'} mb-6`}>
        <div className={`rounded-xl border-2 border-rose-500/40 bg-rose-900/20 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-rose-300 mb-2`}>Independent Variable (IV)</h3>
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200 mb-3`}>What the researcher <span className="font-semibold">manipulates</span> or varies between groups.</p>
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-300 italic`}>Example: Type of music (classical vs silence)</p>
        </div>

        <div className={`rounded-xl border-2 border-rose-500/40 bg-rose-900/20 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-rose-300 mb-2`}>Dependent Variable (DV)</h3>
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200 mb-3`}>What the researcher <span className="font-semibold">measures</span> as the outcome or effect.</p>
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-300 italic`}>Example: Memory test score (words recalled)</p>
        </div>

        <div className={`rounded-xl border-2 border-rose-500/40 bg-rose-900/20 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-rose-300 mb-2`}>Extraneous Variables</h3>
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200 mb-3`}>Confounding factors that could affect the DV and must be <span className="font-semibold">controlled</span>.</p>
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-300 italic`}>Example: Prior knowledge, intelligence, sleep, room temperature</p>
        </div>

        <div className={`rounded-xl border-2 border-rose-500/40 bg-rose-900/20 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-rose-300 mb-2`}>Controls & Fairness</h3>
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200 mb-3`}>Techniques to keep the test <span className="font-semibold">fair</span>—only the IV should differ between groups.</p>
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-300 italic`}>Example: Randomisation, standardisation, matching participants</p>
        </div>
      </div>

      <div className={`rounded-xl border border-gray-700 bg-gray-900/40 ${isPresenting ? 'p-4' : 'p-6'}`}>
        <h4 className={`${isPresenting ? 'text-sm' : 'text-base'} font-bold text-white mb-2`}>Full Example</h4>
        <div className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200 space-y-1 font-mono`}>
          <p><span className="text-rose-300 font-bold">Scenario:</span> Does caffeine affect reaction time?</p>
          <p><span className="text-rose-300 font-bold">IV:</span> Caffeine (placebo vs 100mg)</p>
          <p><span className="text-rose-300 font-bold">DV:</span> Reaction time in milliseconds</p>
          <p><span className="text-rose-300 font-bold">Controls:</span> Randomise allocation, standardise task, control sleep & diet</p>
        </div>
      </div>
    </div>
  )
}

// Falsification Teach Slide (A-Level)
const FalsificationTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={`${isPresenting ? 'mb-4' : 'mb-8'} text-center`}>
        <h2 className={`${isPresenting ? 'text-3xl' : 'text-5xl'} font-black text-white mb-2`}>Teacher Input: Falsification</h2>
        <p className={`${isPresenting ? 'text-sm' : ''} text-gray-400`}>Karl Popper's criterion for scientific validity</p>
      </div>

      <div className={`grid grid-cols-2 max-w-6xl mx-auto ${isPresenting ? 'gap-3' : 'gap-6'}`}>
        <div className={`rounded-lg border-2 border-rose-500/40 bg-rose-950/20 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-2xl'} text-rose-300 font-bold mb-2`}>The Principle</h3>
          <p className={`${isPresenting ? 'text-xs' : 'text-lg'} text-gray-200 leading-relaxed mb-3`}>
            A theory is only scientific if it can be tested and potentially proven false. We should actively try to <span className="text-rose-300 font-semibold">disprove</span> theories—if we cannot, they gain credibility.
          </p>
          <div className={`${isPresenting ? 'p-2' : 'p-4'} bg-gray-900/50 rounded-lg border-l-4 border-rose-500`}>
            <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200 italic`}>
              "All swans are white" is falsifiable—finding one black swan disproves it.
            </p>
          </div>
        </div>

        <div className={`rounded-lg border-2 border-blue-500/40 bg-blue-950/20 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-2xl'} text-blue-300 font-bold mb-2`}>Why It Matters</h3>
          <p className={`${isPresenting ? 'text-xs' : 'text-lg'} text-gray-200 leading-relaxed mb-3`}>
            Falsifiability distinguishes science from pseudoscience. Unfalsifiable claims (e.g., "some people have psychic powers") cannot be tested and are not scientific.
          </p>
          <div className={`${isPresenting ? 'p-2' : 'p-4'} bg-gray-900/50 rounded-lg border-l-4 border-blue-500`}>
            <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200 italic`}>
              Good science invites challenges. Bad science evades them.
            </p>
          </div>
        </div>
      </div>

      <div className={`max-w-6xl mx-auto grid grid-cols-2 ${isPresenting ? 'gap-3 mt-3' : 'gap-6 mt-6'}`}>
        <div className={`rounded-lg border border-emerald-500/30 bg-emerald-950/20 ${isPresenting ? 'p-3' : 'p-4'}`}>
          <h4 className={`${isPresenting ? 'text-xs' : 'text-sm'} text-emerald-400 font-bold mb-2`}>✓ Falsifiable (Scientific)</h4>
          <ul className={`space-y-1 ${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200`}>
            <li>• "High caffeine intake impairs sleep quality."</li>
            <li>• "Working memory capacity is 7±2 items."</li>
            <li>• "Stress increases cortisol levels."</li>
          </ul>
        </div>
        <div className={`rounded-lg border border-red-500/30 bg-red-950/20 ${isPresenting ? 'p-3' : 'p-4'}`}>
          <h4 className={`${isPresenting ? 'text-xs' : 'text-sm'} text-red-400 font-bold mb-2`}>✗ Unfalsifiable (Non-scientific)</h4>
          <ul className={`space-y-1 ${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200`}>
            <li>• "Everything happens for a reason."</li>
            <li>• "Freud's unconscious can explain any behavior."</li>
            <li>• "Some dreams predict the future."</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

// Falsifiability Checker - AFL (A-Level)
const FalsifiabilityChecker: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const statements = [
    { id: 1, text: 'Sleep deprivation impairs cognitive performance on memory tasks.', falsifiable: true },
    { id: 2, text: 'Everything in the universe is connected by energy.', falsifiable: false },
    { id: 3, text: 'Serotonin levels correlate with depression severity.', falsifiable: true },
    { id: 4, text: 'True happiness comes from within.', falsifiable: false },
  ]

  const [answers, setAnswers] = useState<Record<number, boolean | undefined>>({})
  const [showResults, setShowResults] = useState(false)
  const [revealed, setRevealed] = useState<Record<number, boolean>>({})

  const score = statements.reduce((acc, s) => acc + (answers[s.id] === s.falsifiable ? 1 : 0), 0)

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-8'}`}>
      <div className={`${isPresenting ? 'mb-4' : 'mb-6'}`}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-1`}>Falsifiability Check</h2>
        <p className={`${isPresenting ? 'text-xs' : ''} text-gray-400`}>Which statements are scientifically testable?</p>
      </div>

      <div className={`grid grid-cols-2 flex-grow overflow-auto custom-scrollbar ${isPresenting ? 'gap-3' : 'gap-4'}`}>
        {statements.map((s) => (
          <div key={s.id} className={`bg-gray-900/70 border border-gray-700 rounded-lg flex flex-col ${isPresenting ? 'p-4 gap-2' : 'p-5 gap-4'}`}>
            <div className="flex items-center justify-between">
              <span className={`${isPresenting ? 'text-xs' : 'text-sm'} text-rose-400 font-bold`}>Statement {s.id}</span>
              {(showResults || (isPresenting && revealed[s.id])) && (
                <span className={`${isPresenting ? 'text-xs px-2 py-1' : 'text-xs px-3 py-1'} font-bold rounded-full ${
                  s.falsifiable ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'
                }`}>
                  {s.falsifiable ? 'Falsifiable' : 'Unfalsifiable'}
                </span>
              )}
            </div>
            <p className={`text-gray-200 leading-relaxed ${isPresenting ? 'text-xs' : ''}`}>{s.text}</p>

            {!isPresenting && (
              <div className="flex gap-2">
                <button
                  onClick={() => !showResults && setAnswers(prev => ({ ...prev, [s.id]: true }))}
                  className={`flex-1 rounded-lg border font-bold transition-all ${isPresenting ? 'px-3 py-2 text-xs' : 'px-4 py-3'} ${
                    answers[s.id] === true
                      ? 'border-emerald-500 bg-emerald-900/30 text-emerald-200'
                      : 'border-gray-700 bg-gray-800 text-gray-300 hover:border-emerald-500/50'
                  }`}
                >
                  Falsifiable
                </button>
                <button
                  onClick={() => !showResults && setAnswers(prev => ({ ...prev, [s.id]: false }))}
                  className={`flex-1 rounded-lg border font-bold transition-all ${isPresenting ? 'px-3 py-2 text-xs' : 'px-4 py-3'} ${
                    answers[s.id] === false
                      ? 'border-red-500 bg-red-900/30 text-red-200'
                      : 'border-gray-700 bg-gray-800 text-gray-300 hover:border-red-500/50'
                  }`}
                >
                  Unfalsifiable
                </button>
              </div>
            )}

            {isPresenting && !revealed[s.id] && !showResults && (
              <button
                onClick={() => setRevealed(prev => ({ ...prev, [s.id]: true }))}
                className={`self-start rounded-lg border border-gray-700 text-gray-300 hover:border-rose-500/50 transition-all ${isPresenting ? 'px-3 py-1 text-xs' : 'px-4 py-2 text-sm'}`}
              >
                Reveal
              </button>
            )}
          </div>
        ))}
      </div>

      {!isPresenting && (
        <div className="mt-4 flex items-center gap-4">
          {!showResults ? (
            <button
              onClick={() => setShowResults(true)}
              disabled={Object.keys(answers).length < statements.length}
              className="px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white disabled:opacity-50 disabled:grayscale"
            >
              Check Answers
            </button>
          ) : (
            <div className="px-4 py-3 rounded-xl bg-emerald-900/30 border border-emerald-500/40 text-emerald-200 font-mono">
              Score: {score} / {statements.length}
            </div>
          )}
        </div>
      )}

      {isPresenting && (
        <div className="mt-4 flex items-center gap-2">
          <button
            onClick={() => setRevealed(Object.fromEntries(statements.map(s => [s.id, true])))}
            className="px-4 py-2 rounded-lg text-sm font-bold bg-rose-600 hover:bg-rose-500 text-white"
          >
            Reveal All
          </button>
          <button
            onClick={() => setRevealed({})}
            className="px-4 py-2 rounded-lg text-sm font-bold bg-gray-800 hover:bg-gray-700 text-gray-200"
          >
            Hide All
          </button>
        </div>
      )}
    </div>
  )
}

// Hypothesis Writing (A-Level) - Directional vs Non-Directional Task
const HypothesisWriterALevel: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [selectedType, setSelectedType] = useState<'directional' | 'nondirectional' | null>(null)
  const [showExample, setShowExample] = useState(false)

  const scenario = 'A researcher hypothesises that acute sleep deprivation (4 hours) impairs performance on a working memory task compared to normal sleep (8 hours).'

  const exampleDirectional = 'Participants who experience acute sleep deprivation (4 hours) will score significantly lower on the working memory task compared to participants who receive normal sleep (8 hours).'

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-4' : 'p-8'}`}>
      <div className={`${isPresenting ? 'mb-3' : 'mb-6'}`}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Write an Experimental Hypothesis</h2>
        <p className={`${isPresenting ? 'text-xs' : ''} text-gray-400`}>Choose hypothesis type and operationalise variables</p>
      </div>

      <div className={`bg-gradient-to-br from-rose-900/30 to-rose-800/20 border-2 border-rose-500/50 rounded-lg ${isPresenting ? 'p-4 mb-3' : 'p-6 mb-6'}`}>
        <h3 className={`${isPresenting ? 'text-sm' : 'text-xl'} font-bold text-rose-300 mb-2`}>Research Scenario</h3>
        <p className={`${isPresenting ? 'text-xs' : 'text-lg'} text-gray-200 leading-relaxed italic`}>
          {scenario}
        </p>
      </div>

      <div className={`grid grid-cols-2 ${isPresenting ? 'gap-3 mb-3' : 'gap-4 mb-6'}`}>
        <button
          onClick={() => setSelectedType('directional')}
          className={`${isPresenting ? 'p-3' : 'p-4'} rounded-lg border-2 text-left transition-all ${
            selectedType === 'directional'
              ? 'border-rose-500 bg-rose-600 text-white'
              : 'border-gray-600 bg-gray-800 text-gray-300 hover:border-rose-500/50'
          }`}>
          <h4 className={`${isPresenting ? 'text-xs' : 'text-sm'} font-bold mb-1`}>Directional (One-Tailed)</h4>
          <p className={`${isPresenting ? 'text-xs' : 'text-xs'} opacity-80`}>Predicts direction of effect (higher/lower)</p>
        </button>
        <button
          onClick={() => setSelectedType('nondirectional')}
          className={`${isPresenting ? 'p-3' : 'p-4'} rounded-lg border-2 text-left transition-all ${
            selectedType === 'nondirectional'
              ? 'border-blue-500 bg-blue-600 text-white'
              : 'border-gray-600 bg-gray-800 text-gray-300 hover:border-blue-500/50'
          }`}>
          <h4 className={`${isPresenting ? 'text-xs' : 'text-sm'} font-bold mb-1`}>Non-Directional (Two-Tailed)</h4>
          <p className={`${isPresenting ? 'text-xs' : 'text-xs'} opacity-80`}>Predicts a difference (not direction)</p>
        </button>
      </div>

      {selectedType ? (
        <div className={`bg-blue-950/20 border-2 border-blue-500/30 rounded-lg ${isPresenting ? 'p-3 mb-3' : 'p-5 mb-4'} animate-fadeIn`}>
          <h4 className={`${isPresenting ? 'text-xs' : 'text-lg'} font-bold text-blue-300 mb-2`}>Your Hypothesis (Example)</h4>
          <p className={`${isPresenting ? 'text-xs' : 'text-base'} text-gray-100 leading-relaxed`}>
            {exampleDirectional}
          </p>
          <div className={`mt-3 text-xs text-blue-300 space-y-1`}>
            <p><span className="font-semibold">IV (Independent):</span> Sleep duration (4 hours vs 8 hours)</p>
            <p><span className="font-semibold">DV (Dependent):</span> Working memory task score</p>
            <p><span className="font-semibold">Type:</span> {selectedType === 'directional' ? 'Directional—predicts lower scores' : 'Non-directional—predicts difference'}</p>
          </div>
        </div>
      ) : (
        <div className={`bg-gray-900/40 border border-gray-700 rounded-lg ${isPresenting ? 'p-3 mb-3' : 'p-5 mb-4'} text-center text-gray-400`}>
          <p className={isPresenting ? 'text-xs' : 'text-sm'}>Select a hypothesis type to see an example ↑</p>
        </div>
      )}

      <button
        onClick={() => setShowExample(!showExample)}
        className={`w-full ${isPresenting ? 'py-2 text-sm' : 'py-3'} rounded-lg font-bold transition-all bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white`}
      >
        {showExample ? '✕ Hide Exam Tips' : '+ Show Exam Tips'}
      </button>

      {showExample && (
        <div className={`bg-amber-900/30 border-2 border-amber-500/50 rounded-lg ${isPresenting ? 'p-3 mt-3' : 'p-5 mt-4'} animate-fadeIn`}>
          <h3 className={`${isPresenting ? 'text-xs' : 'text-lg'} font-bold text-amber-300 mb-3`}>Exam Tips for High-Quality Hypotheses</h3>
          <div className={`space-y-2 ${isPresenting ? 'text-xs' : 'text-sm'} text-amber-100`}>
            <div className="flex gap-2">
              <span className="text-amber-300 font-bold min-w-fit">• Operationalise:</span>
              <p>Define variables in measurable terms (e.g., "score on X test", "time in seconds")</p>
            </div>
            <div className="flex gap-2">
              <span className="text-amber-300 font-bold min-w-fit">• Be specific:</span>
              <p>Name the groups being compared ("participants who..." vs "participants who...")</p>
            </div>
            <div className="flex gap-2">
              <span className="text-amber-300 font-bold min-w-fit">• Directional:</span>
              <p>States effect direction (higher/lower). Use when theory predicts direction.</p>
            </div>
            <div className="flex gap-2">
              <span className="text-amber-300 font-bold min-w-fit">• Non-directional:</span>
              <p>Predicts difference without direction. Use when exploring or theory is unclear.</p>
            </div>
            <div className="flex gap-2">
              <span className="text-amber-300 font-bold min-w-fit">• Testable:</span>
              <p>Must be falsifiable—possible to prove wrong with evidence.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Extended Exam Task for A-Level Lesson 1
const ExtendedExamTaskALevel: React.FC = () => {
  const [showTips, setShowTips] = useState(false)
  
  return (
    <div className="flex flex-col h-full p-8 animate-fadeIn">
      <h2 className="text-4xl font-black text-white mb-2">Extended Task: Exam-Style (A-Level)</h2>
      <p className="text-gray-400 mb-6">Apply your understanding of the scientific approach and hypothesis formulation.</p>
  
      <div className="bg-gray-900/70 border border-gray-700 rounded-2xl p-6 mb-6">
        <h3 className="text-2xl font-bold text-rose-300 mb-3">Scenario</h3>
        <p className="text-gray-200 leading-relaxed">
          A psychologist wants to investigate whether mindfulness meditation reduces anxiety levels in university students. She recruits 40 participants, randomly allocating 20 to a 4-week mindfulness program and 20 to a control group (no intervention). Both groups complete the Beck Anxiety Inventory before and after the 4-week period.
        </p>
      </div>
  
      <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-4 mb-6">
        <h4 className="text-sm font-bold text-emerald-400 uppercase mb-3">Required Tasks</h4>
        <ul className="space-y-2 text-gray-200 text-sm grid grid-cols-2 gap-4">
          <li>• Write a directional experimental hypothesis</li>
          <li>• Write the corresponding null hypothesis</li>
          <li>• Identify two extraneous variables and controls</li>
          <li>• Explain empiricism in this study</li>
          <li>• Assess whether hypothesis is falsifiable</li>
          <li>• Suggest one ethical consideration (BPS code)</li>
        </ul>
      </div>

      <button
        onClick={() => setShowTips(!showTips)}
        className="w-full py-3 mb-4 rounded-lg font-bold transition-all bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white"
      >
        {showTips ? '✕ Hide Exam Tips' : '+ Show Exam Tips'}
      </button>

      {showTips && (
        <div className="bg-amber-900/30 border-2 border-amber-500/30 rounded-xl p-4 mb-6 animate-fadeIn">
          <h4 className="text-sm font-bold text-amber-300 uppercase mb-3">Exam Tips</h4>
          <div className="space-y-2 text-amber-100 text-sm">
            <div className="flex gap-2">
              <span className="font-semibold text-amber-300 min-w-fit">H₁ (Directional):</span>
              <p>States direction of effect with operationalised variables. E.g., "Participants in the mindfulness group will show significantly lower anxiety scores..."</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-amber-300 min-w-fit">H₀ (Null):</span>
              <p>States no significant effect. E.g., "There will be no significant difference in anxiety scores between..."</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-amber-300 min-w-fit">Extraneous:</span>
              <p>Prior anxiety levels, baseline stress, medication, motivation, age, sleep quality.</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-amber-300 min-w-fit">Empiricism:</span>
              <p>Uses measurable data (BAI scores), not speculation. Relies on direct observation.</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-amber-300 min-w-fit">Falsifiable:</span>
              <p>The hypothesis can be tested and potentially disproven. If BAI scores don't differ, the hypothesis is falsified.</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-amber-300 min-w-fit">Ethics:</span>
              <p>Informed consent before allocation, right to withdraw, debriefing after intervention, protecting psychological wellbeing.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Lesson definitions with level-specific availability
const allLessons = [
  // ============= GCSE LESSONS (8 Total) =============
  { id: 1, title: 'Lesson 1: The Basics of Investigation', levels: ['gcse'], description: 'Hypotheses & Variables' },
  { id: 2, title: 'Lesson 2: Selecting Participants', levels: ['gcse'], description: 'Sampling Methods' },
  { id: 3, title: 'Lesson 3: Experimental Design', levels: ['gcse'], description: 'Structuring Test Groups' },
  { id: 4, title: 'Lesson 4: Non-Experimental Methods', levels: ['gcse'], description: 'Interviews & Questionnaires' },
  { id: 5, title: 'Lesson 5: Observation & Correlation', levels: ['gcse'], description: 'Watching & Measuring Relationships' },
  { id: 6, title: 'Lesson 6: Ethical Considerations', levels: ['gcse'], description: 'BPS Guidelines' },
  { id: 7, title: 'Lesson 7: Data Handling I', levels: ['gcse'], description: 'Types & Averages' },
  { id: 8, title: 'Lesson 8: Data Handling II', levels: ['gcse'], description: 'Graphs & Distributions' },

  // ============= A-LEVEL LESSONS (11 Total) =============
  { id: 9, title: 'Lesson 1: The Scientific Approach', levels: ['alevel'], description: 'Is Psychology a Science?' },
  { id: 10, title: 'Lesson 2: Control & Validity', levels: ['alevel'], description: 'Keeping it Pure' },
  { id: 11, title: 'Lesson 3: Advanced Experimental Design', levels: ['alevel'], description: 'Robust Planning' },
  { id: 12, title: 'Lesson 4: Reliability & Validity (Deep Dive)', levels: ['alevel'], description: 'Accuracy vs Consistency' },
  { id: 13, title: 'Lesson 5: Ethics & Professional Standards', levels: ['alevel'], description: 'Advanced Ethics' },
  { id: 14, title: 'Lesson 6: Observational Techniques', levels: ['alevel'], description: 'Systematic Watching' },
  { id: 15, title: 'Lesson 7: Self-Report & Other Methods', levels: ['alevel'], description: 'Questionnaires & Content Analysis' },
  { id: 16, title: 'Lesson 8: Descriptive Statistics', levels: ['alevel'], description: 'Standard Deviation & Distributions' },
  { id: 17, title: 'Lesson 9: Inferential Statistics I', levels: ['alevel'], description: 'Probability & Significance' },
  { id: 18, title: 'Lesson 10: Inferential Statistics II', levels: ['alevel'], description: 'The Tests' },
  { id: 19, title: 'Lesson 11: Professional Context', levels: ['alevel'], description: 'Peer Review & Economy' },
]

// Get lessons filtered by current level
const getActiveLessons = (currentLevel: 'gcse' | 'alevel') => {
  return allLessons.filter(lesson => lesson.levels.includes(currentLevel))
}

// Slide counts per lesson
const lessonSlideCounts: Record<number, number> = {
  1: 10,
  2: 5, 3: 5, 4: 5, 5: 5, 6: 5, 7: 5, 8: 5,
  9: 9, 10: 5, 11: 5, 12: 5, 13: 5, 14: 5, 15: 5, 16: 5, 17: 5, 18: 5, 19: 5
}

// Utility: build slides with teacher-first ordering per cycle
const buildSlides = (cyclePrefixes: string[], includeExtended = true) => {
  const slides: string[] = ['donow']
  for (const prefix of cyclePrefixes) {
    slides.push(`${prefix}_teach`, `${prefix}_sim`, `${prefix}_afl`, `${prefix}_task`)
  }
  if (includeExtended) slides.push('extended')
  return slides
}

// Lesson 1 slides data (GCSE)
const lesson1Slides = buildSlides(['hypo', 'variables'])

// Lesson 9 slides data (A-Level Lesson 1: The Scientific Approach) - 9 focused slides
const lesson9Slides = ['donow', 'science_teach', 'science_sim', 'science_afl', 'hypothesis_teach', 'hypothesis_sim', 'falsification_teach', 'falsification_afl', 'extended']

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentLesson, setCurrentLesson] = useState(1)
  const [isSidebarOpen, setSidebarOpen] = useState(true)
  const [level, setLevel] = useState<'gcse' | 'alevel'>('gcse')
  const [isPresenting, setIsPresenting] = useState(false)

  const slideCount = lessonSlideCounts[currentLesson] || 5

  // Theme configuration based on level
  const themeColors = {
    gcse: {
      primary: 'green',
      bg: 'bg-green-600',
      bgHover: 'hover:bg-green-500',
      bgLight: 'bg-green-900/10',
      border: 'border-green-500',
      text: 'text-green-400',
      textDark: 'text-green-300',
      shadowColor: 'shadow-green-600/20',
      gradientFrom: 'from-green-800',
      gradientTo: 'to-green-500',
      buttonBg: 'bg-green-600',
      buttonBgHover: 'hover:bg-green-500',
      sideBg: 'bg-green-500/5',
      progressBar: 'from-green-800 to-green-500',
      accentBorder: 'border-green-500/50',
    },
    alevel: {
      primary: 'red',
      bg: 'bg-rose-600',
      bgHover: 'hover:bg-rose-500',
      bgLight: 'bg-rose-900/10',
      border: 'border-rose-500',
      text: 'text-rose-400',
      textDark: 'text-rose-300',
      shadowColor: 'shadow-rose-600/20',
      gradientFrom: 'from-rose-800',
      gradientTo: 'to-rose-500',
      buttonBg: 'bg-rose-600',
      buttonBgHover: 'hover:bg-rose-500',
      sideBg: 'bg-rose-500/5',
      progressBar: 'from-rose-800 to-rose-500',
      accentBorder: 'border-rose-500/50',
    }
  }

  const theme = themeColors[level]

  const nextSlide = () => {
    if (currentSlide < slideCount - 1) setCurrentSlide(currentSlide + 1)
  }

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1)
  }

  // Toggle presentation mode with fullscreen - exact logic from Relationships repo
  const togglePresentation = () => {
    if (!isPresenting) {
      if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(() => null);
      setSidebarOpen(false);
      setIsPresenting(true);
    } else {
      if (document.exitFullscreen && document.fullscreenElement) document.exitFullscreen().catch(() => null);
      setIsPresenting(false);
    }
  }

  // Keyboard shortcuts for presentation mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // P or p to toggle presentation (Ctrl+P)
      if ((e.key === 'p' || e.key === 'P') && e.ctrlKey) {
        e.preventDefault()
        togglePresentation()
      }
      // ESC to exit presentation with fullscreen exit
      if (e.key === 'Escape' && isPresenting) {
        if (document.exitFullscreen && document.fullscreenElement) document.exitFullscreen().catch(() => null);
        setIsPresenting(false)
      }
      // S to toggle sidebar in presentation
      if ((e.key === 's' || e.key === 'S') && isPresenting) {
        setSidebarOpen(prev => !prev)
      }
      // Arrow keys for navigation in presentation
      if (isPresenting) {
        if (e.key === 'ArrowRight' && currentSlide < slideCount - 1) {
          setCurrentSlide(currentSlide + 1)
        }
        if (e.key === 'ArrowLeft' && currentSlide > 0) {
          setCurrentSlide(currentSlide - 1)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isPresenting, currentSlide, slideCount])

  // Reset to first lesson when switching levels
  useEffect(() => {
    const firstLessonForLevel = getActiveLessons(level)[0]
    if (firstLessonForLevel) {
      setCurrentLesson(firstLessonForLevel.id)
      setCurrentSlide(0)
    }
  }, [level])

  const handleLessonChange = (lessonId: number) => {
    setCurrentLesson(lessonId)
    setCurrentSlide(0)
  }

  // Render Lesson 1 content
  const renderLesson1 = () => {
    const slideType = lesson1Slides[currentSlide]

    if (slideType === 'donow') {
      const doNowQuestions: Question[] = [
        {
          id: 1,
          question: "What does 'scientific' mean?",
          options: [
            'Based on systematic observation and testing',
            'Based on tradition',
            'Based on feelings',
            'Based on opinion'
          ],
          correct: 0
        },
        {
          id: 2,
          question: 'Which of these is a measurement?',
          options: [
            'People feel happy',
            'Temperature is 20°C',
            'The sky looks blue',
            'Music sounds nice'
          ],
          correct: 1
        },
        {
          id: 3,
          question: "What does 'objective' mean?",
          options: [
            'Based on guesses',
            'Based on personal feelings',
            'Based on facts that can be measured',
            'Based on beliefs'
          ],
          correct: 2
        },
        {
          id: 4,
          question: 'If you repeat an experiment and get the same result, this shows:',
          options: ['Bias', 'Error', 'Luck', 'Reliability'],
          correct: 3
        },
        {
          id: 5,
          question: "A 'variable' is something that:",
          options: ['Is always the same', 'Can change or vary', 'Never changes', 'Cannot be measured'],
          correct: 1
        }
      ]

      return <DoNowQuiz questions={doNowQuestions} isPresenting={isPresenting} />
    }

    if (slideType === 'hypo_sim') {
      return <HypothesisMachine isPresenting={isPresenting} />
    }

    if (slideType === 'hypo_teach') {
      return <HypothesisTeachSlide isPresenting={isPresenting} />
    }

    if (slideType === 'hypo_afl') {
      return <HypothesisStatementCheck isPresenting={isPresenting} />
    }

    if (slideType === 'hypo_task') {
      return <HypothesisWriterGCSE isPresenting={isPresenting} />
    }

    if (slideType === 'variables_sim') {
      return <VariableLab isPresenting={isPresenting} />
    }

    if (slideType === 'variables_teach') {
      return <VariablesTeachSlide isPresenting={isPresenting} />
    }

    if (slideType === 'variables_afl') {
      const questions: Question[] = [
        {
          id: 1,
          question: 'In the music study, what is being manipulated?',
          options: ['The test score', 'Music vs silence', 'Time of day', 'Teacher style'],
          correct: 1
        },
        {
          id: 2,
          question: 'What is the dependent variable in the music study?',
          options: ['Number of participants', 'Music vs silence', 'Words remembered / test score', 'Study room'],
          correct: 2
        },
        {
          id: 3,
          question: 'Which is an extraneous variable we should control?',
          options: ['Prior knowledge of the material', 'Number of groups', 'Presence of DV', 'Using hypotheses'],
          correct: 0
        },
        {
          id: 4,
          question: 'Why control extraneous variables?',
          options: ['To make it more fun', 'To keep the test fair and valid', 'To reduce sample size', 'To make it longer'],
          correct: 1
        }
      ]

      return <SplitKnowledgeCheck questions={questions} title="Quick Quiz: Variables" subtitle="IV vs DV vs Extraneous" />
    }

    if (slideType === 'variables_task') {
      return <VariableDetective isPresenting={isPresenting} />
    }

    if (slideType === 'extended') {
      return <ExtendedExamTask />
    }

    return <div>Loading...</div>
  }

  // Render Lesson 9 content (A-Level Lesson 1: The Scientific Approach)
  const renderLesson9 = () => {
    const slideType = lesson9Slides[currentSlide]

    if (slideType === 'donow') {
      const doNowQuestions: Question[] = [
        {
          id: 1,
          question: "What does 'empiricism' mean in science?",
          options: [
            'Knowledge from intuition',
            'Knowledge from direct observation and measurement',
            'Knowledge from tradition',
            'Knowledge from authority'
          ],
          correct: 1
        },
        {
          id: 2,
          question: 'Which is a feature of a falsifiable theory?',
          options: [
            'It can explain any outcome',
            'It cannot be tested',
            'It can potentially be proven false',
            'It is always true'
          ],
          correct: 2
        },
        {
          id: 3,
          question: 'The nomothetic approach seeks to establish:',
          options: ['Individual case studies', 'Universal laws applicable to all', 'Personal narratives', 'Subjective experiences'],
          correct: 1
        },
        {
          id: 4,
          question: 'Replicability means:',
          options: [
            'Using complex procedures',
            'Repeating an experiment and getting the same results',
            'Recruiting more participants',
            'Publishing results'
          ],
          correct: 1
        },
        {
          id: 5,
          question: 'Karl Popper argued that good science should:',
          options: [
            'Prove theories correct',
            'Avoid testing theories',
            'Attempt to disprove theories',
            'Rely on anecdotal evidence'
          ],
          correct: 2
        }
      ]

      return <DoNowQuiz questions={doNowQuestions} isPresenting={isPresenting} />
    }

    if (slideType === 'science_teach') {
      return <ScientificApproachTeachSlide isPresenting={isPresenting} />
    }

    if (slideType === 'science_sim') {
      return <ScientificFeaturesInteractive isPresenting={isPresenting} />
    }

    if (slideType === 'science_afl') {
      const questions: Question[] = [
        {
          id: 1,
          question: 'Why is objectivity important in psychological research?',
          options: [
            'It makes research faster',
            'It prevents researcher bias from affecting results',
            'It reduces the need for participants',
            'It makes results more subjective'
          ],
          correct: 1
        },
        {
          id: 2,
          question: 'Which feature involves repeating an experiment to get consistent results?',
          options: ['Falsifiability', 'Objectivity', 'Replicability', 'Empiricism'],
          correct: 2
        },
        {
          id: 3,
          question: 'A theory that cannot be tested is:',
          options: ['Scientific', 'Falsifiable', 'Unfalsifiable', 'Replicable'],
          correct: 2
        },
        {
          id: 4,
          question: 'What does replicability demonstrate?',
          options: [
            'Results are due to chance',
            'Results are consistent across repeated trials',
            'Results are biased',
            'Results cannot be measured'
          ],
          correct: 1
        }
      ]

      return <SplitKnowledgeCheck questions={questions} title="Quick Check: Scientific Features" subtitle="Test your understanding" />
    }

    if (slideType === 'hypothesis_teach') {
      return <HypothesisDesignTeachPart1 isPresenting={isPresenting} />
    }

    if (slideType === 'hypothesis_sim') {
      return <HypothesisWriterALevel isPresenting={isPresenting} />
    }

    if (slideType === 'falsification_teach') {
      return <FalsificationTeachSlide isPresenting={isPresenting} />
    }

    if (slideType === 'falsification_afl') {
      return <FalsifiabilityChecker isPresenting={isPresenting} />
    }

    if (slideType === 'extended') {
      return <ExtendedExamTaskALevel />
    }

    return <div>Loading...</div>
  }

  // Render placeholder for other lessons
  const renderPlaceholder = () => {
    const lesson = allLessons.find(l => l.id === currentLesson)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <div className="text-8xl mb-6">🚧</div>
          <h2 className="text-3xl font-bold text-white mb-4">{lesson?.title}</h2>
          <p className="text-gray-400 text-xl">Placeholder for future content...</p>
          <p className="text-gray-500 text-sm mt-4">Level: {lesson?.levels.includes('gcse') && lesson?.levels.includes('alevel') ? 'GCSE & A-Level' : lesson?.levels.includes('gcse') ? 'GCSE Only' : 'A-Level Only'}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 font-sans overflow-hidden selection:bg-pink-500 selection:text-white">
      {/* Presentation Mode Full-Screen Overlay */}
      {isPresenting && (
        <div className="fixed inset-0 z-[9999] bg-black flex flex-col">
          {/* Header with Exit and Menu Toggle */}
          <div className="flex items-center justify-between px-8 py-4 border-b border-gray-700 bg-gray-950/80 backdrop-blur">
            <button
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-gray-300 hover:text-white"
              title="Toggle sidebar (S)"
            >
              <Menu size={24} />
            </button>
            <div />
            <button
              onClick={togglePresentation}
              className="px-6 py-2 rounded-lg font-bold bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all"
              title="Exit presentation (ESC)"
            >
              EXIT
            </button>
          </div>

          {/* Main Presentation Content with Sidebar */}
          <div className="flex flex-grow overflow-hidden">
            {/* Presentation Sidebar */}
            {isSidebarOpen && (
              <div className="w-80 bg-gray-950 border-r border-gray-800 flex flex-col shadow-2xl overflow-hidden">
                {/* Sidebar Header */}
                <div className="p-6 border-b border-gray-800">
                  <span className={`font-black text-xl tracking-tighter ${theme.text}`}>RESEARCH METHODS</span>
                </div>

                {/* Level Toggle */}
                <div className="p-4 border-b border-gray-800">
                  <div className="flex bg-gray-900 rounded-lg p-1">
                    <button
                      onClick={() => setLevel('gcse')}
                      className={`flex-1 py-2 px-4 rounded-md text-sm font-bold transition-all ${
                        level === 'gcse'
                          ? 'bg-green-600 text-white shadow-lg'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      GCSE
                    </button>
                    <button
                      onClick={() => setLevel('alevel')}
                      className={`flex-1 py-2 px-4 rounded-md text-sm font-bold transition-all ${
                        level === 'alevel'
                          ? 'bg-red-600 text-white shadow-lg'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      A-Level
                    </button>
                  </div>
                </div>

                {/* Lesson List */}
                <div className="flex-grow overflow-y-auto custom-scrollbar py-4">
                  {getActiveLessons(level).map((lesson) => (
                    <button
                      key={lesson.id}
                      onClick={() => handleLessonChange(lesson.id)}
                      className={`w-full text-left px-6 py-4 border-l-4 transition-all text-sm ${
                        currentLesson === lesson.id
                          ? level === 'gcse'
                            ? 'border-green-500 bg-green-900/10 text-white shadow-[inset_10px_0_20px_-10px_rgba(34,197,94,0.2)]'
                            : 'border-rose-500 bg-rose-900/10 text-white shadow-[inset_10px_0_20px_-10px_rgba(244,63,94,0.2)]'
                          : 'border-transparent text-gray-500 hover:bg-gray-900 hover:text-gray-300'
                      } cursor-pointer`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold tracking-tight">{lesson.title}</span>
                        {currentLesson === lesson.id && (
                          <div className={`w-2 h-2 rounded-full ${
                            level === 'gcse'
                              ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,1)]'
                              : 'bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,1)]'
                          }`}></div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Main Presentation Content */}
            <main className={`flex-grow flex ${isPresenting ? 'items-start justify-center p-12' : 'items-center justify-center p-8'} overflow-auto custom-scrollbar`}>
              <div className={`w-full h-full flex ${isPresenting ? 'items-start justify-center' : 'items-center justify-center'}`}>
                {isPresenting ? (
                  <div className="present-scale" style={{ width: '100%', maxWidth: '1200px' }}>
                    {currentLesson === 1 && renderLesson1()}
                    {currentLesson === 9 && renderLesson9()}
                    {currentLesson !== 1 && currentLesson !== 9 && renderPlaceholder()}
                  </div>
                ) : (
                  <>
                    {currentLesson === 1 && renderLesson1()}
                    {currentLesson === 9 && renderLesson9()}
                    {currentLesson !== 1 && currentLesson !== 9 && renderPlaceholder()}
                  </>
                )}
              </div>
            </main>
          </div>

          {/* Presentation Controls - Bottom Bar */}
          <div className="h-24 border-t border-gray-700 bg-gray-950/80 backdrop-blur flex items-center justify-between px-8 gap-6">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`flex items-center gap-2 px-8 py-3 rounded-lg font-bold text-lg transition-all ${
                currentSlide === 0
                  ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                  : level === 'gcse'
                    ? 'bg-green-600 text-white hover:bg-green-500 shadow-lg shadow-green-600/20'
                    : 'bg-rose-600 text-white hover:bg-rose-500 shadow-lg shadow-rose-600/20'
              }`}
            >
              <ChevronLeft size={24} />
              PREV
            </button>

            {/* Slide Counter & Dots */}
            <div className="flex items-center gap-10">
              <span className="text-gray-300 font-mono text-3xl font-bold">
                {String(currentSlide + 1).padStart(2, '0')} / {String(slideCount).padStart(2, '0')}
              </span>
              <div className="flex gap-4">
                {Array.from({ length: slideCount }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`rounded-full transition-all ${
                      idx === currentSlide
                        ? level === 'gcse'
                          ? 'w-5 h-5 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]'
                          : 'w-5 h-5 bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]'
                        : 'w-3 h-3 bg-gray-700 hover:bg-gray-600'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              disabled={currentSlide === slideCount - 1}
              className={`flex items-center gap-2 px-8 py-3 rounded-lg font-bold text-lg transition-all ${
                currentSlide === slideCount - 1
                  ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                  : level === 'gcse'
                    ? 'bg-green-600 text-white hover:bg-green-500 shadow-lg shadow-green-600/20'
                    : 'bg-rose-600 text-white hover:bg-rose-500 shadow-lg shadow-rose-600/20'
              }`}
            >
              NEXT
              <ChevronRight size={24} />
            </button>

            {/* Exit Presentation */}
            <button
              onClick={togglePresentation}
              className="px-6 py-3 rounded-lg font-bold bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all"
              title="Exit presentation (ESC)"
            >
              EXIT
            </button>
          </div>
        </div>
      )}

      {/* Normal Mode - Sidebar and regular layout */}
      {!isPresenting && (
        <>
          {/* Sidebar */}
          <div className={`${isSidebarOpen ? 'w-80' : 'w-0'} bg-gray-950 border-r border-gray-800 transition-all duration-300 flex flex-col z-20 shadow-2xl relative overflow-hidden`}>
            {/* Sidebar Header */}
            <div className="p-6 border-b border-gray-800 flex justify-between items-center">
              <span className={`font-black text-xl tracking-tighter ${theme.text}`}>RESEARCH METHODS</span>
              <button onClick={() => setSidebarOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Level Toggle */}
            <div className="p-4 border-b border-gray-800">
              <div className="flex bg-gray-900 rounded-lg p-1">
                <button
                  onClick={() => setLevel('gcse')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-bold transition-all ${
                    level === 'gcse'
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  GCSE
                </button>
                <button
                  onClick={() => setLevel('alevel')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-bold transition-all ${
                    level === 'alevel'
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  A-Level
                </button>
              </div>
            </div>

            {/* Lesson List */}
            <div className="flex-grow overflow-y-auto custom-scrollbar py-4">
              {getActiveLessons(level).map((lesson) => (
                <button
                  key={lesson.id}
                  onClick={() => handleLessonChange(lesson.id)}
                  className={`w-full text-left px-6 py-4 border-l-4 transition-all ${
                    currentLesson === lesson.id
                      ? level === 'gcse'
                        ? 'border-green-500 bg-green-900/10 text-white shadow-[inset_10px_0_20px_-10px_rgba(34,197,94,0.2)]'
                        : 'border-rose-500 bg-rose-900/10 text-white shadow-[inset_10px_0_20px_-10px_rgba(244,63,94,0.2)]'
                      : 'border-transparent text-gray-500 hover:bg-gray-900 hover:text-gray-300'
                  } cursor-pointer`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm tracking-tight">{lesson.title}</span>
                    {currentLesson === lesson.id && (
                      <div className={`w-2 h-2 rounded-full ${level === 'gcse' ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,1)]' : 'bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,1)]'}`}></div>
                    )}
                  </div>
                  {currentLesson === lesson.id && (
                    <p className="text-xs text-gray-400 mt-1">{lesson.description}</p>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-grow flex flex-col h-full relative bg-[#0a0a0a]">
            {/* Progress Bar */}
            <div className="h-1 bg-gray-900 w-full">
              <div
                className={`h-full bg-gradient-to-r ${theme.progressBar} transition-all duration-500`}
                style={{ width: `${((currentSlide + 1) / slideCount) * 100}%` }}
              />
            </div>

            {/* Header with menu toggle and present button */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-900/50 backdrop-blur">
              {!isSidebarOpen && (
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  title="Open sidebar"
                >
                  <Menu size={24} />
                </button>
              )}
              {isSidebarOpen && <div />}
              
              {/* Present Button - exact logic from Relationships repo */}
              <button
                onClick={togglePresentation}
                className={`p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 border border-gray-700/50 backdrop-blur-sm transition-all ${
                  isPresenting ? (level === 'gcse' ? 'bg-green-600 text-white border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]' : 'bg-rose-600 text-white border-rose-500 shadow-[0_0_15px_rgba(225,29,72,0.5)]') : 'bg-gray-800/80'
                }`}
                title="Presentation Mode"
              >
                <Projector size={20} />
              </button>
            </div>

            {/* Lesson Content */}
            <main className="flex-grow relative overflow-auto custom-scrollbar bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-[#0a0a0a] to-[#0a0a0a]">
              {currentLesson === 1 && renderLesson1()}
              {currentLesson === 9 && renderLesson9()}
              {currentLesson !== 1 && currentLesson !== 9 && renderPlaceholder()}
            </main>

            {/* Navigation Footer */}
            <div className="h-20 border-t border-gray-800 flex items-center justify-between px-8 bg-gray-950">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
                  currentSlide === 0
                    ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                    : level === 'gcse'
                      ? 'bg-green-600 text-white hover:bg-green-500 shadow-lg shadow-green-600/20'
                      : 'bg-rose-600 text-white hover:bg-rose-500 shadow-lg shadow-rose-600/20'
                }`}
              >
                <ChevronLeft size={20} />
                PREV
              </button>

              <div className="flex items-center gap-6">
                <span className="text-gray-400 font-mono text-lg">
                  {String(currentSlide + 1).padStart(2, '0')} / {String(slideCount).padStart(2, '0')}
                </span>
                <div className="flex gap-2">
                  {Array.from({ length: slideCount }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentSlide
                          ? level === 'gcse'
                            ? 'w-8 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]'
                            : 'w-8 bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]'
                          : 'w-2 bg-gray-700 hover:bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={nextSlide}
                disabled={currentSlide === slideCount - 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
                  currentSlide === slideCount - 1
                    ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                    : level === 'gcse'
                      ? 'bg-green-600 text-white hover:bg-green-500 shadow-lg shadow-green-600/20'
                      : 'bg-rose-600 text-white hover:bg-rose-500 shadow-lg shadow-rose-600/20'
                }`}
              >
                NEXT
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default App
