"use client"
import React from 'react'
import Landingpage from "./Landingpage"
import About from "./About";
import Aboutt from "./Aboutt";
// import LocomotiveScroll from 'locomotive-scroll';
import  LocomotiveScroll from "../webcomponent/LocomotiveScroll"
import { useEffect } from 'react';
import Footer from "../Footer"
import Navbar from "../../components/Navbar"
import Webform from  "../../components/Webpgform/Webform"

const Mainweb = () => {
//   useEffect(() => {
//     // Check if window object is defined (client-side)
//     if (typeof window !== 'undefined') {
//         // Import locomotive-scroll dynamically
//         import('locomotive-scroll').then(locomotive => {
//             // Initialize locomotive-scroll with desired options
//             const locomotiveScroll = new LocomotiveScroll();
//             const scroll = new locomotive.default({
//                 el: document.querySelector('#scroll-container'), // Selector for scroll container
//                 smooth: true, // Enable smooth scrolling
//                 // Add more options as needed
//             });
//         }).catch(error => {
//             console.error('Failed to load locomotive-scroll:', error);
//         });
//     }
// }, []);



 
  // if (typeof window !== 'undefined') {
  //   import('locomotive-scroll').then(locomotive => {
  //       // Initialize locomotive-scroll or use it in other ways
  //       const locomotiveScroll = new LocomotiveScroll();
  //   }).catch(error => {
  //       console.error('Failed to load locomotive-scroll:', error);
  //   });
  // }


  return (
    <>
    <Navbar/>
    <LocomotiveScroll/>
    <div className=' bg-zinc-900 pt-[5rem]' id='scroll-container'>
           <Landingpage/>
       <About/>
       <Aboutt/>
      
    </div>
    <section><div className=' mt-6'>
    < Webform/>
    </div></section>
    <div>
      <Footer/>
    </div>
    </>
  )

};

export default Mainweb
