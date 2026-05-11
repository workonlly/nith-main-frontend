# About the City Page - NIT Hamirpur

## Overview

A fully responsive and elegant page showcasing Hamirpur city, the home of NIT Hamirpur. The page highlights the city's location, climate, connectivity, and key features while maintaining design consistency with the rest of the website.

## Route

`/about/the-city`

## Features Implemented

### ✅ Page Structure

- **Breadcrumb Navigation**: Home > About > About the City
- **Hero Section**: Page title with decorative background elements
- **Main Content Section**: Two-column layout with city description and info cards
- **Location Map Section**: Interactive Google Maps embed
- **Highlight Cards**: Three feature cards showcasing key city attributes

### ✅ Design & Layout

#### Section 1: About the City

**Left Column (Main Content)**

- White rounded card with shadow
- Four paragraphs describing Hamirpur
- Highlighted key facts in maroon color
- Responsive text sizing and spacing

**Right Column (Info Cards)**
Three vertically stacked cards with:

- **Location**: Map pin icon, Himachal Pradesh, India
- **Altitude**: Mountain icon, 785 metres
- **Connectivity**: Route icon, NH-3 & NH-103

Card Features:

- Hover effects with scale animation
- Custom SVG icons in maroon color
- Clean white background with subtle shadows
- Smooth transitions

#### Section 2: Location Map

- Google Maps iframe embed of NIT Hamirpur
- Responsive aspect-video container
- Rounded corners with shadow
- Three highlight cards below map:
  - Clean & Green (Eco-friendly District)
  - High Literacy (Educational Hub)
  - Well Connected (NH Junction)

### ✅ Responsive Design

- **Mobile (≤1024px)**:
  - Single column layout
  - Info cards stack below main text
  - Center-aligned titles
  - Reduced padding
- **Desktop (>1024px)**:
  - Three-column grid (2:1 ratio)
  - Side-by-side content and info cards
  - Optimal spacing and alignment

### ✅ Styling & Animations

- **Color Palette**: Maroon (#631012) primary, gray scale for text
- **Typography**: Bold headings, relaxed line spacing
- **Shadows**: Consistent `shadow-lg` and `shadow-md` usage
- **Animations**:
  - Fade-up for main sections
  - Fade-in from left/right for content
  - Scale hover effects on cards
  - Smooth transitions (300ms duration)

### ✅ Content Highlights

- Altitude: 785 meters
- Climate: Pleasant winter, warm summer (up to 40°C)
- Languages: Hindi (primary), English (widely understood)
- Connectivity: NH-3 & NH-103 junction
- Features: High literacy rate, eco-friendly, educational hub

### ✅ SEO & Accessibility

- Metadata: Title and description for SEO
- Semantic HTML: Proper heading hierarchy
- Alt text for map iframe
- ARIA-friendly navigation
- Keyboard accessible

### ✅ Navigation Integration

- Added "About the City" link to "About NITH" dropdown
- Proper Next.js Link components
- Active route indication in breadcrumb

## File Structure

```
src/app/about/the-city/
├── page.tsx         # Main About the City page component
└── README.md        # This file
```

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **TailwindCSS 4** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React 19** - Latest React features
- **Custom SVG Icons** - Map pin, Mountain, Route

## Component Architecture

### Custom Icon Components

```typescript
MapPinIcon - Location marker
MountainIcon - Altitude/elevation
RouteIcon - Road/highway connectivity
```

### Animation Variants

```typescript
fadeUp: Entry from bottom
fadeInLeft: Entry from left
fadeInRight: Entry from right
```

### Info Card Interface

```typescript
interface CityInfoCard {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}
```

## Google Maps Integration

- Embedded using iframe
- Location: NIT Hamirpur campus
- Responsive container with aspect-ratio
- Lazy loading enabled
- No-referrer policy for privacy

## Design Consistency

- Matches History page layout pattern
- Same color scheme (#631012 maroon)
- Consistent shadow depths
- Typography hierarchy maintained
- Spacing conventions followed
- Rounded corners (rounded-xl, rounded-2xl)

## Performance Optimizations

- Client-side rendering for animations
- Lazy loading for map iframe
- Viewport-based animation triggers
- Optimized re-renders
- Minimal dependencies

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- [ ] Add weather widget with OpenWeatherMap API
- [ ] Include image carousel of Hamirpur
- [ ] Add interactive climate chart
- [ ] Include nearby attractions section
- [ ] Add language translation toggle
- [ ] Include historical landmarks
- [ ] Add public transport information

## Testing Checklist

- [x] Page accessible via navigation dropdown
- [x] Responsive on mobile, tablet, and desktop
- [x] Animations work smoothly
- [x] No TypeScript/compile errors
- [x] Map loads correctly
- [x] Breadcrumb navigation functional
- [x] All hover effects working
- [x] Icons display properly
- [x] Text readable and well-formatted

## Content Sources

All content about Hamirpur city is factual and includes:

- Geographic information (altitude, location)
- Climate details (temperature ranges, seasons)
- Connectivity information (highway numbers)
- Cultural information (languages spoken)
- City characteristics (literacy, cleanliness)
