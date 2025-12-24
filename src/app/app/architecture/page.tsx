"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { GlassCard, FeaturedCard } from "@/components/ui/glass-card";
import {
    Database,
    Layers,
    FileSearch,
    BarChart3,
    Globe,
    FileCode,
    Users,
    Bot,
    Search,
    Shield,
    Network,
    FileText,
    Settings,
    Target,
    FileOutput,
    PieChart,
    Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Architecture nodes
const inputNodes = [
    { id: "website", label: "Website Crawl", icon: Globe, description: "Full content extraction" },
    { id: "competitors", label: "Competitors", icon: Users, description: "Top 5-10 domains" },
    { id: "serp", label: "SERP Data", icon: Search, description: "Search landscape" },
    { id: "assets", label: "Brand Assets", icon: FileCode, description: "Logos, guidelines" },
    { id: "analytics", label: "Analytics", icon: BarChart3, description: "Traffic data" },
];

const moduleNodes = [
    { id: "content", label: "Content Quality", icon: FileText, color: "#0d6b5e" },
    { id: "technical", label: "Technical SEO", icon: Settings, color: "#14b8a6" },
    { id: "ai-vis", label: "AI Visibility", icon: Bot, color: "#84cc16" },
    { id: "keywords", label: "Keywords", icon: Search, color: "#0d6b5e" },
    { id: "competitors", label: "Competitors", icon: Users, color: "#14b8a6" },
    { id: "citations", label: "Citations", icon: Network, color: "#84cc16" },
    { id: "trust", label: "Trust", icon: Shield, color: "#0d6b5e" },
];

const outputNodes = [
    { id: "dashboard", label: "Dashboard", icon: PieChart, description: "Real-time metrics" },
    { id: "reports", label: "Reports", icon: FileOutput, description: "Detailed analysis" },
    { id: "roadmap", label: "Roadmap", icon: Target, description: "Action plan" },
];

export default function ArchitecturePage() {
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);

    return (
        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
            >
                <Badge className="mb-4 bg-[#0d6b5e]/10 text-[#0d6b5e] border-[#0d6b5e]/20">
                    System Architecture
                </Badge>
                <h1 className="text-3xl font-oracle mb-2">The Kasparro Pipeline</h1>
                <p className="text-[#5a6b5a]">
                    Understanding how data flows through the Living Algorithm
                </p>
            </motion.div>

            {/* Architecture Diagram */}
            <div className="relative">
                {/* Connection Lines (SVG Overlay) */}
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none z-10"
                    style={{ overflow: 'visible' }}
                >
                    {/* Input to Context Pack */}
                    <motion.path
                        d="M 240 200 Q 320 200 320 280"
                        stroke="rgba(13, 107, 94, 0.2)"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                    {/* Context Pack to Modules */}
                    <motion.path
                        d="M 420 280 Q 500 280 500 200"
                        stroke="rgba(132, 204, 22, 0.3)"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    />
                    {/* Modules to Output */}
                    <motion.path
                        d="M 700 200 Q 780 200 780 280"
                        stroke="rgba(13, 107, 94, 0.2)"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 1.1 }}
                    />
                </svg>

                <div className="grid lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 items-start relative z-20">

                    {/* INPUT ASSEMBLER */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="text-center mb-4">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d6b5e]/10 text-[#0d6b5e] text-sm font-medium">
                                <Database className="w-4 h-4" />
                                Input Assembler
                            </div>
                        </div>

                        <GlassCard hover={false} className="p-4">
                            <div className="space-y-2">
                                {inputNodes.map((node, i) => (
                                    <motion.div
                                        key={node.id}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + i * 0.1 }}
                                        onMouseEnter={() => setHoveredNode(node.id)}
                                        onMouseLeave={() => setHoveredNode(null)}
                                        className={cn(
                                            "flex items-center gap-3 p-2.5 rounded-xl transition-all cursor-pointer",
                                            "bg-white/50 border border-[#0d6b5e]/10",
                                            hoveredNode === node.id && "bg-[#0d6b5e]/10 border-[#0d6b5e]/30 scale-[1.02]"
                                        )}
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-[#0d6b5e]/10 flex items-center justify-center shrink-0">
                                            <node.icon className="w-4 h-4 text-[#0d6b5e]" />
                                        </div>
                                        <div className="min-w-0">
                                            <div className="text-sm font-medium truncate">{node.label}</div>
                                            <div className="text-xs text-[#5a6b5a] truncate">{node.description}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* Arrow 1 */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="hidden lg:flex items-center justify-center self-center"
                    >
                        <div className="flex flex-col items-center gap-2 py-8">
                            <Zap className="w-6 h-6 text-[#0d6b5e]/40" />
                            <div className="text-xs text-[#5a6b5a] text-center">Assemble</div>
                        </div>
                    </motion.div>

                    {/* CONTEXT PACK + MODULES */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="text-center mb-4">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#84cc16]/10 text-[#0d6b5e] text-sm font-medium">
                                <Layers className="w-4 h-4" />
                                Context Pack → Modules
                            </div>
                        </div>

                        <FeaturedCard className="p-4">
                            {/* Context Pack */}
                            <div className="text-center mb-4 pb-4 border-b border-[#0d6b5e]/10">
                                <div className="w-12 h-12 rounded-2xl bg-[#0d6b5e] mx-auto mb-2 flex items-center justify-center">
                                    <Layers className="w-6 h-6 text-white" />
                                </div>
                                <div className="font-medium text-sm">Unified Context</div>
                                <div className="text-xs text-[#5a6b5a]">Structured Brand Data</div>
                            </div>

                            {/* Module Grid */}
                            <div className="grid grid-cols-2 gap-2">
                                {moduleNodes.map((node, i) => (
                                    <motion.div
                                        key={node.id}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.4 + i * 0.05 }}
                                        onMouseEnter={() => setHoveredNode(node.id)}
                                        onMouseLeave={() => setHoveredNode(null)}
                                        className={cn(
                                            "flex items-center gap-2 p-2 rounded-lg transition-all cursor-pointer",
                                            "bg-white/60 border border-white/40",
                                            hoveredNode === node.id && "scale-[1.05] shadow-md"
                                        )}
                                    >
                                        <div
                                            className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                                            style={{ backgroundColor: `${node.color}15` }}
                                        >
                                            <node.icon className="w-3.5 h-3.5" style={{ color: node.color }} />
                                        </div>
                                        <span className="text-xs font-medium truncate">{node.label}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Analysis indicator */}
                            <div className="mt-4 pt-4 border-t border-[#0d6b5e]/10 text-center">
                                <motion.div
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="text-xs text-[#0d6b5e] font-medium"
                                >
                                    ● Processing...
                                </motion.div>
                            </div>
                        </FeaturedCard>
                    </motion.div>

                    {/* Arrow 2 */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="hidden lg:flex items-center justify-center self-center"
                    >
                        <div className="flex flex-col items-center gap-2 py-8">
                            <Zap className="w-6 h-6 text-[#84cc16]/40" />
                            <div className="text-xs text-[#5a6b5a] text-center">Generate</div>
                        </div>
                    </motion.div>

                    {/* OUTPUT SURFACES */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="text-center mb-4">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d6b5e] text-white text-sm font-medium">
                                <Target className="w-4 h-4" />
                                Output Surfaces
                            </div>
                        </div>

                        <GlassCard hover={false} className="p-4">
                            <div className="space-y-2">
                                {outputNodes.map((node, i) => (
                                    <motion.div
                                        key={node.id}
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 + i * 0.1 }}
                                        onMouseEnter={() => setHoveredNode(node.id)}
                                        onMouseLeave={() => setHoveredNode(null)}
                                        className={cn(
                                            "flex items-center gap-3 p-2.5 rounded-xl transition-all cursor-pointer",
                                            "bg-white/50 border border-[#0d6b5e]/10",
                                            hoveredNode === node.id && "bg-[#84cc16]/10 border-[#84cc16]/30 scale-[1.02]"
                                        )}
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-[#84cc16]/20 flex items-center justify-center shrink-0">
                                            <node.icon className="w-4 h-4 text-[#0d6b5e]" />
                                        </div>
                                        <div className="min-w-0">
                                            <div className="text-sm font-medium truncate">{node.label}</div>
                                            <div className="text-xs text-[#5a6b5a] truncate">{node.description}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>

            {/* Legend */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-12"
            >
                <GlassCard hover={false} className="p-6">
                    <h3 className="font-semibold text-lg mb-4">How It Works</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Database className="w-5 h-5 text-[#0d6b5e]" />
                                <span className="font-medium">Input Assembler</span>
                            </div>
                            <p className="text-sm text-[#5a6b5a]">
                                Gathers all relevant data about your brand: website content, competitor landscape,
                                SERP data, and analytics.
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Layers className="w-5 h-5 text-[#84cc16]" />
                                <span className="font-medium">Context Pack + Modules</span>
                            </div>
                            <p className="text-sm text-[#5a6b5a]">
                                Data is unified into a structured context pack, then processed by 7 specialized
                                analysis engines.
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Target className="w-5 h-5 text-[#0d6b5e]" />
                                <span className="font-medium">Output Surfaces</span>
                            </div>
                            <p className="text-sm text-[#5a6b5a]">
                                Results are presented through the dashboard, detailed reports, and a prioritized
                                action roadmap.
                            </p>
                        </div>
                    </div>
                </GlassCard>
            </motion.div>
        </div>
    );
}
