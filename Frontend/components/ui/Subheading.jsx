import React from "react";
import { cn } from "@/lib/utils";

const Subheading = ({ text, className }) => {
  return (
    <div className={cn("flex items-center", className)}>
      <div className="w-10 h-[2px] bg-orange-500 mr-2"></div>
      <span className="text-orange-500 font-semibold text-sm">
        {text}
      </span>
    </div>
  );
};

export default Subheading;
