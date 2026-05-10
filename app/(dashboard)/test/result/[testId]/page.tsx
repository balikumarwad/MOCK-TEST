"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, Clock, AlertTriangle, Check, X, Lightbulb } from "lucide-react";
import { MOCK_RESULT, MOCK_REVIEW_QUESTIONS } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ResultPage({ params }: { params: { testId: string } }) {
  const result = MOCK_RESULT;
  
  // States for Question Review Section
  const [reviewFilter, setReviewFilter] = useState<"ALL" | "CORRECT" | "WRONG" | "SKIPPED">("ALL");
  const [expandedQuestionIds, setExpandedQuestionIds] = useState<Set<string>>(new Set());

  // Use the percentage to determine the theme
  const getThemeClass = (pct: number) => {
    if (pct >= 70) return { bg: "bg-blue-50 dark:bg-blue-900/20", border: "border-blue-200 dark:border-blue-800", text: "text-blue-700 dark:text-blue-300", fill: "#3b82f6" };
    if (pct >= 50) return { bg: "bg-amber-50 dark:bg-amber-900/20", border: "border-amber-200 dark:border-amber-800", text: "text-amber-700 dark:text-amber-300", fill: "#f59e0b" };
    return { bg: "bg-red-50 dark:bg-red-900/20", border: "border-red-200 dark:border-red-800", text: "text-red-700 dark:text-red-300", fill: "#ef4444" };
  };

  const theme = getThemeClass(result.percentage);

  const toggleQuestionExpand = (id: string) => {
    setExpandedQuestionIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  const filteredQuestions = MOCK_REVIEW_QUESTIONS.filter(q => {
    if (reviewFilter === "ALL") return true;
    if (reviewFilter === "CORRECT") return q.isCorrect === true;
    if (reviewFilter === "WRONG") return q.isCorrect === false;
    if (reviewFilter === "SKIPPED") return q.isCorrect === null;
    return true;
  });

  const getSubjectColor = (subject: string) => {
    switch (subject) {
      case "Physics": return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300";
      case "Chemistry": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300";
      case "Botany": return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300";
      case "Zoology": return "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300";
      case "MAT": return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300";
      default: return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
    }
  };

  const currentStrokeLength = (result.percentage / 100) * 283; // 2 * PI * r (approx for r=45 is 282.7)

  return (
    <div className="max-w-[900px] mx-auto py-8 px-4 space-y-10 exam-focus pb-20">
      
      {/* A. RESULT HEADER */}
      <div className="space-y-4">
        <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          ← Back to Dashboard
        </Link>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Test Complete</div>
            <h1 className="text-2xl font-bold tracking-tight">CEE Full Mock Test</h1>
            <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
              <span>{result.completedAt}</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {result.timeTaken}</span>
            </div>
          </div>
          
          <div className="hidden md:flex flex-col items-end bg-card border rounded-xl p-4 shadow-sm min-w[180px]">
            <div className="text-4xl font-bold text-blue-600">#{result.estimatedRank.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground mt-1">of {result.totalStudents.toLocaleString()} students</div>
            <div className="mt-2 text-xs font-semibold bg-green-100 text-green-700 dark:bg-green-900/30 px-2 py-1 rounded-md">
              Top {((result.estimatedRank / result.totalStudents) * 100).toFixed(1)}%
            </div>
          </div>
        </div>
      </div>

      {/* B. SCORE HERO CARD */}
      <Card className={`${theme.bg} ${theme.border} overflow-hidden shadow-sm`}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8 items-center">
          
          {/* Left: Score Circle */}
          <div className="md:col-span-3 flex flex-col items-center justify-center">
            <div className="relative w-36 h-36 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                <circle cx="72" cy="72" r="45" fill="none" stroke="currentColor" strokeWidth="10" className="text-black/5 dark:text-white/5" />
                <circle 
                  cx="72" cy="72" r="45" 
                  fill="none" 
                  stroke={theme.fill} 
                  strokeWidth="10" 
                  strokeLinecap="round"
                  strokeDasharray="283"
                  strokeDashoffset={283 - currentStrokeLength}
                  className="transition-all duration-1000 ease-out" 
                />
              </svg>
              <div className="text-center flex flex-col items-center">
                <span className="text-3xl font-bold tracking-tight text-foreground">{result.rawScore}</span>
                <span className="text-sm font-medium text-muted-foreground">/ {result.maxScore}</span>
              </div>
            </div>
            <span className="text-sm font-semibold text-muted-foreground mt-2">Your Score</span>
          </div>

          {/* Center: Stat Pills */}
          <div className="md:col-span-5 space-y-3 flex flex-col justify-center">
            <div className="flex justify-between items-center bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium">
              <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-green-500"></div> {result.correct} Correct</span>
              <span>+{result.correct.toFixed(2)} marks</span>
            </div>
            <div className="flex justify-between items-center bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300 px-4 py-2 rounded-full text-sm font-medium">
              <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-red-500"></div> {result.wrong} Wrong</span>
              <span>−{(result.wrong * 0.25).toFixed(2)} marks</span>
            </div>
            <div className="flex justify-between items-center bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-full text-sm font-medium">
              <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-slate-500"></div> {result.skipped} Skipped</span>
              <span>+0.00 marks</span>
            </div>
            <div className="text-xs text-muted-foreground mt-2 text-center">
              ({result.correct} × +1) + ({result.wrong} × −0.25) = {result.rawScore} marks
            </div>
          </div>

          {/* Right: Quick Stats */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 h-full">
            <div className="flex flex-col justify-center bg-background/50 backdrop-blur-sm rounded-lg p-3 border border-border/50">
              <span className="text-xs text-muted-foreground mb-1">Percentage</span>
              <span className="font-semibold text-lg">{result.percentage.toFixed(2)}%</span>
            </div>
            <div className="flex flex-col justify-center bg-background/50 backdrop-blur-sm rounded-lg p-3 border border-border/50">
              <span className="text-xs text-muted-foreground mb-1">Accuracy</span>
              <span className="font-semibold text-lg">{((result.correct / (result.correct + result.wrong)) * 100).toFixed(1)}%</span>
            </div>
            <div className="flex flex-col justify-center bg-background/50 backdrop-blur-sm rounded-lg p-3 border border-border/50">
              <span className="text-xs text-muted-foreground mb-1">Percentile</span>
              <span className="font-semibold text-lg">{result.percentile}th</span>
            </div>
            <div className="flex flex-col justify-center bg-background/50 backdrop-blur-sm rounded-lg p-3 border border-border/50">
              <span className="text-xs text-muted-foreground mb-1">Time</span>
              <span className="font-semibold text-lg flex items-center">{result.timeTaken}</span>
            </div>
          </div>

        </div>
      </Card>

      {/* C. SUBJECT BREAKDOWN */}
      <div className="space-y-6">
        <div className="flex justify-between items-end border-b pb-2 border-border/50">
          <h2 className="text-lg font-semibold tracking-tight">Subject-wise Performance</h2>
          <span className="text-xs text-muted-foreground hidden sm:block">
            CEE standard: Physics 50 · Chemistry 50 · Zoology 40 · Botany 40 · MAT 20
          </span>
        </div>
        
        <div className="space-y-4">
          {result.subjectBreakdown.map(subj => {
            let barColor = "bg-red-500";
            if (subj.accuracy >= 70) barColor = "bg-green-500";
            else if (subj.accuracy >= 50) barColor = "bg-amber-500";
            
            const fillWidth = (subj.score / subj.maxScore) * 100;
            
            return (
              <div key={subj.subject} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <div className="font-medium text-sm w-full sm:w-[120px]">{subj.subject}</div>
                
                <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden relative">
                  <div 
                    className={`absolute top-0 left-0 h-full ${barColor} rounded-full transition-all duration-1000`} 
                    style={{ width: `${Math.max(0, fillWidth)}%` }}
                  />
                </div>
                
                <div className="text-xs sm:text-right text-muted-foreground w-full sm:w-[180px] flex justify-between sm:block">
                  <span>{subj.correct}/{subj.total} correct</span>
                  <span className="sm:hidden">·</span>
                  <span className="sm:before:content-['·'] sm:before:mx-1">Score: {subj.score}</span>
                  <span className="sm:hidden">·</span>
                  <span className="sm:before:content-['·'] sm:before:mx-1">{subj.accuracy.toFixed(1)}% acc</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Weak Subjects Callout */}
        {result.subjectBreakdown.some(s => s.accuracy < 60) && (
          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 rounded-lg p-4 flex gap-3 text-amber-900 dark:text-amber-200">
            <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-500 flex-shrink-0" />
            <div className="text-sm">
              <span className="font-bold block mb-1">Focus areas: {result.subjectBreakdown.filter(s => s.accuracy < 60).map(s => `${s.subject} (${s.accuracy.toFixed(0)}%)`).join(", ")}</span>
              These subjects need more practice before the final CEE.
            </div>
          </div>
        )}
      </div>

      {/* D. TIME ANALYSIS */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold tracking-tight border-b pb-2 border-border/50">Time Analysis</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-muted/40 p-4 rounded-lg flex flex-col justify-center border border-border/30">
            <span className="text-xs text-muted-foreground mb-1">Total Time Used</span>
            <span className="font-semibold text-lg">{result.timeTaken} <span className="text-xs font-normal text-muted-foreground">/ 3h</span></span>
          </div>
          <div className="bg-muted/40 p-4 rounded-lg flex flex-col justify-center border border-border/30">
            <span className="text-xs text-muted-foreground mb-1">Avg per Question</span>
            <span className="font-semibold text-lg">{Math.round(result.timeInSeconds / result.totalQuestions)} sec</span>
          </div>
          <div className="bg-muted/40 p-4 rounded-lg flex flex-col justify-center border border-border/30">
            <span className="text-xs text-muted-foreground mb-1">Time Remaining</span>
            <span className="font-semibold text-lg">{Math.floor((10800 - result.timeInSeconds) / 60)} min</span>
          </div>
          <div className="bg-muted/40 p-4 rounded-lg flex flex-col justify-center border border-border/30">
            <span className="text-xs text-muted-foreground mb-1">Pace</span>
            <span className="font-semibold text-lg">{Math.round((result.totalQuestions / result.timeInSeconds) * 3600)} Qs/hr</span>
          </div>
        </div>
      </div>

      {/* E. MARKING BREAKDOWN */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold tracking-tight border-b pb-2 border-border/50">How Your Score Was Calculated</h2>
        <div className="border border-border/60 rounded-xl overflow-hidden bg-card">
          <div className="grid grid-cols-4 px-4 py-3 border-b bg-muted/20 text-sm">
            <div className="font-medium text-green-600 dark:text-green-500">Correct answers</div>
            <div className="text-right text-muted-foreground">{result.correct} Qs</div>
            <div className="text-right text-muted-foreground">× +1.00</div>
            <div className="text-right font-medium text-green-600 dark:text-green-500">+{result.correct.toFixed(2)}</div>
          </div>
          <div className="grid grid-cols-4 px-4 py-3 border-b bg-muted/20 text-sm">
            <div className="font-medium text-red-600 dark:text-red-500">Wrong answers</div>
            <div className="text-right text-muted-foreground">{result.wrong} Qs</div>
            <div className="text-right text-muted-foreground">× −0.25</div>
            <div className="text-right font-medium text-red-600 dark:text-red-500">−{(result.wrong * 0.25).toFixed(2)}</div>
          </div>
          <div className="grid grid-cols-4 px-4 py-3 border-b bg-muted/20 text-sm">
            <div className="font-medium text-slate-600 dark:text-slate-400">Skipped</div>
            <div className="text-right text-muted-foreground">{result.skipped} Qs</div>
            <div className="text-right text-muted-foreground">× 0.00</div>
            <div className="text-right font-medium text-slate-600 dark:text-slate-400">+0.00</div>
          </div>
          <div className="grid grid-cols-4 px-4 py-4 bg-muted/40 text-base font-bold">
            <div>Final Score</div>
            <div className="text-right">{result.totalQuestions} Qs</div>
            <div></div>
            <div className="text-right">{result.rawScore.toFixed(2)} / 200</div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground px-2">
          CEE negative marking: −0.25 per wrong answer. Skipped questions do not lose marks.
        </p>
      </div>

      {/* F. QUESTION REVIEW SECTION */}
      <div className="space-y-6 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-border/50 pb-4 gap-4">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">Question-by-Question Review</h2>
            <p className="text-sm text-muted-foreground mt-1">Showing {MOCK_REVIEW_QUESTIONS.length} of {result.totalQuestions} questions</p>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Filter:</label>
            <select 
              className="text-sm border rounded-md px-2 py-1 bg-background"
              value={reviewFilter}
              onChange={(e) => setReviewFilter(e.target.value as any)}
            >
              <option value="ALL">All Questions</option>
              <option value="CORRECT">Correct Only</option>
              <option value="WRONG">Wrong Only</option>
              <option value="SKIPPED">Skipped Only</option>
            </select>
          </div>
        </div>

        {/* Custom Tabs List */}
        <div className="flex gap-6 border-b border-border">
          <button 
            onClick={() => setReviewFilter("ALL")}
            className={`pb-3 text-sm font-medium border-b-2 transition-colors relative ${reviewFilter === "ALL" ? "border-blue-600 text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}
          >
            All ({MOCK_REVIEW_QUESTIONS.length})
          </button>
          <button 
            onClick={() => setReviewFilter("WRONG")}
            className={`pb-3 text-sm font-medium border-b-2 transition-colors flex items-center gap-1.5 ${reviewFilter === "WRONG" ? "border-blue-600 text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}
          >
            Wrong <span className="bg-red-100 text-red-700 text-[10px] px-1.5 py-0.5 rounded-full font-bold">{MOCK_REVIEW_QUESTIONS.filter(q => q.isCorrect === false).length}</span>
          </button>
          <button 
            onClick={() => setReviewFilter("CORRECT")}
            className={`pb-3 text-sm font-medium border-b-2 transition-colors flex items-center gap-1.5 ${reviewFilter === "CORRECT" ? "border-blue-600 text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}
          >
            Correct <span className="bg-green-100 text-green-700 text-[10px] px-1.5 py-0.5 rounded-full font-bold">{MOCK_REVIEW_QUESTIONS.filter(q => q.isCorrect === true).length}</span>
          </button>
          <button 
            onClick={() => setReviewFilter("SKIPPED")}
            className={`pb-3 text-sm font-medium border-b-2 transition-colors flex items-center gap-1.5 ${reviewFilter === "SKIPPED" ? "border-blue-600 text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}
          >
            Skipped <span className="bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 text-[10px] px-1.5 py-0.5 rounded-full font-bold">{MOCK_REVIEW_QUESTIONS.filter(q => q.isCorrect === null).length}</span>
          </button>
        </div>

        {/* Review Cards List */}
        <div className="space-y-3">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map(q => {
              const isExpanded = expandedQuestionIds.has(q.id);
              
              let statusColor = "bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400"; // skipped
              let markStr = "0.00";
              let markColor = "text-slate-500";
              let ansLabel = "Skipped";
              let ansColor = "text-slate-500 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700";
              
              if (q.isCorrect === true) {
                statusColor = "bg-green-500 text-white";
                markStr = "+1.00";
                markColor = "text-green-600 font-medium";
                ansLabel = `You: ${q.selectedAnswer}`;
                ansColor = "text-green-700 bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900 dark:text-green-400";
              } else if (q.isCorrect === false) {
                statusColor = "bg-red-500 text-white";
                markStr = "−0.25";
                markColor = "text-red-600 font-medium";
                ansLabel = `You: ${q.selectedAnswer}`;
                ansColor = "text-red-700 bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-900 dark:text-red-400";
              }

              return (
                <Card key={q.id} className="overflow-hidden border-border/60 mb-3 shadow-sm">
                  <div 
                    className="p-4 flex items-center justify-between cursor-pointer hover:bg-muted/20 transition-colors"
                    onClick={() => toggleQuestionExpand(q.id)}
                  >
                    <div className="flex items-center gap-3 overflow-hidden flex-1">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${statusColor}`}>
                        {q.questionNumber}
                      </div>
                      <div className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full flex-shrink-0 ${getSubjectColor(q.subject)}`}>
                        {q.subject}
                      </div>
                      <div className="text-sm font-medium truncate">
                        {q.questionText}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 ml-4 flex-shrink-0">
                      <div className="hidden sm:flex items-center gap-2 text-xs">
                        <span className={`px-2 py-1 border rounded-md font-semibold ${ansColor}`}>
                          {ansLabel}
                        </span>
                        <span className="px-2 py-1 border border-green-200 bg-green-50 text-green-700 dark:bg-green-900/20 dark:border-green-900 dark:text-green-400 rounded-md font-semibold">
                          Correct: {q.correctAnswer}
                        </span>
                        <span className={`w-12 text-right ${markColor}`}>{markStr}</span>
                      </div>
                      <div className="text-muted-foreground p-1 transition-transform">
                        <ChevronDown className={`w-5 h-5 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                      </div>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="p-4 pt-0 md:p-6 md:pt-4 border-t bg-slate-50/50 dark:bg-slate-900/10">
                      
                      <div className="sm:hidden flex flex-wrap gap-2 text-xs mb-4 pb-4 border-b">
                         <span className={`px-2 py-1 border rounded-md font-semibold ${ansColor}`}>
                          {ansLabel}
                        </span>
                        <span className="px-2 py-1 border border-green-200 bg-green-50 text-green-700 dark:bg-green-900/20 dark:border-green-900 dark:text-green-400 rounded-md font-semibold">
                          Correct: {q.correctAnswer}
                        </span>
                        <span className={`px-2 py-1 font-semibold border rounded-md bg-white dark:bg-transparent ${markColor}`}>Marks: {markStr}</span>
                      </div>

                      <div className="text-base mb-6 leading-[1.7] mt-2 text-foreground">
                        {q.questionText}
                      </div>

                      <div className="space-y-2 mb-6">
                        {(["A", "B", "C", "D"] as const).map(opt => {
                          const isCorrectOpt = q.correctAnswer === opt;
                          const isSelectedOpt = q.selectedAnswer === opt;
                          
                          let optBoxColor = "border-border bg-card";
                          let dotColor = "text-muted-foreground border-border";
                          
                          if (isCorrectOpt) {
                            optBoxColor = "border-green-500 bg-green-50 dark:bg-green-900/20";
                            dotColor = "bg-green-500 text-white border-green-500";
                          } else if (isSelectedOpt && !q.isCorrect) {
                            optBoxColor = "border-red-400 bg-red-50 dark:bg-red-900/20";
                            dotColor = "bg-red-500 text-white border-red-500";
                          }
                          
                          return (
                            <div key={opt} className={`flex items-center p-3 rounded-lg border ${optBoxColor}`}>
                              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold border flex-shrink-0 ${dotColor}`}>
                                {opt}
                              </div>
                              <div className="ml-3 text-sm flex-1">{q.options[opt as keyof typeof q.options]}</div>
                              
                              {isCorrectOpt && <Check className="w-5 h-5 text-green-600 flex-shrink-0 ml-2" />}
                              {isSelectedOpt && !q.isCorrect && <X className="w-5 h-5 text-red-500 flex-shrink-0 ml-2" />}
                            </div>
                          );
                        })}
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-950/40 border-l-4 border-blue-500 rounded-r-md p-3 mb-4 text-sm text-blue-900 dark:text-blue-100 flex gap-3">
                        <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="block mb-1 text-blue-800 dark:text-blue-300">Explanation:</strong>
                          <p className="leading-relaxed">{q.explanation}</p>
                        </div>
                      </div>

                      <div className="flex gap-2 text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">
                        <span>CEE {q.year}</span>
                        <span>·</span>
                        <span>{q.difficulty}</span>
                        <span>·</span>
                        <span>{q.chapter}</span>
                      </div>
                    </div>
                  )}
                </Card>
              );
            })
          ) : (
            <div className="text-center py-12 text-muted-foreground border rounded-lg border-dashed">
              No questions found for this filter.
            </div>
          )}
        </div>
      </div>

      {/* G. ACTION BUTTONS */}
      <div className="pt-8 flex flex-col items-center">
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <Button variant="outline" asChild className="h-12 flex-1 font-medium bg-background">
            <Link href="/dashboard">← Back to Dashboard</Link>
          </Button>
          <Button asChild className="h-12 flex-1 font-medium bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/test/configure">Retake This Test →</Link>
          </Button>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-4 max-w-sm">
          Want AI feedback on your performance? Coming soon — Gemini AI evaluation in Prompt 13.
        </p>
      </div>
      
    </div>
  );
}
