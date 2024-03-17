import React from "react";
function SubHeading({title}){
    return(
        <div
            className="text-white mb-8 text-3xl md:text-4xl font-bold"
            data-aos="fade-up"
            data-aos-once="true"
          >
            {title}
        </div>
    )
}
export default SubHeading;