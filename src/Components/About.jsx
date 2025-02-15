import React, { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { textVariant2, ContainerVariant } from "../utils/motion"
import { styles } from "../style"
import { Guitar2Canvas } from "./canvas"


const About = () => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    })

    // animates
    const opacity = useTransform(scrollYProgress, [0.5, 1], [1, -3]);
    const x = useTransform(
        scrollYProgress,
        [0.9, 1],
        ['0%', '-250%']
    );
    const y = useTransform(
        scrollYProgress,
        [0.5, 1],
        ['0%', '100%']
    );

    // textVariant
    let text = 'Our guitar product line was born out of a passion for music and a desireto provide musicians with the highest-quality instruments. Our team of expert guitar makers has decades of experience in crafting beautiful and functional guitars that are not only visually stunning, but also offer rich, full-bodied sound.'
    const letters = Array.from(text);



    return (
        <section
            id="about"
            className="relative h-[200vh]  "
            ref={ref}
        >
            <motion.div
                style={{ opacity }}
                className="sticky inset-0 translate-x-centered-offset max-h-[100vh] "
            >
                
                <div className={`${styles.padding}  mx-auto relative sm:h-screen h-auto text-center `}>
                    <motion.div
                        className="relative z-20 block "
                        variants={ContainerVariant(0.01, 0.04)}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }}
                    >
                        <h1 className={styles.sectionSubText}> Introduction</h1>
                        <h2 className={styles.sectionHeadText}>About.</h2>
                        {letters.map((letter, index) => (
                            <motion.span
                                className={`${styles.sectionParagraph} inline-block`}
                                variants={textVariant2()}
                                key={index}
                            >
                                {letter === " " ? "\u00A0" : letter}
                            </motion.span>))}
                    </motion.div>
                </div>

                <motion.div className=" w-auto sm:h-auto h-[90vh] absolute sm:inset-0 inset-x-0 inset-y-[40%] z-10">
                    <Guitar2Canvas />
                </motion.div>

            </motion.div>

        </section>

    )
}

export default About