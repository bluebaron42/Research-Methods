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
    <div className="w-full h-full p-5 flex flex-col overflow-auto custom-scrollbar">
      {/* Header - Clean minimal */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-rose-400 flex items-center gap-2">
            <span className="w-1 h-5 bg-rose-500 rounded-full"></span>
            {title}
          </h2>
          <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-500 font-mono">
            {currentQuestion + 1}/{questions.length}
          </span>
          <div className="flex gap-1">
            {questions.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentQuestion 
                    ? 'bg-rose-500 scale-125' 
                    : selectedAnswers[questions[idx].id] !== undefined 
                      ? 'bg-green-500' 
                      : 'bg-gray-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Question Card - Glass effect */}
      <div className="glass-clean rounded-lg p-4 mb-4 animate-fadeIn">
        <p className="text-lg text-gray-100 font-medium leading-relaxed">{question.question}</p>
      </div>

      {/* Reveal Button */}
      {!areOptionsVisible && (
        <button
          onClick={revealOptions}
          className="w-full py-4 px-6 mb-4 bg-rose-600 hover:bg-rose-500 text-white font-medium rounded-lg transition-all shadow-lg shadow-rose-600/20 text-base animate-subtle-pulse"
        >
          Click to Reveal Options
        </button>
      )}

      {/* Options - Clean cards with animations */}
      {areOptionsVisible && (
      <div className="space-y-2 flex-grow mb-4">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleSelectAnswer(idx)}
            disabled={isAnswered}
            className={`w-full text-left p-3 rounded-lg border transition-all duration-300 font-medium text-base animate-slide-in-left ${
              !isAnswered
                ? 'border-gray-700/50 bg-gray-800/60 hover:border-rose-500/50 hover:bg-gray-700/60 cursor-pointer card-hover'
                : idx === question.correct
                  ? 'border-green-500/50 bg-green-900/20 text-green-200'
                  : idx === selectedAnswer
                    ? 'border-red-500/50 bg-red-900/20 text-red-200'
                    : 'border-gray-700/30 bg-gray-800/40 text-gray-500'
            }`}
            style={{ animationDelay: `${idx * 0.05}s` }}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="flex-1">{option}</span>
              {isAnswered && idx === question.correct && <CheckCircle className="text-green-400 flex-shrink-0 animate-scale-up" size={20} />}
              {isAnswered && idx === selectedAnswer && idx !== question.correct && <XCircle className="text-red-400 flex-shrink-0 animate-scale-up" size={20} />}
            </div>
          </button>
        ))}
      </div>
      )}

      {/* Navigation - Minimal */}
      <div className="flex gap-2 mt-auto">
        <button
          onClick={handlePrev}
          disabled={currentQuestion === 0}
          className={`flex-1 py-2.5 px-4 rounded-lg font-medium text-sm transition-all ${
            currentQuestion === 0
              ? 'bg-gray-800/50 text-gray-600 cursor-not-allowed'
              : 'bg-gray-700/50 hover:bg-gray-600/50 text-gray-300'
          }`}
        >
          ← Previous
        </button>

        <button
          onClick={handleNext}
          disabled={currentQuestion === questions.length - 1}
          className={`flex-1 py-2.5 px-4 rounded-lg font-medium text-sm transition-all ${
            currentQuestion === questions.length - 1
              ? 'bg-gray-800/50 text-gray-600 cursor-not-allowed'
              : 'bg-rose-600 hover:bg-rose-500 text-white shadow-md shadow-rose-600/20'
          }`}
        >
          Next →
        </button>
      </div>

      {/* Score Summary - Clean minimal */}
      {selectedAnswers[questions[questions.length - 1].id] !== undefined && (
        <div className="mt-4 glass-clean rounded-lg p-4 text-center animate-scale-up">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Score</p>
          <p className="text-2xl font-bold text-rose-400">
            {correctCount}<span className="text-gray-500 text-lg">/{questions.length}</span>
          </p>
        </div>
      )}
    </div>
  )
}
