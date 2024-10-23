import { Canvas } from "@react-three/fiber"
import { Scene } from "./components/Scene"

export const App = () => {
    return (
        <Canvas>
            <Scene />
        </Canvas>
    )
}