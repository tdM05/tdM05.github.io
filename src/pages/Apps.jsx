import PageButtons from "../components/PageButtons.jsx";
import "./Apps.css";
import GoToTop from "../GoToTop.jsx";

export default function AppsPage() {
  return (
    <>
      <PageButtons />
      <div className="title">
        <h1 className="titleText">Apps</h1>
      </div>
      <div className="appFrame">
        <div className="leftBox">
          <h2>Food Companion: </h2>
          <p className="leftP">
            This project was done for the hackathon medihacks and I collaborated
            with 3 other developpers. Our app relieves the responsibility of
            doctors needing to send meal options to patients manually, and
            instead automates the whole process. Doctors can interact with a
            server to assign diets to to a condition, and patients can interact
            with the android app to view what they can eat and track their
            nutrition.
          </p>
          <a href="https://devpost.com/software/food-companion" target="_blank">
            Read More
          </a>
        </div>

        <iframe
          className="iFrame"
          width="786"
          height="555"
          src="https://www.youtube.com/embed/SjmDGPgLb4U"
          title="MediHacks 2024 Food Companion App"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="appFrame">
        <div className="leftBox">
          <h2>Tadd's Museum: </h2>
          <p className="leftP">
            Tadd's Museum is a solo project I built in Unreal Engine 5 featuring
            my own accomplishments. It is much like this website except it is
            interact with in a first person shoot format and I designed a museum
            using Blender to store all of my accomplishments which you can see
            in the video's thumbnail on the right. The video is just a
            walkthrough on how the project works if you don't want to download
            it.
          </p>
          <a
            href="https://drive.google.com/drive/u/1/folders/1ymg5FdHVHq-aTg91Tt48QUZlai7MxG9I"
            target="_blank"
          >
            Download Project
          </a>
        </div>

        <iframe
          className="iFrame"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/cfMNoveVYeo?si=Pp_2_Vzm1e5WaaAz"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <GoToTop />
    </>
  );
}
