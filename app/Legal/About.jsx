"use client"
import Image from "next/image";
import React from "react";

import one from "../Legal/imgs/responsive.jpeg";
import two from "../Legal/imgs/userfriendly.jpeg";


import "./web.css"
import { motion } from "framer-motion";

const website =[ 
  {heading:"Expert Guidance",description:"Experienced lawyers offering tailored legal advice for business needs", img:one,},
  {heading:" Partnership Counsel",description:"Comprehensive support for business partnerships and legal requirements.", img:two},
  ]

  
const websitee =[ 
  {heading:"Personal Legal Guidance",description:"Empowering individuals with personalized legal solutions.", img:one,},
  {heading:" Family Law Assistance",description:"Compassionate legal advice and advocacy for matters involving the family.", img:two},
  ]
  
  
  





   
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
    Legal Consultation for Businesses
</motion.h1>
   </motion.div>
  
</div>
{/* <div className="w-1/2 h-[70vh] rounded-3xl bg-[#b0c859]"></div> */}
<div className="  justify-evenly inline-flex flex-wrap bg-[#19181E] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-3xl pb-4 w-full "
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
           
            </>
          );
        })}
            
</div>


</div>
<div
data-scroll data-scroll-section data-scroll-speed=".2"  className="w-full  rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-3xl  bg-[#19181E] z-10"> 
<div className="   w-full ">
  <motion.div initial={{x:"-100vw"}}
   animate={{x:0}}
   transition={{duration:2 ,delay:1 ,type: "spring", stiffness: 120}}>

<motion.h1
   
   whileHover={{scale:1.1,
     originX:0
}} className=" text-[5vw] leading-none  text-white font-extrabold pt-4 pb-4 w-full text-center">
    Legal Consultation for Individuals
</motion.h1>
   </motion.div>
  
</div>
{/* <div className="w-1/2 h-[70vh] rounded-3xl bg-[#b0c859]"></div> */}
<div className="  justify-evenly inline-flex flex-wrap bg-[#19181E] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-3xl pb-4  w-full"
      id="col" >
      

{websitee.map((client, index) => {
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