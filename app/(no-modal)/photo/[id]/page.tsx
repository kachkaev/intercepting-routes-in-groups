import { Frame } from "@/components/frame";
import { NavItems } from "@/components/nav";

export default function Default({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <Frame
      borderClassName="border-red-200"
      textClassName="text-red-400"
      text="app/(no-modal)/photo/[id]/page.tsx"
    >
      <div className="bg-slate-300 w-72 h-48 text-slate-700 flex items-center justify-center rounded-lg">
        standalone photo #{id}
      </div>
      <NavItems
        configs={[
          { href: `/photo/${+id - 1}`, text: `← Photo #${+id - 1}` },
          { href: `/photo/${+id + 1}`, text: `Photo #${+id + 1} →` },
        ]}
      />
    </Frame>
  );
}
