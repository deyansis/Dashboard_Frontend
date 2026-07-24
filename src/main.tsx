// Importamos las dependencias necesarias para iniciar la aplicación,
//  incluyendo el componente principal, los estilos y las notificaciones.

import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App";
import "./index.css";

// Iniciamos la aplicación React, cargando el componente principal.
// Además, activamos StrictMode y configuramos las notificaciones del sistema.
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: "#071b3a",
          color: "#fff",
          border: "1px solid #1e3a5f",
        },
      }}
    />
  </React.StrictMode>
);
