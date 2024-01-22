import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import { navigation } from "@/constants/data";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#180735] mt-10 py-10 text-zinc-300">
      <Container className="flex flex-wrap gap-2 items-center justify-between">
        <Logo className="text-white" spanClassName="bg-white text-black" />
        <ul className="flex gap-6 items-center justify-center">
          {navigation.map((item) => (
            <Link href={item?.href} key={item?._id}>
              <li className="hover:text-white duration-200">{item?.title}</li>
            </Link>
          ))}
        </ul>
        <div className="grid justify-center items-center gap-1">
          <p>Follow me @<a target="blank" href="https://www.facebook.com/techibot">https://www.facebook.com/techibot</a></p>
          <a href="https://aaron-anablon.vercel.app/" target="black">About Developer</a>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
