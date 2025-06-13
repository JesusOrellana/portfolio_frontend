'use client'

import { AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar } from '@radix-ui/react-avatar'
import { Activity, AlertCircle, BarChart3, Check, Code, Command, Cpu, Database, Download, Github, Globe, Info, LineChart, Linkedin, LucideIcon, Mail, MessageSquare, RefreshCw, Shield, Trophy, Zap } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export default function Index() {

    const [frontendSkills, setFrontendSkills] = useState(25);
    const [backendSkills, setBackendSkills] = useState(30)
    const [devOpsSkills, setDevOpsSkills] = useState(11)
    const [skillsLevel, setSkillsLevel] = useState(85)

    return (
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
                                            Skills
                                        </TabsTrigger>
                                        <TabsTrigger
                                            value="processes"
                                            className="data-[state=active]:bg-slate-700 data-[state=active]:text-cyan-400"
                                        >
                                            Experience
                                        </TabsTrigger>
                                        <TabsTrigger
                                            value="storage"
                                            className="data-[state=active]:bg-slate-700 data-[state=active]:text-cyan-400"
                                        >
                                            Projects
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
                                    <div className="h-64 w-full relative bg-slate-800/30 rounded-lg border border-slate-700/50 overflow-hidden">
                                        <PerformanceChart />
                                        <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-sm rounded-md px-3 py-2 border border-slate-700/50">
                                            <div className="text-xs text-slate-400">Skill Growth</div>
                                            <div className="text-lg font-mono text-cyan-400">+{frontendSkills}%</div>
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="processes" className="mt-0">
                                    <div className="bg-slate-800/30 rounded-lg border border-slate-700/50 overflow-hidden">
                                        <div className="grid grid-cols-12 text-xs text-slate-400 p-3 border-b border-slate-700/50 bg-slate-800/50">
                                            <div className="col-span-3">Period</div>
                                            <div className="col-span-3">Company</div>
                                            <div className="col-span-4">Position</div>
                                            <div className="col-span-2">Tech Stack</div>
                                        </div>

                                        <div className="divide-y divide-slate-700/30">
                                            <ProcessRow
                                                pid="2022 - Present"
                                                name="Tech Innovations Inc."
                                                user="Senior Developer"
                                                status="React, Node.js"
                                            />
                                            <ProcessRow
                                                pid="2020 - 2022"
                                                name="Digital Solutions"
                                                user="Full Stack Developer"
                                                status="Vue, Python"
                                            />
                                            <ProcessRow
                                                pid="2018 - 2020"
                                                name="WebCraft Agency"
                                                user="Frontend Developer"
                                                status="Angular, PHP"
                                            />
                                            <ProcessRow
                                                pid="2016 - 2018"
                                                name="StartUp Nexus"
                                                user="Junior Developer"
                                                status="jQuery, PHP"
                                            />
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="storage" className="mt-0">
                                    <div className="bg-slate-800/30 rounded-lg border border-slate-700/50 p-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <StorageItem name="E-commerce Platform" total={100} used={100} type="React" />
                                            <StorageItem name="CRM Dashboard" total={100} used={95} type="Vue" />
                                            <StorageItem name="Mobile Banking App" total={100} used={90} type="React Native" />
                                            <StorageItem name="AI Content Generator" total={100} used={85} type="Python" />
                                        </div>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </CardContent>
                </Card>

                {/* Security & Alerts */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-slate-100 flex items-center text-base">
                                    <Shield className="mr-2 h-5 w-5 text-green-500" />
                                    Technical Skills
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="text-sm text-slate-400">JavaScript/TypeScript</div>
                                        <Badge className="bg-green-500/20 text-green-400 border-green-500/50">Advanced</Badge>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="text-sm text-slate-400">React & React Native</div>
                                        <Badge className="bg-green-500/20 text-green-400 border-green-500/50">Advanced</Badge>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="text-sm text-slate-400">Node.js & Express</div>
                                        <Badge className="bg-green-500/20 text-green-400 border-green-500/50">Advanced</Badge>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="text-sm text-slate-400">Python & Django</div>
                                        <div className="text-sm text-cyan-400">
                                            Intermediate <span className="text-slate-500">+</span>
                                        </div>
                                    </div>

                                    <div className="pt-2 mt-2 border-t border-slate-700/50">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="text-sm font-medium">Overall Expertise</div>
                                            <div className="text-sm text-cyan-400">{skillsLevel}%</div>
                                        </div>
                                        <Progress value={skillsLevel} className="h-2 bg-slate-700">
                                            <div
                                                className="h-full bg-gradient-to-r from-green-500 to-cyan-500 rounded-full"
                                                style={{ width: `${skillsLevel}%` }}
                                            />
                                        </Progress>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-slate-100 flex items-center text-base">
                                    <Trophy className="mr-2 h-5 w-5 text-amber-500" />
                                    Certifications & Achievements
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <AlertItem
                                        title="AWS Certified Developer"
                                        time="2023"
                                        description="Associate level certification for AWS cloud development"
                                        type="success"
                                    />
                                    <AlertItem
                                        title="Google Cloud Professional"
                                        time="2022"
                                        description="Professional certification for Google Cloud Platform"
                                        type="info"
                                    />
                                    <AlertItem
                                        title="React Advanced Certification"
                                        time="2021"
                                        description="Advanced concepts and patterns in React development"
                                        type="update"
                                    />
                                    <AlertItem
                                        title="Hackathon Winner"
                                        time="2020"
                                        description="First place in National Coding Competition"
                                        type="success"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div> */}

                {/* Communications */}
                {/* <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                        <CardHeader className="pb-2 flex flex-row items-center justify-between">
                            <CardTitle className="text-slate-100 flex items-center text-base">
                                <MessageSquare className="mr-2 h-5 w-5 text-blue-500" />
                                Client Testimonials
                            </CardTitle>
                            <Badge variant="outline" className="bg-slate-800/50 text-blue-400 border-blue-500/50">
                                4 New Messages
                            </Badge>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <CommunicationItem
                                    sender="Sarah Johnson"
                                    time="CTO, TechCorp"
                                    message="An exceptional developer who consistently delivers high-quality code. Their attention to detail and problem-solving skills are outstanding."
                                    avatar="/placeholder.svg?height=40&width=40"
                                    unread
                                />
                                <CommunicationItem
                                    sender="Michael Chen"
                                    time="Product Manager"
                                    message="Working with this developer was a pleasure. They understood our requirements perfectly and delivered the project ahead of schedule."
                                    avatar="/placeholder.svg?height=40&width=40"
                                    unread
                                />
                                <CommunicationItem
                                    sender="Emily Rodriguez"
                                    time="Lead Developer"
                                    message="Their technical expertise and collaborative approach made complex challenges much easier to overcome. Would definitely work with them again."
                                    avatar="/placeholder.svg?height=40&width=40"
                                    unread
                                />
                                <CommunicationItem
                                    sender="David Kim"
                                    time="Startup Founder"
                                    message="Transformed our concept into a fully functional application. Their insights and suggestions greatly improved our original idea."
                                    avatar="/placeholder.svg?height=40&width=40"
                                    unread
                                />
                            </div>
                        </CardContent>
                        <CardFooter className="border-t border-slate-700/50 pt-4">
                            <div className="flex items-center w-full space-x-2">
                                <input
                                    type="text"
                                    placeholder="Send me a message..."
                                    className="flex-1 bg-slate-800/50 border border-slate-700/50 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                />
                                <Button size="icon" className="bg-blue-600 hover:bg-blue-700">
                                    <Mail className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardFooter>
                    </Card> */}
            </div>
        </div>

    )
}

function MetricCard({
    title,
    value,
    icon: Icon,
    trend,
    color,
    detail,
}: {
    title: string
    value: number
    icon: LucideIcon
    trend: "up" | "down" | "stable"
    color: string
    detail: string
}) {
    const getColor = () => {
        switch (color) {
            case "cyan":
                return "from-cyan-500 to-blue-500 border-cyan-500/30"
            case "green":
                return "from-green-500 to-emerald-500 border-green-500/30"
            case "blue":
                return "from-blue-500 to-indigo-500 border-blue-500/30"
            case "purple":
                return "from-purple-500 to-pink-500 border-purple-500/30"
            default:
                return "from-cyan-500 to-blue-500 border-cyan-500/30"
        }
    }

    const getTrendIcon = () => {
        switch (trend) {
            case "up":
                return <BarChart3 className="h-4 w-4 text-amber-500" />
            case "down":
                return <BarChart3 className="h-4 w-4 rotate-180 text-green-500" />
            case "stable":
                return <LineChart className="h-4 w-4 text-blue-500" />
            default:
                return null
        }
    }

    return (
        <div className={`bg-slate-800/50 rounded-lg border ${getColor()} p-4 relative overflow-hidden`}>
            <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-slate-400">{title}</div>
                <Icon className={`h-5 w-5 text-${color}-500`} />
            </div>
            <div className="text-2xl font-bold mb-1 bg-gradient-to-r bg-clip-text text-transparent from-slate-100 to-slate-300">
                {value} Projects
            </div>
            <div className="text-xs text-slate-500">{detail}</div>
            <div className="absolute bottom-2 right-2 flex items-center">{getTrendIcon()}</div>
            <div className="absolute -bottom-6 -right-6 h-16 w-16 rounded-full bg-gradient-to-r opacity-20 blur-xl from-cyan-500 to-blue-500"></div>
        </div>
    )
}

function PerformanceChart() {
    const [bars, setBars] = useState<{ cpu: number; mem: number; net: number }[]>([])

    useEffect(() => {
        // Solo se ejecuta en el cliente
        const newBars = Array.from({ length: 24 }).map(() => ({
            cpu: Math.floor(Math.random() * 60) + 20,
            mem: Math.floor(Math.random() * 40) + 40,
            net: Math.floor(Math.random() * 30) + 30,
        }))
        setBars(newBars)
    }, [])

    return (
        <div className="h-full w-full flex items-end justify-between px-4 pt-4 pb-8 relative">
            {/* Y-axis labels */}
            <div className="absolute left-2 top-0 h-full flex flex-col justify-between py-4">
                <div className="text-xs text-slate-500">100%</div>
                <div className="text-xs text-slate-500">75%</div>
                <div className="text-xs text-slate-500">50%</div>
                <div className="text-xs text-slate-500">25%</div>
                <div className="text-xs text-slate-500">0%</div>
            </div>

            {/* X-axis grid lines */}
            <div className="absolute left-0 right-0 top-0 h-full flex flex-col justify-between py-4 px-10">
                <div className="border-b border-slate-700/30 w-full"></div>
                <div className="border-b border-slate-700/30 w-full"></div>
                <div className="border-b border-slate-700/30 w-full"></div>
                <div className="border-b border-slate-700/30 w-full"></div>
                <div className="border-b border-slate-700/30 w-full"></div>
            </div>

            {/* Chart bars */}
            <div className="flex-1 h-full flex items-end justify-between px-2 z-10">
                {bars.map((bar, i) => (
                    <div key={i} className="flex space-x-0.5">
                        <div
                            className="w-1 bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-t-sm"
                            style={{ height: `${bar.cpu}%` }}
                        ></div>
                        <div
                            className="w-1 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-sm"
                            style={{ height: `${bar.mem}%` }}
                        ></div>
                        <div
                            className="w-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm"
                            style={{ height: `${bar.net}%` }}
                        ></div>
                    </div>
                ))}
            </div>

            {/* X-axis labels */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between px-10">
                <div className="text-xs text-slate-500">00:00</div>
                <div className="text-xs text-slate-500">06:00</div>
                <div className="text-xs text-slate-500">12:00</div>
                <div className="text-xs text-slate-500">18:00</div>
                <div className="text-xs text-slate-500">24:00</div>
            </div>
        </div>
    )
}

function AlertItem({
    title,
    time,
    description,
    type,
}: {
    title: string
    time: string
    description: string
    type: "info" | "warning" | "error" | "success" | "update"
}) {
    const getTypeStyles = () => {
        switch (type) {
            case "info":
                return { icon: Info, color: "text-blue-500 bg-blue-500/10 border-blue-500/30" }
            case "warning":
                return { icon: AlertCircle, color: "text-amber-500 bg-amber-500/10 border-amber-500/30" }
            case "error":
                return { icon: AlertCircle, color: "text-red-500 bg-red-500/10 border-red-500/30" }
            case "success":
                return { icon: Check, color: "text-green-500 bg-green-500/10 border-green-500/30" }
            case "update":
                return { icon: Download, color: "text-cyan-500 bg-cyan-500/10 border-cyan-500/30" }
            default:
                return { icon: Info, color: "text-blue-500 bg-blue-500/10 border-blue-500/30" }
        }
    }

    const { icon: Icon, color } = getTypeStyles()

    return (
        <div className="flex items-start space-x-3">
            <div className={`mt-0.5 p-1 rounded-full ${color.split(" ")[1]} ${color.split(" ")[2]}`}>
                <Icon className={`h-3 w-3 ${color.split(" ")[0]}`} />
            </div>
            <div>
                <div className="flex items-center">
                    <div className="text-sm font-medium text-slate-200">{title}</div>
                    <div className="ml-2 text-xs text-slate-500">{time}</div>
                </div>
                <div className="text-xs text-slate-400">{description}</div>
            </div>
        </div>
    )
}

function CommunicationItem({
    sender,
    time,
    message,
    avatar,
    unread,
}: {
    sender: string
    time: string
    message: string
    avatar: string
    unread?: boolean
}) {
    return (
        <div className={`flex space-x-3 p-2 rounded-md ${unread ? "bg-slate-800/50 border border-slate-700/50" : ""}`}>
            <Avatar className="h-8 w-8">
                <AvatarImage src={avatar || "/placeholder.svg"} alt={sender} />
                <AvatarFallback className="bg-slate-700 text-cyan-500">{sender.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
                <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-slate-200">{sender}</div>
                    <div className="text-xs text-slate-500">{time}</div>
                </div>
                <div className="text-xs text-slate-400 mt-1">{message}</div>
            </div>
            {unread && (
                <div className="flex-shrink-0 self-center">
                    <div className="h-2 w-2 rounded-full bg-cyan-500"></div>
                </div>
            )}
        </div>
    )
}

function StorageItem({
    name,
    total,
    used,
    type,
}: {
    name: string
    total: number
    used: number
    type: string
}) {
    const percentage = Math.round((used / total) * 100)

    return (
        <div className="bg-slate-800/50 rounded-md p-3 border border-slate-700/50">
            <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-slate-300">{name}</div>
                <Badge variant="outline" className="bg-slate-700/50 text-slate-300 border-slate-600/50 text-xs">
                    {type}
                </Badge>
            </div>
            <div className="mb-2">
                <div className="flex items-center justify-between mb-1">
                    <div className="text-xs text-slate-500">Project Completion</div>
                    <div className="text-xs text-slate-400">{percentage}%</div>
                </div>
                <Progress value={percentage} className="h-1.5 bg-slate-700">
                    <div
                        className={`h-full rounded-full ${percentage > 90 ? "bg-green-500" : percentage > 70 ? "bg-cyan-500" : "bg-blue-500"
                            }`}
                        style={{ width: `${percentage}%` }}
                    />
                </Progress>
            </div>
            <div className="flex items-center justify-between text-xs">
                <div className="text-slate-500">Role: Lead Developer</div>
                <Button variant="ghost" size="sm" className="h-6 text-xs px-2 text-slate-400 hover:text-slate-100">
                    View
                </Button>
            </div>
        </div>
    )
}

function ProcessRow({
    pid,
    name,
    user,
    status,
}: {
    pid: string
    name: string
    user: string
    status: string
}) {
    return (
        <div className="grid grid-cols-12 py-2 px-3 text-sm hover:bg-slate-800/50">
            <div className="col-span-3 text-slate-500">{pid}</div>
            <div className="col-span-3 text-slate-300">{name}</div>
            <div className="col-span-4 text-cyan-400">{user}</div>
            <div className="col-span-2">
                <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30 text-xs">
                    {status}
                </Badge>
            </div>
        </div>
    )
}