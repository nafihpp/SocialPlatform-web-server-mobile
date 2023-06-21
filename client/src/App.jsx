import "./styles/global.css";
import "./App.css";
import { InstagramFeed } from "./pages/InstagramFeed";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "nprogress/nprogress.css";
import nProgress from "nprogress";
import { Loginpage } from "./pages/Loginpage";

function App() {
    const location = useLocation();

    useEffect(() => {
        nProgress.start();
        nProgress.done();
    }, [location.pathname]);
    return (
        <Routes>
            <Route path="/" element={<InstagramFeed />} />
            <Route path="/login" element={<Loginpage />} />
        </Routes>
    );
}

export default App;
