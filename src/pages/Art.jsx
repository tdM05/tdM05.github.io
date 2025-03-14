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
import { useEffect, useState } from 'react';

export default function ArtsPage() {
    const LOADING = 'Loading...';

    // useState takes in [] because we want to store an array of ids
    const [ids, setIds] = useState([]); // need because states because if not, components will
    const [loading, setLoading] = useState(true);
    // not rerender when state changes. Api call will change the state.

    // if not useEffect, then every rerender will call the api again which is exepensive
    // here useEffect is only called since the second argument (dependencies) is an empty array
    useEffect(() => {
        setLoading(true);
        // get request to database to get art ids
        fetch('https://personal-website-app-api-ceamb6gyb9csfdbe.canadacentral-01.azurewebsites.net/api/art/ids')
            .then(response => { // response is the get request's return values (which is a promise)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            }) // response.() is the ids
            .then(ids => {
                setIds(ids); // Update data state
            })
            .catch(error => {
                setIds(`Error fetching data: ${error.message}`);
                console.error('Error fetching IDs:', error);
            });
    }, []);

    //  Get the art image and text form art ids
    const [traditionalData, settraditionalData] = useState([LOADING]);
    const [digitalData, setdigitalData] = useState([LOADING]);

    // this will rerun whenever ids changes
    useEffect(() => {
        setLoading(true);
        const fetchArtData = (async () => {
            const artPromises = ids.map(async (id) => {
                const textResponse = await fetch(`https://personal-website-app-api-ceamb6gyb9csfdbe.canadacentral-01.azurewebsites.net/api/art/text/${id}`);
                const text = await textResponse.text();
                // pause here because of await
                const nameResponse = await fetch(`https://personal-website-app-api-ceamb6gyb9csfdbe.canadacentral-01.azurewebsites.net/api/art/name/${id}`);
                const name = await nameResponse.text();
                // pause here because of await
                const imageResponse = await fetch(`https://personal-website-app-api-ceamb6gyb9csfdbe.canadacentral-01.azurewebsites.net/api/art/img/${id}`);
                const imageSrc = imageResponse.url;

                const typeResponse = await fetch(`https://personal-website-app-api-ceamb6gyb9csfdbe.canadacentral-01.azurewebsites.net/api/art/type/${id}`);
                const type = await typeResponse.text();

                return { id, name, text, type, imageSrc }; // async functions return a promise
            });

            const results = await Promise.all(artPromises);
            const traditionalResults = results.filter(({ type }) => type === 'Traditional');
            const digitalResults = results.filter(({ type }) => type === 'Digital');
            settraditionalData(traditionalResults);
            setdigitalData(digitalResults);
            setLoading(false);
        });
        // we declare and then call because it is an async function
        fetchArtData();
    }, [ids]);

    if (loading) {
        return (
            <>
                <PageButtons/>
                <div className="headBox">
                    <h1 className="welcome">Welcome to my art gallery</h1>
                    <div className="loadingContainer">
                        <p className="tagLoadingMain">
                            Fetching from database <span className="dots"></span>
                        </p>
                        <p className="tagLoadingSub">
                            (may take a few minutes if this page has not been visited in a while)
                        </p>
                    </div>
                </div>

                <Section title={"Traditional Sketches"}>
                </Section>

                <Section title={"Digital Paintings"}>
                </Section>

                <Section title={"3d Models"}>
                </Section>
                <GoToTop/>
            </>
        );
    } else {
        return (
            <>
                <PageButtons/>
                <div className="headBox">
                    <h1 className="welcome">Welcome to my art gallery</h1>
                    <p className="tag">
                        Explore my still sketches, digital paintings, and 3d models
                    </p>
                </div>

                <Section title={"Traditional Sketches"}
                         components={
                             <>
                                 {traditionalData.map(({id, name, text, imageSrc}, index) => (
                                     <ArtPanel key={id} leftSide={index % 2 === 0} description={text}
                                               imageSrc={imageSrc} title={name}/>
                                 ))}
                             </>
                         }>
                </Section>

                <Section title={"Digital Paintings"}
                         components={
                             <>
                                 {digitalData.map(({id, name, text, imageSrc}, index) => (
                                     <ArtPanel key={id} leftSide={index % 2 === 0} description={text}
                                               imageSrc={imageSrc} title={name}/>
                                 ))}
                                 {/*<ArtPanel leftSide={true} description={*/}
                                 {/*  "The Cave of Zalarous is a digital painting done on my ipad using the program SketchBook. During the winter of 2023, I found myself in exam week and exam week and I did not have many exams because two of my courses were full year so those did not have winter exams. So I started drawing with my ipad and this is the first finished digital painting I've ever made."*/}
                                 {/*} imageSrc={"./cave.jpg"}></ArtPanel>*/}

                                 {/*<ArtPanel leftSide={true} description={*/}
                                 {/*  "After exam week, it was winter break for me. I was satisfied with the Cave of Zalarous and wanted to see how good of a face I could draw. I had been studying drawing skulls at this time so I wanted to put my knowledge to the test!"*/}
                                 {/*} imageSrc={"./girl face.jpg"}></ArtPanel>*/}
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
                <GoToTop/>
            </>
        );
    }
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

