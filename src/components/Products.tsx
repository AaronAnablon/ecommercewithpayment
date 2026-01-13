import Container from "./Container";
import Link from "next/link";
import { Smartphone, ShieldCheck, Watch, Sparkles } from "lucide-react";
import Product from "./Product";
import { getProducts } from "@/helpers";

const Products = async () => {
  const products = await getProducts();

  const categories = [
    {
      href: "/systems",
      icon: Smartphone,
      label: "Mobile",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      href: "/ai",
      icon: ShieldCheck,
      label: "Phone Case",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      href: "/portfolio",
      icon: Watch,
      label: "Watch",
      gradient: "from-orange-500 to-red-500",
    },
    {
      href: "/mobile",
      icon: Sparkles,
      label: "Others",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="mt-16 mb-60">
      <Container>
        <div className="flex flex-col gap-6 items-center">
          {/* Header Section */}
          <div className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Choose Your Category
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              Discover our premium collection of tech products and accessories
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8 w-full max-w-5xl">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Link
                  key={index}
                  href={category.href}
                  className="group relative overflow-hidden rounded-2xl bg-white border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative p-6 md:p-8 flex flex-col items-center justify-center space-y-3">
                    <div className="p-4 rounded-xl bg-gray-50 group-hover:bg-white/20 transition-colors duration-300">
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-gray-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <p className="text-base md:text-lg font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                      {category.label}
                    </p>
                  </div>

                  {/* Corner Accent */}
                  <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${category.gradient} opacity-10 rounded-bl-full group-hover:opacity-0 transition-opacity duration-300`} />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Products Section */}
        <Product products={products} />
      </Container>
    </div>
  );
};

export default Products;
