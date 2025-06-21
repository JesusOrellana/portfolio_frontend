'use client'
import Particle from "@/components/shared/animations/particle";
import Header from "@/components/shared/headers/header";
import Sidebar from "@/components/shared/sidebars/sidebar"
import SidebarInfo from "@/components/shared/sidebars/sidebarInfo";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className={`dark min-h-screen bg-gradient-to-br from-black to-slate-900 text-slate-100 relative overflow-hidden`}
        >
            <Particle />
            <main className="container mx-auto p-4 relative z-10">
                <Header />
                <div className="grid grid-cols-12 gap-6">
                    <Sidebar />
                    {children}
                    <SidebarInfo />
                </div>

            </main>
        </div>
    )
}