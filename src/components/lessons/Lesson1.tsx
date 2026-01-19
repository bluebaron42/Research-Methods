import { useState, useMemo } from 'react'
import { ChevronLeft, ChevronRight, Target, Lightbulb, CheckCircle, Brain, BookOpen, Star, ArrowRight, Activity, FlaskConical, Layout, Share2, Award, Zap, AlertTriangle as AlertTriangleIcon } from 'lucide-react'
import HypothesisLab from './activities/HypothesisLab'

// --- Types ---
interface SlideContent {
  id: number
  type: 'intro' | 'donow' | 'concept' | 'check' | 'simulation' | 'context' | 'evaluation' | 'exam'
  title: string
  content?: any
}

// --- Data ---
const slides: SlideContent[] = [
  // Slide 0: Title & Concept
  {
    id: 0,
    type: 'intro',
    title: 'Hypotheses & Variables',
    content: {
      subtitle: 'Starting out in Research Methods',
      concept: 'Predicting the Future: Science vs Fortune Telling',
      objective: 'To understand how psychologists formulate testable predictions (hypotheses) and identifying the key variables (IV & DV) in an investigation.'
    }
  },
  // Slide 1: Do Now (Retrieval)
  {
    id: 1,
    type: 'donow',
    title: 'Do Now: Scientific Thinking',
    content: {
      questions: [
        { id: 1, text: "What does 'objective' mean?", options: ["Based on opinion", "Based on measurable fact", "Based on feelings"], correct: 1 },
        { id: 2, text: "A 'theory' in psychology is...", options: ["A complete guess", "A proven fact", "A suggested explanation for behaviour"], correct: 2 },
        { id: 3, text: "Which measurement is most scientific?", options: ["'It felt cold'", "'It was 4°C'", "'It was freezing'"], correct: 1 },
        { id: 4, text: "Why do we repeat experiments?", options: ["To check reliability", "To waste time", "To make it harder"], correct: 0 },
        { id: 5, text: "Prediction is a key part of science. True or False?", options: ["True", "False"], correct: 0 }
      ]
    }
  },
  // Slide 2: Core Concept (Definition)
  {
    id: 2,
    type: 'concept',
    title: 'Aims & Hypotheses',
    content: {
      sections: [
        {
          heading: "The Aim",
          text: "A general statement explaining the purpose of a study. It tells us what the researcher intends to investigate.",
          icon: <Target className="w-6 h-6 text-pink-400" />,
          example: "Aim: To investigate whether audience presence affects throwing performance."
        },
        {
          heading: "The Hypothesis",
          text: "A clear, precise, testable statement predicting the relationship between variables. It is written BEFORE the study begins.",
          icon: <FlaskConical className="w-6 h-6 text-blue-400" />,
          example: "Hypothesis: Participants will throw fewer balls into a bucket when observed by an audience compared to when alone."
        }
      ]
    }
  },
  // Slide 3: Elaboration (Mechanics)
  {
    id: 3,
    type: 'concept',
    title: 'Variables & Operationalisation',
    content: {
      sections: [
        {
          heading: "Independent Variable (IV)",
          text: "The variable the experimenter CHANGES or manipulates. It usually has at least two levels (conditions).",
          highlight: "Example: Audience vs. No Audience"
        },
        {
          heading: "Dependent Variable (DV)",
          text: "The variable the experimenter MEASURES. Any change in the DV should depend on the IV.",
          highlight: "Example: Number of balls in bucket (out of 20)"
        },
        {
          heading: "Operationalisation",
          text: "Clearly defining variables so they can be measured objectively. 'Performance' is vague; 'Score out of 20' is operationalised.",
          callout: "Always ask: How exactly is this measured?"
        }
      ]
    }
  },
  // Slide 4: Understanding Check
  {
    id: 4,
    type: 'check',
    title: 'Check Your Understanding',
    content: {
      questions: [
        { 
          id: 1, 
          scenario: "A study tests if Red Bull improves reaction time compared to water.",
          question: "What is the IV?",
          options: ["Reaction Speed", "Type of Drink", "Participants"],
          correct: 1
        },
        { 
          id: 2, 
          scenario: "Researchers measure aggression by counting punches thrown.",
          question: "Counting punches is an example of...",
          options: ["A Theory", "Operationalisation", "An Aim"],
          correct: 1
        },
        { 
          id: 3, 
          scenario: "Study: 'To see if age affects memory'.",
          question: "This statement is an...",
          options: ["Aim", "Hypothesis", "IV"],
          correct: 0
        },
        { 
          id: 4, 
          scenario: "Does noise affect sleep quality (rated 1-10)?",
          question: "What is the DV?",
          options: ["Noise Level", "Sleep Quality Rating", "Time of day"],
          correct: 1
        },
        { 
          id: 5, 
          scenario: "Null Hypothesis states...",
          question: "What relationship?",
          options: ["A strong relationship", "No relationship", "A positive one"],
          correct: 1
        }
      ]
    }
  },
  // Slide 5: Simulation (Minigame)
  {
    id: 5,
    type: 'simulation',
    title: 'Hypothesis Lab',
    content: {
      instructions: "Identify the IV, DV, and Hypothesis Type in real scenarios.",
      component: <HypothesisLab />
    }
  },
  // Slide 6: Simulation Review
  {
    id: 6,
    type: 'concept', // Using concept layout for review text
    title: 'Lab Review: Key Takeaways',
    content: {
      sections: [
        {
          heading: "Precision Matters",
          text: "In the lab, you saw that picking the right variable isn't just about the concept (e.g., 'Coffee') but the operationalisation ('2 Cups of Coffee').",
          icon: <Brain className="w-6 h-6 text-purple-400" />
        },
        {
          heading: "The Null Hypothesis",
          text: "Remember, for every Alternative Hypothesis (prediction of difference), there is a Null Hypothesis (prediction of NO difference) waiting to be accepted or rejected.",
          icon: <Activity className="w-6 h-6 text-green-400" />
        }
      ]
    }
  },
  // Slide 7: Methodology in Context
  {
    id: 7,
    type: 'context',
    title: 'Methodology in Context',
    content: {
      study: "The 'Light Touch' Experiment",
      researcher: "Willis & Hamm (1980) / Crusco & Wetzel (1984)",
      description: "A confederate served students in a canteen. For half, they lightly touched the student's hand when giving change. For the other half, no touch.",
      findings: "Students who were touched gave significantly higher 'likeability' ratings for the server than those not touched.",
      link: {
        iv: "Touch vs No Touch",
        dv: "Likeability Rating (Scale 1-7)",
        conclusion: "A small manipulation (IV) can have a measurable effect on social perception (DV)."
      }
    }
  },
  // Slide 8: Method Evaluation
  {
    id: 8,
    type: 'evaluation',
    title: 'Evaluating Hypotheses',
    content: {
      strengths: [
        { title: "Objectivity", text: "Hypotheses force researchers to be specific, reducing bias compared to 'fortune telling'." },
        { title: "Falsifiability", text: "A good hypothesis can be proven wrong. This is the hallmark of science (Popper)." }
      ],
      limitations: [
        { title: "Reductionism", text: " operationalising complex human behaviours (like 'love' or 'aggression') into numbers can lose meaning." },
        { title: "Rigidity", text: "Sticking to a hypothesis might make researchers miss unexpected findings." }
      ]
    }
  },
  // Slide 9: Exam Application
  {
    id: 9,
    type: 'exam',
    title: 'Exam Practice',
    content: {
      scenario: "A researcher uses a confederate to serve students in a college canteen. When she gives change, for half of the students she lightly touches their hand; for the other half she does not.",
      question: "Identify the Independent and Dependent Variables in this study. Write your answers as operationalised variables. [2 marks]",
      modelAnswer: [
        "IV: Whether the student was touched lightly on the hand or not touched by the server.",
        "DV: The likeability rating given by the student on a scale of 1 (extremely dislikes) to 7 (extremely likes)."
      ],
      tips: ["Don't just say 'Touch' or 'Rating'. Be specific!", "Mention the scale (1-7) for full marks on the DV."]
    }
  }
]

// --- Components ---

const IntroSlide = ({ content, onStart }: { content: any, onStart: () => void }) => (
  <div className="flex flex-col items-center justify-center h-full text-center p-12 space-y-8 animate-fadeIn">
    <div className="w-32 h-32 bg-pink-500/20 rounded-full flex items-center justify-center mb-4 ring-4 ring-pink-500/30">
      <FlaskConical className="w-16 h-16 text-pink-400" />
    </div>
    <div className="space-y-4 max-w-2xl">
      <h3 className="text-2xl text-pink-300 font-medium">{content.subtitle}</h3>
      <h1 className="text-5xl font-black text-white tracking-tight">{content.concept}</h1>
      <p className="text-xl text-gray-400 leading-relaxed">{content.objective}</p>
    </div>
    <button 
      onClick={onStart}
      className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white rounded-full font-bold text-xl transition-all shadow-lg hover:shadow-pink-500/25"
    >
      Start Lesson <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
    </button>
  </div>
)

const DoNowSlide = ({ content }: { content: any }) => {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showResult, setShowResult] = useState(false)

  const score = Object.keys(answers).reduce((acc, id) => {
    return acc + (answers[Number(id)] === content.questions[Number(id)-1].correct ? 1 : 0)
  }, 0)

  return (
    <div className="h-full flex flex-col p-8">
      <div className="mb-6 flex justify-between items-end border-b border-gray-700 pb-4">
        <div>
           <span className="text-pink-400 font-bold tracking-wider text-sm uppercase">Activation</span>
           <h2 className="text-3xl font-bold text-white">Knowledge Retrieval</h2>
        </div>
        {showResult && (
          <div className="text-3xl font-black text-green-400 animate-bounce">
            {score} / {content.questions.length}
          </div>
        )}
      </div>
      
      <div className="flex-1 overflow-y-auto grid grid-cols-1 gap-4">
        {content.questions.map((q: any) => (
          <div key={q.id} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors">
            <h3 className="text-lg text-white font-medium mb-4 flex gap-3">
              <span className="text-pink-500 font-bold">{q.id}.</span> {q.text}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {q.options.map((opt: string, idx: number) => (
                <button
                  key={idx}
                  disabled={showResult}
                  onClick={() => setAnswers({...answers, [q.id]: idx})}
                  className={`p-3 rounded-lg text-sm font-medium text-left transition-all ${
                    showResult 
                      ? idx === q.correct 
                        ? 'bg-green-500/20 text-green-300 border border-green-500/50'
                        : answers[q.id] === idx ? 'bg-red-500/20 text-red-300 border border-red-500/50' : 'opacity-50 text-gray-500' 
                      : answers[q.id] === idx 
                        ? 'bg-blue-600 text-white shadow-lg' 
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
      
      {!showResult && Object.keys(answers).length >= 3 && (
        <div className="mt-6 flex justify-center">
            <button
                onClick={() => setShowResult(true)}
                className="px-8 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg shadow-lg"
            >
                Check Answers
            </button>
        </div>
      )}
    </div>
  )
}

const ConceptSlide = ({ content }: { content: any }) => (
  <div className="h-full flex items-center justify-center p-8">
    <div className="grid grid-cols-1 gap-8 max-w-5xl w-full">
      {content.sections.map((section: any, idx: number) => (
        <div key={idx} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-pink-500/20 shadow-xl hover:shadow-pink-500/10 transition-all">
          <div className="flex items-start gap-6">
            <div className="bg-slate-900 p-4 rounded-xl shadow-inner">
               {section.icon || <Star className={`w-8 h-8 text-yellow-400`} />}
            </div>
            <div className="space-y-3 flex-1">
              <h3 className="text-2xl font-bold text-white">{section.heading}</h3>
              <p className="text-lg text-gray-300 leading-relaxed">{section.text}</p>
              
              {section.example && (
                <div className="mt-4 p-4 bg-green-900/20 border-l-4 border-green-500 rounded-r-lg">
                  <span className="text-green-400 font-bold uppercase text-xs tracking-wider block mb-1">Example</span>
                  <p className="text-green-100 italic">"{section.example}"</p>
                </div>
              )}
               {section.highlight && (
                <div className="mt-4 p-4 bg-purple-900/20 border-l-4 border-purple-500 rounded-r-lg">
                  <p className="text-purple-100 font-medium">{section.highlight}</p>
                </div>
              )}
               {section.callout && (
                <div className="mt-4 p-4 bg-yellow-900/20 border-l-4 border-yellow-500 rounded-r-lg">
                    <span className="text-yellow-400 font-bold uppercase text-xs tracking-wider block mb-1">Top Tip</span>
                  <p className="text-yellow-100 font-medium">{section.callout}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const CheckSlide = ({ content }: { content: any }) => {
    // Reuse DoNow style but tailored for "Check"
    const [answers, setAnswers] = useState<Record<number, number>>({})
    const [showResult, setShowResult] = useState(false)
    const shuffledQuestions = useMemo(() => [...content.questions].sort(() => Math.random() - 0.5), [content])

    return (
        <div className="h-full flex flex-col p-8">
            <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-4">Understanding Check</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-y-auto pb-20">
                {shuffledQuestions.map((q: any) => (
                    <div key={q.id} className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                        <div className="mb-4">
                            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Scenario</span>
                            <p className="text-gray-300 italic mb-2">"{q.scenario}"</p>
                            <p className="text-white font-bold text-lg">{q.question}</p>
                        </div>
                        <div className="space-y-2">
                             {q.options.map((opt: string, idx: number) => (
                                <button
                                    key={idx}
                                    disabled={showResult}
                                    onClick={() => setAnswers({...answers, [q.id]: idx})}
                                    className={`w-full p-3 rounded-lg text-left font-medium transition-all flex justify-between items-center ${
                                        showResult 
                                        ? idx === q.correct 
                                            ? 'bg-green-600 text-white' 
                                            : answers[q.id] === idx ? 'bg-red-600 text-white' : 'bg-slate-700 text-gray-500'
                                        : answers[q.id] === idx ? 'bg-pink-600 text-white' : 'bg-slate-700 hover:bg-slate-600 text-gray-300'
                                    }`}
                                >
                                    {opt}
                                    {showResult && idx === q.correct && <CheckCircle className="w-5 h-5" />}
                                </button>
                             ))}
                        </div>
                    </div>
                ))}
            </div>
             {!showResult && Object.keys(answers).length === content.questions.length && (
                <div className="absolute bottom-8 right-8 animate-fadeIn">
                    <button onClick={() => setShowResult(true)} className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl shadow-2xl scale-110">
                        Reveal Answers
                    </button>
                </div>
             )}
        </div>
    )
}

const ContextSlide = ({ content }: { content: any }) => (
    <div className="h-full p-8 flex items-center">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div className="space-y-6">
                <div className="inline-block px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm font-bold uppercase tracking-wider">
                    Classic Study
                </div>
                <h2 className="text-4xl font-black text-white leading-tight">{content.study}</h2>
                <h3 className="text-xl text-gray-400">{content.researcher}</h3>
                <div className="prose prose-invert">
                    <p className="text-lg leading-relaxed text-gray-300">{content.description}</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-green-500">
                    <h4 className="text-green-400 font-bold uppercase mb-2">Findings</h4>
                    <p className="text-white text-lg">{content.findings}</p>
                </div>
             </div>
             
             <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 shadow-2xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl" />
                <h3 className="text-xl font-bold text-white mb-6 relative z-10">Deconstructing the Method</h3>
                
                <div className="space-y-4 relative z-10">
                    <div>
                        <span className="text-xs font-bold text-slate-500 uppercase">Independent Variable (IV)</span>
                        <div className="bg-slate-800 p-3 rounded-lg text-pink-300 font-mono mt-1 border border-slate-700">
                            {content.link.iv}
                        </div>
                    </div>
                    <div>
                        <span className="text-xs font-bold text-slate-500 uppercase">Dependent Variable (DV)</span>
                        <div className="bg-slate-800 p-3 rounded-lg text-blue-300 font-mono mt-1 border border-slate-700">
                            {content.link.dv}
                        </div>
                    </div>
                    <div>
                        <span className="text-xs font-bold text-slate-500 uppercase">Conclusion</span>
                        <p className="text-gray-300 mt-2 text-sm">{content.link.conclusion}</p>
                    </div>
                </div>
             </div>
        </div>
    </div>
)

const EvaluationSlide = ({ content }: { content: any }) => (
    <div className="h-full p-8 overflow-y-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">{content.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Strengths */}
            <div className="space-y-6">
                <h3 className="flex items-center gap-2 text-xl font-bold text-green-400 border-b border-green-500/30 pb-2">
                    <Award className="w-6 h-6" /> Strengths
                </h3>
                {content.strengths.map((s: any, idx: number) => (
                    <div key={idx} className="bg-green-900/10 border border-green-500/20 p-6 rounded-xl">
                        <h4 className="font-bold text-green-300 mb-2">{s.title}</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{s.text}</p>
                    </div>
                ))}
            </div>

            {/* Limitations */}
            <div className="space-y-6">
                <h3 className="flex items-center gap-2 text-xl font-bold text-red-400 border-b border-red-500/30 pb-2">
                    <AlertTriangleIcon className="w-6 h-6" /> Limitations
                </h3>
                {content.limitations.map((l: any, idx: number) => (
                    <div key={idx} className="bg-red-900/10 border border-red-500/20 p-6 rounded-xl">
                        <h4 className="font-bold text-red-300 mb-2">{l.title}</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{l.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
)

const ExamSlide = ({ content }: { content: any }) => {
    const [reveal, setReveal] = useState(false)

    return (
        <div className="h-full p-8 flex flex-col items-center justify-center max-w-5xl mx-auto">
             <div className="bg-white p-8 rounded-xl shadow-2xl w-full text-slate-900 border-t-8 border-pink-600 mb-8">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">Exam Practice Question</span>
                <p className="text-lg text-slate-600 italic mb-6 border-l-4 border-slate-200 pl-4">{content.scenario}</p>
                <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold text-slate-900">{content.question}</h3>
                    <div className="bg-slate-100 px-4 py-2 rounded font-mono font-bold text-slate-500">2 Marks</div>
                </div>
             </div>
             
             {!reveal ? (
                 <button 
                    onClick={() => setReveal(true)}
                    className="flex items-center gap-2 px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-bold transition-all"
                 >
                    Reveal Model Answer <ChevronRight className="w-5 h-5" />
                 </button>
             ) : (
                 <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
                     <div className="bg-green-900/20 border border-green-500/30 p-6 rounded-xl">
                        <h4 className="text-green-400 font-bold mb-4 flex items-center gap-2"><CheckCircle className="w-5 h-5"/> Model Answer</h4>
                        <div className="space-y-4">
                            {content.modelAnswer.map((line: string, i: number) => (
                                <p key={i} className="text-white border-l-2 border-green-500 pl-3">{line}</p>
                            ))}
                        </div>
                     </div>
                     <div className="bg-yellow-900/20 border border-yellow-500/30 p-6 rounded-xl">
                        <h4 className="text-yellow-400 font-bold mb-4 flex items-center gap-2"><Zap className="w-5 h-5"/> Examiner Tips</h4>
                        <ul className="space-y-2">
                             {content.tips.map((tip: string, i: number) => (
                                <li key={i} className="text-yellow-200 text-sm flex items-start gap-2">
                                    <span className="text-yellow-500 mt-1">•</span>
                                    {tip}
                                </li>
                            ))}
                        </ul>
                     </div>
                 </div>
             )}
        </div>
    )
}

// --- Main Layout ---

export default function Lesson1({ onBack }: { presentationMode?: boolean, setPresentationMode?: any, onBack: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slide = slides[currentSlide]

  const nextSlide = () => setCurrentSlide(c => Math.min(slides.length - 1, c + 1))
  const prevSlide = () => setCurrentSlide(c => Math.max(0, c - 1))

  return (
    <div className="w-full h-full flex flex-col bg-slate-950 text-white overflow-hidden relative">
      {/* Top Bar */}
      <div className="h-16 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-900 z-10">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="font-bold text-lg">{slide.title}</h1>
            <p className="text-xs text-slate-500 uppercase tracking-widest">Lesson 1 &bull; Slide {currentSlide} / {slides.length - 1}</p>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-pink-600 transition-all duration-300" style={{ width: `${(currentSlide / (slides.length - 1)) * 100}%` }} />

        <div className="flex gap-2">
           <button onClick={prevSlide} disabled={currentSlide === 0} className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-50">
             <ChevronLeft className="w-5 h-5" />
           </button>
           <button onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="p-2 rounded-lg bg-pink-600 hover:bg-pink-500 disabled:opacity-50 text-white">
             <ChevronRight className="w-5 h-5" />
           </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950">
         {slide.type === 'intro' && <IntroSlide content={slide.content} onStart={nextSlide} />}
         {slide.type === 'donow' && <DoNowSlide content={slide.content} />}
         {slide.type === 'concept' && <ConceptSlide content={slide.content} />}
         {slide.type === 'check' && <CheckSlide content={slide.content} />}
         {slide.type === 'simulation' && (
             <div className="h-full p-6">
                 <div className="h-full w-full">{slide.content.component}</div>
             </div>
         )}
         {slide.type === 'context' && <ContextSlide content={slide.content} />}
         {slide.type === 'evaluation' && <EvaluationSlide content={slide.content} />}
         {slide.type === 'exam' && <ExamSlide content={slide.content} />}
      </div>
    </div>
  )
}
