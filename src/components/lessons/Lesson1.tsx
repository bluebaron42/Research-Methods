import { useState } from 'react'
import { ChevronLeft, ChevronRight, Target, Lightbulb, CheckCircle } from 'lucide-react'

// Slide data for Lesson 1: Aims & Hypotheses
const slides = [
  {
    id: 1,
    title: 'What is an Aim?',
    gcse: {
      content: 'An aim is a general statement explaining the purpose of a study. It tells us what the researcher wants to find out.',
      points: [
        'States what the study is about',
        'Written as a statement, not a question',
        'Broad overview of the research goal'
      ],
      example: 'Aim: To investigate whether background music affects concentration.'
    },
    alevel: {
      content: 'An aim provides a broad statement of intent that outlines the general purpose of an investigation. It establishes the research focus without making specific predictions about outcomes.',
      points: [
        'Provides direction for the research methodology',
        'Identifies the key variables under investigation',
        'Distinguishes exploratory from confirmatory research',
        'Forms the basis for hypothesis development'
      ],
      example: 'Aim: To investigate the relationship between cognitive load and working memory performance in educational settings.'
    }
  },
  {
    id: 2,
    title: 'What is a Hypothesis?',
    gcse: {
      content: 'A hypothesis is a testable prediction about what will happen in a study. It is more specific than an aim.',
      points: [
        'Makes a clear prediction',
        'Can be tested through research',
        'States the expected relationship between variables'
      ],
      example: 'Hypothesis: Students who listen to music while studying will remember fewer words than students who study in silence.'
    },
    alevel: {
      content: 'A hypothesis is a precise, testable statement predicting the relationship between variables. It must be falsifiable - capable of being proven wrong through empirical investigation.',
      points: [
        'Derived from theory or previous research',
        'Must be operationalised (variables clearly defined)',
        'Enables statistical testing of predictions',
        'Central to the hypothetico-deductive method'
      ],
      example: 'Hypothesis: Participants exposed to 70dB background noise will score significantly lower on a digit span task (M < 6.5) compared to those in silent conditions.'
    }
  },
  {
    id: 3,
    title: 'Alternative Hypothesis',
    gcse: {
      content: 'The alternative hypothesis states that there WILL be a difference or relationship between variables. This is what the researcher expects to find.',
      points: [
        'Predicts a difference or relationship exists',
        'Also called the experimental hypothesis',
        'What the researcher hopes to support'
      ],
      example: 'There will be a difference in test scores between students who revise with music and those who revise in silence.'
    },
    alevel: {
      content: 'The alternative hypothesis (H₁) states that an effect, difference, or relationship exists. It can be directional (one-tailed) or non-directional (two-tailed) depending on the specificity of the prediction.',
      points: [
        'Directional: Specifies the direction of effect (e.g., "higher", "lower")',
        'Non-directional: Predicts an effect without specifying direction',
        'Choice depends on existing evidence and theoretical basis',
        'Affects the critical region in statistical testing'
      ],
      example: 'Directional: Participants in the high-stress condition will recall fewer words than those in the low-stress condition.\n\nNon-directional: There will be a significant difference in word recall between high-stress and low-stress conditions.'
    }
  },
  {
    id: 4,
    title: 'Null Hypothesis',
    gcse: {
      content: 'The null hypothesis states that there will be NO difference or relationship between variables. Any difference found is due to chance.',
      points: [
        'Predicts no effect or relationship',
        'The "opposite" of the alternative hypothesis',
        'Results could be due to chance alone'
      ],
      example: 'There will be no difference in test scores between students who revise with music and those who revise in silence.'
    },
    alevel: {
      content: 'The null hypothesis (H₀) states that no significant effect, difference, or relationship exists in the population. It serves as the default assumption that statistical tests attempt to reject.',
      points: [
        'Assumes the independent variable has no effect',
        'Any observed difference attributed to sampling error',
        'Statistical tests calculate probability of results if H₀ is true',
        'Rejected if p < significance level (typically 0.05)'
      ],
      example: 'H₀: There is no significant difference in mean recall scores between high-stress (μ₁) and low-stress (μ₂) conditions: μ₁ = μ₂'
    }
  },
  {
    id: 5,
    title: 'Writing Good Hypotheses',
    gcse: {
      content: 'A good hypothesis must be clear, testable, and include the variables being studied. It should be specific enough that anyone could test it.',
      points: [
        'Include both variables (IV and DV)',
        'Be specific and measurable',
        'Use clear, precise language',
        'Avoid vague terms like "better" or "affected"'
      ],
      example: 'Poor: Music affects memory.\nGood: Participants who listen to classical music while memorising a word list will recall more words than participants who memorise in silence.'
    },
    alevel: {
      content: 'Operationalisation is essential for writing testable hypotheses. Variables must be defined in concrete, measurable terms that enable objective measurement and replication.',
      points: [
        'Operationalise IV: Define how it will be manipulated',
        'Operationalise DV: Define how it will be measured',
        'Include population if relevant to generalisability',
        'Consider effect size and practical significance'
      ],
      example: 'Operationalised hypothesis: Participants aged 18-25 who complete a Stroop task under time pressure (30 seconds) will make significantly more errors (measured as incorrect colour naming) than those without time pressure (self-paced), with a predicted medium effect size (d = 0.5).'
    }
  }
]

interface Lesson1Props {
  presentationMode: boolean
  setPresentationMode: (mode: boolean) => void
  onBack: () => void
}

export default function Lesson1({ presentationMode, setPresentationMode, onBack }: Lesson1Props) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [level, setLevel] = useState<'gcse' | 'alevel'>('gcse')
  
  const slide = slides[currentSlide]
  const content = slide[level]

  return (
    <div className="fixed inset-0 bg-black overflow-auto custom-scrollbar">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 flex flex-col">
        
        {/* Header */}
        <header className="flex-shrink-0 border-b border-pink-500/20 px-6 py-4">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={onBack}
                className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-gray-400 hover:text-white"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div>
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-pink-400" />
                  <span className="text-sm text-pink-400 font-semibold">Lesson 01</span>
                </div>
                <h1 className="text-xl font-bold text-white">Aims & Hypotheses</h1>
              </div>
            </div>
            
            {/* Level Toggle */}
            <div className="flex items-center gap-2 bg-slate-800/50 p-1 rounded-lg">
              <button
                onClick={() => setLevel('gcse')}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${
                  level === 'gcse'
                    ? 'bg-pink-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                GCSE
              </button>
              <button
                onClick={() => setLevel('alevel')}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${
                  level === 'alevel'
                    ? 'bg-purple-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                A-Level
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-4xl animate-fadeIn" key={`${currentSlide}-${level}`}>
            <div className="glass-panel rounded-xl p-8 border border-pink-500/20">
              
              {/* Slide Title */}
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-pink-400">{slide.id}.</span>
                {slide.title}
              </h2>
              
              {/* Content */}
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {content.content}
              </p>
              
              {/* Key Points */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-pink-400 uppercase tracking-wide mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Key Points
                </h3>
                <ul className="space-y-2">
                  {content.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <span className="text-pink-400 mt-1">→</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Example */}
              <div className="bg-slate-800/50 rounded-lg p-4 border-l-4 border-pink-500">
                <h3 className="text-sm font-semibold text-pink-400 uppercase tracking-wide mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  Example
                </h3>
                <p className="text-gray-300 whitespace-pre-line">{content.example}</p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer Navigation */}
        <footer className="flex-shrink-0 border-t border-pink-500/20 px-6 py-4">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <button
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              disabled={currentSlide === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                currentSlide === 0
                  ? 'bg-slate-700 text-gray-500 cursor-not-allowed'
                  : 'bg-pink-500 text-white hover:bg-pink-600'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>

            {/* Progress Dots */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">
                {currentSlide + 1} / {slides.length}
              </span>
              <div className="flex gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentSlide
                        ? 'w-8 bg-pink-500'
                        : 'w-2 bg-slate-600 hover:bg-slate-500'
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
              disabled={currentSlide === slides.length - 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                currentSlide === slides.length - 1
                  ? 'bg-slate-700 text-gray-500 cursor-not-allowed'
                  : 'bg-pink-500 text-white hover:bg-pink-600'
              }`}
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </footer>
      </div>
    </div>
  )
}
