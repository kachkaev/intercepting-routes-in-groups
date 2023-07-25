import * as React from "react";
import { Frame } from "../../components/frame";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Frame
      borderClassName="border-amber-200"
      textClassName="text-amber-400"
      text={`app/(no-modal)/layout.tsx`}
    >
      <Frame
        borderClassName="border-amber-200"
        textClassName="text-amber-400"
        text="{children}"
        type="slot"
      >
        {children}
      </Frame>
    </Frame>
  );
}
