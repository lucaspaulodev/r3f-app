// Scene.js
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { OrbitControls } from "@react-three/drei"
import Sphere from "./Sphere"
import Cube from "./Cube"
import Plane from "./Plane"
import FloatText from "./Text"

const Scene = () => {
    const sphereRef = useRef()
    const cubeRef = useRef()
    const groupRef = useRef()
    const directionalLight = useRef()

    useFrame((state, delta) => {
        cubeRef.current.rotation.y += delta
        groupRef.current.rotation.y += delta
    })

    return (
        <>
            <color args={['ivory']} attach="background" />
            <directionalLight ref={directionalLight} position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1} />
            <group ref={groupRef}>
                <Sphere ref={sphereRef} boxRef={cubeRef} />
                <Cube ref={cubeRef}/>
            </group>
            <Plane/>
            <FloatText fontSize={1.5} color="red" position-y={3}>
                Lucas Paulo
            </FloatText>
            <OrbitControls makeDefault />
        </>
    )
}

export default Scene
