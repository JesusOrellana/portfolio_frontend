'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Briefcase } from 'lucide-react'
import { profileData } from '@/data/profile'

export default function ExperiencePage() {
    return (
        <div className="col-span-12 md:col-span-9 lg:col-span-7">
            <div className="grid gap-6">
                <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm overflow-hidden">
                    <CardHeader className="border-b border-slate-700/50 pb-3">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-slate-100 flex items-center">
                                <Briefcase className="mr-2 h-5 w-5 text-cyan-500" />
                                Professional Experience
                            </CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="relative border-l border-slate-700/50 ml-3 space-y-8">
                            {profileData.experience.map((exp, index) => (
                                <div key={exp.id} className="relative pl-6">
                                    {/* Timeline Dot */}
                                    <div className={`absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-slate-900 ${index === 0 ? 'bg-cyan-400 animate-pulse' : 'bg-slate-600'}`}></div>

                                    <div className="flex flex-col mb-1">
                                        <h3 className="text-lg font-semibold text-slate-100">{exp.role}</h3>
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-1 mb-2">
                                            <span className="text-cyan-500 font-medium">{exp.company}</span>
                                            <span className="text-slate-400 text-sm font-mono mt-1 sm:mt-0 bg-slate-800/50 px-2 py-0.5 rounded border border-slate-700/50 inline-block w-fit">{exp.period}</span>
                                        </div>
                                    </div>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
