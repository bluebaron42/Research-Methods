import { useState } from 'react'
import { EyeOff, AlertTriangle, CheckCircle, MessageSquare, ArrowRight, Info } from 'lucide-react'

interface Props {
  isPresenting?: boolean
}

export default function DeceptionTeach({ isPresenting }: Props) {
  const [showJustification, setShowJustification] = useState(false)
  const [showSolution, setShowSolution] = useState(false)
  const [activeExample, setActiveExample] = useState<number | null>(null)

  const examples = [
    {
      study: "Milgram's Obedience Study",
      deception: "Participants believed they were giving real electric shocks",
      reason: "To test genuine obedience without participants pretending",
      icon: "⚡"
    },
    {
      study: "Asch's Conformity Study",
      deception: "Other 'participants' were confederates giving wrong answers",
      reason: "To measure real conformity pressure",
      icon: "👥"
    },
    {
      study: "Drug Placebo Trials",
      deception: "Some participants receive fake medication",
      reason: "To test drug effectiveness without expectation bias",
      icon: "💊"
    }
  ]

  const debriefSteps = [
    "Reveal the true aims of the study",
    "Explain why deception was necessary",
    "Allow participants to withdraw their data",
    "Check for any distress and provide support",
    "Answer any questions participants have"
  ]

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-rose-400 mb-2">Deception</h2>
          <p className="text-gray-400">A controversial but sometimes necessary aspect of research</p>
        </div>

        {/* Definition Card */}
        <div className="bg-gradient-to-r from-rose-500/20 to-pink-500/10 rounded-xl p-6 border border-rose-500/30 mb-6">
          <div className="flex items-center gap-4">
            <EyeOff className="w-10 h-10 text-rose-400" />
            <div>
              <p className="text-xl text-gray-200">
                Deliberately <span className="text-rose-400 font-bold">misleading or withholding information</span> from 
                participants at any stage of the investigation.
              </p>
              <p className="text-gray-400 mt-2">
                <Info className="w-4 h-4 inline mr-1" />
                Linked to informed consent - deceived participants cannot truly consent.
              </p>
            </div>
          </div>
        </div>

        {/* Examples Section */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-amber-400 mb-3">🔬 Classic Examples of Deception in Research</h3>
          <div className="grid grid-cols-3 gap-4">
            {examples.map((example, idx) => (
              <div
                key={idx}
                onClick={() => setActiveExample(activeExample === idx ? null : idx)}
                className={`rounded-xl p-4 border transition-all duration-300 cursor-pointer
                  ${activeExample === idx 
                    ? 'bg-gradient-to-br from-purple-500/20 to-indigo-500/10 border-purple-500/50' 
                    : 'bg-gray-800/50 border-gray-700 hover:border-purple-500/30'
                  }`}
              >
                <div className="text-center mb-2">
                  <span className="text-2xl">{example.icon}</span>
                  <h4 className="font-bold text-white text-sm mt-1">{example.study}</h4>
                </div>
                
                {activeExample === idx ? (
                  <div className="space-y-2 animate-fade-in">
                    <p className="text-sm text-purple-300">
                      <span className="font-bold">Deception:</span> {example.deception}
                    </p>
                    <p className="text-sm text-gray-400">
                      <span className="font-bold">Why:</span> {example.reason}
                    </p>
                  </div>
                ) : (
                  <p className="text-xs text-gray-500 text-center">Click to reveal</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* When Justified */}
          <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/10 rounded-xl p-5 border border-amber-500/30">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-amber-400" />
                <h3 className="text-lg font-bold text-amber-400">⚠️ When It May Be Justified</h3>
              </div>
              <button
                onClick={() => setShowJustification(!showJustification)}
                className="text-xs bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 px-3 py-1 rounded-full transition-colors"
              >
                {showJustification ? 'Hide' : 'Reveal'}
              </button>
            </div>
            
            {showJustification ? (
              <div className="space-y-3 animate-fade-in">
                <p className="text-gray-300">
                  When it <span className="text-amber-400 font-bold">doesn't cause undue distress</span> and is 
                  essential for the validity of the research.
                </p>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <p className="text-sm text-gray-400">
                    <span className="text-amber-400 font-bold">Example:</span> Drug trials - knowing about placebos 
                    would affect the validity of results through expectation effects.
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-sm italic">Click above to learn when deception may be acceptable...</p>
            )}
          </div>

          {/* Solution - Debrief */}
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-xl p-5 border border-green-500/30">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <h3 className="text-lg font-bold text-green-400">✓ The Solution: Full Debrief</h3>
              </div>
              <button
                onClick={() => setShowSolution(!showSolution)}
                className="text-xs bg-green-500/20 hover:bg-green-500/30 text-green-400 px-3 py-1 rounded-full transition-colors"
              >
                {showSolution ? 'Hide Steps' : 'Show Steps'}
              </button>
            </div>
            
            {showSolution ? (
              <div className="space-y-2 animate-fade-in">
                {debriefSteps.map((step, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-2 text-sm"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <span className="w-5 h-5 rounded-full bg-green-500/30 text-green-400 text-xs flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-gray-300">{step}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-sm italic">Click to reveal 5 essential debrief steps...</p>
            )}
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="mt-6 bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-6 h-6 text-cyan-400" />
            <p className="text-gray-300">
              <span className="text-cyan-400 font-bold">Key Point:</span> Deception should only be used when 
              absolutely necessary and must always be followed by a thorough debrief.
            </p>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-4 flex justify-center gap-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                (i === 0) || 
                (i === 1 && activeExample !== null) || 
                (i === 2 && showJustification) || 
                (i === 3 && showSolution)
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
