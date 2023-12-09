import { MeshWobbleMaterial, OrbitControls, useHelper, useGLTF } from "@react-three/drei";
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



const Macbook =(props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
<group position={[0, 0.52, 0,]} scale={[0.1, 0.1, 0.1,]} >
<mesh geometry={nodes.Circle001.geometry} material={nodes.Circle001.material} />
<mesh geometry={nodes.Circle001_1.geometry} material={nodes.Circle001_1.material} />
<mesh geometry={nodes.Circle001_2.geometry} material={materials.HeadPhoneHole} />
<mesh geometry={nodes.Circle001_3.geometry} material={nodes.Circle001_3.material} />
<mesh geometry={nodes.Circle001_4.geometry} material={nodes.Circle001_4.material} />
<mesh geometry={nodes.Circle001_5.geometry} material={materials.TouchbarBorder} />
<mesh geometry={nodes.Circle001_6.geometry} material={materials.Keyboard} />
<mesh geometry={nodes.FrontCameraRing001.geometry} material={materials['CameraRIngBlack.002']} position={[-0.15, 19.57, -16.15,]} scale={5.8} />
<mesh geometry={nodes.KeyboardKeyHole.geometry} material={nodes.KeyboardKeyHole.material} position={[-11.79, -0.15, -8.3,]} scale={5.8} />
<mesh geometry={nodes.RubberFoot.geometry} material={materials.DarkRubber} position={[-11.95, -0.75, 7.86,]} scale={5.8} />
<group position={[0.01, -0.21, -10.56,]} scale={5.8} >
<mesh geometry={nodes.Circle012.geometry} material={materials.HingeBlack} />
<mesh geometry={nodes.Circle012_1.geometry} material={materials.HingeMetal} />
</group>
<group position={[0, -0.51, 0,]} scale={5.8} >
<mesh geometry={nodes.Circle006.geometry} material={nodes.Circle006.material} />
<mesh geometry={nodes.Circle006_1.geometry} material={nodes.Circle006_1.material} />
</group>
<group position={[-11.79, -0.15, -8.3,]} scale={5.8} >
<mesh geometry={nodes.Circle.geometry} material={nodes.Circle.material} />
<mesh geometry={nodes.Circle_1.geometry} material={materials.Key} />
<mesh geometry={nodes.Circle_2.geometry} material={materials.Touchbar} />
</group>
<group position={[0.01, -0.47, -10.41,]} rotation={[1.31, 0, 0,]} scale={5.8} >
<mesh geometry={nodes.Circle002.geometry} material={nodes.Circle002.material} />
<mesh geometry={nodes.Circle002_1.geometry} material={materials.Screen} />
<mesh geometry={nodes.Circle002_2.geometry} material={materials.ScreenGlass} />
<mesh geometry={nodes.Circle002_3.geometry} material={materials.Rubber} />
<mesh geometry={nodes.Circle002_4.geometry} material={materials.DisplayGlass} />
<mesh geometry={nodes.AppleLogo000.geometry} material={materials['AppleLogo.004']} position={[0, -0.11, -1.8,]} rotation={[-Math.PI, 0, -Math.PI,]} scale={[0.58, 0.58, 0.58,]} />
</group>
<group position={[-15.03, 0.03, 0.6,]} scale={5.8} >
<mesh geometry={nodes.Circle009.geometry} material={nodes.Circle009.material} />
<mesh geometry={nodes.Circle009_1.geometry} material={nodes.Circle009_1.material} />
</group>
<group position={[12.2, 0.03, 0.6,]} scale={5.8} >
<mesh geometry={nodes.Circle003.geometry} material={nodes.Circle003.material} />
<mesh geometry={nodes.Circle003_1.geometry} material={nodes.Circle003_1.material} />
</group>
</group>

    </group>
  )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
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
    position={[0,5,5]}
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
    {/*   <Torus  position={[0,-2,-1]} size={[2,30,200]}/> */}
      <Model position={[0,1,0]}/>
      <Macbook position={[0,0,-1]}/>
      <OrbitControls/>
      </>
  );
  
}



const Model = (props) =>{
  const group = useRef()
  const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/react-logo/model.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
<mesh geometry={nodes.Cube.geometry} material={nodes.Cube.material} position={[0, 1.31, 0,]} rotation={[0, Math.PI / 2, 0,]} scale={0.27} >
<mesh geometry={nodes.Torus002.geometry} material={nodes.Torus002.material} position={[-0.52, -0.1, 0.16,]} rotation={[-1.18, 0, -Math.PI / 2,]} scale={[3.75, 1.47, 3,]} />
<mesh geometry={nodes.Torus001.geometry} material={nodes.Torus001.material} position={[0.34, -0.08, 0.02,]} rotation={[-0.16, 0, -Math.PI / 2,]} scale={[3.75, 1.47, 3,]} />
<mesh geometry={nodes.Torus003.geometry} material={nodes.Torus003.material} position={[-0.04, -0.11, 0,]} rotation={[0.89, 0, -Math.PI / 2,]} scale={[3.75, 1.47, 3,]} />
</mesh>

    </group>
  )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/react-logo/model.gltf')
const App = () => {
  return(
    <Canvas>
      <Scene/> 
    
    </Canvas>
    
  );
}
export default App