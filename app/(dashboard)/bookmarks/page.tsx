"use client";

import { useState } from "react";
import { BOOKMARKED_QUESTIONS } from "@/lib/mock-data";
import { Bookmark, ChevronDown, ChevronRight, Trash2, Tag, BookOpen, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function BookmarksPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Date Saved");
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  // Derive counts
  const counts = {
    All: BOOKMARKED_QUESTIONS.length,
    Physics: BOOKMARKED_QUESTIONS.filter(q => q.subject === "Physics").length,
    Chemistry: BOOKMARKED_QUESTIONS.filter(q => q.subject === "Chemistry").length,
    Zoology: BOOKMARKED_QUESTIONS.filter(q => q.subject === "Zoology").length,
    Botany: BOOKMARKED_QUESTIONS.filter(q => q.subject === "Botany").length,
    MAT: BOOKMARKED_QUESTIONS.filter(q => q.subject === "MAT").length,
    Hard: BOOKMARKED_QUESTIONS.filter(q => q.difficulty === "HARD").length,
    Medium: BOOKMARKED_QUESTIONS.filter(q => q.difficulty === "MEDIUM").length,
    Easy: BOOKMARKED_QUESTIONS.filter(q => q.difficulty === "EASY").length,
  };

  const filters = [
    { label: "All", count: counts.All },
    { label: "Physics", count: counts.Physics },
    { label: "Chemistry", count: counts.Chemistry },
    { label: "Zoology", count: counts.Zoology },
    { label: "Botany", count: counts.Botany },
    { label: "MAT", count: counts.MAT },
    { label: "Hard", count: counts.Hard },
    { label: "Medium", count: counts.Medium },
    { label: "Easy", count: counts.Easy },
  ];

  // Filtering
  const filteredQuestions = BOOKMARKED_QUESTIONS.filter(q => {
    if (activeFilter === "All") return true;
    if (["Physics", "Chemistry", "Zoology", "Botany", "MAT"].includes(activeFilter)) {
      return q.subject === activeFilter;
    }
    if (["Hard", "Medium", "Easy"].includes(activeFilter)) {
      return q.difficulty === activeFilter.toUpperCase();
    }
    return true;
  });

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newSet = new Set(expandedIds);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setExpandedIds(newSet);
  };

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case "EASY": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800";
      case "MEDIUM": return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800";
      case "HARD": return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800";
      default: return "";
    }
  };

  const getSubjectColor = (subj: string) => {
    switch (subj) {
      case 'Physics': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Chemistry': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Botany': return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400';
      case 'Zoology': return 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400';
      case 'MAT': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-6 px-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-3">
            <Bookmark className="w-8 h-8 text-blue-600" />
            <h1 className="font-bold text-2xl">My Bookmarks</h1>
          </div>
          <p className="text-muted-foreground mt-1">Questions saved for revision</p>
        </div>
        <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-50 dark:bg-blue-900/20 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
          {BOOKMARKED_QUESTIONS.length} questions saved
        </Badge>
      </div>

      {/* Filter Bar */}
      <div className="flex overflow-x-auto gap-2 pb-2 mb-4 scrollbar-hide">
        {filters.map(filter => (
          <button
            key={filter.label}
            onClick={() => setActiveFilter(filter.label)}
            className={`flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-medium transition-colors border ${
              activeFilter === filter.label
                ? "bg-blue-600 border-blue-600 text-white dark:bg-blue-500 dark:border-blue-500"
                : "bg-background border-input hover:bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {filter.label} <span className={`ml-1 text-xs ${activeFilter === filter.label ? "text-blue-100" : "text-muted-foreground"}`}>({filter.count})</span>
          </button>
        ))}
      </div>

      {/* Sort Row */}
      <div className="flex justify-end items-center gap-2 mb-6">
        <span className="text-sm text-muted-foreground">Sort by:</span>
        <div className="flex bg-muted/50 rounded-full p-1 border">
          {["Date Saved", "Subject", "Difficulty"].map(sort => (
            <button
              key={sort}
              onClick={() => setSortBy(sort)}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                sortBy === sort ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {sort}
            </button>
          ))}
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-3">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((q) => {
            const isExpanded = expandedIds.has(q.id);
            
            return (
              <Card 
                key={q.id} 
                className={`overflow-hidden transition-all duration-200 border-l-4 hover:shadow-md cursor-pointer ${
                  q.difficulty === 'HARD' ? 'border-l-red-500' :
                  q.difficulty === 'MEDIUM' ? 'border-l-amber-500' : 'border-l-green-500'
                }`}
                onClick={(e) => toggleExpand(q.id, e)}
              >
                <div className="p-4">
                  {/* Top Row */}
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider ${getSubjectColor(q.subject)}`}>
                        {q.subject}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider border ${getDifficultyColor(q.difficulty)}`}>
                        {q.difficulty}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-muted-foreground hidden sm:inline-block">Saved {q.bookmarkedAt}</span>
                      <button 
                        className="text-muted-foreground hover:text-red-600 transition-colors" 
                        onClick={(e) => { e.stopPropagation(); /* no-op in mock */ }}
                        title="Remove bookmark"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Question Text */}
                  <div className={`text-sm sm:text-base mb-3 ${!isExpanded ? 'line-clamp-2 text-foreground/90' : 'text-foreground'}`}>
                    {q.questionText}
                  </div>

                  {/* Bottom Row (Collapsed) */}
                  {!isExpanded && (
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> {q.chapter}</span>
                        <span>&middot;</span>
                        <span>{q.year}</span>
                        <span>&middot;</span>
                        <span>{(q as any).source || 'CEE'}</span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </div>
                  )}

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {(["A", "B", "C", "D"] as const).map(key => {
                          const isCorrect = q.correctAnswer === key;
                          
                          return (
                            <div 
                              key={key} 
                              className={`flex items-start p-3 border rounded-lg ${
                                isCorrect 
                                  ? 'bg-green-50/50 border-green-500/30 dark:bg-green-950/20 dark:border-green-900/50 relative overflow-hidden' 
                                  : 'bg-muted/10 border-transparent'
                              }`}
                            >
                              {isCorrect && (
                                <div className="absolute top-0 right-0 w-8 h-8 bg-green-100 dark:bg-green-900/40 rounded-bl-xl flex items-center justify-center">
                                  <svg className="w-4 h-4 text-green-600 dark:text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                              )}
                              <span className={`w-6 h-6 flex-shrink-0 flex items-center justify-center rounded bg-background border text-xs font-bold mr-3 mt-0.5 ${
                                isCorrect ? 'border-green-500 text-green-700 dark:border-green-600 dark:text-green-400' : 'text-muted-foreground'
                              }`}>{key}</span>
                              <span className={`text-sm ${isCorrect ? 'text-green-900 dark:text-green-200 font-medium' : 'text-muted-foreground'}`}>{q.options[key]}</span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="bg-blue-50/80 border border-blue-100 dark:bg-blue-950/20 dark:border-blue-900/50 rounded-xl p-4 flex gap-3 text-sm text-blue-900 dark:text-blue-100">
                        <LightbulbIcon className="w-5 h-5 flex-shrink-0 text-blue-500 mt-0.5" />
                        <div>
                          <span className="font-semibold block mb-1">Explanation</span>
                          <span className="opacity-90 leading-relaxed">{q.explanation}</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-end pt-2">
                        <div className="flex flex-wrap gap-2">
                          {q.tags.map(tag => (
                            <span key={tag} className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-1 rounded text-xs">
                              <Tag className="w-3 h-3" /> {tag}
                            </span>
                          ))}
                        </div>
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      </div>
                    </div>
                  )}

                </div>
              </Card>
            );
          })
        ) : (
          <div className="py-20 flex flex-col items-center justify-center text-center">
            <Bookmark className="w-16 h-16 text-muted-foreground/30 mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-1">No bookmarks in this category</h3>
            <p className="text-muted-foreground">Try a different filter</p>
          </div>
        )}
      </div>

    </div>
  );
}

function LightbulbIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}
