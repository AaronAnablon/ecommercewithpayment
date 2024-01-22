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
        "text-zinc-950 text-xl inline-flex items-center justify-center decoration-[1px] group",
        className
      )}
    >
      <span
        className={cn(
          "bg-zinc-200 text-black w-8 h-8 rounded-full inline-flex items-center justify-center text-2xl font-bold mr-1 group-hover:bg-blue-700 duration-200",
          spanClassName
        )}
      >
        <Image height={40} width={40} src={'/favicon.ico'} alt="icon" />
      </span>
      Aaron Projects
    </Link>
  );
};

export default Logo;
