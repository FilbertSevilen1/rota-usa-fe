import React from "react";
import Heading from "../../components/base/Heading";
import SectionWheels from "../../components/SectionWheels";
function Wheels() {
  return (
    <div className="w-full page-background flex justify-center">
      <div
        className="w-full mb-8 flex flex-col items-center"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <div className="w-11/12 md:w-10/12 flex flex-col justify-start mt-8">
          <Heading title={"Wheels"}></Heading>
          <SectionWheels></SectionWheels>
        </div>
      </div>
    </div>
  );
}
export default Wheels;
