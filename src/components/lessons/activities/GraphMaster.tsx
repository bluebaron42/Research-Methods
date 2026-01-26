import React, { useState, useMemo, useCallback } from 'react'
import { BarChart, CheckCircle, XCircle, ArrowRight, PieChart, LineChart, TrendingUp, Activity } from 'lucide-react'

interface DataScenario {
  id: number
  title: string
  description: string
  data: { label: string; value: number }[]
  correctGraph: 'bar' | 'histogram' | 'line' | 'scatter' | 'pie'
  explanation: string
  dataType: string
}

interface Props {
  isPresenting?: boolean
}

const GraphMaster: React.FC<Props> = ({ isPresenting = false }) => {
  const [currentScenario, setCurrentScenario] = useState(0)
  const [selectedGraph, setSelectedGraph] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState<number[]>([])

  const graphTypes = useMemo(() => [
    { id: 'bar', name: 'Bar Chart', icon: BarChart, description: 'Comparing categories', color: 'bg-blue-600' },
    { id: 'histogram', name: 'Histogram', icon: Activity, description: 'Continuous data distribution', color: 'bg-green-600' },
    { id: 'line', name: 'Line Graph', icon: LineChart, description: 'Trends over time', color: 'bg-purple-600' },
    { id: 'scatter', name: 'Scattergram', icon: TrendingUp, description: 'Correlation between variables', color: 'bg-amber-600' },
    { id: 'pie', name: 'Pie Chart', icon: PieChart, description: 'Proportions of a whole', color: 'bg-pink-600' }
  ], [])

  const scenarios: DataScenario[] = useMemo(() => [
    {
      id: 1,
      title: "Stress Levels by Job Type",
      description: "A psychologist measured average stress scores (0-100) for workers in five different job categories.",
      data: [
        { label: 'Teacher', value: 72 },
        { label: 'Doctor', value: 85 },
        { label: 'Office Worker', value: 58 },
        { label: 'Artist', value: 45 },
        { label: 'Retail', value: 62 }
      ],
      correctGraph: 'bar',
      explanation: "A BAR CHART is best because we're comparing discrete categories (job types). Each bar represents a separate group with no continuity between them.",
      dataType: "Categorical IV, Continuous DV"
    },
    {
      id: 2,
      title: "IQ Score Distribution",
      description: "A researcher tested IQ scores of 200 participants and wants to show how the scores are distributed.",
      data: [
        { label: '70-79', value: 5 },
        { label: '80-89', value: 25 },
        { label: '90-99', value: 70 },
        { label: '100-109', value: 65 },
        { label: '110-119', value: 25 },
        { label: '120-129', value: 10 }
      ],
      correctGraph: 'histogram',
      explanation: "A HISTOGRAM is correct because IQ is continuous data shown in class intervals. The bars touch (no gaps) to show the data is continuous, and we can see the normal distribution.",
      dataType: "Continuous data in intervals"
    },
    {
      id: 3,
      title: "Memory Performance Across Days",
      description: "Participants took memory tests each day for a week. The researcher wants to show how average performance changed over time.",
      data: [
        { label: 'Day 1', value: 45 },
        { label: 'Day 2', value: 52 },
        { label: 'Day 3', value: 58 },
        { label: 'Day 4', value: 61 },
        { label: 'Day 5', value: 65 },
        { label: 'Day 6', value: 68 },
        { label: 'Day 7', value: 70 }
      ],
      correctGraph: 'line',
      explanation: "A LINE GRAPH is ideal because we're showing change over time. The connected points emphasise the trend and progression of learning.",
      dataType: "Time series data"
    },
    {
      id: 4,
      title: "Study Time vs Exam Score",
      description: "A researcher measured how many hours 30 students studied and their subsequent exam scores to see if there's a relationship.",
      data: [
        { label: '2', value: 45 },
        { label: '5', value: 62 },
        { label: '8', value: 78 },
        { label: '3', value: 52 },
        { label: '6', value: 70 },
        { label: '10', value: 85 }
      ],
      correctGraph: 'scatter',
      explanation: "A SCATTERGRAM is correct because we're looking for a correlation between two continuous variables (study hours and exam score). Each point represents one participant.",
      dataType: "Two continuous variables (correlation)"
    },
    {
      id: 5,
      title: "Attachment Types in Children",
      description: "A researcher classified 100 children into attachment types using the Strange Situation procedure.",
      data: [
        { label: 'Secure', value: 65 },
        { label: 'Avoidant', value: 20 },
        { label: 'Resistant', value: 10 },
        { label: 'Disorganised', value: 5 }
      ],
      correctGraph: 'pie',
      explanation: "A PIE CHART works well here because we're showing how a whole sample is divided into categories. The percentages of each attachment type are parts of one total.",
      dataType: "Proportions of categories"
    },
    {
      id: 6,
      title: "Reaction Time Distribution",
      description: "A cognitive psychologist recorded 500 reaction times (in milliseconds) and wants to display the spread of responses.",
      data: [
        { label: '200-250', value: 45 },
        { label: '250-300', value: 120 },
        { label: '300-350', value: 180 },
        { label: '350-400', value: 110 },
        { label: '400-450', value: 35 },
        { label: '450-500', value: 10 }
      ],
      correctGraph: 'histogram',
      explanation: "A HISTOGRAM is appropriate because reaction time is continuous data grouped into intervals. It shows the distribution shape (positively skewed in this case).",
      dataType: "Continuous data distribution"
    },
    {
      id: 7,
      title: "Age vs. Life Satisfaction",
      description: "A survey collected data from 50 adults about their age and life satisfaction rating (1-100).",
      data: [
        { label: '20', value: 65 },
        { label: '30', value: 58 },
        { label: '40', value: 52 },
        { label: '50', value: 55 },
        { label: '60', value: 68 },
        { label: '70', value: 75 }
      ],
      correctGraph: 'scatter',
      explanation: "A SCATTERGRAM is best for exploring the relationship between age (continuous) and satisfaction (continuous). It reveals the U-shaped pattern in life satisfaction research.",
      dataType: "Two continuous variables"
    },
    {
      id: 8,
      title: "Therapy Success by Type",
      description: "Comparing the effectiveness (average improvement score) of four different therapy types.",
      data: [
        { label: 'CBT', value: 72 },
        { label: 'Psychoanalysis', value: 55 },
        { label: 'Humanistic', value: 68 },
        { label: 'Drug Therapy', value: 65 }
      ],
      correctGraph: 'bar',
      explanation: "A BAR CHART is correct because we're comparing distinct therapy categories. There's no continuous relationship between therapy types.",
      dataType: "Categorical comparison"
    }
  ], [])

  const scenario = scenarios[currentScenario]
  const isComplete = currentScenario === scenarios.length - 1 && showFeedback
  const isCorrect = selectedGraph === scenario.correctGraph

  const handleSelectGraph = useCallback((graphId: string) => {
    if (showFeedback) return
    setSelectedGraph(graphId)
  }, [showFeedback])

  const handleSubmit = useCallback(() => {
    setShowFeedback(true)
    if (isCorrect) {
      setScore(prev => prev + 1)
      setCompleted(prev => [...prev, scenario.id])
    }
  }, [isCorrect, scenario.id])

  const handleNext = useCallback(() => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(prev => prev + 1)
      setSelectedGraph(null)
      setShowFeedback(false)
    }
  }, [currentScenario, scenarios.length])

  const handleRestart = useCallback(() => {
    setCurrentScenario(0)
    setSelectedGraph(null)
    setShowFeedback(false)
    setScore(0)
    setCompleted([])
  }, [])

  const getGraphRank = useCallback(() => {
    const percentage = (score / scenarios.length) * 100
    if (percentage >= 90) return { rank: "Graph Grandmaster", emoji: "📊" }
    if (percentage >= 70) return { rank: "Chart Champion", emoji: "📈" }
    if (percentage >= 50) return { rank: "Data Displayer", emoji: "📉" }
    return { rank: "Graph Novice", emoji: "📋" }
  }, [score, scenarios.length])

  // Simple data preview rendering
  const renderDataPreview = () => {
    const maxValue = Math.max(...scenario.data.map(d => d.value))
    return (
      <div className="space-y-2">
        {scenario.data.slice(0, 4).map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-sm text-slate-400 w-20 truncate">{item.label}</span>
            <div className="flex-1 bg-slate-700 rounded-full h-4 overflow-hidden">
              <div 
                className="h-full bg-teal-500 rounded-full transition-all"
                style={{ width: `${(item.value / maxValue) * 100}%` }}
              />
            </div>
            <span className="text-white font-mono text-sm w-12">{item.value}</span>
          </div>
        ))}
        {scenario.data.length > 4 && (
          <p className="text-slate-500 text-sm">...and {scenario.data.length - 4} more</p>
        )}
      </div>
    )
  }

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-6 bg-gradient-to-br from-slate-900 via-teal-900/20 to-slate-900`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-teal-500/20 rounded-lg">
              <BarChart className="w-6 h-6 text-teal-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Graph Master</h2>
              <p className="text-teal-300 text-sm">Choose the best graph for each dataset</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
              <span className="text-slate-400 text-sm">Score: </span>
              <span className="text-white font-bold">{score}/{scenarios.length}</span>
            </div>
            <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
              <span className="text-slate-400 text-sm">Dataset: </span>
              <span className="text-white font-bold">{currentScenario + 1}/{scenarios.length}</span>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="flex gap-1 mb-6">
          {scenarios.map((s, i) => (
            <div
              key={s.id}
              className={`h-2 flex-1 rounded-full transition-all ${
                i === currentScenario ? 'bg-teal-400' : completed.includes(s.id) ? 'bg-green-500' : i < currentScenario ? 'bg-red-500' : 'bg-slate-600'
              }`}
            />
          ))}
        </div>

        {isComplete ? (
          /* Final Results */
          <div className="bg-slate-800/50 rounded-2xl border border-teal-500/30 p-8 text-center">
            <div className="text-6xl mb-4">{getGraphRank().emoji}</div>
            <h3 className="text-3xl font-bold text-white mb-2">Graph Mastery Complete!</h3>
            <p className="text-xl text-teal-300 mb-4">Rank: {getGraphRank().rank}</p>
            <div className="text-4xl font-bold text-white mb-6">
              {score}/{scenarios.length} Correct
            </div>
            <div className="grid grid-cols-5 gap-3 max-w-lg mx-auto mb-6">
              {graphTypes.map(g => (
                <div key={g.id} className="bg-slate-700/50 rounded-lg p-3 text-center">
                  <g.icon className="w-6 h-6 mx-auto mb-1 text-slate-300" />
                  <p className="text-xs text-slate-400">{g.name}</p>
                </div>
              ))}
            </div>
            <button
              onClick={handleRestart}
              className="px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-xl transition-colors"
            >
              Try Again 🔄
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {/* Scenario */}
            <div className="col-span-2 space-y-4">
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
                <h3 className="text-xl font-bold text-white mb-2">{scenario.title}</h3>
                <p className="text-gray-300 mb-4">{scenario.description}</p>
                <div className="p-4 bg-slate-700/50 rounded-lg">
                  <p className="text-sm text-slate-400 mb-3">Data Preview:</p>
                  {renderDataPreview()}
                </div>
                <p className="text-sm text-teal-400 mt-3">Data type: {scenario.dataType}</p>
              </div>

              {/* Graph Selection */}
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
                <h4 className="text-lg font-bold text-white mb-4">
                  {showFeedback ? 'Result' : 'Which graph type is most appropriate?'}
                </h4>
                <div className="grid grid-cols-5 gap-3">
                  {graphTypes.map(graph => {
                    const isSelected = selectedGraph === graph.id
                    const isAnswer = showFeedback && graph.id === scenario.correctGraph
                    const isWrong = showFeedback && isSelected && !isAnswer
                    
                    return (
                      <button
                        key={graph.id}
                        onClick={() => handleSelectGraph(graph.id)}
                        disabled={showFeedback}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          isAnswer ? 'border-green-500 bg-green-900/30 scale-105'
                            : isWrong ? 'border-red-500 bg-red-900/30'
                            : isSelected ? 'border-teal-500 bg-teal-900/30'
                            : 'border-slate-600 bg-slate-700/30 hover:border-slate-500'
                        } ${showFeedback ? 'cursor-default' : 'cursor-pointer'}`}
                      >
                        <div className={`p-2 rounded-lg ${graph.color} w-fit mx-auto mb-2`}>
                          <graph.icon className="w-6 h-6 text-white" />
                        </div>
                        <p className="font-bold text-white text-sm">{graph.name}</p>
                        <p className="text-xs text-slate-400 mt-1">{graph.description}</p>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Feedback */}
              {showFeedback && (
                <div className={`p-5 rounded-xl border ${
                  isCorrect ? 'bg-green-900/30 border-green-500/50' : 'bg-red-900/30 border-red-500/50'
                }`}>
                  <div className="flex items-center gap-2 mb-3">
                    {isCorrect ? (
                      <>
                        <CheckCircle className="w-6 h-6 text-green-400" />
                        <span className="text-green-400 font-bold text-lg">Correct!</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-6 h-6 text-red-400" />
                        <span className="text-red-400 font-bold text-lg">Not quite</span>
                      </>
                    )}
                  </div>
                  <p className="text-gray-300">{scenario.explanation}</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-4">
                <h4 className="text-sm font-bold text-slate-400 mb-3">GRAPH GUIDE</h4>
                <div className="space-y-3 text-sm">
                  <div className="p-2 bg-slate-700/50 rounded">
                    <p className="text-blue-400 font-bold">Bar Chart</p>
                    <p className="text-slate-300">Comparing categories</p>
                  </div>
                  <div className="p-2 bg-slate-700/50 rounded">
                    <p className="text-green-400 font-bold">Histogram</p>
                    <p className="text-slate-300">Distribution of continuous data</p>
                  </div>
                  <div className="p-2 bg-slate-700/50 rounded">
                    <p className="text-purple-400 font-bold">Line Graph</p>
                    <p className="text-slate-300">Change over time</p>
                  </div>
                  <div className="p-2 bg-slate-700/50 rounded">
                    <p className="text-amber-400 font-bold">Scattergram</p>
                    <p className="text-slate-300">Correlation (2 variables)</p>
                  </div>
                  <div className="p-2 bg-slate-700/50 rounded">
                    <p className="text-pink-400 font-bold">Pie Chart</p>
                    <p className="text-slate-300">Proportions of whole</p>
                  </div>
                </div>
              </div>

              {!showFeedback ? (
                <button
                  onClick={handleSubmit}
                  disabled={!selectedGraph}
                  className={`w-full py-3 font-bold rounded-xl transition-colors ${
                    !selectedGraph
                      ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                      : 'bg-teal-600 hover:bg-teal-500 text-white'
                  }`}
                >
                  Submit Choice
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="w-full py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  Next Dataset <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default GraphMaster
