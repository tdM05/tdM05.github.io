/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 fourth_eye.gltf 
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export function Fourth_eye(props) {
  const { nodes, materials } = useGLTF("/fourth_eye.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Retopo_head.geometry}
        material={materials.head}
        position={[0.056, 0.873, -0.019]}
      />
      <mesh
        geometry={nodes.Retopo_body.geometry}
        material={materials.body}
        position={[0.033, -0.064, -0.031]}
      />
      <mesh
        geometry={nodes.METAL_HAND.geometry}
        material={materials["Right hand"]}
        position={[-0.288, -0.008, -0.059]}
      />
      <mesh
        geometry={nodes.hand_retop.geometry}
        material={materials.arms}
        position={[0.048, 0.5, 0.192]}
      />
      <mesh
        geometry={nodes.eyes.geometry}
        material={materials.eyes}
        position={[0.063, 0.867, 0.013]}
      />
      <mesh
        geometry={nodes.ears.geometry}
        material={materials.ears}
        position={[0.049, 0.862, -0.052]}
      />
      <mesh
        geometry={nodes.coat_retop.geometry}
        material={materials["lab coat"]}
        position={[0.039, 0.364, -0.044]}
      />
    </group>
  );
}

useGLTF.preload("/fourth_eye.gltf");
