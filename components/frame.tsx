import { cn } from "@/lib/cn";

export function Frame({
  borderClassName,
  children,
  textClassName,
  text,
  type = "file",
}: {
  borderClassName: string;
  children?: React.ReactNode;
  textClassName: string;
  text: React.ReactNode;
  type?: "file" | "slot" | undefined;
}) {
  return (
    <div
      className={cn(
        "px-3 py-2 rounded-lg mt-2",
        borderClassName,
        type === "slot" && "border-dashed",
        type === "file" ? "border-8" : "border-4"
      )}
    >
      <div
        className={cn(
          "pb-0.5",
          textClassName,
          type === "file" ? "text-base" : "text-sm"
        )}
      >
        {text}
      </div>
      {children}
    </div>
  );
}
