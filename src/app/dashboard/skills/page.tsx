'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Code, Database, Globe, Layers, Server } from 'lucide-react'
import { profileData } from '@/data/profile'

export default function SkillsPage() {

    return (
        <div className="col-span-12 md:col-span-9 lg:col-span-7">
            <div className="grid gap-6">

                {/* Backend Skills */}
                <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm overflow-hidden">
                    <CardHeader className="border-b border-slate-700/50 pb-3">
                        <CardTitle className="text-slate-100 flex items-center">
                            <Server className="mr-2 h-5 w-5 text-purple-500" />
                            Backend
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {profileData.techStack.backend.map(skill => (
                                <SkillBar key={skill.name} name={skill.name} level={skill.level} color="from-purple-500 to-pink-500" />
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Frontend Skills */}
                <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm overflow-hidden">
                    <CardHeader className="border-b border-slate-700/50 pb-3">
                        <CardTitle className="text-slate-100 flex items-center">
                            <Layers className="mr-2 h-5 w-5 text-cyan-500" />
                            Frontend
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {profileData.techStack.frontend.map(skill => (
                                <SkillBar key={skill.name} name={skill.name} level={skill.level} color="from-cyan-500 to-blue-500" />
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* DevOps & Cloud */}
                <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm overflow-hidden">
                    <CardHeader className="border-b border-slate-700/50 pb-3">
                        <CardTitle className="text-slate-100 flex items-center">
                            <Globe className="mr-2 h-5 w-5 text-blue-500" />
                            DevOps & Cloud
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {profileData.techStack.cloudAndDevOps.map(skill => (
                                <SkillBar key={skill.name} name={skill.name} level={skill.level} color="from-blue-500 to-indigo-500" />
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Databases */}
                    <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm overflow-hidden">
                        <CardHeader className="border-b border-slate-700/50 pb-3">
                            <CardTitle className="text-slate-100 flex items-center">
                                <Database className="mr-2 h-5 w-5 text-emerald-500" />
                                Databases
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="space-y-4">
                                {profileData.techStack.databases.map(skill => (
                                    <SkillBar key={skill.name} name={skill.name} level={skill.level} color="from-emerald-500 to-green-500" />
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Web3 / Blockchain */}
                    <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm overflow-hidden">
                        <CardHeader className="border-b border-slate-700/50 pb-3">
                            <CardTitle className="text-slate-100 flex items-center">
                                <Code className="mr-2 h-5 w-5 text-amber-500" />
                                Web3 & Blockchain
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="space-y-4">
                                {profileData.techStack.web3.map(skill => (
                                    <SkillBar key={skill.name} name={skill.name} level={skill.level} color="from-amber-500 to-orange-500" />
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    )
}

function SkillBar({ name, level, color }: { name: string, level: number, color: string }) {
    return (
        <div>
            <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-slate-300">{name}</span>
                <span className="text-xs text-slate-500">{level}%</span>
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                    className={`h-full bg-gradient-to-r ${color} rounded-full`}
                    style={{ width: `${level}%` }}
                ></div>
            </div>
        </div>
    )
}