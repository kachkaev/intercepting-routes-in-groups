import { Frame } from "@/components/frame";
import { NavItems } from "@/components/nav";

export default function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <Frame
      borderClassName="border-pink-200"
      textClassName="text-pink-400"
      text="app/(with-modal)/@modal/(...)photo/[id]/page.tsx"
    >
      <div className="bg-slate-200 w-56 h-36 text-slate-700 flex items-center justify-center rounded-lg">
        intercepting photo #{id}
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
