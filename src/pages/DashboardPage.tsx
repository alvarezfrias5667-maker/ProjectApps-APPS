import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Bookmark,
  Clock,
  Compass,
  FileText,
  FolderCheck,
  Lock,
  LogOut,
  ShieldCheck,
  Trash2,
  User,
} from "lucide-react";
import { SOLUTIONS, Solution } from "../data/solutionsData";

interface SavedEvaluation {
  id: string;
  date: string;
  industry: string;
  businessSize: string;
  budget: string;
  problemsCount: number;
  goalsCount: number;
}

interface AcquisitionRequest {
  id: string;
  assetName?: string;
  category?: string;
  status: string;
  date: string;
}

export default function DashboardPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [savedAssets, setSavedAssets] = useState<Solution[]>([]);
  const [savedEvaluations, setSavedEvaluations] = useState<SavedEvaluation[]>([]);
  const [acquisitionRequests, setAcquisitionRequests] = useState<AcquisitionRequest[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);

    if (loggedIn) {
      setUserEmail(localStorage.getItem("userEmail") || "buyer@company.com");
    }

    const favoriteIdsJSON = localStorage.getItem("favoriteAssetIds");
    if (favoriteIdsJSON) {
      try {
        const ids: string[] = JSON.parse(favoriteIdsJSON);
        setSavedAssets(SOLUTIONS.filter((solution) => ids.includes(solution.id)));
      } catch {
        setSavedAssets([]);
      }
    }

    const evaluationsJSON = localStorage.getItem("savedEvaluations");
    if (evaluationsJSON) {
      try {
        setSavedEvaluations(JSON.parse(evaluationsJSON));
      } catch {
        setSavedEvaluations([]);
      }
    }

    const requestsJSON = localStorage.getItem("acquisitionRequests");
    if (requestsJSON) {
      try {
        setAcquisitionRequests(JSON.parse(requestsJSON));
      } catch {
        setAcquisitionRequests([]);
      }
    }

    const handleStorageChange = () => {
      const logged = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(logged);
      setUserEmail(localStorage.getItem("userEmail") || "buyer@company.com");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    setUserEmail("");
    window.dispatchEvent(new Event("storage"));
    navigate("/login");
  };

  const removeFavorite = (id: string) => {
    const updated = savedAssets.filter((item) => item.id !== id);
    setSavedAssets(updated);
    localStorage.setItem("favoriteAssetIds", JSON.stringify(updated.map((item) => item.id)));
  };

  const removeEvaluation = (id: string) => {
    const updated = savedEvaluations.filter((item) => item.id !== id);
    setSavedEvaluations(updated);
    localStorage.setItem("savedEvaluations", JSON.stringify(updated));
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-white px-6 py-20">
        <div className="w-full max-w-md text-center space-y-6">
          <div className="mx-auto h-12 w-12 rounded-full bg-neutral-100 flex items-center justify-center border border-neutral-200">
            <Lock className="h-5 w-5 text-neutral-800" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-extrabold text-neutral-950 tracking-tight">
              Acceso Privado
            </h1>
            <p className="text-xs text-neutral-500 font-light leading-relaxed max-w-sm mx-auto">
              Inicie sesión para acceder a sus evaluaciones guardadas, activos favoritos y solicitudes de adquisición.
            </p>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <Link
              to="/login"
              className="w-full py-3 px-6 bg-neutral-950 text-white hover:bg-neutral-800 text-xs font-bold uppercase tracking-widest rounded-xl transition inline-flex items-center justify-center gap-2"
            >
              Acceder al Buyer Portal™
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            <Link
              to="/solution-match"
              className="text-xs font-bold text-neutral-500 hover:text-neutral-950 transition uppercase tracking-wider"
            >
              Realizar evaluación de compatibilidad
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="buyer-portal-page" className="bg-white text-neutral-900 pb-24">
      <div className="max-w-6xl mx-auto px-6 pt-32">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-neutral-100 pb-8">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[9px] font-bold tracking-widest text-neutral-900 bg-neutral-100 uppercase rounded border border-neutral-200">
              <User className="h-3 w-3 text-neutral-800" />
              Buyer Portal™
            </span>

            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950">
              Executive Buyer Space™
            </h1>

            <p className="text-xs text-neutral-500 font-light">
              Sesión activa: <span className="font-semibold text-neutral-800">{userEmail}</span>
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              to="/solution-match"
              className="px-5 py-2.5 bg-neutral-50 border border-neutral-200 hover:border-neutral-400 text-neutral-900 text-[11px] font-bold uppercase tracking-wider rounded-xl transition flex items-center gap-1.5"
            >
              <Compass className="h-3.5 w-3.5" />
              Nueva Evaluación
            </Link>

            <button
              onClick={handleLogout}
              className="px-5 py-2.5 bg-neutral-950 hover:bg-neutral-800 text-white text-[11px] font-bold uppercase tracking-wider rounded-xl transition flex items-center gap-1.5"
            >
              <LogOut className="h-3.5 w-3.5" />
              Cerrar Sesión
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          <SummaryCard label="Activos guardados" value={savedAssets.length} icon={<Bookmark className="h-4 w-4" />} />
          <SummaryCard label="Evaluaciones guardadas" value={savedEvaluations.length} icon={<FileText className="h-4 w-4" />} />
          <SummaryCard label="Solicitudes activas" value={acquisitionRequests.length} icon={<FolderCheck className="h-4 w-4" />} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
          <div className="lg:col-span-2 space-y-12">
            <section className="space-y-4">
              <SectionTitle title="Mis Executive Assessments™ guardados" />

              {savedEvaluations.length === 0 ? (
                <EmptyState
                  title="No tiene evaluaciones guardadas."
                  text="Inicie una evaluación para identificar categorías de activos compatibles con sus objetivos de negocio."
                  actionLabel="Iniciar evaluación"
                  actionTo="/solution-match"
                />
              ) : (
                <div className="space-y-4">
                  {savedEvaluations.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white border border-neutral-200 p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-neutral-400 transition"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-mono font-bold bg-neutral-100 text-neutral-800 px-2 py-0.5 uppercase rounded border border-neutral-200">
                            {item.id}
                          </span>
                          <span className="text-[10px] text-neutral-400 font-light flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {item.date}
                          </span>
                        </div>

                        <h3 className="text-xs font-black text-neutral-950 uppercase tracking-wide">
                          Diagnóstico corporativo • {item.industry}
                        </h3>

                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-neutral-500 font-light">
                          <span>Tamaño: <strong className="text-neutral-700">{item.businessSize}</strong></span>
                          <span>Inversión: <strong className="text-neutral-700">{item.budget}</strong></span>
                          <span>Desafíos: <strong className="text-neutral-700">{item.problemsCount}</strong></span>
                          <span>Objetivos: <strong className="text-neutral-700">{item.goalsCount}</strong></span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <Link
                          to="/solution-match"
                          className="px-3.5 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg transition"
                        >
                          Ver
                        </Link>

                        <button
                          onClick={() => removeEvaluation(item.id)}
                          className="p-1.5 text-neutral-400 hover:text-neutral-950 hover:bg-neutral-50 rounded-lg transition"
                          title="Eliminar evaluación"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            <section className="space-y-4">
              <SectionTitle title="Mis activos favoritos" />

              {savedAssets.length === 0 ? (
                <EmptyState
                  title="No tiene activos guardados."
                  text="Explore el portfolio y guarde activos de interés para revisarlos más tarde."
                  actionLabel="Explorar portfolio"
                  actionTo="/pricing"
                />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {savedAssets.map((asset) => (
                    <div
                      key={asset.id}
                      className="bg-white border border-neutral-200 p-5 rounded-2xl flex flex-col justify-between space-y-4 hover:border-neutral-400 transition"
                    >
                      <div className="space-y-2">
                        <div className="flex justify-between items-start gap-2">
                          <span className="text-[9px] font-mono font-bold bg-neutral-950 text-white rounded px-2 py-0.5 uppercase tracking-wide">
                            Saved Asset™
                          </span>

                          <button
                            onClick={() => removeFavorite(asset.id)}
                            className="p-1 text-neutral-300 hover:text-red-600 rounded transition"
                            title="Quitar favorito"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>

                        <span className="text-[10px] text-neutral-400 font-bold uppercase">
                          {asset.publicCategory}
                        </span>

                        <h3 className="text-sm font-black text-neutral-950 uppercase tracking-tight">
                          {asset.publicName}
                        </h3>

                        <p className="text-[11px] text-neutral-500 font-light leading-relaxed line-clamp-2">
                          {asset.publicDescription}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-[10px]">
                        <span className="text-neutral-400 uppercase font-mono font-bold">
                          Ventana orientativa:
                        </span>
                        <span className="font-bold text-neutral-800">{asset.estimatedTime}</span>
                      </div>

                      <Link
                        to="/contact"
                        className="w-full text-center py-2 bg-neutral-900 hover:bg-neutral-800 text-white text-[9px] font-bold uppercase tracking-widest rounded transition"
                      >
                        Solicitar Disponibilidad
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>

          <aside className="space-y-12">
            <section className="space-y-4">
              <SectionTitle title="Solicitudes de adquisición" />

              {acquisitionRequests.length === 0 ? (
                <EmptyState
                  title="No tiene solicitudes activas."
                  text="Cuando solicite disponibilidad de un activo, su estado aparecerá en este espacio privado."
                  actionLabel="Solicitar disponibilidad"
                  actionTo="/contact"
                />
              ) : (
                <div className="space-y-4">
                  {acquisitionRequests.map((request) => (
                    <div key={request.id} className="bg-neutral-50 border border-neutral-200 p-5 rounded-2xl space-y-2">
                      <span className="text-[9px] font-mono text-neutral-400 font-bold uppercase">
                        {request.id}
                      </span>
                      <h3 className="text-xs font-black text-neutral-950 uppercase tracking-wide">
                        {request.assetName || request.category || "Solicitud de adquisición"}
                      </h3>
                      <p className="text-[11px] text-neutral-500">{request.status}</p>
                      <p className="text-[10px] text-neutral-400">{request.date}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>

            <section className="bg-neutral-950 text-white rounded-2xl p-6 space-y-4 border border-neutral-800">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-neutral-100" />
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-black">
                  Protección
                </span>
              </div>

              <h3 className="text-xs font-black uppercase tracking-wider text-white">
                Transaction Protection™
              </h3>

              <p className="text-[11px] text-neutral-300 font-light leading-relaxed">
                ProjectApps™ utiliza un proceso privado de validación, disponibilidad y transferencia para proteger tanto al comprador como al propietario del activo.
              </p>

              <Link
                to="/transaction-protection"
                className="text-[10px] font-bold text-white hover:underline flex items-center gap-1 uppercase tracking-wider"
              >
                Conocer protección <ArrowRight className="h-3 w-3" />
              </Link>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}

function SummaryCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono text-neutral-400 uppercase font-black">
          {label}
        </span>
        <span className="text-neutral-400">{icon}</span>
      </div>

      <div className="mt-4 flex items-baseline justify-between">
        <span className="text-3xl font-black text-neutral-950">{value}</span>
        <span className="text-xs text-neutral-400">Actual</span>
      </div>
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 border-b border-neutral-200 pb-2">
      {title}
    </h2>
  );
}

function EmptyState({
  title,
  text,
  actionLabel,
  actionTo,
}: {
  title: string;
  text: string;
  actionLabel: string;
  actionTo: string;
}) {
  return (
    <div className="bg-neutral-50 rounded-xl p-8 text-center border border-dashed border-neutral-300">
      <p className="text-sm font-bold text-neutral-900 mb-2">{title}</p>
      <p className="text-xs text-neutral-400 font-light mb-5 max-w-md mx-auto">
        {text}
      </p>

      <Link
        to={actionTo}
        className="inline-flex items-center gap-1 text-xs font-bold text-neutral-900 hover:underline uppercase tracking-wider"
      >
        {actionLabel}
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}