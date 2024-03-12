import React from "react";
function ProductCard({ productImage, productName, productPrice }) {
  return (
    <div className="transition-all hover:scale-105 active:scale-100 card-background w-40 h-72 md:w-64 md:h-[440px] rounded-xl cursor-pointer text-white">
      <img
        src={productImage}
        className="w-40 h-40 md:w-64 md:h-64 bg-gray-200 rounded-t-xl"
      ></img>
      <div className="w-full p-2 md:p-4 flex flex-col">
        <div className="text-sm sm:text-l md:text-xl wrapword font-semibold h-16 md:h-24">{productName}</div>
        <div className="mt-2 font-bold text-md md:text-2xl">{productPrice}</div>
      </div>
    </div>
  );
}
export default ProductCard;
