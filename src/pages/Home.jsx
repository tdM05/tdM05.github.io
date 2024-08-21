import PageButtons from "../components/PageButtons.jsx";
import "./Home.css";
import GoToTop from "../GoToTop.jsx";

export default function HomePage() {
  return (
    <>
      <PageButtons />
      <Introduction></Introduction>
    </>
  );
}

function Introduction() {
  return (
    <>
      <div className="introduction">
        <p className="hello">Hello, I'm</p>
        <h1 className="taddmao">TADD MAO</h1>
        <div className="tag">
          <div className="line"></div>
          <div className="tagText">Programmer, Musician, and Artist</div>
        </div>
      </div>
      <GoToTop />
    </>
  );
}
