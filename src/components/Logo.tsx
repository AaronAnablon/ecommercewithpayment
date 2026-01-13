import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
  spanClassName?: string;
}

const Logo = ({ className, spanClassName }: Props) => {
  return (
    <Link
      href={"/"}
      className={cn(
        "text-zinc-950 text-xl font-bold inline-flex items-center justify-center decoration-[1px] group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300",
        className
      )}
    >
      <span
        className={cn(
          "bg-gradient-to-br from-blue-500 to-purple-600 text-white w-10 h-10 rounded-full inline-flex items-center justify-center text-2xl font-bold mr-2 group-hover:scale-110 group-hover:rotate-12 duration-300 shadow-lg shadow-purple-500/30",
          spanClassName
        )}
      >
        <Image height={40} width={40} src={'/favicon.ico'} alt="icon" className="rounded-full" />
      </span>
      Aaron Projects
    </Link>
  );
};

export default Logo;
