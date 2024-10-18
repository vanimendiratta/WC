"use client"
import Image from "next/image";
import React from "react";

import one from "../webcomponent/imgs/responsive.jpeg";
import two from "../webcomponent/imgs/userfriendly.jpeg";
import three from "../webcomponent/imgs/Engaging visuals.png";
import four from "../webcomponent/imgs/Ensured that the site.jpg";




import experience from "./imgs/expert.jpeg";
import virtual from "./imgs/virtualmeet.jpeg";
import flexible from "./imgs/flexible.jpeg";

import "./web.css"
import { motion } from "framer-motion";

const website =[ 
  {heading:"Mental Health",description:"Our counselors specialize in addressing mental health challenges and providing effective strategies for coping and recovery.", img:one,},
  {heading:" Workplace Wellness",description:"Explore counseling services aimed at enhancing workplace wellness and fostering a positive and productive work environment.", img:two},
  {heading:"Stress Management",description:"Receive support and guidance in dealing with stress-related issues to improve overall wellbeing and work performance.", img:three},
  {heading:"Relationship Counseling",description:"Our experienced counselors provide guidance and support to help individuals and couples navigate relationship challenges and improve communication and connection.", img:four},
 ]
  
  
  
const websitee =[ 
  {heading:"Workplace Morale",description:"Professional counseling can boost employee morale and create a more positive and harmonious work atmosphere", img:one,},
  {heading:" Productivity",description:"Enhanced mental wellbeing leads to higher productivity and overall organizational success within the B2B sector.", img:two},
  {heading:"Conflict Resolution",description:"Counseling equips employees with conflict resolution skills, contributing to a more cohesive and cooperative team dynamic", img:three},
 
 ]
 const websiteee =[ 
  {heading:"30%",  headingg:'Improved Productivity',description:"Regular counseling leads to a 30% increase in employee productivity due to reduced stress and improved mental health.", img:one,},
  {heading:" 50%", headingg:'Enhanced Engagement',description:"Organizations experience a 50% rise in employee engagement following counseling initiatives.", img:two},
  {heading:"65%", headingg:'Reduced Absenteeism', description:"Counseling results in a 65% decrease in employee absenteeism, contributing to a healthier work environment.", img:three},
 
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
   Book a Consultation
</motion.h1>
   </motion.div>
  
</div>
{/* <div className="w-1/2 h-[70vh] rounded-3xl bg-[#b0c859]"></div> */}
<div className="  justify-evenly inline-flex flex-wrap bg-[#19181E] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-3xl pb-4 w-screen"
      id="col" >
      


            {/* <div className=" text-center font-medium text-3xl text-white"><h1>Book a Consultation</h1></div> */}


          
          <div id="pg2c">
            <motion.div id="cardd"  initial={{y:-30
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
               className="w-[45vw]  flex-wrap rounded-2xl bg-[#CDEA68] justify-around p-[2rem] mt-[2rem]   ">
              <div className=" justify-center align-middle flex ">
              <Image
                src={experience}
                alt=";;"
                width={200}
                height={300}
                loading="lazy"
                style={{ objectFit: "contain" }}
              /></div>
              <h4  className="text-3xl mb-1 text-center">Experienced Counselors</h4>
              <p  className="text-xl font-light">
                Connect with our experienced and empathetic counselors who
                provide personalized consultations tailored to your needs.
              </p>
            </motion.div>
            <motion.div id="cardd"  initial={{y:-30
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
               className="w-[45vw]  flex-wrap rounded-2xl bg-[#CDEA68] justify-around p-[2rem] mt-[2rem]   ">
              <div className=" justify-center align-middle flex ">
              <Image
                src={virtual}
                alt=";;"
                width={200}
                height={300}
                loading="lazy"
                style={{ objectFit: "contain" }}
              /></div>
              <h4  className="text-3xl mb-1 text-center">Virtual Consultations</h4>
              <p  className="text-xl font-light">
              Conveniently book virtual consultations to receive expert
                guidance and support from the comfort of your home or office
              </p>
            </motion.div>
            <motion.div id="cardd"  initial={{y:-30
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
               className="w-[45vw]  flex-wrap rounded-2xl bg-[#CDEA68] justify-around p-[2rem] mt-[2rem]   ">
              <div className=" justify-center align-middle flex ">
              <Image
                src={flexible}
                alt=";;"
                width={200}
                height={300}
                loading="lazy"
                style={{ objectFit: "contain" }}
              /></div>
              <h4  className="text-3xl mb-1 text-center">Flexible Scheduling</h4>
              <p  className="text-xl font-light">
              Choose a time that works best for you with our flexible
                scheduling options for inperson or virtual appointments
              </p>
            </motion.div> 
        </div>
       

</div>
<div id="pg3" className="  justify-evenly inline-flex flex-wrap  rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-3xl pb-4 w-screen">
          
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
                         id='cardd'className="w-[45vw]  flex-wrap rounded-2xl bg-[#CDEA68] justify-around p-[2rem] mt-[2rem] m-3">
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
                  <div>
                    <div className=" text-center"><h1 className=" text-6xl font-normal">Importance of Counseling at workspace</h1></div>
                  <div id="pg4" className="  justify-evenly inline-flex flex-wrap  rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-3xl pb-4 w-screen">

          
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
                         id='cardd'className="w-[45vw]  flex-wrap rounded-2xl bg-[#CDEA68] justify-around p-[2rem] mt-[2rem] m-3">
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
                  </div></div>


                  <div>
                    <div className=" text-center"><h1 className=" text-6xl font-normal">Employee Mental Health and Productivity Benefits</h1></div>
                  <div id="pg5" className="  justify-evenly inline-flex flex-wrap  rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-3xl pb-4 w-screen">

          
          {websiteee.map((client, index) => {
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
                         id='cardd'className="w-[30vw]  flex-wrap rounded-2xl bg-[#CDEA68] justify-around p-[2rem] mt-[2rem] m-3">
                      <div className="inline-block">
                     
                        <div style={{padding:"0 1rem"}}>
                          <h1 className="text-4xl mb-1 text-center">{client.heading}</h1>
                          <h1 className="text-2xl mb-1 text-center">{client.headingg}</h1>
                          <p className="text-xl font-light text-center">{client.description}</p>
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
                  </div></div>


</div>

  </>
);

I

}

export default About