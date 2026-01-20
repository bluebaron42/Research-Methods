import React, { useState } from 'react'
import { CheckCircle, XCircle } from 'lucide-react'

interface Question {
  id: number
  question: string
  options: string[]
  correct: number
}

interface Props {
  questions: Question[]
  title: string
  subtitle: string
}

export const SplitKnowledgeCheck: React.FC<Props> = ({ questions, title, subtitle }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({})
  const [showExplanation, setShowExplanation] = useState(false)
  const [optionsRevealed, setOptionsRevealed] = useState<Record<number, boolean>>({})

  const question = questions[currentQuestion]
  const selectedAnswer = selectedAnswers[question.id]
  const isCorrect = selectedAnswer === question.correct
  const isAnswered = selectedAnswer !== undefined
  const areOptionsVisible = optionsRevealed[question.id] !== false

  const handleSelectAnswer = (index: number) => {
    if (!isAnswered) {
      setSelectedAnswers({
        ...selectedAnswers,
        [question.id]: index
      })
      setShowExplanation(true)
    }
  }

  const revealOptions = () => {
    setOptionsRevealed({
      ...optionsRevealed,
      [question.id]: true
    })
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
      setShowExplanation(false)
    }
  }

  const correctCount = Object.entries(selectedAnswers).filter(([id, answer]) => {
    const q = questions.find((q) => q.id === Number(id))
    return q && answer === q.correct
  }).length

  return (
    <div className="w-full h-full p-8 flex flex-col overflow-auto custom-scrollbar">
      <h2 className="text-3xl font-bold text-rose-400 mb-1">{title}</h2>
      <p className="text-gray-400 text-lg mb-8">{subtitle}</p>

      <div className="flex justify-between items-center mb-8">
        <span className="text-gray-400 font-mono text-lg">
          {currentQuestion + 1} / {questions.length}
        </span>
        <div className="flex gap-2">
          {questions.map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full ${
                selectedAnswers[questions[idx].id] !== undefined ? 'bg-green-500' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-8">
        <p className="text-2xl text-gray-100 font-semibold">{question.question}</p>
      </div>

      {/* Reveal Button */}
      {!areOptionsVisible && (
        <button
          onClick={revealOptions}
          className="w-full py-6 px-8 mb-8 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-rose-600/30 text-2xl"
        >
          Click to Reveal Answer Options
        </button>
      )}

      {/* Options */}
      {areOptionsVisible && (
      <div className="space-y-3 flex-grow mb-8">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleSelectAnswer(idx)}
            disabled={isAnswered}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all font-semibold text-lg ${
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
              <span>{option}</span>
              {isAnswered && idx === question.correct && <CheckCircle className="text-green-500" size={24} />}
              {isAnswered && idx === selectedAnswer && idx !== question.correct && <XCircle className="text-red-500" size={24} />}
            </div>
          </button>
        ))}
      </div>
      )}

      {/* Navigation */}
      <div className="flex gap-4 mt-auto">
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

      {/* Score Summary - Show only when all questions are answered */}
      {selectedAnswers[questions[questions.length - 1].id] !== undefined && (
        <div className="mt-8 p-6 bg-gray-800 rounded-lg border border-gray-700 text-center">
          <p className="text-gray-300 mb-2 text-lg">Your Score:</p>
          <p className="text-4xl font-bold text-rose-400">
            {correctCount} / {questions.length}
          </p>
        </div>
      )}
    </div>
  )
}
