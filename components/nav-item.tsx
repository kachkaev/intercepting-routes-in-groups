"use client";

import { cn } from "@/lib/cn";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export type NavItemConfig = { href: string; text: React.ReactNode };

export function NavItem({
  href,
  text,
  className,
}: NavItemConfig & { className?: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const stringifiedSearchParams = searchParams.toString();
  const currentHref = `${pathname}${
    stringifiedSearchParams ? `?${stringifiedSearchParams}` : ""
  }`;

  const isActive = href === currentHref;

  if (isActive)
    return (
      <span className={cn("rounded-lg bg-slate-200 p-1", className)}>
        {text}
      </span>
    );

  return (
    <Link href={href} className={cn("border-b p-1 pb-0 mb-1", className)}>
      {text}
    </Link>
  );
}
