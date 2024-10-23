import { useFrame, extend, useThree } from "@react-three/fiber"
import { useRef } from "react"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

extend({ orbitControls: OrbitControls })

export const Scene = () => {
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

            

            <group ref={groupRef}>
                <mesh position-x={-2} scale={1}>
                    <sphereGeometry />
                    <meshNormalMaterial />
                </mesh>
                <mesh ref={boxRef} position-x={2} scale={1.5}>
                    <boxGeometry args={[1, 1]} />
                    <meshNormalMaterial />
                </mesh>
            </group>
            <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
                <planeGeometry />
                <meshBasicMaterial color="green" />
            </mesh>
        </>

    )
}