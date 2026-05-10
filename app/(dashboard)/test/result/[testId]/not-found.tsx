import Link from "next/link";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResultNotFound() {
  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="mx-auto w-16 h-16 bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 rounded-full flex items-center justify-center">
          <AlertCircle className="w-8 h-8" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight mb-2">Test result not found</h1>
          <p className="text-muted-foreground">
            This test may not exist or has been deleted.
          </p>
        </div>
        <Button asChild variant="outline" className="mt-4">
          <Link href="/dashboard">← Go to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
}
