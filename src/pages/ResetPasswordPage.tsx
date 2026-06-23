import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Globe, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!password || !confirmPassword) {
      setError("Por favor complete todos los campos.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setSubmitted(true);
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div id="reset-password-page" className="min-h-[75vh] flex items-center justify-center bg-white px-6 py-20 selection:bg-neutral-900 selection:text-white">
      <div className="w-full max-w-md space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <Link to="/" className="inline-flex items-center space-x-2 text-neutral-950 group justify-center">
            <Globe className="h-5 w-5 text-neutral-900" />
            <span className="font-extrabold tracking-widest text-xs uppercase">
              PROJECTAPPS™
            </span>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">
            Restablecer Contraseña
          </h1>
          <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-xs mx-auto">
            Establezca una nueva contraseña de alta seguridad para proteger sus activos y evaluaciones de compatibilidad.
          </p>
        </div>

        {/* Card form */}
        <div className="bg-white border border-neutral-200 p-8 rounded-2xl shadow-xs space-y-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold tracking-wider text-neutral-400 uppercase block">
                  Nueva Contraseña
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Nueva contraseña corporativa"
                  className="w-full px-4 py-3 bg-neutral-55 border border-neutral-200 rounded-xl text-neutral-900 text-sm font-light placeholder:text-neutral-400 focus:outline-none focus:border-neutral-950 focus:bg-white transition"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold tracking-wider text-neutral-400 uppercase block">
                  Confirmar Contraseña
                </label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirme su nueva contraseña"
                  className="w-full px-4 py-3 bg-neutral-55 border border-neutral-200 rounded-xl text-neutral-900 text-sm font-light placeholder:text-neutral-400 focus:outline-none focus:border-neutral-950 focus:bg-white transition"
                />
              </div>

              {error && (
                <p className="text-xs text-center text-amber-600 font-medium">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="w-full py-3 px-6 bg-neutral-950 text-white hover:bg-neutral-800 text-xs font-bold uppercase tracking-widest rounded-xl transition inline-flex items-center justify-center gap-2"
              >
                <span>Actualizar contraseña</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>

            </form>
          ) : (
            <div className="text-center space-y-4 py-4 animate-fade-in">
              <div className="mx-auto h-12 w-12 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-200">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-neutral-900">Contraseña reconfigurada (Simulación)</h3>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  La contraseña para este navegador ha sido actualizada. Redirigiendo al acceso del portal...
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
