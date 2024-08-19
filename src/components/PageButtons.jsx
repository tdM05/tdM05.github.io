import { useNavigate } from "react-router-dom";

function PageButtons() {
  return (
    <>
      <PageButton name="Home" page="home" />
      <PageButton name="Music" page="music" />
      <PageButton name="Art" page="art" />
      <PageButton name="Apps" page="apps" />
    </>
  );
}

function PageButton({ name, page }) {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/" + page)}>{name}</button>;
}

export default PageButtons;
