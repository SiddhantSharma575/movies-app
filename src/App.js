import "./App.css";
import Bannner from "./components/Bannner";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import Favourites from "./components/Favourites";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Bannner />
              <MovieList />
            </>
          }
        />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
