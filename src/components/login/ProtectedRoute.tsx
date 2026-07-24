// Importamos la herramienta para redirigir al usuario y la función 
// que verifica si existe una sesión iniciada.
import { Navigate } from "react-router-dom";
import { estaAutenticado } from "../../utils/auth";


// Controlamos el acceso a las rutas protegidas, permitiendo ingresar
// solo a los usuarios que hayan iniciado sesión.
interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: Props) {

  console.log("ProtectedRoute:", estaAutenticado());

  if (!estaAutenticado()) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}