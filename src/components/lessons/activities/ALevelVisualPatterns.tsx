import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Eye, Lightbulb, AlertTriangle, Check, X, Info, ArrowRight, Zap } from 'lucide-react'

// ========================================
// 🔦 SPOTLIGHT CARDS PATTERN
// 2x2 or 2x3 grid with click-to-spotlight
// ========================================
interface SpotlightCard {
  id: string
  title: string
  icon: string
  color: string
  content: React.ReactNode
  details?: string[]
}

interface SpotlightCardsProps {
  title: string
  subtitle?: string
  cards: SpotlightCard[]
  isPresenting?: boolean
  columns?: 2 | 3
}

export const SpotlightCards: React.FC<SpotlightCardsProps> = ({ 
  title, 
  subtitle, 
  cards, 
  isPresenting,
  columns = 2 
}) => {
  const [spotlightId, setSpotlightId] = useState<string | null>(null)

  const colorMap: Record<string, { border: string; bg: string; text: string; glow: string }> = {
    purple: { border: 'border-purple-500/50', bg: 'bg-purple-900/30', text: 'text-purple-300', glow: 'shadow-purple-500/30' },
    blue: { border: 'border-blue-500/50', bg: 'bg-blue-900/30', text: 'text-blue-300', glow: 'shadow-blue-500/30' },
    green: { border: 'border-green-500/50', bg: 'bg-green-900/30', text: 'text-green-300', glow: 'shadow-green-500/30' },
    amber: { border: 'border-amber-500/50', bg: 'bg-amber-900/30', text: 'text-amber-300', glow: 'shadow-amber-500/30' },
    rose: { border: 'border-rose-500/50', bg: 'bg-rose-900/30', text: 'text-rose-300', glow: 'shadow-rose-500/30' },
    teal: { border: 'border-teal-500/50', bg: 'bg-teal-900/30', text: 'text-teal-300', glow: 'shadow-teal-500/30' },
    indigo: { border: 'border-indigo-500/50', bg: 'bg-indigo-900/30', text: 'text-indigo-300', glow: 'shadow-indigo-500/30' },
    orange: { border: 'border-orange-500/50', bg: 'bg-orange-900/30', text: 'text-orange-300', glow: 'shadow-orange-500/30' },
  }

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-400 mb-2">{title}</h2>
        {subtitle && <p className="text-gray-400 mb-6">{subtitle}</p>}
        <p className="text-gray-300 text-sm mb-4">👆 Click a card to spotlight it</p>
        
        <div className={`grid ${columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-4`}>
          {cards.map((card) => {
            const colors = colorMap[card.color] || colorMap.purple
            const isSpotlit = spotlightId === card.id
            const isDimmed = spotlightId !== null && !isSpotlit
            
            return (
              <div
                key={card.id}
                onClick={() => setSpotlightId(isSpotlit ? null : card.id)}
                className={`
                  bg-gray-800/50 p-5 rounded-lg border cursor-pointer transition-all duration-300
                  ${colors.border}
                  ${isSpotlit ? `scale-[1.02] shadow-lg ${colors.glow}` : 'hover:scale-[1.01]'}
                  ${isDimmed ? 'opacity-40' : 'opacity-100'}
                `}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{card.icon}</span>
                  <h3 className={`text-xl font-semibold ${colors.text}`}>{card.title}</h3>
                </div>
                <div className="text-gray-300 text-sm">{card.content}</div>
                {isSpotlit && card.details && (
                  <div className={`mt-4 pt-4 border-t ${colors.border} animate-fadeIn`}>
                    <ul className="space-y-2">
                      {card.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                          <Check size={16} className={`mt-0.5 ${colors.text}`} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// ========================================
// 📜 STEP-BY-STEP REVEAL PATTERN
// Progressive disclosure with counter
// ========================================
interface RevealStep {
  title: string
  content: React.ReactNode
  icon?: string
  color?: string
}

interface StepRevealProps {
  title: string
  subtitle?: string
  steps: RevealStep[]
  isPresenting?: boolean
}

export const StepReveal: React.FC<StepRevealProps> = ({ title, subtitle, steps, isPresenting }) => {
  const [revealedCount, setRevealedCount] = useState(0)

  const revealNext = () => {
    if (revealedCount < steps.length) {
      setRevealedCount(revealedCount + 1)
    }
  }

  const showAll = () => setRevealedCount(steps.length)
  const reset = () => setRevealedCount(0)

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-400 mb-2">{title}</h2>
        {subtitle && <p className="text-gray-400 mb-4">{subtitle}</p>}
        
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={revealNext}
            disabled={revealedCount >= steps.length}
            className={`px-4 py-2 rounded font-semibold flex items-center gap-2 transition-all
              ${revealedCount >= steps.length 
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
                : 'bg-purple-600 hover:bg-purple-500 text-white'}`}
          >
            <Eye size={18} />
            Reveal Next ({revealedCount}/{steps.length})
          </button>
          <button
            onClick={showAll}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-white text-sm"
          >
            Show All
          </button>
          {revealedCount > 0 && (
            <button onClick={reset} className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-white text-sm">
              Reset
            </button>
          )}
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => {
            const isRevealed = index < revealedCount
            return (
              <div
                key={index}
                className={`bg-gray-800/50 p-5 rounded-lg border border-gray-700 transition-all duration-500
                  ${isRevealed ? 'scale-100 opacity-100' : 'scale-95 opacity-40'}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
                    ${isRevealed ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-500'}`}>
                    {index + 1}
                  </div>
                  {step.icon && <span className="text-2xl">{step.icon}</span>}
                  <h3 className={`text-lg font-semibold ${isRevealed ? 'text-white' : 'text-gray-500'}`}>
                    {step.title}
                  </h3>
                </div>
                {isRevealed && (
                  <p className="text-gray-300 mt-3 ml-11 animate-fadeIn">{step.content}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// ========================================
// 🎠 CAROUSEL NAVIGATOR PATTERN
// Left/right navigation with dots
// ========================================
interface CarouselSlide {
  title: string
  icon: string
  color: string
  content: React.ReactNode
  example?: string
}

interface CarouselNavigatorProps {
  title: string
  subtitle?: string
  slides: CarouselSlide[]
  isPresenting?: boolean
}

export const CarouselNavigator: React.FC<CarouselNavigatorProps> = ({ 
  title, 
  subtitle, 
  slides, 
  isPresenting 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    purple: { bg: 'bg-purple-900/30', text: 'text-purple-300', border: 'border-purple-500/50' },
    blue: { bg: 'bg-blue-900/30', text: 'text-blue-300', border: 'border-blue-500/50' },
    green: { bg: 'bg-green-900/30', text: 'text-green-300', border: 'border-green-500/50' },
    amber: { bg: 'bg-amber-900/30', text: 'text-amber-300', border: 'border-amber-500/50' },
    rose: { bg: 'bg-rose-900/30', text: 'text-rose-300', border: 'border-rose-500/50' },
    teal: { bg: 'bg-teal-900/30', text: 'text-teal-300', border: 'border-teal-500/50' },
  }

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % slides.length)
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)

  const current = slides[currentIndex]
  const colors = colorMap[current.color] || colorMap.purple

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-400 mb-2">{title}</h2>
        {subtitle && <p className="text-gray-400 mb-6">{subtitle}</p>}
        
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white shadow-lg"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slide Content */}
          <div className={`${colors.bg} p-8 rounded-xl border ${colors.border} animate-fadeIn`}>
            <div className="text-center mb-6">
              <span className="text-6xl">{current.icon}</span>
              <h3 className={`text-2xl font-bold ${colors.text} mt-4`}>{current.title}</h3>
            </div>
            <div className="text-gray-300">{current.content}</div>
            {current.example && (
              <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <p className="text-sm text-gray-400 mb-1">📌 Example:</p>
                <p className="text-gray-300">{current.example}</p>
              </div>
            )}
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full
                  ${index === currentIndex 
                    ? 'w-8 h-3 bg-purple-500' 
                    : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'}`}
              />
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-2">
            {currentIndex + 1} / {slides.length}
          </p>
        </div>
      </div>
    </div>
  )
}

// ========================================
// 🎯 CLICK-TO-REVEAL CARDS PATTERN
// Strengths/Limitations with progressive disclosure
// ========================================
interface RevealCard {
  type: 'strength' | 'limitation' | 'neutral'
  title: string
  content: string
}

interface ClickRevealCardsProps {
  title: string
  subtitle?: string
  cards: RevealCard[]
  isPresenting?: boolean
}

export const ClickRevealCards: React.FC<ClickRevealCardsProps> = ({ 
  title, 
  subtitle, 
  cards, 
  isPresenting 
}) => {
  const [revealed, setRevealed] = useState<Set<number>>(new Set())

  const toggleReveal = (index: number) => {
    const newRevealed = new Set(revealed)
    if (newRevealed.has(index)) {
      newRevealed.delete(index)
    } else {
      newRevealed.add(index)
    }
    setRevealed(newRevealed)
  }

  const revealAll = () => setRevealed(new Set(cards.map((_, i) => i)))
  const hideAll = () => setRevealed(new Set())

  const typeConfig = {
    strength: { bg: 'bg-green-900/30', border: 'border-green-500/50', text: 'text-green-400', icon: <Check size={20} /> },
    limitation: { bg: 'bg-red-900/30', border: 'border-red-500/50', text: 'text-red-400', icon: <X size={20} /> },
    neutral: { bg: 'bg-blue-900/30', border: 'border-blue-500/50', text: 'text-blue-400', icon: <Info size={20} /> }
  }

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-400 mb-2">{title}</h2>
        {subtitle && <p className="text-gray-400 mb-4">{subtitle}</p>}
        
        <div className="flex gap-3 mb-6">
          <button onClick={revealAll} className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded text-white text-sm">
            Reveal All ({revealed.size}/{cards.length})
          </button>
          <button onClick={hideAll} className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-white text-sm">
            Hide All
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {cards.map((card, index) => {
            const config = typeConfig[card.type]
            const isRevealed = revealed.has(index)
            
            return (
              <div
                key={index}
                onClick={() => toggleReveal(index)}
                className={`p-5 rounded-lg border cursor-pointer transition-all duration-300 hover:scale-[1.01]
                  ${isRevealed ? `${config.bg} ${config.border}` : 'bg-gray-800/50 border-gray-700'}`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className={config.text}>{config.icon}</span>
                  <h3 className={`font-semibold ${isRevealed ? config.text : 'text-gray-400'}`}>
                    {isRevealed ? card.title : 'Click to reveal...'}
                  </h3>
                </div>
                {isRevealed && (
                  <p className="text-gray-300 text-sm animate-fadeIn">{card.content}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// ========================================
// 📑 TABBED CONTENT PANELS PATTERN
// Horizontal tabs with smooth transitions
// ========================================
interface TabContent {
  id: string
  label: string
  icon?: string
  color?: string
  content: React.ReactNode
}

interface TabbedPanelsProps {
  title: string
  subtitle?: string
  tabs: TabContent[]
  bottomNote?: { text: string; color: string }
  isPresenting?: boolean
}

export const TabbedPanels: React.FC<TabbedPanelsProps> = ({ title, subtitle, tabs, bottomNote, isPresenting }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id)

  const colorMap: Record<string, string> = {
    purple: 'bg-purple-600',
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    amber: 'bg-amber-600',
    rose: 'bg-rose-600',
    teal: 'bg-teal-600',
  }

  const noteColorClasses: Record<string, { bg: string; text: string; border: string }> = {
    purple: { bg: 'bg-purple-900/30', text: 'text-purple-300', border: 'border-purple-700' },
    blue: { bg: 'bg-blue-900/30', text: 'text-blue-300', border: 'border-blue-700' },
    green: { bg: 'bg-green-900/30', text: 'text-green-300', border: 'border-green-700' },
    amber: { bg: 'bg-amber-900/30', text: 'text-amber-300', border: 'border-amber-700' },
    rose: { bg: 'bg-rose-900/30', text: 'text-rose-300', border: 'border-rose-700' },
    teal: { bg: 'bg-teal-900/30', text: 'text-teal-300', border: 'border-teal-700' },
  }

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-400 mb-2">{title}</h2>
        {subtitle && <p className="text-gray-400 mb-6">{subtitle}</p>}
        
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-700 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-semibold transition-all relative
                ${activeTab === tab.id 
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-gray-200'}`}
            >
              <span className="flex items-center gap-2">
                {tab.icon && <span>{tab.icon}</span>}
                {tab.label}
              </span>
              {activeTab === tab.id && (
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${colorMap[tab.color || 'purple']} rounded-t`} />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 animate-fadeIn">
          {tabs.find(t => t.id === activeTab)?.content}
        </div>

        {/* Bottom Note */}
        {bottomNote && (
          <div className={`mt-4 p-4 rounded-lg border ${noteColorClasses[bottomNote.color]?.border || 'border-gray-700'} ${noteColorClasses[bottomNote.color]?.bg || 'bg-gray-800/50'}`}>
            <p className={noteColorClasses[bottomNote.color]?.text || 'text-gray-300'}><strong>{bottomNote.text}</strong></p>
          </div>
        )}
      </div>
    </div>
  )
}

// ========================================
// 🎪 ACCORDION SECTIONS PATTERN
// Collapsible panels with chevron animation
// ========================================
interface AccordionSection {
  title: string
  content: React.ReactNode
  icon?: string
  defaultOpen?: boolean
}

interface AccordionProps {
  title: string
  subtitle?: string
  sections: AccordionSection[]
  isPresenting?: boolean
  allowMultiple?: boolean
}

export const Accordion: React.FC<AccordionProps> = ({ 
  title, 
  subtitle, 
  sections, 
  isPresenting,
  allowMultiple = true 
}) => {
  const [openSections, setOpenSections] = useState<Set<number>>(() => {
    const initial = new Set<number>()
    sections.forEach((s, i) => { if (s.defaultOpen) initial.add(i) })
    return initial
  })

  const toggleSection = (index: number) => {
    const newOpen = new Set(openSections)
    if (newOpen.has(index)) {
      newOpen.delete(index)
    } else {
      if (!allowMultiple) newOpen.clear()
      newOpen.add(index)
    }
    setOpenSections(newOpen)
  }

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-400 mb-2">{title}</h2>
        {subtitle && <p className="text-gray-400 mb-6">{subtitle}</p>}
        
        <div className="space-y-3">
          {sections.map((section, index) => {
            const isOpen = openSections.has(index)
            return (
              <div key={index} className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden">
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-700/30 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    {section.icon && <span className="text-xl">{section.icon}</span>}
                    <span className="font-semibold text-white">{section.title}</span>
                  </span>
                  <ChevronDown 
                    size={20} 
                    className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 animate-fadeIn">
                    <div className="pt-3 border-t border-gray-700 text-gray-300">
                      {section.content}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// ========================================
// 📊 INTERACTIVE COMPARISON TABLE
// Side-by-side comparison with highlights
// ========================================
interface ComparisonItem {
  aspect: string
  optionA: string
  optionB: string
  highlight?: 'A' | 'B' | 'both' | 'none'
}

interface ComparisonColumn {
  title: string
  color: string
}

interface ComparisonRow {
  label: string
  values: string[]
}

interface BottomNote {
  text: string
  color: string
}

interface ComparisonTableProps {
  title: string
  subtitle?: string
  // Legacy props
  optionALabel?: string
  optionBLabel?: string
  optionAColor?: string
  optionBColor?: string
  items?: ComparisonItem[]
  // New flexible props
  columns?: ComparisonColumn[]
  rows?: ComparisonRow[]
  bottomNote?: BottomNote
  isPresenting?: boolean
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  title,
  subtitle,
  optionALabel,
  optionBLabel,
  optionAColor = 'purple',
  optionBColor = 'blue',
  items,
  columns,
  rows,
  bottomNote,
  isPresenting
}) => {
  const [revealedRows, setRevealedRows] = useState<Set<number>>(new Set())

  const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    purple: { bg: 'bg-purple-900/30', text: 'text-purple-300', border: 'border-purple-500/50' },
    blue: { bg: 'bg-blue-900/30', text: 'text-blue-300', border: 'border-blue-500/50' },
    green: { bg: 'bg-green-900/30', text: 'text-green-300', border: 'border-green-500/50' },
    amber: { bg: 'bg-amber-900/30', text: 'text-amber-300', border: 'border-amber-500/50' },
    teal: { bg: 'bg-teal-900/30', text: 'text-teal-300', border: 'border-teal-500/50' },
    orange: { bg: 'bg-orange-900/30', text: 'text-orange-300', border: 'border-orange-500/50' },
    red: { bg: 'bg-red-900/30', text: 'text-red-300', border: 'border-red-500/50' },
  }

  // Use new format if columns/rows provided, otherwise use legacy items format
  const useNewFormat = columns && rows
  const dataRows = useNewFormat ? rows : items || []
  const colA = useNewFormat ? columns[0] : { title: optionALabel || 'Option A', color: optionAColor }
  const colB = useNewFormat ? columns[1] : { title: optionBLabel || 'Option B', color: optionBColor }
  
  const colorsA = colorClasses[colA.color] || colorClasses.purple
  const colorsB = colorClasses[colB.color] || colorClasses.blue

  const toggleRow = (index: number) => {
    const newRevealed = new Set(revealedRows)
    if (newRevealed.has(index)) {
      newRevealed.delete(index)
    } else {
      newRevealed.add(index)
    }
    setRevealedRows(newRevealed)
  }

  const revealAll = () => setRevealedRows(new Set(dataRows.map((_, i) => i)))

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-400 mb-2">{title}</h2>
        {subtitle && <p className="text-gray-400 mb-4">{subtitle}</p>}
        
        <button onClick={revealAll} className="mb-4 px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded text-white text-sm">
          Reveal All Rows
        </button>

        <div className="overflow-hidden rounded-lg border border-gray-700">
          {/* Header */}
          <div className="grid grid-cols-3 bg-gray-800">
            <div className="p-4 font-semibold text-gray-400 border-r border-gray-700">Aspect</div>
            <div className={`p-4 font-semibold ${colorsA.text} border-r border-gray-700`}>{colA.title}</div>
            <div className={`p-4 font-semibold ${colorsB.text}`}>{colB.title}</div>
          </div>
          
          {/* Rows */}
          {dataRows.map((item, index) => {
            const isRevealed = revealedRows.has(index)
            const rowLabel = useNewFormat ? (item as ComparisonRow).label : (item as ComparisonItem).aspect
            const valueA = useNewFormat ? (item as ComparisonRow).values[0] : (item as ComparisonItem).optionA
            const valueB = useNewFormat ? (item as ComparisonRow).values[1] : (item as ComparisonItem).optionB
            return (
              <div
                key={index}
                onClick={() => toggleRow(index)}
                className="grid grid-cols-3 border-t border-gray-700 cursor-pointer hover:bg-gray-800/50 transition-colors"
              >
                <div className="p-4 text-white font-medium border-r border-gray-700">{rowLabel}</div>
                <div className={`p-4 border-r border-gray-700 ${isRevealed ? colorsA.bg : ''}`}>
                  {isRevealed ? (
                    <span className="text-gray-300 animate-fadeIn">{valueA}</span>
                  ) : (
                    <span className="text-gray-500 italic">Click to reveal...</span>
                  )}
                </div>
                <div className={`p-4 ${isRevealed ? colorsB.bg : ''}`}>
                  {isRevealed ? (
                    <span className="text-gray-300 animate-fadeIn">{valueB}</span>
                  ) : (
                    <span className="text-gray-500 italic">Click to reveal...</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
        
        {bottomNote && (
          <div className={`mt-4 p-4 rounded-lg border ${colorClasses[bottomNote.color]?.border || 'border-gray-700'} ${colorClasses[bottomNote.color]?.bg || 'bg-gray-800/50'}`}>
            <p className={colorClasses[bottomNote.color]?.text || 'text-gray-300'}><strong>{bottomNote.text}</strong></p>
          </div>
        )}
      </div>
    </div>
  )
}

// ========================================
// 🔬 FLOWCHART DECISION TREE
// Interactive decision-making visualization
// ========================================
interface FlowchartNode {
  id: string
  question: string
  options: { label: string; nextId: string | null; result?: string }[]
}

interface FlowchartProps {
  title: string
  subtitle?: string
  nodes: FlowchartNode[]
  startNodeId: string
  isPresenting?: boolean
}

export const FlowchartDecision: React.FC<FlowchartProps> = ({
  title,
  subtitle,
  nodes,
  startNodeId,
  isPresenting
}) => {
  const [currentNodeId, setCurrentNodeId] = useState(startNodeId)
  const [result, setResult] = useState<string | null>(null)
  const [path, setPath] = useState<string[]>([startNodeId])

  const currentNode = nodes.find(n => n.id === currentNodeId)

  const handleChoice = (nextId: string | null, resultText?: string) => {
    if (resultText) {
      setResult(resultText)
    } else if (nextId) {
      setCurrentNodeId(nextId)
      setPath([...path, nextId])
    }
  }

  const reset = () => {
    setCurrentNodeId(startNodeId)
    setResult(null)
    setPath([startNodeId])
  }

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-400 mb-2">{title}</h2>
        {subtitle && <p className="text-gray-400 mb-6">{subtitle}</p>}
        
        {/* Path Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 flex-wrap">
          {path.map((nodeId, index) => (
            <React.Fragment key={index}>
              <span className="px-3 py-1 bg-purple-900/30 rounded text-purple-300 text-sm">
                Step {index + 1}
              </span>
              {index < path.length - 1 && <ArrowRight size={16} className="text-gray-500" />}
            </React.Fragment>
          ))}
        </div>

        {result ? (
          <div className="bg-green-900/30 p-8 rounded-xl border border-green-500/50 text-center animate-fadeIn">
            <Zap size={48} className="mx-auto text-green-400 mb-4" />
            <h3 className="text-2xl font-bold text-green-300 mb-2">Result</h3>
            <p className="text-xl text-white">{result}</p>
            <button onClick={reset} className="mt-6 px-6 py-2 bg-purple-600 hover:bg-purple-500 rounded text-white font-semibold">
              Try Again
            </button>
          </div>
        ) : currentNode ? (
          <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-500/50 animate-fadeIn">
            <h3 className="text-xl font-bold text-white mb-6 text-center">{currentNode.question}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {currentNode.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleChoice(option.nextId, option.result)}
                  className="p-4 bg-gray-700/50 hover:bg-purple-900/30 border border-gray-600 hover:border-purple-500/50 rounded-lg text-white font-medium transition-all"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

// ========================================
// 📈 INTERACTIVE SVG SCATTERPLOT
// Correlation visualization
// ========================================
interface ScatterPoint {
  x: number
  y: number
  label?: string
}

interface ScatterPlotProps {
  title: string
  subtitle?: string
  points: ScatterPoint[]
  xLabel: string
  yLabel: string
  correlationType: 'positive' | 'negative' | 'none'
  showTrendLine?: boolean
  isPresenting?: boolean
}

export const InteractiveScatterPlot: React.FC<ScatterPlotProps> = ({
  title,
  subtitle,
  points,
  xLabel,
  yLabel,
  correlationType,
  showTrendLine = true,
  isPresenting
}) => {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null)
  const [showLine, setShowLine] = useState(showTrendLine)

  const width = 400
  const height = 300
  const padding = 50

  // Scale points to SVG coordinates
  const maxX = Math.max(...points.map(p => p.x))
  const maxY = Math.max(...points.map(p => p.y))
  const scaleX = (x: number) => padding + (x / maxX) * (width - 2 * padding)
  const scaleY = (y: number) => height - padding - (y / maxY) * (height - 2 * padding)

  // Calculate trend line
  const trendLinePoints = () => {
    if (correlationType === 'positive') {
      return { x1: padding, y1: height - padding, x2: width - padding, y2: padding }
    } else if (correlationType === 'negative') {
      return { x1: padding, y1: padding, x2: width - padding, y2: height - padding }
    }
    return null
  }

  const correlationColor = correlationType === 'positive' ? '#22c55e' : correlationType === 'negative' ? '#ef4444' : '#94a3b8'

  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-400 mb-2">{title}</h2>
        {subtitle && <p className="text-gray-400 mb-4">{subtitle}</p>}
        
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => setShowLine(!showLine)}
            className={`px-4 py-2 rounded text-sm font-semibold ${showLine ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300'}`}
          >
            {showLine ? 'Hide' : 'Show'} Trend Line
          </button>
          <span className="text-gray-400">
            Correlation: <span style={{ color: correlationColor }} className="font-bold">
              {correlationType === 'positive' ? 'Positive' : correlationType === 'negative' ? 'Negative' : 'None'}
            </span>
          </span>
        </div>

        <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 inline-block">
          <svg width={width} height={height} className="overflow-visible">
            {/* Grid lines */}
            {[0.25, 0.5, 0.75].map(fraction => (
              <g key={fraction}>
                <line
                  x1={padding}
                  y1={padding + fraction * (height - 2 * padding)}
                  x2={width - padding}
                  y2={padding + fraction * (height - 2 * padding)}
                  stroke="#374151"
                  strokeDasharray="4"
                />
                <line
                  x1={padding + fraction * (width - 2 * padding)}
                  y1={padding}
                  x2={padding + fraction * (width - 2 * padding)}
                  y2={height - padding}
                  stroke="#374151"
                  strokeDasharray="4"
                />
              </g>
            ))}

            {/* Axes */}
            <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#6b7280" strokeWidth={2} />
            <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#6b7280" strokeWidth={2} />
            
            {/* Axis labels */}
            <text x={width / 2} y={height - 10} fill="#9ca3af" textAnchor="middle" className="text-sm">{xLabel}</text>
            <text x={15} y={height / 2} fill="#9ca3af" textAnchor="middle" transform={`rotate(-90, 15, ${height / 2})`} className="text-sm">{yLabel}</text>

            {/* Trend line */}
            {showLine && trendLinePoints() && (
              <line
                {...trendLinePoints()!}
                stroke={correlationColor}
                strokeWidth={2}
                strokeDasharray="8"
                opacity={0.6}
              />
            )}

            {/* Points */}
            {points.map((point, index) => (
              <g key={index}>
                <circle
                  cx={scaleX(point.x)}
                  cy={scaleY(point.y)}
                  r={hoveredPoint === index ? 10 : 7}
                  fill={correlationColor}
                  opacity={hoveredPoint === index ? 1 : 0.7}
                  className="transition-all duration-200 cursor-pointer"
                  onMouseEnter={() => setHoveredPoint(index)}
                  onMouseLeave={() => setHoveredPoint(null)}
                />
                {hoveredPoint === index && (
                  <text
                    x={scaleX(point.x)}
                    y={scaleY(point.y) - 15}
                    fill="white"
                    textAnchor="middle"
                    className="text-xs font-semibold"
                  >
                    ({point.x}, {point.y})
                  </text>
                )}
              </g>
            ))}
          </svg>
        </div>

        <p className="text-gray-400 text-sm mt-4">👆 Hover over points to see their coordinates</p>
      </div>
    </div>
  )
}

export default {
  SpotlightCards,
  StepReveal,
  CarouselNavigator,
  ClickRevealCards,
  TabbedPanels,
  Accordion,
  ComparisonTable,
  FlowchartDecision,
  InteractiveScatterPlot
}
