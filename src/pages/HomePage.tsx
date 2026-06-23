import React from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  AlertCircle,
  ArrowRight,
  BookOpen,
  Briefcase,
  Check,
  Code,
  Compass,
  Cpu,
  FileCode,
  FileText,
  FolderArchive,
  Layers,
  Lock,
  Network,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export default function HomePage() {
  const capabilities = [
    {
      title: "Ventas e Ingresos",
      desc: "Activos orientados a revisar oportunidades comerciales, señales de venta y posibles fugas de monetización.",
      result: "Mejor priorización comercial según el alcance del activo evaluado.",
      icon: TrendingUp,
    },
    {
      title: "Operaciones",
      desc: "Sistemas estructurados para revisar procesos internos, tareas repetitivas y flujos operativos.",
      result: "Base útil para evaluar eficiencia, continuidad y reducción de fricción operativa.",
      icon: Activity,
    },
    {
      title: "Marketing",
      desc: "Herramientas para analizar captación, leads, campañas y señales de crecimiento.",
      result: "Mejor lectura de oportunidades de adquisición y seguimiento comercial.",
      icon: Zap,
    },
    {
      title: "Seguridad",
      desc: "Activos enfocados en revisión, trazabilidad, control de riesgos y confianza documental.",
      result: "Mayor claridad sobre eventos, registros o riesgos según implementación.",
      icon: Lock,
    },
    {
      title: "Contenido",
      desc: "Sistemas para organizar, empaquetar y gestionar materiales digitales o activos creativos.",
      result: "Estructura más clara para revisar distribución, licencias o uso interno.",
      icon: Users,
    },
    {
      title: "Comercio",
      desc: "Activos relacionados con pedidos, procesos comerciales, catálogos, cobros o flujos transaccionales.",
      result: "Mejor organización del flujo comercial según el caso de uso.",
      icon: ShoppingBag,
    },
    {
      title: "Infraestructura",
      desc: "Bases técnicas, conectores o estructuras de plataforma disponibles para evaluación.",
      result: "Punto de partida técnico para revisión, adaptación o continuidad.",
      icon: Network,
    },
    {
      title: "Educación",
      desc: "Portales, estructuras de conocimiento y materiales orientados a formación o documentación interna.",
      result: "Mejor organización del aprendizaje y transferencia de información.",
      icon: BookOpen,
    },
    {
      title: "Documentos",
      desc: "Herramientas para generar, ordenar o revisar documentos empresariales y reportes internos.",
      result: "Reducción de fricción documental según reglas y alcance del activo.",
      icon: FileCode,
    },
    {
      title: "Inteligencia Empresarial",
      desc: "Motores de análisis, clasificación o decisión para convertir información en lectura accionable.",
      result: "Mejor visibilidad sobre datos, señales o prioridades de negocio.",
      icon: Cpu,
    },
  ];

  const deliverables = [
    {
      title: "Aplicación disponible",
      desc: "Activo revisable en su estado actual, sujeto a alcance, disponibilidad y validación técnica.",
      icon: Layers,
    },
    {
      title: "Código disponible",
      desc: "Material técnico existente para revisión, continuidad o adaptación según modalidad adquirida.",
      icon: Code,
    },
    {
      title: "Documentación existente",
      desc: "Guías, notas o materiales disponibles según el nivel de avance del activo.",
      icon: FileText,
    },
    {
      title: "Licencia aplicable",
      desc: "Condiciones de uso sujetas al alcance comercial, términos pactados y disponibilidad.",
      icon: ShieldCheck,
    },
    {
      title: "Opción White Label",
      desc: "Posible modalidad de marca blanca sujeta a revisión privada y acuerdo correspondiente.",
      icon: Sparkles,
    },
    {
      title: "Roadmap disponible",
      desc: "Hitos, mejoras o tareas pendientes documentadas cuando el activo lo incluya.",
      icon: BookOpen,
    },
    {
      title: "Materiales transferibles",
      desc: "Elementos del activo disponibles para transferencia según contrato, alcance y modalidad.",
      icon: Briefcase,
    },
    {
      title: "Proceso de transferencia",
      desc: "Revisión ordenada de materiales, modalidad de entrega y pasos de continuidad.",
      icon: Network,
    },
  ];

  const exampleScenarios = [
    {
      problem:
        "Una empresa necesita reducir el tiempo de evaluación antes de construir una herramienta interna desde cero.",
      solution:
        "Revisa un activo disponible del área de Operaciones para determinar si puede servir como base técnica inicial.",
      result:
        "Resultado esperado: identificar si conviene adquirir, adaptar o descartar el activo antes de invertir en desarrollo completo.",
    },
    {
      problem:
        "Un equipo técnico busca una base avanzada para acelerar una solución de seguridad o trazabilidad.",
      solution:
        "Evalúa un Project ZIP™ con estructura existente, documentación disponible y pendientes técnicos identificables.",
      result:
        "Resultado esperado: tomar una decisión informada sobre continuidad, adaptación o integración bajo su propio equipo.",
    },
  ];

  const comparison = [
    {
      metric: "Tiempo de evaluación",
      build: "Requiere descubrir alcance, arquitectura y viabilidad desde cero.",
      acquire: "Revisión de activos existentes.",
    },
    {
      metric: "Costo inicial",
      build: "Puede exigir inversión alta antes de validar si la solución es adecuada.",
      acquire: "Evaluación previa de una base ya estructurada.",
    },
    {
      metric: "Riesgo técnico",
      build: "Mayor incertidumbre sobre alcance, dependencias y tiempos reales.",
      acquire: "Base técnica disponible para evaluación.",
    },
    {
      metric: "Modelo comercial",
      build: "Depende de desarrollo propio, proveedores o consultoría continua.",
      acquire: "Modalidad de adquisición según acuerdo.",
    },
  ];

  return (
    <div
      id="premium-home-page"
      className="min-h-screen overflow-x-hidden bg-white font-sans text-neutral-900 selection:bg-neutral-900 selection:text-white"
    >
      <section
        id="elegant-hero"
        className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center justify-center space-y-10 px-6 pb-24 pt-32 text-center md:px-12"
      >
        <span
          id="hero-mini-tag"
          className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-neutral-900"
        >
          <Sparkles className="h-3.5 w-3.5 text-neutral-950" />
          Private Business Asset Marketplace™
        </span>

        <h1
          id="hero-display-head"
          className="max-w-5xl text-4xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-6xl md:text-7xl"
        >
          Explore activos de software empresarial.
          <br />
          <span className="font-serif font-light text-neutral-500">
            Evalúe antes de construir desde cero.
          </span>
        </h1>

        <p
          id="hero-subhead"
          className="max-w-3xl text-lg font-light leading-relaxed text-neutral-500 md:text-xl"
        >
          Explore activos de software empresarial disponibles para evaluación, adquisición o transferencia según alcance,
          disponibilidad y condiciones comerciales aplicables.
        </p>

        <div id="hero-cta-group" className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            id="hero-primary-cta"
            to="/solution-match"
            className="inline-flex items-center gap-2 rounded bg-neutral-900 px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-sm transition-all duration-150 hover:bg-neutral-800"
          >
            Encontrar mi solución <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            id="hero-secondary-cta"
            to="/pricing"
            className="rounded border border-neutral-200 bg-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-neutral-800 transition-all duration-150 hover:bg-neutral-50"
          >
            Explorar portfolio
          </Link>
        </div>

        <div
          id="hero-meta-footer"
          className="space-x-2 pt-6 font-mono text-xs uppercase tracking-wider text-neutral-400"
        >
          <span>Explore</span>
          <span className="text-neutral-300">•</span>
          <span>Evaluate</span>
          <span className="text-neutral-300">•</span>
          <span>Request Availability</span>
          <span className="text-neutral-300">•</span>
          <span className="rounded bg-neutral-100 px-1.5 py-0.5 font-bold text-neutral-900">
            Project ZIP™
          </span>
        </div>
      </section>

      <section
        id="why-projectapps"
        className="border-y border-neutral-200 bg-neutral-50 px-6 py-24 md:px-12"
      >
        <div className="mx-auto max-w-4xl space-y-8">
          <span className="block font-mono text-[10px] font-black uppercase tracking-widest text-neutral-400">
            01. Evaluación antes de construcción
          </span>

          <h2
            id="why-title"
            className="text-3xl font-extrabold leading-tight tracking-tight text-neutral-950 md:text-5xl"
          >
            ProjectApps™ ayuda a revisar activos digitales estructurados antes de invertir tiempo y capital construyendo
            desde cero.
          </h2>

          <div className="grid grid-cols-1 gap-8 pt-4 md:grid-cols-2">
            <p className="text-sm font-light leading-relaxed text-neutral-500 md:text-base">
              <strong>ProjectApps™</strong> existe para reducir el tiempo de evaluación y adquisición de activos digitales
              empresariales, permitiendo revisar opciones estructuradas antes de construir desde cero.
            </p>

            <p className="text-sm font-light leading-relaxed text-neutral-500 md:text-base">
              El objetivo no es prometer software universal ni resultados automáticos. El objetivo es facilitar un proceso
              claro para explorar, evaluar y solicitar disponibilidad de activos según alcance real.
            </p>
          </div>
        </div>
      </section>

      <section id="capabilities-section" className="mx-auto max-w-6xl space-y-12 px-6 py-24 md:px-12">
        <div className="space-y-2 text-center md:text-left">
          <span className="block font-mono text-[10px] font-black uppercase tracking-widest text-neutral-400">
            02. Categorías del portfolio
          </span>

          <h2 id="capabilities-title" className="text-3xl font-extrabold tracking-tight text-neutral-900">
            Capacidades disponibles para revisión
          </h2>

          <p className="max-w-xl text-sm font-light text-neutral-500">
            Cada categoría agrupa activos de software empresarial que pueden ser evaluados según necesidad, disponibilidad
            y modalidad comercial.
          </p>
        </div>

        <div id="capabilities-grid" className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, idx) => {
            const IconComponent = item.icon;

            return (
              <div
                key={item.title}
                id={`capability-card-${idx}`}
                className="group flex flex-col justify-between space-y-6 rounded-xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-200 hover:border-neutral-400"
              >
                <div className="space-y-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 p-2.5 text-neutral-950">
                    <IconComponent className="h-5 w-5" />
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-neutral-950">
                    {item.title}
                  </h3>

                  <p className="text-xs font-light leading-relaxed text-neutral-500">
                    {item.desc}
                  </p>
                </div>

                <div className="space-y-3 border-t border-neutral-100 pt-4">
                  <div className="space-y-1">
                    <span className="block text-[9px] font-bold uppercase tracking-wider text-neutral-400">
                      Resultado posible:
                    </span>

                    <p className="text-xs font-medium leading-relaxed text-neutral-800">
                      {item.result}
                    </p>
                  </div>

                  <Link
                    to="/solution-match"
                    className="inline-flex items-center gap-1 pt-2 text-[11px] font-black text-neutral-900 hover:underline"
                  >
                    Buscar disponibilidad <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section
        id="home-project-zip"
        className="relative overflow-hidden border-y border-neutral-900 bg-neutral-950 px-6 py-24 text-neutral-100 md:px-12"
      >
        <div className="absolute right-0 top-0 p-8 opacity-[0.03]">
          <FolderArchive className="h-64 w-64" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-neutral-200">
            <FolderArchive className="h-3.5 w-3.5 text-amber-400" />
            Formato de entrega directa
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Project ZIP™
            <br />
            <span className="mt-1 block font-serif text-2xl font-light text-neutral-400 md:text-4xl">
              Estructura técnica en su estado real de avance
            </span>
          </h2>

          <p className="max-w-3xl text-sm font-light leading-relaxed text-neutral-300 md:text-base">
            Project ZIP™ es una modalidad específica para equipos técnicos que desean revisar una base existente y
            continuar su evolución. Permite revisión y continuidad bajo control de su equipo técnico.
          </p>

          <div className="grid grid-cols-1 gap-4 pt-4 text-xs sm:grid-cols-2">
            {[
              {
                title: "Código disponible",
                text: "Archivos existentes sujetos a revisión técnica, alcance y condiciones de entrega.",
              },
              {
                title: "Estructura actual",
                text: "Carpetas, assets y dependencias disponibles en el estado real del proyecto.",
              },
              {
                title: "Documentación disponible",
                text: "Guías o notas existentes según el nivel de avance del activo.",
              },
              {
                title: "Roadmap disponible",
                text: "Hitos, pendientes o sugerencias de continuidad cuando estén documentados.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 rounded-lg border border-neutral-800 bg-neutral-900 p-4"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <div>
                  <span className="block font-semibold text-neutral-100">{item.title}</span>
                  <p className="mt-1 font-light leading-relaxed text-neutral-400">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-3 rounded-lg border border-neutral-800 bg-neutral-900 p-5 text-xs text-neutral-400">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
            <p className="leading-relaxed">
              <strong>Nota técnica de alcance:</strong> Esta modalidad no implica software listo para producción, soporte
              ilimitado ni integraciones adicionales no pactadas. La revisión debe realizarse sobre el estado real del activo
              y las condiciones acordadas.
            </p>
          </div>

          <Link
            to="/pricing"
            className="inline-block whitespace-nowrap rounded bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-neutral-950 transition hover:bg-neutral-100"
          >
            Ver portfolio completo
          </Link>
        </div>
      </section>

      <section id="what-you-receive" className="mx-auto max-w-6xl space-y-12 px-6 py-24 md:px-12">
        <div className="space-y-2 text-center md:text-left">
          <span className="block font-mono text-[10px] font-black uppercase tracking-widest text-neutral-400">
            03. Materiales posibles
          </span>

          <h2 id="receive-title" className="text-3xl font-extrabold tracking-tight text-neutral-900">
            ¿Qué puede incluir un activo?
          </h2>

          <p className="max-w-xl text-sm font-light text-neutral-500">
            Los entregables dependen del tipo de activo, estado técnico, modalidad comercial y condiciones de transferencia.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {deliverables.map((item, idx) => {
            const IconComp = item.icon;

            return (
              <div
                key={item.title}
                id={`receive-card-${idx}`}
                className="space-y-3 rounded-lg border border-neutral-200 bg-neutral-50 p-6 transition-all duration-150 hover:-translate-y-0.5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-neutral-200 bg-white p-2 text-neutral-900">
                  <IconComp className="h-4 w-4" />
                </div>

                <h3 className="text-sm font-bold text-neutral-900">{item.title}</h3>

                <p className="text-xs font-light leading-relaxed text-neutral-500">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section
        id="use-cases-section"
        className="border-y border-neutral-200 bg-neutral-50 px-6 py-24 md:px-12"
      >
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="space-y-1 text-center md:text-left">
            <span className="block font-mono text-[10px] font-black uppercase tracking-widest text-neutral-400">
              04. Escenarios ejemplo
            </span>

            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900">
              Escenarios ejemplo de evaluación
            </h2>

            <p className="text-sm font-light text-neutral-500">
              Situaciones ilustrativas para entender cómo puede evaluarse un activo antes de adquirirlo o adaptarlo.
            </p>
          </div>

          <div className="space-y-12">
            {exampleScenarios.map((scenario, idx) => (
              <div
                key={scenario.problem}
                id={`case-study-${idx}`}
                className="grid grid-cols-1 items-start gap-8 rounded-xl border border-neutral-200 bg-white p-8 shadow-sm md:grid-cols-12"
              >
                <div className="md:col-span-2">
                  <span className="inline-block rounded-md bg-neutral-950 px-3 py-1 font-mono text-[10px] font-bold text-white">
                    ESCENARIO #{idx + 1}
                  </span>
                </div>

                <div className="space-y-6 md:col-span-10">
                  <div className="space-y-1.5">
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                      Problema:
                    </span>

                    <p className="text-sm font-light leading-relaxed text-neutral-700">
                      {scenario.problem}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-6 border-t border-neutral-100 pt-2 sm:grid-cols-2">
                    <div className="space-y-1">
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                        Posible revisión:
                      </span>

                      <p className="text-xs leading-relaxed text-neutral-600">
                        {scenario.solution}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                        Resultado esperado:
                      </span>

                      <p className="text-xs font-medium leading-relaxed text-neutral-700">
                        {scenario.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="build-vs-acquire" className="mx-auto max-w-5xl space-y-12 px-6 py-24 md:px-12">
        <div className="space-y-2 text-center md:text-left">
          <span className="block font-mono text-[10px] font-black uppercase tracking-widest text-neutral-400">
            05. Comparativa de decisión
          </span>

          <h2 id="compare-title" className="text-3xl font-extrabold tracking-tight text-neutral-900">
            Construir desde cero vs evaluar activos existentes
          </h2>

          <p className="max-w-md text-sm font-light text-neutral-500">
            Compare rutas posibles antes de comprometer presupuesto, equipo técnico o meses de desarrollo.
          </p>
        </div>

        <div id="compare-table" className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
          <div className="grid grid-cols-3 border-b border-neutral-200 bg-neutral-50 p-4 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
            <div>Métrica</div>
            <div>Construcción desde cero</div>
            <div className="text-neutral-950">ProjectApps™</div>
          </div>

          <div className="divide-y divide-neutral-200 text-xs">
            {comparison.map((row) => (
              <div key={row.metric} className="grid grid-cols-3 items-center gap-4 p-5">
                <div className="font-bold text-neutral-900">{row.metric}</div>
                <div className="font-light text-neutral-500">{row.build}</div>
                <div className="rounded border border-neutral-100 bg-neutral-50 p-2 font-medium text-neutral-950">
                  {row.acquire}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="elegant-cta" className="mx-auto max-w-5xl px-6 py-20 md:px-12">
        <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 p-8 text-center text-white md:p-16">
          <div className="absolute right-0 top-0 p-8 opacity-[0.02]">
            <Compass className="h-60 w-60" />
          </div>

          <div className="relative z-10 mx-auto max-w-2xl space-y-4">
            <span className="block text-[10px] font-black uppercase tracking-widest text-neutral-400">
              Explore, evaluate and request availability
            </span>

            <h2 id="cta-title" className="text-2xl font-extrabold tracking-tight md:text-4xl">
              Encuentre el activo correcto para evaluar.
            </h2>

            <p id="cta-desc" className="text-sm font-light leading-relaxed text-neutral-300 md:text-base">
              Explore el portfolio o use Solution Match™ para identificar qué categoría puede ajustarse mejor a sus objetivos.
            </p>

            <div id="cta-buttons" className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                id="cta-primary-btn"
                to="/solution-match"
                className="whitespace-nowrap rounded bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-neutral-950 transition hover:bg-neutral-100"
              >
                Encontrar mi solución
              </Link>

              <Link
                id="cta-secondary-btn"
                to="/pricing"
                className="whitespace-nowrap rounded border border-neutral-700 bg-neutral-800 px-6 py-3 text-xs font-bold uppercase tracking-wider text-neutral-200 transition hover:text-white"
              >
                Explorar portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}