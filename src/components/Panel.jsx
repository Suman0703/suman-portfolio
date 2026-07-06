import React from "react";

export default function Panel({ children, className = "" }) {
  return (
    <div
      className={
        "border border-dashed border-zinc-800 bg-zinc-950/40 p-5 sm:p-6 " +
        className
      }
    >
      {children}
    </div>
  );
}