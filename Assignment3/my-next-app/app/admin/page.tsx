export default function AdminPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-zinc-200/90 bg-zinc-50 p-6">
        <p className="text-sm uppercase tracking-[0.24em] text-zinc-500">
          Admin dashboard
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-zinc-950">
          Admin Overview
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-600">
          This is the admin landing page. Sidebar navigation and the admin
          layout (header + footer) are provided by the route group under
          <span className="font-medium text-zinc-900">/admin</span>.
        </p>
      </section>

      <section className="rounded-3xl border border-zinc-200/90 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-zinc-950">What you can do</h2>
        <ul className="mt-3 list-disc pl-5 text-sm text-zinc-600">
          <li>Review site activity</li>
          <li>Manage users</li>
          <li>Update settings</li>
        </ul>
      </section>
    </div>
  );
}

