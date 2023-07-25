import { Frame } from "@/components/frame";
import { NavItems } from "@/components/nav";

export default function Default() {
  return (
    <Frame
      borderClassName="border-orange-200"
      textClassName="text-orange-400"
      text="app/(no-modal)/best-photo/page.tsx"
    >
      <NavItems configs={[{ href: `/photo?id=999`, text: `Photo #999` }]} />
    </Frame>
  );
}
