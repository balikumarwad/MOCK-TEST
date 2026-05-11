import { Skeleton } from "@/components/ui/skeleton";

export default function LeaderboardLoading() {
  return (
    <div className="max-w-5xl mx-auto py-6 px-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-3">
            <Skeleton className="w-8 h-8 rounded-full" />
            <Skeleton className="h-8 w-40" />
          </div>
          <Skeleton className="h-4 w-64 mt-2" />
        </div>
        <Skeleton className="h-8 w-32" />
      </div>

      {/* Tabs */}
      <div className="flex flex-col items-center mb-10">
        <div className="flex gap-6 border-b w-full justify-center mb-2">
          <Skeleton className="h-6 w-20 mb-2" />
          <Skeleton className="h-6 w-24 mb-2" />
          <Skeleton className="h-6 w-20 mb-2" />
        </div>
        <Skeleton className="h-4 w-48" />
      </div>

      {/* Current User Pos */}
      <Skeleton className="w-full h-24 rounded-xl mb-10" />

      {/* Podium */}
      <div className="flex items-end justify-center gap-2 sm:gap-6 mb-12 h-64 pt-8">
        <div className="flex flex-col items-center w-28 sm:w-32">
          <Skeleton className="w-14 h-14 rounded-full mb-2" />
          <Skeleton className="h-4 w-16 mb-2" />
          <Skeleton className="w-full h-14 rounded-t-lg" />
        </div>
        <div className="flex flex-col items-center w-32 sm:w-40 z-10">
          <Skeleton className="w-16 h-16 rounded-full mb-2" />
          <Skeleton className="h-4 w-20 mb-2" />
          <Skeleton className="w-full h-20 rounded-t-lg" />
        </div>
        <div className="flex flex-col items-center w-28 sm:w-32">
          <Skeleton className="w-14 h-14 rounded-full mb-2" />
          <Skeleton className="h-4 w-16 mb-2" />
          <Skeleton className="w-full h-10 rounded-t-lg" />
        </div>
      </div>

      {/* List */}
      <Skeleton className="h-6 w-32 mb-4" />
      <Skeleton className="w-full max-w-md h-10 mb-4" />

      <div className="rounded-md border bg-card overflow-hidden mb-4">
        <div className="flex items-center px-4 py-3 bg-muted/50 border-b">
          <Skeleton className="h-4 w-full" />
        </div>
        <div className="divide-y">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center px-4 py-3 h-12">
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-4 w-60 hidden sm:block" />
      </div>
    </div>
  );
}
