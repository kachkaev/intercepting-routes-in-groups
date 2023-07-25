import { Frame } from "@/components/frame";

export default function Default() {
  return (
    <Frame
      borderClassName="border-indigo-200"
      textClassName="text-indigo-400"
      text="app/(with-modal)/@modal/page.tsx"
    >
      <span className="opacity-50 text-sm">empty (avoids not-found)</span>
    </Frame>
  );
}
