import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
  return (
    <div className="space-y-8 pb-8 exam-focus">
      {/* Hero Banner Skeleton */}
      <Skeleton className="h-40 w-full rounded-xl" />

      {/* Stats Row Skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="rounded-xl border border-border/50 p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-3 w-24" />
            </div>
            <div>
              <Skeleton className="h-8 w-16 mb-2" />
              <Skeleton className="h-3 w-20" />
            </div>
          </div>
        ))}
      </div>

      {/* Subject Cards Skeleton */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-5 w-20 rounded-full" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="rounded-xl border border-border/50 p-4 h-32 flex flex-col">
              <Skeleton className="h-10 w-10 rounded-full mb-3" />
              <div className="mt-auto space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-3 w-16" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Exam Pattern Skeleton */}
          <Skeleton className="h-32 w-full rounded-xl" />

          {/* Table Skeleton */}
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-4 w-16" />
            </div>
            
            <div className="rounded-md border border-border/50">
              <div className="border-b border-border/50 p-4">
                <div className="grid grid-cols-6 gap-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full hidden md:block" />
                  <Skeleton className="h-4 w-full hidden lg:block" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="border-b border-border/50 p-4 last:border-0">
                  <div className="grid grid-cols-6 gap-4">
                    <Skeleton className="h-4 w-full hidden sm:block" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-6 w-16 rounded-full hidden md:block" />
                    <Skeleton className="h-4 w-1/2 hidden lg:block" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leaderboard Skeleton */}
        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-16" />
          </div>
          
          <div className="rounded-xl border border-border/50">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 border-b border-border/50 last:border-0">
                <div className="flex items-center gap-3">
                  <Skeleton className="w-8 h-8 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-16" />
                  </div>
                </div>
                <div className="space-y-2 items-end flex flex-col">
                  <Skeleton className="h-5 w-12 rounded-md" />
                  <Skeleton className="h-3 w-10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
