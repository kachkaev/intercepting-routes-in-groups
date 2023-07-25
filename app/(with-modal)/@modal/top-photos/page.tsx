import { Frame } from "@/components/frame";

export default function Default() {
  return (
    <Frame
      borderClassName="border-purple-200"
      textClassName="text-purple-400"
      text="app/(with-modal)/@modal/top-photos/page.tsx"
    >
      <span className="opacity-50 text-sm">empty (avoids not-found)</span>
    </Frame>
  );
}
