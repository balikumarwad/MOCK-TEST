"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Clock, Flag, LayoutGrid, Check, ArrowRight, ArrowLeft } from "lucide-react";
import { MOCK_QUESTIONS, MOCK_TEST_CONFIG } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogCancel, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle, 
  AlertDialogTrigger 
} from "@/components/ui/alert-dialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function ExamPage() {
  const router = useRouter();
  
  // State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answersMap, setAnswersMap] = useState<Record<string, string>>({});
  const [flaggedSet, setFlaggedSet] = useState<Set<string>>(new Set());
  const [timeLeft, setTimeLeft] = useState(MOCK_TEST_CONFIG.timeLimit);
  const [isSubmitDialogOpen, setIsSubmitDialogOpen] = useState(false);
  const [isMobileNavigatorOpen, setIsMobileNavigatorOpen] = useState(false);

  // Generate the full question set by repeating MOCK_QUESTIONS
  const examQuestions = [...Array(MOCK_TEST_CONFIG.totalQuestions)].map((_, i) => ({
    ...MOCK_QUESTIONS[i % MOCK_QUESTIONS.length],
    id: `q_${i + 1}`,
    questionText: `[Q${i + 1}] ${MOCK_QUESTIONS[i % MOCK_QUESTIONS.length].questionText}`
  }));

  const totalQuestions = examQuestions.length;
  const currentQuestion = examQuestions[currentQuestionIndex];
  
  // Custom Timer
  useEffect(() => {
    if (timeLeft <= 0) {
      router.push(`/test/result/${MOCK_TEST_CONFIG.testId}`);
      return;
    }
    
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [timeLeft, router]);

  // Format time
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Handlers
  const handleAnswerSelect = (option: string) => {
    setAnswersMap(prev => ({
      ...prev,
      [currentQuestion.id]: option
    }));
  };

  const handleToggleFlag = () => {
    setFlaggedSet(prev => {
      const newSet = new Set(prev);
      if (newSet.has(currentQuestion.id)) {
        newSet.delete(currentQuestion.id);
      } else {
        newSet.add(currentQuestion.id);
      }
      return newSet;
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsSubmitDialogOpen(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitDialogOpen(false);
    router.push(`/test/result/${MOCK_TEST_CONFIG.testId}`);
  };

  const answeredCount = Object.keys(answersMap).length;
  const flaggedCount = flaggedSet.size;

  // Render Option Card
  const OptionCard = ({ label, text }: { label: string, text: string }) => {
    const isSelected = answersMap[currentQuestion.id] === label;
    const isFlagged = flaggedSet.has(currentQuestion.id);
    
    return (
      <div 
        onClick={() => handleAnswerSelect(label)}
        className={`w-full cursor-pointer flex items-center p-4 rounded-xl border-2 transition-all group ${
          isSelected 
            ? "bg-blue-50 dark:bg-blue-900/20 border-blue-500" 
            : "bg-white dark:bg-slate-900/50 border-gray-200 dark:border-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/10 hover:border-blue-200"
        } ${isFlagged && isSelected ? "ring-2 ring-amber-400" : ""}`}
      >
        <div className={`w-9 h-9 flex items-center justify-center rounded-full border flex-shrink-0 ${
          isSelected 
            ? "bg-blue-500 border-blue-500 text-white" 
            : "bg-transparent border-gray-300 text-gray-500 group-hover:border-blue-300 group-hover:text-blue-500"
        }`}>
          <span className="font-semibold">{label}</span>
        </div>
        <div className="ml-4 flex-1 text-[15px] text-foreground">
          {text}
        </div>
        {isSelected && (
          <div className="ml-2 text-blue-500 flex-shrink-0">
            <Check className="h-5 w-5" />
          </div>
        )}
      </div>
    );
  };

  // Render Navigator Grid
  const NavigatorGrid = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-lg mb-4">Question Navigator</h3>
        <div className="flex justify-between items-center text-sm mb-4 bg-muted/50 p-2 rounded-lg">
          <div className="text-center px-2">
            <div className="text-blue-600 font-bold">{answeredCount}</div>
            <div className="text-xs text-muted-foreground">Answered</div>
          </div>
          <div className="w-px h-8 bg-border"></div>
          <div className="text-center px-2">
            <div className="text-amber-500 font-bold">{flaggedCount}</div>
            <div className="text-xs text-muted-foreground">Flagged</div>
          </div>
          <div className="w-px h-8 bg-border"></div>
          <div className="text-center px-2">
            <div className="text-gray-500 font-bold">{totalQuestions - answeredCount}</div>
            <div className="text-xs text-muted-foreground">Remaining</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2">
        {examQuestions.map((q, i) => {
          const isAnswered = !!answersMap[q.id];
          const isFlagged = flaggedSet.has(q.id);
          const isCurrent = i === currentQuestionIndex;
          
          let stateClasses = "bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-slate-800 dark:text-gray-400";
          if (isFlagged) {
            stateClasses = "bg-amber-400 text-white hover:bg-amber-500";
          } else if (isAnswered) {
            stateClasses = "bg-blue-500 text-white hover:bg-blue-600";
          }
          
          if (isCurrent) {
            stateClasses += " ring-2 ring-blue-600 ring-offset-2 dark:ring-offset-background";
          }

          return (
            <button
              key={q.id}
              onClick={() => {
                setCurrentQuestionIndex(i);
                setIsMobileNavigatorOpen(false);
              }}
              className={`w-full aspect-square rounded-md text-xs font-medium flex items-center justify-center transition-all ${stateClasses}`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>

      <div className="pt-4 border-t border-border mt-4">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Legend</h4>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-blue-500"></div>
            <span>Answered</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-amber-400"></div>
            <span>Flagged</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-gray-100 dark:bg-slate-800"></div>
            <span>Not visited</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-40 bg-background flex flex-col exam-focus">
      {/* EXAM TOP BAR */}
      <header className="h-14 border-b border-border bg-background flex items-center justify-between px-4 sm:px-6 flex-shrink-0">
        <div className="flex items-center gap-4">
          <span className="font-bold text-primary sm:text-base text-sm">CEE MockTest</span>
          <div className="hidden sm:block h-5 w-px bg-border"></div>
          <span className="hidden sm:block font-medium text-sm text-foreground">
            {MOCK_TEST_CONFIG.title}
          </span>
          <span className="text-sm text-muted-foreground">
            Q {currentQuestionIndex + 1} <span className="opacity-50">/ {totalQuestions}</span>
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className={`flex items-center gap-2 text-sm font-semibold ${
            timeLeft < 120 ? "text-red-500 animate-pulse" : 
            timeLeft < 300 ? "text-amber-500" : "text-muted-foreground"
          }`}>
            <Clock className="w-4 h-4" />
            {formatTime(timeLeft)}
          </div>
          
          <AlertDialog open={isSubmitDialogOpen} onOpenChange={setIsSubmitDialogOpen}>
            <AlertDialogTrigger asChild>
              <Button variant="outline" size="sm" className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 bg-transparent">
                Submit Test
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Submit your test?</AlertDialogTitle>
                <AlertDialogDescription>
                  You have answered {answeredCount} of {totalQuestions} questions.
                  {flaggedCount > 0 && ` ${flaggedCount} questions are flagged for review.`}
                  <br /><br />
                  This action cannot be undone. Are you sure you want to submit?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleSubmit} className="bg-red-600 hover:bg-red-700 text-white">
                  Submit Test
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="h-1 w-full bg-slate-100 dark:bg-slate-800 flex-shrink-0">
        <div 
          className="h-full bg-blue-600 transition-all duration-300 ease-out"
          style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
        />
      </div>

      {/* MAIN EXAM AREA */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Column: Question Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 relative pb-24">
          <div className="max-w-3xl mx-auto space-y-8">
            
            {/* Question Header */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="font-semibold text-lg">Question {currentQuestionIndex + 1}</h2>
                <div className="flex items-center gap-2 ml-auto">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    currentQuestion.subject === 'Physics' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30' :
                    currentQuestion.subject === 'Chemistry' ? 'bg-green-100 text-green-700 dark:bg-green-900/30' :
                    currentQuestion.subject === 'Botany' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30' :
                    currentQuestion.subject === 'Zoology' ? 'bg-violet-100 text-violet-700 dark:bg-violet-900/30' :
                    'bg-amber-100 text-amber-700 dark:bg-amber-900/30'
                  }`}>
                    {currentQuestion.subject}
                  </span>
                  <span className="text-xs text-muted-foreground hidden sm:inline-block">
                    {currentQuestion.chapter}
                  </span>
                  <span className="text-[10px] font-medium tracking-wider uppercase bg-muted text-muted-foreground px-2 py-1 rounded-sm">
                    {currentQuestion.source} {currentQuestion.year}
                  </span>
                </div>
              </div>
              
              <div className="text-[18px] leading-[1.7] text-foreground min-h-[80px]">
                {currentQuestion.questionText}
              </div>
            </div>

            {/* Answer Options */}
            <div className="space-y-3">
              <OptionCard label="A" text={currentQuestion.options.A} />
              <OptionCard label="B" text={currentQuestion.options.B} />
              <OptionCard label="C" text={currentQuestion.options.C} />
              <OptionCard label="D" text={currentQuestion.options.D} />
            </div>

            {/* Actions Row */}
            <div className="pt-2">
              <button 
                onClick={handleToggleFlag}
                className={`flex items-center gap-2 text-sm font-medium transition-colors px-3 py-2 rounded-md ${
                  flaggedSet.has(currentQuestion.id) 
                    ? "text-amber-600 bg-amber-50 dark:bg-amber-900/20" 
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                <Flag className={`w-4 h-4 ${flaggedSet.has(currentQuestion.id) ? "fill-amber-600" : ""}`} />
                {flaggedSet.has(currentQuestion.id) ? "Remove flag" : "Flag for review"}
              </button>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-8 mt-12 border-t border-border">
              <Button 
                variant="ghost" 
                onClick={handlePrev} 
                disabled={currentQuestionIndex === 0}
                className="text-muted-foreground gap-2"
              >
                <ArrowLeft className="w-4 h-4" /> Previous
              </Button>

              <div className="hidden sm:block">
                {!answersMap[currentQuestion.id] && (
                  <button onClick={handleNext} className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4">
                    Skip this question
                  </button>
                )}
              </div>

              {currentQuestionIndex < totalQuestions - 1 ? (
                <Button 
                  onClick={handleNext} 
                  className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
                >
                  Next Question <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button 
                  onClick={() => setIsSubmitDialogOpen(true)}
                  className="bg-green-600 hover:bg-green-700 text-white gap-2"
                >
                  Review & Submit <ArrowRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Navigator (Desktop) */}
        <div className="hidden md:block w-72 lg:w-80 border-l border-border bg-slate-50/50 dark:bg-card p-6 overflow-y-auto flex-shrink-0">
          <NavigatorGrid />
        </div>
      </div>

      {/* Mobile Floating Navigator Button */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <Sheet open={isMobileNavigatorOpen} onOpenChange={setIsMobileNavigatorOpen}>
          <SheetTrigger asChild>
            <Button size="icon" className="w-14 h-14 rounded-full bg-blue-600 text-white shadow-xl hover:bg-blue-700 hover:scale-105 transition-all">
              <LayoutGrid className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[80vh] rounded-t-2xl p-6 overflow-y-auto">
            <NavigatorGrid />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
