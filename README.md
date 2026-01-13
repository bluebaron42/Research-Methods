# Research Methods Psychology Teaching Application

A modern, interactive React-based teaching application for delivering psychology lessons on Research Methods. This application provides an engaging slide-based learning experience with difficulty level toggling (GCSE vs A Level).

## Project Overview

**Lesson 1: Theories and Hypotheses** - A comprehensive 11-slide module covering:
1. Introduction to Theories and Hypotheses
2. What is a Theory?
3. Aims and Hypotheses
4. Variables: IV, DV, and Operationalisation
5. Types of Experiments
6. Experimental Designs
7. Sampling Methods
8. Ethical Considerations in Research
9. Self-Report Methods: Questionnaires and Interviews
10. Observational Methods: Watching Behaviour
11. Reliability and Validity in Research

## Technical Stack

- **React 18.2** with TypeScript
- **Vite** - Modern build tool
- **Tailwind CSS** - Utility-first styling with dark theme
- **Lucide React** - Modern icon library
- **Dark Mode UI** with cyan accent colors

## Features

✅ **11 Comprehensive Slides** - Full research methods curriculum coverage
✅ **Dual-Level Content** - GCSE and A Level difficulty toggling
✅ **Clean UI/UX** - Dark gradient background with cyan accents
✅ **Interactive Navigation** - Previous/Next, progress indicators, jump to slide
✅ **Rich Content** - Main explanation, key points, and contextual examples
✅ **Responsive Design** - Works across different screen sizes
✅ **Educational Icons** - Visual indicators for each slide topic
✅ **Progress Tracking** - Slide counter with dot navigation

## Project Structure

```
/workspaces/Research-Methods/
├── src/
│   ├── components/
│   │   └── Lesson1Simulation.tsx    # Main lesson component (684 lines)
│   ├── App.tsx                       # Root React component
│   ├── main.tsx                      # Entry point
│   └── index.css                     # Tailwind CSS imports
├── index.html                        # HTML template
├── package.json                      # Dependencies and scripts
├── tsconfig.json                     # TypeScript configuration
├── vite.config.ts                    # Vite configuration
├── tailwind.config.js                # Tailwind CSS configuration
├── postcss.config.js                 # PostCSS configuration
└── Textbooks/
    └── research_methods_textbook.txt # Source material (995 lines)
```

## Installation & Setup

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Component Overview

### Lesson1Simulation.tsx (684 lines)

**Key Interfaces:**
- `SlideData` - Defines structure for each slide including ID, title, content (GCSE/A Level), key points, and examples

**State Management:**
- `currentSlide` - Tracks active slide (0-10)
- `difficulty` - Toggles between 'gcse' and 'alevel' content

**Core Features:**

1. **Header Section**
   - Lesson title and subtitle
   - Slide icon indicator
   - Two-button difficulty toggle

2. **Content Card** (Dark bg-gray-800, cyan border-cyan-500)
   - Slide title with level indicator badge
   - Time allocation and learning phase
   - Main content paragraph (difficulty-aware)
   - 📌 Key Points bullet list
   - 💡 Examples section (context-specific)

3. **Navigation Footer**
   - Previous button (disabled on first slide)
   - Progress indicator with dot navigation
   - Slide counter (X of 11)
   - Next button (disabled on last slide)
   - Reset to start button

## Content Specification

### All 11 Slides Include:

Each slide contains:
- **Title** - Clear topic heading
- **Phase** - Learning section (Introduction, Core Concepts, Research Methods, Data Collection, etc.)
- **Time** - Suggested duration for that slide
- **Icon** - Visual topic indicator from Lucide React
- **Dual Content** - Separate GCSE and A Level explanations
- **Key Points** - 4-6 bulleted takeaways per level
- **Examples** - Real-world illustrations of concepts

### Content Sourcing

All content derived from:
- AQA GCSE Psychology Specification
- AQA A-level Psychology Specification (Year 12 AS & Year 13 A2)
- `research_methods_textbook.txt` (995 lines of source material)

Differences between levels:
- **GCSE** - Simplified explanations, basic concepts, accessible examples
- **A Level** - Advanced terminology, detailed mechanisms, statistical examples, meta-analysis concepts

## Visual Design System

### Color Scheme
- **Background** - Gradient gray-900 to black
- **Primary Accent** - cyan-400 (text highlights)
- **Secondary Accent** - cyan-500 (borders, buttons)
- **Text** - white/gray-100 (main), gray-400 (secondary)
- **Cards** - bg-gray-800 (dark backgrounds)

### Typography
- **Headings** - Bold, cyan-400 for emphasis
- **Body Text** - gray-100 with leading-relaxed for readability
- **Callouts** - Custom styled bullet points with cyan indicators

### Spacing & Borders
- Card padding: 2rem (p-8)
- Border radius: xl (rounded-xl)
- Border width: 2px cyan
- Component gaps: consistent spacing with Tailwind gap utilities

## Navigation Features

### Slide Navigation
- **Previous/Next Buttons** - Move between slides, disable at boundaries
- **Progress Dots** - Click to jump to any slide
- **Slide Counter** - Shows current position (Slide X of 11)
- **Reset Button** - Returns to first slide instantly

### Accessibility
- Proper button disabled states
- Dot indicators with aria-labels for navigation
- Clear visual feedback on active elements

## Usage Examples

### Viewing a Slide
1. App loads on Slide 1 (Theories and Hypotheses)
2. Content displays at GCSE level by default
3. Click "A Level" button to toggle content complexity

### Navigation
- Click "Next" to advance to next slide
- Click "Previous" to go back
- Click any progress dot to jump directly
- Click "Back to Start" to return to Slide 1

### Content Switching
- Toggle between GCSE and A Level at any time
- Content instantly updates while maintaining position
- Difficulty level persists as you navigate

## Educational Alignment

### GCSE Coverage (Years 10-11)
- Foundation research methods concepts
- Clear definitions and basic examples
- Essential terminology
- Simple real-world applications

### A Level Coverage (Year 12-13)
- Advanced statistical concepts
- Detailed methodological considerations
- Complex terminology (confounding variables, statistical power, etc.)
- Examples with specific metrics and procedures

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Performance

- **Bundle Size** - Optimized with tree-shaking
- **Load Time** - < 1 second (dev server)
- **Render Performance** - Smooth animations and transitions
- **Memory** - Minimal footprint for embedded deployments

## Future Enhancements

Potential extensions for this lesson framework:
- Add quiz functionality for knowledge checks
- Include video demonstrations
- Add interactive simulations for experimental designs
- Implement progress saving/resume
- Add printable PDF versions
- Create additional lesson modules (Statistics, Research Ethics, etc.)
- Add voice-over narration
- Implement note-taking features

## Contributing

This educational material is built on verified psychological research sources:
- British Psychological Society (BPS) Guidelines
- AQA examination specifications
- Peer-reviewed psychology curricula

## License

Educational use - Research Methods Psychology content and materials

## Contact & Support

For questions about content accuracy or implementation, refer to the AQA specifications and the embedded textbook material in `/Textbooks/research_methods_textbook.txt`.