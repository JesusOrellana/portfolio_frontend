import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Globe, Linkedin, LucideIcon, Mail } from "lucide-react";

export default function SidebarInfo() {
    return (
       <div className="col-span-12 lg:col-span-3">
                <div className="grid gap-6">
                    {/* System time */}
                    <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm overflow-hidden">
                        <CardContent className="p-0">
                            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 border-b border-slate-700/50">
                                <div className="text-center">
                                    <div className="text-xs text-slate-500 mb-1 font-mono">DEVELOPER PROFILE</div>
                                    <div className="text-3xl font-mono text-cyan-400 mb-1">Jesús Orellana</div>
                                    <div className="text-sm text-slate-400">Full Stack Developer</div>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-slate-800/50 rounded-md p-3 border border-slate-700/50">
                                        <div className="text-xs text-slate-500 mb-1">Location</div>
                                        <div className="text-sm font-mono text-slate-200">Santiago, Chile</div>
                                    </div>
                                    <div className="bg-slate-800/50 rounded-md p-3 border border-slate-700/50">
                                        <div className="text-xs text-slate-500 mb-1">Experience</div>
                                        <div className="text-sm font-mono text-slate-200">4+ Years</div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Quick actions */}
                    <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-slate-100 text-base">Connect With Me</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 gap-3">
                                <ActionButton icon={Github} label="GitHub" />
                                <ActionButton icon={Linkedin} label="LinkedIn" />
                                <ActionButton icon={Mail} label="Email" />
                                <ActionButton icon={Globe} label="Website" />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Resource allocation */}
                    {/* <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-slate-100 text-base">Specialization Areas</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex items-center justify-between mb-1">
                                        <div className="text-sm text-slate-400">Frontend Development</div>
                                        <div className="text-xs text-cyan-400">92% proficiency</div>
                                    </div>
                                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                                            style={{ width: "92%" }}
                                        ></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between mb-1">
                                        <div className="text-sm text-slate-400">Backend Development</div>
                                        <div className="text-xs text-purple-400">78% proficiency</div>
                                    </div>
                                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                                            style={{ width: "78%" }}
                                        ></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between mb-1">
                                        <div className="text-sm text-slate-400">DevOps & Cloud</div>
                                        <div className="text-xs text-blue-400">65% proficiency</div>
                                    </div>
                                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                                            style={{ width: "65%" }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="pt-2 border-t border-slate-700/50">
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="text-slate-400">Years of Experience</div>
                                        <div className="flex items-center">
                                            <Slider defaultValue={[7]} max={10} step={1} className="w-24 mr-2" />
                                            <span className="text-cyan-400">7/10</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card> */}

                    {/* Environment controls */}
                    {/* <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-slate-100 text-base">Additional Skills</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <Globe className="text-cyan-500 mr-2 h-4 w-4" />
                                        <Label className="text-sm text-slate-400">Multilingual (EN, ES, FR)</Label>
                                    </div>
                                    <Switch defaultChecked />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <Command className="text-cyan-500 mr-2 h-4 w-4" />
                                        <Label className="text-sm text-slate-400">UI/UX Design</Label>
                                    </div>
                                    <Switch defaultChecked />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <Zap className="text-cyan-500 mr-2 h-4 w-4" />
                                        <Label className="text-sm text-slate-400">Agile Methodology</Label>
                                    </div>
                                    <Switch defaultChecked />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <Trophy className="text-cyan-500 mr-2 h-4 w-4" />
                                        <Label className="text-sm text-slate-400">Project Management</Label>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                            </div>
                        </CardContent>
                    </Card> */}
                </div>
            </div>
    );
}

function ActionButton({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <Button
      variant="outline"
      className="h-auto py-3 px-3 border-slate-700 bg-slate-800/50 hover:bg-slate-700/50 flex flex-col items-center justify-center space-y-1 w-full"
    >
      <Icon className="h-5 w-5 text-cyan-500" />
      <span className="text-xs">{label}</span>
    </Button>
  )
}