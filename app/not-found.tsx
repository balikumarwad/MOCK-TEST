import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground font-sans text-center px-4">
      <h1 className="text-8xl md:text-9xl font-bold text-muted-foreground/20 mb-4 tracking-tighter">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        Page not found
      </h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Button asChild size="lg">
        <Link href="/dashboard">Go to Dashboard</Link>
      </Button>
    </div>
  );
}
