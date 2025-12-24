"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlassCard, FeaturedCard } from "@/components/ui/glass-card";
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
    Database,
    Layers,
    BarChart3,
    Target,
    Globe,
    FileCode,
    CheckCircle2,
    ChevronRight,
} from "lucide-react";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

// Input data types
const inputTypes = [
    { icon: Globe, label: "Your Website", description: "Full site crawl and content analysis" },
    { icon: Users, label: "Competitors", description: "Top 5-10 competitor domains" },
    { icon: Search, label: "SERP Data", description: "Search results landscape" },
    { icon: FileCode, label: "Brand Assets", description: "Logos, guidelines, messaging" },
    { icon: BarChart3, label: "Analytics", description: "Traffic and engagement data" },
];

// Output types
const outputTypes = [
    { label: "AI Visibility Score", description: "How often AI recommends you" },
    { label: "EEAT Analysis", description: "Trust and authority metrics" },
    { label: "Actionable Roadmap", description: "Prioritized improvements" },
    { label: "Competitor Gaps", description: "Where you can win" },
];

// Audit modules
const modules = [
    { icon: FileText, name: "Content Quality", color: "#0d6b5e" },
    { icon: Settings, name: "Technical SEO", color: "#14b8a6" },
    { icon: Bot, name: "AI Visibility", color: "#84cc16" },
    { icon: Search, name: "Keyword Coverage", color: "#0d6b5e" },
    { icon: Users, name: "Competitor Analysis", color: "#14b8a6" },
    { icon: Network, name: "Citation Network", color: "#84cc16" },
    { icon: Shield, name: "Trust Signals", color: "#0d6b5e" },
];

export default function PlatformPage() {
    return (
        <div className="min-h-screen bg-living-mesh bg-neural">
            <PublicHeader />

            {/* Hero */}
            <section className="pt-32 md:pt-40 pb-16 md:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <motion.div variants={fadeInUp}>
                            <Badge className="mb-6 bg-[#0d6b5e]/10 text-[#0d6b5e] border-[#0d6b5e]/20">
                                Platform Overview
                            </Badge>
                        </motion.div>

                        <motion.h1
                            variants={fadeInUp}
                            className="text-4xl md:text-6xl font-oracle tracking-tight mb-6"
                        >
                            The Intelligence
                            <br />
                            <span className="text-gradient">Pipeline</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="text-lg text-[#5a6b5a] max-w-2xl mx-auto"
                        >
                            See how Kasparro transforms raw brand data into organic, actionable insight.
                            This is not a dashboard — it's a living system.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Pipeline Visualization */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 items-start">

                        {/* INPUT */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-center mb-6">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d6b5e]/10 text-[#0d6b5e] text-sm font-medium">
                                    <Database className="w-4 h-4" />
                                    Input Assembly
                                </div>
                            </div>

                            <GlassCard hover={false} className="space-y-4">
                                {inputTypes.map((input, i) => (
                                    <motion.div
                                        key={input.label}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-3 p-3 rounded-xl bg-white/50 border border-[#0d6b5e]/10"
                                    >
                                        <div className="w-9 h-9 rounded-lg bg-[#0d6b5e]/10 flex items-center justify-center shrink-0">
                                            <input.icon className="w-4 h-4 text-[#0d6b5e]" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-sm">{input.label}</div>
                                            <div className="text-xs text-[#5a6b5a]">{input.description}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </GlassCard>
                        </motion.div>

                        {/* Arrow */}
                        <div className="hidden lg:flex items-center justify-center h-full">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center gap-2"
                            >
                                <div className="w-px h-20 bg-gradient-to-b from-transparent via-[#0d6b5e]/30 to-transparent" />
                                <ArrowRight className="w-6 h-6 text-[#0d6b5e]/40" />
                                <div className="w-px h-20 bg-gradient-to-b from-transparent via-[#0d6b5e]/30 to-transparent" />
                            </motion.div>
                        </div>

                        {/* PROCESSING - Modules */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-center mb-6">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#84cc16]/10 text-[#0d6b5e] text-sm font-medium">
                                    <Layers className="w-4 h-4" />
                                    7 Analysis Engines
                                </div>
                            </div>

                            <FeaturedCard className="p-6">
                                <div className="grid grid-cols-2 gap-3">
                                    {modules.map((module, i) => (
                                        <motion.div
                                            key={module.name}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.05 }}
                                            className="flex items-center gap-2 p-2 rounded-lg bg-white/60 border border-white/40"
                                        >
                                            <div
                                                className="w-8 h-8 rounded-lg flex items-center justify-center"
                                                style={{ background: `${module.color}15` }}
                                            >
                                                <module.icon className="w-4 h-4" style={{ color: module.color }} />
                                            </div>
                                            <span className="text-xs font-medium truncate">{module.name}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-6 pt-4 border-t border-[#0d6b5e]/10 text-center">
                                    <div className="text-xs text-[#5a6b5a] mb-2">Unified Context Pack</div>
                                    <div className="text-2xl font-oracle font-semibold text-[#0d6b5e]">→ Organic Insight</div>
                                </div>
                            </FeaturedCard>
                        </motion.div>

                        {/* Arrow */}
                        <div className="hidden lg:flex items-center justify-center h-full">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center gap-2"
                            >
                                <div className="w-px h-20 bg-gradient-to-b from-transparent via-[#84cc16]/30 to-transparent" />
                                <ArrowRight className="w-6 h-6 text-[#84cc16]/40" />
                                <div className="w-px h-20 bg-gradient-to-b from-transparent via-[#84cc16]/30 to-transparent" />
                            </motion.div>
                        </div>

                        {/* OUTPUT */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-center mb-6">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d6b5e] text-white text-sm font-medium">
                                    <Target className="w-4 h-4" />
                                    Actionable Output
                                </div>
                            </div>

                            <GlassCard hover={false} className="space-y-4">
                                {outputTypes.map((output, i) => (
                                    <motion.div
                                        key={output.label}
                                        initial={{ opacity: 0, x: 10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-[#84cc16] mt-0.5 shrink-0" />
                                        <div>
                                            <div className="font-medium text-sm">{output.label}</div>
                                            <div className="text-xs text-[#5a6b5a]">{output.description}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </GlassCard>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What Makes Kasparro Different */}
            <section className="py-16 md:py-24 bg-white/40 border-y border-[#0d6b5e]/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-oracle mb-4">
                            Not Another SEO Tool
                        </h2>
                        <p className="text-lg text-[#5a6b5a] max-w-2xl mx-auto">
                            Traditional tools show you rankings. Kasparro shows you how AI thinks about your brand.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-3 gap-6"
                    >
                        {[
                            {
                                title: "Multi-Model Analysis",
                                description: "We analyze perception across ChatGPT, Gemini, Perplexity, and emerging AI search engines.",
                                icon: Bot,
                            },
                            {
                                title: "Entity-First Approach",
                                description: "Focus on how AI builds knowledge graphs about your brand, not just keywords.",
                                icon: Network,
                            },
                            {
                                title: "Predictive Insights",
                                description: "Anticipate changes in AI perception before they impact your visibility.",
                                icon: Zap,
                            },
                        ].map((item) => (
                            <motion.div key={item.title} variants={fadeInUp}>
                                <GlassCard className="h-full">
                                    <div className="w-12 h-12 rounded-2xl bg-[#0d6b5e]/10 flex items-center justify-center mb-4">
                                        <item.icon className="w-6 h-6 text-[#0d6b5e]" />
                                    </div>
                                    <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                                    <p className="text-[#5a6b5a]">{item.description}</p>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-oracle mb-6">
                            Ready to See Inside?
                        </h2>
                        <p className="text-lg text-[#5a6b5a] mb-8">
                            Experience the living dashboard and watch your brand health unfold.
                        </p>
                        <Link href="/app/audit">
                            <Button
                                size="lg"
                                className="bg-[#0d6b5e] hover:bg-[#0a5a4f] text-white h-14 px-8 text-lg gap-3 group rounded-full"
                            >
                                Enter the Dashboard
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <PublicFooter />
        </div>
    );
}
