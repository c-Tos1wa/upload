import { BrowserRouter, Routes, Route } from "react-router-dom";
import Theme from "../style/theme";

import { Upload } from "./pages/home";
import { Photo } from "./pages/photo";
import { Loading } from "./pages/loading";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Upload />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/success" element={<Photo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
