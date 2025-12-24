"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    glow?: boolean;
}

export function GlassCard({
    children,
    className,
    hover = true,
    glow = false,
    ...props
}: GlassCardProps) {
    return (
        <motion.div
            whileHover={hover ? { scale: 1.02, y: -4 } : undefined}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className={cn(
                "glass-card rounded-2xl p-6",
                glow && "glow-teal-sm",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
}

// Featured Card - With lime gradient accent
interface FeaturedCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
}

export function FeaturedCard({ children, className, ...props }: FeaturedCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className={cn(
                "relative rounded-2xl p-6 overflow-hidden",
                "bg-gradient-to-br from-[#84cc16]/20 via-[#0d6b5e]/10 to-transparent",
                "border border-[#84cc16]/30",
                "backdrop-blur-sm",
                className
            )}
            {...props}
        >
            {/* Subtle glow accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#84cc16]/20 to-transparent blur-2xl" />
            <div className="relative">{children}</div>
        </motion.div>
    );
}

// Score Circle Component
interface ScoreCircleProps {
    score: number;
    size?: "sm" | "md" | "lg";
    label?: string;
}

export function ScoreCircle({ score, size = "md", label }: ScoreCircleProps) {
    const sizes = {
        sm: { container: "w-16 h-16", text: "text-lg", label: "text-[10px]" },
        md: { container: "w-24 h-24", text: "text-2xl", label: "text-xs" },
        lg: { container: "w-32 h-32", text: "text-4xl", label: "text-sm" },
    };

    const s = sizes[size];
    const circumference = 2 * Math.PI * 45;
    const strokeDashoffset = circumference - (score / 100) * circumference;

    return (
        <div className={cn("relative", s.container)}>
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="rgba(13, 107, 94, 0.1)"
                    strokeWidth="8"
                />
                {/* Progress circle */}
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="url(#scoreGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    className="transition-all duration-1000 ease-out"
                />
                <defs>
                    <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0d6b5e" />
                        <stop offset="100%" stopColor="#84cc16" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className={cn("font-oracle font-semibold", s.text)}>{score}%</span>
                {label && <span className={cn("text-muted-foreground", s.label)}>{label}</span>}
            </div>
        </div>
    );
}
