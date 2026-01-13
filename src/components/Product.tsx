"use client";

import Link from "next/link";
import { ProductType, StateProps } from "../../type";
import Image from "next/image";
import { Heart } from "lucide-react";
import FormattedPrice from "./FormattedPrice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToFavorite } from "@/redux/proSlice";
import toast, { Toaster } from "react-hot-toast";

interface Item {
  products: ProductType[];
}

const Product = ({ products }: Item) => {
  const { favoriteData } = useSelector((state: StateProps) => state.pro);
  const isFavorite = (productId: any) => {
    return favoriteData.some((favoriteItem) => favoriteItem._id === productId);
  };

  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-10">
      {products.map((item) => (
        <div
          key={item._id}
          className="relative bg-white group rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-0" />
          
          {/* Image container with enhanced styling */}
          <div className="relative overflow-hidden rounded-t-2xl">
            <Link href={{ pathname: `/${item?._id}`, query: { _id: item?._id } }}>
              <Image
                src={item?.image}
                alt="Product image"
                width={500}
                height={500}
                className="w-full h-80 object-contain lg:object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </Link>
            
            {/* Favorite heart with better styling */}
            <div className="absolute top-4 right-4 backdrop-blur-sm bg-white/80 rounded-full p-2 shadow-lg hover:scale-110 transition-transform duration-200">
              <Heart
                fill={isFavorite(item._id) ? "red" : "none"}
                onClick={() => {
                  dispatch(addToFavorite(item));
                  if (isFavorite(item?._id)) {
                    toast.error(`${item.title} removed from favorites!`);
                  } else {
                    toast.success(`${item.title} added to favorites!`);
                  }
                }}
                className={`w-5 h-5 cursor-pointer transition-all duration-200 ${
                  isFavorite(item._id) 
                    ? "text-red-500 hover:text-red-600" 
                    : "text-gray-400 hover:text-gray-600"
                }`}
              />
            </div>

            {/* Badge or tag (optional decorative element) */}
            <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              FEATURED
            </div>
          </div>

          {/* Content section with improved spacing and typography */}
          <div className="relative p-6 bg-white rounded-b-2xl space-y-3">
            <h3 className="text-gray-800 font-semibold text-lg line-clamp-2 group-hover:text-purple-600 transition-colors duration-300 min-h-[3.5rem]">
              {item?.title}
            </h3>
            
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                <FormattedPrice amount={item?.price} />
              </p>
              <div className="flex items-center space-x-1 text-yellow-400">
                <span className="text-sm">★★★★★</span>
              </div>
            </div>

            {/* Action buttons with enhanced styling */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <button
                onClick={() => {
                  dispatch(addToCart(item)),
                    toast.success(`${item?.title} is added to Cart!`);
                }}
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-4 rounded-xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg uppercase text-sm"
              >
                Add to Cart
              </button>
              <Link
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-xl transition-all duration-300 uppercase text-sm hover:scale-105"
                href={{ pathname: `/${item?._id}`, query: { _id: item?._id } }}
              >
                Info
              </Link>
            </div>
          </div>
        </div>
      ))}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#000",
            color: "#fff",
          },
        }}
      />
    </div>
  );
};

export default Product;
