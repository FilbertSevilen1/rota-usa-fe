import React, { useEffect } from "react";
function Inventory() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full page-background flex justify-center">
      <div className="w-11/12">
        <div
          className="text-white text-4xl md:text-6xl font-bold my-8"
          data-aos="fade-up"
          data-aos-once="true"
        >
          Our Inventory
        </div>
        <iframe
          className="w-full h-[75vh] bg-white shadow-md mb-8"
          src="http://rotausa.com/kim3.htm"
          title="description"
        ></iframe>
      </div>
    </div>
  );
}
export default Inventory;
