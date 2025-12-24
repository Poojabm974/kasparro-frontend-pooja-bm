# Kasparro — The Living Algorithm

> AI-native SEO and Brand Visibility Platform

Kasparro transforms brand data into organic insight. Unlike sterile, spreadsheet-like competitors, Kasparro visualizes data as a "living ecosystem" where brand health is represented by organic growth, clarity, and interconnectedness.

## 🌿 Design Philosophy: "Digital Biophilia"

The core concept is "The Living Algorithm" — data is not static, it is organic.

### Visual Style
- **Backgrounds**: Soft teal/sage tones with organic mesh gradients
- **Glassmorphism**: UI panels are frosted glass with high blur and low opacity borders
- **Typography**: 
  - Headings: Elegant serif (Playfair Display) for "oracle/wisdom" aesthetic
  - Data/UI: Clean sans-serif (Inter) for readability
- **Motion**: Slow, floating parallax effects, smooth easing, "breathing" UI elements

## 🏗️ Architecture

```
kasparro/
├── src/
│   ├── app/
│   │   ├── (public routes)
│   │   │   ├── page.tsx           # Homepage
│   │   │   ├── platform/page.tsx  # Platform overview
│   │   │   └── about/page.tsx     # About & mission
│   │   │
│   │   ├── app/                   # Dashboard namespace
│   │   │   ├── layout.tsx         # Dashboard shell with sidebar
│   │   │   ├── dashboard/page.tsx # Brand snapshot cards
│   │   │   ├── audit/page.tsx     # Module sidebar + detail panel
│   │   │   └── architecture/page.tsx # Pipeline visualization
│   │   │
│   │   ├── globals.css            # Design system
│   │   └── layout.tsx             # Root layout with fonts
│   │
│   ├── components/
│   │   ├── ui/                    # Atomic components (shadcn + custom)
│   │   │   ├── glass-card.tsx     # GlassCard, FeaturedCard, ScoreCircle
│   │   │   └── [shadcn components]
│   │   ├── layouts/               # Layout components
│   │   │   ├── public-header.tsx  # Marketing site header
│   │   │   ├── public-footer.tsx  # Marketing site footer
│   │   │   └── app-sidebar.tsx    # Dashboard sidebar
│   │   └── features/              # Feature-specific components
│   │
│   ├── data/                      # Mock JSON database
│   │   ├── brands.json            # Sample brands
│   │   ├── modules.json           # Module metadata
│   │   └── audit-data/            # Per-module audit results
│   │       ├── content-quality.json
│   │       ├── technical-seo.json
│   │       ├── ai-visibility.json
│   │       ├── keyword-coverage.json
│   │       ├── competitor-analysis.json
│   │       ├── citation-network.json
│   │       └── trust-signals.json
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

| Category | Technology | Why |
|----------|------------|-----|
| Framework | Next.js 16 (App Router) | Modern React with great DX |
| Styling | Tailwind CSS v4 | Utility-first, design tokens |
| Components | shadcn/ui | Customizable, accessible |
| Animation | Framer Motion | Declarative, powerful |
| State | Zustand | Minimal, type-safe |
| Icons | Lucide React | Modern, consistent |
| Fonts | Inter + Playfair Display | Clean + Oracle aesthetic |

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

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🎨 Design System

### Color Palette

```css
/* Primary - Deep Teal */
--kasparro-teal: #0d6b5e;

/* Accent - Lime (growth signal) */
--kasparro-lime: #84cc16;

/* Neutral - Sage */
--kasparro-sage: #5a6b5a;
--kasparro-deep: #1a2e1a;
```

### Key Utilities

```css
.glass          /* Glassmorphism effect */
.glass-card     /* Interactive glass card */
.text-gradient  /* Teal → Lime gradient text */
.font-oracle    /* Playfair Display serif */
.module-item    /* Sidebar nav item */
.module-item-active /* With "stem glow" indicator */
.animate-breathe /* Slow breathing animation */
```

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
- [ ] Dark mode toggle
- [ ] Export reports (PDF)
- [ ] Multi-brand comparison view
- [ ] Historical trend charts
- [ ] AI-generated recommendations

---

**Built with 💚 by the Kasparro Team**
