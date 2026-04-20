"use client";

import type { ReactNode } from "react";

interface CommentCardProps {
  time: string;
  children: ReactNode;
  className?: string;
}

/** Avatar — circular photo of Nomi Reiss */
function Avatar() {
  return (
    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-[#E5E5E5]">
      <img
        src="/nomi-avatar.png"
        alt="Nomi Reiss"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

/** Inline @mention tag */
export function Mention({ children }: { children: ReactNode }) {
  return <span className="text-[#4497F7] font-medium">{children}</span>;
}

/** Bold inline text */
export function Bold({ children }: { children: ReactNode }) {
  return <strong className="font-bold text-[#0A0A0A]">{children}</strong>;
}

export default function CommentCard({ time, children, className }: CommentCardProps) {
  return (
    <div
      className={`absolute z-20 w-[340px] bg-white rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-none shadow-[0px_8px_32px_rgba(0,0,0,0.14)] p-4 flex gap-3 ${className ?? ""}`}
    >
      <Avatar />
      <div className="flex flex-col gap-2 min-w-0 flex-1">
        {/* Header */}
        <div className="flex items-baseline gap-2">
          <span className="text-[#0A0A0A] text-sm font-medium leading-5">Nomi Reiss</span>
          <span className="text-[#A3A3A3] text-xs font-normal leading-5">{time}</span>
        </div>
        {/* Body */}
        <div className="text-[#0A0A0A] text-sm leading-[1.6] space-y-2">
          {children}
        </div>
      </div>
    </div>
  );
}
