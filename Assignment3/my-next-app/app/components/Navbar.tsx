"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/admin", label: "Admin" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur dark:border-zinc-800/70 dark:bg-black/70">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/admin" className="text-base font-semibold tracking-tight">
          Admin Dashboard
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "text-zinc-950 dark:text-zinc-50 font-medium"
                    : "text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}


