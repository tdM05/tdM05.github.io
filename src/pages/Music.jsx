import PageButtons from "../components/PageButtons.jsx";

export default function MusicPage() {
  return (
    <>
      <PageButtons />
      <h1>Music</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/sW8-xnKUrVo?si=cjiVotiZdBdycCZN"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </>
  );
}
