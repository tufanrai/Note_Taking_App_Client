"use client";
import React from "react";
import NavigationComp from "@/components/Navigation/NavigationComp";
import { HigherOrderComp } from "@/components/Navigation/HigherOrderComp";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="w-full h-screen flex justify-center bg-linear-to-r from-neutral-300 to-stone-300 overflow-hidden">
      <NavigationComp>{children}</NavigationComp>
    </div>
  );
};

export default HigherOrderComp(layout);
