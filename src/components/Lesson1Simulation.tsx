import React, { useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Brain,
  Lightbulb,
  Microscope,
  BarChart3,
  Users,
  CheckCircle,
  FileText,
  Eye,
  MessageSquare,
  TrendingUp,
  RotateCcw,
} from 'lucide-react'

interface SlideData {
  id: number
  title: string
  phase: string
  time: string
  icon: React.ReactNode
  content: { gcse: string; alevel: string }
  keyPoints: { gcse: string[]; alevel: string[] }
  examples?: { gcse?: string[]; alevel?: string[] }
}

const slidesData: SlideData[] = [
  {
    id: 1,
    title: 'Theories and Hypotheses',
    phase: 'Introduction',
    time: '5 mins',
    icon: <Brain className="w-8 h-8" />,
    content: {
      gcse: 'Psychological research starts with theories - explanations for behaviour that scientists want to test. In this lesson, we\'ll explore how researchers design studies to test these theories and collect reliable evidence about human behaviour.',
      alevel:
        'The scientific investigation of psychological phenomena requires a systematic approach grounded in theory construction and hypothesis testing. Research methods provide the structured framework through which psychologists operationalise theoretical concepts, establish causal relationships, and ensure the reliability and validity of empirical findings across diverse populations and contexts.',
    },
    keyPoints: {
      gcse: [
        'Psychology is a science that uses research methods',
        'Research is based on theories about behaviour',
        'Scientists test theories with carefully designed studies',
        'Results help us understand why people behave as they do',
      ],
      alevel: [
        'Theories provide frameworks for understanding psychological phenomena',
        'Hypothesis testing is central to the scientific method',
        'Research design determines the validity and reliability of conclusions',
        'Control of variables is essential for establishing causal relationships',
        'Different methods yield different types of evidence with varying internal/external validity',
      ],
    },
  },
  {
    id: 2,
    title: 'What is a Theory?',
    phase: 'Core Concepts',
    time: '10 mins',
    icon: <Lightbulb className="w-8 h-8" />,
    content: {
      gcse: 'A theory is a suggested explanation for behaviour based on evidence. For example, Bowlby\'s attachment theory explains how babies bond with their carers. Theories help psychologists make predictions about behaviour, which they can then test through research. The research either supports the theory or suggests it needs changing.',
      alevel:
        'Theories represent organised systems of scientific knowledge comprising testable propositions about causal mechanisms underlying psychological phenomena. They differ from hypotheses in scope and abstraction: theories are broader frameworks explaining patterns of behaviour (e.g., social learning theory, cognitive development theory), while hypotheses are specific, falsifiable predictions derived from theory. Scientific theories must be falsifiable - capable of being proven false through empirical investigation - distinguishing them from unfalsifiable claims.',
    },
    keyPoints: {
      gcse: [
        'Theories explain why behaviour happens',
        'Theories are based on evidence from research',
        'Good theories help make predictions',
        'Theories can be tested and modified based on results',
      ],
      alevel: [
        'Theories serve as explanatory frameworks with predictive power',
        'Falsifiability is a defining characteristic of scientific theories',
        'Theories differ from hypotheses in scope and specificity',
        'Theory-driven research tests causal mechanisms',
        'Inductive and deductive reasoning inform theory development',
      ],
    },
  },
  {
    id: 3,
    title: 'Aims and Hypotheses',
    phase: 'Core Concepts',
    time: '12 mins',
    icon: <CheckCircle className="w-8 h-8" />,
    content: {
      gcse: 'An aim is a general statement of what a study wants to investigate. A hypothesis is more specific - it predicts what will happen. There are two types: alternative hypotheses state there will be a relationship (difference or correlation) between variables; null hypotheses state there will be no relationship. Hypotheses must be clear and measurable.',
      alevel:
        'Aims provide broad statements of research intent, typically framed as questions or objectives. Hypotheses are precise, testable predictions derived from theory. Directional (one-tailed) hypotheses predict a specific direction of effect (e.g., "increased stress will reduce task performance"), while non-directional (two-tailed) hypotheses predict an effect without specifying direction (e.g., "stress will affect task performance"). The null hypothesis states no relationship exists, providing the baseline against which statistical tests evaluate evidence. Operationalisation—defining variables in measurable, concrete terms—transforms abstract constructs into testable predictions.',
    },
    keyPoints: {
      gcse: [
        'Aim: general statement of what the study investigates',
        'Alternative hypothesis: predicts a relationship exists',
        'Null hypothesis: predicts no relationship exists',
        'Hypotheses must be clear, precise, and testable',
        'Operationalisation: defining variables in measurable terms',
      ],
      alevel: [
        'Directional hypothesis: specifies predicted direction of effect',
        'Non-directional hypothesis: predicts effect without direction',
        'Null hypothesis (H₀): baseline assumption for statistical testing',
        'Variables must be operationalised in concrete, measurable terms',
        'Hypothesis selection depends on existing evidence and theoretical predictions',
        'Proper operationalisation enables replication and validity assessment',
      ],
    },
    examples: {
      gcse: [
        'Aim: To investigate the effect of background noise on memory',
        'Alternative hypothesis: "Students will remember fewer words with background noise than without"',
        'Null hypothesis: "Background noise will have no effect on memory"',
      ],
      alevel: [
        'Directional: "Increased cognitive load (measured by dual-task performance) will significantly reduce false memory susceptibility (measured by DRM paradigm errors), p ≤ 0.05"',
        'Non-directional: "There is a correlation between working memory capacity and inhibitory control performance"',
        'Operationalisation example: "Stress (IV) = exposure to time-pressured task with evaluation threat; Task performance (DV) = number of correctly solved problems in 10 minutes"',
      ],
    },
  },
  {
    id: 4,
    title: 'Variables: IV, DV, and Operationalisation',
    phase: 'Core Concepts',
    time: '14 mins',
    icon: <BarChart3 className="w-8 h-8" />,
    content: {
      gcse: 'In an experiment, the independent variable (IV) is what the researcher changes or manipulates. The dependent variable (DV) is what the researcher measures as the outcome. Operationalisation means defining these variables clearly so they can be measured. For example, if studying stress, you might operationalise it as "giving participants a difficult task with time pressure".',
      alevel:
        'Independent variables are factors systematically manipulated by the researcher to test their causal effects. Dependent variables are measured outcomes hypothesised to change in response to IV manipulation. Extraneous variables (EVs) are unmeasured factors potentially affecting DV; confounding variables are EVs that vary systematically with the IV, threatening internal validity. Operationalisation provides precise definitions translating theoretical constructs into measurable, observable operations. Effective operationalisation requires sufficient detail for replication, avoiding ambiguity while maintaining ecological validity. Levels of the IV represent distinct experimental conditions (e.g., noise: 0dB vs 80dB).',
    },
    keyPoints: {
      gcse: [
        'IV = Independent Variable (what researcher changes)',
        'DV = Dependent Variable (what researcher measures)',
        'Extraneous variables can affect results (must be controlled)',
        'Clear operationalisation allows replication',
        'Example: IV=background music, DV=test scores',
      ],
      alevel: [
        'IV manipulation creates distinct experimental conditions (levels)',
        'DV measurement must be valid and reliable',
        'Confounding variables threaten causal inference',
        'Operationalisation bridges theory and measurement',
        'Sufficient methodological detail enables replication and meta-analysis',
        'Number of IV levels affects design complexity and statistical power',
      ],
    },
    examples: {
      gcse: [
        'Study: Does caffeine improve focus? IV=caffeine dose (0mg, 100mg, 200mg), DV=reaction time on attention task',
        'Study: Does group size affect helping? IV=number of bystanders (alone, 2, 4), DV=whether person helps (yes/no)',
      ],
      alevel: [
        'Operationalised DV: "Cognitive performance = number of items correctly solved on Raven\'s Advanced Progressive Matrices within 15-minute time constraint, scored against normative standards (range 0-60)"',
        'Control of EVs: Room temperature maintained at 21±1°C, lighting standardised at 500 lux, background noise < 50dB, participant seating and presentation order randomised',
      ],
    },
  },
  {
    id: 5,
    title: 'Types of Experiments',
    phase: 'Research Methods',
    time: '15 mins',
    icon: <Microscope className="w-8 h-8" />,
    content: {
      gcse: 'There are three main types of experiments. Laboratory experiments happen in controlled settings where researchers manipulate the IV - they have high control but may feel artificial. Field experiments happen in natural settings like schools or shops, giving more realistic results. Natural experiments occur when the IV varies naturally and researchers just measure the effects - useful when manipulation would be unethical.',
      alevel:
        'Laboratory experiments offer maximum internal validity through IV manipulation and EV control in artificial settings, but sacrifice ecological validity and may trigger demand characteristics. Field experiments manipulate IV in naturalistic contexts, enhancing external validity while reducing experimental control. Natural experiments capitalise on naturally occurring IV variation (e.g., school starting age, natural disasters), maximising ecological validity but preventing random allocation and causal claims. Quasi-experiments manipulate pre-existing group differences (age, gender) rather than randomly assigned conditions. Selection of experiment type depends on research question, practical constraints, ethical considerations, and required level of causal inference.',
    },
    keyPoints: {
      gcse: [
        'Laboratory: controlled setting, high control, artificial',
        'Field: natural setting, lower control, more realistic',
        'Natural: IV varies naturally, can\'t claim cause-and-effect',
        'Each type has trade-offs between control and realism',
      ],
      alevel: [
        'Laboratory: high internal validity, low external validity, demand characteristics risk',
        'Field: moderate internal validity, higher external validity, ethical challenges',
        'Natural: high external validity, no causal claims possible, quasi-experimental design',
        'Quasi-experiments: no random allocation, threats to internal validity',
        'IV type determines experiment classification (manipulated vs naturally occurring)',
      ],
    },
    examples: {
      gcse: [
        'Lab: Memory study in university psychology lab with controlled materials',
        'Field: Helping study observing behaviour in busy train station',
        'Natural: Study of children whose school starting age differed due to cutoff dates',
      ],
      alevel: [
        'Laboratory: Standardised protocol, counterbalanced presentation, objective DV measurement',
        'Field: Real-world context, realistic task performance, potential observer effects',
        'Natural: School entry-age policy variations, environmental stressors, hospital admissions',
        'Quasi: Gender comparison, age group comparison, pre-existing ability groups',
      ],
    },
  },
  {
    id: 6,
    title: 'Experimental Designs',
    phase: 'Research Methods',
    time: '16 mins',
    icon: <BarChart3 className="w-8 h-8" />,
    content: {
      gcse: 'Three experimental designs determine how participants are allocated to conditions. Independent groups: different participants in each condition (fewer demand characteristics, more participants needed). Repeated measures: same participants in all conditions (participants compared to themselves, fewer needed, but order effects possible - solved with counterbalancing). Matched pairs: similar participants paired and allocated to different conditions (no order effects, but matching takes time).',
      alevel:
        'Independent groups design involves random allocation of participants to separate IV conditions, eliminating order effects but requiring large sample sizes and statistical tests for group equivalence. Repeated measures design exposes all participants to all conditions, providing within-subject control of individual differences and reducing sample size requirements, but introducing practice effects (improvement from experience) and fatigue effects (performance decline). Counterbalancing (ABBA order) or Latin squares distribute order effects equally across conditions. Matched pairs design pairs participants on relevant characteristics (ability, age) and assigns one to each condition, balancing order effects and participant variable control but limiting matching precision. Design selection involves internal validity (EV control), external validity (generalisation), statistical power, and practical efficiency trade-offs.',
    },
    keyPoints: {
      gcse: [
        'Independent groups: different participants per condition',
        'Repeated measures: same participants, all conditions',
        'Matched pairs: similar participants paired across conditions',
        'Counterbalancing: controls for order effects (ABBA)',
        'Design choice affects control and sample size needs',
      ],
      alevel: [
        'Independent groups: random allocation required, between-subjects analysis',
        'Repeated measures: order effects (practice, fatigue) require counterbalancing',
        'Matched pairs: reduces sample need but matching never perfect',
        'Latin square designs balance order effects across multiple conditions',
        'Within-subject designs increase statistical power but risk carryover effects',
        'Design × analysis interaction determines appropriate statistical tests (t-test, ANOVA, etc.)',
      ],
    },
    examples: {
      gcse: [
        'Independent: 30 people in quiet group, 30 people in noisy group',
        'Repeated: All 30 people do memory test in quiet, then in noisy',
        'Matched pairs: 30 pairs matched on IQ, one from each pair in quiet/noisy',
      ],
      alevel: [
        'Repeated measures with counterbalancing: Half participants (ABBA), half (BAAB) to balance order effects',
        'Factorial design: Independent groups × 2 IVs (gender: M/F × caffeine: 0/100mg) = 4 conditions',
        'Mixed design: Repeated measures (time: pre/post) × independent groups (treatment/control)',
      ],
    },
  },
  {
    id: 7,
    title: 'Sampling Methods',
    phase: 'Research Methods',
    time: '12 mins',
    icon: <Users className="w-8 h-8" />,
    content: {
      gcse: 'Sampling methods determine which people participate. Random sampling (everyone has equal chance) is unbiased but slow. Opportunity sampling (take whoever\'s available) is quick but biased. Systematic sampling (every nth person) is fairly unbiased. Stratified sampling (divide population into groups, sample from each) is most representative. Sample representativeness affects how much results generalise to the target population.',
      alevel:
        'Random sampling eliminates selection bias but requires complete population lists and typically low participation rates. Opportunity sampling is economical but creates sampling bias, limiting external validity. Systematic sampling achieves representative samples efficiently but risks periodicity effects. Stratified sampling ensures proportional representation of population subgroups (strata), maximising representativeness for known characteristics but potentially missing unmeasured dimensions. Cluster sampling reduces logistical costs in large populations. Sample size determination requires power analysis balancing Type I/II error rates, effect size expectations, and practical constraints. Non-representativeness limits population validity (generalisation beyond sample characteristics) and temporal validity (consistency across time periods).',
    },
    keyPoints: {
      gcse: [
        'Target population: the whole group being studied',
        'Random sampling: everyone has equal chance (unbiased)',
        'Opportunity sampling: people available (quick, biased)',
        'Systematic sampling: every nth person (fairly unbiased)',
        'Stratified sampling: sample from each subgroup (representative)',
      ],
      alevel: [
        'Random sampling requires population census, minimises selection bias',
        'Representativeness determines external validity (population validity)',
        'Stratification variables must be relevant to research question',
        'Sample size affects statistical power (ability to detect effects)',
        'Non-response bias and self-selection threaten representativeness',
        'Effect size and significance level determine required sample size',
      ],
    },
    examples: {
      gcse: [
        'Random: Put all names in a hat, draw 50',
        'Opportunity: Ask people in the school canteen',
        'Stratified: If population is 60% female/40% male, sample should match those percentages',
      ],
      alevel: [
        'Sample size calculation: For two-group t-test, d=0.5, α=0.05, β=0.20, n=64 per group',
        'Stratification: University study sampling 3 equal strata (Year 1, 2, 3) despite different population sizes',
      ],
    },
  },
  {
    id: 8,
    title: 'Ethical Considerations in Research',
    phase: 'Research Ethics',
    time: '15 mins',
    icon: <CheckCircle className="w-8 h-8" />,
    content: {
      gcse: 'Ethical guidelines protect participants\' rights and wellbeing. Informed consent means telling participants what the study involves before they decide to participate. Protection from harm ensures physical and psychological safety. Right to withdraw allows participants to leave anytime. Privacy means not sharing personal information. Confidentiality means keeping identities anonymous. Deception (misleading participants) requires strong justification and full debriefing afterwards.',
      alevel:
        'The BPS (British Psychological Society) Code of Ethics applies four principles: respect (autonomy, privacy, dignity), competence (appropriate expertise, safe procedures), responsibility (minimise harm, maximise benefit), and integrity (honesty, accuracy). Informed consent requires comprehensive information enabling voluntary participation; partially informed designs may be justified if risk is minimal and full deception is necessary. Deception requires ethical review, limiting it to situations where benefits substantially outweigh harms and participants can rescind consent post-hoc. Debriefing must fully explain true aims, reassure participants about behaviour/responses, and address psychological distress. Right to withdraw applies before, during, and post-study. Data protection requires anonymisation, secure storage, and participant consent for any secondary use. Vulnerable populations (children, intellectually impaired, prisoners) require enhanced protections and proxy consent.',
    },
    keyPoints: {
      gcse: [
        'Informed consent: explain study aims, procedures, right to withdraw',
        'Protection from harm: ensure physical and psychological safety',
        'Right to withdraw: participants can leave at any time',
        'Privacy and confidentiality: protect personal information',
        'Deception: only allowed if justified, followed by full debriefing',
      ],
      alevel: [
        'BPS four principles: respect, competence, responsibility, integrity',
        'Informed consent must be valid (informed, voluntary, competent)',
        'Deception justified only with minimal risk and clear benefit',
        'Debriefing addresses true aims, offers counselling if needed',
        'Vulnerable population protections: proxy consent, enhanced safeguards',
        'Data protection: anonymisation, secure storage, retention limits',
      ],
    },
    examples: {
      gcse: [
        'Deception: Tell participants it\'s a memory study when really testing helping behaviour',
        'Debriefing: Explain true aims, reassure that their behaviour was normal',
      ],
      alevel: [
        'Ethical review approval required before conducting deceptive research',
        'Stressor studies: Ensure post-study reassurance, offer counselling',
        'Longitudinal studies: Obtain re-consent at each phase, manage attrition',
      ],
    },
  },
  {
    id: 9,
    title: 'Self-Report Methods: Questionnaires and Interviews',
    phase: 'Data Collection',
    time: '13 mins',
    icon: <FileText className="w-8 h-8" />,
    content: {
      gcse: 'Self-report methods ask people about their thoughts, feelings, and experiences. Questionnaires use written questions - closed questions with fixed answers are easy to analyse, open questions allow detailed responses but are harder to analyse. Interviews are face-to-face conversations; structured interviews use set questions (like questionnaires), semi-structured interviews allow follow-up questions, unstructured interviews are flexible like conversations. Self-report is direct but people may not answer honestly due to social desirability bias or memory problems.',
      alevel:
        'Closed questions (Likert scales, rating scales, multiple choice) yield quantitative data suitable for statistical analysis but may oversimplify complex responses and impose researcher-defined categories. Open questions produce rich qualitative data providing insights into reasoning and experience, but require time-intensive thematic analysis and allow personal bias in interpretation. Structured interviews standardise data collection for consistency and replicability but sacrifice flexibility and depth. Semi-structured interviews balance structure with flexibility, using predetermined core questions while allowing contextual follow-ups. Unstructured interviews maximise exploration of participant perspective but reduce replicability and require careful transcription analysis. Self-report bias sources include social desirability bias (responding to appear favourable), acquiescence bias (tendency to agree), and recall bias (memory distortion). Pilot testing refines question clarity, avoids double-barrelled questions, and identifies problematic wording.',
    },
    keyPoints: {
      gcse: [
        'Questionnaire: written questions, economical, easy to analyse',
        'Closed questions: fixed options, quantitative data',
        'Open questions: free responses, qualitative data',
        'Structured interview: fixed questions, consistent',
        'Semi-structured interview: flexible follow-ups allowed',
        'Unstructured interview: conversational, flexible but hard to analyse',
      ],
      alevel: [
        'Likert scales: ordinal data allowing statistical comparison',
        'Social desirability bias: tendency to respond favourably',
        'Acquiescence bias: tendency to agree with statements',
        'Recall bias: memory distortions, especially long retrospective periods',
        'Double-barrelled questions: asking two things at once (poor design)',
        'Pilot testing identifies ambiguity and problematic wording',
      ],
    },
    examples: {
      gcse: [
        'Closed: "Do you exercise? (Yes/No)" or "Rate anxiety 1-5"',
        'Open: "Why do you think you exercise?"',
        'Interview: Ask why directly rather than assuming questionnaire answers capture true reasons',
      ],
      alevel: [
        'Likert scale design: "I feel anxious in social situations" 1=Strongly Disagree to 5=Strongly Agree',
        'Semi-structured approach: "Tell me about a time you felt anxious. What did you do? How did others react?"',
        'Qualitative analysis: Thematic coding of interview transcripts identifying patterns (e.g., avoidance, coping strategies)',
      ],
    },
  },
  {
    id: 10,
    title: 'Observational Methods: Watching Behaviour',
    phase: 'Data Collection',
    time: '14 mins',
    icon: <Eye className="w-8 h-8" />,
    content: {
      gcse: 'Observation means watching and recording behaviour. Naturalistic observation happens in real settings where behaviour normally occurs - high validity but less control. Controlled observation uses structured environments - easier to see behaviour but less natural. Covert observation (people don\'t know they\'re watched) shows real behaviour but raises ethics questions. Overt observation (people know) is ethical but may change behaviour. Behavioural categories must be clear and observable (e.g., "smiling" vs vague "happiness"). Interobserver reliability means checking if different observers record the same things.',
      alevel:
        'Naturalistic observation maximises ecological validity but risks observer bias (expectations influencing perception) and low replicability. Controlled observations balance validity and control but may artificialise behaviour. Covert observation prevents demand characteristics and reactivity effects but violates privacy without consent. Overt observation respects autonomy but invites social desirability bias and reactivity. Behavioural categories must be mutually exclusive (no overlap), exhaustive (covering all relevant behaviour), and operationally defined with clear examples distinguishing target behaviour from similar actions. Sampling methods determine observation efficiency: continuous recording captures all instances (time-intensive); event sampling targets specific behaviours (useful for infrequent acts); time sampling records observations at fixed intervals (economical but potentially unrepresentative). Interobserver reliability measured as percentage agreement or correlation (Cohen\'s kappa) assesses coding consistency; discrepancies require category redefinition. Observer effects include observer\'s presence altering behaviour and reactivity to being studied.',
    },
    keyPoints: {
      gcse: [
        'Naturalistic: real setting, high validity, less control',
        'Controlled: structured setting, more control, less natural',
        'Covert: not observed, sees real behaviour, ethical concerns',
        'Overt: observed, ethical, but may change behaviour',
        'Behavioural categories: clear, observable, non-overlapping',
        'Interobserver reliability: check if observers agree',
      ],
      alevel: [
        'Observer bias: expectations influence what observers perceive',
        'Demand characteristics reduced with covert observation',
        'Mutually exclusive, exhaustive behavioural categories essential',
        'Event sampling: useful for infrequent, distinct behaviours',
        'Time sampling: less demanding, captures typical patterns',
        'Cohen\'s kappa: measures interobserver agreement beyond chance',
        'Habituation: participants may adjust to observer presence over time',
      ],
    },
    examples: {
      gcse: [
        'Naturalistic: Watch children at playground to see helping behaviour',
        'Controlled: Structured task in lab to observe problem-solving',
        'Categories: "Helping" = sharing materials, assisting, comforting (clear definitions)',
      ],
      alevel: [
        'Time sampling: Record observations every 5 minutes across 1-hour observation period',
        'Category operationalisation: "Aggression" = hitting, kicking, name-calling (defined, distinguishable)',
        'Interobserver: Train two coders, check kappa > 0.80 before main study',
      ],
    },
  },
  {
    id: 11,
    title: 'Reliability and Validity in Research',
    phase: 'Research Quality',
    time: '15 mins',
    icon: <TrendingUp className="w-8 h-8" />,
    content: {
      gcse: 'Reliability means consistency - if you repeat a measurement, you get the same result. Validity means it measures what it claims to measure. Internal validity means the IV caused the DV (good control of other variables). External validity means results apply beyond the study (to other people, places, times). Standardised procedures, controlling extraneous variables, and using similar participants all help reliability and validity.',
      alevel:
        'Internal validity reflects whether the IV causally produces observed DV changes, threatened by confounding variables, demand characteristics, and investigator effects. External validity encompasses ecological validity (generalisation to real-world settings), population validity (generalisation to target populations beyond sample), and temporal validity (consistency across time). Test-retest reliability measures consistency over time (appropriate for stable traits); internal reliability (Cronbach\'s alpha) measures item consistency within measures; interrater reliability (Cohen\'s kappa) assesses observer consistency. Design choices trade internal and external validity: laboratory experiments maximise control (internal validity) but sacrifice realism (external validity); field experiments enhance realism but reduce control. Validity threats differ by design: independent groups risk participant variable confounds; repeated measures risk order effects; natural experiments risk pre-existing differences. Statistical power (ability to detect true effects) depends on sample size, effect size, and significance level; underpowered studies may fail to detect real effects (Type II error).',
    },
    keyPoints: {
      gcse: [
        'Reliability: consistency of measurement over time',
        'Validity: measurement actually measures what it claims',
        'Internal validity: IV caused the DV (good control)',
        'External validity: results generalise beyond the study',
        'Standardised procedures improve reliability',
        'Controlling variables improves internal validity',
      ],
      alevel: [
        'Test-retest reliability: correlation between repeated measurements',
        'Internal reliability (Cronbach\'s alpha): consistency within measure',
        'Interrater reliability (Cohen\'s kappa): observer consistency',
        'Confounding variables: systematic variation with IV threatens internal validity',
        'Ecological validity: generalisation to real-world contexts',
        'Population validity: sample representativeness determines generalisability',
        'Type I error (false positive): rejecting true null hypothesis',
        'Type II error (false negative): failing to reject false null hypothesis',
      ],
    },
    examples: {
      gcse: [
        'Reliable measure: Same person scores similarly on different test occasions',
        'Valid measure: Depression scale actually measures depression, not just sadness',
        'Good internal validity: Random allocation to conditions controls for participant differences',
      ],
      alevel: [
        'Cronbach\'s alpha > 0.70 indicates acceptable internal consistency',
        'Cohen\'s kappa > 0.80 indicates good interrater agreement',
        'SRMR < 0.08 indicates good structural equation model fit',
        'Validity threat: Participants guess true aims, change behaviour (demand characteristics)',
      ],
    },
  },
]

interface DifficultyLevel {
  level: 'gcse' | 'alevel'
  label: string
}

const difficulties: DifficultyLevel[] = [
  { level: 'gcse', label: 'GCSE' },
  { level: 'alevel', label: 'A Level' },
]

export default function Lesson1Simulation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [difficulty, setDifficulty] = useState<'gcse' | 'alevel'>('gcse')

  const slide = slidesData[currentSlide]

  const nextSlide = () => {
    if (currentSlide < slidesData.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const goToStart = () => {
    setCurrentSlide(0)
  }

  const toggleDifficulty = (newLevel: 'gcse' | 'alevel') => {
    setDifficulty(newLevel)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col">
      {/* Header */}
      <header className="bg-gray-900 border-b border-cyan-500 px-6 py-4 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="text-cyan-400">{slide.icon}</div>
              <div>
                <h1 className="text-3xl font-bold text-cyan-400">
                  Research Methods Lesson 1
                </h1>
                <p className="text-cyan-300 text-sm">Theories and Hypotheses</p>
              </div>
            </div>
          </div>

          {/* Difficulty Toggle */}
          <div className="flex gap-2">
            {difficulties.map((diff) => (
              <button
                key={diff.level}
                onClick={() => toggleDifficulty(diff.level)}
                className={`px-4 py-2 rounded font-semibold transition-all ${
                  difficulty === diff.level
                    ? 'bg-cyan-500 text-black'
                    : 'bg-gray-700 text-cyan-300 hover:bg-gray-600'
                }`}
              >
                {diff.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-8">
        <div className="w-full max-w-3xl">
          {/* Content Card */}
          <div className="bg-gray-800 border-2 border-cyan-500 rounded-xl p-8 shadow-2xl">
            {/* Slide Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-3xl font-bold text-cyan-400">{slide.title}</h2>
                <span className="text-sm font-semibold px-3 py-1 bg-cyan-500 bg-opacity-20 border border-cyan-500 rounded text-cyan-300">
                  {difficulty.toUpperCase()}
                </span>
              </div>
              <div className="flex gap-4 text-sm text-cyan-300">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {slide.time}
                </span>
                <span className="text-gray-400">•</span>
                <span>{slide.phase}</span>
              </div>
            </div>

            {/* Main Content */}
            <div className="mb-8">
              <p className="text-gray-100 leading-relaxed">
                {slide.content[difficulty]}
              </p>
            </div>

            {/* Key Points */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                📌 Key Points
              </h3>
              <ul className="space-y-2 ml-2">
                {slide.keyPoints[difficulty].map((point, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-cyan-400 font-bold mt-1">•</span>
                    <span className="text-gray-100">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Examples */}
            {slide.examples && (slide.examples[difficulty] || slide.examples.gcse) && (
              <div className="mb-8 border-t border-gray-700 pt-6">
                <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  💡 Examples
                </h3>
                <div className="space-y-3 ml-2">
                  {(slide.examples[difficulty] || slide.examples.gcse)?.map(
                    (example, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-900 bg-opacity-50 border-l-2 border-cyan-400 pl-4 py-2 rounded"
                      >
                        <p className="text-gray-100 text-sm">{example}</p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="bg-gray-900 border-t border-cyan-500 px-6 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                currentSlide === 0
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-cyan-500 text-black hover:bg-cyan-400'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>

            {/* Progress Indicators */}
            <div className="flex flex-col items-center gap-3">
              <p className="text-cyan-400 font-semibold">
                Slide {currentSlide + 1} of {slidesData.length}
              </p>
              <div className="flex gap-2">
                {slidesData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      idx === currentSlide
                        ? 'bg-cyan-400 w-8'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              disabled={currentSlide === slidesData.length - 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                currentSlide === slidesData.length - 1
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-cyan-500 text-black hover:bg-cyan-400'
              }`}
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Reset Button */}
          <div className="flex justify-center">
            <button
              onClick={goToStart}
              className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-cyan-300 transition-colors text-sm"
            >
              <RotateCcw className="w-4 h-4" />
              Back to Start
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Clock icon component (missing from lucide-react for this version)
function Clock({ className }: { className: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="9" strokeWidth="2" />
      <path strokeWidth="2" d="M12 6v6l4 2" />
    </svg>
  )
}
