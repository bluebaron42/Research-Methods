import React, { useState } from 'react'
import { ChevronDown, ChevronUp, AlertCircle } from 'lucide-react'

interface Answer {
  text: string
  marks: number
  explanation: string
}

interface Question {
  id: number
  type: '2 mark' | '3 mark' | '5 mark' | '6 mark'
  question: string
  marks: number
  sample: Answer[]
}

export const ExtendedExamTaskASLevelLesson1: React.FC = () => {
  const [expandedQuestions, setExpandedQuestions] = useState<Record<number, boolean>>({})

  const questions: Question[] = [
    {
      id: 1,
      type: '2 mark',
      question: 'Distinguish between an aim and a hypothesis in psychological research.',
      marks: 2,
      sample: [
        {
          text: 'Aim is a general statement of research purpose; hypothesis is a specific, testable prediction',
          marks: 2,
          explanation: 'This directly distinguishes both terms clearly'
        },
        {
          text: 'An aim states what will be investigated; a hypothesis states what the researcher predicts will happen',
          marks: 2,
          explanation: 'Another clear distinction of the two concepts'
        }
      ]
    },
    {
      id: 2,
      type: '2 mark',
      question: 'Explain the difference between a directional and a non-directional hypothesis.',
      marks: 2,
      sample: [
        {
          text: 'A directional hypothesis predicts the direction of the effect (e.g., "higher...than"), while a non-directional hypothesis only predicts there will be a difference',
          marks: 2,
          explanation: 'Clear explanation of both types with directional example'
        },
        {
          text: 'Directional specifies which group will perform better; non-directional just says there will be a difference',
          marks: 2,
          explanation: 'Simple but complete distinction'
        }
      ]
    },
    {
      id: 3,
      type: '3 mark',
      question: 'Explain what is meant by "operationalisation" and provide an example.',
      marks: 3,
      sample: [
        {
          text: 'Operationalisation means defining a variable in measurable terms. Example: "Talkativeness" could be operationalised as "number of words spoken in a 5-minute conversation".',
          marks: 3,
          explanation: '1 mark for definition, 1 mark for understanding it\'s measurable, 1 mark for providing appropriate example'
        },
        {
          text: 'It is turning abstract concepts into concrete, measurable definitions. For example, "concentration" could be operationalised as "percentage of correct answers on a maths test".',
          marks: 3,
          explanation: 'Clear definition plus concrete example related to psychological research'
        }
      ]
    },
    {
      id: 4,
      type: '3 mark',
      question: 'In a study examining the effect of noise on exam performance, identify the IV, DV, and suggest an operationalisation of the DV.',
      marks: 3,
      sample: [
        {
          text: 'IV: Noise (present/absent). DV: Exam performance. Operationalisation: Percentage score on a standardised exam or number of questions answered correctly.',
          marks: 3,
          explanation: '1 mark IV, 1 mark DV, 1 mark appropriate measurable operationalisation'
        }
      ]
    },
    {
      id: 5,
      type: '5 mark',
      question:
        'A researcher wants to investigate whether the colour of a revision room affects student concentration. Design an aim and a directional hypothesis for this study. Identify the IV and DV.',
      marks: 5,
      sample: [
        {
          text: 'Aim: To investigate the effect of room colour on student concentration. Directional hypothesis: Students will concentrate better (score higher on focus tasks) in blue rooms compared to red rooms. IV: Room colour (blue vs red). DV: Concentration/focus (operationalised as accuracy score on focus tasks).',
          marks: 5,
          explanation: '1 mark for clear aim; 1 mark for directional hypothesis with direction shown; 1 mark for IV; 1 mark for DV; 1 mark for operationalisation of DV'
        }
      ]
    },
    {
      id: 6,
      type: '6 mark',
      question:
        'Explain why variables must be operationalised in psychological research. Illustrate your answer with an example of how "memory ability" could be operationalised.',
      marks: 6,
      sample: [
        {
          text: 'Variables must be operationalised because: (1) It makes variables measurable and objective, (2) It allows other researchers to replicate the study using the same definition, (3) It reduces ambiguity and researcher bias. Example: "Memory ability" is vague. It could be operationalised as "number of words correctly recalled from a 20-word list within 5 minutes" - this is specific, measurable, and replicable.',
          marks: 6,
          explanation: 'Three reasons (2 marks) + clear, detailed example with multiple elements (4 marks)'
        }
      ]
    }
  ]

  const toggleQuestion = (id: number) => {
    setExpandedQuestions({
      ...expandedQuestions,
      [id]: !expandedQuestions[id]
    })
  }

  return (
    <div className="w-full h-full p-8 flex flex-col overflow-auto custom-scrollbar">
      <h2 className="text-4xl font-bold text-rose-400 mb-2">Extended Exam Task</h2>
      <p className="text-xl text-gray-400 mb-8">Practice exam questions on Experimental Method</p>

      {/* Instructions */}
      <div className="bg-blue-900/30 border border-blue-600 rounded-lg p-6 mb-8 flex gap-4">
        <AlertCircle className="text-blue-400 flex-shrink-0" size={24} />
        <div>
          <p className="text-lg font-bold text-blue-300 mb-2">How to use this section:</p>
          <ul className="text-lg text-blue-200 space-y-1">
            <li>• Click on each question to expand and see sample answers</li>
            <li>• Try answering each question first before checking the samples</li>
            <li>• Notice the mark allocations and what each mark is for</li>
            <li>• Use these as models for your own exam responses</li>
          </ul>
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {questions.map((question) => (
          <div key={question.id} className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
            {/* Question Header */}
            <button
              onClick={() => toggleQuestion(question.id)}
              className="w-full text-left p-6 hover:bg-gray-800/50 transition-all flex justify-between items-start gap-4"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block px-3 py-1 bg-rose-600 text-white rounded-full text-sm font-bold">
                    {question.marks} marks
                  </span>
                  <span className="text-gray-400 text-sm">{question.type}</span>
                </div>
                <p className="text-xl font-semibold text-gray-100">{question.question}</p>
              </div>
              {expandedQuestions[question.id] ? (
                <ChevronUp className="text-rose-400 flex-shrink-0" size={24} />
              ) : (
                <ChevronDown className="text-gray-500 flex-shrink-0" size={24} />
              )}
            </button>

            {/* Sample Answers */}
            {expandedQuestions[question.id] && (
              <div className="bg-gray-800/30 border-t border-gray-700 p-6 space-y-4">
                {question.sample.map((sample, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-lg p-4 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="inline-block px-2 py-1 bg-green-600 text-white rounded text-sm font-bold flex-shrink-0">
                        {sample.marks}/{question.marks} marks
                      </span>
                    </div>
                    <p className="text-gray-100 leading-relaxed">{sample.text}</p>
                    <div className="bg-gray-700/50 p-3 rounded border-l-2 border-gray-600">
                      <p className="text-sm text-gray-300">
                        <span className="font-bold text-gray-200">Why:</span> {sample.explanation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Summary Box */}
      <div className="mt-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
        <h3 className="text-2xl font-bold text-amber-400 mb-4">Key Tips for Exam Success</h3>
        <ul className="text-lg text-gray-300 space-y-3">
          <li className="flex gap-3">
            <span className="text-rose-400 font-bold">1.</span>
            <span>
              <span className="font-bold">Define clearly:</span> Always provide definitions when asked - don't assume the examiner knows what you mean
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-rose-400 font-bold">2.</span>
            <span>
              <span className="font-bold">Use examples:</span> Psychological terms need concrete examples to show understanding
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-rose-400 font-bold">3.</span>
            <span>
              <span className="font-bold">Be specific:</span> Distinguish between related concepts (aim vs hypothesis, directional vs non-directional)
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-rose-400 font-bold">4.</span>
            <span>
              <span className="font-bold">Show your reasoning:</span> Explain why things are done (e.g., why we operationalise variables)
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-rose-400 font-bold">5.</span>
            <span>
              <span className="font-bold">Use subject terminology:</span> Use terms like IV, DV, operationalisation to show subject knowledge
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
