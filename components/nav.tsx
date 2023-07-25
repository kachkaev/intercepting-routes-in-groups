import { cn } from "@/lib/cn";
import Link from "next/link";
import * as React from "react";

export type NavItem = { href: string; text: React.ReactNode };

export function NavItem({
  href,
  text,
  className,
}: NavItem & { className?: string }) {
  return (
    <Link href={href} className={cn("border-b", className)}>
      {text}
    </Link>
  );
}

export function NavItems({ navItems }: { navItems: NavItem[] }) {
  return (
    <ul className="flex space-x-3">
      {navItems.map((navItem) => (
        <li key={navItem.href}>
          <NavItem {...navItem} />
        </li>
      ))}
    </ul>
  );
}
