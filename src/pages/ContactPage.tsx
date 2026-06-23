import React, { useState, FormEvent, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  Shield, 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  Layers, 
  Compass, 
  FileCheck2, 
  Radio, 
  Send 
} from "lucide-react";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    correo: "",
    categoria: "Revenue Intelligence™",
    activoInteres: "",
    objetivoNegocio: "",
    mensaje: ""
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.nombre && formData.correo && formData.mensaje) {
      setSubmitted(true);
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="contact-page-container" className="bg-white text-neutral-900 pb-24 selection:bg-neutral-900 selection:text-white">
      
      {/* HERO SECTION */}
      <section id="contact-hero" className="pt-32 pb-20 px-6 md:px-12 max-w-6xl mx-auto text-center space-y-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold tracking-widest text-neutral-900 bg-neutral-100 uppercase rounded-full">
          Adquisición Privada de Activos Digitales™
        </span>
        <h1 id="contact-hero-title" className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight max-w-4xl mx-auto">
          Solicite disponibilidad para activos empresariales y transferencias de propiedad intelectual
        </h1>
        <p id="contact-hero-subtitle" className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed">
          Cada solicitud es evaluada individualmente para determinar compatibilidad, disponibilidad, modalidad de licencia y opciones de transferencia.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <button
            onClick={scrollToForm}
            className="px-8 py-3 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-widest rounded transition shadow-sm inline-flex items-center gap-2"
          >
            Iniciar Solicitud <ArrowRight className="h-4 w-4" />
          </button>
          <Link
            to="/acquisition-process"
            className="px-8 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-250 text-xs font-bold uppercase tracking-widest rounded transition"
          >
            View Acquisition Process
          </Link>
          <Link
            to="/pricing"
            className="px-8 py-3 bg-white hover:bg-neutral-50 text-neutral-500 border border-neutral-200 text-xs font-bold uppercase tracking-widest rounded transition"
          >
            Explorar Portfolio
          </Link>
        </div>
      </section>

      {/* BLOQUE DE CONFIANZA: Proceso simple y transparente */}
      <section id="trust-process" className="py-16 px-6 md:px-12 bg-neutral-50 border-t border-b border-neutral-200/60">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center md:text-left space-y-1">
            <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-black">Metodología Ordenada</span>
            <h2 className="text-2xl font-extrabold text-neutral-900 tracking-tight">Proceso simple y transparente</h2>
            <p className="text-xs text-neutral-500 font-light">
              Garantizamos claridad técnica y de licenciamiento en cada etapa del protocolo de transferencia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-neutral-200 p-6 rounded-lg space-y-3 shadow-xs">
              <span className="text-xs font-mono font-bold text-neutral-400 block">01 / SOLICITUD</span>
              <h4 className="text-sm font-bold text-neutral-950">Enviar solicitud</h4>
              <p className="text-xs text-neutral-500 font-light leading-relaxed">
                Complete el formulario indicando el activo o categoría de interés.
              </p>
            </div>
            <div className="bg-white border border-neutral-200 p-6 rounded-lg space-y-3 shadow-xs">
              <span className="text-xs font-mono font-bold text-neutral-400 block">02 / ANÁLISIS</span>
              <h4 className="text-sm font-bold text-neutral-950">Evaluación</h4>
              <p className="text-xs text-neutral-500 font-light leading-relaxed">
                Se valida disponibilidad, compatibilidad técnica y modalidad comercial óptima.
              </p>
            </div>
            <div className="bg-white border border-neutral-200 p-6 rounded-lg space-y-3 shadow-xs">
              <span className="text-xs font-mono font-bold text-neutral-400 block">03 / ACUERDO</span>
              <h4 className="text-sm font-bold text-neutral-950">Confirmación</h4>
              <p className="text-xs text-neutral-500 font-light leading-relaxed">
                Recibe detalles exhaustivos de adquisición, licenciamiento formal o transferencia.
              </p>
            </div>
            <div className="bg-white border border-neutral-200 p-6 rounded-lg space-y-3 shadow-xs">
              <span className="text-xs font-mono font-bold text-neutral-400 block">04 / TRASPASO</span>
              <h4 className="text-sm font-bold text-neutral-950">Entrega</h4>
              <p className="text-xs text-neutral-500 font-light leading-relaxed">
                Se realiza la entrega digital correspondiente y limpia según el tipo de activo acordado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARIO + BLOQUE LATERAL */}
      <section ref={formRef} className="py-20 px-6 md:px-12 max-w-5xl mx-auto scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Form Container */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div id="submission-success" className="bg-neutral-50 border border-neutral-200 rounded-xl p-8 text-center space-y-4">
                <CheckCircle2 className="h-10 w-10 text-neutral-900 mx-auto" />
                <h4 className="text-lg font-bold text-neutral-900">Solicitud Recibida Correctamente</h4>
                <p className="text-xs text-neutral-600 leading-relaxed max-w-md mx-auto">
                  Agradecemos su interés en el portfolio de <strong>ProjectApps™</strong>. Un oficial de adquisición técnica validará los datos de compatibilidad comercial indicados y se contactará por correo electrónico a la brevedad.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      nombre: "",
                      empresa: "",
                      correo: "",
                      categoria: "Revenue Intelligence™",
                      activoInteres: "",
                      objetivoNegocio: "",
                      mensaje: ""
                    });
                  }}
                  className="mt-2 text-xs font-bold uppercase tracking-wider text-neutral-800 hover:underline"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form id="acquisition-request-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-neutral-950">Formulario Oficial de Solicitud</h3>
                  <p className="text-xs text-neutral-500 font-light">Complete los siguientes campos obligatorios para agilizar el procesamiento técnico de su solicitud.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Nombre <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="nombre"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      placeholder="Su nombre"
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:border-neutral-900 transition rounded"
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Empresa</label>
                    <input
                      type="text"
                      id="empresa"
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      placeholder="Organización o Razón Social"
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:border-neutral-900 transition rounded"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="correo" className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Correo Electrónico <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      id="correo"
                      required
                      value={formData.correo}
                      onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                      placeholder="ejemplo@empresa.com"
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:border-neutral-900 transition rounded"
                    />
                  </div>
                  <div>
                    <label htmlFor="categoria" className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Categoría de Interés</label>
                    <select
                      id="categoria"
                      value={formData.categoria}
                      onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:border-neutral-900 transition rounded h-11"
                    >
                      <option value="Revenue Intelligence™">Revenue Intelligence™</option>
                      <option value="Decision Intelligence™">Decision Intelligence™</option>
                      <option value="Market Intelligence™">Market Intelligence™</option>
                      <option value="Operations Intelligence™">Operations Intelligence™</option>
                      <option value="Security Intelligence™">Security Intelligence™</option>
                      <option value="Creator Intelligence™">Creator Intelligence™</option>
                      <option value="Commerce Intelligence™">Commerce Intelligence™</option>
                      <option value="Industry Intelligence™">Industry Intelligence™</option>
                      <option value="Infrastructure Intelligence™">Infrastructure Intelligence™</option>
                      <option value="Custom Acquisition™">Custom Acquisition™</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="activoInteres" className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Activo de Interés (Opcional)</label>
                  <input
                    type="text"
                    id="activoInteres"
                    value={formData.activoInteres}
                    onChange={(e) => setFormData({ ...formData, activoInteres: e.target.value })}
                    placeholder="Ej. Ready Revenue Asset, Project ZIP en operaciones, etc."
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:border-neutral-900 transition rounded"
                  />
                </div>

                <div>
                  <label htmlFor="objetivoNegocio" className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Objetivo del negocio</label>
                  <input
                    type="text"
                    id="objetivoNegocio"
                    value={formData.objetivoNegocio}
                    onChange={(e) => setFormData({ ...formData, objetivoNegocio: e.target.value })}
                    placeholder="Aceleración de desarrollo, sustitución de SaaS, marca blanca..."
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:border-neutral-900 transition rounded"
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Mensaje / Detalle de la Solicitud <span className="text-red-500">*</span></label>
                  <textarea
                    id="mensaje"
                    required
                    rows={4}
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    placeholder="Escriba aquí los detalles operativos o plazos que desea contemplar..."
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:border-neutral-900 transition rounded"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-widest transition rounded"
                >
                  Solicitar Disponibilidad
                </button>
              </form>
            )}
          </div>

          {/* Right: Sidebar Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-neutral-50 border border-neutral-200 p-8 rounded-xl space-y-6">
              <div className="p-2 w-9 h-9 bg-neutral-100 border border-neutral-200 text-neutral-900 rounded flex items-center justify-center shrink-0">
                <Shield className="h-4 w-4" />
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-bold text-neutral-950">Canal Oficial de Adquisiciones</h4>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  ProjectApps™ gestiona todas las solicitudes mediante comunicación escrita para asegurar trazabilidad, precisión técnica y validación documental.
                </p>
              </div>

              <div className="p-4 bg-white border border-neutral-150 rounded space-y-1">
                <span className="text-[9px] font-mono font-bold text-neutral-400 uppercase block tracking-wider">Correo Asegurado</span>
                <a 
                  href="mailto:adquisiciones@projectapps.pro" 
                  className="text-sm font-bold text-neutral-900 hover:underline flex items-center gap-1.5"
                >
                  <Mail className="h-4 w-4 text-neutral-600" /> adquisiciones@projectapps.pro
                </a>
              </div>

              <div className="pt-1">
                <Link
                  to="/acquisition-process"
                  className="w-full text-center px-4 py-2.5 bg-white border border-neutral-200 text-neutral-800 text-xs font-bold uppercase tracking-wider rounded hover:bg-neutral-100 transition block"
                >
                  View Acquisition Process
                </Link>
              </div>

              <div className="text-[11px] text-neutral-400 font-light leading-relaxed bg-amber-50/50 p-4 border border-amber-500/20 rounded">
                🚀 <strong>Nota importante:</strong> No realizamos ventas telefónicas ni contratos SaaS recurrentes. Cada transferencia se formaliza estrictamente mediante acuerdo documental firmado.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* BLOQUE FINAL: Qué sucede después */}
      <section id="what-happens-next" className="py-16 px-6 md:px-12 bg-neutral-50 border-t border-b border-neutral-200/60 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-1">
            <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-black">Ciclo Operativo</span>
            <h2 className="text-2xl font-extrabold text-neutral-900 tracking-tight">Qué sucede después</h2>
            <p className="text-xs text-neutral-500 font-light">Trazabilidad del proceso completo de adjudicación.</p>
          </div>

          {/* Simple step pipeline layout */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-xs font-bold uppercase tracking-wider text-neutral-700">
            <div className="p-4 bg-white border border-neutral-200 rounded flex flex-col justify-center items-center shadow-xs">
              <span className="text-[9px] font-mono text-neutral-400 mb-1">Paso 1</span>
              <span>Solicitud recibida</span>
            </div>
            <div className="p-4 bg-white border border-neutral-200 rounded flex flex-col justify-center items-center shadow-xs">
              <span className="text-[9px] font-mono text-neutral-400 mb-1">Paso 2</span>
              <span>Evaluación</span>
            </div>
            <div className="p-4 bg-white border border-neutral-200 rounded flex flex-col justify-center items-center shadow-xs">
              <span className="text-[9px] font-mono text-neutral-400 mb-1">Paso 3</span>
              <span>Respuesta comercial</span>
            </div>
            <div className="p-4 bg-white border border-neutral-200 rounded flex flex-col justify-center items-center shadow-xs">
              <span className="text-[9px] font-mono text-neutral-400 mb-1">Paso 4</span>
              <span>Disponibilidad</span>
            </div>
            <div className="p-4 bg-white border border-neutral-200 rounded flex flex-col justify-center items-center shadow-xs">
              <span className="text-[9px] font-mono text-neutral-400 mb-1">Paso 5</span>
              <span>Adquisición</span>
            </div>
            <div className="p-4 bg-white border border-neutral-200 rounded flex flex-col justify-center items-center shadow-xs">
              <span className="text-[9px] font-mono text-neutral-400 mb-1">Paso 6</span>
              <span>Transferencia</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
