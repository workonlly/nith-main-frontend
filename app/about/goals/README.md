# Goals Page - NIT Hamirpur

## Overview

The Goals page presents the strategic objectives, academic aspirations, and institutional roadmap of NIT Hamirpur. It outlines the institute's commitment to academic excellence, research innovation, sustainability, and societal development.

## Route

- **Path**: `/about/goals`
- **Location**: About section, after Vision & Mission

## Page Structure

### 1. Page Header

- **Layout**: Full-width section with centered content
- **Background**: Subtle gradient with decorative blur elements
- **Content**:
  - Main heading: "GOALS" in uppercase maroon text
  - Decorative underline
  - Descriptive paragraph explaining the institute's goals
- **Styling**: Consistent with Vision & Mission page header

### 2. Institutional Goals

- **Layout**: 3-column responsive grid (1 column mobile, 2 tablet, 3 desktop)
- **Goal Cards**: 8 strategic goals, each featuring:
  - Icon from lucide-react
  - Goal title
  - Detailed description
- **Cards Include**:
  1. Academic Excellence
  2. Research and Innovation
  3. Global Collaboration
  4. Sustainability & Environment
  5. Student Development
  6. Social Responsibility
  7. Infrastructure & Digital Growth
  8. Faculty Empowerment
- **Interactions**: Hover effect with scale animation and enhanced shadow

### 3. Long-Term Vision Banner

- **Layout**: Full-width inspirational quote section
- **Background**: Maroon gradient with decorative blur elements
- **Content**:
  - Main quote: "Empowering minds today to lead the innovations of tomorrow."
  - Supporting tagline
- **Typography**: Large white text on maroon background

### 4. Implementation Roadmap

- **Layout**: Timeline-style vertical layout with left border
- **Steps**: 5 progressive strategies:
  1. Strengthening Teaching-Learning Framework
  2. Enhancing Research Infrastructure
  3. Building Industry Linkages
  4. Promoting Global Exposure
  5. Ensuring Continuous Quality Improvement
- **Visual Elements**:
  - Maroon timeline dots
  - Connected vertical line
  - Card-style descriptions

### 5. Call-to-Action Section

- **Layout**: Centered content with dual CTAs
- **Content**:
  - Heading: "Join Us in Achieving Our Vision"
  - Tagline: "Collaborate, Innovate, Inspire"
  - Two action buttons:
    - Primary: "Explore Admissions"
    - Secondary: "Research Opportunities"
- **Styling**: Maroon primary button, outlined secondary button

## Design System

### Colors

- **Primary**: `#800000` (Maroon)
- **Accent**: `#631012` (Dark Maroon)
- **Backgrounds**: White, gray-50, gray-100
- **Text**: gray-800 (headings), gray-600 (body)
- **Borders**: gray-200

### Typography

- **Page Title**: 4xl/5xl, extrabold, uppercase, tracking-wide
- **Section Titles**: 3xl/4xl, bold, uppercase
- **Card Titles**: lg, semibold
- **Body Text**: sm/base, leading-relaxed

### Spacing

- **Section Padding**: py-16 to py-20
- **Card Padding**: p-6 to p-8
- **Grid Gaps**: gap-8
- **Max Width**: max-w-7xl (main sections), max-w-4xl (timeline)

### Components

- **Rounded Corners**: rounded-2xl (cards), rounded-xl (timeline cards)
- **Shadows**: shadow-md (default), shadow-xl (hover)
- **Borders**: border border-gray-200

## Animations

### Framer Motion Variants

- **fadeUp**: Opacity and vertical translation
- **fadeInScale**: Opacity with subtle scale
- **staggerContainer**: Sequential child animations

### Interactions

- **Card Hover**: Scale 1.02 with spring animation
- **Shadow Enhancement**: shadow-md → shadow-xl on hover
- **Button Hover**: Background color transitions

## Icons Used (lucide-react)

- Target (Academic Excellence)
- Lightbulb (Research and Innovation)
- Globe (Global Collaboration)
- Leaf (Sustainability)
- Users (Student Development)
- BookOpen (Social Responsibility)
- TrendingUp (Infrastructure & Digital Growth)
- GraduationCap (Faculty Empowerment)

## Responsive Design

### Mobile (< 768px)

- Single column layout for all grids
- Smaller text sizes (4xl headings)
- Reduced padding (py-16)
- Stacked CTA buttons

### Tablet (768px - 1024px)

- 2-column goal cards grid
- Medium text sizes
- Standard padding

### Desktop (> 1024px)

- 3-column goal cards grid
- Large text sizes (5xl headings)
- Full padding (py-20)
- Horizontal CTA buttons

## SEO Metadata

- **Title**: Goals | NIT Hamirpur
- **Description**: Explore the strategic goals of NIT Hamirpur aimed at advancing education, research, sustainability, and societal growth.
- **Keywords**: goals, objectives, NIT Hamirpur, education, research, sustainability, academic excellence

## Navigation Integration

- Added to About dropdown menu in header
- Positioned after "Vision & Mission"
- Breadcrumb navigation included

## Accessibility Features

- Semantic HTML structure
- Descriptive link text
- Proper heading hierarchy (h1, h2, h3, h4)
- Color contrast compliance
- Hover states for interactive elements

## Future Enhancements

- Progress indicators for goal completion stages
- Animated icons with micro-interactions
- Interactive timeline with expandable details
- Statistical data visualization
- Video testimonials or case studies
