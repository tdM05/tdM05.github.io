import AppsPage from "./pages/Apps";
import HomePage from "./pages/Home";
import MusicPage from "./pages/Music";
import NoPage from "./pages/NoPage";
import ArtsPage from "./pages/Art";
import PageButtons from "./components/PageButtons";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="/home" element={<HomePage />} />
          <Route path="/art" element={<ArtsPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/apps" element={<AppsPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      {/* <HomePage></HomePage> */}
    </section>
  );
}

export default App;
