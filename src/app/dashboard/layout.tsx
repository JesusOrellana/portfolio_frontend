'use client'
import Particle from "@/components/shared/animations/particle";
import Header from "@/components/shared/headers/header";
import SpinnerOverlay from "@/components/shared/loaders/spinnerOverlay";
import Sidebar from "@/components/shared/sidebars/sidebar"
import SidebarInfo from "@/components/shared/sidebars/sidebarInfo";
import { useEffect, useState } from "react"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

    const [theme, setTheme] = useState<"dark" | "light">("dark");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className={`${theme} min-h-screen bg-gradient-to-br from-black to-slate-900 text-slate-100 relative overflow-hidden`}
        >
            <Particle />
            <SpinnerOverlay isLoading={isLoading} />
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