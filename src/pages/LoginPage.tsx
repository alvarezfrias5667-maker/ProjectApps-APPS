import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Globe, ArrowRight, ShieldCheck, Lock } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("Por favor complete todos los campos.");
      return;
    }

    // Save mock session to localStorage
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);
    
    // Auto-save pending evaluation if any
    const pending = localStorage.getItem("pendingEvaluation");
    if (pending) {
      try {
        const parsed = JSON.parse(pending);
        const currentEvalsJSON = localStorage.getItem("savedEvaluations");
        let currentEvals = [];
        if (currentEvalsJSON) {
          currentEvals = JSON.parse(currentEvalsJSON);
        }
        currentEvals.unshift(parsed);
        localStorage.setItem("savedEvaluations", JSON.stringify(currentEvals));
        localStorage.removeItem("pendingEvaluation");
      } catch (e) {
        console.error("Error auto-saving pending evaluation", e);
      }
    }

    setMessage(isRegister ? "Cuenta corporativa creada correctamente." : "Acceso verificado correctamente.");
    
    setTimeout(() => {
      // Redirect to dashboard
      navigate("/dashboard");
      // Trigger header re-render
      window.dispatchEvent(new Event("storage"));
    }, 800);
  };

  return (
    <div id="login-page" className="min-h-[80vh] flex items-center justify-center bg-white px-6 py-20 selection:bg-neutral-900 selection:text-white">
      <div className="w-full max-w-md space-y-8">
        
        {/* Branding header */}
        <div className="text-center space-y-3">
          <Link to="/" className="inline-flex items-center space-x-2 text-neutral-950 group justify-center">
            <Globe className="h-5 w-5 text-neutral-900" />
            <span className="font-extrabold tracking-widest text-xs uppercase">
              PROJECTAPPS™
            </span>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">
            {isRegister ? "Crear cuenta corporativa" : "Acceso a Socios y Adquirentes"}
          </h1>
          <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-xs mx-auto">
            {isRegister 
              ? "Registre su organización para guardar informes de compatibilidad y marcar activos de software de interés."
              : "Ingrese sus credenciales de adquirente para gestionar sus evaluaciones ejecutivas y activos guardados."}
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white border border-neutral-200 p-8 rounded-2xl shadow-xs space-y-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono font-bold tracking-wider text-neutral-400 uppercase block">
                Correo Corporativo
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ejemplo@organizacion.com"
                className="w-full px-4 py-3 bg-neutral-55 border border-neutral-200 rounded-xl text-neutral-900 text-sm font-light placeholder:text-neutral-400 focus:outline-none focus:border-neutral-950 focus:bg-white transition"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-mono font-bold tracking-wider text-neutral-400 uppercase block">
                  Contraseña
                </label>
                {!isRegister && (
                  <Link 
                    to="/forgot-password" 
                    className="text-[10px] font-bold text-neutral-400 hover:text-neutral-950 uppercase tracking-wider transition"
                  >
                    ¿Olvidó contraseña?
                  </Link>
                )}
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full px-4 py-3 bg-neutral-55 border border-neutral-200 rounded-xl text-neutral-900 text-sm font-light placeholder:text-neutral-400 focus:outline-none focus:border-neutral-950 focus:bg-white transition"
              />
            </div>

            {message && (
              <p className={`text-xs text-center font-medium ${message.includes("correctamente") ? "text-emerald-600" : "text-amber-600"}`}>
                {message}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 px-6 bg-neutral-950 text-white hover:bg-neutral-800 text-xs font-bold uppercase tracking-widest rounded-xl transition inline-flex items-center justify-center gap-2"
            >
              <span>{isRegister ? "Crear cuenta corporativa" : "Iniciar Sesión"}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>

          </form>

          {/* Selector block */}
          <div className="border-t border-neutral-100 pt-5 text-center text-xs">
            <span className="text-neutral-400 font-light">
              {isRegister ? "¿Ya tiene una cuenta corporativa?" : "¿Aún no tiene cuenta corporativa?"}
            </span>{" "}
            <button
              type="button"
              onClick={() => {
                setIsRegister(!isRegister);
                setMessage("");
              }}
              className="font-bold text-neutral-950 hover:underline cursor-pointer"
            >
              {isRegister ? "Iniciar Sesión" : "Crear Cuenta"}
            </button>
          </div>
        </div>

        {/* Info protection label */}
        <div className="flex flex-col items-center justify-center gap-1 text-[10px] text-neutral-400 font-light text-center">
          <div className="flex items-center gap-1 justify-center">
            <Lock className="h-3.5 w-3.5 text-neutral-300" />
            <span>Portal MVP de evaluación y simulación de adquirentes corporativos.</span>
          </div>
          <span className="text-neutral-400/80">Los datos se almacenan de manera ininterrumpida de forma local en su navegador (localStorage).</span>
        </div>

      </div>
    </div>
  );
}
