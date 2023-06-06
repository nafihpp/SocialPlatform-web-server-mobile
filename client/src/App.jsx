import "./styles/global.css";
import "./App.css";
import { InstagramFeed } from "./pages";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "nprogress/nprogress.css";
import nProgress from "nprogress";

function App() {
    const location = useLocation();

    useEffect(() => {
        nProgress.start();
        nProgress.done();
    }, [location.pathname]);
    return (
        <Routes>
            <Route path="/" element={<InstagramFeed />} />
        </Routes>
    );
}

export default App;
