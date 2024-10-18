"use client"
import Image from "next/image";
import React from "react";

import Webdesign from "./imgss/office work.jpeg"
import Webdesign1 from "./imgss/office logo.jpeg"
import Webdesign2 from "./imgss/office logooo.jpeg"

import "./web.css"
function Aboutt() {

return (
<>
<div 
data-scroll data-scroll-section data-scroll-speed=".3"
className="w-full p-10 bg-[#7B00C6] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-3xl text-black text-center flex justify-center"> 

<div className="w-[80vw]  rounded-3xl bg-[#7B00C6] p-6">
<div id="s1" className=" flex justify-between align-middle">
<div id='writen'>
                <h2 className="text-3xl mb-1 text-white">Amplify online presence, captivate audience, conquer goals through digital marketing</h2>
            <p className=" font-light  text-white text-lg p-3">Elevate your online presence through strategic digital marketing efforts, captivating your audience with compelling content and targeted campaigns, ultimately conquering your business goals and achieving remarkable success in the digital landscape. With the right digital marketing approach, you can amplify your brand’s visibility, engage your audience effectively, and triumph over your objectives with measurable impact.</p>
            </div>
            <div className=" p-4" style={{objectFit:"contain",display:"flex",justifyContent:"end",alignItems:"center", }}> <Image
              src={Webdesign}
              alt=";;"
              width={400}
              height={400}
              loading="lazy"
              style={{objectFit:"cover",borderRadius:'10%'}}
            /></div>
          
        </div>
</div>


</div>
<div data-scroll data-scroll-section data-scroll-speed=".2" className="w-full p-10 bg-[#7B00C6] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-3xl text-black text-center flex justify-center">
    <div className="w-[80vw]  rounded-3xl bg-[#7B00C6] p-6">
        <div id="s1" className=" flex justify-between align-middle">
          
          
          <div id='writen'>
                <h2 className="text-3xl mb-1 text-white">Drive growth, empower brand with the potential of digital marketing</h2>
            <p className=" font-light  text-white text-lg p-3">Harness the power of digital marketing to drive business growth, expand your reach, and empower your brand through targeted strategies and impactful online campaigns. With the right approach, digital marketing can be a game-changer, elevating your brand’s visibility, engaging your target audience, and delivering measurable results that propel your business forward.</p>
            </div>
            <div className=" p-4" style={{objectFit:"contain",display:"flex",justifyContent:"end",alignItems:"center", }}> <Image
              src={Webdesign2}
              alt=";;"
              width={400}
              height={400}
              loading="lazy"
              style={{objectFit:"cover",borderRadius:'10%'}}
            /></div>
         </div></div>

</div>
<div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full p-10 bg-[#7B00C6] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-3xl text-black text-center flex justify-center">
    <div className="w-[80vw]  rounded-3xl bg-[#7B00C6] p-6">
        <div id="s1" className=" flex justify-between align-middle">
          
        <div id='writen'>
                <h2 className="text-3xl mb-1 text-white">Cost-Effectiveness</h2>
            <p className=" font-light  text-white text-lg p-3">Digital marketing often provides a more cost-effective alternative to traditional marketing methods. With proper planning and implementation, you can achieve significant results within a reasonable budget. Additionally, digital marketing allows you to track and measure the performance of your campaigns, enabling you to optimize and allocate resources efficiently. </p>
            </div>
            <div className=" p-4" style={{objectFit:"contain",display:"flex",justifyContent:"end",alignItems:"center", }}> <Image
              src={Webdesign1}
              alt=";;"
              width={400}
              height={400}
              loading="lazy"
              style={{objectFit:"cover",borderRadius:'10%'}}
            /></div>
         </div></div>

</div>


</>

);

I

}

export default Aboutt