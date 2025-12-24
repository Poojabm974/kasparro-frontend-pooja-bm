"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
    Leaf,
    LayoutDashboard,
    FileSearch,
    Network,
    LogOut,
    ChevronDown,
} from "lucide-react";
import { useBrandStore } from "@/store";
import { cn } from "@/lib/utils";

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

    // Default to first brand if none selected
    const currentBrand = brands.find(b => b.id === selectedBrandId) || brands[0];

    return (
        <aside className="fixed left-0 top-0 bottom-0 w-64 glass-sidebar z-40 flex flex-col">
            {/* Logo */}
            <div className="p-6 border-b border-[#0d6b5e]/10">
                <Link href="/" className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#0d6b5e] flex items-center justify-center">
                        <Leaf className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-oracle font-semibold">Kasparro</span>
                </Link>
            </div>

            {/* Brand Selector */}
            <div className="p-4 border-b border-[#0d6b5e]/10">
                <label className="text-xs text-[#5a6b5a] mb-2 block">Active Brand</label>
                <div className="relative">
                    <select
                        value={currentBrand.id}
                        onChange={(e) => setSelectedBrand(e.target.value)}
                        className="w-full appearance-none bg-white/60 border border-[#0d6b5e]/15 rounded-xl px-3 py-2.5 pr-8 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0d6b5e]/20"
                    >
                        {brands.map((brand) => (
                            <option key={brand.id} value={brand.id}>
                                {brand.name}
                            </option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5a6b5a] pointer-events-none" />
                </div>
                <div className="text-xs text-[#5a6b5a] mt-1.5 pl-1">{currentBrand.domain}</div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                    return (
                        <Link key={item.href} href={item.href}>
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

            {/* User Section */}
            <div className="p-4 border-t border-[#0d6b5e]/10">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-[#0d6b5e]/10 flex items-center justify-center">
                        <span className="text-sm font-medium text-[#0d6b5e]">JD</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">John Doe</div>
                        <div className="text-xs text-[#5a6b5a] truncate">john@company.com</div>
                    </div>
                </div>
                <Link
                    href="/"
                    className="flex items-center gap-2 text-sm text-[#5a6b5a] hover:text-[#0d6b5e] transition-colors"
                >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                </Link>
            </div>
        </aside>
    );
}
