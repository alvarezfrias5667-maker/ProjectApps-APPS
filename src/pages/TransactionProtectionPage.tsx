import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  UserCheck, 
  Lock, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Eye, 
  FileText, 
  Check, 
  ArrowRight,
  Sparkles,
  RefreshCw,
  Scale
} from "lucide-react";

export default function TransactionProtectionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const steps = [
    { number: "01", name: "Solicitud", desc: "El adquirente formaliza el interés por un activo digital específico." },
    { number: "02", name: "Evaluación", desc: "Análisis de compatibilidad técnica y operativa bajo NDA formal." },
    { number: "03", name: "Confirmación", desc: "Verificación de titularidad y disponibilidad real del activo por ProjectApps™." },
    { number: "04", name: "Acuerdo", desc: "Firma de contrato de transferencia de propiedad intelectual y depósito en custodia segura." },
    { number: "05", name: "Transferencia", desc: "Migración guiada del código fuente y credenciales a servidores del adquirente." },
    { number: "06", name: "Entrega", desc: "Auditoría final, liberación de fondos y cierre del expediente de transferencia." }
  ];

  const faqs = [
    {
      q: "¿Cómo se protege el comprador?",
      a: "El comprador cuenta con la garantía de custodia de ProjectApps™. Los fondos correspondientes a la adquisición permanecen resguardados de forma segura y solo se liberan al vendedor una vez que el comprador ha auditado y recibido formalmente el código fuente completo, base de datos y toda la propiedad intelectual pactada."
    },
    {
      q: "¿Cómo se protege el vendedor?",
      a: "Protegemos al vendedor exigiendo una precalificación estricta de los adquirentes (incluyendo pruebas de fondos u horizontes de inversión validados). Adicionalmente, el acceso a la documentación técnica profunda y código parcial se libera gradualmente bajo estrictos acuerdos de no divulgación (NDA), evitando cualquier plagio o copia."
    },
    {
      q: "¿Se entrega el código antes del pago?",
      a: "El código no se entrega directamente al comprador sin que los fondos estén previamente depositados y bloqueados en la custodia de ProjectApps™. Esto garantiza que el vendedor tiene el pago asegurado y que el comprador recibirá los activos íntegros antes de que se complete la transacción física definitiva."
    },
    {
      q: "¿Qué ocurre si el activo ya no está disponible?",
      a: "Si durante la fase de validación previa se confirma que el activo ha sido retirado o adquirido de manera exclusiva por otra organización, la solicitud se cancela de inmediato sin coste alguno. En caso de depósitos en custodia, los fondos son devueltos de forma íntegra e inmediata al adquirente."
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div id="transaction-protection" className="bg-white text-neutral-900 pb-24 selection:bg-neutral-900 selection:text-white">
      
      {/* Editorial Header */}
      <div className="max-w-4xl mx-auto px-6 pt-32 text-center space-y-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold tracking-widest text-neutral-900 bg-neutral-100 uppercase rounded-full border border-neutral-200">
          <ShieldCheck className="h-3.5 w-3.5 text-neutral-800" /> Transaction Protection Program™
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-950 leading-tight">
          Adquisiciones Seguras y Confianza Absoluta
        </h1>
        <p className="text-sm sm:text-base text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed">
          Diseñamos un ecosistema de comercialización que elimina el riesgo inherente a la transferencia de código fuente y propiedad intelectual de software, garantizando transacciones fluidas para ambas partes.
        </p>
      </div>

      {/* Visual Sequence Box */}
      <div className="max-w-6xl mx-auto px-6 mt-16">
        <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-8 md:p-12 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-black">
              FLUJO SEGURO DE TRANSFERENCIA
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight">
              Línea de Tiempo de Adquisición
            </h2>
            <p className="text-xs text-neutral-500 font-light max-w-lg mx-auto">
              Cada fase está vigilada por ProjectApps™ para resguardar la validez jurídica, el flujo transaccional y la entrega de activos lógicos.
            </p>
          </div>

          {/* Steps Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="relative bg-white border border-neutral-200/85 p-5 rounded-2xl flex flex-col justify-between space-y-3 hover:border-neutral-400 transition">
                <div className="space-y-2">
                  <span className="text-2xl font-black text-neutral-200 font-mono block leading-none">
                    {step.number}
                  </span>
                  <h3 className="text-xs font-black text-neutral-950 uppercase tracking-wider">
                    {step.name}
                  </h3>
                  <p className="text-[11px] text-neutral-500 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                {idx < 5 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 bg-neutral-950 text-white rounded-full p-0.5 border border-white">
                    <ArrowRight className="h-3 w-3" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Twin Protections Grid (Comprador vs Vendedor) */}
      <div className="max-w-6xl mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* COMPRADOR PROTECTION */}
        <div className="border border-neutral-200 rounded-3xl p-8 space-y-6 hover:border-neutral-400 transition bg-white">
          <div className="flex items-center gap-3 border-b border-neutral-100 pb-4">
            <div className="h-10 w-10 bg-neutral-900 text-white rounded-xl flex items-center justify-center">
              <UserCheck className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase font-black">GARANTÍA INTEGRAL</span>
              <h2 className="text-lg font-bold text-neutral-950 tracking-tight">
                Protección del Comprador
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="h-5 w-5 bg-neutral-100 text-neutral-900 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <Check className="h-3.5 w-3.5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-neutral-900">Validación Previa Exhaustiva</h4>
                <p className="text-[11px] text-neutral-500 font-light leading-relaxed">
                  Auditamos que el código de los activos se encuentre libre de exploits, dependencias rotas o deudas técnicas no reportadas en el catálogo.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="h-5 w-5 bg-neutral-100 text-neutral-900 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <Check className="h-3.5 w-3.5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-neutral-900">Confirmación de Disponibilidad</h4>
                <p className="text-[11px] text-neutral-500 font-light leading-relaxed">
                  Verificamos de forma estricta la total titularidad del código por parte del vendedor antes de publicar o iniciar un proceso de venta.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="h-5 w-5 bg-neutral-100 text-neutral-900 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <Check className="h-3.5 w-3.5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-neutral-900">Revisión Documental Completa</h4>
                <p className="text-[11px] text-neutral-500 font-light leading-relaxed">
                  Revisamos que la documentación legal de transferencia represente de manera transparente la posesión e inmutabilidad de la propiedad intelectual.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="h-5 w-5 bg-neutral-100 text-neutral-900 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <Check className="h-3.5 w-3.5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-neutral-900">Transparencia Comercial Absoluta</h4>
                <p className="text-[11px] text-neutral-500 font-light leading-relaxed">
                  Cero tarifas sorpresas o cargos recurrentes. El precio negociado es exactamente lo que se liquida por la propiedad perpetua.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* VENDEDOR PROTECTION */}
        <div className="border border-neutral-200 rounded-3xl p-8 space-y-6 hover:border-neutral-400 transition bg-white">
          <div className="flex items-center gap-3 border-b border-neutral-100 pb-4">
            <div className="h-10 w-10 bg-neutral-900 text-white rounded-xl flex items-center justify-center">
              <Lock className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase font-black">RESGUARDO PATRIMONIAL</span>
              <h2 className="text-lg font-bold text-neutral-950 tracking-tight">
                Protección del Vendedor
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="h-5 w-5 bg-neutral-100 text-neutral-900 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <Check className="h-3.5 w-3.5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-neutral-900">Protección Inflexible de Código</h4>
                <p className="text-[11px] text-neutral-500 font-light leading-relaxed">
                  El código fuente completo jamás es accesible por el adquirente hasta que los fondos acordados no se encuentren en custodia legal confirmada.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="h-5 w-5 bg-neutral-100 text-neutral-900 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <Check className="h-3.5 w-3.5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-neutral-900">Protección de Propiedad Intelectual</h4>
                <p className="text-[11px] text-neutral-500 font-light leading-relaxed">
                  Garantizamos que todos los derechos de autor sigan perteneciendo al vendedor durante la fase de negociación inicial bajo NDA vinculante.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="h-5 w-5 bg-neutral-100 text-neutral-900 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <Check className="h-3.5 w-3.5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-neutral-900">NDA Obligatorio Inmediato</h4>
                <p className="text-[11px] text-neutral-500 font-light leading-relaxed">
                  Ninguna información confidencial o esquema de base de datos se comparte sin la firma digital de un acuerdo de no divulgación.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="h-5 w-5 bg-neutral-100 text-neutral-900 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <Check className="h-3.5 w-3.5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-neutral-900">Acceso Gradual a la Información</h4>
                <p className="text-[11px] text-neutral-500 font-light leading-relaxed">
                  Liberamos datos de arquitectura e integraciones de forma escalonada a medida que avanza la debida diligencia transaccional.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* FAQ SECTION */}
      <div className="max-w-4xl mx-auto px-6 mt-24 space-y-8">
        <div className="text-center space-y-2">
          <span className="inline-flex items-center gap-1 text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-black">
            <HelpCircle className="h-3.5 w-3.5" /> SOPORTE TRANSACCIONAL
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950">
            Preguntas sobre la Protección de Transacciones
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 font-light">
            Respuestas directas sobre la seguridad, depósito y traspaso de propiedad intelectual en ProjectApps™.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx} 
                className="bg-white border border-neutral-200 rounded-2xl overflow-hidden transition"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none hover:bg-neutral-50"
                >
                  <span className="text-xs sm:text-sm font-bold text-neutral-900">{item.q}</span>
                  {isOpen ? <ChevronUp className="h-4 w-4 text-neutral-500" /> : <ChevronDown className="h-4 w-4 text-neutral-500" />}
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs text-neutral-500 font-light leading-relaxed border-t border-neutral-100">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className="max-w-4xl mx-auto px-6 mt-20 text-center">
        <div className="bg-neutral-950 text-white rounded-3xl p-8 md:p-12 space-y-6">
          <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-bold">INICIAR CON SEGURIDAD</span>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight">¿Tiene un activo que desea vender o un proyecto que quiere adquirir?</h3>
          <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-xl mx-auto leading-relaxed">
            Nuestro equipo legal y de ingeniería le guiará en cada fase para asegurar que la transferencia se complete sin contratiempos.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/solution-match"
              className="px-8 py-3 bg-white text-neutral-950 hover:bg-neutral-100 text-xs font-bold uppercase tracking-wider rounded-xl transition"
            >
              Encontrar Mi Solución
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-transparent hover:bg-neutral-900 text-white border border-neutral-800 text-xs font-bold uppercase tracking-wider rounded-xl transition"
            >
              Contactar con un Especialista
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
