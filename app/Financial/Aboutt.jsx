"use client"
import Image from "next/image";
import React from "react";

import one from "../Financial/imgs/emergency.jpeg";
import two from "../Financial/imgs/family.jpeg";
import three from "../Financial/imgs/goal.jpeg";
import four from "../Financial/imgs/tax.jpeg";
import five from "../Financial/imgs/retierment.jpeg";
import six from "../Financial/imgs/house.jpeg";

import "./web.css"
import { motion } from "framer-motion";


const financeplan = [
  {heading:"Be ready for emergencies" ,description:"We help you create an Emergency Fund for all money-related uncertainties.",img:one,},
{heading:"Protect yourself & your family" ,description:"An Insurance plan that ring-fences your life risks",img:two,},
{heading:"Goal-based investing" ,description:"Achieve your goals confidently with planned investment options by getting a roadmap",img:three,},
{heading:"Tax filing" ,description:"Plan & Save Taxes & file your Income Tax Returns on time",img:four,},
{heading:"Retierment planning" ,description:"Live a dignified retired life with apt retirement planning solutions.",img:five,},
{heading:"Estate planning" ,description:"Transfer your hard-earned money in the most tax-efficient manner.",img:six,}
]

function Aboutt() {

return (
<>
<div className="  justify-evenly inline-flex flex-wrap bg-[#7191E6] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-3xl pb-4 "
      id="col" >
      

{financeplan.map((client, index) => {
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
            
</div></>


);

I

}

export default Aboutt