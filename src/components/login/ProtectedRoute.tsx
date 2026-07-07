import { Navigate } from "react-router-dom";
import { estaAutenticado } from "../../utils/auth";

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