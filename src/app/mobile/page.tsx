import Container from "@/components/Container";
import Product from "@/components/Product";
import { getAccessories } from "@/helpers";
import React from "react";

const page = async () => {
  const products = await getAccessories();
  return (
    <Container>
      <div className="border-b-[1px] border-b-zinc-400 pb-4 flex items-center justify-between">
        <h2>Mobile and Desktop Applications</h2>
        <p>Get the App you want</p>
      </div>
      <p className="mt-4 text-zinc-500 font-semibold">
        Showing all {products.length} results
      </p>
      <Product products={products} />
    </Container>
  );
};

export default page;
