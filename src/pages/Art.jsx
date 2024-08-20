import PageButtons from "../components/PageButtons.jsx";
import { Canvas, render } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useState, Suspense } from "react";
import Frigate from "../../public/Frigate.jsx";
import "../App.css";
import { PerspectiveCamera } from "three";

export default function ArtsPage() {
  return (
    <>
      <PageButtons />

      <div style={{ width: "10cm", height: "5cm" }}>
        <h1>Art</h1>
        <Canvas>
          <ambientLight></ambientLight>
          <OrbitControls
            minDistance={60}
            enableZoom={1 == 2}
            enablePan={1 == 2}
          ></OrbitControls>
          <Suspense fallback={null}>
            <Frigate />
          </Suspense>
          <Environment preset="sunset" />
        </Canvas>
      </div>
    </>
  );
}

function timeout(delay) {
  return new Promise((res) => setTimeout(res, delay));
}
