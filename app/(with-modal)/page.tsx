import { Frame } from "@/components/frame";
import { NavItem, NavItems } from "@/components/nav";

const navItems: NavItem[] = Array.from({ length: 5 }).map((_, index) => ({
  href: `/photo?id=${index + 1}`,
  text: `Photo #${index + 1}`,
}));

export default function Page() {
  return (
    <Frame
      borderClassName="border-indigo-200"
      textClassName="text-indigo-400"
      text="app/(with-modal)/page.tsx"
    >
      <NavItems navItems={navItems} />
    </Frame>
  );
}
