import { forwardRef } from "react";

const Cube = forwardRef((props, ref) => {
    return (
        <mesh ref={ref} position-x={2} scale={1.5}>
            <boxGeometry args={[1, 1]} />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>
    )
})

export default Cube