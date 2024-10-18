"use client"
import Image from "next/image";
import React from "react";

import one from "./imgss/Social media marketing.jpeg";
import two from "./imgss/seo.jpeg";
import three from "./imgss/payperclicklogo.jpeg";
import four from "./imgss/conentmarketing.jpeg";
import five from "./imgss/emailmarketing.jpeg";
import six from "./imgss/influencermarketing.jpeg";
import seven from "./imgss/analytics and data logo.jpeg";
import eight from "./imgss/cro logo.jpeg";

import "./web.css"
import { motion } from "framer-motion";

  const social =[ 
    {heading:"Social Media Marketing",description:"Leveraging social platforms to reach and engage the target audience through organic content and paid advertising.Social media marketing boosts brand awareness, drives traffic, and fosters customer loyalty.", img:one,},
    {heading:" Search Engine Optimization (SEO)",description:"Optimizing websites and content to improve search engine rankings and organic visibility. SEO helps attract relevant traffic and enhances a website's online presence.", img:two},
    {heading:"Pay-Per-Click Advertising (PPC)",description:"Running targeted ads and paying only when users click on them, helping increase website traffic and conversions. PPC campaigns deliver immediate results and provide measurable ROI.", img:three},
    {heading:"Content Marketing",description:"Creating valuable and relevant content to attract and retain customers, ultimately driving profitable actions. Content marketing establishes authority, nurtures leads, and supports overall marketing efforts.", img:four},
    {heading:" Email Marketing",description:"Utilizing email campaigns to communicate with prospects and customers, promoting products, and building relationships. Email marketing is a cost-effective way to engage, retain customers, and drive sales.", img:five},
    {heading:"Influencer Marketing",description:"Collaborating with influencers and industry leaders to promote products or services to their engaged audience.Influencer marketing leverages the influence of trusted personalities to expand brand reach and credibility.", img:six},
    {heading:"Analytics and Data Insights",description:"Utilizing data-driven insights to measure performance, identify trends, and optimize marketing strategies. Analytics provides valuable information to make informed decisions and improve campaign effectiveness.", img:seven},
    {heading:"Conversion Rate Optimization (CRO)",description:"Optimizing website elements to improve the percentage of visitors who take desired actions. CRO enhances user experience and maximizes the value of existing traffic.", img:eight},
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
  className=" text-[5vw] leading-none  text-[#FFC0FA] font-bold pt-4 pb-4 w-full text-center bg-zinc-900">
    Marketing Feature that you will Love
</motion.h1>
   </motion.div>
  
</div>
{/* <div className="w-1/2 h-[70vh] rounded-3xl bg-[#b0c859]"></div> */}
<div className="  justify-evenly inline-flex flex-wrap bg-zinc-900 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-3xl pb-4 "
      id="col" >
      

{social.map((client, index) => {
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
              transition={{ duration:0.4
                 ,ease:"linear"}}
              drag
              dragConstraints={{left:0,top:0,right:0,bottom:0}}
              dragElastic={ 1 }
               id='cardd'className="w-[45vw]  flex-wrap rounded-2xl bg-[#7B00C6] justify-around p-[2rem] mt-[2rem] text-white">
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