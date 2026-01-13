"use client";
import Link from "next/link";
import Logo from "./Logo";
import { Heart, ShoppingBagIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { navigation } from "@/constants/data";
import { signIn, useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { StateProps } from "../../type";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  const { productData, favoriteData } = useSelector(
    (state: StateProps) => state.pro
  );

  return (
    <div className="w-full h-20 border-b-[1px] border-b-white/20 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 text-zinc-700 sticky top-0 z-50 backdrop-blur-xl shadow-lg shadow-purple-100/50">
      <div className="max-w-screen-xl mx-auto h-full flex items-center justify-between px-4 xl:px-0">
        {/* Logo */}
        <Logo className="hover:scale-105 transition-transform duration-300" />
        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-7 text-sm uppercase font-semibold">
          {navigation.map((item) => (
            <Link href={item?.href} key={item._id}>
              <li
                className={`hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 cursor-pointer duration-300 relative overflow-hidden group transform hover:-translate-y-0.5 transition-all ${
                  item.href === pathname && "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
                }`}
              >
                {item?.title}
                <span
                  className={`absolute h-[2px] w-full bg-gradient-to-r from-blue-600 to-purple-600 left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 rounded-full ${
                    item.href === pathname && "translate-x-0"
                  }`}
                />
              </li>
            </Link>
          ))}
        </ul>
        {/* icons */}
        <div className="flex items-center gap-x-6">
          <Link
            href="/wishlist"
            className="hover:text-pink-600 cursor-pointer duration-300 relative group transform hover:scale-110 transition-all"
          >
            <div className="relative p-2 rounded-full group-hover:bg-pink-50 transition-colors duration-300">
              <Heart className="w-6 h-6 group-hover:fill-pink-600 transition-all duration-300" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-br from-pink-500 to-rose-500 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold shadow-lg shadow-pink-500/50 group-hover:scale-110 transition-transform duration-300">
                {favoriteData ? favoriteData.length : 0}
              </span>
            </div>
          </Link>
          <Link
            href="/cart"
            className="hover:text-blue-600 cursor-pointer duration-300 relative group transform hover:scale-110 transition-all"
          >
            <div className="relative p-2 rounded-full group-hover:bg-blue-50 transition-colors duration-300">
              <ShoppingBagIcon className="w-6 h-6 transition-all duration-300" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-br from-blue-500 to-purple-500 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold shadow-lg shadow-blue-500/50 group-hover:scale-110 transition-transform duration-300">
                {productData ? productData.length : 0}
              </span>
            </div>
          </Link>
          {session ? (
            <Link
              href="/profile"
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 cursor-pointer duration-300 text-sm uppercase font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105 transition-all"
            >
              Profile
            </Link>
          ) : (
            <button
              onClick={() => signIn()}
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 cursor-pointer duration-300 text-sm uppercase font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105 transition-all"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
