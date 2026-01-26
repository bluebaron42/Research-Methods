import { useState, useEffect } from 'react'
import { X, Menu, ChevronLeft, ChevronRight, Lightbulb, CheckCircle, Target, FlaskConical, Beaker, AlertTriangle, Eye, EyeOff, Zap, Brain, TrendingUp, Projector, AlertCircle, ShieldAlert, Shuffle, ClipboardList, Users, Settings, MapPin, RefreshCw, Link, User, BarChart2, BarChart3, ArrowRight, List, Layers, HelpCircle, Cog, XCircle, BookOpen, Check, Scale, ArrowLeftRight, MessageCircle, ThumbsUp, ThumbsDown, RotateCcw, FileText, BarChart, Database, Calculator, Hash, ArrowUpDown } from 'lucide-react'
import HypothesisLab from './components/lessons/activities/HypothesisLab'
import HypothesisBuilderLab from './components/lessons/activities/HypothesisBuilderLab'
import VariableDetectiveCrimeScene from './components/lessons/activities/VariableDetectiveCrimeScene'
import SampleSelectorSimulator from './components/lessons/activities/SampleSelectorSimulator'
import CorrelationDetective from './components/lessons/activities/CorrelationDetective'
import DesignArchitect from './components/lessons/activities/DesignArchitect'
import ExperimentTypeSorter from './components/lessons/activities/ExperimentTypeSorter'
import EthicsReviewBoard from './components/lessons/activities/EthicsReviewBoard'
import ObserverTrainingAcademy from './components/lessons/activities/ObserverTrainingAcademy'
import QuestionQualityControl from './components/lessons/activities/QuestionQualityControl'
import DataSortingCentre from './components/lessons/activities/DataSortingCentre'
import StatisticsCalculator from './components/lessons/activities/StatisticsCalculator'
import GraphMaster from './components/lessons/activities/GraphMaster'
import MathsSkillsBootCamp from './components/lessons/activities/MathsSkillsBootCamp'
import StatisticalTestSelector from './components/lessons/activities/StatisticalTestSelector'
import PeerReviewSimulator from './components/lessons/activities/PeerReviewSimulator'
import { AimsAndHypothesesTeach } from './components/lessons/activities/AimsAndHypothesesTeach'
import { VariablesTeachASLevel } from './components/lessons/activities/VariablesTeachASLevel'
import { VariableLabALevel } from './components/lessons/activities/VariableLabASLevel'
import { VariableDetectiveALevel } from './components/lessons/activities/VariableDetectiveASLevel'
import { ExtendedExamTaskALevelLesson1 } from './components/lessons/activities/ExtendedExamTaskASLevelLesson1'
import { ALevelLesson1ResearchMethodsRecap } from './components/lessons/activities/ALevelLesson1ResearchMethodsRecap'
// Phase 4: Interactive Teacher Input Components for AS Level
import { DemandCharacteristicsTeach } from './components/lessons/activities/DemandCharacteristicsTeach'
import { InvestigatorEffectsTeach } from './components/lessons/activities/InvestigatorEffectsTeach'
import { ControlMethodsTeach } from './components/lessons/activities/ControlMethodsTeach'
import { ExperimentalDesignsTeach } from './components/lessons/activities/ExperimentalDesignsTeach'
import IndependentGroupsTeach from './components/lessons/activities/IndependentGroupsTeach'
import RepeatedMeasuresTeach from './components/lessons/activities/RepeatedMeasuresTeach'
import MatchedPairsTeach from './components/lessons/activities/MatchedPairsTeach'
import { TypesOfExperimentsTeach } from './components/lessons/activities/TypesOfExperimentsTeach'
import LabExperimentTeach from './components/lessons/activities/LabExperimentTeach'
import FieldExperimentTeach from './components/lessons/activities/FieldExperimentTeach'
import NaturalExperimentTeach from './components/lessons/activities/NaturalExperimentTeach'
import QuasiExperimentTeach from './components/lessons/activities/QuasiExperimentTeach'
import { SamplingMethodsTeach } from './components/lessons/activities/SamplingMethodsTeach'
import PopulationSampleTeach from './components/lessons/activities/PopulationSampleTeach'
import RandomSamplingTeach from './components/lessons/activities/RandomSamplingTeach'
import SystematicSamplingTeach from './components/lessons/activities/SystematicSamplingTeach'
import StratifiedSamplingTeach from './components/lessons/activities/StratifiedSamplingTeach'
import OpportunitySamplingTeach from './components/lessons/activities/OpportunitySamplingTeach'
import VolunteerSamplingTeach from './components/lessons/activities/VolunteerSamplingTeach'
// Phase 4: Ethics Teach Components
import InformedConsentTeach from './components/lessons/activities/InformedConsentTeach'
import DeceptionTeach from './components/lessons/activities/DeceptionTeach'
import ProtectionFromHarmTeach from './components/lessons/activities/ProtectionFromHarmTeach'
import PrivacyConfidentialityTeach from './components/lessons/activities/PrivacyConfidentialityTeach'
import EthicsCommitteesTeach from './components/lessons/activities/EthicsCommitteesTeach'
// Phase 4: Observation Teach Components
import ObservationTypesTeach from './components/lessons/activities/ObservationTypesTeach'
import CovertOvertTeach from './components/lessons/activities/CovertOvertTeach'
import ParticipantNonParticipantTeach from './components/lessons/activities/ParticipantNonParticipantTeach'
import ObservationalDesignTeach from './components/lessons/activities/ObservationalDesignTeach'
import InterObserverReliabilityTeach from './components/lessons/activities/InterObserverReliabilityTeach'
// Phase 4: Self-Report Teach Components
import QuestionnaireTeach from './components/lessons/activities/QuestionnaireTeach'
import InterviewTeach from './components/lessons/activities/InterviewTeach'
import QuestionTypesTeach from './components/lessons/activities/QuestionTypesTeach'
// Phase 4: Correlation and Case Study Teach Components
import CorrelationTeach from './components/lessons/activities/CorrelationTeach'
import CaseStudyTeach from './components/lessons/activities/CaseStudyTeach'
// Phase 4: Additional AS Level Teach Components
import CorrelationIntroTeach from './components/lessons/activities/CorrelationIntroTeach'
import CorrelationTypesTeach from './components/lessons/activities/CorrelationTypesTeach'
import CoefficientTeach from './components/lessons/activities/CoefficientTeach'
import CorrelationVsExperimentTeach from './components/lessons/activities/CorrelationVsExperimentTeach'
import QuantQualTeach from './components/lessons/activities/QuantQualTeach'
import PrimarySecondaryTeach from './components/lessons/activities/PrimarySecondaryTeach'
import MetaAnalysisTeach from './components/lessons/activities/MetaAnalysisTeach'
import CentralTendencyTeach from './components/lessons/activities/CentralTendencyTeach'
import DispersionTeach from './components/lessons/activities/DispersionTeach'
import ChoosingStatsTeach from './components/lessons/activities/ChoosingStatsTeach'
import TablesTeach from './components/lessons/activities/TablesTeach'
import GraphsTeachAS from './components/lessons/activities/GraphsTeachAS'
import DistributionsTeach from './components/lessons/activities/DistributionsTeach'
import { EthicsTeach } from './components/lessons/activities/EthicsTeach'
import { ObservationsTeach } from './components/lessons/activities/ObservationsTeach'
import { SelfReportTeach } from './components/lessons/activities/SelfReportTeach'
import { CorrelationsTeach } from './components/lessons/activities/CorrelationsTeach'
import { DataTypesTeach } from './components/lessons/activities/DataTypesTeach'
import { DescriptiveStatsTeach } from './components/lessons/activities/DescriptiveStatsTeach'

// ============= TYPES =============
interface Question {
  id: number
  question: string
  options: string[]
  correct: number
  scenario?: string  // Optional scenario context for the question
}

interface ExamQuestion {
  id: number
  question: string
  marks: number
  rubric: string[]
  sampleAnswer?: string
  isCalculation?: boolean
  correctAnswer?: string | number
}

// ============= PHASE 1 COMPONENTS: CLICK-TO-REVEAL & MATH INPUT =============

// Click to Reveal Panel Component
const ClickToReveal: React.FC<{
  title?: string
  children: React.ReactNode
  buttonText?: string
  revealedButtonText?: string
  className?: string
  variant?: 'default' | 'rubric' | 'answer' | 'tip'
}> = ({ 
  title, 
  children, 
  buttonText = 'Click to Reveal', 
  revealedButtonText = 'Hide',
  className = '',
  variant = 'default'
}) => {
  const [isRevealed, setIsRevealed] = useState(false)
  
  const variantStyles = {
    default: {
      container: 'bg-gray-800/50 border-gray-700',
      button: 'bg-gray-700 hover:bg-gray-600 text-gray-200',
      content: 'bg-gray-900/50 border-gray-600'
    },
    rubric: {
      container: 'bg-emerald-900/20 border-emerald-500/30',
      button: 'bg-emerald-700 hover:bg-emerald-600 text-emerald-100',
      content: 'bg-emerald-950/30 border-emerald-500/30'
    },
    answer: {
      container: 'bg-blue-900/20 border-blue-500/30',
      button: 'bg-blue-700 hover:bg-blue-600 text-blue-100',
      content: 'bg-blue-950/30 border-blue-500/30'
    },
    tip: {
      container: 'bg-amber-900/20 border-amber-500/30',
      button: 'bg-amber-700 hover:bg-amber-600 text-amber-100',
      content: 'bg-amber-950/30 border-amber-500/30'
    }
  }
  
  const styles = variantStyles[variant]
  
  return (
    <div className={`rounded-xl border ${styles.container} ${className}`}>
      {title && (
        <div className="px-4 py-2 border-b border-inherit">
          <h4 className="font-bold text-sm text-gray-300">{title}</h4>
        </div>
      )}
      <div className="p-4">
        <button
          onClick={() => setIsRevealed(!isRevealed)}
          className={`w-full py-2 px-4 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 ${styles.button}`}
        >
          {isRevealed ? <EyeOff size={16} /> : <Eye size={16} />}
          {isRevealed ? revealedButtonText : buttonText}
        </button>
        
        {isRevealed && (
          <div className={`mt-4 p-4 rounded-lg border animate-fadeIn ${styles.content}`}>
            {children}
          </div>
        )}
      </div>
    </div>
  )
}

// Mathematical Input Component with Validation
const MathInput: React.FC<{
  correctAnswer: string | number
  placeholder?: string
  label?: string
  unit?: string
  tolerance?: number
  onCorrect?: () => void
  className?: string
}> = ({ 
  correctAnswer, 
  placeholder = 'Enter your answer', 
  label,
  unit = '',
  tolerance = 0.01,
  onCorrect,
  className = ''
}) => {
  const [value, setValue] = useState('')
  const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle')
  const [showAnswer, setShowAnswer] = useState(false)
  
  const checkAnswer = () => {
    const userValue = parseFloat(value)
    const correct = typeof correctAnswer === 'string' ? parseFloat(correctAnswer) : correctAnswer
    
    if (isNaN(userValue)) {
      setStatus('incorrect')
      return
    }
    
    // Check if within tolerance
    const isCorrect = Math.abs(userValue - correct) <= tolerance
    setStatus(isCorrect ? 'correct' : 'incorrect')
    
    if (isCorrect && onCorrect) {
      onCorrect()
    }
  }
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      checkAnswer()
    }
  }
  
  return (
    <div className={`space-y-2 ${className}`}>
      {label && <label className="block text-sm font-medium text-gray-300">{label}</label>}
      <div className="flex gap-2 items-center">
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            setStatus('idle')
          }}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          className={`flex-1 px-4 py-2 rounded-lg border bg-gray-900/50 text-white placeholder-gray-500 focus:outline-none transition-all ${
            status === 'correct' 
              ? 'border-green-500 bg-green-900/20' 
              : status === 'incorrect'
                ? 'border-red-500 bg-red-900/20'
                : 'border-gray-700 focus:border-blue-500'
          }`}
        />
        {unit && <span className="text-gray-400 text-sm">{unit}</span>}
        <button
          onClick={checkAnswer}
          className="px-4 py-2 rounded-lg font-bold bg-blue-600 hover:bg-blue-500 text-white transition-all"
        >
          Check
        </button>
      </div>
      
      {status === 'correct' && (
        <div className="flex items-center gap-2 text-green-400 text-sm animate-fadeIn">
          <CheckCircle size={16} />
          <span>Correct!</span>
        </div>
      )}
      
      {status === 'incorrect' && (
        <div className="space-y-2 animate-fadeIn">
          <div className="flex items-center gap-2 text-red-400 text-sm">
            <XCircle size={16} />
            <span>Not quite right. Try again or reveal the answer.</span>
          </div>
          <button
            onClick={() => setShowAnswer(true)}
            className="text-xs text-gray-500 hover:text-gray-400 underline"
          >
            Show correct answer
          </button>
        </div>
      )}
      
      {showAnswer && (
        <div className="p-3 rounded-lg bg-blue-900/20 border border-blue-500/30 text-blue-300 text-sm animate-fadeIn">
          <span className="font-bold">Correct answer:</span> {correctAnswer}{unit}
        </div>
      )}
    </div>
  )
}

// Exam Questions with Marking Rubric Component
const ExamQuestionsWithRubric: React.FC<{
  title?: string
  subtitle?: string
  scenario?: string
  questions: ExamQuestion[]
  isPresenting?: boolean
}> = ({ 
  title = "Exam-Style Questions", 
  subtitle = "Apply your understanding with marking rubrics",
  scenario,
  questions,
  isPresenting = false
}) => {
  const [revealedRubrics, setRevealedRubrics] = useState<Record<number, boolean>>({})
  const [mathAnswers, setMathAnswers] = useState<Record<number, boolean>>({})
  
  const toggleRubric = (id: number) => {
    setRevealedRubrics(prev => ({ ...prev, [id]: !prev[id] }))
  }
  
  const revealAll = () => {
    const allRevealed = questions.reduce((acc, q) => ({ ...acc, [q.id]: true }), {})
    setRevealedRubrics(allRevealed)
  }
  
  const hideAll = () => {
    setRevealedRubrics({})
  }
  
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800 overflow-y-auto custom-scrollbar`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-rose-400">{title}</h2>
            <p className="text-gray-400 text-sm">{subtitle}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={revealAll}
              className="px-4 py-2 rounded-lg text-sm font-bold bg-emerald-700 hover:bg-emerald-600 text-emerald-100 transition-all"
            >
              Reveal All Rubrics
            </button>
            <button
              onClick={hideAll}
              className="px-4 py-2 rounded-lg text-sm font-bold bg-gray-700 hover:bg-gray-600 text-gray-200 transition-all"
            >
              Hide All
            </button>
          </div>
        </div>
        
        {/* Scenario */}
        {scenario && (
          <div className="bg-gray-800/50 rounded-xl p-6 border border-rose-500/30 mb-6">
            <h3 className="text-xl font-bold text-rose-300 mb-3">Scenario</h3>
            <p className="text-gray-200 leading-relaxed">{scenario}</p>
          </div>
        )}
        
        {/* Questions */}
        <div className="space-y-6">
          {questions.map((q) => (
            <div key={q.id} className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden">
              {/* Question Header */}
              <div className="p-5 border-b border-gray-700">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 rounded-full bg-amber-600/20 text-amber-400 text-xs font-bold">
                        {q.marks} {q.marks === 1 ? 'mark' : 'marks'}
                      </span>
                      <span className="text-gray-500 text-xs">Question {q.id}</span>
                    </div>
                    <p className="text-gray-200">{q.question}</p>
                  </div>
                </div>
                
                {/* Math Input for calculation questions */}
                {q.isCalculation && q.correctAnswer && (
                  <div className="mt-4">
                    <MathInput
                      correctAnswer={q.correctAnswer}
                      placeholder="Enter your calculated answer"
                      onCorrect={() => setMathAnswers(prev => ({ ...prev, [q.id]: true }))}
                    />
                  </div>
                )}
              </div>
              
              {/* Rubric Section */}
              <div className="p-4 bg-gray-900/30">
                <button
                  onClick={() => toggleRubric(q.id)}
                  className={`w-full py-2 px-4 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                    revealedRubrics[q.id]
                      ? 'bg-emerald-700 hover:bg-emerald-600 text-emerald-100'
                      : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                  }`}
                >
                  {revealedRubrics[q.id] ? <EyeOff size={16} /> : <Eye size={16} />}
                  {revealedRubrics[q.id] ? 'Hide Marking Rubric' : 'Click to Reveal Marking Rubric'}
                </button>
                
                {revealedRubrics[q.id] && (
                  <div className="mt-4 animate-fadeIn">
                    <div className="p-4 rounded-lg bg-emerald-950/30 border border-emerald-500/30">
                      <h4 className="font-bold text-emerald-400 text-sm mb-3 flex items-center gap-2">
                        <CheckCircle size={16} />
                        Marking Rubric
                      </h4>
                      <ul className="space-y-2">
                        {q.rubric.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-emerald-200 text-sm">
                            <span className="text-emerald-500 mt-0.5">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {q.sampleAnswer && (
                        <div className="mt-4 pt-4 border-t border-emerald-500/20">
                          <h5 className="font-bold text-blue-400 text-sm mb-2">Sample Answer:</h5>
                          <p className="text-blue-200 text-sm italic">{q.sampleAnswer}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Application Task with Marking Rubric Component
interface TaskQuestion {
  id: number
  question: string
  marks: number
  rubric: string[]
  sampleAnswer?: string
}

const ApplicationTaskWithRubric: React.FC<{
  title: string
  scenario: string
  scenarioData?: string
  questions: TaskQuestion[]
  isPresenting?: boolean
}> = ({ 
  title,
  scenario,
  scenarioData,
  questions,
  isPresenting = false
}) => {
  const [revealedRubrics, setRevealedRubrics] = useState<Record<number, boolean>>({})
  
  const toggleRubric = (id: number) => {
    setRevealedRubrics(prev => ({ ...prev, [id]: !prev[id] }))
  }
  
  const revealAll = () => {
    const allRevealed = questions.reduce((acc, q) => ({ ...acc, [q.id]: true }), {})
    setRevealedRubrics(allRevealed)
  }
  
  const hideAll = () => {
    setRevealedRubrics({})
  }
  
  return (
    <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800 overflow-y-auto custom-scrollbar`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-rose-400">📝 {title}</h2>
          <div className="flex gap-2">
            <button
              onClick={revealAll}
              className="px-4 py-2 rounded-lg text-sm font-bold bg-emerald-700 hover:bg-emerald-600 text-emerald-100 transition-all"
            >
              Reveal All Rubrics
            </button>
            <button
              onClick={hideAll}
              className="px-4 py-2 rounded-lg text-sm font-bold bg-gray-700 hover:bg-gray-600 text-gray-200 transition-all"
            >
              Hide All
            </button>
          </div>
        </div>
        
        {/* Scenario */}
        <div className="bg-gray-800/50 rounded-xl p-6 border border-rose-500/30 mb-6">
          <h3 className="text-xl font-bold text-white mb-3">Scenario</h3>
          <p className="text-gray-300">{scenario}</p>
          {scenarioData && (
            <p className="text-2xl font-bold text-amber-400 text-center mt-4">{scenarioData}</p>
          )}
        </div>
        
        {/* Questions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {questions.map((q) => (
            <div key={q.id} className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden">
              {/* Question */}
              <div className="p-4 border-b border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 rounded bg-amber-600/20 text-amber-400 text-xs font-bold">
                    {q.marks} {q.marks === 1 ? 'mark' : 'marks'}
                  </span>
                  <span className="text-gray-500 text-xs">Q{q.id}</span>
                </div>
                <p className="text-gray-300">{q.question}</p>
              </div>
              
              {/* Rubric Toggle */}
              <div className="p-3 bg-gray-900/30">
                <button
                  onClick={() => toggleRubric(q.id)}
                  className={`w-full py-2 px-3 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                    revealedRubrics[q.id]
                      ? 'bg-emerald-700 hover:bg-emerald-600 text-emerald-100'
                      : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                  }`}
                >
                  {revealedRubrics[q.id] ? <EyeOff size={14} /> : <Eye size={14} />}
                  {revealedRubrics[q.id] ? 'Hide Rubric' : 'Reveal Rubric'}
                </button>
                
                {revealedRubrics[q.id] && (
                  <div className="mt-3 animate-fadeIn">
                    <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/30">
                      <h4 className="font-bold text-emerald-400 text-xs mb-2 flex items-center gap-1">
                        <CheckCircle size={12} />
                        Marking Rubric
                      </h4>
                      <ul className="space-y-1">
                        {q.rubric.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-emerald-200 text-xs">
                            <span className="text-emerald-500 mt-0.5">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {q.sampleAnswer && (
                        <div className="mt-3 pt-3 border-t border-emerald-500/20">
                          <h5 className="font-bold text-blue-400 text-xs mb-1">Sample Answer:</h5>
                          <p className="text-blue-200 text-xs italic">{q.sampleAnswer}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ============= PRESENTATION MODE SCALING HELPERS =============
// Consistent zoom/sizing logic for presentation mode
const zoom = {
  // Text sizes
  text: {
    xs: (presenting: boolean) => presenting ? 'text-xs' : 'text-xs',
    sm: (presenting: boolean) => presenting ? 'text-sm' : 'text-sm',
    base: (presenting: boolean) => presenting ? 'text-lg' : 'text-base',
    lg: (presenting: boolean) => presenting ? 'text-2xl' : 'text-lg',
    xl: (presenting: boolean) => presenting ? 'text-3xl' : 'text-xl',
    '2xl': (presenting: boolean) => presenting ? 'text-4xl' : 'text-2xl',
    '3xl': (presenting: boolean) => presenting ? 'text-5xl' : 'text-3xl',
    '4xl': (presenting: boolean) => presenting ? 'text-6xl' : 'text-4xl',
  },
  // Icon sizes
  icon: {
    sm: (presenting: boolean) => presenting ? 20 : 16,
    base: (presenting: boolean) => presenting ? 24 : 20,
    lg: (presenting: boolean) => presenting ? 32 : 24,
    xl: (presenting: boolean) => presenting ? 48 : 32,
    '2xl': (presenting: boolean) => presenting ? 64 : 48,
  },
  // Padding
  p: {
    xs: (presenting: boolean) => presenting ? 'p-2' : 'p-1',
    sm: (presenting: boolean) => presenting ? 'p-3' : 'p-2',
    base: (presenting: boolean) => presenting ? 'p-4' : 'p-3',
    md: (presenting: boolean) => presenting ? 'p-6' : 'p-4',
    lg: (presenting: boolean) => presenting ? 'p-8' : 'p-6',
    xl: (presenting: boolean) => presenting ? 'p-10' : 'p-8',
  },
  // Gaps
  gap: {
    xs: (presenting: boolean) => presenting ? 'gap-2' : 'gap-1',
    sm: (presenting: boolean) => presenting ? 'gap-3' : 'gap-2',
    base: (presenting: boolean) => presenting ? 'gap-4' : 'gap-3',
    md: (presenting: boolean) => presenting ? 'gap-6' : 'gap-4',
    lg: (presenting: boolean) => presenting ? 'gap-8' : 'gap-6',
    xl: (presenting: boolean) => presenting ? 'gap-12' : 'gap-8',
  },
}

// ============= LESSON TITLE SLIDE COMPONENT =============

interface LessonTitleSlideProps {
  lessonNumber: number
  title: string
  subtitle?: string
  objectives: string[]
  isPresenting?: boolean
  level?: 'GCSE' | 'AS' | 'A2'
}

const LessonTitleSlide: React.FC<LessonTitleSlideProps> = ({ 
  lessonNumber, 
  title, 
  subtitle, 
  objectives, 
  isPresenting = false,
  level = 'GCSE'
}) => {
  const levelConfig = {
    'GCSE': { 
      gradient: 'from-pink-600 to-purple-600',
      iconBg: 'bg-pink-500/20',
      iconRing: 'ring-pink-500/30',
      iconColor: 'text-pink-400',
      subtitleColor: 'text-pink-300',
      badge: 'bg-pink-600'
    },
    'AS': { 
      gradient: 'from-blue-600 to-cyan-600',
      iconBg: 'bg-blue-500/20',
      iconRing: 'ring-blue-500/30',
      iconColor: 'text-blue-400',
      subtitleColor: 'text-blue-300',
      badge: 'bg-blue-600'
    },
    'A2': { 
      gradient: 'from-emerald-600 to-teal-600',
      iconBg: 'bg-emerald-500/20',
      iconRing: 'ring-emerald-500/30',
      iconColor: 'text-emerald-400',
      subtitleColor: 'text-emerald-300',
      badge: 'bg-emerald-600'
    }
  }
  
  const config = levelConfig[level]

  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-12 space-y-8 animate-fadeIn">
      {/* Icon Circle */}
      <div className={`${isPresenting ? 'w-28 h-28' : 'w-32 h-32'} ${config.iconBg} rounded-full flex items-center justify-center mb-4 ring-4 ${config.iconRing}`}>
        <FlaskConical className={`${isPresenting ? 'w-14 h-14' : 'w-16 h-16'} ${config.iconColor}`} />
      </div>
      
      {/* Content */}
      <div className="space-y-4 max-w-2xl">
        {/* Level & Lesson Badge */}
        <h3 className={`${isPresenting ? 'text-xl' : 'text-2xl'} ${config.subtitleColor} font-medium`}>
          {level} Research Methods • Lesson {lessonNumber}
        </h3>
        
        {/* Main Title */}
        <h1 className={`${isPresenting ? 'text-4xl' : 'text-5xl'} font-black text-white tracking-tight`}>
          {title}
        </h1>
        
        {/* Subtitle/Objective */}
        {subtitle && (
          <p className={`${isPresenting ? 'text-lg' : 'text-xl'} text-gray-400 leading-relaxed`}>
            {subtitle}
          </p>
        )}
        
        {/* Learning Objectives */}
        {objectives.length > 0 && (
          <div className={`text-left bg-gray-800/30 rounded-xl ${isPresenting ? 'p-4 mt-4' : 'p-6 mt-6'} border border-gray-700/50`}>
            <p className={`text-gray-500 uppercase tracking-wider font-bold ${isPresenting ? 'text-xs mb-2' : 'text-sm mb-3'}`}>
              Today you will learn to:
            </p>
            <ul className={`space-y-2 ${isPresenting ? 'text-sm' : 'text-base'}`}>
              {objectives.map((obj, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-300">
                  <CheckCircle size={isPresenting ? 16 : 18} className={`${config.iconColor} mt-0.5 flex-shrink-0`} />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

// ============= INTERACTIVE COMPONENTS =============

// Do Now Quiz Component
const DoNowQuiz: React.FC<{ questions: Question[], isPresenting?: boolean }> = ({ questions, isPresenting = false }) => {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)

  const handleSelect = (qId: number, optionIdx: number) => 
    setAnswers(prev => ({ ...prev, [qId]: optionIdx }))
  
  const score = Object.keys(answers).reduce(
    (acc, qId) => acc + (answers[Number(qId)] === questions[Number(qId) - 1].correct ? 1 : 0),
    0
  )

  return (
    <div
      className={`grid h-full content-start transition-all ${isPresenting ? 'gap-6 p-6' : 'grid-cols-1 lg:grid-cols-2 gap-8 p-8'}`}
      style={isPresenting ? { gridTemplateColumns: '1fr 3fr' } : undefined}
    >
      {/* Left Panel - Compact Task Description */}
      <div className={isPresenting ? 'space-y-4' : 'space-y-6'}>
        <div className={`bg-gradient-to-br from-pink-900/40 to-purple-900/20 rounded-xl border border-pink-500/20 shadow-lg relative overflow-hidden ${isPresenting ? 'p-6' : 'p-8'}`}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 blur-3xl rounded-full"></div>
          <h3 className={`font-bold text-white ${isPresenting ? 'text-3xl mb-3' : 'text-2xl mb-6'}`}>Task: Activation & Retrieval</h3>
          <p className={`text-gray-300 leading-relaxed ${isPresenting ? 'text-lg' : ''}`}>
            Activate your psychological knowledge. These questions test recall from previous lessons and foundational content.
          </p>
        </div>
        {!showResults ? (
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setShowResults(true)}
              disabled={Object.keys(answers).length < 5}
              className={`bg-pink-600 hover:bg-pink-500 disabled:opacity-50 disabled:grayscale text-white rounded-lg font-bold transition-all shadow-lg hover:shadow-pink-500/20 ${isPresenting ? 'px-6 py-3 text-lg' : 'px-8 py-4'}`}
            >
              Submit
            </button>
            <button
              onClick={() => setShowResults(true)}
              className={`bg-transparent hover:bg-gray-800 text-gray-400 border border-gray-700 hover:border-gray-500 rounded-lg font-semibold transition-all ${isPresenting ? 'px-6 py-2 text-sm' : 'px-8 py-3 text-sm'}`}
            >
              Reveal All
            </button>
          </div>
        ) : (
          <div className={`bg-green-900/30 border border-green-500/30 rounded-lg text-center animate-fadeIn shadow-[0_0_30px_rgba(34,197,94,0.1)] ${isPresenting ? 'p-6' : 'p-6'}`}>
            <span className={`font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 block mb-2 ${isPresenting ? 'text-5xl' : 'text-5xl'}`}>
              {score} / 5
            </span>
            <span className={`text-green-200/70 font-mono uppercase tracking-widest ${isPresenting ? 'text-xs' : 'text-xs'}`}>
              Knowledge Retrieved
            </span>
          </div>
        )}
      </div>

      {/* Right Panel - Question Grid */}
      <div className={`${isPresenting ? '' : 'space-y-4 overflow-y-auto pr-2 custom-scrollbar max-h-full'}`}>
        {isPresenting ? (
          <div className="grid grid-cols-3 gap-4">
            {questions.map((q) => (
              <div key={q.id} className="bg-gray-900/50 rounded-lg border border-gray-800 p-5 hover:border-gray-700 transition-colors min-h-[160px] flex flex-col">
                <h4 className="font-semibold text-gray-200 mb-3 text-xl leading-tight">
                  <span className="text-pink-500 mr-2">{String(q.id).padStart(2, '0')}.</span>
                  {q.question}
                </h4>
                <div className="flex-grow flex items-center">
                  {showResults ? (
                    <div className="text-green-400 font-bold animate-fadeIn flex items-center gap-2 text-lg">
                      <CheckCircle size={28} /> <span className="text-base">{q.options[q.correct]}</span>
                    </div>
                  ) : (
                    <span className="text-gray-500 text-sm">Reveal answers to show</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          questions.map((q) => (
            <div key={q.id} className={`bg-gray-900/50 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors p-4`}>
              <h4 className={`font-semibold text-gray-200 mb-4 text-sm`}>
                <span className="text-pink-500 mr-3">{String(q.id).padStart(2, '0')}.</span>
                {q.question}
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {q.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => !showResults && handleSelect(q.id, idx)}
                    className={`rounded-lg text-left transition-all border px-4 py-2 text-xs ${
                      showResults
                        ? idx === q.correct
                          ? 'bg-green-900/30 border-green-500 text-green-300'
                          : answers[q.id] === idx
                            ? 'bg-red-900/30 border-red-500 text-red-300'
                            : 'bg-gray-900/50 border-transparent text-gray-600 opacity-50'
                        : answers[q.id] === idx
                          ? 'bg-pink-600 border-pink-500 text-white'
                          : 'bg-gray-800 border-transparent hover:bg-gray-750 text-gray-400 hover:text-white'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

// Hypotheses Comparison - Side by side
const HypothesesComparison: React.FC<{ level: 'gcse' | 'aslevel' }> = ({ level }) => {
  const content = level === 'gcse' ? {
    aimText: 'To investigate whether background music affects concentration.',
    hypothesisText: 'Students who listen to music while studying will remember fewer words than students who study in silence.',
    differences: [
      { aspect: 'Specificity', aim: 'General and broad', hypothesis: 'Specific and precise' },
      { aspect: 'Prediction', aim: 'No prediction made', hypothesis: 'Makes a clear prediction' },
      { aspect: 'Testing', aim: 'Guides overall study', hypothesis: 'Directly testable' },
      { aspect: 'Variables', aim: 'Identifies topic area', hypothesis: 'States relationship between variables' }
    ]
  } : {
    aimText: 'To investigate the relationship between cognitive load and working memory performance in educational settings.',
    hypothesisText: 'Participants exposed to 70dB background noise will score significantly lower on a digit span task (M < 6.5) compared to those in silent conditions.',
    differences: [
      { aspect: 'Epistemology', aim: 'Establishes research focus', hypothesis: 'Enables falsification' },
      { aspect: 'Operationalisation', aim: 'Conceptual level', hypothesis: 'Operationally defined' },
      { aspect: 'Statistical Testing', aim: 'No statistical implications', hypothesis: 'Amenable to statistical analysis' },
      { aspect: 'Theoretical Basis', aim: 'Exploratory or confirmatory', hypothesis: 'Derived from theory/previous research' }
    ]
  }

  return (
    <div className="flex flex-col h-full p-8 animate-fadeIn">
      <h2 className="text-5xl font-black text-white mb-8 flex items-center gap-3">
        <FlaskConical className="text-pink-500" size={48} />
        Aims vs Hypotheses
      </h2>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-500/50 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Target className="text-blue-400" size={24} />
            </div>
            <h3 className="text-3xl font-bold text-blue-300">AIM</h3>
          </div>
          <p className="text-xl text-gray-200 italic leading-relaxed bg-blue-950/30 p-6 rounded-lg border-l-4 border-blue-400">
            "{content.aimText}"
          </p>
        </div>

        <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/20 border-2 border-pink-500/50 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
              <Beaker className="text-pink-400" size={24} />
            </div>
            <h3 className="text-3xl font-bold text-pink-300">HYPOTHESIS</h3>
          </div>
          <p className="text-xl text-gray-200 italic leading-relaxed bg-pink-950/30 p-6 rounded-lg border-l-4 border-pink-400">
            "{content.hypothesisText}"
          </p>
        </div>
      </div>

      <div className="bg-gray-900/80 border border-gray-700 rounded-xl overflow-hidden">
        <div className="grid grid-cols-3 gap-px bg-gray-700">
          <div className="bg-gray-800 p-4">
            <h4 className="text-purple-400 font-bold uppercase text-sm">Aspect</h4>
          </div>
          <div className="bg-blue-900/30 p-4">
            <h4 className="text-blue-400 font-bold uppercase text-sm">Aim</h4>
          </div>
          <div className="bg-pink-900/30 p-4">
            <h4 className="text-pink-400 font-bold uppercase text-sm">Hypothesis</h4>
          </div>
          {content.differences.map((diff, idx) => (
            <>
              <div key={`aspect-${idx}`} className="bg-gray-800 p-4">
                <p className="text-gray-200 font-semibold">{diff.aspect}</p>
              </div>
              <div key={`aim-${idx}`} className="bg-gray-900 p-4">
                <p className="text-gray-300">{diff.aim}</p>
              </div>
              <div key={`hyp-${idx}`} className="bg-gray-900 p-4">
                <p className="text-gray-300">{diff.hypothesis}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

// Hypothesis Types - Card deck with flip
const HypothesisTypes: React.FC<{ level: 'gcse' | 'aslevel' }> = ({ level }) => {
  const [selectedType, setSelectedType] = useState<string | null>(null)
  
  const types = level === 'gcse' ? [
    {
      id: 'alternative',
      name: 'Alternative Hypothesis',
      symbol: 'H₁',
      description: 'Predicts there WILL be a difference or relationship between variables.',
      example: 'There will be a difference in test scores between students who revise with music and those who revise in silence.',
      color: 'green'
    },
    {
      id: 'null',
      name: 'Null Hypothesis',
      symbol: 'H₀',
      description: 'Predicts there will be NO difference or relationship. Any difference is due to chance.',
      example: 'There will be no difference in test scores between students who revise with music and those who revise in silence.',
      color: 'red'
    }
  ] : [
    {
      id: 'alternative',
      name: 'Alternative Hypothesis',
      symbol: 'H₁',
      description: 'States that an effect, difference, or relationship exists. Forms the basis for statistical hypothesis testing.',
      example: 'Directional (one-tailed): Participants in high-stress conditions will recall fewer words than low-stress participants.\n\nNon-directional (two-tailed): There will be a significant difference in recall between high-stress and low-stress conditions.',
      color: 'green'
    },
    {
      id: 'null',
      name: 'Null Hypothesis',
      symbol: 'H₀',
      description: 'Assumes no significant effect exists in the population. Rejected when p < α (typically 0.05).',
      example: 'H₀: μ₁ = μ₂ (There is no significant difference in mean recall scores between high-stress and low-stress conditions)',
      color: 'red'
    }
  ]

  return (
    <div className="flex flex-col h-full items-center justify-center p-8 animate-fadeIn">
      <h2 className="text-5xl font-black text-white mb-12 text-center">Types of Hypotheses</h2>
      
      <div className="grid grid-cols-2 gap-8 max-w-5xl w-full">
        {types.map((type) => (
          <div
            key={type.id}
            onClick={() => setSelectedType(selectedType === type.id ? null : type.id)}
            className={`cursor-pointer group border-3 rounded-2xl transition-all duration-500 p-8 transform hover:scale-105 ${
              type.color === 'green'
                ? selectedType === type.id
                  ? 'border-green-500 bg-green-900/20 shadow-2xl shadow-green-500/30'
                  : 'border-green-700 bg-green-900/10 hover:border-green-500/70'
                : selectedType === type.id
                  ? 'border-red-500 bg-red-900/20 shadow-2xl shadow-red-500/30'
                  : 'border-red-700 bg-red-900/10 hover:border-red-500/70'
            }`}
            style={{ minHeight: '400px' }}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <div className={`text-6xl font-black ${type.color === 'green' ? 'text-green-400' : 'text-red-400'}`}>
                  {type.symbol}
                </div>
                {selectedType === type.id ? (
                  <AlertTriangle className={type.color === 'green' ? 'text-green-400' : 'text-red-400'} size={32} />
                ) : (
                  <div className="text-gray-600 group-hover:text-gray-400 text-2xl">→</div>
                )}
              </div>
              
              <h3 className={`text-2xl font-bold mb-4 ${type.color === 'green' ? 'text-green-300' : 'text-red-300'}`}>
                {type.name}
              </h3>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {type.description}
              </p>

              {selectedType === type.id && (
                <div className={`mt-auto animate-fadeIn ${type.color === 'green' ? 'bg-green-950/50' : 'bg-red-950/50'} rounded-lg p-6 border-l-4 ${type.color === 'green' ? 'border-green-500' : 'border-red-500'}`}>
                  <h4 className={`text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${type.color === 'green' ? 'text-green-400' : 'text-red-400'}`}>
                    <Lightbulb size={16} />
                    Example
                  </h4>
                  <p className="text-gray-200 whitespace-pre-line italic">
                    {type.example}
                  </p>
                </div>
              )}

              {selectedType !== type.id && (
                <p className="mt-auto text-gray-500 text-sm">Click to see example →</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Directional vs Non-directional Slider
const DirectionalSlider: React.FC<{ level: 'gcse' | 'aslevel' }> = ({ level }) => {
  const [value, setValue] = useState(50)
  
  const isDirectional = value > 50
  const intensity = Math.abs(value - 50) / 50

  const content = level === 'gcse' ? {
    directional: {
      title: 'Directional (One-Tailed)',
      description: 'Predicts the DIRECTION of the effect',
      example: 'Students WITH music will score LOWER than students WITHOUT music',
      features: ['Uses words like "higher", "lower", "more", "less"', 'Specific prediction', 'One-tailed statistical test']
    },
    nonDirectional: {
      title: 'Non-Directional (Two-Tailed)',
      description: 'Predicts a difference but NOT the direction',
      example: 'There will be a DIFFERENCE between students with and without music',
      features: ['Just says there will be a "difference"', 'Less specific', 'Two-tailed statistical test']
    }
  } : {
    directional: {
      title: 'Directional Hypothesis (One-Tailed)',
      description: 'Specifies the direction of predicted effect - requires prior theoretical or empirical justification',
      example: 'H₁: μ₁ > μ₂ (High cognitive load group will score significantly higher than low load group)',
      features: ['Increased statistical power', 'α placed entirely in one tail', 'Requires strong theoretical basis', 'More precise prediction']
    },
    nonDirectional: {
      title: 'Non-Directional Hypothesis (Two-Tailed)',
      description: 'Predicts an effect exists without specifying direction - used when direction is uncertain',
      example: 'H₁: μ₁ ≠ μ₂ (There will be a significant difference in scores between groups)',
      features: ['Conservative approach', 'α split between both tails', 'Protects against Type I error', 'Appropriate for exploratory research']
    }
  }

  const currentContent = isDirectional ? content.directional : content.nonDirectional

  return (
    <div className="flex flex-col h-full items-center justify-center p-8 animate-fadeIn">
      <h2 className="text-5xl font-black text-white mb-12">Directional vs Non-Directional</h2>
      
      <div className="max-w-5xl w-full mb-12">
        <div className="relative">
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="w-full h-3 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, 
                rgb(59, 130, 246) 0%, 
                rgb(59, 130, 246) ${value}%, 
                rgb(236, 72, 153) ${value}%, 
                rgb(236, 72, 153) 100%)`
            }}
          />
          <div className="flex justify-between mt-4 text-sm font-mono text-gray-400">
            <span className={value < 50 ? 'text-blue-400 font-bold' : ''}>Non-Directional</span>
            <span className="text-gray-600">Move slider →</span>
            <span className={value > 50 ? 'text-pink-400 font-bold' : ''}>Directional</span>
          </div>
        </div>
      </div>

      <div className={`max-w-4xl w-full rounded-2xl border-2 p-10 transition-all duration-500 ${
        isDirectional
          ? 'border-pink-500 bg-gradient-to-br from-pink-900/30 to-purple-900/20 shadow-2xl shadow-pink-500/30'
          : 'border-blue-500 bg-gradient-to-br from-blue-900/30 to-cyan-900/20 shadow-2xl shadow-blue-500/30'
      }`} style={{ opacity: 0.4 + (intensity * 0.6) }}>
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-16 h-16 rounded-full ${isDirectional ? 'bg-pink-500/20' : 'bg-blue-500/20'} flex items-center justify-center`}>
            <TrendingUp size={32} className={isDirectional ? 'text-pink-400' : 'text-blue-400'} />
          </div>
          <h3 className={`text-4xl font-black ${isDirectional ? 'text-pink-300' : 'text-blue-300'}`}>
            {currentContent.title}
          </h3>
        </div>

        <p className="text-2xl text-gray-200 mb-6 leading-relaxed">
          {currentContent.description}
        </p>

        <div className={`${isDirectional ? 'bg-pink-950/30' : 'bg-blue-950/30'} rounded-lg p-6 mb-6 border-l-4 ${isDirectional ? 'border-pink-500' : 'border-blue-500'}`}>
          <p className="text-xl text-gray-200 italic">{currentContent.example}</p>
        </div>

        <ul className="space-y-3">
          {currentContent.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-300 text-lg">
              <CheckCircle size={24} className={`flex-shrink-0 mt-0.5 ${isDirectional ? 'text-pink-400' : 'text-blue-400'}`} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// Hypothesis Writer - Matching/Building Activity
// Hypothesis Writer - Interactive Builder with Cycling Button Options
const HypothesisWriter: React.FC<{ level: 'gcse' | 'aslevel' }> = ({ level }) => {
  // Index-based state for cycling through options
  const [indices, setIndices] = useState<Record<string, number>>({})
  
  // Define exercise data with explicit typing
  type ExerciseData = {
    scenario: string
    parts: Record<string, string[]>
    correct: Record<string, string>
    labels: Record<string, string>
  }

  const gcseExercise: ExerciseData = {
    scenario: 'A psychologist wants to test if listening to classical music improves test performance.',
    parts: {
      population: ['Students', 'Teachers', 'Musicians'],
      condition1: ['listen to classical music', 'listen to rock music', 'sit in silence'],
      action: ['while taking a test', 'before the test', 'after the test'],
      prediction: ['will score higher', 'will score lower', 'will score the same'],
      condition2: ['students who sit in silence', 'students who listen to rock', 'students who don\'t take the test']
    },
    correct: {
      population: 'Students',
      condition1: 'listen to classical music',
      action: 'while taking a test',
      prediction: 'will score higher',
      condition2: 'students who sit in silence'
    },
    labels: {
      population: 'Population',
      condition1: 'Condition 1',
      action: 'Action',
      prediction: 'Prediction',
      condition2: 'Condition 2'
    }
  }

  const aslevelExercise: ExerciseData = {
    scenario: 'Research investigating the effect of sleep deprivation on executive function in young adults.',
    parts: {
      population: ['Participants aged 18-25', 'All adults', 'Sleep-deprived individuals'],
      condition1: ['experiencing partial sleep deprivation (4 hours sleep)', 'who are well-rested (8 hours)', 'with varied sleep patterns'],
      measure: ['performance on a Stroop task', 'subjective tiredness ratings', 'heart rate variability'],
      prediction: ['will demonstrate significantly impaired', 'will show no difference in', 'will exhibit enhanced'],
      comparison: ['compared to well-rested controls', 'relative to baseline', 'versus the general population'],
      stats: ['(p < 0.05)', '(d > 0.5)', '(r > 0.7)']
    },
    correct: {
      population: 'Participants aged 18-25',
      condition1: 'experiencing partial sleep deprivation (4 hours sleep)',
      measure: 'performance on a Stroop task',
      prediction: 'will demonstrate significantly impaired',
      comparison: 'compared to well-rested controls',
      stats: '(p < 0.05)'
    },
    labels: {
      population: 'Population',
      condition1: 'Condition 1',
      measure: 'Measurement',
      prediction: 'Prediction',
      comparison: 'Comparison',
      stats: 'Statistical Threshold'
    }
  }

  const exercise = level === 'gcse' ? gcseExercise : aslevelExercise

  // Cycle to next option for a part
  const cycleOption = (partKey: string, options: string[]) => {
    setIndices(prev => ({
      ...prev,
      [partKey]: ((prev[partKey] ?? 0) + 1) % options.length
    }))
  }

  // Get current value for a part
  const getCurrentValue = (partKey: string, options: string[]) => {
    return options[indices[partKey] ?? 0]
  }

  // Build the hypothesis string from current selections
  const buildHypothesis = () => {
    return Object.entries(exercise.parts)
      .map(([key, options]) => getCurrentValue(key, options))
      .join(' ')
  }

  // Check if current selections match the correct answer
  const isCorrect = Object.entries(exercise.correct).every(([key, correctValue]) => {
    const options = exercise.parts[key]
    if (!options) return false
    return getCurrentValue(key, options) === correctValue
  })

  return (
    <div className="flex flex-col h-full p-8 animate-fadeIn">
      <h2 className="text-5xl font-black text-white mb-6">Build a Good Hypothesis</h2>
      <p className="text-xl text-gray-300 mb-6 max-w-4xl">
        <span className="text-pink-400 font-bold">Scenario:</span> {exercise.scenario}
      </p>
      <p className="text-lg text-gray-400 mb-8">
        Click the buttons below to cycle through options and build the correct hypothesis.
      </p>

      {/* Live Hypothesis Preview */}
      <div className={`max-w-5xl rounded-2xl border-2 p-6 mb-8 transition-all ${
        isCorrect 
          ? 'border-green-500 bg-green-900/20 shadow-lg shadow-green-500/30' 
          : 'border-pink-500/30 bg-gray-900/50'
      }`}>
        <div className="flex items-center gap-3 mb-4">
          {isCorrect && (
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
              <CheckCircle className="text-green-400" size={24} />
            </div>
          )}
          <h3 className={`text-lg font-semibold ${isCorrect ? 'text-green-300' : 'text-pink-300'}`}>
            {isCorrect ? '✓ Well-Operationalised Hypothesis!' : 'Your Hypothesis:'}
          </h3>
        </div>
        <p className="text-xl text-gray-200 leading-relaxed italic">
          "{buildHypothesis()}"
        </p>
      </div>

      {/* Button Grid for Cycling Options */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl">
        {Object.entries(exercise.parts).map(([partKey, options]) => {
          const currentValue = getCurrentValue(partKey, options)
          const isPartCorrect = currentValue === exercise.correct[partKey]
          const label = exercise.labels[partKey] || partKey
          
          return (
            <button
              key={partKey}
              onClick={() => cycleOption(partKey, options)}
              className={`p-4 rounded-xl border-2 transition-all text-left group hover:scale-[1.02] ${
                isPartCorrect
                  ? 'border-green-500 bg-green-900/30 shadow-lg shadow-green-500/20'
                  : 'border-pink-500/30 bg-gray-900/50 hover:border-pink-500 hover:bg-gray-800'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-pink-400">
                  {label}
                </span>
                <span className="text-xs text-gray-500 group-hover:text-pink-400 transition-colors">
                  Click to change →
                </span>
              </div>
              <p className={`font-semibold text-sm leading-snug ${isPartCorrect ? 'text-green-300' : 'text-white'}`}>
                {currentValue}
              </p>
            </button>
          )
        })}
      </div>
    </div>
  )
}
// Knowledge Check Component - Full Width with Presentation Mode Reveal
const KnowledgeCheck: React.FC<{ questions: Question[], title: string, subtitle: string, isPresenting?: boolean }> = ({ questions, title, subtitle, isPresenting = false }) => {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)
  const [optionsRevealed, setOptionsRevealed] = useState(!isPresenting) // Auto-reveal if not presenting

  const handleSelect = (qId: number, optionIdx: number) => 
    setAnswers(prev => ({ ...prev, [qId]: optionIdx }))
  
  const score = Object.keys(answers).reduce(
    (acc, qId) => acc + (answers[Number(qId)] === questions[Number(qId) - 1].correct ? 1 : 0),
    0
  )

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 animate-fadeIn">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 shadow-2xl shadow-purple-500/50 mb-4">
            <Brain size={40} className="text-white" />
          </div>
          <h2 className="text-4xl font-black text-white mb-2">{title}</h2>
          <p className="text-gray-400">{subtitle}</p>
        </div>

        {/* Reveal Options Button - Only in Presentation Mode */}
        {isPresenting && !optionsRevealed && (
          <div className="text-center mb-6">
            <button
              onClick={() => setOptionsRevealed(true)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-xl font-bold px-8 py-4 text-lg transition-all shadow-lg shadow-purple-500/30 flex items-center gap-3 mx-auto"
            >
              <Eye size={24} />
              Reveal Options
            </button>
          </div>
        )}

        <div className="space-y-4 mb-6">
          {questions.map((q) => (
            <div key={q.id} className="bg-gray-900/80 rounded-xl border border-gray-700 p-5">
              <h4 className="font-bold text-gray-100 mb-3">
                <span className="text-purple-400 mr-2">{q.id}.</span>
                {q.question}
              </h4>
              {optionsRevealed ? (
                <div className="grid grid-cols-1 gap-2">
                  {q.options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => !showResults && handleSelect(q.id, idx)}
                      className={`rounded-lg text-left transition-all px-4 py-3 border ${
                        showResults
                          ? idx === q.correct
                            ? 'bg-green-900/40 border-green-500 text-green-200 font-bold'
                            : answers[q.id] === idx
                              ? 'bg-red-900/40 border-red-500 text-red-200'
                              : 'bg-gray-800/50 border-transparent text-gray-500'
                          : answers[q.id] === idx
                            ? 'bg-purple-600 border-purple-500 text-white font-semibold'
                            : 'bg-gray-800 border-gray-700 hover:bg-gray-750 text-gray-300 hover:text-white hover:border-purple-500/50'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center py-6 bg-gray-800/30 rounded-lg border border-dashed border-gray-600">
                  <EyeOff className="text-gray-500 mr-2" size={20} />
                  <span className="text-gray-500 italic">Options hidden - click Reveal to show</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {optionsRevealed && (
          !showResults ? (
            <button
              onClick={() => setShowResults(true)}
              disabled={Object.keys(answers).length < questions.length}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:opacity-50 disabled:grayscale text-white rounded-xl font-bold px-8 py-4 text-lg transition-all shadow-lg"
            >
              Check Answers
            </button>
          ) : (
            <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 border-2 border-purple-500/50 rounded-xl p-8 text-center shadow-[0_0_40px_rgba(168,85,247,0.2)]">
              <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 block mb-3">
                {score} / {questions.length}
              </span>
              <span className="text-purple-200 font-semibold text-xl">
                {score === questions.length ? '🎉 Perfect Score!' : score >= questions.length * 0.75 ? '✨ Great Work!' : score >= questions.length * 0.5 ? '👍 Good Try!' : '📚 Keep Learning!'}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  )
}

// Split Knowledge Check Component - Two Column Layout (for mid-lesson checks)
const SplitKnowledgeCheck: React.FC<{ questions: Question[], title: string, subtitle: string, isPresenting?: boolean }> = ({ questions, title, subtitle, isPresenting = false }) => {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)

  const handleSelect = (qId: number, optionIdx: number) => 
    setAnswers(prev => ({ ...prev, [qId]: optionIdx }))
  
  const score = Object.keys(answers).reduce(
    (acc, qId) => acc + (answers[Number(qId)] === questions[Number(qId) - 1].correct ? 1 : 0),
    0
  )

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-8'}`}>
      {/* Header */}
      <div className={`text-center ${isPresenting ? 'mb-4' : 'mb-8'}`}>
        <div className={`inline-flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-600 shadow-2xl shadow-purple-500/50 ${isPresenting ? 'w-16 h-16 mb-3' : 'w-20 h-20 mb-4'}`}>
          <Brain size={isPresenting ? 32 : 40} className="text-white" />
        </div>
        <h2 className={`font-black text-white ${isPresenting ? 'text-2xl mb-1' : 'text-4xl mb-2'}`}>{title}</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>{subtitle}</p>
      </div>

      {/* Two Column Questions Layout */}
      <div className={`flex-grow grid grid-cols-2 overflow-auto custom-scrollbar ${isPresenting ? 'gap-4' : 'gap-6'}`}>
        {/* Left Column */}
        <div className={`overflow-y-auto pr-2 custom-scrollbar ${isPresenting ? 'space-y-3' : 'space-y-4'}`}>
          {questions.slice(0, Math.ceil(questions.length / 2)).map((q) => (
            <div key={q.id} className={`bg-gray-900/80 rounded-xl border border-gray-700 ${isPresenting ? 'p-3' : 'p-5'}`}>
              {q.scenario && (
                <p className={`text-gray-400 italic border-l-2 border-purple-500/50 pl-3 ${isPresenting ? 'text-xs mb-1' : 'text-sm mb-2'}`}>"{q.scenario}"</p>
              )}
              <h4 className={`font-bold text-gray-100 ${isPresenting ? 'text-sm mb-2' : 'mb-3'}`}>
                <span className="text-purple-400 mr-2">{q.id}.</span>
                {q.question}
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {q.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => !showResults && handleSelect(q.id, idx)}
                    className={`rounded-lg text-left transition-all border ${isPresenting ? 'px-2 py-1.5 text-xs' : 'px-3 py-2 text-sm'} ${
                      showResults
                        ? idx === q.correct
                          ? 'bg-green-900/40 border-green-500 text-green-200 font-bold'
                          : answers[q.id] === idx
                            ? 'bg-red-900/40 border-red-500 text-red-200'
                            : 'bg-gray-800/50 border-transparent text-gray-500'
                        : answers[q.id] === idx
                          ? 'bg-purple-600 border-purple-500 text-white font-semibold'
                          : 'bg-gray-800 border-gray-700 hover:bg-gray-750 text-gray-300 hover:text-white hover:border-purple-500/50'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className={`overflow-y-auto pl-2 custom-scrollbar ${isPresenting ? 'space-y-3' : 'space-y-4'}`}>
          {questions.slice(Math.ceil(questions.length / 2)).map((q) => (
            <div key={q.id} className={`bg-gray-900/80 rounded-xl border border-gray-700 ${isPresenting ? 'p-3' : 'p-5'}`}>
              {q.scenario && (
                <p className={`text-gray-400 italic border-l-2 border-purple-500/50 pl-3 ${isPresenting ? 'text-xs mb-1' : 'text-sm mb-2'}`}>"{q.scenario}"</p>
              )}
              <h4 className={`font-bold text-gray-100 ${isPresenting ? 'text-sm mb-2' : 'mb-3'}`}>
                <span className="text-purple-400 mr-2">{q.id}.</span>
                {q.question}
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {q.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => !showResults && handleSelect(q.id, idx)}
                    className={`rounded-lg text-left transition-all border ${isPresenting ? 'px-2 py-1.5 text-xs' : 'px-3 py-2 text-sm'} ${
                      showResults
                        ? idx === q.correct
                          ? 'bg-green-900/40 border-green-500 text-green-200 font-bold'
                          : answers[q.id] === idx
                            ? 'bg-red-900/40 border-red-500 text-red-200'
                            : 'bg-gray-800/50 border-transparent text-gray-500'
                        : answers[q.id] === idx
                          ? 'bg-purple-600 border-purple-500 text-white font-semibold'
                          : 'bg-gray-800 border-gray-700 hover:bg-gray-750 text-gray-300 hover:text-white hover:border-purple-500/50'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer with Submit Button */}
      <div className={`border-t border-gray-700 flex items-center justify-between ${isPresenting ? 'mt-4 pt-4' : 'mt-8 pt-6'}`}>
        {!showResults ? (
          <button
            onClick={() => setShowResults(true)}
            disabled={Object.keys(answers).length < questions.length}
            className={`w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:opacity-50 disabled:grayscale text-white rounded-xl font-bold transition-all shadow-lg ${isPresenting ? 'px-6 py-2 text-sm' : 'px-8 py-3'}`}
          >
            Check Answers ({Object.keys(answers).length}/{questions.length})
          </button>
        ) : (
          <div className={`w-full bg-gradient-to-r from-purple-900/40 to-pink-900/40 border-2 border-purple-500/50 rounded-xl text-center ${isPresenting ? 'p-4' : 'p-6'}`}>
            <span className={`font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 block ${isPresenting ? 'text-3xl mb-1' : 'text-5xl mb-2'}`}>
              {score} / {questions.length}
            </span>
            <span className={`text-purple-200 font-semibold ${isPresenting ? 'text-sm' : ''}`}>
              {score === questions.length ? '🎉 Perfect Score!' : score >= questions.length * 0.75 ? '✨ Great Work!' : score >= questions.length * 0.5 ? '👍 Good Try!' : '📚 Keep Learning!'}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

// Aims Interactive Component - Click to reveal cards
const AimsInteractive: React.FC<{ level: 'gcse' | 'aslevel' }> = ({ level }) => {
  const [revealed, setRevealed] = useState<string | null>(null)
  
  const content = level === 'gcse' ? {
    definition: 'An aim is a general statement explaining the purpose of a study. It tells us what the researcher wants to find out.',
    examples: [
      { id: 'ex1', title: 'Memory Study', aim: 'To investigate whether background music affects concentration.' },
      { id: 'ex2', title: 'Sleep Research', aim: 'To find out if lack of sleep affects reaction time.' },
      { id: 'ex3', title: 'Social Psychology', aim: 'To examine the effect of group size on helping behaviour.' }
    ],
    tips: ['States what the study is about', 'Written as a statement, not a question', 'Broad overview of the research goal']
  } : {
    definition: 'An aim provides a broad statement of intent that outlines the general purpose of an investigation. It establishes the research focus without making specific predictions about outcomes.',
    examples: [
      { id: 'ex1', title: 'Cognitive Load', aim: 'To investigate the relationship between cognitive load and working memory performance in educational settings.' },
      { id: 'ex2', title: 'Sleep Deprivation', aim: 'To examine the effects of partial sleep deprivation on executive function and attentional control in young adults.' },
      { id: 'ex3', title: 'Bystander Effect', aim: 'To explore the mediating role of diffusion of responsibility in the relationship between group size and prosocial intervention.' }
    ],
    tips: ['Provides direction for the research methodology', 'Identifies the key variables under investigation', 'Distinguishes exploratory from confirmatory research', 'Forms the basis for hypothesis development']
  }

  return (
    <div className="flex flex-col h-full p-8 animate-fadeIn">
      <div className="mb-8">
        <h2 className="text-5xl font-black text-white mb-4 flex items-center gap-3">
          <Target className="text-pink-500" size={48} />
          What is an Aim?
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
          {content.definition}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        {content.examples.map((example) => (
          <div
            key={example.id}
            onClick={() => setRevealed(revealed === example.id ? null : example.id)}
            className={`cursor-pointer group border-2 rounded-2xl transition-all duration-300 overflow-hidden p-6 ${
              revealed === example.id
                ? 'border-pink-500 bg-pink-900/10 shadow-lg shadow-pink-500/20'
                : 'border-gray-700 hover:border-pink-500/50 bg-gray-900/50'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">{example.title}</h3>
              {revealed === example.id ? <EyeOff className="text-pink-400" /> : <Eye className="text-gray-500 group-hover:text-pink-400" />}
            </div>
            {revealed === example.id && (
              <div className="animate-fadeIn">
                <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-pink-500">
                  <p className="text-gray-200 italic">{example.aim}</p>
                </div>
              </div>
            )}
            {revealed !== example.id && (
              <p className="text-gray-500 text-sm">Click to reveal aim →</p>
            )}
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6">
        <h3 className="text-pink-400 font-bold uppercase tracking-wider text-sm mb-4 flex items-center gap-2">
          <Zap size={16} />
          Key Points
        </h3>
        <ul className="grid grid-cols-2 gap-3">
          {content.tips.map((tip, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-300">
              <CheckCircle size={20} className="text-pink-400 flex-shrink-0 mt-0.5" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// Evaluation - Strengths and Limitations
const EvaluationSlide: React.FC<{ level: 'gcse' | 'aslevel' }> = ({ level }) => {
  const [selectedPoint, setSelectedPoint] = useState<string | null>(null)

  const evaluationPoints = level === 'gcse' ? [
    {
      id: 'strength1',
      type: 'strength',
      title: 'Clear Direction',
      description: 'Good hypotheses provide a clear direction for research and tell us exactly what to look for.',
      example: 'This makes planning experiments easier and helps other researchers replicate the study.'
    },
    {
      id: 'strength2',
      type: 'strength',
      title: 'Testable',
      description: 'Hypotheses can be tested through experiments, making science objective and evidence-based.',
      example: 'We can collect data and use statistics to support or reject our predictions.'
    },
    {
      id: 'limitation1',
      type: 'limitation',
      title: 'Too Specific',
      description: 'Sometimes hypotheses are so specific that they miss important unexpected findings.',
      example: 'If we only look for what we predicted, we might ignore surprising results that could be important.'
    },
    {
      id: 'limitation2',
      type: 'limitation',
      title: 'Researcher Bias',
      description: 'Researchers might want their hypothesis to be supported, which can affect how they design or interpret studies.',
      example: 'This is why peer review and replication are important in science.'
    }
  ] : [
    {
      id: 'strength1',
      type: 'strength',
      title: 'Facilitates Falsification',
      description: 'Well-formulated hypotheses enable Popperian falsification - the cornerstone of scientific methodology.',
      example: 'The ability to reject H₀ based on empirical evidence strengthens the epistemological foundations of psychological science.'
    },
    {
      id: 'strength2',
      type: 'strength',
      title: 'Operationalisation Enhances Replicability',
      description: 'Precise operationalisation of variables in hypotheses enables systematic replication, addressing the replication crisis.',
      example: 'Studies like the Open Science Collaboration (2015) demonstrate how clear hypotheses improve reproducibility.'
    },
    {
      id: 'limitation1',
      type: 'limitation',
      title: 'Confirmation Bias',
      description: 'The HARKing problem (Hypothesising After Results are Known) undermines the integrity of hypothesis testing.',
      example: 'Kerr (1998) identified how post-hoc hypothesis construction inflates Type I error rates and threatens validity.'
    },
    {
      id: 'limitation2',
      type: 'limitation',
      title: 'Null Hypothesis Testing Limitations',
      description: 'NHST has been criticized for binary thinking and p-value misinterpretation (Cumming, 2014).',
      example: 'Alternative approaches like Bayesian inference and estimation statistics provide richer inferential frameworks.'
    }
  ]

  return (
    <div className="flex flex-col h-full p-8 animate-fadeIn">
      <h2 className="text-5xl font-black text-white mb-8">Evaluation: Aims & Hypotheses</h2>
      
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-3xl font-bold text-green-400 mb-6 flex items-center gap-3">
            <CheckCircle size={32} />
            Strengths
          </h3>
          <div className="space-y-4">
            {evaluationPoints.filter(p => p.type === 'strength').map((point) => (
              <div
                key={point.id}
                onClick={() => setSelectedPoint(selectedPoint === point.id ? null : point.id)}
                className={`cursor-pointer border-2 rounded-xl p-6 transition-all ${
                  selectedPoint === point.id
                    ? 'border-green-500 bg-green-900/20 shadow-lg shadow-green-500/30'
                    : 'border-green-700 bg-green-900/10 hover:border-green-500/70'
                }`}
              >
                <h4 className="text-xl font-bold text-green-300 mb-3">{point.title}</h4>
                <p className="text-gray-300 mb-3">{point.description}</p>
                {selectedPoint === point.id && (
                  <div className="bg-green-950/50 rounded-lg p-4 border-l-4 border-green-500 animate-fadeIn">
                    <p className="text-green-200 italic text-sm">{point.example}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-red-400 mb-6 flex items-center gap-3">
            <AlertTriangle size={32} />
            Limitations
          </h3>
          <div className="space-y-4">
            {evaluationPoints.filter(p => p.type === 'limitation').map((point) => (
              <div
                key={point.id}
                onClick={() => setSelectedPoint(selectedPoint === point.id ? null : point.id)}
                className={`cursor-pointer border-2 rounded-xl p-6 transition-all ${
                  selectedPoint === point.id
                    ? 'border-red-500 bg-red-900/20 shadow-lg shadow-red-500/30'
                    : 'border-red-700 bg-red-900/10 hover:border-red-500/70'
                }`}
              >
                <h4 className="text-xl font-bold text-red-300 mb-3">{point.title}</h4>
                <p className="text-gray-300 mb-3">{point.description}</p>
                {selectedPoint === point.id && (
                  <div className="bg-red-950/50 rounded-lg p-4 border-l-4 border-red-500 animate-fadeIn">
                    <p className="text-red-200 italic text-sm">{point.example}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Hypothesis Writing Task - Final Assessment Component
const HypothesisWritingTask: React.FC<{ level: 'gcse' | 'aslevel' }> = ({ level }) => {
  const [aimText, setAimText] = useState('')
  const [hypothesisText, setHypothesisText] = useState('')
  const [feedbackShown, setFeedbackShown] = useState(false)
  const [selectedType, setSelectedType] = useState<'directional' | 'null' | null>(null)

  const scenario = level === 'gcse' 
    ? 'A psychologist believes that students who take a 10-minute break perform better on memory tests than students who don\'t take a break.'
    : 'A researcher hypothesises that acute sleep deprivation (4 hours) negatively impacts performance on a working memory task compared to normal sleep (8 hours).'

  const isAimValid = aimText.trim().length > 20
  const isHypothesisValid = hypothesisText.trim().length > 20 && selectedType !== null
  const allComplete = isAimValid && isHypothesisValid

  return (
    <div className="flex flex-col h-full p-8 animate-fadeIn">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-5xl font-black text-white mb-4 flex items-center gap-3">
          <FlaskConical className="text-cyan-500" size={48} />
          Write Your Own Hypothesis
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mb-6">
          Apply everything you've learned to write an aim and hypothesis for this scenario. This is your final assessment!
        </p>
      </div>

      {/* Scenario Box */}
      <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/20 border-2 border-cyan-500/50 rounded-2xl p-8 mb-8">
        <h3 className="text-2xl font-bold text-cyan-300 mb-4">📋 Research Scenario</h3>
        <p className="text-xl text-gray-200 leading-relaxed italic">
          {scenario}
        </p>
      </div>

      {/* Two Column Writing Area */}
      <div className="flex-grow grid grid-cols-2 gap-8 overflow-hidden">
        {/* Left Column - Aim */}
        <div className="flex flex-col">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-pink-400 mb-2 flex items-center gap-2">
              <Target size={24} />
              Step 1: Write the AIM
            </h3>
            <p className="text-sm text-gray-400">
              {level === 'gcse'
                ? 'A general statement of what the study will investigate.'
                : 'A broad statement of intent outlining the research focus without making specific outcome predictions.'}
            </p>
          </div>
          <textarea
            value={aimText}
            onChange={(e) => setAimText(e.target.value)}
            placeholder={level === 'gcse' 
              ? 'To investigate whether...'
              : 'To examine the relationship between...'}
            className="flex-grow bg-gray-800/50 border-2 border-pink-500/30 hover:border-pink-500/50 focus:border-pink-500 rounded-xl p-6 text-gray-100 placeholder-gray-500 focus:outline-none resize-none transition-all"
          />
          {isAimValid && (
            <div className="mt-3 flex items-center gap-2 text-green-400">
              <CheckCircle size={20} />
              <span className="text-sm font-semibold">Aim is ready!</span>
            </div>
          )}
          {aimText.length > 0 && !isAimValid && (
            <div className="mt-3 text-yellow-400 text-sm">
              Aim is too short - aim for 20+ characters
            </div>
          )}
        </div>

        {/* Right Column - Hypothesis */}
        <div className="flex flex-col">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-purple-400 mb-2 flex items-center gap-2">
              <Beaker size={24} />
              Step 2: Write the HYPOTHESIS
            </h3>
            <p className="text-sm text-gray-400">
              {level === 'gcse'
                ? 'A specific, testable prediction that includes variables.'
                : 'A falsifiable prediction derived from theory, operationally defined and amenable to statistical testing.'}
            </p>
          </div>

          {/* Type Selector */}
          <div className="mb-4 grid grid-cols-2 gap-2">
            <button
              onClick={() => setSelectedType('directional')}
              className={`p-3 rounded-lg border-2 text-sm font-bold transition-all ${
                selectedType === 'directional'
                  ? 'border-pink-500 bg-pink-600 text-white'
                  : 'border-gray-600 bg-gray-800 text-gray-400 hover:border-pink-500/50'
              }`}
            >
              Directional (One-Tailed)
            </button>
            <button
              onClick={() => setSelectedType('null')}
              className={`p-3 rounded-lg border-2 text-sm font-bold transition-all ${
                selectedType === 'null'
                  ? 'border-red-500 bg-red-600 text-white'
                  : 'border-gray-600 bg-gray-800 text-gray-400 hover:border-red-500/50'
              }`}
            >
              Non-Directional (Two-Tailed)
            </button>
          </div>

          <textarea
            value={hypothesisText}
            onChange={(e) => setHypothesisText(e.target.value)}
            placeholder={selectedType === 'directional'
              ? 'Students who... will... compared to...'
              : 'There will be a difference between...'}
            className="flex-grow bg-gray-800/50 border-2 border-purple-500/30 hover:border-purple-500/50 focus:border-purple-500 rounded-xl p-6 text-gray-100 placeholder-gray-500 focus:outline-none resize-none transition-all"
          />
          {isHypothesisValid && (
            <div className="mt-3 flex items-center gap-2 text-green-400">
              <CheckCircle size={20} />
              <span className="text-sm font-semibold">Hypothesis is ready!</span>
            </div>
          )}
          {hypothesisText.length > 0 && !isHypothesisValid && (
            <div className="mt-3 text-yellow-400 text-sm">
              {!selectedType ? 'Select a hypothesis type above' : 'Hypothesis is too short - aim for 20+ characters'}
            </div>
          )}
        </div>
      </div>

      {/* Footer - Submit Button */}
      <div className="mt-8 pt-6 border-t border-gray-700">
        {!feedbackShown ? (
          <button
            onClick={() => setFeedbackShown(true)}
            disabled={!allComplete}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
              allComplete
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg'
                : 'bg-gray-800 text-gray-500 cursor-not-allowed opacity-50'
            }`}
          >
            Review My Work
          </button>
        ) : (
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/30 border-2 border-green-500/50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle className="text-green-400" size={40} />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-green-300">Excellent Work!</h3>
                  <p className="text-green-200 text-lg">You've successfully completed the lesson</p>
                </div>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-6 mb-6 space-y-4">
                <div>
                  <h4 className="text-sm uppercase text-green-400 font-bold mb-2">Your Aim</h4>
                  <p className="text-gray-200 italic text-lg">{aimText}</p>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="text-sm uppercase text-purple-400 font-bold mb-2">Your Hypothesis</h4>
                  <p className="text-gray-200 italic text-lg">{hypothesisText}</p>
                  <p className="text-sm text-gray-400 mt-2 flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      selectedType === 'directional'
                        ? 'bg-pink-500/20 text-pink-300'
                        : 'bg-blue-500/20 text-blue-300'
                    }`}>
                      {selectedType === 'directional' ? 'One-Tailed' : 'Two-Tailed'}
                    </span>
                  </p>
                </div>
              </div>

              <div className="bg-blue-950/50 border-l-4 border-blue-500 rounded-lg p-6">
                <h4 className="text-blue-300 font-bold mb-3 flex items-center gap-2">
                  <Lightbulb size={20} />
                  Feedback on your work:
                </h4>
                <ul className="space-y-3 text-blue-200 text-sm">
                  <li>✓ Your aim is clear and identifies the research focus</li>
                  <li>✓ Your hypothesis is specific and testable with operationalised variables</li>
                  <li>✓ You've correctly chosen the {selectedType === 'directional' ? 'directional' : 'non-directional'} format</li>
                  <li>✓ Your wording suggests a clear understanding of the concepts</li>
                </ul>
              </div>
            </div>

            {level === 'aslevel' && (
              <div className="bg-purple-950/30 border border-purple-500/30 rounded-xl p-6">
                <h4 className="text-purple-300 font-bold mb-3">AS Level Enhancement</h4>
                <p className="text-purple-200 text-sm mb-3">
                  Consider how you could strengthen this using the hypothetico-deductive framework:
                </p>
                <ul className="space-y-2 text-sm text-purple-200">
                  <li>• Could you also state the null hypothesis (H₀) explicitly?</li>
                  <li>• What statistical test would you use to analyse the data?</li>
                  <li>• What would be your significance level (α)?</li>
                  <li>• How would you measure effect size?</li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// Hypothesis Machine - interactive slot-style simulation
const HypothesisMachine: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const scenarios = [
    {
      title: 'Watching Television Before Bed',
      scenario: 'Does watching television before bed change how well people sleep?',
      nullText: 'Watching television before bed has no impact on how well you sleep.',
      altText: 'Watching scary movies before bed affects how fast you fall asleep.'
    },
    {
      title: 'Music & Learning',
      scenario: 'Does music while revising change how many words students remember?',
      nullText: 'Listening to music while revising has no effect on how many words are remembered.',
      altText: 'Students who revise with music will remember fewer words than students who revise in silence.'
    },
    {
      title: 'Caffeine & Reaction Time',
      scenario: 'Does drinking coffee before a reaction time test change performance?',
      nullText: 'Drinking coffee before a reaction time test has no effect on scores.',
      altText: 'Participants who drink coffee will react faster than those who do not drink coffee.'
    },
    {
      title: 'Background Noise & Reading',
      scenario: 'Does background noise affect reading comprehension?',
      nullText: 'Background noise has no effect on reading comprehension scores.',
      altText: 'Loud background noise reduces reading comprehension scores compared to quiet.'
    },
    {
      title: 'Breakfast & Concentration',
      scenario: 'Does eating breakfast improve concentration?',
      nullText: 'Eating breakfast has no effect on concentration test performance.',
      altText: 'Students who eat breakfast concentrate better than those who skip breakfast.'
    },
    {
      title: 'Screen Time & Sleep',
      scenario: 'Does using a phone before bed change sleep quality?',
      nullText: 'Using a phone before bed has no impact on sleep quality.',
      altText: 'Screen use before bed increases time to fall asleep.'
    },
    {
      title: 'Exercise & Memory',
      scenario: 'Does light exercise before study improve memory?',
      nullText: 'Light exercise before study has no effect on recall.',
      altText: 'Students who exercise recall more words than those who rest.'
    },
    {
      title: 'Room Temperature & Productivity',
      scenario: 'Does room temperature affect productivity?',
      nullText: 'Room temperature has no effect on task completion speed.',
      altText: 'Working in cooler rooms speeds up task completion compared to warmer rooms.'
    },
    {
      title: 'Music Type & Math Accuracy',
      scenario: 'Does the type of music affect maths accuracy?',
      nullText: 'Type of music has no effect on maths accuracy.',
      altText: 'Lyrical music reduces maths accuracy compared to instrumental music.'
    },
    {
      title: 'Lighting & Mood',
      scenario: 'Does brighter lighting improve mood?',
      nullText: 'Lighting level has no effect on reported mood.',
      altText: 'Brighter lighting increases positive mood ratings.'
    },
    {
      title: 'Study Time & Test Score',
      scenario: 'Does study duration change test scores?',
      nullText: 'Study duration has no effect on test scores.',
      altText: 'Students who study for 60 minutes score higher than those who study for 20 minutes.'
    },
    {
      title: 'Class Size & Participation',
      scenario: 'Does class size affect participation?',
      nullText: 'Class size has no effect on the number of times a student speaks.',
      altText: 'Smaller classes increase participation compared to larger classes.'
    },
    {
      title: 'Multitasking & Errors',
      scenario: 'Does multitasking increase errors?',
      nullText: 'Doing two tasks at once has no effect on error rate.',
      altText: 'Multitasking increases errors compared to single-tasking.'
    },
    {
      title: 'Social Media Break & Stress',
      scenario: 'Do social media breaks change stress levels?',
      nullText: 'A short social media break has no effect on stress ratings.',
      altText: 'Social media breaks increase stress compared to quiet breaks.'
    },
    {
      title: 'Background Colour & Memory',
      scenario: 'Does slide background colour affect memory?',
      nullText: 'Background colour of slides has no effect on recall.',
      altText: 'High-contrast slide backgrounds improve recall compared to low-contrast backgrounds.'
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [isSpinning, setIsSpinning] = useState(false)
  const [showResults, setShowResults] = useState(true) // Start true so first load shows something
  const [revealNull, setRevealNull] = useState(false)
  const [revealAlt, setRevealAlt] = useState(false)

  const startSpin = () => {
    if (isSpinning) return
    setIsSpinning(true)
    setShowResults(false)
    setRevealNull(false)
    setRevealAlt(false)

    const duration = 2000 // 2 seconds spin
    const startTime = Date.now()

    const interval = setInterval(() => {
      // Pick random scenario during spin for chaotic effect
      setActiveIndex(Math.floor(Math.random() * scenarios.length))

      if (Date.now() - startTime >= duration) {
        clearInterval(interval)
        // Land on a random final scenario
        const final = Math.floor(Math.random() * scenarios.length)
        setActiveIndex(final)
        setIsSpinning(false)
        setShowResults(true)
      }
    }, 80) // Fast updates
  }

  const current = scenarios[activeIndex]

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-8'}`}>
      {/* Machine Frame */}
      <div className={`bg-gray-800 border-4 border-gray-600 rounded-2xl shadow-2xl relative overflow-hidden group ${isPresenting ? 'p-6 flex-grow flex flex-col' : 'p-8'}`}>
        {/* Glossy overlay effect */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none rounded-t-xl"></div>
        
        {/* Header Section - Compact */}
        <div className={`flex items-center justify-between relative z-10 ${isPresenting ? 'mb-4' : 'mb-10'}`}>
          <div className="flex items-center gap-2">
            <div className={`bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg shadow-lg border border-pink-400/30 ${isPresenting ? 'p-3' : 'p-4'}`}>
              <Projector className="text-white" size={32} />
            </div>
            <div>
              <h2 className={`font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 uppercase tracking-widest ${isPresenting ? 'text-3xl leading-tight' : 'text-3xl'}`}>
                Hypothesis Gen
              </h2>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                <p className={`text-gray-400 font-mono uppercase ${isPresenting ? 'text-xs' : 'text-xs'}`}>Online</p>
              </div>
            </div>
          </div>
          {/* Button - Compact */}
          <button
            onClick={startSpin}
            disabled={isSpinning}
            className={`
              relative font-black uppercase tracking-widest transition-all transform rounded-lg
              ${isPresenting ? 'px-6 py-3 text-sm' : 'px-10 py-5 text-xl'}
              ${isSpinning 
                ? 'bg-gray-700 text-gray-500 translate-y-1 shadow-inner cursor-wait border-b-0' 
                : 'bg-red-600 hover:bg-red-500 text-white shadow-[0_4px_0_rgb(153,27,27)] hover:shadow-[0_2px_0_rgb(153,27,27)] active:shadow-none active:translate-y-1 border-b-2 border-red-800'
              }
            `}
          >
            <span className="flex items-center gap-2 relative z-10 filter drop-shadow-md">
              {isSpinning ? <Brain className="animate-spin" size={isPresenting ? 16 : 24} /> : <Zap className="fill-current" size={isPresenting ? 16 : 24} />}
              {isSpinning ? 'GEN...' : 'GEN'}
            </span>
          </button>
        </div>

        {/* The Screen / Slot Window */}
        <div className={`bg-black rounded-lg border-y-4 border-x-2 border-gray-700 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] relative overflow-hidden flex-grow flex flex-col justify-center ${isPresenting ? 'p-6 mb-4' : 'p-8 mb-10'}`}>
          {/* Scanline effect */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 pointer-events-none bg-[length:100%_4px,3px_100%]"></div>
          
          <div className="text-center flex flex-col items-center justify-center relative z-20">
            <h3 className={`text-gray-500 font-mono uppercase tracking-[0.2em] mb-3 ${isPresenting ? 'text-xs' : 'text-xs'}`}>Scenario</h3>
            <p className={`font-black font-mono leading-tight transition-all duration-75 ${isPresenting ? 'text-3xl' : 'text-2xl md:text-4xl'} text-green-400 ${
              isSpinning ? 'blur-[2px] opacity-70 scale-95' : 'blur-0 opacity-100 scale-100 text-shadow-glow'
            }`}>
              {current.scenario}
            </p>
          </div>
        </div>

        {/* Results Output Slots - Sliding Panels */}
        <div className={`grid grid-cols-2 relative z-10 ${isPresenting ? 'gap-12' : 'gap-8'}`}>
          {/* Null Slot */}
          <div
            onClick={() => showResults && !isSpinning && setRevealNull(true)}
            className={`
              border-2 border-blue-500/30 bg-gray-900/80 rounded-2xl relative transition-all duration-700 transform cursor-pointer
              ${isPresenting ? 'p-8' : 'p-6'}
              ${showResults ? 'opacity-100 translate-y-0 scale-100' : 'opacity-50 translate-y-4 scale-95 grayscale'}
              ${!showResults || isSpinning ? 'pointer-events-none' : 'hover:border-blue-400/60'}
            `}
          >
            <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 rounded-full font-bold uppercase tracking-wider shadow-lg border-2 border-gray-800 ${isPresenting ? 'py-2 text-lg' : 'py-1 text-xs'}`}>
              Null Hypothesis (H₀)
            </div>
            {showResults && revealNull ? (
              <p className={`text-blue-100 font-medium text-center mt-2 leading-relaxed font-mono ${isPresenting ? 'text-2xl' : 'text-lg'}`}>
                {`"${current.nullText}"`}
              </p>
            ) : (
              <div className={`flex flex-col items-center justify-center text-blue-200/70 mt-2 ${isPresenting ? 'py-10' : 'py-6'}`}>
                <Eye className={`mb-2 opacity-70 ${isPresenting ? 'w-16 h-16' : ''}`} />
                <span className={`${isPresenting ? 'text-2xl' : 'text-sm'} font-semibold`}>Click to reveal H₀</span>
              </div>
            )}
          </div>

          {/* Alt Slot */}
          <div
            onClick={() => showResults && !isSpinning && setRevealAlt(true)}
            className={`
              border-2 border-pink-500/30 bg-gray-900/80 rounded-2xl relative transition-all duration-700 delay-150 transform cursor-pointer
              ${isPresenting ? 'p-8' : 'p-6'}
              ${showResults ? 'opacity-100 translate-y-0 scale-100' : 'opacity-50 translate-y-4 scale-95 grayscale'}
              ${!showResults || isSpinning ? 'pointer-events-none' : 'hover:border-pink-400/60'}
            `}
          >
            <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-pink-600 text-white px-4 rounded-full font-bold uppercase tracking-wider shadow-lg border-2 border-gray-800 ${isPresenting ? 'py-2 text-lg' : 'py-1 text-xs'}`}>
              Alternative Hypothesis (H₁)
            </div>
            {showResults && revealAlt ? (
              <p className={`text-pink-100 font-medium text-center mt-2 leading-relaxed font-mono ${isPresenting ? 'text-2xl' : 'text-lg'}`}>
                {`"${current.altText}"`}
              </p>
            ) : (
              <div className={`flex flex-col items-center justify-center text-pink-200/70 mt-2 ${isPresenting ? 'py-10' : 'py-6'}`}>
                <Eye className={`mb-2 opacity-70 ${isPresenting ? 'w-16 h-16' : ''}`} />
                <span className={`font-semibold ${isPresenting ? 'text-2xl' : 'text-sm'}`}>Click to reveal H₁</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Decorative Industrial Screws */}
        <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-gray-700 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5),1px_1px_0_rgba(255,255,255,0.1)]"></div>
        <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-gray-700 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5),1px_1px_0_rgba(255,255,255,0.1)]"></div>
        <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-gray-700 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5),1px_1px_0_rgba(255,255,255,0.1)]"></div>
        <div className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-gray-700 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5),1px_1px_0_rgba(255,255,255,0.1)]"></div>
      </div>
    </div>
  )
}

// Null vs Alternative classifier - AFL
const HypothesisStatementCheck: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const statements = [
    { id: 1, text: 'Music has no effect on learning.', correct: 'null' as const },
    { id: 2, text: 'Students who revise with music will remember fewer words than those in silence.', correct: 'alternative' as const },
    { id: 3, text: 'Watching TV before bed has no impact on sleep quality.', correct: 'null' as const },
    { id: 4, text: 'Caffeine before a test will change reaction times.', correct: 'alternative' as const },
  ]

  const [answers, setAnswers] = useState<Record<number, 'null' | 'alternative' | undefined>>({})
  const [showResults, setShowResults] = useState(false)
  const [revealed, setRevealed] = useState<Record<number, boolean>>({})

  const score = statements.reduce((acc, s) => acc + (answers[s.id] === s.correct ? 1 : 0), 0)

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-8'}`}>
      <div className="mb-4">
        <h2 className={`${isPresenting ? 'text-3xl' : 'text-4xl'} font-black text-white mb-1`}>Thumbs Up/Down: Null or Alternative?</h2>
        <p className={`${isPresenting ? 'text-sm' : ''} text-gray-400`}>Classify each statement as H₀ (no effect) or H₁ (effect).</p>
      </div>

      <div className={`grid grid-cols-2 flex-grow overflow-auto custom-scrollbar ${isPresenting ? 'gap-3' : 'gap-4'}`}>
        {statements.map((s) => (
          <div key={s.id} className={`bg-gray-900/70 border border-gray-700 rounded-lg flex flex-col ${isPresenting ? 'p-4 gap-3' : 'p-5 gap-4'}`}>
            <div className="flex items-center justify-between">
              <span className={`${isPresenting ? 'text-sm' : 'text-sm'} text-pink-400 font-bold`}>Statement {s.id}</span>
              {(showResults || (isPresenting && revealed[s.id])) && (
                <span className={`${isPresenting ? 'text-xs px-2 py-1' : 'text-xs px-3 py-1'} font-bold rounded-full ${
                  s.correct === 'null' ? 'bg-blue-500/20 text-blue-300' : 'bg-pink-500/20 text-pink-300'
                }`}>
                  {s.correct === 'null' ? 'Null' : 'Alternative'}
                </span>
              )}
            </div>
            <p className={`text-gray-200 leading-relaxed ${isPresenting ? 'text-sm' : ''}`}>{s.text}</p>

            {!isPresenting && (
              <div className="flex gap-3">
                <button
                  onClick={() => !showResults && setAnswers(prev => ({ ...prev, [s.id]: 'null' }))}
                  className={`flex-1 rounded-lg border font-bold transition-all ${isPresenting ? 'px-3 py-2 text-xs' : 'px-4 py-3'} ${
                    answers[s.id] === 'null'
                      ? 'border-blue-500 bg-blue-900/30 text-blue-200'
                      : 'border-gray-700 bg-gray-800 text-gray-300 hover:border-blue-500/50'
                  }`}
                >
                  Null (H₀)
                </button>
                <button
                  onClick={() => !showResults && setAnswers(prev => ({ ...prev, [s.id]: 'alternative' }))}
                  className={`flex-1 rounded-lg border font-bold transition-all ${isPresenting ? 'px-3 py-2 text-xs' : 'px-4 py-3'} ${
                    answers[s.id] === 'alternative'
                      ? 'border-pink-500 bg-pink-900/30 text-pink-200'
                      : 'border-gray-700 bg-gray-800 text-gray-300 hover:border-pink-500/50'
                  }`}
                >
                  Alternative (H₁)
                </button>
              </div>
            )}

            {isPresenting && !revealed[s.id] && !showResults && (
              <button
                onClick={() => setRevealed(prev => ({ ...prev, [s.id]: true }))}
                className={`self-start rounded-lg border border-gray-700 text-gray-300 hover:border-pink-500/50 transition-all ${isPresenting ? 'px-3 py-1 text-xs' : 'px-4 py-2 text-sm'}`}
              >
                Reveal answer
              </button>
            )}
          </div>
        ))}
      </div>

      {!isPresenting && (
        <div className="mt-6 flex items-center gap-4">
          {!showResults ? (
            <button
              onClick={() => setShowResults(true)}
              disabled={Object.keys(answers).length < statements.length}
              className="px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white disabled:opacity-50 disabled:grayscale"
            >
              Check My Classifications
            </button>
          ) : (
            <div className="px-4 py-3 rounded-xl bg-green-900/30 border border-green-500/40 text-green-200 font-mono">
              Score: {score} / {statements.length}
            </div>
          )}
        </div>
      )}

      {isPresenting && (
        <div className="mt-4 flex items-center gap-2">
          <button
            onClick={() => setRevealed(Object.fromEntries(statements.map(s => [s.id, true])))}
            className="px-4 py-2 rounded-lg text-sm font-bold bg-pink-600 hover:bg-pink-500 text-white"
          >
            Reveal All
          </button>
          <button
            onClick={() => setRevealed({})}
            className="px-4 py-2 rounded-lg text-sm font-bold bg-gray-800 hover:bg-gray-700 text-gray-200"
          >
            Hide All
          </button>
        </div>
      )}
    </div>
  )
}

// Hypothesis writing for GCSE scenario (music & learning)
const HypothesisWriterGCSE: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1)

  const templates = {
    null: 'There will be no difference in _____ between _____ and _____.',
    alt_dir: 'Students who _____ will score higher/lower on _____ than students who _____.',
    alt_nd: 'There will be a difference in _____ between _____ and _____.'
  }

  const Header = () => (
    <div className="mb-4">
      <h2 className={`${isPresenting ? 'text-2xl' : 'text-5xl'} font-black text-white mb-1`}>Independent Task: Hypothesis Writer</h2>
      <p className={`${isPresenting ? 'text-xs' : ''} text-gray-400`}>Scenario: "Does music affect people's ability to learn?"</p>
      <div className={`mt-2 grid grid-cols-3 ${isPresenting ? 'gap-3' : 'gap-3'}`}>
        {[1,2,3].map((i) => (
          <div key={i} className={`h-1 rounded-full ${step >= i ? 'bg-gradient-to-r from-pink-500 to-purple-500' : 'bg-gray-700'}`} />
        ))}
      </div>
      <div className="mt-1 grid grid-cols-3 text-xs text-gray-400 font-semibold">
        <span className="text-xs">1: Plan</span>
        <span className="text-center text-xs">2: H₀</span>
        <span className="text-right text-xs">3: H₁</span>
      </div>
    </div>
  )

  const ActionBar = () => (
    <div className={`mt-3 flex items-center justify-between ${isPresenting ? 'text-xs' : ''}`}>
      <button
        onClick={() => setStep((prev) => (prev > 1 ? (prev - 1) as 1 | 2 | 3 : prev))}
        className={`rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 font-bold ${isPresenting ? 'px-3 py-2' : 'px-6 py-3'}`}
        disabled={step === 1}
      >
        Back
      </button>
      {step < 3 ? (
        <button
          onClick={() => setStep((prev) => (prev + 1) as 1 | 2 | 3)}
          className={`rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold shadow-lg ${isPresenting ? 'px-4 py-2' : 'px-8 py-3'}`}
        >
          Next
        </button>
      ) : (
        <button
          className={`rounded-lg font-bold shadow-lg ${isPresenting ? 'px-4 py-2' : 'px-8 py-3'} bg-green-600 text-white hover:bg-green-500`}
        >
          Ready ✓
        </button>
      )}
    </div>
  )

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-4' : 'p-10'}`}>
      <Header />

      {step === 1 && (
        <div className={`grid grid-cols-3 flex-grow ${isPresenting ? 'gap-3' : 'gap-6'}`}>
          <div className={`rounded-lg border bg-gray-900/60 border-gray-700 ${isPresenting ? 'p-3' : 'p-6'}`}>
            <h3 className={`${isPresenting ? 'text-xs' : 'text-xl'} font-bold text-blue-300 mb-2`}>Identify Variables</h3>
            <ul className={`text-gray-200 ${isPresenting ? 'text-xs' : 'text-sm'} space-y-1`}>
              <li>IV: Music while revising (present vs silence)</li>
              <li>DV: Memory test score / words remembered</li>
              <li>Control: prior knowledge, intelligence, sleep</li>
            </ul>
          </div>
          <div className={`rounded-lg border bg-gray-900/60 border-gray-700 ${isPresenting ? 'p-3' : 'p-6'}`}>
            <h3 className={`${isPresenting ? 'text-xs' : 'text-xl'} font-bold text-pink-300 mb-2`}>Choose Format</h3>
            <div className={`grid grid-cols-1 ${isPresenting ? 'gap-2' : 'gap-2'}`}>
              <button className={`rounded-lg border border-pink-500/40 text-pink-200 hover:bg-pink-900/20 text-left ${isPresenting ? 'px-2 py-1 text-xs' : 'px-4 py-3'}`}>
                Directional (One-Tailed)
                <div className={`${isPresenting ? 'text-xs' : 'text-xs'} text-pink-300 opacity-80`}>Predicts higher/lower</div>
              </button>
              <button className={`rounded-lg border border-blue-500/40 text-blue-200 hover:bg-blue-900/20 text-left ${isPresenting ? 'px-2 py-1 text-xs' : 'px-4 py-3'}`}>
                Non-Directional (Two-Tailed)
                <div className={`${isPresenting ? 'text-xs' : 'text-xs'} text-blue-300 opacity-80`}>Predicts a difference</div>
              </button>
            </div>
          </div>
          <div className={`rounded-lg border bg-gray-900/60 border-gray-700 ${isPresenting ? 'p-3' : 'p-6'}`}>
            <h3 className={`${isPresenting ? 'text-xs' : 'text-xl'} font-bold text-emerald-300 mb-2`}>Templates</h3>
            <div className={`space-y-1 ${isPresenting ? 'text-xs' : 'text-sm'}`}>
              <div className="bg-blue-950/30 border border-blue-500/30 rounded p-2 text-blue-200 text-xs">{templates.null}</div>
              <div className="bg-pink-950/30 border border-pink-500/30 rounded p-2 text-pink-200 text-xs">{templates.alt_dir}</div>
              <div className="bg-purple-950/30 border border-purple-500/30 rounded p-2 text-purple-200 text-xs">{templates.alt_nd}</div>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className={`grid grid-cols-2 flex-grow ${isPresenting ? 'gap-3' : 'gap-6'}`}> 
          <div className={`rounded-lg border bg-gray-900/60 border-gray-700 flex flex-col ${isPresenting ? 'p-3' : 'p-6'}`}>
            <h3 className={`${isPresenting ? 'text-xs' : 'text-2xl'} font-bold text-blue-300 mb-2`}>Write H₀ (Null)</h3>
            <div className="flex flex-wrap gap-1 mb-2">
              {['no difference', 'no effect', 'chance'].map((chip) => (
                <span key={chip} className={`${isPresenting ? 'px-2 py-1 text-xs' : 'px-3 py-1 text-xs'} rounded-full bg-blue-900/40 text-blue-200 border border-blue-500/30`}>{chip}</span>
              ))}
            </div>
            <div className="text-gray-300 text-sm leading-relaxed flex-grow flex items-center justify-center">
              <p className="text-center p-4 bg-blue-900/20 border border-blue-500/20 rounded-lg">There will be <span className="font-semibold text-blue-200">no difference</span> in test scores between students who revise with music and those who revise in silence.</p>
            </div>
          </div>
          <div className={`rounded-lg border bg-blue-950/20 border-blue-500/30 ${isPresenting ? 'p-3' : 'p-6'}`}>
            <h4 className={`${isPresenting ? 'text-xs' : ''} text-blue-300 font-bold mb-2`}>Preview</h4>
            <p className={`${isPresenting ? 'text-xs' : 'text-lg'} text-gray-100 font-mono leading-tight min-h-[100px]`}>A well-formed null hypothesis states that any observed difference is due to chance alone, not to your independent variable.</p>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className={`grid grid-cols-2 flex-grow ${isPresenting ? 'gap-3' : 'gap-6'}`}>
          <div className={`rounded-lg border bg-gray-900/60 border-gray-700 flex flex-col ${isPresenting ? 'p-3' : 'p-6'}`}>
            <h3 className={`${isPresenting ? 'text-xs' : 'text-2xl'} font-bold text-pink-300 mb-2`}>Write H₁ (Alternative)</h3>
            <div className="flex flex-wrap gap-1 mb-2">
              {['higher', 'lower', 'difference'].map((chip) => (
                <span key={chip} className={`${isPresenting ? 'px-2 py-1 text-xs' : 'px-3 py-1 text-xs'} rounded-full bg-pink-900/40 text-pink-200 border border-pink-500/30`}>{chip}</span>
              ))}
            </div>
            <div className="text-gray-300 text-sm leading-relaxed flex-grow flex items-center justify-center">
              <p className="text-center p-4 bg-pink-900/20 border border-pink-500/20 rounded-lg">Students who revise <span className="font-semibold text-pink-200">with music</span> will score <span className="font-semibold text-pink-200">lower</span> on the test compared to students who revise in silence.</p>
            </div>
          </div>
          <div className={`rounded-lg border bg-pink-950/20 border-pink-500/30 ${isPresenting ? 'p-3' : 'p-6'}`}>
            <h4 className={`${isPresenting ? 'text-xs' : ''} text-pink-300 font-bold mb-2`}>✓ Checklist</h4>
            <ul className={`text-gray-200 ${isPresenting ? 'text-xs' : 'text-sm'} space-y-1`}>
              <li>✓ Names the IV (music vs silence)</li>
              <li>✓ Names the DV (words remembered / test score)</li>
              <li>✓ Predicts effect clearly</li>
              <li>✓ Is testable and measurable</li>
            </ul>
          </div>
        </div>
      )}

      <ActionBar />
    </div>
  )
}

// ============= INTERACTIVE UI COMPONENTS FOR TEACHER SLIDES =============

// FlipCard - Click to reveal content on the back
const FlipCard: React.FC<{
  front: React.ReactNode
  back: React.ReactNode
  frontColor?: string
  backColor?: string
  isPresenting?: boolean
  className?: string
}> = ({ front, back, frontColor = 'from-blue-600 to-purple-600', backColor = 'from-purple-600 to-pink-600', isPresenting = false, className = '' }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div 
      className={`cursor-pointer ${className}`}
      style={{ perspective: '1000px' }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className="relative w-full h-full transition-transform duration-500"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front */}
        <div 
          className={`absolute inset-0 rounded-xl bg-gradient-to-br ${frontColor} ${isPresenting ? 'p-4' : 'p-6'} flex flex-col items-center justify-center text-center shadow-lg`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          {front}
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-white/60 mt-2`}>Click to flip →</p>
        </div>
        {/* Back */}
        <div 
          className={`absolute inset-0 rounded-xl bg-gradient-to-br ${backColor} ${isPresenting ? 'p-4' : 'p-6'} flex flex-col items-center justify-center text-center shadow-lg`}
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          {back}
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-white/60 mt-2`}>← Click to flip back</p>
        </div>
      </div>
    </div>
  )
}

// AnimatedToggle - Switch between two states with animation
const AnimatedToggle: React.FC<{
  labelLeft: string
  labelRight: string
  isOn: boolean
  onToggle: () => void
  colorOff?: string
  colorOn?: string
  isPresenting?: boolean
}> = ({ labelLeft, labelRight, isOn, onToggle, colorOff = 'bg-blue-600', colorOn = 'bg-pink-600', isPresenting = false }) => {
  return (
    <div className={`flex items-center gap-4 ${isPresenting ? 'text-sm' : 'text-base'}`}>
      <span className={`font-medium transition-colors ${!isOn ? 'text-white' : 'text-gray-500'}`}>{labelLeft}</span>
      <button 
        onClick={onToggle}
        className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${isOn ? colorOn : colorOff}`}
      >
        <div 
          className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ${isOn ? 'left-9' : 'left-1'}`}
        />
      </button>
      <span className={`font-medium transition-colors ${isOn ? 'text-white' : 'text-gray-500'}`}>{labelRight}</span>
    </div>
  )
}

// RevealButton - Click to progressively reveal content
const RevealButton: React.FC<{
  items: { label: string; content: React.ReactNode }[]
  buttonColor?: string
  isPresenting?: boolean
}> = ({ items, buttonColor = 'from-emerald-600 to-teal-600', isPresenting = false }) => {
  const [revealedIndex, setRevealedIndex] = useState(-1)

  const revealNext = () => {
    if (revealedIndex < items.length - 1) {
      setRevealedIndex(prev => prev + 1)
    }
  }

  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div 
          key={idx}
          className={`overflow-hidden transition-all duration-500 ${idx <= revealedIndex ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className={`bg-gray-800/60 rounded-lg border border-gray-700 ${isPresenting ? 'p-3' : 'p-4'}`}>
            <p className={`font-bold text-emerald-300 ${isPresenting ? 'text-sm mb-1' : 'mb-2'}`}>{item.label}</p>
            <div className={`text-gray-200 ${isPresenting ? 'text-sm' : ''}`}>{item.content}</div>
          </div>
        </div>
      ))}
      {revealedIndex < items.length - 1 && (
        <button
          onClick={revealNext}
          className={`w-full bg-gradient-to-r ${buttonColor} hover:opacity-90 text-white font-bold ${isPresenting ? 'py-2 text-sm' : 'py-3'} rounded-lg transition-all shadow-lg`}
        >
          Reveal {items[revealedIndex + 1]?.label || 'Next'} →
        </button>
      )}
      {revealedIndex === items.length - 1 && (
        <button
          onClick={() => setRevealedIndex(-1)}
          className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 rounded-lg text-sm"
        >
          Reset All
        </button>
      )}
    </div>
  )
}

// InteractiveScale - Animated slider with visual feedback
const InteractiveScale: React.FC<{
  leftLabel: string
  rightLabel: string
  leftColor?: string
  rightColor?: string
  steps?: number
  isPresenting?: boolean
}> = ({ leftLabel, rightLabel, leftColor = 'text-blue-400', rightColor = 'text-pink-400', steps = 5, isPresenting = false }) => {
  const [value, setValue] = useState(Math.floor(steps / 2))

  return (
    <div className={`${isPresenting ? 'p-4' : 'p-6'} bg-gray-800/50 rounded-xl border border-gray-700`}>
      <div className="flex justify-between mb-4">
        <span className={`font-bold ${leftColor} ${isPresenting ? 'text-sm' : ''}`}>{leftLabel}</span>
        <span className={`font-bold ${rightColor} ${isPresenting ? 'text-sm' : ''}`}>{rightLabel}</span>
      </div>
      <div className="flex gap-2">
        {Array.from({ length: steps }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setValue(idx)}
            className={`flex-1 h-12 rounded-lg transition-all duration-300 ${
              idx === value 
                ? 'bg-gradient-to-r from-blue-500 to-pink-500 scale-110 shadow-lg' 
                : idx < value 
                  ? 'bg-blue-600/50 hover:bg-blue-600/70'
                  : 'bg-pink-600/50 hover:bg-pink-600/70'
            }`}
          />
        ))}
      </div>
      <p className={`text-center mt-3 text-gray-400 ${isPresenting ? 'text-xs' : 'text-sm'}`}>
        Click to adjust the balance
      </p>
    </div>
  )
}

// CompareCards - Two cards that highlight differences when hovered/clicked
const CompareCards: React.FC<{
  leftTitle: string
  leftItems: string[]
  leftColor: string
  rightTitle: string
  rightItems: string[]
  rightColor: string
  isPresenting?: boolean
}> = ({ leftTitle, leftItems, leftColor, rightTitle, rightItems, rightColor, isPresenting = false }) => {
  const [activeCard, setActiveCard] = useState<'left' | 'right' | null>(null)

  return (
    <div className="grid grid-cols-2 gap-4">
      <div 
        className={`rounded-xl border-2 transition-all duration-300 cursor-pointer ${isPresenting ? 'p-4' : 'p-6'} ${
          activeCard === 'left' 
            ? `${leftColor} scale-105 shadow-xl` 
            : activeCard === 'right'
              ? 'border-gray-700 bg-gray-900/30 opacity-50'
              : `${leftColor} bg-opacity-20`
        }`}
        onClick={() => setActiveCard(activeCard === 'left' ? null : 'left')}
      >
        <h3 className={`font-bold mb-3 ${isPresenting ? 'text-lg' : 'text-xl'}`}>{leftTitle}</h3>
        <ul className={`space-y-2 ${isPresenting ? 'text-sm' : ''}`}>
          {leftItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-green-400">•</span>
              <span className="text-gray-200">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div 
        className={`rounded-xl border-2 transition-all duration-300 cursor-pointer ${isPresenting ? 'p-4' : 'p-6'} ${
          activeCard === 'right' 
            ? `${rightColor} scale-105 shadow-xl` 
            : activeCard === 'left'
              ? 'border-gray-700 bg-gray-900/30 opacity-50'
              : `${rightColor} bg-opacity-20`
        }`}
        onClick={() => setActiveCard(activeCard === 'right' ? null : 'right')}
      >
        <h3 className={`font-bold mb-3 ${isPresenting ? 'text-lg' : 'text-xl'}`}>{rightTitle}</h3>
        <ul className={`space-y-2 ${isPresenting ? 'text-sm' : ''}`}>
          {rightItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-green-400">•</span>
              <span className="text-gray-200">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// PulseIcon - Animated icon that pulses on hover
const PulseIcon: React.FC<{
  icon: React.ReactNode
  color: string
  size?: 'sm' | 'md' | 'lg'
}> = ({ icon, color, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20'
  }

  return (
    <div className={`${sizeClasses[size]} rounded-full ${color} flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-current/30 cursor-pointer animate-pulse`}>
      {icon}
    </div>
  )
}

// Teacher Input: Hypotheses - Staggered Reveal Style
const HypothesisTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [revealedCards, setRevealedCards] = useState(0)
  const [showExamples, setShowExamples] = useState(false)

  const cards = [
    { title: 'Aim vs Hypothesis', color: 'purple', icon: <Target size={isPresenting ? 32 : 24} />, content: 'An aim is a general purpose; a hypothesis is a specific, testable prediction.' },
    { title: 'H₀: Null Hypothesis', color: 'blue', icon: <span className={`${isPresenting ? 'text-3xl' : 'text-xl'} font-bold`}>H₀</span>, content: 'Predicts no effect or no difference — any difference is due to chance.' },
    { title: 'H₁: Alternative Hypothesis', color: 'pink', icon: <span className={`${isPresenting ? 'text-3xl' : 'text-xl'} font-bold`}>H₁</span>, content: 'Predicts an effect or difference (can be directional or non-directional).' },
    { title: 'Operationalisation', color: 'emerald', icon: <Settings size={isPresenting ? 32 : 24} />, content: 'Define variables in measurable terms (e.g., words remembered, time to fall asleep).' },
  ]

  const colorMap: Record<string, { border: string, bg: string, text: string }> = {
    purple: { border: 'border-purple-500/50', bg: 'bg-purple-900/30', text: 'text-purple-300' },
    blue: { border: 'border-blue-500/50', bg: 'bg-blue-900/30', text: 'text-blue-300' },
    pink: { border: 'border-pink-500/50', bg: 'bg-pink-900/30', text: 'text-pink-300' },
    emerald: { border: 'border-emerald-500/50', bg: 'bg-emerald-900/30', text: 'text-emerald-300' },
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-12' : 'p-8'}`}>
      <div className="mb-6 text-center">
        <h2 className={`${isPresenting ? 'text-6xl' : 'text-4xl'} font-black text-white mb-2`}>Teacher Input: Hypotheses</h2>
        <p className={`${isPresenting ? 'text-2xl' : ''} text-gray-400`}>Click to reveal each concept</p>
      </div>
      
      {/* Cards Grid */}
      <div className={`grid grid-cols-2 max-w-5xl mx-auto ${isPresenting ? 'gap-6' : 'gap-4'} mb-6 flex-1`}>
        {cards.map((card, idx) => (
          <div
            key={idx}
            onClick={() => idx === revealedCards && setRevealedCards(prev => prev + 1)}
            className={`rounded-2xl border-2 ${colorMap[card.color].border} ${colorMap[card.color].bg} ${isPresenting ? 'p-6' : 'p-4'} transition-all duration-500 cursor-pointer ${
              idx < revealedCards 
                ? 'opacity-100 translate-y-0' 
                : idx === revealedCards 
                  ? 'opacity-100 translate-y-0 ring-2 ring-white/30 animate-pulse' 
                  : 'opacity-30 translate-y-2'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`${isPresenting ? 'w-14 h-14' : 'w-10 h-10'} rounded-full ${colorMap[card.color].bg} border ${colorMap[card.color].border} flex items-center justify-center ${colorMap[card.color].text}`}>
                {card.icon}
              </div>
              <h3 className={`${isPresenting ? 'text-2xl' : 'text-lg'} font-bold ${colorMap[card.color].text}`}>{card.title}</h3>
            </div>
            {idx < revealedCards ? (
              <p className={`text-gray-200 ${isPresenting ? 'text-xl' : 'text-sm'} leading-relaxed animate-fadeIn`}>{card.content}</p>
            ) : idx === revealedCards ? (
              <p className={`${colorMap[card.color].text} ${isPresenting ? 'text-lg' : 'text-sm'} italic`}>Click to reveal...</p>
            ) : (
              <p className="text-gray-600 text-sm">Locked</p>
            )}
          </div>
        ))}
      </div>

      {/* Progress & Examples Toggle */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          {cards.map((_, idx) => (
            <div key={idx} className={`${isPresenting ? 'w-4 h-4' : 'w-3 h-3'} rounded-full transition-colors ${idx < revealedCards ? 'bg-green-500' : 'bg-gray-600'}`} />
          ))}
          <span className={`ml-2 text-gray-400 ${isPresenting ? 'text-lg' : 'text-sm'}`}>{revealedCards}/4 revealed</span>
        </div>

        {revealedCards >= 4 && (
          <button
            onClick={() => setShowExamples(!showExamples)}
            className={`${isPresenting ? 'px-6 py-3 text-lg' : 'px-4 py-2'} bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-500 hover:to-pink-500 text-white font-bold rounded-lg transition-all`}
          >
            {showExamples ? 'Hide Examples' : 'Show Examples'}
          </button>
        )}

        {revealedCards < 4 && (
          <button
            onClick={() => setRevealedCards(4)}
            className={`text-gray-500 hover:text-gray-300 ${isPresenting ? 'text-base' : 'text-sm'}`}
          >
            Skip to all →
          </button>
        )}
      </div>

      {/* Examples */}
      {showExamples && (
        <div className={`grid grid-cols-2 max-w-5xl mx-auto ${isPresenting ? 'gap-6 mt-6' : 'gap-4 mt-4'} animate-fadeIn`}>
          <div className={`rounded-xl border-2 border-blue-500/40 bg-blue-950/20 ${isPresenting ? 'p-5' : 'p-4'}`}>
            <h4 className={`${isPresenting ? 'text-xl' : 'text-base'} text-blue-300 font-bold mb-2`}>Example H₀ (Null)</h4>
            <p className={`${isPresenting ? 'text-lg' : 'text-sm'} text-gray-200`}>There will be <span className="text-blue-300 font-semibold">no difference</span> in test scores between students who revise with music and those who revise in silence.</p>
          </div>
          <div className={`rounded-xl border-2 border-pink-500/40 bg-pink-950/20 ${isPresenting ? 'p-5' : 'p-4'}`}>
            <h4 className={`${isPresenting ? 'text-xl' : 'text-base'} text-pink-300 font-bold mb-2`}>Example H₁ (Alternative)</h4>
            <p className={`${isPresenting ? 'text-lg' : 'text-sm'} text-gray-200`}>Students who revise in silence will score <span className="text-pink-300 font-semibold">higher</span> than students who revise with music.</p>
          </div>
        </div>
      )}
    </div>
  )
}

// Teacher Input: Variables (well-presented deck slide)
const VariablesTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [activeVariable, setActiveVariable] = useState<'iv' | 'dv' | 'ev' | null>(null)

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-16' : 'p-10'}`}>
      <div className="mb-6 text-center">
        <h2 className={`${isPresenting ? 'text-7xl' : 'text-5xl'} font-black text-white mb-3`}>Teacher Input: Variables</h2>
        <p className={`${isPresenting ? 'text-3xl' : ''} text-gray-400`}>Click each card to explore — watch the others fade!</p>
      </div>

      {/* Interactive Compare Cards */}
      <div className={`grid grid-cols-3 max-w-6xl mx-auto ${isPresenting ? 'gap-8' : 'gap-4'} mb-6`}>
        <div 
          onClick={() => setActiveVariable(activeVariable === 'iv' ? null : 'iv')}
          className={`rounded-2xl border-2 cursor-pointer transition-all duration-300 ${isPresenting ? 'p-8' : 'p-5'} ${
            activeVariable === 'iv' 
              ? 'border-blue-400 bg-blue-900/40 scale-105 shadow-xl shadow-blue-500/20' 
              : activeVariable !== null
                ? 'border-gray-700 bg-gray-900/20 opacity-40'
                : 'border-blue-500/40 bg-blue-900/20 hover:scale-102 hover:border-blue-400'
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className={`${isPresenting ? 'w-14 h-14' : 'w-10 h-10'} rounded-full bg-blue-500/30 flex items-center justify-center`}>
              <Settings className="text-blue-300" size={isPresenting ? 28 : 20} />
            </div>
            <h3 className={`${isPresenting ? 'text-3xl' : 'text-xl'} font-bold text-blue-300`}>Independent Variable (IV)</h3>
          </div>
          <p className={`text-gray-200 ${isPresenting ? 'text-xl' : 'text-sm'} mb-3`}>The variable we <strong className="text-blue-300">manipulate</strong></p>
          {activeVariable === 'iv' && (
            <div className="animate-fadeIn mt-3 pt-3 border-t border-blue-500/30">
              <p className={`text-blue-200 ${isPresenting ? 'text-lg' : 'text-sm'}`}>Example: Music vs Silence during revision</p>
              <p className={`text-gray-400 ${isPresenting ? 'text-base' : 'text-xs'} mt-1`}>The researcher decides what conditions participants experience</p>
            </div>
          )}
        </div>

        <div 
          onClick={() => setActiveVariable(activeVariable === 'dv' ? null : 'dv')}
          className={`rounded-2xl border-2 cursor-pointer transition-all duration-300 ${isPresenting ? 'p-8' : 'p-5'} ${
            activeVariable === 'dv' 
              ? 'border-pink-400 bg-pink-900/40 scale-105 shadow-xl shadow-pink-500/20' 
              : activeVariable !== null
                ? 'border-gray-700 bg-gray-900/20 opacity-40'
                : 'border-pink-500/40 bg-pink-900/20 hover:scale-102 hover:border-pink-400'
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className={`${isPresenting ? 'w-14 h-14' : 'w-10 h-10'} rounded-full bg-pink-500/30 flex items-center justify-center`}>
              <BarChart3 className="text-pink-300" size={isPresenting ? 28 : 20} />
            </div>
            <h3 className={`${isPresenting ? 'text-3xl' : 'text-xl'} font-bold text-pink-300`}>Dependent Variable (DV)</h3>
          </div>
          <p className={`text-gray-200 ${isPresenting ? 'text-xl' : 'text-sm'} mb-3`}>The variable we <strong className="text-pink-300">measure</strong></p>
          {activeVariable === 'dv' && (
            <div className="animate-fadeIn mt-3 pt-3 border-t border-pink-500/30">
              <p className={`text-pink-200 ${isPresenting ? 'text-lg' : 'text-sm'}`}>Example: Test score / words remembered</p>
              <p className={`text-gray-400 ${isPresenting ? 'text-base' : 'text-xs'} mt-1`}>This is the data we collect to see if the IV had an effect</p>
            </div>
          )}
        </div>

        <div 
          onClick={() => setActiveVariable(activeVariable === 'ev' ? null : 'ev')}
          className={`rounded-2xl border-2 cursor-pointer transition-all duration-300 ${isPresenting ? 'p-8' : 'p-5'} ${
            activeVariable === 'ev' 
              ? 'border-emerald-400 bg-emerald-900/40 scale-105 shadow-xl shadow-emerald-500/20' 
              : activeVariable !== null
                ? 'border-gray-700 bg-gray-900/20 opacity-40'
                : 'border-emerald-500/40 bg-emerald-900/20 hover:scale-102 hover:border-emerald-400'
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className={`${isPresenting ? 'w-14 h-14' : 'w-10 h-10'} rounded-full bg-emerald-500/30 flex items-center justify-center`}>
              <AlertTriangle className="text-emerald-300" size={isPresenting ? 28 : 20} />
            </div>
            <h3 className={`${isPresenting ? 'text-3xl' : 'text-xl'} font-bold text-emerald-300`}>Extraneous Variables</h3>
          </div>
          <p className={`text-gray-200 ${isPresenting ? 'text-xl' : 'text-sm'} mb-3`}>Variables we <strong className="text-emerald-300">control</strong></p>
          {activeVariable === 'ev' && (
            <div className="animate-fadeIn mt-3 pt-3 border-t border-emerald-500/30">
              <p className={`text-emerald-200 ${isPresenting ? 'text-lg' : 'text-sm'}`}>Examples: Prior knowledge, intelligence, sleep, time of day</p>
              <p className={`text-gray-400 ${isPresenting ? 'text-base' : 'text-xs'} mt-1`}>Must control these to keep the test FAIR!</p>
            </div>
          )}
        </div>
      </div>

      {/* Interactive Tip */}
      <div className={`max-w-5xl mx-auto rounded-2xl border border-yellow-500/30 bg-yellow-900/10 ${isPresenting ? 'p-6' : 'p-4'}`}>
        <div className="flex items-center gap-3">
          <Lightbulb className="text-yellow-400" size={isPresenting ? 28 : 20} />
          <h4 className={`${isPresenting ? 'text-2xl' : 'text-lg'} text-yellow-300 font-bold`}>Top Tip</h4>
        </div>
        <p className={`${isPresenting ? 'text-xl' : 'text-sm'} text-gray-300 mt-2`}>Write variables in measurable terms and link your controls to fairness (e.g., same test, same time limit, similar prior knowledge).</p>
      </div>
    </div>
  )
}

// Variables lab (IV, DV, Extraneous)
const VariableLab: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const extraneous = ['Prior knowledge', 'Intelligence', 'Education level']

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-12' : 'p-8'}`}>
      <h2 className={`${isPresenting ? 'text-6xl' : 'text-4xl'} font-black text-white mb-2 flex items-center gap-3`}>
        <FlaskConical className="text-green-400" size={isPresenting ? 56 : 40} />
        Music & Learning Lab
      </h2>
      <p className={`${isPresenting ? 'text-2xl' : ''} text-gray-400 mb-6`}>Identify IV, DV, and extraneous variables.</p>

      <div className={`grid grid-cols-3 ${isPresenting ? 'gap-10' : 'gap-6'}`}>
        <div className={`bg-blue-900/20 border-2 border-blue-500/40 rounded-2xl ${isPresenting ? 'p-10' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-4xl' : 'text-2xl'} font-bold text-blue-300 mb-2`}>IV</h3>
          <p className={`${isPresenting ? 'text-2xl' : ''} text-gray-200`}>Music while revising (present vs silent)</p>
          <p className={`${isPresenting ? 'text-xl' : 'text-sm'} text-blue-200 mt-3`}>The variable we manipulate.</p>
        </div>
        <div className={`bg-pink-900/20 border-2 border-pink-500/40 rounded-2xl ${isPresenting ? 'p-10' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-4xl' : 'text-2xl'} font-bold text-pink-300 mb-2`}>DV</h3>
          <p className={`${isPresenting ? 'text-2xl' : ''} text-gray-200`}>Test score / number of words remembered</p>
          <p className={`${isPresenting ? 'text-xl' : 'text-sm'} text-pink-200 mt-3`}>The outcome we measure.</p>
        </div>
        <div className={`bg-emerald-900/20 border-2 border-emerald-500/40 rounded-2xl ${isPresenting ? 'p-10' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-4xl' : 'text-2xl'} font-bold text-emerald-300 mb-2`}>Extraneous</h3>
          <ul className={`space-y-2 text-gray-200 ${isPresenting ? 'text-2xl' : ''}`}>
            {extraneous.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <AlertTriangle size={isPresenting ? 24 : 16} className="text-emerald-300 mt-1" />
                <span className={`${isPresenting ? 'text-2xl' : 'text-sm'}`}>{item}</span>
              </li>
            ))}
          </ul>
          <p className={`${isPresenting ? 'text-xl' : 'text-sm'} text-emerald-200 mt-3`}>Control these to keep the test fair.</p>
        </div>
      </div>
    </div>
  )
}

// Variable Detective task with reveal answers
const VariableDetective: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const scenarios = [
    {
      id: 1,
      text: 'Energy drinks before a maths quiz.',
      iv: 'Energy drink vs water',
      dv: 'Quiz score',
      extraneous: 'Prior maths ability, sleep'
    },
    {
      id: 2,
      text: 'Background noise while reading.',
      iv: 'Noise level (loud vs quiet)',
      dv: 'Reading comprehension score',
      extraneous: 'Reading ability, tiredness'
    },
    {
      id: 3,
      text: 'Sleep hours before a memory test.',
      iv: 'Hours of sleep (4 vs 8)',
      dv: 'Memory test score',
      extraneous: 'Stress, caffeine intake'
    }
  ]

  const [revealed, setRevealed] = useState<Record<number, boolean>>({})

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-4' : 'p-8'}`}>
      <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-1`}>Variable Detective</h2>
      <p className={`${isPresenting ? 'text-xs' : ''} text-gray-400 mb-4`}>Identify IV, DV and suggest 2 extraneous variables for each scenario.</p>

      <div className={`grid grid-cols-3 flex-grow overflow-auto custom-scrollbar ${isPresenting ? 'gap-3' : 'gap-4'}`}>
        {scenarios.map((s) => (
          <div key={s.id} className={`bg-gray-900/70 border border-gray-700 rounded-lg flex flex-col justify-between ${isPresenting ? 'p-3' : 'p-5'}`}>
            <div>
              <div className={`flex items-center justify-between ${isPresenting ? 'mb-2' : 'mb-3'}`}>
                <span className={`${isPresenting ? 'text-xs' : 'text-sm'} text-pink-400 font-bold`}>Scenario {s.id}</span>
                <button
                  onClick={() => setRevealed(prev => ({ ...prev, [s.id]: !prev[s.id] }))}
                  className={`${isPresenting ? 'text-xs px-2 py-1' : 'text-xs px-3 py-1'} rounded-lg border border-gray-700 text-gray-300 hover:border-pink-500/50`}
                >
                  {revealed[s.id] ? 'Hide' : 'Reveal'}
                </button>
              </div>
              <p className={`text-gray-200 leading-relaxed ${isPresenting ? 'text-xs mb-2' : 'mb-4'}`}>{s.text}</p>
            </div>
            {revealed[s.id] && (
              <div className={`space-y-1 bg-gray-800/60 border border-gray-700 rounded-lg animate-fadeIn ${isPresenting ? 'p-2' : 'p-4'}`}>
                <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-blue-200`}><strong>IV:</strong> {s.iv}</p>
                <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-pink-200`}><strong>DV:</strong> {s.dv}</p>
                <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-emerald-200`}><strong>Extraneous:</strong> {s.extraneous}</p>
              </div>
            )}
            {!revealed[s.id] && (
              <p className={`${isPresenting ? 'text-xs' : 'text-xs'} text-gray-500`}>Think first, then reveal.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// ============= LESSON 2 COMPONENTS: EXTRANEOUS VARIABLES =============

// Teacher Input: What are Extraneous Variables - Staggered Reveal Style
const EVTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [revealedCount, setRevealedCount] = useState(0)
  const [showExample, setShowExample] = useState(false)

  const points = [
    { title: 'Extraneous Variable (EV)', icon: <ShieldAlert size={isPresenting ? 28 : 20} />, color: 'red', desc: 'Any variable OTHER than the IV that might affect the DV. EVs are like "noise" that can muddy your results.' },
    { title: 'Why Control EVs?', icon: <AlertTriangle size={isPresenting ? 28 : 20} />, color: 'yellow', desc: 'If EVs are not controlled, we cannot be sure if changes in the DV were caused by the IV or by something else. This threatens validity.' },
    { title: 'Confounding Variable', icon: <AlertCircle size={isPresenting ? 28 : 20} />, color: 'orange', desc: 'An EV that varies systematically with the IV. If not controlled, it becomes impossible to determine which variable caused the change in the DV.' },
  ]

  const colorMap: Record<string, { border: string, bg: string, text: string, iconBg: string }> = {
    red:    { border: 'border-red-500/50',    bg: 'bg-red-900/30',    text: 'text-red-300',    iconBg: 'bg-red-500/30' },
    yellow: { border: 'border-yellow-500/50', bg: 'bg-yellow-900/30', text: 'text-yellow-300', iconBg: 'bg-yellow-500/30' },
    orange: { border: 'border-orange-500/50', bg: 'bg-orange-900/30', text: 'text-orange-300', iconBg: 'bg-orange-500/30' },
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-12' : 'p-8'}`}>
      <div className="mb-6 text-center">
        <h2 className={`${isPresenting ? 'text-6xl' : 'text-4xl'} font-black text-white mb-2`}>Teacher Input: Extraneous Variables</h2>
        <p className={`${isPresenting ? 'text-2xl' : ''} text-gray-400`}>Controlling the "noise" in your experiment</p>
      </div>

      {/* Cards with staggered reveal */}
      <div className={`grid grid-cols-3 max-w-6xl mx-auto ${isPresenting ? 'gap-6' : 'gap-4'} mb-6`}>
        {points.map((p, i) => (
          <div 
            key={i}
            onClick={() => i === revealedCount && setRevealedCount(prev => prev + 1)}
            className={`rounded-2xl border-2 ${colorMap[p.color].border} ${colorMap[p.color].bg} ${isPresenting ? 'p-6' : 'p-5'} transition-all duration-500 cursor-pointer ${
              i < revealedCount 
                ? 'opacity-100 scale-100' 
                : i === revealedCount 
                  ? 'opacity-100 scale-100 ring-2 ring-white/20 animate-pulse' 
                  : 'opacity-30 scale-95'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`${isPresenting ? 'w-12 h-12' : 'w-10 h-10'} rounded-full ${colorMap[p.color].iconBg} flex items-center justify-center ${colorMap[p.color].text}`}>
                {p.icon}
              </div>
              <h3 className={`${isPresenting ? 'text-2xl' : 'text-lg'} font-bold ${colorMap[p.color].text}`}>{p.title}</h3>
            </div>
            {i < revealedCount ? (
              <p className={`text-gray-200 leading-relaxed ${isPresenting ? 'text-xl' : 'text-sm'} animate-fadeIn`}>{p.desc}</p>
            ) : i === revealedCount ? (
              <p className={`${colorMap[p.color].text} ${isPresenting ? 'text-lg' : 'text-sm'} italic`}>Click to reveal...</p>
            ) : (
              <p className="text-gray-600 text-sm">Locked</p>
            )}
          </div>
        ))}
      </div>

      {/* Progress indicator */}
      <div className="flex justify-center items-center gap-3 mb-4">
        {points.map((_, i) => (
          <div key={i} className={`${isPresenting ? 'w-4 h-4' : 'w-3 h-3'} rounded-full transition-colors ${i < revealedCount ? 'bg-green-500' : 'bg-gray-600'}`} />
        ))}
        <span className={`ml-2 text-gray-400 ${isPresenting ? 'text-lg' : 'text-sm'}`}>{revealedCount}/3</span>
        {revealedCount < 3 && (
          <button onClick={() => setRevealedCount(3)} className="ml-4 text-gray-500 hover:text-gray-300 text-sm">Skip →</button>
        )}
      </div>

      {/* Example - show when all revealed */}
      {revealedCount >= 3 && (
        <>
          <button
            onClick={() => setShowExample(!showExample)}
            className={`mx-auto ${isPresenting ? 'px-6 py-3 text-lg' : 'px-4 py-2'} bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-bold rounded-lg transition-all mb-4`}
          >
            {showExample ? 'Hide Example' : 'Show Example'}
          </button>
          {showExample && (
            <div className={`max-w-5xl mx-auto rounded-xl border border-gray-700 bg-gray-900/40 ${isPresenting ? 'p-6' : 'p-4'} animate-fadeIn`}>
              <h4 className={`${isPresenting ? 'text-2xl' : 'text-lg'} text-red-300 font-bold mb-2`}>Example</h4>
              <p className={`${isPresenting ? 'text-xl' : 'text-sm'} text-gray-300`}>Testing if caffeine improves reaction time, but half the participants had no sleep the night before. Was the difference due to caffeine or tiredness? <span className="text-red-300 font-semibold">Tiredness is an EV that should have been controlled.</span></p>
            </div>
          )}
        </>
      )}
    </div>
  )
}

// Teacher Input: Extraneous Variables - Clean Static Version
const ExtraneousVariablesTeachSlideStatic: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const points = [
    { title: 'Situational Variables', icon: <Settings size={isPresenting ? 32 : 24} />, color: 'blue', desc: 'Features of the ENVIRONMENT that could affect behaviour (noise, temperature, lighting, time of day, location).' },
    { title: 'Participant Variables', icon: <Users size={isPresenting ? 32 : 24} />, color: 'purple', desc: 'Individual DIFFERENCES between participants (age, gender, intelligence, mood, motivation, prior experience).' },
    { title: 'Experimenter Effects', icon: <Eye size={isPresenting ? 32 : 24} />, color: 'green', desc: 'Ways the RESEARCHER might influence participants differently (tone of voice, facial expressions, giving extra hints).' },
  ]

  const colorMap: Record<string, { border: string, bg: string, text: string, iconBg: string }> = {
    blue:   { border: 'border-blue-500/40',   bg: 'bg-blue-900/20',   text: 'text-blue-300', iconBg: 'bg-blue-500/20' },
    purple: { border: 'border-purple-500/40', bg: 'bg-purple-900/20', text: 'text-purple-300', iconBg: 'bg-purple-500/20' },
    green:  { border: 'border-green-500/40',  bg: 'bg-green-900/20',  text: 'text-green-300', iconBg: 'bg-green-500/20' },
    yellow: { border: 'border-yellow-500/40', bg: 'bg-yellow-900/20', text: 'text-yellow-300', iconBg: 'bg-yellow-500/20' },
    orange: { border: 'border-orange-500/40', bg: 'bg-orange-900/20', text: 'text-orange-300', iconBg: 'bg-orange-500/20' },
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-16' : 'p-10'}`}>
      <div className="mb-8 text-center">
        <h2 className={`${isPresenting ? 'text-7xl' : 'text-5xl'} font-black text-white mb-3`}>Teacher Input: Extraneous Variables</h2>
        <p className={`${isPresenting ? 'text-3xl' : ''} text-gray-400`}>Controlling the "noise" in your experiment</p>
      </div>
      <div className={`grid grid-cols-3 max-w-6xl mx-auto ${isPresenting ? 'gap-10' : 'gap-6'}`}>
        {points.map((p, i) => (
          <div key={i} className={`rounded-2xl border-2 ${colorMap[p.color].border} ${colorMap[p.color].bg} shadow-xl ${isPresenting ? 'p-10' : 'p-6'}`}>
            <div className={`flex items-center gap-4 ${isPresenting ? 'mb-4' : 'mb-2'}`}>
              <div className={`${isPresenting ? 'w-16 h-16' : 'w-10 h-10'} rounded-full ${colorMap[p.color].iconBg} flex items-center justify-center ${colorMap[p.color].text}`}>
                {p.icon}
              </div>
              <h3 className={`${isPresenting ? 'text-3xl' : 'text-xl'} font-bold ${colorMap[p.color].text}`}>{p.title}</h3>
            </div>
            <p className={`text-gray-200 leading-relaxed ${isPresenting ? 'text-2xl' : 'text-sm'}`}>{p.desc}</p>
          </div>
        ))}
      </div>
      <div className={`max-w-5xl mx-auto mt-8 rounded-2xl border border-gray-700 bg-gray-900/40 ${isPresenting ? 'p-10' : 'p-6'}`}>
        <h4 className={`${isPresenting ? 'text-3xl' : ''} text-red-300 font-bold mb-2`}>Example</h4>
        <p className={`${isPresenting ? 'text-2xl' : ''} text-gray-300`}>Testing if caffeine improves reaction time, but half the participants had no sleep the night before. Was the difference due to caffeine or tiredness? <span className="text-red-300 font-semibold">Tiredness is an EV that should have been controlled.</span></p>
      </div>
    </div>
  )
}

// Teacher Input: Types of Extraneous Variables - Accordion Style
const EVTypesTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const types = [
    { 
      title: 'Situational Variables', 
      icon: <Settings size={isPresenting ? 24 : 20} />, 
      color: 'blue', 
      desc: 'Features of the ENVIRONMENT that could affect behaviour.',
      examples: 'Noise, temperature, lighting, time of day, location, room layout.',
      solution: 'Use standardised procedures - keep conditions identical for all participants.'
    },
    { 
      title: 'Participant Variables', 
      icon: <Users size={isPresenting ? 24 : 20} />, 
      color: 'purple', 
      desc: 'Individual DIFFERENCES between participants.',
      examples: 'Age, gender, intelligence, mood, motivation, prior experience, tiredness.',
      solution: 'Use random allocation - randomly assign participants to conditions.'
    },
    { 
      title: 'Experimenter Effects', 
      icon: <Eye size={isPresenting ? 24 : 20} />, 
      color: 'green', 
      desc: 'Ways the RESEARCHER might influence participants differently.',
      examples: 'Tone of voice, facial expressions, giving extra hints, expectations.',
      solution: 'Use standardised instructions - read from a script; consider blind procedures.'
    },
  ]

  const colorMap: Record<string, { border: string, bg: string, text: string, activeBorder: string }> = {
    blue:   { border: 'border-blue-500/30',   bg: 'bg-blue-900/20',   text: 'text-blue-300', activeBorder: 'border-blue-400' },
    purple: { border: 'border-purple-500/30', bg: 'bg-purple-900/20', text: 'text-purple-300', activeBorder: 'border-purple-400' },
    green:  { border: 'border-green-500/30',  bg: 'bg-green-900/20',  text: 'text-green-300', activeBorder: 'border-green-400' },
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-12' : 'p-8'}`}>
      <div className="mb-6 text-center">
        <h2 className={`${isPresenting ? 'text-6xl' : 'text-4xl'} font-black text-white mb-2`}>Types of Extraneous Variables</h2>
        <p className={`${isPresenting ? 'text-2xl' : ''} text-gray-400`}>Click each type to expand details</p>
      </div>

      {/* Accordion */}
      <div className={`max-w-4xl mx-auto w-full space-y-3`}>
        {types.map((t, i) => (
          <div 
            key={i}
            className={`rounded-xl border-2 transition-all duration-300 overflow-hidden ${
              expandedIndex === i 
                ? `${colorMap[t.color].activeBorder} ${colorMap[t.color].bg}` 
                : `${colorMap[t.color].border} bg-gray-900/40 hover:${colorMap[t.color].bg}`
            }`}
          >
            {/* Header - always visible */}
            <button
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              className={`w-full flex items-center justify-between ${isPresenting ? 'p-5' : 'p-4'} text-left`}
            >
              <div className="flex items-center gap-3">
                <div className={`${isPresenting ? 'w-12 h-12' : 'w-10 h-10'} rounded-full ${colorMap[t.color].bg} border ${colorMap[t.color].border} flex items-center justify-center ${colorMap[t.color].text}`}>
                  {t.icon}
                </div>
                <h3 className={`${isPresenting ? 'text-2xl' : 'text-lg'} font-bold ${colorMap[t.color].text}`}>{t.title}</h3>
              </div>
              <ChevronRight 
                className={`${colorMap[t.color].text} transition-transform duration-300 ${expandedIndex === i ? 'rotate-90' : ''}`} 
                size={isPresenting ? 28 : 20} 
              />
            </button>

            {/* Expandable content */}
            <div className={`transition-all duration-300 ${expandedIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className={`${isPresenting ? 'px-5 pb-5' : 'px-4 pb-4'} space-y-3`}>
                <p className={`text-gray-200 ${isPresenting ? 'text-xl' : 'text-sm'}`}>{t.desc}</p>
                
                <div className={`${colorMap[t.color].bg} rounded-lg ${isPresenting ? 'p-4' : 'p-3'}`}>
                  <span className={`${isPresenting ? 'text-base' : 'text-sm'} ${colorMap[t.color].text} font-semibold`}>Examples: </span>
                  <span className={`${isPresenting ? 'text-base' : 'text-sm'} text-gray-300`}>{t.examples}</span>
                </div>
                
                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-3">
                  <span className={`${isPresenting ? 'text-base' : 'text-sm'} text-yellow-400 font-semibold`}>🛡️ How to Control: </span>
                  <span className={`${isPresenting ? 'text-base' : 'text-sm'} text-gray-300`}>{t.solution}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick expand all */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setExpandedIndex(expandedIndex === null ? 0 : null)}
          className={`text-gray-400 hover:text-white ${isPresenting ? 'text-lg' : 'text-sm'}`}
        >
          {expandedIndex !== null ? 'Collapse all' : 'Click headers to expand'}
        </button>
      </div>
    </div>
  )
}

// EV Types Task - Identifying Types of EVs (ONLY use after EVTypesTeachSlide)
const EVTypesTask: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({})
  
  const scenarios = [
    { id: 1, scenario: "The room where Group A is tested is much noisier than Group B's room.", type: "Situational Variable", explanation: "Features of the environment that differ between conditions." },
    { id: 2, scenario: "Group A happens to have more intelligent participants than Group B.", type: "Participant Variable", explanation: "Individual differences between participants." },
    { id: 3, scenario: "The researcher is friendlier to participants in the experimental condition.", type: "Experimenter Effect", explanation: "The researcher's behaviour influences participants differently." },
    { id: 4, scenario: "Testing takes place at 9am for one group and 9pm for another.", type: "Situational Variable", explanation: "Time of day is an environmental factor affecting performance." },
    { id: 5, scenario: "Some participants are motivated while others seem bored.", type: "Participant Variable", explanation: "Motivation is an individual difference between participants." },
    { id: 6, scenario: "The researcher accidentally gives more hints to the control group.", type: "Experimenter Effect", explanation: "The researcher's actions differ between conditions." },
  ]

  const typeColors: Record<string, string> = {
    'Situational Variable': 'text-blue-300 bg-blue-900/30 border-blue-500/40',
    'Participant Variable': 'text-purple-300 bg-purple-900/30 border-purple-500/40',
    'Experimenter Effect': 'text-green-300 bg-green-900/30 border-green-500/40',
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-12' : 'p-8'}`}>
      <h2 className={`${isPresenting ? 'text-5xl' : 'text-3xl'} font-black text-white mb-2`}>Task: Identify the Type of EV</h2>
      <p className={`${isPresenting ? 'text-xl' : ''} text-gray-400 mb-6`}>Classify each extraneous variable as Situational, Participant, or Experimenter Effect.</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {scenarios.map((s) => (
          <div key={s.id} className={`rounded-xl border border-gray-700 bg-gray-900/60 ${isPresenting ? 'p-6' : 'p-4'}`}>
            <p className={`${isPresenting ? 'text-xl' : ''} text-gray-200 mb-4 italic`}>"{s.scenario}"</p>
            {revealed[s.id] ? (
              <div className={`rounded-lg border ${typeColors[s.type]} ${isPresenting ? 'p-4' : 'p-3'} animate-fadeIn`}>
                <span className={`font-bold ${isPresenting ? 'text-lg' : 'text-sm'}`}>{s.type}</span>
                <p className={`${isPresenting ? 'text-base' : 'text-xs'} mt-1 opacity-80`}>{s.explanation}</p>
              </div>
            ) : (
              <button
                onClick={() => setRevealed({ ...revealed, [s.id]: true })}
                className={`w-full py-2 rounded-lg font-bold bg-gray-800 hover:bg-gray-700 text-gray-300 transition-all ${isPresenting ? 'text-lg' : 'text-sm'}`}
              >
                Reveal Answer
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// EV Detective Game - Interactive Simulation
const EVDetectiveGame: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [currentScenario, setCurrentScenario] = useState(0)
  const [selectedEVs, setSelectedEVs] = useState<string[]>([])
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)

  const scenarios = [
    {
      title: "The Memory Experiment",
      description: "A researcher tests whether playing brain training games improves memory. 20 participants play brain games for 2 weeks, then take a memory test. A control group of 20 different participants just take the memory test without any training.",
      possibleEVs: [
        { id: 'age', text: 'Age differences between groups', isEV: true },
        { id: 'time', text: 'Time of day testing occurs', isEV: true },
        { id: 'games', text: 'The brain training games used', isEV: false },
        { id: 'prior', text: 'Prior experience with memory tests', isEV: true },
        { id: 'motivation', text: 'Motivation levels of participants', isEV: true },
        { id: 'memory', text: 'The memory test given', isEV: false },
      ],
    },
    {
      title: "The Stress Study",
      description: "Researchers want to know if exercise reduces stress. Group A exercises for 30 minutes before a stressful maths test. Group B does not exercise. Stress is measured by heart rate during the test.",
      possibleEVs: [
        { id: 'fitness', text: 'Baseline fitness levels', isEV: true },
        { id: 'maths', text: 'Maths ability', isEV: true },
        { id: 'exercise', text: 'The exercise activity', isEV: false },
        { id: 'caffeine', text: 'Caffeine consumption that day', isEV: true },
        { id: 'sleep', text: 'Amount of sleep night before', isEV: true },
        { id: 'test', text: 'The maths test content', isEV: false },
      ],
    },
    {
      title: "The Reading Experiment",
      description: "A study investigates whether reading on paper is better for comprehension than reading on screen. Students read an article either on paper or tablet, then answer questions. The paper group reads in a quiet library, the screen group reads in a computer lab.",
      possibleEVs: [
        { id: 'location', text: 'Different testing locations', isEV: true },
        { id: 'noise', text: 'Background noise levels', isEV: true },
        { id: 'format', text: 'Reading format (paper/screen)', isEV: false },
        { id: 'familiarity', text: 'Familiarity with tablets', isEV: true },
        { id: 'article', text: 'The article content', isEV: false },
        { id: 'lighting', text: 'Lighting conditions', isEV: true },
      ],
    }
  ]

  const currentScene = scenarios[currentScenario]

  const toggleEV = (id: string) => {
    if (showFeedback) return
    setSelectedEVs(prev => prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id])
  }

  const checkAnswers = () => {
    const correctSelections = currentScene.possibleEVs.filter(ev => ev.isEV && selectedEVs.includes(ev.id)).length
    const wrongSelections = selectedEVs.filter(id => !currentScene.possibleEVs.find(ev => ev.id === id)?.isEV).length
    setScore(prev => prev + Math.max(0, correctSelections - wrongSelections))
    setShowFeedback(true)
  }

  const nextScenario = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(prev => prev + 1)
      setSelectedEVs([])
      setShowFeedback(false)
    }
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-10' : 'p-6'}`}>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-red-600 p-2 rounded-lg"><Eye className="w-6 h-6 text-white" /></div>
          <div>
            <h3 className={`${isPresenting ? 'text-3xl' : 'text-xl'} font-bold text-white`}>EV Detective</h3>
            <p className={`${isPresenting ? 'text-lg' : 'text-sm'} text-gray-400`}>Scenario {currentScenario + 1} of {scenarios.length}</p>
          </div>
        </div>
        <div className="bg-gray-800 px-4 py-2 rounded-lg">
          <span className="text-gray-400 text-sm">Score: </span>
          <span className="text-green-400 font-bold">{score}</span>
        </div>
      </div>

      <div className={`bg-gray-800/50 rounded-xl mb-4 ${isPresenting ? 'p-6' : 'p-4'}`}>
        <h4 className={`${isPresenting ? 'text-2xl' : 'text-lg'} font-bold text-white mb-2`}>{currentScene.title}</h4>
        <p className={`${isPresenting ? 'text-xl' : ''} text-gray-300 leading-relaxed`}>{currentScene.description}</p>
      </div>

      <p className={`text-yellow-400 font-medium mb-3 ${isPresenting ? 'text-xl' : ''}`}>Select ALL the potential extraneous variables:</p>

      <div className="grid grid-cols-2 gap-3 mb-4 flex-1">
        {currentScene.possibleEVs.map((ev) => (
          <button
            key={ev.id}
            onClick={() => toggleEV(ev.id)}
            disabled={showFeedback}
            className={`${isPresenting ? 'p-5 text-lg' : 'p-3'} rounded-xl text-left transition-all border-2 ${
              showFeedback
                ? ev.isEV
                  ? 'bg-green-600/20 border-green-500 text-green-300'
                  : selectedEVs.includes(ev.id)
                    ? 'bg-red-600/20 border-red-500 text-red-300'
                    : 'bg-gray-800 border-gray-700 text-gray-500'
                : selectedEVs.includes(ev.id)
                  ? 'bg-red-600 border-red-500 text-white'
                  : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-gray-500'
            }`}
          >
            <div className="flex items-center gap-3">
              {showFeedback && ev.isEV && <CheckCircle className="w-5 h-5 text-green-400" />}
              {showFeedback && !ev.isEV && selectedEVs.includes(ev.id) && <AlertTriangle className="w-5 h-5 text-red-400" />}
              <span className="font-medium">{ev.text}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="flex justify-center gap-4">
        {!showFeedback ? (
          <button onClick={checkAnswers} disabled={selectedEVs.length === 0} className="px-8 py-3 bg-green-600 hover:bg-green-500 disabled:opacity-50 text-white font-bold rounded-lg">Check Answers</button>
        ) : (
          <button onClick={nextScenario} disabled={currentScenario >= scenarios.length - 1} className="px-8 py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold rounded-lg flex items-center gap-2">
            {currentScenario < scenarios.length - 1 ? <>Next Scenario →</> : 'Complete!'}
          </button>
        )}
      </div>
    </div>
  )
}

// Teacher Input: Control Methods - Tabbed Interface
const ControlMethodsTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [activeTab, setActiveTab] = useState(0)

  const methods = [
    { title: 'Standardised Procedures', icon: <ClipboardList size={isPresenting ? 28 : 20} />, color: 'cyan', desc: 'Keep conditions IDENTICAL for all participants. Same room, same time, same instructions read from a script.', example: 'All participants tested in the same quiet room at 10am.', controls: 'Situational Variables' },
    { title: 'Random Allocation', icon: <Shuffle size={isPresenting ? 28 : 20} />, color: 'pink', desc: 'Assign participants to conditions using CHANCE (coin flip, random number). Spreads individual differences evenly.', example: 'Flip a coin: Heads = Group A, Tails = Group B.', controls: 'Participant Variables' },
    { title: 'Standardised Instructions', icon: <ClipboardList size={isPresenting ? 28 : 20} />, color: 'blue', desc: 'All participants receive EXACTLY the same instructions, usually from a prepared script. Prevents experimenter effects.', example: 'Read aloud: "You have 5 minutes to complete this task."', controls: 'Experimenter Effects' },
    { title: 'Counterbalancing', icon: <RefreshCw size={isPresenting ? 28 : 20} />, color: 'purple', desc: 'In repeated measures, half do Condition A then B, half do B then A. Controls order effects (fatigue, practice).', example: 'Group 1: A→B, Group 2: B→A', controls: 'Order Effects' },
  ]

  const colorMap: Record<string, { border: string, bg: string, text: string, tabActive: string, tabInactive: string }> = {
    cyan:   { border: 'border-cyan-400', bg: 'bg-cyan-900/30', text: 'text-cyan-300', tabActive: 'bg-cyan-600', tabInactive: 'bg-gray-800 hover:bg-cyan-900/50' },
    pink:   { border: 'border-pink-400', bg: 'bg-pink-900/30', text: 'text-pink-300', tabActive: 'bg-pink-600', tabInactive: 'bg-gray-800 hover:bg-pink-900/50' },
    blue:   { border: 'border-blue-400', bg: 'bg-blue-900/30', text: 'text-blue-300', tabActive: 'bg-blue-600', tabInactive: 'bg-gray-800 hover:bg-blue-900/50' },
    purple: { border: 'border-purple-400', bg: 'bg-purple-900/30', text: 'text-purple-300', tabActive: 'bg-purple-600', tabInactive: 'bg-gray-800 hover:bg-purple-900/50' },
  }

  const activeMethod = methods[activeTab]

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-12' : 'p-8'}`}>
      <div className="mb-6 text-center">
        <h2 className={`${isPresenting ? 'text-6xl' : 'text-4xl'} font-black text-white mb-2`}>Control Methods</h2>
        <p className={`${isPresenting ? 'text-2xl' : ''} text-gray-400`}>Click each tab to explore the control methods</p>
      </div>

      {/* Tab Buttons */}
      <div className={`flex max-w-5xl mx-auto w-full ${isPresenting ? 'gap-3 mb-6' : 'gap-2 mb-4'}`}>
        {methods.map((m, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`flex-1 flex items-center justify-center gap-2 ${isPresenting ? 'py-4 px-4' : 'py-3 px-3'} rounded-t-xl font-bold transition-all ${
              activeTab === i 
                ? `${colorMap[m.color].tabActive} text-white scale-105` 
                : `${colorMap[m.color].tabInactive} ${colorMap[m.color].text}`
            }`}
          >
            {m.icon}
            <span className={isPresenting ? 'text-lg' : 'text-sm'}>{m.title.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      {/* Content Panel */}
      <div className={`max-w-5xl mx-auto w-full rounded-2xl border-2 ${colorMap[activeMethod.color].border} ${colorMap[activeMethod.color].bg} ${isPresenting ? 'p-8' : 'p-6'} animate-fadeIn`}>
        <div className="flex items-center gap-4 mb-4">
          <div className={`${isPresenting ? 'w-16 h-16' : 'w-12 h-12'} rounded-full ${colorMap[activeMethod.color].bg} border ${colorMap[activeMethod.color].border} flex items-center justify-center ${colorMap[activeMethod.color].text}`}>
            {activeMethod.icon}
          </div>
          <div>
            <h3 className={`${isPresenting ? 'text-3xl' : 'text-2xl'} font-bold ${colorMap[activeMethod.color].text}`}>{activeMethod.title}</h3>
            <p className={`${isPresenting ? 'text-lg' : 'text-sm'} text-gray-400`}>Controls: {activeMethod.controls}</p>
          </div>
        </div>

        <p className={`text-gray-200 ${isPresenting ? 'text-2xl mb-6' : 'text-base mb-4'} leading-relaxed`}>{activeMethod.desc}</p>

        <div className={`${colorMap[activeMethod.color].bg} border ${colorMap[activeMethod.color].border} rounded-xl ${isPresenting ? 'p-5' : 'p-4'}`}>
          <span className={`${isPresenting ? 'text-xl' : 'text-base'} ${colorMap[activeMethod.color].text} font-bold`}>📋 Example: </span>
          <span className={`${isPresenting ? 'text-xl' : 'text-base'} text-gray-200`}>{activeMethod.example}</span>
        </div>
      </div>

      {/* Navigation hint */}
      <div className="flex justify-center mt-4">
        <p className={`text-gray-500 ${isPresenting ? 'text-lg' : 'text-sm'}`}>
          {activeTab + 1} of {methods.length} • Click tabs to navigate
        </p>
      </div>
    </div>
  )
}

// Control Methods Match Game
const ControlMethodsMatchGame: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [matched, setMatched] = useState<Record<number, string | null>>({})
  const [showAnswers, setShowAnswers] = useState(false)

  const problems = [
    { id: 1, problem: "Testing room is noisy for one group but quiet for another", solution: "Standardised Procedures", color: "cyan" },
    { id: 2, problem: "One group has mostly intelligent participants", solution: "Random Allocation", color: "pink" },
    { id: 3, problem: "Researcher gives more hints to experimental group", solution: "Standardised Instructions", color: "blue" },
    { id: 4, problem: "Participants get tired doing Condition A before B", solution: "Counterbalancing", color: "purple" },
  ]

  const solutions = ["Standardised Procedures", "Random Allocation", "Standardised Instructions", "Counterbalancing"]

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-10' : 'p-6'}`}>
      <h2 className={`${isPresenting ? 'text-4xl' : 'text-2xl'} font-black text-white mb-2`}>Match the Control Method</h2>
      <p className={`${isPresenting ? 'text-xl' : ''} text-gray-400 mb-6`}>For each problem, select the best control method.</p>

      <div className="space-y-4 flex-1">
        {problems.map((p) => (
          <div key={p.id} className={`rounded-xl border border-gray-700 bg-gray-900/60 ${isPresenting ? 'p-5' : 'p-4'} flex items-center gap-4`}>
            <div className="flex-1">
              <p className={`${isPresenting ? 'text-xl' : ''} text-gray-200`}>{p.problem}</p>
            </div>
            <select
              value={matched[p.id] || ''}
              onChange={(e) => setMatched({ ...matched, [p.id]: e.target.value })}
              disabled={showAnswers}
              className={`${isPresenting ? 'text-lg p-3' : 'p-2'} rounded-lg bg-gray-800 border border-gray-600 text-white ${showAnswers && matched[p.id] === p.solution ? 'border-green-500 bg-green-900/30' : showAnswers && matched[p.id] ? 'border-red-500 bg-red-900/30' : ''}`}
            >
              <option value="">Select...</option>
              {solutions.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            {showAnswers && (
              <span className={`${isPresenting ? 'text-lg' : 'text-sm'} font-bold ${matched[p.id] === p.solution ? 'text-green-400' : 'text-red-400'}`}>
                {matched[p.id] === p.solution ? '✓' : `✗ ${p.solution}`}
              </span>
            )}
          </div>
        ))}
      </div>

      {!showAnswers && Object.keys(matched).length === problems.length && (
        <button onClick={() => setShowAnswers(true)} className="mt-4 px-8 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg mx-auto">
          Check Answers
        </button>
      )}
    </div>
  )
}

// Control Methods Design Task
const ControlMethodsDesignTask: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [showSolution, setShowSolution] = useState(false)

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-10' : 'p-6'}`}>
      <h2 className={`${isPresenting ? 'text-4xl' : 'text-2xl'} font-black text-white mb-2`}>Design Task: Apply Control Methods</h2>
      <p className={`${isPresenting ? 'text-xl' : ''} text-gray-400 mb-4`}>Read the scenario and suggest how to control extraneous variables.</p>

      <div className={`bg-gray-800/60 rounded-xl border border-gray-700 ${isPresenting ? 'p-6' : 'p-4'} mb-4`}>
        <h3 className={`${isPresenting ? 'text-2xl' : 'text-lg'} font-bold text-red-300 mb-2`}>Scenario</h3>
        <p className={`${isPresenting ? 'text-xl' : ''} text-gray-200 leading-relaxed`}>
          A psychologist wants to investigate whether watching violent video games increases aggression. They have 20 participants: 10 will play violent games for 30 minutes, 10 will play non-violent games. Aggression is measured by counting aggressive words used in a story-writing task afterwards.
        </p>
      </div>

      <div className={`bg-gray-800/40 rounded-xl border border-gray-700 ${isPresenting ? 'p-5' : 'p-4'} mb-4`}>
        <h4 className={`${isPresenting ? 'text-xl' : ''} font-bold text-yellow-300 mb-3`}>Your Task:</h4>
        <ul className={`space-y-2 ${isPresenting ? 'text-lg' : ''} text-gray-300`}>
          <li>1. Identify <span className="text-red-300 font-semibold">TWO potential extraneous variables</span></li>
          <li>2. Explain how you would use <span className="text-cyan-300 font-semibold">standardised procedures</span></li>
          <li>3. Explain how you would use <span className="text-pink-300 font-semibold">random allocation</span></li>
        </ul>
      </div>

      <button onClick={() => setShowSolution(!showSolution)} className={`${isPresenting ? 'text-lg py-3' : 'py-2'} px-6 rounded-lg font-bold transition-all ${showSolution ? 'bg-gray-700 text-gray-300' : 'bg-green-600 hover:bg-green-500 text-white'}`}>
        {showSolution ? 'Hide Model Answer' : 'Show Model Answer'}
      </button>

      {showSolution && (
        <div className={`mt-4 bg-green-900/20 border border-green-500/30 rounded-xl ${isPresenting ? 'p-6' : 'p-4'} animate-fadeIn`}>
          <h4 className={`${isPresenting ? 'text-xl' : ''} font-bold text-green-400 mb-3`}>Model Answer</h4>
          <div className={`space-y-3 ${isPresenting ? 'text-lg' : 'text-sm'} text-gray-200`}>
            <p><span className="text-red-300 font-semibold">EVs:</span> Pre-existing aggression levels, prior gaming experience, time of day, mood, tiredness.</p>
            <p><span className="text-cyan-300 font-semibold">Standardised Procedures:</span> Test all participants in the same room, at the same time of day, with the same volume, same seating position, same duration (30 mins).</p>
            <p><span className="text-pink-300 font-semibold">Random Allocation:</span> Use a random number generator or coin flip to assign each participant to violent or non-violent condition, spreading individual differences across both groups.</p>
          </div>
        </div>
      )}
    </div>
  )
}

// Lesson 2 Extended Exam Task
const Lesson2ExtendedExamTask: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [showTips, setShowTips] = useState(false)
  
  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-10' : 'p-8'}`}>
      <h2 className={`${isPresenting ? 'text-4xl' : 'text-3xl'} font-black text-white mb-2`}>Extended Task: Exam Practice</h2>
      <p className={`${isPresenting ? 'text-xl' : ''} text-gray-400 mb-4`}>Apply your knowledge of extraneous variables and control methods.</p>
  
      <div className={`bg-gray-900/70 border border-gray-700 rounded-2xl ${isPresenting ? 'p-6' : 'p-5'} mb-4`}>
        <h3 className={`${isPresenting ? 'text-2xl' : 'text-xl'} font-bold text-red-300 mb-3`}>Scenario</h3>
        <p className={`${isPresenting ? 'text-xl' : ''} text-gray-200 leading-relaxed`}>
          A psychologist wants to investigate whether watching violent video games increases aggression. They have 20 participants: 10 play violent games for 30 minutes, 10 play non-violent games. Aggression is measured by counting the number of aggressive words used in a story-writing task.
        </p>
      </div>
  
      <div className={`bg-gray-900/70 border border-gray-700 rounded-xl ${isPresenting ? 'p-5' : 'p-4'} mb-4`}>
        <h4 className={`${isPresenting ? 'text-lg' : 'text-sm'} font-bold text-green-400 uppercase mb-3`}>Exam Questions</h4>
        <ul className={`space-y-2 ${isPresenting ? 'text-lg' : ''} text-gray-200`}>
          <li><span className="text-gray-500 font-mono">[1]</span> Identify ONE potential extraneous variable in this study.</li>
          <li><span className="text-gray-500 font-mono">[2]</span> Explain how random allocation could be used in this study.</li>
          <li><span className="text-gray-500 font-mono">[2]</span> Explain one way the researcher could use standardised procedures.</li>
        </ul>
      </div>

      <button
        onClick={() => setShowTips(!showTips)}
        className={`w-full ${isPresenting ? 'py-3 text-lg' : 'py-2'} mb-4 rounded-lg font-bold transition-all bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white`}
      >
        {showTips ? '✕ Hide Model Answers' : '+ Show Model Answers'}
      </button>

      {showTips && (
        <div className={`bg-green-900/30 border-2 border-green-500/30 rounded-xl ${isPresenting ? 'p-5' : 'p-4'} animate-fadeIn`}>
          <h4 className={`${isPresenting ? 'text-lg' : 'text-sm'} font-bold text-green-300 uppercase mb-3`}>Model Answers</h4>
          <div className={`space-y-4 ${isPresenting ? 'text-lg' : 'text-sm'} text-green-100`}>
            <div>
              <span className="font-semibold text-green-300">[1] EV:</span>
              <p>Participant variables such as pre-existing levels of aggression / time of day / room temperature / prior gaming experience.</p>
            </div>
            <div>
              <span className="font-semibold text-green-300">[2] Random Allocation:</span>
              <p>Each participant could be assigned to violent or non-violent condition by flipping a coin <span className="text-gray-400">(1 mark)</span>. This ensures participant variables are evenly distributed across both conditions, preventing systematic bias <span className="text-gray-400">(1 mark)</span>.</p>
            </div>
            <div>
              <span className="font-semibold text-green-300">[2] Standardised Procedures:</span>
              <p>The researcher could ensure all participants are tested in the same room with the same lighting and temperature <span className="text-gray-400">(1 mark)</span>. This means any differences in aggression scores are more likely to be due to the type of game played rather than environmental factors <span className="text-gray-400">(1 mark)</span>.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Extended task card for exam-style question
const ExtendedExamTask: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [showTips, setShowTips] = useState(false)
  
  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-8'}`}>
      <h2 className={`font-black text-white ${isPresenting ? 'text-2xl mb-1' : 'text-4xl mb-2'}`}>Extended Task: Exam-Style</h2>
      <p className={`text-gray-400 ${isPresenting ? 'text-sm mb-4' : 'mb-6'}`}>Apply what you learned about hypotheses and variables.</p>
  
      <div className={`bg-gray-900/70 border border-gray-700 rounded-2xl ${isPresenting ? 'p-4 mb-4' : 'p-6 mb-6'}`}>
        <h3 className={`font-bold text-pink-300 ${isPresenting ? 'text-lg mb-2' : 'text-2xl mb-3'}`}>Scenario</h3>
        <p className={`text-gray-200 leading-relaxed ${isPresenting ? 'text-sm' : ''}`}>
          A psychologist wants to investigate whether background music affects concentration during revision. She plays classical music to one group of students while they revise, and no music to another group. Both groups then complete the same memory test.
        </p>
      </div>
  
      <div className={`bg-gray-900/70 border border-gray-700 rounded-xl ${isPresenting ? 'p-3 mb-4' : 'p-4 mb-6'}`}>
        <h4 className={`font-bold text-green-400 uppercase ${isPresenting ? 'text-xs mb-2' : 'text-sm mb-3'}`}>Required Tasks</h4>
        <ul className={`text-gray-200 grid grid-cols-2 ${isPresenting ? 'text-xs gap-2' : 'text-sm gap-4 space-y-2'}`}>
          <li>• State the IV and DV</li>
          <li>• Write null and alternative hypotheses</li>
          <li>• Identify two extraneous variables to control</li>
          <li>• Suggest an ethical safeguard</li>
          <li>• Outline the procedure</li>
          <li>• Explain what "fair test" means here</li>
        </ul>
      </div>

      <button
        onClick={() => setShowTips(!showTips)}
        className={`w-full rounded-lg font-bold transition-all bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white ${isPresenting ? 'py-2 mb-3 text-sm' : 'py-3 mb-4'}`}
      >
        {showTips ? '✕ Hide Exam Tips' : '+ Show Exam Tips'}
      </button>

      {showTips && (
        <div className={`bg-blue-900/30 border-2 border-blue-500/30 rounded-xl animate-fadeIn ${isPresenting ? 'p-3 mb-3' : 'p-4 mb-4'}`}>
          <h4 className={`font-bold text-blue-300 uppercase ${isPresenting ? 'text-xs mb-2' : 'text-sm mb-3'}`}>Exam Tips</h4>
          <div className={`text-blue-100 ${isPresenting ? 'text-xs space-y-1' : 'text-sm space-y-2'}`}>
            <div className="flex gap-2">
              <span className="font-semibold text-blue-300 min-w-fit">• H₀ (Null):</span>
              <p>No effect / no difference. E.g., "There will be no difference in memory test scores..."</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-blue-300 min-w-fit">• H₁ (Alt):</span>
              <p>Predicts an effect. E.g., "Students revising with music will score lower..."</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-blue-300 min-w-fit">• Extraneous:</span>
              <p>Prior knowledge, intelligence, educational level, time of day, room temperature, music volume.</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-blue-300 min-w-fit">• Controls:</span>
              <p>Keep fair by controlling confounding variables. Only music should vary between groups.</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-blue-300 min-w-fit">• Ethics:</span>
              <p>Informed consent, right to withdraw, debriefing, confidentiality.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ============= GCSE LESSON 3: TYPES OF EXPERIMENT =============

// Lab Experiment Teaching Slide
// Laboratory Experiments - Spotlight Cards Style
const LabExperimentTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [spotlight, setSpotlight] = useState<number | null>(null)

  const sections = [
    { 
      id: 0,
      title: 'What is a Lab Experiment?', 
      icon: <Beaker size={isPresenting ? 28 : 24} />, 
      color: 'blue',
      content: [
        { text: 'Conducted in a', highlight: 'controlled artificial environment' },
        { text: 'The IV is', highlight: 'directly manipulated by the researcher' },
        { text: 'All', highlight: 'extraneous variables are controlled' },
        { text: 'Participants', highlight: 'know they are in a study' }
      ]
    },
    { 
      id: 1,
      title: 'Example Study', 
      icon: <BookOpen size={isPresenting ? 28 : 24} />, 
      color: 'purple',
      study: { name: 'Loftus & Palmer (1974)', desc: 'Studied how leading questions affect memory recall. Participants watched car crash videos in a lab, then were asked questions with different verbs (smashed/hit/bumped).' }
    },
    { 
      id: 2,
      title: '✓ Strengths', 
      icon: <CheckCircle size={isPresenting ? 28 : 24} />, 
      color: 'green',
      content: [
        { text: '', highlight: 'High control over extraneous variables' },
        { text: '', highlight: 'Easy to replicate due to standardised procedures' },
        { text: 'Can establish', highlight: 'cause and effect' }
      ]
    },
    { 
      id: 3,
      title: '✗ Limitations', 
      icon: <XCircle size={isPresenting ? 28 : 24} />, 
      color: 'red',
      content: [
        { text: '', highlight: 'Low ecological validity - artificial setting' },
        { text: '', highlight: 'Demand characteristics - participants may guess the aim' },
        { text: 'Results may not', highlight: 'generalise to real life' }
      ]
    }
  ]

  const colorMap: Record<string, { border: string, bg: string, text: string, bgActive: string }> = {
    blue:   { border: 'border-blue-500', bg: 'bg-blue-900/20', text: 'text-blue-300', bgActive: 'bg-blue-900/50' },
    purple: { border: 'border-purple-500', bg: 'bg-purple-900/20', text: 'text-purple-300', bgActive: 'bg-purple-900/50' },
    green:  { border: 'border-green-500', bg: 'bg-green-900/20', text: 'text-green-300', bgActive: 'bg-green-900/50' },
    red:    { border: 'border-red-500', bg: 'bg-red-900/20', text: 'text-red-300', bgActive: 'bg-red-900/50' },
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-8' : 'p-8'}`}>
      <div className="mb-4 text-center">
        <h2 className={`${isPresenting ? 'text-5xl' : 'text-4xl'} font-black text-white mb-2`}>Laboratory Experiments</h2>
        <p className={`${isPresenting ? 'text-xl' : 'text-base'} text-gray-400`}>Click each card to spotlight • Click again to dim</p>
      </div>

      <div className={`grid grid-cols-2 flex-1 max-w-6xl mx-auto w-full ${isPresenting ? 'gap-5' : 'gap-4'}`}>
        {sections.map((s) => (
          <div
            key={s.id}
            onClick={() => setSpotlight(spotlight === s.id ? null : s.id)}
            className={`rounded-xl border-2 ${colorMap[s.color].border} cursor-pointer transition-all duration-300 ${isPresenting ? 'p-5' : 'p-4'} ${
              spotlight === null 
                ? colorMap[s.color].bg
                : spotlight === s.id 
                  ? `${colorMap[s.color].bgActive} scale-[1.02] shadow-lg shadow-${s.color}-500/30` 
                  : 'bg-gray-900/50 opacity-40 scale-95'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`${colorMap[s.color].text}`}>{s.icon}</div>
              <h3 className={`${isPresenting ? 'text-2xl' : 'text-xl'} font-bold ${colorMap[s.color].text}`}>{s.title}</h3>
            </div>
            
            {s.content && (
              <ul className={`space-y-2 ${isPresenting ? 'text-lg' : 'text-sm'}`}>
                {s.content.map((item, i) => (
                  <li key={i} className="text-gray-200">
                    • {item.text} <span className={`font-bold ${colorMap[s.color].text}`}>{item.highlight}</span>
                  </li>
                ))}
              </ul>
            )}
            
            {s.study && (
              <div className={`bg-gray-900/50 rounded-lg ${isPresenting ? 'p-4' : 'p-3'}`}>
                <p className={`${isPresenting ? 'text-lg' : 'text-sm'} text-gray-200`}>
                  <span className={`font-bold ${colorMap[s.color].text}`}>{s.study.name}</span> - {s.study.desc}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Lab Experiment AFL Questions
const LabExperimentAFL: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const questions = [
    {
      question: "What makes a lab experiment different from other experiments?",
      options: ["It's conducted in a natural setting", "The IV is manipulated in a controlled artificial environment", "There is no control over variables", "Participants don't know they're being studied"],
      correct: 1,
      explanation: "Lab experiments are conducted in controlled artificial environments where the researcher directly manipulates the IV."
    },
    {
      question: "Which is a strength of lab experiments?",
      options: ["High ecological validity", "Natural participant behaviour", "High control over extraneous variables", "No demand characteristics"],
      correct: 2,
      explanation: "Lab experiments allow researchers to control extraneous variables, making it easier to establish cause and effect."
    },
    {
      question: "Why might lab experiments have low ecological validity?",
      options: ["They are too expensive", "The artificial setting doesn't reflect real life", "There are too many participants", "The IV cannot be measured"],
      correct: 1,
      explanation: "The artificial environment of a lab may not reflect how people behave in real-world situations."
    }
  ]

  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)

  const handleSelect = (idx: number) => {
    if (showFeedback) return
    setSelected(idx)
    setShowFeedback(true)
    if (idx === questions[currentQ].correct) setScore(s => s + 1)
  }

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(q => q + 1)
      setSelected(null)
      setShowFeedback(false)
    }
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Check Your Understanding</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Lab Experiments - Question {currentQ + 1} of {questions.length}</p>
      </div>

      <div className={`flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full`}>
        <div className={`bg-gray-800/50 rounded-xl border border-gray-700 ${isPresenting ? 'p-6' : 'p-8'} mb-6`}>
          <p className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-white mb-6`}>{questions[currentQ].question}</p>
          
          <div className="grid grid-cols-1 gap-3">
            {questions[currentQ].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`p-4 rounded-lg text-left transition-all ${isPresenting ? 'text-sm' : 'text-base'} ${
                  showFeedback
                    ? idx === questions[currentQ].correct
                      ? 'bg-green-600/30 border-2 border-green-500 text-green-200'
                      : idx === selected
                      ? 'bg-red-600/30 border-2 border-red-500 text-red-200'
                      : 'bg-gray-700/30 border border-gray-600 text-gray-400'
                    : selected === idx
                    ? 'bg-blue-600/30 border-2 border-blue-500 text-white'
                    : 'bg-gray-700/50 border border-gray-600 text-gray-200 hover:bg-gray-700'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {showFeedback && (
            <div className={`mt-6 p-4 rounded-lg ${selected === questions[currentQ].correct ? 'bg-green-900/30 border border-green-600' : 'bg-amber-900/30 border border-amber-600'}`}>
              <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200`}>{questions[currentQ].explanation}</p>
            </div>
          )}
        </div>

        {showFeedback && currentQ < questions.length - 1 && (
          <button onClick={nextQuestion} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg self-center">
            Next Question →
          </button>
        )}

        {showFeedback && currentQ === questions.length - 1 && (
          <div className="text-center">
            <p className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-white`}>
              Score: {score}/{questions.length}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

// Field Experiment Teaching Slide - Spotlight Cards Style
const FieldExperimentTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [spotlight, setSpotlight] = useState<number | null>(null)

  const sections = [
    { 
      id: 0,
      title: 'What is a Field Experiment?', 
      icon: <MapPin size={isPresenting ? 28 : 24} />, 
      color: 'emerald',
      content: [
        { text: 'Conducted in a', highlight: 'natural environment (school, street, workplace)' },
        { text: 'The IV is still', highlight: 'manipulated by the researcher' },
        { text: 'Participants may', highlight: 'not know they\'re being studied' },
        { text: '', highlight: 'Less control over extraneous variables' }
      ]
    },
    { 
      id: 1,
      title: 'Example Study', 
      icon: <BookOpen size={isPresenting ? 28 : 24} />, 
      color: 'amber',
      study: { name: 'Piliavin et al. (1969)', desc: 'The subway study. Researchers staged someone collapsing on a New York subway to see if people would help. The IV was whether the person appeared drunk or carried a cane.' }
    },
    { 
      id: 2,
      title: '✓ Strengths', 
      icon: <CheckCircle size={isPresenting ? 28 : 24} />, 
      color: 'green',
      content: [
        { text: '', highlight: 'High ecological validity - real-world behaviour' },
        { text: '', highlight: 'Fewer demand characteristics if participants are unaware' },
        { text: 'Results more likely to', highlight: 'generalise' }
      ]
    },
    { 
      id: 3,
      title: '✗ Limitations', 
      icon: <XCircle size={isPresenting ? 28 : 24} />, 
      color: 'red',
      content: [
        { text: '', highlight: 'Less control over extraneous variables' },
        { text: '', highlight: 'Harder to replicate' },
        { text: '', highlight: 'Ethical issues - consent may not be possible' }
      ]
    }
  ]

  const colorMap: Record<string, { border: string, bg: string, text: string, bgActive: string }> = {
    emerald: { border: 'border-emerald-500', bg: 'bg-emerald-900/20', text: 'text-emerald-300', bgActive: 'bg-emerald-900/50' },
    amber:   { border: 'border-amber-500', bg: 'bg-amber-900/20', text: 'text-amber-300', bgActive: 'bg-amber-900/50' },
    green:   { border: 'border-green-500', bg: 'bg-green-900/20', text: 'text-green-300', bgActive: 'bg-green-900/50' },
    red:     { border: 'border-red-500', bg: 'bg-red-900/20', text: 'text-red-300', bgActive: 'bg-red-900/50' },
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-8' : 'p-8'}`}>
      <div className="mb-4 text-center">
        <h2 className={`${isPresenting ? 'text-5xl' : 'text-4xl'} font-black text-white mb-2`}>Field Experiments</h2>
        <p className={`${isPresenting ? 'text-xl' : 'text-base'} text-gray-400`}>Click each card to spotlight • Click again to dim</p>
      </div>

      <div className={`grid grid-cols-2 flex-1 max-w-6xl mx-auto w-full ${isPresenting ? 'gap-5' : 'gap-4'}`}>
        {sections.map((s) => (
          <div
            key={s.id}
            onClick={() => setSpotlight(spotlight === s.id ? null : s.id)}
            className={`rounded-xl border-2 ${colorMap[s.color].border} cursor-pointer transition-all duration-300 ${isPresenting ? 'p-5' : 'p-4'} ${
              spotlight === null 
                ? colorMap[s.color].bg
                : spotlight === s.id 
                  ? `${colorMap[s.color].bgActive} scale-[1.02] shadow-lg` 
                  : 'bg-gray-900/50 opacity-40 scale-95'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`${colorMap[s.color].text}`}>{s.icon}</div>
              <h3 className={`${isPresenting ? 'text-2xl' : 'text-xl'} font-bold ${colorMap[s.color].text}`}>{s.title}</h3>
            </div>
            
            {s.content && (
              <ul className={`space-y-2 ${isPresenting ? 'text-lg' : 'text-sm'}`}>
                {s.content.map((item, i) => (
                  <li key={i} className="text-gray-200">
                    • {item.text} <span className={`font-bold ${colorMap[s.color].text}`}>{item.highlight}</span>
                  </li>
                ))}
              </ul>
            )}
            
            {s.study && (
              <div className={`bg-gray-900/50 rounded-lg ${isPresenting ? 'p-4' : 'p-3'}`}>
                <p className={`${isPresenting ? 'text-lg' : 'text-sm'} text-gray-200`}>
                  <span className={`font-bold ${colorMap[s.color].text}`}>{s.study.name}</span> - {s.study.desc}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Field Experiment AFL
const FieldExperimentAFL: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const questions = [
    {
      question: "What is the key feature of a field experiment?",
      options: ["It takes place in a laboratory", "The IV is manipulated in a natural environment", "No variables are controlled", "All participants give informed consent"],
      correct: 1,
      explanation: "Field experiments take place in natural settings like schools or streets, but the researcher still manipulates the IV."
    },
    {
      question: "Why might participants in a field experiment behave more naturally?",
      options: ["Because the setting is more comfortable", "Because they may not know they're being studied", "Because there are more participants", "Because the experiment takes longer"],
      correct: 1,
      explanation: "When participants don't know they're in a study, they're less likely to change their behaviour (fewer demand characteristics)."
    },
    {
      question: "Why are field experiments harder to replicate than lab experiments?",
      options: ["They cost more money", "They have fewer participants", "There's less control over extraneous variables", "The IV is harder to measure"],
      correct: 2,
      explanation: "Natural settings have many uncontrollable variables, making it difficult to exactly recreate conditions."
    }
  ]

  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)

  const handleSelect = (idx: number) => {
    if (showFeedback) return
    setSelected(idx)
    setShowFeedback(true)
    if (idx === questions[currentQ].correct) setScore(s => s + 1)
  }

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(q => q + 1)
      setSelected(null)
      setShowFeedback(false)
    }
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Check Your Understanding</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Field Experiments - Question {currentQ + 1} of {questions.length}</p>
      </div>

      <div className={`flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full`}>
        <div className={`bg-gray-800/50 rounded-xl border border-gray-700 ${isPresenting ? 'p-6' : 'p-8'} mb-6`}>
          <p className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-white mb-6`}>{questions[currentQ].question}</p>
          
          <div className="grid grid-cols-1 gap-3">
            {questions[currentQ].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`p-4 rounded-lg text-left transition-all ${isPresenting ? 'text-sm' : 'text-base'} ${
                  showFeedback
                    ? idx === questions[currentQ].correct
                      ? 'bg-green-600/30 border-2 border-green-500 text-green-200'
                      : idx === selected
                      ? 'bg-red-600/30 border-2 border-red-500 text-red-200'
                      : 'bg-gray-700/30 border border-gray-600 text-gray-400'
                    : selected === idx
                    ? 'bg-blue-600/30 border-2 border-blue-500 text-white'
                    : 'bg-gray-700/50 border border-gray-600 text-gray-200 hover:bg-gray-700'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {showFeedback && (
            <div className={`mt-6 p-4 rounded-lg ${selected === questions[currentQ].correct ? 'bg-green-900/30 border border-green-600' : 'bg-amber-900/30 border border-amber-600'}`}>
              <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200`}>{questions[currentQ].explanation}</p>
            </div>
          )}
        </div>

        {showFeedback && currentQ < questions.length - 1 && (
          <button onClick={nextQuestion} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg self-center">
            Next Question →
          </button>
        )}

        {showFeedback && currentQ === questions.length - 1 && (
          <div className="text-center">
            <p className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-white`}>
              Score: {score}/{questions.length}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

// Natural Experiment Teaching Slide - Spotlight Cards Style
const NaturalExperimentTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [spotlight, setSpotlight] = useState<number | null>(null)

  const sections = [
    { 
      id: 0,
      title: 'What is a Natural Experiment?', 
      icon: <Eye size={isPresenting ? 28 : 24} />, 
      color: 'cyan',
      content: [
        { text: 'The IV is', highlight: 'NOT manipulated by the researcher' },
        { text: 'The IV', highlight: 'occurs naturally (e.g., gender, age, disaster)' },
        { text: 'Researcher simply', highlight: 'measures the effect on the DV' },
        { text: 'Allows study of variables that', highlight: 'can\'t be ethically manipulated' }
      ]
    },
    { 
      id: 1,
      title: 'Example Study', 
      icon: <BookOpen size={isPresenting ? 28 : 24} />, 
      color: 'rose',
      study: { name: 'Hodges & Tizard (1989)', desc: 'Studied effects of early institutional care on attachment. The IV (being raised in an institution) occurred naturally - researchers couldn\'t ethically place children in institutions.' }
    },
    { 
      id: 2,
      title: '✓ Strengths', 
      icon: <CheckCircle size={isPresenting ? 28 : 24} />, 
      color: 'green',
      content: [
        { text: '', highlight: 'High ecological validity' },
        { text: 'Can study variables', highlight: 'impossible to manipulate ethically' },
        { text: 'Participants may be', highlight: 'unaware of being studied' }
      ]
    },
    { 
      id: 3,
      title: '✗ Limitations', 
      icon: <XCircle size={isPresenting ? 28 : 24} />, 
      color: 'red',
      content: [
        { text: '', highlight: 'Cannot establish cause and effect' },
        { text: 'Natural events may be', highlight: 'rare or unpredictable' },
        { text: '', highlight: 'No control over participant allocation' }
      ]
    }
  ]

  const colorMap: Record<string, { border: string, bg: string, text: string, bgActive: string }> = {
    cyan:  { border: 'border-cyan-500', bg: 'bg-cyan-900/20', text: 'text-cyan-300', bgActive: 'bg-cyan-900/50' },
    rose:  { border: 'border-rose-500', bg: 'bg-rose-900/20', text: 'text-rose-300', bgActive: 'bg-rose-900/50' },
    green: { border: 'border-green-500', bg: 'bg-green-900/20', text: 'text-green-300', bgActive: 'bg-green-900/50' },
    red:   { border: 'border-red-500', bg: 'bg-red-900/20', text: 'text-red-300', bgActive: 'bg-red-900/50' },
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-8' : 'p-8'}`}>
      <div className="mb-4 text-center">
        <h2 className={`${isPresenting ? 'text-5xl' : 'text-4xl'} font-black text-white mb-2`}>Natural Experiments</h2>
        <p className={`${isPresenting ? 'text-xl' : 'text-base'} text-gray-400`}>Click each card to spotlight • Click again to dim</p>
      </div>

      <div className={`grid grid-cols-2 flex-1 max-w-6xl mx-auto w-full ${isPresenting ? 'gap-5' : 'gap-4'}`}>
        {sections.map((s) => (
          <div
            key={s.id}
            onClick={() => setSpotlight(spotlight === s.id ? null : s.id)}
            className={`rounded-xl border-2 ${colorMap[s.color].border} cursor-pointer transition-all duration-300 ${isPresenting ? 'p-5' : 'p-4'} ${
              spotlight === null 
                ? colorMap[s.color].bg
                : spotlight === s.id 
                  ? `${colorMap[s.color].bgActive} scale-[1.02] shadow-lg` 
                  : 'bg-gray-900/50 opacity-40 scale-95'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`${colorMap[s.color].text}`}>{s.icon}</div>
              <h3 className={`${isPresenting ? 'text-2xl' : 'text-xl'} font-bold ${colorMap[s.color].text}`}>{s.title}</h3>
            </div>
            
            {s.content && (
              <ul className={`space-y-2 ${isPresenting ? 'text-lg' : 'text-sm'}`}>
                {s.content.map((item, i) => (
                  <li key={i} className="text-gray-200">
                    • {item.text} <span className={`font-bold ${colorMap[s.color].text}`}>{item.highlight}</span>
                  </li>
                ))}
              </ul>
            )}
            
            {s.study && (
              <div className={`bg-gray-900/50 rounded-lg ${isPresenting ? 'p-4' : 'p-3'}`}>
                <p className={`${isPresenting ? 'text-lg' : 'text-sm'} text-gray-200`}>
                  <span className={`font-bold ${colorMap[s.color].text}`}>{s.study.name}</span> - {s.study.desc}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={`rounded-xl border-2 border-yellow-500/40 bg-yellow-900/20 ${isPresenting ? 'p-4 mt-4' : 'p-3 mt-3'} max-w-6xl mx-auto w-full`}>
        <p className={`${isPresenting ? 'text-base' : 'text-sm'} text-yellow-200`}>
          <span className="font-bold">⚠️ Key Distinction:</span> In natural experiments, the researcher does NOT manipulate the IV. This is what makes them different from lab and field experiments.
        </p>
      </div>
    </div>
  )
}

// Natural Experiment AFL
const NaturalExperimentAFL: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const questions = [
    {
      question: "What makes a natural experiment different from lab and field experiments?",
      options: ["It takes place outdoors", "The researcher does not manipulate the IV", "It uses more participants", "It has higher reliability"],
      correct: 1,
      explanation: "In natural experiments, the IV occurs naturally and is not directly controlled by the researcher."
    },
    {
      question: "Why are natural experiments useful for studying sensitive topics?",
      options: ["They're cheaper to run", "They're quicker to complete", "They allow study of variables that can't ethically be manipulated", "They have fewer participants"],
      correct: 2,
      explanation: "Some variables (like trauma or institutional care) cannot ethically be created by researchers - natural experiments allow us to study their effects."
    },
    {
      question: "Why can't natural experiments establish cause and effect?",
      options: ["The sample size is too small", "The researcher doesn't control the IV or participant allocation", "They don't measure the DV", "They take too long"],
      correct: 1,
      explanation: "Without controlling the IV and how participants are allocated, we can't be certain the IV caused changes in the DV."
    }
  ]

  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)

  const handleSelect = (idx: number) => {
    if (showFeedback) return
    setSelected(idx)
    setShowFeedback(true)
    if (idx === questions[currentQ].correct) setScore(s => s + 1)
  }

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(q => q + 1)
      setSelected(null)
      setShowFeedback(false)
    }
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Check Your Understanding</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Natural Experiments - Question {currentQ + 1} of {questions.length}</p>
      </div>

      <div className={`flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full`}>
        <div className={`bg-gray-800/50 rounded-xl border border-gray-700 ${isPresenting ? 'p-6' : 'p-8'} mb-6`}>
          <p className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-white mb-6`}>{questions[currentQ].question}</p>
          
          <div className="grid grid-cols-1 gap-3">
            {questions[currentQ].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`p-4 rounded-lg text-left transition-all ${isPresenting ? 'text-sm' : 'text-base'} ${
                  showFeedback
                    ? idx === questions[currentQ].correct
                      ? 'bg-green-600/30 border-2 border-green-500 text-green-200'
                      : idx === selected
                      ? 'bg-red-600/30 border-2 border-red-500 text-red-200'
                      : 'bg-gray-700/30 border border-gray-600 text-gray-400'
                    : selected === idx
                    ? 'bg-blue-600/30 border-2 border-blue-500 text-white'
                    : 'bg-gray-700/50 border border-gray-600 text-gray-200 hover:bg-gray-700'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {showFeedback && (
            <div className={`mt-6 p-4 rounded-lg ${selected === questions[currentQ].correct ? 'bg-green-900/30 border border-green-600' : 'bg-amber-900/30 border border-amber-600'}`}>
              <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200`}>{questions[currentQ].explanation}</p>
            </div>
          )}
        </div>

        {showFeedback && currentQ < questions.length - 1 && (
          <button onClick={nextQuestion} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg self-center">
            Next Question →
          </button>
        )}

        {showFeedback && currentQ === questions.length - 1 && (
          <div className="text-center">
            <p className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-white`}>
              Score: {score}/{questions.length}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

// Interactive Experiment Types Comparison Slide
const ExperimentTypesInteractiveSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [selectedType, setSelectedType] = useState<'lab' | 'field' | 'natural' | null>(null)

  const experimentTypes = {
    lab: {
      title: 'Lab Experiment',
      color: 'blue',
      icon: <Beaker size={isPresenting ? 32 : 24} />,
      control: 'High',
      validity: 'Low',
      ivManipulated: 'By researcher',
      setting: 'Artificial (lab)',
      example: 'Loftus & Palmer - car crash videos'
    },
    field: {
      title: 'Field Experiment',
      color: 'emerald',
      icon: <MapPin size={isPresenting ? 32 : 24} />,
      control: 'Medium',
      validity: 'High',
      ivManipulated: 'By researcher',
      setting: 'Natural (street, school)',
      example: 'Piliavin - subway helping behaviour'
    },
    natural: {
      title: 'Natural Experiment',
      color: 'purple',
      icon: <Eye size={isPresenting ? 32 : 24} />,
      control: 'Low',
      validity: 'High',
      ivManipulated: 'By nature/circumstance',
      setting: 'Natural',
      example: 'Hodges & Tizard - institutional care'
    }
  }

  const colorMap: Record<string, { border: string, bg: string, text: string, glow: string }> = {
    blue: { border: 'border-blue-400', bg: 'bg-blue-900/40', text: 'text-blue-300', glow: 'shadow-blue-500/30' },
    emerald: { border: 'border-emerald-400', bg: 'bg-emerald-900/40', text: 'text-emerald-300', glow: 'shadow-emerald-500/30' },
    purple: { border: 'border-purple-400', bg: 'bg-purple-900/40', text: 'text-purple-300', glow: 'shadow-purple-500/30' }
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-8' : 'p-10'}`}>
      <div className="mb-6 text-center">
        <h2 className={`${isPresenting ? 'text-5xl' : 'text-4xl'} font-black text-white mb-2`}>Compare Experiment Types</h2>
        <p className={`${isPresenting ? 'text-xl' : ''} text-gray-400`}>Click each type to see details — watch them highlight!</p>
      </div>

      {/* Experiment Type Cards */}
      <div className={`grid grid-cols-3 ${isPresenting ? 'gap-6' : 'gap-4'} mb-6`}>
        {Object.entries(experimentTypes).map(([key, exp]) => (
          <button
            key={key}
            onClick={() => setSelectedType(selectedType === key ? null : key as 'lab' | 'field' | 'natural')}
            className={`rounded-2xl border-2 transition-all duration-300 ${isPresenting ? 'p-6' : 'p-4'} text-left ${
              selectedType === key
                ? `${colorMap[exp.color].border} ${colorMap[exp.color].bg} scale-105 shadow-xl ${colorMap[exp.color].glow}`
                : selectedType !== null
                  ? 'border-gray-700 bg-gray-900/20 opacity-40'
                  : `border-${exp.color}-500/40 bg-${exp.color}-900/20 hover:scale-102`
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`${colorMap[exp.color].text}`}>{exp.icon}</div>
              <h3 className={`${isPresenting ? 'text-2xl' : 'text-lg'} font-bold ${colorMap[exp.color].text}`}>{exp.title}</h3>
            </div>
            <p className={`text-gray-400 ${isPresenting ? 'text-base' : 'text-sm'}`}>Click to compare</p>
          </button>
        ))}
      </div>

      {/* Comparison Scales */}
      <div className={`bg-gray-800/30 rounded-2xl border border-gray-700 ${isPresenting ? 'p-6' : 'p-4'} mb-4`}>
        <h3 className={`${isPresenting ? 'text-xl' : 'text-lg'} font-bold text-white mb-4`}>How do they compare?</h3>
        
        {/* Control Scale */}
        <div className="mb-4">
          <div className="flex justify-between mb-2">
            <span className="text-red-400 font-bold">Low Control</span>
            <span className="text-green-400 font-bold">High Control</span>
          </div>
          <div className="flex h-8 rounded-lg overflow-hidden">
            <div className={`flex-1 flex items-center justify-center transition-all duration-500 ${selectedType === 'natural' ? 'bg-purple-500' : 'bg-purple-500/20'}`}>
              <span className={`text-xs font-bold ${selectedType === 'natural' ? 'text-white' : 'text-purple-300/50'}`}>Natural</span>
            </div>
            <div className={`flex-1 flex items-center justify-center transition-all duration-500 ${selectedType === 'field' ? 'bg-emerald-500' : 'bg-emerald-500/20'}`}>
              <span className={`text-xs font-bold ${selectedType === 'field' ? 'text-white' : 'text-emerald-300/50'}`}>Field</span>
            </div>
            <div className={`flex-1 flex items-center justify-center transition-all duration-500 ${selectedType === 'lab' ? 'bg-blue-500' : 'bg-blue-500/20'}`}>
              <span className={`text-xs font-bold ${selectedType === 'lab' ? 'text-white' : 'text-blue-300/50'}`}>Lab</span>
            </div>
          </div>
        </div>

        {/* Ecological Validity Scale */}
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-red-400 font-bold">Low Ecological Validity</span>
            <span className="text-green-400 font-bold">High Ecological Validity</span>
          </div>
          <div className="flex h-8 rounded-lg overflow-hidden">
            <div className={`flex-1 flex items-center justify-center transition-all duration-500 ${selectedType === 'lab' ? 'bg-blue-500' : 'bg-blue-500/20'}`}>
              <span className={`text-xs font-bold ${selectedType === 'lab' ? 'text-white' : 'text-blue-300/50'}`}>Lab</span>
            </div>
            <div className={`flex-1 flex items-center justify-center transition-all duration-500 ${selectedType === 'field' ? 'bg-emerald-500' : 'bg-emerald-500/20'}`}>
              <span className={`text-xs font-bold ${selectedType === 'field' ? 'text-white' : 'text-emerald-300/50'}`}>Field</span>
            </div>
            <div className={`flex-1 flex items-center justify-center transition-all duration-500 ${selectedType === 'natural' ? 'bg-purple-500' : 'bg-purple-500/20'}`}>
              <span className={`text-xs font-bold ${selectedType === 'natural' ? 'text-white' : 'text-purple-300/50'}`}>Natural</span>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Details */}
      {selectedType && (
        <div className={`rounded-2xl border-2 ${colorMap[experimentTypes[selectedType].color].border} ${colorMap[experimentTypes[selectedType].color].bg} ${isPresenting ? 'p-6' : 'p-4'} animate-fadeIn`}>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <p className={`text-gray-400 ${isPresenting ? 'text-base' : 'text-xs'}`}>Setting</p>
              <p className={`${isPresenting ? 'text-lg' : 'text-sm'} font-bold ${colorMap[experimentTypes[selectedType].color].text}`}>{experimentTypes[selectedType].setting}</p>
            </div>
            <div>
              <p className={`text-gray-400 ${isPresenting ? 'text-base' : 'text-xs'}`}>IV Manipulated</p>
              <p className={`${isPresenting ? 'text-lg' : 'text-sm'} font-bold ${colorMap[experimentTypes[selectedType].color].text}`}>{experimentTypes[selectedType].ivManipulated}</p>
            </div>
            <div>
              <p className={`text-gray-400 ${isPresenting ? 'text-base' : 'text-xs'}`}>Control Level</p>
              <p className={`${isPresenting ? 'text-lg' : 'text-sm'} font-bold ${colorMap[experimentTypes[selectedType].color].text}`}>{experimentTypes[selectedType].control}</p>
            </div>
            <div>
              <p className={`text-gray-400 ${isPresenting ? 'text-base' : 'text-xs'}`}>Example Study</p>
              <p className={`${isPresenting ? 'text-lg' : 'text-sm'} font-bold ${colorMap[experimentTypes[selectedType].color].text}`}>{experimentTypes[selectedType].example}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Experiment Types Comparison Task
const ExperimentComparisonTask: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const scenarios = [
    { scenario: "A researcher sets up a room where participants are shown images on a screen and their reaction times are measured. The researcher controls the lighting, temperature, and timing.", answer: "lab", explanation: "This is a lab experiment - controlled artificial environment with researcher manipulating the IV." },
    { scenario: "Researchers study students' stress levels at schools that have banned mobile phones vs schools that allow them. The school policies existed before the study began.", answer: "natural", explanation: "This is a natural experiment - the IV (phone policy) occurred naturally, not manipulated by researchers." },
    { scenario: "A psychologist has confederates ask for help on a busy street, varying whether they are dressed smartly or casually. They record how many people stop to help.", answer: "field", explanation: "This is a field experiment - natural setting (street) but the IV (clothing) is manipulated by the researcher." },
    { scenario: "Children who experienced the 2004 tsunami are compared with children from the same area who were not present during the disaster, measuring PTSD symptoms.", answer: "natural", explanation: "This is a natural experiment - the IV (tsunami exposure) was a natural event, not created by researchers." },
  ]

  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (idx: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [idx]: answer }))
  }

  const checkAnswers = () => setShowResults(true)

  const score = scenarios.filter((s, i) => answers[i] === s.answer).length

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Identify the Experiment Type</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Read each scenario and decide if it's a Lab, Field, or Natural experiment</p>
      </div>

      <div className="space-y-4 flex-1">
        {scenarios.map((s, idx) => (
          <div key={idx} className={`bg-gray-800/50 rounded-xl border ${showResults ? (answers[idx] === s.answer ? 'border-green-500' : 'border-red-500') : 'border-gray-700'} ${isPresenting ? 'p-4' : 'p-6'}`}>
            <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200 mb-4`}>{s.scenario}</p>
            
            <div className="flex gap-3">
              {['lab', 'field', 'natural'].map(type => (
                <button
                  key={type}
                  onClick={() => !showResults && handleAnswer(idx, type)}
                  className={`px-4 py-2 rounded-lg font-bold capitalize transition-all ${isPresenting ? 'text-xs' : 'text-sm'} ${
                    showResults
                      ? type === s.answer
                        ? 'bg-green-600 text-white'
                        : answers[idx] === type
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-700 text-gray-400'
                      : answers[idx] === type
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {showResults && answers[idx] !== s.answer && (
              <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-amber-300 mt-3`}>{s.explanation}</p>
            )}
          </div>
        ))}
      </div>

      {!showResults && Object.keys(answers).length === scenarios.length && (
        <button onClick={checkAnswers} className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg mt-4 self-center">
          Check My Answers
        </button>
      )}

      {showResults && (
        <div className={`text-center mt-4 ${isPresenting ? 'p-4' : 'p-6'} bg-gray-800/50 rounded-xl`}>
          <p className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-white`}>
            Score: {score}/{scenarios.length}
          </p>
        </div>
      )}
    </div>
  )
}

// Lesson 3 Extended Exam Task
const Lesson3ExtendedExamTask: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [showMarkScheme, setShowMarkScheme] = useState(false)

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Extended Exam Practice</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Types of Experiment - 6 Mark Question</p>
      </div>

      <div className={`bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl border border-purple-500/30 ${isPresenting ? 'p-4 mb-4' : 'p-6 mb-6'}`}>
        <p className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-white mb-2`}>Question:</p>
        <p className={`${isPresenting ? 'text-sm' : 'text-lg'} text-gray-200`}>
          A researcher wants to study the effect of sleep deprivation on memory. Evaluate whether they should use a laboratory experiment or a field experiment for this study. [6 marks]
        </p>
      </div>

      <button 
        onClick={() => setShowMarkScheme(!showMarkScheme)}
        className={`mt-4 bg-amber-600 hover:bg-amber-700 text-white font-bold ${isPresenting ? 'py-2 px-4 text-sm' : 'py-3 px-6'} rounded-lg self-center`}
      >
        {showMarkScheme ? 'Hide' : 'Show'} Mark Scheme
      </button>

      {showMarkScheme && (
        <div className={`mt-4 bg-amber-900/20 rounded-xl border border-amber-500/30 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-lg'} font-bold text-amber-300 mb-3`}>Mark Scheme Points:</h3>
          <div className={`space-y-2 ${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200`}>
            <p><span className="font-bold text-amber-300">Lab +:</span> High control over EVs (temperature, noise, exact sleep deprivation time), easier to establish cause and effect, easy to replicate</p>
            <p><span className="font-bold text-amber-300">Lab -:</span> Low ecological validity (artificial setting), demand characteristics, participants aware they're being studied</p>
            <p><span className="font-bold text-amber-300">Field +:</span> Higher ecological validity, more natural behaviour, can study real-world sleep patterns</p>
            <p><span className="font-bold text-amber-300">Field -:</span> Less control over EVs, harder to measure exact sleep deprivation, ethical issues (not controlling when people sleep)</p>
            <p><span className="font-bold text-amber-300">Conclusion:</span> Lab may be better for this study due to ethical concerns about deliberately depriving people of sleep in real life</p>
          </div>
        </div>
      )}
    </div>
  )
}

// ============= GCSE LESSON 4: EXPERIMENTAL DESIGNS =============

// Interactive Experimental Designs Comparison
const ExperimentalDesignsInteractiveSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [selectedDesign, setSelectedDesign] = useState<'independent' | 'repeated' | 'matched' | null>(null)
  const [showParticipants, setShowParticipants] = useState(false)

  const designs = {
    independent: {
      name: 'Independent Groups',
      icon: <Users size={24} />,
      color: 'blue',
      desc: 'Different participants in each condition',
      participants: { condA: ['P1', 'P2', 'P3', 'P4', 'P5'], condB: ['P6', 'P7', 'P8', 'P9', 'P10'] },
      strengths: ['No order effects', 'Quicker - each person tested once'],
      limitations: ['Participant variables (individual differences)', 'Needs more participants']
    },
    repeated: {
      name: 'Repeated Measures',
      icon: <RefreshCw size={24} />,
      color: 'emerald',
      desc: 'Same participants in ALL conditions',
      participants: { condA: ['P1', 'P2', 'P3', 'P4', 'P5'], condB: ['P1', 'P2', 'P3', 'P4', 'P5'] },
      strengths: ['No participant variables', 'Fewer participants needed'],
      limitations: ['Order effects (practice/fatigue)', 'Demand characteristics']
    },
    matched: {
      name: 'Matched Pairs',
      icon: <Link size={24} />,
      color: 'purple',
      desc: 'Matched on key variables, then split',
      participants: { condA: ['P1a', 'P2a', 'P3a', 'P4a', 'P5a'], condB: ['P1b', 'P2b', 'P3b', 'P4b', 'P5b'] },
      strengths: ['Reduces participant variables', 'No order effects'],
      limitations: ['Time-consuming to match', 'Can\'t match on everything']
    }
  }

  const colorMap: Record<string, { border: string, bg: string, text: string, solid: string }> = {
    blue: { border: 'border-blue-400', bg: 'bg-blue-900/40', text: 'text-blue-300', solid: 'bg-blue-500' },
    emerald: { border: 'border-emerald-400', bg: 'bg-emerald-900/40', text: 'text-emerald-300', solid: 'bg-emerald-500' },
    purple: { border: 'border-purple-400', bg: 'bg-purple-900/40', text: 'text-purple-300', solid: 'bg-purple-500' },
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-8' : 'p-10'}`}>
      <div className="mb-4 text-center">
        <h2 className={`${isPresenting ? 'text-5xl' : 'text-4xl'} font-black text-white mb-2`}>Experimental Designs</h2>
        <p className={`${isPresenting ? 'text-xl' : ''} text-gray-400`}>Click to compare how participants are allocated!</p>
      </div>

      {/* Design Selection Buttons */}
      <div className={`grid grid-cols-3 ${isPresenting ? 'gap-4' : 'gap-3'} mb-4`}>
        {Object.entries(designs).map(([key, design]) => (
          <button
            key={key}
            onClick={() => { setSelectedDesign(key as 'independent' | 'repeated' | 'matched'); setShowParticipants(true); }}
            className={`rounded-xl border-2 transition-all duration-300 ${isPresenting ? 'p-4' : 'p-3'} ${
              selectedDesign === key
                ? `${colorMap[design.color].border} ${colorMap[design.color].bg} scale-105 shadow-xl`
                : selectedDesign !== null
                  ? 'border-gray-700 bg-gray-900/20 opacity-50'
                  : `border-${design.color}-500/40 bg-${design.color}-900/20 hover:scale-102`
            }`}
          >
            <div className={`flex items-center justify-center gap-2 ${colorMap[design.color].text} mb-2`}>
              {design.icon}
              <span className={`${isPresenting ? 'text-lg' : 'text-base'} font-bold`}>{design.name}</span>
            </div>
            <p className={`text-gray-400 ${isPresenting ? 'text-sm' : 'text-xs'} text-center`}>{design.desc}</p>
          </button>
        ))}
      </div>

      {/* Visual Participant Demo */}
      {showParticipants && selectedDesign && (
        <div className={`bg-gray-800/30 rounded-2xl border border-gray-700 ${isPresenting ? 'p-4' : 'p-3'} mb-4 animate-fadeIn`}>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className={`${isPresenting ? 'text-lg' : 'text-sm'} font-bold text-pink-300 mb-3`}>Condition A (e.g., Music)</h4>
              <div className="flex gap-2 flex-wrap">
                {designs[selectedDesign].participants.condA.map((p, idx) => (
                  <div 
                    key={idx}
                    className={`${isPresenting ? 'w-12 h-12' : 'w-10 h-10'} rounded-lg ${colorMap[designs[selectedDesign].color].solid} flex items-center justify-center font-bold text-white ${isPresenting ? 'text-sm' : 'text-xs'} animate-fadeIn`}
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    {p}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className={`${isPresenting ? 'text-lg' : 'text-sm'} font-bold text-cyan-300 mb-3`}>Condition B (e.g., Silence)</h4>
              <div className="flex gap-2 flex-wrap">
                {designs[selectedDesign].participants.condB.map((p, idx) => (
                  <div 
                    key={idx}
                    className={`${isPresenting ? 'w-12 h-12' : 'w-10 h-10'} rounded-lg ${
                      selectedDesign === 'repeated' ? colorMap[designs[selectedDesign].color].solid : 'bg-gray-600'
                    } flex items-center justify-center font-bold text-white ${isPresenting ? 'text-sm' : 'text-xs'} animate-fadeIn`}
                    style={{ animationDelay: `${(idx + 5) * 100}ms` }}
                  >
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className={`mt-3 ${isPresenting ? 'text-base' : 'text-sm'} text-gray-400 text-center`}>
            {selectedDesign === 'independent' && 'Different people in each group — watch for individual differences!'}
            {selectedDesign === 'repeated' && 'Same people do both — watch for order effects!'}
            {selectedDesign === 'matched' && 'Pairs are matched on key variables, then split into groups.'}
          </p>
        </div>
      )}

      {/* Strengths & Limitations */}
      {selectedDesign && (
        <div className={`grid grid-cols-2 ${isPresenting ? 'gap-4' : 'gap-3'} animate-fadeIn`}>
          <div className={`rounded-xl border-2 border-green-500/40 bg-green-900/20 ${isPresenting ? 'p-4' : 'p-3'}`}>
            <h4 className={`${isPresenting ? 'text-lg' : 'text-base'} font-bold text-green-300 mb-2`}>✓ Strengths</h4>
            <ul className={`${isPresenting ? 'text-base' : 'text-sm'} text-gray-200 space-y-1`}>
              {designs[selectedDesign].strengths.map((s, i) => (
                <li key={i}>• {s}</li>
              ))}
            </ul>
          </div>
          <div className={`rounded-xl border-2 border-red-500/40 bg-red-900/20 ${isPresenting ? 'p-4' : 'p-3'}`}>
            <h4 className={`${isPresenting ? 'text-lg' : 'text-base'} font-bold text-red-300 mb-2`}>✗ Limitations</h4>
            <ul className={`${isPresenting ? 'text-base' : 'text-sm'} text-gray-200 space-y-1`}>
              {designs[selectedDesign].limitations.map((l, i) => (
                <li key={i}>• {l}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

// Independent Groups Teaching Slide
const IndependentGroupsTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [activeView, setActiveView] = useState<'definition' | 'strengths' | 'limitations'>('definition')

  const content = {
    definition: {
      title: 'Independent Groups Design',
      points: [
        { text: 'Different participants', highlight: 'in each condition' },
        { text: 'Participants only experience', highlight: 'ONE level of the IV' },
        { text: 'Groups should be', highlight: 'randomly allocated' },
        { text: 'Also called', highlight: '"between-subjects" design' }
      ]
    },
    strengths: [
      { text: 'No order effects', detail: 'participants only do one condition' },
      { text: 'Less time-consuming', detail: 'for each participant' },
      { text: 'Lower chance of demand characteristics', detail: 'participants can\'t guess the aim' }
    ],
    limitations: [
      { text: 'Participant variables', detail: 'groups may differ naturally' },
      { text: 'Need more participants', detail: 'double the sample size' },
      { text: 'Harder to control individual differences', detail: 'random allocation doesn\'t guarantee equivalence' }
    ],
    example: {
      title: 'Memory study',
      description: 'Testing if background music affects recall',
      details: 'Group A: Learn words with music\nGroup B: Learn words in silence\nDifferent people in each group'
    }
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      {/* Header */}
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <div className="flex items-center justify-between">
          <div>
            <h2 className={`${isPresenting ? 'text-3xl' : 'text-5xl'} font-black text-white mb-2`}>Independent Groups Design</h2>
            <p className={`${isPresenting ? 'text-sm' : 'text-lg'} text-gray-400`}>Different participants in each condition</p>
          </div>
          <div className={`rounded-lg bg-blue-900/30 border border-blue-500/40 ${isPresenting ? 'px-3 py-1.5' : 'px-4 py-2'}`}>
            <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-blue-300`}>
              <span className="font-bold">Controls:</span> Participant Variables
            </p>
          </div>
        </div>
      </div>

      {/* Toggle Buttons */}
      <div className={`flex gap-2 ${isPresenting ? 'mb-4' : 'mb-6'}`}>
        <button
          onClick={() => setActiveView('definition')}
          className={`flex-1 ${isPresenting ? 'py-2 px-3 text-sm' : 'py-3 px-6 text-base'} rounded-lg font-bold transition-all ${
            activeView === 'definition'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
              : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-gray-200'
          }`}
        >
          <Users size={isPresenting ? 16 : 20} className="inline mr-2" />
          Definition
        </button>
        <button
          onClick={() => setActiveView('strengths')}
          className={`flex-1 ${isPresenting ? 'py-2 px-3 text-sm' : 'py-3 px-6 text-base'} rounded-lg font-bold transition-all ${
            activeView === 'strengths'
              ? 'bg-green-600 text-white shadow-lg shadow-green-600/30'
              : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-gray-200'
          }`}
        >
          ✓ Strengths
        </button>
        <button
          onClick={() => setActiveView('limitations')}
          className={`flex-1 ${isPresenting ? 'py-2 px-3 text-sm' : 'py-3 px-6 text-base'} rounded-lg font-bold transition-all ${
            activeView === 'limitations'
              ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
              : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-gray-200'
          }`}
        >
          ✗ Limitations
        </button>
      </div>

      {/* Main Content Area */}
      <div className={`flex-1 grid grid-cols-3 ${isPresenting ? 'gap-4' : 'gap-6'}`}>
        {/* Content Panel - 2/3 width */}
        <div className="col-span-2">
          {activeView === 'definition' && (
            <div className={`h-full rounded-xl border-2 border-blue-500/40 bg-blue-900/20 ${isPresenting ? 'p-4' : 'p-6'} animate-fadeIn`}>
              <h3 className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-blue-300 mb-4 flex items-center gap-2`}>
                <Users size={isPresenting ? 24 : 32} />
                What is Independent Groups?
              </h3>
              <ul className={`space-y-3 ${isPresenting ? 'text-sm' : 'text-lg'} text-gray-200`}>
                {content.definition.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>{point.text} <span className="font-bold text-blue-300">{point.highlight}</span></span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeView === 'strengths' && (
            <div className={`h-full rounded-xl border-2 border-green-500/40 bg-green-900/20 ${isPresenting ? 'p-4' : 'p-6'} animate-fadeIn`}>
              <h3 className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-green-300 mb-4`}>✓ Strengths</h3>
              <ul className={`space-y-4 ${isPresenting ? 'text-sm' : 'text-lg'}`}>
                {content.strengths.map((item, idx) => (
                  <li key={idx} className="bg-green-950/30 rounded-lg p-3 border border-green-500/20">
                    <p className="font-bold text-green-300">{item.text}</p>
                    <p className="text-gray-300 text-sm mt-1">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeView === 'limitations' && (
            <div className={`h-full rounded-xl border-2 border-red-500/40 bg-red-900/20 ${isPresenting ? 'p-4' : 'p-6'} animate-fadeIn`}>
              <h3 className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-red-300 mb-4`}>✗ Limitations</h3>
              <ul className={`space-y-4 ${isPresenting ? 'text-sm' : 'text-lg'}`}>
                {content.limitations.map((item, idx) => (
                  <li key={idx} className="bg-red-950/30 rounded-lg p-3 border border-red-500/20">
                    <p className="font-bold text-red-300">{item.text}</p>
                    <p className="text-gray-300 text-sm mt-1">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Example Panel - Always Visible */}
        <div className={`rounded-xl border-2 border-purple-500/40 bg-purple-900/20 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-purple-300 mb-3`}>📋 Example Study</h3>
          <div className={`bg-gray-900/50 rounded-lg ${isPresenting ? 'p-3' : 'p-4'} space-y-3`}>
            <p className={`${isPresenting ? 'text-sm' : 'text-base'} font-bold text-purple-300`}>
              {content.example.title}
            </p>
            <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-300`}>
              {content.example.description}
            </p>
            <div className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-400 whitespace-pre-line border-t border-purple-500/20 pt-3`}>
              {content.example.details}
            </div>
          </div>
          <div className={`mt-4 p-3 rounded-lg bg-gray-900/30 border border-gray-700`}>
            <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-400`}>
              <span className="font-bold text-purple-300">Key feature:</span> Different people in each condition
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Independent Groups AFL
const IndependentGroupsAFL: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const questions = [
    {
      question: "In an independent groups design, each participant experiences...",
      options: ["All conditions", "Two conditions", "One condition only", "No conditions"],
      correct: 2,
      explanation: "In independent groups design, each participant only takes part in ONE condition of the experiment."
    },
    {
      question: "What is a key advantage of independent groups design?",
      options: ["Needs fewer participants", "No order effects", "Eliminates all individual differences", "Participants can compare conditions"],
      correct: 1,
      explanation: "Since participants only do one condition, there's no chance of practice or fatigue effects from doing multiple conditions."
    }
  ]

  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)

  const handleSelect = (idx: number) => {
    if (showFeedback) return
    setSelected(idx)
    setShowFeedback(true)
    if (idx === questions[currentQ].correct) setScore(s => s + 1)
  }

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(q => q + 1)
      setSelected(null)
      setShowFeedback(false)
    }
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Check Your Understanding</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Independent Groups - Question {currentQ + 1} of {questions.length}</p>
      </div>

      <div className={`flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full`}>
        <div className={`bg-gray-800/50 rounded-xl border border-gray-700 ${isPresenting ? 'p-6' : 'p-8'} mb-6`}>
          <p className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-white mb-6`}>{questions[currentQ].question}</p>
          
          <div className="grid grid-cols-1 gap-3">
            {questions[currentQ].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`p-4 rounded-lg text-left transition-all ${isPresenting ? 'text-sm' : 'text-base'} ${
                  showFeedback
                    ? idx === questions[currentQ].correct
                      ? 'bg-green-600/30 border-2 border-green-500 text-green-200'
                      : idx === selected
                      ? 'bg-red-600/30 border-2 border-red-500 text-red-200'
                      : 'bg-gray-700/30 border border-gray-600 text-gray-400'
                    : selected === idx
                    ? 'bg-blue-600/30 border-2 border-blue-500 text-white'
                    : 'bg-gray-700/50 border border-gray-600 text-gray-200 hover:bg-gray-700'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {showFeedback && (
            <div className={`mt-6 p-4 rounded-lg ${selected === questions[currentQ].correct ? 'bg-green-900/30 border border-green-600' : 'bg-amber-900/30 border border-amber-600'}`}>
              <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200`}>{questions[currentQ].explanation}</p>
            </div>
          )}
        </div>

        {showFeedback && currentQ < questions.length - 1 && (
          <button onClick={nextQuestion} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg self-center">
            Next Question →
          </button>
        )}

        {showFeedback && currentQ === questions.length - 1 && (
          <div className="text-center">
            <p className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-white`}>Score: {score}/{questions.length}</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Repeated Measures Teaching Slide - Comparison Toggle Style
const RepeatedMeasuresTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [activeView, setActiveView] = useState<'definition' | 'strengths' | 'limitations'>('definition')

  const content = {
    definition: {
      title: 'Repeated Measures Design',
      points: [
        { text: 'Same participants', highlight: 'in ALL conditions' },
        { text: 'Each person experiences', highlight: 'every level of the IV' },
        { text: 'Results are compared', highlight: 'within each participant' },
        { text: 'Also called', highlight: '"within-subjects" design' }
      ]
    },
    strengths: [
      { text: 'No participant variables', detail: 'same people in all conditions' },
      { text: 'Fewer participants needed', detail: 'more economical' },
      { text: 'More sensitive', detail: 'to detecting differences between conditions' }
    ],
    limitations: [
      { text: 'Order effects', detail: 'practice or fatigue can affect results' },
      { text: 'Demand characteristics', detail: 'may guess aim from doing both conditions' },
      { text: 'More time-consuming', detail: 'for each participant' }
    ],
    example: {
      title: 'Memory study',
      description: 'Testing if background music affects recall',
      details: 'Same participants:\nWeek 1: Learn words with music\nWeek 2: Learn words in silence\nCompare each person\'s scores'
    }
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      {/* Header */}
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <div className="flex items-center justify-between">
          <div>
            <h2 className={`${isPresenting ? 'text-3xl' : 'text-5xl'} font-black text-white mb-2`}>Repeated Measures Design</h2>
            <p className={`${isPresenting ? 'text-sm' : 'text-lg'} text-gray-400`}>Same participants in all conditions</p>
          </div>
          <div className={`rounded-lg bg-emerald-900/30 border border-emerald-500/40 ${isPresenting ? 'px-3 py-1.5' : 'px-4 py-2'}`}>
            <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-emerald-300`}>
              <span className="font-bold">Controls:</span> Order Effects (via Counterbalancing)
            </p>
          </div>
        </div>
      </div>

      {/* Toggle Buttons */}
      <div className={`flex gap-2 ${isPresenting ? 'mb-4' : 'mb-6'}`}>
        <button
          onClick={() => setActiveView('definition')}
          className={`flex-1 ${isPresenting ? 'py-2 px-3 text-sm' : 'py-3 px-6 text-base'} rounded-lg font-bold transition-all ${
            activeView === 'definition'
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
              : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-gray-200'
          }`}
        >
          <RefreshCw size={isPresenting ? 16 : 20} className="inline mr-2" />
          Definition
        </button>
        <button
          onClick={() => setActiveView('strengths')}
          className={`flex-1 ${isPresenting ? 'py-2 px-3 text-sm' : 'py-3 px-6 text-base'} rounded-lg font-bold transition-all ${
            activeView === 'strengths'
              ? 'bg-green-600 text-white shadow-lg shadow-green-600/30'
              : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-gray-200'
          }`}
        >
          ✓ Strengths
        </button>
        <button
          onClick={() => setActiveView('limitations')}
          className={`flex-1 ${isPresenting ? 'py-2 px-3 text-sm' : 'py-3 px-6 text-base'} rounded-lg font-bold transition-all ${
            activeView === 'limitations'
              ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
              : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-gray-200'
          }`}
        >
          ✗ Limitations
        </button>
      </div>

      {/* Main Content Area */}
      <div className={`flex-1 grid grid-cols-3 ${isPresenting ? 'gap-4' : 'gap-6'}`}>
        {/* Content Panel - 2/3 width */}
        <div className="col-span-2">
          {activeView === 'definition' && (
            <div className={`h-full rounded-xl border-2 border-emerald-500/40 bg-emerald-900/20 ${isPresenting ? 'p-4' : 'p-6'} animate-fadeIn`}>
              <h3 className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-emerald-300 mb-4 flex items-center gap-2`}>
                <RefreshCw size={isPresenting ? 24 : 32} />
                What is Repeated Measures?
              </h3>
              <ul className={`space-y-3 ${isPresenting ? 'text-sm' : 'text-lg'} text-gray-200`}>
                {content.definition.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>{point.text} <span className="font-bold text-emerald-300">{point.highlight}</span></span>
                  </li>
                ))}
              </ul>
              {/* Counterbalancing note inside definition */}
              <div className={`rounded-lg border border-yellow-500/40 bg-yellow-900/20 ${isPresenting ? 'p-3 mt-4' : 'p-4 mt-6'}`}>
                <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-yellow-200`}>
                  <span className="font-bold">💡 Counterbalancing:</span> Half do A then B, half do B then A — balances out order effects.
                </p>
              </div>
            </div>
          )}

          {activeView === 'strengths' && (
            <div className={`h-full rounded-xl border-2 border-green-500/40 bg-green-900/20 ${isPresenting ? 'p-4' : 'p-6'} animate-fadeIn`}>
              <h3 className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-green-300 mb-4`}>✓ Strengths</h3>
              <ul className={`space-y-4 ${isPresenting ? 'text-sm' : 'text-lg'}`}>
                {content.strengths.map((item, idx) => (
                  <li key={idx} className="bg-green-950/30 rounded-lg p-3 border border-green-500/20">
                    <p className="font-bold text-green-300">{item.text}</p>
                    <p className="text-gray-300 text-sm mt-1">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeView === 'limitations' && (
            <div className={`h-full rounded-xl border-2 border-red-500/40 bg-red-900/20 ${isPresenting ? 'p-4' : 'p-6'} animate-fadeIn`}>
              <h3 className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-red-300 mb-4`}>✗ Limitations</h3>
              <ul className={`space-y-4 ${isPresenting ? 'text-sm' : 'text-lg'}`}>
                {content.limitations.map((item, idx) => (
                  <li key={idx} className="bg-red-950/30 rounded-lg p-3 border border-red-500/20">
                    <p className="font-bold text-red-300">{item.text}</p>
                    <p className="text-gray-300 text-sm mt-1">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Example Panel - Always Visible */}
        <div className={`rounded-xl border-2 border-amber-500/40 bg-amber-900/20 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-amber-300 mb-3`}>📋 Example Study</h3>
          <div className={`bg-gray-900/50 rounded-lg ${isPresenting ? 'p-3' : 'p-4'} space-y-3`}>
            <p className={`${isPresenting ? 'text-sm' : 'text-base'} font-bold text-amber-300`}>
              {content.example.title}
            </p>
            <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-300`}>
              {content.example.description}
            </p>
            <div className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-400 whitespace-pre-line border-t border-amber-500/20 pt-3`}>
              {content.example.details}
            </div>
          </div>
          <div className={`mt-4 p-3 rounded-lg bg-gray-900/30 border border-gray-700`}>
            <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-400`}>
              <span className="font-bold text-amber-300">Key feature:</span> Same people do ALL conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Repeated Measures AFL
const RepeatedMeasuresAFL: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const questions = [
    {
      question: "In a repeated measures design, how many conditions does each participant experience?",
      options: ["One condition only", "Two conditions maximum", "All conditions", "It varies per participant"],
      correct: 2,
      explanation: "In repeated measures, each participant takes part in ALL conditions of the experiment."
    },
    {
      question: "What is the main problem with repeated measures design?",
      options: ["Needs too many participants", "Participant variables", "Order effects", "Cannot establish cause and effect"],
      correct: 2,
      explanation: "Order effects (practice making you better, or fatigue making you worse) are the main issue with repeated measures."
    }
  ]

  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)

  const handleSelect = (idx: number) => {
    if (showFeedback) return
    setSelected(idx)
    setShowFeedback(true)
    if (idx === questions[currentQ].correct) setScore(s => s + 1)
  }

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(q => q + 1)
      setSelected(null)
      setShowFeedback(false)
    }
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Check Your Understanding</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Repeated Measures - Question {currentQ + 1} of {questions.length}</p>
      </div>

      <div className={`flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full`}>
        <div className={`bg-gray-800/50 rounded-xl border border-gray-700 ${isPresenting ? 'p-6' : 'p-8'} mb-6`}>
          <p className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-white mb-6`}>{questions[currentQ].question}</p>
          
          <div className="grid grid-cols-1 gap-3">
            {questions[currentQ].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`p-4 rounded-lg text-left transition-all ${isPresenting ? 'text-sm' : 'text-base'} ${
                  showFeedback
                    ? idx === questions[currentQ].correct
                      ? 'bg-green-600/30 border-2 border-green-500 text-green-200'
                      : idx === selected
                      ? 'bg-red-600/30 border-2 border-red-500 text-red-200'
                      : 'bg-gray-700/30 border border-gray-600 text-gray-400'
                    : selected === idx
                    ? 'bg-blue-600/30 border-2 border-blue-500 text-white'
                    : 'bg-gray-700/50 border border-gray-600 text-gray-200 hover:bg-gray-700'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {showFeedback && (
            <div className={`mt-6 p-4 rounded-lg ${selected === questions[currentQ].correct ? 'bg-green-900/30 border border-green-600' : 'bg-amber-900/30 border border-amber-600'}`}>
              <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200`}>{questions[currentQ].explanation}</p>
            </div>
          )}
        </div>

        {showFeedback && currentQ < questions.length - 1 && (
          <button onClick={nextQuestion} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg self-center">
            Next Question →
          </button>
        )}

        {showFeedback && currentQ === questions.length - 1 && (
          <div className="text-center">
            <p className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-white`}>Score: {score}/{questions.length}</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Matched Pairs Teaching Slide - Comparison Toggle Style
const MatchedPairsTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [activeView, setActiveView] = useState<'definition' | 'strengths' | 'limitations'>('definition')

  const content = {
    definition: {
      title: 'Matched Pairs Design',
      points: [
        { text: 'Different participants', highlight: 'in each condition' },
        { text: 'Participants are', highlight: 'matched on important variables' },
        { text: 'One from each pair goes to', highlight: 'each condition' },
        { text: 'Combines', highlight: 'benefits of both designs' }
      ]
    },
    strengths: [
      { text: 'No order effects', detail: 'different people in each condition' },
      { text: 'Reduces participant variables', detail: 'pairs are matched on key characteristics' },
      { text: 'Best of both worlds', detail: 'combines advantages of independent groups and repeated measures' }
    ],
    limitations: [
      { text: 'Time-consuming', detail: 'to match participants before the study' },
      { text: 'Expensive', detail: 'requires pre-testing to find matches' },
      { text: 'Can\'t match on everything', detail: 'some variables may still differ' }
    ],
    example: {
      title: 'Memory study',
      description: 'Testing if background music affects recall',
      details: 'Match participants on IQ and age\nPair 1: Person A → music, Person B → silence\nPair 2: Person C → music, Person D → silence\nMatched pairs, split between conditions'
    }
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      {/* Header */}
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <div className="flex items-center justify-between">
          <div>
            <h2 className={`${isPresenting ? 'text-3xl' : 'text-5xl'} font-black text-white mb-2`}>Matched Pairs Design</h2>
            <p className={`${isPresenting ? 'text-sm' : 'text-lg'} text-gray-400`}>Matching participants on key variables</p>
          </div>
          <div className={`rounded-lg bg-violet-900/30 border border-violet-500/40 ${isPresenting ? 'px-3 py-1.5' : 'px-4 py-2'}`}>
            <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-violet-300`}>
              <span className="font-bold">Controls:</span> Both Participant Variables & Order Effects
            </p>
          </div>
        </div>
      </div>

      {/* Toggle Buttons */}
      <div className={`flex gap-2 ${isPresenting ? 'mb-4' : 'mb-6'}`}>
        <button
          onClick={() => setActiveView('definition')}
          className={`flex-1 ${isPresenting ? 'py-2 px-3 text-sm' : 'py-3 px-6 text-base'} rounded-lg font-bold transition-all ${
            activeView === 'definition'
              ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
              : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-gray-200'
          }`}
        >
          <Link size={isPresenting ? 16 : 20} className="inline mr-2" />
          Definition
        </button>
        <button
          onClick={() => setActiveView('strengths')}
          className={`flex-1 ${isPresenting ? 'py-2 px-3 text-sm' : 'py-3 px-6 text-base'} rounded-lg font-bold transition-all ${
            activeView === 'strengths'
              ? 'bg-green-600 text-white shadow-lg shadow-green-600/30'
              : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-gray-200'
          }`}
        >
          ✓ Strengths
        </button>
        <button
          onClick={() => setActiveView('limitations')}
          className={`flex-1 ${isPresenting ? 'py-2 px-3 text-sm' : 'py-3 px-6 text-base'} rounded-lg font-bold transition-all ${
            activeView === 'limitations'
              ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
              : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-gray-200'
          }`}
        >
          ✗ Limitations
        </button>
      </div>

      {/* Main Content Area */}
      <div className={`flex-1 grid grid-cols-3 ${isPresenting ? 'gap-4' : 'gap-6'}`}>
        {/* Content Panel - 2/3 width */}
        <div className="col-span-2">
          {activeView === 'definition' && (
            <div className={`h-full rounded-xl border-2 border-violet-500/40 bg-violet-900/20 ${isPresenting ? 'p-4' : 'p-6'} animate-fadeIn`}>
              <h3 className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-violet-300 mb-4 flex items-center gap-2`}>
                <Link size={isPresenting ? 24 : 32} />
                What is Matched Pairs?
              </h3>
              <ul className={`space-y-3 ${isPresenting ? 'text-sm' : 'text-lg'} text-gray-200`}>
                {content.definition.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-violet-400 mt-1">•</span>
                    <span>{point.text} <span className="font-bold text-violet-300">{point.highlight}</span></span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeView === 'strengths' && (
            <div className={`h-full rounded-xl border-2 border-green-500/40 bg-green-900/20 ${isPresenting ? 'p-4' : 'p-6'} animate-fadeIn`}>
              <h3 className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-green-300 mb-4`}>✓ Strengths</h3>
              <ul className={`space-y-4 ${isPresenting ? 'text-sm' : 'text-lg'}`}>
                {content.strengths.map((item, idx) => (
                  <li key={idx} className="bg-green-950/30 rounded-lg p-3 border border-green-500/20">
                    <p className="font-bold text-green-300">{item.text}</p>
                    <p className="text-gray-300 text-sm mt-1">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeView === 'limitations' && (
            <div className={`h-full rounded-xl border-2 border-red-500/40 bg-red-900/20 ${isPresenting ? 'p-4' : 'p-6'} animate-fadeIn`}>
              <h3 className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-red-300 mb-4`}>✗ Limitations</h3>
              <ul className={`space-y-4 ${isPresenting ? 'text-sm' : 'text-lg'}`}>
                {content.limitations.map((item, idx) => (
                  <li key={idx} className="bg-red-950/30 rounded-lg p-3 border border-red-500/20">
                    <p className="font-bold text-red-300">{item.text}</p>
                    <p className="text-gray-300 text-sm mt-1">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Example Panel - Always Visible */}
        <div className={`rounded-xl border-2 border-rose-500/40 bg-rose-900/20 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-rose-300 mb-3`}>📋 Example Study</h3>
          <div className={`bg-gray-900/50 rounded-lg ${isPresenting ? 'p-3' : 'p-4'} space-y-3`}>
            <p className={`${isPresenting ? 'text-sm' : 'text-base'} font-bold text-rose-300`}>
              {content.example.title}
            </p>
            <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-300`}>
              {content.example.description}
            </p>
            <div className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-400 whitespace-pre-line border-t border-rose-500/20 pt-3`}>
              {content.example.details}
            </div>
          </div>
          <div className={`mt-4 p-3 rounded-lg bg-gray-900/30 border border-gray-700`}>
            <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-400`}>
              <span className="font-bold text-rose-300">Key feature:</span> Matched on variables, then split
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Matched Pairs AFL
const MatchedPairsAFL: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const questions = [
    {
      question: "In matched pairs design, what happens after participants are matched?",
      options: ["Both go to the same condition", "One from each pair goes to each condition", "They are randomly assigned to any condition", "They repeat both conditions"],
      correct: 1,
      explanation: "After matching, one person from each pair is placed in each condition, so the groups are comparable."
    },
    {
      question: "What is the main advantage of matched pairs over independent groups?",
      options: ["Needs fewer participants", "No demand characteristics", "Reduces participant variables", "Quicker to run"],
      correct: 2,
      explanation: "By matching participants on key variables, we reduce the impact of individual differences between groups."
    }
  ]

  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)

  const handleSelect = (idx: number) => {
    if (showFeedback) return
    setSelected(idx)
    setShowFeedback(true)
    if (idx === questions[currentQ].correct) setScore(s => s + 1)
  }

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(q => q + 1)
      setSelected(null)
      setShowFeedback(false)
    }
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Check Your Understanding</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Matched Pairs - Question {currentQ + 1} of {questions.length}</p>
      </div>

      <div className={`flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full`}>
        <div className={`bg-gray-800/50 rounded-xl border border-gray-700 ${isPresenting ? 'p-6' : 'p-8'} mb-6`}>
          <p className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-white mb-6`}>{questions[currentQ].question}</p>
          
          <div className="grid grid-cols-1 gap-3">
            {questions[currentQ].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`p-4 rounded-lg text-left transition-all ${isPresenting ? 'text-sm' : 'text-base'} ${
                  showFeedback
                    ? idx === questions[currentQ].correct
                      ? 'bg-green-600/30 border-2 border-green-500 text-green-200'
                      : idx === selected
                      ? 'bg-red-600/30 border-2 border-red-500 text-red-200'
                      : 'bg-gray-700/30 border border-gray-600 text-gray-400'
                    : selected === idx
                    ? 'bg-blue-600/30 border-2 border-blue-500 text-white'
                    : 'bg-gray-700/50 border border-gray-600 text-gray-200 hover:bg-gray-700'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {showFeedback && (
            <div className={`mt-6 p-4 rounded-lg ${selected === questions[currentQ].correct ? 'bg-green-900/30 border border-green-600' : 'bg-amber-900/30 border border-amber-600'}`}>
              <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200`}>{questions[currentQ].explanation}</p>
            </div>
          )}
        </div>

        {showFeedback && currentQ < questions.length - 1 && (
          <button onClick={nextQuestion} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg self-center">
            Next Question →
          </button>
        )}

        {showFeedback && currentQ === questions.length - 1 && (
          <div className="text-center">
            <p className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-white`}>Score: {score}/{questions.length}</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Experimental Design Choice Task
const DesignChoiceTask: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const scenarios = [
    { scenario: "A researcher wants to test if a new teaching method improves test scores. They have limited time and a small budget.", answer: "repeated", explanation: "Repeated measures needs fewer participants and is more economical." },
    { scenario: "A psychologist is testing whether caffeine affects reaction times. They're worried participants might guess the aim if they do both conditions.", answer: "independent", explanation: "Independent groups reduces demand characteristics as participants only do one condition." },
    { scenario: "A study on the effect of exercise on mood. The researcher wants to control for baseline fitness levels.", answer: "matched", explanation: "Matched pairs allows controlling for participant variables like fitness levels." },
    { scenario: "Testing memory with two different word lists. The researcher is concerned about practice effects.", answer: "independent", explanation: "Independent groups eliminates order effects as each person does only one condition." },
  ]

  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (idx: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [idx]: answer }))
  }

  const checkAnswers = () => setShowResults(true)

  const score = scenarios.filter((s, i) => answers[i] === s.answer).length

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Choose the Best Design</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Which experimental design would be most appropriate?</p>
      </div>

      <div className="space-y-4 flex-1">
        {scenarios.map((s, idx) => (
          <div key={idx} className={`bg-gray-800/50 rounded-xl border ${showResults ? (answers[idx] === s.answer ? 'border-green-500' : 'border-red-500') : 'border-gray-700'} ${isPresenting ? 'p-4' : 'p-6'}`}>
            <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200 mb-4`}>{s.scenario}</p>
            
            <div className="flex gap-3">
              {['independent', 'repeated', 'matched'].map(type => (
                <button
                  key={type}
                  onClick={() => !showResults && handleAnswer(idx, type)}
                  className={`px-4 py-2 rounded-lg font-bold capitalize transition-all ${isPresenting ? 'text-xs' : 'text-sm'} ${
                    showResults
                      ? type === s.answer
                        ? 'bg-green-600 text-white'
                        : answers[idx] === type
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-700 text-gray-400'
                      : answers[idx] === type
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {type === 'independent' ? 'Independent Groups' : type === 'repeated' ? 'Repeated Measures' : 'Matched Pairs'}
                </button>
              ))}
            </div>

            {showResults && answers[idx] !== s.answer && (
              <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-amber-300 mt-3`}>{s.explanation}</p>
            )}
          </div>
        ))}
      </div>

      {!showResults && Object.keys(answers).length === scenarios.length && (
        <button onClick={checkAnswers} className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg mt-4 self-center">
          Check My Answers
        </button>
      )}

      {showResults && (
        <div className={`text-center mt-4 ${isPresenting ? 'p-4' : 'p-6'} bg-gray-800/50 rounded-xl`}>
          <p className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-white`}>Score: {score}/{scenarios.length}</p>
        </div>
      )}
    </div>
  )
}

// Lesson 4 Extended Exam Task
const Lesson4ExtendedExamTask: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [showMarkScheme, setShowMarkScheme] = useState(false)

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Extended Exam Practice</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Experimental Designs - 6 Mark Question</p>
      </div>

      <div className={`bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl border border-purple-500/30 ${isPresenting ? 'p-4 mb-4' : 'p-6 mb-6'}`}>
        <p className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-white mb-2`}>Question:</p>
        <p className={`${isPresenting ? 'text-sm' : 'text-lg'} text-gray-200`}>
          A researcher wants to investigate whether caffeine improves reaction time. Explain why using a repeated measures design might be better than an independent groups design for this study. Include any limitations. [6 marks]
        </p>
      </div>

      <button 
        onClick={() => setShowMarkScheme(!showMarkScheme)}
        className={`mt-4 bg-amber-600 hover:bg-amber-700 text-white font-bold ${isPresenting ? 'py-2 px-4 text-sm' : 'py-3 px-6'} rounded-lg self-center`}
      >
        {showMarkScheme ? 'Hide' : 'Show'} Mark Scheme
      </button>

      {showMarkScheme && (
        <div className={`mt-4 bg-amber-900/20 rounded-xl border border-amber-500/30 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-lg'} font-bold text-amber-300 mb-3`}>Mark Scheme Points:</h3>
          <div className={`space-y-2 ${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200`}>
            <p><span className="font-bold text-amber-300">RM advantage 1:</span> No participant variables - individual differences in baseline reaction time are controlled as same person does both conditions</p>
            <p><span className="font-bold text-amber-300">RM advantage 2:</span> Fewer participants needed - more economical and practical</p>
            <p><span className="font-bold text-amber-300">RM advantage 3:</span> More sensitive - easier to detect a real difference in reaction time</p>
            <p><span className="font-bold text-amber-300">Limitation 1:</span> Order effects - practice may improve reaction time, fatigue may slow it down</p>
            <p><span className="font-bold text-amber-300">Limitation 2:</span> Demand characteristics - participants may guess the aim and change behaviour</p>
            <p><span className="font-bold text-amber-300">Solution:</span> Use counterbalancing - half do caffeine first, half do placebo first</p>
          </div>
        </div>
      )}
    </div>
  )
}

// ============= GCSE LESSON 5: SAMPLING METHODS =============

// Random Sampling Teaching Slide
const RandomSamplingTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [revealedSteps, setRevealedSteps] = useState<number[]>([])

  const steps = [
    { 
      id: 1, 
      title: 'What is it?', 
      icon: <HelpCircle size={24} />, 
      color: 'blue', 
      content: 'Every member of the target population has an equal chance of being selected. Often uses a random number generator or names in a hat. Requires a complete list of all potential participants.' 
    },
    { 
      id: 2, 
      title: 'How does it work?', 
      icon: <Cog size={24} />, 
      color: 'purple', 
      content: [
        'Get a complete list of all members in target population',
        'Assign each person a unique number',
        'Use a random number generator (or names in a hat)',
        'Select until you have your required sample size'
      ] 
    },
    { 
      id: 3, 
      title: 'Strengths', 
      icon: <CheckCircle size={24} />, 
      color: 'green', 
      content: [
        'No researcher bias in selection',
        'Likely to be representative of population',
        'Results can be generalised'
      ] 
    },
    { 
      id: 4, 
      title: 'Limitations', 
      icon: <XCircle size={24} />, 
      color: 'red', 
      content: [
        'Time-consuming - need full population list',
        'Selected people may refuse to participate',
        'Can be impractical for large populations'
      ] 
    },
  ]

  const revealNext = () => {
    const nextStep = revealedSteps.length + 1
    if (nextStep <= steps.length) {
      setRevealedSteps([...revealedSteps, nextStep])
    }
  }

  const revealAll = () => {
    setRevealedSteps([1, 2, 3, 4])
  }

  const getColorClasses = (color: string, revealed: boolean) => {
    if (!revealed) return 'border-gray-700 bg-gray-800/50'
    const colors: Record<string, string> = {
      blue: 'border-blue-500 bg-blue-900/30',
      purple: 'border-purple-500 bg-purple-900/30',
      green: 'border-green-500 bg-green-900/30',
      red: 'border-red-500 bg-red-900/30'
    }
    return colors[color] || colors.blue
  }

  const getTextColorClass = (color: string, revealed: boolean) => {
    if (!revealed) return 'text-gray-500'
    const colors: Record<string, string> = {
      blue: 'text-blue-300',
      purple: 'text-purple-300',
      green: 'text-green-300',
      red: 'text-red-300'
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="flex flex-col h-full animate-fadeIn p-8 overflow-y-auto custom-scrollbar">
      <div className="mb-4 text-center">
        <h2 className={`${isPresenting ? 'text-3xl' : 'text-4xl'} font-black text-white mb-2`}>Random Sampling</h2>
        <p className="text-gray-400">Click "Reveal Next" or click cards to reveal content step by step</p>
      </div>

      {/* Control buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button 
          onClick={revealNext} 
          disabled={revealedSteps.length >= 4}
          className={`px-6 py-2 rounded-lg font-bold transition-all ${
            revealedSteps.length >= 4 
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          Reveal Next ({revealedSteps.length}/4)
        </button>
        <button 
          onClick={revealAll}
          className="px-6 py-2 rounded-lg font-bold bg-gray-700 hover:bg-gray-600 text-white transition-all"
        >
          Show All
        </button>
      </div>

      {/* Steps as cards */}
      <div className="grid grid-cols-2 gap-4 max-w-5xl mx-auto flex-1">
        {steps.map((step) => {
          const isRevealed = revealedSteps.includes(step.id)
          return (
            <div 
              key={step.id}
              onClick={() => !isRevealed && setRevealedSteps([...revealedSteps, step.id])}
              className={`rounded-xl border-2 p-5 cursor-pointer transition-all duration-500 ${
                getColorClasses(step.color, isRevealed)
              } ${isRevealed ? 'scale-100 opacity-100' : 'scale-95 opacity-60 hover:opacity-80'}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className={getTextColorClass(step.color, isRevealed)}>
                  {step.icon}
                </span>
                <h3 className={`font-bold text-lg ${getTextColorClass(step.color, isRevealed)}`}>
                  {step.title}
                </h3>
              </div>
              
              {isRevealed ? (
                Array.isArray(step.content) ? (
                  <ul className="space-y-1 text-gray-200 text-sm">
                    {step.content.map((item, i) => <li key={i}>• {item}</li>)}
                  </ul>
                ) : (
                  <p className="text-gray-200 text-sm">{step.content}</p>
                )
              ) : (
                <p className="text-gray-600 italic">Click to reveal...</p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Random Sampling AFL
const RandomSamplingAFL: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const questions = [
    {
      question: "What is essential for random sampling?",
      options: ["A large budget", "Every person having an equal chance of selection", "Volunteers", "A specific age group"],
      correct: 1,
      explanation: "Random sampling means everyone in the target population has an equal chance of being selected."
    },
    {
      question: "What is a limitation of random sampling?",
      options: ["It's biased", "It needs a complete list of the population", "It's too simple", "It only works with small samples"],
      correct: 1,
      explanation: "You need a complete list of everyone in the target population, which can be difficult to obtain."
    }
  ]

  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)

  const handleSelect = (idx: number) => {
    if (showFeedback) return
    setSelected(idx)
    setShowFeedback(true)
    if (idx === questions[currentQ].correct) setScore(s => s + 1)
  }

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(q => q + 1)
      setSelected(null)
      setShowFeedback(false)
    }
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Check Your Understanding</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Random Sampling - Question {currentQ + 1} of {questions.length}</p>
      </div>

      <div className={`flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full`}>
        <div className={`bg-gray-800/50 rounded-xl border border-gray-700 ${isPresenting ? 'p-6' : 'p-8'} mb-6`}>
          <p className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-white mb-6`}>{questions[currentQ].question}</p>
          
          <div className="grid grid-cols-1 gap-3">
            {questions[currentQ].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`p-4 rounded-lg text-left transition-all ${isPresenting ? 'text-sm' : 'text-base'} ${
                  showFeedback
                    ? idx === questions[currentQ].correct
                      ? 'bg-green-600/30 border-2 border-green-500 text-green-200'
                      : idx === selected
                      ? 'bg-red-600/30 border-2 border-red-500 text-red-200'
                      : 'bg-gray-700/30 border border-gray-600 text-gray-400'
                    : selected === idx
                    ? 'bg-blue-600/30 border-2 border-blue-500 text-white'
                    : 'bg-gray-700/50 border border-gray-600 text-gray-200 hover:bg-gray-700'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {showFeedback && (
            <div className={`mt-6 p-4 rounded-lg ${selected === questions[currentQ].correct ? 'bg-green-900/30 border border-green-600' : 'bg-amber-900/30 border border-amber-600'}`}>
              <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200`}>{questions[currentQ].explanation}</p>
            </div>
          )}
        </div>

        {showFeedback && currentQ < questions.length - 1 && (
          <button onClick={nextQuestion} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg self-center">
            Next Question →
          </button>
        )}

        {showFeedback && currentQ === questions.length - 1 && (
          <div className="text-center">
            <p className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-white`}>Score: {score}/{questions.length}</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Opportunity Sampling Teaching Slide
const OpportunitySamplingTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [revealedSteps, setRevealedSteps] = useState<number[]>([])

  const steps = [
    { 
      id: 1, 
      title: 'What is it?', 
      icon: <HelpCircle size={24} />, 
      color: 'amber', 
      content: 'Selecting participants who are available at the time. Often convenient - whoever is around. Also called "convenience sampling".' 
    },
    { 
      id: 2, 
      title: 'How does it work?', 
      icon: <Cog size={24} />, 
      color: 'orange', 
      content: [
        'Go to a location where people are available',
        'Ask whoever is there and willing to participate',
        'Continue until you have enough participants',
        'No need for a sampling frame or list'
      ] 
    },
    { 
      id: 3, 
      title: 'Strengths', 
      icon: <CheckCircle size={24} />, 
      color: 'green', 
      content: [
        'Quick and easy',
        'Cheap - minimal resources needed',
        'Practical for student research'
      ] 
    },
    { 
      id: 4, 
      title: 'Limitations', 
      icon: <XCircle size={24} />, 
      color: 'red', 
      content: [
        'Biased - only certain types of people may be available',
        'Not representative',
        'Cannot generalise results'
      ] 
    },
  ]

  const revealNext = () => {
    const nextStep = revealedSteps.length + 1
    if (nextStep <= steps.length) {
      setRevealedSteps([...revealedSteps, nextStep])
    }
  }

  const revealAll = () => {
    setRevealedSteps([1, 2, 3, 4])
  }

  const getColorClasses = (color: string, revealed: boolean) => {
    if (!revealed) return 'border-gray-700 bg-gray-800/50'
    const colors: Record<string, string> = {
      amber: 'border-amber-500 bg-amber-900/30',
      orange: 'border-orange-500 bg-orange-900/30',
      green: 'border-green-500 bg-green-900/30',
      red: 'border-red-500 bg-red-900/30'
    }
    return colors[color] || colors.amber
  }

  const getTextColorClass = (color: string, revealed: boolean) => {
    if (!revealed) return 'text-gray-500'
    const colors: Record<string, string> = {
      amber: 'text-amber-300',
      orange: 'text-orange-300',
      green: 'text-green-300',
      red: 'text-red-300'
    }
    return colors[color] || colors.amber
  }

  return (
    <div className="flex flex-col h-full animate-fadeIn p-8 overflow-y-auto custom-scrollbar">
      <div className="mb-4 text-center">
        <h2 className={`${isPresenting ? 'text-3xl' : 'text-4xl'} font-black text-white mb-2`}>Opportunity Sampling</h2>
        <p className="text-gray-400">Click "Reveal Next" or click cards to reveal content step by step</p>
      </div>

      {/* Control buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button 
          onClick={revealNext} 
          disabled={revealedSteps.length >= 4}
          className={`px-6 py-2 rounded-lg font-bold transition-all ${
            revealedSteps.length >= 4 
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
              : 'bg-amber-600 hover:bg-amber-700 text-white'
          }`}
        >
          Reveal Next ({revealedSteps.length}/4)
        </button>
        <button 
          onClick={revealAll}
          className="px-6 py-2 rounded-lg font-bold bg-gray-700 hover:bg-gray-600 text-white transition-all"
        >
          Show All
        </button>
      </div>

      {/* Steps as cards */}
      <div className="grid grid-cols-2 gap-4 max-w-5xl mx-auto flex-1">
        {steps.map((step) => {
          const isRevealed = revealedSteps.includes(step.id)
          return (
            <div 
              key={step.id}
              onClick={() => !isRevealed && setRevealedSteps([...revealedSteps, step.id])}
              className={`rounded-xl border-2 p-5 cursor-pointer transition-all duration-500 ${
                getColorClasses(step.color, isRevealed)
              } ${isRevealed ? 'scale-100 opacity-100' : 'scale-95 opacity-60 hover:opacity-80'}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className={getTextColorClass(step.color, isRevealed)}>
                  {step.icon}
                </span>
                <h3 className={`font-bold text-lg ${getTextColorClass(step.color, isRevealed)}`}>
                  {step.title}
                </h3>
              </div>
              
              {isRevealed ? (
                Array.isArray(step.content) ? (
                  <ul className="space-y-1 text-gray-200 text-sm">
                    {step.content.map((item, i) => <li key={i}>• {item}</li>)}
                  </ul>
                ) : (
                  <p className="text-gray-200 text-sm">{step.content}</p>
                )
              ) : (
                <p className="text-gray-600 italic">Click to reveal...</p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Opportunity Sampling AFL
const OpportunitySamplingAFL: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const questions = [
    {
      question: "Why is opportunity sampling popular with student researchers?",
      options: ["It's more scientific", "It's quick and easy", "It produces the best results", "It requires special equipment"],
      correct: 1,
      explanation: "Opportunity sampling is quick, easy, and practical - perfect for students with limited time and resources."
    },
    {
      question: "What is the main problem with opportunity sampling?",
      options: ["It takes too long", "It's too expensive", "The sample may not be representative", "It needs too many participants"],
      correct: 2,
      explanation: "The sample only includes available people, who may not represent the wider population."
    }
  ]

  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)

  const handleSelect = (idx: number) => {
    if (showFeedback) return
    setSelected(idx)
    setShowFeedback(true)
    if (idx === questions[currentQ].correct) setScore(s => s + 1)
  }

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(q => q + 1)
      setSelected(null)
      setShowFeedback(false)
    }
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Check Your Understanding</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Opportunity Sampling - Question {currentQ + 1} of {questions.length}</p>
      </div>

      <div className={`flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full`}>
        <div className={`bg-gray-800/50 rounded-xl border border-gray-700 ${isPresenting ? 'p-6' : 'p-8'} mb-6`}>
          <p className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-white mb-6`}>{questions[currentQ].question}</p>
          
          <div className="grid grid-cols-1 gap-3">
            {questions[currentQ].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`p-4 rounded-lg text-left transition-all ${isPresenting ? 'text-sm' : 'text-base'} ${
                  showFeedback
                    ? idx === questions[currentQ].correct
                      ? 'bg-green-600/30 border-2 border-green-500 text-green-200'
                      : idx === selected
                      ? 'bg-red-600/30 border-2 border-red-500 text-red-200'
                      : 'bg-gray-700/30 border border-gray-600 text-gray-400'
                    : selected === idx
                    ? 'bg-blue-600/30 border-2 border-blue-500 text-white'
                    : 'bg-gray-700/50 border border-gray-600 text-gray-200 hover:bg-gray-700'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {showFeedback && (
            <div className={`mt-6 p-4 rounded-lg ${selected === questions[currentQ].correct ? 'bg-green-900/30 border border-green-600' : 'bg-amber-900/30 border border-amber-600'}`}>
              <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200`}>{questions[currentQ].explanation}</p>
            </div>
          )}
        </div>

        {showFeedback && currentQ < questions.length - 1 && (
          <button onClick={nextQuestion} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg self-center">
            Next Question →
          </button>
        )}

        {showFeedback && currentQ === questions.length - 1 && (
          <div className="text-center">
            <p className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-white`}>Score: {score}/{questions.length}</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Systematic Sampling Teaching Slide
const SystematicSamplingTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [revealedSteps, setRevealedSteps] = useState<number[]>([])

  const steps = [
    { 
      id: 1, 
      title: 'What is it?', 
      icon: <HelpCircle size={24} />, 
      color: 'cyan', 
      content: 'Select every nth person from a list. First person selected randomly. Then follow the fixed interval throughout the list.' 
    },
    { 
      id: 2, 
      title: 'How does it work?', 
      icon: <Cog size={24} />, 
      color: 'teal', 
      content: [
        'Get a complete list of target population',
        'Calculate the interval (population ÷ sample size needed)',
        'Randomly select your starting point',
        'Select every nth person from that point'
      ] 
    },
    { 
      id: 3, 
      title: 'Strengths', 
      icon: <CheckCircle size={24} />, 
      color: 'green', 
      content: [
        'Objective - less researcher bias',
        'Fairly representative',
        'Easier than random sampling'
      ] 
    },
    { 
      id: 4, 
      title: 'Limitations', 
      icon: <XCircle size={24} />, 
      color: 'red', 
      content: [
        'Still needs complete list of population',
        'Can miss patterns if list is ordered',
        'Selected people may refuse'
      ] 
    },
  ]

  const revealNext = () => {
    const nextStep = revealedSteps.length + 1
    if (nextStep <= steps.length) {
      setRevealedSteps([...revealedSteps, nextStep])
    }
  }

  const revealAll = () => {
    setRevealedSteps([1, 2, 3, 4])
  }

  const getColorClasses = (color: string, revealed: boolean) => {
    if (!revealed) return 'border-gray-700 bg-gray-800/50'
    const colors: Record<string, string> = {
      cyan: 'border-cyan-500 bg-cyan-900/30',
      teal: 'border-teal-500 bg-teal-900/30',
      green: 'border-green-500 bg-green-900/30',
      red: 'border-red-500 bg-red-900/30'
    }
    return colors[color] || colors.cyan
  }

  const getTextColorClass = (color: string, revealed: boolean) => {
    if (!revealed) return 'text-gray-500'
    const colors: Record<string, string> = {
      cyan: 'text-cyan-300',
      teal: 'text-teal-300',
      green: 'text-green-300',
      red: 'text-red-300'
    }
    return colors[color] || colors.cyan
  }

  return (
    <div className="flex flex-col h-full animate-fadeIn p-8 overflow-y-auto custom-scrollbar">
      <div className="mb-4 text-center">
        <h2 className={`${isPresenting ? 'text-3xl' : 'text-4xl'} font-black text-white mb-2`}>Systematic Sampling</h2>
        <p className="text-gray-400">Click "Reveal Next" or click cards to reveal content step by step</p>
      </div>

      {/* Control buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button 
          onClick={revealNext} 
          disabled={revealedSteps.length >= 4}
          className={`px-6 py-2 rounded-lg font-bold transition-all ${
            revealedSteps.length >= 4 
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
              : 'bg-cyan-600 hover:bg-cyan-700 text-white'
          }`}
        >
          Reveal Next ({revealedSteps.length}/4)
        </button>
        <button 
          onClick={revealAll}
          className="px-6 py-2 rounded-lg font-bold bg-gray-700 hover:bg-gray-600 text-white transition-all"
        >
          Show All
        </button>
      </div>

      {/* Steps as cards */}
      <div className="grid grid-cols-2 gap-4 max-w-5xl mx-auto flex-1">
        {steps.map((step) => {
          const isRevealed = revealedSteps.includes(step.id)
          return (
            <div 
              key={step.id}
              onClick={() => !isRevealed && setRevealedSteps([...revealedSteps, step.id])}
              className={`rounded-xl border-2 p-5 cursor-pointer transition-all duration-500 ${
                getColorClasses(step.color, isRevealed)
              } ${isRevealed ? 'scale-100 opacity-100' : 'scale-95 opacity-60 hover:opacity-80'}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className={getTextColorClass(step.color, isRevealed)}>
                  {step.icon}
                </span>
                <h3 className={`font-bold text-lg ${getTextColorClass(step.color, isRevealed)}`}>
                  {step.title}
                </h3>
              </div>
              
              {isRevealed ? (
                Array.isArray(step.content) ? (
                  <ul className="space-y-1 text-gray-200 text-sm">
                    {step.content.map((item, i) => <li key={i}>• {item}</li>)}
                  </ul>
                ) : (
                  <p className="text-gray-200 text-sm">{step.content}</p>
                )
              ) : (
                <p className="text-gray-600 italic">Click to reveal...</p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Systematic Sampling AFL
const SystematicSamplingAFL: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const questions = [
    {
      question: "In systematic sampling, what does 'every nth person' mean?",
      options: ["Everyone with a certain name", "Every person from a specific group", "Selecting at regular intervals (e.g., every 5th person)", "Only people who volunteer"],
      correct: 2,
      explanation: "Systematic sampling selects people at fixed intervals, like every 5th or 10th person on a list."
    },
    {
      question: "How should the first person be selected in systematic sampling?",
      options: ["The researcher chooses", "Alphabetically first", "Randomly", "Whoever volunteers first"],
      correct: 2,
      explanation: "The first person should be selected randomly, then the fixed interval is followed."
    }
  ]

  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)

  const handleSelect = (idx: number) => {
    if (showFeedback) return
    setSelected(idx)
    setShowFeedback(true)
    if (idx === questions[currentQ].correct) setScore(s => s + 1)
  }

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(q => q + 1)
      setSelected(null)
      setShowFeedback(false)
    }
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Check Your Understanding</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Systematic Sampling - Question {currentQ + 1} of {questions.length}</p>
      </div>

      <div className={`flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full`}>
        <div className={`bg-gray-800/50 rounded-xl border border-gray-700 ${isPresenting ? 'p-6' : 'p-8'} mb-6`}>
          <p className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-white mb-6`}>{questions[currentQ].question}</p>
          
          <div className="grid grid-cols-1 gap-3">
            {questions[currentQ].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`p-4 rounded-lg text-left transition-all ${isPresenting ? 'text-sm' : 'text-base'} ${
                  showFeedback
                    ? idx === questions[currentQ].correct
                      ? 'bg-green-600/30 border-2 border-green-500 text-green-200'
                      : idx === selected
                      ? 'bg-red-600/30 border-2 border-red-500 text-red-200'
                      : 'bg-gray-700/30 border border-gray-600 text-gray-400'
                    : selected === idx
                    ? 'bg-blue-600/30 border-2 border-blue-500 text-white'
                    : 'bg-gray-700/50 border border-gray-600 text-gray-200 hover:bg-gray-700'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {showFeedback && (
            <div className={`mt-6 p-4 rounded-lg ${selected === questions[currentQ].correct ? 'bg-green-900/30 border border-green-600' : 'bg-amber-900/30 border border-amber-600'}`}>
              <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200`}>{questions[currentQ].explanation}</p>
            </div>
          )}
        </div>

        {showFeedback && currentQ < questions.length - 1 && (
          <button onClick={nextQuestion} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg self-center">
            Next Question →
          </button>
        )}

        {showFeedback && currentQ === questions.length - 1 && (
          <div className="text-center">
            <p className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-white`}>Score: {score}/{questions.length}</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Stratified Sampling Teaching Slide
const StratifiedSamplingTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [revealedSteps, setRevealedSteps] = useState<number[]>([])

  const steps = [
    { 
      id: 1, 
      title: 'What is it?', 
      icon: <HelpCircle size={24} />, 
      color: 'purple', 
      content: 'Population divided into subgroups (strata). Participants selected from each subgroup in proportion to the population. Within each stratum, selection is random.' 
    },
    { 
      id: 2, 
      title: 'How does it work?', 
      icon: <Cog size={24} />, 
      color: 'violet', 
      content: [
        'Identify the key subgroups (strata) in your population',
        'Calculate the proportion of each subgroup',
        'Select participants from each stratum to match proportions',
        'Use random selection within each stratum'
      ] 
    },
    { 
      id: 3, 
      title: 'Strengths', 
      icon: <CheckCircle size={24} />, 
      color: 'green', 
      content: [
        'Highly representative',
        'Ensures all subgroups included',
        'Results can be generalised confidently'
      ] 
    },
    { 
      id: 4, 
      title: 'Limitations', 
      icon: <XCircle size={24} />, 
      color: 'red', 
      content: [
        'Time-consuming',
        'Need to identify strata in advance',
        'Requires detailed population data'
      ] 
    },
  ]

  const revealNext = () => {
    const nextStep = revealedSteps.length + 1
    if (nextStep <= steps.length) {
      setRevealedSteps([...revealedSteps, nextStep])
    }
  }

  const revealAll = () => {
    setRevealedSteps([1, 2, 3, 4])
  }

  const getColorClasses = (color: string, revealed: boolean) => {
    if (!revealed) return 'border-gray-700 bg-gray-800/50'
    const colors: Record<string, string> = {
      purple: 'border-purple-500 bg-purple-900/30',
      violet: 'border-violet-500 bg-violet-900/30',
      green: 'border-green-500 bg-green-900/30',
      red: 'border-red-500 bg-red-900/30'
    }
    return colors[color] || colors.purple
  }

  const getTextColorClass = (color: string, revealed: boolean) => {
    if (!revealed) return 'text-gray-500'
    const colors: Record<string, string> = {
      purple: 'text-purple-300',
      violet: 'text-violet-300',
      green: 'text-green-300',
      red: 'text-red-300'
    }
    return colors[color] || colors.purple
  }

  return (
    <div className="flex flex-col h-full animate-fadeIn p-8 overflow-y-auto custom-scrollbar">
      <div className="mb-4 text-center">
        <h2 className={`${isPresenting ? 'text-3xl' : 'text-4xl'} font-black text-white mb-2`}>Stratified Sampling</h2>
        <p className="text-gray-400">Click "Reveal Next" or click cards to reveal content step by step</p>
      </div>

      {/* Control buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button 
          onClick={revealNext} 
          disabled={revealedSteps.length >= 4}
          className={`px-6 py-2 rounded-lg font-bold transition-all ${
            revealedSteps.length >= 4 
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
              : 'bg-purple-600 hover:bg-purple-700 text-white'
          }`}
        >
          Reveal Next ({revealedSteps.length}/4)
        </button>
        <button 
          onClick={revealAll}
          className="px-6 py-2 rounded-lg font-bold bg-gray-700 hover:bg-gray-600 text-white transition-all"
        >
          Show All
        </button>
      </div>

      {/* Steps as cards */}
      <div className="grid grid-cols-2 gap-4 max-w-5xl mx-auto flex-1">
        {steps.map((step) => {
          const isRevealed = revealedSteps.includes(step.id)
          return (
            <div 
              key={step.id}
              onClick={() => !isRevealed && setRevealedSteps([...revealedSteps, step.id])}
              className={`rounded-xl border-2 p-5 cursor-pointer transition-all duration-500 ${
                getColorClasses(step.color, isRevealed)
              } ${isRevealed ? 'scale-100 opacity-100' : 'scale-95 opacity-60 hover:opacity-80'}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className={getTextColorClass(step.color, isRevealed)}>
                  {step.icon}
                </span>
                <h3 className={`font-bold text-lg ${getTextColorClass(step.color, isRevealed)}`}>
                  {step.title}
                </h3>
              </div>
              
              {isRevealed ? (
                Array.isArray(step.content) ? (
                  <ul className="space-y-1 text-gray-200 text-sm">
                    {step.content.map((item, i) => <li key={i}>• {item}</li>)}
                  </ul>
                ) : (
                  <p className="text-gray-200 text-sm">{step.content}</p>
                )
              ) : (
                <p className="text-gray-600 italic">Click to reveal...</p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Stratified Sampling AFL
const StratifiedSamplingAFL: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const questions = [
    {
      question: "What are 'strata' in stratified sampling?",
      options: ["Different experiments", "Subgroups within the population", "Research methods", "Types of hypotheses"],
      correct: 1,
      explanation: "Strata are subgroups within the target population (e.g., age groups, genders)."
    },
    {
      question: "Why is stratified sampling considered highly representative?",
      options: ["It uses the biggest sample", "It matches population proportions", "It's the quickest method", "It only uses volunteers"],
      correct: 1,
      explanation: "By matching the proportions of subgroups in the sample to the population, it accurately represents everyone."
    }
  ]

  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)

  const handleSelect = (idx: number) => {
    if (showFeedback) return
    setSelected(idx)
    setShowFeedback(true)
    if (idx === questions[currentQ].correct) setScore(s => s + 1)
  }

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(q => q + 1)
      setSelected(null)
      setShowFeedback(false)
    }
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Check Your Understanding</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Stratified Sampling - Question {currentQ + 1} of {questions.length}</p>
      </div>

      <div className={`flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full`}>
        <div className={`bg-gray-800/50 rounded-xl border border-gray-700 ${isPresenting ? 'p-6' : 'p-8'} mb-6`}>
          <p className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-white mb-6`}>{questions[currentQ].question}</p>
          
          <div className="grid grid-cols-1 gap-3">
            {questions[currentQ].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`p-4 rounded-lg text-left transition-all ${isPresenting ? 'text-sm' : 'text-base'} ${
                  showFeedback
                    ? idx === questions[currentQ].correct
                      ? 'bg-green-600/30 border-2 border-green-500 text-green-200'
                      : idx === selected
                      ? 'bg-red-600/30 border-2 border-red-500 text-red-200'
                      : 'bg-gray-700/30 border border-gray-600 text-gray-400'
                    : selected === idx
                    ? 'bg-blue-600/30 border-2 border-blue-500 text-white'
                    : 'bg-gray-700/50 border border-gray-600 text-gray-200 hover:bg-gray-700'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {showFeedback && (
            <div className={`mt-6 p-4 rounded-lg ${selected === questions[currentQ].correct ? 'bg-green-900/30 border border-green-600' : 'bg-amber-900/30 border border-amber-600'}`}>
              <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200`}>{questions[currentQ].explanation}</p>
            </div>
          )}
        </div>

        {showFeedback && currentQ < questions.length - 1 && (
          <button onClick={nextQuestion} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg self-center">
            Next Question →
          </button>
        )}

        {showFeedback && currentQ === questions.length - 1 && (
          <div className="text-center">
            <p className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-white`}>Score: {score}/{questions.length}</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Interactive Sampling Methods Comparison
const SamplingMethodsInteractiveSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null)
  const [animating, setAnimating] = useState(false)

  const methods = [
    { id: 'random', name: 'Random', icon: <Shuffle size={20} />, color: 'blue', shortDesc: 'Equal chance for all' },
    { id: 'opportunity', name: 'Opportunity', icon: <Users size={20} />, color: 'amber', shortDesc: 'Whoever is available' },
    { id: 'systematic', name: 'Systematic', icon: <List size={20} />, color: 'emerald', shortDesc: 'Every nth person' },
    { id: 'stratified', name: 'Stratified', icon: <Layers size={20} />, color: 'purple', shortDesc: 'Proportional groups' },
  ]

  const methodDetails: Record<string, { bias: string, representative: string, effort: string, example: string }> = {
    random: { bias: 'None', representative: 'High', effort: 'High', example: 'Random number generator selects from list' },
    opportunity: { bias: 'High', representative: 'Low', effort: 'Low', example: 'Asking people in a shopping centre' },
    systematic: { bias: 'Low', representative: 'Medium', effort: 'Medium', example: 'Every 10th person on a register' },
    stratified: { bias: 'None', representative: 'Very High', effort: 'Very High', example: 'Matching sample to population percentages' },
  }

  const colorMap: Record<string, { border: string, bg: string, text: string }> = {
    blue: { border: 'border-blue-400', bg: 'bg-blue-900/40', text: 'text-blue-300' },
    amber: { border: 'border-amber-400', bg: 'bg-amber-900/40', text: 'text-amber-300' },
    emerald: { border: 'border-emerald-400', bg: 'bg-emerald-900/40', text: 'text-emerald-300' },
    purple: { border: 'border-purple-400', bg: 'bg-purple-900/40', text: 'text-purple-300' },
  }

  const simulateSampling = (method: string) => {
    setSelectedMethod(method)
    setAnimating(true)
    setTimeout(() => setAnimating(false), 1500)
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-8' : 'p-10'}`}>
      <div className="mb-6 text-center">
        <h2 className={`${isPresenting ? 'text-5xl' : 'text-4xl'} font-black text-white mb-2`}>Sampling Methods</h2>
        <p className={`${isPresenting ? 'text-xl' : ''} text-gray-400`}>Click to see how each method works!</p>
      </div>

      {/* Method Buttons */}
      <div className={`grid grid-cols-4 ${isPresenting ? 'gap-4' : 'gap-3'} mb-6`}>
        {methods.map(m => (
          <button
            key={m.id}
            onClick={() => simulateSampling(m.id)}
            className={`rounded-xl border-2 transition-all duration-300 ${isPresenting ? 'p-4' : 'p-3'} ${
              selectedMethod === m.id
                ? `${colorMap[m.color].border} ${colorMap[m.color].bg} scale-105 shadow-xl`
                : `border-${m.color}-500/40 bg-${m.color}-900/20 hover:scale-102`
            }`}
          >
            <div className={`flex items-center justify-center gap-2 ${colorMap[m.color].text} mb-2`}>
              {m.icon}
              <span className={`${isPresenting ? 'text-xl' : 'text-lg'} font-bold`}>{m.name}</span>
            </div>
            <p className={`text-gray-400 ${isPresenting ? 'text-sm' : 'text-xs'}`}>{m.shortDesc}</p>
          </button>
        ))}
      </div>

      {/* Visual Demo */}
      <div className={`bg-gray-800/30 rounded-2xl border border-gray-700 ${isPresenting ? 'p-6' : 'p-4'} mb-4`}>
        <h3 className={`${isPresenting ? 'text-lg' : 'text-base'} font-bold text-white mb-4`}>Population Sample (click a method to see selection)</h3>
        <div className="grid grid-cols-10 gap-2">
          {Array.from({ length: 20 }).map((_, idx) => {
            const isSelected = selectedMethod === 'random' 
              ? [2, 5, 8, 13, 17].includes(idx)
              : selectedMethod === 'opportunity'
                ? [0, 1, 2, 3, 4].includes(idx)
                : selectedMethod === 'systematic'
                  ? [0, 5, 10, 15].includes(idx)
                  : selectedMethod === 'stratified'
                    ? [0, 5, 10, 12, 15, 18].includes(idx)
                    : false

            const personColor = idx < 5 ? 'text-blue-400' : idx < 10 ? 'text-pink-400' : idx < 15 ? 'text-emerald-400' : 'text-purple-400'

            return (
              <div 
                key={idx}
                className={`aspect-square rounded-lg flex items-center justify-center transition-all duration-300 ${
                  isSelected && animating
                    ? 'bg-yellow-500/30 border-2 border-yellow-400 scale-110'
                    : isSelected
                      ? 'bg-green-500/30 border-2 border-green-400'
                      : 'bg-gray-700/50 border border-gray-600'
                }`}
              >
                <User size={isPresenting ? 24 : 16} className={isSelected ? 'text-white' : personColor} />
              </div>
            )
          })}
        </div>
        {selectedMethod && (
          <p className={`mt-3 ${isPresenting ? 'text-base' : 'text-sm'} text-gray-400`}>
            {selectedMethod === 'random' && '5 randomly selected (any could be chosen)'}
            {selectedMethod === 'opportunity' && '5 selected - whoever was available first'}
            {selectedMethod === 'systematic' && '4 selected - every 5th person'}
            {selectedMethod === 'stratified' && '6 selected - proportional from each color group'}
          </p>
        )}
      </div>

      {/* Details Panel */}
      {selectedMethod && methodDetails[selectedMethod] && (
        <div className={`rounded-2xl border-2 ${colorMap[methods.find(m => m.id === selectedMethod)?.color || 'blue'].border} ${colorMap[methods.find(m => m.id === selectedMethod)?.color || 'blue'].bg} ${isPresenting ? 'p-4' : 'p-3'} animate-fadeIn`}>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <p className={`text-gray-400 ${isPresenting ? 'text-sm' : 'text-xs'}`}>Researcher Bias</p>
              <p className={`${isPresenting ? 'text-lg' : 'text-sm'} font-bold text-white`}>{methodDetails[selectedMethod].bias}</p>
            </div>
            <div>
              <p className={`text-gray-400 ${isPresenting ? 'text-sm' : 'text-xs'}`}>Representative?</p>
              <p className={`${isPresenting ? 'text-lg' : 'text-sm'} font-bold text-white`}>{methodDetails[selectedMethod].representative}</p>
            </div>
            <div>
              <p className={`text-gray-400 ${isPresenting ? 'text-sm' : 'text-xs'}`}>Effort Required</p>
              <p className={`${isPresenting ? 'text-lg' : 'text-sm'} font-bold text-white`}>{methodDetails[selectedMethod].effort}</p>
            </div>
            <div>
              <p className={`text-gray-400 ${isPresenting ? 'text-sm' : 'text-xs'}`}>Example</p>
              <p className={`${isPresenting ? 'text-lg' : 'text-sm'} font-bold text-white`}>{methodDetails[selectedMethod].example}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Sampling Methods Comparison Task
const SamplingComparisonTask: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const scenarios = [
    { scenario: "A researcher uses a random number generator to select 50 employees from a company list of 500.", answer: "random", explanation: "This is random sampling - every employee has an equal chance via random selection." },
    { scenario: "A student asks people in the library if they'd like to participate in their study.", answer: "opportunity", explanation: "This is opportunity sampling - selecting whoever is available and willing." },
    { scenario: "A hospital selects every 20th patient from the admissions list for a survey.", answer: "systematic", explanation: "This is systematic sampling - selecting at fixed intervals from a list." },
    { scenario: "A researcher ensures their sample of 100 includes 30 teenagers, 50 adults, and 20 elderly people, matching the town's demographics.", answer: "stratified", explanation: "This is stratified sampling - proportional representation of subgroups." },
  ]

  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (idx: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [idx]: answer }))
  }

  const checkAnswers = () => setShowResults(true)

  const score = scenarios.filter((s, i) => answers[i] === s.answer).length

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Identify the Sampling Method</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Which sampling method is being used?</p>
      </div>

      <div className="space-y-4 flex-1">
        {scenarios.map((s, idx) => (
          <div key={idx} className={`bg-gray-800/50 rounded-xl border ${showResults ? (answers[idx] === s.answer ? 'border-green-500' : 'border-red-500') : 'border-gray-700'} ${isPresenting ? 'p-4' : 'p-6'}`}>
            <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200 mb-4`}>{s.scenario}</p>
            
            <div className="flex flex-wrap gap-2">
              {['random', 'opportunity', 'systematic', 'stratified'].map(type => (
                <button
                  key={type}
                  onClick={() => !showResults && handleAnswer(idx, type)}
                  className={`px-3 py-2 rounded-lg font-bold capitalize transition-all ${isPresenting ? 'text-xs' : 'text-sm'} ${
                    showResults
                      ? type === s.answer
                        ? 'bg-green-600 text-white'
                        : answers[idx] === type
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-700 text-gray-400'
                      : answers[idx] === type
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {showResults && answers[idx] !== s.answer && (
              <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-amber-300 mt-3`}>{s.explanation}</p>
            )}
          </div>
        ))}
      </div>

      {!showResults && Object.keys(answers).length === scenarios.length && (
        <button onClick={checkAnswers} className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg mt-4 self-center">
          Check My Answers
        </button>
      )}

      {showResults && (
        <div className={`text-center mt-4 ${isPresenting ? 'p-4' : 'p-6'} bg-gray-800/50 rounded-xl`}>
          <p className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-white`}>Score: {score}/{scenarios.length}</p>
        </div>
      )}
    </div>
  )
}

// Lesson 5 Extended Exam Task
const Lesson5ExtendedExamTask: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [showMarkScheme, setShowMarkScheme] = useState(false)

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Extended Exam Practice</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Sampling Methods - 6 Mark Question</p>
      </div>

      <div className={`bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl border border-purple-500/30 ${isPresenting ? 'p-4 mb-4' : 'p-6 mb-6'}`}>
        <p className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-white mb-2`}>Question:</p>
        <p className={`${isPresenting ? 'text-sm' : 'text-lg'} text-gray-200`}>
          A researcher wants to study attitudes towards social media among Year 11 students. Evaluate whether opportunity sampling or stratified sampling would be more appropriate. [6 marks]
        </p>
      </div>

      <button 
        onClick={() => setShowMarkScheme(!showMarkScheme)}
        className={`mt-4 bg-amber-600 hover:bg-amber-700 text-white font-bold ${isPresenting ? 'py-2 px-4 text-sm' : 'py-3 px-6'} rounded-lg self-center`}
      >
        {showMarkScheme ? 'Hide' : 'Show'} Mark Scheme
      </button>

      {showMarkScheme && (
        <div className={`mt-4 bg-amber-900/20 rounded-xl border border-amber-500/30 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-lg'} font-bold text-amber-300 mb-3`}>Mark Scheme Points:</h3>
          <div className={`space-y-2 ${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200`}>
            <p><span className="font-bold text-amber-300">Opportunity +:</span> Quick and easy to gather data, practical for student research, cheap</p>
            <p><span className="font-bold text-amber-300">Opportunity -:</span> May be biased (only certain students available), not representative, cannot generalise</p>
            <p><span className="font-bold text-amber-300">Stratified +:</span> Representative of different subgroups (gender, ethnicity), can generalise findings, ensures all groups included</p>
            <p><span className="font-bold text-amber-300">Stratified -:</span> Time-consuming, need to identify strata in advance, requires detailed data about Year 11 population</p>
            <p><span className="font-bold text-amber-300">Conclusion:</span> Stratified better for generalisability but opportunity more practical given time/resource constraints</p>
          </div>
        </div>
      )}
    </div>
  )
}

// ============= GCSE LESSON 6: ETHICAL CONSIDERATIONS =============

// Interactive Ethics Checklist Slide
const EthicsInteractiveSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [checkedItems, setCheckedItems] = useState<string[]>([])

  const ethicsChecklist = [
    { id: 'consent', label: 'Informed Consent', desc: 'Participants agree to take part and understand what\'s involved', icon: <CheckCircle size={20} />, color: 'blue' },
    { id: 'deception', label: 'No Unnecessary Deception', desc: 'Only deceive if absolutely essential, reveal in debriefing', icon: <AlertTriangle size={20} />, color: 'amber' },
    { id: 'harm', label: 'Protection from Harm', desc: 'No physical or psychological harm beyond everyday life', icon: <ShieldAlert size={20} />, color: 'rose' },
    { id: 'withdraw', label: 'Right to Withdraw', desc: 'Can leave at any time and remove their data', icon: <Eye size={20} />, color: 'emerald' },
    { id: 'confidential', label: 'Confidentiality', desc: 'Personal data protected, participants not identifiable', icon: <EyeOff size={20} />, color: 'cyan' },
    { id: 'debrief', label: 'Debriefing', desc: 'True purpose explained after study, questions answered', icon: <Lightbulb size={20} />, color: 'violet' },
  ]

  const colorMap: Record<string, { border: string, bg: string, text: string, checked: string }> = {
    blue: { border: 'border-blue-500/40', bg: 'bg-blue-900/20', text: 'text-blue-300', checked: 'bg-blue-500' },
    amber: { border: 'border-amber-500/40', bg: 'bg-amber-900/20', text: 'text-amber-300', checked: 'bg-amber-500' },
    rose: { border: 'border-rose-500/40', bg: 'bg-rose-900/20', text: 'text-rose-300', checked: 'bg-rose-500' },
    emerald: { border: 'border-emerald-500/40', bg: 'bg-emerald-900/20', text: 'text-emerald-300', checked: 'bg-emerald-500' },
    cyan: { border: 'border-cyan-500/40', bg: 'bg-cyan-900/20', text: 'text-cyan-300', checked: 'bg-cyan-500' },
    violet: { border: 'border-violet-500/40', bg: 'bg-violet-900/20', text: 'text-violet-300', checked: 'bg-violet-500' },
  }

  const toggleItem = (id: string) => {
    setCheckedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  const allChecked = checkedItems.length === ethicsChecklist.length

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-8' : 'p-10'}`}>
      <div className="mb-6 text-center">
        <h2 className={`${isPresenting ? 'text-5xl' : 'text-4xl'} font-black text-white mb-2`}>Ethics Checklist</h2>
        <p className={`${isPresenting ? 'text-xl' : ''} text-gray-400`}>Click each guideline to check it off — aim for 100%!</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-gray-400">Ethics compliance</span>
          <span className={`font-bold ${allChecked ? 'text-green-400' : 'text-gray-400'}`}>
            {Math.round((checkedItems.length / ethicsChecklist.length) * 100)}%
          </span>
        </div>
        <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-500 ${allChecked ? 'bg-green-500' : 'bg-gradient-to-r from-blue-500 to-purple-500'}`}
            style={{ width: `${(checkedItems.length / ethicsChecklist.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Checklist Items */}
      <div className={`grid grid-cols-2 ${isPresenting ? 'gap-4' : 'gap-3'}`}>
        {ethicsChecklist.map(item => {
          const isChecked = checkedItems.includes(item.id)
          return (
            <button
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`rounded-xl border-2 transition-all duration-300 ${isPresenting ? 'p-4' : 'p-3'} text-left ${
                isChecked
                  ? `${colorMap[item.color].border} ${colorMap[item.color].bg} scale-102`
                  : 'border-gray-700 bg-gray-800/30 hover:border-gray-600'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`${isPresenting ? 'w-8 h-8' : 'w-6 h-6'} rounded-lg flex items-center justify-center transition-all ${
                  isChecked ? `${colorMap[item.color].checked}` : 'bg-gray-700'
                }`}>
                  {isChecked ? (
                    <CheckCircle size={isPresenting ? 20 : 16} className="text-white" />
                  ) : (
                    <div className={`${isPresenting ? 'w-4 h-4' : 'w-3 h-3'} rounded border-2 border-gray-500`} />
                  )}
                </div>
                <div className={`${colorMap[item.color].text}`}>{item.icon}</div>
                <h3 className={`${isPresenting ? 'text-lg' : 'text-base'} font-bold ${isChecked ? colorMap[item.color].text : 'text-gray-300'}`}>
                  {item.label}
                </h3>
              </div>
              <p className={`mt-2 ${isPresenting ? 'text-sm' : 'text-xs'} ${isChecked ? 'text-gray-200' : 'text-gray-500'}`}>
                {item.desc}
              </p>
            </button>
          )
        })}
      </div>

      {/* Completion Message */}
      {allChecked && (
        <div className={`mt-6 rounded-xl border-2 border-green-500/40 bg-green-900/20 ${isPresenting ? 'p-4' : 'p-3'} animate-fadeIn text-center`}>
          <p className={`${isPresenting ? 'text-xl' : 'text-lg'} font-bold text-green-300`}>
            ✓ All ethical guidelines checked! Your study is ready for ethics committee approval.
          </p>
        </div>
      )}
    </div>
  )
}

// Informed Consent Teaching Slide
const InformedConsentTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [checkedItems, setCheckedItems] = useState<number[]>([])

  const ethicalPrinciples = [
    {
      id: 1,
      title: 'Informed Consent',
      description: 'Participants must agree to take part and understand what they\'re agreeing to. They must be told what the study involves.',
      example: 'For children, parental consent is required'
    },
    {
      id: 2,
      title: 'Deception',
      description: 'Misleading participants about the study should be avoided where possible. Sometimes necessary to prevent demand characteristics.',
      example: 'Any deception must be revealed in debriefing'
    },
    {
      id: 3,
      title: 'Protection from Harm',
      description: 'No physical harm or psychological distress. Risk should be no greater than everyday life.',
      example: 'Support must be provided if participants become upset'
    },
    {
      id: 4,
      title: 'Right to Withdraw',
      description: 'Participants can leave at any time and can withdraw their data afterwards. They should not be pressured to continue.',
      example: 'Payment should not affect this right'
    }
  ]

  const toggleCheck = (id: number) => {
    setCheckedItems(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  const progress = (checkedItems.length / ethicalPrinciples.length) * 100

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-8'}`}>
      <div className="mb-4 text-center">
        <h2 className={`${isPresenting ? 'text-3xl' : 'text-4xl'} font-black text-white`}>Ethical Considerations</h2>
        <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-400`}>Check off each principle as you understand it</p>
      </div>

      {/* Progress bar */}
      <div className="max-w-3xl mx-auto w-full mb-6">
        <div className="flex justify-between text-sm text-gray-400 mb-1">
          <span>Progress</span>
          <span>{checkedItems.length}/{ethicalPrinciples.length} complete</span>
        </div>
        <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-green-500 transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Checklist items */}
      <div className={`space-y-3 max-w-3xl mx-auto w-full ${isPresenting ? '' : 'flex-1'}`}>
        {ethicalPrinciples.map((item) => (
          <div
            key={item.id}
            onClick={() => toggleCheck(item.id)}
            className={`rounded-xl border-2 ${isPresenting ? 'p-3' : 'p-4'} cursor-pointer transition-all ${
              checkedItems.includes(item.id)
                ? 'border-green-500 bg-green-900/30'
                : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
            }`}
          >
            <div className="flex items-start gap-4">
              {/* Checkbox */}
              <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center mt-1 flex-shrink-0 ${
                checkedItems.includes(item.id) ? 'bg-green-500 border-green-500' : 'border-gray-500'
              }`}>
                {checkedItems.includes(item.id) && <Check size={16} className="text-white" />}
              </div>

              <div className="flex-1">
                <h3 className={`font-bold ${isPresenting ? 'text-base' : 'text-lg'} ${
                  checkedItems.includes(item.id) ? 'text-green-300' : 'text-gray-200'
                }`}>
                  {item.title}
                </h3>
                <p className={`text-gray-300 ${isPresenting ? 'text-xs' : 'text-sm'} mt-1`}>{item.description}</p>
                {item.example && (
                  <p className={`text-gray-500 ${isPresenting ? 'text-xs' : 'text-xs'} mt-2 italic`}>Example: {item.example}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Completion message */}
      {checkedItems.length === ethicalPrinciples.length && (
        <div className="mt-6 text-center animate-fadeIn">
          <p className="text-green-400 font-bold text-xl">✓ All principles reviewed!</p>
        </div>
      )}
    </div>
  )
}

// Ethics Part 2 Teaching Slide
const EthicsTeachSlide2: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [checkedItems, setCheckedItems] = useState<number[]>([])

  const ethicalPrinciples = [
    {
      id: 1,
      title: 'Confidentiality',
      description: 'Personal data must be protected and participants should not be identifiable. Often use numbers instead of names.',
      example: 'Data must be stored securely'
    },
    {
      id: 2,
      title: 'Debriefing',
      description: 'Occurs after the study. Explains the true purpose and reveals any deception used.',
      example: 'Participants have the opportunity to ask questions'
    },
    {
      id: 3,
      title: 'BPS Guidelines',
      description: 'The British Psychological Society (BPS) publishes ethical guidelines that all UK psychologists must follow. These ensure research is conducted responsibly and participants\' wellbeing is protected.',
      example: 'Studies must be approved by an ethics committee before they can begin'
    }
  ]

  const toggleCheck = (id: number) => {
    setCheckedItems(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  const progress = (checkedItems.length / ethicalPrinciples.length) * 100

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-8'}`}>
      <div className="mb-4 text-center">
        <h2 className={`${isPresenting ? 'text-3xl' : 'text-4xl'} font-black text-white`}>More Ethical Guidelines</h2>
        <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-400`}>Check off each principle as you understand it</p>
      </div>

      {/* Progress bar */}
      <div className="max-w-3xl mx-auto w-full mb-6">
        <div className="flex justify-between text-sm text-gray-400 mb-1">
          <span>Progress</span>
          <span>{checkedItems.length}/{ethicalPrinciples.length} complete</span>
        </div>
        <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-green-500 transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Checklist items */}
      <div className={`space-y-3 max-w-3xl mx-auto w-full ${isPresenting ? '' : 'flex-1'}`}>
        {ethicalPrinciples.map((item) => (
          <div
            key={item.id}
            onClick={() => toggleCheck(item.id)}
            className={`rounded-xl border-2 ${isPresenting ? 'p-3' : 'p-4'} cursor-pointer transition-all ${
              checkedItems.includes(item.id)
                ? 'border-green-500 bg-green-900/30'
                : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
            }`}
          >
            <div className="flex items-start gap-4">
              {/* Checkbox */}
              <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center mt-1 flex-shrink-0 ${
                checkedItems.includes(item.id) ? 'bg-green-500 border-green-500' : 'border-gray-500'
              }`}>
                {checkedItems.includes(item.id) && <Check size={16} className="text-white" />}
              </div>

              <div className="flex-1">
                <h3 className={`font-bold ${isPresenting ? 'text-base' : 'text-lg'} ${
                  checkedItems.includes(item.id) ? 'text-green-300' : 'text-gray-200'
                }`}>
                  {item.title}
                </h3>
                <p className={`text-gray-300 ${isPresenting ? 'text-xs' : 'text-sm'} mt-1`}>{item.description}</p>
                {item.example && (
                  <p className={`text-gray-500 ${isPresenting ? 'text-xs' : 'text-xs'} mt-2 italic`}>Example: {item.example}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Completion message */}
      {checkedItems.length === ethicalPrinciples.length && (
        <div className="mt-6 text-center animate-fadeIn">
          <p className="text-green-400 font-bold text-xl">✓ All principles reviewed!</p>
        </div>
      )}
    </div>
  )
}

// Ethics AFL
const EthicsAFL: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const questions: Question[] = [
    {
      id: 1,
      scenario: "A researcher doesn't tell participants the real aim of the study to prevent them changing their behaviour.",
      question: "Which ethical issue does this raise?",
      options: ["Right to withdraw", "Deception", "Confidentiality"],
      correct: 1
    },
    {
      id: 2,
      scenario: "A participant feels upset during a study about childhood memories.",
      question: "Which ethical guideline is most relevant?",
      options: ["Informed consent", "Protection from harm", "Debriefing"],
      correct: 1
    },
    {
      id: 3,
      scenario: "After the study, participants are told the true purpose and given the chance to ask questions.",
      question: "This is called...",
      options: ["Informed consent", "Debriefing", "Confidentiality"],
      correct: 1
    },
    {
      id: 4,
      scenario: "Participant data is stored with ID numbers instead of names.",
      question: "This helps maintain...",
      options: ["Validity", "Confidentiality", "Reliability"],
      correct: 1
    }
  ]

  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)

  const handleSelect = (idx: number) => {
    if (showFeedback) return
    setSelected(idx)
    setShowFeedback(true)
    if (idx === questions[currentQ].correct) setScore(s => s + 1)
  }

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(q => q + 1)
      setSelected(null)
      setShowFeedback(false)
    }
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Check Your Understanding</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Ethics - Question {currentQ + 1} of {questions.length}</p>
      </div>

      <div className={`flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full`}>
        <div className={`bg-gray-800/50 rounded-xl border border-gray-700 ${isPresenting ? 'p-6' : 'p-8'} mb-6`}>
          {questions[currentQ].scenario && (
            <div className={`bg-blue-900/30 rounded-lg ${isPresenting ? 'p-3 mb-4' : 'p-4 mb-6'} border border-blue-500/30`}>
              <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-blue-200 italic`}>{questions[currentQ].scenario}</p>
            </div>
          )}
          <p className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-white mb-6`}>{questions[currentQ].question}</p>
          
          <div className="grid grid-cols-1 gap-3">
            {questions[currentQ].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`p-4 rounded-lg text-left transition-all ${isPresenting ? 'text-sm' : 'text-base'} ${
                  showFeedback
                    ? idx === questions[currentQ].correct
                      ? 'bg-green-600/30 border-2 border-green-500 text-green-200'
                      : idx === selected
                      ? 'bg-red-600/30 border-2 border-red-500 text-red-200'
                      : 'bg-gray-700/30 border border-gray-600 text-gray-400'
                    : selected === idx
                    ? 'bg-blue-600/30 border-2 border-blue-500 text-white'
                    : 'bg-gray-700/50 border border-gray-600 text-gray-200 hover:bg-gray-700'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {showFeedback && currentQ < questions.length - 1 && (
          <button onClick={nextQuestion} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg self-center">
            Next Question →
          </button>
        )}

        {showFeedback && currentQ === questions.length - 1 && (
          <div className="text-center">
            <p className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-white`}>Score: {score}/{questions.length}</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Ethics Design Task
const EthicsDesignTask: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const scenarios = [
    { 
      scenario: "A study on stress involves participants solving impossible puzzles while being timed.", 
      issues: ["protection", "deception"], 
      explanation: "This may cause psychological distress (protection) and participants weren't told puzzles were impossible (deception)." 
    },
    { 
      scenario: "A researcher secretly observes people's behaviour in a shopping centre.", 
      issues: ["consent", "privacy"], 
      explanation: "Participants didn't give informed consent and their privacy wasn't respected." 
    },
    { 
      scenario: "After a memory study, participants are sent home without any explanation of what the study was about.", 
      issues: ["debriefing"], 
      explanation: "No debriefing was provided - participants should be told the purpose afterwards." 
    },
  ]

  const [selectedIssues, setSelectedIssues] = useState<Record<number, string[]>>({})
  const [showResults, setShowResults] = useState(false)

  const allIssues = ['consent', 'deception', 'protection', 'withdraw', 'confidentiality', 'debriefing', 'privacy']

  const toggleIssue = (scenarioIdx: number, issue: string) => {
    if (showResults) return
    setSelectedIssues(prev => {
      const current = prev[scenarioIdx] || []
      if (current.includes(issue)) {
        return { ...prev, [scenarioIdx]: current.filter(i => i !== issue) }
      } else {
        return { ...prev, [scenarioIdx]: [...current, issue] }
      }
    })
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Identify Ethical Issues</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Select all the ethical issues in each scenario</p>
      </div>

      <div className="space-y-6 flex-1">
        {scenarios.map((s, idx) => (
          <div key={idx} className={`bg-gray-800/50 rounded-xl border border-gray-700 ${isPresenting ? 'p-4' : 'p-6'}`}>
            <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200 mb-4`}>{s.scenario}</p>
            
            <div className="flex flex-wrap gap-2">
              {allIssues.map(issue => (
                <button
                  key={issue}
                  onClick={() => toggleIssue(idx, issue)}
                  className={`px-3 py-1 rounded-lg capitalize transition-all ${isPresenting ? 'text-xs' : 'text-sm'} ${
                    showResults
                      ? s.issues.includes(issue)
                        ? 'bg-green-600 text-white'
                        : (selectedIssues[idx] || []).includes(issue)
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-700 text-gray-400'
                      : (selectedIssues[idx] || []).includes(issue)
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {issue}
                </button>
              ))}
            </div>

            {showResults && (
              <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-amber-300 mt-3`}>{s.explanation}</p>
            )}
          </div>
        ))}
      </div>

      {!showResults && (
        <button onClick={() => setShowResults(true)} className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg mt-4 self-center">
          Check My Answers
        </button>
      )}
    </div>
  )
}

// Lesson 6 Extended Exam Task
const Lesson6ExtendedExamTask: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [showMarkScheme, setShowMarkScheme] = useState(false)

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Extended Exam Practice</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Ethical Considerations - 6 Mark Question</p>
      </div>

      <div className={`bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl border border-purple-500/30 ${isPresenting ? 'p-4 mb-4' : 'p-6 mb-6'}`}>
        <p className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-white mb-2`}>Question:</p>
        <p className={`${isPresenting ? 'text-sm' : 'text-lg'} text-gray-200`}>
          A researcher wants to study whether people are more likely to help someone who appears distressed. They plan to have an actor pretend to be upset in a public place and observe how people respond. Discuss the ethical issues the researcher should consider. [6 marks]
        </p>
      </div>

      <button 
        onClick={() => setShowMarkScheme(!showMarkScheme)}
        className={`mt-4 bg-amber-600 hover:bg-amber-700 text-white font-bold ${isPresenting ? 'py-2 px-4 text-sm' : 'py-3 px-6'} rounded-lg self-center`}
      >
        {showMarkScheme ? 'Hide' : 'Show'} Mark Scheme
      </button>

      {showMarkScheme && (
        <div className={`mt-4 bg-amber-900/20 rounded-xl border border-amber-500/30 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-lg'} font-bold text-amber-300 mb-3`}>Mark Scheme Points:</h3>
          <div className={`space-y-2 ${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200`}>
            <p><span className="font-bold text-amber-300">Informed consent:</span> People don't know they're being observed - cannot give consent</p>
            <p><span className="font-bold text-amber-300">Deception:</span> The distress is fake - people are being misled</p>
            <p><span className="font-bold text-amber-300">Right to withdraw:</span> People can't withdraw if they don't know they're in a study</p>
            <p><span className="font-bold text-amber-300">Protection from harm:</span> Observers may feel distressed seeing someone upset; may feel guilty later if they didn't help</p>
            <p><span className="font-bold text-amber-300">Debriefing:</span> Difficult to debrief everyone who witnessed the scene</p>
            <p><span className="font-bold text-amber-300">Privacy:</span> Observing people in public without their knowledge</p>
          </div>
        </div>
      )}
    </div>
  )
}

// ============= GCSE LESSON 7: SELF-REPORT METHODS =============

// Questionnaires Teaching Slide
const QuestionnairesTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [activeType, setActiveType] = useState<'open' | 'closed'>('open')

  const types = {
    open: {
      title: 'Open Questions',
      color: 'purple',
      icon: '📝',
      description: 'Questions where participants write their own answers in their own words',
      examples: ['What do you think about...?', 'Describe how you feel when...', 'Explain your experience of...'],
      strengths: ['Rich qualitative data', 'Unexpected insights', 'Participant\'s own perspective', 'Detailed responses'],
      limitations: ['Time-consuming to analyze', 'Hard to compare answers', 'May lack detail', 'Difficult to quantify']
    },
    closed: {
      title: 'Closed Questions',
      color: 'blue',
      icon: '☑️',
      description: 'Questions with fixed response options (yes/no, rating scales, multiple choice)',
      examples: ['Rate your satisfaction 1-5', 'Yes/No: Do you enjoy psychology?', 'Select all that apply...'],
      strengths: ['Easy to analyze', 'Quantitative data', 'Easy to compare', 'Quick to answer'],
      limitations: ['Limited responses', 'May not capture true feelings', 'Leading options', 'Less depth']
    }
  }

  const current = types[activeType]
  const colorClasses = {
    purple: { border: 'border-purple-500', bg: 'bg-purple-500', bgFaded: 'bg-purple-900/30', text: 'text-purple-300', textBright: 'text-purple-200' },
    blue: { border: 'border-blue-500', bg: 'bg-blue-500', bgFaded: 'bg-blue-900/30', text: 'text-blue-300', textBright: 'text-blue-200' }
  }
  const colors = colorClasses[current.color as keyof typeof colorClasses]

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      {/* Header */}
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-3xl' : 'text-5xl'} font-black text-white mb-2 flex items-center gap-3`}>
          <ClipboardList size={isPresenting ? 28 : 40} className="text-blue-400" />
          Questionnaires: Question Types
        </h2>
        <p className={`${isPresenting ? 'text-sm' : 'text-lg'} text-gray-400`}>Compare open and closed questions in self-report research</p>
      </div>

      {/* Toggle Buttons */}
      <div className={`flex gap-2 ${isPresenting ? 'mb-4' : 'mb-6'}`}>
        <button
          onClick={() => setActiveType('open')}
          className={`flex-1 ${isPresenting ? 'py-2 px-4' : 'py-3 px-6'} rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
            activeType === 'open'
              ? 'bg-purple-600 text-white border-2 border-purple-400 shadow-lg shadow-purple-500/30'
              : 'bg-gray-800/50 text-gray-400 border-2 border-gray-700 hover:border-purple-500/50 hover:text-purple-300'
          }`}
        >
          <span className={isPresenting ? 'text-lg' : 'text-xl'}>📝</span>
          <span className={isPresenting ? 'text-sm' : 'text-base'}>Open Questions</span>
        </button>
        <button
          onClick={() => setActiveType('closed')}
          className={`flex-1 ${isPresenting ? 'py-2 px-4' : 'py-3 px-6'} rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
            activeType === 'closed'
              ? 'bg-blue-600 text-white border-2 border-blue-400 shadow-lg shadow-blue-500/30'
              : 'bg-gray-800/50 text-gray-400 border-2 border-gray-700 hover:border-blue-500/50 hover:text-blue-300'
          }`}
        >
          <span className={isPresenting ? 'text-lg' : 'text-xl'}>☑️</span>
          <span className={isPresenting ? 'text-sm' : 'text-base'}>Closed Questions</span>
        </button>
      </div>

      {/* Content Panel */}
      <div className={`rounded-xl border-2 ${colors.border}/40 ${colors.bgFaded} ${isPresenting ? 'p-4' : 'p-6'} mb-4`}>
        {/* Title and Description */}
        <div className={`flex items-center gap-3 ${isPresenting ? 'mb-3' : 'mb-4'}`}>
          <span className={isPresenting ? 'text-2xl' : 'text-4xl'}>{current.icon}</span>
          <div>
            <h3 className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold ${colors.text}`}>{current.title}</h3>
            <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-300`}>{current.description}</p>
          </div>
        </div>

        {/* Examples */}
        <div className={`bg-gray-900/50 rounded-lg ${isPresenting ? 'p-3 mb-3' : 'p-4 mb-4'}`}>
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} font-bold ${colors.textBright} mb-2`}>📋 Example Questions:</p>
          <div className="flex flex-wrap gap-2">
            {current.examples.map((ex, i) => (
              <span key={i} className={`${isPresenting ? 'text-xs px-2 py-1' : 'text-sm px-3 py-1'} bg-gray-800 rounded-full text-gray-200 border border-gray-700`}>
                "{ex}"
              </span>
            ))}
          </div>
        </div>

        {/* Strengths and Limitations */}
        <div className="grid grid-cols-2 gap-4">
          <div className={`rounded-lg border border-green-500/40 bg-green-900/20 ${isPresenting ? 'p-3' : 'p-4'}`}>
            <h4 className={`${isPresenting ? 'text-sm' : 'text-base'} font-bold text-green-300 mb-2 flex items-center gap-2`}>
              <CheckCircle size={isPresenting ? 16 : 20} /> Strengths
            </h4>
            <ul className={`space-y-1 ${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200`}>
              {current.strengths.map((s, i) => (
                <li key={i}>• <span className="text-green-300">{s}</span></li>
              ))}
            </ul>
          </div>
          <div className={`rounded-lg border border-red-500/40 bg-red-900/20 ${isPresenting ? 'p-3' : 'p-4'}`}>
            <h4 className={`${isPresenting ? 'text-sm' : 'text-base'} font-bold text-red-300 mb-2 flex items-center gap-2`}>
              <XCircle size={isPresenting ? 16 : 20} /> Limitations
            </h4>
            <ul className={`space-y-1 ${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200`}>
              {current.limitations.map((l, i) => (
                <li key={i}>• <span className="text-red-300">{l}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Comparison Summary */}
      <div className={`rounded-xl border-2 border-amber-500/40 bg-amber-900/20 ${isPresenting ? 'p-3' : 'p-4'}`}>
        <h4 className={`${isPresenting ? 'text-sm' : 'text-base'} font-bold text-amber-300 mb-2 flex items-center gap-2`}>
          <Scale size={isPresenting ? 16 : 20} /> Key Difference
        </h4>
        <div className="flex items-center gap-4">
          <div className={`flex-1 text-center ${isPresenting ? 'p-2' : 'p-3'} bg-purple-900/30 rounded-lg border border-purple-500/30`}>
            <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-purple-300 font-bold`}>Open = Qualitative</p>
            <p className={`${isPresenting ? 'text-xs' : 'text-xs'} text-gray-400`}>Words & feelings</p>
          </div>
          <ArrowLeftRight size={isPresenting ? 20 : 24} className="text-amber-400" />
          <div className={`flex-1 text-center ${isPresenting ? 'p-2' : 'p-3'} bg-blue-900/30 rounded-lg border border-blue-500/30`}>
            <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-blue-300 font-bold`}>Closed = Quantitative</p>
            <p className={`${isPresenting ? 'text-xs' : 'text-xs'} text-gray-400`}>Numbers & stats</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Questionnaires AFL
const QuestionnairesAFL: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const questions = [
    {
      question: "What is a strength of using questionnaires?",
      options: ["You can ask follow-up questions", "They collect data from large samples quickly", "Response rates are always high", "They eliminate social desirability"],
      correct: 1,
      explanation: "Questionnaires can gather data from many people efficiently and cheaply."
    },
    {
      question: "'Rate your happiness from 1-10' is an example of...",
      options: ["An open question", "A closed question", "A leading question", "An ambiguous question"],
      correct: 1,
      explanation: "This is a closed question because it has fixed response options (1-10 scale)."
    }
  ]

  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)

  const handleSelect = (idx: number) => {
    if (showFeedback) return
    setSelected(idx)
    setShowFeedback(true)
    if (idx === questions[currentQ].correct) setScore(s => s + 1)
  }

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(q => q + 1)
      setSelected(null)
      setShowFeedback(false)
    }
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Check Your Understanding</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Questionnaires - Question {currentQ + 1} of {questions.length}</p>
      </div>

      <div className={`flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full`}>
        <div className={`bg-gray-800/50 rounded-xl border border-gray-700 ${isPresenting ? 'p-6' : 'p-8'} mb-6`}>
          <p className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-white mb-6`}>{questions[currentQ].question}</p>
          
          <div className="grid grid-cols-1 gap-3">
            {questions[currentQ].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`p-4 rounded-lg text-left transition-all ${isPresenting ? 'text-sm' : 'text-base'} ${
                  showFeedback
                    ? idx === questions[currentQ].correct
                      ? 'bg-green-600/30 border-2 border-green-500 text-green-200'
                      : idx === selected
                      ? 'bg-red-600/30 border-2 border-red-500 text-red-200'
                      : 'bg-gray-700/30 border border-gray-600 text-gray-400'
                    : selected === idx
                    ? 'bg-blue-600/30 border-2 border-blue-500 text-white'
                    : 'bg-gray-700/50 border border-gray-600 text-gray-200 hover:bg-gray-700'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {showFeedback && (
            <div className={`mt-6 p-4 rounded-lg ${selected === questions[currentQ].correct ? 'bg-green-900/30 border border-green-600' : 'bg-amber-900/30 border border-amber-600'}`}>
              <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200`}>{questions[currentQ].explanation}</p>
            </div>
          )}
        </div>

        {showFeedback && currentQ < questions.length - 1 && (
          <button onClick={nextQuestion} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg self-center">
            Next Question →
          </button>
        )}

        {showFeedback && currentQ === questions.length - 1 && (
          <div className="text-center">
            <p className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-white`}>Score: {score}/{questions.length}</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Interviews Teaching Slide
const InterviewsTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [activeType, setActiveType] = useState<'structured' | 'unstructured'>('structured')

  const types = {
    structured: {
      title: 'Structured Interviews',
      color: 'cyan',
      icon: '📋',
      description: 'Same questions asked to all participants in the same order - like a verbal questionnaire',
      features: ['Pre-determined questions', 'Fixed order', 'Standardized procedure', 'Researcher follows a script'],
      strengths: ['Easy to replicate', 'Easy to compare responses', 'High reliability', 'Quick to train interviewers'],
      limitations: ['Less flexible', 'Cannot follow up interesting answers', 'May miss unexpected insights', 'Feels artificial']
    },
    unstructured: {
      title: 'Unstructured Interviews',
      color: 'pink',
      icon: '💬',
      description: 'More like a natural conversation - questions develop based on participant responses',
      features: ['Open-ended questions', 'Flexible approach', 'Follows participant\'s lead', 'No fixed order'],
      strengths: ['Rich, detailed data', 'Can probe deeper', 'Natural conversation', 'High validity'],
      limitations: ['Hard to compare responses', 'Hard to replicate', 'Time-consuming', 'Interviewer bias risk']
    }
  }

  const current = types[activeType]
  const colorClasses = {
    cyan: { border: 'border-cyan-500', bg: 'bg-cyan-500', bgFaded: 'bg-cyan-900/30', text: 'text-cyan-300', textBright: 'text-cyan-200' },
    pink: { border: 'border-pink-500', bg: 'bg-pink-500', bgFaded: 'bg-pink-900/30', text: 'text-pink-300', textBright: 'text-pink-200' }
  }
  const colors = colorClasses[current.color as keyof typeof colorClasses]

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      {/* Header */}
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-3xl' : 'text-5xl'} font-black text-white mb-2 flex items-center gap-3`}>
          <MessageCircle size={isPresenting ? 28 : 40} className="text-cyan-400" />
          Interviews: Types Compared
        </h2>
        <p className={`${isPresenting ? 'text-sm' : 'text-lg'} text-gray-400`}>Compare structured and unstructured interview approaches</p>
      </div>

      {/* Toggle Buttons */}
      <div className={`flex gap-2 ${isPresenting ? 'mb-4' : 'mb-6'}`}>
        <button
          onClick={() => setActiveType('structured')}
          className={`flex-1 ${isPresenting ? 'py-2 px-4' : 'py-3 px-6'} rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
            activeType === 'structured'
              ? 'bg-cyan-600 text-white border-2 border-cyan-400 shadow-lg shadow-cyan-500/30'
              : 'bg-gray-800/50 text-gray-400 border-2 border-gray-700 hover:border-cyan-500/50 hover:text-cyan-300'
          }`}
        >
          <span className={isPresenting ? 'text-lg' : 'text-xl'}>📋</span>
          <span className={isPresenting ? 'text-sm' : 'text-base'}>Structured</span>
        </button>
        <button
          onClick={() => setActiveType('unstructured')}
          className={`flex-1 ${isPresenting ? 'py-2 px-4' : 'py-3 px-6'} rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
            activeType === 'unstructured'
              ? 'bg-pink-600 text-white border-2 border-pink-400 shadow-lg shadow-pink-500/30'
              : 'bg-gray-800/50 text-gray-400 border-2 border-gray-700 hover:border-pink-500/50 hover:text-pink-300'
          }`}
        >
          <span className={isPresenting ? 'text-lg' : 'text-xl'}>💬</span>
          <span className={isPresenting ? 'text-sm' : 'text-base'}>Unstructured</span>
        </button>
      </div>

      {/* Content Panel */}
      <div className={`rounded-xl border-2 ${colors.border}/40 ${colors.bgFaded} ${isPresenting ? 'p-4' : 'p-6'} mb-4`}>
        {/* Title and Description */}
        <div className={`flex items-center gap-3 ${isPresenting ? 'mb-3' : 'mb-4'}`}>
          <span className={isPresenting ? 'text-2xl' : 'text-4xl'}>{current.icon}</span>
          <div>
            <h3 className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold ${colors.text}`}>{current.title}</h3>
            <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-300`}>{current.description}</p>
          </div>
        </div>

        {/* Key Features */}
        <div className={`bg-gray-900/50 rounded-lg ${isPresenting ? 'p-3 mb-3' : 'p-4 mb-4'}`}>
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} font-bold ${colors.textBright} mb-2`}>🔑 Key Features:</p>
          <div className="flex flex-wrap gap-2">
            {current.features.map((f, i) => (
              <span key={i} className={`${isPresenting ? 'text-xs px-2 py-1' : 'text-sm px-3 py-1'} ${colors.bgFaded} rounded-full text-gray-200 border ${colors.border}/30`}>
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Strengths and Limitations */}
        <div className="grid grid-cols-2 gap-4">
          <div className={`rounded-lg border border-green-500/40 bg-green-900/20 ${isPresenting ? 'p-3' : 'p-4'}`}>
            <h4 className={`${isPresenting ? 'text-sm' : 'text-base'} font-bold text-green-300 mb-2 flex items-center gap-2`}>
              <CheckCircle size={isPresenting ? 16 : 20} /> Strengths
            </h4>
            <ul className={`space-y-1 ${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200`}>
              {current.strengths.map((s, i) => (
                <li key={i}>• <span className="text-green-300">{s}</span></li>
              ))}
            </ul>
          </div>
          <div className={`rounded-lg border border-red-500/40 bg-red-900/20 ${isPresenting ? 'p-3' : 'p-4'}`}>
            <h4 className={`${isPresenting ? 'text-sm' : 'text-base'} font-bold text-red-300 mb-2 flex items-center gap-2`}>
              <XCircle size={isPresenting ? 16 : 20} /> Limitations
            </h4>
            <ul className={`space-y-1 ${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200`}>
              {current.limitations.map((l, i) => (
                <li key={i}>• <span className="text-red-300">{l}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Comparison Summary */}
      <div className={`rounded-xl border-2 border-amber-500/40 bg-amber-900/20 ${isPresenting ? 'p-3' : 'p-4'}`}>
        <h4 className={`${isPresenting ? 'text-sm' : 'text-base'} font-bold text-amber-300 mb-2 flex items-center gap-2`}>
          <Scale size={isPresenting ? 16 : 20} /> Key Difference
        </h4>
        <div className="flex items-center gap-4">
          <div className={`flex-1 text-center ${isPresenting ? 'p-2' : 'p-3'} bg-cyan-900/30 rounded-lg border border-cyan-500/30`}>
            <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-cyan-300 font-bold`}>Structured = Reliable</p>
            <p className={`${isPresenting ? 'text-xs' : 'text-xs'} text-gray-400`}>Consistent & comparable</p>
          </div>
          <ArrowLeftRight size={isPresenting ? 20 : 24} className="text-amber-400" />
          <div className={`flex-1 text-center ${isPresenting ? 'p-2' : 'p-3'} bg-pink-900/30 rounded-lg border border-pink-500/30`}>
            <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-pink-300 font-bold`}>Unstructured = Valid</p>
            <p className={`${isPresenting ? 'text-xs' : 'text-xs'} text-gray-400`}>Rich & meaningful</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Interviews AFL
const InterviewsAFL: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const questions = [
    {
      question: "Which type of interview uses the same questions for all participants?",
      options: ["Structured", "Unstructured", "Semi-structured", "Informal"],
      correct: 0,
      explanation: "Structured interviews use predetermined questions asked in the same order for all participants."
    },
    {
      question: "What is an advantage of unstructured interviews?",
      options: ["Easy to replicate", "Quick to conduct", "Can explore unexpected topics", "Data is easy to analyse"],
      correct: 2,
      explanation: "Unstructured interviews are flexible and allow the interviewer to explore interesting responses in depth."
    }
  ]

  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)

  const handleSelect = (idx: number) => {
    if (showFeedback) return
    setSelected(idx)
    setShowFeedback(true)
    if (idx === questions[currentQ].correct) setScore(s => s + 1)
  }

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(q => q + 1)
      setSelected(null)
      setShowFeedback(false)
    }
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Check Your Understanding</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Interviews - Question {currentQ + 1} of {questions.length}</p>
      </div>

      <div className={`flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full`}>
        <div className={`bg-gray-800/50 rounded-xl border border-gray-700 ${isPresenting ? 'p-6' : 'p-8'} mb-6`}>
          <p className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-white mb-6`}>{questions[currentQ].question}</p>
          
          <div className="grid grid-cols-1 gap-3">
            {questions[currentQ].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`p-4 rounded-lg text-left transition-all ${isPresenting ? 'text-sm' : 'text-base'} ${
                  showFeedback
                    ? idx === questions[currentQ].correct
                      ? 'bg-green-600/30 border-2 border-green-500 text-green-200'
                      : idx === selected
                      ? 'bg-red-600/30 border-2 border-red-500 text-red-200'
                      : 'bg-gray-700/30 border border-gray-600 text-gray-400'
                    : selected === idx
                    ? 'bg-blue-600/30 border-2 border-blue-500 text-white'
                    : 'bg-gray-700/50 border border-gray-600 text-gray-200 hover:bg-gray-700'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {showFeedback && (
            <div className={`mt-6 p-4 rounded-lg ${selected === questions[currentQ].correct ? 'bg-green-900/30 border border-green-600' : 'bg-amber-900/30 border border-amber-600'}`}>
              <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200`}>{questions[currentQ].explanation}</p>
            </div>
          )}
        </div>

        {showFeedback && currentQ < questions.length - 1 && (
          <button onClick={nextQuestion} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg self-center">
            Next Question →
          </button>
        )}

        {showFeedback && currentQ === questions.length - 1 && (
          <div className="text-center">
            <p className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-white`}>Score: {score}/{questions.length}</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Self-Report Design Task
const SelfReportDesignTask: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const scenarios = [
    { scenario: "A researcher needs to gather data from 500 people about their TV watching habits.", answer: "questionnaire", explanation: "Questionnaires are best for large samples - they're quick, cheap, and standardised." },
    { scenario: "A psychologist wants to understand in depth why someone developed a phobia.", answer: "interview", explanation: "An interview allows detailed follow-up questions and exploration of personal experiences." },
    { scenario: "A study needs comparable data from many participants about their sleep patterns.", answer: "questionnaire", explanation: "Questionnaires with closed questions provide standardised, comparable data." },
    { scenario: "A researcher wants to explore what it's like to live with depression.", answer: "interview", explanation: "An interview (probably unstructured) allows rich exploration of personal experiences." },
  ]

  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (idx: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [idx]: answer }))
  }

  const checkAnswers = () => setShowResults(true)

  const score = scenarios.filter((s, i) => answers[i] === s.answer).length

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Choose the Best Method</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Questionnaire or Interview?</p>
      </div>

      <div className="space-y-4 flex-1">
        {scenarios.map((s, idx) => (
          <div key={idx} className={`bg-gray-800/50 rounded-xl border ${showResults ? (answers[idx] === s.answer ? 'border-green-500' : 'border-red-500') : 'border-gray-700'} ${isPresenting ? 'p-4' : 'p-6'}`}>
            <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200 mb-4`}>{s.scenario}</p>
            
            <div className="flex gap-3">
              {['questionnaire', 'interview'].map(type => (
                <button
                  key={type}
                  onClick={() => !showResults && handleAnswer(idx, type)}
                  className={`px-4 py-2 rounded-lg font-bold capitalize transition-all ${isPresenting ? 'text-xs' : 'text-sm'} ${
                    showResults
                      ? type === s.answer
                        ? 'bg-green-600 text-white'
                        : answers[idx] === type
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-700 text-gray-400'
                      : answers[idx] === type
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {showResults && answers[idx] !== s.answer && (
              <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-amber-300 mt-3`}>{s.explanation}</p>
            )}
          </div>
        ))}
      </div>

      {!showResults && Object.keys(answers).length === scenarios.length && (
        <button onClick={checkAnswers} className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg mt-4 self-center">
          Check My Answers
        </button>
      )}

      {showResults && (
        <div className={`text-center mt-4 ${isPresenting ? 'p-4' : 'p-6'} bg-gray-800/50 rounded-xl`}>
          <p className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-white`}>Score: {score}/{scenarios.length}</p>
        </div>
      )}
    </div>
  )
}

// Lesson 7 Extended Exam Task
const Lesson7ExtendedExamTask: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [showMarkScheme, setShowMarkScheme] = useState(false)

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Extended Exam Practice</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Self-Report Methods - 6 Mark Question</p>
      </div>

      <div className={`bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl border border-purple-500/30 ${isPresenting ? 'p-4 mb-4' : 'p-6 mb-6'}`}>
        <p className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-white mb-2`}>Question:</p>
        <p className={`${isPresenting ? 'text-sm' : 'text-lg'} text-gray-200`}>
          A researcher wants to investigate people's experiences of exam stress. Evaluate whether they should use questionnaires or interviews for this study. [6 marks]
        </p>
      </div>

      <button 
        onClick={() => setShowMarkScheme(!showMarkScheme)}
        className={`mt-4 bg-amber-600 hover:bg-amber-700 text-white font-bold ${isPresenting ? 'py-2 px-4 text-sm' : 'py-3 px-6'} rounded-lg self-center`}
      >
        {showMarkScheme ? 'Hide' : 'Show'} Mark Scheme
      </button>

      {showMarkScheme && (
        <div className={`mt-4 bg-amber-900/20 rounded-xl border border-amber-500/30 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-lg'} font-bold text-amber-300 mb-3`}>Mark Scheme Points:</h3>
          <div className={`space-y-2 ${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200`}>
            <p><span className="font-bold text-amber-300">Questionnaire +:</span> Large sample quickly, standardised, comparable data, can be anonymous (honest answers)</p>
            <p><span className="font-bold text-amber-300">Questionnaire -:</span> May lack depth, social desirability, can't follow up interesting responses</p>
            <p><span className="font-bold text-amber-300">Interview +:</span> Rich detailed data, can clarify questions, can explore experiences in depth</p>
            <p><span className="font-bold text-amber-300">Interview -:</span> Time-consuming, interviewer bias, social desirability, small samples</p>
            <p><span className="font-bold text-amber-300">Conclusion:</span> Depends on aim - questionnaires for breadth/comparison, interviews for depth/understanding</p>
          </div>
        </div>
      )}
    </div>
  )
}

// ============= GCSE LESSON 8: OBSERVATIONS =============

// Observations Teaching Slide - Dual Toggle System
const ObservationsTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [participation, setParticipation] = useState<'participant' | 'non-participant'>('participant')
  const [disclosure, setDisclosure] = useState<'overt' | 'covert'>('overt')

  const participationTypes = {
    participant: {
      title: 'Participant Observation',
      desc: 'Researcher joins in with the group being studied',
      strengths: ['Insider perspective', 'Rich, detailed data', 'Natural behaviour observed'],
      limitations: ['Researcher bias possible', 'Time-consuming', 'Ethical issues may arise']
    },
    'non-participant': {
      title: 'Non-Participant Observation',
      desc: 'Researcher remains separate, watching from outside',
      strengths: ['More objective viewpoint', 'Less researcher influence', 'Easier to record data'],
      limitations: ['May miss insider understanding', 'Behaviour may change if noticed']
    }
  }

  const disclosureTypes = {
    overt: {
      title: 'Overt Observation',
      desc: 'Participants know they are being observed',
      strengths: ['Ethical - informed consent', 'Easier access to setting', 'Can ask follow-up questions'],
      limitations: ['Demand characteristics', 'Changed behaviour', 'Social desirability bias']
    },
    covert: {
      title: 'Covert Observation',
      desc: 'Participants do NOT know they are being observed',
      strengths: ['Natural behaviour captured', 'No demand characteristics', 'Higher validity'],
      limitations: ['Ethical issues - no consent', 'Cannot ask questions', 'Limited access to some settings']
    }
  }

  const combinationExamples = {
    'participant-overt': {
      title: 'Participant + Overt',
      description: 'Researcher openly joins the group',
      example: 'Joining a sports team and telling them you\'re researching team dynamics',
      color: 'emerald'
    },
    'participant-covert': {
      title: 'Participant + Covert',
      description: 'Researcher secretly joins the group',
      example: 'Rosenhan\'s study - researchers faked symptoms to secretly join psychiatric wards',
      color: 'rose'
    },
    'non-participant-overt': {
      title: 'Non-Participant + Overt',
      description: 'Researcher openly watches from outside',
      example: 'Observing a classroom through a window with the teacher\'s knowledge',
      color: 'blue'
    },
    'non-participant-covert': {
      title: 'Non-Participant + Covert',
      description: 'Researcher secretly watches',
      example: 'Using hidden cameras or one-way mirrors to observe shoppers',
      color: 'violet'
    }
  }

  const currentCombo = combinationExamples[`${participation}-${disclosure}` as keyof typeof combinationExamples]
  const currentParticipation = participationTypes[participation]
  const currentDisclosure = disclosureTypes[disclosure]

  const colorClasses = {
    emerald: 'border-emerald-500/60 bg-emerald-900/30',
    rose: 'border-rose-500/60 bg-rose-900/30',
    blue: 'border-blue-500/60 bg-blue-900/30',
    violet: 'border-violet-500/60 bg-violet-900/30'
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-4' : 'p-8'}`}>
      {/* Header */}
      <div className={isPresenting ? 'mb-3' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-1`}>Types of Observation</h2>
        <p className={`${isPresenting ? 'text-xs' : 'text-base'} text-gray-400`}>Toggle to explore different observation combinations</p>
      </div>

      {/* Toggle Rows */}
      <div className={`${isPresenting ? 'space-y-2 mb-3' : 'space-y-3 mb-5'}`}>
        {/* Participation Toggle */}
        <div className="flex items-center gap-3">
          <span className={`${isPresenting ? 'text-xs' : 'text-sm'} text-amber-300 font-semibold w-24`}>Participation:</span>
          <div className="flex gap-2">
            <button
              onClick={() => setParticipation('participant')}
              className={`${isPresenting ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'} rounded-lg font-bold transition-all flex items-center gap-2 ${
                participation === 'participant'
                  ? 'bg-amber-500 text-gray-900 shadow-lg shadow-amber-500/30'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700 border border-gray-600'
              }`}
            >
              👤 Participant
            </button>
            <button
              onClick={() => setParticipation('non-participant')}
              className={`${isPresenting ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'} rounded-lg font-bold transition-all flex items-center gap-2 ${
                participation === 'non-participant'
                  ? 'bg-amber-500 text-gray-900 shadow-lg shadow-amber-500/30'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700 border border-gray-600'
              }`}
            >
              👁 Non-Participant
            </button>
          </div>
        </div>

        {/* Disclosure Toggle */}
        <div className="flex items-center gap-3">
          <span className={`${isPresenting ? 'text-xs' : 'text-sm'} text-violet-300 font-semibold w-24`}>Disclosure:</span>
          <div className="flex gap-2">
            <button
              onClick={() => setDisclosure('overt')}
              className={`${isPresenting ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'} rounded-lg font-bold transition-all flex items-center gap-2 ${
                disclosure === 'overt'
                  ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/30'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700 border border-gray-600'
              }`}
            >
              🔓 Overt
            </button>
            <button
              onClick={() => setDisclosure('covert')}
              className={`${isPresenting ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'} rounded-lg font-bold transition-all flex items-center gap-2 ${
                disclosure === 'covert'
                  ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/30'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700 border border-gray-600'
              }`}
            >
              🔒 Covert
            </button>
          </div>
        </div>
      </div>

      {/* Two Content Panels Side by Side */}
      <div className={`grid grid-cols-2 ${isPresenting ? 'gap-3 mb-3' : 'gap-4 mb-5'}`}>
        {/* Participation Panel */}
        <div className={`rounded-xl border-2 border-amber-500/40 bg-amber-900/20 ${isPresenting ? 'p-3' : 'p-4'}`}>
          <h3 className={`${isPresenting ? 'text-sm' : 'text-lg'} font-bold text-amber-300 mb-2 flex items-center gap-2`}>
            <User size={isPresenting ? 16 : 20} />
            {currentParticipation.title}
          </h3>
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-300 mb-3`}>{currentParticipation.desc}</p>
          
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className={`${isPresenting ? 'text-xs' : 'text-xs'} font-bold text-green-400 mb-1`}>✓ Strengths</p>
              <ul className={`${isPresenting ? 'text-xs' : 'text-xs'} text-gray-300 space-y-0.5`}>
                {currentParticipation.strengths.map((s, i) => (
                  <li key={i}>• {s}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className={`${isPresenting ? 'text-xs' : 'text-xs'} font-bold text-red-400 mb-1`}>✗ Limitations</p>
              <ul className={`${isPresenting ? 'text-xs' : 'text-xs'} text-gray-300 space-y-0.5`}>
                {currentParticipation.limitations.map((l, i) => (
                  <li key={i}>• {l}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Disclosure Panel */}
        <div className={`rounded-xl border-2 border-violet-500/40 bg-violet-900/20 ${isPresenting ? 'p-3' : 'p-4'}`}>
          <h3 className={`${isPresenting ? 'text-sm' : 'text-lg'} font-bold text-violet-300 mb-2 flex items-center gap-2`}>
            {disclosure === 'overt' ? <Eye size={isPresenting ? 16 : 20} /> : <EyeOff size={isPresenting ? 16 : 20} />}
            {currentDisclosure.title}
          </h3>
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-300 mb-3`}>{currentDisclosure.desc}</p>
          
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className={`${isPresenting ? 'text-xs' : 'text-xs'} font-bold text-green-400 mb-1`}>✓ Strengths</p>
              <ul className={`${isPresenting ? 'text-xs' : 'text-xs'} text-gray-300 space-y-0.5`}>
                {currentDisclosure.strengths.map((s, i) => (
                  <li key={i}>• {s}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className={`${isPresenting ? 'text-xs' : 'text-xs'} font-bold text-red-400 mb-1`}>✗ Limitations</p>
              <ul className={`${isPresenting ? 'text-xs' : 'text-xs'} text-gray-300 space-y-0.5`}>
                {currentDisclosure.limitations.map((l, i) => (
                  <li key={i}>• {l}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Combination Panel */}
      <div className={`rounded-xl border-2 ${colorClasses[currentCombo.color as keyof typeof colorClasses]} ${isPresenting ? 'p-4' : 'p-5'}`}>
        <div className="flex items-center gap-3 mb-2">
          <Lightbulb size={isPresenting ? 20 : 24} className="text-yellow-400" />
          <h3 className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-white`}>
            Combined Observation Type: <span className={`${
              currentCombo.color === 'emerald' ? 'text-emerald-300' :
              currentCombo.color === 'rose' ? 'text-rose-300' :
              currentCombo.color === 'blue' ? 'text-blue-300' : 'text-violet-300'
            }`}>{currentCombo.title}</span>
          </h3>
        </div>
        <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200 mb-2`}>
          <span className="font-bold">Definition:</span> {currentCombo.description}
        </p>
        <div className={`bg-gray-800/50 rounded-lg ${isPresenting ? 'p-2' : 'p-3'}`}>
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-300`}>
            <span className="font-bold text-cyan-300">📚 Real Example:</span> {currentCombo.example}
          </p>
        </div>
      </div>

      {/* Quick Reference Grid - Naturalistic vs Controlled */}
      <div className={`mt-auto pt-4`}>
        <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-500 text-center`}>
          💡 Remember: Observations can also be <span className="text-emerald-400 font-semibold">Naturalistic</span> (natural setting) or <span className="text-blue-400 font-semibold">Controlled</span> (lab setting)
        </p>
      </div>
    </div>
  )
}

// Observations AFL
const ObservationsAFL: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const questions = [
    {
      question: "In a naturalistic observation, the researcher...",
      options: ["Sets up an artificial situation", "Observes behaviour in a natural setting", "Always tells participants they're being watched", "Manipulates the IV"],
      correct: 1,
      explanation: "Naturalistic observations occur in the participant's natural environment without researcher interference."
    },
    {
      question: "A covert observation is one where...",
      options: ["The observer joins the group", "Participants know they're being observed", "Participants don't know they're being observed", "It takes place in a lab"],
      correct: 2,
      explanation: "Covert means hidden or secret - participants are unaware of being observed."
    },
    {
      question: "What is a strength of controlled observations?",
      options: ["High ecological validity", "Natural behaviour", "Can be replicated easily", "No ethical issues"],
      correct: 2,
      explanation: "Controlled observations allow standardisation, making them easier to replicate."
    }
  ]

  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)

  const handleSelect = (idx: number) => {
    if (showFeedback) return
    setSelected(idx)
    setShowFeedback(true)
    if (idx === questions[currentQ].correct) setScore(s => s + 1)
  }

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(q => q + 1)
      setSelected(null)
      setShowFeedback(false)
    }
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Check Your Understanding</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Observations - Question {currentQ + 1} of {questions.length}</p>
      </div>

      <div className={`flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full`}>
        <div className={`bg-gray-800/50 rounded-xl border border-gray-700 ${isPresenting ? 'p-6' : 'p-8'} mb-6`}>
          <p className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-white mb-6`}>{questions[currentQ].question}</p>
          
          <div className="grid grid-cols-1 gap-3">
            {questions[currentQ].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`p-4 rounded-lg text-left transition-all ${isPresenting ? 'text-sm' : 'text-base'} ${
                  showFeedback
                    ? idx === questions[currentQ].correct
                      ? 'bg-green-600/30 border-2 border-green-500 text-green-200'
                      : idx === selected
                      ? 'bg-red-600/30 border-2 border-red-500 text-red-200'
                      : 'bg-gray-700/30 border border-gray-600 text-gray-400'
                    : selected === idx
                    ? 'bg-blue-600/30 border-2 border-blue-500 text-white'
                    : 'bg-gray-700/50 border border-gray-600 text-gray-200 hover:bg-gray-700'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {showFeedback && (
            <div className={`mt-6 p-4 rounded-lg ${selected === questions[currentQ].correct ? 'bg-green-900/30 border border-green-600' : 'bg-amber-900/30 border border-amber-600'}`}>
              <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200`}>{questions[currentQ].explanation}</p>
            </div>
          )}
        </div>

        {showFeedback && currentQ < questions.length - 1 && (
          <button onClick={nextQuestion} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg self-center">
            Next Question →
          </button>
        )}

        {showFeedback && currentQ === questions.length - 1 && (
          <div className="text-center">
            <p className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-white`}>Score: {score}/{questions.length}</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Observation Design Task
const ObservationDesignTask: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const scenarios = [
    { scenario: "Watching children play in a playground without them knowing.", type: "covert", setting: "naturalistic" },
    { scenario: "A researcher joins a football team to study group dynamics, telling them they're a researcher.", type: "overt", setting: "participant" },
    { scenario: "Recording how students behave in a lab task where they can see a hidden camera.", type: "overt", setting: "controlled" },
    { scenario: "Observing shoppers in a mall from a hidden camera.", type: "covert", setting: "naturalistic" },
  ]

  const [answers, setAnswers] = useState<Record<number, { type?: string; setting?: string }>>({})
  const [showResults, setShowResults] = useState(false)

  const score = scenarios.filter((s, i) => 
    answers[i]?.type === s.type && answers[i]?.setting === s.setting
  ).length

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Classify the Observations</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Is it covert/overt AND naturalistic/controlled/participant?</p>
      </div>

      <div className="space-y-4 flex-1">
        {scenarios.map((s, idx) => (
          <div key={idx} className={`bg-gray-800/50 rounded-xl border border-gray-700 ${isPresenting ? 'p-4' : 'p-6'}`}>
            <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200 mb-4`}>{s.scenario}</p>
            
            <div className="flex flex-wrap gap-4">
              <div>
                <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-400 mb-2`}>Type:</p>
                <div className="flex gap-2">
                  {['covert', 'overt'].map(type => (
                    <button
                      key={type}
                      onClick={() => !showResults && setAnswers(prev => ({ ...prev, [idx]: { ...prev[idx], type } }))}
                      className={`px-3 py-1 rounded-lg capitalize ${isPresenting ? 'text-xs' : 'text-sm'} ${
                        showResults
                          ? type === s.type
                            ? 'bg-green-600 text-white'
                            : answers[idx]?.type === type
                            ? 'bg-red-600 text-white'
                            : 'bg-gray-700 text-gray-400'
                          : answers[idx]?.type === type
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-400 mb-2`}>Setting:</p>
                <div className="flex gap-2">
                  {['naturalistic', 'controlled', 'participant'].map(setting => (
                    <button
                      key={setting}
                      onClick={() => !showResults && setAnswers(prev => ({ ...prev, [idx]: { ...prev[idx], setting } }))}
                      className={`px-3 py-1 rounded-lg capitalize ${isPresenting ? 'text-xs' : 'text-sm'} ${
                        showResults
                          ? setting === s.setting
                            ? 'bg-green-600 text-white'
                            : answers[idx]?.setting === setting
                            ? 'bg-red-600 text-white'
                            : 'bg-gray-700 text-gray-400'
                          : answers[idx]?.setting === setting
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {setting}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!showResults && (
        <button onClick={() => setShowResults(true)} className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg mt-4 self-center">
          Check My Answers
        </button>
      )}

      {showResults && (
        <div className={`text-center mt-4 ${isPresenting ? 'p-4' : 'p-6'} bg-gray-800/50 rounded-xl`}>
          <p className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-white`}>Score: {score}/{scenarios.length}</p>
        </div>
      )}
    </div>
  )
}

// Lesson 8 Extended Exam Task
const Lesson8ExtendedExamTask: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [showMarkScheme, setShowMarkScheme] = useState(false)

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Extended Exam Practice</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Observations - 6 Mark Question</p>
      </div>

      <div className={`bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl border border-purple-500/30 ${isPresenting ? 'p-4 mb-4' : 'p-6 mb-6'}`}>
        <p className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-white mb-2`}>Question:</p>
        <p className={`${isPresenting ? 'text-sm' : 'text-lg'} text-gray-200`}>
          A researcher wants to study aggressive behaviour in children. Discuss whether they should use naturalistic or controlled observation. [6 marks]
        </p>
      </div>

      <button 
        onClick={() => setShowMarkScheme(!showMarkScheme)}
        className={`mt-4 bg-amber-600 hover:bg-amber-700 text-white font-bold ${isPresenting ? 'py-2 px-4 text-sm' : 'py-3 px-6'} rounded-lg self-center`}
      >
        {showMarkScheme ? 'Hide' : 'Show'} Mark Scheme
      </button>

      {showMarkScheme && (
        <div className={`mt-4 bg-amber-900/20 rounded-xl border border-amber-500/30 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-lg'} font-bold text-amber-300 mb-3`}>Mark Scheme Points:</h3>
          <div className={`space-y-2 ${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200`}>
            <p><span className="font-bold text-amber-300">Naturalistic +:</span> High ecological validity, natural behaviour, real aggression triggers</p>
            <p><span className="font-bold text-amber-300">Naturalistic -:</span> Hard to control EVs, rare events may not happen, ethical issues with observing aggression</p>
            <p><span className="font-bold text-amber-300">Controlled +:</span> Can create situations to observe aggression, control EVs, easier to replicate</p>
            <p><span className="font-bold text-amber-300">Controlled -:</span> Artificial, demand characteristics, ethically problematic to deliberately trigger aggression</p>
            <p><span className="font-bold text-amber-300">Conclusion:</span> Both have ethical issues; may need to use existing video data or natural observation without intervention</p>
          </div>
        </div>
      )}
    </div>
  )
}

// ============= GCSE LESSON 9: CORRELATIONS =============

// Lesson 9 Extended Exam Task (Correlations)
const Lesson9ExtendedExamTask: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [showMarkScheme, setShowMarkScheme] = useState(false)

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Extended Exam Practice</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Correlations - 6 Mark Question</p>
      </div>

      <div className={`bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl border border-purple-500/30 ${isPresenting ? 'p-4 mb-4' : 'p-6 mb-6'}`}>
        <p className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-white mb-2`}>Question:</p>
        <p className={`${isPresenting ? 'text-sm' : 'text-lg'} text-gray-200`}>
          A researcher finds a positive correlation between hours spent on social media and levels of anxiety. Evaluate what conclusions can be drawn from this finding. [6 marks]
        </p>
      </div>

      <button 
        onClick={() => setShowMarkScheme(!showMarkScheme)}
        className={`mt-4 bg-amber-600 hover:bg-amber-700 text-white font-bold ${isPresenting ? 'py-2 px-4 text-sm' : 'py-3 px-6'} rounded-lg self-center`}
      >
        {showMarkScheme ? 'Hide' : 'Show'} Mark Scheme
      </button>

      {showMarkScheme && (
        <div className={`mt-4 bg-amber-900/20 rounded-xl border border-amber-500/30 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-lg'} font-bold text-amber-300 mb-3`}>Mark Scheme Points:</h3>
          <div className={`space-y-2 ${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200`}>
            <p><span className="font-bold text-amber-300">Correlation finding:</span> Shows that as social media use increases, anxiety levels also increase (positive correlation)</p>
            <p><span className="font-bold text-amber-300">Correlation ≠ Causation:</span> Cannot conclude that social media CAUSES anxiety from this data alone</p>
            <p><span className="font-bold text-amber-300">Direction problem:</span> Could be that anxious people use more social media (anxiety→social media) rather than the other way around</p>
            <p><span className="font-bold text-amber-300">Third variable:</span> Other factors (loneliness, sleep problems, personality) could cause BOTH high social media use AND anxiety</p>
            <p><span className="font-bold text-amber-300">Experiment needed:</span> To establish causation, would need to manipulate social media use (IV) and measure effect on anxiety (DV)</p>
            <p><span className="font-bold text-amber-300">Conclusion:</span> Can only conclude there is a relationship/pattern; cannot determine cause and effect</p>
          </div>
        </div>
      )}
    </div>
  )
}

// ============= GCSE LESSON 10: CORRELATIONS =============

// Correlations Teaching Slide
const CorrelationsTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [activeCard, setActiveCard] = useState(0)

  const cards = [
    {
      title: 'What is a Correlation?',
      color: 'blue',
      icon: '🔗',
      visual: (
        <div className="flex items-center justify-center gap-4 my-4">
          <div className="w-16 h-16 rounded-full bg-blue-500/30 border-2 border-blue-400 flex items-center justify-center text-2xl font-bold text-blue-300">X</div>
          <div className="text-4xl text-blue-400">↔</div>
          <div className="w-16 h-16 rounded-full bg-blue-500/30 border-2 border-blue-400 flex items-center justify-center text-2xl font-bold text-blue-300">Y</div>
        </div>
      ),
      points: [
        { text: 'A technique to show relationships between two variables', highlight: 'relationships' },
        { text: 'Variables are called co-variables (NOT IV/DV!)', highlight: 'co-variables' },
        { text: 'Shows strength and direction of relationship', highlight: 'strength and direction' },
        { text: 'Uses quantitative data (numbers)', highlight: 'quantitative data' },
      ],
      extra: 'Displayed on scatter diagrams - each dot represents one participant!'
    },
    {
      title: 'Positive Correlation',
      color: 'green',
      icon: '📈',
      visual: (
        <div className="flex items-center justify-center my-4">
          <div className="relative w-32 h-32 border-l-4 border-b-4 border-green-400">
            <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-green-400"></div>
            <div className="absolute bottom-6 left-6 w-3 h-3 rounded-full bg-green-400"></div>
            <div className="absolute bottom-10 left-10 w-3 h-3 rounded-full bg-green-400"></div>
            <div className="absolute bottom-14 left-14 w-3 h-3 rounded-full bg-green-400"></div>
            <div className="absolute bottom-[4.5rem] left-[4.5rem] w-3 h-3 rounded-full bg-green-400"></div>
            <div className="absolute bottom-0 left-0 w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <line x1="10" y1="90" x2="90" y2="10" stroke="#4ade80" strokeWidth="2" strokeDasharray="5,5" />
              </svg>
            </div>
          </div>
        </div>
      ),
      points: [
        { text: 'As one variable increases...', highlight: 'increases' },
        { text: '...the other also INCREASES', highlight: 'INCREASES' },
        { text: 'Both go in the SAME direction', highlight: 'SAME direction' },
      ],
      examples: [
        { pair: 'Hours studying ↑ = Grades ↑', emoji: '📚' },
        { pair: 'Height ↑ = Weight ↑', emoji: '📏' },
        { pair: 'Practice ↑ = Skill ↑', emoji: '🎯' },
      ]
    },
    {
      title: 'Negative Correlation',
      color: 'red',
      icon: '📉',
      visual: (
        <div className="flex items-center justify-center my-4">
          <div className="relative w-32 h-32 border-l-4 border-b-4 border-red-400">
            <div className="absolute bottom-[4.5rem] left-2 w-3 h-3 rounded-full bg-red-400"></div>
            <div className="absolute bottom-14 left-6 w-3 h-3 rounded-full bg-red-400"></div>
            <div className="absolute bottom-10 left-10 w-3 h-3 rounded-full bg-red-400"></div>
            <div className="absolute bottom-6 left-14 w-3 h-3 rounded-full bg-red-400"></div>
            <div className="absolute bottom-2 left-[4.5rem] w-3 h-3 rounded-full bg-red-400"></div>
            <div className="absolute bottom-0 left-0 w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <line x1="10" y1="10" x2="90" y2="90" stroke="#f87171" strokeWidth="2" strokeDasharray="5,5" />
              </svg>
            </div>
          </div>
        </div>
      ),
      points: [
        { text: 'As one variable increases...', highlight: 'increases' },
        { text: '...the other DECREASES', highlight: 'DECREASES' },
        { text: 'They go in OPPOSITE directions', highlight: 'OPPOSITE directions' },
      ],
      examples: [
        { pair: 'Exercise ↑ = Stress ↓', emoji: '🏃' },
        { pair: 'Sleep quality ↑ = Anxiety ↓', emoji: '😴' },
        { pair: 'Screen time ↑ = Sleep ↓', emoji: '📱' },
      ]
    },
    {
      title: 'No Correlation (Zero)',
      color: 'gray',
      icon: '⚫',
      visual: (
        <div className="flex items-center justify-center my-4">
          <div className="relative w-32 h-32 border-l-4 border-b-4 border-gray-400">
            <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-gray-400"></div>
            <div className="absolute bottom-16 left-8 w-3 h-3 rounded-full bg-gray-400"></div>
            <div className="absolute bottom-8 left-16 w-3 h-3 rounded-full bg-gray-400"></div>
            <div className="absolute bottom-20 left-20 w-3 h-3 rounded-full bg-gray-400"></div>
            <div className="absolute bottom-6 left-24 w-3 h-3 rounded-full bg-gray-400"></div>
            <div className="absolute bottom-14 left-12 w-3 h-3 rounded-full bg-gray-400"></div>
            <div className="absolute bottom-24 left-6 w-3 h-3 rounded-full bg-gray-400"></div>
          </div>
        </div>
      ),
      points: [
        { text: 'No clear pattern between variables', highlight: 'No clear pattern' },
        { text: 'Changes in one don\'t predict the other', highlight: 'don\'t predict' },
        { text: 'Dots are scattered randomly', highlight: 'scattered randomly' },
      ],
      examples: [
        { pair: 'Shoe size & IQ', emoji: '👟' },
        { pair: 'Hair colour & Maths ability', emoji: '💇' },
        { pair: 'Birthday month & Height', emoji: '🎂' },
      ]
    },
  ]

  const currentCard = cards[activeCard]
  const colorClasses: Record<string, { border: string; bg: string; text: string; btn: string }> = {
    blue: { border: 'border-blue-500', bg: 'bg-blue-900/30', text: 'text-blue-300', btn: 'bg-blue-600 hover:bg-blue-500' },
    green: { border: 'border-green-500', bg: 'bg-green-900/30', text: 'text-green-300', btn: 'bg-green-600 hover:bg-green-500' },
    red: { border: 'border-red-500', bg: 'bg-red-900/30', text: 'text-red-300', btn: 'bg-red-600 hover:bg-red-500' },
    gray: { border: 'border-gray-500', bg: 'bg-gray-800/50', text: 'text-gray-300', btn: 'bg-gray-600 hover:bg-gray-500' },
  }
  const colors = colorClasses[currentCard.color]

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-4' : 'p-8'}`}>
      {/* Header */}
      <div className={isPresenting ? 'mb-3' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-1`}>Correlations</h2>
        <p className={`${isPresenting ? 'text-xs' : 'text-base'} text-gray-400`}>Understanding relationships between variables</p>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-3 mb-4">
        {cards.map((card, i) => (
          <button
            key={i}
            onClick={() => setActiveCard(i)}
            className={`transition-all duration-300 ${activeCard === i
              ? `w-8 h-3 rounded-full ${colorClasses[card.color].btn}`
              : 'w-3 h-3 rounded-full bg-gray-600 hover:bg-gray-500'
            }`}
            title={card.title}
          />
        ))}
      </div>

      {/* Main carousel area */}
      <div className="flex-1 flex items-center justify-center gap-4">
        {/* Left arrow */}
        <button
          onClick={() => setActiveCard(Math.max(0, activeCard - 1))}
          disabled={activeCard === 0}
          className={`${isPresenting ? 'p-2' : 'p-4'} rounded-full transition-all ${activeCard === 0
            ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
            : 'bg-gray-700 hover:bg-gray-600 text-white'
          }`}
        >
          <ChevronLeft size={isPresenting ? 24 : 32} />
        </button>

        {/* Card */}
        <div className={`flex-1 max-w-2xl rounded-2xl border-2 ${colors.border} ${colors.bg} ${isPresenting ? 'p-4' : 'p-6'} transition-all duration-500`}>
          {/* Card header */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className={`${isPresenting ? 'text-3xl' : 'text-4xl'}`}>{currentCard.icon}</span>
            <h3 className={`${isPresenting ? 'text-xl' : 'text-3xl'} font-bold ${colors.text}`}>{currentCard.title}</h3>
          </div>

          {/* Visual */}
          {currentCard.visual}

          {/* Points */}
          <ul className={`space-y-2 ${isPresenting ? 'text-sm' : 'text-lg'} text-gray-200 mb-4`}>
            {currentCard.points.map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className={`${colors.text} font-bold`}>•</span>
                <span>
                  {point.text.split(point.highlight).map((part, j, arr) => (
                    <span key={j}>
                      {part}
                      {j < arr.length - 1 && <span className={`font-bold ${colors.text}`}>{point.highlight}</span>}
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>

          {/* Examples (for correlation types) */}
          {currentCard.examples && (
            <div className={`${colors.bg} rounded-xl ${isPresenting ? 'p-3' : 'p-4'} border ${colors.border}/30`}>
              <p className={`${isPresenting ? 'text-xs' : 'text-sm'} ${colors.text} font-bold mb-2`}>Examples:</p>
              <div className="flex flex-wrap gap-2">
                {currentCard.examples.map((ex, i) => (
                  <span key={i} className={`${isPresenting ? 'text-xs px-2 py-1' : 'text-sm px-3 py-1'} bg-gray-800/50 rounded-full text-gray-200`}>
                    {ex.emoji} {ex.pair}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Extra info (for first card) */}
          {currentCard.extra && (
            <div className={`mt-4 ${isPresenting ? 'p-3' : 'p-4'} rounded-xl bg-purple-900/30 border border-purple-500/30`}>
              <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-purple-300`}>
                <span className="font-bold">💡 Remember:</span> {currentCard.extra}
              </p>
            </div>
          )}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => setActiveCard(Math.min(cards.length - 1, activeCard + 1))}
          disabled={activeCard === cards.length - 1}
          className={`${isPresenting ? 'p-2' : 'p-4'} rounded-full transition-all ${activeCard === cards.length - 1
            ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
            : 'bg-gray-700 hover:bg-gray-600 text-white'
          }`}
        >
          <ChevronRight size={isPresenting ? 24 : 32} />
        </button>
      </div>

      {/* Card counter */}
      <div className="text-center mt-4">
        <span className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-500`}>
          {activeCard + 1} / {cards.length}
        </span>
      </div>
    </div>
  )
}

// Correlations Evaluation Teaching Slide
const CorrelationsEvalTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [revealedStrengths, setRevealedStrengths] = useState<number[]>([])
  const [revealedLimitations, setRevealedLimitations] = useState<number[]>([])

  const strengths = [
    { text: 'Good starting point for research', detail: 'Helps identify relationships worth investigating further' },
    { text: 'Can identify patterns between variables', detail: 'Shows how two co-variables relate to each other' },
    { text: 'Can lead to new experiments', detail: 'Once a relationship is found, we can design experiments to test causation' },
    { text: 'Can study complex relationships', detail: 'Including curvilinear relationships that change direction' },
  ]

  const limitations = [
    { text: 'Cannot show cause and effect', detail: 'We only know variables are related, not which causes which' },
    { text: "Don't know direction of causation", detail: 'Does A cause B, or does B cause A?' },
    { text: 'Third variable problem', detail: 'A hidden variable might be causing changes in both' },
    { text: 'Intervening variables may be overlooked', detail: 'Other factors could explain the relationship' },
  ]

  const revealNextStrength = () => {
    const nextIndex = revealedStrengths.length
    if (nextIndex < strengths.length) {
      setRevealedStrengths([...revealedStrengths, nextIndex])
    }
  }

  const revealNextLimitation = () => {
    const nextIndex = revealedLimitations.length
    if (nextIndex < limitations.length) {
      setRevealedLimitations([...revealedLimitations, nextIndex])
    }
  }

  const revealAll = () => {
    setRevealedStrengths(strengths.map((_, i) => i))
    setRevealedLimitations(limitations.map((_, i) => i))
  }

  const resetAll = () => {
    setRevealedStrengths([])
    setRevealedLimitations([])
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-4' : 'p-8'}`}>
      {/* Header */}
      <div className={isPresenting ? 'mb-3' : 'mb-6'}>
        <div className="flex items-center justify-between">
          <div>
            <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-1`}>Evaluating Correlations</h2>
            <p className={`${isPresenting ? 'text-xs' : 'text-base'} text-gray-400`}>Strengths and limitations</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={revealAll}
              className={`${isPresenting ? 'px-2 py-1 text-xs' : 'px-3 py-2 text-sm'} bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-all`}
            >
              Reveal All
            </button>
            <button
              onClick={resetAll}
              className={`${isPresenting ? 'px-2 py-1 text-xs' : 'px-3 py-2 text-sm'} bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-all`}
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Two-column layout */}
      <div className={`grid grid-cols-2 ${isPresenting ? 'gap-4' : 'gap-6'} flex-1`}>
        {/* Strengths Panel */}
        <div className={`rounded-2xl border-2 border-green-500/50 bg-green-900/20 ${isPresenting ? 'p-4' : 'p-6'} flex flex-col`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`${isPresenting ? 'w-10 h-10' : 'w-12 h-12'} rounded-full bg-green-500/30 flex items-center justify-center`}>
              <ThumbsUp className={`${isPresenting ? 'w-5 h-5' : 'w-6 h-6'} text-green-400`} />
            </div>
            <h3 className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-green-300`}>Strengths</h3>
            <span className={`ml-auto ${isPresenting ? 'text-xs' : 'text-sm'} text-green-400 bg-green-900/50 px-2 py-1 rounded-full`}>
              {revealedStrengths.length}/{strengths.length}
            </span>
          </div>

          <div className={`space-y-3 flex-1 ${isPresenting ? 'min-h-[180px]' : 'min-h-[240px]'}`}>
            {strengths.map((strength, index) => (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-500 ${
                  revealedStrengths.includes(index)
                    ? 'border-green-500/50 bg-green-800/30 opacity-100 translate-y-0'
                    : 'border-gray-700 bg-gray-800/30 opacity-40 translate-y-2'
                } ${isPresenting ? 'p-3' : 'p-4'}`}
              >
                {revealedStrengths.includes(index) ? (
                  <>
                    <p className={`${isPresenting ? 'text-sm' : 'text-base'} font-semibold text-green-300 flex items-start gap-2`}>
                      <CheckCircle size={isPresenting ? 16 : 20} className="text-green-400 mt-0.5 flex-shrink-0" />
                      {strength.text}
                    </p>
                    <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-400 mt-1 ml-6`}>{strength.detail}</p>
                  </>
                ) : (
                  <div className="flex items-center gap-2">
                    <div className={`${isPresenting ? 'w-4 h-4' : 'w-5 h-5'} rounded-full border-2 border-gray-600`}></div>
                    <span className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-500`}>Click to reveal...</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={revealNextStrength}
            disabled={revealedStrengths.length >= strengths.length}
            className={`mt-4 w-full ${isPresenting ? 'py-2 text-sm' : 'py-3 text-base'} rounded-xl font-bold transition-all ${
              revealedStrengths.length >= strengths.length
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-500 text-white hover:scale-[1.02]'
            }`}
          >
            {revealedStrengths.length >= strengths.length ? '✓ All Revealed' : `Reveal Next Strength →`}
          </button>
        </div>

        {/* Limitations Panel */}
        <div className={`rounded-2xl border-2 border-red-500/50 bg-red-900/20 ${isPresenting ? 'p-4' : 'p-6'} flex flex-col`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`${isPresenting ? 'w-10 h-10' : 'w-12 h-12'} rounded-full bg-red-500/30 flex items-center justify-center`}>
              <ThumbsDown className={`${isPresenting ? 'w-5 h-5' : 'w-6 h-6'} text-red-400`} />
            </div>
            <h3 className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-red-300`}>Limitations</h3>
            <span className={`ml-auto ${isPresenting ? 'text-xs' : 'text-sm'} text-red-400 bg-red-900/50 px-2 py-1 rounded-full`}>
              {revealedLimitations.length}/{limitations.length}
            </span>
          </div>

          <div className={`space-y-3 flex-1 ${isPresenting ? 'min-h-[180px]' : 'min-h-[240px]'}`}>
            {limitations.map((limitation, index) => (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-500 ${
                  revealedLimitations.includes(index)
                    ? 'border-red-500/50 bg-red-800/30 opacity-100 translate-y-0'
                    : 'border-gray-700 bg-gray-800/30 opacity-40 translate-y-2'
                } ${isPresenting ? 'p-3' : 'p-4'}`}
              >
                {revealedLimitations.includes(index) ? (
                  <>
                    <p className={`${isPresenting ? 'text-sm' : 'text-base'} font-semibold text-red-300 flex items-start gap-2`}>
                      <XCircle size={isPresenting ? 16 : 20} className="text-red-400 mt-0.5 flex-shrink-0" />
                      {limitation.text}
                    </p>
                    <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-400 mt-1 ml-6`}>{limitation.detail}</p>
                  </>
                ) : (
                  <div className="flex items-center gap-2">
                    <div className={`${isPresenting ? 'w-4 h-4' : 'w-5 h-5'} rounded-full border-2 border-gray-600`}></div>
                    <span className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-500`}>Click to reveal...</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={revealNextLimitation}
            disabled={revealedLimitations.length >= limitations.length}
            className={`mt-4 w-full ${isPresenting ? 'py-2 text-sm' : 'py-3 text-base'} rounded-xl font-bold transition-all ${
              revealedLimitations.length >= limitations.length
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-red-600 hover:bg-red-500 text-white hover:scale-[1.02]'
            }`}
          >
            {revealedLimitations.length >= limitations.length ? '✓ All Revealed' : `Reveal Next Limitation →`}
          </button>
        </div>
      </div>

      {/* Key Warning Banner */}
      <div className={`mt-4 rounded-xl border-2 border-amber-500/50 bg-amber-900/20 ${isPresenting ? 'p-3' : 'p-4'}`}>
        <div className="flex items-start gap-3">
          <AlertTriangle className={`${isPresenting ? 'w-6 h-6' : 'w-8 h-8'} text-amber-400 flex-shrink-0`} />
          <div>
            <h4 className={`${isPresenting ? 'text-sm' : 'text-lg'} font-bold text-amber-300 mb-1`}>⚠️ Key Warning: Correlation ≠ Causation</h4>
            <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200`}>
              Just because two things are related doesn't mean one causes the other! 
              <span className="text-amber-300 font-semibold"> Example:</span> Ice cream sales and drowning rates are positively correlated. 
              Does ice cream cause drowning? No! <span className="font-bold text-amber-300">Hot weather</span> (third variable) causes both.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Correlations AFL
const CorrelationsAFL: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const questions = [
    {
      question: "As the number of hours revising increases, exam scores also increase. This is a...",
      options: ["Negative correlation", "Positive correlation", "Zero correlation", "Causal relationship"],
      correct: 1,
      explanation: "When both variables increase together, it's a positive correlation."
    },
    {
      question: "A correlation cannot tell us...",
      options: ["If two variables are related", "The direction of the relationship", "Which variable causes the other", "The strength of the relationship"],
      correct: 2,
      explanation: "Correlations only show relationships, not cause and effect."
    },
    {
      question: "What graph is used to display correlational data?",
      options: ["Bar chart", "Pie chart", "Scatter diagram", "Line graph"],
      correct: 2,
      explanation: "Scatter diagrams show the relationship between two co-variables."
    }
  ]

  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)

  const handleSelect = (idx: number) => {
    if (showFeedback) return
    setSelected(idx)
    setShowFeedback(true)
    if (idx === questions[currentQ].correct) setScore(s => s + 1)
  }

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(q => q + 1)
      setSelected(null)
      setShowFeedback(false)
    }
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Check Your Understanding</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Correlations - Question {currentQ + 1} of {questions.length}</p>
      </div>

      <div className={`flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full`}>
        <div className={`bg-gray-800/50 rounded-xl border border-gray-700 ${isPresenting ? 'p-6' : 'p-8'} mb-6`}>
          <p className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-white mb-6`}>{questions[currentQ].question}</p>
          
          <div className="grid grid-cols-1 gap-3">
            {questions[currentQ].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`p-4 rounded-lg text-left transition-all ${isPresenting ? 'text-sm' : 'text-base'} ${
                  showFeedback
                    ? idx === questions[currentQ].correct
                      ? 'bg-green-600/30 border-2 border-green-500 text-green-200'
                      : idx === selected
                      ? 'bg-red-600/30 border-2 border-red-500 text-red-200'
                      : 'bg-gray-700/30 border border-gray-600 text-gray-400'
                    : selected === idx
                    ? 'bg-blue-600/30 border-2 border-blue-500 text-white'
                    : 'bg-gray-700/50 border border-gray-600 text-gray-200 hover:bg-gray-700'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {showFeedback && (
            <div className={`mt-6 p-4 rounded-lg ${selected === questions[currentQ].correct ? 'bg-green-900/30 border border-green-600' : 'bg-amber-900/30 border border-amber-600'}`}>
              <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200`}>{questions[currentQ].explanation}</p>
            </div>
          )}
        </div>

        {showFeedback && currentQ < questions.length - 1 && (
          <button onClick={nextQuestion} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg self-center">
            Next Question →
          </button>
        )}

        {showFeedback && currentQ === questions.length - 1 && (
          <div className="text-center">
            <p className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-white`}>Score: {score}/{questions.length}</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Correlation Identification Task
const CorrelationIdentifyTask: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const scenarios = [
    { scenario: "As temperature increases, ice cream sales increase", answer: "positive" },
    { scenario: "As age increases, reaction time gets slower (higher)", answer: "positive" },
    { scenario: "As hours of sleep increase, tiredness decreases", answer: "negative" },
    { scenario: "As screen time increases, amount of exercise decreases", answer: "negative" },
    { scenario: "Height and intelligence show no clear pattern", answer: "zero" },
    { scenario: "As stress increases, immune system function decreases", answer: "negative" },
  ]

  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const score = scenarios.filter((s, i) => answers[i] === s.answer).length

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Identify the Correlation Type</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Positive, Negative, or Zero?</p>
      </div>

      <div className="space-y-3 flex-1">
        {scenarios.map((s, idx) => (
          <div key={idx} className={`bg-gray-800/50 rounded-xl border ${showResults ? (answers[idx] === s.answer ? 'border-green-500' : 'border-red-500') : 'border-gray-700'} ${isPresenting ? 'p-3' : 'p-4'}`}>
            <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200 mb-3`}>{s.scenario}</p>
            
            <div className="flex gap-2">
              {['positive', 'negative', 'zero'].map(type => (
                <button
                  key={type}
                  onClick={() => !showResults && setAnswers(prev => ({ ...prev, [idx]: type }))}
                  className={`px-3 py-1 rounded-lg font-bold capitalize ${isPresenting ? 'text-xs' : 'text-sm'} ${
                    showResults
                      ? type === s.answer
                        ? 'bg-green-600 text-white'
                        : answers[idx] === type
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-700 text-gray-400'
                      : answers[idx] === type
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {!showResults && Object.keys(answers).length === scenarios.length && (
        <button onClick={() => setShowResults(true)} className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg mt-4 self-center">
          Check My Answers
        </button>
      )}

      {showResults && (
        <div className={`text-center mt-4 ${isPresenting ? 'p-4' : 'p-6'} bg-gray-800/50 rounded-xl`}>
          <p className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-white`}>Score: {score}/{scenarios.length}</p>
        </div>
      )}
    </div>
  )
}

// Lesson 10 Extended Exam Task
const Lesson10ExtendedExamTask: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [showMarkScheme, setShowMarkScheme] = useState(false)

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Extended Exam Practice</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Correlations - 6 Mark Question</p>
      </div>

      <div className={`bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl border border-purple-500/30 ${isPresenting ? 'p-4 mb-4' : 'p-6 mb-6'}`}>
        <p className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-white mb-2`}>Question:</p>
        <p className={`${isPresenting ? 'text-sm' : 'text-lg'} text-gray-200`}>
          A researcher finds a positive correlation between stress levels and illness. Evaluate whether we can conclude that stress causes illness. [6 marks]
        </p>
      </div>

      <button 
        onClick={() => setShowMarkScheme(!showMarkScheme)}
        className={`mt-4 bg-amber-600 hover:bg-amber-700 text-white font-bold ${isPresenting ? 'py-2 px-4 text-sm' : 'py-3 px-6'} rounded-lg self-center`}
      >
        {showMarkScheme ? 'Hide' : 'Show'} Mark Scheme
      </button>

      {showMarkScheme && (
        <div className={`mt-4 bg-amber-900/20 rounded-xl border border-amber-500/30 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-lg'} font-bold text-amber-300 mb-3`}>Mark Scheme Points:</h3>
          <div className={`space-y-2 ${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200`}>
            <p><span className="font-bold text-amber-300">Correlation ≠ Causation:</span> Cannot determine cause and effect from correlation alone</p>
            <p><span className="font-bold text-amber-300">Direction problem:</span> Could be stress→illness OR illness→stress (being ill is stressful)</p>
            <p><span className="font-bold text-amber-300">Third variable:</span> Lifestyle factors (sleep, diet, smoking) could cause both stress AND illness</p>
            <p><span className="font-bold text-amber-300">Need experiment:</span> To show causation would need to manipulate stress (IV) and measure illness (DV)</p>
            <p><span className="font-bold text-amber-300">Conclusion:</span> Shows relationship only; cannot conclude stress causes illness without experimental evidence</p>
          </div>
        </div>
      )}
    </div>
  )
}

// ============= GCSE LESSON 11: CASE STUDIES =============

// Case Studies Teaching Slide - Card Stack Style
const CaseStudiesTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [currentCard, setCurrentCard] = useState(0)
  const [flippedCards, setFlippedCards] = useState<number[]>([])

  const cards = [
    { 
      id: 0,
      type: 'definition',
      front: { title: 'What is a Case Study?', prompt: 'Click to learn...', icon: '🔍' },
      back: { 
        content: [
          { text: 'In-depth', highlight: true, suffix: ' study of one case' },
          { text: 'Individual, group, or event', highlight: true, prefix: 'Can be an ' },
          { text: 'Unusual', highlight: true, prefix: 'Often involves ', suffix: ' or rare cases' },
          { text: 'Multiple methods', highlight: true, prefix: 'Uses ', suffix: ' (interviews, observations, tests)' }
        ]
      },
      colors: { gradient: 'from-blue-600 to-cyan-600', border: 'border-blue-500', bg: 'bg-blue-900/30', text: 'text-blue-300' }
    },
    {
      id: 1, 
      type: 'example',
      front: { title: 'Famous Example: HM', prompt: 'Who was Henry Molaison?', icon: '🧠' },
      back: { 
        content: 'HM (Henry Molaison) had his hippocampus removed to treat epilepsy. He lost the ability to form new long-term memories. Studied for over 50 years until his death in 2008. Revealed crucial insights about how memory works and the role of the hippocampus.'
      },
      colors: { gradient: 'from-purple-600 to-pink-600', border: 'border-purple-500', bg: 'bg-purple-900/30', text: 'text-purple-300' }
    },
    {
      id: 2,
      type: 'example',
      front: { title: 'Famous Example: Phineas Gage', prompt: 'What happened to him?', icon: '💥' },
      back: { 
        content: 'Phineas Gage survived an iron rod passing through his skull in 1848. His personality dramatically changed after the accident - became impulsive and unreliable. Case study showed the frontal lobe\'s role in personality and decision-making.'
      },
      colors: { gradient: 'from-purple-600 to-indigo-600', border: 'border-purple-500', bg: 'bg-purple-900/30', text: 'text-purple-300' }
    },
    {
      id: 3,
      type: 'strengths',
      front: { title: 'Strengths', prompt: 'Why use case studies?', icon: '✓' },
      back: { 
        content: [
          { text: 'Rich, detailed data', highlight: true, suffix: ' about the individual' },
          { text: 'Rare cases', highlight: true, prefix: 'Study ', suffix: ' not otherwise possible' },
          { text: 'Generate new theories', highlight: true, prefix: 'Can ', suffix: ' and hypotheses' },
          { text: 'Real-world insights', highlight: true, suffix: ' in natural settings' }
        ]
      },
      colors: { gradient: 'from-green-600 to-emerald-600', border: 'border-green-500', bg: 'bg-green-900/30', text: 'text-green-300' }
    },
    {
      id: 4,
      type: 'limitations',
      front: { title: 'Limitations', prompt: 'What are the problems?', icon: '✗' },
      back: { 
        content: [
          { text: 'Cannot generalise', highlight: true, suffix: ' findings to others' },
          { text: 'Researcher bias', highlight: true, suffix: ' in interpretation' },
          { text: 'Time consuming', highlight: true, suffix: ' and resource intensive' },
          { text: 'No cause and effect', highlight: true, prefix: 'Cannot establish ' }
        ]
      },
      colors: { gradient: 'from-red-600 to-orange-600', border: 'border-red-500', bg: 'bg-red-900/30', text: 'text-red-300' }
    }
  ]

  const flipCard = () => {
    if (!flippedCards.includes(currentCard)) {
      setFlippedCards([...flippedCards, currentCard])
    }
  }

  const nextCard = () => {
    setCurrentCard(Math.min(cards.length - 1, currentCard + 1))
  }

  const prevCard = () => {
    setCurrentCard(Math.max(0, currentCard - 1))
  }

  const currentCardData = cards[currentCard]

  const renderBackContent = (back: typeof currentCardData.back) => {
    if (Array.isArray(back.content)) {
      return (
        <ul className="space-y-3 text-left">
          {back.content.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-white/60">•</span>
              <span className="text-gray-200">
                {item.prefix && <span>{item.prefix}</span>}
                <span className={`font-bold ${currentCardData.colors.text}`}>{item.text}</span>
                {item.suffix && <span>{item.suffix}</span>}
              </span>
            </li>
          ))}
        </ul>
      )
    }
    return <p className="text-gray-200 leading-relaxed">{back.content}</p>
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-4' : 'p-8'}`}>
      <div className="text-center mb-4">
        <h2 className={`${isPresenting ? 'text-3xl' : 'text-4xl'} font-black text-white mb-2`}>Case Studies</h2>
        <p className="text-gray-400">Click cards to flip • Use arrows to navigate</p>
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 mb-6">
        {cards.map((card, idx) => (
          <button
            key={card.id}
            onClick={() => setCurrentCard(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentCard 
                ? 'bg-white scale-125' 
                : flippedCards.includes(idx)
                  ? 'bg-green-500/70'
                  : 'bg-gray-600 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>

      {/* Stack visualization */}
      <div className="relative flex-1 flex items-center justify-center" style={{ perspective: '1000px' }}>
        {/* Background stacked cards effect */}
        {cards.length > currentCard + 2 && (
          <div className={`absolute w-[340px] ${isPresenting ? 'h-52' : 'h-64'} bg-gray-800 rounded-2xl opacity-20 transform translate-x-4 translate-y-4`} />
        )}
        {cards.length > currentCard + 1 && (
          <div className={`absolute w-[340px] ${isPresenting ? 'h-52' : 'h-64'} bg-gray-700 rounded-2xl opacity-40 transform translate-x-2 translate-y-2`} />
        )}
        
        {/* Main card - flippable */}
        <div 
          onClick={flipCard}
          className={`w-[340px] ${isPresenting ? 'h-52' : 'h-64'} cursor-pointer`}
          style={{ perspective: '1000px' }}
        >
          <div 
            className="relative w-full h-full transition-transform duration-500"
            style={{ 
              transformStyle: 'preserve-3d',
              transform: flippedCards.includes(currentCard) ? 'rotateY(180deg)' : 'rotateY(0deg)'
            }}
          >
            {/* Front */}
            <div 
              className={`absolute inset-0 rounded-2xl p-6 flex flex-col justify-center items-center bg-gradient-to-br ${currentCardData.colors.gradient} shadow-2xl`}
              style={{ backfaceVisibility: 'hidden' }}
            >
              <span className={`${isPresenting ? 'text-4xl' : 'text-5xl'} mb-4`}>{currentCardData.front.icon}</span>
              <h3 className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-white text-center`}>
                {currentCardData.front.title}
              </h3>
              <p className={`text-white/80 mt-3 ${isPresenting ? 'text-sm' : 'text-base'}`}>
                {currentCardData.front.prompt}
              </p>
              <div className="absolute bottom-4 text-white/50 text-sm flex items-center gap-1">
                <RotateCcw size={14} />
                <span>Click to flip</span>
              </div>
            </div>
            
            {/* Back */}
            <div 
              className={`absolute inset-0 rounded-2xl ${isPresenting ? 'p-4' : 'p-6'} ${currentCardData.colors.bg} border-2 ${currentCardData.colors.border} shadow-2xl overflow-y-auto custom-scrollbar`}
              style={{ 
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)'
              }}
            >
              <h4 className={`${isPresenting ? 'text-lg' : 'text-xl'} font-bold ${currentCardData.colors.text} mb-4 text-center`}>
                {currentCardData.front.title}
              </h4>
              <div className={isPresenting ? 'text-sm' : 'text-base'}>
                {renderBackContent(currentCardData.back)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center gap-6 mt-6">
        <button 
          onClick={prevCard} 
          disabled={currentCard === 0}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
            currentCard === 0 
              ? 'bg-gray-700/50 text-gray-500 cursor-not-allowed' 
              : 'bg-gray-700 text-white hover:bg-gray-600'
          }`}
        >
          <ChevronLeft size={20} />
          Previous
        </button>
        
        <div className="flex items-center gap-2 text-gray-300">
          <span className="text-xl font-bold text-white">{currentCard + 1}</span>
          <span>/</span>
          <span>{cards.length}</span>
        </div>
        
        <button 
          onClick={nextCard} 
          disabled={currentCard === cards.length - 1}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
            currentCard === cards.length - 1 
              ? 'bg-gray-700/50 text-gray-500 cursor-not-allowed' 
              : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500'
          }`}
        >
          Next
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Completion message */}
      {flippedCards.length === cards.length && (
        <div className="text-center mt-4 text-green-400 animate-pulse">
          ✓ All cards explored! Great job!
        </div>
      )}
    </div>
  )
}

// Case Studies AFL
const CaseStudiesAFL: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const questions = [
    {
      question: "A case study typically involves...",
      options: ["Testing hundreds of people", "In-depth study of one case", "Only using questionnaires", "Random sampling"],
      correct: 1,
      explanation: "Case studies are detailed investigations of a single individual, group, or event."
    },
    {
      question: "What is a strength of case studies?",
      options: ["Easy to generalise", "Quick to conduct", "Rich, detailed data", "No researcher bias"],
      correct: 2,
      explanation: "Case studies provide detailed, in-depth information about the case being studied."
    },
    {
      question: "Why are case studies difficult to generalise from?",
      options: ["They use numbers", "They study unusual/unique cases", "They're too long", "They cost too much"],
      correct: 1,
      explanation: "Because case studies often involve unusual cases, findings may not apply to the general population."
    }
  ]

  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)

  const handleSelect = (idx: number) => {
    if (showFeedback) return
    setSelected(idx)
    setShowFeedback(true)
    if (idx === questions[currentQ].correct) setScore(s => s + 1)
  }

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(q => q + 1)
      setSelected(null)
      setShowFeedback(false)
    }
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Check Your Understanding</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Case Studies - Question {currentQ + 1} of {questions.length}</p>
      </div>

      <div className={`flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full`}>
        <div className={`bg-gray-800/50 rounded-xl border border-gray-700 ${isPresenting ? 'p-6' : 'p-8'} mb-6`}>
          <p className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-white mb-6`}>{questions[currentQ].question}</p>
          
          <div className="grid grid-cols-1 gap-3">
            {questions[currentQ].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`p-4 rounded-lg text-left transition-all ${isPresenting ? 'text-sm' : 'text-base'} ${
                  showFeedback
                    ? idx === questions[currentQ].correct
                      ? 'bg-green-600/30 border-2 border-green-500 text-green-200'
                      : idx === selected
                      ? 'bg-red-600/30 border-2 border-red-500 text-red-200'
                      : 'bg-gray-700/30 border border-gray-600 text-gray-400'
                    : selected === idx
                    ? 'bg-blue-600/30 border-2 border-blue-500 text-white'
                    : 'bg-gray-700/50 border border-gray-600 text-gray-200 hover:bg-gray-700'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {showFeedback && (
            <div className={`mt-6 p-4 rounded-lg ${selected === questions[currentQ].correct ? 'bg-green-900/30 border border-green-600' : 'bg-amber-900/30 border border-amber-600'}`}>
              <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200`}>{questions[currentQ].explanation}</p>
            </div>
          )}
        </div>

        {showFeedback && currentQ < questions.length - 1 && (
          <button onClick={nextQuestion} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg self-center">
            Next Question →
          </button>
        )}

        {showFeedback && currentQ === questions.length - 1 && (
          <div className="text-center">
            <p className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-white`}>Score: {score}/{questions.length}</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Case Study Application Task
const CaseStudyTask: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const scenarios = [
    { scenario: "A researcher wants to study how one person recovered from a rare brain injury", suitable: true, explanation: "Case study is ideal for rare, unique cases" },
    { scenario: "A researcher wants to know if coffee affects reaction time across the population", suitable: false, explanation: "Need an experiment with many participants to generalise" },
    { scenario: "A psychologist wants to understand in detail how one child developed a phobia", suitable: true, explanation: "Case study provides rich detail about individual experiences" },
    { scenario: "A researcher wants to compare memory performance between two groups", suitable: false, explanation: "Needs experimental comparison, not in-depth individual study" },
  ]

  const [answers, setAnswers] = useState<Record<number, boolean | null>>({})
  const [showResults, setShowResults] = useState(false)

  const score = scenarios.filter((s, i) => answers[i] === s.suitable).length

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Is a Case Study Suitable?</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Decide if a case study would be appropriate</p>
      </div>

      <div className="space-y-4 flex-1">
        {scenarios.map((s, idx) => (
          <div key={idx} className={`bg-gray-800/50 rounded-xl border ${showResults ? (answers[idx] === s.suitable ? 'border-green-500' : 'border-red-500') : 'border-gray-700'} ${isPresenting ? 'p-4' : 'p-6'}`}>
            <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200 mb-4`}>{s.scenario}</p>
            
            <div className="flex gap-3">
              <button
                onClick={() => !showResults && setAnswers(prev => ({ ...prev, [idx]: true }))}
                className={`px-4 py-2 rounded-lg font-bold ${isPresenting ? 'text-xs' : 'text-sm'} ${
                  showResults
                    ? s.suitable === true
                      ? 'bg-green-600 text-white'
                      : answers[idx] === true
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-700 text-gray-400'
                    : answers[idx] === true
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                ✓ Yes, Case Study
              </button>
              <button
                onClick={() => !showResults && setAnswers(prev => ({ ...prev, [idx]: false }))}
                className={`px-4 py-2 rounded-lg font-bold ${isPresenting ? 'text-xs' : 'text-sm'} ${
                  showResults
                    ? s.suitable === false
                      ? 'bg-green-600 text-white'
                      : answers[idx] === false
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-700 text-gray-400'
                    : answers[idx] === false
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                ✗ No, Different Method
              </button>
            </div>

            {showResults && (
              <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-amber-300 mt-3`}>{s.explanation}</p>
            )}
          </div>
        ))}
      </div>

      {!showResults && Object.keys(answers).length === scenarios.length && (
        <button onClick={() => setShowResults(true)} className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg mt-4 self-center">
          Check My Answers
        </button>
      )}

      {showResults && (
        <div className={`text-center mt-4 ${isPresenting ? 'p-4' : 'p-6'} bg-gray-800/50 rounded-xl`}>
          <p className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-white`}>Score: {score}/{scenarios.length}</p>
        </div>
      )}
    </div>
  )
}

// Lesson 11 Extended Exam Task
const Lesson11ExtendedExamTask: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [showMarkScheme, setShowMarkScheme] = useState(false)

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Extended Exam Practice</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Case Studies - 6 Mark Question</p>
      </div>

      <div className={`bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl border border-purple-500/30 ${isPresenting ? 'p-4 mb-4' : 'p-6 mb-6'}`}>
        <p className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-white mb-2`}>Question:</p>
        <p className={`${isPresenting ? 'text-sm' : 'text-lg'} text-gray-200`}>
          Evaluate the use of case studies in psychological research. [6 marks]
        </p>
      </div>

      <button 
        onClick={() => setShowMarkScheme(!showMarkScheme)}
        className={`mt-4 bg-amber-600 hover:bg-amber-700 text-white font-bold ${isPresenting ? 'py-2 px-4 text-sm' : 'py-3 px-6'} rounded-lg self-center`}
      >
        {showMarkScheme ? 'Hide' : 'Show'} Mark Scheme
      </button>

      {showMarkScheme && (
        <div className={`mt-4 bg-amber-900/20 rounded-xl border border-amber-500/30 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-lg'} font-bold text-amber-300 mb-3`}>Mark Scheme Points:</h3>
          <div className={`space-y-2 ${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200`}>
            <p><span className="font-bold text-amber-300">Strength 1:</span> Rich, detailed qualitative data about the individual</p>
            <p><span className="font-bold text-amber-300">Strength 2:</span> Can study rare/unique cases (e.g., HM's memory loss)</p>
            <p><span className="font-bold text-amber-300">Strength 3:</span> Can generate new theories and research directions</p>
            <p><span className="font-bold text-amber-300">Weakness 1:</span> Cannot generalise findings to wider population</p>
            <p><span className="font-bold text-amber-300">Weakness 2:</span> Researcher bias - subjective interpretation</p>
            <p><span className="font-bold text-amber-300">Weakness 3:</span> Time-consuming to conduct; ethical issues with unique cases</p>
          </div>
        </div>
      )}
    </div>
  )
}

// ============= GCSE LESSON 12: RELIABILITY & VALIDITY =============

// Reliability Teaching Slide
const ReliabilityTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>('definition')

  const sections = [
    {
      id: 'definition',
      title: '📖 What is Reliability?',
      color: 'blue',
      content: {
        main: 'Reliability = Consistency. Will you get the same results if you repeat the study?',
        points: [
          'A measure of consistency in results',
          'Same results when measurement is repeated',
          'Like weighing scales giving the same weight each time'
        ]
      }
    },
    {
      id: 'internal',
      title: '🔬 Internal Reliability',
      color: 'purple',
      content: {
        definition: 'Consistency WITHIN the study itself',
        example: 'All items in a questionnaire measure the same thing',
        test: 'Split-half method - compare first half of test with second half',
        improvement: 'Ensure all questions/items relate to the same construct'
      }
    },
    {
      id: 'external',
      title: '🌍 External Reliability',
      color: 'emerald',
      content: {
        definition: 'Consistency ACROSS repeated studies',
        example: 'Get the same results when you repeat the study',
        test: 'Test-retest method - do the study twice with same participants',
        improvement: 'Standardise procedures, use clear operationalised variables'
      }
    },
    {
      id: 'inter-rater',
      title: '👥 Inter-Rater Reliability',
      color: 'amber',
      content: {
        definition: 'Consistency between different researchers/observers',
        example: 'Two observers watching the same behavior and recording the same things',
        test: 'Compare observations from multiple raters - calculate correlation',
        improvement: 'Train observers, use clear behavioral categories, pilot test'
      }
    },
    {
      id: 'methods',
      title: '⚖️ Reliable vs Less Reliable Methods',
      color: 'rose',
      content: {
        moreReliable: ['Lab experiments (controlled)', 'Closed questions', 'Structured interviews', 'Standardised procedures'],
        lessReliable: ['Unstructured interviews', 'Case studies', 'Open questions', 'Naturalistic observations']
      }
    }
  ]

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id)
  }

  const getColorClasses = (color: string, isExpanded: boolean) => {
    const colors: Record<string, { bg: string; border: string; text: string; headerBg: string }> = {
      blue: { bg: 'bg-blue-900/30', border: 'border-blue-500/50', text: 'text-blue-300', headerBg: 'bg-blue-900/50' },
      purple: { bg: 'bg-purple-900/30', border: 'border-purple-500/50', text: 'text-purple-300', headerBg: 'bg-purple-900/50' },
      emerald: { bg: 'bg-emerald-900/30', border: 'border-emerald-500/50', text: 'text-emerald-300', headerBg: 'bg-emerald-900/50' },
      amber: { bg: 'bg-amber-900/30', border: 'border-amber-500/50', text: 'text-amber-300', headerBg: 'bg-amber-900/50' },
      rose: { bg: 'bg-rose-900/30', border: 'border-rose-500/50', text: 'text-rose-300', headerBg: 'bg-rose-900/50' }
    }
    return colors[color] || colors.blue
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-8'}`}>
      <div className="text-center mb-6">
        <h2 className={`${isPresenting ? 'text-3xl' : 'text-4xl'} font-black text-white mb-2`}>Reliability</h2>
        <p className="text-gray-400">Click sections to expand/collapse</p>
      </div>

      <div className="space-y-3 max-w-4xl mx-auto w-full">
        {sections.map((section) => {
          const colorClasses = getColorClasses(section.color, expandedSection === section.id)
          return (
            <div key={section.id} className={`rounded-xl border-2 ${colorClasses.border} overflow-hidden transition-all duration-300`}>
              {/* Header - always visible, clickable */}
              <div
                onClick={() => toggleSection(section.id)}
                className={`${isPresenting ? 'p-3' : 'p-4'} cursor-pointer flex items-center justify-between transition-colors ${
                  expandedSection === section.id ? colorClasses.headerBg : 'bg-gray-800/80 hover:bg-gray-700/80'
                }`}
              >
                <h3 className={`font-bold ${isPresenting ? 'text-base' : 'text-lg'} ${
                  expandedSection === section.id ? colorClasses.text : 'text-gray-300'
                }`}>
                  {section.title}
                </h3>
                <ChevronRight className={`${colorClasses.text} transform transition-transform duration-300 ${
                  expandedSection === section.id ? 'rotate-90' : ''
                }`} size={isPresenting ? 20 : 24} />
              </div>

              {/* Expandable content */}
              {expandedSection === section.id && (
                <div className={`${isPresenting ? 'p-4' : 'p-5'} ${colorClasses.bg} border-t ${colorClasses.border} animate-fadeIn`}>
                  {section.id === 'definition' && 'main' in section.content && (
                    <div className="space-y-3">
                      <p className={`${isPresenting ? 'text-base' : 'text-lg'} font-semibold ${colorClasses.text}`}>
                        {section.content.main}
                      </p>
                      <ul className={`space-y-2 ${isPresenting ? 'text-sm' : 'text-base'} text-gray-200`}>
                        {section.content.points?.map((point, idx) => (
                          <li key={idx}>• {point}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {(section.id === 'internal' || section.id === 'external' || section.id === 'inter-rater') && 'definition' in section.content && (
                    <div className="space-y-3">
                      <div className={`${isPresenting ? 'p-3' : 'p-4'} bg-gray-800/50 rounded-lg`}>
                        <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-400 uppercase tracking-wide mb-1`}>Definition</p>
                        <p className={`${isPresenting ? 'text-sm' : 'text-base'} font-semibold ${colorClasses.text}`}>{section.content.definition}</p>
                      </div>
                      <div className={`${isPresenting ? 'p-3' : 'p-4'} bg-gray-800/50 rounded-lg`}>
                        <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-400 uppercase tracking-wide mb-1`}>Example</p>
                        <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200`}>{section.content.example}</p>
                      </div>
                      <div className={`${isPresenting ? 'p-3' : 'p-4'} bg-gray-800/50 rounded-lg`}>
                        <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-400 uppercase tracking-wide mb-1`}>How to Assess</p>
                        <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200`}>{section.content.test}</p>
                      </div>
                      {'improvement' in section.content && (
                        <div className={`${isPresenting ? 'p-3' : 'p-4'} bg-gray-800/50 rounded-lg`}>
                          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-400 uppercase tracking-wide mb-1`}>How to Improve</p>
                          <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-green-300`}>{section.content.improvement}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {section.id === 'methods' && 'moreReliable' in section.content && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className={`${isPresenting ? 'p-3' : 'p-4'} bg-green-900/30 rounded-lg border border-green-500/30`}>
                        <p className={`${isPresenting ? 'text-sm' : 'text-base'} font-bold text-green-300 mb-2`}>✓ More Reliable</p>
                        <ul className={`space-y-1 ${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200`}>
                          {section.content.moreReliable?.map((item, idx) => (
                            <li key={idx}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={`${isPresenting ? 'p-3' : 'p-4'} bg-red-900/30 rounded-lg border border-red-500/30`}>
                        <p className={`${isPresenting ? 'text-sm' : 'text-base'} font-bold text-red-300 mb-2`}>✗ Less Reliable</p>
                        <ul className={`space-y-1 ${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200`}>
                          {section.content.lessReliable?.map((item, idx) => (
                            <li key={idx}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Reliability AFL
const ReliabilityAFL: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const questions = [
    {
      question: "Reliability refers to...",
      options: ["Whether results are true", "Consistency of measurement", "How many participants there are", "The type of data collected"],
      correct: 1,
      explanation: "Reliability means getting consistent results when a measurement is repeated."
    },
    {
      question: "Test-retest reliability involves...",
      options: ["Two observers comparing notes", "Doing the same test twice and comparing", "Testing two groups", "Testing validity"],
      correct: 1,
      explanation: "Test-retest involves giving the same test twice and checking if answers are consistent."
    }
  ]

  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)

  const handleSelect = (idx: number) => {
    if (showFeedback) return
    setSelected(idx)
    setShowFeedback(true)
    if (idx === questions[currentQ].correct) setScore(s => s + 1)
  }

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(q => q + 1)
      setSelected(null)
      setShowFeedback(false)
    }
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Check Your Understanding</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Reliability - Question {currentQ + 1} of {questions.length}</p>
      </div>

      <div className={`flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full`}>
        <div className={`bg-gray-800/50 rounded-xl border border-gray-700 ${isPresenting ? 'p-6' : 'p-8'} mb-6`}>
          <p className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-white mb-6`}>{questions[currentQ].question}</p>
          
          <div className="grid grid-cols-1 gap-3">
            {questions[currentQ].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`p-4 rounded-lg text-left transition-all ${isPresenting ? 'text-sm' : 'text-base'} ${
                  showFeedback
                    ? idx === questions[currentQ].correct
                      ? 'bg-green-600/30 border-2 border-green-500 text-green-200'
                      : idx === selected
                      ? 'bg-red-600/30 border-2 border-red-500 text-red-200'
                      : 'bg-gray-700/30 border border-gray-600 text-gray-400'
                    : selected === idx
                    ? 'bg-blue-600/30 border-2 border-blue-500 text-white'
                    : 'bg-gray-700/50 border border-gray-600 text-gray-200 hover:bg-gray-700'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {showFeedback && (
            <div className={`mt-6 p-4 rounded-lg ${selected === questions[currentQ].correct ? 'bg-green-900/30 border border-green-600' : 'bg-amber-900/30 border border-amber-600'}`}>
              <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200`}>{questions[currentQ].explanation}</p>
            </div>
          )}
        </div>

        {showFeedback && currentQ < questions.length - 1 && (
          <button onClick={nextQuestion} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg self-center">
            Next Question →
          </button>
        )}

        {showFeedback && currentQ === questions.length - 1 && (
          <div className="text-center">
            <p className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-white`}>Score: {score}/{questions.length}</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Validity Teaching Slide
const ValidityTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>('definition')

  const sections = [
    {
      id: 'definition',
      title: '🎯 What is Validity?',
      color: 'emerald',
      content: {
        main: 'Validity = Does it measure what it claims to measure?',
        points: [
          'Whether results are "true" and meaningful',
          'Does the study represent real life?',
          'Are we actually measuring what we think we are?'
        ]
      }
    },
    {
      id: 'internal',
      title: '🔒 Internal Validity',
      color: 'blue',
      content: {
        definition: 'Confidence that the IV caused the change in DV, not confounding variables',
        example: 'In a memory experiment, ensuring lighting, time of day, and noise are controlled',
        assess: 'Check for extraneous variables, demand characteristics, and experimenter effects',
        improvement: 'Control extraneous variables, use standardised procedures, single/double blind techniques'
      }
    },
    {
      id: 'external',
      title: '🌐 External Validity',
      color: 'purple',
      content: {
        definition: 'Can results be generalised beyond the specific study?',
        example: 'Can findings from a university sample apply to the general population?',
        assess: 'Consider sample representativeness, setting, and historical context',
        improvement: 'Use diverse/representative samples, replicate in different settings'
      }
    },
    {
      id: 'ecological',
      title: '🌳 Ecological Validity',
      color: 'teal',
      content: {
        definition: 'Real-world applicability - does the study reflect natural behaviour?',
        example: 'Lab memory tests with word lists vs. remembering shopping items at home',
        assess: 'Is the task/setting artificial? Would people behave this way in real life?',
        improvement: 'Use naturalistic settings, real-world tasks, field experiments'
      }
    },
    {
      id: 'population',
      title: '👥 Population Validity',
      color: 'amber',
      content: {
        definition: 'Can results be generalised to the target population?',
        example: 'Research on university students may not apply to elderly or children',
        assess: 'How representative is the sample? Consider age, gender, culture, education',
        improvement: 'Use random/stratified sampling, recruit diverse participants'
      }
    },
    {
      id: 'threats',
      title: '⚠️ Threats to Validity',
      color: 'rose',
      content: {
        threats: [
          { name: 'Extraneous Variables', desc: 'Uncontrolled factors affecting DV' },
          { name: 'Demand Characteristics', desc: 'Participants guess the aim and change behaviour' },
          { name: 'Investigator Effects', desc: 'Researcher unconsciously influences results' },
          { name: 'Artificial Tasks', desc: 'Tasks don\'t reflect real-world behaviour' },
          { name: 'Social Desirability', desc: 'Participants give "acceptable" rather than true answers' },
          { name: 'Sampling Bias', desc: 'Sample doesn\'t represent target population' }
        ]
      }
    }
  ]

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id)
  }

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; headerBg: string }> = {
      emerald: { bg: 'bg-emerald-900/30', border: 'border-emerald-500/50', text: 'text-emerald-300', headerBg: 'bg-emerald-900/50' },
      blue: { bg: 'bg-blue-900/30', border: 'border-blue-500/50', text: 'text-blue-300', headerBg: 'bg-blue-900/50' },
      purple: { bg: 'bg-purple-900/30', border: 'border-purple-500/50', text: 'text-purple-300', headerBg: 'bg-purple-900/50' },
      teal: { bg: 'bg-teal-900/30', border: 'border-teal-500/50', text: 'text-teal-300', headerBg: 'bg-teal-900/50' },
      amber: { bg: 'bg-amber-900/30', border: 'border-amber-500/50', text: 'text-amber-300', headerBg: 'bg-amber-900/50' },
      rose: { bg: 'bg-rose-900/30', border: 'border-rose-500/50', text: 'text-rose-300', headerBg: 'bg-rose-900/50' }
    }
    return colors[color] || colors.emerald
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-8'}`}>
      <div className="text-center mb-6">
        <h2 className={`${isPresenting ? 'text-3xl' : 'text-4xl'} font-black text-white mb-2`}>Validity</h2>
        <p className="text-gray-400">Click sections to expand/collapse</p>
      </div>

      <div className="space-y-3 max-w-4xl mx-auto w-full">
        {sections.map((section) => {
          const colorClasses = getColorClasses(section.color)
          return (
            <div key={section.id} className={`rounded-xl border-2 ${colorClasses.border} overflow-hidden transition-all duration-300`}>
              {/* Header - always visible, clickable */}
              <div
                onClick={() => toggleSection(section.id)}
                className={`${isPresenting ? 'p-3' : 'p-4'} cursor-pointer flex items-center justify-between transition-colors ${
                  expandedSection === section.id ? colorClasses.headerBg : 'bg-gray-800/80 hover:bg-gray-700/80'
                }`}
              >
                <h3 className={`font-bold ${isPresenting ? 'text-base' : 'text-lg'} ${
                  expandedSection === section.id ? colorClasses.text : 'text-gray-300'
                }`}>
                  {section.title}
                </h3>
                <ChevronRight className={`${colorClasses.text} transform transition-transform duration-300 ${
                  expandedSection === section.id ? 'rotate-90' : ''
                }`} size={isPresenting ? 20 : 24} />
              </div>

              {/* Expandable content */}
              {expandedSection === section.id && (
                <div className={`${isPresenting ? 'p-4' : 'p-5'} ${colorClasses.bg} border-t ${colorClasses.border} animate-fadeIn`}>
                  {section.id === 'definition' && 'main' in section.content && (
                    <div className="space-y-3">
                      <p className={`${isPresenting ? 'text-base' : 'text-lg'} font-semibold ${colorClasses.text}`}>
                        {section.content.main}
                      </p>
                      <ul className={`space-y-2 ${isPresenting ? 'text-sm' : 'text-base'} text-gray-200`}>
                        {section.content.points?.map((point, idx) => (
                          <li key={idx}>• {point}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {(section.id === 'internal' || section.id === 'external' || section.id === 'ecological' || section.id === 'population') && 'definition' in section.content && (
                    <div className="space-y-3">
                      <div className={`${isPresenting ? 'p-3' : 'p-4'} bg-gray-800/50 rounded-lg`}>
                        <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-400 uppercase tracking-wide mb-1`}>Definition</p>
                        <p className={`${isPresenting ? 'text-sm' : 'text-base'} font-semibold ${colorClasses.text}`}>{section.content.definition}</p>
                      </div>
                      <div className={`${isPresenting ? 'p-3' : 'p-4'} bg-gray-800/50 rounded-lg`}>
                        <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-400 uppercase tracking-wide mb-1`}>Example</p>
                        <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200`}>{section.content.example}</p>
                      </div>
                      {'assess' in section.content && (
                        <div className={`${isPresenting ? 'p-3' : 'p-4'} bg-gray-800/50 rounded-lg`}>
                          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-400 uppercase tracking-wide mb-1`}>How to Assess</p>
                          <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200`}>{section.content.assess}</p>
                        </div>
                      )}
                      {'improvement' in section.content && (
                        <div className={`${isPresenting ? 'p-3' : 'p-4'} bg-gray-800/50 rounded-lg`}>
                          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-400 uppercase tracking-wide mb-1`}>How to Improve</p>
                          <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-green-300`}>{section.content.improvement}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {section.id === 'threats' && 'threats' in section.content && (
                    <div className="grid grid-cols-2 gap-3">
                      {section.content.threats?.map((threat, idx) => (
                        <div key={idx} className={`${isPresenting ? 'p-3' : 'p-4'} bg-red-900/20 rounded-lg border border-red-500/30`}>
                          <p className={`${isPresenting ? 'text-sm' : 'text-base'} font-bold text-red-300`}>{threat.name}</p>
                          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-300 mt-1`}>{threat.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Validity AFL
const ValidityAFL: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const questions = [
    {
      question: "Ecological validity refers to...",
      options: ["How natural/real-life the findings are", "How consistent results are", "How ethical the study is", "How many participants there are"],
      correct: 0,
      explanation: "Ecological validity is about whether findings can be generalised to real-life settings."
    },
    {
      question: "What threatens internal validity?",
      options: ["Using a large sample", "Extraneous variables affecting the DV", "Having clear instructions", "Using standardised procedures"],
      correct: 1,
      explanation: "If EVs affect the DV, we can't be sure the IV caused the change - threatening internal validity."
    }
  ]

  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)

  const handleSelect = (idx: number) => {
    if (showFeedback) return
    setSelected(idx)
    setShowFeedback(true)
    if (idx === questions[currentQ].correct) setScore(s => s + 1)
  }

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(q => q + 1)
      setSelected(null)
      setShowFeedback(false)
    }
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Check Your Understanding</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Validity - Question {currentQ + 1} of {questions.length}</p>
      </div>

      <div className={`flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full`}>
        <div className={`bg-gray-800/50 rounded-xl border border-gray-700 ${isPresenting ? 'p-6' : 'p-8'} mb-6`}>
          <p className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-white mb-6`}>{questions[currentQ].question}</p>
          
          <div className="grid grid-cols-1 gap-3">
            {questions[currentQ].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`p-4 rounded-lg text-left transition-all ${isPresenting ? 'text-sm' : 'text-base'} ${
                  showFeedback
                    ? idx === questions[currentQ].correct
                      ? 'bg-green-600/30 border-2 border-green-500 text-green-200'
                      : idx === selected
                      ? 'bg-red-600/30 border-2 border-red-500 text-red-200'
                      : 'bg-gray-700/30 border border-gray-600 text-gray-400'
                    : selected === idx
                    ? 'bg-blue-600/30 border-2 border-blue-500 text-white'
                    : 'bg-gray-700/50 border border-gray-600 text-gray-200 hover:bg-gray-700'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {showFeedback && (
            <div className={`mt-6 p-4 rounded-lg ${selected === questions[currentQ].correct ? 'bg-green-900/30 border border-green-600' : 'bg-amber-900/30 border border-amber-600'}`}>
              <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200`}>{questions[currentQ].explanation}</p>
            </div>
          )}
        </div>

        {showFeedback && currentQ < questions.length - 1 && (
          <button onClick={nextQuestion} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg self-center">
            Next Question →
          </button>
        )}

        {showFeedback && currentQ === questions.length - 1 && (
          <div className="text-center">
            <p className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-white`}>Score: {score}/{questions.length}</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Reliability vs Validity Task
const ReliabilityValidityTask: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const scenarios = [
    { scenario: "A questionnaire gives the same answers when repeated", concept: "reliability" },
    { scenario: "A lab experiment doesn't reflect real-life behaviour", concept: "validity" },
    { scenario: "Two observers record different behaviours", concept: "reliability" },
    { scenario: "Extraneous variables affected the results", concept: "validity" },
    { scenario: "A test measures what it claims to measure", concept: "validity" },
    { scenario: "An unstructured interview gives different results each time", concept: "reliability" },
  ]

  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const score = scenarios.filter((s, i) => answers[i] === s.concept).length

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Reliability or Validity?</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Classify each scenario</p>
      </div>

      <div className="space-y-3 flex-1">
        {scenarios.map((s, idx) => (
          <div key={idx} className={`bg-gray-800/50 rounded-xl border ${showResults ? (answers[idx] === s.concept ? 'border-green-500' : 'border-red-500') : 'border-gray-700'} ${isPresenting ? 'p-3' : 'p-4'}`}>
            <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200 mb-3`}>{s.scenario}</p>
            
            <div className="flex gap-2">
              {['reliability', 'validity'].map(concept => (
                <button
                  key={concept}
                  onClick={() => !showResults && setAnswers(prev => ({ ...prev, [idx]: concept }))}
                  className={`px-3 py-1 rounded-lg font-bold capitalize ${isPresenting ? 'text-xs' : 'text-sm'} ${
                    showResults
                      ? concept === s.concept
                        ? 'bg-green-600 text-white'
                        : answers[idx] === concept
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-700 text-gray-400'
                      : answers[idx] === concept
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {concept}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {!showResults && Object.keys(answers).length === scenarios.length && (
        <button onClick={() => setShowResults(true)} className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg mt-4 self-center">
          Check My Answers
        </button>
      )}

      {showResults && (
        <div className={`text-center mt-4 ${isPresenting ? 'p-4' : 'p-6'} bg-gray-800/50 rounded-xl`}>
          <p className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-white`}>Score: {score}/{scenarios.length}</p>
        </div>
      )}
    </div>
  )
}

// Lesson 12 Extended Exam Task
const Lesson12ExtendedExamTask: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [showMarkScheme, setShowMarkScheme] = useState(false)

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Extended Exam Practice</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Reliability & Validity - 6 Mark Question</p>
      </div>

      <div className={`bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl border border-purple-500/30 ${isPresenting ? 'p-4 mb-4' : 'p-6 mb-6'}`}>
        <p className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-white mb-2`}>Question:</p>
        <p className={`${isPresenting ? 'text-sm' : 'text-lg'} text-gray-200`}>
          Explain the difference between reliability and validity. Use examples to illustrate your answer. [6 marks]
        </p>
      </div>

      <button 
        onClick={() => setShowMarkScheme(!showMarkScheme)}
        className={`mt-4 bg-amber-600 hover:bg-amber-700 text-white font-bold ${isPresenting ? 'py-2 px-4 text-sm' : 'py-3 px-6'} rounded-lg self-center`}
      >
        {showMarkScheme ? 'Hide' : 'Show'} Mark Scheme
      </button>

      {showMarkScheme && (
        <div className={`mt-4 bg-amber-900/20 rounded-xl border border-amber-500/30 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-lg'} font-bold text-amber-300 mb-3`}>Mark Scheme Points:</h3>
          <div className={`space-y-2 ${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200`}>
            <p><span className="font-bold text-amber-300">Reliability:</span> Consistency of measurement; same results when repeated</p>
            <p><span className="font-bold text-amber-300">Example:</span> Test-retest - questionnaire gives same answers; inter-observer reliability</p>
            <p><span className="font-bold text-amber-300">Validity:</span> Whether it measures what it claims to; whether results are "true"</p>
            <p><span className="font-bold text-amber-300">Types:</span> Internal (IV caused DV change) and ecological (applies to real life)</p>
            <p><span className="font-bold text-amber-300">Example:</span> Lab experiments may lack ecological validity; EVs threaten internal validity</p>
            <p><span className="font-bold text-amber-300">Link:</span> Reliability is part of validity - consistent measures are more likely to be valid</p>
          </div>
        </div>
      )}
    </div>
  )
}

// ============= GCSE LESSON 13: DATA TYPES =============

// Quantitative vs Qualitative Teaching Slide
const DataTypesTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [focusedSide, setFocusedSide] = useState<'qualitative' | 'quantitative' | null>(null)

  const qualitative = {
    title: 'Qualitative Data',
    color: 'purple',
    icon: <FileText className={isPresenting ? 'w-8 h-8' : 'w-12 h-12'} />,
    tagline: 'Words, descriptions, feelings',
    examples: ['Interview transcripts', 'Open question responses', 'Diary entries', 'Observation notes'],
    strengths: ['Rich detail', 'Participant perspective', 'Unexpected findings'],
    limitations: ['Hard to analyse', 'Subjective', 'Time-consuming'],
    collectMethods: ['Interviews', 'Open questions', 'Observations']
  }

  const quantitative = {
    title: 'Quantitative Data',
    color: 'blue',
    icon: <BarChart className={isPresenting ? 'w-8 h-8' : 'w-12 h-12'} />,
    tagline: 'Numbers, measurements, statistics',
    examples: ['Test scores', 'Reaction times', 'Rating scales', 'Counts/frequencies'],
    strengths: ['Easy to analyse', 'Objective', 'Can compare groups'],
    limitations: ['May oversimplify', 'Miss depth', 'Lacks context'],
    collectMethods: ['Experiments', 'Closed questions', 'Standardised tests']
  }

  const renderSide = (data: typeof qualitative, side: 'qualitative' | 'quantitative') => {
    const isFocused = focusedSide === side
    const isUnfocused = focusedSide !== null && focusedSide !== side
    const colorClasses = {
      purple: {
        bg: 'bg-purple-900/20',
        bgFocused: 'bg-purple-900/40',
        border: 'border-purple-500/40',
        text: 'text-purple-300',
        icon: 'text-purple-400'
      },
      blue: {
        bg: 'bg-blue-900/20',
        bgFocused: 'bg-blue-900/40',
        border: 'border-blue-500/40',
        text: 'text-blue-300',
        icon: 'text-blue-400'
      }
    }
    const colors = colorClasses[data.color as keyof typeof colorClasses]

    return (
      <div
        onMouseEnter={() => setFocusedSide(side)}
        onMouseLeave={() => setFocusedSide(null)}
        onClick={() => setFocusedSide(focusedSide === side ? null : side)}
        className={`relative overflow-hidden rounded-xl border-2 ${colors.border} cursor-pointer transition-all duration-500 ease-out ${
          isFocused ? `flex-[2] ${colors.bgFocused} shadow-2xl scale-[1.02]` :
          isUnfocused ? `flex-[0.6] ${colors.bg} opacity-60 scale-[0.98]` :
          `flex-1 ${colors.bg} hover:shadow-lg`
        } ${isPresenting ? 'p-4' : 'p-6'}`}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`${colors.icon} transition-transform duration-300 ${isFocused ? 'scale-110' : ''}`}>
            {data.icon}
          </div>
          <div>
            <h3 className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold ${colors.text}`}>{data.title}</h3>
            <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-400 italic`}>{data.tagline}</p>
          </div>
        </div>

        {/* Content - shows more when focused */}
        <div className={`space-y-4 transition-all duration-300 ${isUnfocused ? 'opacity-70' : ''}`}>
          {/* Examples */}
          <div>
            <h4 className={`${isPresenting ? 'text-xs' : 'text-sm'} font-semibold ${colors.text} mb-2`}>Examples:</h4>
            <div className="flex flex-wrap gap-2">
              {data.examples.map((ex, i) => (
                <span key={i} className={`${isPresenting ? 'text-xs px-2 py-1' : 'text-sm px-3 py-1'} bg-gray-800/60 rounded-full text-gray-200`}>
                  {ex}
                </span>
              ))}
            </div>
          </div>

          {/* Strengths & Limitations - expanded when focused */}
          <div className={`grid ${isFocused ? 'grid-cols-2' : 'grid-cols-1'} gap-3 transition-all duration-300`}>
            <div>
              <h4 className={`${isPresenting ? 'text-xs' : 'text-sm'} font-semibold text-green-400 mb-2`}>✓ Strengths</h4>
              <ul className={`space-y-1 ${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200`}>
                {data.strengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            {(isFocused || !isUnfocused) && (
              <div className={`transition-all duration-300 ${isFocused ? 'opacity-100' : 'opacity-80'}`}>
                <h4 className={`${isPresenting ? 'text-xs' : 'text-sm'} font-semibold text-red-400 mb-2`}>✗ Limitations</h4>
                <ul className={`space-y-1 ${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200`}>
                  {data.limitations.map((l, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Collection Methods - only when focused */}
          {isFocused && (
            <div className="animate-fadeIn">
              <h4 className={`${isPresenting ? 'text-xs' : 'text-sm'} font-semibold ${colors.text} mb-2`}>Collection Methods:</h4>
              <div className="flex flex-wrap gap-2">
                {data.collectMethods.map((m, i) => (
                  <span key={i} className={`${isPresenting ? 'text-xs px-2 py-1' : 'text-sm px-3 py-1.5'} bg-gray-700/80 rounded-lg text-white font-medium border border-gray-600`}>
                    {m}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Focus indicator */}
        {isFocused && (
          <div className={`absolute top-2 right-2 ${isPresenting ? 'text-xs' : 'text-sm'} ${colors.text} opacity-60`}>
            <Eye className="w-4 h-4" />
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-4' : 'p-6'}`}>
      {/* Header */}
      <div className={`text-center ${isPresenting ? 'mb-3' : 'mb-6'}`}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-1`}>Types of Data</h2>
        <p className={`${isPresenting ? 'text-xs' : 'text-base'} text-gray-400`}>Hover or click each side to explore</p>
      </div>

      {/* Split Screen */}
      <div className="flex gap-3 flex-1 min-h-0">
        {renderSide(qualitative, 'qualitative')}
        
        {/* Divider */}
        <div className="w-1 bg-gradient-to-b from-purple-500/50 via-gray-600 to-blue-500/50 rounded-full flex-shrink-0" />
        
        {renderSide(quantitative, 'quantitative')}
      </div>

      {/* Footer hint */}
      <div className={`text-center ${isPresenting ? 'mt-2' : 'mt-4'} text-gray-500 ${isPresenting ? 'text-xs' : 'text-sm'}`}>
        {focusedSide ? `Viewing ${focusedSide} data details` : 'Click a side to lock focus'}
      </div>
    </div>
  )
}

// Primary vs Secondary Teaching Slide
const PrimarySecondaryTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [focusedSide, setFocusedSide] = useState<'primary' | 'secondary' | null>(null)

  const primary = {
    title: 'Primary Data',
    color: 'green',
    icon: <Database className={isPresenting ? 'w-8 h-8' : 'w-12 h-12'} />,
    tagline: 'First-hand, original data YOU collect',
    examples: ['Your experiment results', 'Survey responses', 'Interview transcripts', 'Observation records'],
    strengths: ['Specific to your aims', 'Up-to-date', 'You know how it was collected'],
    limitations: ['Time-consuming', 'Expensive', 'May have small sample'],
    whenToUse: ['Need specific data', 'Topic is new/unique', 'Need current information']
  }

  const secondary = {
    title: 'Secondary Data',
    color: 'amber',
    icon: <BookOpen className={isPresenting ? 'w-8 h-8' : 'w-12 h-12'} />,
    tagline: 'Data collected by SOMEONE ELSE',
    examples: ['Government statistics', 'Previous research', 'Medical records', 'Published datasets'],
    strengths: ['Already exists', 'Often large samples', 'Quick and cheap'],
    limitations: ['May not fit your aims', 'May be outdated', "Don't know collection method"],
    whenToUse: ['Need large samples', 'Historical data needed', 'Limited time/budget']
  }

  const renderSide = (data: typeof primary, side: 'primary' | 'secondary') => {
    const isFocused = focusedSide === side
    const isUnfocused = focusedSide !== null && focusedSide !== side
    const colorClasses = {
      green: {
        bg: 'bg-green-900/20',
        bgFocused: 'bg-green-900/40',
        border: 'border-green-500/40',
        text: 'text-green-300',
        icon: 'text-green-400'
      },
      amber: {
        bg: 'bg-amber-900/20',
        bgFocused: 'bg-amber-900/40',
        border: 'border-amber-500/40',
        text: 'text-amber-300',
        icon: 'text-amber-400'
      }
    }
    const colors = colorClasses[data.color as keyof typeof colorClasses]

    return (
      <div
        onMouseEnter={() => setFocusedSide(side)}
        onMouseLeave={() => setFocusedSide(null)}
        onClick={() => setFocusedSide(focusedSide === side ? null : side)}
        className={`relative overflow-hidden rounded-xl border-2 ${colors.border} cursor-pointer transition-all duration-500 ease-out ${
          isFocused ? `flex-[2] ${colors.bgFocused} shadow-2xl scale-[1.02]` :
          isUnfocused ? `flex-[0.6] ${colors.bg} opacity-60 scale-[0.98]` :
          `flex-1 ${colors.bg} hover:shadow-lg`
        } ${isPresenting ? 'p-4' : 'p-6'}`}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`${colors.icon} transition-transform duration-300 ${isFocused ? 'scale-110' : ''}`}>
            {data.icon}
          </div>
          <div>
            <h3 className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold ${colors.text}`}>{data.title}</h3>
            <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-400 italic`}>{data.tagline}</p>
          </div>
        </div>

        {/* Content - shows more when focused */}
        <div className={`space-y-4 transition-all duration-300 ${isUnfocused ? 'opacity-70' : ''}`}>
          {/* Examples */}
          <div>
            <h4 className={`${isPresenting ? 'text-xs' : 'text-sm'} font-semibold ${colors.text} mb-2`}>Examples:</h4>
            <div className="flex flex-wrap gap-2">
              {data.examples.map((ex, i) => (
                <span key={i} className={`${isPresenting ? 'text-xs px-2 py-1' : 'text-sm px-3 py-1'} bg-gray-800/60 rounded-full text-gray-200`}>
                  {ex}
                </span>
              ))}
            </div>
          </div>

          {/* Strengths & Limitations - expanded when focused */}
          <div className={`grid ${isFocused ? 'grid-cols-2' : 'grid-cols-1'} gap-3 transition-all duration-300`}>
            <div>
              <h4 className={`${isPresenting ? 'text-xs' : 'text-sm'} font-semibold text-green-400 mb-2`}>✓ Strengths</h4>
              <ul className={`space-y-1 ${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200`}>
                {data.strengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            {(isFocused || !isUnfocused) && (
              <div className={`transition-all duration-300 ${isFocused ? 'opacity-100' : 'opacity-80'}`}>
                <h4 className={`${isPresenting ? 'text-xs' : 'text-sm'} font-semibold text-red-400 mb-2`}>✗ Limitations</h4>
                <ul className={`space-y-1 ${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200`}>
                  {data.limitations.map((l, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* When to Use - only when focused */}
          {isFocused && (
            <div className="animate-fadeIn">
              <h4 className={`${isPresenting ? 'text-xs' : 'text-sm'} font-semibold ${colors.text} mb-2`}>When to Use:</h4>
              <div className="flex flex-wrap gap-2">
                {data.whenToUse.map((w, i) => (
                  <span key={i} className={`${isPresenting ? 'text-xs px-2 py-1' : 'text-sm px-3 py-1.5'} bg-gray-700/80 rounded-lg text-white font-medium border border-gray-600`}>
                    {w}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Focus indicator */}
        {isFocused && (
          <div className={`absolute top-2 right-2 ${isPresenting ? 'text-xs' : 'text-sm'} ${colors.text} opacity-60`}>
            <Eye className="w-4 h-4" />
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-4' : 'p-6'}`}>
      {/* Header */}
      <div className={`text-center ${isPresenting ? 'mb-3' : 'mb-6'}`}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-1`}>Primary vs Secondary Data</h2>
        <p className={`${isPresenting ? 'text-xs' : 'text-base'} text-gray-400`}>Where does the data come from? Hover or click to explore</p>
      </div>

      {/* Split Screen */}
      <div className="flex gap-3 flex-1 min-h-0">
        {renderSide(primary, 'primary')}
        
        {/* Divider */}
        <div className="w-1 bg-gradient-to-b from-green-500/50 via-gray-600 to-amber-500/50 rounded-full flex-shrink-0" />
        
        {renderSide(secondary, 'secondary')}
      </div>

      {/* Footer hint */}
      <div className={`text-center ${isPresenting ? 'mt-2' : 'mt-4'} text-gray-500 ${isPresenting ? 'text-xs' : 'text-sm'}`}>
        {focusedSide ? `Viewing ${focusedSide} data details` : 'Click a side to lock focus'}
      </div>
    </div>
  )
}

// Data Types AFL
const DataTypesAFL: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const questions = [
    {
      question: "Test scores from an experiment are an example of...",
      options: ["Qualitative data", "Quantitative data", "Secondary data", "Primary data only"],
      correct: 1,
      explanation: "Test scores are numbers, so they are quantitative data."
    },
    {
      question: "Primary data is...",
      options: ["Data from government statistics", "Data collected by the researcher themselves", "Data from textbooks", "Data from other studies"],
      correct: 1,
      explanation: "Primary data is collected first-hand by the researcher for their specific study."
    },
    {
      question: "A strength of qualitative data is...",
      options: ["Easy to analyse", "Rich detail and high validity", "Can calculate averages", "Less bias"],
      correct: 1,
      explanation: "Qualitative data provides rich, detailed information with high validity."
    }
  ]

  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)

  const handleSelect = (idx: number) => {
    if (showFeedback) return
    setSelected(idx)
    setShowFeedback(true)
    if (idx === questions[currentQ].correct) setScore(s => s + 1)
  }

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(q => q + 1)
      setSelected(null)
      setShowFeedback(false)
    }
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Check Your Understanding</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Data Types - Question {currentQ + 1} of {questions.length}</p>
      </div>

      <div className={`flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full`}>
        <div className={`bg-gray-800/50 rounded-xl border border-gray-700 ${isPresenting ? 'p-6' : 'p-8'} mb-6`}>
          <p className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-white mb-6`}>{questions[currentQ].question}</p>
          
          <div className="grid grid-cols-1 gap-3">
            {questions[currentQ].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`p-4 rounded-lg text-left transition-all ${isPresenting ? 'text-sm' : 'text-base'} ${
                  showFeedback
                    ? idx === questions[currentQ].correct
                      ? 'bg-green-600/30 border-2 border-green-500 text-green-200'
                      : idx === selected
                      ? 'bg-red-600/30 border-2 border-red-500 text-red-200'
                      : 'bg-gray-700/30 border border-gray-600 text-gray-400'
                    : selected === idx
                    ? 'bg-blue-600/30 border-2 border-blue-500 text-white'
                    : 'bg-gray-700/50 border border-gray-600 text-gray-200 hover:bg-gray-700'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {showFeedback && (
            <div className={`mt-6 p-4 rounded-lg ${selected === questions[currentQ].correct ? 'bg-green-900/30 border border-green-600' : 'bg-amber-900/30 border border-amber-600'}`}>
              <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200`}>{questions[currentQ].explanation}</p>
            </div>
          )}
        </div>

        {showFeedback && currentQ < questions.length - 1 && (
          <button onClick={nextQuestion} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg self-center">
            Next Question →
          </button>
        )}

        {showFeedback && currentQ === questions.length - 1 && (
          <div className="text-center">
            <p className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-white`}>Score: {score}/{questions.length}</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Data Types Classification Task
const DataTypesTask: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const items = [
    { item: "Interview transcript from your study", types: ["qualitative", "primary"] },
    { item: "Government crime statistics", types: ["quantitative", "secondary"] },
    { item: "Reaction times you measured in a lab", types: ["quantitative", "primary"] },
    { item: "Diary entries from participants", types: ["qualitative", "primary"] },
    { item: "Ratings on a 1-10 scale", types: ["quantitative", "primary"] },
    { item: "Published research findings", types: ["quantitative", "secondary"] },
  ]

  const [answers, setAnswers] = useState<Record<number, { qt?: string; ps?: string }>>({})
  const [showResults, setShowResults] = useState(false)

  const score = items.filter((item, i) => 
    answers[i]?.qt === item.types[0] && answers[i]?.ps === item.types[1]
  ).length

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Classify the Data</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Quantitative/Qualitative AND Primary/Secondary</p>
      </div>

      <div className="space-y-3 flex-1">
        {items.map((item, idx) => (
          <div key={idx} className={`bg-gray-800/50 rounded-xl border border-gray-700 ${isPresenting ? 'p-3' : 'p-4'}`}>
            <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200 mb-3`}>{item.item}</p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex gap-2">
                {['quantitative', 'qualitative'].map(type => (
                  <button
                    key={type}
                    onClick={() => !showResults && setAnswers(prev => ({ ...prev, [idx]: { ...prev[idx], qt: type } }))}
                    className={`px-2 py-1 rounded text-xs capitalize ${
                      showResults
                        ? type === item.types[0]
                          ? 'bg-green-600 text-white'
                          : answers[idx]?.qt === type
                          ? 'bg-red-600 text-white'
                          : 'bg-gray-700 text-gray-400'
                        : answers[idx]?.qt === type
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {type.slice(0, 5)}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                {['primary', 'secondary'].map(type => (
                  <button
                    key={type}
                    onClick={() => !showResults && setAnswers(prev => ({ ...prev, [idx]: { ...prev[idx], ps: type } }))}
                    className={`px-2 py-1 rounded text-xs capitalize ${
                      showResults
                        ? type === item.types[1]
                          ? 'bg-green-600 text-white'
                          : answers[idx]?.ps === type
                          ? 'bg-red-600 text-white'
                          : 'bg-gray-700 text-gray-400'
                        : answers[idx]?.ps === type
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {!showResults && (
        <button onClick={() => setShowResults(true)} className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg mt-4 self-center">
          Check My Answers
        </button>
      )}

      {showResults && (
        <div className={`text-center mt-4 ${isPresenting ? 'p-4' : 'p-6'} bg-gray-800/50 rounded-xl`}>
          <p className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-white`}>Score: {score}/{items.length}</p>
        </div>
      )}
    </div>
  )
}

// Lesson 13 Extended Exam Task
const Lesson13ExtendedExamTask: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [showMarkScheme, setShowMarkScheme] = useState(false)

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Extended Exam Practice</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Data Types - 6 Mark Question</p>
      </div>

      <div className={`bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl border border-purple-500/30 ${isPresenting ? 'p-4 mb-4' : 'p-6 mb-6'}`}>
        <p className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-white mb-2`}>Question:</p>
        <p className={`${isPresenting ? 'text-sm' : 'text-lg'} text-gray-200`}>
          Compare quantitative and qualitative data. Evaluate the strengths and weaknesses of each type. [6 marks]
        </p>
      </div>

      <button 
        onClick={() => setShowMarkScheme(!showMarkScheme)}
        className={`mt-4 bg-amber-600 hover:bg-amber-700 text-white font-bold ${isPresenting ? 'py-2 px-4 text-sm' : 'py-3 px-6'} rounded-lg self-center`}
      >
        {showMarkScheme ? 'Hide' : 'Show'} Mark Scheme
      </button>

      {showMarkScheme && (
        <div className={`mt-4 bg-amber-900/20 rounded-xl border border-amber-500/30 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-lg'} font-bold text-amber-300 mb-3`}>Mark Scheme Points:</h3>
          <div className={`space-y-2 ${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200`}>
            <p><span className="font-bold text-amber-300">Quantitative:</span> Numerical data (scores, counts, measurements)</p>
            <p><span className="font-bold text-amber-300">Quant +:</span> Easy to analyse, calculate averages, less bias, can compare groups</p>
            <p><span className="font-bold text-amber-300">Quant -:</span> Lacks depth/detail, may not reflect real experiences</p>
            <p><span className="font-bold text-amber-300">Qualitative:</span> Data in words (descriptions, transcripts)</p>
            <p><span className="font-bold text-amber-300">Qual +:</span> Rich detail, high validity, insight into thoughts/feelings</p>
            <p><span className="font-bold text-amber-300">Qual -:</span> Difficult to analyse, open to researcher bias</p>
          </div>
        </div>
      )}
    </div>
  )
}

// ============= GCSE LESSON 14: DESCRIPTIVE STATISTICS =============

// Descriptive Statistics Teaching Slide
const DescriptiveStatsTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [currentStep, setCurrentStep] = useState(0)

  const stats = [
    {
      id: 0,
      name: 'Mean',
      subtitle: '(Average)',
      icon: <Calculator className={isPresenting ? 'w-5 h-5' : 'w-6 h-6'} />,
      colorBorder: 'border-blue-500',
      colorBg: 'bg-blue-900/30',
      colorText: 'text-blue-300',
      colorMuted: 'text-blue-200',
      formula: 'Add all scores, divide by number of scores',
      example: { data: '10, 8, 12, 15, 5 = 50', calculation: '50 ÷ 5', answer: 'Mean = 10' },
      strength: 'Uses all data',
      limitation: 'Affected by extreme scores'
    },
    {
      id: 1,
      name: 'Median',
      subtitle: '(Middle)',
      icon: <ArrowUpDown className={isPresenting ? 'w-5 h-5' : 'w-6 h-6'} />,
      colorBorder: 'border-purple-500',
      colorBg: 'bg-purple-900/30',
      colorText: 'text-purple-300',
      colorMuted: 'text-purple-200',
      formula: 'Put in order, find the middle value',
      example: { data: '5, 8, 10, 12, 15', calculation: 'Middle value', answer: 'Median = 10' },
      strength: 'Not affected by extremes',
      limitation: "Doesn't use all data"
    },
    {
      id: 2,
      name: 'Mode',
      subtitle: '(Most Common)',
      icon: <Hash className={isPresenting ? 'w-5 h-5' : 'w-6 h-6'} />,
      colorBorder: 'border-green-500',
      colorBg: 'bg-green-900/30',
      colorText: 'text-green-300',
      colorMuted: 'text-green-200',
      formula: 'The most frequent value',
      example: { data: '5, 8, 8, 8, 10, 12', calculation: '8 appears 3 times', answer: 'Mode = 8' },
      strength: 'Easy to find',
      limitation: 'Can be unrepresentative'
    },
    {
      id: 3,
      name: 'Range',
      subtitle: '(Spread)',
      icon: <ArrowLeftRight className={isPresenting ? 'w-5 h-5' : 'w-6 h-6'} />,
      colorBorder: 'border-amber-500',
      colorBg: 'bg-amber-900/30',
      colorText: 'text-amber-300',
      colorMuted: 'text-amber-200',
      formula: 'Highest − Lowest',
      example: { data: '5, 8, 10, 12, 15', calculation: '15 − 5', answer: 'Range = 10' },
      strength: 'Easy to calculate',
      limitation: 'Affected by extremes'
    }
  ]

  const nextStep = () => setCurrentStep(Math.min(stats.length, currentStep + 1))
  const prevStep = () => setCurrentStep(Math.max(0, currentStep - 1))
  const showAll = () => setCurrentStep(stats.length)

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-4' : 'p-6'}`}>
      <div className={isPresenting ? 'mb-3' : 'mb-4'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white text-center mb-1`}>Descriptive Statistics</h2>
        <p className={`${isPresenting ? 'text-xs' : 'text-base'} text-gray-400 text-center`}>Measures of Central Tendency & Spread</p>
      </div>

      {/* Progress bar */}
      <div className="flex justify-center items-center gap-2 mb-4">
        {stats.map((s, i) => (
          <div 
            key={i} 
            className={`${isPresenting ? 'w-6 h-6 text-xs' : 'w-8 h-8 text-sm'} rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
              i < currentStep 
                ? `${s.colorBg} ${s.colorBorder} border-2 text-white` 
                : 'bg-gray-700 text-gray-500 border-2 border-gray-600'
            }`}
          >
            {i + 1}
          </div>
        ))}
      </div>

      {/* Stats grid - only show revealed ones */}
      <div className={`grid grid-cols-2 ${isPresenting ? 'gap-3' : 'gap-4'} max-w-5xl mx-auto flex-1`}>
        {stats.map((stat, i) => (
          <div 
            key={stat.id}
            className={`rounded-xl border-2 ${isPresenting ? 'p-3' : 'p-4'} transition-all duration-500 ${
              i < currentStep 
                ? `${stat.colorBorder} ${stat.colorBg} opacity-100 scale-100` 
                : 'border-gray-700 bg-gray-800/30 opacity-40 scale-95'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className={i < currentStep ? stat.colorText : 'text-gray-600'}>{stat.icon}</span>
              <h3 className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold ${i < currentStep ? stat.colorText : 'text-gray-600'}`}>
                {stat.name} <span className="font-normal text-gray-400">{stat.subtitle}</span>
              </h3>
            </div>
            
            {i < currentStep ? (
              <div className="animate-fadeIn space-y-2">
                <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200`}>{stat.formula}</p>
                <div className={`bg-gray-900/50 rounded-lg ${isPresenting ? 'p-2' : 'p-3'} font-mono`}>
                  <p className={`${isPresenting ? 'text-xs' : 'text-sm'} ${stat.colorMuted}`}>{stat.example.data}</p>
                  <p className={`${isPresenting ? 'text-xs' : 'text-sm'} ${stat.colorMuted}`}>
                    {stat.example.calculation} = <span className="font-bold">{stat.example.answer}</span>
                  </p>
                </div>
                <div className={`flex flex-col ${isPresenting ? 'gap-0.5 text-xs' : 'gap-1 text-sm'}`}>
                  <span className="text-green-300">✓ {stat.strength}</span>
                  <span className="text-red-300">✗ {stat.limitation}</span>
                </div>
              </div>
            ) : (
              <div className={`${isPresenting ? 'h-24' : 'h-32'} flex items-center justify-center`}>
                <span className="text-gray-600 text-sm">Click "Reveal Next" to show</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-3 mt-4">
        <button 
          onClick={prevStep} 
          disabled={currentStep === 0}
          className={`${isPresenting ? 'px-3 py-1.5 text-sm' : 'px-4 py-2'} rounded-lg font-semibold transition-all ${
            currentStep === 0 
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
              : 'bg-gray-600 hover:bg-gray-500 text-white'
          }`}
        >
          ← Back
        </button>
        <button 
          onClick={nextStep} 
          disabled={currentStep >= stats.length}
          className={`${isPresenting ? 'px-3 py-1.5 text-sm' : 'px-4 py-2'} rounded-lg font-semibold transition-all ${
            currentStep >= stats.length 
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-500 text-white'
          }`}
        >
          Reveal Next →
        </button>
        <button 
          onClick={showAll}
          className={`${isPresenting ? 'px-3 py-1.5 text-sm' : 'px-4 py-2'} rounded-lg font-semibold transition-all ${
            currentStep >= stats.length 
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
              : 'bg-purple-600 hover:bg-purple-500 text-white'
          }`}
          disabled={currentStep >= stats.length}
        >
          Show All
        </button>
      </div>
    </div>
  )
}

// Descriptive Statistics AFL
const DescriptiveStatsAFL: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const questions = [
    {
      question: "For the data: 3, 5, 7, 9, 11 - what is the mean?",
      options: ["5", "7", "9", "35"],
      correct: 1,
      explanation: "3+5+7+9+11 = 35, divided by 5 = 7"
    },
    {
      question: "For the data: 2, 4, 4, 6, 8, 10 - what is the median?",
      options: ["4", "5", "6", "4 and 6"],
      correct: 1,
      explanation: "Middle two values are 4 and 6. (4+6)÷2 = 5"
    },
    {
      question: "What measure of spread is calculated by: Highest - Lowest?",
      options: ["Mean", "Median", "Mode", "Range"],
      correct: 3,
      explanation: "The range is calculated by subtracting the lowest from the highest score."
    }
  ]

  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)

  const handleSelect = (idx: number) => {
    if (showFeedback) return
    setSelected(idx)
    setShowFeedback(true)
    if (idx === questions[currentQ].correct) setScore(s => s + 1)
  }

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(q => q + 1)
      setSelected(null)
      setShowFeedback(false)
    }
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Check Your Understanding</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Statistics - Question {currentQ + 1} of {questions.length}</p>
      </div>

      <div className={`flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full`}>
        <div className={`bg-gray-800/50 rounded-xl border border-gray-700 ${isPresenting ? 'p-6' : 'p-8'} mb-6`}>
          <p className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-white mb-6`}>{questions[currentQ].question}</p>
          
          <div className="grid grid-cols-2 gap-3">
            {questions[currentQ].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`p-4 rounded-lg text-center transition-all ${isPresenting ? 'text-sm' : 'text-base'} ${
                  showFeedback
                    ? idx === questions[currentQ].correct
                      ? 'bg-green-600/30 border-2 border-green-500 text-green-200'
                      : idx === selected
                      ? 'bg-red-600/30 border-2 border-red-500 text-red-200'
                      : 'bg-gray-700/30 border border-gray-600 text-gray-400'
                    : selected === idx
                    ? 'bg-blue-600/30 border-2 border-blue-500 text-white'
                    : 'bg-gray-700/50 border border-gray-600 text-gray-200 hover:bg-gray-700'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {showFeedback && (
            <div className={`mt-6 p-4 rounded-lg ${selected === questions[currentQ].correct ? 'bg-green-900/30 border border-green-600' : 'bg-amber-900/30 border border-amber-600'}`}>
              <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200`}>{questions[currentQ].explanation}</p>
            </div>
          )}
        </div>

        {showFeedback && currentQ < questions.length - 1 && (
          <button onClick={nextQuestion} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg self-center">
            Next Question →
          </button>
        )}

        {showFeedback && currentQ === questions.length - 1 && (
          <div className="text-center">
            <p className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-white`}>Score: {score}/{questions.length}</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Statistics Calculation Task
const StatsCalculationTask: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const data = [4, 6, 6, 8, 10, 12, 14]
  const [answers, setAnswers] = useState({ mean: '', median: '', mode: '', range: '' })
  const [showResults, setShowResults] = useState(false)

  const correct = { mean: '8.57', median: '8', mode: '6', range: '10' }

  const checkAnswer = (key: string, userAns: string) => {
    if (key === 'mean') return userAns === '8.57' || userAns === '8.6' || userAns === '60/7'
    return userAns === correct[key as keyof typeof correct]
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Calculate the Statistics</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>For the data set below</p>
      </div>

      <div className={`bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-500/30 ${isPresenting ? 'p-4 mb-4' : 'p-6 mb-6'}`}>
        <p className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-white text-center font-mono`}>
          {data.join(', ')}
        </p>
      </div>

      <div className={`grid grid-cols-2 gap-4`}>
        {[
          { key: 'mean', label: 'Mean', hint: 'Add all ÷ count' },
          { key: 'median', label: 'Median', hint: 'Middle value' },
          { key: 'mode', label: 'Mode', hint: 'Most common' },
          { key: 'range', label: 'Range', hint: 'Highest - Lowest' },
        ].map(({ key, label, hint }) => (
          <div key={key} className={`bg-gray-800/50 rounded-xl border ${showResults ? (checkAnswer(key, answers[key as keyof typeof answers]) ? 'border-green-500' : 'border-red-500') : 'border-gray-700'} ${isPresenting ? 'p-3' : 'p-4'}`}>
            <p className={`${isPresenting ? 'text-sm' : 'text-base'} font-bold text-white mb-1`}>{label}</p>
            <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-400 mb-2`}>{hint}</p>
            <input
              type="text"
              value={answers[key as keyof typeof answers]}
              onChange={(e) => !showResults && setAnswers(prev => ({ ...prev, [key]: e.target.value }))}
              className={`w-full bg-gray-900/50 border border-gray-600 rounded-lg text-white ${isPresenting ? 'p-2 text-sm' : 'p-3'}`}
              placeholder="?"
            />
            {showResults && (
              <p className={`${isPresenting ? 'text-xs' : 'text-sm'} mt-2 ${checkAnswer(key, answers[key as keyof typeof answers]) ? 'text-green-400' : 'text-red-400'}`}>
                {checkAnswer(key, answers[key as keyof typeof answers]) ? '✓ Correct!' : `✗ Answer: ${correct[key as keyof typeof correct]}`}
              </p>
            )}
          </div>
        ))}
      </div>

      {!showResults && (
        <button onClick={() => setShowResults(true)} className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg mt-6 self-center">
          Check My Answers
        </button>
      )}
    </div>
  )
}

// Lesson 14 Extended Exam Task
const Lesson14ExtendedExamTask: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [showMarkScheme, setShowMarkScheme] = useState(false)

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Extended Exam Practice</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Descriptive Statistics - 6 Mark Question</p>
      </div>

      <div className={`bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl border border-purple-500/30 ${isPresenting ? 'p-4 mb-4' : 'p-6 mb-6'}`}>
        <p className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-white mb-2`}>Question:</p>
        <p className={`${isPresenting ? 'text-sm' : 'text-lg'} text-gray-200`}>
          Evaluate the use of the mean as a measure of central tendency. Compare it to the median and mode. [6 marks]
        </p>
      </div>

      <button 
        onClick={() => setShowMarkScheme(!showMarkScheme)}
        className={`mt-4 bg-amber-600 hover:bg-amber-700 text-white font-bold ${isPresenting ? 'py-2 px-4 text-sm' : 'py-3 px-6'} rounded-lg self-center`}
      >
        {showMarkScheme ? 'Hide' : 'Show'} Mark Scheme
      </button>

      {showMarkScheme && (
        <div className={`mt-4 bg-amber-900/20 rounded-xl border border-amber-500/30 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-lg'} font-bold text-amber-300 mb-3`}>Mark Scheme Points:</h3>
          <div className={`space-y-2 ${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200`}>
            <p><span className="font-bold text-amber-300">Mean +:</span> Most sensitive, uses all data in calculation</p>
            <p><span className="font-bold text-amber-300">Mean -:</span> Can be distorted by extreme scores (outliers)</p>
            <p><span className="font-bold text-amber-300">Median +:</span> Not affected by extreme scores</p>
            <p><span className="font-bold text-amber-300">Median -:</span> Less sensitive, doesn't use all values</p>
            <p><span className="font-bold text-amber-300">Mode +:</span> Easy to calculate, useful for categories</p>
            <p><span className="font-bold text-amber-300">Mode -:</span> Can be unrepresentative; may have multiple modes</p>
          </div>
        </div>
      )}
    </div>
  )
}

// ============= GCSE LESSON 15: GRAPHS & DISPLAY =============

// Graphs Teaching Slide
const GraphsTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [selectedGraph, setSelectedGraph] = useState<string | null>(null)

  const graphTypes = [
    {
      id: 'bar',
      name: 'Bar Chart',
      icon: <BarChart2 size={isPresenting ? 28 : 36} />,
      color: 'blue',
      useFor: 'Comparing discrete categories',
      example: 'Comparing mean scores between experimental conditions (e.g., memory recall with vs without music)',
      tips: [
        'Gaps between bars (discrete data)',
        'Categories on X-axis',
        'Frequency or mean on Y-axis',
        'Clear labels for each category'
      ],
      mistakes: [
        'No gaps between bars (that\'s a histogram!)',
        'Missing axis labels or title',
        'Using for continuous data',
        'Inconsistent bar widths'
      ],
      keyFeature: 'Each bar represents a separate, distinct category'
    },
    {
      id: 'histogram',
      name: 'Histogram',
      icon: <BarChart3 size={isPresenting ? 28 : 36} />,
      color: 'purple',
      useFor: 'Showing distribution of continuous data',
      example: 'Distribution of reaction times in milliseconds (0-100ms, 100-200ms, etc.)',
      tips: [
        'NO gaps between bars (continuous data)',
        'Continuous variable on X-axis',
        'Frequency on Y-axis',
        'Shows shape of distribution'
      ],
      mistakes: [
        'Putting gaps between bars',
        'Using for categorical data',
        'Unequal interval widths',
        'Confusing with bar charts'
      ],
      keyFeature: 'Bars touch because the data is continuous with no breaks'
    },
    {
      id: 'scatter',
      name: 'Scattergram',
      icon: <TrendingUp size={isPresenting ? 28 : 36} />,
      color: 'green',
      useFor: 'Showing correlations between two variables',
      example: 'Relationship between hours of revision and exam score',
      tips: [
        'Each dot = one participant',
        'Can add line of best fit',
        'Shows direction & strength of relationship',
        'Both axes are continuous variables'
      ],
      mistakes: [
        'Connecting the dots with lines',
        'Using for comparing groups',
        'Forgetting to label both axes clearly',
        'Not identifying the correlation type'
      ],
      keyFeature: 'Individual data points show the relationship pattern'
    },
    {
      id: 'table',
      name: 'Data Table',
      icon: <Database size={isPresenting ? 28 : 36} />,
      color: 'amber',
      useFor: 'Organising raw data or summary statistics',
      example: 'Summary table showing mean, median, mode and range for each condition',
      tips: [
        'Clear column and row headings',
        'Include units of measurement',
        'Round to appropriate decimal places',
        'Use a clear, descriptive title'
      ],
      mistakes: [
        'Missing or unclear headings',
        'Inconsistent decimal places',
        'No title explaining what data shows',
        'Cramming too much data in one table'
      ],
      keyFeature: 'Precise numerical data in an organised format'
    }
  ]

  const colorClasses: Record<string, { border: string; bg: string; text: string; bgLight: string }> = {
    blue: { border: 'border-blue-500', bg: 'bg-blue-900/20', text: 'text-blue-300', bgLight: 'bg-blue-500/20' },
    purple: { border: 'border-purple-500', bg: 'bg-purple-900/20', text: 'text-purple-300', bgLight: 'bg-purple-500/20' },
    green: { border: 'border-green-500', bg: 'bg-green-900/20', text: 'text-green-300', bgLight: 'bg-green-500/20' },
    amber: { border: 'border-amber-500', bg: 'bg-amber-900/20', text: 'text-amber-300', bgLight: 'bg-amber-500/20' }
  }

  const selectedGraphData = graphTypes.find(g => g.id === selectedGraph)

  // Simple SVG visual representations for each graph type
  const renderGraphVisual = (type: string, isLarge: boolean = false) => {
    const size = isLarge ? { w: 200, h: 120 } : { w: 80, h: 50 }
    
    switch (type) {
      case 'bar':
        return (
          <svg viewBox="0 0 100 60" className={isLarge ? 'w-48 h-28' : 'w-20 h-12'}>
            <rect x="10" y="35" width="15" height="20" fill="#3b82f6" rx="2" />
            <rect x="30" y="15" width="15" height="40" fill="#3b82f6" rx="2" />
            <rect x="50" y="25" width="15" height="30" fill="#3b82f6" rx="2" />
            <rect x="70" y="10" width="15" height="45" fill="#3b82f6" rx="2" />
            <line x1="5" y1="55" x2="95" y2="55" stroke="#6b7280" strokeWidth="1" />
            <line x1="5" y1="5" x2="5" y2="55" stroke="#6b7280" strokeWidth="1" />
          </svg>
        )
      case 'histogram':
        return (
          <svg viewBox="0 0 100 60" className={isLarge ? 'w-48 h-28' : 'w-20 h-12'}>
            <rect x="10" y="40" width="16" height="15" fill="#a855f7" />
            <rect x="26" y="25" width="16" height="30" fill="#a855f7" />
            <rect x="42" y="10" width="16" height="45" fill="#a855f7" />
            <rect x="58" y="20" width="16" height="35" fill="#a855f7" />
            <rect x="74" y="35" width="16" height="20" fill="#a855f7" />
            <line x1="5" y1="55" x2="95" y2="55" stroke="#6b7280" strokeWidth="1" />
            <line x1="5" y1="5" x2="5" y2="55" stroke="#6b7280" strokeWidth="1" />
          </svg>
        )
      case 'scatter':
        return (
          <svg viewBox="0 0 100 60" className={isLarge ? 'w-48 h-28' : 'w-20 h-12'}>
            <circle cx="15" cy="45" r="3" fill="#22c55e" />
            <circle cx="25" cy="38" r="3" fill="#22c55e" />
            <circle cx="35" cy="35" r="3" fill="#22c55e" />
            <circle cx="45" cy="28" r="3" fill="#22c55e" />
            <circle cx="55" cy="25" r="3" fill="#22c55e" />
            <circle cx="65" cy="18" r="3" fill="#22c55e" />
            <circle cx="75" cy="15" r="3" fill="#22c55e" />
            <circle cx="85" cy="10" r="3" fill="#22c55e" />
            <line x1="10" y1="50" x2="90" y2="8" stroke="#22c55e" strokeWidth="1" strokeDasharray="3,3" opacity="0.5" />
            <line x1="5" y1="55" x2="95" y2="55" stroke="#6b7280" strokeWidth="1" />
            <line x1="5" y1="5" x2="5" y2="55" stroke="#6b7280" strokeWidth="1" />
          </svg>
        )
      case 'table':
        return (
          <svg viewBox="0 0 100 60" className={isLarge ? 'w-48 h-28' : 'w-20 h-12'}>
            <rect x="10" y="5" width="80" height="50" fill="none" stroke="#f59e0b" strokeWidth="1" />
            <line x1="10" y1="18" x2="90" y2="18" stroke="#f59e0b" strokeWidth="1" />
            <line x1="10" y1="31" x2="90" y2="31" stroke="#f59e0b" strokeWidth="0.5" />
            <line x1="10" y1="44" x2="90" y2="44" stroke="#f59e0b" strokeWidth="0.5" />
            <line x1="40" y1="5" x2="40" y2="55" stroke="#f59e0b" strokeWidth="0.5" />
            <line x1="65" y1="5" x2="65" y2="55" stroke="#f59e0b" strokeWidth="0.5" />
            <rect x="12" y="7" width="25" height="9" fill="#f59e0b" opacity="0.3" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-4' : 'p-8'}`}>
      <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white text-center mb-1`}>Types of Graphs & Tables</h2>
      <p className="text-gray-400 text-center mb-4">Click any graph type to learn more</p>

      {selectedGraph && selectedGraphData ? (
        // ZOOMED VIEW - show full details of selected graph
        <div className="flex-1 flex flex-col animate-fadeIn">
          <button 
            onClick={() => setSelectedGraph(null)}
            className="self-start mb-3 text-gray-400 hover:text-white flex items-center gap-2 transition-colors"
          >
            <ChevronLeft size={20} />
            Back to gallery
          </button>
          
          <div className={`flex-1 rounded-2xl border-2 ${colorClasses[selectedGraphData.color].border} ${colorClasses[selectedGraphData.color].bg} p-6 overflow-y-auto`}>
            {/* Header with icon and name */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-4 rounded-xl ${colorClasses[selectedGraphData.color].bgLight}`}>
                <span className={colorClasses[selectedGraphData.color].text}>{selectedGraphData.icon}</span>
              </div>
              <div>
                <h3 className={`${isPresenting ? 'text-2xl' : 'text-3xl'} font-black ${colorClasses[selectedGraphData.color].text}`}>
                  {selectedGraphData.name}
                </h3>
                <p className="text-gray-400 text-sm">{selectedGraphData.keyFeature}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Left column - Visual and When to Use */}
              <div className="space-y-4">
                {/* Large visual representation */}
                <div className="bg-gray-900/50 rounded-xl p-6 flex flex-col items-center">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-3">Visual Example</p>
                  {renderGraphVisual(selectedGraphData.id, true)}
                </div>

                {/* When to use */}
                <div className="bg-gray-900/50 rounded-xl p-4">
                  <h4 className={`font-bold ${colorClasses[selectedGraphData.color].text} mb-2 flex items-center gap-2`}>
                    <Target size={18} />
                    When to Use
                  </h4>
                  <p className="text-gray-200 text-sm">{selectedGraphData.useFor}</p>
                </div>

                {/* Example */}
                <div className="bg-gray-900/50 rounded-xl p-4">
                  <h4 className={`font-bold ${colorClasses[selectedGraphData.color].text} mb-2 flex items-center gap-2`}>
                    <Lightbulb size={18} />
                    Example
                  </h4>
                  <p className="text-gray-200 text-sm italic">"{selectedGraphData.example}"</p>
                </div>
              </div>

              {/* Right column - Tips and Mistakes */}
              <div className="space-y-4">
                {/* Key tips */}
                <div className="bg-gray-900/50 rounded-xl p-4">
                  <h4 className="font-bold text-green-400 mb-3 flex items-center gap-2">
                    <CheckCircle size={18} />
                    Key Features & Tips
                  </h4>
                  <ul className="space-y-2">
                    {selectedGraphData.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-200">
                        <span className="text-green-400 mt-0.5">✓</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Common mistakes */}
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4">
                  <h4 className="font-bold text-red-400 mb-3 flex items-center gap-2">
                    <AlertTriangle size={18} />
                    Common Mistakes to Avoid
                  </h4>
                  <ul className="space-y-2">
                    {selectedGraphData.mistakes.map((mistake, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-red-400 mt-0.5">✗</span>
                        {mistake}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // GALLERY VIEW - show all graphs as clickable cards
        <div className={`grid grid-cols-2 ${isPresenting ? 'gap-3' : 'gap-4'} max-w-4xl mx-auto flex-1`}>
          {graphTypes.map((g) => (
            <div
              key={g.id}
              onClick={() => setSelectedGraph(g.id)}
              className={`rounded-xl border-2 ${colorClasses[g.color].border}/50 ${colorClasses[g.color].bg} ${isPresenting ? 'p-4' : 'p-6'} cursor-pointer hover:scale-[1.02] hover:border-opacity-100 transition-all duration-200 flex flex-col`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className={colorClasses[g.color].text}>{g.icon}</span>
                <h3 className={`${isPresenting ? 'text-lg' : 'text-xl'} font-bold ${colorClasses[g.color].text}`}>{g.name}</h3>
              </div>
              
              {/* Simple visual preview */}
              <div className="flex justify-center my-3">
                {renderGraphVisual(g.id)}
              </div>
              
              <p className={`text-gray-400 ${isPresenting ? 'text-xs' : 'text-sm'} text-center mt-auto`}>{g.useFor}</p>
              
              <p className={`${colorClasses[g.color].text} text-xs text-center mt-2 opacity-70`}>
                Click to learn more →
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// Distribution Teaching Slide
const DistributionTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [selectedDistribution, setSelectedDistribution] = useState<'normal' | 'positive' | 'negative'>('normal')

  const distributions = {
    normal: {
      title: 'Normal Distribution',
      color: 'emerald',
      borderColor: 'border-emerald-500/40',
      bgColor: 'bg-emerald-900/20',
      textColor: 'text-emerald-300',
      description: 'Bell-shaped curve, symmetrical around the mean',
      features: ['Mean = Median = Mode', 'Most scores cluster near the middle', '68% of scores within 1 SD of mean', 'Symmetrical on both sides'],
      example: 'IQ scores in the population (mean = 100)',
      visualBars: [5, 10, 20, 35, 50, 65, 80, 90, 95, 90, 80, 65, 50, 35, 20, 10, 5]
    },
    positive: {
      title: 'Positive Skew',
      color: 'blue',
      borderColor: 'border-blue-500/40',
      bgColor: 'bg-blue-900/20',
      textColor: 'text-blue-300',
      description: 'Tail extends to the right (towards high values)',
      features: ['Mode < Median < Mean', 'Most scores at the low end', 'Few extreme high values', 'Mean pulled towards the tail'],
      example: 'Income distribution – most earn less, few earn millions',
      visualBars: [95, 85, 70, 55, 40, 30, 22, 16, 12, 9, 7, 5, 4, 3, 2, 2, 1]
    },
    negative: {
      title: 'Negative Skew',
      color: 'purple',
      borderColor: 'border-violet-500/40',
      bgColor: 'bg-violet-900/20',
      textColor: 'text-violet-300',
      description: 'Tail extends to the left (towards low values)',
      features: ['Mean < Median < Mode', 'Most scores at the high end', 'Few extreme low values', 'Mean pulled towards the tail'],
      example: 'Age at death in developed countries – most die old',
      visualBars: [1, 2, 2, 3, 4, 5, 7, 9, 12, 16, 22, 30, 40, 55, 70, 85, 95]
    }
  }

  const current = distributions[selectedDistribution]

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-3xl' : 'text-5xl'} font-black text-white mb-2`}>Distribution Types</h2>
        <p className={`${isPresenting ? 'text-sm' : 'text-lg'} text-gray-400`}>How scores are spread across a dataset</p>
      </div>

      {/* Toggle Buttons */}
      <div className={`flex justify-center ${isPresenting ? 'gap-2 mb-4' : 'gap-3 mb-6'}`}>
        {(['normal', 'positive', 'negative'] as const).map((type) => {
          const dist = distributions[type]
          const isActive = selectedDistribution === type
          return (
            <button
              key={type}
              onClick={() => setSelectedDistribution(type)}
              className={`${isPresenting ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-base'} font-bold rounded-xl transition-all duration-300 ${
                isActive
                  ? `${dist.bgColor} ${dist.borderColor} border-2 ${dist.textColor} shadow-lg scale-105`
                  : 'bg-gray-800/50 border-2 border-gray-700 text-gray-400 hover:border-gray-500'
              }`}
            >
              {dist.title}
            </button>
          )
        })}
      </div>

      {/* Main Content */}
      <div className={`flex-1 grid grid-cols-2 ${isPresenting ? 'gap-4' : 'gap-6'}`}>
        {/* Visual Representation */}
        <div className={`rounded-xl border-2 ${current.borderColor} ${current.bgColor} ${isPresenting ? 'p-4' : 'p-6'} flex flex-col`}>
          <h3 className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold ${current.textColor} mb-4`}>Visual Shape</h3>
          
          {/* Bar Chart Visualization */}
          <div className="flex-1 flex items-end justify-center gap-1">
            {current.visualBars.map((height, idx) => (
              <div
                key={idx}
                className={`${current.bgColor.replace('/20', '/60')} rounded-t transition-all duration-500`}
                style={{ 
                  height: `${height}%`, 
                  width: isPresenting ? '12px' : '18px',
                  minHeight: '4px'
                }}
              />
            ))}
          </div>
          
          {/* Mean/Median/Mode Indicators */}
          <div className={`mt-4 flex justify-around ${isPresenting ? 'text-xs' : 'text-sm'}`}>
            {selectedDistribution === 'normal' ? (
              <span className={`${current.textColor} font-bold`}>Mean = Median = Mode (center)</span>
            ) : selectedDistribution === 'positive' ? (
              <>
                <span className="text-green-400">Mode</span>
                <span className="text-yellow-400">← Median</span>
                <span className="text-red-400">← Mean</span>
              </>
            ) : (
              <>
                <span className="text-red-400">Mean →</span>
                <span className="text-yellow-400">Median →</span>
                <span className="text-green-400">Mode</span>
              </>
            )}
          </div>
        </div>

        {/* Description and Features */}
        <div className={`rounded-xl border-2 ${current.borderColor} ${current.bgColor} ${isPresenting ? 'p-4' : 'p-6'} flex flex-col`}>
          <h3 className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold ${current.textColor} mb-2`}>{current.title}</h3>
          <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-300 mb-4`}>{current.description}</p>
          
          <div className={`bg-gray-900/50 rounded-lg ${isPresenting ? 'p-3' : 'p-4'} mb-4`}>
            <h4 className={`${isPresenting ? 'text-sm' : 'text-base'} font-bold text-white mb-2`}>Key Features:</h4>
            <ul className={`space-y-1 ${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200`}>
              {current.features.map((feature, idx) => (
                <li key={idx}>• {feature}</li>
              ))}
            </ul>
          </div>

          <div className={`mt-auto bg-gray-900/50 rounded-lg ${isPresenting ? 'p-3' : 'p-4'} border-l-4 ${current.borderColor.replace('/40', '')}`}>
            <p className={`${isPresenting ? 'text-xs' : 'text-sm'} ${current.textColor} font-semibold`}>Real-World Example:</p>
            <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200`}>{current.example}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Graphs AFL
const GraphsAFL: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const questions = [
    {
      question: "Which graph would you use to show correlation between two variables?",
      options: ["Bar chart", "Histogram", "Scatter diagram", "Pie chart"],
      correct: 2,
      explanation: "Scatter diagrams show the relationship between two co-variables."
    },
    {
      question: "In a normal distribution, the mean, median and mode are...",
      options: ["All different", "All the same", "Only two are the same", "Not comparable"],
      correct: 1,
      explanation: "In a perfectly normal distribution, all three measures of central tendency are equal."
    },
    {
      question: "Bar charts differ from histograms because bar charts...",
      options: ["Are always taller", "Have gaps between bars", "Show continuous data", "Use lines instead of bars"],
      correct: 1,
      explanation: "Bar charts have gaps because they show discrete/categorical data, while histograms show continuous data."
    }
  ]

  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)

  const handleSelect = (idx: number) => {
    if (showFeedback) return
    setSelected(idx)
    setShowFeedback(true)
    if (idx === questions[currentQ].correct) setScore(s => s + 1)
  }

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(q => q + 1)
      setSelected(null)
      setShowFeedback(false)
    }
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Check Your Understanding</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Graphs - Question {currentQ + 1} of {questions.length}</p>
      </div>

      <div className={`flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full`}>
        <div className={`bg-gray-800/50 rounded-xl border border-gray-700 ${isPresenting ? 'p-6' : 'p-8'} mb-6`}>
          <p className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-white mb-6`}>{questions[currentQ].question}</p>
          
          <div className="grid grid-cols-2 gap-3">
            {questions[currentQ].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`p-4 rounded-lg text-center transition-all ${isPresenting ? 'text-sm' : 'text-base'} ${
                  showFeedback
                    ? idx === questions[currentQ].correct
                      ? 'bg-green-600/30 border-2 border-green-500 text-green-200'
                      : idx === selected
                      ? 'bg-red-600/30 border-2 border-red-500 text-red-200'
                      : 'bg-gray-700/30 border border-gray-600 text-gray-400'
                    : selected === idx
                    ? 'bg-blue-600/30 border-2 border-blue-500 text-white'
                    : 'bg-gray-700/50 border border-gray-600 text-gray-200 hover:bg-gray-700'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {showFeedback && (
            <div className={`mt-6 p-4 rounded-lg ${selected === questions[currentQ].correct ? 'bg-green-900/30 border border-green-600' : 'bg-amber-900/30 border border-amber-600'}`}>
              <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200`}>{questions[currentQ].explanation}</p>
            </div>
          )}
        </div>

        {showFeedback && currentQ < questions.length - 1 && (
          <button onClick={nextQuestion} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg self-center">
            Next Question →
          </button>
        )}

        {showFeedback && currentQ === questions.length - 1 && (
          <div className="text-center">
            <p className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-white`}>Score: {score}/{questions.length}</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Graph Selection Task
const GraphSelectionTask: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const scenarios = [
    { scenario: "Comparing mean scores between two experimental conditions", graph: "bar" },
    { scenario: "Showing the relationship between age and memory score", graph: "scatter" },
    { scenario: "Displaying the distribution of reaction times", graph: "histogram" },
    { scenario: "Comparing frequency of different personality types", graph: "bar" },
    { scenario: "Showing if hours of sleep correlates with test performance", graph: "scatter" },
  ]

  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const score = scenarios.filter((s, i) => answers[i] === s.graph).length

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Choose the Right Graph</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Which graph would be most appropriate?</p>
      </div>

      <div className="space-y-3 flex-1">
        {scenarios.map((s, idx) => (
          <div key={idx} className={`bg-gray-800/50 rounded-xl border ${showResults ? (answers[idx] === s.graph ? 'border-green-500' : 'border-red-500') : 'border-gray-700'} ${isPresenting ? 'p-3' : 'p-4'}`}>
            <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200 mb-3`}>{s.scenario}</p>
            
            <div className="flex gap-2">
              {['bar', 'histogram', 'scatter'].map(graph => (
                <button
                  key={graph}
                  onClick={() => !showResults && setAnswers(prev => ({ ...prev, [idx]: graph }))}
                  className={`px-3 py-1 rounded-lg font-bold capitalize ${isPresenting ? 'text-xs' : 'text-sm'} ${
                    showResults
                      ? graph === s.graph
                        ? 'bg-green-600 text-white'
                        : answers[idx] === graph
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-700 text-gray-400'
                      : answers[idx] === graph
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {graph === 'bar' ? 'Bar Chart' : graph === 'histogram' ? 'Histogram' : 'Scatter'}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {!showResults && Object.keys(answers).length === scenarios.length && (
        <button onClick={() => setShowResults(true)} className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg mt-4 self-center">
          Check My Answers
        </button>
      )}

      {showResults && (
        <div className={`text-center mt-4 ${isPresenting ? 'p-4' : 'p-6'} bg-gray-800/50 rounded-xl`}>
          <p className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-white`}>Score: {score}/{scenarios.length}</p>
        </div>
      )}
    </div>
  )
}

// ============= GCSE LESSON 15: COMPUTATION & ARITHMETIC =============

// Maths Teaching Slide
const MathsTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-8'}>
        <h2 className={`${isPresenting ? 'text-3xl' : 'text-5xl'} font-black text-white mb-2`}>Mathematical Skills</h2>
        <p className={`${isPresenting ? 'text-sm' : 'text-lg'} text-gray-400`}>Essential calculations for psychology</p>
      </div>

      <div className={`grid grid-cols-2 ${isPresenting ? 'gap-4' : 'gap-6'}`}>
        <div className={`rounded-xl border-2 border-blue-500/40 bg-blue-900/20 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-blue-300 mb-4`}>Percentages</h3>
          <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200 mb-2`}>Part ÷ Whole × 100</p>
          <div className={`bg-gray-900/50 rounded-lg ${isPresenting ? 'p-2' : 'p-3'} font-mono`}>
            <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-blue-200`}>18 out of 30 participants agreed</p>
            <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-blue-200`}>18 ÷ 30 × 100 = <span className="font-bold">60%</span></p>
          </div>
        </div>

        <div className={`rounded-xl border-2 border-purple-500/40 bg-purple-900/20 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-purple-300 mb-4`}>Fractions & Decimals</h3>
          <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200 mb-2`}>Converting between forms</p>
          <div className={`bg-gray-900/50 rounded-lg ${isPresenting ? 'p-2' : 'p-3'} font-mono`}>
            <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-purple-200`}>3/4 = 0.75 = 75%</p>
            <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-purple-200`}>0.6 = 6/10 = 3/5</p>
          </div>
        </div>
      </div>

      <div className={`grid grid-cols-2 ${isPresenting ? 'gap-4 mt-4' : 'gap-6 mt-6'}`}>
        <div className={`rounded-xl border-2 border-green-500/40 bg-green-900/20 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-green-300 mb-4`}>Ratios</h3>
          <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200 mb-2`}>Comparing quantities</p>
          <div className={`bg-gray-900/50 rounded-lg ${isPresenting ? 'p-2' : 'p-3'} font-mono`}>
            <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-green-200`}>12 males : 18 females</p>
            <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-green-200`}>Simplify: <span className="font-bold">2:3</span></p>
          </div>
        </div>

        <div className={`rounded-xl border-2 border-amber-500/40 bg-amber-900/20 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-amber-300 mb-4`}>Significant Figures</h3>
          <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200 mb-2`}>Appropriate precision</p>
          <div className={`bg-gray-900/50 rounded-lg ${isPresenting ? 'p-2' : 'p-3'} font-mono`}>
            <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-amber-200`}>Calculator: 67.428571...</p>
            <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-amber-200`}>3 s.f.: <span className="font-bold">67.4</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Maths AFL
const MathsAFL: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const questions = [
    {
      question: "15 out of 25 participants showed improvement. What percentage is this?",
      options: ["40%", "50%", "60%", "75%"],
      correct: 2,
      explanation: "15 ÷ 25 × 100 = 60%"
    },
    {
      question: "Express 0.35 as a fraction in simplest form:",
      options: ["35/100", "7/20", "1/3", "35/10"],
      correct: 1,
      explanation: "0.35 = 35/100 = 7/20 (divide both by 5)"
    },
    {
      question: "In a study, there are 8 males and 12 females. What is this ratio in simplest form?",
      options: ["8:12", "4:6", "2:3", "1:2"],
      correct: 2,
      explanation: "8:12 → divide both by 4 → 2:3"
    },
    {
      question: "Round 45.6789 to 2 significant figures:",
      options: ["45.68", "46", "45.7", "45"],
      correct: 1,
      explanation: "First 2 significant figures are 4 and 5. The next digit (6) rounds 5 up to 6, so 46"
    }
  ]

  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)

  const handleSelect = (idx: number) => {
    if (showFeedback) return
    setSelected(idx)
    setShowFeedback(true)
    if (idx === questions[currentQ].correct) setScore(s => s + 1)
  }

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(q => q + 1)
      setSelected(null)
      setShowFeedback(false)
    }
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Check Your Understanding</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Maths Skills - Question {currentQ + 1} of {questions.length}</p>
      </div>

      <div className={`flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full`}>
        <div className={`bg-gray-800/50 rounded-xl border border-gray-700 ${isPresenting ? 'p-6' : 'p-8'} mb-6`}>
          <p className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold text-white mb-6`}>{questions[currentQ].question}</p>
          
          <div className="grid grid-cols-2 gap-3">
            {questions[currentQ].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`p-4 rounded-lg text-center transition-all ${isPresenting ? 'text-sm' : 'text-base'} ${
                  showFeedback
                    ? idx === questions[currentQ].correct
                      ? 'bg-green-600/30 border-2 border-green-500 text-green-200'
                      : idx === selected
                      ? 'bg-red-600/30 border-2 border-red-500 text-red-200'
                      : 'bg-gray-700/30 border border-gray-600 text-gray-400'
                    : 'bg-gray-700/50 border border-gray-600 text-white hover:bg-gray-600/50 hover:border-gray-500'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {showFeedback && (
          <div className={`bg-blue-900/30 rounded-xl border border-blue-500/30 ${isPresenting ? 'p-4' : 'p-6'} mb-4`}>
            <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-blue-200`}>
              <span className="font-bold">Explanation:</span> {questions[currentQ].explanation}
            </p>
          </div>
        )}

        {showFeedback && currentQ < questions.length - 1 && (
          <button onClick={nextQuestion} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg self-center">
            Next Question
          </button>
        )}

        {showFeedback && currentQ === questions.length - 1 && (
          <div className={`text-center ${isPresenting ? 'p-4' : 'p-6'} bg-gray-800/50 rounded-xl`}>
            <p className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-white`}>Quiz Complete! Score: {score}/{questions.length}</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Maths Calculation Task
const MathsCalculationTask: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [answers, setAnswers] = useState<{[key: number]: string}>({})
  const [showResults, setShowResults] = useState(false)

  const problems = [
    {
      question: "A study has 45 participants. 27 show improvement. What percentage improved?",
      answer: "60%",
      hint: "Divide 27 by 45, then multiply by 100"
    },
    {
      question: "Convert 7/8 to a decimal:",
      answer: "0.875",
      hint: "Divide 7 by 8"
    },
    {
      question: "In a classroom study, there were 15 boys and 10 girls. Express this as a simplified ratio:",
      answer: "3:2",
      hint: "Find the highest common factor (5)"
    },
    {
      question: "The mean score was 78.4567. Round to 2 decimal places:",
      answer: "78.46",
      hint: "Look at the third decimal place to round"
    },
    {
      question: "If 35% of 80 participants were female, how many females were there?",
      answer: "28",
      hint: "0.35 × 80 = ?"
    }
  ]

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Calculation Practice</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Work through these mathematical problems</p>
      </div>

      <div className="space-y-4">
        {problems.map((problem, idx) => (
          <div key={idx} className={`bg-gray-800/50 rounded-xl border border-gray-700 ${isPresenting ? 'p-4' : 'p-5'}`}>
            <p className={`${isPresenting ? 'text-sm' : 'text-base'} font-bold text-white mb-2`}>{idx + 1}. {problem.question}</p>
            <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-400 mb-2`}>Hint: {problem.hint}</p>
            <input
              type="text"
              placeholder="Your answer..."
              value={answers[idx] || ''}
              onChange={(e) => setAnswers({...answers, [idx]: e.target.value})}
              className={`w-full bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 ${isPresenting ? 'p-2 text-sm' : 'p-3'}`}
            />
            {showResults && (
              <p className={`mt-2 ${isPresenting ? 'text-sm' : 'text-base'} ${
                answers[idx]?.toLowerCase().trim() === problem.answer.toLowerCase() 
                  ? 'text-green-400' 
                  : 'text-amber-400'
              }`}>
                {answers[idx]?.toLowerCase().trim() === problem.answer.toLowerCase() 
                  ? '✓ Correct!' 
                  : `Answer: ${problem.answer}`}
              </p>
            )}
          </div>
        ))}
      </div>

      {Object.keys(answers).length >= problems.length && !showResults && (
        <button 
          onClick={() => setShowResults(true)} 
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg mt-4 self-center"
        >
          Check My Answers
        </button>
      )}

      {showResults && (
        <div className={`text-center mt-4 ${isPresenting ? 'p-4' : 'p-6'} bg-gray-800/50 rounded-xl`}>
          <p className={`${isPresenting ? 'text-xl' : 'text-2xl'} font-bold text-white`}>
            Score: {problems.filter((p, idx) => answers[idx]?.toLowerCase().trim() === p.answer.toLowerCase()).length}/{problems.length}
          </p>
        </div>
      )}
    </div>
  )
}

// Lesson 15 Extended Exam Task
const Lesson15ExtendedExamTask: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [showMarkScheme, setShowMarkScheme] = useState(false)

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Extended Exam Practice</h2>
        <p className={`text-gray-400 ${isPresenting ? 'text-sm' : ''}`}>Mathematical Skills - 6 Mark Question</p>
      </div>

      <div className={`bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl border border-purple-500/30 ${isPresenting ? 'p-4 mb-4' : 'p-6 mb-6'}`}>
        <p className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-white mb-2`}>Question:</p>
        <p className={`${isPresenting ? 'text-sm' : 'text-lg'} text-gray-200`}>
          In a psychology experiment, 42 out of 70 participants showed a change in behaviour after watching a violent video. Express this as: (a) a percentage, (b) a decimal, and (c) a simplified fraction. Show your working. [6 marks]
        </p>
      </div>

      <button 
        onClick={() => setShowMarkScheme(!showMarkScheme)}
        className={`mt-4 bg-amber-600 hover:bg-amber-700 text-white font-bold ${isPresenting ? 'py-2 px-4 text-sm' : 'py-3 px-6'} rounded-lg self-center`}
      >
        {showMarkScheme ? 'Hide' : 'Show'} Mark Scheme
      </button>

      {showMarkScheme && (
        <div className={`mt-4 bg-amber-900/20 rounded-xl border border-amber-500/30 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-lg'} font-bold text-amber-300 mb-3`}>Mark Scheme Points:</h3>
          <div className={`space-y-2 ${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200`}>
            <p><span className="font-bold text-amber-300">(a) Percentage:</span> 42 ÷ 70 × 100 = 60%</p>
            <p><span className="font-bold text-amber-300">(b) Decimal:</span> 42 ÷ 70 = 0.6</p>
            <p><span className="font-bold text-amber-300">(c) Fraction:</span> 42/70 → both divide by 14 → 3/5</p>
            <p><span className="font-bold text-amber-300">Working marks:</span> Method shown for each calculation</p>
            <p><span className="font-bold text-amber-300">Accuracy marks:</span> Correct answers with correct notation</p>
            <p><span className="font-bold text-amber-300">Simplification:</span> Fraction must be in lowest terms (3/5 not 6/10)</p>
          </div>
        </div>
      )}
    </div>
  )
}

// ============= AS LEVEL LESSON 1: UNIFIED VISUAL DESIGN =============

// Scientific Approach: Unified Teacher Input Slide
const ScientificApproachTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    { id: 0, title: 'Observation', icon: <Eye size={isPresenting ? 20 : 28} />, color: 'blue', bgColor: 'bg-blue-900/30', borderColor: 'border-blue-500/50', textColor: 'text-blue-300', content: 'Notice something interesting in the world that needs explaining' },
    { id: 1, title: 'Hypothesis', icon: <Lightbulb size={isPresenting ? 20 : 28} />, color: 'yellow', bgColor: 'bg-yellow-900/30', borderColor: 'border-yellow-500/50', textColor: 'text-yellow-300', content: 'Form a testable prediction based on theory' },
    { id: 2, title: 'Design Study', icon: <ClipboardList size={isPresenting ? 20 : 28} />, color: 'purple', bgColor: 'bg-purple-900/30', borderColor: 'border-purple-500/50', textColor: 'text-purple-300', content: 'Plan methodology, controls, and procedures' },
    { id: 3, title: 'Collect Data', icon: <Database size={isPresenting ? 20 : 28} />, color: 'green', bgColor: 'bg-green-900/30', borderColor: 'border-green-500/50', textColor: 'text-green-300', content: 'Run the experiment, gather measurements' },
    { id: 4, title: 'Analyse', icon: <BarChart size={isPresenting ? 20 : 28} />, color: 'orange', bgColor: 'bg-orange-900/30', borderColor: 'border-orange-500/50', textColor: 'text-orange-300', content: 'Use statistics to interpret the results' },
    { id: 5, title: 'Conclusion', icon: <CheckCircle size={isPresenting ? 20 : 28} />, color: 'emerald', bgColor: 'bg-emerald-900/30', borderColor: 'border-emerald-500/50', textColor: 'text-emerald-300', content: 'Support or reject the hypothesis' },
    { id: 6, title: 'Replication', icon: <RefreshCw size={isPresenting ? 20 : 28} />, color: 'pink', bgColor: 'bg-pink-900/30', borderColor: 'border-pink-500/50', textColor: 'text-pink-300', content: 'Others repeat to verify findings' }
  ]

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleReset = () => {
    setCurrentStep(0)
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-6'}>
        <h2 className={`${isPresenting ? 'text-3xl' : 'text-5xl'} font-black text-white mb-2`}>The Scientific Method</h2>
        <p className={`${isPresenting ? 'text-sm' : 'text-lg'} text-gray-400`}>A systematic approach to knowledge through empirical investigation</p>
      </div>

      {/* Step Flow Visualization */}
      <div className={`flex-1 flex flex-col ${isPresenting ? 'gap-3' : 'gap-4'}`}>
        {/* Progress Bar */}
        <div className="flex items-center justify-center gap-1 mb-2">
          {steps.map((step, idx) => (
            <div key={step.id} className="flex items-center">
              <div className={`${isPresenting ? 'w-6 h-6 text-xs' : 'w-8 h-8 text-sm'} rounded-full flex items-center justify-center font-bold transition-all duration-500 ${
                idx <= currentStep 
                  ? `${step.bgColor} ${step.borderColor} border-2 ${step.textColor}` 
                  : 'bg-gray-800 border-2 border-gray-700 text-gray-500'
              }`}>
                {idx + 1}
              </div>
              {idx < steps.length - 1 && (
                <div className={`${isPresenting ? 'w-6' : 'w-10'} h-1 ${idx < currentStep ? 'bg-gradient-to-r from-blue-500 to-emerald-500' : 'bg-gray-700'} transition-all duration-500`} />
              )}
            </div>
          ))}
        </div>

        {/* Steps Display */}
        <div className={`grid grid-cols-7 ${isPresenting ? 'gap-2' : 'gap-3'} flex-1`}>
          {steps.map((step, idx) => {
            const isActive = idx === currentStep
            const isReached = idx <= currentStep
            
            return (
              <div
                key={step.id}
                onClick={() => setCurrentStep(idx)}
                className={`rounded-xl border-2 ${isPresenting ? 'p-2' : 'p-3'} flex flex-col items-center text-center transition-all duration-500 cursor-pointer ${
                  isActive 
                    ? `${step.bgColor} ${step.borderColor} scale-105 shadow-lg shadow-${step.color}-500/20` 
                    : isReached 
                      ? `${step.bgColor} ${step.borderColor} opacity-80`
                      : 'bg-gray-900/30 border-gray-700/50 opacity-40'
                }`}
              >
                <div className={`${isPresenting ? 'mb-1' : 'mb-2'} ${isReached ? step.textColor : 'text-gray-500'} transition-colors duration-500`}>
                  {step.icon}
                </div>
                <h4 className={`${isPresenting ? 'text-xs' : 'text-sm'} font-bold ${isReached ? step.textColor : 'text-gray-500'} mb-1 transition-colors duration-500`}>
                  {step.title}
                </h4>
                <p className={`${isPresenting ? 'text-[10px]' : 'text-xs'} ${isReached ? 'text-gray-300' : 'text-gray-600'} leading-tight transition-colors duration-500`}>
                  {step.content}
                </p>
              </div>
            )
          })}
        </div>

        {/* Current Step Detail */}
        <div className={`rounded-xl border-2 ${steps[currentStep].borderColor} ${steps[currentStep].bgColor} ${isPresenting ? 'p-4' : 'p-6'}`}>
          <div className="flex items-center gap-3 mb-3">
            <div className={`${steps[currentStep].textColor}`}>{steps[currentStep].icon}</div>
            <h3 className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold ${steps[currentStep].textColor}`}>
              Step {currentStep + 1}: {steps[currentStep].title}
            </h3>
          </div>
          <p className={`${isPresenting ? 'text-sm' : 'text-base'} text-gray-200 mb-4`}>{steps[currentStep].content}</p>
          
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className={`${isPresenting ? 'px-3 py-1 text-sm' : 'px-4 py-2'} rounded-lg font-bold transition-all ${
                currentStep === 0 
                  ? 'bg-gray-800 text-gray-600 cursor-not-allowed' 
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              ← Previous
            </button>
            
            <button
              onClick={handleReset}
              className={`${isPresenting ? 'px-3 py-1 text-sm' : 'px-4 py-2'} rounded-lg font-bold bg-gray-700 text-white hover:bg-gray-600 transition-all`}
            >
              Reset
            </button>
            
            <button
              onClick={handleNext}
              disabled={currentStep === steps.length - 1}
              className={`${isPresenting ? 'px-3 py-1 text-sm' : 'px-4 py-2'} rounded-lg font-bold transition-all ${
                currentStep === steps.length - 1 
                  ? 'bg-emerald-800 text-emerald-300 cursor-not-allowed' 
                  : `${steps[currentStep].bgColor} ${steps[currentStep].textColor} hover:opacity-80`
              }`}
            >
              {currentStep === steps.length - 1 ? '✓ Complete' : 'Next →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Scientific Features Interactive - 3 Core Features Only
// Falsifiability Courtroom Simulation - Interactive Learning Game
const ScientificFeaturesInteractive: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [activeTab, setActiveTab] = useState<'court' | 'create'>('court')
  const [showNotes, setShowNotes] = useState(false)
  const [courtVotes, setCourtVotes] = useState<Record<number, 'falsifiable' | 'unfalsifiable' | null>>({})
  const [courtRevealed, setCourtRevealed] = useState<Record<number, boolean>>({})
  const [userClaim, setUserClaim] = useState('')
  const [studentClaims, setStudentClaims] = useState<Array<{ text: string; votes: { falsifiable: number; unfalsifiable: number }; userVote?: 'falsifiable' | 'unfalsifiable' }>>([])

  const courtClaims = [
    {
      id: 1,
      claim: 'High caffeine intake impairs sleep quality',
      falsifiable: true,
      disproof: 'Test by giving participants caffeine/placebo, measure sleep quality (EEG, duration) - if no difference = disproved'
    },
    {
      id: 2,
      claim: 'Some people are naturally lucky',
      falsifiable: false,
      disproof: '"Luck" is undefined. What would disprove it? Any bad outcome? Too vague to test scientifically.'
    },
    {
      id: 3,
      claim: 'Cognitive therapy reduces anxiety in adults with social phobia',
      falsifiable: true,
      disproof: 'Administer therapy, measure anxiety pre/post using standardised scales - if anxiety unchanged/increases = disproved'
    },
    {
      id: 4,
      claim: 'The universe is connected by cosmic energy that science cannot measure',
      falsifiable: false,
      disproof: 'If it "cannot" be measured, there is no way to test it. Unfalsifiable by definition.'
    },
    {
      id: 5,
      claim: 'Sleep deprivation reduces working memory capacity',
      falsifiable: true,
      disproof: 'Deprive participants of sleep, test working memory (digit span, N-back task) - results can disprove the claim'
    }
  ]

  const handleAddClaim = () => {
    if (userClaim.trim()) {
      setStudentClaims([...studentClaims, { text: userClaim, votes: { falsifiable: 0, unfalsifiable: 0 } }])
      setUserClaim('')
    }
  }

  const handleVoteOnClaim = (index: number, vote: 'falsifiable' | 'unfalsifiable') => {
    setStudentClaims(studentClaims.map((c, i) => 
      i === index 
        ? {
            ...c,
            votes: {
              ...c.votes,
              [vote]: c.votes[vote] + (c.userVote === vote ? 0 : 1)
            },
            userVote: c.userVote === vote ? undefined : vote
          }
        : c
    ))
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-8'}`}>
      {/* Header with Notes Toggle */}
      <div className={`flex items-center justify-between mb-4 ${isPresenting ? 'gap-2' : 'gap-4'}`}>
        <div>
          <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white`}>Falsifiability Courtroom</h2>
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-400`}>Judge scientific claims & challenge peers</p>
        </div>
        <button
          onClick={() => setShowNotes(!showNotes)}
          className={`px-4 py-2 rounded-lg font-bold transition-all whitespace-nowrap ${
            showNotes
              ? 'bg-rose-600 hover:bg-rose-500 text-white'
              : 'bg-gray-800 hover:bg-gray-700 text-gray-200'
          } ${isPresenting ? 'text-xs px-3 py-1' : ''}`}
        >
          {showNotes ? 'Hide' : 'Show'} Notes
        </button>
      </div>

      {/* Condensed Notes Panel */}
      {showNotes && (
        <div className={`rounded-xl border-2 border-rose-500/40 bg-rose-900/20 mb-4 animate-fadeIn ${isPresenting ? 'p-3' : 'p-5'}`}>
          <h3 className={`${isPresenting ? 'text-sm' : 'text-lg'} font-bold text-rose-300 mb-3`}>Key Concepts</h3>
          <div className={`grid grid-cols-3 gap-3 ${isPresenting ? 'text-xs' : 'text-sm'}`}>
            <div className="bg-gray-900/50 rounded-lg p-3 border-l-4 border-rose-500">
              <p className="font-semibold text-rose-300 mb-2">📋 Definition</p>
              <p className="text-gray-200">A scientific theory must be capable of being proven false. We should attempt to disprove theories—if we cannot, they gain credibility.</p>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-3 border-l-4 border-blue-500">
              <p className="font-semibold text-blue-300 mb-2">💡 Example</p>
              <p className="text-gray-200">"High caffeine impairs sleep" is falsifiable (can be tested). "Some people have psychic powers" is not (unfalsifiable by definition).</p>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-3 border-l-4 border-emerald-500">
              <p className="font-semibold text-emerald-300 mb-2">⭐ Why It Matters</p>
              <p className="text-gray-200">Distinguishes science from pseudoscience. Theories that cannot be tested are not scientifically useful.</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab Navigation */}
      <div className={`flex gap-2 mb-4 ${isPresenting ? 'gap-1' : ''}`}>
        <button
          onClick={() => setActiveTab('court')}
          className={`px-4 py-2 rounded-lg font-bold transition-all ${
            activeTab === 'court'
              ? 'bg-rose-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          } ${isPresenting ? 'text-xs px-3 py-1' : ''}`}
        >
          🏛️ Judge Claims
        </button>
        <button
          onClick={() => setActiveTab('create')}
          className={`px-4 py-2 rounded-lg font-bold transition-all ${
            activeTab === 'create'
              ? 'bg-rose-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          } ${isPresenting ? 'text-xs px-3 py-1' : ''}`}
        >
          🎯 Create & Challenge
        </button>
      </div>

      {/* PART A: COURT GAME */}
      {activeTab === 'court' && (
        <div className={`flex-grow overflow-y-auto custom-scrollbar space-y-3 ${isPresenting ? 'mb-2' : 'mb-4'}`}>
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-400 mb-3`}>Can each claim be tested and potentially proven false? Judge them!</p>
          
          {courtClaims.map((item) => (
            <div
              key={item.id}
              className={`rounded-xl border-2 transition-all ${
                courtRevealed[item.id]
                  ? 'border-rose-500 bg-rose-900/30'
                  : 'border-gray-700 bg-gray-900/50 hover:border-rose-500/50'
              } ${isPresenting ? 'p-3' : 'p-4'}`}
            >
              {/* Claim Header */}
              <div className={`flex items-start justify-between gap-3 ${isPresenting ? 'mb-2' : 'mb-3'}`}>
                <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200 flex-grow font-semibold`}>{item.claim}</p>
                <button
                  onClick={() => setCourtRevealed(prev => ({ ...prev, [item.id]: !prev[item.id] }))}
                  className={`text-xs px-2 py-1 rounded font-bold whitespace-nowrap ${
                    courtRevealed[item.id]
                      ? 'bg-gray-700 text-gray-300'
                      : 'bg-gray-800 hover:bg-gray-700 text-gray-400'
                  }`}
                >
                  {courtRevealed[item.id] ? 'Hide' : 'Explain'}
                </button>
              </div>

              {/* Voting Buttons */}
              <div className={`flex gap-2 mb-3 ${isPresenting ? 'gap-1' : ''}`}>
                <button
                  onClick={() => setCourtVotes(prev => ({ ...prev, [item.id]: prev[item.id] === 'falsifiable' ? null : 'falsifiable' }))}
                  className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all ${
                    courtVotes[item.id] === 'falsifiable'
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                      : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                  } ${isPresenting ? 'text-xs py-1' : ''}`}
                >
                  ✓ Falsifiable
                </button>
                <button
                  onClick={() => setCourtVotes(prev => ({ ...prev, [item.id]: prev[item.id] === 'unfalsifiable' ? null : 'unfalsifiable' }))}
                  className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all ${
                    courtVotes[item.id] === 'unfalsifiable'
                      ? 'bg-red-600 hover:bg-red-500 text-white'
                      : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                  } ${isPresenting ? 'text-xs py-1' : ''}`}
                >
                  ✗ Unfalsifiable
                </button>
              </div>

              {/* Reveal Panel */}
              {courtRevealed[item.id] && (
                <div className={`bg-gray-900/70 rounded-lg p-3 border-l-4 border-blue-500 animate-fadeIn space-y-2`}>
                  <div>
                    <p className={`${isPresenting ? 'text-xs' : 'text-sm'} font-semibold text-blue-300 mb-1`}>Verdict:</p>
                    <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200`}>
                      <span className={item.falsifiable ? 'text-emerald-400 font-bold' : 'text-red-400 font-bold'}>
                        {item.falsifiable ? '✓ FALSIFIABLE' : '✗ UNFALSIFIABLE'}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className={`${isPresenting ? 'text-xs' : 'text-sm'} font-semibold text-gray-300 mb-1`}>How to test:</p>
                    <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-300`}>{item.disproof}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* PART B: STUDENT CLAIM CREATOR */}
      {activeTab === 'create' && (
        <div className={`flex-grow flex flex-col overflow-hidden`}>
          {/* Input Section */}
          <div className={`rounded-xl border-2 border-rose-500/40 bg-rose-900/20 mb-4 ${isPresenting ? 'p-3' : 'p-4'}`}>
            <label className={`${isPresenting ? 'text-xs' : 'text-sm'} font-bold text-rose-300 block mb-2`}>
              Create a claim for the class to judge:
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={userClaim}
                onChange={(e) => setUserClaim(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddClaim()}
                placeholder="E.g., 'Video games improve hand-eye coordination'"
                className={`flex-grow bg-gray-900/50 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-600 focus:outline-none focus:border-rose-500 ${isPresenting ? 'px-2 py-1 text-xs' : 'px-3 py-2 text-sm'}`}
              />
              <button
                onClick={handleAddClaim}
                disabled={!userClaim.trim()}
                className={`px-4 py-2 rounded-lg font-bold bg-rose-600 hover:bg-rose-500 disabled:opacity-50 disabled:cursor-not-allowed text-white transition-all ${isPresenting ? 'text-xs px-3 py-1' : ''}`}
              >
                Submit
              </button>
            </div>
          </div>

          {/* Claims Display */}
          <div className={`flex-grow overflow-y-auto custom-scrollbar space-y-3`}>
            {studentClaims.length === 0 ? (
              <div className="flex items-center justify-center h-32 text-gray-500">
                <p className={`${isPresenting ? 'text-xs' : 'text-sm'}`}>No claims yet. Be the first to challenge the class!</p>
              </div>
            ) : (
              studentClaims.map((claim, idx) => (
                <div key={idx} className={`rounded-xl border border-gray-700 bg-gray-900/50 ${isPresenting ? 'p-3' : 'p-4'}`}>
                  <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200 font-semibold mb-3`}>{claim.text}</p>
                  
                  <div className={`flex gap-2 ${isPresenting ? 'gap-1' : ''}`}>
                    <button
                      onClick={() => handleVoteOnClaim(idx, 'falsifiable')}
                      className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all ${
                        claim.userVote === 'falsifiable'
                          ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                          : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                      } ${isPresenting ? 'text-xs py-1' : ''}`}
                    >
                      ✓ {claim.votes.falsifiable}
                    </button>
                    <button
                      onClick={() => handleVoteOnClaim(idx, 'unfalsifiable')}
                      className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all ${
                        claim.userVote === 'unfalsifiable'
                          ? 'bg-red-600 hover:bg-red-500 text-white'
                          : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                      } ${isPresenting ? 'text-xs py-1' : ''}`}
                    >
                      ✗ {claim.votes.unfalsifiable}
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// Hypothesis Design Teach - Part 1: Core Concepts
const HypothesisDesignTeachPart1: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-8'}>
        <h2 className={`${isPresenting ? 'text-3xl' : 'text-5xl'} font-black text-white mb-2`}>Hypothesis Design</h2>
        <p className={`${isPresenting ? 'text-sm' : 'text-lg'} text-gray-400`}>Part 1: Operationalisation & Types</p>
      </div>

      <div className={`grid grid-cols-2 ${isPresenting ? 'gap-3' : 'gap-6'}`}>
        <div className={`rounded-xl border-2 border-rose-500/40 bg-rose-900/20 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-rose-300 mb-3 flex items-center gap-2`}>
            <Target size={isPresenting ? 20 : 24} />
            Operationalisation
          </h3>
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200 mb-3`}>Define abstract psychological concepts in measurable, observable terms.</p>
          <div className={`space-y-2 ${isPresenting ? 'text-xs' : 'text-sm'}`}>
            <div className="bg-gray-900/50 rounded-lg p-2 border-l-4 border-red-500">
              <p className="text-red-200 font-semibold">❌ Vague:</p>
              <p className="text-gray-200">"Anxiety levels"</p>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-2 border-l-4 border-emerald-500">
              <p className="text-emerald-200 font-semibold">✓ Operationalised:</p>
              <p className="text-gray-200">"Score on Beck Anxiety Inventory (0–63)"</p>
            </div>
          </div>
        </div>

        <div className={`rounded-xl border-2 border-rose-500/40 bg-rose-900/20 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-rose-300 mb-3 flex items-center gap-2`}>
            <Zap size={isPresenting ? 20 : 24} />
            Hypothesis Types
          </h3>
          <div className={`space-y-2 ${isPresenting ? 'text-xs' : 'text-sm'}`}>
            <div className="bg-blue-950/30 rounded-lg p-2 border-l-4 border-blue-500">
              <p className="text-blue-300 font-semibold mb-1">Directional (One-Tailed)</p>
              <p className="text-gray-200">Predicts <span className="font-semibold">direction</span> of effect. Use when theory is strong.</p>
            </div>
            <div className="bg-purple-950/30 rounded-lg p-2 border-l-4 border-purple-500">
              <p className="text-purple-300 font-semibold mb-1">Non-Directional (Two-Tailed)</p>
              <p className="text-gray-200">Predicts a <span className="font-semibold">difference</span> only. Use when exploring.</p>
            </div>
          </div>
        </div>

        <div className={`rounded-xl border-2 border-rose-500/40 bg-rose-900/20 col-span-1 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-rose-300 mb-3 flex items-center gap-2`}>
            <AlertCircle size={isPresenting ? 20 : 24} />
            Null Hypothesis (H₀)
          </h3>
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200 mb-2`}>States <span className="font-semibold">no effect</span> or <span className="font-semibold">no difference</span>. Any difference is due to chance.</p>
          <div className="bg-gray-900/50 rounded-lg p-2 border-l-4 border-gray-400 text-xs text-gray-300">"There will be no significant difference between groups."</div>
        </div>

        <div className={`rounded-xl border-2 border-rose-500/40 bg-rose-900/20 col-span-1 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-rose-300 mb-3 flex items-center gap-2`}>
            <Lightbulb size={isPresenting ? 20 : 24} />
            Alternative Hypothesis (H₁)
          </h3>
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200 mb-2`}>Predicts an <span className="font-semibold">effect</span> or <span className="font-semibold">difference</span>. Directional or non-directional.</p>
          <div className="bg-gray-900/50 rounded-lg p-2 border-l-4 border-gray-400 text-xs text-gray-300">"Participants receiving treatment will show higher scores..."</div>
        </div>
      </div>
    </div>
  )
}

// Hypothesis Design Teach - Part 2: Variables & Controls
const HypothesisDesignTeachPart2: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={isPresenting ? 'mb-4' : 'mb-8'}>
        <h2 className={`${isPresenting ? 'text-3xl' : 'text-5xl'} font-black text-white mb-2`}>Hypothesis Design</h2>
        <p className={`${isPresenting ? 'text-sm' : 'text-lg'} text-gray-400`}>Part 2: Variables & Controls</p>
      </div>

      <div className={`grid grid-cols-2 ${isPresenting ? 'gap-3' : 'gap-6'} mb-6`}>
        <div className={`rounded-xl border-2 border-rose-500/40 bg-rose-900/20 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-rose-300 mb-2`}>Independent Variable (IV)</h3>
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200 mb-3`}>What the researcher <span className="font-semibold">manipulates</span> or varies between groups.</p>
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-300 italic`}>Example: Type of music (classical vs silence)</p>
        </div>

        <div className={`rounded-xl border-2 border-rose-500/40 bg-rose-900/20 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-rose-300 mb-2`}>Dependent Variable (DV)</h3>
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200 mb-3`}>What the researcher <span className="font-semibold">measures</span> as the outcome or effect.</p>
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-300 italic`}>Example: Memory test score (words recalled)</p>
        </div>

        <div className={`rounded-xl border-2 border-rose-500/40 bg-rose-900/20 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-rose-300 mb-2`}>Extraneous Variables</h3>
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200 mb-3`}>Confounding factors that could affect the DV and must be <span className="font-semibold">controlled</span>.</p>
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-300 italic`}>Example: Prior knowledge, intelligence, sleep, room temperature</p>
        </div>

        <div className={`rounded-xl border-2 border-rose-500/40 bg-rose-900/20 ${isPresenting ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold text-rose-300 mb-2`}>Controls & Fairness</h3>
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200 mb-3`}>Techniques to keep the test <span className="font-semibold">fair</span>—only the IV should differ between groups.</p>
          <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-300 italic`}>Example: Randomisation, standardisation, matching participants</p>
        </div>
      </div>

      <div className={`rounded-xl border border-gray-700 bg-gray-900/40 ${isPresenting ? 'p-4' : 'p-6'}`}>
        <h4 className={`${isPresenting ? 'text-sm' : 'text-base'} font-bold text-white mb-2`}>Full Example</h4>
        <div className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200 space-y-1 font-mono`}>
          <p><span className="text-rose-300 font-bold">Scenario:</span> Does caffeine affect reaction time?</p>
          <p><span className="text-rose-300 font-bold">IV:</span> Caffeine (placebo vs 100mg)</p>
          <p><span className="text-rose-300 font-bold">DV:</span> Reaction time in milliseconds</p>
          <p><span className="text-rose-300 font-bold">Controls:</span> Randomise allocation, standardise task, control sleep & diet</p>
        </div>
      </div>
    </div>
  )
}

// Falsification Teach Slide (AS Level)
const FalsificationTeachSlide: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [revealedCards, setRevealedCards] = useState<Set<number>>(new Set())

  const cards = [
    {
      id: 1,
      frontTitle: 'What is Falsification?',
      frontIcon: <HelpCircle size={isPresenting ? 32 : 48} />,
      frontColor: 'rose',
      backContent: {
        title: 'The Principle',
        description: 'A theory is only scientific if it can be tested and potentially proven false. We should actively try to disprove theories—if we cannot, they gain credibility.',
        example: '"All swans are white" is falsifiable—finding one black swan disproves it.',
        keyPoint: 'Proposed by Karl Popper (1934)'
      }
    },
    {
      id: 2,
      frontTitle: 'Why Does It Matter?',
      frontIcon: <AlertCircle size={isPresenting ? 32 : 48} />,
      frontColor: 'blue',
      backContent: {
        title: 'Distinguishing Science',
        description: 'Falsifiability distinguishes science from pseudoscience. Unfalsifiable claims cannot be tested and are not scientific.',
        example: '"Some people have psychic powers but it only works when skeptics aren\'t watching" — unfalsifiable!',
        keyPoint: 'Good science invites challenges'
      }
    },
    {
      id: 3,
      frontTitle: 'Scientific Claims ✓',
      frontIcon: <CheckCircle size={isPresenting ? 32 : 48} />,
      frontColor: 'emerald',
      backContent: {
        title: 'Falsifiable Examples',
        description: 'These statements can be tested and potentially disproven through research:',
        examples: [
          'High caffeine intake impairs sleep quality',
          'Working memory capacity is 7±2 items',
          'Stress increases cortisol levels',
          'CBT reduces anxiety symptoms'
        ]
      }
    },
    {
      id: 4,
      frontTitle: 'Non-Scientific Claims ✗',
      frontIcon: <XCircle size={isPresenting ? 32 : 48} />,
      frontColor: 'red',
      backContent: {
        title: 'Unfalsifiable Examples',
        description: 'These cannot be tested scientifically—they evade disproof:',
        examples: [
          'Everything happens for a reason',
          'The unconscious explains any behavior',
          'Some dreams predict the future',
          'True happiness comes from within'
        ]
      }
    }
  ]

  const toggleCard = (id: number) => {
    setRevealedCards(prev => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const revealAll = () => {
    setRevealedCards(new Set(cards.map(c => c.id)))
  }

  const hideAll = () => {
    setRevealedCards(new Set())
  }

  const colorClasses: Record<string, { border: string; bg: string; text: string }> = {
    rose: { border: 'border-rose-500/50', bg: 'bg-rose-900/30', text: 'text-rose-300' },
    blue: { border: 'border-blue-500/50', bg: 'bg-blue-900/30', text: 'text-blue-300' },
    emerald: { border: 'border-emerald-500/50', bg: 'bg-emerald-900/30', text: 'text-emerald-300' },
    red: { border: 'border-red-500/50', bg: 'bg-red-900/30', text: 'text-red-300' }
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn overflow-y-auto custom-scrollbar ${isPresenting ? 'p-6' : 'p-10'}`}>
      <div className={`${isPresenting ? 'mb-4' : 'mb-6'} flex justify-between items-start`}>
        <div>
          <h2 className={`${isPresenting ? 'text-3xl' : 'text-5xl'} font-black text-white mb-2`}>Falsification</h2>
          <p className={`${isPresenting ? 'text-sm' : 'text-lg'} text-gray-400`}>Karl Popper's criterion for scientific validity</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={revealAll}
            className={`${isPresenting ? 'px-3 py-1 text-xs' : 'px-4 py-2 text-sm'} rounded-lg font-bold bg-emerald-700 text-emerald-100 hover:bg-emerald-600 transition-all`}
          >
            Reveal All
          </button>
          <button
            onClick={hideAll}
            className={`${isPresenting ? 'px-3 py-1 text-xs' : 'px-4 py-2 text-sm'} rounded-lg font-bold bg-gray-700 text-gray-100 hover:bg-gray-600 transition-all`}
          >
            Hide All
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className={`grid grid-cols-2 ${isPresenting ? 'gap-3' : 'gap-4'} flex-1`}>
        {cards.map((card) => {
          const isRevealed = revealedCards.has(card.id)
          const colors = colorClasses[card.frontColor]
          
          return (
            <div
              key={card.id}
              onClick={() => toggleCard(card.id)}
              className={`rounded-xl border-2 ${colors.border} ${colors.bg} ${isPresenting ? 'p-4' : 'p-6'} cursor-pointer transition-all duration-500 hover:scale-[1.02] ${
                isRevealed ? 'shadow-lg' : ''
              }`}
            >
              {!isRevealed ? (
                /* Front of Card */
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className={`${colors.text} mb-3`}>{card.frontIcon}</div>
                  <h3 className={`${isPresenting ? 'text-lg' : 'text-2xl'} font-bold ${colors.text}`}>{card.frontTitle}</h3>
                  <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-400 mt-2`}>Click to reveal</p>
                </div>
              ) : (
                /* Back of Card */
                <div className="h-full flex flex-col">
                  <h3 className={`${isPresenting ? 'text-base' : 'text-xl'} font-bold ${colors.text} mb-2`}>{card.backContent.title}</h3>
                  <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200 mb-3`}>{card.backContent.description}</p>
                  
                  {card.backContent.example && (
                    <div className={`bg-gray-900/50 rounded-lg ${isPresenting ? 'p-2' : 'p-3'} border-l-4 ${colors.border.replace('/50', '')} mb-2`}>
                      <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200 italic`}>{card.backContent.example}</p>
                    </div>
                  )}
                  
                  {card.backContent.examples && (
                    <ul className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-200 space-y-1 mb-2`}>
                      {card.backContent.examples.map((ex, idx) => (
                        <li key={idx}>• {ex}</li>
                      ))}
                    </ul>
                  )}
                  
                  {card.backContent.keyPoint && (
                    <p className={`${isPresenting ? 'text-xs' : 'text-sm'} ${colors.text} font-semibold mt-auto`}>
                      {card.backContent.keyPoint}
                    </p>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Bottom Tip */}
      <div className={`${isPresenting ? 'mt-3 p-3' : 'mt-4 p-4'} rounded-lg bg-gray-800/50 border border-gray-700`}>
        <p className={`${isPresenting ? 'text-xs' : 'text-sm'} text-gray-300 text-center`}>
          <span className="font-bold text-rose-300">Exam Tip:</span> When evaluating theories, ask "What would disprove this?" If nothing could, it's not scientific.
        </p>
      </div>
    </div>
  )
}

// Falsifiability Checker - AFL (AS Level)
const FalsifiabilityChecker: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const statements = [
    { id: 1, text: 'Sleep deprivation impairs cognitive performance on memory tasks.', falsifiable: true },
    { id: 2, text: 'Everything in the universe is connected by energy.', falsifiable: false },
    { id: 3, text: 'Serotonin levels correlate with depression severity.', falsifiable: true },
    { id: 4, text: 'True happiness comes from within.', falsifiable: false },
  ]

  const [answers, setAnswers] = useState<Record<number, boolean | undefined>>({})
  const [showResults, setShowResults] = useState(false)
  const [revealed, setRevealed] = useState<Record<number, boolean>>({})

  const score = statements.reduce((acc, s) => acc + (answers[s.id] === s.falsifiable ? 1 : 0), 0)

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-8'}`}>
      <div className={`${isPresenting ? 'mb-4' : 'mb-6'}`}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-1`}>Falsifiability Check</h2>
        <p className={`${isPresenting ? 'text-xs' : ''} text-gray-400`}>Which statements are scientifically testable?</p>
      </div>

      <div className={`grid grid-cols-2 flex-grow overflow-auto custom-scrollbar ${isPresenting ? 'gap-3' : 'gap-4'}`}>
        {statements.map((s) => (
          <div key={s.id} className={`bg-gray-900/70 border border-gray-700 rounded-lg flex flex-col ${isPresenting ? 'p-4 gap-2' : 'p-5 gap-4'}`}>
            <div className="flex items-center justify-between">
              <span className={`${isPresenting ? 'text-xs' : 'text-sm'} text-rose-400 font-bold`}>Statement {s.id}</span>
              {(showResults || (isPresenting && revealed[s.id])) && (
                <span className={`${isPresenting ? 'text-xs px-2 py-1' : 'text-xs px-3 py-1'} font-bold rounded-full ${
                  s.falsifiable ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'
                }`}>
                  {s.falsifiable ? 'Falsifiable' : 'Unfalsifiable'}
                </span>
              )}
            </div>
            <p className={`text-gray-200 leading-relaxed ${isPresenting ? 'text-xs' : ''}`}>{s.text}</p>

            {!isPresenting && (
              <div className="flex gap-2">
                <button
                  onClick={() => !showResults && setAnswers(prev => ({ ...prev, [s.id]: true }))}
                  className={`flex-1 rounded-lg border font-bold transition-all ${isPresenting ? 'px-3 py-2 text-xs' : 'px-4 py-3'} ${
                    answers[s.id] === true
                      ? 'border-emerald-500 bg-emerald-900/30 text-emerald-200'
                      : 'border-gray-700 bg-gray-800 text-gray-300 hover:border-emerald-500/50'
                  }`}
                >
                  Falsifiable
                </button>
                <button
                  onClick={() => !showResults && setAnswers(prev => ({ ...prev, [s.id]: false }))}
                  className={`flex-1 rounded-lg border font-bold transition-all ${isPresenting ? 'px-3 py-2 text-xs' : 'px-4 py-3'} ${
                    answers[s.id] === false
                      ? 'border-red-500 bg-red-900/30 text-red-200'
                      : 'border-gray-700 bg-gray-800 text-gray-300 hover:border-red-500/50'
                  }`}
                >
                  Unfalsifiable
                </button>
              </div>
            )}

            {isPresenting && !revealed[s.id] && !showResults && (
              <button
                onClick={() => setRevealed(prev => ({ ...prev, [s.id]: true }))}
                className={`self-start rounded-lg border border-gray-700 text-gray-300 hover:border-rose-500/50 transition-all ${isPresenting ? 'px-3 py-1 text-xs' : 'px-4 py-2 text-sm'}`}
              >
                Reveal
              </button>
            )}
          </div>
        ))}
      </div>

      {!isPresenting && (
        <div className="mt-4 flex items-center gap-4">
          {!showResults ? (
            <button
              onClick={() => setShowResults(true)}
              disabled={Object.keys(answers).length < statements.length}
              className="px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white disabled:opacity-50 disabled:grayscale"
            >
              Check Answers
            </button>
          ) : (
            <div className="px-4 py-3 rounded-xl bg-emerald-900/30 border border-emerald-500/40 text-emerald-200 font-mono">
              Score: {score} / {statements.length}
            </div>
          )}
        </div>
      )}

      {isPresenting && (
        <div className="mt-4 flex items-center gap-2">
          <button
            onClick={() => setRevealed(Object.fromEntries(statements.map(s => [s.id, true])))}
            className="px-4 py-2 rounded-lg text-sm font-bold bg-rose-600 hover:bg-rose-500 text-white"
          >
            Reveal All
          </button>
          <button
            onClick={() => setRevealed({})}
            className="px-4 py-2 rounded-lg text-sm font-bold bg-gray-800 hover:bg-gray-700 text-gray-200"
          >
            Hide All
          </button>
        </div>
      )}
    </div>
  )
}

// Hypothesis Writing (AS Level) - Directional vs Non-Directional Task
const HypothesisWriterASLevel: React.FC<{ isPresenting?: boolean }> = ({ isPresenting = false }) => {
  const [selectedType, setSelectedType] = useState<'directional' | 'nondirectional' | null>(null)
  const [showExample, setShowExample] = useState(false)

  const scenario = 'A researcher hypothesises that acute sleep deprivation (4 hours) impairs performance on a working memory task compared to normal sleep (8 hours).'

  const exampleDirectional = 'Participants who experience acute sleep deprivation (4 hours) will score significantly lower on the working memory task compared to participants who receive normal sleep (8 hours).'

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-4' : 'p-8'}`}>
      <div className={`${isPresenting ? 'mb-3' : 'mb-6'}`}>
        <h2 className={`${isPresenting ? 'text-2xl' : 'text-4xl'} font-black text-white mb-2`}>Write an Experimental Hypothesis</h2>
        <p className={`${isPresenting ? 'text-xs' : ''} text-gray-400`}>Choose hypothesis type and operationalise variables</p>
      </div>

      <div className={`bg-gradient-to-br from-rose-900/30 to-rose-800/20 border-2 border-rose-500/50 rounded-lg ${isPresenting ? 'p-4 mb-3' : 'p-6 mb-6'}`}>
        <h3 className={`${isPresenting ? 'text-sm' : 'text-xl'} font-bold text-rose-300 mb-2`}>Research Scenario</h3>
        <p className={`${isPresenting ? 'text-xs' : 'text-lg'} text-gray-200 leading-relaxed italic`}>
          {scenario}
        </p>
      </div>

      <div className={`grid grid-cols-2 ${isPresenting ? 'gap-3 mb-3' : 'gap-4 mb-6'}`}>
        <button
          onClick={() => setSelectedType('directional')}
          className={`${isPresenting ? 'p-3' : 'p-4'} rounded-lg border-2 text-left transition-all ${
            selectedType === 'directional'
              ? 'border-rose-500 bg-rose-600 text-white'
              : 'border-gray-600 bg-gray-800 text-gray-300 hover:border-rose-500/50'
          }`}>
          <h4 className={`${isPresenting ? 'text-xs' : 'text-sm'} font-bold mb-1`}>Directional (One-Tailed)</h4>
          <p className={`${isPresenting ? 'text-xs' : 'text-xs'} opacity-80`}>Predicts direction of effect (higher/lower)</p>
        </button>
        <button
          onClick={() => setSelectedType('nondirectional')}
          className={`${isPresenting ? 'p-3' : 'p-4'} rounded-lg border-2 text-left transition-all ${
            selectedType === 'nondirectional'
              ? 'border-blue-500 bg-blue-600 text-white'
              : 'border-gray-600 bg-gray-800 text-gray-300 hover:border-blue-500/50'
          }`}>
          <h4 className={`${isPresenting ? 'text-xs' : 'text-sm'} font-bold mb-1`}>Non-Directional (Two-Tailed)</h4>
          <p className={`${isPresenting ? 'text-xs' : 'text-xs'} opacity-80`}>Predicts a difference (not direction)</p>
        </button>
      </div>

      {selectedType ? (
        <div className={`bg-blue-950/20 border-2 border-blue-500/30 rounded-lg ${isPresenting ? 'p-3 mb-3' : 'p-5 mb-4'} animate-fadeIn`}>
          <h4 className={`${isPresenting ? 'text-xs' : 'text-lg'} font-bold text-blue-300 mb-2`}>Your Hypothesis (Example)</h4>
          <p className={`${isPresenting ? 'text-xs' : 'text-base'} text-gray-100 leading-relaxed`}>
            {exampleDirectional}
          </p>
          <div className={`mt-3 text-xs text-blue-300 space-y-1`}>
            <p><span className="font-semibold">IV (Independent):</span> Sleep duration (4 hours vs 8 hours)</p>
            <p><span className="font-semibold">DV (Dependent):</span> Working memory task score</p>
            <p><span className="font-semibold">Type:</span> {selectedType === 'directional' ? 'Directional—predicts lower scores' : 'Non-directional—predicts difference'}</p>
          </div>
        </div>
      ) : (
        <div className={`bg-gray-900/40 border border-gray-700 rounded-lg ${isPresenting ? 'p-3 mb-3' : 'p-5 mb-4'} text-center text-gray-400`}>
          <p className={isPresenting ? 'text-xs' : 'text-sm'}>Select a hypothesis type to see an example ↑</p>
        </div>
      )}

      <button
        onClick={() => setShowExample(!showExample)}
        className={`w-full ${isPresenting ? 'py-2 text-sm' : 'py-3'} rounded-lg font-bold transition-all bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white`}
      >
        {showExample ? '✕ Hide Exam Tips' : '+ Show Exam Tips'}
      </button>

      {showExample && (
        <div className={`bg-amber-900/30 border-2 border-amber-500/50 rounded-lg ${isPresenting ? 'p-3 mt-3' : 'p-5 mt-4'} animate-fadeIn`}>
          <h3 className={`${isPresenting ? 'text-xs' : 'text-lg'} font-bold text-amber-300 mb-3`}>Exam Tips for High-Quality Hypotheses</h3>
          <div className={`space-y-2 ${isPresenting ? 'text-xs' : 'text-sm'} text-amber-100`}>
            <div className="flex gap-2">
              <span className="text-amber-300 font-bold min-w-fit">• Operationalise:</span>
              <p>Define variables in measurable terms (e.g., "score on X test", "time in seconds")</p>
            </div>
            <div className="flex gap-2">
              <span className="text-amber-300 font-bold min-w-fit">• Be specific:</span>
              <p>Name the groups being compared ("participants who..." vs "participants who...")</p>
            </div>
            <div className="flex gap-2">
              <span className="text-amber-300 font-bold min-w-fit">• Directional:</span>
              <p>States effect direction (higher/lower). Use when theory predicts direction.</p>
            </div>
            <div className="flex gap-2">
              <span className="text-amber-300 font-bold min-w-fit">• Non-directional:</span>
              <p>Predicts difference without direction. Use when exploring or theory is unclear.</p>
            </div>
            <div className="flex gap-2">
              <span className="text-amber-300 font-bold min-w-fit">• Testable:</span>
              <p>Must be falsifiable—possible to prove wrong with evidence.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Extended Exam Task for AS Level Lesson 1
const ExtendedExamTaskASLevel: React.FC = () => {
  const [showTips, setShowTips] = useState(false)
  
  return (
    <div className="flex flex-col h-full p-8 animate-fadeIn">
      <h2 className="text-4xl font-black text-white mb-2">Extended Task: Exam-Style (AS Level)</h2>
      <p className="text-gray-400 mb-6">Apply your understanding of the scientific approach and hypothesis formulation.</p>
  
      <div className="bg-gray-900/70 border border-gray-700 rounded-2xl p-6 mb-6">
        <h3 className="text-2xl font-bold text-rose-300 mb-3">Scenario</h3>
        <p className="text-gray-200 leading-relaxed">
          A psychologist wants to investigate whether mindfulness meditation reduces anxiety levels in university students. She recruits 40 participants, randomly allocating 20 to a 4-week mindfulness program and 20 to a control group (no intervention). Both groups complete the Beck Anxiety Inventory before and after the 4-week period.
        </p>
      </div>
  
      <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-4 mb-6">
        <h4 className="text-sm font-bold text-emerald-400 uppercase mb-3">Required Tasks</h4>
        <ul className="space-y-2 text-gray-200 text-sm grid grid-cols-2 gap-4">
          <li>• Write a directional experimental hypothesis</li>
          <li>• Write the corresponding null hypothesis</li>
          <li>• Identify two extraneous variables and controls</li>
          <li>• Explain empiricism in this study</li>
          <li>• Assess whether hypothesis is falsifiable</li>
          <li>• Suggest one ethical consideration (BPS code)</li>
        </ul>
      </div>

      <button
        onClick={() => setShowTips(!showTips)}
        className="w-full py-3 mb-4 rounded-lg font-bold transition-all bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white"
      >
        {showTips ? '✕ Hide Exam Tips' : '+ Show Exam Tips'}
      </button>

      {showTips && (
        <div className="bg-amber-900/30 border-2 border-amber-500/30 rounded-xl p-4 mb-6 animate-fadeIn">
          <h4 className="text-sm font-bold text-amber-300 uppercase mb-3">Exam Tips</h4>
          <div className="space-y-2 text-amber-100 text-sm">
            <div className="flex gap-2">
              <span className="font-semibold text-amber-300 min-w-fit">H₁ (Directional):</span>
              <p>States direction of effect with operationalised variables. E.g., "Participants in the mindfulness group will show significantly lower anxiety scores..."</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-amber-300 min-w-fit">H₀ (Null):</span>
              <p>States no significant effect. E.g., "There will be no significant difference in anxiety scores between..."</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-amber-300 min-w-fit">Extraneous:</span>
              <p>Prior anxiety levels, baseline stress, medication, motivation, age, sleep quality.</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-amber-300 min-w-fit">Empiricism:</span>
              <p>Uses measurable data (BAI scores), not speculation. Relies on direct observation.</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-amber-300 min-w-fit">Falsifiable:</span>
              <p>The hypothesis can be tested and potentially disproven. If BAI scores don't differ, the hypothesis is falsified.</p>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-amber-300 min-w-fit">Ethics:</span>
              <p>Informed consent before allocation, right to withdraw, debriefing after intervention, protecting psychological wellbeing.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Lesson definitions with level-specific availability
const allLessons = [
  // ============= GCSE LESSONS (15 Total) =============
  { id: 1, title: 'Lesson 1: Hypotheses and Variables', levels: ['gcse'], description: 'IV, DV, Null & Alt' },
  { id: 2, title: 'Lesson 2: Extraneous Variables', levels: ['gcse'], description: 'Standardisation & Control' },
  { id: 3, title: 'Lesson 3: Types of Experiment', levels: ['gcse'], description: 'Lab, Field, Natural' },
  { id: 4, title: 'Lesson 4: Experimental Designs', levels: ['gcse'], description: 'IG, RM, MP' },
  { id: 5, title: 'Lesson 5: Sampling Methods', levels: ['gcse'], description: 'Random, Opportunity, Stratified' },
  { id: 6, title: 'Lesson 6: Ethical Considerations', levels: ['gcse'], description: 'BPS Guidelines' },
  { id: 7, title: 'Lesson 7: Interviews & Questionnaires', levels: ['gcse'], description: 'Self-Report Methods' },
  { id: 8, title: 'Lesson 8: Observation Studies', levels: ['gcse'], description: 'Watching Behaviour' },
  { id: 9, title: 'Lesson 9: Correlations', levels: ['gcse'], description: 'Relationships Between Variables' },
  { id: 10, title: 'Lesson 10: Case Studies', levels: ['gcse'], description: 'In-Depth Analysis' },
  { id: 11, title: 'Lesson 11: Reliability and Validity', levels: ['gcse'], description: 'Consistency & Truth' },
  { id: 12, title: 'Lesson 12: Types of Data', levels: ['gcse'], description: 'Quantitative & Qualitative' },
  { id: 13, title: 'Lesson 13: Descriptive Statistics', levels: ['gcse'], description: 'Mean, Median, Mode, Range' },
  { id: 14, title: 'Lesson 14: Display of Data', levels: ['gcse'], description: 'Graphs & Charts' },
  { id: 15, title: 'Lesson 15: Computation', levels: ['gcse'], description: 'Arithmetic Skills' },

  // ============= AS LEVEL LESSONS (17 Total) =============
  { id: 16, title: 'Lesson 1: Experimental Method', levels: ['aslevel'], description: 'Aims, Hypotheses, Variables' },
  { id: 17, title: 'Lesson 2: Control of Variables', levels: ['aslevel'], description: 'Extraneous, Confounding, Demand' },
  { id: 18, title: 'Lesson 3: Experimental Design', levels: ['aslevel'], description: 'Independent Groups, RM, Matched Pairs' },
  { id: 19, title: 'Lesson 4: Types of Experiment', levels: ['aslevel'], description: 'Lab, Field, Natural, Quasi' },
  { id: 20, title: 'Lesson 5: Sampling', levels: ['aslevel'], description: 'Population, Techniques, Bias' },
  { id: 21, title: 'Lesson 6: Ethical Issues', levels: ['aslevel'], description: 'BPS Code of Ethics' },
  { id: 22, title: 'Lesson 7: Observational Techniques', levels: ['aslevel'], description: 'Systematic Observation' },
  { id: 23, title: 'Lesson 8: Self-Report Methods', levels: ['aslevel'], description: 'Interviews & Questionnaires' },
  { id: 24, title: 'Lesson 9: Correlations', levels: ['aslevel'], description: 'Correlation Analysis' },
  { id: 25, title: 'Lesson 10: Kinds of Data', levels: ['aslevel'], description: 'Qualitative & Quantitative' },
  { id: 26, title: 'Lesson 11: Descriptive Statistics', levels: ['aslevel'], description: 'Measures of Central Tendency' },
  { id: 27, title: 'Lesson 12: Data Presentation', levels: ['aslevel'], description: 'Graphs & Charts' },
  { id: 28, title: 'Lesson 13: Mathematical Skills', levels: ['aslevel'], description: 'Quantitative Methods' },
  { id: 29, title: 'Lesson 14: Statistical Testing', levels: ['aslevel'], description: 'Inferential Statistics' },
  { id: 30, title: 'Lesson 15: Peer Review & Economy', levels: ['aslevel'], description: 'Science & Society' },
  
  // ============= A LEVEL (YEAR 2) RESEARCH METHODS (from textbook) =============
  { id: 31, title: 'Lesson 1: Correlation Analysis', levels: ['alevel'], description: 'Coefficients & Interpretation' },
  { id: 32, title: 'Lesson 2: Case Studies & Content Analysis', levels: ['alevel'], description: 'Coding & Thematic Analysis' },
  { id: 33, title: 'Lesson 3: Reliability', levels: ['alevel'], description: 'Test-Retest & Inter-Observer' },
  { id: 34, title: 'Lesson 4: Validity', levels: ['alevel'], description: 'Face, Concurrent, Ecological, Temporal' },
  { id: 35, title: 'Lesson 5: Choosing a Statistical Test', levels: ['alevel'], description: 'Design & Measurement Level' },
  { id: 36, title: 'Lesson 6: Probability & Significance', levels: ['alevel'], description: 'Critical Values & Type I/II Errors' },
  { id: 37, title: 'Lesson 7: Non-Parametric Tests', levels: ['alevel'], description: 'Mann-Whitney & Wilcoxon' },
  { id: 38, title: 'Lesson 8: Parametric Tests', levels: ['alevel'], description: 'Unrelated & Related t-tests' },
  { id: 39, title: 'Lesson 9: Tests of Correlation', levels: ['alevel'], description: "Spearman's rho & Pearson's r" },
  { id: 40, title: 'Lesson 10: Chi-Squared Test', levels: ['alevel'], description: 'Test of Association (χ²)' },
  { id: 41, title: 'Lesson 11: Reporting Investigations', levels: ['alevel'], description: 'Scientific Report Sections' },
  { id: 42, title: 'Lesson 12: Features of Science', levels: ['alevel'], description: 'Objectivity, Replicability, Paradigms' },
]

// Get lessons filtered by current level
const getActiveLessons = (currentLevel: 'gcse' | 'aslevel' | 'alevel') => {
  return allLessons.filter(lesson => lesson.levels.includes(currentLevel))
}

// Slide counts per lesson
const lessonSlideCounts: Record<number, number> = {
  // GCSE (15 lessons) - all have title slide added (+1)
  1: 11, 2: 10, 3: 10, 4: 10, 5: 12, 6: 7, 7: 8, 8: 6, 9: 7, 10: 6, 11: 8, 12: 7, 13: 6, 14: 7, 15: 6,
  // AS Level (15 lessons) - Phase 2: AFL dispersed throughout lessons (lesson 16 now has title slide = 12)
  16: 12, 17: 12, 18: 11, 19: 11, 20: 13, 21: 13, 22: 12, 23: 11, 24: 11, 25: 10, 26: 10, 27: 10, 28: 10, 29: 10, 30: 10,
  // A Level (12 lessons) - Phase 1: Foundation structure (all have 10 slides)
  31: 10, 32: 11, 33: 11, 34: 11, 35: 10, 36: 11, 37: 11, 38: 10, 39: 11, 40: 10, 41: 11, 42: 11
}

// Utility: build slides with teacher-first ordering per cycle
const buildSlides = (cyclePrefixes: string[], includeExtended = true) => {
  const slides: string[] = ['title', 'donow']
  for (const prefix of cyclePrefixes) {
    slides.push(`${prefix}_teach`, `${prefix}_sim`, `${prefix}_afl`, `${prefix}_task`)
  }
  if (includeExtended) slides.push('extended')
  return slides
}

// Lesson 1 slides data (GCSE) - Hypotheses and Variables
const lesson1Slides = buildSlides(['hypo', 'variables'])

// Lesson 2 slides data (GCSE) - Extraneous Variables
const lesson2Slides = ['title', 'donow', 'ev_teach', 'evtypes_teach', 'evtypes_afl', 'evtypes_task', 'control_teach', 'control_afl', 'control_task', 'extended']

// Lesson 3 slides data (GCSE) - Types of Experiment
const lesson3Slides = ['title', 'donow', 'lab_teach', 'lab_afl', 'field_teach', 'field_afl', 'natural_teach', 'natural_afl', 'comparison_task', 'extended']

// Lesson 4 slides data (GCSE) - Experimental Designs
const lesson4Slides = ['title', 'donow', 'ig_teach', 'ig_afl', 'rm_teach', 'rm_afl', 'mp_teach', 'mp_afl', 'design_task', 'extended']

// Lesson 5 slides data (GCSE) - Sampling Methods
const lesson5Slides = ['title', 'donow', 'random_teach', 'random_afl', 'opportunity_teach', 'opportunity_afl', 'systematic_teach', 'systematic_afl', 'stratified_teach', 'stratified_afl', 'sampling_task', 'extended']

// Lesson 6 slides data (GCSE) - Ethical Considerations
const lesson6Slides = ['title', 'donow', 'ethics_teach', 'ethics_teach2', 'ethics_afl', 'ethics_task', 'extended']

// Lesson 7 slides data (GCSE) - Self-Report Methods
const lesson7Slides = ['title', 'donow', 'questionnaire_teach', 'questionnaire_afl', 'interview_teach', 'interview_afl', 'selfreport_task', 'extended']

// Lesson 8 slides data (GCSE) - Observation Studies
const lesson8Slides = ['title', 'donow', 'observation_teach', 'observation_afl', 'observation_task', 'extended']

// Lesson 9 slides data (GCSE) - Correlations
const lesson9Slides = ['title', 'donow', 'correlation_teach', 'correlation_afl', 'correlation_eval', 'correlation_task', 'extended']

// Lesson 10 slides data (GCSE) - Case Studies
const lesson10Slides = ['title', 'donow', 'case_teach', 'case_afl', 'case_task', 'extended']

// Lesson 11 slides data (GCSE) - Reliability & Validity
const lesson11Slides = ['title', 'donow', 'reliability_teach', 'reliability_afl', 'validity_teach', 'validity_afl', 'rel_val_task', 'extended']

// Lesson 12 slides data (GCSE) - Types of Data
const lesson12Slides = ['title', 'donow', 'quant_qual_teach', 'prim_sec_teach', 'data_afl', 'data_task', 'extended']

// Lesson 13 slides data (GCSE) - Descriptive Statistics
const lesson13Slides = ['title', 'donow', 'stats_teach', 'stats_afl', 'stats_task', 'extended']

// Lesson 14 slides data (GCSE) - Graphs & Display
// Lesson 14 slides data (GCSE) - Graphs & Display
const lesson14Slides = ['title', 'donow', 'graphs_teach', 'distribution_teach', 'graphs_afl', 'graphs_task', 'extended']

// Lesson 15 slides data (GCSE) - Computation & Arithmetic
const lesson15Slides = ['title', 'donow', 'maths_teach', 'maths_afl', 'maths_task', 'extended']

// Lesson 16 slides data (AS Level Lesson 1: Experimental Method)
const lesson16Slides: Array<'title' | 'donow' | 'hypo_teach' | 'hypo_sim' | 'hypo_builder' | 'hypo_afl' | 'hypo_task' | 'variables_teach' | 'variables_sim' | 'variables_afl' | 'variables_task' | 'extended'> = [
  'title',
  'donow',
  'hypo_teach',
  'hypo_sim',
  'hypo_builder',
  'hypo_afl',
  'hypo_task',
  'variables_teach',
  'variables_sim',
  'variables_afl',
  'variables_task',
  'extended'
]

// Lesson 17 slides data (AS Level Lesson 2: Control of Variables)
const lesson17Slides = ['title', 'donow', 'ev_teach', 'cv_teach', 'ev_cv_afl', 'demand_teach', 'demand_afl', 'inv_teach', 'control_teach', 'control_afl', 'variable_detective', 'control_task', 'extended']

// Lesson 18 slides data (AS Level Lesson 3: Experimental Design)
const lesson18Slides = ['title', 'donow', 'ig_teach', 'ig_afl', 'rm_teach', 'rm_afl', 'mp_teach', 'mp_afl', 'design_architect', 'design_task', 'extended']

// Lesson 19 slides data (AS Level Lesson 4: Types of Experiment)
const lesson19Slides = ['title', 'donow', 'lab_teach', 'field_teach', 'lab_field_afl', 'natural_teach', 'quasi_teach', 'nat_quasi_afl', 'experiment_sorter', 'types_task', 'extended']

// Lesson 20 slides data (AS Level Lesson 5: Sampling)
const lesson20Slides = ['title', 'donow', 'pop_teach', 'random_teach', 'systematic_teach', 'sampling_afl1', 'stratified_teach', 'opportunity_teach', 'volunteer_teach', 'sampling_afl2', 'sample_simulator', 'sampling_task', 'extended']

// Lesson 21 slides data (AS Level Lesson 6: Ethical Issues)
const lesson21Slides = ['title', 'donow', 'ethics_intro', 'consent_teach', 'deception_teach', 'ethics_afl1', 'protection_teach', 'privacy_teach', 'dealing_teach', 'ethics_afl2', 'ethics_review_board', 'ethics_task', 'extended']

// Lesson 22 slides data (AS Level Lesson 7: Observational Techniques)
const lesson22Slides = ['title', 'donow', 'obs_types_teach', 'covert_teach', 'participant_teach', 'obs_afl1', 'design_teach', 'reliability_teach', 'obs_afl2', 'observer_training', 'obs_task', 'extended']

// Lesson 23 slides data (AS Level Lesson 8: Self-Report Methods)
const lesson23Slides = ['title', 'donow', 'questionnaire_teach', 'questions_teach', 'selfreport_afl1', 'interview_teach', 'design_teach', 'selfreport_afl2', 'question_quality', 'selfreport_task', 'extended']

// Lesson 24 slides data (AS Level Lesson 9: Correlations)
const lesson24Slides = ['title', 'donow', 'correlation_intro', 'types_teach', 'correlation_afl1', 'coefficient_teach', 'difference_teach', 'correlation_afl2', 'correlation_detective', 'correlation_task', 'extended']

// Lesson 25 slides data (AS Level Lesson 10: Kinds of Data)
const lesson25Slides = ['title', 'donow', 'quant_qual_teach', 'data_afl1', 'primary_secondary_teach', 'meta_teach', 'data_afl2', 'data_sorting', 'data_task', 'extended']

// Lesson 26 slides data (AS Level Lesson 11: Descriptive Statistics)
const lesson26Slides = ['title', 'donow', 'central_teach', 'stats_afl1', 'dispersion_teach', 'choosing_teach', 'stats_afl2', 'stats_calculator', 'stats_task', 'extended']

// Lesson 27 slides data (AS Level Lesson 12: Data Presentation)
const lesson27Slides = ['title', 'donow', 'tables_teach', 'graphs_teach', 'graphs_afl1', 'distributions_teach', 'graphs_afl2', 'graph_master', 'graphs_task', 'extended']

// Lesson 28 slides data (AS Level Lesson 13: Mathematical Skills)
const lesson28Slides = ['title', 'donow', 'arithmetic_teach', 'percentages_teach', 'maths_afl1', 'fractions_teach', 'maths_afl2', 'maths_bootcamp', 'maths_task', 'extended']

// Lesson 29 slides data (AS Level Lesson 14: Statistical Testing)
const lesson29Slides = ['title', 'donow', 'probability_teach', 'signtest_teach', 'stats_afl1', 'critical_teach', 'stats_afl2', 'test_selector', 'stats_task', 'extended']

// Lesson 30 slides data (AS Level Lesson 15: Peer Review & Economy)
const lesson30Slides = ['title', 'donow', 'peerreview_teach', 'peerreview_eval_teach', 'peer_afl1', 'economy_teach', 'peer_afl2', 'peer_review_sim', 'peer_task', 'extended']

// ============= A LEVEL LESSON SLIDES (Phase 1: Foundation) =============

// Lesson 31 slides data (A Level Lesson 1: Correlation Analysis)
const lesson31Slides = ['title', 'donow', 'coefficients_teach', 'interpretation_teach', 'correlation_afl1', 'corr_vs_exp_teach', 'correlation_afl2', 'coefficient_interpreter', 'correlation_task', 'extended']

// Lesson 32 slides data (A Level Lesson 2: Case Studies & Content Analysis)
const lesson32Slides = ['title', 'donow', 'casestudy_teach', 'casestudy_eval_teach', 'case_afl1', 'content_teach', 'thematic_teach', 'content_afl2', 'content_coder', 'analysis_task', 'extended']

// Lesson 33 slides data (A Level Lesson 3: Reliability)
const lesson33Slides = ['title', 'donow', 'reliability_intro_teach', 'testretest_teach', 'reliability_afl1', 'interobserver_teach', 'improving_reliability_teach', 'reliability_afl2', 'reliability_assessor', 'reliability_task', 'extended']

// Lesson 34 slides data (A Level Lesson 4: Validity)
const lesson34Slides = ['title', 'donow', 'validity_types_teach', 'face_concurrent_teach', 'validity_afl1', 'ecological_temporal_teach', 'improving_validity_teach', 'validity_afl2', 'validity_checker', 'validity_task', 'extended']

// Lesson 35 slides data (A Level Lesson 5: Choosing a Statistical Test)
const lesson35Slides = ['title', 'donow', 'test_factors_teach', 'levels_measurement_teach', 'choosing_afl1', 'test_flowchart_teach', 'choosing_afl2', 'test_selector_sim', 'choosing_task', 'extended']

// Lesson 36 slides data (A Level Lesson 6: Probability & Significance)
const lesson36Slides = ['title', 'donow', 'probability_teach', 'significance_teach', 'prob_afl1', 'critical_values_teach', 'type_errors_teach', 'prob_afl2', 'significance_calculator', 'probability_task', 'extended']

// Lesson 37 slides data (A Level Lesson 7: Non-Parametric Tests)
const lesson37Slides = ['title', 'donow', 'mannwhitney_teach', 'mannwhitney_calc_teach', 'nonparam_afl1', 'wilcoxon_teach', 'wilcoxon_calc_teach', 'nonparam_afl2', 'test_calculator', 'nonparam_task', 'extended']

// Lesson 38 slides data (A Level Lesson 8: Parametric Tests)
const lesson38Slides = ['title', 'donow', 'param_assumptions_teach', 'unrelated_t_teach', 'param_afl1', 'related_t_teach', 'param_afl2', 'ttest_calculator', 'param_task', 'extended']

// Lesson 39 slides data (A Level Lesson 9: Tests of Correlation)
const lesson39Slides = ['title', 'donow', 'spearmans_teach', 'spearmans_calc_teach', 'corr_test_afl1', 'pearsons_teach', 'pearsons_calc_teach', 'corr_test_afl2', 'correlation_calculator', 'corr_test_task', 'extended']

// Lesson 40 slides data (A Level Lesson 10: Chi-Squared Test)
const lesson40Slides = ['title', 'donow', 'chisquared_intro_teach', 'observed_expected_teach', 'chi_afl1', 'chisquared_calc_teach', 'chi_afl2', 'chisquared_calculator', 'chi_task', 'extended']

// Lesson 41 slides data (A Level Lesson 11: Reporting Investigations)
const lesson41Slides = ['title', 'donow', 'report_structure_teach', 'abstract_intro_teach', 'report_afl1', 'method_results_teach', 'discussion_refs_teach', 'report_afl2', 'report_builder', 'report_task', 'extended']

// Lesson 42 slides data (A Level Lesson 12: Features of Science)
const lesson42Slides = ['title', 'donow', 'objectivity_teach', 'replicability_teach', 'science_afl1', 'falsifiability_teach', 'paradigms_teach', 'science_afl2', 'science_evaluator', 'science_task', 'extended']

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentLesson, setCurrentLesson] = useState(1)
  const [isSidebarOpen, setSidebarOpen] = useState(true)
  const [level, setLevel] = useState<'gcse' | 'aslevel' | 'alevel'>('gcse')
  const [isPresenting, setIsPresenting] = useState(false)

  const slideCount = lessonSlideCounts[currentLesson] || 5

  // Theme configuration based on level
  const themeColors = {
    gcse: {
      primary: 'green',
      bg: 'bg-green-600',
      bgHover: 'hover:bg-green-500',
      bgLight: 'bg-green-900/10',
      border: 'border-green-500',
      text: 'text-green-400',
      textDark: 'text-green-300',
      shadowColor: 'shadow-green-600/20',
      gradientFrom: 'from-green-800',
      gradientTo: 'to-green-500',
      buttonBg: 'bg-green-600',
      buttonBgHover: 'hover:bg-green-500',
      sideBg: 'bg-green-500/5',
      progressBar: 'from-green-800 to-green-500',
      accentBorder: 'border-green-500/50',
    },
    aslevel: {
      primary: 'red',
      bg: 'bg-rose-600',
      bgHover: 'hover:bg-rose-500',
      bgLight: 'bg-rose-900/10',
      border: 'border-rose-500',
      text: 'text-rose-400',
      textDark: 'text-rose-300',
      shadowColor: 'shadow-rose-600/20',
      gradientFrom: 'from-rose-800',
      gradientTo: 'to-rose-500',
      buttonBg: 'bg-rose-600',
      buttonBgHover: 'hover:bg-rose-500',
      sideBg: 'bg-rose-500/5',
      progressBar: 'from-rose-800 to-rose-500',
      accentBorder: 'border-rose-500/50',
    },
    alevel: {
      primary: 'indigo',
      bg: 'bg-indigo-600',
      bgHover: 'hover:bg-indigo-500',
      bgLight: 'bg-indigo-900/10',
      border: 'border-indigo-500',
      text: 'text-indigo-400',
      textDark: 'text-indigo-300',
      shadowColor: 'shadow-indigo-600/20',
      gradientFrom: 'from-indigo-800',
      gradientTo: 'to-indigo-500',
      buttonBg: 'bg-indigo-600',
      buttonBgHover: 'hover:bg-indigo-500',
      sideBg: 'bg-indigo-500/5',
      progressBar: 'from-indigo-800 to-indigo-500',
      accentBorder: 'border-indigo-500/50',
    }
  }

  const theme = themeColors[level]

  const nextSlide = () => {
    if (currentSlide < slideCount - 1) setCurrentSlide(currentSlide + 1)
  }

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1)
  }

  // Toggle presentation mode with fullscreen - exact logic from Relationships repo
  const togglePresentation = () => {
    if (!isPresenting) {
      if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(() => null);
      setSidebarOpen(false);
      setIsPresenting(true);
    } else {
      if (document.exitFullscreen && document.fullscreenElement) document.exitFullscreen().catch(() => null);
      setIsPresenting(false);
    }
  }

  // Keyboard shortcuts for presentation mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // P or p to toggle presentation (Ctrl+P)
      if ((e.key === 'p' || e.key === 'P') && e.ctrlKey) {
        e.preventDefault()
        togglePresentation()
      }
      // ESC to exit presentation with fullscreen exit
      if (e.key === 'Escape' && isPresenting) {
        if (document.exitFullscreen && document.fullscreenElement) document.exitFullscreen().catch(() => null);
        setIsPresenting(false)
      }
      // S to toggle sidebar in presentation
      if ((e.key === 's' || e.key === 'S') && isPresenting) {
        setSidebarOpen(prev => !prev)
      }
      // Arrow keys for navigation in presentation
      if (isPresenting) {
        if (e.key === 'ArrowRight' && currentSlide < slideCount - 1) {
          setCurrentSlide(currentSlide + 1)
        }
        if (e.key === 'ArrowLeft' && currentSlide > 0) {
          setCurrentSlide(currentSlide - 1)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isPresenting, currentSlide, slideCount])

  // Reset to first lesson when switching levels
  useEffect(() => {
    const firstLessonForLevel = getActiveLessons(level)[0]
    if (firstLessonForLevel) {
      setCurrentLesson(firstLessonForLevel.id)
      setCurrentSlide(0)
    }
  }, [level])

  const handleLessonChange = (lessonId: number) => {
    setCurrentLesson(lessonId)
    setCurrentSlide(0)
  }

  // Render Lesson 1 content
  const renderLesson1 = () => {
    const slideType = lesson1Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={1}
          title="Hypotheses and Variables"
          subtitle="Formulating testable predictions"
          objectives={[
            "Define and distinguish between IV and DV",
            "Write operationalised hypotheses",
            "Understand null vs alternative hypotheses"
          ]}
          isPresenting={isPresenting}
          level="GCSE"
        />
      )
    }

    if (slideType === 'donow') {
      const doNowQuestions: Question[] = [
        {
          id: 1,
          question: "What does 'objective' mean?",
          options: ["Based on opinion", "Based on measurable fact", "Based on feelings"],
          correct: 1
        },
        {
          id: 2,
          question: "A 'theory' in psychology is...",
          options: ["A complete guess", "A proven fact", "A suggested explanation for behaviour"],
          correct: 2
        },
        {
          id: 3,
          question: "Which measurement is most scientific?",
          options: ["'It felt cold'", "'It was 4°C'", "'It was freezing'"],
          correct: 1
        },
        {
          id: 4,
          question: "Why do we repeat experiments?",
          options: ["To check reliability", "To waste time", "To make it harder"],
          correct: 0
        },
        {
          id: 5,
          question: "Prediction is a key part of science. True or False?",
          options: ["True", "False"],
          correct: 0
        }
      ]

      return <DoNowQuiz questions={doNowQuestions} isPresenting={isPresenting} />
    }

    if (slideType === 'hypo_teach') {
      return <HypothesisTeachSlide isPresenting={isPresenting} />
    }

    if (slideType === 'hypo_sim') {
      return <HypothesisLab />
    }

    if (slideType === 'hypo_builder') {
      return <HypothesisBuilderLab isPresenting={isPresenting} />
    }

    if (slideType === 'hypo_afl') {
      const questions: Question[] = [
        {
          id: 1,
          scenario: "A study tests if Red Bull improves reaction time compared to water.",
          question: "What is the IV?",
          options: ["Reaction Speed", "Type of Drink", "Participants"],
          correct: 1
        },
        {
          id: 2,
          scenario: "Music study: Does background music affect memory recall?",
          question: "What is the DV?",
          options: ["The music played", "Number of words remembered", "Time of day"],
          correct: 1
        },
        {
          id: 3,
          scenario: "Testing phone notifications and concentration.",
          question: "Which is an extraneous variable?",
          options: ["Phone notifications (IV)", "Focus time (DV)", "Prior anxiety levels"],
          correct: 2
        }
      ]

      return <SplitKnowledgeCheck questions={questions} title="Quick Check: Hypotheses & Variables" subtitle="Identify IV, DV & Extraneous Variables" isPresenting={isPresenting} />
    }

    if (slideType === 'hypo_task') {
      return <HypothesisWriterGCSE isPresenting={isPresenting} />
    }

    if (slideType === 'variables_teach') {
      return <VariablesTeachSlide isPresenting={isPresenting} />
    }

    if (slideType === 'variables_sim') {
      return <VariableLab isPresenting={isPresenting} />
    }

    if (slideType === 'variables_afl') {
      const questions: Question[] = [
        {
          id: 1,
          question: 'In the music study, what is being manipulated?',
          options: ['The test score', 'Music vs silence', 'Time of day', 'Teacher style'],
          correct: 1
        },
        {
          id: 2,
          question: 'What is the dependent variable in the music study?',
          options: ['Number of participants', 'Music vs silence', 'Words remembered / test score', 'Study room'],
          correct: 2
        },
        {
          id: 3,
          question: 'Which is an extraneous variable we should control?',
          options: ['Prior knowledge of the material', 'Number of groups', 'Presence of DV', 'Using hypotheses'],
          correct: 0
        },
        {
          id: 4,
          question: 'Why control extraneous variables?',
          options: ['To make it more fun', 'To keep the test fair and valid', 'To reduce sample size', 'To make it longer'],
          correct: 1
        }
      ]

      return <SplitKnowledgeCheck questions={questions} title="Quick Quiz: Variables" subtitle="IV vs DV vs Extraneous" isPresenting={isPresenting} />
    }

    if (slideType === 'variables_task') {
      return <VariableDetective isPresenting={isPresenting} />
    }

    if (slideType === 'extended') {
      return <ExtendedExamTask isPresenting={isPresenting} />
    }

    return <div>Loading...</div>
  }

  // Render Lesson 2 content (GCSE: Extraneous Variables)
  const renderLesson2 = () => {
    const slideType = lesson2Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={2}
          title="Extraneous Variables"
          subtitle="Controlling unwanted variables"
          objectives={[
            "Identify extraneous variables in studies",
            "Explain how EVs can confound results",
            "Describe control methods: standardisation & randomisation"
          ]}
          isPresenting={isPresenting}
          level="GCSE"
        />
      )
    }

    if (slideType === 'donow') {
      const doNowQuestions: Question[] = [
        {
          id: 1,
          question: "The variable the experimenter CHANGES is called the...",
          options: ["Dependent Variable", "Independent Variable", "Extraneous Variable"],
          correct: 1
        },
        {
          id: 2,
          question: "The variable the experimenter MEASURES is the...",
          options: ["Independent Variable", "Dependent Variable", "Control Variable"],
          correct: 1
        },
        {
          id: 3,
          question: "Making a variable measurable (e.g. 'performance' → 'score out of 10') is called...",
          options: ["Hypothesising", "Operationalisation", "Standardisation"],
          correct: 1
        },
        {
          id: 4,
          question: "What does a NULL hypothesis predict?",
          options: ["A significant difference", "No significant difference", "A positive relationship"],
          correct: 1
        },
        {
          id: 5,
          question: "An alternative hypothesis predicts...",
          options: ["No effect", "A measurable difference or relationship", "Random results"],
          correct: 1
        }
      ]

      return <DoNowQuiz questions={doNowQuestions} isPresenting={isPresenting} />
    }

    if (slideType === 'ev_teach') {
      return <EVTeachSlide isPresenting={isPresenting} />
    }

    if (slideType === 'evtypes_teach') {
      return <EVTypesTeachSlide isPresenting={isPresenting} />
    }

    if (slideType === 'evtypes_afl') {
      const questions: Question[] = [
        {
          id: 1,
          scenario: "The room where Group A is tested is much noisier than Group B's room.",
          question: "What TYPE of extraneous variable is this?",
          options: ["Situational Variable", "Participant Variable", "Experimenter Effect"],
          correct: 0
        },
        {
          id: 2,
          scenario: "Group A happens to have more intelligent participants than Group B.",
          question: "What TYPE of extraneous variable is this?",
          options: ["Situational Variable", "Participant Variable", "Experimenter Effect"],
          correct: 1
        },
        {
          id: 3,
          scenario: "The researcher is friendlier to participants in the experimental condition.",
          question: "What TYPE of extraneous variable is this?",
          options: ["Situational Variable", "Participant Variable", "Experimenter Effect"],
          correct: 2
        }
      ]

      return <SplitKnowledgeCheck questions={questions} title="Quick Check: EV Types" subtitle="Identify the type of extraneous variable" isPresenting={isPresenting} />
    }

    if (slideType === 'evtypes_task') {
      return <EVTypesTask isPresenting={isPresenting} />
    }

    if (slideType === 'control_teach') {
      return <ControlMethodsTeachSlide isPresenting={isPresenting} />
    }

    if (slideType === 'control_afl') {
      const questions: Question[] = [
        {
          id: 1,
          scenario: "Participants in Condition A are tested in a noisy room while Condition B is tested in quiet.",
          question: "Which control method would help?",
          options: ["Random Allocation", "Standardised Procedures", "Counterbalancing"],
          correct: 1
        },
        {
          id: 2,
          scenario: "One group has mostly high-ability students while the other has mostly low-ability students.",
          question: "Which control method would help?",
          options: ["Random Allocation", "Standardised Procedures", "Using a script"],
          correct: 0
        },
        {
          id: 3,
          scenario: "The researcher smiles more at participants in the experimental condition.",
          question: "Which control method would help?",
          options: ["Random Allocation", "Counterbalancing", "Standardised Instructions"],
          correct: 2
        },
        {
          id: 4,
          scenario: "In a repeated measures design, participants always do Condition A first and get tired before Condition B.",
          question: "Which control method would help?",
          options: ["Random Allocation", "Standardised Procedures", "Counterbalancing"],
          correct: 2
        }
      ]

      return <SplitKnowledgeCheck questions={questions} title="Quick Check: Control Methods" subtitle="Match the correct control method" isPresenting={isPresenting} />
    }

    if (slideType === 'control_task') {
      return <ControlMethodsDesignTask isPresenting={isPresenting} />
    }

    if (slideType === 'extended') {
      return <Lesson2ExtendedExamTask isPresenting={isPresenting} />
    }

    return <div>Loading...</div>
  }

  // Render Lesson 3 content (GCSE: Types of Experiment)
  const renderLesson3 = () => {
    const slideType = lesson3Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={3}
          title="Types of Experiment"
          subtitle="Lab, field and natural experiments"
          objectives={[
            "Describe lab, field and natural experiments",
            "Evaluate strengths and limitations of each",
            "Choose appropriate experiment types for scenarios"
          ]}
          isPresenting={isPresenting}
          level="GCSE"
        />
      )
    }

    if (slideType === 'donow') {
      const doNowQuestions: Question[] = [
        {
          id: 1,
          question: "What is an extraneous variable?",
          options: ["The variable you measure", "The variable you change", "An unwanted variable that could affect results"],
          correct: 2
        },
        {
          id: 2,
          question: "Which type of EV relates to the research environment?",
          options: ["Participant Variable", "Situational Variable", "Experimenter Effect"],
          correct: 1
        },
        {
          id: 3,
          question: "Random allocation helps control...",
          options: ["Situational variables", "Participant variables", "Demand characteristics"],
          correct: 1
        },
        {
          id: 4,
          question: "Standardised procedures help ensure...",
          options: ["More participants sign up", "All participants experience the same conditions", "Results are unexpected"],
          correct: 1
        },
        {
          id: 5,
          question: "When half the participants do Condition A first and half do B first, this is called...",
          options: ["Random allocation", "Counterbalancing", "Standardisation"],
          correct: 1
        }
      ]
      return <DoNowQuiz questions={doNowQuestions} isPresenting={isPresenting} />
    }

    if (slideType === 'lab_teach') {
      return <LabExperimentTeachSlide isPresenting={isPresenting} />
    }

    if (slideType === 'lab_afl') {
      return <LabExperimentAFL isPresenting={isPresenting} />
    }

    if (slideType === 'field_teach') {
      return <FieldExperimentTeachSlide isPresenting={isPresenting} />
    }

    if (slideType === 'field_afl') {
      return <FieldExperimentAFL isPresenting={isPresenting} />
    }

    if (slideType === 'natural_teach') {
      return <NaturalExperimentTeachSlide isPresenting={isPresenting} />
    }

    if (slideType === 'natural_afl') {
      return <NaturalExperimentAFL isPresenting={isPresenting} />
    }

    if (slideType === 'comparison_task') {
      return <ExperimentComparisonTask isPresenting={isPresenting} />
    }

    if (slideType === 'extended') {
      return <Lesson3ExtendedExamTask isPresenting={isPresenting} />
    }

    return <div>Loading...</div>
  }

  // Render Lesson 4 content (GCSE: Experimental Designs)
  const renderLesson4 = () => {
    const slideType = lesson4Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={4}
          title="Experimental Designs"
          subtitle="How participants are allocated"
          objectives={[
            "Explain independent groups, repeated measures & matched pairs",
            "Evaluate strengths and weaknesses of each design",
            "Understand counterbalancing"
          ]}
          isPresenting={isPresenting}
          level="GCSE"
        />
      )
    }

    if (slideType === 'donow') {
      const doNowQuestions: Question[] = [
        {
          id: 1,
          question: "In a lab experiment, the IV is...",
          options: ["Naturally occurring", "Manipulated by the researcher", "Not controlled"],
          correct: 1
        },
        {
          id: 2,
          question: "Which experiment type has the highest ecological validity?",
          options: ["Lab experiment", "Field experiment", "Natural experiment"],
          correct: 1
        },
        {
          id: 3,
          question: "In a natural experiment, the IV...",
          options: ["Is manipulated by the researcher", "Occurs naturally", "Is the same as the DV"],
          correct: 1
        },
        {
          id: 4,
          question: "A strength of lab experiments is...",
          options: ["High ecological validity", "High control over variables", "Natural behaviour"],
          correct: 1
        },
        {
          id: 5,
          question: "Field experiments take place in...",
          options: ["A controlled laboratory", "A natural environment", "A virtual setting"],
          correct: 1
        }
      ]
      return <DoNowQuiz questions={doNowQuestions} isPresenting={isPresenting} />
    }

    if (slideType === 'ig_teach') {
      return <IndependentGroupsTeachSlide isPresenting={isPresenting} />
    }

    if (slideType === 'ig_afl') {
      return <IndependentGroupsAFL isPresenting={isPresenting} />
    }

    if (slideType === 'rm_teach') {
      return <RepeatedMeasuresTeachSlide isPresenting={isPresenting} />
    }

    if (slideType === 'rm_afl') {
      return <RepeatedMeasuresAFL isPresenting={isPresenting} />
    }

    if (slideType === 'mp_teach') {
      return <MatchedPairsTeachSlide isPresenting={isPresenting} />
    }

    if (slideType === 'mp_afl') {
      return <MatchedPairsAFL isPresenting={isPresenting} />
    }

    if (slideType === 'design_task') {
      return <DesignChoiceTask isPresenting={isPresenting} />
    }

    if (slideType === 'extended') {
      return <Lesson4ExtendedExamTask isPresenting={isPresenting} />
    }

    return <div>Loading...</div>
  }

  // Render Lesson 5 content (GCSE: Sampling Methods)
  const renderLesson5 = () => {
    const slideType = lesson5Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={5}
          title="Sampling Methods"
          subtitle="Selecting participants"
          objectives={[
            "Describe random, opportunity, systematic & stratified sampling",
            "Evaluate strengths and limitations of each method",
            "Understand representative samples"
          ]}
          isPresenting={isPresenting}
          level="GCSE"
        />
      )
    }

    if (slideType === 'donow') {
      const doNowQuestions: Question[] = [
        {
          id: 1,
          question: "In independent groups design, participants experience...",
          options: ["All conditions", "One condition only", "Two conditions"],
          correct: 1
        },
        {
          id: 2,
          question: "What is the main problem with repeated measures?",
          options: ["Participant variables", "Order effects", "Too expensive"],
          correct: 1
        },
        {
          id: 3,
          question: "Matched pairs design involves...",
          options: ["Same person doing all conditions", "Matching participants on key variables", "Randomly selecting anyone"],
          correct: 1
        },
        {
          id: 4,
          question: "Counterbalancing helps control...",
          options: ["Participant variables", "Order effects", "Experimenter effects"],
          correct: 1
        },
        {
          id: 5,
          question: "Which design needs the most participants?",
          options: ["Repeated measures", "Independent groups", "Matched pairs"],
          correct: 1
        }
      ]
      return <DoNowQuiz questions={doNowQuestions} isPresenting={isPresenting} />
    }

    if (slideType === 'random_teach') {
      return <RandomSamplingTeachSlide isPresenting={isPresenting} />
    }

    if (slideType === 'random_afl') {
      return <RandomSamplingAFL isPresenting={isPresenting} />
    }

    if (slideType === 'opportunity_teach') {
      return <OpportunitySamplingTeachSlide isPresenting={isPresenting} />
    }

    if (slideType === 'opportunity_afl') {
      return <OpportunitySamplingAFL isPresenting={isPresenting} />
    }

    if (slideType === 'systematic_teach') {
      return <SystematicSamplingTeachSlide isPresenting={isPresenting} />
    }

    if (slideType === 'systematic_afl') {
      return <SystematicSamplingAFL isPresenting={isPresenting} />
    }

    if (slideType === 'stratified_teach') {
      return <StratifiedSamplingTeachSlide isPresenting={isPresenting} />
    }

    if (slideType === 'stratified_afl') {
      return <StratifiedSamplingAFL isPresenting={isPresenting} />
    }

    if (slideType === 'sampling_task') {
      return <SamplingComparisonTask isPresenting={isPresenting} />
    }

    if (slideType === 'extended') {
      return <Lesson5ExtendedExamTask isPresenting={isPresenting} />
    }

    return <div>Loading...</div>
  }

  // Render Lesson 6 content (GCSE: Ethical Considerations)
  const renderLesson6 = () => {
    const slideType = lesson6Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={6}
          title="Ethical Considerations"
          subtitle="Conducting research responsibly"
          objectives={[
            "Explain key ethical issues: consent, deception, harm, privacy",
            "Describe BPS guidelines and their purpose",
            "Apply ethical principles to research scenarios"
          ]}
          isPresenting={isPresenting}
          level="GCSE"
        />
      )
    }

    if (slideType === 'donow') {
      const doNowQuestions: Question[] = [
        {
          id: 1,
          question: "Random sampling means...",
          options: ["Selecting the first people you find", "Everyone has an equal chance of selection", "Selecting every 10th person"],
          correct: 1
        },
        {
          id: 2,
          question: "Which sampling method is quickest and easiest?",
          options: ["Random", "Stratified", "Opportunity"],
          correct: 2
        },
        {
          id: 3,
          question: "Stratified sampling ensures...",
          options: ["The cheapest method", "Proportional representation of subgroups", "The fastest data collection"],
          correct: 1
        },
        {
          id: 4,
          question: "A limitation of opportunity sampling is...",
          options: ["It takes too long", "The sample may not be representative", "It needs too many resources"],
          correct: 1
        },
        {
          id: 5,
          question: "In systematic sampling, the first person is selected...",
          options: ["By the researcher's choice", "Alphabetically", "Randomly"],
          correct: 2
        }
      ]
      return <DoNowQuiz questions={doNowQuestions} isPresenting={isPresenting} />
    }

    if (slideType === 'ethics_teach') {
      return <InformedConsentTeachSlide isPresenting={isPresenting} />
    }

    if (slideType === 'ethics_teach2') {
      return <EthicsTeachSlide2 isPresenting={isPresenting} />
    }

    if (slideType === 'ethics_afl') {
      return <EthicsAFL isPresenting={isPresenting} />
    }

    if (slideType === 'ethics_task') {
      return <EthicsDesignTask isPresenting={isPresenting} />
    }

    if (slideType === 'extended') {
      return <Lesson6ExtendedExamTask isPresenting={isPresenting} />
    }

    return <div>Loading...</div>
  }

  // Render Lesson 7 content (Self-Report Methods)
  const renderLesson7 = () => {
    const slideType = lesson7Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={7}
          title="Self-Report Methods"
          subtitle="Questionnaires and interviews"
          objectives={[
            "Distinguish open and closed questions",
            "Compare structured, semi-structured & unstructured interviews",
            "Evaluate strengths and limitations of self-report methods"
          ]}
          isPresenting={isPresenting}
          level="GCSE"
        />
      )
    }

    if (slideType === 'donow') {
      const doNowQuestions: Question[] = [
        {
          id: 1,
          question: "BPS guidelines state participants must give...",
          options: ["Informed consent", "Their phone number", "A blood sample"],
          correct: 0
        },
        {
          id: 2,
          question: "Debriefing happens...",
          options: ["Before the study", "During the study", "After the study"],
          correct: 2
        },
        {
          id: 3,
          question: "Participants should always be able to...",
          options: ["Win a prize", "Withdraw at any time", "Meet the researcher's boss"],
          correct: 1
        },
        {
          id: 4,
          question: "Keeping participant data anonymous protects...",
          options: ["The researcher", "Confidentiality", "Equipment"],
          correct: 1
        },
        {
          id: 5,
          question: "Protection from harm means...",
          options: ["No physical or psychological risk beyond everyday life", "Free safety equipment", "Insurance coverage"],
          correct: 0
        }
      ]
      return <DoNowQuiz questions={doNowQuestions} isPresenting={isPresenting} />
    }

    if (slideType === 'questionnaire_teach') {
      return <QuestionnairesTeachSlide isPresenting={isPresenting} />
    }

    if (slideType === 'questionnaire_afl') {
      return <QuestionnairesAFL isPresenting={isPresenting} />
    }

    if (slideType === 'interview_teach') {
      return <InterviewsTeachSlide isPresenting={isPresenting} />
    }

    if (slideType === 'interview_afl') {
      return <InterviewsAFL isPresenting={isPresenting} />
    }

    if (slideType === 'selfreport_task') {
      return <SelfReportDesignTask isPresenting={isPresenting} />
    }

    if (slideType === 'extended') {
      return <Lesson7ExtendedExamTask isPresenting={isPresenting} />
    }

    return <div>Loading...</div>
  }

  // Render Lesson 8 content (Observations)
  const renderLesson8 = () => {
    const slideType = lesson8Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={8}
          title="Observation Studies"
          subtitle="Watching and recording behaviour"
          objectives={[
            "Distinguish naturalistic and controlled observations",
            "Explain covert vs overt and participant vs non-participant",
            "Understand behavioural categories and inter-observer reliability"
          ]}
          isPresenting={isPresenting}
          level="GCSE"
        />
      )
    }

    if (slideType === 'donow') {
      const doNowQuestions: Question[] = [
        {
          id: 1,
          question: "Questionnaires collect data using...",
          options: ["Interviews", "Written questions", "Blood tests"],
          correct: 1
        },
        {
          id: 2,
          question: "'Rate from 1-10' is an example of...",
          options: ["Open question", "Closed question", "Leading question"],
          correct: 1
        },
        {
          id: 3,
          question: "Which interview type has no predetermined questions?",
          options: ["Structured", "Unstructured", "Semi-structured"],
          correct: 1
        },
        {
          id: 4,
          question: "A strength of questionnaires is...",
          options: ["Can gather lots of data quickly", "High response rate", "No social desirability"],
          correct: 0
        },
        {
          id: 5,
          question: "Interviewer bias means...",
          options: ["The interviewer is unfair", "The interviewer influences responses", "The interviewer forgets questions"],
          correct: 1
        }
      ]
      return <DoNowQuiz questions={doNowQuestions} isPresenting={isPresenting} />
    }

    if (slideType === 'observation_teach') {
      return <ObservationsTeachSlide isPresenting={isPresenting} />
    }

    if (slideType === 'observation_afl') {
      return <ObservationsAFL isPresenting={isPresenting} />
    }

    if (slideType === 'observation_task') {
      return <ObservationDesignTask isPresenting={isPresenting} />
    }

    if (slideType === 'extended') {
      return <Lesson8ExtendedExamTask isPresenting={isPresenting} />
    }

    return <div>Loading...</div>
  }

  // Render Lesson 9 content (GCSE: Correlations)
  const renderLesson9 = () => {
    const slideType = lesson9Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={9}
          title="Correlations"
          subtitle="Relationships between variables"
          objectives={[
            "Understand positive, negative and zero correlations",
            "Interpret scatter diagrams",
            "Explain why correlation ≠ causation"
          ]}
          isPresenting={isPresenting}
          level="GCSE"
        />
      )
    }

    if (slideType === 'donow') {
      const doNowQuestions: Question[] = [
        {
          id: 1,
          question: "A naturalistic observation takes place in...",
          options: ["A laboratory", "A real-life setting", "An interview room"],
          correct: 1
        },
        {
          id: 2,
          question: "Covert observation means...",
          options: ["Participants know they're being watched", "Participants don't know they're being watched", "The observer participates"],
          correct: 1
        },
        {
          id: 3,
          question: "Inter-observer reliability checks if...",
          options: ["Participants are reliable", "Two observers record similar data", "Equipment works properly"],
          correct: 1
        },
        {
          id: 4,
          question: "A limitation of covert observation is...",
          options: ["Low ecological validity", "Ethical concerns about consent", "Too expensive"],
          correct: 1
        },
        {
          id: 5,
          question: "Behavioural categories help observers to...",
          options: ["Recruit participants", "Record behaviour systematically", "Design experiments"],
          correct: 1
        }
      ]
      return <DoNowQuiz questions={doNowQuestions} isPresenting={isPresenting} />
    }

    if (slideType === 'correlation_teach') {
      return <CorrelationsTeachSlide isPresenting={isPresenting} />
    }

    if (slideType === 'correlation_afl') {
      return <CorrelationsAFL isPresenting={isPresenting} />
    }

    if (slideType === 'correlation_eval') {
      return <CorrelationsEvalTeachSlide isPresenting={isPresenting} />
    }

    if (slideType === 'correlation_task') {
      return <CorrelationIdentifyTask isPresenting={isPresenting} />
    }

    if (slideType === 'extended') {
      return <Lesson9ExtendedExamTask isPresenting={isPresenting} />
    }

    return <div>Loading...</div>
  }

  // Render Lesson 10 content (GCSE: Case Studies)
  const renderLesson10 = () => {
    const slideType = lesson10Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={10}
          title="Case Studies"
          subtitle="In-depth investigation of individuals"
          objectives={[
            "Define case studies and their features",
            "Explain when case studies are appropriate",
            "Evaluate strengths and limitations of case studies"
          ]}
          isPresenting={isPresenting}
          level="GCSE"
        />
      )
    }

    if (slideType === 'donow') {
      const doNowQuestions: Question[] = [
        {
          id: 1,
          question: "A positive correlation means...",
          options: ["Both variables increase together", "One increases, other decreases", "No relationship"],
          correct: 0
        },
        {
          id: 2,
          question: "Correlations are displayed using a...",
          options: ["Bar chart", "Scatter diagram", "Pie chart"],
          correct: 1
        },
        {
          id: 3,
          question: "A correlation CANNOT tell us...",
          options: ["If variables are related", "Cause and effect", "Direction of relationship"],
          correct: 1
        },
        {
          id: 4,
          question: "Variables in a correlation are called...",
          options: ["IV and DV", "Co-variables", "Control variables"],
          correct: 1
        },
        {
          id: 5,
          question: "If more exercise = less stress, this is a...",
          options: ["Positive correlation", "Negative correlation", "Zero correlation"],
          correct: 1
        }
      ]
      return <DoNowQuiz questions={doNowQuestions} isPresenting={isPresenting} />
    }

    if (slideType === 'case_teach') {
      return <CaseStudiesTeachSlide isPresenting={isPresenting} />
    }

    if (slideType === 'case_afl') {
      return <CaseStudiesAFL isPresenting={isPresenting} />
    }

    if (slideType === 'case_task') {
      return <CaseStudyTask isPresenting={isPresenting} />
    }

    if (slideType === 'extended') {
      return <Lesson10ExtendedExamTask isPresenting={isPresenting} />
    }

    return <div>Loading...</div>
  }

  // Render Lesson 11 content (GCSE: Reliability & Validity)
  const renderLesson11 = () => {
    const slideType = lesson11Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={11}
          title="Reliability & Validity"
          subtitle="Consistency and accuracy in research"
          objectives={[
            "Define reliability and how to test it",
            "Explain internal and ecological validity",
            "Identify threats to reliability and validity"
          ]}
          isPresenting={isPresenting}
          level="GCSE"
        />
      )
    }

    if (slideType === 'donow') {
      const doNowQuestions: Question[] = [
        {
          id: 1,
          question: "Case studies involve...",
          options: ["Large samples", "In-depth study of one individual/group", "Only quantitative data"],
          correct: 1
        },
        {
          id: 2,
          question: "A strength of case studies is...",
          options: ["Easy to generalise", "Rich, detailed data", "High reliability"],
          correct: 1
        },
        {
          id: 3,
          question: "HM and Phineas Gage are examples of...",
          options: ["Experiments", "Case studies", "Surveys"],
          correct: 1
        },
        {
          id: 4,
          question: "A limitation of case studies is...",
          options: ["Too much data", "Cannot generalise findings", "Too many participants"],
          correct: 1
        },
        {
          id: 5,
          question: "Case studies often use...",
          options: ["Only experiments", "Multiple methods", "Only questionnaires"],
          correct: 1
        }
      ]
      return <DoNowQuiz questions={doNowQuestions} isPresenting={isPresenting} />
    }

    if (slideType === 'reliability_teach') {
      return <ReliabilityTeachSlide isPresenting={isPresenting} />
    }

    if (slideType === 'reliability_afl') {
      return <ReliabilityAFL isPresenting={isPresenting} />
    }

    if (slideType === 'validity_teach') {
      return <ValidityTeachSlide isPresenting={isPresenting} />
    }

    if (slideType === 'validity_afl') {
      return <ValidityAFL isPresenting={isPresenting} />
    }

    if (slideType === 'rel_val_task') {
      return <ReliabilityValidityTask isPresenting={isPresenting} />
    }

    if (slideType === 'extended') {
      return <Lesson11ExtendedExamTask isPresenting={isPresenting} />
    }

    return <div>Loading...</div>
  }

  // Render Lesson 12 content (GCSE: Types of Data)
  const renderLesson12 = () => {
    const slideType = lesson12Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={12}
          title="Types of Data"
          subtitle="Quantitative, qualitative, primary & secondary"
          objectives={[
            "Distinguish quantitative and qualitative data",
            "Explain primary vs secondary data",
            "Evaluate strengths and limitations of each type"
          ]}
          isPresenting={isPresenting}
          level="GCSE"
        />
      )
    }

    if (slideType === 'donow') {
      const doNowQuestions: Question[] = [
        {
          id: 1,
          question: "Reliability refers to...",
          options: ["Whether results are true", "Consistency of measurement", "The sample size"],
          correct: 1
        },
        {
          id: 2,
          question: "Test-retest is used to check...",
          options: ["Validity", "Reliability", "Ethics"],
          correct: 1
        },
        {
          id: 3,
          question: "Ecological validity means...",
          options: ["Results apply to real life", "Results are consistent", "Results are ethical"],
          correct: 0
        },
        {
          id: 4,
          question: "What threatens internal validity?",
          options: ["Large samples", "Extraneous variables", "Good controls"],
          correct: 1
        },
        {
          id: 5,
          question: "Inter-observer reliability involves...",
          options: ["Testing twice", "Two observers comparing", "Asking participants"],
          correct: 1
        }
      ]
      return <DoNowQuiz questions={doNowQuestions} isPresenting={isPresenting} />
    }

    if (slideType === 'quant_qual_teach') {
      return <DataTypesTeachSlide isPresenting={isPresenting} />
    }

    if (slideType === 'prim_sec_teach') {
      return <PrimarySecondaryTeachSlide isPresenting={isPresenting} />
    }

    if (slideType === 'data_afl') {
      return <DataTypesAFL isPresenting={isPresenting} />
    }

    if (slideType === 'data_task') {
      return <DataTypesTask isPresenting={isPresenting} />
    }

    if (slideType === 'extended') {
      return <Lesson12ExtendedExamTask isPresenting={isPresenting} />
    }

    return <div>Loading...</div>
  }

  // Render Lesson 13 content (GCSE: Descriptive Statistics)
  const renderLesson13 = () => {
    const slideType = lesson13Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={13}
          title="Descriptive Statistics"
          subtitle="Mean, median, mode and range"
          objectives={[
            "Calculate mean, median, mode and range",
            "Understand when to use each measure",
            "Evaluate strengths and limitations of each"
          ]}
          isPresenting={isPresenting}
          level="GCSE"
        />
      )
    }

    if (slideType === 'donow') {
      const doNowQuestions: Question[] = [
        {
          id: 1,
          question: "Quantitative data is...",
          options: ["Data in words", "Data in numbers", "Data from interviews"],
          correct: 1
        },
        {
          id: 2,
          question: "Primary data is...",
          options: ["Collected by the researcher", "From government statistics", "From other studies"],
          correct: 0
        },
        {
          id: 3,
          question: "A strength of qualitative data is...",
          options: ["Easy to analyse", "Rich detail", "Less bias"],
          correct: 1
        },
        {
          id: 4,
          question: "Secondary data comes from...",
          options: ["Your own experiment", "Someone else's research", "Observations only"],
          correct: 1
        },
        {
          id: 5,
          question: "Test scores are an example of...",
          options: ["Qualitative data", "Quantitative data", "Secondary data"],
          correct: 1
        }
      ]
      return <DoNowQuiz questions={doNowQuestions} isPresenting={isPresenting} />
    }

    if (slideType === 'stats_teach') {
      return <DescriptiveStatsTeachSlide isPresenting={isPresenting} />
    }

    if (slideType === 'stats_afl') {
      return <DescriptiveStatsAFL isPresenting={isPresenting} />
    }

    if (slideType === 'stats_task') {
      return <StatsCalculationTask isPresenting={isPresenting} />
    }

    if (slideType === 'extended') {
      return <Lesson13ExtendedExamTask isPresenting={isPresenting} />
    }

    return <div>Loading...</div>
  }

  // Render Lesson 14 content (GCSE: Graphs & Display)
  const renderLesson14 = () => {
    const slideType = lesson14Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={14}
          title="Graphs & Display"
          subtitle="Presenting data visually"
          objectives={[
            "Choose appropriate graphs for different data types",
            "Interpret bar charts, histograms and scatter diagrams",
            "Understand normal distribution"
          ]}
          isPresenting={isPresenting}
          level="GCSE"
        />
      )
    }

    if (slideType === 'donow') {
      const doNowQuestions: Question[] = [
        {
          id: 1,
          question: "The mean is calculated by...",
          options: ["Finding the middle value", "Adding all and dividing by count", "Finding most common"],
          correct: 1
        },
        {
          id: 2,
          question: "The median is...",
          options: ["The average", "The middle value", "The most common"],
          correct: 1
        },
        {
          id: 3,
          question: "The range measures...",
          options: ["Central tendency", "Spread of data", "Most frequent value"],
          correct: 1
        },
        {
          id: 4,
          question: "Which is NOT affected by extreme scores?",
          options: ["Mean", "Median", "Range"],
          correct: 1
        },
        {
          id: 5,
          question: "Mode means...",
          options: ["Average", "Middle", "Most common"],
          correct: 2
        }
      ]
      return <DoNowQuiz questions={doNowQuestions} isPresenting={isPresenting} />
    }

    if (slideType === 'graphs_teach') {
      return <GraphsTeachSlide isPresenting={isPresenting} />
    }

    if (slideType === 'distribution_teach') {
      return <DistributionTeachSlide isPresenting={isPresenting} />
    }

    if (slideType === 'graphs_afl') {
      return <GraphsAFL isPresenting={isPresenting} />
    }

    if (slideType === 'graphs_task') {
      return <GraphSelectionTask isPresenting={isPresenting} />
    }

    if (slideType === 'extended') {
      return <Lesson14ExtendedExamTask isPresenting={isPresenting} />
    }

    return <div>Loading...</div>
  }

  // Render Lesson 15 content (GCSE: Computation & Arithmetic)
  const renderLesson15 = () => {
    const slideType = lesson15Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={15}
          title="Computation & Arithmetic"
          subtitle="Mathematical skills for psychology"
          objectives={[
            "Work with decimals, fractions and percentages",
            "Calculate ratios and significant figures",
            "Apply mathematical skills to psychological data"
          ]}
          isPresenting={isPresenting}
          level="GCSE"
        />
      )
    }

    if (slideType === 'donow') {
      const doNowQuestions: Question[] = [
        {
          id: 1,
          question: "Which graph has gaps between bars?",
          options: ["Histogram", "Bar chart", "Line graph"],
          correct: 1
        },
        {
          id: 2,
          question: "Scatter diagrams show...",
          options: ["Categories", "Correlations", "Frequencies"],
          correct: 1
        },
        {
          id: 3,
          question: "In a normal distribution, most scores are...",
          options: ["At the extremes", "In the middle", "Evenly spread"],
          correct: 1
        },
        {
          id: 4,
          question: "Histograms are used for...",
          options: ["Categorical data", "Continuous data", "Qualitative data"],
          correct: 1
        },
        {
          id: 5,
          question: "A bell-shaped curve is called...",
          options: ["Skewed distribution", "Normal distribution", "Bimodal distribution"],
          correct: 1
        }
      ]
      return <DoNowQuiz questions={doNowQuestions} isPresenting={isPresenting} />
    }

    if (slideType === 'maths_teach') {
      return <MathsTeachSlide isPresenting={isPresenting} />
    }

    if (slideType === 'maths_afl') {
      return <MathsAFL isPresenting={isPresenting} />
    }

    if (slideType === 'maths_task') {
      return <MathsCalculationTask isPresenting={isPresenting} />
    }

    if (slideType === 'extended') {
      return <Lesson15ExtendedExamTask isPresenting={isPresenting} />
    }

    return <div>Loading...</div>
  }

  const renderLesson16 = () => {
    const slideType = lesson16Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={1}
          title="Experimental Method"
          subtitle="Aims, Hypotheses & Variables"
          objectives={[
            "Distinguish between aims and hypotheses",
            "Write directional and non-directional hypotheses",
            "Identify and operationalise IV and DV",
            "Understand the role of extraneous variables"
          ]}
          isPresenting={isPresenting}
          level="AS"
        />
      )
    }

    if (slideType === 'donow') {
      const doNowQuestions: Question[] = [
        {
          id: 1,
          question: "What is the difference between an aim and a hypothesis?",
          options: [
            "They are the same thing",
            "An aim is general; a hypothesis is specific and testable",
            "A hypothesis is general; an aim is specific",
            "Only experiments have aims"
          ],
          correct: 1
        },
        {
          id: 2,
          question: "Which is a directional hypothesis?",
          options: [
            "There will be a difference in test scores",
            "Students will score higher with music than without",
            "Music affects concentration",
            "Do students revise better with music?"
          ],
          correct: 1
        },
        {
          id: 3,
          question: "What does 'operationalisation' mean?",
          options: [
            "Running an experiment",
            "Defining variables in measurable terms",
            "Counting participants",
            "Writing a hypothesis"
          ],
          correct: 1
        },
        {
          id: 4,
          question: "In an experiment, the IV is:",
          options: [
            "The variable that is measured",
            "The variable that is manipulated",
            "The confounding variable",
            "The random variable"
          ],
          correct: 1
        },
        {
          id: 5,
          question: "Which is an example of operationalising 'talkativeness'?",
          options: [
            "Whether someone is chatty or quiet",
            "Counting words spoken in five minutes",
            "Asking if they like talking",
            "Measuring their voice volume"
          ],
          correct: 1
        }
      ]

      return <DoNowQuiz questions={doNowQuestions} isPresenting={isPresenting} />
    }

    if (slideType === 'hypo_teach') {
      return <AimsAndHypothesesTeach isPresenting={isPresenting} />
    }

    if (slideType === 'hypo_sim') {
      return <HypothesesComparison level="aslevel" />
    }

    if (slideType === 'hypo_builder') {
      return <HypothesisBuilderLab isPresenting={isPresenting} />
    }

    if (slideType === 'hypo_afl') {
      const questions: Question[] = [
        {
          id: 1,
          question: "Which statement distinguishes an aim from a hypothesis?",
          options: [
            "An aim predicts the relationship between variables",
            "A hypothesis is tested; an aim is not",
            "An aim is general; a hypothesis is specific and testable",
            "They are identical in psychological research"
          ],
          correct: 2
        },
        {
          id: 2,
          question: "A directional hypothesis differs from non-directional because:",
          options: [
            "It names the variables being tested",
            "It predicts the direction of the effect",
            "It uses more scientific language",
            "It is always more accurate"
          ],
          correct: 1
        },
        {
          id: 3,
          question: "Operationalising the IV 'sleep deprivation' could mean:",
          options: [
            "Testing whether sleep matters",
            "Giving participants either 4 hours or 8 hours of sleep",
            "Asking participants how tired they feel",
            "Measuring brain activity"
          ],
          correct: 1
        }
      ]

      return <KnowledgeCheck questions={questions} title="Quick Check: Aims & Hypotheses" subtitle="Understand the fundamentals" />
    }

    if (slideType === 'hypo_task') {
      return <HypothesisWriter level="aslevel" />
    }

    if (slideType === 'variables_teach') {
      return <VariablesTeachASLevel isPresenting={isPresenting} />
    }

    if (slideType === 'variables_sim') {
      return <VariableLabALevel isPresenting={isPresenting} />
    }

    if (slideType === 'variables_afl') {
      const questions: Question[] = [
        {
          id: 1,
          question: 'To operationalise the DV "memory performance", a researcher could:',
          options: [
            'Ask participants if they have good memory',
            'Measure the number of words correctly recalled from a list',
            'Assess whether the participant studied hard',
            'Use their intuition about memory ability'
          ],
          correct: 1
        },
        {
          id: 2,
          question: 'An extraneous variable in a memory study could be:',
          options: [
            'The number of words in the list (if fixed)',
            'Participants\' prior knowledge of the material',
            'The same instructions for all participants',
            'The same time limit for all groups'
          ],
          correct: 1
        },
        {
          id: 3,
          question: 'If the IV has two levels (e.g., music vs silence), this represents:',
          options: [
            'Two dependent variables',
            'Two different hypotheses',
            'Two experimental conditions to compare',
            'Two populations'
          ],
          correct: 2
        },
        {
          id: 4,
          question: 'Why must variables be operationalised in research?',
          options: [
            'To make the hypothesis more dramatic',
            'To ensure variables can be measured objectively and clearly',
            'To reduce the number of participants needed',
            'To guarantee the results will be significant'
          ],
          correct: 1
        }
      ]

      return <KnowledgeCheck questions={questions} title="Quick Check: Variables & Operationalisation" subtitle="Applied understanding" />
    }

    if (slideType === 'variables_task') {
      return <VariableDetectiveALevel isPresenting={isPresenting} />
    }

    if (slideType === 'extended') {
      return <ExtendedExamTaskALevelLesson1 isPresenting={isPresenting} />
    }

    return <div>Loading...</div>
  }

  // ============= AS LEVEL LESSON 17: CONTROL OF VARIABLES =============
  const renderLesson17 = () => {
    const slideType = lesson17Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={2}
          title="Control of Variables"
          subtitle="Extraneous, Confounding & Control Methods"
          objectives={[
            "Distinguish extraneous and confounding variables",
            "Explain demand characteristics and investigator effects",
            "Apply randomisation and standardisation to control variables"
          ]}
          isPresenting={isPresenting}
          level="AS"
        />
      )
    }

    if (slideType === 'donow') {
      const doNowQuestions: Question[] = [
        {
          id: 1,
          question: "What is the IV in an experiment?",
          options: ["The variable that is measured", "The variable that is manipulated", "The variable that stays constant", "The confounding variable"],
          correct: 1
        },
        {
          id: 2,
          question: "Which type of hypothesis predicts a specific direction of effect?",
          options: ["Null hypothesis", "Non-directional hypothesis", "Directional hypothesis", "Alternative hypothesis"],
          correct: 2
        },
        {
          id: 3,
          question: "Operationalising 'stress' could mean:",
          options: ["Asking if someone feels stressed", "Measuring heart rate in bpm", "Saying someone is anxious", "Using intuition"],
          correct: 1
        },
        {
          id: 4,
          question: "The DV in a memory study might be:",
          options: ["Whether music is playing", "The number of words recalled", "The age of participants", "The room temperature"],
          correct: 1
        },
        {
          id: 5,
          question: "An aim differs from a hypothesis because:",
          options: ["Aims are more specific", "Hypotheses are general statements", "Aims are general; hypotheses are specific and testable", "They are identical"],
          correct: 2
        }
      ]
      return <DoNowQuiz questions={doNowQuestions} isPresenting={isPresenting} />
    }

    if (slideType === 'ev_teach') {
      return (
        <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-rose-400 mb-6">Extraneous Variables (EVs)</h2>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-rose-500/30 mb-6">
              <p className="text-xl text-gray-200 mb-4">
                An <span className="text-rose-400 font-bold">extraneous variable</span> is any variable, other than the IV, that might affect the DV.
              </p>
              <p className="text-gray-300">These should be controlled or removed so the researcher can be confident that changes in the DV are caused by the IV alone.</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800/50 rounded-xl p-5 border border-amber-500/30">
                <h3 className="text-xl font-bold text-amber-400 mb-3">🎯 Nuisance Variables</h3>
                <p className="text-gray-300 mb-3">EVs that are straightforward to control (e.g., age, lighting).</p>
                <p className="text-gray-400 text-sm">They 'muddy the waters' but don't vary systematically with the IV. They make it harder to detect results but aren't true confounding variables.</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-5 border border-red-500/30">
                <h3 className="text-xl font-bold text-red-400 mb-3">⚠️ Confounding Variables</h3>
                <p className="text-gray-300 mb-3">EVs that change <span className="font-bold">systematically</span> with the IV.</p>
                <p className="text-gray-400 text-sm">Example: If extroverts are in the experimental group and introverts in the control group, personality confounds the IV effect.</p>
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (slideType === 'cv_teach') {
      return (
        <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-rose-400 mb-6">Confounding Variables Explained</h2>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-rose-500/30 mb-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🔬</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">The Key Difference</h3>
                  <p className="text-gray-300">Confounding variables change <span className="text-rose-400 font-bold">systematically</span> with the IV, making it impossible to determine which variable caused the effect on the DV.</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-amber-400 mb-4">Example: 'Speedy-uppy' Drink Study</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💊</span>
                  <p className="text-gray-300"><span className="font-bold text-white">Group A:</span> Drinks 'Speedy-uppy' - all happen to be extroverts</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💧</span>
                  <p className="text-gray-300"><span className="font-bold text-white">Group B:</span> Drinks water - all happen to be introverts</p>
                </div>
                <div className="mt-4 p-4 bg-red-900/30 rounded-lg border border-red-500/50">
                  <p className="text-red-300">❌ If Group A talks more, we can't tell if it's the drink or personality causing it. Personality is a <span className="font-bold">confounding variable</span>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (slideType === 'ev_cv_afl') {
      const questions: Question[] = [
        {
          id: 1,
          question: "What is an extraneous variable?",
          options: ["A variable that is deliberately manipulated", "Any variable other than the IV that could affect the DV", "The variable that is measured", "A variable that has been controlled"],
          correct: 1
        },
        {
          id: 2,
          question: "A confounding variable differs from an extraneous variable because it:",
          options: ["Is easier to control", "Changes systematically with the IV", "Only affects the DV slightly", "Is always a participant variable"],
          correct: 1
        },
        {
          id: 3,
          question: "In the 'Speedy-uppy' drink example, personality was a confounding variable because:",
          options: ["It was hard to measure", "All extroverts were in one group and introverts in another", "It had no effect on results", "The researcher controlled for it"],
          correct: 1
        }
      ]
      return <KnowledgeCheck questions={questions} title="Check: EVs & CVs" subtitle="Can you distinguish these variables?" />
    }

    if (slideType === 'demand_teach') {
      return <DemandCharacteristicsTeach isPresenting={isPresenting} />
    }

    if (slideType === 'demand_afl') {
      const questions: Question[] = [
        {
          id: 1,
          question: "Demand characteristics are:",
          options: ["Things the researcher does wrong", "Cues that reveal the study's purpose to participants", "Variables that confound results", "Ways to control extraneous variables"],
          correct: 1
        },
        {
          id: 2,
          question: "The 'please-U' effect occurs when participants:",
          options: ["Try to sabotage the experiment", "Behave naturally", "Try to help by confirming the hypothesis", "Ask too many questions"],
          correct: 2
        },
        {
          id: 3,
          question: "Why do demand characteristics reduce validity?",
          options: ["They make experiments cheaper", "Participants' behaviour is no longer natural", "The IV cannot be measured", "They increase sample size"],
          correct: 1
        }
      ]
      return <KnowledgeCheck questions={questions} title="Check: Demand Characteristics" subtitle="Test your understanding" />
    }

    if (slideType === 'inv_teach') {
      return <InvestigatorEffectsTeach isPresenting={isPresenting} />
    }

    if (slideType === 'control_teach') {
      return <ControlMethodsTeach isPresenting={isPresenting} />
    }

    if (slideType === 'control_afl') {
      const questions: Question[] = [
        {
          id: 1,
          question: "Investigator effects can include:",
          options: ["Participants guessing the aim", "The researcher smiling more at certain participants", "Participants trying to sabotage results", "Using a control group"],
          correct: 1
        },
        {
          id: 2,
          question: "Randomisation is used to:",
          options: ["Make participants feel comfortable", "Control for experimenter bias when creating materials or ordering conditions", "Increase sample size", "Measure the DV accurately"],
          correct: 1
        },
        {
          id: 3,
          question: "Standardisation involves:",
          options: ["Choosing participants randomly", "Ensuring all participants have the same experience and instructions", "Using statistics to analyse data", "Changing the IV"],
          correct: 1
        },
        {
          id: 4,
          question: "Reading from a script to all participants is an example of:",
          options: ["Randomisation", "Counterbalancing", "Standardisation", "Operationalisation"],
          correct: 2
        }
      ]
      return <KnowledgeCheck questions={questions} title="Check: Control Methods" subtitle="Investigator effects, randomisation & standardisation" />
    }

    if (slideType === 'variable_detective') {
      return <VariableDetectiveCrimeScene isPresenting={isPresenting} />
    }

    if (slideType === 'control_task') {
      const taskQuestions: TaskQuestion[] = [
        {
          id: 1,
          question: "Identify the independent variable and dependent variable in this study.",
          marks: 2,
          rubric: [
            "IV: Whether music is played or not / presence or absence of music (1 mark)",
            "DV: Running performance / time taken to run 400m (1 mark)"
          ],
          sampleAnswer: "The IV is whether participants listen to music or not (music vs no music). The DV is their running performance, measured by the time taken to complete 400 metres."
        },
        {
          id: 2,
          question: "Identify one extraneous variable and explain why it is extraneous.",
          marks: 3,
          rubric: [
            "Identify relevant EV - e.g. fitness level, fatigue, weather, time of day (1 mark)",
            "Explain it could affect DV - e.g. fitter runners would run faster regardless of music (1 mark)",
            "Explain it's not the IV being tested (1 mark)"
          ],
          sampleAnswer: "Fatigue is an extraneous variable because participants run the no-music condition first, they may be tired for the music condition. This tiredness could affect their running time regardless of the music, making it unclear whether any difference is due to the IV or fatigue."
        },
        {
          id: 3,
          question: "Explain how demand characteristics might affect this study.",
          marks: 3,
          rubric: [
            "Define demand characteristics - cues revealing the study's purpose (1 mark)",
            "Apply to study - participants may guess the aim is to see if music helps (1 mark)",
            "Effect on behaviour - may try harder with music to 'help' the researcher (1 mark)"
          ],
          sampleAnswer: "Demand characteristics are cues that reveal the purpose of the study. Participants may guess the researcher expects music to improve performance, and consciously or unconsciously try harder when listening to music to confirm this expectation, artificially inflating the results."
        },
        {
          id: 4,
          question: "Suggest how the researcher could use standardisation to improve this study.",
          marks: 3,
          rubric: [
            "Identify standardisation technique - same instructions, same track, same equipment (1 mark)",
            "How it would be applied - e.g. all participants given identical verbal instructions (1 mark)",
            "Benefit - ensures differences are due to IV not procedure variations (1 mark)"
          ],
          sampleAnswer: "The researcher could give all participants exactly the same instructions by reading from a script. They could also ensure the same music track is used for everyone, the same headphones, and the same running track conditions. This ensures any differences in performance are due to the IV (music) rather than procedural variations."
        }
      ]
      return (
        <ApplicationTaskWithRubric
          title="Application Task: Control of Variables"
          scenario="A psychologist wants to see if listening to music affects running performance. He asks members of a local running club to run 400 metres as fast as they can without music. He then asks them to do the same again, but this time listening to music."
          questions={taskQuestions}
          isPresenting={isPresenting}
        />
      )
    }

    if (slideType === 'extended') {
      const examQuestions: ExamQuestion[] = [
        {
          id: 1,
          question: "Explain what is meant by 'extraneous variable' and 'confounding variable'.",
          marks: 4,
          rubric: [
            "Extraneous variable: Any variable other than the IV that could affect the DV (1 mark)",
            "Should be controlled to prevent affecting results (1 mark)",
            "Confounding variable: A variable that changes systematically with the IV (1 mark)",
            "Makes it impossible to determine if IV or CV caused the effect on DV (1 mark)"
          ],
          sampleAnswer: "An extraneous variable is any variable, other than the IV, that could potentially affect the DV and should be controlled. A confounding variable is a type of extraneous variable that changes systematically with the IV, making it impossible to know which variable caused the observed effect on the DV."
        },
        {
          id: 2,
          question: "Explain how demand characteristics can affect the validity of an experiment.",
          marks: 3,
          rubric: [
            "Definition: Cues that reveal the purpose of the study to participants (1 mark)",
            "Effect: Participants may change their natural behaviour (1 mark)",
            "Impact on validity: Behaviour no longer reflects real-world responses, reducing external validity (1 mark)"
          ],
          sampleAnswer: "Demand characteristics are cues from the research situation that reveal the purpose of the study. When participants identify these cues, they may alter their behaviour—either to help the researcher ('please-U' effect) or to sabotage results ('screw-U' effect). This means their behaviour is no longer natural, reducing the validity of the findings."
        },
        {
          id: 3,
          question: "Outline one way in which randomisation is used in psychological research.",
          marks: 2,
          rubric: [
            "Identification of appropriate use (e.g., random allocation to conditions, randomising stimulus order) (1 mark)",
            "Explanation of how this controls for bias or extraneous variables (1 mark)"
          ],
          sampleAnswer: "Randomisation can be used to allocate participants to different experimental conditions. This ensures each participant has an equal chance of being in any condition, which helps control for participant variables and prevents systematic bias in group composition."
        }
      ]
      
      return (
        <ExamQuestionsWithRubric
          title="📋 Extended Exam Practice: Control of Variables"
          subtitle="Click to reveal marking rubrics for each question"
          questions={examQuestions}
          isPresenting={isPresenting}
        />
      )
    }

    return <div>Loading...</div>
  }

  // ============= AS LEVEL LESSON 18: EXPERIMENTAL DESIGN =============
  const renderLesson18 = () => {
    const slideType = lesson18Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={3}
          title="Experimental Design"
          subtitle="Independent Groups, Repeated Measures & Matched Pairs"
          objectives={[
            "Describe and evaluate independent groups design",
            "Describe and evaluate repeated measures design",
            "Describe and evaluate matched pairs design",
            "Apply random allocation and counterbalancing"
          ]}
          isPresenting={isPresenting}
          level="AS"
        />
      )
    }

    if (slideType === 'donow') {
      const doNowQuestions: Question[] = [
        {
          id: 1,
          question: "An extraneous variable that changes systematically with the IV is called a:",
          options: ["Nuisance variable", "Confounding variable", "Demand characteristic", "Controlled variable"],
          correct: 1
        },
        {
          id: 2,
          question: "Participants trying to work out the aim and 'help' the researcher is the:",
          options: ["Screw-U effect", "Please-U effect", "Hawthorne effect", "Investigator effect"],
          correct: 1
        },
        {
          id: 3,
          question: "Using chance to decide the order of word lists is called:",
          options: ["Standardisation", "Counterbalancing", "Randomisation", "Operationalisation"],
          correct: 2
        },
        {
          id: 4,
          question: "Reading the same instructions to all participants is an example of:",
          options: ["Randomisation", "Operationalisation", "Standardisation", "Replication"],
          correct: 2
        },
        {
          id: 5,
          question: "The researcher's behaviour affecting results is called:",
          options: ["Demand characteristics", "Investigator effects", "Confounding variables", "Order effects"],
          correct: 1
        }
      ]
      return <DoNowQuiz questions={doNowQuestions} isPresenting={isPresenting} />
    }

    if (slideType === 'ig_teach') {
      return <IndependentGroupsTeach isPresenting={isPresenting} />
    }

    if (slideType === 'ig_afl') {
      const questions: Question[] = [
        {
          id: 1,
          question: "In an independent groups design:",
          options: ["All participants do all conditions", "Different participants are in each condition", "Participants are matched on key variables", "The researcher compares before and after scores"],
          correct: 1
        },
        {
          id: 2,
          question: "The main problem with independent groups design is:",
          options: ["Order effects", "Participant variables", "Demand characteristics", "Time consumption"],
          correct: 1
        }
      ]
      return <KnowledgeCheck questions={questions} title="Quick Check: Independent Groups" subtitle="Test your understanding" />
    }

    if (slideType === 'rm_teach') {
      return <RepeatedMeasuresTeach isPresenting={isPresenting} />
    }

    if (slideType === 'rm_afl') {
      const questions: Question[] = [
        {
          id: 1,
          question: "Repeated measures design controls for:",
          options: ["Order effects", "Participant variables", "Demand characteristics", "Investigator effects"],
          correct: 1
        },
        {
          id: 2,
          question: "Counterbalancing is used to control for:",
          options: ["Participant variables", "Order effects", "Sampling bias", "Extraneous variables"],
          correct: 1
        }
      ]
      return <KnowledgeCheck questions={questions} title="Quick Check: Repeated Measures" subtitle="Test your understanding" />
    }

    if (slideType === 'mp_teach') {
      return <MatchedPairsTeach isPresenting={isPresenting} />
    }

    if (slideType === 'mp_afl') {
      const questions: Question[] = [
        {
          id: 1,
          question: "In matched pairs design, participants are matched on:",
          options: ["Age only", "Variables that might affect the DV", "Random characteristics", "The IV"],
          correct: 1
        },
        {
          id: 2,
          question: "A limitation of matched pairs is:",
          options: ["Order effects", "Demand characteristics", "Impossible to match perfectly", "Needs fewer participants"],
          correct: 2
        }
      ]
      return <KnowledgeCheck questions={questions} title="Quick Check: Matched Pairs" subtitle="Test your understanding" />
    }

    if (slideType === 'design_architect') {
      return <DesignArchitect isPresenting={isPresenting} />
    }

    if (slideType === 'design_task') {
      const taskQuestions: TaskQuestion[] = [
        {
          id: 1,
          question: "Explain how she could use an independent groups design for this study.",
          marks: 3,
          rubric: [
            "Divide 20 participants into two groups (1 mark)",
            "One group does easy task, one group does difficult task (1 mark)",
            "Compare conformity rates between the two groups (1 mark)"
          ],
          sampleAnswer: "She would divide the 20 participants into two separate groups of 10. One group would complete the easy task while the other group completes the difficult task. She would then compare the number of conforming responses between the two groups to see if task difficulty affects conformity."
        },
        {
          id: 2,
          question: "Explain one strength and one limitation of using independent groups.",
          marks: 4,
          rubric: [
            "Identify strength - e.g. no order effects (1 mark)",
            "Explain strength - e.g. participants only do one condition so can't guess aim (1 mark)",
            "Identify limitation - e.g. participant variables (1 mark)",
            "Explain limitation - e.g. individual differences between groups may affect results (1 mark)"
          ],
          sampleAnswer: "A strength is there are no order effects because each participant only does one condition, so fatigue or practice cannot affect results. A limitation is participant variables - the groups may differ in personality traits like confidence, which could affect conformity independently of task difficulty."
        },
        {
          id: 3,
          question: "Explain how she could use a repeated measures design for this study.",
          marks: 3,
          rubric: [
            "All 20 participants do both conditions (1 mark)",
            "Each participant does easy task AND difficult task (1 mark)",
            "Compare each participant's conformity across both conditions (1 mark)"
          ],
          sampleAnswer: "All 20 participants would complete both conditions - the easy task and the difficult task. Each person's conformity would be measured in both conditions, then the researcher would compare whether individuals showed more conformity in the difficult task than the easy task."
        },
        {
          id: 4,
          question: "Explain how counterbalancing could be used to control for order effects.",
          marks: 3,
          rubric: [
            "Split participants into two groups (1 mark)",
            "Group A does easy then difficult, Group B does difficult then easy (1 mark)",
            "This distributes order effects evenly across conditions (1 mark)"
          ],
          sampleAnswer: "Half the participants (10) would do the easy task first then the difficult task, while the other half would do the difficult task first then the easy task. This ensures any order effects (like practice or fatigue) are balanced across both conditions, so they don't systematically favour one condition."
        }
      ]
      return (
        <ApplicationTaskWithRubric
          title="Application Task: Experimental Design"
          scenario="A psychologist wants to investigate whether people are more likely to conform in a difficult task than an easy task. She has recruited 20 participants."
          questions={taskQuestions}
          isPresenting={isPresenting}
        />
      )
    }

    if (slideType === 'extended') {
      const examQuestions: ExamQuestion[] = [
        {
          id: 1,
          question: "Explain one difference between a repeated measures design and a matched pairs design.",
          marks: 2,
          rubric: [
            "In repeated measures, the SAME participants do all conditions (1 mark)",
            "In matched pairs, DIFFERENT participants are matched on key variables, with one from each pair in each condition (1 mark)"
          ],
          sampleAnswer: "In repeated measures design, the same participants take part in all conditions of the experiment. In matched pairs design, different participants are used but they are matched on key variables relevant to the study, with one member of each pair allocated to each condition."
        },
        {
          id: 2,
          question: "Explain why random allocation is used in an independent groups design.",
          marks: 2,
          rubric: [
            "Definition: Each participant has an equal chance of being in any condition (1 mark)",
            "Purpose: Controls for participant variables / reduces systematic bias between groups (1 mark)"
          ],
          sampleAnswer: "Random allocation ensures each participant has an equal chance of being assigned to any experimental condition. This helps control for participant variables by distributing individual differences evenly across groups, preventing systematic bias."
        },
        {
          id: 3,
          question: "Explain how counterbalancing is used to control for order effects.",
          marks: 3,
          rubric: [
            "Definition: Half participants do condition A then B, half do B then A (1 mark)",
            "What it controls: Practice effects and fatigue effects (1 mark)",
            "How it works: Any order effects are distributed equally across both conditions (1 mark)"
          ],
          sampleAnswer: "Counterbalancing involves splitting participants so half complete condition A before B, while the other half complete B before A. This controls for order effects (such as practice improving performance or fatigue decreasing it) by ensuring any such effects are balanced equally across both experimental conditions."
        }
      ]
      
      return (
        <ExamQuestionsWithRubric
          title="📋 Extended Exam Practice: Experimental Design"
          subtitle="Click to reveal marking rubrics for each question"
          questions={examQuestions}
          isPresenting={isPresenting}
        />
      )
    }

    return <div>Loading...</div>
  }

  // ============= AS LEVEL LESSON 19: TYPES OF EXPERIMENT =============
  const renderLesson19 = () => {
    const slideType = lesson19Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={4}
          title="Types of Experiment"
          subtitle="Laboratory, Field, Natural & Quasi-experiments"
          objectives={[
            "Describe and evaluate laboratory experiments",
            "Describe and evaluate field experiments",
            "Describe and evaluate natural experiments",
            "Describe and evaluate quasi-experiments"
          ]}
          isPresenting={isPresenting}
          level="AS"
        />
      )
    }

    if (slideType === 'donow') {
      const doNowQuestions: Question[] = [
        {
          id: 1,
          question: "In an independent groups design:",
          options: ["All participants do all conditions", "Different participants in each condition", "Participants are matched in pairs", "Order effects are a problem"],
          correct: 1
        },
        {
          id: 2,
          question: "Random allocation is used to:",
          options: ["Control order effects", "Control participant variables", "Increase sample size", "Reduce demand characteristics"],
          correct: 1
        },
        {
          id: 3,
          question: "Counterbalancing is used with:",
          options: ["Independent groups", "Matched pairs", "Repeated measures", "Natural experiments"],
          correct: 2
        },
        {
          id: 4,
          question: "A repeated measures design needs:",
          options: ["More participants than independent groups", "Fewer participants than independent groups", "The same number as independent groups", "Matched participants"],
          correct: 1
        },
        {
          id: 5,
          question: "Order effects include:",
          options: ["Participant variables", "Practice and fatigue", "Investigator effects", "Demand characteristics only"],
          correct: 1
        }
      ]
      return <DoNowQuiz questions={doNowQuestions} isPresenting={isPresenting} />
    }

    if (slideType === 'lab_teach') {
      return <LabExperimentTeach isPresenting={isPresenting} />
    }

    if (slideType === 'field_teach') {
      return <FieldExperimentTeach isPresenting={isPresenting} />
    }

    if (slideType === 'lab_field_afl') {
      const questions: Question[] = [
        {
          id: 1,
          question: "A key strength of laboratory experiments is:",
          options: ["High ecological validity", "High control over extraneous variables", "Natural setting reduces demand characteristics", "Easy to gain informed consent"],
          correct: 1
        },
        {
          id: 2,
          question: "Field experiments take place in:",
          options: ["A highly controlled laboratory", "The participant's natural environment", "A hospital setting only", "Online only"],
          correct: 1
        },
        {
          id: 3,
          question: "Why might field experiments have higher external validity than lab experiments?",
          options: ["They use bigger samples", "Behaviour occurs in natural settings so is more representative", "They always use random allocation", "The IV is more carefully controlled"],
          correct: 1
        }
      ]
      return <KnowledgeCheck questions={questions} title="Check: Lab & Field Experiments" subtitle="Compare these two experiment types" />
    }

    if (slideType === 'natural_teach') {
      return <NaturalExperimentTeach isPresenting={isPresenting} />
    }

    if (slideType === 'quasi_teach') {
      return <QuasiExperimentTeach isPresenting={isPresenting} />
    }

    if (slideType === 'nat_quasi_afl') {
      const questions: Question[] = [
        {
          id: 1,
          question: "In a natural experiment, the IV:",
          options: ["Is manipulated by the researcher", "Occurs naturally without researcher manipulation", "Is always age or gender", "Must be measured in a lab"],
          correct: 1
        },
        {
          id: 2,
          question: "A quasi-experiment differs from a natural experiment because:",
          options: ["The IV is manipulated", "The IV is a pre-existing characteristic of participants", "It always takes place in a lab", "There is no DV"],
          correct: 1
        },
        {
          id: 3,
          question: "Neither natural nor quasi-experiments allow:",
          options: ["Measurement of the DV", "Random allocation to conditions", "Use of a control group", "Collection of data"],
          correct: 1
        }
      ]
      return <KnowledgeCheck questions={questions} title="Check: Natural & Quasi-Experiments" subtitle="Test your understanding" />
    }

    if (slideType === 'experiment_sorter') {
      return <ExperimentTypeSorter isPresenting={isPresenting} />
    }

    if (slideType === 'types_task') {
      const taskQuestions: TaskQuestion[] = [
        {
          id: 1,
          question: "Identify the type of experiment used in Scenario 1 (age and memory study).",
          marks: 1,
          rubric: [
            "Quasi-experiment (1 mark) - because age is a pre-existing participant characteristic that cannot be manipulated"
          ],
          sampleAnswer: "This is a quasi-experiment because the IV (age) is a pre-existing characteristic of participants that cannot be randomly allocated or manipulated by the researcher."
        },
        {
          id: 2,
          question: "Explain one strength of the experimental design in Scenario 1.",
          marks: 2,
          rubric: [
            "Identification of valid strength (e.g., high mundane realism, ethical - no manipulation) (1 mark)",
            "Elaboration of why this is a strength (1 mark)"
          ],
          sampleAnswer: "One strength is that it has high mundane realism because participants are in their natural age group and memory performance reflects real-world differences. This means findings can be generalised to real-life contexts."
        },
        {
          id: 3,
          question: "Explain one limitation of the experimental design in Scenario 1.",
          marks: 2,
          rubric: [
            "Identification of valid limitation (e.g., no random allocation, participant variables, cannot establish cause-effect) (1 mark)",
            "Elaboration of why this is a limitation (1 mark)"
          ],
          sampleAnswer: "One limitation is that participants cannot be randomly allocated to conditions because age is pre-existing. This means there may be confounding variables (like education level or health) that differ between age groups, making it impossible to establish a clear cause-and-effect relationship."
        },
        {
          id: 4,
          question: "Identify the type of experiment used in Scenario 2 (noise and concentration study).",
          marks: 1,
          rubric: [
            "Natural experiment (1 mark) - because the noise levels are naturally occurring environmental conditions not manipulated by the researcher"
          ],
          sampleAnswer: "This is a natural experiment because the IV (noise level) is a naturally occurring variable - the researcher did not create the building site or manipulate which classroom had noise."
        },
        {
          id: 5,
          question: "Explain one strength and one limitation of Scenario 2.",
          marks: 4,
          rubric: [
            "Strength identified (e.g., high ecological validity, real-world setting) (1 mark)",
            "Strength elaborated (1 mark)",
            "Limitation identified (e.g., low control, participant variables between classes) (1 mark)",
            "Limitation elaborated (1 mark)"
          ],
          sampleAnswer: "Strength: The study has high ecological validity because students are in their natural school environment doing normal puzzle work, so behaviour is representative of real-world performance. Limitation: The researcher has low control over extraneous variables - the two classes may differ in ability, motivation, or other factors, making it hard to attribute differences solely to noise."
        }
      ]
      return (
        <ApplicationTaskWithRubric
          title="Application Task: Types of Experiment"
          scenario="Scenario 1: A psychologist investigates the effect of age on memory. He tests two groups: one aged 20–30 and one aged 60–70. Each participant is given a memory test.\n\nScenario 2: A researcher investigates noise on concentration. One classroom is next to a building site (noisy), another is on the quiet side of school. Students in both classes solve a puzzle."
          questions={taskQuestions}
          isPresenting={isPresenting}
        />
      )
    }

    if (slideType === 'extended') {
      const examQuestions: ExamQuestion[] = [
        {
          id: 1,
          question: "Outline one difference between a natural experiment and a quasi-experiment.",
          marks: 2,
          rubric: [
            "Natural experiment: IV is naturally occurring event (not a personal characteristic) (1 mark)",
            "Quasi-experiment: IV is a pre-existing characteristic of participants such as age, gender, or occupation (1 mark)"
          ],
          sampleAnswer: "In a natural experiment, the IV is a naturally occurring event that the researcher has no control over (e.g., a disaster, policy change). In a quasi-experiment, the IV is a pre-existing characteristic of participants, such as their age, gender, or whether they have a particular condition."
        },
        {
          id: 2,
          question: "Explain one strength and one limitation of a laboratory experiment.",
          marks: 4,
          rubric: [
            "Strength identified (e.g., high control, replicable) (1 mark)",
            "Strength elaborated with explanation of why this matters (1 mark)",
            "Limitation identified (e.g., low ecological validity, demand characteristics) (1 mark)",
            "Limitation elaborated with explanation of why this matters (1 mark)"
          ],
          sampleAnswer: "Strength: Laboratory experiments offer high control over extraneous variables, allowing researchers to establish cause-and-effect relationships more confidently. Limitation: They often lack ecological validity because the artificial setting may not reflect real-world behaviour, meaning findings may not generalise to everyday life."
        },
        {
          id: 3,
          question: "Explain why field experiments may have higher external validity than laboratory experiments.",
          marks: 3,
          rubric: [
            "Definition of external validity (1 mark)",
            "Field experiments occur in natural settings (1 mark)",
            "Therefore behaviour is more representative of real-world behaviour / more generalisable (1 mark)"
          ],
          sampleAnswer: "External validity refers to how well findings can be generalised beyond the research setting. Field experiments take place in natural, everyday environments where participants may not even know they're being studied. This means their behaviour is more likely to reflect how they would naturally act, making findings more applicable to real-world situations compared to the artificial conditions of a laboratory."
        }
      ]
      
      return (
        <ExamQuestionsWithRubric
          title="📋 Extended Exam Practice: Types of Experiment"
          subtitle="Click to reveal marking rubrics for each question"
          questions={examQuestions}
          isPresenting={isPresenting}
        />
      )
    }

    return <div>Loading...</div>
  }

  // ============= AS LEVEL LESSON 20: SAMPLING =============
  const renderLesson20 = () => {
    const slideType = lesson20Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={5}
          title="Sampling"
          subtitle="Populations, Techniques & Bias"
          objectives={[
            "Explain the difference between population and sample",
            "Describe and evaluate five sampling techniques",
            "Discuss implications including bias and generalisation"
          ]}
          isPresenting={isPresenting}
          level="AS"
        />
      )
    }

    if (slideType === 'donow') {
      const doNowQuestions: Question[] = [
        {
          id: 1,
          question: "A laboratory experiment takes place in:",
          options: ["A natural setting", "A highly controlled environment", "The field", "Any location"],
          correct: 1
        },
        {
          id: 2,
          question: "A natural experiment has an IV that:",
          options: ["Is manipulated by the researcher", "Occurs naturally", "Is always a demographic characteristic", "Cannot be measured"],
          correct: 1
        },
        {
          id: 3,
          question: "Quasi-experiments differ from true experiments because:",
          options: ["They have no DV", "Participants cannot be randomly allocated", "They only occur in labs", "They use no control group"],
          correct: 1
        },
        {
          id: 4,
          question: "A strength of field experiments is:",
          options: ["High control", "Higher mundane realism", "Easy replication", "No ethical issues"],
          correct: 1
        },
        {
          id: 5,
          question: "External validity refers to:",
          options: ["Control over extraneous variables", "Whether findings can be generalised", "Internal consistency", "Reliability"],
          correct: 1
        }
      ]
      return <DoNowQuiz questions={doNowQuestions} isPresenting={isPresenting} />
    }

    if (slideType === 'pop_teach') {
      return <PopulationSampleTeach isPresenting={isPresenting} />
    }

    if (slideType === 'random_teach') {
      return <RandomSamplingTeach isPresenting={isPresenting} />
    }

    if (slideType === 'systematic_teach') {
      return <SystematicSamplingTeach isPresenting={isPresenting} />
    }

    if (slideType === 'sampling_afl1') {
      const questions: Question[] = [
        {
          id: 1,
          question: "A population is:",
          options: ["A small group who participate in research", "The entire group a researcher is interested in", "Always exactly 100 people", "Only people in one country"],
          correct: 1
        },
        {
          id: 2,
          question: "In random sampling, every member of the population has:",
          options: ["Different chances based on age", "Equal chance of being selected", "Already volunteered", "Been matched on key variables"],
          correct: 1
        },
        {
          id: 3,
          question: "In systematic sampling, participants are selected by:",
          options: ["Choosing every nth person from a list", "Asking for volunteers", "Using whoever is available", "Matching on demographics"],
          correct: 0
        }
      ]
      return <KnowledgeCheck questions={questions} title="Check: Random & Systematic Sampling" subtitle="Test your understanding so far" />
    }

    if (slideType === 'stratified_teach') {
      return <StratifiedSamplingTeach isPresenting={isPresenting} />
    }

    if (slideType === 'opportunity_teach') {
      return <OpportunitySamplingTeach isPresenting={isPresenting} />
    }

    if (slideType === 'volunteer_teach') {
      return <VolunteerSamplingTeach isPresenting={isPresenting} />
    }

    if (slideType === 'sampling_afl2') {
      const questions: Question[] = [
        {
          id: 1,
          question: "Stratified sampling is designed to:",
          options: ["Save time and money", "Reflect population proportions in subgroups", "Avoid all forms of bias", "Use only male participants"],
          correct: 1
        },
        {
          id: 2,
          question: "Opportunity sampling involves:",
          options: ["Random number selection", "Using available people at the time", "Matching participants", "Complex calculations"],
          correct: 1
        },
        {
          id: 3,
          question: "Volunteer bias is a limitation of:",
          options: ["Random sampling", "Stratified sampling", "Volunteer sampling", "Systematic sampling"],
          correct: 2
        }
      ]
      return <KnowledgeCheck questions={questions} title="Check: Stratified, Opportunity & Volunteer" subtitle="Final sampling check" />
    }

    if (slideType === 'sample_simulator') {
      return <SampleSelectorSimulator isPresenting={isPresenting} />
    }

    if (slideType === 'sampling_task') {
      const taskQuestions: TaskQuestion[] = [
        {
          id: 1,
          question: "Explain how she could select a random sample of 50 students.",
          marks: 3,
          rubric: [
            "Obtain a list/sampling frame of all 1000 students (1 mark)",
            "Assign each student a number 1-1000 (1 mark)",
            "Use random number generator to select 50 numbers (1 mark)"
          ],
          sampleAnswer: "She would first obtain a list of all 1000 students in the college and assign each one a number from 1 to 1000. She would then use a random number generator (or draw numbers from a hat) to select 50 numbers, and those students would form her sample."
        },
        {
          id: 2,
          question: "Explain one limitation of using random sampling.",
          marks: 2,
          rubric: [
            "Identify limitation - e.g. time-consuming, may not be representative by chance (1 mark)",
            "Explain - e.g. by chance may get uneven groups/all from one year group (1 mark)"
          ],
          sampleAnswer: "A limitation is that by chance alone, the sample may still be unrepresentative. For example, random selection might result in mostly first-year students being selected, meaning the views of other year groups are underrepresented."
        },
        {
          id: 3,
          question: "Explain how she could select a stratified sample of 50 students.",
          marks: 3,
          rubric: [
            "Identify relevant subgroups - e.g. year groups, courses (1 mark)",
            "Calculate proportions - e.g. if 30% Year 1, select 30% of 50 = 15 (1 mark)",
            "Randomly select from each subgroup (1 mark)"
          ],
          sampleAnswer: "She would identify relevant subgroups, such as year groups. If 30% of students are Year 1, 30% Year 2, etc., she would select the same proportions for her sample - 15 Year 1 students, 15 Year 2, etc. Within each subgroup, she would randomly select the required number."
        },
        {
          id: 4,
          question: "Explain one strength of using stratified sampling.",
          marks: 2,
          rubric: [
            "Identify strength - sample is representative/reflects population composition (1 mark)",
            "Explain benefit - ensures all subgroups are included proportionally (1 mark)"
          ],
          sampleAnswer: "A strength is that the sample will be representative of the population in terms of key characteristics. By ensuring each subgroup is proportionally represented, the researcher can be more confident that the findings reflect the views of all students, not just some groups."
        }
      ]
      return (
        <ApplicationTaskWithRubric
          title="Application Task: Sampling"
          scenario="A researcher wants to investigate the attitudes of students in her college towards the college canteen. There are 1000 students in the college. She decides to take a sample of 50 students."
          questions={taskQuestions}
          isPresenting={isPresenting}
        />
      )
    }

    if (slideType === 'extended') {
      const examQuestions: ExamQuestion[] = [
        {
          id: 1,
          question: "Explain the difference between a population and a sample.",
          marks: 2,
          rubric: [
            "Population: The entire group of people the researcher is interested in studying (1 mark)",
            "Sample: A smaller group drawn from the population who actually take part in the study (1 mark)"
          ],
          sampleAnswer: "A population is the entire group of individuals that the researcher wishes to study and draw conclusions about. A sample is a smaller subset of individuals selected from this population who actually participate in the research."
        },
        {
          id: 2,
          question: "Explain how a researcher could select a systematic sample.",
          marks: 3,
          rubric: [
            "Obtain a list/sampling frame of the target population (1 mark)",
            "Calculate the sampling interval (population size ÷ required sample size) (1 mark)",
            "Select every nth person from the list after a random starting point (1 mark)"
          ],
          sampleAnswer: "The researcher would first obtain a list of all members of the target population. They would then calculate a sampling interval by dividing the population size by the desired sample size. After selecting a random starting point, they would select every nth person from the list (e.g., every 10th person) until the required sample size is reached."
        },
        {
          id: 3,
          question: "Briefly evaluate the use of opportunity sampling in psychological research.",
          marks: 3,
          rubric: [
            "Strength: Convenient and quick/easy to recruit participants (1 mark)",
            "Limitation: Sample is unlikely to be representative of the target population (1 mark)",
            "Impact: May limit generalisation of findings / produce bias (1 mark)"
          ],
          sampleAnswer: "Opportunity sampling is convenient and quick, as researchers can recruit whoever is available at the time. However, this method is unlikely to produce a representative sample because it relies on who happens to be accessible. This limits the ability to generalise findings to the wider population and may introduce bias."
        }
      ]
      
      return (
        <ExamQuestionsWithRubric
          title="📋 Extended Exam Practice: Sampling"
          subtitle="Click to reveal marking rubrics for each question"
          questions={examQuestions}
          isPresenting={isPresenting}
        />
      )
    }

    return <div>Loading...</div>
  }

  // ============= AS LEVEL LESSON 21: ETHICAL ISSUES =============
  const renderLesson21 = () => {
    const slideType = lesson21Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={6}
          title="Ethical Issues"
          subtitle="BPS Code of Ethics & Dealing with Issues"
          objectives={[
            "Identify key ethical issues in psychological research",
            "Explain the role of the BPS code of ethics",
            "Describe ways of dealing with ethical issues"
          ]}
          isPresenting={isPresenting}
          level="AS"
        />
      )
    }

    if (slideType === 'donow') {
      const doNowQuestions: Question[] = [
        {
          id: 1,
          question: "A sample is:",
          options: ["The entire target population", "A smaller group from the population", "Always 100 people", "The researcher's hypothesis"],
          correct: 1
        },
        {
          id: 2,
          question: "In random sampling, selection is based on:",
          options: ["Researcher choice", "Equal chance for all", "Convenience", "Volunteer willingness"],
          correct: 1
        },
        {
          id: 3,
          question: "Volunteer bias means participants may be:",
          options: ["Randomly selected", "More helpful and curious than average", "Forced to participate", "Matched on variables"],
          correct: 1
        },
        {
          id: 4,
          question: "Stratified sampling aims to:",
          options: ["Be quick and easy", "Match population proportions", "Use only volunteers", "Avoid all selection"],
          correct: 1
        },
        {
          id: 5,
          question: "Opportunity sampling involves:",
          options: ["Random number selection", "Using available people at the time", "Proportional representation", "Self-selection by participants"],
          correct: 1
        }
      ]
      return <DoNowQuiz questions={doNowQuestions} isPresenting={isPresenting} />
    }

    if (slideType === 'ethics_intro') {
      return (
        <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-rose-400 mb-6">What Are Ethical Issues?</h2>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-rose-500/30 mb-6">
              <p className="text-xl text-gray-200">
                Ethical issues arise when there is a <span className="text-rose-400 font-bold">conflict</span> between the rights of participants and the goals of research to produce valid, worthwhile data.
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-amber-400 mb-4">The BPS Code of Ethics</h3>
              <p className="text-gray-300 mb-4">A quasi-legal document that instructs UK psychologists about acceptable behaviour when dealing with participants.</p>
              <div className="grid grid-cols-4 gap-4">
                <div className="p-3 bg-blue-900/30 rounded-lg text-center">
                  <span className="text-2xl">🤝</span>
                  <p className="text-blue-300 font-bold mt-2">Respect</p>
                </div>
                <div className="p-3 bg-green-900/30 rounded-lg text-center">
                  <span className="text-2xl">🎓</span>
                  <p className="text-green-300 font-bold mt-2">Competence</p>
                </div>
                <div className="p-3 bg-purple-900/30 rounded-lg text-center">
                  <span className="text-2xl">⚖️</span>
                  <p className="text-purple-300 font-bold mt-2">Responsibility</p>
                </div>
                <div className="p-3 bg-rose-900/30 rounded-lg text-center">
                  <span className="text-2xl">💎</span>
                  <p className="text-rose-300 font-bold mt-2">Integrity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (slideType === 'consent_teach') {
      return <InformedConsentTeach isPresenting={isPresenting} />
    }

    if (slideType === 'deception_teach') {
      return <DeceptionTeach isPresenting={isPresenting} />
    }

    if (slideType === 'ethics_afl1') {
      const questions: Question[] = [
        {
          id: 1,
          question: "Informed consent requires participants to know:",
          options: ["Just the researcher's name", "Aims, procedures, and their rights", "Nothing at all", "Only the hypothesis"],
          correct: 1
        },
        {
          id: 2,
          question: "Presumptive consent involves:",
          options: ["Asking participants after the study", "Asking a similar group if the study is acceptable", "Never getting consent", "Only verbal agreement"],
          correct: 1
        },
        {
          id: 3,
          question: "Why is deception linked to informed consent?",
          options: ["They are completely unrelated", "Deceived participants cannot truly give informed consent", "Deception improves consent", "Both require payment"],
          correct: 1
        }
      ]
      return <KnowledgeCheck questions={questions} title="Check: Consent & Deception" subtitle="Test your understanding" />
    }

    if (slideType === 'protection_teach') {
      return <ProtectionFromHarmTeach isPresenting={isPresenting} />
    }

    if (slideType === 'privacy_teach') {
      return <PrivacyConfidentialityTeach isPresenting={isPresenting} />
    }

    if (slideType === 'dealing_teach') {
      return <EthicsCommitteesTeach isPresenting={isPresenting} />
    }

    if (slideType === 'ethics_afl2') {
      const questions: Question[] = [
        {
          id: 1,
          question: "Protection from harm means participants should face:",
          options: ["No risk at all", "No more risk than in daily life", "Only physical risk", "Unlimited risk if they consent"],
          correct: 1
        },
        {
          id: 2,
          question: "Confidentiality can be maintained by:",
          options: ["Publishing participant names", "Using initials or numbers instead of names", "Sharing data publicly", "Recording all personal details"],
          correct: 1
        },
        {
          id: 3,
          question: "Ethics committees use what approach to evaluate research?",
          options: ["Random selection", "Cost-benefit analysis", "Alphabetical order", "First come first served"],
          correct: 1
        }
      ]
      return <KnowledgeCheck questions={questions} title="Check: Protection, Privacy & Committees" subtitle="Final ethics check" />
    }

    if (slideType === 'ethics_review_board') {
      return <EthicsReviewBoard isPresenting={isPresenting} />
    }

    if (slideType === 'ethics_task') {
      const taskQuestions: TaskQuestion[] = [
        {
          id: 1,
          question: "Identify one ethical issue in this study.",
          marks: 2,
          rubric: [
            "Identification of valid ethical issue (1 mark) - e.g., deception, protection from harm, informed consent",
            "Brief explanation of why it is an issue in this context (1 mark)"
          ],
          sampleAnswer: "Deception is an ethical issue because participants are being told they will receive electric shocks when in fact they won't. This misleads them about what will happen in the study."
        },
        {
          id: 2,
          question: "Explain how the researcher could deal with this issue.",
          marks: 3,
          rubric: [
            "Identification of appropriate solution (e.g., debrief, right to withdraw) (1 mark)",
            "Explanation of how the solution would be implemented (1 mark)",
            "Explanation of why this addresses the ethical issue (1 mark)"
          ],
          sampleAnswer: "The researcher should provide a thorough debrief immediately after the study, explaining that the shocks were fake and why deception was necessary for the research. Participants should be given the right to withdraw their data if they are uncomfortable knowing they were deceived. This deals with the issue because participants can then give retrospective consent and their data is only used if they agree."
        },
        {
          id: 3,
          question: "Identify another ethical issue and explain how it could be addressed.",
          marks: 3,
          rubric: [
            "Second valid ethical issue identified (e.g., protection from harm - psychological stress) (1 mark)",
            "Appropriate solution offered (1 mark)",
            "Explanation of why solution addresses the issue (1 mark)"
          ],
          sampleAnswer: "Protection from harm is another ethical issue because the threat of electric shocks may cause significant psychological stress and anxiety. This could be addressed by ensuring the debriefing reassures participants, checking they are not distressed, and providing support or counselling contact details if needed. The researcher should also use a cost-benefit analysis beforehand to ensure the scientific value outweighs the potential harm."
        }
      ]
      return (
        <ApplicationTaskWithRubric
          title="Application Task: Ethics"
          scenario="A researcher wants to investigate the effect of stress on memory. He tells participants that they will be given a mild electric shock if they get an answer wrong on a memory test. In fact, the shocks are fake."
          questions={taskQuestions}
          isPresenting={isPresenting}
        />
      )
    }

    if (slideType === 'extended') {
      const examQuestions: ExamQuestion[] = [
        {
          id: 1,
          question: "Identify three ethical issues that might arise in psychological research.",
          marks: 3,
          rubric: [
            "Informed consent - participants must agree to take part with full knowledge (1 mark)",
            "Deception - misleading participants about the true purpose (1 mark)",
            "Protection from harm - physical or psychological (1 mark)",
            "Other valid issues: confidentiality, right to withdraw, privacy (1 mark each, max 3)"
          ],
          sampleAnswer: "Three ethical issues are: (1) Informed consent - ensuring participants agree to take part with full knowledge of what is involved; (2) Deception - misleading participants about the nature or purpose of the study; (3) Protection from harm - ensuring participants are not exposed to physical or psychological risk beyond everyday life."
        },
        {
          id: 2,
          question: "Explain what is meant by 'informed consent'.",
          marks: 2,
          rubric: [
            "Participants must agree/give permission to take part (1 mark)",
            "They must have sufficient information about the study (aims, procedures, rights) to make an informed decision (1 mark)"
          ],
          sampleAnswer: "Informed consent means that participants must give their agreement to take part in a study, having been given enough information about the aims, procedures, and their rights (including the right to withdraw) to make an informed decision about whether they wish to participate."
        },
        {
          id: 3,
          question: "Explain how a researcher could deal with the issue of deception.",
          marks: 3,
          rubric: [
            "Provide a full debrief at the end of the study (1 mark)",
            "Explain the true purpose and any deception that occurred (1 mark)",
            "Give participants the right to withdraw their data after finding out the true nature of the study (1 mark)"
          ],
          sampleAnswer: "The researcher should provide a full debrief after the study, explaining the true purpose and any deception used. Participants should be told why deception was necessary and be given the opportunity to withdraw their data now that they understand the true aims. The researcher should also check participants are not distressed and offer support if needed."
        }
      ]
      
      return (
        <ExamQuestionsWithRubric
          title="📋 Extended Exam Practice: Ethical Issues"
          subtitle="Click to reveal marking rubrics for each question"
          questions={examQuestions}
          isPresenting={isPresenting}
        />
      )
    }

    return <div>Loading...</div>
  }

  // ============= AS LEVEL LESSON 22: OBSERVATIONAL TECHNIQUES =============
  const renderLesson22 = () => {
    const slideType = lesson22Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={7}
          title="Observational Techniques"
          subtitle="Types, Design & Reliability"
          objectives={[
            "Describe naturalistic vs controlled observations",
            "Explain covert vs overt and participant vs non-participant",
            "Understand behavioural categories, sampling methods, and inter-observer reliability"
          ]}
          isPresenting={isPresenting}
          level="AS"
        />
      )
    }

    if (slideType === 'donow') {
      const doNowQuestions: Question[] = [
        {
          id: 1,
          question: "Informed consent involves telling participants about:",
          options: ["Only the hypothesis", "Aims, procedures, and their rights", "Other participants", "The researcher's credentials"],
          correct: 1
        },
        {
          id: 2,
          question: "Deception should be addressed by:",
          options: ["Never conducting research", "A full debrief afterwards", "Paying participants more", "Using larger samples"],
          correct: 1
        },
        {
          id: 3,
          question: "Protection from harm means participants should face:",
          options: ["No risk at all", "No more risk than in daily life", "Only physical risk", "Unlimited risk"],
          correct: 1
        },
        {
          id: 4,
          question: "Confidentiality is maintained by:",
          options: ["Sharing all data publicly", "Using numbers or initials instead of names", "Discussing with other participants", "Publishing personal details"],
          correct: 1
        },
        {
          id: 5,
          question: "The BPS code of ethics is built around:",
          options: ["One principle", "Two principles", "Three principles", "Four principles (respect, competence, responsibility, integrity)"],
          correct: 3
        }
      ]
      return <DoNowQuiz questions={doNowQuestions} isPresenting={isPresenting} />
    }

    if (slideType === 'obs_types_teach') {
      return <ObservationTypesTeach isPresenting={isPresenting} />
    }

    if (slideType === 'covert_teach') {
      return <CovertOvertTeach isPresenting={isPresenting} />
    }

    if (slideType === 'participant_teach') {
      return <ParticipantNonParticipantTeach isPresenting={isPresenting} />
    }

    if (slideType === 'obs_afl1') {
      const questions: Question[] = [
        {
          id: 1,
          question: "Naturalistic observations have high:",
          options: ["Internal validity", "Control over variables", "External validity", "Demand characteristics"],
          correct: 2
        },
        {
          id: 2,
          question: "In covert observation, participants are:",
          options: ["Fully informed", "Unaware they're being observed", "Paid extra", "Given written consent"],
          correct: 1
        },
        {
          id: 3,
          question: "A risk of participant observation is:",
          options: ["Too much objectivity", "Going native - losing objectivity", "Too much distance", "High control"],
          correct: 1
        }
      ]
      return <KnowledgeCheck questions={questions} title="Check: Observation Types" subtitle="Test your understanding so far" />
    }

    if (slideType === 'design_teach') {
      return <ObservationalDesignTeach isPresenting={isPresenting} />
    }

    if (slideType === 'reliability_teach') {
      return <InterObserverReliabilityTeach isPresenting={isPresenting} />
    }

    if (slideType === 'obs_afl2') {
      const questions: Question[] = [
        {
          id: 1,
          question: "Behavioural categories must be:",
          options: ["Vague and overlapping", "Operationalised and non-overlapping", "Only single behaviours", "Decided after observation"],
          correct: 1
        },
        {
          id: 2,
          question: "Event sampling involves:",
          options: ["Recording behaviour at fixed intervals", "Recording every time a target behaviour occurs", "Only observing for one hour", "Using questionnaires"],
          correct: 1
        },
        {
          id: 3,
          question: "Inter-observer reliability aims for a correlation of at least:",
          options: ["+0.50", "+0.60", "+0.80", "+1.00"],
          correct: 2
        }
      ]
      return <KnowledgeCheck questions={questions} title="Check: Design & Reliability" subtitle="Final observation check" />
    }

    if (slideType === 'observer_training') {
      return <ObserverTrainingAcademy isPresenting={isPresenting} />
    }

    if (slideType === 'obs_task') {
      const taskQuestions: TaskQuestion[] = [
        {
          id: 1,
          question: "Suggest two behavioural categories he could use.",
          marks: 2,
          rubric: [
            "First category - e.g. physical aggression (hitting, pushing, kicking) (1 mark)",
            "Second category - e.g. verbal aggression (shouting, name-calling, threats) (1 mark)"
          ],
          sampleAnswer: "Two behavioural categories could be: (1) Physical aggression - including hitting, pushing, or kicking another child; (2) Verbal aggression - including shouting at, threatening, or name-calling another child."
        },
        {
          id: 2,
          question: "Explain why categories must be clear and unambiguous.",
          marks: 2,
          rubric: [
            "So observers can reliably classify behaviours (1 mark)",
            "To ensure consistency/inter-observer reliability/avoid confusion (1 mark)"
          ],
          sampleAnswer: "Categories must be clear so that different observers watching the same behaviour will classify it in the same way. This ensures inter-observer reliability - without clear definitions, one observer might record 'rough play' while another records it as 'aggression', making the data inconsistent."
        },
        {
          id: 3,
          question: "Explain how he could use event sampling.",
          marks: 2,
          rubric: [
            "Record every time a target behaviour occurs (1 mark)",
            "E.g. tally mark each time aggression is observed (1 mark)"
          ],
          sampleAnswer: "Event sampling would involve the observer making a tally mark or note every time an aggressive behaviour occurs during the observation period. This way, he counts all instances of the target behaviour rather than sampling at set intervals."
        },
        {
          id: 4,
          question: "Explain how he could establish inter-observer reliability.",
          marks: 3,
          rubric: [
            "Use two or more observers watching the same behaviour (1 mark)",
            "Compare their recordings/calculate correlation (1 mark)",
            "Aim for high agreement (≥0.80) before conducting main study (1 mark)"
          ],
          sampleAnswer: "He would have two observers watch the same children at the same time and independently record the behaviours they see. He would then compare their observations and calculate a correlation coefficient. If agreement is at least +0.80, the categories and coding system are reliable. If not, categories should be refined and re-tested."
        }
      ]
      return (
        <ApplicationTaskWithRubric
          title="Application Task: Observations"
          scenario="A researcher wants to observe the aggressive behaviour of children in a playground. He decides to use a structured observation."
          questions={taskQuestions}
          isPresenting={isPresenting}
        />
      )
    }

    if (slideType === 'extended') {
      const examQuestions: ExamQuestion[] = [
        {
          id: 1,
          question: "Distinguish between naturalistic and controlled observations.",
          marks: 3,
          rubric: [
            "Naturalistic: Takes place in a natural setting with no intervention (1 mark)",
            "Controlled: Takes place in a controlled environment where variables can be manipulated (1 mark)",
            "Clear distinction made between the two approaches (1 mark)"
          ],
          sampleAnswer: "In a naturalistic observation, behaviour is observed in its natural setting without any intervention from the researcher - the environment is allowed to vary freely. In a controlled observation, the researcher exerts control over certain variables and the observation typically takes place in a more artificial setting, allowing specific behaviours to be studied under standardised conditions."
        },
        {
          id: 2,
          question: "Explain one strength of conducting a covert observation.",
          marks: 2,
          rubric: [
            "Identification of strength: Participants don't know they're being observed (1 mark)",
            "Explanation: So behaviour remains natural/unaffected by awareness, increasing validity (1 mark)"
          ],
          sampleAnswer: "A key strength of covert observation is that participants are unaware they are being observed. This means they do not alter their behaviour due to the awareness of being watched (no participant reactivity), resulting in more natural and valid data that better represents real-world behaviour."
        },
        {
          id: 3,
          question: "Outline what is meant by 'event sampling' and 'time sampling'.",
          marks: 4,
          rubric: [
            "Event sampling: Recording behaviour every time a target behaviour occurs (1 mark)",
            "Event sampling use: Good for infrequent behaviours (1 mark)",
            "Time sampling: Recording behaviour at fixed time intervals (1 mark)",
            "Time sampling use: Reduces the amount of data to be collected/makes observation manageable (1 mark)"
          ],
          sampleAnswer: "Event sampling involves recording every occurrence of a specified target behaviour throughout the observation period - this is particularly useful for infrequent behaviours. Time sampling involves recording behaviour only at predetermined time intervals (e.g., every 30 seconds), which makes observation more manageable by reducing the continuous recording burden while still capturing a representative picture of behaviour."
        }
      ]
      
      return (
        <ExamQuestionsWithRubric
          title="📋 Extended Exam Practice: Observational Techniques"
          subtitle="Click to reveal marking rubrics for each question"
          questions={examQuestions}
          isPresenting={isPresenting}
        />
      )
    }

    return <div>Loading...</div>
  }

  // ============= AS LEVEL LESSON 23: SELF-REPORT METHODS =============
  const renderLesson23 = () => {
    const slideType = lesson23Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={8}
          title="Self-Report Methods"
          subtitle="Questionnaires & Interviews"
          objectives={[
            "Describe and evaluate questionnaires",
            "Distinguish between open and closed questions",
            "Describe and evaluate structured and unstructured interviews",
            "Understand principles of good question design"
          ]}
          isPresenting={isPresenting}
          level="AS"
        />
      )
    }

    if (slideType === 'donow') {
      const doNowQuestions: Question[] = [
        {
          id: 1,
          question: "Naturalistic observations take place in:",
          options: ["A controlled lab", "The natural setting", "A researcher's office", "Online only"],
          correct: 1
        },
        {
          id: 2,
          question: "In covert observation, participants:",
          options: ["Give full consent", "Are unaware they're being watched", "Control the variables", "Design the study"],
          correct: 1
        },
        {
          id: 3,
          question: "'Going native' is a risk in:",
          options: ["Non-participant observation", "Participant observation", "Controlled observation", "Time sampling"],
          correct: 1
        },
        {
          id: 4,
          question: "Behavioural categories should be:",
          options: ["Vague and overlapping", "Precise and non-overlapping", "Decided after observation", "Based on inference"],
          correct: 1
        },
        {
          id: 5,
          question: "Inter-observer reliability is established by:",
          options: ["Using one observer", "Comparing data from multiple observers", "Not using categories", "Random sampling"],
          correct: 1
        }
      ]
      return <DoNowQuiz questions={doNowQuestions} isPresenting={isPresenting} />
    }

    if (slideType === 'questionnaire_teach') {
      return <QuestionnaireTeach isPresenting={isPresenting} />
    }

    if (slideType === 'questions_teach') {
      return <QuestionTypesTeach isPresenting={isPresenting} />
    }

    if (slideType === 'selfreport_afl1') {
      const questions: Question[] = [
        {
          id: 1,
          question: "A strength of questionnaires is:",
          options: ["They always get honest answers", "They can gather data from many people quickly", "They produce only qualitative data", "Participants must be present"],
          correct: 1
        },
        {
          id: 2,
          question: "Open questions produce:",
          options: ["Quantitative data only", "Qualitative data", "No data", "Only numerical ratings"],
          correct: 1
        },
        {
          id: 3,
          question: "Closed questions are easier to:",
          options: ["Get detailed responses from", "Analyse statistically", "Interpret qualitatively", "Ask follow-up questions about"],
          correct: 1
        }
      ]
      return <KnowledgeCheck questions={questions} title="Check: Questionnaires & Questions" subtitle="Test your understanding so far" />
    }

    if (slideType === 'interview_teach') {
      return <InterviewTeach isPresenting={isPresenting} />
    }

    if (slideType === 'design_teach') {
      return (
        <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-rose-400 mb-6">Designing Good Questions</h2>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-red-500/30">
              <h3 className="text-xl font-bold text-red-400 mb-4">❌ Things to Avoid:</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-gray-700/50 rounded-lg">
                  <p className="font-bold text-amber-400">Jargon</p>
                  <p className="text-gray-300 text-sm">Technical terms unfamiliar to respondents</p>
                </div>
                <div className="p-3 bg-gray-700/50 rounded-lg">
                  <p className="font-bold text-amber-400">Leading Questions</p>
                  <p className="text-gray-300 text-sm">Guide respondent towards particular answer</p>
                </div>
                <div className="p-3 bg-gray-700/50 rounded-lg">
                  <p className="font-bold text-amber-400">Double-Barrelled Questions</p>
                  <p className="text-gray-300 text-sm">Two questions in one - confusing</p>
                </div>
                <div className="p-3 bg-gray-700/50 rounded-lg">
                  <p className="font-bold text-amber-400">Double Negatives</p>
                  <p className="text-gray-300 text-sm">"I am not unhappy" - hard to decipher</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (slideType === 'selfreport_afl2') {
      const questions: Question[] = [
        {
          id: 1,
          question: "A limitation of structured interviews is:",
          options: ["Difficult to replicate", "Cannot deviate from set questions to explore responses", "Too flexible", "No standardisation"],
          correct: 1
        },
        {
          id: 2,
          question: "Unstructured interviews are like:",
          options: ["A formal questionnaire", "A conversation - flexible and exploratory", "A controlled experiment", "Multiple choice test"],
          correct: 1
        },
        {
          id: 3,
          question: "Double-barrelled questions should be avoided because:",
          options: ["They are too short", "They ask two things at once causing confusion", "They are too simple", "They only produce qualitative data"],
          correct: 1
        }
      ]
      return <KnowledgeCheck questions={questions} title="Check: Interviews & Question Design" subtitle="Final self-report check" />
    }

    if (slideType === 'question_quality') {
      return <QuestionQualityControl isPresenting={isPresenting} />
    }

    if (slideType === 'selfreport_task') {
      const taskQuestions: TaskQuestion[] = [
        {
          id: 1,
          question: "Write one open question she could ask.",
          marks: 2,
          rubric: [
            "Question allows free response/not fixed options (1 mark)",
            "Relevant to eating habits topic (1 mark)"
          ],
          sampleAnswer: "'Describe what you typically eat in a normal day' or 'How do you feel about your current eating habits?' - these allow teenagers to respond in their own words without restricted options."
        },
        {
          id: 2,
          question: "Write one closed question she could ask.",
          marks: 2,
          rubric: [
            "Question has fixed response options (1 mark)",
            "Relevant to eating habits topic (1 mark)"
          ],
          sampleAnswer: "'How many portions of fruit do you eat per day? (0 / 1-2 / 3-4 / 5+)' or 'Do you eat breakfast every day? (Yes / No)' - these have fixed options to choose from."
        },
        {
          id: 3,
          question: "Explain one strength and one limitation of using a questionnaire.",
          marks: 4,
          rubric: [
            "Identify strength - e.g. can collect data from many people quickly (1 mark)",
            "Explain strength - e.g. easy to distribute, cost-effective (1 mark)",
            "Identify limitation - e.g. social desirability bias (1 mark)",
            "Explain limitation - e.g. teens may lie about unhealthy eating (1 mark)"
          ],
          sampleAnswer: "A strength is that questionnaires can collect data from many teenagers quickly and cheaply, as they can be distributed to whole classes at once. A limitation is social desirability bias - teenagers may give answers they think are 'correct' (like claiming to eat more fruit) rather than honest answers about their actual eating habits."
        }
      ]
      return (
        <ApplicationTaskWithRubric
          title="Application Task: Self-Report"
          scenario="A psychologist wants to investigate the eating habits of teenagers. She decides to use a questionnaire."
          questions={taskQuestions}
          isPresenting={isPresenting}
        />
      )
    }

    if (slideType === 'extended') {
      const examQuestions: ExamQuestion[] = [
        {
          id: 1,
          question: "Distinguish between open and closed questions.",
          marks: 3,
          rubric: [
            "Open questions allow respondents to answer in their own words/no fixed response options (1 mark)",
            "Closed questions have fixed response options/limited choice of answers (1 mark)",
            "Example or elaboration of the difference (1 mark)"
          ],
          sampleAnswer: "Open questions allow participants to give their own responses without restriction (1), for example 'How do you feel about your diet?' Closed questions provide fixed response options that participants must choose from (1), such as 'Do you eat breakfast? Yes/No'. Open questions produce qualitative data while closed questions produce quantitative data (1)."
        },
        {
          id: 2,
          question: "Explain one strength and one limitation of using a structured interview.",
          marks: 4,
          rubric: [
            "Identify strength - e.g. easy to replicate/standardised/quantifiable (1 mark)",
            "Explain strength - e.g. same questions asked to all so can compare responses (1 mark)",
            "Identify limitation - e.g. inflexible/lacks depth (1 mark)",
            "Explain limitation - e.g. cannot follow up interesting responses/may miss important information (1 mark)"
          ],
          sampleAnswer: "A strength is that structured interviews are standardised (1) meaning every participant is asked exactly the same questions in the same order, making it easy to compare responses and replicate the study (1). A limitation is that they are inflexible (1) because the interviewer cannot deviate from the set questions, meaning they might miss interesting responses that could provide valuable insights (1)."
        },
        {
          id: 3,
          question: "Explain why a researcher might choose to use an unstructured interview rather than a questionnaire.",
          marks: 3,
          rubric: [
            "Unstructured interviews allow follow-up/probing questions (1 mark)",
            "Can explore unexpected topics/responses in depth (1 mark)",
            "Higher response rate/can clarify misunderstandings/build rapport (1 mark)"
          ],
          sampleAnswer: "A researcher might choose an unstructured interview because they can ask follow-up questions to explore interesting responses in more depth (1). Unlike a questionnaire, the interviewer can clarify any misunderstandings immediately and ensure the participant understands each question (1). Additionally, the face-to-face interaction allows rapport to develop, which may encourage more honest and detailed responses (1)."
        }
      ]
      return <ExamQuestionsWithRubric title="Self-Report Methods" questions={examQuestions} isPresenting={isPresenting} />
    }

    return <div>Loading...</div>
  }

  // ============= AS LEVEL LESSON 24: CORRELATIONS =============
  const renderLesson24 = () => {
    const slideType = lesson24Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={9}
          title="Correlations"
          subtitle="Co-variables, Types & Analysis"
          objectives={[
            "Explain the relationship between co-variables",
            "Describe positive, negative and zero correlations",
            "Understand correlation coefficients",
            "Explain the difference between correlations and experiments"
          ]}
          isPresenting={isPresenting}
          level="AS"
        />
      )
    }

    if (slideType === 'donow') {
      const doNowQuestions: Question[] = [
        {
          id: 1,
          question: "Questionnaires are best for collecting:",
          options: ["Large amounts of data quickly", "Very detailed case studies", "Experimental data only", "Observational data"],
          correct: 0
        },
        {
          id: 2,
          question: "Open questions produce:",
          options: ["Quantitative data", "Qualitative data", "No data", "Numerical data only"],
          correct: 1
        },
        {
          id: 3,
          question: "Structured interviews have:",
          options: ["No questions", "Free-flowing conversation", "Pre-determined questions", "Only open questions"],
          correct: 2
        },
        {
          id: 4,
          question: "Social desirability bias means respondents:",
          options: ["Always lie", "Present themselves positively", "Don't understand questions", "Leave answers blank"],
          correct: 1
        },
        {
          id: 5,
          question: "A Likert scale offers:",
          options: ["Yes/No answers", "Multiple choice", "Strongly agree to strongly disagree", "Open responses"],
          correct: 2
        }
      ]
      return <DoNowQuiz questions={doNowQuestions} isPresenting={isPresenting} />
    }

    if (slideType === 'correlation_intro') {
      return <CorrelationIntroTeach isPresenting={isPresenting} />
    }

    if (slideType === 'types_teach') {
      return <CorrelationTypesTeach isPresenting={isPresenting} />
    }

    if (slideType === 'correlation_afl1') {
      const questions: Question[] = [
        {
          id: 1,
          question: "In a positive correlation, as one variable increases:",
          options: ["The other decreases", "The other increases", "There is no change", "We cannot tell"],
          correct: 1
        },
        {
          id: 2,
          question: "A negative correlation means:",
          options: ["The variables are unrelated", "As one increases, the other decreases", "Both variables decrease together", "There is no relationship"],
          correct: 1
        },
        {
          id: 3,
          question: "A zero correlation indicates:",
          options: ["A strong relationship", "A negative relationship", "No relationship between variables", "A perfect positive relationship"],
          correct: 2
        }
      ]
      return <KnowledgeCheck questions={questions} title="Check: Correlation Types" subtitle="Test your understanding so far" />
    }

    if (slideType === 'coefficient_teach') {
      return <CoefficientTeach isPresenting={isPresenting} />
    }

    if (slideType === 'difference_teach') {
      return <CorrelationVsExperimentTeach isPresenting={isPresenting} />
    }

    if (slideType === 'correlation_afl2') {
      const questions: Question[] = [
        {
          id: 1,
          question: "A correlation coefficient of -0.85 indicates:",
          options: ["Weak positive relationship", "Strong positive relationship", "Strong negative relationship", "No correlation"],
          correct: 2
        },
        {
          id: 2,
          question: "Unlike experiments, correlations cannot establish:",
          options: ["Relationships between variables", "Direction of correlation", "Cause and effect", "Strength of relationship"],
          correct: 2
        },
        {
          id: 3,
          question: "The third variable problem refers to:",
          options: ["Using three variables", "An untested variable causing changes in both co-variables", "Three correlation types", "Three participants needed"],
          correct: 1
        }
      ]
      return <KnowledgeCheck questions={questions} title="Check: Coefficients & Causation" subtitle="Final correlation check" />
    }

    if (slideType === 'correlation_detective') {
      return <CorrelationDetective isPresenting={isPresenting} />
    }

    if (slideType === 'correlation_task') {
      const taskQuestions: TaskQuestion[] = [
        {
          id: 1,
          question: "Describe what a positive correlation would look like in this study.",
          marks: 2,
          rubric: [
            "As hours of revision increase, exam results increase (1 mark)",
            "Both variables change in the same direction (1 mark)"
          ],
          sampleAnswer: "A positive correlation would show that as the number of hours students spend revising increases, their exam results also increase. Students who revise more would tend to achieve higher scores."
        },
        {
          id: 2,
          question: "What would a zero correlation mean in this context?",
          marks: 2,
          rubric: [
            "No relationship between revision hours and exam results (1 mark)",
            "Knowing revision time would not help predict exam score (1 mark)"
          ],
          sampleAnswer: "A zero correlation would mean there is no relationship between hours of revision and exam results. Some students who revise a lot would get low scores, while some who revise little would get high scores - the amount of revision would not predict exam performance."
        },
        {
          id: 3,
          question: "Explain why this correlation cannot prove that revision causes better results.",
          marks: 3,
          rubric: [
            "Correlation does not equal causation/no manipulation of IV (1 mark)",
            "Third variable problem - another factor could explain both (1 mark)",
            "Example - e.g. motivation/intelligence could cause both (1 mark)"
          ],
          sampleAnswer: "A correlation cannot prove causation because no variable is being manipulated. A third variable could explain the relationship - for example, highly motivated students may both revise more AND work harder in exams, so motivation (not revision) causes better results. We cannot determine the direction of effect."
        }
      ]
      return (
        <ApplicationTaskWithRubric
          title="Application Task: Correlations"
          scenario="A researcher wants to investigate the relationship between the number of hours students spend revising and their exam results."
          questions={taskQuestions}
          isPresenting={isPresenting}
        />
      )
    }

    if (slideType === 'extended') {
      const examQuestions: ExamQuestion[] = [
        {
          id: 1,
          question: "Explain the difference between a positive and a negative correlation.",
          marks: 3,
          rubric: [
            "Positive correlation: as one variable increases, the other increases (1 mark)",
            "Negative correlation: as one variable increases, the other decreases (1 mark)",
            "Example or further elaboration of either (1 mark)"
          ],
          sampleAnswer: "A positive correlation is when both co-variables increase together (1), for example as hours of sleep increase, concentration levels also increase. A negative correlation is when one co-variable increases as the other decreases (1), for example as stress levels increase, immune system functioning decreases. Both show a relationship but in opposite directions (1)."
        },
        {
          id: 2,
          question: "Explain why correlations cannot establish cause and effect.",
          marks: 3,
          rubric: [
            "No manipulation of variables/no IV and DV (1 mark)",
            "Third variable problem/extraneous variables may explain relationship (1 mark)",
            "Cannot determine direction of causality/which variable affects which (1 mark)"
          ],
          sampleAnswer: "Correlations cannot establish cause and effect because there is no manipulation of an independent variable (1). A third variable that has not been measured could be responsible for the relationship between the two co-variables (1). Additionally, even if two variables are related, we cannot determine which one is causing the change in the other - the direction of causality is unknown (1)."
        },
        {
          id: 3,
          question: "Outline one strength and one limitation of using correlations in psychological research.",
          marks: 4,
          rubric: [
            "Identify strength - e.g. can study variables that cannot be manipulated (1 mark)",
            "Explain strength - e.g. useful for initial research/ethical when manipulation not possible (1 mark)",
            "Identify limitation - e.g. cannot establish cause and effect (1 mark)",
            "Explain limitation - e.g. third variables may be responsible/direction of effect unknown (1 mark)"
          ],
          sampleAnswer: "A strength of correlations is that they allow researchers to study variables that cannot be ethically or practically manipulated (1), such as the relationship between childhood trauma and adult mental health, providing valuable insights where experiments are not possible (1). A limitation is that correlations cannot demonstrate causation (1), meaning we cannot conclude that one variable causes changes in another because unmeasured third variables may be responsible for the observed relationship (1)."
        }
      ]
      return <ExamQuestionsWithRubric title="Correlations" questions={examQuestions} isPresenting={isPresenting} />
    }

    return <div>Loading...</div>
  }

  // ============= AS LEVEL LESSON 25: KINDS OF DATA =============
  const renderLesson25 = () => {
    const slideType = lesson25Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={10}
          title="Kinds of Data"
          subtitle="Quantitative, Qualitative & Secondary"
          objectives={[
            "Distinguish between quantitative and qualitative data",
            "Distinguish between primary and secondary data",
            "Understand the process and value of meta-analysis"
          ]}
          isPresenting={isPresenting}
          level="AS"
        />
      )
    }

    if (slideType === 'donow') {
      const doNowQuestions: Question[] = [
        {
          id: 1,
          question: "A positive correlation means:",
          options: ["As one variable increases, the other decreases", "As one variable increases, the other increases", "There is no relationship", "One variable causes the other"],
          correct: 1
        },
        {
          id: 2,
          question: "A correlation coefficient of +0.90 indicates:",
          options: ["Weak positive", "Weak negative", "Strong positive", "No correlation"],
          correct: 2
        },
        {
          id: 3,
          question: "Correlations are plotted on:",
          options: ["Bar charts", "Histograms", "Scattergrams", "Pie charts"],
          correct: 2
        },
        {
          id: 4,
          question: "The 'third variable problem' refers to:",
          options: ["Using three participants", "An untested variable affecting both co-variables", "Having three hypotheses", "Three types of correlation"],
          correct: 1
        },
        {
          id: 5,
          question: "Unlike experiments, correlations cannot establish:",
          options: ["Relationships", "Cause and effect", "Strength", "Direction"],
          correct: 1
        }
      ]
      return <DoNowQuiz questions={doNowQuestions} isPresenting={isPresenting} />
    }

    if (slideType === 'quant_qual_teach') {
      return <QuantQualTeach isPresenting={isPresenting} />
    }

    if (slideType === 'data_afl1') {
      const questions: Question[] = [
        {
          id: 1,
          question: "Quantitative data is expressed in:",
          options: ["Words and descriptions", "Numbers and measurements", "Pictures only", "Categories only"],
          correct: 1
        },
        {
          id: 2,
          question: "Qualitative data provides:",
          options: ["Easy statistical analysis", "Rich, detailed insight", "Only numerical ratings", "Objective measurements"],
          correct: 1
        },
        {
          id: 3,
          question: "A limitation of quantitative data is that it:",
          options: ["Cannot be compared", "May lack detail and context", "Is always subjective", "Cannot be analysed"],
          correct: 1
        }
      ]
      return <KnowledgeCheck questions={questions} title="Check: Quantitative vs Qualitative" subtitle="Test your understanding so far" />
    }

    if (slideType === 'primary_secondary_teach') {
      return <PrimarySecondaryTeach isPresenting={isPresenting} />
    }

    if (slideType === 'meta_teach') {
      return <MetaAnalysisTeach isPresenting={isPresenting} />
    }

    if (slideType === 'data_afl2') {
      const questions: Question[] = [
        {
          id: 1,
          question: "Primary data is collected:",
          options: ["From government records", "First-hand by the researcher for this study", "From published studies", "From textbooks"],
          correct: 1
        },
        {
          id: 2,
          question: "Secondary data is:",
          options: ["Always more reliable", "Data collected by someone else for another purpose", "Only numerical", "Always more detailed"],
          correct: 1
        },
        {
          id: 3,
          question: "A meta-analysis combines:",
          options: ["One study's results", "Findings from many separate studies", "Only quantitative data", "Only qualitative data"],
          correct: 1
        }
      ]
      return <KnowledgeCheck questions={questions} title="Check: Primary, Secondary & Meta-Analysis" subtitle="Final data types check" />
    }

    if (slideType === 'data_sorting') {
      return <DataSortingCentre isPresenting={isPresenting} />
    }

    if (slideType === 'data_task') {
      const taskQuestions: TaskQuestion[] = [
        {
          id: 1,
          question: "Identify which data is quantitative and which is qualitative.",
          marks: 2,
          rubric: [
            "Heart rate is quantitative (numerical/measurable) (1 mark)",
            "Descriptions of feelings are qualitative (words/non-numerical) (1 mark)"
          ],
          sampleAnswer: "Heart rate measurements are quantitative data because they are numerical (e.g., 85 bpm). The descriptions of how participants felt are qualitative data because they are expressed in words rather than numbers."
        },
        {
          id: 2,
          question: "Is this primary or secondary data? Explain why.",
          marks: 2,
          rubric: [
            "Primary data (1 mark)",
            "Because it is collected first-hand by the researcher for this specific study (1 mark)"
          ],
          sampleAnswer: "This is primary data because the researcher is collecting it herself, first-hand, specifically for this study. She is directly measuring heart rate and gathering participant responses for her own research purposes."
        },
        {
          id: 3,
          question: "Explain one strength and one limitation of using qualitative data in this study.",
          marks: 3,
          rubric: [
            "Identify strength - e.g. provides rich, detailed information (1 mark)",
            "Explain - e.g. captures how stress actually feels to participants (1 mark)",
            "Identify and explain limitation - e.g. subjective/difficult to analyse/compare (1 mark)"
          ],
          sampleAnswer: "A strength is that qualitative data provides rich detail about the subjective experience of stress - participants can express exactly how they felt in their own words, capturing nuances that numbers cannot. A limitation is that the data is subjective and difficult to analyse statistically or compare across participants."
        }
      ]
      return (
        <ApplicationTaskWithRubric
          title="Application Task: Data Types"
          scenario="A researcher conducts an experiment on stress. She measures heart rate during a stressful task and also asks participants to describe how they felt."
          questions={taskQuestions}
          isPresenting={isPresenting}
        />
      )
    }

    if (slideType === 'extended') {
      const examQuestions: ExamQuestion[] = [
        {
          id: 1,
          question: "Distinguish between quantitative and qualitative data.",
          marks: 3,
          rubric: [
            "Quantitative data is numerical/can be counted or measured (1 mark)",
            "Qualitative data is non-numerical/descriptive/in words (1 mark)",
            "Example of each or further elaboration (1 mark)"
          ],
          sampleAnswer: "Quantitative data is numerical and can be measured or counted (1), for example reaction times in milliseconds or scores on a memory test. Qualitative data is non-numerical and expressed in words (1), such as descriptions of how participants felt during an experiment. Quantitative data can be statistically analysed while qualitative data provides rich detail (1)."
        },
        {
          id: 2,
          question: "Explain one strength and one limitation of using secondary data.",
          marks: 4,
          rubric: [
            "Identify strength - e.g. saves time/money/already collected (1 mark)",
            "Explain strength - e.g. large datasets available/can study historical trends (1 mark)",
            "Identify limitation - e.g. may not fit research needs/quality unknown (1 mark)",
            "Explain limitation - e.g. collected for different purpose/may lack validity (1 mark)"
          ],
          sampleAnswer: "A strength of secondary data is that it saves considerable time and resources (1) as the researcher does not need to collect the data themselves, allowing access to large datasets that would be impossible to collect independently (1). A limitation is that the data was collected for a different purpose (1), meaning it may not perfectly match the researcher's needs and the researcher has no control over how it was collected, potentially affecting its validity (1)."
        },
        {
          id: 3,
          question: "Explain what is meant by 'meta-analysis'.",
          marks: 3,
          rubric: [
            "Combines/analyses findings from multiple studies (1 mark)",
            "On the same topic/research question (1 mark)",
            "To reach an overall conclusion/identify patterns/increase reliability (1 mark)"
          ],
          sampleAnswer: "A meta-analysis is a research method that statistically combines the results from multiple studies (1) that have investigated the same research question or topic (1). By pooling data from many studies, meta-analysis increases statistical power and allows researchers to draw more reliable overall conclusions about the effect being studied (1)."
        }
      ]
      return <ExamQuestionsWithRubric title="Kinds of Data" questions={examQuestions} isPresenting={isPresenting} />
    }

    return <div>Loading...</div>
  }

  // ============= AS LEVEL LESSON 26: DESCRIPTIVE STATISTICS =============
  const renderLesson26 = () => {
    const slideType = lesson26Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={11}
          title="Descriptive Statistics"
          subtitle="Measures of Central Tendency & Dispersion"
          objectives={[
            "Calculate and interpret mean, median and mode",
            "Calculate range and standard deviation",
            "Understand when to use each measure"
          ]}
          isPresenting={isPresenting}
          level="AS"
        />
      )
    }

    if (slideType === 'donow') {
      const doNowQuestions: Question[] = [
        {
          id: 1,
          question: "Quantitative data is expressed in:",
          options: ["Words and descriptions", "Numbers", "Pictures", "Categories only"],
          correct: 1
        },
        {
          id: 2,
          question: "Primary data is:",
          options: ["Collected from other research", "First-hand by the researcher", "Always qualitative", "Government data"],
          correct: 1
        },
        {
          id: 3,
          question: "Meta-analysis:",
          options: ["Uses one study", "Combines findings from many studies", "Only uses interviews", "Is always unreliable"],
          correct: 1
        },
        {
          id: 4,
          question: "Qualitative data is likely from:",
          options: ["Heart rate measures", "Experiments", "Open questions and interviews", "Reaction time tests"],
          correct: 2
        },
        {
          id: 5,
          question: "A limitation of secondary data is:",
          options: ["It's time consuming to collect", "May not fit research aims", "Always unreliable", "Cannot be analysed"],
          correct: 1
        }
      ]
      return <DoNowQuiz questions={doNowQuestions} isPresenting={isPresenting} />
    }

    if (slideType === 'central_teach') {
      return <CentralTendencyTeach isPresenting={isPresenting} />
    }

    if (slideType === 'stats_afl1') {
      const questions: Question[] = [
        {
          id: 1,
          question: "The mean is calculated by:",
          options: ["Finding the middle value", "Adding all values and dividing by the number of values", "Finding the most common value", "Subtracting lowest from highest"],
          correct: 1
        },
        {
          id: 2,
          question: "The median is:",
          options: ["The total divided by the count", "The middle value when data is ordered", "The most frequent value", "The range of the data"],
          correct: 1
        },
        {
          id: 3,
          question: "A limitation of the mean is that it is:",
          options: ["Too simple", "Affected by extreme values", "Cannot be calculated", "Only works with words"],
          correct: 1
        }
      ]
      return <KnowledgeCheck questions={questions} title="Check: Central Tendency" subtitle="Test your understanding so far" />
    }

    if (slideType === 'dispersion_teach') {
      return <DispersionTeach isPresenting={isPresenting} />
    }

    if (slideType === 'choosing_teach') {
      return <ChoosingStatsTeach isPresenting={isPresenting} />
    }

    if (slideType === 'stats_afl2') {
      const questions: Question[] = [
        {
          id: 1,
          question: "The range is calculated by:",
          options: ["Adding all values", "Subtracting lowest value from highest value", "Finding the average", "Counting all values"],
          correct: 1
        },
        {
          id: 2,
          question: "A high standard deviation means data is:",
          options: ["Clustered closely together", "Spread out widely", "All the same value", "Categorical"],
          correct: 1
        },
        {
          id: 3,
          question: "For categorical data (like favourite colour), you should use:",
          options: ["Mean", "Median", "Mode", "Standard deviation"],
          correct: 2
        }
      ]
      return <KnowledgeCheck questions={questions} title="Check: Dispersion & Choosing Measures" subtitle="Final statistics check" />
    }

    if (slideType === 'stats_calculator') {
      return <StatisticsCalculator isPresenting={isPresenting} />
    }

    if (slideType === 'stats_task') {
      const taskQuestions: TaskQuestion[] = [
        {
          id: 1,
          question: "Calculate the mean, median and mode.",
          marks: 3,
          rubric: [
            "Mean = 98 ÷ 9 = 10.89 (accept 10.9 or 11) (1 mark)",
            "Median = 9 (middle value when ordered) (1 mark)",
            "Mode = 8 (most frequent value) (1 mark)"
          ],
          sampleAnswer: "Mean: 5+7+8+8+9+10+12+14+25 = 98; 98÷9 = 10.89. Median: Data is already ordered, middle value (5th of 9) = 9. Mode: 8 appears twice, all other values appear once, so mode = 8."
        },
        {
          id: 2,
          question: "Calculate the range.",
          marks: 1,
          rubric: [
            "Range = 25 - 5 = 20 (1 mark)"
          ],
          sampleAnswer: "Range = highest value - lowest value = 25 - 5 = 20"
        },
        {
          id: 3,
          question: "Explain why the median might be a better measure of central tendency than the mean for this data.",
          marks: 3,
          rubric: [
            "There is an extreme score/outlier (25) in the data (1 mark)",
            "This pulls the mean up/makes it unrepresentative (1 mark)",
            "Median is not affected by extreme scores/gives more typical value (1 mark)"
          ],
          sampleAnswer: "The data contains an extreme score (25) which is much higher than the other values. This outlier pulls the mean up to 10.89, which is higher than most of the actual scores. The median (9) is not affected by this extreme value and better represents the typical memory performance of participants."
        }
      ]
      return (
        <ApplicationTaskWithRubric
          title="Application Task: Statistics"
          scenario="Participants remembered the following number of words:"
          scenarioData="5, 7, 8, 8, 9, 10, 12, 14, 25"
          questions={taskQuestions}
          isPresenting={isPresenting}
        />
      )
    }

    if (slideType === 'extended') {
      const examQuestions: ExamQuestion[] = [
        {
          id: 1,
          question: "Explain one strength and one limitation of using the mean as a measure of central tendency.",
          marks: 4,
          rubric: [
            "Identify strength - e.g. uses all data/most sensitive (1 mark)",
            "Explain strength - e.g. gives most representative average/accounts for all values (1 mark)",
            "Identify limitation - e.g. affected by extreme scores/outliers (1 mark)",
            "Explain limitation - e.g. can give unrepresentative/misleading average (1 mark)"
          ],
          sampleAnswer: "A strength of the mean is that it uses all the data in its calculation (1), making it the most sensitive measure of central tendency as every value contributes to the final average (1). A limitation is that the mean is distorted by extreme scores or outliers (1), which can pull the average up or down and give an unrepresentative value that doesn't reflect the typical score (1)."
        },
        {
          id: 2,
          question: "Explain why standard deviation is more informative than the range.",
          marks: 2,
          rubric: [
            "Standard deviation uses all data points/range only uses two values (1 mark)",
            "Standard deviation not affected by extreme values/anomalies as much as range (1 mark)"
          ],
          sampleAnswer: "Standard deviation is more informative because it takes into account every value in the data set rather than just the highest and lowest (1). Unlike the range, standard deviation is less affected by a single extreme score or outlier, giving a more accurate picture of how spread out the data actually is (1)."
        },
        {
          id: 3,
          question: "A researcher collects data on favourite colours. Which measure of central tendency should they use? Explain why.",
          marks: 2,
          rubric: [
            "Mode (1 mark)",
            "Because data is categorical/nominal/cannot calculate mean or median with words/colours (1 mark)"
          ],
          sampleAnswer: "The researcher should use the mode (1) because the data on favourite colours is categorical/nominal data, meaning you cannot perform mathematical calculations on it - you cannot find the 'average' of colours like red and blue, but you can identify which colour appears most frequently (1)."
        }
      ]
      return <ExamQuestionsWithRubric title="Descriptive Statistics" questions={examQuestions} isPresenting={isPresenting} />
    }

    return <div>Loading...</div>
  }

  // ============= AS LEVEL LESSON 27: DATA PRESENTATION =============
  const renderLesson27 = () => {
    const slideType = lesson27Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={12}
          title="Data Presentation"
          subtitle="Tables, Graphs & Distributions"
          objectives={[
            "Construct and interpret tables and graphs",
            "Distinguish between bar charts, histograms and scattergrams",
            "Understand normal and skewed distributions"
          ]}
          isPresenting={isPresenting}
          level="AS"
        />
      )
    }

    if (slideType === 'donow') {
      const doNowQuestions: Question[] = [
        {
          id: 1,
          question: "The mean is calculated by:",
          options: ["Finding the middle value", "Finding the most common value", "Adding all values and dividing by total", "Subtracting lowest from highest"],
          correct: 2
        },
        {
          id: 2,
          question: "The median is best used when:",
          options: ["Data is normally distributed", "There are extreme values", "Data is categorical", "The mode doesn't exist"],
          correct: 1
        },
        {
          id: 3,
          question: "Range is calculated as:",
          options: ["Mean minus mode", "Highest minus lowest", "Sum of all values", "Number of values"],
          correct: 1
        },
        {
          id: 4,
          question: "A low standard deviation means:",
          options: ["Data is spread out", "Data is clustered", "There is no pattern", "The mean is wrong"],
          correct: 1
        },
        {
          id: 5,
          question: "The mode is the:",
          options: ["Middle value", "Average value", "Most frequent value", "Highest value"],
          correct: 2
        }
      ]
      return <DoNowQuiz questions={doNowQuestions} isPresenting={isPresenting} />
    }

    if (slideType === 'tables_teach') {
      return <TablesTeach isPresenting={isPresenting} />
    }

    if (slideType === 'graphs_teach') {
      return <GraphsTeachAS isPresenting={isPresenting} />
    }

    if (slideType === 'graphs_afl1') {
      const questions: Question[] = [
        {
          id: 1,
          question: "Bar charts are used for:",
          options: ["Continuous data", "Discrete/categorical data", "Correlational data", "Qualitative data only"],
          correct: 1
        },
        {
          id: 2,
          question: "In a histogram, the bars:",
          options: ["Don't touch", "Touch", "Overlap", "Have gaps of varying sizes"],
          correct: 1
        },
        {
          id: 3,
          question: "A scattergram is used to display:",
          options: ["Mean scores", "Frequency counts", "Correlational data", "Categorical data"],
          correct: 2
        }
      ]
      return <KnowledgeCheck questions={questions} title="Check: Graph Types" subtitle="Test your understanding so far" />
    }

    if (slideType === 'distributions_teach') {
      return <DistributionsTeach isPresenting={isPresenting} />
    }

    if (slideType === 'graphs_afl2') {
      const questions: Question[] = [
        {
          id: 1,
          question: "In a normal distribution, mean, median and mode are:",
          options: ["All different", "The same", "Only two are equal", "Not calculable"],
          correct: 1
        },
        {
          id: 2,
          question: "In a positive skew, most scores are at the:",
          options: ["High end", "Low end", "Middle", "Both extremes"],
          correct: 1
        },
        {
          id: 3,
          question: "In a negative skew, the tail points:",
          options: ["Right (positive)", "Left (negative)", "Upward", "Downward"],
          correct: 1
        }
      ]
      return <KnowledgeCheck questions={questions} title="Check: Distributions" subtitle="Test your understanding so far" />
    }

    if (slideType === 'graph_master') {
      return <GraphMaster isPresenting={isPresenting} />
    }

    if (slideType === 'graphs_task') {
      const taskQuestions: TaskQuestion[] = [
        {
          id: 1,
          question: "Explain why a histogram rather than a bar chart should be used.",
          marks: 2,
          rubric: [
            "Exam scores are continuous/interval data (1 mark)",
            "Histograms are for continuous data/bar charts for discrete categories (1 mark)"
          ],
          sampleAnswer: "Exam scores are continuous numerical data (interval level) that can take any value within a range. Histograms are used for continuous data where the bars touch to show the continuous nature, whereas bar charts are for discrete categories with gaps between bars."
        },
        {
          id: 2,
          question: "The data shows most students scored highly with a few low scores. What type of distribution is this?",
          marks: 2,
          rubric: [
            "Negative skew (1 mark)",
            "Because most scores are at the high end with a tail towards lower scores (1 mark)"
          ],
          sampleAnswer: "This is a negative skew (also called left skew). Most scores cluster at the high end of the distribution, with a long tail extending towards the lower scores where a few students performed poorly."
        },
        {
          id: 3,
          question: "Explain one difference between bar charts and histograms.",
          marks: 3,
          rubric: [
            "Bar chart bars have gaps / histogram bars touch (1 mark)",
            "Bar charts for discrete/categorical data (1 mark)",
            "Histograms for continuous/interval data (1 mark)"
          ],
          sampleAnswer: "Bar charts have gaps between the bars and are used for discrete, categorical data like favourite colour or experimental condition. Histograms have no gaps between bars (they touch) and are used for continuous, interval data like test scores or reaction times."
        }
      ]
      return (
        <ApplicationTaskWithRubric
          title="Application Task: Graphs"
          scenario="A teacher recorded the exam scores of her psychology class and wants to display this data appropriately."
          questions={taskQuestions}
          isPresenting={isPresenting}
        />
      )
    }

    if (slideType === 'extended') {
      const examQuestions: ExamQuestion[] = [
        {
          id: 1,
          question: "Describe the features of a normal distribution.",
          marks: 3,
          rubric: [
            "Bell-shaped/symmetrical curve (1 mark)",
            "Mean, median and mode are the same/in the centre (1 mark)",
            "Most data clusters around the mean/tails at both ends (1 mark)"
          ],
          sampleAnswer: "A normal distribution forms a bell-shaped, symmetrical curve (1). The mean, median and mode all fall at the same point in the centre of the distribution (1). Most of the data clusters around the mean with progressively fewer scores towards the extremes, creating symmetrical tails at both ends (1)."
        },
        {
          id: 2,
          question: "Explain the difference between a positive and a negative skew.",
          marks: 2,
          rubric: [
            "Positive skew: most scores at lower end/tail extends towards higher values (1 mark)",
            "Negative skew: most scores at higher end/tail extends towards lower values (1 mark)"
          ],
          sampleAnswer: "A positive skew occurs when most scores cluster at the lower end of the distribution with a long tail extending towards higher values (1). A negative skew is the opposite, where most scores cluster at the higher end with a long tail extending towards lower values (1)."
        },
        {
          id: 3,
          question: "A researcher is displaying mean scores from two conditions (A and B). What type of graph should they use? Give two reasons for your answer.",
          marks: 4,
          rubric: [
            "Bar chart (1 mark)",
            "First reason - e.g. comparing discrete/separate categories/conditions (1 mark)",
            "Second reason - e.g. data is discontinuous/shows differences between groups clearly/appropriate for experimental conditions (1 mark)",
            "Elaboration or additional relevant detail (1 mark)"
          ],
          sampleAnswer: "The researcher should use a bar chart (1). Bar charts are appropriate because they are used to display discrete/separate categories such as the two experimental conditions A and B (1). They allow for clear visual comparison between the mean scores of each group (1). Additionally, the gaps between bars emphasise that these are distinct conditions rather than continuous data (1)."
        }
      ]
      return <ExamQuestionsWithRubric title="Data Presentation" questions={examQuestions} isPresenting={isPresenting} />
    }

    return <div>Loading...</div>
  }

  // ============= AS LEVEL LESSON 28: MATHEMATICAL SKILLS =============
  const renderLesson28 = () => {
    const slideType = lesson28Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={13}
          title="Mathematical Skills"
          subtitle="Arithmetic, Percentages & Fractions"
          objectives={[
            "Demonstrate knowledge of arithmetic and numerical computation",
            "Calculate and interpret percentages",
            "Convert between fractions, decimals and percentages"
          ]}
          isPresenting={isPresenting}
          level="AS"
        />
      )
    }

    if (slideType === 'donow') {
      const doNowQuestions: Question[] = [
        {
          id: 1,
          question: "In a bar chart, bars:",
          options: ["Touch each other", "Don't touch", "Overlap", "Vary in width"],
          correct: 1
        },
        {
          id: 2,
          question: "A histogram is used for:",
          options: ["Categorical data", "Continuous data", "Qualitative data", "Correlations"],
          correct: 1
        },
        {
          id: 3,
          question: "A scattergram displays:",
          options: ["Means", "Categories", "Correlational data", "Frequencies"],
          correct: 2
        },
        {
          id: 4,
          question: "In a positive skew, the tail points:",
          options: ["Left", "Right", "Up", "Down"],
          correct: 1
        },
        {
          id: 5,
          question: "In a normal distribution:",
          options: ["Mean is highest", "Mode is highest", "Mean, median and mode are equal", "Median is highest"],
          correct: 2
        }
      ]
      return <DoNowQuiz questions={doNowQuestions} isPresenting={isPresenting} />
    }

    if (slideType === 'arithmetic_teach') {
      return (
        <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-rose-400 mb-6">Arithmetic & Numerical Computation</h2>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-rose-500/30 mb-6">
              <p className="text-gray-200">These skills underpin all statistical work in psychology research.</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
                <h3 className="text-lg font-bold text-blue-400 mb-3">Basic Operations</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Addition (+) and Subtraction (−)</li>
                  <li>• Multiplication (×) and Division (÷)</li>
                  <li>• Order of operations: BIDMAS</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
                <h3 className="text-lg font-bold text-green-400 mb-3">BIDMAS</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li><span className="font-bold">B</span>rackets first</li>
                  <li><span className="font-bold">I</span>ndices (powers)</li>
                  <li><span className="font-bold">D</span>ivision and <span className="font-bold">M</span>ultiplication</li>
                  <li><span className="font-bold">A</span>ddition and <span className="font-bold">S</span>ubtraction</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (slideType === 'percentages_teach') {
      return (
        <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-rose-400 mb-6">Percentages</h2>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-rose-500/30 mb-6">
              <p className="text-xl text-gray-200">
                A percentage is a proportion <span className="text-rose-400 font-bold">out of 100</span>.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800/50 rounded-xl p-5 border border-amber-500/30">
                <h3 className="text-lg font-bold text-amber-400 mb-3">Finding a Percentage</h3>
                <p className="text-gray-300 mb-2">To find what percentage A is of B:</p>
                <p className="text-2xl text-center font-bold text-cyan-400">(A ÷ B) × 100</p>
                <p className="text-gray-400 text-sm mt-2">E.g., 15 out of 60 = (15 ÷ 60) × 100 = 25%</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-5 border border-cyan-500/30">
                <h3 className="text-lg font-bold text-cyan-400 mb-3">Calculating a Percentage</h3>
                <p className="text-gray-300 mb-2">To find X% of a number:</p>
                <p className="text-2xl text-center font-bold text-amber-400">(X ÷ 100) × number</p>
                <p className="text-gray-400 text-sm mt-2">E.g., 20% of 80 = (20 ÷ 100) × 80 = 16</p>
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (slideType === 'maths_afl1') {
      const questions: Question[] = [
        {
          id: 1,
          question: "According to BIDMAS, which operation comes first in 3 + 4 × 2?",
          options: ["Addition", "Multiplication", "They are equal", "Depends on the calculator"],
          correct: 1
        },
        {
          id: 2,
          question: "24 out of 80 as a percentage is:",
          options: ["24%", "30%", "40%", "80%"],
          correct: 1
        },
        {
          id: 3,
          question: "To find 15% of 60, you calculate:",
          options: ["15 + 60", "60 ÷ 15", "(15 ÷ 100) × 60", "15 × 60 ÷ 10"],
          correct: 2
        }
      ]
      return <KnowledgeCheck questions={questions} title="Check: Arithmetic & Percentages" subtitle="Test your understanding so far" />
    }

    if (slideType === 'fractions_teach') {
      return (
        <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-rose-400 mb-6">Fractions, Decimals & Ratios</h2>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-rose-500/30 mb-6">
              <h3 className="text-lg font-bold text-amber-400 mb-3">Converting Between Forms</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-gray-700/50 rounded-lg">
                  <p className="text-gray-400 text-sm">Fraction</p>
                  <p className="text-2xl font-bold text-white">1/4</p>
                </div>
                <div className="p-3 bg-gray-700/50 rounded-lg">
                  <p className="text-gray-400 text-sm">Decimal</p>
                  <p className="text-2xl font-bold text-white">0.25</p>
                </div>
                <div className="p-3 bg-gray-700/50 rounded-lg">
                  <p className="text-gray-400 text-sm">Percentage</p>
                  <p className="text-2xl font-bold text-white">25%</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
              <h3 className="text-lg font-bold text-green-400 mb-3">Ratios</h3>
              <p className="text-gray-300">Express proportions as A:B. Simplify by dividing by common factors.</p>
              <p className="text-gray-400 text-sm mt-2">E.g., 20:30 simplifies to 2:3 (both divided by 10)</p>
            </div>
          </div>
        </div>
      )
    }

    if (slideType === 'maths_afl2') {
      const questions: Question[] = [
        {
          id: 1,
          question: "The decimal 0.5 as a fraction is:",
          options: ["1/4", "1/2", "1/5", "2/5"],
          correct: 1
        },
        {
          id: 2,
          question: "The ratio 30:45 simplifies to:",
          options: ["2:3", "3:4", "6:9", "1:2"],
          correct: 0
        },
        {
          id: 3,
          question: "0.25 as a percentage is:",
          options: ["2.5%", "25%", "0.25%", "250%"],
          correct: 1
        }
      ]
      return <KnowledgeCheck questions={questions} title="Check: Fractions & Ratios" subtitle="Test your understanding so far" />
    }

    if (slideType === 'maths_bootcamp') {
      return <MathsSkillsBootCamp isPresenting={isPresenting} />
    }

    if (slideType === 'maths_task') {
      const taskQuestions: TaskQuestion[] = [
        {
          id: 1,
          question: "18 participants out of 72 showed improvement. What percentage is this?",
          marks: 2,
          rubric: [
            "Correct calculation: 18 ÷ 72 × 100 (1 mark)",
            "Correct answer: 25% (1 mark)"
          ],
          sampleAnswer: "18 ÷ 72 = 0.25; 0.25 × 100 = 25%. So 25% of participants showed improvement."
        },
        {
          id: 2,
          question: "Calculate 35% of 60.",
          marks: 2,
          rubric: [
            "Correct method: 35 ÷ 100 × 60 OR 60 × 0.35 (1 mark)",
            "Correct answer: 21 (1 mark)"
          ],
          sampleAnswer: "35% of 60 = 0.35 × 60 = 21"
        },
        {
          id: 3,
          question: "Convert 3/8 into a decimal and a percentage.",
          marks: 2,
          rubric: [
            "Decimal: 3 ÷ 8 = 0.375 (1 mark)",
            "Percentage: 0.375 × 100 = 37.5% (1 mark)"
          ],
          sampleAnswer: "3 ÷ 8 = 0.375 (decimal). To convert to percentage: 0.375 × 100 = 37.5%"
        },
        {
          id: 4,
          question: "Simplify the ratio 45:60.",
          marks: 2,
          rubric: [
            "Find common factor (15) or work towards simplest form (1 mark)",
            "Correct answer: 3:4 (1 mark)"
          ],
          sampleAnswer: "45:60 - divide both by 15 = 3:4"
        }
      ]
      return (
        <ApplicationTaskWithRubric
          title="Application Task: Maths Skills"
          scenario="Answer the following mathematical questions relevant to psychological research."
          questions={taskQuestions}
          isPresenting={isPresenting}
        />
      )
    }

    if (slideType === 'extended') {
      const examQuestions: ExamQuestion[] = [
        {
          id: 1,
          question: "A researcher found that 24 out of 96 participants showed anxiety symptoms. Calculate this as a percentage and simplify as a ratio.",
          marks: 3,
          rubric: [
            "Calculation: 24 ÷ 96 × 100 = 25% (1 mark)",
            "Percentage answer: 25% (1 mark)",
            "Ratio simplified: 24:96 = 1:4 (1 mark)"
          ],
          sampleAnswer: "To find the percentage: 24 ÷ 96 × 100 = 25% (1). So 25% of participants showed anxiety symptoms (1). As a ratio: 24:96 simplifies to 1:4 (dividing both by 24), meaning 1 in 4 participants showed symptoms (1).",
          isCalculation: true,
          correctAnswer: 25
        },
        {
          id: 2,
          question: "The mean score in Condition A was 45. If participants in Condition B scored 20% higher, what was their mean score?",
          marks: 2,
          rubric: [
            "Calculate 20% of 45 = 9 (1 mark)",
            "Add to get 45 + 9 = 54 (1 mark)"
          ],
          sampleAnswer: "First calculate 20% of 45: 45 × 0.20 = 9 (1). Then add this to the original score: 45 + 9 = 54. So the mean score in Condition B was 54 (1).",
          isCalculation: true,
          correctAnswer: 54
        },
        {
          id: 3,
          question: "A study has 120 participants. If 3/5 are female, how many males are in the study?",
          marks: 2,
          rubric: [
            "Calculate females: 120 × 3/5 = 72 (1 mark)",
            "Calculate males: 120 - 72 = 48 (1 mark)"
          ],
          sampleAnswer: "First find the number of females: 120 × 3/5 = 72 females (1). Then subtract from total: 120 - 72 = 48 males in the study (1).",
          isCalculation: true,
          correctAnswer: 48
        }
      ]
      return <ExamQuestionsWithRubric title="Mathematical Skills" questions={examQuestions} isPresenting={isPresenting} />
    }

    return <div>Loading...</div>
  }

  // ============= AS LEVEL LESSON 29: STATISTICAL TESTING =============
  const renderLesson29 = () => {
    const slideType = lesson29Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={14}
          title="Statistical Testing"
          subtitle="The Sign Test & Significance"
          objectives={[
            "Understand the purpose of statistical testing",
            "Explain probability and significance (p ≤ 0.05)",
            "Calculate and interpret the sign test",
            "Use a table of critical values"
          ]}
          isPresenting={isPresenting}
          level="AS"
        />
      )
    }

    if (slideType === 'donow') {
      const doNowQuestions: Question[] = [
        {
          id: 1,
          question: "BIDMAS stands for:",
          options: ["Brackets, Indices, Division, Multiplication, Addition, Subtraction", "Basic, Indices, Division, Mean, Addition, Standard", "Brackets, Interval, Data, Mean, Average, Skew", "None of the above"],
          correct: 0
        },
        {
          id: 2,
          question: "To find 30% of 50:",
          options: ["30 + 50", "(30 ÷ 100) × 50", "50 ÷ 30", "30 × 50"],
          correct: 1
        },
        {
          id: 3,
          question: "0.5 as a percentage is:",
          options: ["5%", "0.5%", "50%", "500%"],
          correct: 2
        },
        {
          id: 4,
          question: "The ratio 12:18 simplifies to:",
          options: ["1:2", "2:3", "3:4", "6:9"],
          correct: 1
        },
        {
          id: 5,
          question: "15 out of 60 as a percentage is:",
          options: ["15%", "20%", "25%", "30%"],
          correct: 2
        }
      ]
      return <DoNowQuiz questions={doNowQuestions} isPresenting={isPresenting} />
    }

    if (slideType === 'probability_teach') {
      return (
        <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-rose-400 mb-6">Probability & Significance</h2>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-rose-500/30 mb-6">
              <p className="text-xl text-gray-200">
                Statistical tests tell us the <span className="text-rose-400 font-bold">probability</span> that results occurred by chance.
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-amber-500/30">
              <h3 className="text-xl font-bold text-amber-400 mb-3">The 5% Significance Level (p ≤ 0.05)</h3>
              <p className="text-gray-300 mb-3">In psychology, we accept a <span className="font-bold">5% or less</span> probability that results are due to chance.</p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="p-3 bg-green-900/30 rounded-lg border border-green-500/30">
                  <p className="text-green-400 font-bold">p ≤ 0.05</p>
                  <p className="text-gray-300 text-sm">Results are <span className="font-bold">significant</span> - accept the alternative hypothesis</p>
                </div>
                <div className="p-3 bg-red-900/30 rounded-lg border border-red-500/30">
                  <p className="text-red-400 font-bold">p &gt; 0.05</p>
                  <p className="text-gray-300 text-sm">Results are <span className="font-bold">not significant</span> - retain the null hypothesis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (slideType === 'signtest_teach') {
      return (
        <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-rose-400 mb-6">The Sign Test</h2>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-rose-500/30 mb-6">
              <p className="text-gray-200">A simple statistical test used when:</p>
              <ul className="mt-3 text-gray-300">
                <li>• Looking for a <span className="font-bold">difference</span> between two conditions</li>
                <li>• <span className="font-bold">Repeated measures</span> or <span className="font-bold">matched pairs</span> design</li>
                <li>• Data is <span className="font-bold">nominal</span> (categories) or better</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">Steps:</h3>
              <ol className="space-y-2 text-gray-300">
                <li>1. Find difference between conditions for each participant (+, −, or 0)</li>
                <li>2. <span className="font-bold">Exclude zeros</span> (no difference)</li>
                <li>3. Count the <span className="font-bold">less frequent sign</span> (this is 'S')</li>
                <li>4. Compare S to the critical value (from tables)</li>
                <li>5. <span className="font-bold">S must be ≤ critical value</span> for significance</li>
              </ol>
            </div>
          </div>
        </div>
      )
    }

    if (slideType === 'stats_afl1') {
      const questions: Question[] = [
        {
          id: 1,
          question: "p ≤ 0.05 means there is:",
          options: ["50% chance results are due to chance", "95% chance results are due to chance", "5% or less chance results are due to chance", "100% certainty"],
          correct: 2
        },
        {
          id: 2,
          question: "The sign test is used with:",
          options: ["Independent groups only", "Correlational designs", "Repeated measures or matched pairs", "Observational studies only"],
          correct: 2
        },
        {
          id: 3,
          question: "In the sign test, participants with no difference (zeros) are:",
          options: ["Counted as positive", "Counted as negative", "Excluded from the analysis", "Counted twice"],
          correct: 2
        }
      ]
      return <KnowledgeCheck questions={questions} title="Check: Significance & Sign Test" subtitle="Test your understanding so far" />
    }

    if (slideType === 'critical_teach') {
      return (
        <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-rose-400 mb-6">Using Critical Value Tables</h2>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-rose-500/30 mb-6">
              <p className="text-gray-200">To use a table of critical values, you need:</p>
              <ul className="mt-3 text-gray-300">
                <li>• <span className="font-bold text-amber-400">N</span> - the number of participants (excluding zeros)</li>
                <li>• <span className="font-bold text-amber-400">Significance level</span> - usually 0.05</li>
                <li>• <span className="font-bold text-amber-400">One-tailed or two-tailed</span> - based on hypothesis</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
              <h3 className="text-lg font-bold text-green-400 mb-3">One-tailed vs Two-tailed</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-gray-700/50 rounded-lg">
                  <p className="font-bold text-blue-400">One-tailed</p>
                  <p className="text-gray-300 text-sm">Directional hypothesis (predicts direction of difference)</p>
                </div>
                <div className="p-3 bg-gray-700/50 rounded-lg">
                  <p className="font-bold text-purple-400">Two-tailed</p>
                  <p className="text-gray-300 text-sm">Non-directional hypothesis (just predicts a difference)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (slideType === 'stats_afl2') {
      const questions: Question[] = [
        {
          id: 1,
          question: "To use a critical value table, you need to know:",
          options: ["Only the N value", "N, significance level, and number of tails", "Only the significance level", "The actual data values"],
          correct: 1
        },
        {
          id: 2,
          question: "A one-tailed test is used when:",
          options: ["No direction is predicted", "The hypothesis is directional", "Results are not significant", "Sample size is small"],
          correct: 1
        },
        {
          id: 3,
          question: "For results to be significant in the sign test, S must be:",
          options: ["Greater than the critical value", "Equal to or less than the critical value", "Equal to zero always", "Greater than N"],
          correct: 1
        }
      ]
      return <KnowledgeCheck questions={questions} title="Check: Critical Values" subtitle="Test your understanding so far" />
    }

    if (slideType === 'test_selector') {
      return <StatisticalTestSelector isPresenting={isPresenting} />
    }

    if (slideType === 'stats_task') {
      const taskQuestions: TaskQuestion[] = [
        {
          id: 1,
          question: "Calculate the value of S.",
          marks: 2,
          rubric: [
            "Identifies that zeros are excluded so N=8 (1 mark)",
            "Correctly identifies S=1 (the less frequent sign, which is minus) (1 mark)"
          ],
          sampleAnswer: "First, remove the zeros from the data, leaving N=8 participants. Count the plus signs (+): there are 7. Count the minus signs (−): there is 1. S is the less frequent sign, so S = 1."
        },
        {
          id: 2,
          question: "Using the critical value, state whether results are significant and explain your conclusion.",
          marks: 3,
          rubric: [
            "Compares S (1) to critical value (1) - states S equals or is less than critical value (1 mark)",
            "Concludes results ARE significant (1 mark)",
            "Explains what this means - e.g., less than 5% probability results are due to chance / memory training had a real effect / reject null hypothesis (1 mark)"
          ],
          sampleAnswer: "The calculated value of S is 1, and the critical value is also 1. For results to be significant in the sign test, S must be equal to or less than the critical value. Since S (1) ≤ critical value (1), the results are significant at p≤0.05. This means there is less than a 5% probability that the improvement in memory scores was due to chance alone, so we can conclude that the memory training had a genuine positive effect."
        }
      ]
      return (
        <ApplicationTaskWithRubric
          title="📝 Application Task: Sign Test"
          scenario="10 participants completed a memory test before and after training. Signs of change were:"
          scenarioData="+, +, +, 0, +, −, +, +, 0, + (Critical value for N=8, one-tailed, p≤0.05 is 1)"
          questions={taskQuestions}
          isPresenting={isPresenting}
        />
      )
    }

    if (slideType === 'extended') {
      const examQuestions: ExamQuestion[] = [
        {
          id: 1,
          question: "Explain what is meant by p ≤ 0.05 in the context of statistical testing.",
          marks: 3,
          rubric: [
            "5% probability/5 in 100 chance (1 mark)",
            "That results are due to chance (1 mark)",
            "Therefore 95% confident results are significant/due to IV/not due to chance (1 mark)"
          ],
          sampleAnswer: "p ≤ 0.05 means there is a 5% probability, or 5 in 100 chance (1), that the results occurred by chance alone rather than due to the manipulation of the independent variable (1). This means researchers can be 95% confident that the results are significant and reflect a real effect (1)."
        },
        {
          id: 2,
          question: "Explain why a researcher might use a one-tailed rather than a two-tailed test.",
          marks: 3,
          rubric: [
            "One-tailed used when direction of results is predicted (1 mark)",
            "Based on previous research/theory suggesting specific direction (1 mark)",
            "More likely to find significant result/more statistical power (1 mark)"
          ],
          sampleAnswer: "A researcher would use a one-tailed test when they have a directional hypothesis predicting the specific direction of results (1). This would be based on previous research or established theory that strongly suggests which condition will perform better (1). One-tailed tests are also more powerful, meaning they are more likely to detect a significant effect when one exists (1)."
        },
        {
          id: 3,
          question: "State the conclusion if the calculated S value is greater than the critical value.",
          marks: 2,
          rubric: [
            "Results are not significant/fail to reject null hypothesis (1 mark)",
            "S must be equal to or less than critical value to be significant (1 mark)"
          ],
          sampleAnswer: "If the calculated S value is greater than the critical value, the results are not significant (1). In the sign test, the calculated value must be equal to or less than the critical value for the results to be statistically significant, so we fail to reject the null hypothesis (1)."
        }
      ]
      return <ExamQuestionsWithRubric title="Statistical Testing" questions={examQuestions} isPresenting={isPresenting} />
    }

    return <div>Loading...</div>
  }

  // ============= AS LEVEL LESSON 30: PEER REVIEW & ECONOMY =============
  const renderLesson30 = () => {
    const slideType = lesson30Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={15}
          title="Peer Review & The Economy"
          subtitle="Scientific Processes & Implications"
          objectives={[
            "Explain the role and process of peer review",
            "Understand the implications of research for the economy",
            "Evaluate the peer review process"
          ]}
          isPresenting={isPresenting}
          level="AS"
        />
      )
    }

    if (slideType === 'donow') {
      const doNowQuestions: Question[] = [
        {
          id: 1,
          question: "p ≤ 0.05 means there is a:",
          options: ["5% or less chance of chance results", "50% chance of chance results", "95% chance results are random", "100% certainty"],
          correct: 0
        },
        {
          id: 2,
          question: "The sign test is used with:",
          options: ["Independent groups", "Repeated measures or matched pairs", "Correlations only", "Observations only"],
          correct: 1
        },
        {
          id: 3,
          question: "In the sign test, S is the:",
          options: ["Total number of signs", "Less frequent sign count", "More frequent sign count", "Number of zeros"],
          correct: 1
        },
        {
          id: 4,
          question: "A two-tailed test is used when:",
          options: ["Direction is predicted", "No direction is predicted", "Results are significant", "Sample is large"],
          correct: 1
        },
        {
          id: 5,
          question: "For results to be significant, S must be:",
          options: ["Equal to or less than critical value", "Greater than critical value", "Equal to zero", "The same as N"],
          correct: 0
        }
      ]
      return <DoNowQuiz questions={doNowQuestions} isPresenting={isPresenting} />
    }

    if (slideType === 'peerreview_teach') {
      return (
        <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-rose-400 mb-6">What is Peer Review?</h2>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-rose-500/30 mb-6">
              <p className="text-xl text-gray-200">
                The process where <span className="text-rose-400 font-bold">expert scientists</span> assess the quality of research before it is published.
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
              <h3 className="text-lg font-bold text-amber-400 mb-3">The Process:</h3>
              <ol className="space-y-2 text-gray-300">
                <li>1. Researcher submits work to a journal</li>
                <li>2. Editor sends to experts in the field (<span className="font-bold">peers</span>)</li>
                <li>3. Peers review methodology, analysis, and conclusions</li>
                <li>4. Feedback given: accept, revise, or reject</li>
                <li>5. If accepted, research is published</li>
              </ol>
            </div>
          </div>
        </div>
      )
    }

    if (slideType === 'peerreview_eval_teach') {
      return (
        <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-rose-400 mb-6">Evaluating Peer Review</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800/50 rounded-xl p-6 border border-green-500/30">
                <h3 className="text-xl font-bold text-green-400 mb-3">✓ Strengths</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Maintains <span className="font-bold">quality</span> of published research</li>
                  <li>• Prevents <span className="font-bold">fraudulent</span> claims being published</li>
                  <li>• Identifies <span className="font-bold">flaws</span> in methodology</li>
                  <li>• Allows <span className="font-bold">funding allocation</span> to quality research</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 border border-red-500/30">
                <h3 className="text-xl font-bold text-red-400 mb-3">✗ Limitations</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• <span className="font-bold">Publication bias</span> - positive results more likely published</li>
                  <li>• Reviewers may be <span className="font-bold">biased</span> (competitors)</li>
                  <li>• <span className="font-bold">Slow process</span> - delays important findings</li>
                  <li>• <span className="font-bold">Anonymity</span> may allow unfair criticism</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (slideType === 'peer_afl1') {
      const questions: Question[] = [
        {
          id: 1,
          question: "Peer review is conducted by:",
          options: ["The original researcher", "The general public", "Expert scientists in the field", "Journal editors only"],
          correct: 2
        },
        {
          id: 2,
          question: "The main purpose of peer review is to:",
          options: ["Speed up publication", "Ensure quality of research before publication", "Increase costs", "Reduce the number of published papers"],
          correct: 1
        },
        {
          id: 3,
          question: "Publication bias refers to:",
          options: ["Reviewers being anonymous", "Positive results being more likely published", "The slow review process", "Using multiple reviewers"],
          correct: 1
        }
      ]
      return <KnowledgeCheck questions={questions} title="Check: Peer Review" subtitle="Test your understanding so far" />
    }

    if (slideType === 'economy_teach') {
      return (
        <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800`}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-rose-400 mb-6">Implications for the Economy</h2>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-rose-500/30 mb-6">
              <p className="text-gray-200">Psychological research can have significant <span className="font-bold">economic implications</span> - both positive and negative.</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800/50 rounded-xl p-5 border border-green-500/30">
                <h3 className="text-lg font-bold text-green-400 mb-3">Economic Benefits</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Effective therapies <span className="font-bold">reduce NHS costs</span></li>
                  <li>• Workplace research improves <span className="font-bold">productivity</span></li>
                  <li>• Understanding addiction saves treatment costs</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-5 border border-amber-500/30">
                <h3 className="text-lg font-bold text-amber-400 mb-3">Economic Costs</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Research <span className="font-bold">funding</span> is expensive</li>
                  <li>• Implementing findings costs money</li>
                  <li>• Unsuccessful research = wasted resources</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (slideType === 'peer_afl2') {
      const questions: Question[] = [
        {
          id: 1,
          question: "One economic benefit of psychological research is:",
          options: ["Increasing research costs", "Reducing effectiveness of treatments", "Developing cost-effective therapies", "Publishing more papers"],
          correct: 2
        },
        {
          id: 2,
          question: "Psychological research can benefit the economy by:",
          options: ["Making treatments more expensive", "Improving workplace productivity", "Increasing absenteeism", "Slowing down NHS services"],
          correct: 1
        },
        {
          id: 3,
          question: "Research funding is considered an economic cost because:",
          options: ["It always produces useful results", "It is always cheap", "It requires significant financial investment", "It has no benefits"],
          correct: 2
        }
      ]
      return <KnowledgeCheck questions={questions} title="Check: Economic Implications" subtitle="Test your understanding so far" />
    }

    if (slideType === 'peer_review_sim') {
      return <PeerReviewSimulator isPresenting={isPresenting} />
    }

    if (slideType === 'peer_task') {
      const taskQuestions: TaskQuestion[] = [
        {
          id: 1,
          question: "Describe the process of peer review that their work would go through.",
          marks: 3,
          rubric: [
            "Research submitted to journal/editor (1 mark)",
            "Sent to experts/other psychologists in the same field for review (1 mark)",
            "Reviewers check methodology/validity/conclusions and recommend accept/reject/revise (1 mark)"
          ],
          sampleAnswer: "The researcher would first submit their work to a psychology journal (1). The editor would then send the paper to two or more experts in the field of anxiety treatment for anonymous review (1). These peer reviewers would evaluate the methodology, check the validity of findings, and recommend whether to accept, reject, or request revisions to the paper (1)."
        },
        {
          id: 2,
          question: "Explain one limitation of peer review.",
          marks: 2,
          rubric: [
            "Identifies a limitation - e.g., bias, slow process, anonymity issues, publication bias, old boys' network (1 mark)",
            "Explains how this is a problem - e.g., innovative research may be rejected, delays progress, reviewers may favour certain approaches (1 mark)"
          ],
          sampleAnswer: "One limitation is that peer reviewers may be biased (1). For example, reviewers may reject research that contradicts their own theories or that uses methods they are unfamiliar with, which could prevent innovative or ground-breaking research from being published (1)."
        },
        {
          id: 3,
          question: "Explain one way this research could have positive economic implications.",
          marks: 3,
          rubric: [
            "Identifies economic benefit - e.g., reduced healthcare costs, increased productivity, fewer sick days (1 mark)",
            "Links to the specific research - e.g., effective anxiety treatment (1 mark)",
            "Explains the mechanism - e.g., people can work/less NHS burden/fewer prescriptions needed (1 mark)"
          ],
          sampleAnswer: "If the new therapy is effective, it could reduce healthcare costs (1) because an effective anxiety treatment would mean fewer people require ongoing support from the NHS (1). This would reduce the financial burden on health services and potentially allow people with anxiety to return to work more quickly, contributing to the economy through increased productivity (1)."
        }
      ]
      return (
        <ApplicationTaskWithRubric
          title="📝 Application Task: Peer Review"
          scenario="A researcher has developed a new therapy for anxiety and wants to publish their findings in a respected psychology journal."
          questions={taskQuestions}
          isPresenting={isPresenting}
        />
      )
    }

    if (slideType === 'extended') {
      const examQuestions: ExamQuestion[] = [
        {
          id: 1,
          question: "Explain two reasons why peer review is important in psychology.",
          marks: 4,
          rubric: [
            "First reason identified - e.g. ensures quality/validity of research (1 mark)",
            "First reason explained - e.g. experts check methods/findings are accurate (1 mark)",
            "Second reason identified - e.g. prevents fraudulent/flawed research (1 mark)",
            "Second reason explained - e.g. protects scientific integrity/public from false claims (1 mark)"
          ],
          sampleAnswer: "Peer review is important because it ensures the quality of published research (1) by having experts in the field check that the methodology is sound and the conclusions are supported by the data (1). It also helps prevent fraudulent or flawed research from being published (1), protecting the integrity of psychology as a science and preventing the public from being misled by false claims (1)."
        },
        {
          id: 2,
          question: "Discuss one strength and one limitation of the peer review process.",
          marks: 4,
          rubric: [
            "Identify strength - e.g. maintains scientific standards/quality control (1 mark)",
            "Explain strength - e.g. only valid research is published/increases reliability (1 mark)",
            "Identify limitation - e.g. can be biased/takes time/anonymity issues (1 mark)",
            "Explain limitation - e.g. reviewers may favour certain approaches/delay publication (1 mark)"
          ],
          sampleAnswer: "A strength is that peer review maintains scientific standards (1) by ensuring only methodologically sound research is published, which increases confidence in the validity of findings (1). A limitation is that reviewers may be biased (1), potentially favouring research that supports their own theoretical perspective or rejecting innovative ideas that challenge established views (1)."
        },
        {
          id: 3,
          question: "Explain how psychological research can have implications for the economy.",
          marks: 4,
          rubric: [
            "Identify one economic implication - e.g. workplace productivity/mental health treatment (1 mark)",
            "Explain how research contributes - e.g. reduces absenteeism/improves efficiency (1 mark)",
            "Identify second implication - e.g. reduces healthcare costs/improves education (1 mark)",
            "Explain economic benefit - e.g. effective treatments save NHS money/better educational outcomes (1 mark)"
          ],
          sampleAnswer: "Psychological research on stress and mental health can improve workplace productivity (1) by helping organisations implement strategies that reduce absenteeism and improve employee wellbeing, saving businesses money (1). Research into effective therapies can also reduce healthcare costs (1) by providing evidence for treatments that work, meaning the NHS can allocate resources efficiently rather than funding ineffective interventions (1)."
        }
      ]
      return <ExamQuestionsWithRubric title="Peer Review & Economy" questions={examQuestions} isPresenting={isPresenting} />
    }

    return <div>Loading...</div>
  }

  // ============= A LEVEL LESSON RENDER FUNCTIONS (Phase 1: Foundation) =============

  // Render A Level Lesson 1: Correlation Analysis (replaces old Recap lesson)
  const renderLesson31 = () => {
    const slideType = lesson31Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={1}
          title="Correlation Analysis"
          subtitle="Coefficients & Interpretation"
          objectives={[
            "Calculate and interpret correlation coefficients",
            "Understand the difference between correlations and experiments",
            "Analyse the strength and direction of correlations",
            "Evaluate the use of correlational research"
          ]}
          isPresenting={isPresenting}
          level="A2"
        />
      )
    }

    // Placeholder for remaining slides
    return (
      <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center`}>
        <div className="text-center">
          <p className="text-purple-400 text-xl mb-2">A Level Lesson 1: Correlation Analysis</p>
          <p className="text-gray-400">Slide: {slideType}</p>
          <p className="text-gray-500 text-sm mt-4">Phase 1 Foundation - Content coming in Phase 2</p>
        </div>
      </div>
    )
  }

  // Render A Level Lesson 2: Case Studies & Content Analysis
  const renderLesson32 = () => {
    const slideType = lesson32Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={2}
          title="Case Studies & Content Analysis"
          subtitle="Coding & Thematic Analysis"
          objectives={[
            "Understand the characteristics and uses of case studies",
            "Explain content analysis and coding procedures",
            "Describe thematic analysis techniques",
            "Evaluate strengths and limitations of these methods"
          ]}
          isPresenting={isPresenting}
          level="A2"
        />
      )
    }

    return (
      <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center`}>
        <div className="text-center">
          <p className="text-purple-400 text-xl mb-2">A Level Lesson 2: Case Studies & Content Analysis</p>
          <p className="text-gray-400">Slide: {slideType}</p>
          <p className="text-gray-500 text-sm mt-4">Phase 1 Foundation - Content coming in Phase 2</p>
        </div>
      </div>
    )
  }

  // Render A Level Lesson 3: Reliability
  const renderLesson33 = () => {
    const slideType = lesson33Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={3}
          title="Reliability"
          subtitle="Test-Retest & Inter-Observer"
          objectives={[
            "Define and explain types of reliability",
            "Describe test-retest reliability",
            "Explain inter-observer reliability",
            "Suggest ways to improve reliability"
          ]}
          isPresenting={isPresenting}
          level="A2"
        />
      )
    }

    return (
      <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center`}>
        <div className="text-center">
          <p className="text-purple-400 text-xl mb-2">A Level Lesson 3: Reliability</p>
          <p className="text-gray-400">Slide: {slideType}</p>
          <p className="text-gray-500 text-sm mt-4">Phase 1 Foundation - Content coming in Phase 2</p>
        </div>
      </div>
    )
  }

  // Render A Level Lesson 4: Validity
  const renderLesson34 = () => {
    const slideType = lesson34Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={4}
          title="Validity"
          subtitle="Face, Concurrent, Ecological, Temporal"
          objectives={[
            "Define and distinguish types of validity",
            "Explain face and concurrent validity",
            "Understand ecological and temporal validity",
            "Describe ways to assess and improve validity"
          ]}
          isPresenting={isPresenting}
          level="A2"
        />
      )
    }

    return (
      <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center`}>
        <div className="text-center">
          <p className="text-purple-400 text-xl mb-2">A Level Lesson 4: Validity</p>
          <p className="text-gray-400">Slide: {slideType}</p>
          <p className="text-gray-500 text-sm mt-4">Phase 1 Foundation - Content coming in Phase 2</p>
        </div>
      </div>
    )
  }

  // Render A Level Lesson 5: Choosing a Statistical Test
  const renderLesson35 = () => {
    const slideType = lesson35Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={5}
          title="Choosing a Statistical Test"
          subtitle="Design & Measurement Level"
          objectives={[
            "Understand factors affecting test choice",
            "Distinguish levels of measurement (nominal, ordinal, interval)",
            "Use a decision flowchart to select appropriate tests",
            "Justify test selection with reasons"
          ]}
          isPresenting={isPresenting}
          level="A2"
        />
      )
    }

    return (
      <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center`}>
        <div className="text-center">
          <p className="text-purple-400 text-xl mb-2">A Level Lesson 5: Choosing a Statistical Test</p>
          <p className="text-gray-400">Slide: {slideType}</p>
          <p className="text-gray-500 text-sm mt-4">Phase 1 Foundation - Content coming in Phase 2</p>
        </div>
      </div>
    )
  }

  // Render A Level Lesson 6: Probability & Significance
  const renderLesson36 = () => {
    const slideType = lesson36Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={6}
          title="Probability & Significance"
          subtitle="Critical Values & Type I/II Errors"
          objectives={[
            "Understand probability in psychological research",
            "Explain significance levels (p ≤ 0.05)",
            "Use statistical tables and critical values",
            "Distinguish Type I and Type II errors"
          ]}
          isPresenting={isPresenting}
          level="A2"
        />
      )
    }

    return (
      <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center`}>
        <div className="text-center">
          <p className="text-purple-400 text-xl mb-2">A Level Lesson 6: Probability & Significance</p>
          <p className="text-gray-400">Slide: {slideType}</p>
          <p className="text-gray-500 text-sm mt-4">Phase 1 Foundation - Content coming in Phase 2</p>
        </div>
      </div>
    )
  }

  // Render A Level Lesson 7: Non-Parametric Tests
  const renderLesson37 = () => {
    const slideType = lesson37Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={7}
          title="Non-Parametric Tests"
          subtitle="Mann-Whitney & Wilcoxon"
          objectives={[
            "Understand when to use non-parametric tests",
            "Calculate and interpret the Mann-Whitney U test",
            "Calculate and interpret the Wilcoxon signed-rank test",
            "Use critical value tables correctly"
          ]}
          isPresenting={isPresenting}
          level="A2"
        />
      )
    }

    return (
      <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center`}>
        <div className="text-center">
          <p className="text-purple-400 text-xl mb-2">A Level Lesson 7: Non-Parametric Tests</p>
          <p className="text-gray-400">Slide: {slideType}</p>
          <p className="text-gray-500 text-sm mt-4">Phase 1 Foundation - Content coming in Phase 2</p>
        </div>
      </div>
    )
  }

  // Render A Level Lesson 8: Parametric Tests
  const renderLesson38 = () => {
    const slideType = lesson38Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={8}
          title="Parametric Tests"
          subtitle="Unrelated & Related t-tests"
          objectives={[
            "Understand assumptions for parametric tests",
            "Calculate the unrelated (independent) t-test",
            "Calculate the related (paired) t-test",
            "Interpret t-test results and critical values"
          ]}
          isPresenting={isPresenting}
          level="A2"
        />
      )
    }

    return (
      <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center`}>
        <div className="text-center">
          <p className="text-purple-400 text-xl mb-2">A Level Lesson 8: Parametric Tests</p>
          <p className="text-gray-400">Slide: {slideType}</p>
          <p className="text-gray-500 text-sm mt-4">Phase 1 Foundation - Content coming in Phase 2</p>
        </div>
      </div>
    )
  }

  // Render A Level Lesson 9: Tests of Correlation
  const renderLesson39 = () => {
    const slideType = lesson39Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={9}
          title="Tests of Correlation"
          subtitle="Spearman's rho & Pearson's r"
          objectives={[
            "Understand when to use Spearman's vs Pearson's",
            "Calculate Spearman's rank correlation coefficient",
            "Calculate Pearson's product-moment correlation",
            "Interpret correlation coefficients and significance"
          ]}
          isPresenting={isPresenting}
          level="A2"
        />
      )
    }

    return (
      <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center`}>
        <div className="text-center">
          <p className="text-purple-400 text-xl mb-2">A Level Lesson 9: Tests of Correlation</p>
          <p className="text-gray-400">Slide: {slideType}</p>
          <p className="text-gray-500 text-sm mt-4">Phase 1 Foundation - Content coming in Phase 2</p>
        </div>
      </div>
    )
  }

  // Render A Level Lesson 10: Chi-Squared Test
  const renderLesson40 = () => {
    const slideType = lesson40Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={10}
          title="Chi-Squared Test"
          subtitle="Test of Association (χ²)"
          objectives={[
            "Understand when to use Chi-Squared",
            "Calculate observed and expected frequencies",
            "Compute the Chi-Squared statistic",
            "Interpret results using critical values and degrees of freedom"
          ]}
          isPresenting={isPresenting}
          level="A2"
        />
      )
    }

    return (
      <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center`}>
        <div className="text-center">
          <p className="text-purple-400 text-xl mb-2">A Level Lesson 10: Chi-Squared Test</p>
          <p className="text-gray-400">Slide: {slideType}</p>
          <p className="text-gray-500 text-sm mt-4">Phase 1 Foundation - Content coming in Phase 2</p>
        </div>
      </div>
    )
  }

  // Render A Level Lesson 11: Reporting Investigations
  const renderLesson41 = () => {
    const slideType = lesson41Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={11}
          title="Reporting Investigations"
          subtitle="Scientific Report Sections"
          objectives={[
            "Understand the structure of a scientific report",
            "Write an effective abstract and introduction",
            "Describe method, results and discussion sections",
            "Use appropriate referencing conventions"
          ]}
          isPresenting={isPresenting}
          level="A2"
        />
      )
    }

    return (
      <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center`}>
        <div className="text-center">
          <p className="text-purple-400 text-xl mb-2">A Level Lesson 11: Reporting Investigations</p>
          <p className="text-gray-400">Slide: {slideType}</p>
          <p className="text-gray-500 text-sm mt-4">Phase 1 Foundation - Content coming in Phase 2</p>
        </div>
      </div>
    )
  }

  // Render A Level Lesson 12: Features of Science
  const renderLesson42 = () => {
    const slideType = lesson42Slides[currentSlide]

    if (slideType === 'title') {
      return (
        <LessonTitleSlide
          lessonNumber={12}
          title="Features of Science"
          subtitle="Objectivity, Replicability, Paradigms"
          objectives={[
            "Explain objectivity and the empirical method",
            "Understand replicability and falsifiability",
            "Describe theory construction and hypothesis testing",
            "Explain paradigms and paradigm shifts (Kuhn)"
          ]}
          isPresenting={isPresenting}
          level="A2"
        />
      )
    }

    return (
      <div className={`w-full ${isPresenting ? 'h-full' : 'min-h-[600px]'} p-8 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center`}>
        <div className="text-center">
          <p className="text-purple-400 text-xl mb-2">A Level Lesson 12: Features of Science</p>
          <p className="text-gray-400">Slide: {slideType}</p>
          <p className="text-gray-500 text-sm mt-4">Phase 1 Foundation - Content coming in Phase 2</p>
        </div>
      </div>
    )
  }

  // Render placeholder for other lessons
  const renderPlaceholder = () => {
    const lesson = allLessons.find(l => l.id === currentLesson)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <div className="text-8xl mb-6">🚧</div>
          <h2 className="text-3xl font-bold text-white mb-4">{lesson?.title}</h2>
          <p className="text-gray-400 text-xl">Placeholder for future content...</p>
          <p className="text-gray-500 text-sm mt-4">Level: {lesson?.levels.includes('gcse') && lesson?.levels.includes('aslevel') && lesson?.levels.includes('alevel')
            ? 'GCSE, AS & A Level'
            : lesson?.levels.includes('gcse') && lesson?.levels.includes('aslevel')
              ? 'GCSE & AS Level'
              : lesson?.levels.includes('gcse') && lesson?.levels.includes('alevel')
                ? 'GCSE & A Level'
                : lesson?.levels.includes('aslevel') && lesson?.levels.includes('alevel')
                  ? 'AS & A Level'
                  : lesson?.levels.includes('gcse')
                    ? 'GCSE Only'
                    : lesson?.levels.includes('aslevel')
                      ? 'AS Level Only'
                      : 'A Level Only'}</p>
        </div>
      </div>
    )
  }

  // Centralized lesson rendering - ADD NEW LESSONS HERE ONLY
  const renderCurrentLesson = () => {
    switch (currentLesson) {
      case 1: return renderLesson1()
      case 2: return renderLesson2()
      case 3: return renderLesson3()
      case 4: return renderLesson4()
      case 5: return renderLesson5()
      case 6: return renderLesson6()
      case 7: return renderLesson7()
      case 8: return renderLesson8()
      case 9: return renderLesson9()
      case 10: return renderLesson10()
      case 11: return renderLesson11()
      case 12: return renderLesson12()
      case 13: return renderLesson13()
      case 14: return renderLesson14()
      case 15: return renderLesson15()
      case 16: return renderLesson16()
      case 17: return renderLesson17()
      case 18: return renderLesson18()
      case 19: return renderLesson19()
      case 20: return renderLesson20()
      case 21: return renderLesson21()
      case 22: return renderLesson22()
      case 23: return renderLesson23()
      case 24: return renderLesson24()
      case 25: return renderLesson25()
      case 26: return renderLesson26()
      case 27: return renderLesson27()
      case 28: return renderLesson28()
      case 29: return renderLesson29()
      case 30: return renderLesson30()
      case 31: return renderLesson31()
      case 32: return renderLesson32()
      case 33: return renderLesson33()
      case 34: return renderLesson34()
      case 35: return renderLesson35()
      case 36: return renderLesson36()
      case 37: return renderLesson37()
      case 38: return renderLesson38()
      case 39: return renderLesson39()
      case 40: return renderLesson40()
      case 41: return renderLesson41()
      case 42: return renderLesson42()
      default: return renderPlaceholder()
    }
  }

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 font-sans overflow-hidden selection:bg-pink-500 selection:text-white">
      {/* Presentation Mode Full-Screen Overlay */}
      {isPresenting && (
        <div className="fixed inset-0 z-[9999] bg-black flex flex-col">
          {/* Header with Exit and Menu Toggle - Compact for presentation */}
          <div className="flex items-center justify-between px-4 py-1.5 border-b border-gray-700/50 bg-gray-950/60 backdrop-blur">
            <button
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="p-1.5 bg-gray-800/80 hover:bg-gray-700 rounded transition-colors text-gray-400 hover:text-white"
              title="Toggle sidebar (S)"
            >
              <Menu size={18} />
            </button>
            <div />
            <button
              onClick={togglePresentation}
              className="px-3 py-1 text-sm rounded font-bold bg-gray-800/80 hover:bg-gray-700 text-gray-400 hover:text-white transition-all"
              title="Exit presentation (ESC)"
            >
              EXIT
            </button>
          </div>

          {/* Main Presentation Content with Sidebar */}
          <div className="flex flex-grow overflow-hidden">
            {/* Presentation Sidebar */}
            {isSidebarOpen && (
              <div className="w-80 bg-gray-950 border-r border-gray-800 flex flex-col shadow-2xl overflow-hidden">
                {/* Sidebar Header */}
                <div className="p-6 border-b border-gray-800">
                  <span className={`font-black text-xl tracking-tighter ${theme.text}`}>RESEARCH METHODS</span>
                </div>

                {/* Level Toggle */}
                <div className="p-4 border-b border-gray-800">
                  <div className="flex bg-gray-900 rounded-lg p-1">
                    <button
                      onClick={() => setLevel('gcse')}
                      className={`flex-1 py-2 px-4 rounded-md text-sm font-bold transition-all ${
                        level === 'gcse'
                          ? 'bg-green-600 text-white shadow-lg'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      GCSE
                    </button>
                    <button
                      onClick={() => setLevel('aslevel')}
                      className={`flex-1 py-2 px-4 rounded-md text-sm font-bold transition-all ${
                        level === 'aslevel'
                          ? 'bg-red-600 text-white shadow-lg'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      AS Level
                    </button>
                    <button
                      onClick={() => setLevel('alevel')}
                      className={`flex-1 py-2 px-4 rounded-md text-sm font-bold transition-all ${
                        level === 'alevel'
                          ? 'bg-indigo-600 text-white shadow-lg'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      A Level
                    </button>
                  </div>
                </div>

                {/* Lesson List */}
                <div className="flex-grow overflow-y-auto custom-scrollbar py-4">
                  {getActiveLessons(level).map((lesson) => (
                    <button
                      key={lesson.id}
                      onClick={() => handleLessonChange(lesson.id)}
                      className={`w-full text-left px-6 py-4 border-l-4 transition-all text-sm ${
                        currentLesson === lesson.id
                          ? level === 'gcse'
                            ? 'border-green-500 bg-green-900/10 text-white shadow-[inset_10px_0_20px_-10px_rgba(34,197,94,0.2)]'
                            : level === 'aslevel'
                            ? 'border-rose-500 bg-rose-900/10 text-white shadow-[inset_10px_0_20px_-10px_rgba(244,63,94,0.2)]'
                            : 'border-indigo-500 bg-indigo-900/10 text-white shadow-[inset_10px_0_20px_-10px_rgba(99,102,241,0.2)]'
                          : 'border-transparent text-gray-500 hover:bg-gray-900 hover:text-gray-300'
                      } cursor-pointer`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold tracking-tight">{lesson.title}</span>
                        {currentLesson === lesson.id && (
                          <div className={`w-2 h-2 rounded-full ${
                            level === 'gcse'
                              ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,1)]'
                              : level === 'aslevel'
                              ? 'bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,1)]'
                              : 'bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,1)]'
                          }`}></div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Main Presentation Content */}
            <main className={`flex-grow flex ${isPresenting ? 'items-start justify-center p-12' : 'items-center justify-center p-8'} overflow-auto custom-scrollbar`}>
              <div className={`w-full h-full flex ${isPresenting ? 'items-start justify-center' : 'items-center justify-center'}`}>
                {isPresenting ? (
                  <div className="present-scale" style={{ width: '100%', maxWidth: '1200px' }}>
                    {renderCurrentLesson()}
                  </div>
                ) : (
                  <>
                    {renderCurrentLesson()}
                  </>
                )}
              </div>
            </main>
          </div>

          {/* Presentation Controls - Bottom Bar - Compact */}
          <div className="h-12 px-4 border-t border-gray-700/50 bg-gray-950/60 backdrop-blur flex items-center justify-between">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className={`flex items-center gap-1.5 px-4 py-1.5 text-sm rounded font-bold transition-all ${
                  currentSlide === 0
                    ? 'bg-gray-800/80 text-gray-600 cursor-not-allowed'
                    : level === 'gcse'
                      ? 'bg-green-600/90 text-white hover:bg-green-500'
                      : level === 'aslevel'
                      ? 'bg-rose-600/90 text-white hover:bg-rose-500'
                      : 'bg-indigo-600/90 text-white hover:bg-indigo-500'
                }`}
              >
                <ChevronLeft size={16} />
                PREV
              </button>

              {/* Slide Counter & Dots */}
              <div className="flex items-center gap-6">
                <span className="text-gray-400 font-mono text-lg font-bold">
                  {String(currentSlide + 1).padStart(2, '0')} / {String(slideCount).padStart(2, '0')}
                </span>
                <div className="flex gap-2">
                  {Array.from({ length: slideCount }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`rounded-full transition-all ${
                        idx === currentSlide
                          ? level === 'gcse'
                            ? 'w-3 h-3 bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.5)]'
                            : level === 'aslevel'
                            ? 'w-3 h-3 bg-rose-500 shadow-[0_0_6px_rgba(244,63,94,0.5)]'
                            : 'w-3 h-3 bg-indigo-500 shadow-[0_0_6px_rgba(99,102,241,0.5)]'
                          : 'w-2 h-2 bg-gray-700 hover:bg-gray-600'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                disabled={currentSlide === slideCount - 1}
                className={`flex items-center gap-1.5 px-4 py-1.5 text-sm rounded font-bold transition-all ${
                  currentSlide === slideCount - 1
                    ? 'bg-gray-800/80 text-gray-600 cursor-not-allowed'
                    : level === 'gcse'
                      ? 'bg-green-600/90 text-white hover:bg-green-500'
                      : level === 'aslevel'
                      ? 'bg-rose-600/90 text-white hover:bg-rose-500'
                      : 'bg-indigo-600/90 text-white hover:bg-indigo-500'
                }`}
              >
                NEXT
                <ChevronRight size={16} />
              </button>
          </div>
        </div>
      )}

      {/* Normal Mode - Sidebar and regular layout */}
      {!isPresenting && (
        <>
          {/* Sidebar */}
          <div className={`${isSidebarOpen ? 'w-80' : 'w-0'} bg-gray-950 border-r border-gray-800 transition-all duration-300 flex flex-col z-20 shadow-2xl relative overflow-hidden`}>
            {/* Sidebar Header */}
            <div className="p-6 border-b border-gray-800 flex justify-between items-center">
              <span className={`font-black text-xl tracking-tighter ${theme.text}`}>RESEARCH METHODS</span>
              <button onClick={() => setSidebarOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Level Toggle */}
            <div className="p-4 border-b border-gray-800">
              <div className="flex bg-gray-900 rounded-lg p-1">
                <button
                  onClick={() => setLevel('gcse')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-bold transition-all ${
                    level === 'gcse'
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  GCSE
                </button>
                <button
                  onClick={() => setLevel('aslevel')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-bold transition-all ${
                    level === 'aslevel'
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  AS Level
                </button>
                <button
                  onClick={() => setLevel('alevel')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-bold transition-all ${
                    level === 'alevel'
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  A Level
                </button>
              </div>
            </div>

            {/* Lesson List */}
            <div className="flex-grow overflow-y-auto custom-scrollbar py-4">
              {getActiveLessons(level).map((lesson) => (
                <button
                  key={lesson.id}
                  onClick={() => handleLessonChange(lesson.id)}
                  className={`w-full text-left px-6 py-4 border-l-4 transition-all ${
                    currentLesson === lesson.id
                      ? level === 'gcse'
                        ? 'border-green-500 bg-green-900/10 text-white shadow-[inset_10px_0_20px_-10px_rgba(34,197,94,0.2)]'
                        : level === 'aslevel'
                        ? 'border-rose-500 bg-rose-900/10 text-white shadow-[inset_10px_0_20px_-10px_rgba(244,63,94,0.2)]'
                        : 'border-indigo-500 bg-indigo-900/10 text-white shadow-[inset_10px_0_20px_-10px_rgba(99,102,241,0.2)]'
                      : 'border-transparent text-gray-500 hover:bg-gray-900 hover:text-gray-300'
                  } cursor-pointer`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm tracking-tight">{lesson.title}</span>
                    {currentLesson === lesson.id && (
                      <div className={`w-2 h-2 rounded-full ${level === 'gcse' ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,1)]' : level === 'aslevel' ? 'bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,1)]' : 'bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,1)]'}`}></div>
                    )}
                  </div>
                  {currentLesson === lesson.id && (
                    <p className="text-xs text-gray-400 mt-1">{lesson.description}</p>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-grow flex flex-col h-full relative bg-[#0a0a0a]">
            {/* Progress Bar */}
            <div className="h-1 bg-gray-900 w-full">
              <div
                className={`h-full bg-gradient-to-r ${theme.progressBar} transition-all duration-500`}
                style={{ width: `${((currentSlide + 1) / slideCount) * 100}%` }}
              />
            </div>

            {/* Header with menu toggle and present button */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-900/50 backdrop-blur">
              {!isSidebarOpen && (
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  title="Open sidebar"
                >
                  <Menu size={24} />
                </button>
              )}
              {isSidebarOpen && <div />}
              
              {/* Present Button - exact logic from Relationships repo */}
              <button
                onClick={togglePresentation}
                className={`p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 border border-gray-700/50 backdrop-blur-sm transition-all ${
                  isPresenting ? (level === 'gcse' ? 'bg-green-600 text-white border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]' : 'bg-rose-600 text-white border-rose-500 shadow-[0_0_15px_rgba(225,29,72,0.5)]') : 'bg-gray-800/80'
                }`}
                title="Presentation Mode"
              >
                <Projector size={20} />
              </button>
            </div>

            {/* Lesson Content */}
            <main className="flex-grow relative overflow-auto custom-scrollbar bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-[#0a0a0a] to-[#0a0a0a]">
              {renderCurrentLesson()}
            </main>

            {/* Navigation Footer - Standard Mode */}
            <div className="h-20 px-8 border-t border-gray-700 bg-gray-950/80 backdrop-blur flex items-center justify-between">
                {/* Previous Button */}
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
                    currentSlide === 0
                      ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                      : level === 'gcse'
                        ? 'bg-green-600 text-white hover:bg-green-500 shadow-lg shadow-green-600/20'
                        : level === 'aslevel'
                        ? 'bg-rose-600 text-white hover:bg-rose-500 shadow-lg shadow-rose-600/20'
                        : 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-600/20'
                  }`}
                >
                  <ChevronLeft size={20} />
                  PREV
                </button>

                {/* Slide Counter & Dots */}
                <div className="flex items-center gap-6">
                  <span className="text-gray-300 font-mono text-lg font-bold">
                    {String(currentSlide + 1).padStart(2, '0')} / {String(slideCount).padStart(2, '0')}
                  </span>
                  <div className="flex gap-2">
                    {Array.from({ length: slideCount }).map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`rounded-full transition-all ${
                          idx === currentSlide
                            ? level === 'gcse'
                              ? 'w-8 h-2 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]'
                              : level === 'aslevel'
                              ? 'w-8 h-2 bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]'
                              : 'w-8 h-2 bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]'
                            : 'w-2 h-2 bg-gray-700 hover:bg-gray-600'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Next Button */}
                <button
                  onClick={nextSlide}
                  disabled={currentSlide === slideCount - 1}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
                    currentSlide === slideCount - 1
                      ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                      : level === 'gcse'
                        ? 'bg-green-600 text-white hover:bg-green-500 shadow-lg shadow-green-600/20'
                        : level === 'aslevel'
                        ? 'bg-rose-600 text-white hover:bg-rose-500 shadow-lg shadow-rose-600/20'
                        : 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-600/20'
                  }`}
                >
                  NEXT
                  <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default App
