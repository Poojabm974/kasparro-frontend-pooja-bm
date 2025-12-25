"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlassCard, FeaturedCard, ScoreCircle } from "@/components/ui/glass-card";
import { PublicHeader } from "@/components/layouts/public-header";
import { PublicFooter } from "@/components/layouts/public-footer";
import {
  ArrowRight,
  Bot,
  Search,
  Shield,
  Network,
  Users,
  FileText,
  Settings,
  Leaf,
  Zap,
  TrendingUp,
  Eye,
  CheckCircle2,
  ChevronRight,
  Play,
  Sparkles,
} from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as const }
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Module data
const modules = [
  { icon: FileText, name: "Content Quality", description: "EEAT signals & content depth" },
  { icon: Settings, name: "Technical SEO", description: "Core Web Vitals & crawlability" },
  { icon: Bot, name: "AI Visibility", description: "LLM perception analysis" },
  { icon: Search, name: "Keyword Coverage", description: "Intent gap analysis" },
  { icon: Users, name: "Competitor Analysis", description: "Ecosystem positioning" },
  { icon: Network, name: "Citation Network", description: "Authority mapping" },
  { icon: Shield, name: "Trust Signals", description: "Credibility markers" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-hero-organic bg-neural">
      <PublicHeader />

      {/* ═══════════════════════════════════════════════════════════════════════
          HERO SECTION — "The Living Algorithm awakens"
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-32 md:pt-44 pb-24 md:pb-36 overflow-hidden">
        {/* Floating organic shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-[15%] w-64 h-64 rounded-full bg-hero-glow-lime"
          />
          <motion.div
            animate={{
              y: [0, 15, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 left-[10%] w-96 h-96 rounded-full bg-hero-glow-teal"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp}>
              <Badge
                className="mb-8 px-4 py-2 text-sm font-medium bg-[#0d6b5e]/10 text-[#0d6b5e] border border-[#0d6b5e]/20 backdrop-blur-sm"
              >
                <Leaf className="w-3.5 h-3.5 mr-2" />
                The Living Algorithm
              </Badge>
            </motion.div>

            {/* Main Headline - Serif "Oracle" style */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-oracle tracking-tight mb-8 leading-[1.1]"
            >
              Become the Most{" "}
              <span className="text-gradient italic">Visible</span>
              <br />
              Version of Your Brand
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-[#5a6b5a] max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Kasparro transforms your brand data into organic insight.
              See how AI models perceive, recommend, and trust your brand
              in the new search ecosystem.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/app/audit">
                <Button
                  size="lg"
                  className="bg-[#0d6b5e] hover:bg-[#0a5a4f] text-white h-14 px-8 text-base font-medium gap-2 group rounded-full glow-teal-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  Begin Your Audit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/platform">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 text-base gap-2 bg-white/50 backdrop-blur-sm border-[#0d6b5e]/20 hover:bg-white/70 rounded-full"
                >
                  <Play className="w-4 h-4" />
                  Explore the System
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.23, 1, 0.32, 1] as const }}
            className="mt-20 md:mt-28 relative max-w-5xl mx-auto"
          >
            <div className="glass rounded-3xl overflow-hidden border border-white/40">
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 px-5 py-4 border-b border-[#0d6b5e]/10 bg-white/30">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#0d6b5e]/20" />
                  <div className="w-3 h-3 rounded-full bg-[#0d6b5e]/20" />
                  <div className="w-3 h-3 rounded-full bg-[#0d6b5e]/20" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1.5 rounded-full bg-[#0d6b5e]/5 text-xs text-[#5a6b5a] font-medium">
                    app.kasparro.ai/dashboard
                  </div>
                </div>
              </div>

              {/* Dashboard Preview Grid */}
              <div className="p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* AI Visibility - Featured */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="col-span-2 md:col-span-1"
                >
                  <FeaturedCard className="h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-medium text-[#0d6b5e]">AI Visibility</span>
                      <Eye className="w-4 h-4 text-[#0d6b5e]" />
                    </div>
                    <div className="flex items-end gap-3">
                      <span className="text-4xl font-oracle font-semibold">78</span>
                      <span className="text-sm text-[#84cc16] flex items-center gap-1 mb-1">
                        <TrendingUp className="w-3 h-3" />
                        +12%
                      </span>
                    </div>
                  </FeaturedCard>
                </motion.div>

                {/* Other metrics */}
                {[
                  { label: "EEAT Score", value: "85", change: "+5%", icon: Shield },
                  { label: "Keywords", value: "2.4K", change: "+340", icon: Search },
                  { label: "Citations", value: "892", change: "+67", icon: Network },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + i * 0.1 }}
                  >
                    <GlassCard hover={false} className="h-full">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-medium text-[#5a6b5a]">{stat.label}</span>
                        <stat.icon className="w-4 h-4 text-[#0d6b5e]/60" />
                      </div>
                      <div className="flex items-end gap-2">
                        <span className="text-2xl font-semibold">{stat.value}</span>
                        <span className="text-xs text-[#0d6b5e] flex items-center gap-0.5 mb-0.5">
                          <TrendingUp className="w-3 h-3" />
                          {stat.change}
                        </span>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          VALUE PROPOSITION — Why AI-SEO is different
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white/40 backdrop-blur-sm border-y border-[#0d6b5e]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[#84cc16]/10 text-[#0d6b5e] border-[#84cc16]/20">The Paradigm Shift</Badge>
            <h2 className="text-4xl md:text-5xl font-oracle mb-6">
              Data That Breathes
            </h2>
            <p className="text-lg text-[#5a6b5a] max-w-2xl mx-auto">
              Unlike sterile dashboards, Kasparro visualizes your brand health as a living ecosystem.
              Watch your visibility grow, not just your numbers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Traditional */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard hover={false} className="h-full">
                <div className="text-sm font-medium text-[#5a6b5a] mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#5a6b5a]" />
                  Traditional SEO Tools
                </div>
                <ul className="space-y-4">
                  {[
                    "Static spreadsheets and charts",
                    "Focused on Google rankings only",
                    "Keyword stuffing metrics",
                    "Quantity over quality signals",
                    "Reactive, not predictive",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#5a6b5a]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5a6b5a]/40 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>

            {/* Kasparro */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <FeaturedCard className="h-full">
                <div className="text-sm font-medium text-[#0d6b5e] mb-6 flex items-center gap-2">
                  <Leaf className="w-4 h-4" />
                  The Kasparro Approach
                </div>
                <ul className="space-y-4">
                  {[
                    "Living, organic data visualization",
                    "Multi-model AI perception analysis",
                    "Entity & knowledge graph optimization",
                    "Trust signals & authority building",
                    "Predictive insight generation",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#0d6b5e] mt-0.5 shrink-0" />
                      <span className="text-[#1a2e1a]">{item}</span>
                    </li>
                  ))}
                </ul>
              </FeaturedCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          MODULES SECTION — The 7 Analysis Engines
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[#0d6b5e] text-white border-0">7 Analysis Engines</Badge>
            <h2 className="text-4xl md:text-5xl font-oracle mb-6">
              Your Complete Ecosystem
            </h2>
            <p className="text-lg text-[#5a6b5a] max-w-2xl mx-auto">
              Each module is a specialized lens into how AI perceives your brand.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {modules.map((module) => (
              <motion.div key={module.name} variants={fadeInUp}>
                <GlassCard className="h-full">
                  <div className="w-12 h-12 rounded-2xl bg-[#0d6b5e]/10 flex items-center justify-center mb-4">
                    <module.icon className="w-6 h-6 text-[#0d6b5e]" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{module.name}</h3>
                  <p className="text-sm text-[#5a6b5a]">{module.description}</p>
                </GlassCard>
              </motion.div>
            ))}

            {/* CTA Card */}
            <motion.div variants={fadeInUp}>
              <Link href="/app/audit">
                <div className="h-full rounded-2xl border-2 border-dashed border-[#0d6b5e]/30 hover:border-[#0d6b5e]/50 transition-colors bg-[#0d6b5e]/5 flex flex-col items-center justify-center p-6 text-center cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-[#0d6b5e]/10 flex items-center justify-center mb-4 group-hover:bg-[#0d6b5e] transition-colors">
                    <ArrowRight className="w-6 h-6 text-[#0d6b5e] group-hover:text-white transition-colors group-hover:translate-x-1" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-[#0d6b5e]">Explore All</h3>
                  <p className="text-sm text-[#5a6b5a]">Start your audit</p>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          PIPELINE SECTION — How it works
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[#84cc16]/10 text-[#0d6b5e] border-[#84cc16]/20">The Journey</Badge>
            <h2 className="text-4xl md:text-5xl font-oracle mb-6">
              From Chaos to Clarity
            </h2>
            <p className="text-lg text-[#5a6b5a] max-w-2xl mx-auto">
              Your data flows through our intelligent pipeline,
              emerging as actionable organic insight.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#0d6b5e]/20 to-transparent -translate-y-1/2 hidden md:block" />

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "Input Assembly",
                  description: "We gather your website, competitors, SERP landscape, and brand assets into a unified context pack.",
                  icon: Zap,
                },
                {
                  step: "02",
                  title: "AI Analysis",
                  description: "Seven specialized modules process your data, each analyzing a different dimension of AI perception.",
                  icon: Bot,
                },
                {
                  step: "03",
                  title: "Organic Output",
                  description: "Receive living insights, prioritized recommendations, and a growth roadmap for your brand.",
                  icon: TrendingUp,
                },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <GlassCard hover={false} className={`text-center ${i === 1 ? 'md:-translate-y-4' : ''}`}>
                    <div className="w-16 h-16 rounded-2xl bg-[#0d6b5e] mx-auto mb-5 flex items-center justify-center relative">
                      <item.icon className="w-7 h-7 text-white" />
                      <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#84cc16] text-[#1a2e1a] text-xs font-bold flex items-center justify-center shadow-lg">
                        {item.step}
                      </div>
                    </div>
                    <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
                    <p className="text-sm text-[#5a6b5a] leading-relaxed">{item.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FINAL CTA
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <FeaturedCard className="p-12 md:p-16">
              <Leaf className="w-12 h-12 text-[#0d6b5e] mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-oracle mb-6">
                Ready to Grow?
              </h2>
              <p className="text-lg text-[#5a6b5a] mb-10 max-w-xl mx-auto">
                Begin your journey to AI visibility. Watch your brand health
                flourish in the new search ecosystem.
              </p>
              <Link href="/app/audit">
                <Button
                  size="lg"
                  className="bg-[#0d6b5e] hover:bg-[#0a5a4f] text-white h-14 px-10 text-lg gap-3 group rounded-full"
                >
                  Start Your Free Audit
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </FeaturedCard>
          </motion.div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
