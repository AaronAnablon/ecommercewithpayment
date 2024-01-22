import Container from "./Container";
import Link from "next/link";
import { Bot, LayoutGrid, FolderGit2, GalleryVerticalEnd } from "lucide-react";
import Product from "./Product";
import { getProducts } from "@/helpers";

const Products = async () => {
  const products = await getProducts();

  return (
    <div className="mt-10 mb-60">
      <Container>
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-3xl font-semibold">Choose a category</h2>
          <p className="text-lg text-center">
            Explore dozens of customized layouts or samples.
          </p>
          <div className="text-zinc-500 flex items-center gap-2 md:gap-6 mt-5">
            <Link
              href={"/systems"}
              className="flex gap-2 hover:text-black cursor-pointer duration-200"
            >
              <FolderGit2 />
              <p>Mobile</p>
            </Link>
            <div className="h-7 w-[1px] bg-designColor inline-flex" />
            <Link
              href={"/ai"}
              className="flex items-center gap-2 hover:text-black cursor-pointer duration-200"
            >
              <Bot />
              <p>Phone Case</p>
            </Link>
            <div className="h-7 w-[1px] bg-designColor inline-flex" />

            <Link
              href={"/portfolio"}
              className="flex items-center gap-2 hover:text-black cursor-pointer duration-200"
            >
              <GalleryVerticalEnd />
              <p>Watch</p>
            </Link>
            <div className="h-7 w-[1px] bg-designColor inline-flex" />

            <Link
              href={"/mobile"}
              className="flex items-center gap-2 hover:text-black cursor-pointer duration-200"
            >
              <LayoutGrid />
              <p>Others</p>
            </Link>
          </div>
        </div>
        <Product products={products} />
      </Container>
    </div>
  );
};

export default Products;
