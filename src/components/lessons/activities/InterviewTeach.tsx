import { useState } from 'react'
import { MessageSquare, CheckCircle, XCircle, Users, ClipboardList } from 'lucide-react'

interface Props {
  isPresenting?: boolean
}

export default function InterviewTeach({ isPresenting }: Props) {
  const [activeType, setActiveType] = useState<'structured' | 'unstructured' | null>(null)
  const [revealedPoints, setRevealedPoints] = useState(0)

  const structuredInfo = {
    definition: "Pre-determined, standardised questions asked in a set order",
    strengths: [
      { text: "Easy to replicate - high reliability", icon: "✓" },
      { text: "Easy to analyse and compare answers", icon: "✓" },
      { text: "Reduces interviewer bias", icon: "✓" }
    ],
    limitations: [
      { text: "Cannot explore unexpected answers", icon: "✗" },
      { text: "Lacks depth and detail", icon: "✗" }
    ],
    color: "blue"
  }

  const unstructuredInfo = {
    definition: "No set questions - conversation guided by interviewee's responses",
    strengths: [
      { text: "Rich, detailed data", icon: "✓" },
      { text: "Can explore new and unexpected topics", icon: "✓" },
      { text: "Better rapport with interviewee", icon: "✓" }
    ],
    limitations: [
      { text: "Hard to replicate - low reliability", icon: "✗" },
      { text: "Difficult to analyse and compare", icon: "✗" },
      { text: "Interviewer bias more likely", icon: "✗" }
    ],
    color: "purple"
  }

  const currentInfo = activeType === 'structured' ? structuredInfo : unstructuredInfo

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-rose-400 mb-2">Interviews</h2>
          <p className="text-gray-400">A face-to-face self-report method</p>
        </div>

        {/* Definition Card */}
        <div className="bg-gradient-to-r from-rose-500/20 to-pink-500/10 rounded-xl p-6 border border-rose-500/30 mb-6">
          <div className="flex items-center gap-4">
            <MessageSquare className="w-10 h-10 text-rose-400" />
            <div>
              <p className="text-xl text-gray-200">
                A <span className="text-rose-400 font-bold">real-time conversation</span> between researcher and 
                participant to gather data about thoughts, feelings, and experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Type Selection */}
        <div className="flex justify-center gap-6 mb-6">
          <button
            onClick={() => {
              setActiveType('structured')
              setRevealedPoints(0)
            }}
            className={`flex items-center gap-3 px-8 py-4 rounded-xl transition-all duration-300
              ${activeType === 'structured' 
                ? 'bg-gradient-to-r from-blue-500/30 to-cyan-500/20 border border-blue-500/50 text-blue-400' 
                : 'bg-gray-800/50 border border-gray-700 text-gray-400 hover:border-blue-500/30'
              }`}
          >
            <ClipboardList className="w-6 h-6" />
            <div className="text-left">
              <span className="font-bold">Structured</span>
              <p className="text-xs opacity-70">Fixed questions</p>
            </div>
          </button>
          
          <button
            onClick={() => {
              setActiveType('unstructured')
              setRevealedPoints(0)
            }}
            className={`flex items-center gap-3 px-8 py-4 rounded-xl transition-all duration-300
              ${activeType === 'unstructured' 
                ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/20 border border-purple-500/50 text-purple-400' 
                : 'bg-gray-800/50 border border-gray-700 text-gray-400 hover:border-purple-500/30'
              }`}
          >
            <MessageSquare className="w-6 h-6" />
            <div className="text-left">
              <span className="font-bold">Unstructured</span>
              <p className="text-xs opacity-70">Free-flowing</p>
            </div>
          </button>
        </div>

        {/* Content Area */}
        {activeType && (
          <div className={`rounded-xl p-6 border transition-all duration-300 animate-fade-in
            ${activeType === 'structured' 
              ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border-blue-500/30' 
              : 'bg-gradient-to-br from-purple-500/20 to-pink-500/10 border-purple-500/30'
            }`}
          >
            {/* Definition */}
            <div className="mb-4 pb-4 border-b border-gray-700">
              <p className={`text-lg ${activeType === 'structured' ? 'text-blue-300' : 'text-purple-300'}`}>
                <span className="font-bold">Definition:</span> {currentInfo.definition}
              </p>
            </div>

            {/* Strengths and Limitations */}
            <div className="grid grid-cols-2 gap-4">
              {/* Strengths */}
              <div>
                <h4 className="text-green-400 font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> Strengths
                </h4>
                <div className="space-y-2">
                  {currentInfo.strengths.map((item, idx) => {
                    const isRevealed = revealedPoints > idx
                    return (
                      <div
                        key={idx}
                        onClick={() => !isRevealed && setRevealedPoints(idx + 1)}
                        className={`p-2 rounded-lg transition-all duration-300 cursor-pointer
                          ${isRevealed 
                            ? 'bg-green-500/10' 
                            : 'bg-gray-800/50 hover:bg-gray-800'
                          }`}
                      >
                        <span className={`text-sm ${isRevealed ? 'text-gray-200' : 'text-gray-500'}`}>
                          {isRevealed ? `${item.icon} ${item.text}` : 'Click to reveal'}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Limitations */}
              <div>
                <h4 className="text-red-400 font-bold mb-3 flex items-center gap-2">
                  <XCircle className="w-4 h-4" /> Limitations
                </h4>
                <div className="space-y-2">
                  {currentInfo.limitations.map((item, idx) => {
                    const actualIdx = idx + currentInfo.strengths.length
                    const isRevealed = revealedPoints > actualIdx
                    return (
                      <div
                        key={idx}
                        onClick={() => !isRevealed && revealedPoints >= currentInfo.strengths.length && setRevealedPoints(actualIdx + 1)}
                        className={`p-2 rounded-lg transition-all duration-300 cursor-pointer
                          ${isRevealed 
                            ? 'bg-red-500/10' 
                            : revealedPoints >= currentInfo.strengths.length
                              ? 'bg-gray-800/50 hover:bg-gray-800'
                              : 'bg-gray-800/30 opacity-50'
                          }`}
                      >
                        <span className={`text-sm ${isRevealed ? 'text-gray-200' : 'text-gray-500'}`}>
                          {isRevealed ? `${item.icon} ${item.text}` : revealedPoints >= currentInfo.strengths.length ? 'Click to reveal' : 'Reveal strengths first'}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Semi-structured note */}
        <div className="mt-6 bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-cyan-400" />
            <p className="text-gray-300 text-sm">
              <span className="text-cyan-400 font-bold">Semi-Structured:</span> A middle ground - some set 
              questions with flexibility to follow up on interesting responses. Combines advantages of both!
            </p>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-4 flex justify-center gap-2">
          {activeType && [...Array(currentInfo.strengths.length + currentInfo.limitations.length)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                revealedPoints > i ? 'bg-rose-400' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
