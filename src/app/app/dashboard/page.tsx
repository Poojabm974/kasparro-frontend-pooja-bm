"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { GlassCard, FeaturedCard, ScoreCircle } from "@/components/ui/glass-card";
import {
    Eye,
    Shield,
    Search,
    Clock,
    TrendingUp,
    TrendingDown,
    RefreshCw,
    Calendar,
    ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] }
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

// Mock dashboard data
const dashboardData = {
    brandName: "TechFlow AI",
    lastAuditAt: "2024-12-23T14:30:00Z",
    aiVisibility: { score: 78, trend: "up" as const, change: 12 },
    eeatScore: { score: 85, trend: "up" as const, change: 5 },
    keywords: { branded: 94, nonBranded: 34, trend: "down" as const, change: -3 },
    citations: { count: 892, trend: "up" as const, change: 67 },
};

function TrendBadge({ trend, change }: { trend: "up" | "down" | "stable"; change: number }) {
    const isUp = trend === "up";
    return (
        <span className={`inline-flex items-center gap-1 text-xs font-medium ${isUp ? 'text-[#22c55e]' : 'text-[#f59e0b]'}`}>
            {isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {isUp ? '+' : ''}{change}%
        </span>
    );
}

export default function DashboardPage() {
    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
            >
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-oracle mb-2">Dashboard</h1>
                        <p className="text-[#5a6b5a]">
                            Brand health overview for <span className="font-medium text-[#1a2e1a]">{dashboardData.brandName}</span>
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="text-right text-sm">
                            <div className="text-[#5a6b5a]">Last audit</div>
                            <div className="font-medium flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5" />
                                {formatDate(dashboardData.lastAuditAt)}
                            </div>
                        </div>
                        <Button size="sm" className="bg-[#0d6b5e] hover:bg-[#0a5a4f] text-white gap-2 rounded-full">
                            <RefreshCw className="w-4 h-4" />
                            Refresh
                        </Button>
                    </div>
                </div>
            </motion.div>

            {/* Snapshot Cards Grid */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
            >
                {/* AI Visibility - Featured */}
                <motion.div variants={fadeInUp} className="lg:col-span-1">
                    <FeaturedCard className="h-full">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <div className="text-xs font-medium text-[#0d6b5e] mb-1">AI Visibility</div>
                                <div className="text-xs text-[#5a6b5a]">How AI recommends you</div>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-[#0d6b5e]/20 flex items-center justify-center">
                                <Eye className="w-5 h-5 text-[#0d6b5e]" />
                            </div>
                        </div>
                        <div className="flex items-end justify-between">
                            <div>
                                <div className="text-4xl font-oracle font-semibold">{dashboardData.aiVisibility.score}</div>
                                <TrendBadge trend={dashboardData.aiVisibility.trend} change={dashboardData.aiVisibility.change} />
                            </div>
                            <ScoreCircle score={dashboardData.aiVisibility.score} size="sm" />
                        </div>
                    </FeaturedCard>
                </motion.div>

                {/* EEAT Score */}
                <motion.div variants={fadeInUp}>
                    <GlassCard className="h-full">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <div className="text-xs font-medium text-[#1a2e1a] mb-1">Trust / EEAT</div>
                                <div className="text-xs text-[#5a6b5a]">Authority signals</div>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-[#0d6b5e]/10 flex items-center justify-center">
                                <Shield className="w-5 h-5 text-[#0d6b5e]" />
                            </div>
                        </div>
                        <div className="flex items-end justify-between">
                            <div>
                                <div className="text-4xl font-oracle font-semibold">{dashboardData.eeatScore.score}</div>
                                <TrendBadge trend={dashboardData.eeatScore.trend} change={dashboardData.eeatScore.change} />
                            </div>
                            <ScoreCircle score={dashboardData.eeatScore.score} size="sm" />
                        </div>
                    </GlassCard>
                </motion.div>

                {/* Keyword Coverage */}
                <motion.div variants={fadeInUp}>
                    <GlassCard className="h-full">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <div className="text-xs font-medium text-[#1a2e1a] mb-1">Keyword Coverage</div>
                                <div className="text-xs text-[#5a6b5a]">Branded vs Non-Branded</div>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-[#0d6b5e]/10 flex items-center justify-center">
                                <Search className="w-5 h-5 text-[#0d6b5e]" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-[#5a6b5a]">Branded</span>
                                <span className="text-sm font-semibold text-[#22c55e]">{dashboardData.keywords.branded}%</span>
                            </div>
                            <div className="h-2 bg-[#0d6b5e]/10 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-[#0d6b5e] to-[#84cc16] rounded-full"
                                    style={{ width: `${dashboardData.keywords.branded}%` }}
                                />
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-[#5a6b5a]">Non-Branded</span>
                                <span className="text-sm font-semibold text-[#f59e0b]">{dashboardData.keywords.nonBranded}%</span>
                            </div>
                            <div className="h-2 bg-[#0d6b5e]/10 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] rounded-full"
                                    style={{ width: `${dashboardData.keywords.nonBranded}%` }}
                                />
                            </div>
                        </div>
                    </GlassCard>
                </motion.div>

                {/* Citations */}
                <motion.div variants={fadeInUp}>
                    <GlassCard className="h-full">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <div className="text-xs font-medium text-[#1a2e1a] mb-1">Citations</div>
                                <div className="text-xs text-[#5a6b5a]">Backlinks & mentions</div>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-[#0d6b5e]/10 flex items-center justify-center">
                                <Calendar className="w-5 h-5 text-[#0d6b5e]" />
                            </div>
                        </div>
                        <div>
                            <div className="text-4xl font-oracle font-semibold">{dashboardData.citations.count.toLocaleString()}</div>
                            <TrendBadge trend={dashboardData.citations.trend} change={dashboardData.citations.change} />
                        </div>
                    </GlassCard>
                </motion.div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <Link href="/app/audit">
                        <GlassCard className="flex items-center justify-between group cursor-pointer">
                            <div>
                                <div className="font-medium mb-1">View Full Audit</div>
                                <div className="text-sm text-[#5a6b5a]">Explore all 7 analysis modules</div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-[#0d6b5e] group-hover:translate-x-1 transition-transform" />
                        </GlassCard>
                    </Link>
                    <Link href="/app/architecture">
                        <GlassCard className="flex items-center justify-between group cursor-pointer">
                            <div>
                                <div className="font-medium mb-1">System Architecture</div>
                                <div className="text-sm text-[#5a6b5a]">See how Kasparro works</div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-[#0d6b5e] group-hover:translate-x-1 transition-transform" />
                        </GlassCard>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
