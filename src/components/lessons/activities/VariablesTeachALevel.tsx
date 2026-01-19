import React, { useState } from 'react'
import { ChevronRight, AlertCircle, Lightbulb } from 'lucide-react'

interface Props {
  isPresenting: boolean
}

export const VariablesTeachALevel: React.FC<Props> = ({ isPresenting }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>('iv')

  const textSize = isPresenting ? 'text-2xl' : 'text-lg'
  const headingSize = isPresenting ? 'text-4xl' : 'text-2xl'
  const padding = isPresenting ? 'p-12' : 'p-8'
  const gap = isPresenting ? 'gap-6' : 'gap-4'

  const sections = [
    {
      id: 'iv',
      title: 'Independent Variable (IV)',
      color: 'rose',
      description: 'The variable manipulated by the researcher',
      example: {
        study: 'Effects of background music on revision',
        iv: 'Presence/absence of music (or type of music)',
        levels: ['Music (classical)', 'Music (pop)', 'Silence']
      }
    },
    {
      id: 'dv',
      title: 'Dependent Variable (DV)',
      color: 'blue',
      description: 'The variable measured by the researcher',
      example: {
        study: 'Effects of background music on revision',
        dv: 'Amount of information retained',
        measured: 'Number of facts correctly recalled in a 10-minute test'
      }
    },
    {
      id: 'operationalisation',
      title: 'Operationalisation',
      color: 'amber',
      description: 'Defining variables in measurable, practical terms',
      example: {
        vague: '"Talkativeness" is too vague',
        operationalised: 'Number of words spoken in a 5-minute conversation',
        benefits: [
          'Makes the variable measurable',
          'Allows other researchers to replicate the study',
          'Reduces ambiguity and bias'
        ]
      }
    }
  ]

  return (
    <div className={`w-full h-full ${padding} flex flex-col overflow-auto custom-scrollbar`}>
      <h2 className={`${headingSize} font-bold text-rose-400 mb-8`}>Variables in Research</h2>

      <div className={`space-y-4`}>
        {sections.map((section) => (
          <div key={section.id}>
            <button
              onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
              className={`w-full p-6 rounded-lg font-bold text-left transition-all flex justify-between items-center ${
                expandedSection === section.id
                  ? `bg-${section.color}-600 text-white shadow-lg shadow-${section.color}-600/30`
                  : `bg-gray-800 text-gray-300 hover:bg-gray-700`
              }`}
            >
              <span className={textSize}>{section.title}</span>
              <ChevronRight
                size={isPresenting ? 40 : 24}
                className={`transition-transform ${expandedSection === section.id ? 'rotate-90' : ''}`}
              />
            </button>

            {expandedSection === section.id && (
              <div className={`bg-gray-900/50 border border-gray-700 rounded-lg mt-2 p-6 border-t-4 border-t-${section.color}-500 ${gap} flex flex-col`}>
                {/* Definition */}
                <div className="bg-gray-800/50 p-4 rounded border-l-4 border-gray-600">
                  <p className={`${textSize} text-gray-100`}>{section.description}</p>
                </div>

                {/* IV Section */}
                {section.id === 'iv' && (
                  <div className={gap}>
                    <div>
                      <h4 className={`${textSize} font-bold text-rose-300 mb-3`}>Example: {section.example.study}</h4>
                      <div className="bg-gray-800 p-4 rounded mb-3">
                        <p className={`${textSize} text-gray-200`}>
                          <span className="text-rose-400 font-bold">IV:</span> {section.example.iv}
                        </p>
                      </div>
                      <p className={`${textSize} text-gray-300 font-semibold mb-2`}>Levels of the IV:</p>
                      <ul className={`${textSize} text-gray-300 space-y-2`}>
                        {section.example.levels.map((level, idx) => (
                          <li key={idx} className="flex items-center gap-3 ml-4">
                            <span className="w-2 h-2 bg-rose-400 rounded-full"></span>
                            {level}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* DV Section */}
                {section.id === 'dv' && (
                  <div className={gap}>
                    <div>
                      <h4 className={`${textSize} font-bold text-blue-300 mb-3`}>Example: {section.example.study}</h4>
                      <div className="bg-gray-800 p-4 rounded mb-3">
                        <p className={`${textSize} text-gray-200 mb-3`}>
                          <span className="text-blue-400 font-bold">DV:</span> {section.example.dv}
                        </p>
                        <p className={`${textSize} text-gray-300 italic`}>
                          Measured as: {section.example.measured}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Operationalisation Section */}
                {section.id === 'operationalisation' && (
                  <div className={gap}>
                    <div>
                      <h4 className={`${textSize} font-bold text-amber-300 mb-3`}>Example:</h4>
                      <div className="bg-red-900/20 border border-red-700 p-4 rounded mb-4">
                        <p className={`${textSize} text-red-200`}>
                          <span className="font-bold">❌ Not operationalised:</span> {section.example.vague}
                        </p>
                      </div>
                      <div className="bg-green-900/20 border border-green-700 p-4 rounded mb-4">
                        <p className={`${textSize} text-green-200`}>
                          <span className="font-bold">✓ Operationalised:</span> {section.example.operationalised}
                        </p>
                      </div>
                      <p className={`${textSize} font-bold text-amber-300 mb-2`}>Benefits:</p>
                      <ul className={`${textSize} text-gray-300 space-y-2`}>
                        {section.example.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3 ml-4">
                            <ChevronRight className="flex-shrink-0 text-amber-400 mt-1" size={isPresenting ? 28 : 16} />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Tip Box */}
                <div className="bg-blue-900/30 border border-blue-600 rounded-lg p-4 flex gap-3">
                  <Lightbulb className="text-blue-400 flex-shrink-0" size={isPresenting ? 40 : 24} />
                  <p className={`${textSize} text-blue-100`}>
                    <span className="font-bold">Key Tip:</span> Always operationalise your variables to make your research clear, measurable, and reproducible!
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Summary Box */}
      <div className="mt-8 bg-gray-800/50 border-l-4 border-rose-500 p-6 rounded">
        <h3 className={`${textSize} font-bold text-rose-300 mb-4`}>Quick Summary</h3>
        <div className={`${textSize} text-gray-200 space-y-3`}>
          <p>
            <span className="text-rose-400 font-bold">IV:</span> What you change (cause)
          </p>
          <p>
            <span className="text-blue-400 font-bold">DV:</span> What you measure (effect)
          </p>
          <p>
            <span className="text-amber-400 font-bold">Operationalisation:</span> How you define and measure them
          </p>
        </div>
      </div>
    </div>
  )
}
