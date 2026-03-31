import { useEffect, useState } from "react";
import "./App.css";
import About from "./Components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Home from "./Components/Home";
import ThemeBulbToggle from "./Components/ThemeBulbToggle/ThemeBulbToggle";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";
import Resume from "./Components/Resume";
import { useTheme } from "./theme/ThemeContext";

function App() {
  const [show, setShow] = useState(false);
  const [cross, setCross] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1300);
    return () => window.clearTimeout(timer);
  }, []);

  const darkmode = theme === "dark" ? "dark" : "light";
  const bgcolor = theme === "dark" ? "black" : "white";

  const handleclick = () => {
    setShow(true);
    setCross(true);
  };

  const handleremove = () => {
    setCross(false);
    setShow(false);
  };

  return (
    <BrowserRouter>
      {isLoading && <LoadingScreen />}
      <ThemeBulbToggle />
      <Routes>
        <Route path="/" element={<Home show={show} setShow={setShow} darkmode={darkmode} bgcolor={bgcolor} cross={cross} setCross={setCross} handleclick={handleclick} handleremove={handleremove} />}>
          <Route index element={<About />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
