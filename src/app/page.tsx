'use client'

import Particle from '@/components/shared/animations/particle'
import MetricCard from '@/components/shared/cards/metricCard'
import Header from '@/components/shared/headers/header'
import Sidebar from '@/components/shared/sidebars/sidebar'
import SidebarInfo from '@/components/shared/sidebars/sidebarInfo'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Activity, Code, Cpu, Database, RefreshCw } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { profileData } from '@/data/profile'

export default function Index() {

  const maxFrontend = Math.round(profileData.techStack.frontend.reduce((acc, curr) => acc + curr.level, 0) / profileData.techStack.frontend.length);
  const maxBackend = Math.round(profileData.techStack.backend.reduce((acc, curr) => acc + curr.level, 0) / profileData.techStack.backend.length);
  const maxDevOps = Math.round(profileData.techStack.cloudAndDevOps.reduce((acc, curr) => acc + curr.level, 0) / profileData.techStack.cloudAndDevOps.length);

  const [frontendSkills, setFrontendSkills] = useState(0);
  const [backendSkills, setBackendSkills] = useState(0)
  const [devOpsSkills, setDevOpsSkills] = useState(0)

  useEffect(() => {
    // Simulate fetching data
    const interval = setInterval(() => {
      setFrontendSkills(prev => Math.min(prev + 1, maxFrontend));
      setBackendSkills(prev => Math.min(prev + 1, maxBackend));
      setDevOpsSkills(prev => Math.min(prev + 1, maxDevOps));
    }, 15);

    return () => clearInterval(interval);
  }, []);



  return (

    <div className={`dark min-h-screen bg-gradient-to-br from-black to-slate-900 text-slate-100 relative overflow-hidden`}
    >
      <Particle />
      <main className="container mx-auto p-4 relative z-10">
        <Header />
        <div className="grid grid-cols-12 gap-6">
          <Sidebar />
          <div className="col-span-12 md:col-span-9 lg:col-span-7">
            <div className="grid gap-6">
              {/* System overview */}
              <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm overflow-hidden">
                <CardHeader className="border-b border-slate-700/50 pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-slate-100 flex items-center">
                      <Activity className="mr-2 h-5 w-5 text-cyan-500" />
                      Developer Profile
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="bg-slate-800/50 text-cyan-400 border-cyan-500/50 text-xs">
                        <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 mr-1 animate-pulse"></div>
                        LIVE
                      </Badge>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <MetricCard
                      title="Frontend"
                      value={frontendSkills}
                      icon={Code}
                      trend="up"
                      color="cyan"
                      detail="React, NextJs, Angular"
                    />
                    <MetricCard
                      title="Backend"
                      value={backendSkills}
                      icon={Database}
                      trend="stable"
                      color="purple"
                      detail="Nestjs, Express, .NET"
                    />
                    <MetricCard
                      title="DevOps"
                      value={devOpsSkills}
                      icon={Cpu}
                      trend="up"
                      color="blue"
                      detail="Docker, AWS, CI/CD"
                    />
                  </div>

                  <div className="mt-8">
                    <Tabs defaultValue="performance" className="w-full">
                      <div className="flex items-center justify-between mb-4">
                        <TabsList className="bg-slate-800/50 p-1">
                          <TabsTrigger
                            value="performance"
                            className="data-[state=active]:bg-slate-700 data-[state=active]:text-cyan-400"
                          >
                            About Me
                          </TabsTrigger>

                        </TabsList>

                        <div className="flex items-center space-x-2 text-xs text-slate-400">
                          <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-cyan-500 mr-1"></div>
                            Frontend
                          </div>
                          <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-purple-500 mr-1"></div>
                            Backend
                          </div>
                          <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-blue-500 mr-1"></div>
                            DevOps
                          </div>
                        </div>
                      </div>

                      <TabsContent value="performance" className="mt-0">
                        <div className="h-52 w-full relative bg-slate-800/30 rounded-lg border border-slate-700/50 overflow-hidden">
                          <div className="absolute inset-0 flex justify-start p-6">
                            <div className="text-slate-400 text-sm">
                              <p className="mb-2 whitespace-pre-line">
                                {profileData.header.summary}
                              </p>

                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <SidebarInfo />
        </div>

      </main>
    </div>
  )
}
