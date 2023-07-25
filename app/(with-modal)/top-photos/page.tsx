import { Frame } from "@/components/frame";
import { type NavItemConfig, NavItems } from "@/components/nav";

const navItemConfigs: NavItemConfig[] = [42, 100, 142].map((id) => ({
  href: `/photo?id=${id}`,
  text: `Photo #${id}`,
}));

export default function Page() {
  return (
    <Frame
      borderClassName="border-purple-200"
      textClassName="text-purple-400"
      text="app/(with-modal)/top-photos/page.tsx"
    >
      <NavItems configs={navItemConfigs} />
    </Frame>
  );
}
