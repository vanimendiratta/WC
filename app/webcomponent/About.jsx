"use client"
import Image from "next/image";
import React from "react";

import one from "../webcomponent/imgs/responsive.jpeg";
import two from "../webcomponent/imgs/userfriendly.jpeg";
import three from "../webcomponent/imgs/Engaging visuals.png";
import four from "../webcomponent/imgs/Ensured that the site.jpg";
import five from "../webcomponent/imgs/seooptimization.jpeg";
import six from "../webcomponent/imgs/conversionfocus.jpeg";
import seven from "../webcomponent/imgs/Integration with Social Media.png";
import eight from "../webcomponent/imgs/analyticsandtracking.jpeg";
import nine from "../webcomponent/imgs/Scalibility and Flexibility.jpg";
import ten from "../webcomponent/imgs/safeandsecure.jpeg";

import "./web.css"
import { motion } from "framer-motion";

const website =[ 
  {heading:"Responsive Design",description:"Design that ensures a seamless and optimized browsing experience across all devices", img:one,},
  {heading:" User-friendly Interface",description:"our website makes it easy for visitors to navigate and find the information they need quickly.", img:two},
  {heading:"Engaging Visuals",description:"We utilize captivating visuals such as high-quality images, videos, and graphics to make your website visually appealing and engaging, leaving a lasting impression on visitors.", img:three},
  {heading:"Ensured that the site",description:"compelling and informative content that effectively communicates your brand message, products, and services.", img:four},
  {heading:" SEO Optimization",description:"Our websites are built with SEO optimization in mind, helping your website rank higher in search engine results. We incorporate relevant keywords, meta tags, and optimized URLs to enhance your website's visibility and organic traffic.", img:five},
  {heading:"Conversion-focused Elements",description:"We strategically integrate conversion-focused elements such as lead capture forms, clear contact information, and compelling CTAs to encourage visitors to take desired actions and convert into customers.", img:six},
  {heading:"Integration with Social Media",description:"We seamlessly integrate your website with social media platforms, allowing visitors to easily share your content across their social networks, increasing brand awareness and driving traffic back to your site.", img:seven},
  {heading:"Analytics and Tracking",description:"with these tools we provide valuable insights into visitor behavior, traffic sources, and conversion rates.", img:eight},
  {heading:"Scalability and Flexibility",description:"Whether you need to add new pages, incorporate new features, or expand your online presence, our websites can accommodate your evolving needs.", img:nine},
  {heading:"Secure and Reliable",description:"We prioritize website security, implementing necessary measures to protect your website and visitor data. Regular backups, SSL certificates, and secure hosting ensure a reliable and safe online experience for your audience.", img:ten}]
  
  
  





   
function About() {
  // bg-[#CDEA68]
return (
<>
<div
data-scroll data-scroll-section data-scroll-speed=".1"  className="w-full  rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-3xl  bg-[#004D43] z-10"> 
<div className="   w-full ">
  <motion.div initial={{x:"-100vw"}}
   animate={{x:0}}
   transition={{duration:2 ,delay:1 ,type: "spring", stiffness: 120}}>

<motion.h1
   
   whileHover={{scale:1.1,
    originX:0
}} className=" text-[5vw] leading-none  text-white font-extrabold pt-4 pb-4 w-full text-center">
    Website Feature that you will Love
</motion.h1>
   </motion.div>
  
</div>
{/* <div className="w-1/2 h-[70vh] rounded-3xl bg-[#b0c859]"></div> */}
<div className="  justify-evenly inline-flex flex-wrap bg-[#19181E] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-3xl pb-4 "
      id="col" >
      

{website.map((client, index) => {
          return (
            <>
            <motion.div 
            initial={{y:-30
            }} 
            whileInView={{y:0}}
            whileHover={{
                scale: 1.06,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",}}
                transition={{ duration:0.4 ,ease:"linear"}}
                drag
                dragConstraints={{left:0,top:0,right:0,bottom:0}}
                dragElastic={ 1 }
               id='cardd'className="w-[45vw]  flex-wrap rounded-2xl bg-[#CDEA68] justify-around p-[2rem] mt-[2rem]   ">
            <div className="inline-block">
              <div
               className=" justify-center align-middle   inline-block "
               >
                <Image 
                  style={{objectFit: "contain",mixBlendMode: "color-burn",aspectRatio: "3/2",padding: "1rem"}}
              src={client.img}
              alt=";;"
              width={100}
              height={100}
              loading="lazy"
            /></div>
              <div style={{padding:"0 1rem"}}>
                <h1 className="text-3xl mb-1">{client.heading}</h1>
               
                <p className="text-xl font-light">{client.description}</p>
                </div>
                </div>
                </motion.div>
            {/* <div >
            <motion.aside  id='cardd' style={{width:"20vw", display:"flex",flexWrap:"wrap",margin:" 2vw 5vw",}}
            whileHover={{
              scale: 1.06,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",}}
              drag
              dragConstraints={{left:0,top:0,right:0,bottom:0}}
              dragElastic={ 1 }>
              <motion.div style={{display:"flex",justifyContent:"center",alignItems:"center",objectFit: "contain",mixBlendMode: "color-burn",aspectRatio: "3/2"}}
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
           >
<Image style={{objectFit: "contain",mixBlendMode: "color-burn",aspectRatio: "3/2",padding: "1rem"}}
              src={client.img}
              alt=";;"
              width={150}
              height={150}
              loading="lazy"
            /> </motion.div>
            <motion.h3
                  whileHover={{scale:1.1,
                    color: "#f8e112",originX:0
            }}>{client.heading}</motion.h3>
            <motion.p
             whileHover={{scale:1.1,
              color: "#f8e112",originX:0
      }}>{client.description}</motion.p>
            
            </motion.aside>
            </div> */}
            </>
          );
        })}
            
</div>


</div>

  </>
);

I

}

export default About