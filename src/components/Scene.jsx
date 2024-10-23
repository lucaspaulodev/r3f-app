import { useFrame, extend, useThree } from "@react-three/fiber"
import { useRef } from "react"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import CustomGeometry from "./CustomGeometry"

extend({ OrbitControls })

const Scene = () => {
    const { camera, gl } = useThree()
    const boxRef = useRef()
    const groupRef = useRef()

    useFrame((state, delta) => {
        boxRef.current.rotation.y += delta
        groupRef.current.rotation.y += delta
    })

    return (
        <>
            <orbitControls args={[camera, gl.domElement]} />
            <directionalLight position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1} />
            <group ref={groupRef}>
                <mesh position-x={-2} scale={1}>
                    <sphereGeometry />
                    <meshStandardMaterial color="salmon" />
                </mesh>
                <mesh ref={boxRef} position-x={2} scale={1.5}>
                    <boxGeometry args={[1, 1]} />
                    <meshStandardMaterial color="purple" />
                </mesh>
            </group>
            <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color="green" />
            </mesh>

            <CustomGeometry/>
        </>

    )
}

export default Scene