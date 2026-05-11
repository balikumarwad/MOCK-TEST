"use client";

import { useState } from "react";
import Link from "next/link";
import { PRACTICE_SUBJECTS, PRACTICE_QUESTION } from "@/lib/mock-data";
import { Brain, Clock, Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PracticePage() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedChapter, setSelectedChapter] = useState("All Chapters");
  const [practiceDifficulty, setPracticeDifficulty] = useState("All");
  
  // Practice Question State
  const [selectedPracticeAnswer, setSelectedPracticeAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleOptionClick = (key: string) => {
    if (selectedPracticeAnswer) return; // Prevent changing answer after reveal
    setSelectedPracticeAnswer(key);
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    setSelectedPracticeAnswer(null);
    setShowExplanation(false);
  };

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 pb-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <div className="flex items-center gap-3">
            <Brain className="w-8 h-8 text-green-600 dark:text-green-500" />
            <h1 className="font-bold text-2xl">Practice Mode</h1>
          </div>
          <p className="text-muted-foreground mt-1">No timer. Instant feedback after each question.</p>
        </div>
        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900">
          No Negative Marking in Practice
        </Badge>
      </div>

      {/* Mode Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <Card className="p-5 border-blue-200 dark:border-blue-800 bg-white dark:bg-card">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-blue-600" />
            <span className="font-semibold text-blue-700 dark:text-blue-400">Mock Test Mode</span>
          </div>
          <ul className="space-y-2 text-sm text-foreground/80 mb-6">
            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-500" /> 200 questions &middot; 3 hours</li>
            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-500" /> -0.25 negative marking</li>
            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-500" /> Results after submission</li>
            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-500" /> Exam simulation</li>
          </ul>
          <Link href="/test/configure" className="inline-block px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-md text-sm font-medium transition-colors">
            Start Mock Test
          </Link>
        </Card>

        <Card className="p-5 border-2 border-green-500 bg-green-50/30 dark:bg-green-900/10 box-border relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-green-500 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider rounded-bl-lg">
            You are here
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Brain className="w-5 h-5 text-green-600" />
            <span className="font-semibold text-green-700 dark:text-green-400">Practice Mode</span>
          </div>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Choose any subject or chapter</li>
            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> No timer pressure</li>
            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Instant answer reveal</li>
            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> No negative marking</li>
            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Learn as you go</li>
          </ul>
        </Card>
      </div>

      {/* Subject Selector */}
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-4">Choose a Subject to Practice</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {PRACTICE_SUBJECTS.map((sub) => {
             const isSelected = selectedSubject === sub.name;
             return (
               <Card 
                 key={sub.id}
                 onClick={() => { setSelectedSubject(sub.name); setSelectedChapter("All Chapters"); }}
                 className={`p-4 cursor-pointer transition-all hover:shadow-md relative ${
                   isSelected ? "border-2 border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border"
                 }`}
               >
                 {isSelected && <Check className="absolute top-2 right-2 w-4 h-4 text-blue-500" />}
                 <div className={`w-8 h-8 rounded-full mb-3 flex items-center justify-center text-white
                   ${sub.color === 'blue' ? 'bg-blue-500' : 
                     sub.color === 'green' ? 'bg-green-500' :
                     sub.color === 'emerald' ? 'bg-emerald-500' :
                     sub.color === 'violet' ? 'bg-violet-500' : 'bg-amber-500'}
                 `}>
                   {sub.name[0]}
                 </div>
                 <div className="font-semibold">{sub.name}</div>
                 <div className="text-xs text-muted-foreground mt-1">{sub.questionCount} questions</div>
                 <div className="text-[10px] text-muted-foreground">{sub.chapters} chapters</div>
               </Card>
             );
          })}
        </div>
      </div>

      {/* Filters (Visible only if subject selected) */}
      {selectedSubject && (
        <div className="mb-10 space-y-4 animate-in fade-in slide-in-from-top-2">
          {/* Chapter Filters */}
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
            {["All Chapters", "Nervous System", "Endocrine System", "Human Reproduction", "Genetics"].map(chap => (
              <button
                key={chap}
                onClick={() => setSelectedChapter(chap)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                  selectedChapter === chap
                    ? "bg-blue-600 border-blue-600 text-white dark:bg-blue-500 dark:border-blue-500"
                    : "bg-background border-input hover:bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {chap}
              </button>
            ))}
          </div>

          {/* Difficulty Filters */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">Difficulty:</span>
            <div className="flex gap-2">
              {["All", "Easy", "Medium", "Hard"].map(diff => (
                <button
                  key={diff}
                  onClick={() => setPracticeDifficulty(diff)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors border ${
                    practiceDifficulty === diff
                      ? "bg-slate-800 text-white border-slate-800 dark:bg-slate-200 dark:text-slate-900"
                      : "bg-transparent text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Practice Question Demo */}
      {selectedSubject && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xl font-bold">Practice Question</h2>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">{selectedSubject}</Badge>
          </div>

          <Card className="p-6 max-w-4xl border-2 shadow-sm">
            {/* Meta */}
            <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
              <div className="flex gap-2 items-center">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100 uppercase text-[10px] tracking-wider">{PRACTICE_QUESTION.subject}</Badge>
                <Badge variant="outline" className="text-muted-foreground border-input">{PRACTICE_QUESTION.chapter}</Badge>
                <Badge variant="outline" className="bg-amber-100 text-amber-700 border-amber-200 uppercase text-[10px] tracking-wider">{PRACTICE_QUESTION.difficulty}</Badge>
              </div>
              <div className="text-xs text-muted-foreground font-medium">Question from CEE {PRACTICE_QUESTION.year}</div>
            </div>

            {/* Question */}
            <div className="text-[18px] leading-[1.7] font-medium text-foreground mb-8">
              {PRACTICE_QUESTION.questionText}
            </div>

            {/* Options */}
            <div className="space-y-3 mb-8">
              {(["A", "B", "C", "D"] as const).map(key => {
                const isSelected = selectedPracticeAnswer === key;
                const isCorrect = PRACTICE_QUESTION.correctAnswer === key;
                const showAsCorrect = showExplanation && isCorrect;
                const showAsWrong = showExplanation && isSelected && !isCorrect;
                const isDimmed = showExplanation && !isSelected && !isCorrect;

                let optionClass = "bg-card border-input hover:bg-blue-50 dark:hover:bg-blue-900/20";
                
                if (showAsCorrect) {
                  optionClass = "bg-green-50 border-green-500 dark:bg-green-950/30 dark:border-green-600 ring-1 ring-green-500";
                } else if (showAsWrong) {
                  optionClass = "bg-red-50 border-red-400 dark:bg-red-950/30 dark:border-red-600 ring-1 ring-red-400";
                } else if (isDimmed) {
                  optionClass = "bg-muted/30 border-transparent opacity-60";
                }

                return (
                  <button
                    key={key}
                    disabled={showExplanation}
                    onClick={() => handleOptionClick(key)}
                    className={`w-full flex items-center p-4 border rounded-xl text-left transition-all ${
                      showExplanation ? "cursor-default" : "cursor-pointer"
                    } ${optionClass}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold border ${
                      showAsCorrect ? "bg-green-500 text-white border-green-500" :
                      showAsWrong ? "bg-red-500 text-white border-red-500" :
                      "bg-background text-foreground/70"
                    }`}>
                      {key}
                    </div>
                    <span className={`text-base flex-1 ${showAsCorrect ? "text-green-900 dark:text-green-100 font-medium" : showAsWrong ? "text-red-900 dark:text-red-100" : "text-foreground"}`}>
                      {PRACTICE_QUESTION.options[key]}
                    </span>
                    
                    {showAsCorrect && (
                      <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-medium text-sm ml-2">
                        <Check className="w-5 h-5" />
                        <span className="hidden sm:inline">+0 marks (practice mode)</span>
                      </div>
                    )}
                    {showAsWrong && (
                      <div className="flex items-center text-red-500 ml-2">
                        <X className="w-5 h-5" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {showExplanation && (
              <div className="animate-in fade-in slide-in-from-top-4 duration-300 mb-8">
                <div className="bg-blue-50 border border-blue-200 dark:bg-blue-900/20 dark:border-blue-800 rounded-xl p-5 text-blue-900 dark:text-blue-100">
                  <span className="font-bold block mb-2 text-blue-700 dark:text-blue-400">Explanation:</span>
                  <span className="leading-relaxed opacity-90">{PRACTICE_QUESTION.explanation}</span>
                </div>
                <div className="mt-3 text-xs font-semibold text-amber-600 dark:text-amber-500 text-center">
                  In real CEE: wrong answer = -0.25 marks
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row justify-between items-center pt-4 border-t gap-4">
              {showExplanation ? (
                <>
                  <button disabled className="px-4 py-2 text-sm text-muted-foreground opacity-50 cursor-not-allowed hidden sm:block">
                    &larr; Previous Question
                  </button>
                  <button className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-2">
                    Skip
                  </button>
                  <button 
                    onClick={handleNextQuestion}
                    className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                  >
                    Next Question &rarr;
                  </button>
                </>
              ) : (
                <div className="w-full text-center text-sm text-muted-foreground">
                  Select an option to check your answer
                </div>
              )}
            </div>
          </Card>
        </div>
      )}

      {/* Footer warning */}
      <div className="mt-16 pt-4 border-t text-center text-sm text-muted-foreground">
        Practice mode does not count toward your leaderboard score or analytics. Switch to Mock Test mode for official results.
      </div>

    </div>
  );
}
