import React, { useState } from "react"
import { styles } from "../style"
import { GuitarsCanvas, LineStuffCanvas } from './canvas'
import { motion } from "framer-motion"

const Hero = () => {


    return (
        <>
            <section className=" max-w-8xl relative w-full mx-auto sm:h-[100vh] h-[70vh]  ">
                <div className=' text-5xl whitespace-nowrap overflow-hidden text-center aboslute'>
                    <div className="absolute w-full h-[0.5px] bg-white top-1 " />
                    <div className="absolute w-full h-[0.5px] bg-white top-4 " />
                    <div className="absolute w-full h-[0.5px] bg-white top-7 " />
                    <div className="absolute w-full h-[0.5px] bg-white top-10 " />
                    <p> 𝅘𝅥𝅮𝅘𝅥𝅮𝅘𝅥 𝅘𝅥 𝄃 𝄞♯ 𝅘𝅥𝄾𝄞 ♭𝅗𝅥♫ 𝄞♫𝅘𝅥𝅮♫𝅘𝅥𝅮𝆏 𝅘𝅥𝅮𝅘𝅥𝅮 𝅘𝅥𝅮𝅘𝅥𝅮𝅘𝅥 𝄂𝅘𝅥𝅮𝅘𝅥𝅮𝅘𝅥 𝅘𝅥 𝄃 𝄞♯ 𝅘𝅥𝄾𝄞 ♭𝅗𝅥♫ 𝄞♫𝅘𝅥𝅮♫𝅘𝅥𝅮𝆏 𝅘𝅥𝅮𝅘𝅥 𝅘𝅥𝅮𝅘𝅥 𝅘𝅥𝅘𝅥 𝄃 𝄞♯ 𝄃</p>

                </div>
                <div className="relative flex  w-full h-auto ">
                    <div className={`${styles.padding} w-[60%] xl:w-[40%] h-[40%]  z-20 `}>
                        <h2 className={`${styles.heroHeadText} `}>Discover your unique &nbsp; <span className=" absolute hover:text-primary "> sound</span></h2>
                        <p className={styles.heroSubText}>Unleash your creativity with guitars that truly represent you, found only in our exclusive collection.</p>
                    </div>
                    <div className="w-full h-[60vh] sm:h-[80vh] lg:h-[90vh] z-10 absolute ">
                        <GuitarsCanvas />
                        <LineStuffCanvas />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero