import { Button } from "@/components/ui/button";
import { Hexagon, Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function Header() {

    const [theme, setTheme] = useState<"dark" | "light">("dark")

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <header className="flex items-center justify-between py-4 border-b border-slate-700/50 mb-6">
            <div className="flex items-center space-x-2">
                <Hexagon className="h-8 w-8 text-cyan-500" />
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    PORTFOLIO
                </span>
            </div>

            <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-3">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleTheme}
                        className="text-slate-400 hover:text-slate-100"
                    >
                        {theme === "dark" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                    </Button>
                </div>
            </div>
        </header>
    )
}