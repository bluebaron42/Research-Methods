import { useState } from 'react'
import { CheckSquare, List, MessageCircle, CheckCircle, XCircle } from 'lucide-react'

interface Props {
  isPresenting?: boolean
}

export default function QuestionTypesTeach({ isPresenting }: Props) {
  const [activeType, setActiveType] = useState<'open' | 'closed' | null>(null)
  const [revealedExamples, setRevealedExamples] = useState(0)

  const openQuestions = {
    definition: "Questions that allow participants to answer in their own words without restrictions",
    examples: [
      "How did you feel during the experiment?",
      "Describe your experience of...",
      "What are your thoughts on..."
    ],
    strengths: [
      "Rich, detailed qualitative data",
      "Can reveal unexpected insights",
      "Participants express true feelings"
    ],
    limitations: [
      "Hard to analyse and compare",
      "Time-consuming to process",
      "May get irrelevant information"
    ]
  }

  const closedQuestions = {
    definition: "Questions with fixed response options - participants choose from given answers",
    types: [
      { name: "Yes/No", example: "Do you exercise regularly? Yes / No" },
      { name: "Multiple Choice", example: "How often do you exercise? Daily / Weekly / Monthly / Never" },
      { name: "Likert Scale", example: "I enjoy exercise: Strongly Agree → Strongly Disagree" },
      { name: "Rating Scale", example: "Rate your fitness 1-10" }
    ],
    strengths: [
      "Easy to analyse statistically",
      "Quick to complete",
      "Easy to compare responses"
    ],
    limitations: [
      "May force unnatural responses",
      "Lacks depth and detail",
      "Researcher decides options"
    ]
  }

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-rose-400 mb-2">Open vs Closed Questions</h2>
          <p className="text-gray-400">Two fundamental types of questions in self-report methods</p>
        </div>

        {/* Type Selection */}
        <div className="flex justify-center gap-6 mb-6">
          <button
            onClick={() => {
              setActiveType('open')
              setRevealedExamples(0)
            }}
            className={`flex items-center gap-3 px-8 py-4 rounded-xl transition-all duration-300
              ${activeType === 'open' 
                ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/20 border border-purple-500/50 text-purple-400' 
                : 'bg-gray-800/50 border border-gray-700 text-gray-400 hover:border-purple-500/30'
              }`}
          >
            <MessageCircle className="w-6 h-6" />
            <div className="text-left">
              <span className="font-bold">Open Questions</span>
              <p className="text-xs opacity-70">Free response</p>
            </div>
          </button>
          
          <button
            onClick={() => {
              setActiveType('closed')
              setRevealedExamples(0)
            }}
            className={`flex items-center gap-3 px-8 py-4 rounded-xl transition-all duration-300
              ${activeType === 'closed' 
                ? 'bg-gradient-to-r from-blue-500/30 to-cyan-500/20 border border-blue-500/50 text-blue-400' 
                : 'bg-gray-800/50 border border-gray-700 text-gray-400 hover:border-blue-500/30'
              }`}
          >
            <CheckSquare className="w-6 h-6" />
            <div className="text-left">
              <span className="font-bold">Closed Questions</span>
              <p className="text-xs opacity-70">Fixed options</p>
            </div>
          </button>
        </div>

        {/* Content Area */}
        {activeType === 'open' && (
          <div className="space-y-4 animate-fade-in">
            {/* Definition */}
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-xl p-5 border border-purple-500/30">
              <p className="text-lg text-purple-300">
                <MessageCircle className="w-5 h-5 inline mr-2" />
                {openQuestions.definition}
              </p>
            </div>

            {/* Examples */}
            <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
              <h3 className="text-lg font-bold text-amber-400 mb-3">📝 Examples (Click to reveal)</h3>
              <div className="space-y-2">
                {openQuestions.examples.map((example, idx) => {
                  const isRevealed = revealedExamples > idx
                  return (
                    <div
                      key={idx}
                      onClick={() => !isRevealed && setRevealedExamples(idx + 1)}
                      className={`p-3 rounded-lg transition-all duration-300 cursor-pointer
                        ${isRevealed 
                          ? 'bg-purple-500/10 border border-purple-500/20' 
                          : 'bg-gray-800 hover:bg-gray-700'
                        }`}
                    >
                      <p className={`${isRevealed ? 'text-gray-200 italic' : 'text-gray-500'}`}>
                        {isRevealed ? `"${example}"` : `Example ${idx + 1} - Click to reveal`}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Strengths & Limitations */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                <h4 className="text-green-400 font-bold mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> Strengths
                </h4>
                <ul className="space-y-1">
                  {openQuestions.strengths.map((s, i) => (
                    <li key={i} className="text-sm text-gray-300">✓ {s}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2">
                  <XCircle className="w-4 h-4" /> Limitations
                </h4>
                <ul className="space-y-1">
                  {openQuestions.limitations.map((l, i) => (
                    <li key={i} className="text-sm text-gray-300">✗ {l}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeType === 'closed' && (
          <div className="space-y-4 animate-fade-in">
            {/* Definition */}
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-xl p-5 border border-blue-500/30">
              <p className="text-lg text-blue-300">
                <CheckSquare className="w-5 h-5 inline mr-2" />
                {closedQuestions.definition}
              </p>
            </div>

            {/* Types of Closed Questions */}
            <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
              <h3 className="text-lg font-bold text-amber-400 mb-3">📋 Types of Closed Questions</h3>
              <div className="grid grid-cols-2 gap-3">
                {closedQuestions.types.map((type, idx) => {
                  const isRevealed = revealedExamples > idx
                  return (
                    <div
                      key={idx}
                      onClick={() => !isRevealed && setRevealedExamples(idx + 1)}
                      className={`p-3 rounded-lg transition-all duration-300 cursor-pointer
                        ${isRevealed 
                          ? 'bg-blue-500/10 border border-blue-500/20' 
                          : 'bg-gray-800 hover:bg-gray-700'
                        }`}
                    >
                      <p className={`font-bold text-sm ${isRevealed ? 'text-blue-400' : 'text-gray-500'}`}>
                        {isRevealed ? type.name : `Type ${idx + 1}`}
                      </p>
                      {isRevealed && (
                        <p className="text-xs text-gray-400 mt-1 italic">e.g., {type.example}</p>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Strengths & Limitations */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                <h4 className="text-green-400 font-bold mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> Strengths
                </h4>
                <ul className="space-y-1">
                  {closedQuestions.strengths.map((s, i) => (
                    <li key={i} className="text-sm text-gray-300">✓ {s}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2">
                  <XCircle className="w-4 h-4" /> Limitations
                </h4>
                <ul className="space-y-1">
                  {closedQuestions.limitations.map((l, i) => (
                    <li key={i} className="text-sm text-gray-300">✗ {l}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Key Comparison */}
        <div className="mt-6 bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="flex items-center justify-center gap-8">
            <div className="text-center">
              <span className="text-purple-400 font-bold">Open</span>
              <p className="text-xs text-gray-500">Qualitative data</p>
            </div>
            <div className="text-gray-500">vs</div>
            <div className="text-center">
              <span className="text-blue-400 font-bold">Closed</span>
              <p className="text-xs text-gray-500">Quantitative data</p>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-4 flex justify-center gap-2">
          {activeType && [...Array(activeType === 'open' ? 3 : 4)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                revealedExamples > i ? 'bg-rose-400' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
