import MainLayout from "./layouts/MainLayout";
import { BagPage, ExplorePage, HomePage, StarterPage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/bag" element={<BagPage />} />
            <Route path="/starters" element={<StarterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
