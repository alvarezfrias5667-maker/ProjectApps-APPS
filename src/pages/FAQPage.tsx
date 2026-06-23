import React from "react";
import { Link } from "react-router-dom";
import { HelpCircle, FileCheck, Landmark, ShieldAlert, ArrowRight, BookOpen, Layers, Terminal, Sparkles, AlertCircle } from "lucide-react";

export default function FAQPage() {
  const sections = [
    {
      title: "Adquisición",
      icon: BookOpen,
      questions: [
        {
          q: "¿Qué compra exactamente el cliente?",
          a: "Dependiendo del activo seleccionado, el cliente puede adquirir una licencia comercial, una licencia extendida o acceso a modalidades de transferencia disponibles para determinadas categorías."
        },
        {
          q: "¿Cómo se inicia una adquisición?",
          a: "Mediante una solicitud de disponibilidad enviada desde la plataforma."
        },
        {
          q: "¿Existe una suscripción mensual?",
          a: "No. ProjectApps™ no opera bajo un modelo SaaS recurrente."
        }
      ]
    },
    {
      title: "Project ZIP™",
      icon: Layers,
      questions: [
        {
          q: "¿Qué es un Project ZIP™?",
          a: "Representa la transferencia del estado real disponible de un proyecto empresarial existente."
        },
        {
          q: "¿Qué incluye?",
          a: "Código disponible, estructura del proyecto, documentación existente y materiales técnicos asociados al momento de la transferencia."
        },
        {
          q: "¿Incluye nuevas funcionalidades?",
          a: "No. Refleja el estado real del proyecto al momento de la adquisición."
        }
      ]
    },
    {
      title: "Implementación",
      icon: Landmark,
      questions: [
        {
          q: "¿Incluye hosting?",
          a: "No. El cliente mantiene control total de su infraestructura."
        },
        {
          q: "¿Incluye dominio?",
          a: "No."
        },
        {
          q: "¿Incluye despliegue?",
          a: "Depende del activo y modalidad comercial seleccionada."
        }
      ]
    },
    {
      title: "Código Fuente",
      icon: Terminal,
      questions: [
        {
          q: "¿Puedo adquirir código fuente?",
          a: "Determinadas categorías permiten acceso a modalidades de transferencia de código."
        },
        {
          q: "¿Puedo modificar el activo?",
          a: "Las posibilidades dependen de la licencia o modalidad adquirida."
        },
        {
          q: "¿Existe dependencia con servidores de ProjectApps™?",
          a: "No. Los activos están diseñados para minimizar dependencias externas innecesarias."
        }
      ]
    },
    {
      title: "Licenciamiento",
      icon: Sparkles,
      questions: [
        {
          q: "¿Qué tipos de licencia existen?",
          a: "Licencias comerciales, extendidas, exclusivas y modalidades especiales según disponibilidad."
        },
        {
          q: "¿Puedo adquirir exclusividad?",
          a: "Algunos activos permiten modalidades exclusivas sujetas a disponibilidad."
        },
        {
          q: "¿Puedo solicitar marca blanca?",
          a: "Sí, en determinadas categorías y modalidades comerciales."
        }
      ]
    }
  ];

  return (
    <div id="faq-page-container" className="bg-white text-neutral-900 pb-24 selection:bg-neutral-900 selection:text-white">
      
      {/* HERO SECTION */}
      <section id="faq-hero" className="pt-32 pb-20 px-6 md:px-12 max-w-5xl mx-auto text-center space-y-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold tracking-widest text-neutral-900 bg-neutral-100 uppercase rounded-full">
          Preguntas Frecuentes
        </span>
        <h1 id="faq-hero-title" className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950">
          Preguntas Frecuentes
        </h1>
        <p id="faq-hero-subtitle" className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed">
          Todo lo relacionado con licenciamiento, activos digitales, Project ZIP™, transferencia y adquisición.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            to="/acquisition-process"
            className="px-6 py-2.5 bg-neutral-900 text-white text-xs font-bold uppercase tracking-wider rounded border border-transparent hover:bg-neutral-800 transition"
          >
            View Acquisition Process
          </Link>
          <Link
            to="/what-you-receive"
            className="px-6 py-2.5 bg-neutral-100 text-neutral-800 text-xs font-bold uppercase tracking-wider rounded border border-transparent hover:bg-neutral-200 transition"
          >
            What Buyers Receive
          </Link>
        </div>
      </section>

      {/* CORE FAQ SECTIONS */}
      <section id="faq-body" className="px-6 md:px-12 max-w-4xl mx-auto space-y-16">
        {sections.map((section, sIdx) => {
          const SectionIcon = section.icon;
          return (
            <div key={sIdx} id={`faq-section-${sIdx}`} className="space-y-6 border-t border-neutral-150 pt-10 first:border-0 first:pt-0">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-neutral-100 text-neutral-900 rounded shrink-0">
                  <SectionIcon className="h-4 w-4" />
                </div>
                <h2 className="text-lg font-black uppercase tracking-wider text-neutral-950">
                  {section.title}
                </h2>
              </div>

              <div className="space-y-6">
                {section.questions.map((item, qIdx) => (
                  <div key={qIdx} className="space-y-2">
                    <h3 className="text-base font-bold text-neutral-900 flex items-start gap-2.5">
                      <span className="text-xs font-mono text-neutral-400 mt-1 font-bold">Q.</span>
                      {item.q}
                    </h3>
                    <p className="text-sm text-neutral-600 font-light leading-relaxed pl-6">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA FINAL FAQ */}
      <section id="faq-cta" className="py-20 px-6 md:px-12 max-w-5xl mx-auto mt-16">
        <div className="bg-neutral-900 text-white rounded-xl p-8 md:p-16 text-center space-y-6 relative overflow-hidden border border-neutral-800">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              ¿No encontró la respuesta?
            </h3>
            <p className="text-xs md:text-sm text-neutral-300 font-light leading-relaxed">
              Envíe una solicitud y nuestro equipo revisará su caso.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-white text-neutral-950 text-xs font-bold uppercase tracking-wider rounded hover:bg-neutral-100 transition inline-flex items-center gap-2 whitespace-nowrap"
              >
                Contactar Adquisiciones <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/acquisition-process"
                className="px-6 py-3 bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-700 text-xs font-bold uppercase tracking-wider rounded transition whitespace-nowrap"
              >
                View Acquisition Process
              </Link>
              <Link
                to="/what-you-receive"
                className="px-6 py-3 bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800 text-xs font-bold uppercase tracking-wider rounded transition whitespace-nowrap"
              >
                What Buyers Receive
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
