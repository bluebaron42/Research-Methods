import React, { useState } from 'react'
import { Lock, CheckCircle, Brain } from 'lucide-react'

interface Props {
  isPresenting?: boolean
  currentSlide?: number
}

export const ALevelLesson1ResearchMethodsRecap: React.FC<Props> = ({ isPresenting = false, currentSlide = 0 }) => {
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({})
  const [showQuizResults, setShowQuizResults] = useState(false)
  const [aflRevealed, setAflRevealed] = useState<Record<string, boolean>>({})
  const [expandedStudy, setExpandedStudy] = useState<string | null>(null)
  const [critiqueAnswers, setCritiqueAnswers] = useState<Record<string, boolean>>({})
  const [essayRevealed, setEssayRevealed] = useState<Record<string, boolean>>({})

  // Text scaling helpers
  const textSize = (base: string) => isPresenting ? `text-${parseInt(base.split('-')[1]) * 2}` : base
  const headingSize = isPresenting ? 'text-5xl' : 'text-3xl'
  const padding = isPresenting ? 'p-12' : 'p-8'

  // ============= SLIDE DATA =============

  const quizQuestions = [
    {
      id: 1,
      question: 'What is the main difference between an aim and a hypothesis?',
      options: ['An aim is general; a hypothesis makes a specific prediction', 'They are the same thing', 'A hypothesis is broader than an aim'],
      correct: 0
    },
    {
      id: 2,
      question: 'Which of these is an extraneous variable?',
      options: ['Temperature in a memory study (if not being tested)', 'The type of music in a music-memory study', 'Both A and B'],
      correct: 0
    },
    {
      id: 3,
      question: 'In a repeated measures design, what is the key advantage?',
      options: ['Participants are only tested once', 'The same participants are used across conditions, reducing individual differences', 'It always has higher ecological validity'],
      correct: 1
    },
    {
      id: 4,
      question: 'What sampling method involves dividing the population by subgroups?',
      options: ['Random sampling', 'Stratified sampling', 'Opportunity sampling'],
      correct: 1
    },
    {
      id: 5,
      question: 'Which observational technique involves the researcher being hidden?',
      options: ['Overt observation', 'Covert observation', 'Participant observation'],
      correct: 1
    }
  ]

  const variablesData = [
    { type: 'Independent Variable (IV)', def: 'The variable manipulated by the researcher', example: 'Type of music (classical vs. pop vs. silence)' },
    { type: 'Dependent Variable (DV)', def: 'The variable measured as the outcome', example: 'Number of words remembered in a memory test' },
    { type: 'Extraneous Variable', def: 'Variables that could affect DV but are not controlled', example: 'Participants\' noise sensitivity, time of day' },
    { type: 'Confounding Variable', def: 'Uncontrolled variables that vary systematically with the IV', example: 'Testing classical music in quiet, pop in noisy setting' }
  ]

  const designsData = [
    {
      name: 'Independent Groups',
      desc: 'Different participants in each condition',
      pros: ['No practice effects', 'Faster to conduct'],
      cons: ['Need more participants', 'Individual differences might confound']
    },
    {
      name: 'Repeated Measures',
      desc: 'Same participants in all conditions',
      pros: ['Reduces individual differences', 'Fewer participants needed'],
      cons: ['Order effects (practice/fatigue)', 'Time-consuming']
    },
    {
      name: 'Matched Pairs',
      desc: 'Different participants matched on key variables',
      pros: ['Reduces individual differences', 'Avoids practice effects'],
      cons: ['Difficult to match participants', 'Time-consuming to find pairs']
    }
  ]

  const studies = [
    {
      id: 'matthews2012',
      title: 'Matthews et al. (2012)',
      subtitle: 'Latrinalia Content Analysis',
      findings: '1,200 graffiti instances coded; males: ↑ sexual & physical; females: ↑ romantic',
      method: 'Content analysis'
    },
    {
      id: 'asch1951',
      title: 'Asch (1951)',
      subtitle: 'Line Conformity Study',
      findings: '35% of judgements conformed to group; ~75% conformed at least once',
      method: 'Controlled experiment'
    },
    {
      id: 'milgram1963',
      title: 'Milgram (1963)',
      subtitle: 'Obedience Study',
      findings: '65% administered maximum shock; all showed stress',
      method: 'Experimental (quasi)'
    }
  ]

  const critiqueItems = [
    { id: 'demand', label: 'Demand Characteristics', desc: 'Cues about the study\'s purpose affecting behaviour' },
    { id: 'investigator', label: 'Investigator Effects', desc: 'Researcher expectations unconsciously influencing participants' },
    { id: 'bias', label: 'Sampling Bias', desc: 'Sample not representative of population' },
    { id: 'ecological', label: 'Low Ecological Validity', desc: 'Findings may not generalize to real-world settings' }
  ]

  // ============= AFL LOGIC =============

  const aflScenario = 'A researcher wants to test if caffeine affects attention. She gives 20 students a caffeine drink, and 20 students a placebo, then measures their reaction times on a task.'

  // ============= SLIDES =============

  const slides = [
    // Slide 1: Title
    <div key="slide-1" className={`flex flex-col h-full justify-center items-center ${padding} bg-gradient-to-br from-indigo-900/30 to-slate-900 animate-fadeIn`}>
      <div className="text-center space-y-6">
        <div className="animate-pulse">
          <Brain size={isPresenting ? 120 : 80} className="mx-auto text-indigo-400 mb-6" />
        </div>
        <h1 className={`${headingSize} font-black text-white`}>Research Methods Recap</h1>
        <p className={`${textSize('text-lg')} text-indigo-300`}>Year 1 Consolidation & Foundations</p>
        <p className={`${textSize('text-sm')} text-gray-400 max-w-2xl`}>Master the core concepts of research design, variables, sampling, and data collection before advancing to A Level inferential statistics.</p>
      </div>
    </div>,

    // Slide 2: Do Now Quiz
    <div key="slide-2" className={`flex flex-col h-full ${padding} space-y-4 bg-gray-900 animate-fadeIn overflow-y-auto`}>
      <h2 className={`${headingSize} font-black text-white mb-4`}>Do Now: Year 1 Knowledge Check</h2>
      <div className="space-y-4 flex-grow">
        {quizQuestions.map((q) => (
          <div key={q.id} className="bg-slate-800 rounded-lg p-4 border border-slate-700">
            <p className={`${textSize('text-sm')} font-bold text-white mb-3`}>{q.id}. {q.question}</p>
            <div className="space-y-2">
              {q.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => !showQuizResults && setQuizAnswers({ ...quizAnswers, [q.id]: idx })}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                    showQuizResults
                      ? idx === q.correct
                        ? 'bg-green-600 text-white'
                        : quizAnswers[q.id] === idx
                          ? 'bg-red-600 text-white'
                          : 'bg-slate-700 text-gray-300'
                      : quizAnswers[q.id] === idx
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      {!showQuizResults && (
        <button
          onClick={() => setShowQuizResults(true)}
          className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-lg mt-4"
        >
          Submit
        </button>
      )}
    </div>,

    // Slide 3: Variables Masterclass
    <div key="slide-3" className={`flex flex-col h-full ${padding} bg-gradient-to-br from-indigo-900/20 to-gray-900 space-y-4 animate-fadeIn overflow-y-auto`}>
      <h2 className={`${headingSize} font-black text-white mb-4`}>Variables: The Core Framework</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {variablesData.map((v, idx) => (
          <div key={idx} className="bg-slate-800 rounded-lg p-4 border-l-4 border-indigo-500">
            <h3 className={`${textSize('text-base')} font-bold text-indigo-400 mb-2`}>{v.type}</h3>
            <p className={`${textSize('text-xs')} text-gray-300 mb-2`}>{v.def}</p>
            <p className={`${textSize('text-xs')} text-amber-300 italic`}>Example: {v.example}</p>
          </div>
        ))}
      </div>
      <div className="bg-blue-900/30 border border-blue-500/50 rounded-lg p-4 mt-4">
        <p className={`${textSize('text-xs')} text-blue-300`}>
          <span className="font-bold">Key Insight:</span> Confounding variables are the enemy of valid research. Extraneous variables are controlled through standardization, randomization, and counterbalancing.
        </p>
      </div>
    </div>,

    // Slide 4: Experimental Designs
    <div key="slide-4" className={`flex flex-col h-full ${padding} bg-gray-900 space-y-4 animate-fadeIn overflow-y-auto`}>
      <h2 className={`${headingSize} font-black text-white mb-4`}>Experimental Designs: Pros & Cons</h2>
      <div className="space-y-4">
        {designsData.map((d, idx) => (
          <div key={idx} className="bg-slate-800 rounded-lg p-4 border border-slate-700">
            <h3 className={`${textSize('text-base')} font-bold text-indigo-400 mb-1`}>{d.name}</h3>
            <p className={`${textSize('text-xs')} text-gray-300 mb-3`}>{d.desc}</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-green-900/30 rounded p-2">
                <p className={`${textSize('text-xs')} font-bold text-green-400 mb-1`}>✓ Pros</p>
                <ul className={`${textSize('text-xs')} text-green-300 space-y-1`}>
                  {d.pros.map((p, i) => <li key={i}>• {p}</li>)}
                </ul>
              </div>
              <div className="bg-red-900/30 rounded p-2">
                <p className={`${textSize('text-xs')} font-bold text-red-400 mb-1`}>✗ Cons</p>
                <ul className={`${textSize('text-xs')} text-red-300 space-y-1`}>
                  {d.cons.map((c, i) => <li key={i}>• {c}</li>)}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>,

    // Slide 5: AFL Task – Design Detective
    <div key="slide-5" className={`flex flex-col h-full ${padding} bg-gradient-to-br from-amber-900/20 to-gray-900 space-y-4 animate-fadeIn overflow-y-auto`}>
      <h2 className={`${headingSize} font-black text-white mb-2`}>AFL: Design Detective</h2>
      <div className="bg-amber-900/30 border-2 border-amber-500/50 rounded-lg p-4 mb-4">
        <p className={`${textSize('text-sm')} text-amber-100`}><span className="font-bold">Scenario:</span> {aflScenario}</p>
      </div>
      <div className="space-y-3">
        {[
          { key: 'iv', label: 'What is the Independent Variable?', answer: 'Type of music (classical/no music)' },
          { key: 'dv', label: 'What is the Dependent Variable?', answer: 'Number of words recalled in memory test' },
          { key: 'design', label: 'What design is this?', answer: 'Independent groups design' },
          { key: 'control', label: 'Name one control measure needed.', answer: 'Same word list, same time limit, same room conditions' }
        ].map((item) => (
          <button
            key={item.key}
            onClick={() => setAflRevealed({ ...aflRevealed, [item.key]: !aflRevealed[item.key] })}
            className="w-full bg-slate-800 rounded-lg p-3 border border-slate-700 hover:border-indigo-500 transition-all text-left"
          >
            <div className="flex items-center justify-between mb-2">
              <span className={`${textSize('text-xs')} font-bold text-white`}>{item.label}</span>
              <span className="text-indigo-400 text-xs">{aflRevealed[item.key] ? 'Hide' : 'Reveal'}</span>
            </div>
            {aflRevealed[item.key] ? (
              <p className={`${textSize('text-sm')} text-green-400`}>✓ {item.answer}</p>
            ) : (
              <div className="h-5 bg-slate-700 rounded animate-pulse"></div>
            )}
          </button>
        ))}
      </div>
    </div>,

    // Slide 6: Simulation Placeholder
    <div key="slide-6" className={`flex flex-col h-full ${padding} bg-gray-900 justify-center items-center animate-fadeIn`}>
      <div className="text-center space-y-4">
        <Lock size={isPresenting ? 100 : 80} className="mx-auto text-slate-500" />
        <h2 className={`${headingSize} font-black text-white`}>Build Your Study Simulation</h2>
        <p className={`${textSize('text-lg')} text-gray-400 max-w-lg`}>Choose design, sampling method, and control measures. See immediate feedback on your methodological decisions.</p>
        <div className="bg-slate-800 border border-slate-700 rounded-lg px-6 py-4 mt-6">
          <p className={`${textSize('text-sm')} text-slate-400`}>🔒 Access Denied: Simulation Coming in Step 3</p>
        </div>
      </div>
    </div>,

    // Slide 7: Evidence Wall
    <div key="slide-7" className={`flex flex-col h-full ${padding} bg-gray-900 space-y-4 animate-fadeIn overflow-y-auto`}>
      <h2 className={`${headingSize} font-black text-white mb-2`}>Evidence Wall: Key Studies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {studies.map((s) => (
          <div
            key={s.id}
            onClick={() => setExpandedStudy(expandedStudy === s.id ? null : s.id)}
            className="bg-slate-800 rounded-lg p-4 border border-slate-700 cursor-pointer hover:border-indigo-500 transition-all"
          >
            <h3 className={`${textSize('text-base')} font-bold text-indigo-400`}>{s.title}</h3>
            <p className={`${textSize('text-xs')} text-gray-400 italic mb-2`}>{s.subtitle}</p>
            <p className={`${textSize('text-xs')} text-gray-300`}><span className="font-bold">Method:</span> {s.method}</p>
            {expandedStudy === s.id && (
              <div className="mt-3 pt-3 border-t border-slate-700">
                <p className={`${textSize('text-xs')} text-amber-300`}><span className="font-bold">Key Finding:</span> {s.findings}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>,

    // Slide 8: Critique – Strengths & Limitations
    <div key="slide-8" className={`flex flex-col h-full ${padding} bg-gradient-to-br from-red-900/20 to-gray-900 space-y-4 animate-fadeIn overflow-y-auto`}>
      <h2 className={`${headingSize} font-black text-white mb-2`}>Critique: Identify the Issue</h2>
      <p className={`${textSize('text-sm')} text-gray-300 mb-4`}>Which methodological threats apply? Select all that apply.</p>
      <div className="space-y-3">
        {critiqueItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setCritiqueAnswers({ ...critiqueAnswers, [item.id]: !critiqueAnswers[item.id] })}
            className={`p-4 rounded-lg cursor-pointer border-2 transition-all ${
              critiqueAnswers[item.id]
                ? 'bg-indigo-600/30 border-indigo-500'
                : 'bg-slate-800 border-slate-700 hover:border-slate-600'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                critiqueAnswers[item.id] ? 'bg-indigo-600 border-indigo-500' : 'border-slate-500'
              }`}>
                {critiqueAnswers[item.id] && <CheckCircle size={16} className="text-white" />}
              </div>
              <div>
                <p className={`${textSize('text-sm')} font-bold text-white`}>{item.label}</p>
                <p className={`${textSize('text-xs')} text-gray-400`}>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>,

    // Slide 9: Essay Plan Template
    <div key="slide-9" className={`flex flex-col h-full ${padding} bg-gray-900 space-y-4 animate-fadeIn overflow-y-auto`}>
      <h2 className={`${headingSize} font-black text-white mb-2`}>Essay Plan: 8-Mark Structure</h2>
      <div className="space-y-3">
        <button
          onClick={() => setEssayRevealed({ ...essayRevealed, ao1: !essayRevealed.ao1 })}
          className="w-full bg-indigo-900/30 border border-indigo-500/50 rounded-lg p-4 hover:border-indigo-400 transition-all text-left"
        >
          <div className="flex items-center justify-between mb-2">
            <p className={`${textSize('text-sm')} font-bold text-indigo-300`}>❶ Define Concept (AO1 - 2 marks)</p>
            <span className="text-indigo-400 text-xs">{essayRevealed.ao1 ? 'Hide' : 'Reveal Example'}</span>
          </div>
          {essayRevealed.ao1 ? (
            <p className={`${textSize('text-xs')} text-indigo-200 italic`}>"Reliability is the consistency of a measure. If a test produces similar results under consistent conditions, it is considered reliable."</p>
          ) : (
            <div className="h-4 bg-slate-700/50 rounded animate-pulse"></div>
          )}
        </button>
        <button
          onClick={() => setEssayRevealed({ ...essayRevealed, ao3: !essayRevealed.ao3 })}
          className="w-full bg-amber-900/30 border border-amber-500/50 rounded-lg p-4 hover:border-amber-400 transition-all text-left"
        >
          <div className="flex items-center justify-between mb-2">
            <p className={`${textSize('text-sm')} font-bold text-amber-300`}>❷ Evaluate/Evidence (AO3 - 4 marks)</p>
            <span className="text-amber-400 text-xs">{essayRevealed.ao3 ? 'Hide' : 'Reveal Example'}</span>
          </div>
          {essayRevealed.ao3 ? (
            <div className={`${textSize('text-xs')} text-amber-200 space-y-1`}>
              <p>• Strength: "Test-retest is straightforward and produces quantitative data (Matthews et al., 2012)..."</p>
              <p>• Limitation: "However, it's time-consuming and may have recall bias..."</p>
            </div>
          ) : (
            <div className="h-8 bg-slate-700/50 rounded animate-pulse"></div>
          )}
        </button>
        <button
          onClick={() => setEssayRevealed({ ...essayRevealed, ao2: !essayRevealed.ao2 })}
          className="w-full bg-green-900/30 border border-green-500/50 rounded-lg p-4 hover:border-green-400 transition-all text-left"
        >
          <div className="flex items-center justify-between mb-2">
            <p className={`${textSize('text-sm')} font-bold text-green-300`}>❸ Apply to Context (AO2 - 2 marks)</p>
            <span className="text-green-400 text-xs">{essayRevealed.ao2 ? 'Hide' : 'Reveal Example'}</span>
          </div>
          {essayRevealed.ao2 ? (
            <p className={`${textSize('text-xs')} text-green-200 italic`}>"In Asch's conformity research, this method revealed the extent to which participants yielded to group pressure..."</p>
          ) : (
            <div className="h-4 bg-slate-700/50 rounded animate-pulse"></div>
          )}
        </button>
      </div>
    </div>
  ]

  return (
    <div className="flex flex-col h-full bg-gray-900 text-white overflow-hidden">
      {/* Slide Content */}
      <div className="flex-grow overflow-hidden">
        {slides[currentSlide]}
      </div>
    </div>
  )
}
