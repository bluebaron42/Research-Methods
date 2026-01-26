import React, { useState } from 'react'
import { ChevronRight, FileCheck, EyeOff, Shield, Lock, Users, AlertTriangle, Lightbulb } from 'lucide-react'

interface Props {
  isPresenting: boolean
}

export const EthicsTeach: React.FC<Props> = ({ isPresenting }) => {
  const [revealedCount, setRevealedCount] = useState(0)
  const [expandedPrinciple, setExpandedPrinciple] = useState<number | null>(null)

  const principles = [
    { 
      title: 'Informed Consent', 
      icon: <FileCheck size={isPresenting ? 24 : 18} />, 
      color: 'blue',
      desc: 'Participants must be told the true aims and what participation involves before agreeing to take part.',
      requirements: ['Full explanation of procedures', 'Right to withdraw emphasised', 'Written consent for sensitive topics', 'Parental consent for under-16s'],
      challenge: 'May reveal hypothesis and cause demand characteristics',
      solution: 'Presumptive consent (asking similar people), retrospective consent after debriefing'
    },
    { 
      title: 'Deception', 
      icon: <EyeOff size={isPresenting ? 24 : 18} />, 
      color: 'amber',
      desc: 'Deliberately misleading participants about the true aims. Should only be used when absolutely necessary.',
      requirements: ['Must be justified', 'Must debrief afterwards', 'Should not cause distress', 'Participant should not object when told'],
      challenge: 'Sometimes necessary to prevent demand characteristics',
      solution: 'Only use if no alternative, full debriefing immediately after, right to withdraw data'
    },
    { 
      title: 'Protection from Harm', 
      icon: <Shield size={isPresenting ? 24 : 18} />, 
      color: 'rose',
      desc: 'Participants should not experience physical or psychological harm greater than everyday life.',
      requirements: ['No physical risk', 'No psychological distress', 'Stop if participant distressed', 'Provide counselling if needed'],
      challenge: 'Some important research topics are inherently stressful',
      solution: 'Risk assessment before study, trained support available, right to withdraw at any time'
    },
    { 
      title: 'Privacy & Confidentiality', 
      icon: <Lock size={isPresenting ? 24 : 18} />, 
      color: 'purple',
      desc: 'Personal data must be protected and participants\' identities kept anonymous in publications.',
      requirements: ['Data stored securely', 'Use participant numbers not names', 'Do not identify individuals', 'GDPR compliance'],
      challenge: 'Some qualitative research makes anonymity difficult',
      solution: 'Change identifying details, use pseudonyms, gain consent to use quotes'
    },
    { 
      title: 'Right to Withdraw', 
      icon: <Users size={isPresenting ? 24 : 18} />, 
      color: 'green',
      desc: 'Participants can leave the study at any time and withdraw their data without giving a reason.',
      requirements: ['Make clear before and during study', 'No pressure to continue', 'Can withdraw data afterwards', 'No negative consequences'],
      challenge: 'May lose valuable data if many withdraw',
      solution: 'Create comfortable environment, make withdrawal easy, allow partial data use'
    },
  ]

  const colorMap: Record<string, { border: string, bg: string, text: string, iconBg: string, activeBorder: string }> = {
    blue:   { border: 'border-blue-500/50',   bg: 'bg-blue-900/30',   text: 'text-blue-300',   iconBg: 'bg-blue-500/30', activeBorder: 'border-blue-400' },
    amber:  { border: 'border-amber-500/50',  bg: 'bg-amber-900/30',  text: 'text-amber-300',  iconBg: 'bg-amber-500/30', activeBorder: 'border-amber-400' },
    rose:   { border: 'border-rose-500/50',   bg: 'bg-rose-900/30',   text: 'text-rose-300',   iconBg: 'bg-rose-500/30', activeBorder: 'border-rose-400' },
    purple: { border: 'border-purple-500/50', bg: 'bg-purple-900/30', text: 'text-purple-300', iconBg: 'bg-purple-500/30', activeBorder: 'border-purple-400' },
    green:  { border: 'border-green-500/50',  bg: 'bg-green-900/30',  text: 'text-green-300',  iconBg: 'bg-green-500/30', activeBorder: 'border-green-400' },
  }

  return (
    <div className={`flex flex-col h-full animate-fadeIn ${isPresenting ? 'p-6' : 'p-4'} overflow-auto`}>
      <div className="mb-3 text-center">
        <h2 className={`${isPresenting ? 'text-4xl' : 'text-2xl'} font-black text-white mb-1`}>BPS Ethical Guidelines</h2>
        <p className={`${isPresenting ? 'text-lg' : 'text-xs'} text-gray-400`}>Click each principle to reveal - core ethical considerations for research</p>
      </div>

      {/* Click-to-Reveal Cards - Scrollable row */}
      <div className={`flex gap-2 max-w-6xl mx-auto w-full mb-3 overflow-x-auto pb-2`}>
        {principles.map((p, i) => (
          <div 
            key={i}
            onClick={() => i === revealedCount && setRevealedCount(prev => prev + 1)}
            className={`flex-shrink-0 ${isPresenting ? 'w-48' : 'w-36'} rounded-xl border-2 ${colorMap[p.color].border} ${colorMap[p.color].bg} ${isPresenting ? 'p-3' : 'p-2'} transition-all duration-500 cursor-pointer ${
              i < revealedCount 
                ? 'opacity-100 scale-100' 
                : i === revealedCount 
                  ? 'opacity-100 scale-100 ring-2 ring-white/20 animate-pulse' 
                  : 'opacity-30 scale-95'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className={`${isPresenting ? 'w-8 h-8' : 'w-6 h-6'} rounded-full ${colorMap[p.color].iconBg} flex items-center justify-center ${colorMap[p.color].text}`}>
                {p.icon}
              </div>
              <h3 className={`${isPresenting ? 'text-sm' : 'text-xs'} font-bold ${colorMap[p.color].text} leading-tight`}>{p.title}</h3>
            </div>
            {i < revealedCount ? (
              <p className={`text-gray-200 ${isPresenting ? 'text-sm' : 'text-[10px]'} leading-snug animate-fadeIn`}>{p.desc}</p>
            ) : i === revealedCount ? (
              <p className={`${colorMap[p.color].text} text-xs italic`}>Click to reveal...</p>
            ) : (
              <p className="text-gray-600 text-[10px]">Locked</p>
            )}
          </div>
        ))}
      </div>

      {/* Progress indicator */}
      <div className="flex justify-center items-center gap-2 mb-3">
        {principles.map((_, i) => (
          <div key={i} className={`w-2 h-2 rounded-full transition-colors ${i < revealedCount ? 'bg-green-500' : 'bg-gray-600'}`} />
        ))}
        <span className="ml-2 text-gray-400 text-xs">{revealedCount}/5</span>
        {revealedCount < 5 && (
          <button onClick={() => setRevealedCount(5)} className="ml-2 text-gray-500 hover:text-gray-300 text-xs">Skip →</button>
        )}
      </div>

      {/* Detailed Accordion - Shows after all revealed */}
      {revealedCount >= 5 && (
        <div className="max-w-4xl mx-auto w-full animate-fadeIn flex-1 overflow-auto">
          <h3 className={`${isPresenting ? 'text-xl' : 'text-base'} font-bold text-white mb-2 text-center`}>Challenges & Solutions</h3>
          <div className="space-y-1.5 max-h-[35vh] overflow-auto">
            {principles.map((p, i) => (
              <div 
                key={i}
                className={`rounded-lg border-2 transition-all duration-300 overflow-hidden ${
                  expandedPrinciple === i 
                    ? `${colorMap[p.color].activeBorder} ${colorMap[p.color].bg}` 
                    : `${colorMap[p.color].border} bg-gray-900/40`
                }`}
              >
                <button
                  onClick={() => setExpandedPrinciple(expandedPrinciple === i ? null : i)}
                  className="w-full flex items-center justify-between p-2 text-left"
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full ${colorMap[p.color].bg} border ${colorMap[p.color].border} flex items-center justify-center ${colorMap[p.color].text}`}>
                      {p.icon}
                    </div>
                    <h4 className={`${isPresenting ? 'text-base' : 'text-sm'} font-bold ${colorMap[p.color].text}`}>{p.title}</h4>
                  </div>
                  <ChevronRight 
                    className={`${colorMap[p.color].text} transition-transform duration-300 ${expandedPrinciple === i ? 'rotate-90' : ''}`} 
                    size={16} 
                  />
                </button>

                <div className={`transition-all duration-300 ${expandedPrinciple === i ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-2 pb-2 space-y-2">
                    {/* Requirements */}
                    <div className={`${colorMap[p.color].bg} rounded p-2 border ${colorMap[p.color].border}`}>
                      <span className={`text-xs ${colorMap[p.color].text} font-semibold`}>📋 Requirements: </span>
                      <ul className="text-[10px] text-gray-300 mt-1 space-y-0.5">
                        {p.requirements.map((req, j) => (
                          <li key={j} className="flex items-start gap-1">
                            <span className={colorMap[p.color].text}>•</span>{req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-amber-900/20 rounded p-2 border border-amber-500/30">
                        <div className="flex items-center gap-1 mb-1">
                          <AlertTriangle className="text-amber-400" size={12} />
                          <span className="text-[10px] text-amber-400 font-semibold">Challenge</span>
                        </div>
                        <p className="text-[10px] text-gray-300">{p.challenge}</p>
                      </div>
                      
                      <div className="bg-green-900/20 rounded p-2 border border-green-500/30">
                        <div className="flex items-center gap-1 mb-1">
                          <Lightbulb className="text-green-400" size={12} />
                          <span className="text-[10px] text-green-400 font-semibold">Solution</span>
                        </div>
                        <p className="text-[10px] text-gray-300">{p.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Key Summary */}
      {revealedCount >= 5 && (
        <div className="mt-2 max-w-4xl mx-auto w-full rounded-xl border border-cyan-500/50 bg-cyan-900/20 p-2 animate-fadeIn">
          <div className="flex gap-2">
            <Lightbulb className="text-cyan-400 flex-shrink-0" size={16} />
            <p className="text-xs text-cyan-200">
              <span className="font-bold">Remember:</span> The BPS Code of Ethics provides <span className="text-cyan-400 font-semibold">guidelines, not rules</span>. Researchers must balance scientific value against potential harm. Ethics committees review research proposals to ensure participant welfare.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
