import React from "react";
import Product from "../product/Product";
import {products} from "../../../src/data";

function ProductList() {
  return (
    <div className="h-screen flex items-center flex-col content-center pt-7 pb-7 pl-14 pr-14 max-[480px]:p-0 max-[480px]:w-full">
      <div className="w-sixty max-[480px]:w-full">
        <h1 className="text-5xl max-[480px]:text-3xl  font-bold max-[480px]:content-center max-[480px]:pl-8 ">Create and inspire. It's Zawri</h1>
        <p className="pt-10 text-base max-[480px]:hidden">
          My passion for innovation and my commitment to leaving a mark through
          my work, inviting viewers to explore and be part of a journey where
          creativity knows no bounds.
        </p>
      </div>
      <div className="flex flex-row flex-wrap pt-10 max-[480px]:pt-2">
        {products.map((item) => (
          <Product img={item.img} key={item.id} link={item.link} />
        ))}
       
      </div>
    </div>
  );
}

export default ProductList;
