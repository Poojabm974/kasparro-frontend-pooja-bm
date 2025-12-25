import { NextRequest, NextResponse } from 'next/server';

// AI Model characteristics for context
const AI_MODEL_CONTEXT = {
    chatgpt: {
        name: "ChatGPT (OpenAI)",
        strengths: "Broad knowledge, conversational, creative responses",
        dataSource: "Training data up to knowledge cutoff, no live search",
        citationStyle: "Rarely cites sources, synthesizes information",
        brandPreference: "Favors well-known brands with strong online presence"
    },
    gemini: {
        name: "Gemini (Google)",
        strengths: "Real-time search integration, factual accuracy, Google ecosystem",
        dataSource: "Live Google Search + training data",
        citationStyle: "Prefers authoritative, cited sources with structured data",
        brandPreference: "Favors brands with strong Google presence (GMB, structured data, reviews)"
    },
    perplexity: {
        name: "Perplexity AI",
        strengths: "Research-focused, always cites sources, real-time web access",
        dataSource: "Live web search with source attribution",
        citationStyle: "Always provides numbered citations and source links",
        brandPreference: "Favors brands with quality content that can be cited"
    },
    claude: {
        name: "Claude (Anthropic)",
        strengths: "Nuanced reasoning, long context, careful responses",
        dataSource: "Training data, no live search",
        citationStyle: "Acknowledges uncertainty, provides balanced views",
        brandPreference: "Favors brands with clear, well-documented information"
    }
};

interface ExplanationRequest {
    insightType: 'visibility' | 'comparison' | 'recommendation';
    model?: string;
    brandName: string;
    metric?: string;
    value?: number;
    context?: string;
}

export async function POST(request: NextRequest) {
    try {
        const body: ExplanationRequest = await request.json();
        const { insightType, model, brandName, metric, value, context } = body;

        const apiKey = process.env.GROQ_API_KEY;

        if (!apiKey) {
            return NextResponse.json(
                { error: 'Groq API key not configured' },
                { status: 500 }
            );
        }

        // Build prompt based on insight type
        let systemPrompt = `You are an expert AI visibility analyst for Kasparro, a platform that helps brands understand how they appear in AI-powered search engines. You provide clear, actionable insights about AI model differences. Be concise but insightful. Use specific examples.`;

        let userPrompt = '';

        switch (insightType) {
            case 'visibility':
                const modelInfo = AI_MODEL_CONTEXT[model as keyof typeof AI_MODEL_CONTEXT];
                userPrompt = `Explain why ${brandName} has ${value}% visibility in ${modelInfo?.name || model}. 

Context about this AI model:
- Strengths: ${modelInfo?.strengths}
- Data Source: ${modelInfo?.dataSource}
- Citation Style: ${modelInfo?.citationStyle}
- Brand Preference: ${modelInfo?.brandPreference}

${context ? `Additional context: ${context}` : ''}

Provide:
1. A 2-sentence explanation of why this visibility level occurs
2. One concrete example of a query where the brand would/wouldn't appear
3. One specific action to improve visibility in this model

Keep the total response under 150 words. Be specific and actionable.`;
                break;

            case 'comparison':
                userPrompt = `Compare how different AI models (ChatGPT, Gemini, Perplexity) perceive ${brandName}.

Key differences to explain:
- ChatGPT: ${AI_MODEL_CONTEXT.chatgpt.brandPreference}
- Gemini: ${AI_MODEL_CONTEXT.gemini.brandPreference}  
- Perplexity: ${AI_MODEL_CONTEXT.perplexity.brandPreference}

${context ? `Current situation: ${context}` : ''}

Provide a brief comparison (under 100 words) explaining:
1. Why visibility differs across models
2. Which model is the best opportunity for this brand
3. One unified strategy that works across all models`;
                break;

            case 'recommendation':
                userPrompt = `Generate a specific, actionable recommendation for ${brandName} to improve their AI visibility.

Current metric: ${metric} = ${value}%
${context ? `Context: ${context}` : ''}

Provide:
1. The specific action to take (be concrete, not generic)
2. Why this works for AI models specifically
3. Expected impact (realistic percentage improvement)

Keep response under 80 words. Be specific - mention exact content types, formats, or strategies.`;
                break;

            default:
                return NextResponse.json(
                    { error: 'Invalid insight type' },
                    { status: 400 }
                );
        }

        // Call Groq API
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'openai/gpt-oss-120b', // Using openai/gpt-oss-120b
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: userPrompt }
                ],
                temperature: 0.7,
                max_tokens: 300,
                top_p: 0.9,
            }),
        });

        if (!response.ok) {
            const errorData = await response.text();
            console.error('Groq API error:', errorData);
            return NextResponse.json(
                { error: 'Failed to generate explanation', details: errorData },
                { status: response.status }
            );
        }

        const data = await response.json();
        const explanation = data.choices?.[0]?.message?.content || 'Unable to generate explanation';

        return NextResponse.json({
            success: true,
            explanation,
            model: model || 'general',
            insightType,
            generatedAt: new Date().toISOString(),
        });

    } catch (error) {
        console.error('AI Explanation API error:', error);
        return NextResponse.json(
            { error: 'Internal server error', details: String(error) },
            { status: 500 }
        );
    }
}

// GET endpoint for health check
export async function GET() {
    const hasApiKey = !!process.env.GROQ_API_KEY;
    return NextResponse.json({
        status: 'ok',
        service: 'ai-explanations',
        groqConfigured: hasApiKey,
        availableModels: Object.keys(AI_MODEL_CONTEXT),
    });
}
