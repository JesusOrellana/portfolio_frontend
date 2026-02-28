'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GraduationCap, Award } from 'lucide-react'
import { profileData } from '@/data/profile'

export default function EducationPage() {
    return (
        <div className="col-span-12 md:col-span-9 lg:col-span-7">
            <div className="grid gap-6">

                {/* Certifications */}
                <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm overflow-hidden">
                    <CardHeader className="border-b border-slate-700/50 pb-3">
                        <CardTitle className="text-slate-100 flex items-center">
                            <Award className="mr-2 h-5 w-5 text-amber-500" />
                            Certifications
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="space-y-4">
                            {profileData.certifications.map((cert, index) => (
                                <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-amber-500/50 transition-colors">
                                    <div>
                                        <h3 className="font-semibold text-slate-200">{cert.name}</h3>
                                        <div className="text-amber-500 text-sm mt-1">{cert.issuer}</div>
                                    </div>
                                    <div className="mt-2 sm:mt-0">
                                        <span className="bg-slate-800 text-slate-300 font-mono px-3 py-1 rounded-full text-xs border border-slate-700">
                                            {cert.year}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Education */}
                <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm overflow-hidden">
                    <CardHeader className="border-b border-slate-700/50 pb-3">
                        <CardTitle className="text-slate-100 flex items-center">
                            <GraduationCap className="mr-2 h-5 w-5 text-cyan-500" />
                            Education
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="space-y-4">
                            {profileData.education.map((edu, index) => (
                                <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/50 transition-colors">
                                    <div>
                                        <h3 className="font-semibold text-slate-200">{edu.degree}</h3>
                                        <div className="text-cyan-500 text-sm mt-1">{edu.institution}</div>
                                    </div>
                                    <div className="mt-2 sm:mt-0">
                                        <span className="bg-slate-800 text-slate-300 font-mono px-3 py-1 rounded-full text-xs border border-slate-700">
                                            {edu.year}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}
