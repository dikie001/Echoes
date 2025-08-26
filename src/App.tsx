import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import SettingsPage from "./pages/Settingsx";
import StoriesPage from "./pages/Stories";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/quotes" element={<StoriesPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App