import React, { useState } from 'react'
import { CheckCircle, XCircle } from 'lucide-react'

interface Props {
  isPresenting: boolean
}

interface Question {
  id: number
  scenario: string
  question: string
  options: string[]
  correct: number
  explanation: string
}

export const VariableDetectiveALevel: React.FC<Props> = ({ isPresenting }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({})
  const [showExplanation, setShowExplanation] = useState(false)

  const questions: Question[] = [
    {
      id: 1,
      scenario:
        'A researcher studies the effect of coffee consumption on exam performance. Some students drink coffee before the exam, while others drink water.',
      question: 'What is the IV in this study?',
      options: [
        'The type of beverage consumed (coffee vs. water)',
        'The exam score',
        'The number of students',
        'The difficulty of the exam'
      ],
      correct: 0,
      explanation: 'The IV is what the researcher manipulates or varies—in this case, the type of beverage. The exam score would be the DV (what is measured).'
    },
    {
      id: 2,
      scenario:
        'A study investigates whether the temperature of a room affects concentration levels. One group works in a 18°C room, another in a 24°C room.',
      question: 'How many levels does the IV have?',
      options: ['1 level', '2 levels', '3 levels', '10 levels'],
      correct: 1,
      explanation: 'There are 2 levels of the IV: the 18°C condition and the 24°C condition. Each represents a different condition being compared.'
    },
    {
      id: 3,
      scenario:
        'A researcher wants to measure if a new study technique improves retention. Students use the new technique and their recall of information is tested.',
      question: 'What would be the best operationalisation of the DV (retention)?',
      options: [
        'Whether students remember something',
        'Number of correct answers in a recall test',
        'How the student feels about their memory',
        'How much time was spent studying'
      ],
      correct: 1,
      explanation:
        'Operationalisation requires a measurable definition. "Number of correct answers" is objective and measurable, unlike feelings or general impressions.'
    },
    {
      id: 4,
      scenario:
        'A study examines whether sleep deprivation affects reaction time. Group A sleeps 4 hours, Group B sleeps 8 hours.',
      question: 'Identify the correct relationship:',
      options: [
        'IV = reaction time; DV = sleep duration',
        'IV = sleep duration; DV = reaction time',
        'Both are independent variables',
        'Both are dependent variables'
      ],
      correct: 1,
      explanation:
        'The researcher manipulates sleep duration (IV), and measures reaction time (DV). Remember: IV is what changes, DV is what we measure.'
    },
    {
      id: 5,
      scenario:
        'Researchers study the effect of social media use on self-esteem in teenagers. They measure self-esteem using a standardised questionnaire.',
      question: 'The operationalisation of the DV in this study is:',
      options: [
        'Time spent on social media per day',
        'Whether teenagers like themselves',
        'A standardised self-esteem questionnaire score',
        'The number of social media followers'
      ],
      correct: 2,
      explanation:
        'The operationalisation is the specific, measurable method used. A standardised questionnaire score is objective and repeatable, making it a proper operationalisation.'
    }
  ]

  const question = questions[currentQuestion]
  const selectedAnswer = selectedAnswers[question.id]
  const isCorrect = selectedAnswer === question.correct
  const isAnswered = selectedAnswer !== undefined
  const textSize = isPresenting ? 'text-2xl' : 'text-lg'
  const headingSize = isPresenting ? 'text-3xl' : 'text-2xl'

  const handleSelectAnswer = (index: number) => {
    if (!isAnswered) {
      setSelectedAnswers({
        ...selectedAnswers,
        [question.id]: index
      })
      setShowExplanation(true)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setShowExplanation(false)
    }
  }

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setShowExplanation(true)
    }
  }

  const correctCount = Object.entries(selectedAnswers).filter(([id, answer]) => {
    const q = questions.find((q) => q.id === Number(id))
    return q && answer === q.correct
  }).length

  return (
    <div className={`w-full h-full p-8 flex flex-col overflow-auto custom-scrollbar`}>
      <div className="flex justify-between items-center mb-8">
        <h2 className={`${headingSize} font-bold text-rose-400`}>Variable Detective</h2>
        <div className="text-gray-400 font-mono">
          {currentQuestion + 1} / {questions.length}
        </div>
      </div>

      {/* Scenario */}
      <div className="bg-gray-900 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
        <p className={`${textSize} text-gray-200 leading-relaxed`}>{question.scenario}</p>
      </div>

      {/* Question */}
      <h3 className={`${textSize} font-bold text-amber-400 mb-6`}>{question.question}</h3>

      {/* Options */}
      <div className="space-y-4 flex-grow">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleSelectAnswer(idx)}
            disabled={isAnswered}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all font-semibold ${
              !isAnswered
                ? 'border-gray-600 bg-gray-800 hover:border-rose-500 hover:bg-gray-700 cursor-pointer'
                : idx === question.correct
                  ? 'border-green-500 bg-green-900/30 text-green-100'
                  : idx === selectedAnswer
                    ? 'border-red-500 bg-red-900/30 text-red-100'
                    : 'border-gray-600 bg-gray-800 text-gray-400'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className={textSize}>{option}</span>
              {isAnswered && idx === question.correct && <CheckCircle className="text-green-500" size={24} />}
              {isAnswered && idx === selectedAnswer && idx !== question.correct && <XCircle className="text-red-500" size={24} />}
            </div>
          </button>
        ))}
      </div>

      {/* Explanation */}
      {showExplanation && isAnswered && (
        <div className={`mt-8 p-6 rounded-lg border-l-4 ${isCorrect ? 'bg-green-900/30 border-green-600' : 'bg-red-900/30 border-red-600'}`}>
          <h4 className={`${textSize} font-bold ${isCorrect ? 'text-green-300' : 'text-red-300'} mb-3`}>
            {isCorrect ? '✓ Correct!' : '✗ Not quite right'}
          </h4>
          <p className={`${textSize} ${isCorrect ? 'text-green-100' : 'text-red-100'}`}>{question.explanation}</p>
        </div>
      )}

      {/* Navigation */}
      {isAnswered && (
        <div className="flex gap-4 mt-8">
          <button
            onClick={handlePrev}
            disabled={currentQuestion === 0}
            className={`flex-1 py-3 px-6 rounded-lg font-bold ${
              currentQuestion === 0
                ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                : 'bg-gray-700 hover:bg-gray-600 text-white'
            }`}
          >
            ← Previous
          </button>

          <button
            onClick={handleNext}
            disabled={currentQuestion === questions.length - 1}
            className={`flex-1 py-3 px-6 rounded-lg font-bold ${
              currentQuestion === questions.length - 1
                ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                : 'bg-rose-600 hover:bg-rose-500 text-white'
            }`}
          >
            Next →
          </button>
        </div>
      )}

      {/* Score Summary - Show only when all questions are answered */}
      {selectedAnswers[questions[questions.length - 1].id] !== undefined && (
        <div className="mt-8 p-6 bg-gray-800 rounded-lg border border-gray-700 text-center">
          <p className={`${textSize} text-gray-300 mb-2`}>Your Score:</p>
          <p className={`${isPresenting ? 'text-5xl' : 'text-3xl'} font-bold text-rose-400`}>
            {correctCount} / {questions.length}
          </p>
        </div>
      )}
    </div>
  )
}
