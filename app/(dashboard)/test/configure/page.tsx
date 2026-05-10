"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, Info } from "lucide-react";
import { SUBJECTS } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ConfigureTestPage() {
  const router = useRouter();

  const allSubjectIds = SUBJECTS.map(s => s.id);

  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(allSubjectIds);
  const [questionCount, setQuestionCount] = useState<50 | 100 | 200>(200);
  const [difficulty, setDifficulty] = useState<string>("ALL");
  const [source, setSource] = useState<string>("CEE");
  const [timeLimit, setTimeLimit] = useState<number>(180);

  const handleSubjectToggle = (id: string) => {
    setSelectedSubjects(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => setSelectedSubjects(allSubjectIds);
  const handleDeselectAll = () => setSelectedSubjects([]);

  const handleStartTest = () => {
    router.push("/test/exam");
  };

  return (
    <div className="mx-auto max-w-2xl pb-10 exam-focus space-y-8 pt-4">
      {/* A. PAGE HEADER */}
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight">Configure Your Test</h1>
        <p className="text-muted-foreground">Set up your mock test preferences below</p>
      </div>

      {/* B. SUBJECT SELECTION */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="font-semibold text-sm">
            Select Subjects <span className="text-muted-foreground font-normal">(required)</span>
          </label>
          <div className="flex gap-2 text-sm">
            <button onClick={handleSelectAll} className="text-blue-600 hover:underline">Select All</button>
            <span className="text-muted-foreground">|</span>
            <button onClick={handleDeselectAll} className="text-blue-600 hover:underline">Deselect All</button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {SUBJECTS.map((subject) => {
            const isSelected = selectedSubjects.includes(subject.id);
            
            const colorMap: Record<string, { bg: string; text: string; bgLight: string }> = {
              blue: { bg: "bg-blue-600", text: "text-blue-600", bgLight: "bg-blue-100 dark:bg-blue-900/40" },
              green: { bg: "bg-green-600", text: "text-green-600", bgLight: "bg-green-100 dark:bg-green-900/40" },
              emerald: { bg: "bg-emerald-600", text: "text-emerald-600", bgLight: "bg-emerald-100 dark:bg-emerald-900/40" },
              violet: { bg: "bg-violet-600", text: "text-violet-600", bgLight: "bg-violet-100 dark:bg-violet-900/40" },
              amber: { bg: "bg-amber-500", text: "text-amber-600", bgLight: "bg-amber-100 dark:bg-amber-900/40" },
            };
            const colors = colorMap[subject.color] || colorMap.blue;

            return (
              <Card
                key={subject.id}
                onClick={() => handleSubjectToggle(subject.id)}
                className={`cursor-pointer transition-all border-2 relative overflow-hidden ${
                  isSelected 
                    ? "border-blue-500 bg-blue-50/50 dark:bg-blue-950/20" 
                    : "border-border bg-card hover:border-blue-200"
                }`}
              >
                <div className="p-4">
                  <div className={`w-8 h-8 rounded-full ${colors.bgLight} flex items-center justify-center mb-2`}>
                    <div className={`w-3 h-3 rounded-full ${colors.bg}`} />
                  </div>
                  <h3 className="font-semibold text-sm">{subject.name}</h3>
                  <p className="text-xs text-muted-foreground">{subject.questionCount} Questions</p>
                  
                  {isSelected && (
                    <div className="absolute top-3 right-3 text-blue-500">
                      <Check className="w-5 h-5" />
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* C. NUMBER OF QUESTIONS */}
      <div className="space-y-3">
        <label className="font-semibold text-sm">Number of Questions</label>
        <div className="flex gap-3">
          {[50, 100, 200].map(count => (
            <button
              key={count}
              onClick={() => setQuestionCount(count as any)}
              className={`flex-1 py-3 px-4 rounded-xl border text-sm font-medium transition-all ${
                questionCount === count
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-card text-foreground border-border hover:border-blue-200 hover:bg-slate-50 dark:hover:bg-slate-900"
              }`}
            >
              {count}
            </button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground flex items-center gap-1.5 pt-1">
          <Info className="w-3.5 h-3.5" /> Recommended: 200 questions for full CEE simulation
        </p>
      </div>

      {/* D. DIFFICULTY LEVEL */}
      <div className="space-y-3">
        <label className="font-semibold text-sm">Difficulty</label>
        <div className="grid grid-cols-4 gap-3">
          {["ALL", "EASY", "MEDIUM", "HARD"].map(diff => (
            <button
              key={diff}
              onClick={() => setDifficulty(diff)}
              className={`py-2 px-3 rounded-xl border text-xs font-medium transition-all text-center ${
                difficulty === diff
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-card text-foreground border-border hover:border-blue-200 hover:bg-slate-50 dark:hover:bg-slate-900"
              }`}
            >
              {diff === "ALL" ? "All" : diff.charAt(0) + diff.slice(1).toLowerCase()}
            </button>
          ))}
        </div>
      </div>

      {/* E. SOURCE FILTER */}
      <div className="space-y-3">
        <label className="font-semibold text-sm">Question Source</label>
        <div className="grid grid-cols-4 gap-3">
          {["ALL", "CEE", "IOE", "KU"].map(src => (
            <button
              key={src}
              onClick={() => setSource(src)}
              className={`py-2 px-3 rounded-xl border text-xs font-medium transition-all text-center ${
                source === src
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-card text-foreground border-border hover:border-blue-200 hover:bg-slate-50 dark:hover:bg-slate-900"
              }`}
            >
              {src === "ALL" ? "All" : src}
            </button>
          ))}
        </div>
      </div>

      {/* F. TIME LIMIT */}
      <div className="space-y-3">
        <label className="font-semibold text-sm">Time Limit</label>
        <div className="flex gap-3">
          {[
            { label: "1 hour", value: 60 },
            { label: "2 hours", value: 120 },
            { label: "3 hours", value: 180 }
          ].map(time => (
            <button
              key={time.value}
              onClick={() => setTimeLimit(time.value)}
              className={`flex-1 py-3 px-4 rounded-xl border text-sm font-medium transition-all ${
                timeLimit === time.value
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-card text-foreground border-border hover:border-blue-200 hover:bg-slate-50 dark:hover:bg-slate-900"
              }`}
            >
              {time.label}
            </button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground pt-1">
          CEE standard is 3 hours for 200 questions
        </p>
      </div>

      {/* G. SUMMARY CARD */}
      <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 p-5 mt-6">
        <p className="text-blue-900 dark:text-blue-100 font-medium text-center">
          Your Test: {questionCount} Questions · {selectedSubjects.length} Subjects · {timeLimit >= 60 ? `${timeLimit / 60} Hour${timeLimit > 60 ? 's' : ''}` : `${timeLimit} min`} · {source === "ALL" ? "Mixed Sources" : source}
        </p>
      </Card>

      {/* H. START BUTTON */}
      <div className="pt-2 text-center pb-8">
        <Button 
          onClick={handleStartTest} 
          disabled={selectedSubjects.length === 0}
          className="w-full h-12 text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white"
        >
          Start Mock Test →
        </Button>
        <p className="text-xs text-muted-foreground mt-3">
          CEE Pattern: +1 correct · −0.2 wrong · 0 skipped
        </p>
      </div>
    </div>
  );
}
