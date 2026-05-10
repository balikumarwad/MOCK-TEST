"use client";

import { useEffect, useState } from "react";

if (typeof window !== "undefined") {
  // @ts-ignore
  if (!window.__darkreaderPatchApplied) {
    // @ts-ignore
    window.__darkreaderPatchApplied = true;
    const defaultError = console.error;
    console.error = (...args) => {
      if (typeof args[0] === "string" && args[0].includes("data-darkreader-inline-stroke")) {
        return;
      }
      defaultError.apply(console, args);
    };
  }
}

import { Moon, Sun, Menu, Stethoscope, Flame } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "./Sidebar";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check initial state from html class
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove("dark");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      setIsDark(true);
    }
  };

  return (
    <nav className="fixed top-0 w-full h-16 z-50 border-b border-border bg-background/95 backdrop-blur-sm px-4 lg:px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu suppressHydrationWarning className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-64 border-r border-border">
              <Sidebar />
            </SheetContent>
          </Sheet>
        </div>
        <Stethoscope suppressHydrationWarning className="h-6 w-6 text-primary" />
        <span className="font-semibold text-lg">CEE Mock Test</span>
        <Badge variant="secondary" className="ml-2 text-muted-foreground hidden sm:inline-flex">
          BETA
        </Badge>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-1 text-amber-500 font-medium text-sm border border-amber-500/20 bg-amber-500/10 px-3 py-1 rounded-full">
          <Flame suppressHydrationWarning className="h-4 w-4" />
          <span>3 day streak</span>
        </div>
        
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {isDark ? <Sun suppressHydrationWarning className="h-5 w-5" /> : <Moon suppressHydrationWarning className="h-5 w-5" />}
        </Button>
        
        <div className="hidden md:block">
          <Avatar className="h-8 w-8 cursor-pointer ring-2 ring-primary/10 transition-all hover:ring-primary/30">
            <AvatarFallback className="bg-primary/10 text-primary text-xs">GS</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
}
