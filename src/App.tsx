import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Dashboard from "./pages/dashboard";
import Analisis from "./pages/analisis";
import Extraccion from "./pages/extraccion";
import Comments from "./pages/Comments";
import Reports from "./pages/Reports";

// Login

import Login from "./pages/Login";
import ProtectedRoute from "./components/login/ProtectedRoute";


// Configuración
import Settings from "./pages/Configuration/Settings";
import GeneralSettings from "./pages/Configuration/GeneralSettings";
import ModelSettings from "./pages/Configuration/ModelSettings";
import ProfileSettings from "./pages/Configuration/ProfileSettings";



function App() {

  

  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN */}

        <Route
  path="/"
  element={<Navigate to="/login" replace />}
/>

<Route
  path="/login"
  element={<Login />}
/>

        

        {/* DASHBOARD */}

        <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

        {/* ANÁLISIS */}

        <Route
  path="/analisis"
  element={
    <ProtectedRoute>
      <Analisis />
    </ProtectedRoute>
  }
/>

        {/* EXTRACCIÓN */}

        <Route
          path="/extraccion"
          element={
            <ProtectedRoute>
              <Extraccion />
            </ProtectedRoute>
          }
        />

        {/* COMENTARIOS */}

        <Route
          path="/comments"
          element={
            <ProtectedRoute>
              <Comments />
            </ProtectedRoute>
          }
        />

        {/* REPORTES */}

        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <Reports />
            </ProtectedRoute>
          }
        />

              

        {/* CONFIGURACIÓN */}

        <Route
  path="/settings"
  element={
    <ProtectedRoute>
      <Settings />
    </ProtectedRoute>
  }
/>

<Route
  path="/settings/general"
  element={
    <ProtectedRoute>
      <GeneralSettings />
    </ProtectedRoute>
  }
/>

<Route
  path="/settings/model"
  element={
    <ProtectedRoute>
      <ModelSettings />
    </ProtectedRoute>
  }
/>

<Route
  path="/settings/profile"
  element={
    <ProtectedRoute>
      <ProfileSettings />
    </ProtectedRoute>
  }
/>

        
        {/* CUALQUIER OTRA RUTA */}
<Route
  path="*"
  element={<Navigate to="/login" replace />}
/>
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;