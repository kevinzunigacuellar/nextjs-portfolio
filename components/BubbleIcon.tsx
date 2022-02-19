import { ReactNode } from "react";

export default function BubbleIcon({
  svg,
  className = "",
}: {
  svg: ReactNode;
  className: string;
}) {
  return <span className={className}>{svg}</span>;
}
