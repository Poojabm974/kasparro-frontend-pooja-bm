/**
 * AI Explanation Service
 * Integrates with Groq LLM to provide dynamic, contextual explanations
 * about AI model differences and brand visibility insights.
 */

export interface AIExplanationRequest {
    insightType: 'visibility' | 'comparison' | 'recommendation';
    model?: 'chatgpt' | 'gemini' | 'perplexity' | 'claude';
    brandName: string;
    metric?: string;
    value?: number;
    context?: string;
}

export interface AIExplanationResponse {
    success: boolean;
    explanation: string;
    model: string;
    insightType: string;
    generatedAt: string;
    error?: string;
}

// Static fallback explanations when API is unavailable
const FALLBACK_EXPLANATIONS: Record<string, Record<string, string>> = {
    chatgpt: {
        high: "ChatGPT frequently mentions your brand because it has learned from your widespread online presence during training. Your content appears in relevant contexts across the web, which ChatGPT synthesizes into recommendations.",
        medium: "ChatGPT occasionally mentions your brand. To improve, focus on creating more comprehensive, authoritative content that establishes thought leadership in your space.",
        low: "ChatGPT rarely surfaces your brand. This typically happens when competitors have stronger content presence. Consider creating definitive guides and comparison content.",
    },
    gemini: {
        high: "Gemini prioritizes your brand because of strong Google ecosystem signals—structured data, Google Business Profile, and authoritative backlinks all contribute to visibility.",
        medium: "Gemini shows your brand in some contexts. Improve by adding Schema.org markup, keeping Google Business Profile updated, and earning citations from authoritative sources.",
        low: "Gemini's real-time search doesn't surface your brand frequently. Focus on technical SEO, structured data, and building citations from sources Google trusts.",
    },
    perplexity: {
        high: "Perplexity cites your content because it provides clear, factual information that can be attributed. Your content is structured in a way that's easy to quote and reference.",
        medium: "Perplexity sometimes cites you. Create more quotable, fact-dense content with clear statistics, methodologies, and expert insights that Perplexity can attribute.",
        low: "Perplexity rarely cites your brand. This search-first AI needs concrete, citable content. Add original research, statistics, and clearly structured factual content.",
    },
};

// Model difference explanations
export const MODEL_DIFFERENCES = {
    chatgpt: {
        name: "ChatGPT",
        icon: "brain",
        color: "#10a37f",
        description: "Synthesizes from training data, favors well-known brands",
        howItWorks: "ChatGPT doesn't search the web in real-time. It generates responses based on patterns learned during training. Brands that had strong content presence before the training cutoff tend to appear more frequently.",
        example: {
            query: "Best project management tools for startups",
            behavior: "Lists popular tools from training data, may not know about newer features or pricing changes",
        },
        optimizationTips: [
            "Create comprehensive, evergreen content",
            "Build brand mentions across authoritative sites",
            "Focus on thought leadership and unique perspectives",
        ],
    },
    gemini: {
        name: "Gemini",
        icon: "sparkles",
        color: "#4285f4",
        description: "Real-time Google Search integration, prefers structured data",
        howItWorks: "Gemini combines AI with live Google Search results. It heavily weights structured data, Google Business profiles, and recent authoritative content. Technical SEO matters significantly here.",
        example: {
            query: "Best project management tools for startups",
            behavior: "Shows results influenced by current SERP rankings, reviews, and Google's understanding of entities",
        },
        optimizationTips: [
            "Implement comprehensive Schema.org markup",
            "Maintain active Google Business Profile",
            "Build citations from trusted industry sources",
        ],
    },
    perplexity: {
        name: "Perplexity",
        icon: "search",
        color: "#5436da",
        description: "Always cites sources, research-focused",
        howItWorks: "Perplexity is designed for research. It always searches the web and provides numbered citations. Content that can be quoted—statistics, facts, methodologies—gets cited most often.",
        example: {
            query: "Best project management tools for startups",
            behavior: "Provides answer with [1], [2], [3] citations linking directly to source articles",
        },
        optimizationTips: [
            "Create original research with quotable statistics",
            "Structure content with clear facts and data points",
            "Build comprehensive comparison and review content",
        ],
    },
    claude: {
        name: "Claude",
        icon: "message-circle",
        color: "#d97706",
        description: "Nuanced reasoning, acknowledges uncertainty",
        howItWorks: "Claude is trained to be helpful, harmless, and honest. It tends to present balanced views and acknowledges when information might be outdated or uncertain. Clear, well-documented brand information helps.",
        example: {
            query: "Best project management tools for startups",
            behavior: "Provides nuanced comparison, mentions trade-offs, may caveat with 'based on my training data'",
        },
        optimizationTips: [
            "Provide clear, factual product documentation",
            "Address common questions and concerns transparently",
            "Build trust signals through consistent messaging",
        ],
    },
};

/**
 * Fetches AI-generated explanation from the API
 */
export async function getAIExplanation(
    request: AIExplanationRequest
): Promise<AIExplanationResponse> {
    try {
        const response = await fetch('/api/ai-explanation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request),
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Failed to get AI explanation:', error);

        // Return fallback explanation
        const fallback = getFallbackExplanation(request);
        return {
            success: false,
            explanation: fallback,
            model: request.model || 'general',
            insightType: request.insightType,
            generatedAt: new Date().toISOString(),
            error: String(error),
        };
    }
}

/**
 * Get fallback explanation when API is unavailable
 */
function getFallbackExplanation(request: AIExplanationRequest): string {
    const { model, value } = request;

    if (!model || !value) {
        return "AI models differ in how they surface brand information. ChatGPT synthesizes from training data, Gemini uses real-time search, and Perplexity always cites sources.";
    }

    const level = value >= 60 ? 'high' : value >= 35 ? 'medium' : 'low';
    return FALLBACK_EXPLANATIONS[model]?.[level] || FALLBACK_EXPLANATIONS.chatgpt[level];
}

/**
 * Get static model information (no API call needed)
 */
export function getModelInfo(modelId: keyof typeof MODEL_DIFFERENCES) {
    return MODEL_DIFFERENCES[modelId];
}

/**
 * Get all model comparisons
 */
export function getAllModelComparisons() {
    return MODEL_DIFFERENCES;
}
