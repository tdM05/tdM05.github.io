import PageButtons from "../components/PageButtons.jsx";
import "./Apps.css";
import GoToTop from "../GoToTop.jsx";
import AppField from "../components/AppField.jsx";

export default function AppsPage() {
  return (
    <>
      <PageButtons />
      <div className="title">
        <h1 className="titleText">Apps</h1>
      </div>
      <AppField
          description={"This project was done for the hackathon medihacks and I collaborated\n" +
          "with 3 other developpers. Our app relieves the responsibility of\n" +
          "doctors needing to send meal options to patients manually, and\n" +
          "instead automates the whole process. Doctors can interact with a\n" +
          "server to assign diets to to a condition, and patients can interact\n" +
          "with the android app to view what they can eat and track their\n" +
          "nutrition.\t"}
          moreLink={"https://devpost.com/software/food-companion"}
          videoLink={"https://www.youtube.com/embed/SjmDGPgLb4U"}>

      </AppField>
      <AppField
          description={"Tadd's Museum is a solo project I built in Unreal Engine 5 featuring\n" +
          "my own accomplishments. It is much like this website except it is\n" +
          "interact with in a first person shoot format and I designed a museum\n" +
          "using Blender to store all of my accomplishments which you can see\n" +
          "in the video's thumbnail on the right. The video is just a\n" +
          "walkthrough on how the project works if you don't want to download\n" +
          "it."}
          moreLink={"https://drive.google.com/drive/u/1/folders/1ymg5FdHVHq-aTg91Tt48QUZlai7MxG9I"}
          videoLink={"https://www.youtube.com/embed/cfMNoveVYeo?si=Pp_2_Vzm1e5WaaAz"}>
      </AppField>
      <GoToTop />
    </>
  );
}
