"use client"
import { easeOut, motion } from 'framer-motion'
import React from 'react'

const loaderVariants = {

  animationOne: {
  
  x: [-30, 30,-30],
  
  y: [0, -50 ,0],
  
  transition: {
  
  x: {
  
    repeat: Infinity,
  
  duration:1,
  ease:"linear",
 },
 y: {
  
  repeat: Infinity,

duration:0.5,
ease:"linear",
},

  
  }
  
  }
  
  }


const Landingpage = () => {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.5" >
      <div className="w-full  bg-zinc-900 pt-1 z-0 ">
    
    <div className="textstructure mt-10 mb-6 px-20">
    
    {["We Create", "Personlized","Website Design" ].map((item, index) => {
    
    return (
    <>
    <div className="masker" key={index}>
    
    <div className="w-fit flex items-end overflow-hidden">
    
    {index === 1 && (
    
    
    
    <motion.div 
    whileHover={{ scale: 1.2, rotate: 90 }}
    whileTap={{ scale: 0.8, rotate: -90, borderRadius: "200%" }}
    
    >
      <motion.div initial={{ width:0}}
    animate={{ width:"8vw"}}
    transition={{ease:[0.76 , 0 , 0.24 , 1], duration:1, delay:0.5}}
    className="mr-5 w-[8vw] rounded-md h-[5.7vw] -top-[1.2vw] relative bg-red-500"
    ></motion.div>
    </motion.div>
    
    )}
    
    <h1 className="pt-[1vw] -mb-[1vw] uppercase text-[9vw] leading-[.99] text-white ">
    
    {item}
    
    </h1>
    </div> 
    </div>
     
     </>
    );
    
    })}
    
    </div>
    <div className=' flex justify-center align-middle' >
    <motion.div className=' w-4 h-4 bg-[#CDEA68] rounded-full mt-12 mb-8'
    variants={loaderVariants}
    // animate={{x: 20, y: -30}}
    // initial={{x: -20, y: 0}}
    // transition={{x: { duration: 0.5, },
    // y: { duration: 0.25 },ease:"easeOut", }}
    animate="animationOne"
    ></motion.div></div>
    </div>
    </div>
  )
}

export default Landingpage
 
