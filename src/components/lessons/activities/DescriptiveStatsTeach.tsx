import React, { useState } from 'react'
import { ChevronRight, Calculator, TrendingUp, Minus, BarChart2, Lightbulb } from 'lucide-react'

interface Props {
  isPresenting: boolean
}

export const DescriptiveStatsTeach: React.FC<Props> = ({ isPresenting }) => {
  const [revealedCount, setRevealedCount] = useState(0)
  const [showExample, setShowExample] = useState(false)

  const measures = [
    { 
      title: 'Mean', 
      icon: <Calculator size={isPresenting ? 24 : 18} />, 
      color: 'blue',
      type: 'Central Tendency',
      desc: 'The arithmetic average - add all values and divide by the number of values.',
      formula: 'Sum of all values ÷ Number of values',
      pros: ['Uses all data', 'Good for normal distributions', 'Most sensitive measure'],
      cons: ['Affected by extreme scores (outliers)', 'Not suitable for skewed data'],
      when: 'Use when data is normally distributed with no extreme outliers'
    },
    { 
      title: 'Median', 
      icon: <Minus size={isPresenting ? 24 : 18} />, 
      color: 'green',
      type: 'Central Tendency',
      desc: 'The middle value when data is arranged in order.',
      formula: 'Middle value (or average of two middle values if even number)',
      pros: ['Not affected by outliers', 'Good for skewed data', 'Works with ordinal data'],
      cons: ['Doesn\'t use all data values', 'Less sensitive than mean'],
      when: 'Use when data is skewed or has outliers'
    },
    { 
      title: 'Mode', 
      icon: <TrendingUp size={isPresenting ? 24 : 18} />, 
      color: 'amber',
      type: 'Central Tendency',
      desc: 'The most frequently occurring value.',
      formula: 'Value that appears most often',
      pros: ['Works with any data type', 'Not affected by outliers', 'Can have multiple modes'],
      cons: ['May not exist', 'May have multiple modes', 'Ignores most data'],
      when: 'Use with categorical/nominal data or when you want the "typical" value'
    },
    { 
      title: 'Range', 
      icon: <BarChart2 size={isPresenting ? 24 : 18} />, 
      color: 'rose',
      type: 'Dispersion',
      desc: 'The difference between the highest and lowest values.',
      formula: 'Highest value - Lowest value',
      pros: ['Easy to calculate', 'Shows spread at a glance'],
      cons: ['Only uses two values', 'Heavily affected by outliers', 'Ignores distribution'],
      when: 'Use for a quick overview of spread, but supplement with other measures'
    },
    { 
      title: 'Standard Deviation', 
      icon: <BarChart2 size={isPresenting ? 24 : 18} />, 
      color: 'purple',
      type: 'Dispersion',
      desc: 'Measures average distance from the mean - shows how spread out the data is.',
      formula: '√(Σ(x - mean)² ÷ n)',
      pros: ['Uses all data', 'Precise measure of spread', 'Used in further analysis'],
      cons: ['Affected by outliers', 'Complex to calculate', 'Hard to interpret alone'],
      when: 'Use when you need a precise measure of variability around the mean'
    },
  ]

  const exampleData = [2, 4, 4, 5, 7, 8, 9, 15]
  
  const colorMap: Record<string, { border: string, bg: string, text: string, iconBg: string, activeBorder: string }> = {
    blue:   { border: 'border-blue-500/50',   bg: 'bg-blue-900/30',   text: 'text-blue-300',   iconBg: 'bg-blue-500/30', activeBorder: 'border-blue-400' },
    green:  { border: 'border-green-500/50',  bg: 'bg-green-900/30',  text: 'text-green-300',  iconBg: 'bg-green-500/30', activeBorder: 'border-green-400' },
    amber:  { border: 'border-amber-500/50',  bg: 'bg-amber-900/30',  text: 'text-amber-300',  iconBg: 'bg-amber-500/30', activeBorder: 'border-amber-400' },
    rose:   { border: 'border-rose-500/50',   bg: 'bg-rose-900/30',   text: 'text-rose-300',   iconBg: 'bg-rose-500/30', activeBorder: 'border-rose-400' },
    purple: { border: 'border-purple-500/50', bg: 'bg-purple-900/30', text: 'text-purple-300', iconBg: 'bg-purple-500/30', activeBorder: 'border-purple-400' },
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-5' : 'p-3'} overflow-auto`}>
      <div className="mb-3 text-center">
        <h2 className={`${isPresenting ? 'text-3xl' : 'text-xl'} font-black text-white mb-1`}>Descriptive Statistics</h2>
        <p className={`${isPresenting ? 'text-base' : 'text-xs'} text-gray-400`}>Click each measure to reveal - summarising your data</p>
      </div>

      {/* Click-to-Reveal Cards - Scrollable row */}
      <div className={`flex gap-2 max-w-6xl mx-auto w-full mb-3 overflow-x-auto pb-2`}>
        {measures.map((m, i) => (
          <div 
            key={i}
            onClick={() => i === revealedCount && setRevealedCount(prev => prev + 1)}
            className={`flex-shrink-0 ${isPresenting ? 'w-44' : 'w-36'} rounded-xl border-2 ${colorMap[m.color].border} ${colorMap[m.color].bg} ${isPresenting ? 'p-3' : 'p-2'} transition-all duration-500 cursor-pointer ${
              i < revealedCount 
                ? 'opacity-100 scale-100' 
                : i === revealedCount 
                  ? 'opacity-100 scale-100 ring-2 ring-white/20 animate-pulse' 
                  : 'opacity-30 scale-95'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <div className={`${isPresenting ? 'w-8 h-8' : 'w-6 h-6'} rounded-full ${colorMap[m.color].iconBg} flex items-center justify-center ${colorMap[m.color].text}`}>
                {m.icon}
              </div>
              <div>
                <h3 className={`${isPresenting ? 'text-sm' : 'text-xs'} font-bold ${colorMap[m.color].text}`}>{m.title}</h3>
                <span className="text-[8px] text-gray-500">{m.type}</span>
              </div>
            </div>
            {i < revealedCount ? (
              <div className="animate-fadeIn">
                <p className={`text-gray-200 ${isPresenting ? 'text-xs' : 'text-[10px]'} mb-1`}>{m.desc}</p>
                <div className={`${colorMap[m.color].bg} rounded p-1 border ${colorMap[m.color].border}`}>
                  <p className={`text-[9px] ${colorMap[m.color].text} font-mono`}>{m.formula}</p>
                </div>
              </div>
            ) : i === revealedCount ? (
              <p className={`${colorMap[m.color].text} text-[10px] italic`}>Click to reveal...</p>
            ) : (
              <p className="text-gray-600 text-[10px]">Locked</p>
            )}
          </div>
        ))}
      </div>

      {/* Progress indicator */}
      <div className="flex justify-center items-center gap-2 mb-3">
        {measures.map((_, i) => (
          <div key={i} className={`w-2 h-2 rounded-full transition-colors ${i < revealedCount ? 'bg-green-500' : 'bg-gray-600'}`} />
        ))}
        <span className="ml-2 text-gray-400 text-xs">{revealedCount}/5</span>
        {revealedCount < 5 && (
          <button onClick={() => setRevealedCount(5)} className="ml-2 text-gray-500 hover:text-gray-300 text-xs">Skip →</button>
        )}
      </div>

      {/* When to Use Summary - Shows after all revealed */}
      {revealedCount >= 5 && (
        <div className="max-w-4xl mx-auto w-full animate-fadeIn">
          <h3 className={`${isPresenting ? 'text-lg' : 'text-sm'} font-bold text-white mb-2 text-center`}>When to Use Each Measure</h3>
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="bg-blue-900/20 rounded-lg p-2 border border-blue-500/30 text-center">
              <p className="text-xs text-blue-300 font-semibold">Mean + SD</p>
              <p className="text-[10px] text-gray-400">Normal distribution, no outliers</p>
            </div>
            <div className="bg-green-900/20 rounded-lg p-2 border border-green-500/30 text-center">
              <p className="text-xs text-green-300 font-semibold">Median + Range</p>
              <p className="text-[10px] text-gray-400">Skewed data or outliers</p>
            </div>
            <div className="bg-amber-900/20 rounded-lg p-2 border border-amber-500/30 text-center">
              <p className="text-xs text-amber-300 font-semibold">Mode</p>
              <p className="text-[10px] text-gray-400">Categorical/nominal data</p>
            </div>
          </div>
        </div>
      )}

      {/* Worked Example Button */}
      {revealedCount >= 5 && (
        <div className="flex flex-col items-center">
          <button
            onClick={() => setShowExample(!showExample)}
            className={`px-4 py-2 text-sm bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-lg transition-all`}
          >
            {showExample ? 'Hide Worked Example' : 'Show Worked Example'}
          </button>
          
          {showExample && (
            <div className="mt-3 max-w-4xl w-full rounded-xl border border-cyan-500/50 bg-cyan-900/20 p-3 animate-fadeIn">
              <h4 className="text-sm font-bold text-cyan-300 mb-2">📊 Data: {exampleData.join(', ')}</h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                <div className="bg-gray-800/50 rounded p-2 border border-blue-500/30">
                  <p className="text-xs text-blue-300 font-semibold">Mean</p>
                  <p className="text-[10px] text-gray-400">(2+4+4+5+7+8+9+15)÷8</p>
                  <p className="text-sm text-blue-200 font-bold">= 6.75</p>
                </div>
                <div className="bg-gray-800/50 rounded p-2 border border-green-500/30">
                  <p className="text-xs text-green-300 font-semibold">Median</p>
                  <p className="text-[10px] text-gray-400">Middle: (5+7)÷2</p>
                  <p className="text-sm text-green-200 font-bold">= 6</p>
                </div>
                <div className="bg-gray-800/50 rounded p-2 border border-amber-500/30">
                  <p className="text-xs text-amber-300 font-semibold">Mode</p>
                  <p className="text-[10px] text-gray-400">Most common</p>
                  <p className="text-sm text-amber-200 font-bold">= 4</p>
                </div>
                <div className="bg-gray-800/50 rounded p-2 border border-rose-500/30">
                  <p className="text-xs text-rose-300 font-semibold">Range</p>
                  <p className="text-[10px] text-gray-400">15 - 2</p>
                  <p className="text-sm text-rose-200 font-bold">= 13</p>
                </div>
                <div className="bg-gray-800/50 rounded p-2 border border-purple-500/30">
                  <p className="text-xs text-purple-300 font-semibold">SD</p>
                  <p className="text-[10px] text-gray-400">√variance</p>
                  <p className="text-sm text-purple-200 font-bold">≈ 3.96</p>
                </div>
              </div>
              <div className="mt-2 p-2 bg-amber-900/20 rounded border border-amber-500/30 flex gap-2">
                <Lightbulb className="text-amber-400 flex-shrink-0" size={14} />
                <p className="text-[10px] text-amber-200">
                  Note: The outlier (15) pulls the mean (6.75) above the median (6). For this skewed data, the <span className="font-semibold">median is a better measure</span> of central tendency.
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
