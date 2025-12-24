"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { GlassCard, FeaturedCard, ScoreCircle } from "@/components/ui/glass-card";
import {
    FileText,
    Settings,
    Bot,
    Search,
    Users,
    Network,
    Shield,
    TrendingUp,
    TrendingDown,
    Minus,
    AlertTriangle,
    AlertCircle,
    Info,
    CheckCircle2,
    Lightbulb,
    Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { ModuleId, AuditModuleData, InsightType, Severity, Impact, Effort, ScoreTrend } from "@/types";

// Import all audit data
import contentQualityData from "@/data/audit-data/content-quality.json";
import technicalSeoData from "@/data/audit-data/technical-seo.json";
import aiVisibilityData from "@/data/audit-data/ai-visibility.json";
import keywordCoverageData from "@/data/audit-data/keyword-coverage.json";
import competitorAnalysisData from "@/data/audit-data/competitor-analysis.json";
import citationNetworkData from "@/data/audit-data/citation-network.json";
import trustSignalsData from "@/data/audit-data/trust-signals.json";

// Module metadata with icons
const modules = [
    { id: "content-quality" as ModuleId, name: "Content Quality", shortName: "Content", icon: FileText },
    { id: "technical-seo" as ModuleId, name: "Technical SEO", shortName: "Technical", icon: Settings },
    { id: "ai-visibility" as ModuleId, name: "AI Visibility", shortName: "AI Visibility", icon: Bot },
    { id: "keyword-coverage" as ModuleId, name: "Keyword Coverage", shortName: "Keywords", icon: Search },
    { id: "competitor-analysis" as ModuleId, name: "Competitor Analysis", shortName: "Competitors", icon: Users },
    { id: "citation-network" as ModuleId, name: "Citation Network", shortName: "Citations", icon: Network },
    { id: "trust-signals" as ModuleId, name: "Trust Signals", shortName: "Trust", icon: Shield },
];

// Map module IDs to data
const auditDataMap: Record<ModuleId, AuditModuleData> = {
    "content-quality": contentQualityData as unknown as AuditModuleData,
    "technical-seo": technicalSeoData as unknown as AuditModuleData,
    "ai-visibility": aiVisibilityData as unknown as AuditModuleData,
    "keyword-coverage": keywordCoverageData as unknown as AuditModuleData,
    "competitor-analysis": competitorAnalysisData as unknown as AuditModuleData,
    "citation-network": citationNetworkData as unknown as AuditModuleData,
    "trust-signals": trustSignalsData as unknown as AuditModuleData,
};

// Helper components
function TrendIcon({ trend }: { trend: ScoreTrend }) {
    if (trend === "up") return <TrendingUp className="w-4 h-4 text-[#22c55e]" />;
    if (trend === "down") return <TrendingDown className="w-4 h-4 text-[#f59e0b]" />;
    return <Minus className="w-4 h-4 text-[#5a6b5a]" />;
}

function InsightIcon({ type }: { type: InsightType }) {
    if (type === "success") return <CheckCircle2 className="w-4 h-4 text-[#22c55e]" />;
    if (type === "warning") return <AlertTriangle className="w-4 h-4 text-[#f59e0b]" />;
    return <AlertCircle className="w-4 h-4 text-[#dc2626]" />;
}

function SeverityBadge({ severity }: { severity: Severity }) {
    const styles = {
        low: "bg-[#0d6b5e]/10 text-[#0d6b5e] border-[#0d6b5e]/20",
        medium: "bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/20",
        high: "bg-[#dc2626]/10 text-[#dc2626] border-[#dc2626]/20",
    };
    return (
        <Badge className={cn("text-xs capitalize", styles[severity])}>
            {severity}
        </Badge>
    );
}

function EffortImpactBadge({ label, value }: { label: string; value: Effort | Impact }) {
    const colors = {
        low: "text-[#5a6b5a]",
        medium: "text-[#f59e0b]",
        high: "text-[#22c55e]",
    };
    return (
        <span className="text-xs">
            <span className="text-[#5a6b5a]">{label}:</span>{" "}
            <span className={cn("font-medium capitalize", colors[value])}>{value}</span>
        </span>
    );
}

export default function AuditPage() {
    const [selectedModule, setSelectedModule] = useState<ModuleId>("content-quality");
    const moduleData = auditDataMap[selectedModule];
    const currentModuleMeta = modules.find(m => m.id === selectedModule)!;

    return (
        <div className="flex flex-col lg:flex-row gap-6 min-h-[calc(100vh-4rem)]">
            {/* Mobile Module Tabs */}
            <div className="lg:hidden overflow-x-auto pb-2 -mx-4 px-4">
                <div className="flex gap-2 min-w-max">
                    {modules.map((module) => {
                        const isActive = selectedModule === module.id;
                        const data = auditDataMap[module.id];
                        return (
                            <button
                                key={module.id}
                                onClick={() => setSelectedModule(module.id)}
                                className={cn(
                                    "flex items-center gap-2 px-3 py-2 rounded-xl text-sm whitespace-nowrap transition-all",
                                    isActive
                                        ? "bg-[#0d6b5e] text-white"
                                        : "bg-white/60 border border-[#0d6b5e]/10 text-[#5a6b5a]"
                                )}
                            >
                                <module.icon className="w-4 h-4" />
                                <span>{module.shortName}</span>
                                <span className={cn(
                                    "text-xs font-semibold",
                                    isActive ? "text-white/80" : (
                                        data.overallScore >= 80 ? "text-[#22c55e]" :
                                            data.overallScore >= 60 ? "text-[#0d6b5e]" :
                                                data.overallScore >= 40 ? "text-[#f59e0b]" : "text-[#dc2626]"
                                    )
                                )}>
                                    {data.overallScore}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Desktop Module Sidebar */}
            <div className="hidden lg:block w-56 shrink-0">
                <GlassCard hover={false} className="sticky top-6 p-3">
                    <div className="text-xs font-medium text-[#5a6b5a] px-3 mb-2">Audit Modules</div>
                    <nav className="space-y-1">
                        {modules.map((module) => {
                            const isActive = selectedModule === module.id;
                            const data = auditDataMap[module.id];
                            return (
                                <button
                                    key={module.id}
                                    onClick={() => setSelectedModule(module.id)}
                                    className={cn(
                                        "module-item w-full text-left flex items-center gap-3",
                                        isActive && "module-item-active"
                                    )}
                                >
                                    <module.icon className="w-4 h-4 shrink-0" />
                                    <span className="flex-1 truncate text-sm">{module.shortName}</span>
                                    <span className={cn(
                                        "text-xs font-medium",
                                        data.overallScore >= 80 ? "text-[#22c55e]" :
                                            data.overallScore >= 60 ? "text-[#0d6b5e]" :
                                                data.overallScore >= 40 ? "text-[#f59e0b]" : "text-[#dc2626]"
                                    )}>
                                        {data.overallScore}
                                    </span>
                                </button>
                            );
                        })}
                    </nav>
                </GlassCard>
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedModule}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Module Header */}
                        <FeaturedCard className="mb-6">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-[#0d6b5e]/20 flex items-center justify-center">
                                        <currentModuleMeta.icon className="w-7 h-7 text-[#0d6b5e]" />
                                    </div>
                                    <div>
                                        <h1 className="text-2xl font-oracle">{currentModuleMeta.name}</h1>
                                        <p className="text-sm text-[#5a6b5a] mt-1">
                                            Last updated: {new Date(moduleData.timestamp).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-right">
                                        <div className="text-sm text-[#5a6b5a]">Overall Score</div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-3xl font-oracle font-semibold">{moduleData.overallScore}</span>
                                            <TrendIcon trend={moduleData.scoreTrend} />
                                        </div>
                                    </div>
                                    <ScoreCircle score={moduleData.overallScore} size="md" />
                                </div>
                            </div>
                        </FeaturedCard>

                        {/* Content Grid */}
                        <div className="grid lg:grid-cols-2 gap-6">
                            {/* Insights */}
                            <GlassCard hover={false}>
                                <div className="flex items-center gap-2 mb-4">
                                    <Lightbulb className="w-5 h-5 text-[#0d6b5e]" />
                                    <h2 className="font-semibold text-lg">Key Insights</h2>
                                    <Badge className="bg-[#0d6b5e]/10 text-[#0d6b5e] border-0 text-xs">
                                        {moduleData.insights.length}
                                    </Badge>
                                </div>
                                <div className="space-y-3">
                                    {moduleData.insights.map((insight, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.05 }}
                                            className={cn(
                                                "p-3 rounded-xl border",
                                                insight.type === "success" && "bg-[#22c55e]/5 border-[#22c55e]/20",
                                                insight.type === "warning" && "bg-[#f59e0b]/5 border-[#f59e0b]/20",
                                                insight.type === "critical" && "bg-[#dc2626]/5 border-[#dc2626]/20"
                                            )}
                                        >
                                            <div className="flex items-start gap-3">
                                                <InsightIcon type={insight.type as InsightType} />
                                                <div>
                                                    <div className="font-medium text-sm">{insight.title}</div>
                                                    <p className="text-xs text-[#5a6b5a] mt-1">{insight.description}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </GlassCard>

                            {/* Issues */}
                            <GlassCard hover={false}>
                                <div className="flex items-center gap-2 mb-4">
                                    <AlertTriangle className="w-5 h-5 text-[#f59e0b]" />
                                    <h2 className="font-semibold text-lg">Issues Found</h2>
                                    <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] border-0 text-xs">
                                        {moduleData.issues.length}
                                    </Badge>
                                </div>
                                <div className="space-y-3">
                                    {moduleData.issues.map((issue, i) => (
                                        <motion.div
                                            key={issue.id}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.05 }}
                                            className="p-3 rounded-xl bg-white/50 border border-[#0d6b5e]/10"
                                        >
                                            <div className="flex items-start justify-between gap-3 mb-2">
                                                <div className="font-medium text-sm">{issue.message}</div>
                                                <SeverityBadge severity={issue.severity as Severity} />
                                            </div>
                                            <p className="text-xs text-[#5a6b5a]">{issue.impact}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </GlassCard>

                            {/* Recommendations */}
                            <GlassCard hover={false} className="lg:col-span-2">
                                <div className="flex items-center gap-2 mb-4">
                                    <Zap className="w-5 h-5 text-[#84cc16]" />
                                    <h2 className="font-semibold text-lg">Recommendations</h2>
                                    <Badge className="bg-[#84cc16]/10 text-[#0d6b5e] border-0 text-xs">
                                        {moduleData.recommendations.length}
                                    </Badge>
                                </div>
                                <div className="grid md:grid-cols-2 gap-3">
                                    {moduleData.recommendations.map((rec, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.05 }}
                                            className="p-4 rounded-xl bg-gradient-to-br from-[#84cc16]/5 to-transparent border border-[#84cc16]/20"
                                        >
                                            <div className="font-medium mb-2">{rec.title}</div>
                                            <p className="text-xs text-[#5a6b5a] mb-3">{rec.action}</p>
                                            <div className="flex items-center gap-4">
                                                <EffortImpactBadge label="Effort" value={rec.effort as Effort} />
                                                <EffortImpactBadge label="Impact" value={rec.impact as Impact} />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </GlassCard>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
