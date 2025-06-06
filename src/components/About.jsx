import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import {fadeIn,textVariant} from "../utils/motion"
import { SectionWrapper } from "../hoc";
import ParticlesContainer from "./ParticlesContainer";
const ServiceCard = ({index,title,icon}) => {
    return (
        <Tilt className = "xs:w-[250px] w-full">
            <motion.div
                variants={fadeIn("right","spring",0.5*index,0.75)}
                className = "w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div
                    options={{
                        max:45,
                        scale:1,
                        speed:450,
                    }
                    }
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                
                >
                    <img src={icon} alt={title}
                    className="w-16 h-16 object-contain" />
                    <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
                </div>
                
            </motion.div>

        </Tilt>
    )

}
const About = () =>{
    return(
        <>
        
        <motion.div variants={textVariant()}>
            <p className = {styles.sectionSubText}>About me</p>
            <h2 className ={styles.heroHeadText}>Overview</h2>
        </motion.div>
        <motion.p 
        vartiants={fadeIn("","",0.1,1)}
        className="mt-4 text-secondary text-{17px] max-w-3lx leading-[30px]"
        >
I'm a Software Developer and Physicist with a passion for backend systems, clean architecture, and intelligent automation. With a background in Physics and Mathematics, I bring analytical thinking and problem-solving to every project.

Currently, I’m training at IEFP Porto and 42 Porto, building RESTful APIs in Java and Spring Boot, while diving deep into systems programming with C. My stack includes Java, Python, FastAPI, MySQL, PostgreSQL, and React.

From tools like TimeCore, a smart schedule manager, to CodeWeaver, an AI-driven architecture analyzer, I create software that solves real problems with clarity and structure. I believe great code tells a story, one made of logic, precision, and purpose.
        </motion.p>
        <div className="mt-2 flex flex-wrap gap-10">
            {services.map((service,index) => (
                <ServiceCard key={service.title} index={index} {...service}/>
            ))}

        </div>
        
        </>
    )
}


export default SectionWrapper(About,"about")
