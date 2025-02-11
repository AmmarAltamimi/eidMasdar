"use client"

import { IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion"
import { useEffect, useState } from "react";



export function Button() {
const [toScroll , setToScroll] = useState(false);

    useEffect(()=>{

        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                setToScroll(true);
            }else{
                setToScroll(false);
            }
        })
    },[])

    function handleClickTop(){

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (

    toScroll && (
        <button 
          onClick={handleClickTop}
          className="w-[40px] h-[40px] rounded-full flex justify-center items-center fixed bottom-10 right-10 
                     text-white bg-gradient-to-r from-[#ef3735] to-[#ef3735] hover:bg-red-600 
                     dark:bg-gradient-to-br dark:from-sky-700 dark:to-sky-900 dark:hover:bg-sky-900 dark:text-black 
                     transition duration-300"
        >
          <motion.span animate={{ y: [-5, 0] }} transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}>
            <IoIosArrowUp/>
          </motion.span>
        </button>
      )







//  toScroll && (<button onClick={handleClickTop}  className=" w-[40px] h-[40px] rounded-full flex justify-center items-center fixed bottom-10 right-10 text-white  bg-gradient-to-r from-[#ef3735] to-[#ef3735] dark:bg-sky-700 dark:hover:bg-sky-900 dark:text-black transition duration-300" > <motion.span animate={{y:[-5,0]}} transition={{duration:0.5 , repeat:Infinity , repeatType:"reverse"}}><IoIosArrowUp/></motion.span>  </button>)

  )
}

