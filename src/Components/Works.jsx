import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Path } from './Path'
import { styles } from '../style'
import { ContainerVariant, textVariant2 } from '../utils/motion'
import { useMediaQuery } from '@react-hook/media-query'


const Works = () => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    })


    // animates
    const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.75, 0.8], [1, 1, 0]);
    const textEndOpacity = useTransform(scrollYProgress, [0, 0.55, 0.6, 0.85, 0.9], [0, 0, 1, 1, 0]);
    const position = useTransform(scrollYProgress, (pos) => {
        return pos === 1 ? 'sticky' : 'absolute'
    })

    const y = useTransform(
        scrollYProgress,
        [0.1, 1],
        ['-10%', '-10%']
    );


    // OnMediaQuery
    const xl = useMediaQuery("(min-width: 1280px)")
    const lg = useMediaQuery("(max-width: 1279px) and (min-width: 1024px)")
    const sm = useMediaQuery("(max-width: 1023px) and (min-width: 768px)")

    let scale;
    if (xl) {
        scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.5]);
    } else if (lg) {
        scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.5]);
    } else if (sm) {
        scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.6]);
    } else {
        scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.9]);
    }

    let yPath;
    if (xl) {
        yPath = '-10%'
    } else if (lg) {
        yPath = '25%'
    } else if (sm) {
        yPath = '35%'
    } else {
        yPath = '65%'
    }



    // textVariant
    let text1 = ' start your journey with this and see how you becomes well'
    let text2 = ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt maxime, blanditiis.'

    const letters = Array.from(text1)
    const letters2 = Array.from(text2)



    return (
        <>
            <motion.section
                id='works'
                className="relative h-[500vh] "
                ref={ref}
                style={{ y }}
            >
                <div className='sticky inset-0  max-w-[100vw] max-h-[100vh] font-bold mx-auto text-center'>

                    <motion.div

                        className={`${styles.padding} relative h-screen `}
                        style={{ opacity, y: '50%' }}
                        variants={ContainerVariant(0.03, 0.04)}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }}
                    >

                        <div className='absolute sm:w-[40%] left-2 top-15 block  px-12'>
                            {letters.map((letter, index) => (
                                <motion.span
                                    className={`${styles.sectionSubText} lg:text-[30px] md:text-[22px] inline-block `}
                                    variants={textVariant2()}
                                    key={index}
                                >
                                    {letter === " " ? "\u00A0" : letter}
                                </motion.span>
                            ))}
                        </div>


                        <div className='absolute w-[40%]  right-2 top-[30%] block  sm:px-12 px-3'>
                            {letters2.map((letter, index) => (
                                <motion.span
                                    className={`${styles.sectionSubText}  right-2 text-sm top-[30%] inline-block `}
                                    style={{ opacity: textOpacity }}
                                    variants={textVariant2()}
                                    key={index}
                                >
                                    {letter === " " ? "\u00A0" : letter}
                                </motion.span>
                            ))}
                        </div>


                    </motion.div>


                    <motion.div className={`${styles.sectionSubText} xl:flex hidden `} style={{ opacity: textEndOpacity }} >
                        <p className='sm:w-[20vw] w-[150px] absolute right-20 top-[120%] text-xl '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt maxime, blanditiis .</p>
                        <p className='sm:w-[20vw] w-[150px] absolute left-20 top-[120%] text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt maxime, blanditiis .</p>
                    </motion.div>


                    <motion.div
                        className='w-full absolute inset-0 '
                        style={{ opacity, scale, y: yPath }}
                    >
                        <Path />
                    </motion.div>

                </div>
            </motion.section>

        </>

    )
}

export default Works