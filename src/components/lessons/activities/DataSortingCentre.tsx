import React, { useState, useMemo, useCallback } from 'react'
import { Database, CheckCircle, XCircle, ArrowRight, BarChart3, FileText, Layers, Binary, ListOrdered } from 'lucide-react'

interface DataItem {
  id: number
  content: string
  correctCategories: string[]
  explanation: string
}

interface Props {
  isPresenting?: boolean
}

const DataSortingCentre: React.FC<Props> = ({ isPresenting = false }) => {
  const [currentItem, setCurrentItem] = useState(0)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState<number[]>([])

  const categories = useMemo(() => [
    { id: 'quantitative', name: 'Quantitative', icon: BarChart3, color: 'bg-blue-600', description: 'Numerical data' },
    { id: 'qualitative', name: 'Qualitative', icon: FileText, color: 'bg-green-600', description: 'Non-numerical, descriptive' },
    { id: 'primary', name: 'Primary', icon: Database, color: 'bg-purple-600', description: 'Collected first-hand' },
    { id: 'secondary', name: 'Secondary', icon: Layers, color: 'bg-amber-600', description: 'Already exists' },
    { id: 'nominal', name: 'Nominal', icon: ListOrdered, color: 'bg-pink-600', description: 'Named categories, no order' },
    { id: 'ordinal', name: 'Ordinal', icon: ListOrdered, color: 'bg-cyan-600', description: 'Ordered categories' },
    { id: 'interval', name: 'Interval/Ratio', icon: Binary, color: 'bg-red-600', description: 'True numerical scale' }
  ], [])

  const dataItems: DataItem[] = useMemo(() => [
    {
      id: 1,
      content: "A researcher counts how many words participants recall from a memory test (e.g., 12, 8, 15 words)",
      correctCategories: ['quantitative', 'primary', 'interval'],
      explanation: "This is QUANTITATIVE (numbers of words), PRIMARY (researcher collected it themselves), and INTERVAL data (true numerical scale where the difference between 8 and 10 is the same as between 12 and 14)."
    },
    {
      id: 2,
      content: "Interview transcripts describing how participants felt about their therapy experience",
      correctCategories: ['qualitative', 'primary'],
      explanation: "This is QUALITATIVE (non-numerical, rich descriptions) and PRIMARY (collected first-hand by the researcher through interviews). It cannot be classified as nominal/ordinal/interval as it's not numerical."
    },
    {
      id: 3,
      content: "Hospital records showing the number of patients diagnosed with depression in 2023",
      correctCategories: ['quantitative', 'secondary', 'interval'],
      explanation: "This is QUANTITATIVE (number of patients), SECONDARY (pre-existing hospital data, not collected for this study), and INTERVAL (true numerical count)."
    },
    {
      id: 4,
      content: "Participants rate their stress level as 'Low', 'Medium', or 'High'",
      correctCategories: ['quantitative', 'primary', 'ordinal'],
      explanation: "This is QUANTITATIVE (can be converted to numbers), PRIMARY (collected by the researcher), and ORDINAL (categories have a clear order but the 'gap' between Low and Medium may not equal Medium to High)."
    },
    {
      id: 5,
      content: "Published crime statistics from the Office for National Statistics",
      correctCategories: ['quantitative', 'secondary', 'interval'],
      explanation: "This is QUANTITATIVE (crime numbers), SECONDARY (already collected by ONS, not the researcher), and INTERVAL (true numerical data)."
    },
    {
      id: 6,
      content: "Participants classify their personality type as Introvert or Extrovert",
      correctCategories: ['qualitative', 'primary', 'nominal'],
      explanation: "This is often treated as QUALITATIVE (categories, not true numbers), PRIMARY (collected in the study), and NOMINAL (named categories with no inherent order - introvert isn't 'more' or 'less' than extrovert)."
    },
    {
      id: 7,
      content: "Reaction times measured in milliseconds on a computer task",
      correctCategories: ['quantitative', 'primary', 'interval'],
      explanation: "This is QUANTITATIVE (precise numerical measurements), PRIMARY (collected in the study), and INTERVAL/RATIO (true continuous scale with equal intervals and a meaningful zero point)."
    },
    {
      id: 8,
      content: "Meta-analysis data combining results from 15 previous studies on conformity",
      correctCategories: ['quantitative', 'secondary'],
      explanation: "This is QUANTITATIVE (combining statistical data) and SECONDARY (using existing studies rather than collecting new data). Meta-analyses always use secondary data by definition."
    },
    {
      id: 9,
      content: "Diary entries describing daily experiences of people with anxiety",
      correctCategories: ['qualitative', 'primary'],
      explanation: "This is QUALITATIVE (rich descriptive text) and PRIMARY (participants wrote these specifically for the study). The data captures subjective experiences that cannot be reduced to numbers."
    },
    {
      id: 10,
      content: "Rankings from 1st to 10th place in a problem-solving competition",
      correctCategories: ['quantitative', 'primary', 'ordinal'],
      explanation: "This is QUANTITATIVE (numerical ranks), PRIMARY (collected in the study), and ORDINAL (the order matters but the gap between 1st and 2nd isn't necessarily equal to 2nd and 3rd)."
    }
  ], [])

  const handleToggleCategory = useCallback((categoryId: string) => {
    if (showFeedback) return
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
  }, [showFeedback])

  const handleSubmit = useCallback(() => {
    setShowFeedback(true)

    const item = dataItems[currentItem]
    const correct = item.correctCategories

    // Calculate score
    const correctlySelected = selectedCategories.filter(id => correct.includes(id)).length
    const incorrectlySelected = selectedCategories.filter(id => !correct.includes(id)).length
    
    const points = Math.max(0, correctlySelected - incorrectlySelected)
    
    if (correctlySelected >= correct.length * 0.5 && incorrectlySelected <= 1) {
      setCompleted(prev => [...prev, item.id])
    }
    setScore(prev => prev + points)
  }, [selectedCategories, dataItems, currentItem])

  const handleNext = useCallback(() => {
    if (currentItem < dataItems.length - 1) {
      setCurrentItem(prev => prev + 1)
      setSelectedCategories([])
      setShowFeedback(false)
    }
  }, [currentItem, dataItems.length])

  const handleRestart = useCallback(() => {
    setCurrentItem(0)
    setSelectedCategories([])
    setShowFeedback(false)
    setScore(0)
    setCompleted([])
  }, [])

  const item = dataItems[currentItem]
  const isComplete = currentItem === dataItems.length - 1 && showFeedback

  const getSorterRank = useCallback(() => {
    const maxPossible = dataItems.reduce((sum, d) => sum + d.correctCategories.length, 0)
    const percentage = (score / maxPossible) * 100
    if (percentage >= 80) return { rank: "Data Director", emoji: "📊" }
    if (percentage >= 60) return { rank: "Senior Analyst", emoji: "📈" }
    if (percentage >= 40) return { rank: "Data Sorter", emoji: "📋" }
    return { rank: "Trainee Analyst", emoji: "📝" }
  }, [score, dataItems])

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-6 bg-gradient-to-br from-slate-900 via-emerald-900/20 to-slate-900`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/20 rounded-lg">
              <Database className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Data Sorting Centre</h2>
              <p className="text-emerald-300 text-sm">Classify data types correctly</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
              <span className="text-slate-400 text-sm">Points: </span>
              <span className="text-white font-bold">{score}</span>
            </div>
            <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
              <span className="text-slate-400 text-sm">Item: </span>
              <span className="text-white font-bold">{currentItem + 1}/{dataItems.length}</span>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="flex gap-1 mb-6">
          {dataItems.map((d, i) => (
            <div
              key={d.id}
              className={`h-2 flex-1 rounded-full transition-all ${
                i === currentItem ? 'bg-emerald-400' : completed.includes(d.id) ? 'bg-green-500' : i < currentItem ? 'bg-amber-500' : 'bg-slate-600'
              }`}
            />
          ))}
        </div>

        {isComplete ? (
          /* Final Results */
          <div className="bg-slate-800/50 rounded-2xl border border-emerald-500/30 p-8 text-center">
            <div className="text-6xl mb-4">{getSorterRank().emoji}</div>
            <h3 className="text-3xl font-bold text-white mb-2">Sorting Complete!</h3>
            <p className="text-xl text-emerald-300 mb-4">Rank: {getSorterRank().rank}</p>
            <div className="text-4xl font-bold text-white mb-6">
              {score} Points Earned
            </div>
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-6">
              <div className="bg-slate-700/50 rounded-lg p-4">
                <BarChart3 className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                <p className="text-sm text-slate-400">Quantitative</p>
                <p className="text-white">Numbers & measurements</p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4">
                <FileText className="w-8 h-8 mx-auto mb-2 text-green-400" />
                <p className="text-sm text-slate-400">Qualitative</p>
                <p className="text-white">Words & descriptions</p>
              </div>
            </div>
            <button
              onClick={handleRestart}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-colors"
            >
              Sort Again 🔄
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Data Item Card */}
            <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Database className="w-5 h-5 text-emerald-400" />
                <span className="text-sm text-slate-400">Data Item #{item.id}</span>
              </div>
              <div className="p-4 bg-slate-700/50 rounded-lg border-l-4 border-emerald-500">
                <p className="text-lg text-white">{item.content}</p>
              </div>
            </div>

            {/* Category Selection */}
            <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
              <h4 className="text-lg font-bold text-white mb-4">
                {showFeedback ? 'Classification Results' : 'Select ALL categories that apply:'}
              </h4>
              
              {/* Main Type Row */}
              <div className="mb-4">
                <p className="text-sm text-slate-400 mb-2">Type of Data:</p>
                <div className="flex gap-3">
                  {categories.filter(c => ['quantitative', 'qualitative'].includes(c.id)).map(cat => {
                    const isSelected = selectedCategories.includes(cat.id)
                    const isCorrect = showFeedback && item.correctCategories.includes(cat.id)
                    const isWrong = showFeedback && isSelected && !item.correctCategories.includes(cat.id)
                    
                    return (
                      <button
                        key={cat.id}
                        onClick={() => handleToggleCategory(cat.id)}
                        disabled={showFeedback}
                        className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                          isCorrect && isSelected ? 'border-green-500 bg-green-900/30'
                            : isWrong ? 'border-red-500 bg-red-900/30'
                            : isCorrect && !isSelected ? 'border-amber-500 bg-amber-900/30'
                            : isSelected ? 'border-emerald-500 bg-emerald-900/30'
                            : 'border-slate-600 bg-slate-700/30 hover:border-slate-500'
                        } ${showFeedback ? 'cursor-default' : 'cursor-pointer'}`}
                      >
                        <div className={`p-2 rounded-lg ${cat.color} w-fit mx-auto mb-2`}>
                          <cat.icon className="w-5 h-5 text-white" />
                        </div>
                        <p className="font-bold text-white">{cat.name}</p>
                        <p className="text-xs text-slate-400">{cat.description}</p>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Source Row */}
              <div className="mb-4">
                <p className="text-sm text-slate-400 mb-2">Source:</p>
                <div className="flex gap-3">
                  {categories.filter(c => ['primary', 'secondary'].includes(c.id)).map(cat => {
                    const isSelected = selectedCategories.includes(cat.id)
                    const isCorrect = showFeedback && item.correctCategories.includes(cat.id)
                    const isWrong = showFeedback && isSelected && !item.correctCategories.includes(cat.id)
                    
                    return (
                      <button
                        key={cat.id}
                        onClick={() => handleToggleCategory(cat.id)}
                        disabled={showFeedback}
                        className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                          isCorrect && isSelected ? 'border-green-500 bg-green-900/30'
                            : isWrong ? 'border-red-500 bg-red-900/30'
                            : isCorrect && !isSelected ? 'border-amber-500 bg-amber-900/30'
                            : isSelected ? 'border-emerald-500 bg-emerald-900/30'
                            : 'border-slate-600 bg-slate-700/30 hover:border-slate-500'
                        } ${showFeedback ? 'cursor-default' : 'cursor-pointer'}`}
                      >
                        <div className={`p-2 rounded-lg ${cat.color} w-fit mx-auto mb-2`}>
                          <cat.icon className="w-5 h-5 text-white" />
                        </div>
                        <p className="font-bold text-white">{cat.name}</p>
                        <p className="text-xs text-slate-400">{cat.description}</p>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Level of Measurement Row (for quantitative) */}
              <div>
                <p className="text-sm text-slate-400 mb-2">Level of Measurement (if quantitative):</p>
                <div className="flex gap-3">
                  {categories.filter(c => ['nominal', 'ordinal', 'interval'].includes(c.id)).map(cat => {
                    const isSelected = selectedCategories.includes(cat.id)
                    const isCorrect = showFeedback && item.correctCategories.includes(cat.id)
                    const isWrong = showFeedback && isSelected && !item.correctCategories.includes(cat.id)
                    
                    return (
                      <button
                        key={cat.id}
                        onClick={() => handleToggleCategory(cat.id)}
                        disabled={showFeedback}
                        className={`flex-1 p-3 rounded-xl border-2 transition-all ${
                          isCorrect && isSelected ? 'border-green-500 bg-green-900/30'
                            : isWrong ? 'border-red-500 bg-red-900/30'
                            : isCorrect && !isSelected ? 'border-amber-500 bg-amber-900/30'
                            : isSelected ? 'border-emerald-500 bg-emerald-900/30'
                            : 'border-slate-600 bg-slate-700/30 hover:border-slate-500'
                        } ${showFeedback ? 'cursor-default' : 'cursor-pointer'}`}
                      >
                        <p className="font-bold text-white text-sm">{cat.name}</p>
                        <p className="text-xs text-slate-400">{cat.description}</p>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Feedback */}
            {showFeedback && (
              <div className="bg-slate-800/50 rounded-xl border border-emerald-500/30 p-6">
                <h4 className="text-lg font-bold text-white mb-3">Explanation:</h4>
                <p className="text-gray-300">{item.explanation}</p>
              </div>
            )}

            {/* Submit/Next */}
            <div className="flex justify-center">
              {!showFeedback ? (
                <button
                  onClick={handleSubmit}
                  disabled={selectedCategories.length === 0}
                  className={`px-8 py-3 font-bold rounded-xl transition-colors ${
                    selectedCategories.length === 0
                      ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                      : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                  }`}
                >
                  Submit Classification
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-colors flex items-center gap-2"
                >
                  Next Item <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DataSortingCentre
