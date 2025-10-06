import React from "react";
import NavigationComp from "@/components/Navigation/NavigationComp";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="w-full h-screen flex justify-center bg-neutral-100 overflow-hidden">
      <NavigationComp>{children}</NavigationComp>
    </div>
  );
};

export default layout;
