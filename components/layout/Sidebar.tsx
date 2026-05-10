"use client";

import { LayoutDashboard, PlayCircle, Brain, BarChart2, ClipboardList, Bookmark, Trophy, Settings } from "lucide-react";
import { SidebarLink } from "./SidebarLink";

export function Sidebar() {
  return (
    <div className="fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] border-r border-border bg-background flex flex-col overflow-y-auto">
      <div className="p-4 flex-1">
        <div className="mb-4">
          <span className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-900/30 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-400 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-400/20">
            STUDENT
          </span>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Prepare
            </h3>
            <div className="space-y-1">
              <SidebarLink href="/dashboard" icon={LayoutDashboard} label="Dashboard" />
              <SidebarLink href="/test/configure" icon={PlayCircle} label="Take a Test" />
              <SidebarLink href="/practice" icon={Brain} label="Practice Mode" />
            </div>
          </div>

          <div>
            <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Review
            </h3>
            <div className="space-y-1">
              <SidebarLink href="/analytics" icon={BarChart2} label="My Analytics" />
              <SidebarLink href="/results" icon={ClipboardList} label="My Results" />
              <SidebarLink href="/bookmarks" icon={Bookmark} label="Bookmarks" />
            </div>
          </div>

          <div>
            <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Compete
            </h3>
            <div className="space-y-1">
              <SidebarLink href="/leaderboard" icon={Trophy} label="Leaderboard" />
            </div>
          </div>

          <div>
            <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Manage
            </h3>
            <div className="space-y-1">
              <SidebarLink href="/admin" icon={Settings} label="Admin Panel" />
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-border mt-auto">
        <div className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground text-center bg-muted/30">
          100 MCQs · 2hrs · +1/−0.2
        </div>
      </div>
    </div>
  );
}
