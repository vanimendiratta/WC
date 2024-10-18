"use client"
import Image from "next/image";
import React from "react";

import "./web.css"
import { motion } from "framer-motion";
function Aboutt() {

return (
<>
<div 
data-scroll data-scroll-section data-scroll-speed=".3"
className="w-full p-10 bg-[#004D43] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-3xl text-black text-center flex justify-center"> 

<div className="w-full  rounded-3xl bg-[#004D43] p-6 ">
<div id="s1" className=" flex justify-between align-middle ">
<div>
          <div >
            <h1 style={{ textAlign: "center",margin:"2rem" }}
            className="text-5xl mb-1 text-white">Our Experienced Legal Team</h1>
          </div>
          <div
            className=" justify-evenly inline-flex flex-wrap  rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-3xl   w-full"
          >
            <motion.div id="pg4c"
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
                 className="w-[40vw]  flex-wrap rounded-2xl bg-[#CDEA68] justify-around p-[2rem] m-[2rem]   ">
              <h2 className="text-xl mb-1 ">Skilled Professionals</h2>
              <p className=" font-light   text-lg p-3">
                Our team comprises experienced lawyers with diverse legal
                expertise
              </p>
            </motion.div>
            <motion.div id="pg4c"
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
                 className="w-[40vw]  flex-wrap rounded-2xl bg-[#CDEA68] justify-around p-[2rem] m-[2rem]   ">
              <h2 className="text-xl mb-1 ">Client-Centered Approach</h2>
              <p className=" font-light   text-lg p-3">
                Putting the needs and interests of our clients at the forefront
                of our service
              </p>
            </motion.div>
            <motion.div id="pg4c"
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
                 className="w-[40vw]  flex-wrap rounded-2xl bg-[#CDEA68] justify-around p-[2rem] m-[2rem]   ">
              <h2 className="text-xl mb-1 ">Industry Insight</h2>
              <p className=" font-light   text-lg p-3">
                Deep understanding of legal intricacies across various sectors
                and domains
              </p>
            </motion.div>
          </div>
        </div>
          
        </div>
</div>


</div>
<div data-scroll data-scroll-section data-scroll-speed=".2" className="w-full p-10 bg-[#19181E] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-3xl text-white text-center flex justify-center align-middle">
    <div >
        <div id="s1" className=" flex justify-between align-middle">
          
        <div id="pg5">
          <h1 className="text-5xl mb-1 text-white">
            Streamlined Legal Consultation Process
          </h1>
          <div >
            <div id="pg5c" className=" m-6">
              <h2 className="text-3xl mb-1 ">Initial Consultation</h2>
              <li className=" font-light   text-lg p-3">
                Understanding specific legal needs and establishing clear
                objectives.
              </li>
            </div>
            <div  id="pg5c" className=" m-6">
              <h2 className="text-3xl mb-1 ">Legal Assessment</h2>
              <li  className=" font-light   text-lg p-3">
                Thorough review of relevant legal aspects and implications for
                the client
              </li>
            </div>
            <div  id="pg5c" className=" m-6">
              <h2 className="text-3xl mb-1 ">Tailored Solutions</h2>
              <li className=" font-light   text-lg p-3">
                Development of custom legal strategies aligned with client
                requirements
              </li>
            </div>
          </div>
        </div>
         </div></div>

</div>
<div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full p-10 bg-[#004D43] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-3xl text-black text-center flex justify-center">
    <div className="w-[80vw]  rounded-3xl bg-[#004D43] p-6">
        <div id="s1" className=" flex justify-between align-middle">
          
        <div id="pg6"  className=" text-white w-full">
          <h1 style={{ textAlign: "center" }}
          className="text-5xl mb-5 text-white">Pricing and Packages</h1>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              margin: "1rem",
            }} 
          >
            <div id="pg6c">
              <h3 className="text-3xl mb-1 ">Transparent Pricing</h3>
              <p className=" font-light   text-lg p-3">
                Clear and upfront pricing details for all legal consultation
                services
              </p>
            </div>

            <div id="pg6c">
              <h3 className="text-3xl mb-1 ">Custom Packages</h3>
              <p className=" font-light   text-lg p-3">
                Flexible options designed to accommodate specific business and
                individual needs.
              </p>
            </div>
            <div id="pg6c">
              <h3 className="text-3xl mb-1 ">Value-added Services</h3>
              <p className=" font-light   text-lg p-3">
                Additional resources and support included within our service
                packages.
              </p>
            </div>
          </div>
        </div>
         
         </div></div>

</div>
<div data-scroll data-scroll-section data-scroll-speed=".2" className="w-full p-10 bg-[#19181E] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-3xl text-white text-center flex justify-center align-middle">
    <div >
        <div id="s1" className=" flex justify-between align-middle">
          
        <div id="pg5">
          <h1 className="text-5xl mb-1 text-white">
          Frequently Asked Questions
          </h1>
          <div >
            <div id="pg5c" className=" m-6">
              <h2 className="text-3xl mb-1 ">General Inquiry</h2>
              <li className=" font-light   text-lg ">
              How can I schedule a consultation?
              </li>
              <li className=" font-light   text-lg ">
              What legal areas do you cover?
              </li>
              <li className=" font-light   text-lg ">
              Are initial consultations complimentary?
              </li>
            </div>
            <div  id="pg5c" className=" m-6">
              <h2 className="text-3xl mb-1 ">Service Specifics</h2>
              <li  className=" font-light   text-lg ">
              What documentation is required for consultation?
              </li>
              <li className=" font-light   text-lg ">
              How long does a typical consultation take?
              </li>
              <li className=" font-light   text-lg ">
              Are there any follow-up services included?
              </li>
              <li className=" font-light   text-lg ">
              Can I switch between service packages?
              </li>
            </div>
          
          </div>
        </div>
         </div></div>

</div>


</>

);

I

}

export default Aboutt