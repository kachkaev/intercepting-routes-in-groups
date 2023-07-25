import * as React from "react";
import { NavItem, type NavItemConfig } from "./nav-item";

export { type NavItemConfig };

export function NavItems({ configs }: { configs: NavItemConfig[] }) {
  return (
    <ul className="flex space-x-3">
      {configs.map((navItemConfig) => (
        <li key={navItemConfig.href}>
          <NavItem {...navItemConfig} />
        </li>
      ))}
    </ul>
  );
}
