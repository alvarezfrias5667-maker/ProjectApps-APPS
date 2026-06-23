import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SOLUTIONS } from "../data/solutionsData";
import {
  Activity,
  ArrowRight,
  Bookmark,
  BookmarkCheck,
  CheckCircle2,
  Compass,
  Cpu,
  FolderArchive,
  Globe,
  Info,
  LayoutGrid,
  Lightbulb,
  Lock,
  Network,
  Shield,
  ShoppingBag,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

type SolutionAsset = (typeof SOLUTIONS)[number];

const portfolioCategories = [
  {
    friendlyName: "Ventas e Ingresos",
    techName: "Revenue Intelligence",
    desc: "Activos orientados a detectar fugas comerciales, priorizar oportunidades y mejorar decisiones de monetización.",
    icon: TrendingUp,
  },
  {
    friendlyName: "Toma de Decisiones",
    techName: "Decision Intelligence",
    desc: "Sistemas diseñados para organizar señales operativas y convertirlas en decisiones accionables.",
    icon: Cpu,
  },
  {
    friendlyName: "Oportunidades de Mercado",
    techName: "Opportunity Intelligence",
    desc: "Herramientas para identificar brechas, demandas no cubiertas y oportunidades comerciales evaluables.",
    icon: Lightbulb,
  },
  {
    friendlyName: "Operaciones e Ingeniería",
    techName: "Operations Intelligence",
    desc: "Activos para ordenar procesos internos, reducir fricción operativa y mejorar ejecución técnica.",
    icon: Activity,
  },
  {
    friendlyName: "Seguridad y Cumplimiento",
    techName: "Security & Trust Intelligence",
    desc: "Sistemas enfocados en trazabilidad, control de riesgos, revisión operativa y confianza documental.",
    icon: Lock,
  },
  {
    friendlyName: "Marketing y Adquisición",
    techName: "Marketing & Growth Intelligence",
    desc: "Activos para evaluar campañas, mejorar captación y detectar señales útiles de crecimiento.",
    icon: Zap,
  },
  {
    friendlyName: "Contenido y Creadores",
    techName: "Creator Intelligence",
    desc: "Sistemas para organizar, empaquetar y gestionar activos digitales de contenido o propiedad intelectual.",
    icon: Users,
  },
  {
    friendlyName: "Comercio y Transacciones",
    techName: "Commerce Intelligence",
    desc: "Herramientas orientadas a ordenar flujos comerciales, pagos, pedidos y procesos de venta digital.",
    icon: ShoppingBag,
  },
  {
    friendlyName: "Módulos de Industria",
    techName: "Industry Intelligence",
    desc: "Activos verticales adaptables a sectores específicos con lógica de negocio previamente estructurada.",
    icon: Globe,
  },
  {
    friendlyName: "Infraestructura y Plataforma",
    techName: "Infrastructure & Platform Intelligence",
    desc: "Componentes técnicos para soportar flujos, conectores, módulos internos y experiencias digitales propias.",
    icon: Network,
  },
];

const assetStatusList = [
  {
    name: "Ready Asset™",
    desc: "Activo con estructura avanzada disponible para revisión, validación técnica y posible transferencia.",
    className: "bg-neutral-100 text-neutral-900 border border-neutral-300",
  },
  {
    name: "Growth Asset™",
    desc: "Activo orientado a expansión comercial, mejora operativa o aceleración de procesos existentes.",
    className: "bg-neutral-50 text-neutral-800 border border-neutral-200",
  },
  {
    name: "Strategic Asset™",
    desc: "Modelo con lógica diferenciada, pensado para adquisición selectiva o uso estratégico.",
    className: "bg-white text-neutral-700 border border-neutral-200",
  },
  {
    name: "Project ZIP™",
    desc: "Paquete de código en su estado real de avance, apto para revisión por equipo técnico.",
    className: "bg-neutral-200 text-neutral-900 border border-neutral-300",
  },
  {
    name: "White Label Option™",
    desc: "Modalidad comercial sujeta a revisión de alcance, términos, licencia y disponibilidad.",
    className: "bg-amber-50 text-amber-900 border border-amber-200",
  },
];

const useCases = [
  {
    problem: "Detectar oportunidades comerciales antes de invertir en desarrollo completo.",
    category: "Ventas e Ingresos",
    status: "Ready Asset™",
  },
  {
    problem: "Ordenar señales de clientes, campañas o leads para priorizar acciones útiles.",
    category: "Marketing y Adquisición",
    status: "Growth Asset™",
  },
  {
    problem: "Revisar riesgos operativos o técnicos con una lógica más clara para equipos internos.",
    category: "Seguridad y Cumplimiento",
    status: "Strategic Asset™",
  },
  {
    problem: "Acelerar construcción con una base de código ya estructurada.",
    category: "Infraestructura y Plataforma",
    status: "Project ZIP™",
  },
  {
    problem: "Evaluar un activo adaptable para marca propia, integración o uso comercial.",
    category: "Comercio y Transacciones",
    status: "White Label Option™",
  },
];

function getAssetPublicName(asset: SolutionAsset) {
  return asset.publicName || "ProjectApps™ Asset";
}

function getAssetPublicDescription(asset: SolutionAsset) {
  return asset.publicDescription || "Activo de software disponible para revisión comercial y técnica.";
}

function getAssetPublicCategory(asset: SolutionAsset) {
  return asset.publicCategory || "Categoría por confirmar";
}

export default function PricingPage() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("favoriteAssetIds");
      if (saved) setFavoriteIds(JSON.parse(saved));
    } catch {
      setFavoriteIds([]);
    }
  }, []);

  const toggleFavorite = (id: string) => {
    const updated = favoriteIds.includes(id)
      ? favoriteIds.filter((favoriteId) => favoriteId !== id)
      : [...favoriteIds, id];

    setFavoriteIds(updated);
    localStorage.setItem("favoriteAssetIds", JSON.stringify(updated));
  };

  return (
    <div id="pricing-page" className="mx-auto max-w-6xl space-y-20 px-6 py-20 md:px-12">
      <header className="space-y-5 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-neutral-900">
          <Shield className="h-3.5 w-3.5" />
          Private Business Asset Marketplace™
        </span>

        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-neutral-900 md:text-5xl">
          Portfolio Marketplace™
        </h1>

        <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-neutral-500 md:text-lg">
          Explore activos de software disponibles para evaluación, adquisición o transferencia técnica según alcance,
          disponibilidad y condiciones comerciales aplicables.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-3">
          <Link
            to="/solution-match"
            className="rounded border border-transparent bg-neutral-900 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-neutral-800"
          >
            Encontrar mi solución
          </Link>

          <Link
            to="/acquisition-process"
            className="rounded border border-neutral-300 bg-neutral-50 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-800 transition hover:bg-neutral-100"
          >
            Cómo funciona la adquisición
          </Link>

          <a
            href="#portfolio-categories"
            className="rounded border border-neutral-200 bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-800 transition hover:bg-neutral-50"
          >
            Ver categorías
          </a>
        </div>
      </header>

      <section className="grid grid-cols-1 gap-6 rounded-xl border border-neutral-200 bg-neutral-50 p-6 md:grid-cols-3">
        {[
          {
            label: "01. ¿Qué adquiere?",
            title: "Activo de software",
            text: "Código, estructura funcional o paquete técnico sujeto a revisión de alcance y condiciones de entrega.",
          },
          {
            label: "02. ¿Por qué es diferente?",
            title: "Base propia evaluable",
            text: "Permite iniciar desde una estructura existente en lugar de comenzar desde cero cada implementación.",
          },
          {
            label: "03. ¿Cómo se entrega?",
            title: "Transferencia documentada",
            text: "La entrega puede realizarse como aplicativo, módulo, blueprint técnico o Project ZIP™ según disponibilidad.",
          },
        ].map((item) => (
          <div key={item.label} className="space-y-1">
            <span className="font-mono text-[10px] font-black uppercase text-neutral-400">{item.label}</span>
            <h2 className="text-sm font-bold text-neutral-900">{item.title}</h2>
            <p className="text-xs font-light leading-relaxed text-neutral-500">{item.text}</p>
          </div>
        ))}
      </section>

      <section id="portfolio-inventory" className="space-y-6 rounded-xl border border-neutral-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col justify-between gap-4 border-b border-neutral-200 pb-5 md:flex-row md:items-center">
          <div>
            <h2 className="flex items-center gap-2 text-base font-black uppercase tracking-wider text-neutral-950">
              <LayoutGrid className="h-4 w-4" />
              Portfolio Inventory™
            </h2>
            <p className="mt-0.5 text-xs font-light text-neutral-500">
              Inventario comercial orientativo de activos disponibles para evaluación.
            </p>
          </div>

          <span className="rounded bg-neutral-900 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
            Disponibilidad sujeta a revisión
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
          {[
            ["Categorías", "Áreas de negocio"],
            ["Ready Assets", "Disponibles para revisión"],
            ["Growth Assets", "Disponibles para revisión"],
            ["Strategic Assets", "Disponibles para revisión"],
            ["Project ZIP™", "Disponibles para revisión"],
          ].map(([title, subtitle]) => (
            <div key={title} className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">{title}</span>
              <div className="mt-3 text-right">
                <span className="block text-sm font-black text-neutral-950">{subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="asset-status" className="space-y-6">
        <div className="space-y-1 text-center md:text-left">
          <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
            Clasificación del catálogo
          </span>
          <h2 className="text-xl font-extrabold tracking-tight text-neutral-900">Asset Status™</h2>
          <p className="text-xs font-light text-neutral-500">
            Cada estado describe el nivel de madurez y el formato probable del activo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
          {assetStatusList.map((status) => (
            <div
              key={status.name}
              className="flex flex-col justify-between space-y-4 rounded-lg border border-neutral-200 bg-white p-5 transition hover:border-neutral-400"
            >
              <div>
                <span className={`mb-3 inline-block rounded px-2 py-0.5 text-[9px] font-bold uppercase ${status.className}`}>
                  {status.name}
                </span>
                <p className="text-xs font-light leading-relaxed text-neutral-500">{status.desc}</p>
              </div>

              <Link
                to="/solution-match"
                className="inline-flex items-center gap-1 self-start text-[10px] font-bold text-neutral-800 hover:underline"
              >
                Filtrar tipo <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio-categories" className="scroll-mt-24 space-y-8">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
            Dominios tecnológicos
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900">Portfolio Categories™</h2>
          <p className="max-w-2xl text-sm font-light text-neutral-500">
            Los activos se agrupan por área de negocio para facilitar evaluación, comparación y solicitud de disponibilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {portfolioCategories.map((cat) => {
            const Icon = cat.icon;

            return (
              <div
                key={cat.techName}
                className="flex flex-col justify-between space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm transition hover:border-neutral-400"
              >
                <div className="space-y-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded border border-neutral-200 bg-neutral-100 text-neutral-950">
                    <Icon className="h-4 w-4" />
                  </div>

                  <div>
                    <h3 className="text-xs font-black uppercase leading-tight tracking-wide text-neutral-950">
                      {cat.friendlyName}
                    </h3>
                    <span className="mt-0.5 block font-mono text-[9px] text-neutral-400">
                      {cat.techName}
                    </span>
                  </div>

                  <p className="pt-1 text-[11px] font-light leading-relaxed text-neutral-500">{cat.desc}</p>
                </div>

                <Link
                  to="/solution-match"
                  className="group mt-2 flex items-center gap-1 text-[10px] font-bold text-neutral-800 hover:text-neutral-950"
                >
                  Explorar portfolio
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <section id="project-zip-section" className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-8 text-neutral-100 md:p-12">
        <div className="absolute right-0 top-0 p-8 opacity-5">
          <FolderArchive className="h-48 w-48" />
        </div>

        <div className="relative z-10 max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
            <FolderArchive className="h-3.5 w-3.5 text-amber-400" />
            Source Package Review
          </div>

          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Project ZIP™</h2>

          <p className="text-sm font-light leading-relaxed text-neutral-300">
            Project ZIP™ consiste en la entrega de un paquete técnico en su estado real de avance. Está pensado para
            equipos que desean revisar, continuar o adaptar una base existente.
          </p>

          <div className="grid grid-cols-1 gap-3 pt-2 text-xs sm:grid-cols-2">
            {[
              "Código fuente disponible",
              "Estructura lógica del proyecto",
              "Documentación disponible según avance",
              "Pendientes técnicos identificables",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded border border-neutral-800 bg-neutral-900 p-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-400" />
                <span className="font-medium text-neutral-200">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-2.5 rounded-lg border border-neutral-800 bg-neutral-900 p-4 text-[11px] text-neutral-400">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
            <p className="leading-relaxed">
              <strong>Nota de alcance:</strong> La transferencia de un Project ZIP™ refleja el estado exacto del activo
              al momento de la revisión o firma. No implica desarrollo a medida, soporte ilimitado ni garantía automática
              de producción sin validación técnica previa.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-block rounded bg-neutral-100 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-950 transition hover:bg-neutral-200"
          >
            Solicitar disponibilidad
          </Link>
        </div>
      </section>

      <section id="portfolio-scale" className="space-y-6">
        <div className="space-y-1 text-center md:text-left">
          <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
            Escala del portfolio
          </span>
          <h2 className="text-xl font-extrabold tracking-tight text-neutral-900">Portfolio Scale™</h2>
          <p className="text-xs font-light text-neutral-500">
            Estructura preparada para evaluación comercial, revisión técnica y adquisición selectiva.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              label: "Distribución",
              title: "Categorías de inteligencia",
              text: "Activos segmentados por áreas de negocio para facilitar navegación y selección.",
            },
            {
              label: "Modelos comerciales",
              title: "Acquisition Models™",
              text: "Opciones sujetas a alcance, disponibilidad, derechos incluidos y condiciones pactadas.",
            },
            {
              label: "Nivel de madurez",
              title: "Ready, Growth, Strategic & ZIP",
              text: "Cada activo puede evaluarse según avance, utilidad, estado técnico y necesidades del comprador.",
            },
          ].map((item) => (
            <div key={item.title} className="space-y-2 rounded-lg border border-neutral-200 bg-neutral-50 p-6">
              <span className="block font-mono text-[9px] font-bold uppercase text-neutral-400">{item.label}</span>
              <span className="block text-lg font-black text-neutral-950">{item.title}</span>
              <p className="text-xs font-light leading-relaxed text-neutral-500">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio-examples" className="space-y-8 pt-4">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Casos prácticos</span>
          <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900">
            Casos de uso de activos de software
          </h2>
          <p className="max-w-2xl text-sm font-light text-neutral-500">
            Ejemplos de problemas que pueden abordarse mediante activos evaluables del portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.problem}
              className="flex flex-col justify-between space-y-4 rounded-lg border border-neutral-200 bg-neutral-50 p-6 transition hover:bg-neutral-100"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded bg-neutral-950 px-2 py-0.5 font-mono text-[9px] font-bold uppercase text-white">
                    Caso #{index + 1}
                  </span>
                  <span className="text-right text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                    {useCase.category}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="block text-[9px] font-bold uppercase tracking-wider text-neutral-400">
                    Problema:
                  </span>
                  <p className="text-xs font-light leading-relaxed text-neutral-700">{useCase.problem}</p>
                </div>
              </div>

              <div className="mt-2 flex items-center justify-between border-t border-neutral-200 pt-3 text-[10px]">
                <span className="font-bold uppercase tracking-wider text-neutral-400">Estado:</span>
                <span className="font-bold text-neutral-800">{useCase.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="assets-catalog" className="space-y-8 pt-12">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
            Catálogo corporativo de activos
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900">
            Activos disponibles para evaluación
          </h2>
          <p className="max-w-2xl text-sm font-light text-neutral-500">
            Explore activos públicos del portfolio. Los nombres internos, identificadores técnicos y lógica privada no se
            muestran en esta página.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((asset) => {
            const isFavorite = favoriteIds.includes(asset.id);

            return (
              <article
                key={asset.id}
                className="group relative flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-6 transition hover:border-neutral-400"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded bg-neutral-950 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white">
                      ProjectApps™ Asset
                    </span>

                    <button
                      type="button"
                      onClick={() => toggleFavorite(asset.id)}
                      className={`flex cursor-pointer items-center justify-center rounded-lg border p-2 transition ${
                        isFavorite
                          ? "border-neutral-950 bg-neutral-950 text-white"
                          : "border-neutral-200 bg-white text-neutral-400 hover:border-neutral-300 hover:text-neutral-900"
                      }`}
                      aria-label={isFavorite ? "Quitar de favoritos" : "Guardar en favoritos"}
                      title={isFavorite ? "Quitar de favoritos" : "Guardar en favoritos"}
                    >
                      {isFavorite ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
                    </button>
                  </div>

                  <div>
                    <h3 className="text-base font-black uppercase tracking-tight text-neutral-950">
                      {getAssetPublicName(asset)}
                    </h3>

                    <p className="mt-1 line-clamp-3 text-xs font-light leading-relaxed text-neutral-500">
                      {getAssetPublicDescription(asset)}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 border-t border-neutral-100 pt-3">
                  <div className="flex justify-between gap-3 text-[11px]">
                    <span className="font-medium text-neutral-400">Categoría:</span>
                    <span className="text-right font-bold text-neutral-800">{getAssetPublicCategory(asset)}</span>
                  </div>

                  {"expectedBenefit" in asset && asset.expectedBenefit ? (
                    <div className="flex justify-between gap-3 text-[11px]">
                      <span className="font-medium text-neutral-400">Resultado posible:</span>
                      <span className="text-right font-bold text-neutral-800">{asset.expectedBenefit}</span>
                    </div>
                  ) : null}

                  {"estimatedTime" in asset && asset.estimatedTime ? (
                    <div className="flex justify-between gap-3 text-[11px]">
                      <span className="font-medium text-neutral-400">Ventana orientativa::</span>
                      <span className="text-right font-bold text-neutral-800">{asset.estimatedTime}</span>
                    </div>
                  ) : null}
                </div>

                <Link
                  to="/contact"
                  className="w-full rounded bg-neutral-900 py-2.5 text-center text-[10px] font-bold uppercase tracking-wider text-white transition hover:bg-neutral-800"
                >
                  Solicitar disponibilidad
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-8 text-center text-white md:p-12">
        <div className="absolute right-0 top-0 p-8 opacity-5">
          <Compass className="h-40 w-40" />
        </div>

        <div className="relative z-10 mx-auto max-w-2xl space-y-4">
          <span className="block text-[10px] font-black uppercase tracking-widest text-neutral-400">
            Evaluación de activos de software
          </span>

          <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
            ¿Listo para evaluar un activo del portfolio?
          </h2>

          <p className="text-sm font-light leading-relaxed text-neutral-300">
            Identifique qué activo se ajusta mejor a su negocio y solicite revisión de disponibilidad, alcance y condiciones.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              to="/solution-match"
              className="rounded bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-950 transition hover:bg-neutral-100"
            >
              Encontrar mi solución
            </Link>

            <Link
              to="/acquisition-process"
              className="rounded border border-neutral-700 bg-neutral-900 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-200 transition hover:text-white"
            >
              Cómo funciona la adquisición
            </Link>

            <Link
              to="/contact"
              className="rounded border border-neutral-800 bg-neutral-950 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-400 transition hover:text-neutral-200"
            >
              Solicitar disponibilidad
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}