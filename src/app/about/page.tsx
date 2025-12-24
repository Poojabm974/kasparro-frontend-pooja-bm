"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlassCard, FeaturedCard } from "@/components/ui/glass-card";
import { PublicHeader } from "@/components/layouts/public-header";
import { PublicFooter } from "@/components/layouts/public-footer";
import {
    Leaf,
    Target,
    Eye,
    Sparkles,
    ChevronRight,
    Quote,
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
        transition: { staggerChildren: 0.15 },
    },
};

export default function AboutPage() {
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
                        className="max-w-3xl"
                    >
                        <motion.div variants={fadeInUp}>
                            <Badge className="mb-6 bg-[#0d6b5e]/10 text-[#0d6b5e] border-[#0d6b5e]/20">
                                About Kasparro
                            </Badge>
                        </motion.div>

                        <motion.h1
                            variants={fadeInUp}
                            className="text-4xl md:text-6xl font-oracle tracking-tight mb-6"
                        >
                            Built by Engineers
                            <br />
                            <span className="text-gradient">Who See the Shift</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="text-lg md:text-xl text-[#5a6b5a] leading-relaxed"
                        >
                            Search is undergoing its biggest transformation since Google.
                            AI models are becoming the primary way people discover brands.
                            We're building the tools to thrive in this new reality.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Mission */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Badge className="mb-4 bg-[#84cc16]/10 text-[#0d6b5e] border-[#84cc16]/20">
                                Our Mission
                            </Badge>
                            <h2 className="text-3xl md:text-4xl font-oracle mb-6">
                                Make Every Brand
                                <br />
                                AI-Visible
                            </h2>
                            <p className="text-[#5a6b5a] leading-relaxed mb-6">
                                In the AI-first search era, being found isn't just about keywords and backlinks.
                                It's about how large language models understand, trust, and recommend your brand.
                            </p>
                            <p className="text-[#5a6b5a] leading-relaxed">
                                Kasparro gives you the insight to shape that perception —
                                transforming opaque AI decisions into clear, actionable strategies.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <FeaturedCard className="p-8">
                                <Quote className="w-10 h-10 text-[#0d6b5e]/30 mb-4" />
                                <blockquote className="text-xl font-oracle italic text-[#1a2e1a] mb-4">
                                    "When AI becomes how people discover brands, the old playbook breaks.
                                    We need new tools for a new world."
                                </blockquote>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[#0d6b5e] flex items-center justify-center">
                                        <Leaf className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-sm">Kasparro Team</div>
                                        <div className="text-xs text-[#5a6b5a]">Founders</div>
                                    </div>
                                </div>
                            </FeaturedCard>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="py-16 md:py-24 bg-white/40 border-y border-[#0d6b5e]/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <Badge className="mb-4 bg-[#0d6b5e] text-white border-0">Product Philosophy</Badge>
                        <h2 className="text-3xl md:text-4xl font-oracle">
                            Principles That Guide Us
                        </h2>
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
                                icon: Eye,
                                title: "Transparency Over Black Boxes",
                                description: "AI shouldn't be mysterious. We show you exactly how models perceive your brand and why.",
                            },
                            {
                                icon: Target,
                                title: "Actionable Over Academic",
                                description: "Every insight comes with a clear next step. No vanity metrics, only growth levers.",
                            },
                            {
                                icon: Sparkles,
                                title: "Organic Over Artificial",
                                description: "We don't game AI systems. We help you genuinely improve what AI measures.",
                            },
                        ].map((item) => (
                            <motion.div key={item.title} variants={fadeInUp}>
                                <GlassCard className="h-full text-center">
                                    <div className="w-14 h-14 rounded-2xl bg-[#0d6b5e]/10 flex items-center justify-center mb-4 mx-auto">
                                        <item.icon className="w-7 h-7 text-[#0d6b5e]" />
                                    </div>
                                    <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
                                    <p className="text-[#5a6b5a]">{item.description}</p>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Vision */}
            <section className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <Badge className="mb-6 bg-[#84cc16]/10 text-[#0d6b5e] border-[#84cc16]/20">
                            Our Vision
                        </Badge>
                        <h2 className="text-3xl md:text-5xl font-oracle mb-8 leading-tight">
                            A World Where Great Brands
                            <br />
                            <span className="text-gradient">Get Found by AI</span>
                        </h2>
                        <p className="text-lg text-[#5a6b5a] leading-relaxed max-w-2xl mx-auto mb-8">
                            We envision a future where AI search surfaces the best answers,
                            not just the loudest voices. Where quality content and genuine expertise
                            are rewarded. Where every brand can compete on merit.
                        </p>
                        <p className="text-lg text-[#5a6b5a] leading-relaxed max-w-2xl mx-auto">
                            Kasparro is the compass for this new world —
                            helping brands navigate AI perception with clarity and confidence.
                        </p>
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
                        <FeaturedCard className="p-12">
                            <Leaf className="w-12 h-12 text-[#0d6b5e] mx-auto mb-6" />
                            <h2 className="text-3xl md:text-4xl font-oracle mb-6">
                                Join the Movement
                            </h2>
                            <p className="text-lg text-[#5a6b5a] mb-8 max-w-xl mx-auto">
                                Be among the first brands to master AI-native SEO.
                                Start your journey today.
                            </p>
                            <Link href="/app/audit">
                                <Button
                                    size="lg"
                                    className="bg-[#0d6b5e] hover:bg-[#0a5a4f] text-white h-14 px-8 text-lg gap-3 group rounded-full"
                                >
                                    Begin Your Audit
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
