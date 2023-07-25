import * as React from "react";
import { NavItem, type NavItemConfig } from "./nav-item";

export function NavItems({ navItems }: { navItems: NavItemConfig[] }) {
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
