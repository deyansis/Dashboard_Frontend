// Importamos las dependencias necesarias para el funcionamiento del Login,
// incluyendo la navegación, autenticación, notificaciones y recursos visuales.
import {useState,} from "react";
import {useNavigate,} from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  LogIn,
} from "lucide-react";
import toast from "react-hot-toast";
import municipalidad from "../assets/municipalidad.jpg";
import {iniciarSesion,} from "../services/authService";
import {guardarUsuario,} from "../utils/auth";
import ForgotPasswordModal from "../components/login/ForgotPasswordModal";


// Inicializamos los estados que controlan el formulario, la navegación
// y el comportamiento de la interfaz durante el inicio de sesión.
const Login = () => {
  const navigate = useNavigate();
  const [
    correo,
    setCorreo
  ] = useState("");
  const [
    password,
    setPassword,
  ] = useState("");
  const [
    mostrarPassword,
    setMostrarPassword,
  ] = useState(false);
  const [
    cargando,
    setCargando,
  ] = useState(false);
  const [
  mostrarRecuperacion,
  setMostrarRecuperacion,
] = useState(false);

// Validamos los datos ingresados y enviamos la solicitud de inicio
// de sesión al servidor para verificar las credenciales del usuario.
  const login = async () => {
    if (
      !correo.trim() ||
      !password.trim()
    ) {
      toast.error(
        "Ingrese su correo y contraseña."
      );
      return;
    }
    try {
      setCargando(true);
      const respuesta =
        await iniciarSesion(
          correo,
          password
        );
      if (!respuesta.success) {
        toast.error(
          respuesta.message ||
          "Credenciales incorrectas."
        );
        return;
      }

// Guardamos la información del usuario, mostramos un mensaje de bienvenida
// y redirigimos al sistema, controlando posibles errores durante el proceso.
      guardarUsuario(
        respuesta.usuario!
      );
      toast.success(
        `Bienvenido ${respuesta.usuario?.nombre}`
      );
      navigate(
        "/dashboard"
      );
    } catch (error) {
      console.error(error);
      toast.error(
        "Error al conectar con el servidor."
      );
    } finally {
      setCargando(false);
    }
  };

// Construimos la interfaz del inicio de sesión, organizando los
// paneles informativos y el formulario de acceso al sistema.
  return (
  <div className="min-h-screen bg-[#050B1F] flex items-center justify-center px-8 py-12">
    <div
  className="
    w-full
    max-w-[1100px]
    h-[730px]
    grid
    lg:grid-cols-2
    rounded-3xl
    overflow-hidden
    border
    border-white/10
    shadow-2xl"
    >

      // Mostramos la imagen institucional y la información principal
    // del sistema para reforzar la identidad visual de la aplicación.
      {/* PANEL IZQUIERDO */}
      <div className="relative hidden lg:block">
        <img
          src={municipalidad}
          alt="Municipalidad"
          className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#050B1F]/55" />
        <div className="absolute bottom-25 left-16 text-white z-10">
          <h1 className="text-5xl font-bold">
            Senti<span className="text-cyan-400">Gob</span>
          </h1>
          <p className="mt-4 text-xl leading-relaxed max-w-md">
          Sistema Inteligente de Análisis de Sentimientos para la Gestión Ciudadana.
</p>
<div className="mt-2 flex items-center gap-6">
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
              🛡
            </div>
            <span className="text-xl">
              Escuchamos a la ciudadanía, transformamos Aucallama.
            </span>
          </div>
        </div>
      </div>

      // Mostramos el formulario donde el usuario ingresa sus credenciales
     // para acceder al sistema.
      {/* PANEL DERECHO */}
      <div className="bg-[#071b3a] flex items-center justify-center px-10 py-8">
        <div className="w-full max-w-sm">
      {/* Logo */}
      <div className="flex justify-center">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-28"
    />
  </div>
  <p className="text-center text-slate-300 mt-5 tracking-widest text-sm">
    MUNICIPALIDAD DISTRITAL DE
  </p>
  <h2 className="text-center text-white text-3xl font-light">
    AUCALLAMA
  </h2>
  <div className="w-20 h-1 bg-cyan-400 rounded-full mx-auto my-6"/>
  <h1 className="text-center text-4xl font-bold text-white">
    Senti<span className="text-cyan-400">Gob</span>
  </h1>
  <p className="text-center text-slate-400 mt-2 mb-10">
    Sistema Inteligente de Análisis de Sentimientos
  </p>
  {/* Correo */}
  <label className="text-white mb-2 block">
    Correo electrónico
  </label>
  <div className="h-14 rounded-xl border border-slate-600 bg-[#091a38] flex items-center px-4 gap-3">
    <Mail
      size={20}
      className="text-slate-400"
    />
    <input
      type="email"
      value={correo}
      onChange={(e)=>
        setCorreo(e.target.value)
      }
      placeholder="Ingrese su correo electrónico"
      className="
        bg-transparent
        outline-none
        w-full
        text-white
        placeholder:text-slate-500
      "
    />
  </div>
  {/* Contraseña */}
  <label className="text-white mt-7 mb-2 block">
    Contraseña
  </label>
  <div className="h-14 rounded-xl border border-slate-600 bg-[#091a38] flex items-center px-4 gap-3">
    <Lock
      size={20}
      className="text-slate-400"
    />
    <input
      type={
        mostrarPassword
          ? "text"
          : "password"
      }
      value={password}
      onChange={(e)=>
        setPassword(
          e.target.value
               )
      }
      placeholder="Ingrese su contraseña"
      className="
        bg-transparent
        outline-none
        w-full
        text-white
        placeholder:text-slate-500
      "
    />
    <button
      type="button"
      onClick={()=>
        setMostrarPassword(
          !mostrarPassword
        )
      }
    >
      {
        mostrarPassword
        ?
        <EyeOff
          className="text-slate-400"
          size={20}
        />
        :
        <Eye
          className="text-slate-400"
          size={20}
        />
      }
    </button>
  </div>

  // Ejecutamos el proceso de autenticación cuando el usuario
  // presiona el botón de inicio de sesión.
  {/* Botón */}
  <button
    onClick={login}
    disabled={cargando}
    className="
      w-full
      h-14
      mt-7
      rounded-xl
      bg-gradient-to-r
      from-cyan-500
      to-blue-600
      hover:opacity-90
      transition
      text-white
      font-semibold
      text-lg
      flex
      items-center
      justify-center
      gap-3
    "
  >
    <LogIn size={20}/>
    {
      cargando
      ?
      "Verificando..."
      :
      "Iniciar sesión"
    }
  </button>

  // Permitimos abrir la ventana de recuperación de contraseña
// en caso de que el usuario no recuerde sus credenciales.
{/* ¿Olvidaste tu contraseña? */}
<div className="flex justify-end mt-4">
  <button
  type="button"
  onClick={() => setMostrarRecuperacion(true)}
  className="
    text-cyan-400
    text-sm
    hover:text-cyan-300
    transition
  "
>
  ¿Olvidaste tu contraseña?
</button>
</div>
<p className="text-center text-slate-400 mt-8 text-sm">
  Acceso exclusivo para administradores del sistema.
</p>
</div>
      </div>
    </div>


    // Mostramos el componente de recuperación de contraseña
    // cuando el usuario lo solicita.
    <ForgotPasswordModal
      open={mostrarRecuperacion}
      onClose={() => setMostrarRecuperacion(false)}
    />
      </div>
    );
    };
    export default Login;