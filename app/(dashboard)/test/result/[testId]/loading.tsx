import { Skeleton } from "@/components/ui/skeleton";

export default function ResultLoading() {
  return (
    <div className="max-w-[900px] mx-auto py-8 px-4 space-y-10">
      
      {/* Header Skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-4 w-32" />
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
          <div className="space-y-2">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-4 w-48" />
          </div>
          <Skeleton className="h-24 w-32 rounded-xl hidden md:block" />
        </div>
      </div>

      {/* Score Hero Card Skeleton */}
      <Skeleton className="h-[300px] md:h-48 w-full rounded-xl" />

      {/* Subject Breakdown Skeleton */}
      <div className="space-y-6">
        <div className="flex justify-between items-end border-b pb-2 border-border/50">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-64 hidden sm:block" />
        </div>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="flex sm:items-center gap-4">
              <Skeleton className="h-5 w-[120px]" />
              <Skeleton className="h-3 flex-1 rounded-full" />
              <Skeleton className="h-5 w-[180px] hidden sm:block" />
            </div>
          ))}
        </div>
      </div>

      {/* Time Analysis Skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-6 w-32 border-b pb-2" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map(i => (
            <Skeleton key={i} className="h-20 w-full rounded-lg" />
          ))}
        </div>
      </div>

      {/* Marking Breakdown Skeleton (skipped for simplicity, but let's add it) */}
      <div className="space-y-4">
        <Skeleton className="h-6 w-64 border-b pb-2" />
        <Skeleton className="h-40 w-full rounded-xl" />
      </div>

      {/* Question Review Skeleton */}
      <div className="space-y-6 pt-4">
        <div className="flex justify-between border-b pb-4">
          <div className="space-y-2">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-4 w-32" />
          </div>
          <Skeleton className="h-8 w-32 rounded-md" />
        </div>

        <div className="flex gap-6 border-b">
          <Skeleton className="h-6 w-16 mb-2" />
          <Skeleton className="h-6 w-16 mb-2" />
          <Skeleton className="h-6 w-16 mb-2" />
          <Skeleton className="h-6 w-16 mb-2" />
        </div>

        <div className="space-y-3">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <Skeleton key={i} className="h-14 w-full rounded-xl" />
          ))}
        </div>
      </div>

    </div>
  );
}
