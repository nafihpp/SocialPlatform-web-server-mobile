import "./styles/global.css";
import "./App.css";
import { InstagramFeed } from "./pages";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
    const location = useLocation();

    useEffect(() => {
        nprogress.start();
        nprogress.done();
    }, [location.pathname]);
    return (
        <Routes>
            <Routes>
                <Route path="/" element={<InstagramFeed />} />
            </Routes>
        </Routes>
    );
}

export default App;
