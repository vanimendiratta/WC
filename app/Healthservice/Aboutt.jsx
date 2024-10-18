"use client"
import Image from "next/image";
import React from "react";

import Webdesign1 from "../webcomponent/imgs/pg3.jpg"
import "./web.css"
function Aboutt() {

return (
<>
<div 
data-scroll data-scroll-section data-scroll-speed=".3"
className="w-full p-10 bg-[#004D43] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-3xl text-black text-center flex justify-center"> 

<div className="w-[80vw]  rounded-3xl bg-[#004D43] p-6">
<div >
        <div id="s1" className=" flex justify-between align-middle">
          
        <div id="pg5">
          <h1 className="text-5xl mb-1 text-white">
          Consultation Process and Expectations
          </h1>
          <div >
            <div id="pg5c" className=" m-6">
              <h2 className="text-3xl mb-1 ">What to Expect</h2>
              <p className=" font-light   text-lg p-3">
              Learn about our structured consultation process, from the initial appointment to follow-up sessions, and understand the anticipated outcomes
              </p>
            </div>
            <div  id="pg5c" className=" m-6">
              <h2 className="text-3xl mb-1 ">Benefits of Counseling</h2>
              <li  className=" font-light   text-lg p-3">
              Personalized Support

              </li>
              <li  className=" font-light   text-lg p-3">
              
Enhanced Coping Skills

              </li>
              <li  className=" font-light   text-lg p-3">
           
Improved Communication
              </li>
            </div>
            
          </div>
        </div>
         </div></div>
</div>


</div>
<div data-scroll data-scroll-section data-scroll-speed=".2" className="w-full p-10 bg-[#19181E] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-3xl text-black text-center flex justify-center">
    <div className="  rounded-3xl bg-[#19181E] p-6">
        <div id="s1" className=" flex justify-between align-middle">
          
        <div  id="pg5c" className=" m-6">
              <h2 className="text-3xl mb-1 ">Benefits of Counseling</h2>
              <li  className=" font-light   text-lg p-3">
              Personalized Support

              </li>
              <li  className=" font-light   text-lg p-3">
              
Enhanced Coping Skills

              </li>
              <li  className=" font-light   text-lg p-3">
           
Improved Communication
              </li>
            </div>
          
         </div></div>

</div>
<div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full p-10 bg-[#004D43] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-3xl text-black text-center flex justify-center">
    <div className="w-[80vw]  rounded-3xl bg-[#004D43] p-6">
        <div id="s1" className=" flex justify-between align-middle">
          
          <div id='writen'>
              <h2 className="text-3xl mb-1 text-white" >Increase Customer Engagement and Interactions through Professional Website Development</h2>
          <p className=" font-light  text-white text-lg p-3">Professional website development increases customer engagement and interactions by creating an interactive and user-friendly online platform. Through intuitive navigation, visually appealing design, and interactive features, visitors are encouraged to explore and interact with your website.</p>
          </div>
          <div  style={{objectFit:"contain", display:"flex",justifyContent:"center", alignItems:"center" }}> <Image
            src={Webdesign1}
            alt=";;"
            width={400}
            height={200}
            loading="lazy"
            style={{objectFit:"contain"}}
          /></div>
         </div></div>

</div>


</>

);

I

}

export default Aboutt