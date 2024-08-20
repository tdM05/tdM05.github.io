import PageButtons from "../components/PageButtons.jsx";
import { Canvas, render } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useState, Suspense } from "react";
import Frigate from "../../public/Frigate.jsx";
import "../App.css";
import "./Art.css";
import { Fourth_eye } from "../../public/Fourth_eye.jsx";
import GasMask from "../../public/GasMask.jsx";
import sketch1 from "../../public/images/sketch3.jpg";

export default function ArtsPage() {
  return (
    <>
      <PageButtons />
      <div className="headBox">
        <h1 className="welcome">Welcome to my art gallery</h1>
        <p className="tag">Explore my still drawings, and digital paintings.</p>
      </div>
      <div className="sketch1Box">
        <div className="leftSide">
          <div className="boxTitle">Bucket and Pepper</div>
          <p>adsf;alskjf;aslkdfj</p>
        </div>
        <img className="sketch1" src={"../../public/images/sketch1.jpg"} />
      </div>
      {/* <img className="sketch2" src={"../../public/images/sketch2.jpg"} />
      <img className="sketch3" src={"../../public/images/sketch3.jpg"} />
      <Model RenderModel={Frigate} minDist={60} maxDist={100} />
      <Model RenderModel={Fourth_eye} minDist={0} maxDist={2} />
      <Model RenderModel={GasMask} minDist={3} maxDist={4} /> */}
    </>
  );
}

function Model(props) {
  const aba = () => {
    RenderModel();
  };
  return (
    <div className="modelViewer">
      <Canvas>
        <ambientLight></ambientLight>
        <OrbitControls
          minDistance={props.minDist}
          maxDistance={props.maxDist}
          enableZoom={1 == 2}
          enablePan={1 == 2}
        ></OrbitControls>
        <Suspense fallback={null}>
          <props.RenderModel />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}
