import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import CustomGeometry from "./CustomGeometry"
import { Float, Html, MeshReflectorMaterial, OrbitControls, PivotControls, Text, TransformControls } from "@react-three/drei"

const Scene = () => {
    const sphereRef = useRef()
    const boxRef = useRef()
    const groupRef = useRef()

    // useFrame((state, delta) => {
    //     boxRef.current.rotation.y += delta
    //     groupRef.current.rotation.y += delta
    // })

    return (
        <>
            <directionalLight position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1} />
            <group ref={groupRef}>
                <PivotControls anchor={[0, 0, 0]}
                    depthTest={false}
                >
                    <mesh ref={sphereRef} position-x={-2} scale={1}>
                        <sphereGeometry />
                        <meshStandardMaterial color="salmon" />
                        <Html
                            position={[1, 1, 0]}
                            wrapperClass="label"
                            center
                            distanceFactor={6}
                            occlude={[boxRef, sphereRef]}
                        >
                            That's a sphere 👍🏼
                        </Html>
                    </mesh>
                </PivotControls>


                <mesh ref={boxRef} position-x={2} scale={1.5}>
                    <boxGeometry args={[1, 1]} />
                    <meshStandardMaterial color="mediumpurple" />
                </mesh>
                <TransformControls object={boxRef} />

            </group>
            <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
                <planeGeometry />
                <MeshReflectorMaterial color="greenyellow" resolution={512} blur={[1000,1000]} mixBlur={1} mirror={0.75}/>
            </mesh>
            <OrbitControls makeDefault />
            {/* <CustomGeometry/> */}
            <Float speed={5}
                floatIntensity={2}
            >
                <Text
                    fontSize={1.5}
                    color="red"
                    position-y={3}
                >
                    Lucas Paulo
                </Text>
            </Float>


        </>

    )
}

export default Scene