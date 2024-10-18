"use client"
import Image from "next/image";
import React from "react";
import Webdesign from "../webcomponent/imgs/pg2.jpg"
import Webdesign2 from "../webcomponent/imgs/pg1.jpeg"
import Webdesign1 from "../webcomponent/imgs/pg3.jpg"
import "./web.css"
function Aboutt() {

return (
<>
<div 
data-scroll data-scroll-section data-scroll-speed=".3"
className="w-full p-10 bg-[#004D43] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-3xl text-black text-center flex justify-center"> 

<div className="w-[80vw]  rounded-3xl bg-[#004D43] p-6">
<div id="s1" className=" flex justify-between align-middle">
            <div id='writen'>
                <h2 className="text-3xl mb-1 text-white" >Stay Competitive in the Digital Landscape with Strategic Website Development</h2>
            <p className=" font-light  text-white text-lg p-3">Gain a competitive edge in the digital landscape with strategic website development. Enhance your online presence, engage customers with user-friendly experiences, and drive business growth. Stay ahead of the competition by creating a well-designed and strategically developed website.</p>
            </div>
            <div  style={{objectFit:"contain" }} className=" p-4"> <Image
              src={Webdesign}
              alt=";;"
              width={400}
              height={200}
              loading="lazy"
              style={{objectFit:"contain"}}
            /></div>
        </div>
</div>


</div>
<div data-scroll data-scroll-section data-scroll-speed=".2" className="w-full p-10 bg-[#19181E] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-3xl text-black text-center flex justify-center">
    <div className="w-[80vw]  rounded-3xl bg-[#19181E] p-6">
        <div id="s1" className=" flex justify-between align-middle">
          
          <div id='writen'>
              <h2 className="text-3xl mb-1 text-white" >Leverage Website Development to Establish Trust and Credibility in Your Industry</h2>
          <p className=" font-light  text-white text-lg p-3">A well-designed and functional website showcases your expertise, achievements, and testimonials, instilling confidence in potential customers. Through strategic branding and informative content, you can position yourself as a trusted authority in your industry, building lasting relationships with your audience.</p>
          </div>
          <div  style={{objectFit:"contain" }}> <Image
            src={Webdesign2}
            alt=";;"
            width={400}
            height={200}
            loading="lazy"
            style={{objectFit:"contain"}}
          /></div>
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