import PageButtons from "../components/PageButtons.jsx";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useState, Suspense } from "react";
import Model from "../../public/Frigate.jsx";
import "../App.css";

export default function ArtsPage() {
  return (
    <>
      <PageButtons />
      <h1>Art</h1>
      <Canvas>
        <ambientLight></ambientLight>
        <OrbitControls></OrbitControls>
        <Suspense fallback={null}>
          <Model></Model>
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
}
