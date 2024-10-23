import { Canvas } from "@react-three/fiber"
import Scene from "./components/Scene"

const App = () => {
    return (
        <Canvas
            flat
            gl={{
                antialias: true,
            }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [3, 2, 6]
            }}
        >
            <Scene />
        </Canvas>
    )
}

export default App