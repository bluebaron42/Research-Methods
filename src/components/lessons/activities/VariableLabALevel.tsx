import React, { useState } from 'react'
import { CheckCircle, XCircle, ChevronRight } from 'lucide-react'

interface Props {
  isPresenting: boolean
}

interface Task {
  id: number
  scenario: string
  iv: string
  dv: string
  operationalisation: string
}

export const VariableLabALevel: React.FC<Props> = ({ isPresenting }) => {
  const [currentTask, setCurrentTask] = useState(0)
  const [responses, setResponses] = useState<Record<number, Partial<Task>>>({})

  const tasks: Task[] = [
    {
      id: 1,
      scenario: 'A study examines whether background noise affects how quickly students complete a maths problem.',
      iv: 'Background noise (presence vs. absence)',
      dv: 'Time taken to complete the problem',
      operationalisation: 'DV measured as seconds taken from problem presentation to submission'
    },
    {
      id: 2,
      scenario: 'Researchers investigate whether the colour of a room affects mood.',
      iv: 'Room colour (blue vs. red vs. neutral)',
      dv: 'Mood level',
      operationalisation: 'DV measured using a 1-10 mood rating scale administered after 10 minutes in the room'
    },
    {
      id: 3,
      scenario: 'A study tests whether exercise improves sleep quality.',
      iv: 'Exercise (30 minutes of exercise vs. no exercise)',
      dv: 'Sleep quality',
      operationalisation: 'DV measured using polysomnography (brain wave measurement) and self-report sleep questionnaire'
    },
    {
      id: 4,
      scenario: 'Research examines whether the number of study breaks affects exam performance.',
      iv: 'Study breaks (0 breaks, 1 break, 3 breaks during 1-hour session)',
      dv: 'Exam performance',
      operationalisation: 'DV measured as percentage score on a standardised test administered immediately after study'
    }
  ]

  const task = tasks[currentTask]
  const response = responses[task.id] || {}
  const textSize = isPresenting ? 'text-2xl' : 'text-lg'
  const headingSize = isPresenting ? 'text-4xl' : 'text-2xl'

  const handleNext = () => {
    if (currentTask < tasks.length - 1) {
      setCurrentTask(currentTask + 1)
    }
  }

  const handlePrev = () => {
    if (currentTask > 0) {
      setCurrentTask(currentTask - 1)
    }
  }

  const revealAnswer = (field: keyof Task) => {
    setResponses({
      ...responses,
      [task.id]: {
        ...response,
        [field]: task[field]
      }
    })
  }

  return (
    <div className={`w-full h-full p-8 flex flex-col overflow-auto custom-scrollbar`}>
      <h2 className={`${headingSize} font-bold text-rose-400 mb-2`}>Variable Lab</h2>
      <p className={`${textSize} text-gray-400 mb-8`}>Identify the IV, DV, and operationalisation in each scenario</p>

      <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-8">
        <p className={`${textSize} text-gray-100 leading-relaxed font-semibold`}>{task.scenario}</p>
      </div>

      <div className="space-y-6 flex-grow">
        {/* Independent Variable */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className={`${textSize} font-bold text-rose-400`}>Independent Variable (IV)</h3>
            {response.iv && <CheckCircle className="text-green-500" size={isPresenting ? 40 : 24} />}
          </div>

          {response.iv ? (
            <div className="bg-gray-800 p-4 rounded border-l-4 border-green-500">
              <p className={`${textSize} text-green-100`}>{response.iv}</p>
            </div>
          ) : (
            <button
              onClick={() => revealAnswer('iv')}
              className="w-full py-3 px-4 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-lg text-lg transition-all"
            >
              Reveal Answer
            </button>
          )}
        </div>

        {/* Dependent Variable */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className={`${textSize} font-bold text-blue-400`}>Dependent Variable (DV)</h3>
            {response.dv && <CheckCircle className="text-green-500" size={isPresenting ? 40 : 24} />}
          </div>

          {response.dv ? (
            <div className="bg-gray-800 p-4 rounded border-l-4 border-green-500">
              <p className={`${textSize} text-green-100`}>{response.dv}</p>
            </div>
          ) : (
            <button
              onClick={() => revealAnswer('dv')}
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg text-lg transition-all"
            >
              Reveal Answer
            </button>
          )}
        </div>

        {/* Operationalisation */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className={`${textSize} font-bold text-amber-400`}>Operationalisation of DV</h3>
            {response.operationalisation && <CheckCircle className="text-green-500" size={isPresenting ? 40 : 24} />}
          </div>

          {response.operationalisation ? (
            <div className="bg-gray-800 p-4 rounded border-l-4 border-green-500">
              <p className={`${textSize} text-green-100`}>{response.operationalisation}</p>
            </div>
          ) : (
            <button
              onClick={() => revealAnswer('operationalisation')}
              className="w-full py-3 px-4 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg text-lg transition-all"
            >
              Reveal Answer
            </button>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={handlePrev}
          disabled={currentTask === 0}
          className={`flex-1 py-3 px-6 rounded-lg font-bold ${
            currentTask === 0
              ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
              : 'bg-gray-700 hover:bg-gray-600 text-white'
          }`}
        >
          ← Previous
        </button>

        <span className={`${textSize} font-mono text-gray-400 flex items-center justify-center px-4`}>
          {currentTask + 1} / {tasks.length}
        </span>

        <button
          onClick={handleNext}
          disabled={currentTask === tasks.length - 1}
          className={`flex-1 py-3 px-6 rounded-lg font-bold ${
            currentTask === tasks.length - 1
              ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
              : 'bg-rose-600 hover:bg-rose-500 text-white'
          }`}
        >
          Next →
        </button>
      </div>
    </div>
  )
}
