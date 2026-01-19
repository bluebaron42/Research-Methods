export interface Hypothesis {
  id: number;
  text: string;
  type: 'null' | 'alternative';
  direction: 'directional' | 'non-directional' | 'n/a'; // 'n/a' for Null, typically
  operationalisation: 'good' | 'poor';
  difficulty: number;
}

export const hypotheses: Hypothesis[] = [
  // Difficulty 1 - Simple Everyday
  {
    id: 1,
    text: "Eating chocolate makes you happier.",
    type: 'alternative',
    direction: 'directional',
    operationalisation: 'poor',
    difficulty: 1
  },
  {
    id: 2,
    text: "There will be no difference in happiness after eating chocolate.",
    type: 'null',
    direction: 'n/a',
    operationalisation: 'poor',
    difficulty: 1
  },
  {
    id: 3,
    text: "People will score higher on a test if they sleep more.",
    type: 'alternative',
    direction: 'directional',
    operationalisation: 'poor',
    difficulty: 1
  },
  {
    id: 4,
    text: "Students who sleep 8 hours will score differently than those who sleep 4 hours.",
    type: 'alternative',
    direction: 'non-directional',
    operationalisation: 'poor',
    difficulty: 1
  },
  {
    id: 5,
    text: "There is no relationship between sleep and grades.",
    type: 'null',
    direction: 'n/a',
    operationalisation: 'poor',
    difficulty: 1
  },
  {
    id: 6,
    text: "Boys are more aggressive than girls.",
    type: 'alternative',
    direction: 'directional',
    operationalisation: 'poor',
    difficulty: 1
  },
  {
    id: 7,
    text: "Coffee drinkers talk faster.",
    type: 'alternative',
    direction: 'directional',
    operationalisation: 'poor',
    difficulty: 1
  },
  {
    id: 8,
    text: "There will be a difference in talking speed between coffee drinkers and non-drinkers.",
    type: 'alternative',
    direction: 'non-directional',
    operationalisation: 'poor',
    difficulty: 1
  },
  {
    id: 9,
    text: "Plants grow taller in sunlight.",
    type: 'alternative',
    direction: 'directional',
    operationalisation: 'poor',
    difficulty: 1
  },
  {
    id: 10,
    text: "Exercise affects weight.",
    type: 'alternative',
    direction: 'non-directional',
    operationalisation: 'poor',
    difficulty: 1
  },

  // Difficulty 2 - Slightly more formal but still simple
  {
    id: 11,
    text: "Participants who consume 200mg of caffeine will complete a puzzle faster than those who consume water.",
    type: 'alternative',
    direction: 'directional',
    operationalisation: 'good',
    difficulty: 2
  },
  {
    id: 12,
    text: "There will be a significant difference in puzzle completion time (seconds) between caffeine and water conditions.",
    type: 'alternative',
    direction: 'non-directional',
    operationalisation: 'good',
    difficulty: 2
  },
  {
    id: 13,
    text: "Teenagers use phones more than adults.",
    type: 'alternative',
    direction: 'directional',
    operationalisation: 'poor',
    difficulty: 2
  },
  {
    id: 14,
    text: "Participants aged 13-19 will spend more minutes per day on social media than participants aged 30-50.",
    type: 'alternative',
    direction: 'directional',
    operationalisation: 'good',
    difficulty: 2
  },
  {
    id: 15,
    text: "There will be no significant difference in heart rate (bpm) after 5 minutes of exercise between male and female participants.",
    type: 'null',
    direction: 'n/a',
    operationalisation: 'good',
    difficulty: 2
  },
  {
    id: 16,
    text: "Revision technique affects exam performance.",
    type: 'alternative',
    direction: 'non-directional',
    operationalisation: 'poor',
    difficulty: 2
  },
  {
    id: 17,
    text: "Mind maps are better than reading.",
    type: 'alternative',
    direction: 'directional',
    operationalisation: 'poor',
    difficulty: 2
  },
  {
    id: 18,
    text: "Students using mind maps will recall more words from a list of 20 than students using roto-rehearsal.",
    type: 'alternative',
    direction: 'directional',
    operationalisation: 'good',
    difficulty: 2
  },
  {
    id: 19,
    text: "There will be no difference in the number of aggressive acts observed between children who watch violent cartoons and those who watch non-violent cartoons.",
    type: 'null',
    direction: 'n/a',
    operationalisation: 'good',
    difficulty: 2
  },
  {
    id: 20,
    text: "Drivers in red cars get more speeding tickets.",
    type: 'alternative',
    direction: 'directional',
    operationalisation: 'poor',
    difficulty: 2
  },

  // Difficulty 3 - Standard A-Level
  {
    id: 21,
    text: "There will be a significant negative correlation between hours of sleep and reaction time in milliseconds.",
    type: 'alternative',
    direction: 'directional',
    operationalisation: 'good',
    difficulty: 3
  },
  {
    id: 22,
    text: "Participants in the 'high noise' condition (80dB) will recall significantly fewer words than participants in the 'low noise' condition (20dB).",
    type: 'alternative',
    direction: 'directional',
    operationalisation: 'good',
    difficulty: 3
  },
  {
    id: 23,
    text: "There will be a significant difference in the self-rated agression scores (1-10 scale) of participants who play violent video games compared to those who play non-violent video games.",
    type: 'alternative',
    direction: 'non-directional',
    operationalisation: 'good',
    difficulty: 3
  },
  {
    id: 24,
    text: "There is no significant relationship between age (years) and short-term memory capacity (digit span).",
    type: 'null',
    direction: 'n/a',
    operationalisation: 'good',
    difficulty: 3
  },
  {
    id: 25,
    text: "Participants will perform better on a task when observed.",
    type: 'alternative',
    direction: 'directional',
    operationalisation: 'poor',
    difficulty: 3
  },
  {
    id: 26,
    text: "Short-term memory capacity will be significantly higher for digits than for letters.",
    type: 'alternative',
    direction: 'directional',
    operationalisation: 'good',
    difficulty: 3
  },
  {
    id: 27,
    text: "There will be no significant difference in the time taken to run 100m (seconds) between participants who drink energy drinks and those who drink water.",
    type: 'null',
    direction: 'n/a',
    operationalisation: 'good',
    difficulty: 3
  },
  {
    id: 28,
    text: "The amount of eye contact (seconds) will be significantly less when participants are speaking to an authority figure compared to a peer.",
    type: 'alternative',
    direction: 'directional',
    operationalisation: 'good',
    difficulty: 3
  },
  {
    id: 29,
    text: "People remember emotional words better.",
    type: 'alternative',
    direction: 'directional',
    operationalisation: 'poor',
    difficulty: 3
  },
  {
    id: 30,
    text: "There will be a significant association between gender and choice of pet (Cat/Dog).",
    type: 'alternative',
    direction: 'non-directional',
    operationalisation: 'good',
    difficulty: 3
  },

  // Difficulty 4 - Complex Operationalisation
  {
    id: 31,
    text: "Participants with high self-efficacy scores will show greater persistence (minutes spent working on an unsolvable puzzle) than those with low self-efficacy scores.",
    type: 'alternative',
    direction: 'directional',
    operationalisation: 'good',
    difficulty: 4
  },
  {
    id: 32,
    text: "There will be no significant difference in galvanic skin response (measure of stress) between participants exposed to phobic stimuli and neutral stimuli.",
    type: 'null',
    direction: 'n/a',
    operationalisation: 'good',
    difficulty: 4
  },
  {
    id: 33,
    text: "Cognitive behavioural therapy improves depression.",
    type: 'alternative',
    direction: 'directional',
    operationalisation: 'poor',
    difficulty: 4
  },
  {
    id: 34,
    text: "There will be a significant reduction in BDI-II scores after 12 weeks of CBT compared to a waiting list control group.",
    type: 'alternative',
    direction: 'directional',
    operationalisation: 'good',
    difficulty: 4
  },
  {
    id: 35,
    text: "Reaction times will be influenced by the colour of the stimulus.",
    type: 'alternative',
    direction: 'non-directional',
    operationalisation: 'poor',
    difficulty: 4
  },
  {
    id: 36,
    text: "The correlation coefficient between annual income and self-reported life satisfaction will be significantly different from zero.",
    type: 'alternative',
    direction: 'non-directional',
    operationalisation: 'good',
    difficulty: 4
  },
  {
    id: 37,
    text: "Participants primed with elderly stereotypes will walk significantly slower (m/s) down a corridor than those primed with neutral words.",
    type: 'alternative',
    direction: 'directional',
    operationalisation: 'good',
    difficulty: 4
  },
  {
    id: 38,
    text: "There will be no significant interaction effect between caffeine consumption and time of day on cognitive performance scores.",
    type: 'null',
    direction: 'n/a',
    operationalisation: 'good',
    difficulty: 4
  },
  {
    id: 39,
    text: "Introverts recall more than extroverts.",
    type: 'alternative',
    direction: 'directional',
    operationalisation: 'poor',
    difficulty: 4
  },
  {
    id: 40,
    text: "There will be a significant positive relationship between score on the F-scale and obedience voltage levels administered in a Milgram-style paradigm.",
    type: 'alternative',
    direction: 'directional',
    operationalisation: 'good',
    difficulty: 4
  },

  // Difficulty 5 - Technical / Statistical Nuance
  {
    id: 41,
    text: "The population mean for IQ is not equal to 100.",
    type: 'alternative',
    direction: 'non-directional',
    operationalisation: 'good',
    difficulty: 5
  },
  {
    id: 42,
    text: "H0: μ1 = μ2 (The mean of population 1 is equal to the mean of population 2).",
    type: 'null',
    direction: 'n/a',
    operationalisation: 'good',
    difficulty: 5
  },
  {
    id: 43,
    text: "H1: r < 0 (There is a negative correlation).",
    type: 'alternative',
    direction: 'directional',
    operationalisation: 'good',
    difficulty: 5
  },
  {
    id: 44,
    text: "There will be a significant main effect of 'Processing Depth' on recall words, such that deep processing leads to higher recall than shallow processing.",
    type: 'alternative',
    direction: 'directional',
    operationalisation: 'good',
    difficulty: 5
  },
  {
    id: 45,
    text: "The distribution of scores in the experimental group will be stochastically greater than in the control group.",
    type: 'alternative',
    direction: 'directional',
    operationalisation: 'good',
    difficulty: 5
  },
  {
    id: 46,
    text: "There is no significant difference in the variance of test scores between the two teaching methods (Homogeneity of Variance assumption).",
    type: 'null',
    direction: 'n/a',
    operationalisation: 'good',
    difficulty: 5
  },
  {
    id: 47,
    text: "Stress affects working memory performance.",
    type: 'alternative',
    direction: 'non-directional',
    operationalisation: 'poor',
    difficulty: 5
  },
  {
    id: 48,
    text: "Participants receiving the experimental drug will show a statistically significant change in symptom severity compared to baseline, p < .05.",
    type: 'alternative',
    direction: 'non-directional',
    operationalisation: 'good',
    difficulty: 5
  },
  {
    id: 49,
    text: "The probability of correctly identifying the target face is no different from chance (where chance = 0.2).",
    type: 'null',
    direction: 'n/a',
    operationalisation: 'good',
    difficulty: 5
  },
  {
    id: 50,
    text: "Interventions will have an effect on outcomes.",
    type: 'alternative',
    direction: 'non-directional',
    operationalisation: 'poor',
    difficulty: 5
  }
];
