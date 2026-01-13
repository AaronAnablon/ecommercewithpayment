"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import { sliderOne, sliderTwo, sliderThree } from "@/assets";
import Image from "next/image";
import { Clock, Smartphone, Map, MailPlus, Sparkles, ArrowRight } from "lucide-react";

const Banner = () => {
  const [dotActive, setDotActive] = useState(0);
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 3000,
    beforeChange: (prev: any, next: any) => {
      setDotActive(next);
    },
    appendDots: (dots: any) => (
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "67%",
          transform: "translate(-50%, 0)",
        }}
      >
        <ul
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        style={
          i === dotActive
            ? {
              width: "60px",
              height: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)",
              cursor: "pointer",
              borderRadius: "4px",
              transition: "all 0.3s ease",
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)",
            }
            : {
              width: "40px",
              height: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255, 255, 255, 0.3)",
              cursor: "pointer",
              borderRadius: "4px",
              transition: "all 0.3s ease",
            }
        }
      ></div>
    ),
  };
  return (
    <div className="lg:h-[600px] relative">
      <Slider {...settings}>
        <div className="w-full py-32 lg:py-0 lg:h-[600px] bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="w-full lg:w-1/3 hidden lg:inline-block bg-gradient-to-br from-indigo-100 to-purple-100 h-full z-0 relative">
            <Image
              src={sliderOne}
              alt="sliderone"
              className="absolute object-cover right-0 lg:-right-48 lg:h-[600px] drop-shadow-2xl"
              priority
            />
          </div>
          <div className="lg:absolute lg:top-1/2 lg:left-2/3 transform lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col items-center gap-6 z-20">
            <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200/50">
              <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
              <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Premium Collection</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold uppercase bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent leading-tight">
              Latest<br />Products Arrive
            </h1>
            <p className="w-96 text-center text-gray-600 text-lg leading-relaxed">
              Browse our premium collection and find the perfect products with exceptional quality
            </p>
            <button className="group relative text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Shop Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        <div className="w-full py-32 lg:py-0 lg:h-[600px] bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="w-full lg:w-1/3 hidden lg:inline-block h-full bg-gradient-to-br from-cyan-100 to-blue-100 z-0 relative">
            <Image
              src={sliderTwo}
              alt="sliderTwo"
              className="absolute object-cover right-0 lg:-right-48 h-full drop-shadow-2xl"
              loading="lazy"
            />
          </div>
          <div className="lg:absolute lg:top-1/2 lg:left-2/3 transform lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col items-center gap-6 z-20">
            <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-cyan-200/50">
              <Sparkles className="w-4 h-4 text-cyan-600 animate-pulse" />
              <span className="text-sm font-medium bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Best Sellers</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold uppercase bg-gradient-to-r from-gray-900 via-blue-900 to-cyan-900 bg-clip-text text-transparent leading-tight">
              Shop The<br />Best Deals
            </h1>
            <p className="w-96 text-center text-gray-600 text-lg leading-relaxed">
              Discover amazing products at unbeatable prices and get the one you've been dreaming of
            </p>
            <button className="group relative text-base font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-full px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
              View Collection
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        <div className="w-full py-32 lg:py-0 lg:h-[600px] bg-gradient-to-br from-violet-50 via-fuchsia-50 to-pink-50 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute bottom-20 right-40 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-20 left-20 w-72 h-72 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="w-full lg:w-1/3 hidden lg:inline-block h-full bg-gradient-to-br from-violet-100 to-fuchsia-100 z-0 relative">
            <Image
              src={sliderThree}
              alt="sliderThree"
              className="absolute object-cover -right-0 lg:-right-48 h-full drop-shadow-2xl"
              loading="lazy"
            />
          </div>
          <div className="lg:absolute lg:top-1/2 lg:left-2/3 transform lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col items-center gap-6 z-20">
            <div className="flex items-center gap-2 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-violet-200/50">
              <Sparkles className="w-4 h-4 text-violet-600 animate-pulse" />
              <span className="text-sm font-medium bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Trending Now</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold uppercase bg-gradient-to-r from-gray-900 via-violet-900 to-fuchsia-900 bg-clip-text text-transparent leading-tight">
              New Arrivals<br />Every Week
            </h1>
            <p className="w-96 text-center text-gray-600 text-lg leading-relaxed">
              Explore trending products and discover the latest items that everyone is talking about
            </p>
            <button className="group relative text-base font-semibold text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 rounded-full px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Explore Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </Slider>
      <div className="h-20 bg-white absolute left-1/2 -bottom-10 transform -translate-x-1/2 hidden lg:inline-flex items-center gap-x-12 p-10 z-30 shadow-lg">
        <div className="flex items-center gap-5 w-60">
          <Clock className="text-designColor w-8 h-8" />
          <div>
            <p>Sunday - Friday</p>
            <p className="font-semibold">8:00 - 21:00</p>
          </div>
        </div>
        <div className="flex items-center gap-5 w-60">
          <Smartphone className="text-designColor w-8 h-8" />
          <div>
            <a href="tel:+639273420007">+63 927 342 0007</a>
            <p className="font-semibold">Call for Inquiries</p>
          </div>
        </div>
        <div className="flex items-center gap-5 w-60">
          <Map className="text-designColor w-8 h-8" />
          <div>
            <p>Baguio City, Philippines</p>
            <p className="font-semibold">Address</p>
          </div>
        </div>
        <div className="flex items-center gap-5 w-60">
          <MailPlus className="text-designColor w-8 h-8" />
          <div>
            <p>Get an invoice</p>
            <a href="mailto: @aaronanablon6@gmail.com" className="font-semibold">Email me @aaronanablon6@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
