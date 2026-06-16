export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-zinc-200 bg-white p-6">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-950">
          Settings
        </h1>
        <p className="mt-2 text-sm text-zinc-600">
          Update site settings here.
        </p>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">
          Configuration
        </h2>

        <div className="mt-4 space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-zinc-700">
              Feature flag
            </span>
            <select className="mt-2 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm text-zinc-900 shadow-sm">
              <option>Enabled</option>
              <option>Disabled</option>
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-zinc-700">
              Default visibility
            </span>
            <select className="mt-2 w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm text-zinc-900 shadow-sm">
              <option>Public</option>
              <option>Unlisted</option>
              <option>Private</option>
            </select>
          </label>

          <button className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800">
            Save settings
          </button>
        </div>
      </section>
    </div>
  );
}

