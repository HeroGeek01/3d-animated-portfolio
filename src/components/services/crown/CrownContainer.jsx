import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Crown } from "./Crown"
import { OrbitControls, Stage, PerspectiveCamera } from "@react-three/drei"

const CrownContainer = () => {
    return(
        <Canvas>
            <Suspense fallback="loading...">
                <Stage environment="night" intensity="0.5">
                    <Crown/>
                </Stage>
                <OrbitControls enableZoom={false} autoRotate />
                <PerspectiveCamera position ={[-1, 0, 1.8]} zoom={0.7} makeDefault/>
            </Suspense>
        </Canvas>
    )
}

export default CrownContainer