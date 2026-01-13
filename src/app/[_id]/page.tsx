import { getProducts } from "@/helpers";
import { ProductType } from "../../../type";
import Container from "@/components/Container";
import Image from "next/image";
import FormattedPrice from "@/components/FormattedPrice";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const page = async ({ searchParams }: Props) => {
  const products = await getProducts();
  const _idString = searchParams?._id;
  const _id = Number(_idString);

  const singleProduct = (_id: number) => {
    const item = products.find((product: ProductType) => product._id === _id);
    return item;
  };

  const product = singleProduct(_id);

  return (
    <Container className="flex items-center flex-col md:flex-row gap-8 px-4 xl:px-0 py-10">
      {/* Image Section with Enhanced Visual Effects */}
      <div className="w-full md:w-1/2 relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-designColor via-yellow-500 to-orange-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
        <div className="relative rounded-2xl shadow-2xl flex items-center justify-center border border-zinc-200">
          <Image
            src={product?.image}
            alt="product image"
            width={500}
            height={500}
            className="transform transition-all hover:scale-10 hover:rotate-2 duration-700 drop-shadow-2xl"
          />
          {product?.isNew && (
            <div className="absolute top-6 right-6 bg-gradient-to-r from-designColor to-orange-400 text-black px-6 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse">
              NEW
            </div>
          )}
        </div>
      </div>

      {/* Product Details Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        {/* Title */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight mb-2 bg-gradient-to-r from-zinc-900 to-zinc-700 bg-clip-text">
            {product?.title}
          </h1>
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <span className="px-3 py-1 bg-zinc-100 rounded-full font-medium">
              {product?.category}
            </span>
          </div>
        </div>

        {/* Price Section */}
        <div className="bg-gradient-to-br from-zinc-50 to-zinc-100 p-6 rounded-2xl border-2 border-zinc-200 shadow-lg">
          <div className="flex items-baseline gap-4 mb-3">
            <FormattedPrice
              amount={product?.price}
              className="text-4xl font-bold text-zinc-900"
            />
            <FormattedPrice
              amount={product?.previousPrice}
              className="text-xl text-zinc-400 line-through"
            />
          </div>
          <div className="flex items-center gap-2 bg-green-50 border-2 border-green-200 px-4 py-2 rounded-xl">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-green-700 font-semibold">You save </span>
            <FormattedPrice
              amount={product?.previousPrice - product?.price}
              className="text-lg font-bold text-green-700"
            />
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="group relative bg-gradient-to-r from-designColor to-orange-400 text-black px-8 py-4 font-bold text-lg rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
          <span className="relative z-10 flex items-center justify-center gap-2">
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Add to Cart
          </span>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
        </button>

        {/* Description */}
        <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-md">
          <h3 className="text-lg font-bold text-zinc-900 mb-3 flex items-center gap-2">
            <svg className="w-5 h-5 text-designColor" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Product Details
          </h3>
          <p className="text-zinc-600 leading-relaxed">{product?.description}</p>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center border border-blue-200">
            <svg className="w-8 h-8 mx-auto mb-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-xs font-semibold text-blue-900">Quality Assured</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl text-center border border-purple-200">
            <svg className="w-8 h-8 mx-auto mb-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-xs font-semibold text-purple-900">Fast Delivery</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl text-center border border-green-200">
            <svg className="w-8 h-8 mx-auto mb-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <p className="text-xs font-semibold text-green-900">Secure Payment</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default page;
