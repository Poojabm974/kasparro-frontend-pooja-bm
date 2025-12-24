"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    Leaf,
    LayoutDashboard,
    FileSearch,
    Network,
    LogOut,
    ChevronDown,
    Menu,
    X,
    Moon,
    Sun,
} from "lucide-react";
import { useBrandStore, useThemeStore } from "@/store";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

// Mock brands data
const brands = [
    { id: "brand-1", name: "TechFlow AI", domain: "techflow.ai" },
    { id: "brand-2", name: "GreenLeaf Organics", domain: "greenleaforganics.com" },
    { id: "brand-3", name: "FinanceHub Pro", domain: "financehubpro.com" },
];

const navItems = [
    { label: "Dashboard", href: "/app/dashboard", icon: LayoutDashboard },
    { label: "Audit", href: "/app/audit", icon: FileSearch },
    { label: "Architecture", href: "/app/architecture", icon: Network },
];

export function AppSidebar() {
    const pathname = usePathname();
    const { selectedBrandId, setSelectedBrand } = useBrandStore();
    const { isDarkMode, toggleTheme } = useThemeStore();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    // Apply dark mode to document
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    // Default to first brand if none selected
    const currentBrand = brands.find(b => b.id === selectedBrandId) || brands[0];

    const SidebarContent = () => (
        <>
            {/* Logo */}
            <div className="p-6 border-b border-[#0d6b5e]/10 dark:border-white/10">
                <Link href="/" className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#0d6b5e] dark:bg-[#14b8a6] flex items-center justify-center">
                        <Leaf className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-oracle font-semibold">Kasparro</span>
                </Link>
            </div>

            {/* Brand Selector */}
            <div className="p-4 border-b border-[#0d6b5e]/10 dark:border-white/10">
                <label className="text-xs text-[#5a6b5a] dark:text-[#8fa68f] mb-2 block">Active Brand</label>
                <div className="relative">
                    <select
                        value={currentBrand.id}
                        onChange={(e) => setSelectedBrand(e.target.value)}
                        className="w-full appearance-none bg-white/60 dark:bg-white/10 border border-[#0d6b5e]/15 dark:border-white/15 rounded-xl px-3 py-2.5 pr-8 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0d6b5e]/20"
                    >
                        {brands.map((brand) => (
                            <option key={brand.id} value={brand.id}>
                                {brand.name}
                            </option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5a6b5a] pointer-events-none" />
                </div>
                <div className="text-xs text-[#5a6b5a] dark:text-[#8fa68f] mt-1.5 pl-1">{currentBrand.domain}</div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMobileOpen(false)}
                        >
                            <motion.div
                                whileHover={{ x: 4 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                className={cn(
                                    "module-item flex items-center gap-3",
                                    isActive && "module-item-active"
                                )}
                            >
                                <item.icon className="w-5 h-5 shrink-0" />
                                <span>{item.label}</span>
                            </motion.div>
                        </Link>
                    );
                })}
            </nav>

            {/* Theme Toggle */}
            <div className="px-4 pb-2">
                <button
                    onClick={toggleTheme}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[#0d6b5e]/5 dark:bg-white/5 hover:bg-[#0d6b5e]/10 dark:hover:bg-white/10 transition-colors"
                >
                    {isDarkMode ? (
                        <Sun className="w-5 h-5 text-[#bef264]" />
                    ) : (
                        <Moon className="w-5 h-5 text-[#0d6b5e]" />
                    )}
                    <span className="text-sm">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
            </div>

            {/* User Section */}
            <div className="p-4 border-t border-[#0d6b5e]/10 dark:border-white/10">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-[#0d6b5e]/10 dark:bg-white/10 flex items-center justify-center">
                        <span className="text-sm font-medium text-[#0d6b5e] dark:text-[#14b8a6]">JD</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">John Doe</div>
                        <div className="text-xs text-[#5a6b5a] dark:text-[#8fa68f] truncate">john@company.com</div>
                    </div>
                </div>
                <Link
                    href="/"
                    className="flex items-center gap-2 text-sm text-[#5a6b5a] dark:text-[#8fa68f] hover:text-[#0d6b5e] dark:hover:text-[#14b8a6] transition-colors"
                >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                </Link>
            </div>
        </>
    );

    return (
        <>
            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 glass-sidebar p-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#0d6b5e] flex items-center justify-center">
                        <Leaf className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-oracle font-semibold">Kasparro</span>
                </Link>
                <button
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    className="p-2 rounded-xl hover:bg-[#0d6b5e]/10 transition-colors"
                >
                    {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isMobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                            onClick={() => setIsMobileOpen(false)}
                        />
                        <motion.aside
                            initial={{ x: -280 }}
                            animate={{ x: 0 }}
                            exit={{ x: -280 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="lg:hidden fixed left-0 top-0 bottom-0 w-72 glass-sidebar z-50 flex flex-col pt-16"
                        >
                            <SidebarContent />
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 glass-sidebar z-40 flex-col">
                <SidebarContent />
            </aside>
        </>
    );
}
