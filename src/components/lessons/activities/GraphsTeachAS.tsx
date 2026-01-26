import { useState } from 'react'
import { BarChart3, PieChart, TrendingUp, Info } from 'lucide-react'

interface GraphsTeachASProps {
  isPresenting?: boolean
}

export default function GraphsTeachAS({ isPresenting }: GraphsTeachASProps) {
  const [selectedGraph, setSelectedGraph] = useState<string | null>(null)
  const [showWhenToUse, setShowWhenToUse] = useState(false)

  const graphTypes = [
    {
      id: 'bar',
      title: 'Bar Chart',
      icon: <BarChart3 className="w-8 h-8" />,
      description: 'Displays categorical data using rectangular bars',
      usedFor: 'Comparing totals or means between different conditions/groups',
      example: 'Mean words recalled in each memory condition',
      tips: [
        'Bars should be separated (not touching)',
        'Y-axis should start at zero',
        'Label both axes clearly'
      ],
      color: 'blue'
    },
    {
      id: 'histogram',
      title: 'Histogram',
      icon: <BarChart3 className="w-8 h-8" />,
      description: 'Shows frequency distribution of continuous data',
      usedFor: 'Showing how data is distributed across ranges',
      example: 'Distribution of reaction times (200-250ms, 250-300ms, etc.)',
      tips: [
        'Bars should TOUCH (continuous data)',
        'X-axis shows ranges/intervals',
        'Y-axis shows frequency'
      ],
      color: 'purple'
    },
    {
      id: 'line',
      title: 'Line Graph',
      icon: <TrendingUp className="w-8 h-8" />,
      description: 'Shows trends over continuous variables (often time)',
      usedFor: 'Tracking changes over time or continuous measurements',
      example: 'Stress levels measured over 12 weeks of therapy',
      tips: [
        'Points should be joined with lines',
        'Good for showing trends and patterns',
        'Can compare multiple conditions on same graph'
      ],
      color: 'green'
    },
    {
      id: 'scatter',
      title: 'Scattergram',
      icon: <PieChart className="w-8 h-8" />,
      description: 'Shows relationship between two co-variables',
      usedFor: 'Displaying correlational data',
      example: 'Hours of revision vs exam score',
      tips: [
        'Each point = one participant',
        'Can draw line of best fit',
        'Used for correlations, NOT experiments'
      ],
      color: 'cyan'
    }
  ]

  const colorMap: Record<string, { bg: string; border: string; text: string }> = {
    blue: { bg: 'bg-blue-900/30', border: 'border-blue-500/50', text: 'text-blue-400' },
    purple: { bg: 'bg-purple-900/30', border: 'border-purple-500/50', text: 'text-purple-400' },
    green: { bg: 'bg-green-900/30', border: 'border-green-500/50', text: 'text-green-400' },
    cyan: { bg: 'bg-cyan-900/30', border: 'border-cyan-500/50', text: 'text-cyan-400' }
  }

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-rose-400 mb-2">Types of Graphs</h2>
        <p className="text-gray-400 mb-6">Click each graph type to learn when and how to use it</p>

        {/* Definition */}
        <div className="bg-gray-800/50 rounded-xl p-4 border border-rose-500/30 mb-6">
          <p className="text-lg text-gray-200">
            Graphs provide a <span className="text-rose-400 font-bold">visual representation</span> of data, making patterns, trends, and comparisons easier to see at a glance.
          </p>
        </div>

        {/* Graph Type Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {graphTypes.map((graph) => {
            const colors = colorMap[graph.color]
            const isSelected = selectedGraph === graph.id
            return (
              <button
                key={graph.id}
                onClick={() => setSelectedGraph(selectedGraph === graph.id ? null : graph.id)}
                className={`${colors.bg} rounded-xl p-5 border-2 transition-all duration-300 text-left ${
                  isSelected 
                    ? `${colors.border} ring-2 ring-offset-2 ring-offset-gray-900 ${colors.border.replace('border-', 'ring-')}` 
                    : `${colors.border} hover:scale-[1.02]`
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={colors.text}>{graph.icon}</div>
                  <h3 className={`text-xl font-bold ${colors.text}`}>{graph.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{graph.description}</p>
              </button>
            )
          })}
        </div>

        {/* Selected Graph Details */}
        {selectedGraph && (
          <div className="animate-fadeIn">
            {graphTypes.filter(g => g.id === selectedGraph).map(graph => {
              const colors = colorMap[graph.color]
              return (
                <div key={graph.id} className={`${colors.bg} rounded-xl p-6 border ${colors.border}`}>
                  <h3 className={`text-xl font-bold ${colors.text} mb-4`}>
                    {graph.icon} {graph.title} - Details
                  </h3>

                  <div className="grid grid-cols-2 gap-6">
                    {/* Left: When to Use */}
                    <div>
                      <h4 className="font-bold text-gray-300 mb-2">📊 Used For:</h4>
                      <p className="text-gray-400 bg-gray-800/50 rounded p-3 mb-4">
                        {graph.usedFor}
                      </p>
                      
                      <h4 className="font-bold text-gray-300 mb-2">📝 Example:</h4>
                      <p className="text-gray-400 bg-gray-800/50 rounded p-3 italic text-sm">
                        "{graph.example}"
                      </p>
                    </div>

                    {/* Right: Tips */}
                    <div>
                      <h4 className="font-bold text-gray-300 mb-2">💡 Key Rules:</h4>
                      <ul className="space-y-2">
                        {graph.tips.map((tip, i) => (
                          <li 
                            key={i} 
                            className="bg-gray-800/50 rounded p-2 text-sm text-gray-300"
                          >
                            ✓ {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Visual Indicator */}
                  <div className="mt-4 bg-gray-800/80 rounded-lg p-4 flex items-center justify-center">
                    {graph.id === 'bar' && (
                      <div className="flex items-end gap-4 h-32">
                        <div className="w-12 bg-blue-500/70 rounded-t" style={{height: '60%'}}></div>
                        <div className="w-12 bg-blue-500/70 rounded-t" style={{height: '80%'}}></div>
                        <div className="w-12 bg-blue-500/70 rounded-t" style={{height: '45%'}}></div>
                      </div>
                    )}
                    {graph.id === 'histogram' && (
                      <div className="flex items-end gap-0 h-32">
                        <div className="w-10 bg-purple-500/70 border-r border-gray-800" style={{height: '30%'}}></div>
                        <div className="w-10 bg-purple-500/70 border-r border-gray-800" style={{height: '60%'}}></div>
                        <div className="w-10 bg-purple-500/70 border-r border-gray-800" style={{height: '85%'}}></div>
                        <div className="w-10 bg-purple-500/70 border-r border-gray-800" style={{height: '50%'}}></div>
                        <div className="w-10 bg-purple-500/70" style={{height: '20%'}}></div>
                      </div>
                    )}
                    {graph.id === 'line' && (
                      <svg viewBox="0 0 100 60" className="w-48 h-32">
                        <polyline
                          points="10,50 30,35 50,40 70,20 90,15"
                          fill="none"
                          stroke="#22c55e"
                          strokeWidth="2"
                        />
                        {[{x:10,y:50},{x:30,y:35},{x:50,y:40},{x:70,y:20},{x:90,y:15}].map((p,i) => (
                          <circle key={i} cx={p.x} cy={p.y} r="3" fill="#22c55e" />
                        ))}
                      </svg>
                    )}
                    {graph.id === 'scatter' && (
                      <div className="relative w-48 h-32 border-l-2 border-b-2 border-gray-600">
                        {[{x:15,y:75},{x:25,y:60},{x:35,y:55},{x:45,y:45},{x:55,y:35},{x:70,y:25},{x:80,y:20},{x:85,y:15}].map((p,i) => (
                          <div
                            key={i}
                            className="absolute w-2 h-2 rounded-full bg-cyan-500"
                            style={{left: `${p.x}%`, bottom: `${p.y}%`}}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* When to Use Each */}
        <button
          onClick={() => setShowWhenToUse(!showWhenToUse)}
          className="mt-4 w-full bg-amber-900/30 rounded-xl p-4 border border-amber-500/50 hover:bg-amber-900/40 transition-all"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-amber-400">
              <Info className="w-5 h-5 inline mr-2" />
              Quick Guide: Which Graph to Use?
            </h3>
            <span className="text-gray-400 text-sm">{showWhenToUse ? '▼' : '▶'}</span>
          </div>
          {showWhenToUse && (
            <div className="mt-4 grid grid-cols-2 gap-3 text-left animate-fadeIn">
              <div className="bg-gray-800/50 rounded-lg p-3">
                <p className="font-bold text-blue-400 text-sm">Comparing groups/conditions?</p>
                <p className="text-gray-400 text-xs">→ Bar Chart</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <p className="font-bold text-purple-400 text-sm">Showing frequency distribution?</p>
                <p className="text-gray-400 text-xs">→ Histogram</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <p className="font-bold text-green-400 text-sm">Showing change over time?</p>
                <p className="text-gray-400 text-xs">→ Line Graph</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <p className="font-bold text-cyan-400 text-sm">Showing correlational data?</p>
                <p className="text-gray-400 text-xs">→ Scattergram</p>
              </div>
            </div>
          )}
        </button>
      </div>
    </div>
  )
}
