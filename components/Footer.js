import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 font-mono text-xs text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} {profile.name}. Built with Next.js.</span>
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          status: online
        </span>
      </div>
    </footer>
  );
}
