import { useState } from 'react'
import { X, Menu, ChevronLeft, ChevronRight, Lightbulb, CheckCircle, Target, FlaskConical, BarChart, Beaker, AlertTriangle, Eye, EyeOff, Zap, Brain, Clock, TrendingUp, Projector } from 'lucide-react'
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
const DoNowQuiz: React.FC<{ questions: Question[] }> = ({ questions }) => {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)

  const handleSelect = (qId: number, optionIdx: number) => 
    setAnswers(prev => ({ ...prev, [qId]: optionIdx }))
  
  const score = Object.keys(answers).reduce(
    (acc, qId) => acc + (answers[Number(qId)] === questions[Number(qId) - 1].correct ? 1 : 0),
    0
  )

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-full content-start gap-8 p-8">
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-pink-900/40 to-purple-900/20 rounded-2xl border border-pink-500/20 p-8 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 blur-3xl rounded-full"></div>
          <h3 className="text-2xl font-bold text-white mb-4">Task: Activation & Retrieval</h3>
          <p className="text-gray-300">
            Activate your psychological knowledge. These questions test recall from previous lessons and foundational content.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {!showResults ? (
            <>
              <button
                onClick={() => setShowResults(true)}
                disabled={Object.keys(answers).length < 5}
                className="bg-pink-600 hover:bg-pink-500 disabled:opacity-50 disabled:grayscale text-white rounded-xl font-bold px-8 py-4 transition-all shadow-lg hover:shadow-pink-500/20"
              >
                Submit Answers
              </button>
              <button
                onClick={() => setShowResults(true)}
                className="bg-transparent hover:bg-gray-800 text-gray-400 border border-gray-700 hover:border-gray-500 rounded-xl font-semibold px-8 py-3 text-sm transition-all"
              >
                Reveal All Answers
              </button>
            </>
          ) : (
            <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 text-center animate-fadeIn shadow-[0_0_30px_rgba(34,197,94,0.1)]">
              <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 block mb-2">
                Score: {score} / 5
              </span>
              <span className="text-green-200/70 font-mono uppercase tracking-widest text-xs">
                Knowledge Retrieved
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar max-h-full">
        {questions.map((q) => (
          <div key={q.id} className="bg-gray-900/50 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors p-4">
            <h4 className="font-semibold text-gray-200 mb-3 text-sm">
              <span className="text-pink-500 mr-2">{String(q.id).padStart(2, '0')}.</span>
              {q.question}
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {q.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => !showResults && handleSelect(q.id, idx)}
                  className={`rounded-lg text-left transition-all px-4 py-2 text-xs border ${
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
        ))}
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

  const reset = () => {
    setGameState('intro')
    setHypothesis(null)
    setResults(null)
    setConclusion('')
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

// Lesson definitions with level-specific availability
const allLessons = [
  // SHARED LESSONS (both GCSE and A-Level)
  { id: 1, title: '01: Aims & Hypotheses', levels: ['gcse', 'alevel'], description: 'GCSE & A Level' },
  { id: 2, title: '02: Variables & Extraneous Variables', levels: ['gcse', 'alevel'], description: 'GCSE & A Level' },
  { id: 3, title: '03: Experimental Designs', levels: ['gcse', 'alevel'], description: 'GCSE & A Level' },
  { id: 4, title: '04: Types of Experiments', levels: ['gcse', 'alevel'], description: 'GCSE & A Level' },
  { id: 5, title: '05: Sampling Methods', levels: ['gcse', 'alevel'], description: 'GCSE & A Level' },
  { id: 6, title: '06: Ethical Considerations', levels: ['gcse', 'alevel'], description: 'GCSE & A Level' },
  { id: 9, title: '09: Correlations & Data Analysis', levels: ['gcse', 'alevel'], description: 'GCSE & A Level' },
  
  // GCSE-SPECIFIC LESSONS
  { id: 7, title: '07: Interviews & Questionnaires', levels: ['gcse'], description: 'GCSE Only' },
  { id: 8, title: '08: Observation Studies', levels: ['gcse'], description: 'GCSE Only' },
  { id: 10, title: '10: Case Studies', levels: ['gcse'], description: 'GCSE Only' },
  { id: 11, title: '11: Reliability & Validity', levels: ['gcse'], description: 'GCSE Only' },
  { id: 12, title: '12: Types of Data', levels: ['gcse'], description: 'GCSE Only' },
  { id: 13, title: '13: Descriptive Statistics', levels: ['gcse'], description: 'GCSE Only' },
  { id: 14, title: '14: Interpretation & Display of Data', levels: ['gcse'], description: 'GCSE Only' },
  
  // A-LEVEL-SPECIFIC LESSONS
  { id: 15, title: '07: Research Issues', levels: ['alevel'], description: 'A Level Only' },
  { id: 16, title: '08: Pilot Studies', levels: ['alevel'], description: 'A Level Only' },
  { id: 17, title: '09: Observational Techniques', levels: ['alevel'], description: 'A Level Only' },
  { id: 18, title: '10: Observational Design', levels: ['alevel'], description: 'A Level Only' },
  { id: 19, title: '11: Self-Report Techniques', levels: ['alevel'], description: 'A Level Only' },
  { id: 20, title: '12: Self-Report Design', levels: ['alevel'], description: 'A Level Only' },
  { id: 21, title: '13: Types of Data', levels: ['alevel'], description: 'A Level Only' },
  { id: 22, title: '14: Measures of Central Tendency & Dispersion', levels: ['alevel'], description: 'A Level Only' },
  { id: 23, title: '15: Presentation of Quantitative Data', levels: ['alevel'], description: 'A Level Only' },
  { id: 24, title: '16: Mathematical Content', levels: ['alevel'], description: 'A Level Only' },
  { id: 25, title: '17: Statistical Testing: The Sign Test', levels: ['alevel'], description: 'A Level Only' },
  { id: 26, title: '18: Peer Review & Research Ethics', levels: ['alevel'], description: 'A Level Only' },
]

// Get lessons filtered by current level
const getActiveLessons = (currentLevel: 'gcse' | 'alevel') => {
  return allLessons.filter(lesson => lesson.levels.includes(currentLevel))
}

// Slide counts per lesson
const lessonSlideCounts: Record<number, number> = {
  1: 11, 2: 5, 3: 5, 4: 5, 5: 5, 6: 5, 7: 5, 8: 5, 9: 5, 10: 5, 11: 5, 
  12: 5, 13: 5, 14: 5, 15: 5, 16: 5, 17: 5, 18: 5, 19: 5, 20: 5, 21: 5, 22: 5, 
  23: 5, 24: 5, 25: 5, 26: 5
}

// Lesson 1 slides data
const lesson1Slides = [
  'donow', 'intro', 'aims', 'hypotheses', 'types', 'midcheck', 
  'directional', 'writing', 'simulation', 'evaluation', 'endcheck'
]

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

  const handleLessonChange = (lessonId: number) => {
    setCurrentLesson(lessonId)
    setCurrentSlide(0)
  }

  // Render Lesson 1 content
  const renderLesson1 = () => {
      const slideType = lesson1Slides[currentSlide]

      // Do Now Quiz (Slide 0)
      if (slideType === 'donow') {
        const doNowQuestions = [
          { id: 1, question: "What does 'IV' stand for in research?", options: ['Intelligent Variable', 'Independent Variable', 'Internal Validity', 'Inverse Variation'], correct: 1 },
          { id: 2, question: "What is the purpose of a control group?", options: ['To confuse participants', 'To provide a baseline for comparison', 'To test multiple variables', 'To speed up the experiment'], correct: 1 },
          { id: 3, question: 'Which of these is an ethical guideline in psychology?', options: ['Paying participants extra for risky tasks', 'Informed consent', 'Hiding the study purpose permanently', 'Forcing participation'], correct: 1 },
          { id: 4, question: 'What does a sample represent?', options: ['The entire population', 'A subset of the population', 'Only volunteers', 'The researchers'], correct: 1 },
          { id: 5, question: 'What is meant by "replication" in science?', options: ['Copying answers', 'Repeating a study to verify results', 'Making multiple copies of data', 'Publishing the same paper twice'], correct: 1 }
        ]
      
        return <DoNowQuiz questions={doNowQuestions} />
      }

      // Intro Slide (Slide 1)
      if (slideType === 'intro') {
        return (
          <div className="flex flex-col items-center justify-center h-full animate-fadeIn">
            <div className="max-w-4xl text-center space-y-8">
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 shadow-2xl shadow-pink-500/50 mb-6">
                <Target size={64} className="text-white" />
              </div>
              <h1 className="text-6xl font-black text-white mb-4">
                Aims & Hypotheses
              </h1>
              <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                {level === 'gcse' 
                  ? 'Learn how psychologists plan their research by writing clear aims and testable predictions called hypotheses.'
                  : 'Understand the fundamental principles of research design through the formulation of aims and the construction of falsifiable hypotheses within the hypothetico-deductive framework.'}
              </p>
              <div className="flex gap-4 justify-center items-center pt-8">
                <div className="px-6 py-3 bg-pink-900/30 border border-pink-500/50 rounded-lg">
                  <p className="text-pink-300 font-bold">{lesson1Slides.length - 1} Slides</p>
                </div>
                <div className="px-6 py-3 bg-purple-900/30 border border-purple-500/50 rounded-lg">
                  <p className="text-purple-300 font-bold">2 Knowledge Checks</p>
                </div>
                <div className="px-6 py-3 bg-cyan-900/30 border border-cyan-500/50 rounded-lg">
                  <p className="text-cyan-300 font-bold">1 Simulation</p>
                </div>
              </div>
            </div>
          </div>
        )
      }

      // Aims Slide (Slide 2) - Interactive reveal cards
      if (slideType === 'aims') {
        return <AimsInteractive level={level} />
      }

      // Hypotheses Slide (Slide 3) - Click-to-compare
      if (slideType === 'hypotheses') {
        return <HypothesesComparison level={level} />
      }

      // Types of Hypotheses (Slide 4) - Card deck
      if (slideType === 'types') {
        return <HypothesisTypes level={level} />
      }

      // Mid-lesson Knowledge Check (Slide 5)
      if (slideType === 'midcheck') {
        const midQuestions = level === 'gcse' 
          ? [
              { id: 1, question: 'An aim is...', options: ['A specific prediction', 'A general statement of purpose', 'A statistical test', 'A type of graph'], correct: 1 },
              { id: 2, question: 'Which is more specific?', options: ['An aim', 'A hypothesis', 'Both are equally specific', 'Neither are specific'], correct: 1 },
              { id: 3, question: 'The null hypothesis predicts...', options: ['A positive result', 'A negative result', 'No difference or relationship', 'A correlation'], correct: 2 },
              { id: 4, question: 'The alternative hypothesis is also called...', options: ['The null hypothesis', 'The experimental hypothesis', 'The control hypothesis', 'The fake hypothesis'], correct: 1 }
            ]
          : [
              { id: 1, question: 'What is the key difference between an aim and a hypothesis?', options: ['Aims are tested, hypotheses are not', 'Hypotheses are falsifiable predictions, aims are general statements', 'Aims use statistics, hypotheses do not', 'There is no difference'], correct: 1 },
              { id: 2, question: 'A one-tailed hypothesis...', options: ['Predicts a direction of effect', 'Has no direction', 'Is always rejected', 'Cannot be tested'], correct: 0 },
              { id: 3, question: 'H₀ is rejected when...', options: ['p > 0.05', 'p < 0.05', 'p = 0.05', 'p is undefined'], correct: 1 },
              { id: 4, question: 'Operationalisation means...', options: ['Performing surgery', 'Defining variables in measurable terms', 'Removing variables', 'Operating equipment'], correct: 1 }
            ]
      
        return <SplitKnowledgeCheck questions={midQuestions} title="Mid-Lesson Check" subtitle="Test your understanding so far" />
      }

      // Directional vs Non-directional (Slide 6) - Interactive slider
      if (slideType === 'directional') {
        return <DirectionalSlider level={level} />
      }

      // Writing Good Hypotheses (Slide 7) - Matching game
      if (slideType === 'writing') {
        return <HypothesisWriter level={level} />
      }

      // Interactive Simulation (Slide 8) - Hypothesis Testing Lab
      if (slideType === 'simulation') {
        return <HypothesisLab level={level} />
      }

      // Evaluation (Slide 9) - Evidence matching
      if (slideType === 'evaluation') {
        return <EvaluationSlide level={level} />
      }

      // End Knowledge Check (Slide 10) - Write Your Own Hypothesis
      if (slideType === 'endcheck') {
        return <HypothesisWritingTask level={level} />
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
            <main className="flex-grow flex items-center justify-center overflow-auto custom-scrollbar p-8">
              <div className="w-full h-full flex items-center justify-center">
                {currentLesson === 1 && renderLesson1()}
                {currentLesson !== 1 && renderPlaceholder()}
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
              {currentLesson !== 1 && renderPlaceholder()}
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
