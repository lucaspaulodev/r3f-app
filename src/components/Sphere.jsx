import { Html } from "@react-three/drei"
import { forwardRef } from "react"

const Sphere = forwardRef((props, ref) => {
    const { boxRef } = props
    return (
        <mesh ref={ref} position-x={-2} scale={1}>
            <sphereGeometry />
            <meshStandardMaterial color="salmon" />
            <Html
                position={[1, 1, 0]}
                wrapperClass="label"
                center
                distanceFactor={6}
                occlude={[boxRef, ref]}
            >
                That's a sphere 👍🏼
            </Html>
        </mesh>
    )
})

export default Sphere
