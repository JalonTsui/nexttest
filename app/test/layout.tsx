"use client";
import React, { Suspense } from "react";
import Loading from "./loading";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Suspense fallback={<Loading></Loading>}>{children}</Suspense>
    </div>
  );
}
