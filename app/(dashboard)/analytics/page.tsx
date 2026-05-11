"use client";

import { ANALYTICS_STATS, SCORE_HISTORY } from "@/lib/mock-data";
import { ClipboardCheck, TrendingUp, Star, Target, Flame, AlertTriangle, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function AnalyticsPage() {
  return (
    <div className="max-w-7xl mx-auto py-6 px-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h1 className="font-bold text-2xl">My Analytics</h1>
          <p className="text-muted-foreground mt-1">Based on your last 10 mock tests</p>
        </div>
        <p className="text-sm text-muted-foreground">Last updated: May 11, 2025</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <Card className="p-4 flex flex-col relative overflow-hidden">
          <span className="text-sm text-muted-foreground mb-2">Tests Taken</span>
          <span className="text-2xl font-bold">{ANALYTICS_STATS.totalTestsTaken}</span>
          <ClipboardCheck className="absolute top-4 right-4 w-5 h-5 text-blue-500 opacity-80" />
        </Card>
        <Card className="p-4 flex flex-col relative overflow-hidden">
          <span className="text-sm text-muted-foreground mb-2">Avg Score</span>
          <span className="text-2xl font-bold">{ANALYTICS_STATS.averageScore} <span className="text-sm font-normal text-muted-foreground">/ 200</span></span>
          <TrendingUp className="absolute top-4 right-4 w-5 h-5 text-violet-500 opacity-80" />
        </Card>
        <Card className="p-4 flex flex-col relative overflow-hidden">
          <span className="text-sm text-muted-foreground mb-2">Best Score</span>
          <span className="text-2xl font-bold">{ANALYTICS_STATS.bestScore} <span className="text-sm font-normal text-muted-foreground">/ 200</span></span>
          <Star className="absolute top-4 right-4 w-5 h-5 text-amber-500 opacity-80" />
        </Card>
        <Card className="p-4 flex flex-col relative overflow-hidden">
          <span className="text-sm text-muted-foreground mb-2">Overall Accuracy</span>
          <span className="text-2xl font-bold">{ANALYTICS_STATS.overallAccuracy}%</span>
          <Target className="absolute top-4 right-4 w-5 h-5 text-green-500 opacity-80" />
        </Card>
        <Card className="p-4 flex flex-col relative overflow-hidden">
          <span className="text-sm text-muted-foreground mb-2">Current Streak</span>
          <span className="text-2xl font-bold">{ANALYTICS_STATS.currentStreak} days 🔥</span>
          <Flame className="absolute top-4 right-4 w-5 h-5 text-amber-500 opacity-80" />
        </Card>
        <Card className="p-4 flex flex-col relative overflow-hidden" title="Marks lost due to -0.25 negative marking">
          <span className="text-sm text-muted-foreground mb-2">Marks Lost (negative)</span>
          <span className="text-2xl font-bold text-red-600">-{ANALYTICS_STATS.totalMarksLostToNegative}</span>
          <AlertTriangle className="absolute top-4 right-4 w-5 h-5 text-red-500 opacity-80" />
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xl font-bold">Score History</h2>
            <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-xs px-2 py-1 rounded-full font-medium">Last 10 Tests</span>
          </div>
          
          <div className="w-full h-48 border rounded-xl p-4 flex items-end gap-2 relative">
            {SCORE_HISTORY.map((entry, i) => (
              <div 
                key={entry.id} 
                className={`flex-1 ${entry.score >= 140 ? 'bg-green-500' : entry.score >= 110 ? 'bg-blue-500' : 'bg-amber-500'} rounded-t`}
                style={{ height: `${(entry.score / 200) * 100}%` }}
                title={`${entry.label}: ${entry.score}/200`}
              />
            ))}
          </div>
          <div className="flex justify-between items-center mt-2 px-1 text-xs text-muted-foreground">
            <span>{SCORE_HISTORY[0].date}</span>
            <span>{SCORE_HISTORY[SCORE_HISTORY.length - 1].date}</span>
          </div>

          <div className="flex gap-4 mt-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1"><span className="w-2 h-2 bg-green-500" /> &ge;140 Strong</div>
            <div className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-500" /> 110-139 Good</div>
            <div className="flex items-center gap-1"><span className="w-2 h-2 bg-amber-500" /> &lt;110 Needs work</div>
          </div>
          
          <div className="mt-4 font-medium text-sm">
            {(() => {
              const first3Avg = (SCORE_HISTORY[0].score + SCORE_HISTORY[1].score + SCORE_HISTORY[2].score) / 3;
              const last3Avg = (SCORE_HISTORY[7].score + SCORE_HISTORY[8].score + SCORE_HISTORY[9].score) / 3;
              return last3Avg > first3Avg ? (
                <span className="text-green-600 dark:text-green-400">Your trend: improving &uarr;</span>
              ) : (
                <span className="text-amber-600 dark:text-amber-400">Keep practicing to improve your trend</span>
              );
            })()}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-1">Subject-wise Averages</h2>
          <p className="text-sm text-muted-foreground mb-6">Across all 10 tests</p>

          <div className="space-y-4">
            {Object.entries(ANALYTICS_STATS.subjectAverages).map(([subject, stats]) => {
              const widthPct = (stats.avg / stats.maxPossible) * 100;
              const colorClass = stats.accuracy >= 70 ? 'bg-green-500' : stats.accuracy >= 60 ? 'bg-amber-500' : 'bg-red-500';
              return (
                <div key={subject} className="flex items-center gap-4">
                  <div className="w-24 text-sm font-medium">{subject}</div>
                  <div className="flex-1 h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className={`h-full ${colorClass} rounded-full`} style={{ width: `${widthPct}%` }} />
                  </div>
                  <div className="w-28 text-right text-sm">
                    <span className="font-medium">{stats.avg.toFixed(1)} / {stats.maxPossible}</span>
                    <span className="text-muted-foreground ml-1 text-xs">({stats.accuracy.toFixed(1)}%)</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex gap-2 mt-6">
            <div className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 px-3 py-1.5 rounded-full text-xs font-semibold">
              Strongest: {ANALYTICS_STATS.strongestSubject} ({ANALYTICS_STATS.subjectAverages[ANALYTICS_STATS.strongestSubject as keyof typeof ANALYTICS_STATS.subjectAverages].accuracy.toFixed(1)}%)
            </div>
            <div className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 px-3 py-1.5 rounded-full text-xs font-semibold">
              Weakest: {ANALYTICS_STATS.weakestSubject} ({ANALYTICS_STATS.subjectAverages[ANALYTICS_STATS.weakestSubject as keyof typeof ANALYTICS_STATS.subjectAverages].accuracy.toFixed(1)}%)
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-1">Chapters Needing Attention</h2>
          <p className="text-sm text-muted-foreground mb-4">Below 55% accuracy across your tests</p>

          <div className="space-y-2 mb-4">
            {ANALYTICS_STATS.weakChapters.map((chapter, i) => (
              <Card key={i} className="p-3">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider
                      ${chapter.subject === 'Physics' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30' :
                        chapter.subject === 'Chemistry' ? 'bg-green-100 text-green-700 dark:bg-green-900/30' :
                        chapter.subject === 'Botany' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30' :
                        chapter.subject === 'Zoology' ? 'bg-violet-100 text-violet-700 dark:bg-violet-900/30' :
                        'bg-amber-100 text-amber-700 dark:bg-amber-900/30'}
                    `}>{chapter.subject}</span>
                    <span className="font-medium text-sm">{chapter.chapter}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-red-600 font-bold text-sm">{chapter.accuracy}%</span>
                    <span className="text-xs text-muted-foreground ml-1">of {chapter.attempted} Qs</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-32 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{ width: `${chapter.accuracy}%` }} />
                  </div>
                  {chapter.accuracy < 45 && (
                    <span className="text-[10px] text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 px-1.5 py-0.5 rounded border border-amber-200 dark:border-amber-800/50">
                      Tip: Focus on this chapter before your next test
                    </span>
                  )}
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 dark:bg-blue-900/20 dark:border-blue-800 rounded-xl p-3 flex gap-3 text-sm text-blue-900 dark:text-blue-100">
            <Lightbulb className="w-5 h-5 flex-shrink-0 text-blue-600 dark:text-blue-400 mt-0.5" />
            <p>AI-powered chapter recommendations coming in Prompt 13. Gemini will create a personalized study plan based on your weak areas.</p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-1">Negative Marking Impact</h2>
          <p className="text-sm text-muted-foreground mb-4">How -0.25 penalty affected your scores</p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <Card className="p-4 border-red-100 dark:border-red-900/30 bg-red-50/50 dark:bg-red-950/10">
              <div className="text-sm text-muted-foreground mb-1">Total marks lost</div>
              <div className="text-3xl font-bold text-red-600 dark:text-red-500 mb-2">-{ANALYTICS_STATS.totalMarksLostToNegative} marks</div>
              <div className="text-xs text-muted-foreground">Across 10 tests &middot; avg -{(ANALYTICS_STATS.totalMarksLostToNegative / ANALYTICS_STATS.totalTestsTaken).toFixed(2)} per test</div>
            </Card>
            <Card className="p-4">
              <div className="text-sm text-muted-foreground mb-1">Wrong answers</div>
              <div className="text-3xl font-bold mb-2">{ANALYTICS_STATS.totalMarksLostToNegative * 4} total wrong</div>
              <div className="text-xs text-muted-foreground">avg {(ANALYTICS_STATS.totalMarksLostToNegative * 4 / ANALYTICS_STATS.totalTestsTaken).toFixed(1)} wrong per test &middot; cost you {ANALYTICS_STATS.totalMarksLostToNegative} marks</div>
            </Card>
          </div>

          <div className="bg-amber-50 border border-amber-200 dark:bg-amber-950/30 dark:border-amber-800/50 rounded-xl p-4 text-sm text-amber-900 dark:text-amber-200">
            <p className="font-semibold mb-1">Strategy tip:</p>
            <p>Skipping a question costs 0 marks. Guessing wrong costs -0.25. Only answer when you are more than 25% confident.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
