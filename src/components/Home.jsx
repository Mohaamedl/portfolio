import { motion } from "framer-motion"
import { styles } from "../styles"
import { RoomCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"

const Home = () => {

    return (
        <section className = "relative w-full h-screen mx-auto">
            
            <div className ={`-${styles.paddingX} ml-32 absolute insert-0 top-[100px] 
            max-w-7xl mx-auto flex felx-col items-start gap-5 z-10 pointer-events-none`}>
                <div className = "flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#14643f]" />
                    <div className="w-1 sm:h-80 h-40 green-gradient " />
                </div>
                <div className="">
                    <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#14643f]">Mohamed</span></h1>
                    <p className={`${styles.heroSubText} mt-2 text-black-100 `}>A Software Developer and Physicist </p>
                </div>
                
            </div>
            <RoomCanvas></RoomCanvas>
            
            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center ">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y:[0,24,0]
                            }}
                            transition={{
                                duration:1.5,
                                repeat:Infinity,
                                repeatType:"loop",
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Home