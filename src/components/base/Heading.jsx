import React from "react";
function Heading({title}){
    return(
        <div
            className="text-white mb-8 mt-4 text-4xl md:text-6xl font-bold"
            data-aos="fade-up"
            data-aos-once="true"
          >
            {title}
        </div>
    )
}
export default Heading;