import PageButtons from "../components/PageButtons.jsx";
import { Canvas, render } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useState, Suspense } from "react";
import Frigate from "../../public/Frigate.jsx";
import "../App.css";
import "./Art.css";
import { Fourth_eye } from "../../public/Fourth_eye.jsx";
import GasMask from "../../public/GasMask.jsx";
import a from "../../public/images/cave.jpg";

export default function ArtsPage() {
  return (
    <>
      <PageButtons />
      <div className="headBox">
        <h1 className="welcome">Welcome to my art gallery</h1>
        <p className="tag">
          Explore my still sketches, digital paintings, and 3d models
        </p>
      </div>
      <p className="section">Traditional Sketches</p>
      <div className="sketch1Box">
        <div className="leftSide">
          <div className="boxTitle">Bucket and Pepper</div>
          <p style={{ color: "var(--textMain)" }}>
            The bucket and Pepper is one of my earlier sketches during my time
            in China. I visited China during the summer of 2024 to see family
            and I was (and still am) very interested in art. I had always wanted
            to take art lessons from professional artists, and I figured that
            since I wasn't doing very much in China, why not take some art
            lessons! This, and the following 2 sketches are the results of these
            art lessons that I took during my time in China.
          </p>
        </div>
        <img className="sketch1" src={"../../public/images/sketch1.jpg"} />
      </div>

      <div className="sketch2Box">
        <img className="sketch2" src={"../../public/images/sketch2.jpg"} />
        <div className="rightSide">
          <div className="boxTitle">The Cube and the Apple</div>
          <p style={{ color: "var(--textMain)" }}>
            This was done during the middle of my art lessons in China. Notice
            that the lines are more definite and the drawing is cleaner than the
            first one.
          </p>
        </div>
      </div>

      <div className="sketch3Box">
        <div className="leftSide">
          <div className="boxTitle">Final Sketch</div>
          <p style={{ color: "var(--textMain)" }}>
            As the final sketch during my time in China, this is by far the one
            I'm most proud of. Did you know that to get this quality, you have
            to essentially draw it three times? First there is the initial
            sketch which will have the quality of the first sketch above. Then
            you have to smudge the whole thing to get rid of the rough line
            quality. Finally, you must redraw everything again to add detail. In
            total, this one sketch took about 6 hours.
          </p>
        </div>
        <img className="sketch1" src={"../../public/images/sketch3.jpg"} />
      </div>
      <p className="section2">Digital Paintings</p>
      <div className="digitalPaintBox">
        <img src={"../../public/images/cave.jpg"} />
        <div style={{ width: "40px" }}></div>
        <img src={"../../public/images/girl face.jpg"} />
        <div>
          <p style={{ color: "var(--textMain)", margin: "20px" }}>
            These two paintings where done with my ipad. I used to only use my
            ipad for school-related tasks like note taking, studying etc. One
            day I realized that I could also draw with it. I got excited and
            created these two paintings.
          </p>
          <p style={{ color: "var(--textMain)", margin: "20px" }}>
            These digital paintings were mostly done for fun and I enjoyed it
            very much so currently I am trying to practice my art fudamentals in
            order to improve my art. This includes studying anatomy, values, and
            color.
          </p>
        </div>
      </div>
      <p className="section3">3d Models</p>
      <div className="boxTitle">
        Quick tip: Left click and hold to interact with the 3d models!
      </div>
      <div className="modelBox">
        <div className="modelDescriptionBox">
          <Model RenderModel={Frigate} minDist={60} maxDist={100} />
          <h1 className="modelHeader">Halo's Frigate</h1>
          <p className="modelDescription">
            {" "}
            This was one of my first 3d models that I created without a
            tutorial. At the time, I was very interested in video games, and in
            particular I loved the story of Halo. So, I decided to test my
            skills with Blender and see if I could create something on my own.
          </p>
        </div>
        <div className="modelDescriptionBox">
          <Model RenderModel={Fourth_eye} minDist={0} maxDist={2} />
          <h1 className="modelHeader">The Fourth Eye</h1>
          <p className="modelDescription">
            The Fourth Eye is a character from a fictional story that I created.
            I had always wanted to create a webtoon/manwha which part of the
            reason as to why I'm so invested in art. I will not give further
            details on this character as I'm still working on the story.
          </p>
        </div>
        <div className="modelDescriptionBox">
          <Model RenderModel={GasMask} minDist={3} maxDist={4} />
          <h1 className="modelHeader">Gas Mask</h1>
          <p className="modelDescription">
            This Gas Mask was one of my first attempts at texturing and
            sculpting in Blender. I used to do lots of 3d creations in Blender,
            but now I realize that I lack knowledge in fundamental art skills
            which is why I'm learning traditional art at the moment.
          </p>
        </div>
      </div>
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
