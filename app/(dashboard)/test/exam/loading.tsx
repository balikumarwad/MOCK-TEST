import { Skeleton } from "@/components/ui/skeleton";

export default function ExamLoading() {
  return (
    <div className="fixed inset-0 z-40 bg-background flex flex-col exam-focus">
      {/* Top bar skeleton */}
      <div className="h-14 border-b border-border flex items-center justify-between px-6 flex-shrink-0">
        <div className="flex items-center gap-4">
          <Skeleton className="h-5 w-24" />
          <div className="h-5 w-px bg-border hidden sm:block"></div>
          <Skeleton className="h-4 w-32 hidden sm:block" />
        </div>
        <div className="flex items-center gap-4">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-8 w-24 rounded-md" />
        </div>
      </div>

      <div className="h-1 w-full bg-slate-100 dark:bg-slate-800 flex-shrink-0" />

      <div className="flex flex-1 overflow-hidden">
        {/* Left Column Skeleton */}
        <div className="flex-1 p-6 md:p-8 space-y-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-5 w-16 rounded-full" />
                <Skeleton className="h-4 w-24" />
              </div>
              <div className="space-y-2 pt-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[90%]" />
                <Skeleton className="h-4 w-[60%]" />
              </div>
            </div>

            <div className="space-y-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-full flex items-center p-4 rounded-xl border border-border">
                  <Skeleton className="w-9 h-9 rounded-full flex-shrink-0" />
                  <Skeleton className="h-4 w-2/3 ml-4" />
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Skeleton className="h-8 w-32" />
            </div>

            <div className="flex items-center justify-between pt-8 mt-12 border-t border-border">
              <Skeleton className="h-10 w-28" />
              <Skeleton className="h-10 w-36" />
            </div>
          </div>
        </div>

        {/* Right Column Skeleton */}
        <div className="hidden md:block w-72 lg:w-80 border-l border-border p-6 flex-shrink-0">
          <Skeleton className="h-6 w-40 mb-6" />
          <Skeleton className="h-16 w-full rounded-lg mb-6" />
          
          <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: 40 }).map((_, i) => (
              <Skeleton key={i} className="w-full aspect-square rounded-md" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
