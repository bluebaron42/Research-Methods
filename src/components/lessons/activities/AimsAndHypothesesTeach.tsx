import React from 'react'
import { ChevronRight, Lightbulb } from 'lucide-react'

interface Props {
  isPresenting: boolean
}

export const AimsAndHypothesesTeach: React.FC<Props> = ({ isPresenting }) => {
  const [activeTab, setActiveTab] = React.useState<'aims' | 'hypotheses'>('aims')

  const textSize = isPresenting ? 'text-2xl' : 'text-lg'
  const headingSize = isPresenting ? 'text-4xl' : 'text-2xl'
  const padding = isPresenting ? 'p-12' : 'p-8'
  const gap = isPresenting ? 'gap-6' : 'gap-4'

  return (
    <div className={`w-full h-full ${padding} flex flex-col overflow-auto custom-scrollbar`}>
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setActiveTab('aims')}
          className={`flex-1 py-4 px-6 rounded-lg font-bold text-xl transition-all ${
            activeTab === 'aims'
              ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Aims
        </button>
        <button
          onClick={() => setActiveTab('hypotheses')}
          className={`flex-1 py-4 px-6 rounded-lg font-bold text-xl transition-all ${
            activeTab === 'hypotheses'
              ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Hypotheses
        </button>
      </div>

      {activeTab === 'aims' && (
        <div className={`flex flex-col ${gap}`}>
          <h2 className={`${headingSize} font-bold text-rose-400`}>Research Aims</h2>

          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <p className={`${textSize} text-gray-100 leading-relaxed`}>
              An <span className="text-rose-400 font-bold">aim</span> is a general statement of the research purpose. It describes what the researcher intends to investigate.
            </p>
          </div>

          <div className={`bg-gray-900 border-l-4 border-rose-500 p-6 rounded ${gap} flex flex-col`}>
            <h3 className={`${textSize} font-bold text-rose-300`}>Example Aims:</h3>
            <ul className={`${textSize} text-gray-300 space-y-3`}>
              <li className="flex items-start gap-3">
                <ChevronRight className="flex-shrink-0 text-rose-400" size={isPresenting ? 32 : 20} />
                <span>"To investigate the effect of caffeine on reaction time"</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="flex-shrink-0 text-rose-400" size={isPresenting ? 32 : 20} />
                <span>"To explore differences in memory between morning and evening"</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="flex-shrink-0 text-rose-400" size={isPresenting ? 32 : 20} />
                <span>"To examine the relationship between sleep and exam performance"</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-900/30 border border-blue-600 rounded-lg p-6 flex gap-4">
            <Lightbulb className="text-blue-400 flex-shrink-0" size={isPresenting ? 40 : 24} />
            <p className={`${textSize} text-blue-100`}>
              <span className="font-bold">Key Point:</span> Aims don't predict outcomes—they simply state what will be investigated.
            </p>
          </div>
        </div>
      )}

      {activeTab === 'hypotheses' && (
        <div className={`flex flex-col ${gap}`}>
          <h2 className={`${headingSize} font-bold text-rose-400`}>Research Hypotheses</h2>

          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <p className={`${textSize} text-gray-100 leading-relaxed`}>
              A <span className="text-rose-400 font-bold">hypothesis</span> is a testable prediction about the relationship between variables. It is specific and can be tested experimentally.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 space-y-4">
            <div>
              <h3 className={`${textSize} font-bold text-amber-400 mb-2`}>Directional Hypothesis (One-Tailed)</h3>
              <p className={`${textSize} text-gray-300 mb-3`}>Predicts the direction of the effect</p>
              <div className="bg-gray-800/50 p-3 rounded border-l-4 border-amber-500">
                <p className={`${textSize} italic text-gray-100`}>"Students will score higher on the test with caffeine than without caffeine"</p>
              </div>
            </div>

            <div className="h-px bg-gray-700"></div>

            <div>
              <h3 className={`${textSize} font-bold text-blue-400 mb-2`}>Non-Directional Hypothesis (Two-Tailed)</h3>
              <p className={`${textSize} text-gray-300 mb-3`}>Predicts there will be a difference, but not the direction</p>
              <div className="bg-gray-800/50 p-3 rounded border-l-4 border-blue-500">
                <p className={`${textSize} italic text-gray-100`}>"There will be a difference in test scores between the caffeine and no-caffeine conditions"</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-900/30 border border-blue-600 rounded-lg p-6 flex gap-4">
            <Lightbulb className="text-blue-400 flex-shrink-0" size={isPresenting ? 40 : 24} />
            <p className={`${textSize} text-blue-100`}>
              <span className="font-bold">Key Point:</span> A hypothesis must be testable and falsifiable—it can be proven wrong.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
