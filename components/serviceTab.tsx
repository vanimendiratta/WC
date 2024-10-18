"use client"
import Image from "next/image";
import "./mainpg.css"
import Link from "next/link";
import Financial from "../components/imgsc/Financial Services logo-01.png"
import Health from "../components/imgsc/Health Services logo.png"
import Legal from "../components/imgsc/Legal Services logo.png"
import Socialmedia from "../components/imgsc/Digital marketing logo.png"
import Webdesign from "../components/imgsc/Web Design & Devlopment logo.png"



export default  function ServiceTab() {
  

  return (
    <>
    <div className=" bg-[#E5E5E5]">
<div
className=" uppercase text-center text-[5vw] font-bold pt-8"><h1>services</h1></div>

     <div style={{display:"flex"  ,justifyContent: "space-evenly",flexWrap: "wrap",}} className=" px-5" id="serviceresponsive">
<aside  className="w-[30vw]   rounded-2xl   p-[2rem] mt-[2rem] h-full text-center "  >
<div className=" flex justify-center align-middle">
<Image
              src={Webdesign}
              alt=";;"
              width={150}
              height={150}
              loading="lazy"
            /></div> 
            <h3 className=" text-2xl pb-4 font-semibold"> Web design and development</h3>
            <div id="hidenm">
            <p className=" text-lg pb-4">Our team crafts sleek websites optimized for user experience, performance, and conversions. We merge captivating design with top tech to make your site a powerful engagement tool</p></div>
            <div><a href="/webcomponent" style={{padding:"0.2rem 1rem",borderRadius:"0.7rem",textDecoration:"none", backgroundColor:"#c9c8c8", color:"black", border: "none" }}>explore</a></div>
            </aside>
            <aside className="w-[30vw]   rounded-2xl   p-[2rem] mt-[2rem] h-full text-center">
<div className=" flex justify-center align-middle">
<Image
              src={Socialmedia}
              alt=";;"
              width={150}
              height={150}
              loading="lazy"
            /></div> 
            <h3 className=" text-2xl pb-4 font-semibold">Social media marketing</h3>
            <div id="hidenm">
            <p className=" text-lg pb-4">Boost business visibility and rankings with our SMM services. Our experts use top techniques to grow your online presence, drive traffic, and ensure sustainable growth. Stay ahead with our proven strategies</p></div>
            <div><a href="/Socialmediamarketing" style={{padding:"0.2rem 1rem",borderRadius:"0.7rem",textDecoration:"none", backgroundColor:"#c9c8c8", color:"black", border: "none" }}>explore</a></div>
            </aside>
            <aside className="w-[30vw]   rounded-2xl   p-[2rem] mt-[2rem] h-full text-center"
               >
                <div className=" flex justify-center align-middle">
<Image 
              src={Financial}
              alt=";;"
              width={150}
              height={150}
              
            /></div> 
            <h3 className=" text-2xl pb-4 font-semibold"> Financial services</h3>
            <div id="hidenm">
            <p className=" text-lg pb-4">Our expert advisors offer accounting solutions and strategic financial guidance, ensuring your companys financial health and growth</p></div>
            <div><a href="/Financial" style={{padding:"0.2rem 1rem",borderRadius:"0.7rem",textDecoration:"none", backgroundColor:"#c9c8c8", color:"black", border: "none" }}>explore</a></div>
            </aside>

            <aside className="w-[30vw]   rounded-2xl   p-[2rem] mt-[2rem] h-full text-center">
            <div className=" flex justify-center align-middle">
            <Image
              src={Legal}
              alt=";;"
              width={150}
              height={150}
              loading="lazy"
            /></div> 
            <h3 className=" text-2xl pb-4 font-semibold">Legal support</h3>
            <div id="hidenm">
            <p className=" text-lg pb-4">We provide consultations and strategic advice tailored to your companys needs, ensuring legal compliance and protection</p></div>
            <div><a href="/Legal" style={{padding:"0.2rem 1rem",borderRadius:"0.7rem",textDecoration:"none", backgroundColor:"#c9c8c8", color:"black", border: "none" }}>explore</a></div>
            </aside>

            <aside className="w-[30vw]   rounded-2xl   p-[2rem] mt-[2rem] h-full text-center">
   <div className=" flex justify-center align-middle">
    <Image
              src={Health}
              alt=";;"
            
              height={150}
              loading="lazy"
            /></div>
            <h3 className=" text-2xl pb-4 font-semibold">Health services</h3>
            <div id="hidenm">
            <p className=" text-lg pb-4">Our team ensures employees health and safety are prioritized, benefiting your companys productivity and well-being.</p></div>
            <div><a href="/Healthservice" style={{padding:"0.2rem 1rem",borderRadius:"0.7rem",textDecoration:"none", backgroundColor:"#c9c8c8", color:"black", border: "none" }}>explore</a></div>
            
            </aside>

            </div>
            
            </div>
            <section id="bookApp">
        <div className="  text-center bg-black text-white pb-4 w-100vw">
          <h2 className=" font-medium text-5xl pt-5 pb-7 uppercase">Book An Appointment</h2>
          <p className=" text-2xl font-medium pb-2 ">
          More about you less about us
          </p>        
          <div className=" m-4">
          <a href="#contact" className="p-3 rounded-md bg-[#FEFEFE] text-black ">
            Book Now
          </a>
          </div>
        </div>
      </section>
    </>
  );
}
