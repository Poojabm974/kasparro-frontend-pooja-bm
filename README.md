# Kasparro — The Living Algorithm

> AI-native SEO and Brand Visibility Platform

Kasparro transforms brand data into organic insight. Unlike sterile, spreadsheet-like competitors, Kasparro visualizes data as a "living ecosystem" where brand health is represented by organic growth, clarity, and interconnectedness.

## 🚀 Live Demo

**[View Live Deployment →](https://kasparro.vercel.app)** *(Update with actual URL)*

## 🌿 Design Philosophy: "Digital Biophilia"

The core concept is "The Living Algorithm" — data is not static, it is organic.

### Visual Style
- **Backgrounds**: Soft teal/sage tones with organic mesh gradients
- **Glassmorphism**: UI panels are frosted glass with high blur and low opacity borders
- **Typography**: 
  - Headings: Elegant serif (Playfair Display) for "oracle/wisdom" aesthetic
  - Data/UI: Clean sans-serif (Inter) for readability
- **Motion**: Slow, floating parallax effects, smooth easing, "breathing" UI elements

## 🏗️ Folder Structure

```
kasparro/
├── src/
│   ├── app/
│   │   ├── (public routes)
│   │   │   ├── page.tsx           # Homepage - Hero, modules, pipeline
│   │   │   ├── platform/page.tsx  # Product overview - pipeline visualization
│   │   │   └── about/page.tsx     # Mission, philosophy, vision
│   │   │
│   │   ├── app/                   # Dashboard namespace (authenticated shell)
│   │   │   ├── layout.tsx         # Dashboard layout with responsive sidebar
│   │   │   ├── dashboard/page.tsx # Brand snapshot cards
│   │   │   ├── audit/page.tsx     # Module sidebar + dynamic detail panel
│   │   │   └── architecture/page.tsx # System pipeline visualization
│   │   │
│   │   ├── globals.css            # Complete design system
│   │   └── layout.tsx             # Root layout with fonts
│   │
│   ├── components/
│   │   ├── ui/                    # Atomic components
│   │   │   ├── glass-card.tsx     # GlassCard, FeaturedCard, ScoreCircle
│   │   │   └── [shadcn components]
│   │   ├── layouts/               # Layout components
│   │   │   ├── public-header.tsx  # Marketing site header
│   │   │   ├── public-footer.tsx  # Marketing site footer
│   │   │   └── app-sidebar.tsx    # Dashboard sidebar (responsive)
│   │   └── features/              # Feature-specific components (reserved)
│   │
│   ├── data/                      # Mock JSON database
│   │   ├── brands.json            # Sample brands
│   │   ├── modules.json           # Module metadata
│   │   └── audit-data/            # Per-module audit results (7 files)
│   │
│   ├── types/                     # TypeScript definitions
│   │   └── index.ts               # All interfaces & helper functions
│   │
│   ├── store/                     # Zustand state management
│   │   └── index.ts               # Brand, Audit, Theme stores
│   │
│   └── lib/                       # Utilities
│       └── utils.ts               # cn() and helpers
```

## 🛠️ Tech Stack

| Category | Technology | Rationale |
|----------|------------|-----------|
| Framework | Next.js 16 (App Router) | Modern React, great DX, server components |
| Styling | Tailwind CSS v4 | Utility-first, fast iteration, design tokens |
| Components | shadcn/ui | Accessible, customizable, not a black box |
| Animation | Framer Motion | Declarative, performant, UX-purposeful |
| State | Zustand | Minimal boilerplate, TypeScript-first |
| Icons | Lucide React | Modern, consistent, tree-shakeable |
| Fonts | Inter + Playfair Display | Professional body + Oracle-aesthetic headings |

## 📊 The 7 Audit Modules

| Module | Description | Key Metrics |
|--------|-------------|-------------|
| **Content Quality** | EEAT signals & depth | eeat_score, reading_level |
| **Technical SEO** | Core Web Vitals | lcp_score, crawl_efficiency |
| **AI Visibility** | LLM perception | brand_mentions, sentiment |
| **Keyword Coverage** | Gap analysis | transactional_coverage |
| **Competitor Analysis** | Relative positioning | share_of_voice |
| **Citation Network** | Backlinks & mentions | domain_authority |
| **Trust Signals** | Credibility markers | trust_score, verification |

## 🎨 Architectural Decisions

### 1. **Component Separation**
- **UI Primitives** (`/components/ui/`): Atomic, reusable components (GlassCard, Button)
- **Layouts** (`/components/layouts/`): Page structure (Header, Footer, Sidebar)
- **Features** (`/components/features/`): Reserved for complex business logic components

### 2. **Data-Driven Audit UI**
The `/app/audit` page renders entirely from JSON:
```typescript
// No hardcoded JSX for insights/issues/recommendations
moduleData.insights.map((insight) => <InsightCard {...insight} />)
```
This allows easy schema changes and future API integration.

### 3. **State Management**
```typescript
// Zustand stores for predictable state flow
useBrandStore    // Selected brand ID → Triggers dashboard re-render
useAuditStore    // Selected module ID → Triggers audit panel update
useThemeStore    // Dark/light mode preference
```

### 4. **Responsive Strategy**
- **Public pages**: Mobile-first with breakpoint scaling
- **Dashboard**: Sidebar collapses to hamburger menu on mobile
- **Audit page**: Sidebar becomes horizontal scrollable tabs on mobile

## 📐 Tradeoffs Made

| Decision | Alternative Considered | Rationale |
|----------|----------------------|-----------|
| **Playfair Display for headings** | System serif or Inter for all | The "oracle/wisdom" feel was worth the extra font load (~40KB) |
| **Glassmorphism everywhere** | Solid cards | Aligned with "living algorithm" concept; backdrop-filter is well-supported now |
| **7 separate JSON files** | Single large JSON | Better simulates modular API responses; easier to extend per-module |
| **Zustand over Context** | React Context | Less boilerplate for simple state; persists pattern for future API calls |
| **No loading skeletons** | Shimmer placeholders | Time constraint; data is client-side instant anyway |
| **Fixed sidebar on desktop** | Collapsible sidebar | Simpler UX for audit workflow; consistent navigation |

## 🔧 Assumptions & Shortcuts

1. **No authentication**: User is assumed logged in per assignment spec
2. **Mock data only**: No backend; JSON files simulate API responses
3. **Single brand view**: Brand selector updates state but doesn't persist
4. **Static timestamps**: Audit dates are hardcoded in JSON
5. **Limited dark mode**: Theme toggle works but some components need polish

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Deployment

```bash
# Deploy to Vercel (recommended)
npx vercel
```

## ✅ Requirements Checklist

### Part A — Public Website
- [x] `/` — Homepage with hero, modules, pipeline, CTA
- [x] `/platform` — Product overview with pipeline visualization
- [x] `/about` — Mission, philosophy, vision

### Part B — Dashboard
- [x] `/app/dashboard` — Brand selector + 4 snapshot cards
- [x] `/app/audit` — Module sidebar + dynamic content
- [x] `/app/architecture` — System pipeline diagram

### Engineering Requirements
- [x] Component architecture (layout/feature/ui separation)
- [x] TypeScript interfaces for all data
- [x] Zustand state management
- [x] Consistent data schemas
- [x] Responsive design
- [x] Dark mode toggle

### Bonus Items
- [x] Dark/light mode toggle
- [x] Micro-interactions for module switching (AnimatePresence)
- [x] Responsive dashboard behavior
- [ ] Loading skeletons (deprioritized)
- [ ] Empty states (deprioritized)

## 📁 Data Schema

All audit modules follow this structure:

```typescript
interface AuditModuleData {
  moduleId: string;
  brandId: string;
  timestamp: string;
  overallScore: number; // 0-100
  scoreTrend: 'up' | 'down' | 'stable';
  
  insights: {
    title: string;
    description: string;
    type: 'success' | 'warning' | 'critical';
  }[];

  issues: {
    id: string;
    severity: 'low' | 'medium' | 'high';
    message: string;
    impact: string;
  }[];

  recommendations: {
    title: string;
    effort: 'low' | 'medium' | 'high';
    impact: 'low' | 'medium' | 'high';
    action: string;
  }[];
}
```

## 🔮 Future Enhancements

- [ ] Real API integration
- [ ] Server-side rendering for audit data
- [ ] Export reports (PDF)
- [ ] Multi-brand comparison view
- [ ] Historical trend charts
- [ ] AI-generated recommendations

---

**Built with 💚 for the Kasparro Engineering Assignment**
