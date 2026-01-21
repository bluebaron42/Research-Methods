import React, { useState } from 'react'
import { ChevronRight, Lightbulb, AlertTriangle, Eye, User } from 'lucide-react'

interface Props {
  isPresenting: boolean
}

export const VariablesTeachASLevel: React.FC<Props> = ({ isPresenting }) => {
  const [activeSection, setActiveSection] = useState<string>('core')

  const textSize = isPresenting ? 'text-base' : 'text-sm'
  const headingSize = isPresenting ? 'text-xl' : 'text-lg'
  const padding = isPresenting ? 'p-5' : 'p-4'
  const gap = isPresenting ? 'gap-3' : 'gap-2'

  const navItems = [
    { id: 'core', label: 'IV, DV & Levels', color: 'rose' },
    { id: 'operationalise', label: 'Operationalisation', color: 'amber' },
    { id: 'extraneous', label: 'Extraneous & Confounding', color: 'orange' },
    { id: 'effects', label: 'Demand & Investigator', color: 'pink' }
  ]

  return (
    <div className={`w-full h-full ${padding} flex flex-col overflow-auto custom-scrollbar`}>
      {/* Navigation Tabs - Clean minimal */}
      <div className="flex gap-1 mb-4 bg-gray-900/50 p-1 rounded-lg backdrop-blur-sm">
        {navItems.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`flex-1 py-2 px-2 rounded-md text-xs font-medium transition-all duration-300 ${
              activeSection === item.id
                ? `bg-${item.color}-600 text-white shadow-lg shadow-${item.color}-600/20`
                : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* CORE VARIABLES SECTION */}
      {activeSection === 'core' && (
        <div className={`flex flex-col ${gap} animate-fadeIn`}>
          <h2 className={`${headingSize} font-bold text-rose-400 flex items-center gap-2`}>
            <span className="w-1 h-5 bg-rose-500 rounded-full"></span>
            Variables in Experiments
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {/* IV Card */}
            <div className="bg-gray-900/40 border border-rose-500/20 rounded-lg p-4 card-hover">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-rose-500 rounded-full animate-subtle-pulse"></span>
                <h3 className={`${textSize} font-semibold text-rose-400`}>Independent Variable (IV)</h3>
              </div>
              <p className="text-xs text-gray-500 mb-2">The variable <span className="text-rose-300">manipulated</span> by the researcher</p>
              <div className="bg-gray-800/60 p-2 rounded border-l-2 border-rose-500/60 mb-2">
                <p className="text-xs text-gray-300">
                  <span className="text-rose-300 font-medium">Example:</span> Presence/absence of caffeine
                </p>
              </div>
              <div className="bg-rose-900/15 border border-rose-600/20 rounded p-2">
                <p className="text-xs text-rose-200/80 font-medium mb-1">Levels of the IV</p>
                <div className="flex gap-1.5 mt-1">
                  <span className="px-2 py-0.5 bg-gray-800/80 rounded text-xs text-gray-300">Caffeine</span>
                  <span className="px-2 py-0.5 bg-gray-800/80 rounded text-xs text-gray-300">Placebo</span>
                </div>
              </div>
            </div>

            {/* DV Card */}
            <div className="bg-gray-900/40 border border-blue-500/20 rounded-lg p-4 card-hover">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-subtle-pulse"></span>
                <h3 className={`${textSize} font-semibold text-blue-400`}>Dependent Variable (DV)</h3>
              </div>
              <p className="text-xs text-gray-500 mb-2">The variable <span className="text-blue-300">measured</span> by the researcher</p>
              <div className="bg-gray-800/60 p-2 rounded border-l-2 border-blue-500/60 mb-2">
                <p className="text-xs text-gray-300">
                  <span className="text-blue-300 font-medium">Example:</span> Reaction time in milliseconds
                </p>
              </div>
              <div className="bg-blue-900/15 border border-blue-600/20 rounded p-2">
                <p className="text-xs text-blue-200/80 font-medium">Must be measurable</p>
                <p className="text-xs text-gray-400 mt-0.5">The DV shows the effect of the IV</p>
              </div>
            </div>
          </div>

          {/* Visual: Cause → Effect - Animated */}
          <div className="bg-gray-800/20 border border-gray-700/30 rounded-lg p-3">
            <div className="flex items-center justify-center gap-3">
              <div className="bg-rose-600/20 border border-rose-500/40 rounded-md px-4 py-2 animate-scale-up">
                <p className="text-sm text-rose-300 font-medium">IV (Cause)</p>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-0.5 bg-gradient-to-r from-rose-500/50 to-blue-500/50 animate-flow"></div>
                <ChevronRight className="text-gray-500" size={16} />
              </div>
              <div className="bg-blue-600/20 border border-blue-500/40 rounded-md px-4 py-2 animate-scale-up stagger-2">
                <p className="text-sm text-blue-300 font-medium">DV (Effect)</p>
              </div>
            </div>
            <p className="text-center text-xs text-gray-500 mt-2">Changes in IV should cause changes in DV</p>
          </div>
        </div>
      )}

      {/* OPERATIONALISATION SECTION */}
      {activeSection === 'operationalise' && (
        <div className={`flex flex-col ${gap} animate-fadeIn`}>
          <h2 className={`${headingSize} font-bold text-amber-400 flex items-center gap-2`}>
            <span className="w-1 h-5 bg-amber-500 rounded-full"></span>
            Operationalisation
          </h2>

          <div className="glass-clean rounded-lg p-3">
            <p className={`${textSize} text-gray-200`}>
              <span className="text-amber-400 font-semibold">Operationalisation</span> means defining variables in specific, measurable terms so they can be tested objectively.
            </p>
          </div>

          {/* Before/After Comparison - Clean */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-red-900/15 border border-red-600/20 rounded-lg p-3 card-hover">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-red-400">✗</span>
                <span className="text-xs text-red-300 font-medium">Not Operationalised</span>
              </div>
              <p className="text-sm text-gray-300 italic">"Measure how talkative they are"</p>
              <p className="text-xs text-red-300/60 mt-2">Vague, subjective, hard to replicate</p>
            </div>
            <div className="bg-green-900/15 border border-green-600/20 rounded-lg p-3 card-hover">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-400">✓</span>
                <span className="text-xs text-green-300 font-medium">Operationalised</span>
              </div>
              <p className="text-sm text-gray-300 italic">"Count words spoken in 5 minutes"</p>
              <p className="text-xs text-green-300/60 mt-2">Specific, objective, replicable</p>
            </div>
          </div>

          {/* Why it matters */}
          <div className="bg-amber-900/15 border border-amber-600/20 rounded-lg p-3">
            <h3 className="text-xs font-semibold text-amber-300/80 mb-2 uppercase tracking-wide">Why Operationalise?</h3>
            <ul className="text-xs text-gray-300 space-y-1.5">
              {[
                { text: 'Makes variables measurable and objective', highlight: 'measurable' },
                { text: 'Allows other researchers to replicate the study', highlight: 'replicate' },
                { text: 'Reduces ambiguity and researcher bias', highlight: 'ambiguity' }
              ].map((item, idx) => (
                <li key={idx} className={`flex items-center gap-2 animate-slide-in-left stagger-${idx + 1}`}>
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-subtle-pulse"></span>
                  <span>{item.text.split(item.highlight).map((part, i, arr) => 
                    i < arr.length - 1 ? <>{part}<span key={i} className="text-amber-300">{item.highlight}</span></> : part
                  )}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* EXTRANEOUS & CONFOUNDING SECTION */}
      {activeSection === 'extraneous' && (
        <div className={`flex flex-col ${gap} animate-fadeIn`}>
          <h2 className={`${headingSize} font-bold text-orange-400 flex items-center gap-2`}>
            <span className="w-1 h-5 bg-orange-500 rounded-full"></span>
            Extraneous & Confounding Variables
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {/* Extraneous */}
            <div className="bg-gray-900/40 border border-orange-500/20 rounded-lg p-4 card-hover">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="text-orange-400 animate-subtle-pulse" size={16} />
                <h3 className={`${textSize} font-semibold text-orange-400`}>Extraneous Variables</h3>
              </div>
              <p className="text-xs text-gray-500 mb-2">Any variable other than IV that could affect DV</p>
              <div className="bg-gray-800/60 p-2 rounded border-l-2 border-orange-500/60">
                <p className="text-xs text-gray-300">
                  <span className="text-orange-300 font-medium">Examples:</span> Room temp, time of day, mood
                </p>
              </div>
              <p className="text-xs text-gray-500 mt-2">Can be controlled through standardisation</p>
            </div>

            {/* Confounding */}
            <div className="bg-gray-900/40 border border-red-500/20 rounded-lg p-4 card-hover">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="text-red-400 animate-subtle-pulse" size={16} />
                <h3 className={`${textSize} font-semibold text-red-400`}>Confounding Variables</h3>
              </div>
              <p className="text-xs text-gray-500 mb-2">Variables that vary <span className="text-red-300">systematically</span> with IV</p>
              <div className="bg-gray-800/60 p-2 rounded border-l-2 border-red-500/60">
                <p className="text-xs text-gray-300">
                  <span className="text-red-300 font-medium">Problem:</span> Can't tell if IV caused DV changes
                </p>
              </div>
              <p className="text-xs text-red-300/60 mt-2">Threatens internal validity</p>
            </div>
          </div>

          {/* Key Distinction */}
          <div className="glass-clean rounded-lg p-3 border-l-2 border-gray-500/30">
            <h4 className="text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wide">Key Distinction</h4>
            <p className="text-xs text-gray-400">
              <span className="text-orange-300">Extraneous</span> variables add "noise" but don't systematically bias results.
              <span className="text-red-300"> Confounding</span> variables change alongside IV, making cause-effect conclusions impossible.
            </p>
          </div>
        </div>
      )}

      {/* DEMAND CHARACTERISTICS & INVESTIGATOR EFFECTS */}
      {activeSection === 'effects' && (
        <div className={`flex flex-col ${gap} animate-fadeIn`}>
          <h2 className={`${headingSize} font-bold text-pink-400 flex items-center gap-2`}>
            <span className="w-1 h-5 bg-pink-500 rounded-full"></span>
            Participant & Researcher Effects
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {/* Demand Characteristics */}
            <div className="bg-gray-900/40 border border-pink-500/20 rounded-lg p-4 card-hover">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="text-pink-400 animate-subtle-pulse" size={16} />
                <h3 className={`${textSize} font-semibold text-pink-400`}>Demand Characteristics</h3>
              </div>
              <p className="text-xs text-gray-500 mb-2">Cues revealing study's purpose to participants</p>
              <div className="space-y-1.5">
                <div className="bg-gray-800/60 p-1.5 rounded">
                  <p className="text-xs text-pink-300 font-medium">Please-U Effect</p>
                  <p className="text-xs text-gray-400">Behaving to support hypothesis</p>
                </div>
                <div className="bg-gray-800/60 p-1.5 rounded">
                  <p className="text-xs text-pink-300 font-medium">Screw-U Effect</p>
                  <p className="text-xs text-gray-400">Deliberately sabotaging results</p>
                </div>
              </div>
            </div>

            {/* Investigator Effects */}
            <div className="bg-gray-900/40 border border-purple-500/20 rounded-lg p-4 card-hover">
              <div className="flex items-center gap-2 mb-2">
                <User className="text-purple-400 animate-subtle-pulse" size={16} />
                <h3 className={`${textSize} font-semibold text-purple-400`}>Investigator Effects</h3>
              </div>
              <p className="text-xs text-gray-500 mb-2">How researcher unconsciously influences results</p>
              <div className="space-y-1.5">
                <div className="bg-gray-800/60 p-1.5 rounded">
                  <p className="text-xs text-purple-300 font-medium">Expectancy Effects</p>
                  <p className="text-xs text-gray-400">Unconscious cues based on expectations</p>
                </div>
                <div className="bg-gray-800/60 p-1.5 rounded">
                  <p className="text-xs text-purple-300 font-medium">Physical Characteristics</p>
                  <p className="text-xs text-gray-400">Age, gender affecting responses</p>
                </div>
              </div>
            </div>
          </div>

          {/* Control Methods */}
          <div className="glass-clean rounded-lg p-3 border-l-2 border-blue-500/50">
            <h4 className="text-xs font-semibold text-blue-300/80 mb-2 flex items-center gap-2 uppercase tracking-wide">
              <Lightbulb size={14} className="animate-subtle-pulse" />
              How to Control These Effects
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {['Single/double blind', 'Standardised instructions', 'Deception (with debriefing)', 'Random allocation'].map((method, idx) => (
                <div key={idx} className={`text-gray-300 flex items-center gap-1.5 animate-slide-in-left stagger-${idx + 1}`}>
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
