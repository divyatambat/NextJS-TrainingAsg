export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 bg-white/80 backdrop-blur dark:border-zinc-800/70 dark:bg-black/70">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-1 px-4 py-6 text-sm text-zinc-600 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <div>© {new Date().getFullYear()} Demo admin dashboard. All rights reserved.</div>
        <div className="sm:text-right">Built with Next.js + Tailwind</div>
      </div>
    </footer>
  );
}

