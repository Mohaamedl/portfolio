import { MeshWobbleMaterial, OrbitControls, useHelper } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import * as React from 'react';
import { useRef, useState } from "react";
import { DirectionalLightHelper } from "three";
import "./App.css";
const Cube = ({position,color,size})=>{

  const ref = useRef()
  useFrame((state,delta)=>{
    //ref.current.rotation.z +=2*delta;
    //ref.current.rotation.x +=2*delta;
    ref.current.position.z = Math.cos(state.clock.elapsedTime*1.5)
    ref.current.position.x = Math.sin(state.clock.elapsedTime*1.5)
  })
  return(
  <mesh position={position} ref = {ref}>
    <boxGeometry args={size}/>
    <meshStandardMaterial color={color}/>
  </mesh>)
}
const Sphere = ({position,color,size})=>{

  const ref = useRef();
  const [isHovered,setIsHovered] = useState(false);
  const [isClicked,setIsClicked] = useState(false);
  useFrame((state,delta)=>{
    //const speed = isHovered? 1.6 : 0.4;
    //ref.current.rotation.z +=2*delta;
    //ref.current.rotation.x +=2*delta;
    //ref.current.position.z = Math.cos(state.clock.elapsedTime*speed);
    ref.current.position.z = Math.cos(state.clock.elapsedTime);
    
  })
  return(
  <mesh 
  position={position} 
  ref = {ref}
  onPointerEnter={(event)=>(event.stopPropagation(),setIsHovered(true))}
  onPointerLeave={()=>setIsHovered(false)}
  onClick = {() => setIsClicked(!isClicked)}
  scale={isClicked? 2:1}
  >
    <sphereGeometry args={size}/>
    <MeshWobbleMaterial facto={4}
    color={isHovered? "hotpink":color}
    wireframe/>
  </mesh>)
}
const Torus = ({position,size})=>{

  const ref = useRef()
  const {color,radius} = useControls({
    color:"purple",
    radius:{
      value:3,
      min:1,
      max:10,
      step:0.1
    }
  })

  useFrame((state,delta)=>{
    //ref.current.rotation.z +=2*delta;
    //ref.current.rotation.x +=2*delta;
    //ref.current.position.z = Math.cos(state.clock.elapsedTime*1.5)
    //ref.current.position.x = Math.sin(state.clock.elapsedTime*1.5)
  })
  return(
  <mesh position={position} ref = {ref}>
    <torusGeometry args={[radius,...size]}/>
    <MeshWobbleMaterial color={color}/>
  </mesh>)
}
const Scene = () =>{
  const directionalLightRef = useRef();
  const {lightColor,lightIntensity} = useControls({
    lightColor:"white",
    lightIntensity:{
      value:0.7,
      min:0.1,
      max:5,
      step:0.2
    }
  })
  useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "white")
  return(
    <> 
    <directionalLight 
    position={[1,0,3]}
    intensity={lightIntensity}
    color={lightColor}
    
    ref={directionalLightRef}
    />
      <ambientLight intensity={0.3}/>
      {/* <group>
        <Cube position={[3,0,0]} color = {"blue"} size={[3,3,3]}/>
        <Cube position={[-3,0,0]} color = {"green"} size={[3,3,3]}/>
        <Cube position={[0,-3,0]} color = {"red"} size={[3,3,3]}/>
        <Cube position={[0,3,0]} color = {"hotpink"} size={[3,3,3]}/>
      </group> */}
      {/* <Cube position={[1,1,0]} color = {"hotpink"} size={[3,3,5]}/> */}
      <Sphere size={[1,20,20]} position={[0,2,1]} color={"green"} />
      <Torus  position={[0,-2,-1]} size={[2,30,200]}/>
      <OrbitControls/>
      </>
  );
  
}
const App = () => {
  return(
    <Canvas>
     <Scene/>
    </Canvas>
    
  );
}
export default App