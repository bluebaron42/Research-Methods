import { useState } from 'react'
import { User, CheckCircle, XCircle, BookOpen, Brain } from 'lucide-react'

interface Props {
  isPresenting?: boolean
}

export default function CaseStudyTeach({ isPresenting }: Props) {
  const [revealedFeatures, setRevealedFeatures] = useState(0)
  const [showStrengths, setShowStrengths] = useState(false)
  const [showLimitations, setShowLimitations] = useState(false)
  const [activeExample, setActiveExample] = useState<number | null>(null)

  const features = [
    {
      title: "In-depth",
      description: "Detailed, comprehensive investigation of a single case",
      icon: "🔍"
    },
    {
      title: "Unique individuals",
      description: "Often studies unusual or rare cases not found elsewhere",
      icon: "⭐"
    },
    {
      title: "Multiple methods",
      description: "Combines various techniques: interviews, observations, tests",
      icon: "📊"
    },
    {
      title: "Longitudinal",
      description: "Often follows the individual over a period of time",
      icon: "📅"
    }
  ]

  const examples = [
    {
      name: "HM (Henry Molaison)",
      topic: "Memory",
      description: "Lost ability to form new memories after brain surgery - revealed importance of hippocampus",
      contribution: "Understanding of different memory systems"
    },
    {
      name: "Phineas Gage",
      topic: "Brain Localisation",
      description: "Personality changed after iron rod went through his frontal lobe",
      contribution: "Frontal lobe's role in personality and decision-making"
    },
    {
      name: "Little Hans",
      topic: "Psychodynamic",
      description: "5-year-old with phobia of horses - studied by Freud",
      contribution: "Evidence for Oedipus complex and unconscious fears"
    }
  ]

  const strengths = [
    "Rich, detailed qualitative data",
    "Can study unique/unusual cases",
    "Generates hypotheses for future research",
    "High ecological validity - real-life situations"
  ]

  const limitations = [
    "Cannot generalise to wider population",
    "Researcher bias in interpretation",
    "Relies on participant's memory and honesty",
    "Time-consuming and expensive"
  ]

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-rose-400 mb-2">Case Studies</h2>
          <p className="text-gray-400">In-depth investigation of a single individual, group, or event</p>
        </div>

        {/* Definition Card */}
        <div className="bg-gradient-to-r from-rose-500/20 to-pink-500/10 rounded-xl p-6 border border-rose-500/30 mb-6">
          <div className="flex items-center gap-4">
            <User className="w-10 h-10 text-rose-400" />
            <p className="text-xl text-gray-200">
              A <span className="text-rose-400 font-bold">detailed investigation</span> of a single individual, 
              group, or event using <span className="text-rose-400 font-bold">multiple research methods</span>.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-amber-400">📋 Key Features</h3>
            <span className="text-sm text-gray-400">Click to reveal ({revealedFeatures}/4)</span>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {features.map((feature, idx) => {
              const isRevealed = revealedFeatures > idx
              return (
                <div
                  key={idx}
                  onClick={() => !isRevealed && setRevealedFeatures(idx + 1)}
                  className={`rounded-xl p-4 border transition-all duration-300 cursor-pointer text-center
                    ${isRevealed 
                      ? 'bg-gradient-to-br from-amber-500/20 to-orange-500/10 border-amber-500/30' 
                      : 'bg-gray-800/50 border-gray-700 hover:border-amber-500/30'
                    }`}
                >
                  <span className={`text-2xl ${!isRevealed && 'opacity-30'}`}>{feature.icon}</span>
                  <h4 className={`font-bold text-sm mt-2 ${isRevealed ? 'text-amber-400' : 'text-gray-500'}`}>
                    {isRevealed ? feature.title : '???'}
                  </h4>
                  {isRevealed && (
                    <p className="text-xs text-gray-400 mt-1">{feature.description}</p>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Famous Examples */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2">
            <Brain className="w-5 h-5" /> Famous Case Studies in Psychology
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {examples.map((example, idx) => (
              <div
                key={idx}
                onClick={() => setActiveExample(activeExample === idx ? null : idx)}
                className={`rounded-xl p-4 border transition-all duration-300 cursor-pointer
                  ${activeExample === idx 
                    ? 'bg-gradient-to-br from-purple-500/20 to-indigo-500/10 border-purple-500/30' 
                    : 'bg-gray-800/50 border-gray-700 hover:border-purple-500/30'
                  }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <User className={`w-5 h-5 ${activeExample === idx ? 'text-purple-400' : 'text-gray-500'}`} />
                  <span className={`font-bold ${activeExample === idx ? 'text-purple-400' : 'text-white'}`}>
                    {example.name}
                  </span>
                </div>
                <span className="text-xs text-gray-500">{example.topic}</span>
                
                {activeExample === idx && (
                  <div className="mt-3 animate-fade-in">
                    <p className="text-sm text-gray-300">{example.description}</p>
                    <p className="text-xs text-purple-400 mt-2">
                      <span className="font-bold">Contribution:</span> {example.contribution}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Strengths and Limitations */}
        <div className="grid grid-cols-2 gap-4">
          {/* Strengths */}
          <div 
            onClick={() => setShowStrengths(!showStrengths)}
            className={`rounded-xl p-4 border transition-all duration-300 cursor-pointer
              ${showStrengths 
                ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/10 border-green-500/30' 
                : 'bg-gray-800/50 border-gray-700 hover:border-green-500/30'
              }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-400">✓ Strengths</h3>
            </div>
            {showStrengths ? (
              <ul className="space-y-1 animate-fade-in">
                {strengths.map((s, i) => (
                  <li key={i} className="text-sm text-gray-300">• {s}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-sm">Click to reveal...</p>
            )}
          </div>

          {/* Limitations */}
          <div 
            onClick={() => setShowLimitations(!showLimitations)}
            className={`rounded-xl p-4 border transition-all duration-300 cursor-pointer
              ${showLimitations 
                ? 'bg-gradient-to-br from-red-500/20 to-rose-500/10 border-red-500/30' 
                : 'bg-gray-800/50 border-gray-700 hover:border-red-500/30'
              }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <XCircle className="w-5 h-5 text-red-400" />
              <h3 className="text-lg font-bold text-red-400">✗ Limitations</h3>
            </div>
            {showLimitations ? (
              <ul className="space-y-1 animate-fade-in">
                {limitations.map((l, i) => (
                  <li key={i} className="text-sm text-gray-300">• {l}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-sm">Click to reveal...</p>
            )}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-6 flex justify-center gap-2">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                (i < 4 && revealedFeatures > i) || 
                (i === 4 && showStrengths) || 
                (i === 5 && showLimitations)
                  ? 'bg-rose-400' 
                  : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
