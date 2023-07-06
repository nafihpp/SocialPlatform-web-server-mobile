import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
{/*             <BottomNavigationProvider> */}
                <BrowserRouter>
                    <App />
                </BrowserRouter>
{/*             </BottomNavigationProvider> */}
        </AuthProvider>
    </React.StrictMode>
);
