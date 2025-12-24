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

            {/* Main Content */}
            <main className="ml-64 min-h-screen">
                <div className="p-6 md:p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
