export default function AdminHeader() {
  return (
    <header className="flex flex-col gap-4 rounded-3xl border border-zinc-200/90 bg-zinc-950 p-6 text-white shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.24em] text-zinc-400">Admin console</p>
        <h2 className="mt-3 text-2xl font-semibold">Overview</h2>
      </div>
      <div className="flex flex-wrap gap-3">
        <button className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/10 transition hover:bg-white/15">
          Create report
        </button>
        <button className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/10 transition hover:bg-white/15">
          Sync data
        </button>
      </div>
    </header>
  );
}
