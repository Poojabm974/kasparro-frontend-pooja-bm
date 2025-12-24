"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    Leaf,
    Menu,
    X,
    ArrowRight
} from "lucide-react";
import { useState } from "react";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Platform", href: "/platform" },
    { label: "About", href: "/about" },
];

export function PublicHeader() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* Glassmorphic Background */}
            <div className="absolute inset-0 glass-sidebar" />

            <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 group">
                        <motion.div
                            whileHover={{ rotate: 15, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            className="relative"
                        >
                            <div className="w-10 h-10 rounded-xl bg-[#0d6b5e] flex items-center justify-center">
                                <Leaf className="w-5 h-5 text-white" />
                            </div>
                            {/* Subtle glow on hover */}
                            <div className="absolute inset-0 rounded-xl bg-[#0d6b5e] opacity-0 group-hover:opacity-40 blur-lg transition-opacity" />
                        </motion.div>
                        <span className="text-xl font-oracle font-semibold tracking-tight">Kasparro</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center">
                        <div className="flex items-center gap-1 bg-white/40 backdrop-blur-sm rounded-full p-1 border border-white/30">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all ${isActive
                                                ? "bg-white text-[#0d6b5e] shadow-sm"
                                                : "text-[#5a6b5a] hover:text-[#1a2e1a]"
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link href="/app/dashboard">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-[#5a6b5a] hover:text-[#1a2e1a] hover:bg-[#0d6b5e]/5"
                            >
                                Sign In
                            </Button>
                        </Link>
                        <Link href="/app/audit">
                            <Button
                                size="sm"
                                className="bg-[#0d6b5e] hover:bg-[#0a5a4f] text-white gap-2 group rounded-full px-5"
                            >
                                Run AI Audit
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-xl hover:bg-[#0d6b5e]/5 transition-colors"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-5 h-5" />
                        ) : (
                            <Menu className="w-5 h-5" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden absolute top-full left-0 right-0 glass border-t border-[#0d6b5e]/10 p-4"
                    >
                        <div className="flex flex-col gap-2">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`px-4 py-3 rounded-xl transition-colors ${isActive
                                                ? "bg-[#0d6b5e] text-white font-medium"
                                                : "hover:bg-[#0d6b5e]/5 text-[#5a6b5a]"
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                            <div className="pt-4 mt-2 border-t border-[#0d6b5e]/10 flex flex-col gap-2">
                                <Link href="/app/dashboard">
                                    <Button variant="outline" className="w-full bg-white/50 border-[#0d6b5e]/20">Sign In</Button>
                                </Link>
                                <Link href="/app/audit">
                                    <Button className="w-full bg-[#0d6b5e] text-white">
                                        Run AI Audit
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </nav>
        </header>
    );
}
