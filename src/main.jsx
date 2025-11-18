import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";   
           // Added import for app.css here
import App from "./App.jsx";
import { AuthProvider } from "./utils/Auth.jsx";
import { BrowserRouter } from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
            <LoadScript
              googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API}
              libraries={["places"]}
            >
              <App />
            </LoadScript>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
