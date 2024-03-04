import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AlbumComponents from "./pages/albumPage";
import { SongPage } from "./pages/songPage";
import { EditProfile } from "./pages/editProfile";
import HomePage from "./pages/home";
import SearchBar from "./pages/search/search";
import { UserPage } from "./pages/userPage";
import { PublicRoutes } from "./types/routes";
import SearchBar from "./pages/search/search";
import SearchBarPage from "./pages/search/search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={PublicRoutes.HOME} element={<HomePage />} />
          <Route path={PublicRoutes.SEARCH} element={<SearchBarPage />} />
          <Route path={PublicRoutes.USER} element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
