import React from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Clock, 
  Check, 
  ArrowRight, 
  Sparkles, 
  Code, 
  FileText, 
  FolderArchive, 
  Info, 
  Gem,
  Award
} from "lucide-react";

export default function WhatYouReceivePage() {
  return (
    <div id="what-you-receive-page" className="bg-white text-neutral-900 pb-24 selection:bg-neutral-900 selection:text-white">
      
      {/* HERO SECTION */}
      <section id="receive-hero" className="pt-32 pb-20 px-6 md:px-12 max-w-5xl mx-auto text-center space-y-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold tracking-widest text-neutral-900 bg-neutral-100 uppercase rounded-full">
          Transparencia y Claridad de Entrega
        </span>
        <h1 id="receive-hero-title" className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-950 leading-tight">
          What Buyers Receive
        </h1>
        <p id="receive-hero-subtitle" className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed">
          Explicamos de forma transparente qué puede incluir cada modalidad de adquisición para que su equipo de ingeniería tome decisiones informadas.
        </p>
      </section>

      {/* CORE CARDS (EDITORIAL APPLE STYLE, LARGE SPACING) */}
      <section id="receive-tiers" className="px-6 md:px-12 max-w-5xl mx-auto space-y-16">
        
        {/* Tier 1: Ready Revenue Asset™ */}
        <div id="tier-ready-revenue" className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center hover:border-neutral-300 transition duration-155">
          <div className="md:col-span-5 space-y-4">
            <div className="p-3 bg-white w-12 h-12 rounded-xl text-neutral-950 border border-neutral-200 flex items-center justify-center">
              <Gem className="h-6 w-6 text-neutral-800" />
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight text-neutral-950">
              Ready Revenue Asset™
            </h2>
            <p className="text-sm text-neutral-500 font-light leading-relaxed">
              Solución llave en mano para operaciones aceleradas. Ideada para organizaciones que priorizan un lanzamiento express con lógica testeada en el mundo real.
            </p>
          </div>
          <div className="md:col-span-7 bg-white border border-neutral-150 p-6 md:p-8 rounded-xl space-y-4">
            <span className="text-[10px] font-mono text-neutral-400 font-black block uppercase tracking-widest">
              COMPONENTES DEL PAQUETE
            </span>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <Check className="h-4 w-4 text-neutral-900 mt-1 shrink-0" />
                <div>
                  <strong className="text-neutral-900 block font-bold">Aplicación Funcional</strong>
                  <span className="text-xs text-neutral-500 font-light">Estructura interactiva y funcional lista para su despliegue en su propia nube o servidor local.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-4 w-4 text-neutral-900 mt-1 shrink-0" />
                <div>
                  <strong className="text-neutral-900 block font-bold">Configuración Inicial Guiada</strong>
                  <span className="text-xs text-neutral-500 font-light">Scripts o directrices simplificadas para arrancar el aplicativo de forma rápida y óptima.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-4 w-4 text-neutral-900 mt-1 shrink-0" />
                <div>
                  <strong className="text-neutral-900 block font-bold">Documentación Básica</strong>
                  <span className="text-xs text-neutral-500 font-light">Manual explicativo que detalla la arquitectura de archivos y las dependencias requeridas.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-4 w-4 text-neutral-900 mt-1 shrink-0" />
                <div>
                  <strong className="text-neutral-900 block font-bold">Licencia Comercial Estándar</strong>
                  <span className="text-xs text-neutral-500 font-light">Derecho perpetuo para operar el software en su organización sin pagos recurrentes.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Tier 2: Growth Asset™ */}
        <div id="tier-growth-asset" className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center hover:border-neutral-300 transition duration-155">
          <div className="md:col-span-5 space-y-4">
            <div className="p-3 bg-white w-12 h-12 rounded-xl text-neutral-950 border border-neutral-200 flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-neutral-800" />
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight text-neutral-950">
              Growth Asset™
            </h2>
            <p className="text-sm text-neutral-500 font-light leading-relaxed">
              Módulos lógicos con enfoque en tracción y pipelines de datos estables. Ideal para optimizar sistemas existentes o automatizar flujos complejos de conversión.
            </p>
          </div>
          <div className="md:col-span-7 bg-white border border-neutral-150 p-6 md:p-8 rounded-xl space-y-4">
            <span className="text-[10px] font-mono text-neutral-400 font-black block uppercase tracking-widest">
              COMPONENTES DEL PAQUETE
            </span>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <Check className="h-4 w-4 text-neutral-900 mt-1 shrink-0" />
                <div>
                  <strong className="text-neutral-900 block font-bold">Proyecto Avanzado Estructurado</strong>
                  <span className="text-xs text-neutral-500 font-light">Código con mayor nivel de modulación y pipelines para procesar flujos transaccionales.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-4 w-4 text-neutral-900 mt-1 shrink-0" />
                <div>
                  <strong className="text-neutral-900 block font-bold">Roadmap Técnico Disponible</strong>
                  <span className="text-xs text-neutral-500 font-light">Guía con hitos sugeridos para guiar la evolución y mejoras futuras del software.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-4 w-4 text-neutral-900 mt-1 shrink-0" />
                <div>
                  <strong className="text-neutral-900 block font-bold">Arquitectura de Integración Existente</strong>
                  <span className="text-xs text-neutral-500 font-light">Modelos documentados de cómo interactúan las APIs lógicas y los datos.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-4 w-4 text-neutral-900 mt-1 shrink-0" />
                <div>
                  <strong className="text-neutral-900 block font-bold">Materiales Técnicos Asociados</strong>
                  <span className="text-xs text-neutral-500 font-light">Recursos lógicos adicionales y bases de datos mockeadas de validación.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Tier 3: Project ZIP™ */}
        <div id="tier-project-zip" className="bg-neutral-950 text-neutral-100 rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center border border-neutral-900">
          <div className="md:col-span-5 space-y-4">
            <div className="p-3 bg-neutral-905 w-12 h-12 rounded-xl text-white border border-neutral-800 flex items-center justify-center">
              <FolderArchive className="h-6 w-6 text-amber-400" />
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Project ZIP™
            </h2>
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              Código fuente crudo y avanzado tal como fue redactado originalmente. Diseñado exclusivamente para ingenieros capacitados que demandan autogestión y soberanía de código perpetuo.
            </p>
          </div>
          <div className="md:col-span-7 bg-neutral-900 border border-neutral-805 p-6 md:p-8 rounded-xl space-y-4">
            <span className="text-[10px] font-mono text-neutral-450 font-black block uppercase tracking-widest">
              COMPONENTES DEL PAQUETE
            </span>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <Check className="h-4 w-4 text-emerald-400 mt-1 shrink-0" />
                <div>
                  <strong className="text-neutral-100 block font-bold">Código Fuente Real de Avance</strong>
                  <span className="text-xs text-neutral-400 font-light">Lógica limpia y modular sin binarios cerrados, lista para descarga directa.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-4 w-4 text-emerald-400 mt-1 shrink-0" />
                <div>
                  <strong className="text-neutral-100 block font-bold">Assets y Recursos del Repositorio</strong>
                  <span className="text-xs text-neutral-400 font-light">Íconos, estilos Tailwind compilados y variables básicas de entorno.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-4 w-4 text-emerald-400 mt-1 shrink-0" />
                <div>
                  <strong className="text-neutral-100 block font-bold">Estructura Lógica y Dependencias</strong>
                  <span className="text-xs text-neutral-400 font-light">Definición de paquetes base listos para correr en Node u otros runtimes.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Tier 4: Enterprise White Label™ */}
        <div id="tier-white-label" className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center hover:border-neutral-400 transition duration-155">
          <div className="md:col-span-5 space-y-4">
            <div className="p-3 bg-white w-12 h-12 rounded-xl text-neutral-950 border border-neutral-200 flex items-center justify-center">
              <Award className="h-6 w-6 text-neutral-900" />
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight text-neutral-950">
              Enterprise White Label™
            </h2>
            <p className="text-sm text-neutral-500 font-light leading-relaxed">
              La máxima libertad comercial. Autoriza el revestimiento absoluto del software, cambio de logotipos, reventa a terceros o sub-licenciamiento perpetuo sin ningún cobro posterior.
            </p>
          </div>
          <div className="md:col-span-7 bg-white border border-neutral-150 p-6 md:p-8 rounded-xl space-y-4">
            <span className="text-[10px] font-mono text-neutral-400 font-black block uppercase tracking-widest">
              COMPONENTES DEL PAQUETE
            </span>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <Check className="h-4 w-4 text-neutral-900 mt-1 shrink-0" />
                <div>
                  <strong className="text-neutral-900 block font-bold">Código Fuente con Soporte Multimarca</strong>
                  <span className="text-xs text-neutral-500 font-light">Fácilmente configurable para alojar múltiples organizaciones bajo marcas independientes.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-4 w-4 text-neutral-900 mt-1 shrink-0" />
                <div>
                  <strong className="text-neutral-900 block font-bold">Marca Blanca (White Label)</strong>
                  <span className="text-xs text-neutral-500 font-light">Documentación específica explicando cómo remover créditos y logotipos de origen.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-4 w-4 text-neutral-900 mt-1 shrink-0" />
                <div>
                  <strong className="text-neutral-900 block font-bold">Licencia Comercial Ampliada</strong>
                  <span className="text-xs text-neutral-500 font-light">Contrato formalizado que permite la comercialización o reventa ilimitada de la solución.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-4 w-4 text-neutral-900 mt-1 shrink-0" />
                <div>
                  <strong className="text-neutral-900 block font-bold">Materiales de Transferencia</strong>
                  <span className="text-xs text-neutral-500 font-light">Traspaso bajo estrictos términos de herencia tecnológica total de la propiedad intelectual.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </section>

      {/* TRANSPARENCY DISCLAIMER */}
      <section id="transparency-disclaimer" className="py-12 px-6 md:px-12 max-w-4xl mx-auto mt-8">
        <div className="bg-neutral-50 border border-neutral-200 p-6 rounded-xl flex items-start gap-4">
          <Info className="h-5 w-5 text-neutral-800 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-neutral-950 uppercase tracking-wider">Aclaración de Alcance Técnico</h4>
            <p className="text-xs text-neutral-500 font-light leading-relaxed">
              Los elementos incluidos en la entrega final dependen de forma estricta de la modalidad específica adquirida bajo contrato. Por favor, revise detalladamente su cotización formal o comuníquese con un oficial técnico durante la etapa de validación.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="receive-cta" className="py-12 px-6 md:px-12 max-w-5xl mx-auto mt-12">
        <div className="bg-neutral-900 text-white rounded-xl p-8 md:p-16 text-center space-y-6 relative overflow-hidden border border-neutral-800">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              ¿Listo para dar el siguiente paso?
            </h3>
            <p className="text-xs md:text-sm text-neutral-300 font-light leading-relaxed">
              Comience evaluando compatibilidades de cartera o solicite disponibilidad para una categoría lógica específica de su interés.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                to="/pricing"
                className="px-6 py-3 bg-white text-neutral-950 text-xs font-bold uppercase tracking-wider rounded hover:bg-neutral-100 transition inline-flex items-center gap-2"
              >
                Ver Catálogo Completo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-700 text-xs font-bold uppercase tracking-wider rounded transition"
              >
                Contactar Ventas
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
