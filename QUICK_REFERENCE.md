# Quick Reference Guide - Lesson 1 Component

## 🚀 Getting Started (30 seconds)

```bash
cd /workspaces/Research-Methods
npm install
npm run dev
# Visit http://localhost:5173
```

---

## 🎮 Interactive Features

### Navigation
- **Previous Button** - Go to previous slide (disabled on Slide 1)
- **Next Button** - Go to next slide (disabled on Slide 11)
- **Progress Dots** - Click any dot to jump to that slide
- **Back to Start** - Return to Slide 1 instantly

### Difficulty Toggle
- **GCSE Button** - Shows simplified, foundation-level content
- **A Level Button** - Shows advanced, detailed content
- Toggle anytime without losing your place

---

## 📚 11 Slides Overview

| # | Title | Phase | Topics | Time |
|---|-------|-------|--------|------|
| 1 | Theories & Hypotheses | Introduction | Research foundations, theory-testing | 5m |
| 2 | What is a Theory? | Core Concepts | Theory types, falsifiability, scope | 10m |
| 3 | Aims & Hypotheses | Core Concepts | Alternative/null hypotheses, operationalisation | 12m |
| 4 | Variables: IV, DV, Operationalisation | Core Concepts | Variable types, measurement, control | 14m |
| 5 | Types of Experiments | Research Methods | Lab/field/natural experiments | 15m |
| 6 | Experimental Designs | Research Methods | Independent groups, repeated measures, matched pairs | 16m |
| 7 | Sampling Methods | Research Methods | Random, opportunity, systematic, stratified | 12m |
| 8 | Ethical Considerations | Research Ethics | BPS principles, consent, deception, harm | 15m |
| 9 | Self-Report Methods | Data Collection | Questionnaires, interviews, bias | 13m |
| 10 | Observational Methods | Data Collection | Naturalistic, covert, behaviour categories | 14m |
| 11 | Reliability & Validity | Research Quality | Internal/external validity, types of reliability | 15m |

**Total Duration:** ~135 minutes

---

## 💡 Key Content Features

### Each Slide Contains

1. **Slide Title** - Clear topic heading with icon
2. **Phase Label** - Learning section indicator
3. **Time Estimate** - Suggested duration
4. **Main Content** - Full paragraph explanation (GCSE or A Level)
5. **Key Points** - 4-6 bulleted takeaways (difficulty-specific)
6. **Examples** - Real-world or practical illustrations

### Content Structure Example (Slide 3: Aims & Hypotheses)

**GCSE Version:**
- Simple definitions of aim vs hypothesis
- Two hypothesis types (alternative/null)
- 4 basic key points
- 3 straightforward examples

**A Level Version:**
- Detailed explanation with directional/non-directional terms
- Statistical testing context
- 6 advanced key points (including statistics)
- 3 advanced examples with operationalisation

---

## 🎨 Visual Design Elements

### Color Scheme
```css
Background:     gray-900 to black (gradient)
Primary text:   white (#ffffff)
Secondary text: gray-400
Primary accent: cyan-400 (highlights)
Secondary accent: cyan-500 (borders)
Card bg:        gray-800 (#1f2937)
```

### Component Styling
- **Cards:** 2px cyan border, gray-800 background, rounded-xl
- **Buttons:** Cyan background when active, gray when disabled
- **Text:** Bold cyan for headings, gray-100 for body text
- **Spacing:** Consistent 2rem padding on main card

### Icons Used
- Brain (Theories)
- Lightbulb (Concepts)
- Microscope (Experiments)
- BarChart3 (Designs & Variables)
- Users (Sampling)
- CheckCircle (Ethics & Validity)
- FileText (Questionnaires)
- Eye (Observation)
- MessageSquare (Self-report)
- TrendingUp (Reliability)
- ChevronLeft/ChevronRight (Navigation)
- RotateCcw (Reset)

---

## 📊 Content Distribution

### By Difficulty Level

**GCSE (Foundation)**
- 44 key points across 11 slides (4 per slide)
- 18 example sets
- Simplified terminology
- Accessible explanations

**A Level (Advanced)**
- 66 key points across 11 slides (6 per slide)
- 20 example sets  
- Advanced terminology
- Statistical & methodological detail

### By Topic Type

**Core Concepts** (3 slides)
- What is a Theory?
- Aims and Hypotheses
- Variables and Operationalisation

**Research Methods** (4 slides)
- Types of Experiments
- Experimental Designs
- Sampling Methods

**Data Collection** (2 slides)
- Self-Report Methods
- Observational Methods

**Supporting Areas** (2 slides)
- Ethical Considerations
- Reliability and Validity

---

## 🔍 Finding Specific Content

### By Concept
- **Experimental Designs:** Slides 5-6
- **Sampling:** Slide 7
- **Ethics:** Slide 8
- **Data Collection:** Slides 9-10
- **Data Quality:** Slide 11

### By Learning Level
- **Introduction:** Slide 1
- **Foundations:** Slides 2-3
- **Methodology:** Slides 4-10
- **Evaluation:** Slide 11

### By Research Method
- **Experiments:** Slides 5-6
- **Self-Report:** Slide 9
- **Observation:** Slide 10
- **Correlations:** Mentioned in multiple slides

---

## 💻 Technical Commands

```bash
# Development
npm run dev          # Start dev server on localhost:5173
npm run build        # Build for production
npm run preview      # Preview production build

# Dependencies
npm install          # Install all dependencies
npm update           # Update packages
npm outdated         # Check for updates
```

---

## 📱 Responsive Breakpoints

The component uses Tailwind CSS breakpoints:
- Mobile: < 640px (works with full-width cards)
- Tablet: 640px - 1024px (optimized layout)
- Desktop: 1024px+ (wide-screen optimized)

Maximum content width: 48rem (768px) for readability

---

## ♿ Accessibility Features

- ✅ Semantic HTML buttons
- ✅ Disabled states clearly indicated
- ✅ ARIA labels on navigation dots
- ✅ High contrast (white on dark background)
- ✅ Clear focus states for keyboard navigation
- ✅ Readable font sizes (base text 16px, headings larger)
- ✅ Logical tab order
- ✅ Clear visual feedback on interactions

---

## 🐛 Troubleshooting

### Issue: Content not loading
**Solution:** Ensure npm install completed. Check browser console for errors.

### Issue: Styling looks different
**Solution:** Verify Tailwind CSS build: `npm run build`

### Issue: Navigation not working
**Solution:** Check that JavaScript is enabled. Try hard refresh (Ctrl+F5).

### Issue: Difficulty toggle not changing content
**Solution:** Component auto-updates. Try switching slides then back.

---

## 🎓 Educational Use Cases

### Classroom Delivery
- Project on classroom screen
- Instructor clicks through slides
- Students follow along with printed handouts
- Pause at key points for discussion

### Distance Learning
- Students access via shared link
- Self-paced learning with GCSE level first
- Optional A Level detail for advanced learners
- Take screenshots of examples

### Self-Study
- GCSE students work through foundation content
- Review difficult slides using difficulty toggle
- Use examples to apply concepts
- Progress dots show overall coverage

### Assessment Preparation
- Review all 11 topics systematically
- Compare GCSE vs A Level expectations
- Study examples for essay writing
- Identify weak areas for revision

---

## 📈 Next Steps (Future Enhancements)

### Phase 2: Assessment
- Add multiple-choice quizzes per slide
- Implement progress tracking/scoring
- Create flashcard mode

### Phase 3: Multimedia
- Embed instructional videos
- Add audio narration option
- Include animated diagrams

### Phase 4: Expansion
- Create Lessons 2-6 (Methods in depth, Statistics, etc.)
- Build lesson navigation menu
- Add PDF export functionality
- Implement note-taking system

### Phase 5: Analytics
- Track student progress
- Identify difficult topics
- Generate learning reports
- Adaptive difficulty recommendations

---

## 📞 Support

For questions about:
- **Content accuracy:** Refer to AQA specifications
- **Technical issues:** Check React/Vite documentation
- **Styling:** Refer to Tailwind CSS docs
- **Icons:** See Lucide React documentation

---

## 📄 Quick Reference: Slide Content

### Slide 1: Theories and Hypotheses
**Focus:** Psychology as science, theory-testing, research methods overview
**Key Concept:** Research provides evidence to test theories

### Slide 2: What is a Theory?
**Focus:** Theory definitions, falsifiability, scope vs hypothesis
**Key Concept:** Good theories are testable and can be proven false

### Slide 3: Aims and Hypotheses
**Focus:** Aim statements, hypothesis types, operationalisation
**Key Concept:** Hypotheses must be specific and measurable

### Slide 4: Variables IV, DV, Operationalisation
**Focus:** Variable types, relationships, clear definitions
**Key Concept:** Variables must be operationalised for measurement

### Slide 5: Types of Experiments
**Focus:** Lab, field, natural experiments, validity trade-offs
**Key Concept:** Different settings provide different types of validity

### Slide 6: Experimental Designs
**Focus:** Independent groups, repeated measures, matched pairs
**Key Concept:** Design choice affects control and participant needs

### Slide 7: Sampling Methods
**Focus:** 5 sampling techniques, representativeness, generalisation
**Key Concept:** Sample quality determines result generalisability

### Slide 8: Ethical Considerations
**Focus:** BPS principles, consent, protection, confidentiality
**Key Concept:** Participant rights protected through ethical guidelines

### Slide 9: Self-Report Methods
**Focus:** Questionnaires, interviews, bias sources
**Key Concept:** Self-report is direct but susceptible to bias

### Slide 10: Observational Methods
**Focus:** Observation types, behaviour categories, inter-rater reliability
**Key Concept:** Observation captures actual behaviour patterns

### Slide 11: Reliability and Validity
**Focus:** Consistency vs truth, types of validity, internal vs external
**Key Concept:** Both reliability and validity essential for quality research

---

**Ready to teach!** 🎓
