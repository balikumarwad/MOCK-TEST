import Link from "next/link";
import { Database, ClipboardCheck, TrendingUp, Trophy, Info, ArrowRight, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SUBJECTS, RECENT_TESTS, DASHBOARD_STATS, LEADERBOARD_PREVIEW } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <div className="space-y-8 pb-8 exam-focus">
      {/* A. WELCOME HERO BANNER */}
      <div className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 p-6 sm:p-8 flex items-center justify-between shadow-lg">
        <div className="space-y-4 text-white max-w-xl">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Ready for CEE 2025?</h1>
          <p className="text-blue-100 flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
            You&apos;re on a 3-day streak. Keep it up!
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild className="bg-white text-blue-700 hover:bg-blue-50 font-medium">
              <Link href="/test/configure">
                Start Full Mock Test <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent">
              <Link href="/test/configure?count=25">
                Quick 25 Questions
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="hidden lg:block">
          <div className="bg-white rounded-xl p-5 border-4 border-blue-500/30 text-slate-900 w-64 shadow-xl transform rotate-1 hover:rotate-0 transition-transform">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
              <h3 className="font-semibold text-sm text-slate-500 uppercase tracking-wider">Exam Stats</h3>
              <Activity className="h-4 w-4 text-blue-500" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-sm font-medium text-slate-600">Best Score</span>
                <span className="text-xl font-bold text-green-600">{DASHBOARD_STATS.bestScore}%</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-sm font-medium text-slate-600">Rank</span>
                <span className="text-xl font-bold text-amber-500">#{DASHBOARD_STATS.rank}</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-sm font-medium text-slate-600">Tests Taken</span>
                <span className="text-xl font-bold text-blue-600">{DASHBOARD_STATS.testsTaken}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* B. STATS ROW */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="shadow-none border-border/50">
          <CardContent className="p-5 flex flex-col justify-between h-full">
            <div className="flex items-center gap-2 mb-2">
              <Database className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium text-muted-foreground">Total Questions</span>
            </div>
            <div>
              <div className="text-3xl font-bold">{DASHBOARD_STATS.totalQuestions.toLocaleString()}</div>
              <p className="text-xs text-green-600 font-medium mt-1">+142 this week</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-none border-border/50">
          <CardContent className="p-5 flex flex-col justify-between h-full">
            <div className="flex items-center gap-2 mb-2">
              <ClipboardCheck className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium text-muted-foreground">Tests Taken</span>
            </div>
            <div>
              <div className="text-3xl font-bold">{DASHBOARD_STATS.testsTaken}</div>
              <p className="text-xs text-green-600 font-medium mt-1">+2 this week</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-none border-border/50">
          <CardContent className="p-5 flex flex-col justify-between h-full">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-4 w-4 text-violet-500" />
              <span className="text-sm font-medium text-muted-foreground">Average Score</span>
            </div>
            <div>
              <div className="text-3xl font-bold">{DASHBOARD_STATS.averageScore}%</div>
              <p className="text-xs text-blue-600 font-medium mt-1">Top 15%</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-none border-border/50">
          <CardContent className="p-5 flex flex-col justify-between h-full">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="h-4 w-4 text-amber-500" />
              <span className="text-sm font-medium text-muted-foreground">Your Rank</span>
            </div>
            <div>
              <div className="text-3xl font-bold">#{DASHBOARD_STATS.rank}</div>
              <p className="text-xs text-green-600 font-medium mt-1">Up 12 positions</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* C. SUBJECT CARDS */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Subjects</h2>
          <Badge variant="outline" className="bg-muted/50">{SUBJECTS.length} available</Badge>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {SUBJECTS.map((subject) => {
            // Tailwind doesn't allow dynamic class names like `text-${subject.color}-600` perfectly without safelisting.
            // Using a simple map for colors.
            const colorMap: Record<string, { bg: string; text: string; bgLight: string }> = {
              blue: { bg: "bg-blue-600", text: "text-blue-600", bgLight: "bg-blue-100 dark:bg-blue-900/40" },
              green: { bg: "bg-green-600", text: "text-green-600", bgLight: "bg-green-100 dark:bg-green-900/40" },
              emerald: { bg: "bg-emerald-600", text: "text-emerald-600", bgLight: "bg-emerald-100 dark:bg-emerald-900/40" },
              violet: { bg: "bg-violet-600", text: "text-violet-600", bgLight: "bg-violet-100 dark:bg-violet-900/40" },
              amber: { bg: "bg-amber-500", text: "text-amber-600", bgLight: "bg-amber-100 dark:bg-amber-900/40" },
            };
            
            const colors = colorMap[subject.color] || colorMap.blue;
            
            return (
              <Card key={subject.id} className="transition-all hover:shadow-md hover:border-primary/20 overflow-hidden group">
                <CardContent className="p-4 flex flex-col h-full">
                  <div className={`w-10 h-10 rounded-full ${colors.bgLight} flex items-center justify-center mb-3`}>
                    <div className={`w-4 h-4 rounded-full ${colors.bg}`} />
                  </div>
                  <div className="mt-auto">
                    <h3 className="font-semibold">{subject.name}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5 mb-3">{subject.questionCount} Questions</p>
                    <Link 
                      href={`/test/configure?subject=${subject.id}`}
                      className={`text-sm font-medium ${colors.text} flex items-center group-hover:underline`}
                    >
                      Start Test <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* D. CEE EXAM PATTERN BANNER */}
          <div className="w-full bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <Info className="h-5 w-5 text-amber-600 dark:text-amber-500" />
              <h3 className="font-semibold text-amber-900 dark:text-amber-100">CEE Exam Pattern 2025</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
              <div>
                <span className="block text-xs text-amber-700/70 dark:text-amber-400/70 uppercase tracking-wider font-semibold mb-1">Questions</span>
                <span className="font-medium text-amber-900 dark:text-amber-50">200 MCQs</span>
              </div>
              <div>
                <span className="block text-xs text-amber-700/70 dark:text-amber-400/70 uppercase tracking-wider font-semibold mb-1">Duration</span>
                <span className="font-medium text-amber-900 dark:text-amber-50">2 Hours</span>
              </div>
              <div>
                <span className="block text-xs text-amber-700/70 dark:text-amber-400/70 uppercase tracking-wider font-semibold mb-1">Correct</span>
                <span className="font-medium text-green-700 dark:text-green-400">+1 Mark</span>
              </div>
              <div>
                <span className="block text-xs text-amber-700/70 dark:text-amber-400/70 uppercase tracking-wider font-semibold mb-1">Wrong</span>
                <span className="font-medium text-red-700 dark:text-red-400">−0.2 Mark</span>
              </div>
            </div>
            
            <p className="text-xs text-amber-800/80 dark:text-amber-300/80 pt-3 border-t border-amber-200/50 dark:border-amber-800/50">
              Subjects: Physics · Chemistry · Botany · Zoology · English
            </p>
          </div>

          {/* E. RECENT TESTS TABLE */}
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <h2 className="text-xl font-semibold tracking-tight">Recent Tests</h2>
              <Link href="/results" className="text-sm font-medium text-primary hover:underline">
                View All
              </Link>
            </div>
            
            <div className="rounded-md border bg-card text-card-foreground shadow-sm overflow-hidden border-border/50">
              {RECENT_TESTS.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-muted/50 text-left">
                        <th className="h-10 px-4 align-middle font-medium text-muted-foreground hidden sm:table-cell">Date</th>
                        <th className="h-10 px-4 align-middle font-medium text-muted-foreground">Subject</th>
                        <th className="h-10 px-4 align-middle font-medium text-muted-foreground text-right sm:text-left">Score</th>
                        <th className="h-10 px-4 align-middle font-medium text-muted-foreground hidden md:table-cell">Result</th>
                        <th className="h-10 px-4 align-middle font-medium text-muted-foreground hidden lg:table-cell">Time</th>
                        <th className="h-10 px-4 align-middle font-medium text-muted-foreground text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {RECENT_TESTS.map((test) => (
                        <tr key={test.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <td className="p-4 align-middle hidden sm:table-cell text-muted-foreground">{test.date}</td>
                          <td className="p-4 align-middle font-medium">{test.subject}</td>
                          <td className="p-4 align-middle text-right sm:text-left">
                            <span className={test.score >= 60 ? "text-green-600 font-semibold" : "text-red-500 font-semibold"}>
                              {test.score}%
                            </span>
                            <span className="text-xs text-muted-foreground block sm:hidden">
                              {test.score >= 60 ? 'PASS' : 'FAIL'}
                            </span>
                          </td>
                          <td className="p-4 align-middle hidden md:table-cell">
                            <Badge variant={test.score >= 60 ? "default" : "destructive"} className={test.score >= 60 ? "bg-green-600 hover:bg-green-700" : ""}>
                              {test.score >= 60 ? "PASS" : "FAIL"}
                            </Badge>
                          </td>
                          <td className="p-4 align-middle hidden lg:table-cell text-muted-foreground">{test.timeTaken}</td>
                          <td className="p-4 align-middle text-right">
                            <Link href={`/results/${test.id}`} className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                              Review
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center p-8 text-center bg-muted/20">
                  <ClipboardCheck className="h-10 w-10 text-muted-foreground/30 mb-3" />
                  <p className="text-muted-foreground font-medium mb-4">No tests yet</p>
                  <Button asChild>
                    <Link href="/test/configure">Take Your First Test</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* F. LEADERBOARD PREVIEW */}
        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <h2 className="text-xl font-semibold tracking-tight">Top Students</h2>
            <Link href="/leaderboard" className="text-sm font-medium text-primary hover:underline">
              Full List →
            </Link>
          </div>
          
          <Card className="shadow-none border border-border/50">
            <CardContent className="p-0">
              {LEADERBOARD_PREVIEW.map((student, index) => {
                const isGold = student.rank === 1;
                const isSilver = student.rank === 2;
                const isBronze = student.rank === 3;
                
                return (
                  <div 
                    key={student.rank} 
                    className={`flex items-center justify-between p-4 ${index !== LEADERBOARD_PREVIEW.length - 1 ? 'border-b border-border/50' : ''}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm
                        ${isGold ? 'bg-amber-400 shadow-md shadow-amber-400/20' : 
                          isSilver ? 'bg-slate-400 shadow-md shadow-slate-400/20' : 
                          isBronze ? 'bg-orange-500 shadow-md shadow-orange-500/20' : 'bg-muted text-muted-foreground'}`}
                      >
                        {student.rank}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{student.name}</p>
                        <p className="text-xs text-muted-foreground">{student.tests} tests taken</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <Badge variant="secondary" className="font-bold text-xs bg-primary/5 text-primary border-primary/10">
                        {student.score}%
                      </Badge>
                      <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-wider">{student.accuracy} Acc</p>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
