import { useState } from 'react'
import { Table, CheckCircle, Info } from 'lucide-react'

interface TablesTeachProps {
  isPresenting?: boolean
}

export default function TablesTeach({ isPresenting }: TablesTeachProps) {
  const [revealedRules, setRevealedRules] = useState(0)
  const [showExample, setShowExample] = useState(false)
  const [showCommon, setShowCommon] = useState(false)

  const tableRules = [
    {
      rule: "Clear title",
      description: "Describe what the table shows (variables, conditions)",
      icon: "📋"
    },
    {
      rule: "Labelled columns/rows",
      description: "Each column and row should have a clear heading",
      icon: "🏷️"
    },
    {
      rule: "Include units",
      description: "State units of measurement (ms, %, etc.)",
      icon: "📐"
    },
    {
      rule: "Raw data or summaries",
      description: "Include means, totals, or individual scores as appropriate",
      icon: "🔢"
    },
    {
      rule: "Consistent decimal places",
      description: "Use the same precision throughout (e.g., all to 2 d.p.)",
      icon: "➗"
    }
  ]

  const exampleData = {
    title: "Mean recall scores (out of 20) in different conditions",
    headers: ["Condition", "Mean", "SD"],
    rows: [
      ["Imagery", "15.4", "2.3"],
      ["Rehearsal", "12.1", "3.1"],
      ["No strategy", "8.7", "2.8"]
    ]
  }

  const commonMistakes = [
    { mistake: "No title", fix: "Always include a descriptive title" },
    { mistake: "Missing units", fix: "State what the numbers represent" },
    { mistake: "Too much raw data", fix: "Summarise with means/totals where appropriate" },
    { mistake: "Inconsistent formatting", fix: "Align numbers and use same decimal places" }
  ]

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-rose-400 mb-2">Data Tables</h2>
        <p className="text-gray-400 mb-6">How to present data clearly in table format</p>

        {/* Definition */}
        <div className="bg-gray-800/50 rounded-xl p-4 border border-rose-500/30 mb-6">
          <div className="flex items-center gap-3">
            <Table className="w-6 h-6 text-rose-400" />
            <p className="text-lg text-gray-200">
              Tables organise data into <span className="text-rose-400 font-bold">rows and columns</span> to make patterns and comparisons easy to see.
            </p>
          </div>
        </div>

        {/* Rules for Good Tables */}
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-bold text-cyan-400 mb-4">📋 Rules for Good Tables (click to reveal)</h3>
          
          <div className="space-y-3">
            {tableRules.map((rule, index) => {
              const isRevealed = index < revealedRules
              return (
                <button
                  key={index}
                  onClick={() => !isRevealed && setRevealedRules(prev => prev + 1)}
                  className={`w-full text-left transition-all duration-300 ${
                    isRevealed ? 'cursor-default' : 'cursor-pointer hover:bg-gray-700/30'
                  }`}
                >
                  {isRevealed ? (
                    <div className="flex items-center gap-4 bg-cyan-900/20 rounded-lg p-3 border border-cyan-500/30 animate-fadeIn">
                      <span className="text-2xl">{rule.icon}</span>
                      <div>
                        <p className="font-bold text-cyan-400">{rule.rule}</p>
                        <p className="text-gray-400 text-sm">{rule.description}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-700/20 rounded-lg p-3 border border-dashed border-gray-600">
                      <span className="text-gray-500">Click to reveal rule {index + 1}...</span>
                    </div>
                  )}
                </button>
              )
            })}
          </div>

          {/* Progress */}
          <div className="flex justify-center gap-2 mt-4">
            {tableRules.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i < revealedRules ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Example Table */}
        {revealedRules >= 5 && (
          <button
            onClick={() => setShowExample(!showExample)}
            className="w-full mb-4 animate-fadeIn"
          >
            <div className="bg-green-900/30 rounded-xl p-4 border border-green-500/30 hover:bg-green-900/40 transition-all">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-green-400">
                  <CheckCircle className="w-5 h-5 inline mr-2" />
                  Example of a Good Table
                </h3>
                <span className="text-gray-400 text-sm">{showExample ? '▼' : '▶'}</span>
              </div>
              
              {showExample && (
                <div className="mt-4 animate-fadeIn">
                  <p className="text-gray-300 text-sm font-bold mb-3">{exampleData.title}</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-green-500/30">
                          {exampleData.headers.map((header, i) => (
                            <th key={i} className="p-2 text-green-400 font-bold">{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {exampleData.rows.map((row, i) => (
                          <tr key={i} className="border-b border-gray-700">
                            {row.map((cell, j) => (
                              <td key={j} className={`p-2 ${j === 0 ? 'text-gray-300' : 'text-gray-400 font-mono'}`}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-xs bg-green-900/50 text-green-300 px-2 py-1 rounded">✓ Clear title</span>
                    <span className="text-xs bg-green-900/50 text-green-300 px-2 py-1 rounded">✓ Labelled columns</span>
                    <span className="text-xs bg-green-900/50 text-green-300 px-2 py-1 rounded">✓ Units specified</span>
                    <span className="text-xs bg-green-900/50 text-green-300 px-2 py-1 rounded">✓ Summary stats</span>
                    <span className="text-xs bg-green-900/50 text-green-300 px-2 py-1 rounded">✓ Consistent d.p.</span>
                  </div>
                </div>
              )}
            </div>
          </button>
        )}

        {/* Common Mistakes */}
        {showExample && (
          <button
            onClick={() => setShowCommon(!showCommon)}
            className="w-full animate-fadeIn"
          >
            <div className="bg-red-900/30 rounded-xl p-4 border border-red-500/30 hover:bg-red-900/40 transition-all">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-red-400">
                  <Info className="w-5 h-5 inline mr-2" />
                  Common Mistakes to Avoid
                </h3>
                <span className="text-gray-400 text-sm">{showCommon ? '▼' : '▶'}</span>
              </div>
              
              {showCommon && (
                <div className="mt-4 grid grid-cols-2 gap-3 animate-fadeIn">
                  {commonMistakes.map((item, i) => (
                    <div key={i} className="bg-gray-800/50 rounded-lg p-3">
                      <p className="text-red-400 text-sm font-bold">✗ {item.mistake}</p>
                      <p className="text-green-400 text-xs mt-1">→ {item.fix}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </button>
        )}
      </div>
    </div>
  )
}
