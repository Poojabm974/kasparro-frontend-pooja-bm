<p align="center">
  <img src="https://img.shields.io/badge/Kasparro-The%20Living%20Algorithm-0d6b5e?style=for-the-badge&labelColor=1a2e1a" alt="Kasparro" />
</p>

<h1 align="center">🌿 Kasparro</h1>
<h3 align="center">AI-Native SEO & Brand Visibility Platform</h3>

<p align="center">
  <em>See how AI models perceive, recommend, and trust your brand in the new search ecosystem.</em>
</p>

<p align="center">
  <a href="#-live-demo">Live Demo</a> •
  <a href="#-whats-new-in-v2">What's New</a> •
  <a href="#-features">Features</a> •
  <a href="#️-tech-stack">Tech Stack</a> •
  <a href="#-architecture">Architecture</a> •
  <a href="#-getting-started">Get Started</a>
</p>

---

## 🚀 Live Demo

| Environment | Link |
|-------------|------|
| **Live App** | [🔗 kasparro.vercel.app](https://kasparro.vercel.app) |
| **Demo Video** | [🎬 Watch Demo](https://your-demo-link.com) |

> *Links will be updated after deployment*

---

## 💡 The Problem We Solve

Traditional SEO tools are stuck in the past. They focus only on Google rankings and keyword stuffing metrics.

**But the world has changed.** 

People now ask ChatGPT, Gemini, Perplexity, and Claude for recommendations. These AI models don't just see your website — they *perceive* your brand across the entire internet.

**Kasparro answers the question:** *"How do AI assistants see my brand, and how can I improve that perception?"*

---

## ✨ What's New in v2

We listened to feedback and made significant improvements:

### Before (v1) 

```
"Strong ChatGPT Presence"
"Your brand is mentioned in 68% of relevant ChatGPT responses"
```
Generic. No explanation. No actionable insight.

### After (v2) 

```
 ChatGPT Visibility: 68%

 How ChatGPT Works:
ChatGPT primarily relies on its training data (up to Oct 2023) and 
prioritizes well-structured, authoritative content. Unlike search 
engines, it doesn't crawl live — it remembers.

 Example Query:
"Best AI-native SEO tools 2024"
→ Your brand appears #2 because you have strong blog authority

 Why This Happens:
Strong presence in industry publications and authoritative backlinks 
boost ChatGPT's confidence in recommending your brand.

 Generate AI Analysis → [Dynamic GPT-OSS-120B-powered insights]
```

### Key Improvements

| Area | v1 | v2 |
|------|----|----|
| **AI Model Explanations** | Generic descriptions | Deep educational content explaining WHY each model behaves differently |
| **Concrete Examples** | None | Real query examples like *"What tools help with AI SEO?"* |
| **Dynamic Insights** | Static text | **Groq LLM integration** for real-time personalized analysis |
| **Model Comparison** | No breakdown | Per-model visibility cards (ChatGPT, Gemini, Perplexity) |
| **Optimization Tips** | Generic advice | Model-specific actionable recommendations |
| **Dark Mode** | Broken 🐛 | Fixed ✅ |
| **Code Quality** | Inline styles | Clean Tailwind utility classes |

---

## 📋 Features

### 🏠 Public Website

| Page | Description |
|------|-------------|
| **Homepage** | Hero section with "The Living Algorithm" concept, 7 module overview, pipeline visualization |
| **Platform** | Deep dive into how the system works — input → processing → output |
| **About** | Mission, philosophy, and the vision behind organic AI visibility |

### 📊 Dashboard (Authenticated)

| Page | Description |
|------|-------------|
| **Dashboard** | Brand snapshot with key metrics — AI Visibility score, EEAT, Keywords, Citations |
| **Audit** | The heart of Kasparro. 7 specialized analysis modules with insights, issues, and recommendations |
| **Architecture** | Visual pipeline showing data flow through the system |

### 🤖 The 7 Audit Modules

| Module | What It Analyzes |
|--------|-----------------|
| 📝 **Content Quality** | EEAT signals (Expertise, Experience, Authoritativeness, Trustworthiness) |
| ⚙️ **Technical SEO** | Core Web Vitals, crawlability, site structure |
| 🤖 **AI Visibility** | How ChatGPT, Gemini, Perplexity perceive your brand *(v2 enhanced!)* |
| 🔍 **Keyword Coverage** | Search intent gaps and ranking opportunities |
| 👥 **Competitor Analysis** | Share of voice and competitive positioning |
| 🔗 **Citation Network** | Backlinks, mentions, and authority mapping |
| 🛡️ **Trust Signals** | Credibility markers, reviews, verification status |

### 🆕 v2 Exclusive Features

- **AI Model Explanation Cards** — Expandable cards for each AI model with educational content
- **"Generate AI Analysis" Button** — Real-time Groq LLM integration for personalized insights
- **Query Examples** — See exactly how your brand performs for specific AI queries
- **Model-Specific Recommendations** — Tips tailored to ChatGPT vs Gemini vs Perplexity
- **Expected Improvement Indicators** — Know the potential impact of each recommendation

---

## 🛠️ Tech Stack

### Core Technologies

```
┌─────────────────────────────────────────────────────────────┐
│                        FRONTEND                              │
├─────────────────────────────────────────────────────────────┤
│  Next.js 15          React framework with App Router        │
│  TypeScript          Type-safe development                  │
│  Tailwind CSS v4     Utility-first styling                  │
│  Framer Motion       Smooth animations                      │
│  shadcn/ui           Accessible component primitives        │
├─────────────────────────────────────────────────────────────┤
│                      STATE & DATA                            │
├─────────────────────────────────────────────────────────────┤
│  Zustand             Lightweight state management           │
│  JSON Mock Data      Simulates API responses                │
├─────────────────────────────────────────────────────────────┤
│                      AI INTEGRATION                          │
├─────────────────────────────────────────────────────────────┤
│  Groq API            LLM for dynamic explanations           │
│  Llama 3.3 70B       Model powering AI insights             │
├─────────────────────────────────────────────────────────────┤
│                        DESIGN                                │
├─────────────────────────────────────────────────────────────┤
│  Playfair Display    Elegant serif for headings             │
│  Inter               Clean sans-serif for UI                │
│  Lucide React        Modern icon library                    │
└─────────────────────────────────────────────────────────────┘
```

### Why These Choices?

| Technology | Why We Chose It |
|------------|----------------|
| **Next.js 15** | App Router gives us RSC capabilities, great DX, and easy Vercel deployment |
| **Tailwind v4** | Design tokens, fast iteration, eliminates CSS file chaos |
| **Groq + Llama** | Fast inference, generous free tier, excellent for real-time AI explanations |
| **Zustand** | Minimal boilerplate compared to Redux, TypeScript-first |
| **Framer Motion** | Declarative animations that feel natural and performant |

---

## 🏗️ Architecture

### High-Level System Flow

```
┌──────────────────────────────────────────────────────────────────────────┐
│                              USER JOURNEY                                 │
└──────────────────────────────────────────────────────────────────────────┘

     ┌─────────────┐         ┌─────────────┐         ┌─────────────┐
     │   Public    │         │  Dashboard  │         │    Audit    │
     │   Pages     │────────▶│   Shell     │────────▶│   Modules   │
     │             │  login  │             │  select │             │
     └─────────────┘         └─────────────┘         └─────────────┘
           │                       │                       │
           ▼                       ▼                       ▼
     ┌─────────────┐         ┌─────────────┐         ┌─────────────┐
     │  Homepage   │         │  Brand      │         │  7 Modules  │
     │  Platform   │         │  Selector   │         │  Deep Dive  │
     │  About      │         │  Metrics    │         │  + AI Chat  │
     └─────────────┘         └─────────────┘         └─────────────┘
```

### Data Flow Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           INPUT ASSEMBLER                                │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │ Website  │ │Competitor│ │   SERP   │ │  Brand   │ │Analytics │       │
│  │  Crawl   │ │   Data   │ │   Data   │ │  Assets  │ │   Data   │       │
│  └────┬─────┘ └────┬─────┘ └────┬─────┘ └────┬─────┘ └────┬─────┘       │
│       │            │            │            │            │             │
│       └────────────┴────────────┼────────────┴────────────┘             │
│                                 ▼                                        │
│                    ┌────────────────────────┐                           │
│                    │   UNIFIED CONTEXT PACK │                           │
│                    │   (Structured Data)    │                           │
│                    └───────────┬────────────┘                           │
└────────────────────────────────┼────────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                         ANALYSIS MODULES                                 │
│                                                                          │
│    ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐                   │
│    │Content  │  │Technical│  │   AI    │  │Keyword  │                   │
│    │Quality  │  │   SEO   │  │Visibility│ │Coverage │                   │
│    └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘                   │
│         │            │            │            │                         │
│    ┌─────────┐  ┌─────────┐  ┌─────────┐                                │
│    │Competitor│ │Citation │  │  Trust  │                                │
│    │Analysis │  │ Network │  │ Signals │                                │
│    └────┬────┘  └────┬────┘  └────┬────┘                                │
│         │            │            │                                      │
│         └────────────┴────────────┘                                      │
│                      │                                                   │
│                      ▼                                                   │
│         ┌────────────────────────┐                                       │
│         │    MODULE RESULTS      │                                       │
│         │  Scores + Insights +   │                                       │
│         │  Issues + Actions      │                                       │
│         └────────────────────────┘                                       │
└─────────────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                         OUTPUT SURFACES                                  │
│                                                                          │
│    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐                │
│    │  Dashboard  │    │   Audit     │    │   Action    │                │
│    │  Overview   │    │   Detail    │    │   Roadmap   │                │
│    └─────────────┘    └─────────────┘    └─────────────┘                │
│                                │                                         │
│                                ▼                                         │
│                    ┌─────────────────────┐                              │
│                    │    GROQ LLM API     │                              │
│                    │  Dynamic AI Insights │                             │
│                    └─────────────────────┘                              │
└─────────────────────────────────────────────────────────────────────────┘
```

### Folder Structure

```
kasparro/
│
├── 📁 src/
│   ├── 📁 app/                      # Next.js App Router
│   │   ├── page.tsx                 # Homepage
│   │   ├── platform/page.tsx        # Platform overview
│   │   ├── about/page.tsx           # About page
│   │   ├── 📁 app/                  # Dashboard (authenticated)
│   │   │   ├── layout.tsx           # Dashboard layout with sidebar
│   │   │   ├── dashboard/page.tsx   # Brand metrics overview
│   │   │   ├── audit/page.tsx       # 7-module deep dive
│   │   │   └── architecture/        # Pipeline visualization
│   │   ├── 📁 api/
│   │   │   └── ai-explanation/      # Groq LLM API route
│   │   └── globals.css              # Design system
│   │
│   ├── 📁 components/
│   │   ├── 📁 ui/                   # Reusable primitives
│   │   │   ├── glass-card.tsx       # Glassmorphism cards
│   │   │   ├── ai-model-explanation.tsx  # v2: AI explanation cards
│   │   │   └── [shadcn components]
│   │   └── 📁 layouts/              # Page structure
│   │       ├── public-header.tsx
│   │       ├── public-footer.tsx
│   │       └── app-sidebar.tsx
│   │
│   ├── 📁 data/                     # Mock data (simulates API)
│   │   └── 📁 audit-data/           # Per-module JSON files
│   │
│   ├── 📁 lib/
│   │   ├── utils.ts                 # cn() helper
│   │   └── ai-explanations.ts       # v2: Model data & API client
│   │
│   ├── 📁 store/                    # Zustand state
│   │   └── index.ts                 # Brand, Audit, Theme stores
│   │
│   └── 📁 types/                    # TypeScript definitions
│
└── 📄 .env.local                    # Environment variables
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/kasparro.git
cd kasparro

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

### Environment Variables

Create a `.env.local` file:

```env
# Required for AI Analysis feature
GROQ_API_KEY=your_groq_api_key_here
```

> 💡 Get your free Groq API key at [console.groq.com](https://console.groq.com)

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### Build for Production

```bash
npm run build
npm start
```

---

## 🌐 Deployment

### Vercel

```bash
npx vercel
```


## 📝 Version History

| Version | Date | Highlights |
|---------|------|------------|
| **v2.0** | Dec 2024 | AI Model Explanations, Groq Integration, Dark Mode Fix, Code Quality Improvements |
| **v1.0** | Dec 2024 | Initial release with 7 audit modules, glassmorphism UI, responsive dashboard |

---

## 🔮 Roadmap

- [ ] Real API backend integration
- [ ] Multi-brand comparison view
- [ ] Historical trend charts
- [ ] PDF report export
- [ ] Claude model integration
- [ ] Real-time brand monitoring

---

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting a PR.

---



<p align="center">
  <strong>Built with 💚 for the future of AI-native SEO</strong>
</p>

<p align="center">
  <sub>Kasparro — The Living Algorithm</sub>
</p>
