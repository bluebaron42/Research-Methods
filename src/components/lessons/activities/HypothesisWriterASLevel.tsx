import React, { useState } from 'react'
import { CheckCircle, AlertCircle, Lightbulb } from 'lucide-react'

interface Props {
  isPresenting: boolean
}

export const HypothesisWriterASLevel: React.FC<Props> = ({ isPresenting }) => {
  const [hypothesis, setHypothesis] = useState('')
  const [isDirectional, setIsDirectional] = useState<boolean | null>(null)
  const [feedback, setFeedback] = useState<string | null>(null)
  const [hasVariable, setHasVariable] = useState(false)
  const [isPredictive, setIsPredictive] = useState(false)

  const textSize = isPresenting ? 'text-2xl' : 'text-lg'
  const headingSize = isPresenting ? 'text-4xl' : 'text-2xl'
  const padding = isPresenting ? 'p-12' : 'p-8'
  const gap = isPresenting ? 'gap-6' : 'gap-4'

  const analyzeHypothesis = (text: string) => {
    // Check for variables
    const hasVars = /\b(will|predict|expect|increase|decrease|affect|influence|difference|relationship|correlation)\b/i.test(text)
    setHasVariable(hasVars)

    // Check if predictive
    const isPred =
      /\b(will|predict|expect|should|result in|cause|lead to)\b/i.test(text) &&
      text.length > 10
    setIsPredictive(isPred)

    // Check direction indicators
    const isDir =
      /\b(higher|lower|more|less|better|worse|increase|decrease|greater|smaller|faster|slower|improve|worsen|positive|negative)\b/i
        .test(text) || /\bthan\b/i.test(text)
    setIsDirectional(isDir)

    // Provide feedback
    if (text.length < 5) {
      setFeedback('Type your hypothesis here...')
    } else if (!hasVars) {
      setFeedback('Your hypothesis should mention variables or relationships')
    } else if (!isPred) {
      setFeedback('A good hypothesis predicts what will happen between variables')
    } else {
      setFeedback('Great! You have a testable hypothesis')
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    setHypothesis(text)
    analyzeHypothesis(text)
  }

  const clearInput = () => {
    setHypothesis('')
    setFeedback(null)
    setIsDirectional(null)
    setHasVariable(false)
    setIsPredictive(false)
  }

  return (
    <div className={`w-full h-full ${padding} flex flex-col overflow-auto custom-scrollbar`}>
      <h2 className={`${headingSize} font-bold text-rose-400 mb-2`}>Hypothesis Writer</h2>
      <p className={`${textSize} text-gray-400 mb-8`}>Write your own directional or non-directional hypothesis</p>

      <div className={`flex gap-4 mb-8`}>
        <button
          onClick={() => setIsDirectional(true)}
          className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all ${
            isDirectional === true
              ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Directional →
        </button>
        <button
          onClick={() => setIsDirectional(false)}
          className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all ${
            isDirectional === false
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Non-Directional
        </button>
      </div>

      {/* Examples */}
      {isDirectional !== null && (
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-8">
          <p className={`${textSize} font-bold text-gray-300 mb-3`}>Example:</p>
          <div className="bg-gray-800 p-4 rounded italic text-gray-300 border-l-4 border-gray-600">
            {isDirectional
              ? '"Students who revise for 2 hours will score higher on the exam than students who revise for 30 minutes"'
              : '"There will be a difference in exam scores between students who revise for 2 hours and those who revise for 30 minutes"'}
          </div>
        </div>
      )}

      {/* Text Input */}
      <textarea
        value={hypothesis}
        onChange={handleInputChange}
        placeholder="Write your hypothesis here..."
        className={`w-full flex-grow p-4 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-rose-500 ${textSize}`}
      />

      {/* Analysis Feedback */}
      {hypothesis && (
        <div className={`mt-8 space-y-3`}>
          <div className={`flex items-center gap-3 p-4 rounded-lg ${hasVariable ? 'bg-green-900/30 border border-green-600' : 'bg-gray-800 border border-gray-700'}`}>
            {hasVariable ? <CheckCircle className="text-green-500" size={24} /> : <AlertCircle className="text-gray-500" size={24} />}
            <p className={`${textSize} ${hasVariable ? 'text-green-200' : 'text-gray-300'}`}>Variables identified</p>
          </div>

          <div className={`flex items-center gap-3 p-4 rounded-lg ${isPredictive ? 'bg-green-900/30 border border-green-600' : 'bg-gray-800 border border-gray-700'}`}>
            {isPredictive ? <CheckCircle className="text-green-500" size={24} /> : <AlertCircle className="text-gray-500" size={24} />}
            <p className={`${textSize} ${isPredictive ? 'text-green-200' : 'text-gray-300'}`}>Makes a prediction</p>
          </div>

          <div className={`flex items-center gap-3 p-4 rounded-lg ${isDirectional ? 'bg-green-900/30 border border-green-600' : 'bg-blue-900/30 border border-blue-600'}`}>
            {isDirectional ? <CheckCircle className="text-green-500" size={24} /> : <CheckCircle className="text-blue-500" size={24} />}
            <p className={`${textSize} ${isDirectional ? 'text-green-200' : 'text-blue-200'}`}>
              {isDirectional ? 'Directional ✓' : 'Non-Directional ✓'}
            </p>
          </div>
        </div>
      )}

      {/* Feedback */}
      {feedback && (
        <div className="mt-6 p-4 bg-blue-900/30 border border-blue-600 rounded-lg flex gap-3">
          <Lightbulb className="text-blue-400 flex-shrink-0" size={24} />
          <p className={`${textSize} text-blue-200`}>{feedback}</p>
        </div>
      )}

      {/* Actions */}
      {hypothesis && (
        <button
          onClick={clearInput}
          className="mt-8 w-full py-3 px-6 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-lg transition-all text-lg"
        >
          Clear & Start Over
        </button>
      )}
    </div>
  )
}
