import { useGLTF } from '@react-three/drei'

export function Hat(props) {
  const { nodes, materials } = useGLTF('/hat.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.gold} />
      </group>
    </group>
  )
}

useGLTF.preload('/hat.glb')
