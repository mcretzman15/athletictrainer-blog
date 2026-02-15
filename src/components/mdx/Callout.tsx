import React from "react";

interface CalloutProps {
  type?: "info" | "warning" | "tip" | "mission";
  children: React.ReactNode;
}

export default function Callout({ type = "info", children }: CalloutProps) {
  const styles = {
    info: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      icon: "ℹ️",
      iconBg: "bg-blue-100",
      text: "text-blue-900",
    },
    warning: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      icon: "⚠️",
      iconBg: "bg-amber-100",
      text: "text-amber-900",
    },
    tip: {
      bg: "bg-green-50",
      border: "border-green-200",
      icon: "💡",
      iconBg: "bg-green-100",
      text: "text-green-900",
    },
    mission: {
      bg: "bg-gradient-to-r from-primary via-[#556B47] to-[#3D4F31]",
      border: "border-primary",
      icon: "🎯",
      iconBg: "bg-primary",
      text: "text-white",
    },
  };

  const style = styles[type];

  return (
    <div
      className={`${style.bg} ${style.border} ${style.text} border-l-4 rounded-r-lg p-6 my-6`}
    >
      <div className="flex gap-4">
        <div className={`${style.iconBg} rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0`}>
          <span className="text-lg">{style.icon}</span>
        </div>
        <div className="flex-grow prose-sm">{children}</div>
      </div>
    </div>
  );
}
