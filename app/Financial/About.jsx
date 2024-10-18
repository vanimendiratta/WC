"use client"
import Image from "next/image";
import React from "react";



import "./web.css"
import { motion } from "framer-motion";

const finance =[ 
  {heading:"Expert Financial Planning",description:"Contact our experienced financial planners to create a customized roadmap for your financial future. We understand that everyone’s goals are unique, and our plans are tailored to suit your individual needs.",},
  {heading:" Personalized Guidance",description:"Our team of skilled financial advisors is committed to providing you with personalized guidance every step of the way. Whether you’re planning for a major life event, retirement, or wealth accumulation, we cover every aspect.", },
  {heading:"Financial Analysis",description:"Gain insight into your current financial standing with our in-depth analysis. We assess your assets, liabilities, income, and expenses to create a comprehensive financial picture, laying the foundation for a detailed financial plan.",},
  {heading:"Experienced Financial Advisors",description:"Our team consists of certified and experienced financial advisors who bring a wealth of knowledge to the table. We assist you in handling the complexities of financial planning with your best interests in mind", },
  {heading:" Client-Centric Approach",description:"At Fincart, you are at the center of everything we do. We listen, understand, and collaborate with you to craft a financial plan that aligns with your aspirations and priorities.", },
  {heading:"Transparent Approach",description:"The entire process at Fincart, from planning to execution, is transparent. We ensure you have a clear understanding of every aspect of your financial plan, empowering you to make informed decisions about your future.",},
  ]

  
    
  





   
function About() {
  // bg-[#CDEA68]
return (
<>
<div
data-scroll data-scroll-section data-scroll-speed=".1"  className="w-full  rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-3xl  bg-white z-10"> 
<div className="   w-full  ">
  <motion.div initial={{x:"-100vw"}}
   animate={{x:0}}
   transition={{duration:2 ,delay:1 ,type: "spring", stiffness: 120}}>

<motion.h1
  //  whileHover={{
  //   scale: 1.06,
  //   textShadow: "0px 0px 8px rgb(255,255,255)",
  //   boxShadow: "0px 0px 8px rgb(255,255,255)",originX:0}}
  className=" text-[5vw] leading-none  text-[#7191E6] bg-[#27293D]  pt-4 pb-4 w-full text-center font-black">
   Why Choose Whyte collar?
</motion.h1>
   </motion.div>
  
</div>
{/* <div className="w-1/2 h-[70vh] rounded-3xl bg-[#b0c859]"></div> */}
<div className="  justify-evenly inline-flex flex-wrap bg-[#7191E6] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-3xl pb-4 "
      id="col" >
      

{finance.map((client, index) => {
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
               id='cardd'className="w-[45vw]  flex-wrap rounded-2xl bg-[#27293C] justify-around p-[2rem] mt-[2rem] text-white">
            <div className="inline-block">
              {/* <div
               className=" justify-center align-middle   inline-block "
               >
                <Image 
                  style={{objectFit: "contain",mixBlendMode: "color-burn",aspectRatio: "3/2",padding: "1rem"}}
              src={client.img}
              alt=";;"
              width={100}
              height={100}
              loading="lazy"
            /></div> */}
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