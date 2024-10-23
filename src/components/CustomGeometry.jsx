import { useEffect, useMemo, useRef } from "react"
import * as THREE from "three"

const CustomGeometry = () => {
    const geometryRef = useRef()
    
    const verticesCount = 10 * 3

    const verticesPositions = useMemo(() => {
        const positions = new Float32Array(verticesCount * 3)
        for (let i = 0; i < verticesCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 3
        }

        return positions
    }, [])

    useEffect(() => {
        geometryRef.current.computeVertexNormals()
    }, [])

    return (
        <mesh>
            <bufferGeometry ref={geometryRef}>
                <bufferAttribute
                    attach="attributes-position"
                    count={verticesCount}
                    itemSize={3}
                    array={verticesPositions}
                />
            </bufferGeometry>
            <meshStandardMaterial color="red" side={THREE.DoubleSide} />
        </mesh>
    )
}

export default CustomGeometry