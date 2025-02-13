import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="w-full px-6 md:px-0 max-w-6xl mx-auto pt-[120px]">{children}</div>;
}
