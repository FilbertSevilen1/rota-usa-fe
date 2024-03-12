import React, { useState } from "react";
import Heading from "../../components/base/Heading";

import cosmic from "../../assets/logo/cosmic.webp";
import headquarters from '../../assets/about/hq.webp'
import maps from '../../assets/about/map.webp'
function About() {
  const [description, setDescrption] = useState(`
    In America, Rota wheels are distributed exclusively by Cosmic
    Marketing Corp., located at # 28301 Industrial Blvd., Suite V
    Hayward, CA 94545 USA.<br><br> 
    Cosmic has been in the U.S. for the past l0
    years. As a matter of fact, we got here when the sport compact was
    making its first appearance stateside. So when the Sport Compact
    market started to boom, Cosmic was around…providing tough, sporty
    Rota wheels that America's young, trendy market wanted.<br><br>
    These days, of course, Cosmic serves up a whole range of Rota wheels for
    various types of vehicles—from sport compacts to SUVs.<br><br>
    You'll be glad to know that Rota Wheel meets the highest international
    standards. Its manufacturer, Philippine Aluminum Wheels, Inc.
    (PAWI) holds the coveted ISO 9001 (manufacturing quality and
    design) certification and QS 9000 which upholds the quality
    standards of the Big 3 U.S. carmakers.<br><br>
    If you want world-class alloy wheels, talk to Cosmic—the folks 
    who specialize in wheeling up America's get-moving people.
  `);
  return (
    <div className="w-full page-background flex justify-center">
      <div className="w-11/12 md:w-10/12">
        <div className="shadow-md text-white flex flex-col md:flex-row my-12 w-full wheels-background rounded-xl">
          <div className="w-full md:w-2/3 p-8">
            <img src={cosmic} className="mx-auto md:mx-0 mb-8 rounded-xl"></img>
            <p
              className="text-lg md:text-xl text-justify"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          </div>
          <div className="w-full flex flex-col items-center md:items-center md:w-1/3 p-8">
            <img src={headquarters} className="w-full mb-8 rounded-xl">

            </img>
            <img src={maps} className="w-full object-cover h-72 rounded-xl">
                
            </img>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
