import { OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber";

import { Suspense } from "react"
import CanvasLoader from "../Loader"



const Space = () =>{
    const space = useGLTF("./space/scene.gltf")
    return(
        <primitive
        object={space.scene} 
        scale={0.5}
        position-y={0}
        
        />
    )
}
const SpaceCanvas = () => {
    
  return (
    <Canvas
        shadows
        frameloop="demand" 
        gl={{preserveDrawingBuffer:true}}  
        camera={{
            fov:60,
            near:0.1,
            far:200,
            position:[-4,3,6]
        }}
    >
        <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
            autoRotate
            enableZoom={false}
            

            minPolarAngle={-Math.PI/4}
            maxPolarAngle={Math.PI/2}
            
        />
        <Space/>

        </Suspense>

    </Canvas>
  )
}

export default SpaceCanvas