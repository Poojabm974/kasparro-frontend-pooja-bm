"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Brain,
    Sparkles,
    Search,
    MessageCircle,
    ChevronDown,
    ChevronUp,
    Lightbulb,
    Target,
    ArrowUpRight,
    Loader2,
    Zap,
    Quote,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { MODEL_DIFFERENCES, getAIExplanation } from "@/lib/ai-explanations";

// Map model IDs to icons
const MODEL_ICONS = {
    chatgpt: Brain,
    gemini: Sparkles,
    perplexity: Search,
    claude: MessageCircle,
};

interface ModelVisibilityData {
    score: number;
    trend: "up" | "down" | "stable";
    queryExamples?: Array<{
        query: string;
        mentioned: boolean;
        position: number | null;
        context: string;
    }>;
}

interface ModelContext {
    model: string;
    whyThisHappens: string;
    concreteExample: string;
    actionableStep: string;
}

interface AIModelExplanationProps {
    modelId: "chatgpt" | "gemini" | "perplexity" | "claude";
    visibility: ModelVisibilityData;
    brandName: string;
    modelContext?: ModelContext;
    className?: string;
}

export function AIModelExplanation({
    modelId,
    visibility,
    brandName,
    modelContext,
    className,
}: AIModelExplanationProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isLoadingAI, setIsLoadingAI] = useState(false);
    const [aiExplanation, setAiExplanation] = useState<string | null>(null);

    const modelInfo = MODEL_DIFFERENCES[modelId];
    const Icon = MODEL_ICONS[modelId];

    const scoreColor = visibility.score >= 60
        ? "text-[#22c55e]"
        : visibility.score >= 40
            ? "text-[#f59e0b]"
            : "text-[#dc2626]";

    const scoreBg = visibility.score >= 60
        ? "bg-[#22c55e]/10"
        : visibility.score >= 40
            ? "bg-[#f59e0b]/10"
            : "bg-[#dc2626]/10";

    // Generate AI explanation using Groq
    const handleGenerateExplanation = async () => {
        setIsLoadingAI(true);
        try {
            const response = await getAIExplanation({
                insightType: 'visibility',
                model: modelId,
                brandName,
                value: visibility.score,
                context: modelContext?.whyThisHappens,
            });
            setAiExplanation(response.explanation);
        } catch (error) {
            console.error('Failed to generate explanation:', error);
        } finally {
            setIsLoadingAI(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={className}
        >
            <GlassCard hover={false} className="overflow-hidden">
                {/* Header */}
                <div
                    className="flex items-center justify-between p-4 cursor-pointer"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    <div className="flex items-center gap-3">
                        <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{ backgroundColor: `${modelInfo.color}15` }}
                        >
                            <Icon className="w-5 h-5" style={{ color: modelInfo.color }} />
                        </div>
                        <div>
                            <div className="font-semibold">{modelInfo.name}</div>
                            <div className="text-xs text-[#5a6b5a]">{modelInfo.description}</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className={cn("px-3 py-1.5 rounded-lg font-semibold", scoreBg, scoreColor)}>
                            {visibility.score}%
                        </div>
                        {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-[#5a6b5a]" />
                        ) : (
                            <ChevronDown className="w-5 h-5 text-[#5a6b5a]" />
                        )}
                    </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div className="px-4 pb-4 space-y-4 border-t border-[#0d6b5e]/10">
                                {/* How This Model Works */}
                                <div className="pt-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Lightbulb className="w-4 h-4 text-[#f59e0b]" />
                                        <span className="text-sm font-medium">How {modelInfo.name} Works</span>
                                    </div>
                                    <p className="text-sm text-[#5a6b5a] leading-relaxed">
                                        {modelInfo.howItWorks}
                                    </p>
                                </div>

                                {/* Concrete Example */}
                                <div className="p-3 rounded-xl bg-[#0d6b5e]/5 border border-[#0d6b5e]/10">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Search className="w-4 h-4 text-[#0d6b5e]" />
                                        <span className="text-xs font-medium text-[#0d6b5e]">Example Query</span>
                                    </div>
                                    <div className="text-sm font-medium mb-1">"{modelInfo.example.query}"</div>
                                    <p className="text-xs text-[#5a6b5a]">{modelInfo.example.behavior}</p>
                                </div>

                                {/* Model-Specific Context (if available) */}
                                {modelContext && (
                                    <div className="p-3 rounded-xl bg-white/50 border border-[#0d6b5e]/10">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Quote className="w-4 h-4 text-[#84cc16]" />
                                            <span className="text-xs font-medium">Your Brand Context</span>
                                        </div>
                                        <p className="text-sm text-[#5a6b5a] mb-2">{modelContext.whyThisHappens}</p>
                                        <div className="p-2 rounded-lg bg-[#84cc16]/10 text-xs">
                                            <strong>Example:</strong> {modelContext.concreteExample}
                                        </div>
                                    </div>
                                )}

                                {/* Query Examples */}
                                {visibility.queryExamples && visibility.queryExamples.length > 0 && (
                                    <div>
                                        <div className="text-xs font-medium text-[#5a6b5a] mb-2">Query Performance</div>
                                        <div className="space-y-2">
                                            {visibility.queryExamples.map((example, i) => (
                                                <div
                                                    key={i}
                                                    className={cn(
                                                        "p-2 rounded-lg border text-xs",
                                                        example.mentioned
                                                            ? "bg-[#22c55e]/5 border-[#22c55e]/20"
                                                            : "bg-[#dc2626]/5 border-[#dc2626]/20"
                                                    )}
                                                >
                                                    <div className="flex items-center justify-between mb-1">
                                                        <span className="font-medium">"{example.query}"</span>
                                                        {example.mentioned ? (
                                                            <Badge className="bg-[#22c55e]/20 text-[#22c55e] border-0 text-[10px]">
                                                                #{example.position}
                                                            </Badge>
                                                        ) : (
                                                            <Badge className="bg-[#dc2626]/20 text-[#dc2626] border-0 text-[10px]">
                                                                Not Shown
                                                            </Badge>
                                                        )}
                                                    </div>
                                                    <p className="text-[#5a6b5a]">{example.context}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Optimization Tips */}
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Target className="w-4 h-4 text-[#0d6b5e]" />
                                        <span className="text-xs font-medium">How to Improve</span>
                                    </div>
                                    <ul className="space-y-1.5">
                                        {modelInfo.optimizationTips.map((tip, i) => (
                                            <li key={i} className="flex items-start gap-2 text-xs text-[#5a6b5a]">
                                                <ArrowUpRight className="w-3 h-3 text-[#84cc16] mt-0.5 shrink-0" />
                                                {tip}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* AI-Generated Explanation */}
                                <div className="pt-2 border-t border-[#0d6b5e]/10">
                                    {aiExplanation ? (
                                        <div className="p-3 rounded-xl bg-gradient-to-br from-[#0d6b5e]/10 to-[#84cc16]/10 border border-[#0d6b5e]/20">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Zap className="w-4 h-4 text-[#84cc16]" />
                                                <span className="text-xs font-medium text-[#0d6b5e]">AI Analysis</span>
                                            </div>
                                            <p className="text-sm text-[#1a2e1a] leading-relaxed whitespace-pre-line">
                                                {aiExplanation}
                                            </p>
                                        </div>
                                    ) : (
                                        <Button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleGenerateExplanation();
                                            }}
                                            disabled={isLoadingAI}
                                            className="w-full bg-[#0d6b5e]/10 hover:bg-[#0d6b5e]/20 text-[#0d6b5e] border-0"
                                            size="sm"
                                        >
                                            {isLoadingAI ? (
                                                <>
                                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                    Generating insight...
                                                </>
                                            ) : (
                                                <>
                                                    <Zap className="w-4 h-4 mr-2" />
                                                    Generate AI Analysis
                                                </>
                                            )}
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </GlassCard>
        </motion.div>
    );
}

// Component to show all models comparison
interface AIModelsComparisonProps {
    modelVisibility: Record<string, ModelVisibilityData>;
    brandName: string;
    insights: Array<{
        title: string;
        modelContext?: ModelContext;
        type: string;
    }>;
}

export function AIModelsComparison({
    modelVisibility,
    brandName,
    insights
}: AIModelsComparisonProps) {
    const models = ['chatgpt', 'gemini', 'perplexity'] as const;

    // Map insights to their model contexts
    const modelContexts: Record<string, ModelContext | undefined> = {};
    insights.forEach(insight => {
        if (insight.modelContext) {
            modelContexts[insight.modelContext.model] = insight.modelContext;
        }
    });

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
                <Brain className="w-5 h-5 text-[#0d6b5e]" />
                <h2 className="font-semibold text-lg">AI Model Visibility</h2>
                <Badge className="bg-[#0d6b5e]/10 text-[#0d6b5e] border-0 text-xs">
                    {models.length} Models
                </Badge>
            </div>

            <p className="text-sm text-[#5a6b5a] mb-4">
                Different AI models perceive your brand differently. Click each card to understand why and how to improve.
            </p>

            {models.map((modelId, i) => (
                <motion.div
                    key={modelId}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                >
                    <AIModelExplanation
                        modelId={modelId}
                        visibility={modelVisibility[modelId] || { score: 0, trend: 'stable' }}
                        brandName={brandName}
                        modelContext={modelContexts[modelId]}
                    />
                </motion.div>
            ))}
        </div>
    );
}
