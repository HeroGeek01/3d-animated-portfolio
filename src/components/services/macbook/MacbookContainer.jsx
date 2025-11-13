import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Macbook } from "./Macbook"
import { OrbitControls } from "@react-three/drei"

const MacbookContainer = () => {
    return (
        <Canvas>
            <Suspense fallback="carregando....">
                <Macbook/>
                <OrbitControls enableZoom={false}/>         
            </Suspense>
        </Canvas>
    )
}

export default MacbookContainer