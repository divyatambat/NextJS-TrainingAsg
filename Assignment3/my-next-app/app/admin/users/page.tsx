export default function AdminUsersPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-zinc-200 bg-white p-6">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-950">
          Users
        </h1>
        <p className="mt-2 text-sm text-zinc-600">
          Manage users here.
        </p>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">
          Example users
        </h2>
        <div className="mt-4 overflow-hidden rounded-xl border border-zinc-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-50">
              <tr className="border-b border-zinc-200">
                <th className="p-3 font-medium text-zinc-700">Name</th>
                <th className="p-3 font-medium text-zinc-700">Role</th>
                <th className="p-3 font-medium text-zinc-700">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Ava Johnson</td>
                <td className="p-3 text-zinc-700">Editor</td>
                <td className="p-3 text-zinc-700">Active</td>
              </tr>
              <tr className="border-b border-zinc-200">
                <td className="p-3 font-medium text-zinc-900">Noah Smith</td>
                <td className="p-3 text-zinc-700">Author</td>
                <td className="p-3 text-zinc-700">Active</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-zinc-900">Mia Chen</td>
                <td className="p-3 text-zinc-700">Viewer</td>
                <td className="p-3 text-zinc-700">Suspended</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

