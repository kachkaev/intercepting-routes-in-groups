import * as React from "react";
import { Frame } from "../../components/frame";

export default async function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <Frame
      borderClassName="border-sky-200"
      textClassName="text-sky-400"
      text={`app/(with-modal)/layout.tsx`}
    >
      <Frame
        borderClassName="border-sky-200"
        textClassName="text-sky-400"
        text="{children}"
        type="slot"
      >
        {children}
      </Frame>
      <Frame
        borderClassName="border-sky-200"
        textClassName="text-sky-400"
        text="{modal}"
        type="slot"
      >
        {modal}
      </Frame>
    </Frame>
  );
}
