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
      <div className="w-full  text-[#CCD5FE] pt-1 z-0 bg-[#27293D] pb-4">
    
    <div className="textstructure  px-20 mb-6">
    
    {["Financial Planning", "Made Faster"," and Simpler" ].map((item, index) => {
    
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
    className="mr-2 w-[8vw] rounded-md h-[5.7vw] -top-[1vw] relative bg-[#CCD5FE]"
  
    ></motion.div>
    </motion.div>
    
    )}
    
    <h1 className="pt-[1vw] -mb-[1vw] uppercase text-[9vw] leading-[.99]   ">
    
    {item}
    
    </h1>
    </div> 
    
    </div>
    
     
     </>
    );
    
    })}
    
    </div>
    <div className=' flex justify-center align-middle' >
    <motion.div className=' w-4 h-4 bg-[#CCD5FE] rounded-full mt-12 mb-5'
    variants={loaderVariants}
    // animate={{x: 20, y: -30}}
    // initial={{x: -20, y: 0}}
    // transition={{x: { duration: 0.5, },
    // y: { duration: 0.25 },ease:"easeOut", }}
    animate="animationOne"
    ></motion.div></div>
{/* <div className=' flex justify-center align-middle mb-6'>
<motion.div initial={{y:-100
          }} 
          whileInView={{y:0}} 
          transition={{ duration:1 ,ease:"linear"}}
 className="w-[75vw]  flex-wrap rounded-2xl justify-around  mt-[2rem] bg-[#27293D] text-[#7191E6] ">
    <div className="textstructure  px-20 mt-10 ">
      <h3 className="  text-[4vw] leading-[.99] px-15 text-center"
      >The google map to your financial goals!</h3>
      </div>
      <div className="textstructure  px-20 mt-10  m-10 font-medium">
      <h3 className="  text-[2vw] leading-[.99]   px-15"
      initial={{x:"-190vh"}}
      whileInView={{x:0}}
      transition={{ease:[0.76 , 0 , 0.24 , 1], duration:1, delay:0.5 ,type: "spring", stiffness: 120}}>At Whyte collar, we believe in turning your dreams into reality through meticulous financial planning. Our team of dedicated financial advisors is here to guide you on your journey towards financial success.</h3>
      </div>
      </motion.div>
      </div> */}
  
    </div>
    </div>
  )
}

export default Landingpage
 
