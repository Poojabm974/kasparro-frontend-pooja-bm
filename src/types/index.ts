/**
 * ═══════════════════════════════════════════════════════════════════════════
 * KASPARRO TYPE DEFINITIONS
 * "The Living Algorithm" - AI-SEO Intelligence Platform
 * ═══════════════════════════════════════════════════════════════════════════
 */

// ══════════════════════════════════════════════════════════════════════════
// BRAND TYPES
// ══════════════════════════════════════════════════════════════════════════
export interface Brand {
    id: string;
    name: string;
    domain: string;
    logo?: string;
    industry: string;
    createdAt: string;
    lastAuditAt: string;
}

// ══════════════════════════════════════════════════════════════════════════
// AUDIT MODULE TYPES (Per PRD Section 5)
// ══════════════════════════════════════════════════════════════════════════
export type ModuleId =
    | 'content-quality'
    | 'technical-seo'
    | 'ai-visibility'
    | 'keyword-coverage'
    | 'competitor-analysis'
    | 'citation-network'
    | 'trust-signals';

export type ScoreTrend = 'up' | 'down' | 'stable';
export type InsightType = 'success' | 'warning' | 'critical';
export type Severity = 'low' | 'medium' | 'high';
export type Effort = 'low' | 'medium' | 'high';
export type Impact = 'low' | 'medium' | 'high';

/**
 * Insight — Key positive/negative findings
 */
export interface Insight {
    title: string;
    description: string;
    type: InsightType;
}

/**
 * Issue — Problems that need attention
 */
export interface Issue {
    id: string;
    severity: Severity;
    message: string;
    impact: string;
}

/**
 * Recommendation — Actionable next steps
 */
export interface Recommendation {
    title: string;
    effort: Effort;
    impact: Impact;
    action: string;
}

/**
 * AuditModuleData — Complete data structure for each audit module
 * This is what gets loaded from /data/audit-data/[module-id].json
 */
export interface AuditModuleData {
    moduleId: ModuleId;
    brandId: string;
    timestamp: string;
    overallScore: number; // 0-100
    scoreTrend: ScoreTrend;

    insights: Insight[];
    issues: Issue[];
    recommendations: Recommendation[];
}

/**
 * Module Metadata — Static info about each module (for sidebar/navigation)
 */
export interface ModuleMetadata {
    id: ModuleId;
    name: string;
    shortName: string;
    description: string;
    icon: string; // Lucide icon name
}

// ══════════════════════════════════════════════════════════════════════════
// DASHBOARD TYPES
// ══════════════════════════════════════════════════════════════════════════
export interface DashboardSnapshot {
    aiVisibilityScore: number;
    aiVisibilityTrend: ScoreTrend;
    eeaTScore: number;
    eeatTrend: ScoreTrend;
    keywordCoverage: {
        branded: number;
        nonBranded: number;
        trend: ScoreTrend;
    };
    lastAuditAt: string;
    nextScheduledAudit?: string;
}

// ══════════════════════════════════════════════════════════════════════════
// ARCHITECTURE TYPES (for /app/architecture visualization)
// ══════════════════════════════════════════════════════════════════════════
export interface ArchitectureNode {
    id: string;
    type: 'input' | 'processor' | 'module' | 'output';
    label: string;
    description: string;
    x: number;
    y: number;
}

export interface ArchitectureConnection {
    from: string;
    to: string;
    animated?: boolean;
}

// ══════════════════════════════════════════════════════════════════════════
// UI HELPER TYPES
// ══════════════════════════════════════════════════════════════════════════
export type NavItem = {
    label: string;
    href: string;
    icon?: string;
    badge?: string;
};

// ══════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ══════════════════════════════════════════════════════════════════════════

/**
 * Get score level category based on numeric value
 */
export function getScoreLevel(value: number): 'excellent' | 'good' | 'average' | 'poor' {
    if (value >= 80) return 'excellent';
    if (value >= 60) return 'good';
    if (value >= 40) return 'average';
    return 'poor';
}

/**
 * Get CSS class for score coloring
 */
export function getScoreColorClass(value: number): string {
    const level = getScoreLevel(value);
    return `score-${level}`;
}

/**
 * Get background CSS class for score
 */
export function getScoreBgClass(value: number): string {
    const level = getScoreLevel(value);
    return `bg-score-${level}`;
}

/**
 * Get insight type CSS class
 */
export function getInsightClass(type: InsightType): string {
    return `insight-${type}`;
}

/**
 * Format timestamp to human-readable
 */
export function formatTimestamp(timestamp: string): string {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
}

/**
 * Get trend icon name
 */
export function getTrendIcon(trend: ScoreTrend): string {
    switch (trend) {
        case 'up': return 'TrendingUp';
        case 'down': return 'TrendingDown';
        case 'stable': return 'Minus';
    }
}
