import PageButtons from "../components/General/PageButtons.jsx";
import Frigate from "../../public/Frigate.jsx";
import "../App.css";
import "./Art.css";
import { Fourth_eye } from "../../public/Fourth_eye.jsx";
import GasMask from "../../public/GasMask.jsx";
import GoToTop from "../GoToTop.jsx";
import ArtPanel from "../components/ArtPage/ArtPanel.jsx";
import ThreeDModelPanel from "../components/ArtPage/3dModelPanel.jsx";
import PropTypes from "prop-types";

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

      <Section title={"Traditional Sketches"}
               components={
        <>
          <ArtPanel leftSide={true} description={
          "The bucket and Pepper is one of my earlier sketches during my time in China. I visited China during the summer of 2024 to see family and I was (and still am) very interested in art. I had always wanted to take art lessons from professional artists, and I figured that since I wasn't doing very much in China, why not take some art lessons! This, and the following 2 sketches are the results of these art lessons that I took during my time in China."
          }
                    imageSrc={"./sketch1.jpg"}>
          </ArtPanel>

          <ArtPanel leftSide={false} description={
            "This was done during the middle of my art lessons in China. Notice that the lines are more definite and the drawing is cleaner than the first one."
          } imageSrc={"./sketch2.jpg"}>
          </ArtPanel>

          <ArtPanel leftSide={true} description={"Tadd's Museum is a solo project I built in Unreal Engine 5 featuring my own accomplishments. It is much like this website except it is interact with in a first person shoot format and I designed a museum using Blender to store all of my accomplishments which you can see in the video's thumbnail on the right. The video is just a walkthrough on how the project works if you don't want to download it."
          } imageSrc={"./sketch3.jpg"}>
          </ArtPanel>
        </>
        }>
      </Section>

      <Section title={"Digital Paintings"}
               components={
        <>
          <ArtPanel leftSide={true} description={
            "The Cave of Zalarous is a digital painting done on my ipad using the program SketchBook. During the winter of 2023, I found myself in exam week and exam week and I did not have many exams because two of my courses were full year so those did not have winter exams. So I started drawing with my ipad and this is the first finished digital painting I've ever made."
          } imageSrc={"./cave.jpg"}></ArtPanel>

          <ArtPanel leftSide={true} description={
            "After exam week, it was winter break for me. I was satisfied with the Cave of Zalarous and wanted to see how good of a face I could draw. I had been studying drawing skulls at this time so I wanted to put my knowledge to the test!"
          } imageSrc={"./girl face.jpg"}></ArtPanel>
        </>
        }>
      </Section>

      <Section title={"3d Models"}
               components={
                 <>
                   <div className="boxTitle">
                     Quick tip: Left click and hold to interact with the 3d models!
                   </div>
                   <div className="modelBox">

                     <ThreeDModelPanel
                         description={"This was one of my first 3d models that I created without a tutorial. At the time, I was very interested in video games, and in particular I loved the story of Halo. So, I decided to test my skills with Blender and see if I could create something on my own."}
                         model={Frigate}
                         name={"Halo's Frigate"}
                         minDist={60}
                         maxDist={100}></ThreeDModelPanel>

                     <ThreeDModelPanel
                         description={"The Fourth Eye is a character from a fictional story that I created. I had always wanted to create a webtoon/manwha which part of the reason as to why I'm so invested in art. I will not give further details on this character as I'm still working on the story."}
                         model={Fourth_eye}
                         name={"The Fourth Eye"}
                         minDist={0}
                         maxDist={2}></ThreeDModelPanel>

                     <ThreeDModelPanel
                         description={"This Gas Mask was one of my first attempts at texturing and sculpting in Blender. I used to do lots of 3d creations in Blender, but now I realize that I lack knowledge in fundamental art skills which is why I'm learning traditional art at the moment."}
                         model={GasMask}
                         name={"Gas Mask"}
                         minDist={3}
                         maxDist={4}></ThreeDModelPanel>
                   </div>
                 </>
               }>
      </Section>
      <GoToTop />
    </>
  );
}

function Section({title, components}) {
  return (
    <>
      <p className="section">{title}</p>
      {components}
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  components: PropTypes.object.isRequired
}

