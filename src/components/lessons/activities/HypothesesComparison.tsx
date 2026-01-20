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
    <div className="w-full h-full p-8 flex flex-col overflow-auto custom-scrollbar">
      <h2 className="text-3xl font-bold text-rose-400 mb-8">From Aims to Hypotheses</h2>

      <div className="space-y-8">
        {scenarios.map((item, idx) => (
          <div key={idx} className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <div className="bg-gray-800/50 p-4 rounded mb-6 border-l-4 border-amber-500">
              <p className="text-lg font-semibold text-gray-100">{item.scenario}</p>
            </div>

            <div className="space-y-4">
              {/* Aim */}
              <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-blue-500">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">A</span>
                  </div>
                  <span className="font-bold text-blue-300">Aim:</span>
                </div>
                <p className="text-gray-100 ml-10 italic">{item.examples.aim}</p>
              </div>

              {/* Directional Hypothesis */}
              <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-amber-500">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">H₁</span>
                  </div>
                  <span className="font-bold text-amber-300">Directional Hypothesis:</span>
                </div>
                <p className="text-gray-100 ml-10 italic">{item.examples.directional}</p>
              </div>

              {/* Non-Directional Hypothesis */}
              <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-green-500">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">H₂</span>
                  </div>
                  <span className="font-bold text-green-300">Non-Directional Hypothesis:</span>
                </div>
                <p className="text-gray-100 ml-10 italic">{item.examples.nondirectional}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Table */}
      <div className="mt-8 bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-800 border-b border-gray-700">
                <th className="text-left px-4 py-3 text-rose-400 font-bold">Aspect</th>
                <th className="text-left px-4 py-3 text-rose-400 font-bold">Aim</th>
                <th className="text-left px-4 py-3 text-rose-400 font-bold">Hypothesis</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700 hover:bg-gray-800/50">
                <td className="px-4 py-3 font-bold text-gray-300">Specificity</td>
                <td className="px-4 py-3 text-gray-300">General statement</td>
                <td className="px-4 py-3 text-gray-300">Specific prediction</td>
              </tr>
              <tr className="border-b border-gray-700 hover:bg-gray-800/50">
                <td className="px-4 py-3 font-bold text-gray-300">Testability</td>
                <td className="px-4 py-3 text-gray-300">Not directly testable</td>
                <td className="px-4 py-3 text-gray-300">Testable & falsifiable</td>
              </tr>
              <tr className="border-b border-gray-700 hover:bg-gray-800/50">
                <td className="px-4 py-3 font-bold text-gray-300">Direction</td>
                <td className="px-4 py-3 text-gray-300">No prediction of outcome</td>
                <td className="px-4 py-3 text-gray-300">May predict direction</td>
              </tr>
              <tr className="hover:bg-gray-800/50">
                <td className="px-4 py-3 font-bold text-gray-300">Example</td>
                <td className="px-4 py-3 text-gray-300">"To investigate X"</td>
                <td className="px-4 py-3 text-gray-300">"X will cause Y"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
