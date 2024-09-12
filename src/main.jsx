import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PaginationProvider } from "./store/paginationStore.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PaginationProvider>
      <App />
    </PaginationProvider>
  </StrictMode>
);
