
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";
const ParticlesContainer = () => {
    // init
    const [ init, setInit ] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    
    

    return (
         init && <Particles
            id="tsparticles"
            className="w-full h-auto absolute inset-0 z-[0]"
            particlesLoaded={particlesLoaded}
            options={{
                background : {
                    color: "#000000",
                    
                    
                    
                },
                
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "repulse",
                        },
                        onHover: {
                            enable: true,
                            mode: "attract",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 400,
                            duration: 0.4,
                        },
                        attract:{
                            
                            distance: 200,
                            duration: 0.4,
                        }
                    },
                },
                particles: {
                    color: {
                        value: "#FFFFFF",
                    },
                    links: {
                        color: "#FFFFFF",
                        distance: 200,
                        enable: false,
                        opacity: 0.05,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 0.4,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 300,
                    },
                    opacity: {
                        value: 0.8,
                        random:true,
                    },
                    shape: {
                        type: "circle",
                        
                        
                        

                    },
                    size: {
                        value: { min: 0.5, max: 4 },
                        random:true
                    }
                },
                detectRetina: true,
            }}
        />

        );





};

export default ParticlesContainer