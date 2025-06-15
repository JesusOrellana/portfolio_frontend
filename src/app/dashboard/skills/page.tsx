import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@radix-ui/react-progress";
import { Shield } from "lucide-react";

// Definición de habilidades y niveles
const skills = [
    { name: "NextJs", level: "Advanced", color: "green" },
    { name: "Nestjs", level: "Advanced", color: "green" },
    { name: "React", level: "Advanced", color: "green" },
    { name: "AWS", level: "Advanced", color: "green" },
    { name: ".NET", level: "Intermediate", color: "blue" },
    { name: "Angular", level: "Intermediate", color: "blue" },
    { name: "Node.js & Express", level: "Advanced", color: "green" },
    { name: "Docker", level: "Intermediate", color: "blue" },
    { name: "CI/CD", level: "Intermediate", color: "blue" },
    { name: "Python & Django", level: "Basic", color: "red" },
    { name: "PHP", level: "Basic", color: "red" },
];

// Mapeo de nivel a valor numérico
const levelMap: Record<string, number> = {
    "Advanced": 100,
    "Intermediate": 70,
    "Basic": 40,
};

// Cálculo del promedio real
const overallValue = Math.round(
    skills.reduce((acc, skill) => acc + (levelMap[skill.level] || 0), 0) / skills.length
);

export default function Index() {
    return (
        <div className="col-span-12 md:col-span-9 lg:col-span-7">
            <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm h-full">
                <CardHeader className="pb-2">
                    <CardTitle className="text-slate-100 flex items-center text-base">
                        <Shield className="mr-2 h-5 w-5 text-green-500" />
                        Technical Skills
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {skills.map((skill, idx) => (
                            <div className="flex items-center justify-between" key={idx}>
                                <div className="text-sm text-slate-400">{skill.name}</div>
                                <Badge
                                    className={
                                        `bg-${skill.color}-500/20 text-${skill.color}-400 border-${skill.color}-500/50`
                                    }
                                >
                                    {skill.level}
                                </Badge>
                            </div>
                        ))}
                        <div className="pt-2 mt-2 border-t border-slate-700/50">
                            <div className="flex items-center justify-between mb-2">
                                <div className="text-sm font-medium">Overall Expertise</div>
                                <div className="text-sm text-cyan-400">{overallValue}%</div>
                            </div>
                            <Progress value={overallValue} className="h-2 bg-slate-700">
                                <div
                                    className="h-full bg-gradient-to-r from-green-500 to-cyan-500 rounded-full"
                                    style={{ width: `${overallValue}%` }}
                                />
                            </Progress>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}