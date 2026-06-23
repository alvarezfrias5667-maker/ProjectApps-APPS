import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Globe, ArrowRight, ShieldCheck, Mail } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubmitted(true);
  };

  return (
    <div id="forgot-password-page" className="min-h-[75vh] flex items-center justify-center bg-white px-6 py-20 selection:bg-neutral-900 selection:text-white">
      <div className="w-full max-w-md space-y-8">
        
        {/* Logo/header */}
        <div className="text-center space-y-3">
          <Link to="/" className="inline-flex items-center space-x-2 text-neutral-950 group justify-center">
            <Globe className="h-5 w-5 text-neutral-900" />
            <span className="font-extrabold tracking-widest text-xs uppercase">
              PROJECTAPPS™
            </span>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">
            Restablecer acceso
          </h1>
          <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-xs mx-auto">
            Introduzca su correo corporativo y recibirá instrucciones para actualizar sus credenciales.
          </p>
        </div>

        {/* Form area */}
        <div className="bg-white border border-neutral-200 p-8 rounded-2xl shadow-xs space-y-6">
          {!submitted ? (
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

              <button
                type="submit"
                className="w-full py-3 px-6 bg-neutral-950 text-white hover:bg-neutral-800 text-xs font-bold uppercase tracking-widest rounded-xl transition inline-flex items-center justify-center gap-2"
              >
                <span>Enviar enlace</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </form>
          ) : (
            <div className="text-center space-y-4 py-4 animate-fade-in">
              <div className="mx-auto h-12 w-12 rounded-full bg-neutral-100 flex items-center justify-center border border-neutral-200">
                <Mail className="h-5 w-5 text-neutral-900" />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-neutral-900">Enlace de restauración generado</h3>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  Para fines del MVP interactivo, se simula el envío a <strong className="text-neutral-800">{email}</strong>. Puede probar la pantalla de reconfiguración directamente.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  to="/reset-password"
                  className="px-4 py-2 bg-neutral-950 text-white hover:bg-neutral-800 text-[10px] font-bold uppercase tracking-widest rounded-lg transition inline-flex items-center gap-1.5"
                >
                  Proceder a Simulación de Cambio <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          )}

          <div className="border-t border-neutral-100 pt-5 text-center">
            <Link 
              to="/login" 
              className="text-xs font-bold text-neutral-400 hover:text-neutral-950 uppercase tracking-wider transition"
            >
              Volver al Inicio de Sesión
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
