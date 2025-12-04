import { useGLTF } from '@react-three/drei'

export function Crown(props) {
  const { nodes, materials } = useGLTF('/crown.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, -2.093]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, 200, 15.376]}>
          <group position={[0, -364.624, -0.253]}>
            <group position={[0, -10.637, -3.572]}>
              <group position={[10.337, 10.637, 5.661]} rotation={[Math.PI / 2, 0, 0]} scale={14.183}>
                <mesh geometry={nodes.Shape007_GoldBase_0.geometry} material={materials.GoldBase} position={[-16.545, -18.186, 0]} />
              </group>
              <group position={[10, 210.415, 5.661]} rotation={[Math.PI / 2, 0, 0]} scale={14.183}>
                <group position={[-16.545, -18.186, 0]}>
                  <mesh geometry={nodes.Shape009_GoldBase_0.geometry} material={materials.GoldBase} />
                  <mesh geometry={nodes.Shape009_GoldBase_0_1.geometry} material={materials.GoldBase_0} />
                </group>
              </group>
            </group>
            <group position={[0, 10.637, 0]}>
              <group position={[0, 10.638, -0.057]} rotation={[Math.PI / 2, 0, 0]} scale={14.183}>
                <mesh geometry={nodes.Shape008_GoldBase_0.geometry} material={materials.GoldBase} position={[-15.816, -18.034, 0]} />
              </group>
              <group position={[0, 10.637, -0.057]} rotation={[Math.PI / 2, 0, 0]} scale={14.183}>
                <mesh geometry={nodes.Shape006_GoldBase_0.geometry} material={materials.GoldBase} position={[-15.816, -18.034, 0]} />
              </group>
            </group>
          </group>
          <group position={[0, -272.949, -92.224]} rotation={[0.042, 0, 0]}>
            <group position={[0, -10.029, -2.282]} rotation={[0.175, 0, 0]}>
              <group position={[276.282, 3.124, 0]}>
                <mesh geometry={nodes.Teapot004_GoldBase_0.geometry} material={materials.GoldBase} />
                <mesh geometry={nodes.Teapot004_Glass_clear_0.geometry} material={materials.Glass_clear} />
              </group>
            </group>
            <group position={[-0.256, 19.884, 1.105]} rotation={[0.175, 0, 0]} scale={0.99}>
              <mesh geometry={nodes.Teapot006_COBRE_gamma_221w_0.geometry} material={materials['COBRE_gamma_2.21w']} position={[276.282, 3.124, 0]} />
            </group>
          </group>
          <group position={[0, -332.941, 117.196]} rotation={[1.803, 0, 0]} scale={[1.494, 2.404, 1.053]}>
            <mesh geometry={nodes.Sphere001_GoldBase_0.geometry} material={materials.GoldBase} />
            <mesh geometry={nodes.Sphere001_GoldBase_0_1.geometry} material={materials.GoldBase_0} />
          </group>
          <group position={[0, -241.452, -82.934]} rotation={[0.262, 0, 0]}>
            <mesh geometry={nodes.Object001_Glass_clear_0.geometry} material={materials.Glass_clear} position={[276.282, 3.124, 0]} />
          </group>
          <group position={[0, 15.376, -184.506]} scale={[0.552, 0.574, 1.065]}>
            <mesh geometry={nodes.Tube006_GoldBase_0.geometry} material={materials.GoldBase} />
            <mesh geometry={nodes.Tube006_GoldBase_0_1.geometry} material={materials.GoldBase_0} />
          </group>
          <mesh geometry={nodes.Torus001_GoldBase_0.geometry} material={materials.GoldBase} position={[0, -332.941, 117.196]} rotation={[1.803, 0, 0]} scale={[1.494, 2.404, 1.053]} />
          <mesh geometry={nodes.Tube008_GoldBase_0.geometry} material={materials.GoldBase} position={[0, 15.376, -193.596]} scale={[0.994, 0.994, 0.415]} />
          <mesh geometry={nodes.Tube007_GoldBase_0.geometry} material={materials.GoldBase} position={[0, 15.376, -147.783]} scale={[0.975, 0.975, 0.426]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/crown.glb')
