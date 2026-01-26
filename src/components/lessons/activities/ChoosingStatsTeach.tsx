import { useState } from 'react'
import { HelpCircle, CheckCircle, Target, ArrowRight } from 'lucide-react'

interface ChoosingStatsTeachProps {
  isPresenting?: boolean
}

export default function ChoosingStatsTeach({ isPresenting }: ChoosingStatsTeachProps) {
  const [activeScenario, setActiveScenario] = useState<number | null>(null)
  const [showDecisionTree, setShowDecisionTree] = useState(false)
  const [revealedTips, setRevealedTips] = useState(0)

  const scenarios = [
    {
      id: 1,
      situation: "Normal distribution, no outliers",
      data: "Test scores: 65, 70, 72, 74, 75, 76, 78, 80, 82",
      bestCentral: "Mean",
      bestDispersion: "Standard Deviation",
      reason: "Data is symmetrical and SD uses all values effectively",
      color: "blue"
    },
    {
      id: 2,
      situation: "Skewed data with outliers",
      data: "Salaries: £20k, £22k, £23k, £25k, £28k, £150k",
      bestCentral: "Median",
      bestDispersion: "Range (with caution)",
      reason: "The £150k outlier would distort the mean significantly",
      color: "amber"
    },
    {
      id: 3,
      situation: "Categorical/nominal data",
      data: "Favourite colours: Red, Blue, Blue, Green, Blue, Red",
      bestCentral: "Mode",
      bestDispersion: "N/A",
      reason: "Can only count frequency of categories, not calculate averages",
      color: "purple"
    },
    {
      id: 4,
      situation: "Small sample with extreme value",
      data: "Reaction times: 250ms, 260ms, 270ms, 890ms",
      bestCentral: "Median",
      bestDispersion: "Range (noting outlier)",
      reason: "890ms is likely an error or anomaly - median ignores it",
      color: "red"
    }
  ]

  const decisionTips = [
    {
      tip: "Check for outliers first",
      detail: "Extreme values can distort mean and range"
    },
    {
      tip: "Consider data type",
      detail: "Mode is the only option for categorical data"
    },
    {
      tip: "Look at distribution shape",
      detail: "Symmetrical = mean, Skewed = median"
    },
    {
      tip: "Think about your purpose",
      detail: "What do you want to communicate about your data?"
    }
  ]

  const colorMap: Record<string, { bg: string; border: string; text: string }> = {
    blue: { bg: 'bg-blue-900/30', border: 'border-blue-500/50', text: 'text-blue-400' },
    amber: { bg: 'bg-amber-900/30', border: 'border-amber-500/50', text: 'text-amber-400' },
    purple: { bg: 'bg-purple-900/30', border: 'border-purple-500/50', text: 'text-purple-400' },
    red: { bg: 'bg-red-900/30', border: 'border-red-500/50', text: 'text-red-400' }
  }

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-rose-400 mb-2">Choosing the Right Statistics</h2>
        <p className="text-gray-400 mb-6">When to use mean, median, mode, range, or SD</p>

        {/* Key Question */}
        <div className="bg-gray-800/50 rounded-xl p-4 border border-rose-500/30 mb-6">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-rose-400" />
            <p className="text-lg text-gray-200">
              The <span className="text-rose-400 font-bold">best statistic</span> depends on your <span className="text-rose-400 font-bold">data type</span>, <span className="text-rose-400 font-bold">distribution</span>, and whether there are <span className="text-rose-400 font-bold">outliers</span>.
            </p>
          </div>
        </div>

        {/* Scenario Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {scenarios.map((scenario) => {
            const colors = colorMap[scenario.color]
            const isActive = activeScenario === scenario.id
            return (
              <button
                key={scenario.id}
                onClick={() => setActiveScenario(activeScenario === scenario.id ? null : scenario.id)}
                className={`${colors.bg} rounded-xl p-4 border-2 transition-all duration-300 text-left ${
                  isActive 
                    ? `${colors.border} ring-2 ring-offset-2 ring-offset-gray-900 ${colors.border.replace('border-', 'ring-')}` 
                    : `${colors.border} hover:scale-[1.02]`
                }`}
              >
                <h3 className={`font-bold ${colors.text} mb-2`}>Scenario {scenario.id}</h3>
                <p className="text-gray-300 text-sm mb-2">{scenario.situation}</p>
                <p className="text-gray-500 text-xs font-mono">{scenario.data}</p>
                
                {isActive && (
                  <div className="mt-4 pt-4 border-t border-gray-600 animate-fadeIn">
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div className="bg-gray-800/50 rounded p-2">
                        <p className="text-xs text-gray-500">Best Central Tendency</p>
                        <p className="font-bold text-green-400">{scenario.bestCentral}</p>
                      </div>
                      <div className="bg-gray-800/50 rounded p-2">
                        <p className="text-xs text-gray-500">Best Dispersion</p>
                        <p className="font-bold text-cyan-400">{scenario.bestDispersion}</p>
                      </div>
                    </div>
                    <div className="bg-gray-800/80 rounded p-2">
                      <p className="text-xs text-gray-400">
                        <strong>Why?</strong> {scenario.reason}
                      </p>
                    </div>
                  </div>
                )}
              </button>
            )
          })}
        </div>

        {/* Decision Tips */}
        <button
          onClick={() => setShowDecisionTree(!showDecisionTree)}
          className="w-full bg-gray-800/50 rounded-xl p-4 border border-cyan-500/30 hover:bg-gray-700/50 transition-all"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-cyan-400">
              <Target className="w-5 h-5 inline mr-2" />
              Decision-Making Tips
            </h3>
            <span className="text-gray-400 text-sm">{showDecisionTree ? '▼' : '▶ Click to expand'}</span>
          </div>
          
          {showDecisionTree && (
            <div className="mt-4 animate-fadeIn">
              <div className="grid grid-cols-2 gap-3">
                {decisionTips.map((tip, i) => {
                  const isRevealed = i < revealedTips
                  return (
                    <button
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation()
                        !isRevealed && setRevealedTips(prev => prev + 1)
                      }}
                      className={`text-left p-3 rounded-lg transition-all ${
                        isRevealed 
                          ? 'bg-cyan-900/30 border border-cyan-500/30' 
                          : 'bg-gray-700/30 border border-dashed border-gray-600 hover:bg-gray-700/50 cursor-pointer'
                      }`}
                    >
                      {isRevealed ? (
                        <div className="animate-fadeIn">
                          <div className="flex items-center gap-2 mb-1">
                            <CheckCircle className="w-4 h-4 text-cyan-400" />
                            <p className="font-bold text-cyan-400 text-sm">{tip.tip}</p>
                          </div>
                          <p className="text-gray-400 text-xs">{tip.detail}</p>
                        </div>
                      ) : (
                        <span className="text-gray-500 text-sm">Click to reveal tip {i + 1}...</span>
                      )}
                    </button>
                  )
                })}
              </div>

              {/* Progress */}
              <div className="flex justify-center gap-2 mt-4">
                {decisionTips.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i < revealedTips ? 'bg-cyan-500' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </button>

        {/* Quick Reference */}
        {revealedTips >= 4 && (
          <div className="mt-4 bg-green-900/20 rounded-xl p-4 border border-green-500/30 animate-fadeIn">
            <h3 className="font-bold text-green-400 mb-3">📋 Quick Reference</h3>
            <div className="grid grid-cols-3 gap-3 text-sm">
              <div className="bg-gray-800/50 rounded p-2">
                <p className="font-bold text-blue-400">Mean + SD</p>
                <p className="text-gray-400 text-xs">Normal distribution, no outliers</p>
              </div>
              <div className="bg-gray-800/50 rounded p-2">
                <p className="font-bold text-amber-400">Median + Range</p>
                <p className="text-gray-400 text-xs">Skewed data or outliers</p>
              </div>
              <div className="bg-gray-800/50 rounded p-2">
                <p className="font-bold text-purple-400">Mode only</p>
                <p className="text-gray-400 text-xs">Categorical/nominal data</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
