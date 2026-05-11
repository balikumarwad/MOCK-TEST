"use client";

import { useState } from "react";
import { LEADERBOARD } from "@/lib/mock-data";
import { Trophy, Flame } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState("This Week");
  
  // Ranks
  const top3 = LEADERBOARD.slice(0, 3);
  const others = LEADERBOARD;

  // Render Medal Helper
  const getMedalColor = (rank: number) => {
    switch (rank) {
      case 1: return "bg-amber-400 text-amber-900 border-amber-500 shadow-amber-200 border-2";
      case 2: return "bg-slate-300 text-slate-800 border-slate-400 shadow-slate-200 border-2";
      case 3: return "bg-orange-300 text-orange-900 border-orange-400 shadow-orange-200 border-2";
      default: return "";
    }
  };

  const getRankAvatarParams = (name: string) => {
    const parts = name.split(" ");
    return parts.length > 1 ? `${parts[0][0]}${parts[1][0]}` : parts[0][0];
  };

  return (
    <div className="max-w-5xl mx-auto py-6 px-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-3">
            <Trophy className="w-8 h-8 text-amber-500" />
            <h1 className="font-bold text-2xl">Leaderboard</h1>
          </div>
          <p className="text-muted-foreground mt-1">Top students on CEE MockTest platform</p>
        </div>
        <div className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1.5 rounded-md text-sm font-medium border border-slate-200 dark:border-slate-700">
          4,820 students enrolled
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-col items-center mb-10">
        <div className="flex gap-6 border-b w-full justify-center mb-2">
          {["This Week", "This Month", "All Time"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 px-2 text-sm font-medium transition-colors relative ${
                activeTab === tab 
                  ? "text-blue-600 dark:text-blue-400" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded-t-md" />
              )}
            </button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">Rankings based on best score achieved</p>
      </div>

      {/* Current User Pos */}
      <Card className="bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800 p-4 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-sm text-muted-foreground mb-1">Your Position</div>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold">#14<span className="text-lg font-normal text-muted-foreground ml-1">of 4,820 students</span></span>
            <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs px-2 py-0.5 rounded font-semibold border border-green-200 dark:border-green-800/50">Top 7.1%</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold mb-1">123.75 <span className="text-sm font-normal text-muted-foreground">/ 200</span> <span className="text-sm font-medium ml-2">Accuracy: 76.6%</span></div>
          <div className="text-blue-600 dark:text-blue-400 text-sm font-medium">Keep practicing to climb the leaderboard!</div>
        </div>
        <div className="w-full md:w-auto text-xs text-blue-800/70 dark:text-blue-200/50 bg-blue-100/50 dark:bg-blue-800/20 px-3 py-2 rounded text-center">
          You need 6.25 more marks to reach rank #13
        </div>
      </Card>

      {/* Podium */}
      <div className="flex items-end justify-center gap-2 sm:gap-6 mb-12 h-64 pt-8">
        {/* 2nd Place */}
        <div className="flex flex-col items-center w-28 sm:w-32 relative group">
          <div className="flex flex-col items-center absolute -top-24">
            <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl mb-2 z-10 ${getMedalColor(2)}`}>
              2
            </div>
            <div className="text-center font-medium text-sm leading-tight max-w-[80px] line-clamp-2 mb-1">{top3[1].name}</div>
            <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-xs mb-1">{top3[1].score} / 200</Badge>
            <div className="text-xs text-muted-foreground">{top3[1].accuracy}%</div>
          </div>
          <div className="w-full h-14 bg-slate-200 dark:bg-slate-800 rounded-t-lg border-t-2 border-slate-300 dark:border-slate-700 shadow-inner" />
        </div>

        {/* 1st Place */}
        <div className="flex flex-col items-center w-32 sm:w-40 relative group z-10">
          <div className="flex flex-col items-center absolute -top-28">
            <Trophy className="w-6 h-6 text-amber-500 absolute -top-8 animate-bounce" />
            <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl mb-2 z-10 ${getMedalColor(1)}`}>
              1
            </div>
            <div className="text-center font-bold text-sm leading-tight max-w-[100px] line-clamp-2 mb-1">{top3[0].name}</div>
            <Badge variant="default" className="bg-amber-100 text-amber-700 hover:bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400 dark:hover:bg-amber-900/30 text-xs border border-amber-200 dark:border-amber-800 mb-1">{top3[0].score} / 200</Badge>
            <div className="text-xs text-muted-foreground font-medium">{top3[0].accuracy}%</div>
          </div>
          <div className="w-full h-20 bg-amber-200 dark:bg-amber-900/40 rounded-t-lg border-t-2 border-amber-300 dark:border-amber-800 shadow-inner" />
        </div>

        {/* 3rd Place */}
        <div className="flex flex-col items-center w-28 sm:w-32 relative group">
          <div className="flex flex-col items-center absolute -top-24">
            <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl mb-2 z-10 ${getMedalColor(3)}`}>
              3
            </div>
            <div className="text-center font-medium text-sm leading-tight max-w-[80px] line-clamp-2 mb-1">{top3[2].name}</div>
            <Badge variant="secondary" className="bg-orange-100 text-orange-800 hover:bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400 dark:hover:bg-orange-900/30 text-xs border border-orange-200 dark:border-orange-800 mb-1">{top3[2].score} / 200</Badge>
            <div className="text-xs text-muted-foreground">{top3[2].accuracy}%</div>
          </div>
          <div className="w-full h-10 bg-orange-200 dark:bg-orange-900/30 rounded-t-lg border-t-2 border-orange-300 dark:border-orange-800 shadow-inner" />
        </div>
      </div>

      {/* List */}
      <h2 className="text-xl font-bold mb-4">All Rankings</h2>
      
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Search student name..." 
          className="w-full max-w-md h-10 px-3 py-2 rounded-md border border-input bg-transparent text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        />
      </div>

      <div className="rounded-md border bg-card text-card-foreground shadow-sm overflow-hidden mb-4">
        {/* Header */}
        <div className="flex items-center px-4 py-3 bg-muted/50 border-b text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          <div className="w-12 text-center">Rank</div>
          <div className="flex-1">Student</div>
          <div className="w-28 text-right hidden sm:block">Best Score</div>
          <div className="w-16 text-center hidden md:block">Tests</div>
          <div className="w-20 text-center hidden sm:block">Accuracy</div>
          <div className="w-20 text-right">Streak</div>
        </div>

        {/* Rows */}
        <div className="divide-y">
          {others.map((student) => {
            const isCurrentUser = student.rank === 14;
            const rowClass = isCurrentUser ? "bg-blue-50 dark:bg-blue-900/10 border-l-4 border-l-blue-500" : "hover:bg-muted/50";
            
            return (
              <div key={student.rank} className={`flex items-center px-4 py-3 transition-colors ${rowClass}`}>
                {/* Rank */}
                <div className="w-12 flex justify-center text-sm font-medium">
                  {student.rank <= 3 ? (
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${getMedalColor(student.rank)}`}>
                      {student.rank}
                    </div>
                  ) : isCurrentUser ? (
                    <span className="text-blue-600 font-bold">{student.rank}</span>
                  ) : (
                    <span className="text-muted-foreground">{student.rank}</span>
                  )}
                </div>

                {/* Student */}
                <div className="flex-1 flex items-center gap-3">
                  <Avatar className="h-8 w-8 border">
                    <AvatarFallback className={isCurrentUser ? "bg-blue-100 text-blue-700 font-medium" : "bg-muted text-muted-foreground"}>
                      {getRankAvatarParams(student.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className={`text-sm ${isCurrentUser ? "font-bold text-blue-700 dark:text-blue-400" : "font-medium"}`}>
                      {student.name}
                    </div>
                    {student.badge && (
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium mt-0.5 inline-block ${
                        student.badge === 'Top 1%' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                          : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                      }`}>
                        {student.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Score (Mobile handles this differently in real app, keeping simple here) */}
                <div className="w-28 text-right hidden sm:block">
                  <div className={`text-sm ${isCurrentUser ? "font-bold" : "font-semibold"}`}>{student.score} <span className="text-xs font-normal text-muted-foreground">/ 200</span></div>
                  <div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full mt-1 overflow-hidden">
                    <div className="h-full bg-slate-400 dark:bg-slate-500 rounded-full" style={{ width: `${(student.score / 200) * 100}%` }} />
                  </div>
                </div>

                {/* Tests */}
                <div className="w-16 text-center text-sm text-muted-foreground hidden md:block">
                  {student.testsCount}
                </div>

                {/* Accuracy */}
                <div className="w-20 text-center text-sm hidden sm:block">
                  <span className={`font-medium ${
                    student.accuracy >= 75 ? 'text-green-600 dark:text-green-500' :
                    student.accuracy >= 50 ? 'text-amber-600 dark:text-amber-500' : 'text-red-600 dark:text-red-500'
                  }`}>
                    {student.accuracy}%
                  </span>
                </div>

                {/* Streak */}
                <div className="w-20 flex justify-end items-center gap-1">
                  {student.streak >= 3 ? (
                    <>
                      <Flame className="w-4 h-4 text-orange-500" />
                      <span className="text-sm font-medium text-orange-600 dark:text-orange-500">{student.streak} <span className="hidden md:inline">days</span></span>
                    </>
                  ) : (
                    <span className="text-sm text-muted-foreground">{student.streak} <span className="hidden md:inline">days</span></span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="flex justify-between items-center text-sm text-muted-foreground">
        <p>Showing 20 of 4,820 students</p>
        <p className="hidden sm:block text-xs">Full leaderboard with pagination coming soon</p>
      </div>

    </div>
  );
}
