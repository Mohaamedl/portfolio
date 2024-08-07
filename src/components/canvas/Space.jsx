import { OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { Suspense } from "react"
import CanvasLoader from "../Loader"



const Space = () =>{
    const space = useGLTF("./space/scene.gltf")
    return(
        <primitive
        object={space.scene} 
        scale={0.4}
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
            position={[0,0,0]}
            

            minPolarAngle={-Math.PI/4}
            maxPolarAngle={Math.PI/2}
            
        />
        <Space/>

        </Suspense>
        <Preload all/>

    </Canvas>
  )
}

export default SpaceCanvas