'use client'
import { User, Code, FileCode, GraduationCap, Trophy, MessageSquare, Mail, LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"

export default function Sidebar() {

    const [skillsLevel, setSkillsLevel] = useState(85);
    const [projectsCompleted, setProjectsCompleted] = useState(24);
    
    useEffect(() => {
        // Simulate fetching data from an API
        const fetchData = async () => {
            // Here you would typically fetch data from an API
            // For this example, we'll just use static values
            setSkillsLevel(85); // Example skill level
            setProjectsCompleted(24); // Example projects completed
        };

        fetchData();
    }, []);

    return (
        < div className="col-span-12 md:col-span-3 lg:col-span-2" >
            <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm h-full">
                <CardContent className="p-4">
                    <nav className="space-y-2">
                        <NavItem icon={User} label="About Me" active path=""/>
                        <NavItem icon={Code} label="Skills" path="skills" />
                        <NavItem icon={FileCode} label="Projects" path="projects"/>
                        <NavItem icon={GraduationCap} label="Education" path="education"/>
                        <NavItem icon={Trophy} label="Achievements" path="achievements"/>
                        <NavItem icon={MessageSquare} label="Testimonials" path="testimonials"/>
                        <NavItem icon={Mail} label="Contact" path="contact" />
                    </nav>

                    <div className="mt-8 pt-6 border-t border-slate-700/50">
                        <div className="text-xs text-slate-500 mb-2 font-mono">PORTFOLIO STATS</div>
                        <div className="space-y-3">
                            <StatusItem label="Skills Mastery" value={skillsLevel} color="cyan" />
                            <StatusItem label="Projects Completed" value={projectsCompleted} color="green" />
                            <StatusItem label="Client Satisfaction" value={98} color="blue" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div >
    )
}

function NavItem({ icon: Icon, label, active, path }: { icon: LucideIcon; label: string; active?: boolean, path: string }) {

    const router = useRouter();

    const goPath = (path:string) => {
        if (path === "") {
            router.replace("/dashboard");
        } else {
            router.replace(`dashboard/${path}`);
        }
    }

    return (
        <Button
            onClick={ () => goPath(path) }
            variant="ghost"
            className={`w-full justify-start ${active ? "bg-slate-800/70 text-cyan-400" : "text-slate-400 hover:text-slate-100"}`}
        >
            <Icon className="mr-2 h-4 w-4" />
            {label}
        </Button>
    )
}

function StatusItem({ label, value, color }: { label: string; value: number; color: string }) {
    const getColor = () => {
        switch (color) {
            case "cyan":
                return "from-cyan-500 to-blue-500"
            case "green":
                return "from-green-500 to-emerald-500"
            case "blue":
                return "from-blue-500 to-indigo-500"
            case "purple":
                return "from-purple-500 to-pink-500"
            default:
                return "from-cyan-500 to-blue-500"
        }
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-1">
                <div className="text-xs text-slate-400">{label}</div>
                <div className="text-xs text-slate-400">{value}%</div>
            </div>
            <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className={`h-full bg-gradient-to-r ${getColor()} rounded-full`} style={{ width: `${value}%` }}></div>
            </div>
        </div>
    )
}