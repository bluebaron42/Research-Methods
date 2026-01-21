import React, { useState } from 'react'
import { ChevronRight, Lightbulb, HelpCircle } from 'lucide-react'

interface Props {
  isPresenting: boolean
}

export const AimsAndHypothesesTeach: React.FC<Props> = ({ isPresenting }) => {
  const [activeTab, setActiveTab] = useState<'aims' | 'hypotheses' | 'null'>('aims')

  const textSize = isPresenting ? 'text-lg' : 'text-base'
  const headingSize = isPresenting ? 'text-2xl' : 'text-xl'
  const padding = isPresenting ? 'p-6' : 'p-5'
  const gap = isPresenting ? 'gap-4' : 'gap-3'

  const tabs = [
    { id: 'aims', label: 'Aims', color: 'rose' },
    { id: 'hypotheses', label: 'Hypotheses', color: 'amber' },
    { id: 'null', label: 'Null Hypothesis', color: 'purple' }
  ] as const

  return (
    <div className={`w-full h-full ${padding} flex flex-col overflow-auto custom-scrollbar`}>
      {/* Tab Navigation - Clean minimal style */}
      <div className="flex gap-1 mb-5 bg-gray-900/50 p-1 rounded-lg backdrop-blur-sm">
        {tabs.map((tab, idx) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2.5 px-4 rounded-md font-medium transition-all duration-300 text-sm ${
              activeTab === tab.id
                ? `bg-${tab.color}-600 text-white shadow-lg shadow-${tab.color}-600/20`
                : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
            }`}
            style={{ animationDelay: `${idx * 0.05}s` }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* AIMS TAB */}
      {activeTab === 'aims' && (
        <div className={`flex flex-col ${gap} animate-fadeIn`}>
          <h2 className={`${headingSize} font-bold text-rose-400 flex items-center gap-2`}>
            <span className="w-1.5 h-6 bg-rose-500 rounded-full"></span>
            Research Aims
          </h2>

          <div className="glass-clean rounded-lg p-4">
            <p className={`${textSize} text-gray-200 leading-relaxed`}>
              An <span className="text-rose-400 font-semibold">aim</span> is a general statement of the research purpose—what the researcher intends to investigate.
            </p>
          </div>

          {/* Theory → Aim Flow - Animated */}
          <div className="bg-gray-900/40 border border-gray-700/30 rounded-lg p-4">
            <h3 className={`text-sm font-semibold text-rose-300/80 mb-3 uppercase tracking-wide`}>From Theory to Aim</h3>
            <div className="flex items-center gap-2 flex-wrap">
              <div className="bg-gray-800/80 px-4 py-2 rounded-md border border-gray-600/50 animate-scale-up">
                <span className="text-sm text-gray-300">Theory</span>
              </div>
              <div className="text-gray-500 animate-flow w-8 h-0.5"></div>
              <ChevronRight className="text-gray-500" size={16} />
              <div className="bg-rose-900/30 px-4 py-2 rounded-md border border-rose-500/40 animate-scale-up stagger-2">
                <span className="text-sm text-rose-300">Aim</span>
              </div>
              <div className="text-gray-500 animate-flow w-8 h-0.5"></div>
              <ChevronRight className="text-gray-500" size={16} />
              <div className="bg-amber-900/30 px-4 py-2 rounded-md border border-amber-500/40 animate-scale-up stagger-3">
                <span className="text-sm text-amber-300">Hypothesis</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-3 italic">
              "Violent media may increase aggression" → "To investigate whether violent video games affect aggressive behaviour"
            </p>
          </div>

          {/* Example Aims - Clean cards */}
          <div className="bg-gray-900/30 border-l-2 border-rose-500/70 p-4 rounded-r-lg">
            <h3 className="text-sm font-semibold text-rose-300/80 mb-3 uppercase tracking-wide">Example Aims</h3>
            <ul className={`${textSize} text-gray-300 space-y-2`}>
              {[
                '"To investigate the effect of caffeine on reaction time"',
                '"To explore whether sleep deprivation affects memory recall"',
                '"To examine the relationship between stress and exam performance"'
              ].map((aim, idx) => (
                <li key={idx} className={`flex items-start gap-2 animate-slide-in-left stagger-${idx + 1}`}>
                  <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-2 animate-subtle-pulse"></span>
                  <span className="italic text-gray-300/90">{aim}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-clean rounded-lg p-3 flex gap-3 border-l-2 border-blue-500/50">
            <Lightbulb className="text-blue-400 flex-shrink-0 animate-subtle-pulse" size={18} />
            <p className="text-sm text-blue-200/90">
              <span className="font-semibold">Key Point:</span> Aims don't predict outcomes—they state what will be investigated.
            </p>
          </div>
        </div>
      )}

      {/* HYPOTHESES TAB */}
      {activeTab === 'hypotheses' && (
        <div className={`flex flex-col ${gap} animate-fadeIn`}>
          <h2 className={`${headingSize} font-bold text-amber-400 flex items-center gap-2`}>
            <span className="w-1.5 h-6 bg-amber-500 rounded-full"></span>
            Research Hypotheses
          </h2>

          <div className="glass-clean rounded-lg p-4">
            <p className={`${textSize} text-gray-200 leading-relaxed`}>
              A <span className="text-amber-400 font-semibold">hypothesis</span> is a testable, falsifiable prediction about the relationship between variables.
            </p>
          </div>

          {/* Two types side by side - Clean cards with hover */}
          <div className="grid grid-cols-2 gap-3">
            {/* Directional */}
            <div className="bg-gray-900/40 border border-amber-500/20 rounded-lg p-4 card-hover">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full animate-subtle-pulse"></span>
                <h3 className={`${textSize} font-semibold text-amber-400`}>Directional</h3>
                <span className="text-xs text-gray-500 ml-auto">(One-Tailed)</span>
              </div>
              <p className="text-xs text-gray-500 mb-3">Predicts the direction of effect</p>
              <div className="bg-gray-800/60 p-3 rounded border-l-2 border-amber-500/60">
                <p className="text-sm italic text-gray-200">
                  "Participants with caffeine will have <span className="text-amber-400 font-medium">faster</span> reaction times than those without"
                </p>
              </div>
              <div className="mt-3 px-2 py-1 bg-amber-900/20 rounded text-xs text-amber-300/80 inline-block">
                Use when: Previous research suggests a direction
              </div>
            </div>

            {/* Non-Directional */}
            <div className="bg-gray-900/40 border border-blue-500/20 rounded-lg p-4 card-hover">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-subtle-pulse"></span>
                <h3 className={`${textSize} font-semibold text-blue-400`}>Non-Directional</h3>
                <span className="text-xs text-gray-500 ml-auto">(Two-Tailed)</span>
              </div>
              <p className="text-xs text-gray-500 mb-3">Predicts a difference, not direction</p>
              <div className="bg-gray-800/60 p-3 rounded border-l-2 border-blue-500/60">
                <p className="text-sm italic text-gray-200">
                  "There will be a <span className="text-blue-400 font-medium">difference</span> in reaction times between caffeine and no-caffeine conditions"
                </p>
              </div>
              <div className="mt-3 px-2 py-1 bg-blue-900/20 rounded text-xs text-blue-300/80 inline-block">
                Use when: No prior research or contradictory findings
              </div>
            </div>
          </div>

          <div className="glass-clean rounded-lg p-3 flex gap-3 border-l-2 border-blue-500/50">
            <Lightbulb className="text-blue-400 flex-shrink-0 animate-subtle-pulse" size={18} />
            <p className="text-sm text-blue-200/90">
              <span className="font-semibold">Key Point:</span> A hypothesis must be testable and falsifiable—it can be proven wrong.
            </p>
          </div>
        </div>
      )}

      {/* NULL HYPOTHESIS TAB */}
      {activeTab === 'null' && (
        <div className={`flex flex-col ${gap} animate-fadeIn`}>
          <h2 className={`${headingSize} font-bold text-purple-400 flex items-center gap-2`}>
            <span className="w-1.5 h-6 bg-purple-500 rounded-full"></span>
            The Null Hypothesis
          </h2>

          <div className="glass-clean rounded-lg p-4">
            <p className={`${textSize} text-gray-200 leading-relaxed`}>
              The <span className="text-purple-400 font-semibold">null hypothesis (H₀)</span> states that there is no significant difference or relationship between variables. Any observed effect is due to chance.
            </p>
          </div>

          {/* H₁ vs H₀ Visual Comparison */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-900/40 border border-amber-500/20 rounded-lg p-4 card-hover">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg font-bold text-amber-400">H₁</span>
                <span className={`text-sm font-medium text-amber-400`}>Alternative Hypothesis</span>
              </div>
              <p className="text-xs text-gray-500 mb-3">What you predict will happen</p>
              <div className="bg-gray-800/60 p-3 rounded border-l-2 border-amber-500/60">
                <p className="text-sm italic text-gray-200">"Caffeine will affect reaction time"</p>
              </div>
            </div>

            <div className="bg-gray-900/40 border border-purple-500/20 rounded-lg p-4 card-hover">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg font-bold text-purple-400">H₀</span>
                <span className={`text-sm font-medium text-purple-400`}>Null Hypothesis</span>
              </div>
              <p className="text-xs text-gray-500 mb-3">No effect—differences are due to chance</p>
              <div className="bg-gray-800/60 p-3 rounded border-l-2 border-purple-500/60">
                <p className="text-sm italic text-gray-200">"There is no significant difference in reaction time"</p>
              </div>
            </div>
          </div>

          {/* Why it matters - Clean numbered list */}
          <div className="bg-purple-900/15 border border-purple-600/30 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-purple-300/80 mb-3 flex items-center gap-2 uppercase tracking-wide">
              <HelpCircle size={16} />
              Why Do We Need a Null Hypothesis?
            </h3>
            <ul className="text-sm text-gray-300 space-y-2">
              {[
                { num: '1', text: 'Statistical tests are designed to reject the null hypothesis', highlight: 'reject' },
                { num: '2', text: 'If results are unlikely under H₀ (p < 0.05), we reject it and accept H₁', highlight: 'p < 0.05' },
                { num: '3', text: 'This approach supports falsifiability—a key feature of science', highlight: 'falsifiability' }
              ].map((item, idx) => (
                <li key={idx} className={`flex items-start gap-3 animate-slide-in-left stagger-${idx + 1}`}>
                  <span className="w-5 h-5 bg-purple-600/30 rounded-full flex items-center justify-center text-xs text-purple-300 flex-shrink-0">{item.num}</span>
                  <span>{item.text.split(item.highlight).map((part, i, arr) => 
                    i < arr.length - 1 ? <>{part}<span key={i} className="text-purple-300 font-medium">{item.highlight}</span></> : part
                  )}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-clean rounded-lg p-3 flex gap-3 border-l-2 border-blue-500/50">
            <Lightbulb className="text-blue-400 flex-shrink-0 animate-subtle-pulse" size={18} />
            <p className="text-sm text-blue-200/90">
              <span className="font-semibold">Remember:</span> We never "prove" H₁—we either reject or fail to reject H₀ based on the evidence.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
