import { Float, Text } from "@react-three/drei"

const FloatText = ({children, ...props}) => {
    return (
        <Float speed={5} floatIntensity={2}>
            <Text {...props}>
                {children}
            </Text>
        </Float>
    )
}

export default FloatText