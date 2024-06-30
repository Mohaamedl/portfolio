import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";

import CanvasLoader from "../Loader";




const Room3D = ({isMobile}) => {
    const room = useGLTF("./room/scene.gltf")
    
    return(
        <mesh>
            <hemisphereLight
            intensity={3}
            groundColor="black"
            />
            <pointLight intensity={3}/>
            <spotLight
                position={[-20.50,10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />

            <primitive
            object={room.scene}
            scale={isMobile? 0.7 : 1}
            position={isMobile? [0,-2.3,0] : [0,-1.5,-0.5]}
            rotation={[0,0,0]}
            />
        </mesh>
    )
}
const RoomCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(()=> {
        const mediaQuery = window.matchMedia("(max-width:500px)");
        setIsMobile(mediaQuery.matches);
        const handleMediaQueryChange = (event) =>{
            setIsMobile(event.matches)
        };
        
        mediaQuery.addEventListener("change",handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change",handleMediaQueryChange)
        }

    },[]);
    return (
        <Canvas
        frameloop="demand"
        shadows
        camera={{position:[8,0,2], fov:30}}
        gl={{preserveDrawingBuffer:true}}
        
        >
            <Suspense fallback= {<CanvasLoader/>}>
                
                <OrbitControls 
                enableZoom ={false}
                maxPolarAngle={Math.PI/2}
                minPolarAngle={0}
                maxAzimuthAngle={Math.PI/2}
                minAzimuthAngle={0}
            
                />
                <Room3D isMobile = {isMobile} />
            </Suspense>
            <Preload all/>
        </Canvas>
    )
}


export default RoomCanvas