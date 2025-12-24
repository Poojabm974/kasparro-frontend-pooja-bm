"use client";

import { AppSidebar } from "@/components/layouts/app-sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-living-mesh bg-neural">
            {/* Sidebar */}
            <AppSidebar />

            {/* Main Content - responsive margins */}
            <main className="lg:ml-64 min-h-screen pt-16 lg:pt-0">
                <div className="p-4 md:p-6 lg:p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
