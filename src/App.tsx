import { BrowserRouter, Routes, Route } from "react-router-dom";

import Analisis from "./pages/analisis";
import Dashboard from "./pages/dashboard";
import Extraccion from "./pages/extraccion";
import Comments from "./pages/Comments";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import ProfileSettings from "./pages/ProfileSettings";
import GeneralSettings from "./pages/GeneralSettings";
import NotificationSettings from "./pages/NotificationSettings";
import SecuritySettings from "./pages/SecuritySettings";

function App() {
  return (
    <BrowserRouter>
      <Routes>

  <Route path="/" element={<Dashboard />} />

  <Route path="/dashboard" element={<Dashboard />} />

  <Route path="/analisis" element={<Analisis />} />

  <Route path="/extraccion" element={<Extraccion />} />

  <Route path="/comments" element={<Comments />} />

  <Route path="/reports" element={<Reports />} />

  <Route path="/settings" element={<Settings />} />

  <Route path="/profile-settings" element={<ProfileSettings />} />

  <Route path="/general-settings" element={<GeneralSettings />} />

  <Route path="/notification-settings" element={<NotificationSettings />} />

  <Route path="/security-settings" element={<SecuritySettings />} />

</Routes>
    </BrowserRouter>
  );
}

export default App;
