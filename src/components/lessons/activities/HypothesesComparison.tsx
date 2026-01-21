import React from 'react'
import { Check, X } from 'lucide-react'

interface Props {
  level: 'gcse' | 'aslevel'
}

export const HypothesesComparison: React.FC<Props> = ({ level }) => {
  const scenarios = [
    {
      scenario: "A researcher wants to study the effect of background noise on concentration.",
      examples: {
        aim: "To investigate the effect of background noise on concentration",
        directional: "Students will concentrate better in silence than with background noise",
        nondirectional: "There will be a difference in concentration levels between silence and background noise conditions"
      }
    },
    {
      scenario: "A study examines whether sleep duration affects academic performance.",
      examples: {
        aim: "To examine the relationship between sleep duration and academic performance",
        directional: "Students who sleep 8+ hours will have higher exam scores than those sleeping less than 6 hours",
        nondirectional: "There will be a difference in exam scores between students with different sleep durations"
      }
    },
    {
      scenario: "Research on the impact of exercise on mood.",
      examples: {
        aim: "To explore the effect of regular exercise on mood",
        directional: "People who exercise regularly will report higher mood scores than those who don't exercise",
        nondirectional: "There will be a difference in mood scores between regular exercisers and non-exercisers"
      }
    }
  ]

  return (
    <div className="w-full h-full p-5 flex flex-col overflow-auto custom-scrollbar">
      <h2 className="text-xl font-bold text-rose-400 mb-4 flex items-center gap-2">
        <span className="w-1 h-5 bg-rose-500 rounded-full"></span>
        From Aims to Hypotheses
      </h2>

      <div className="space-y-4">
        {scenarios.map((item, idx) => (
          <div key={idx} className="glass-clean rounded-lg p-4 animate-slide-in-left" style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className="bg-gray-800/50 p-3 rounded mb-4 border-l-2 border-amber-500">
              <p className="text-sm font-medium text-gray-100">{item.scenario}</p>
            </div>

            <div className="space-y-2">
              {/* Aim */}
              <div className="bg-gray-800/40 rounded-lg p-3 border-l-2 border-blue-500">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">A</span>
                  </div>
                  <span className="font-bold text-blue-400 text-sm">Aim:</span>
                </div>
                <p className="text-gray-200 ml-8 italic text-sm">{item.examples.aim}</p>
              </div>

              {/* Directional Hypothesis */}
              <div className="bg-gray-800/40 rounded-lg p-3 border-l-2 border-amber-500">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-full bg-amber-600 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">H₁</span>
                  </div>
                  <span className="font-bold text-amber-400 text-sm">Directional Hypothesis:</span>
                </div>
                <p className="text-gray-200 ml-8 italic text-sm">{item.examples.directional}</p>
              </div>

              {/* Non-Directional Hypothesis */}
              <div className="bg-gray-800/40 rounded-lg p-3 border-l-2 border-green-500">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">H₂</span>
                  </div>
                  <span className="font-bold text-green-400 text-sm">Non-Directional Hypothesis:</span>
                </div>
                <p className="text-gray-200 ml-8 italic text-sm">{item.examples.nondirectional}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Table */}
      <div className="mt-4 glass-clean rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-800/50 border-b border-gray-700/50">
                <th className="text-left px-3 py-2 text-rose-400 font-bold">Aspect</th>
                <th className="text-left px-3 py-2 text-rose-400 font-bold">Aim</th>
                <th className="text-left px-3 py-2 text-rose-400 font-bold">Hypothesis</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700/30 hover:bg-gray-800/30">
                <td className="px-3 py-2 font-bold text-gray-300">Specificity</td>
                <td className="px-3 py-2 text-gray-400">General statement</td>
                <td className="px-3 py-2 text-gray-400">Specific prediction</td>
              </tr>
              <tr className="border-b border-gray-700/30 hover:bg-gray-800/30">
                <td className="px-3 py-2 font-bold text-gray-300">Testability</td>
                <td className="px-3 py-2 text-gray-400">Not directly testable</td>
                <td className="px-3 py-2 text-gray-400">Testable & falsifiable</td>
              </tr>
              <tr className="border-b border-gray-700/30 hover:bg-gray-800/30">
                <td className="px-3 py-2 font-bold text-gray-300">Direction</td>
                <td className="px-3 py-2 text-gray-400">No prediction of outcome</td>
                <td className="px-3 py-2 text-gray-400">May predict direction</td>
              </tr>
              <tr className="hover:bg-gray-800/30">
                <td className="px-3 py-2 font-bold text-gray-300">Example</td>
                <td className="px-3 py-2 text-gray-400">"To investigate X"</td>
                <td className="px-3 py-2 text-gray-400">"X will cause Y"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
