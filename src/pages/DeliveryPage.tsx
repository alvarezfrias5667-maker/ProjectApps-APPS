import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  FileCode,
  HeartHandshake,
  Layers,
  Package,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { generateDeliveryPackage } from "../services/deliveryService";
import type { DeliveryInput } from "../data/deliveryPackages";

type PresetType = "ready" | "growth" | "strategic" | "enterprise";

const PACKAGE_PRESETS: Record<PresetType, DeliveryInput> = {
  ready: {
    packageType: "Ready Revenue Asset™",
    deliveryModel: "Implementation Review",
    licenseType: "Commercial License",
  },
  growth: {
    packageType: "Growth Asset™",
    deliveryModel: "Validation & Transfer Review",
    licenseType: "Extended Commercial License",
  },
  strategic: {
    packageType: "Strategic Asset™",
    deliveryModel: "Blueprint & IP Review",
    licenseType: "Strategic Use License",
  },
  enterprise: {
    packageType: "Enterprise White Label™",
    deliveryModel: "Private White Label Review",
    licenseType: "Enterprise License",
  },
};

const DELIVERY_COPY: Record<
  PresetType,
  {
    title: string;
    subtitle: string;
    bestFor: string;
    note: string;
  }
> = {
  ready: {
    title: "Aplicación Lista",
    subtitle: "Ready Revenue Asset™",
    bestFor:
      "Empresas que desean implementar una solución funcional con menor tiempo de preparación.",
    note:
      "Puede incluir aplicación funcional, configuración inicial, documentación disponible y licencia comercial según disponibilidad.",
  },
  growth: {
    title: "Activo de Crecimiento",
    subtitle: "Growth Asset™",
    bestFor:
      "Compradores que buscan un activo avanzado con potencial de expansión, adaptación o validación comercial.",
    note:
      "Puede incluir roadmap, arquitectura existente, documentación disponible y materiales asociados al estado actual del activo.",
  },
  strategic: {
    title: "Activo Estratégico",
    subtitle: "Strategic Asset™",
    bestFor:
      "Equipos que necesitan adquirir estructura, dirección estratégica, documentación y propiedad intelectual conceptual.",
    note:
      "Puede incluir ADN™, resumen ejecutivo, roadmap, documentación estratégica y materiales definidos por alcance.",
  },
  enterprise: {
    title: "White Label Empresarial",
    subtitle: "Enterprise White Label™",
    bestFor:
      "Empresas que desean operar, adaptar o distribuir un activo bajo una modalidad privada o de marca propia.",
    note:
      "Puede incluir código disponible, licencia ampliada, materiales transferibles y condiciones especiales según acuerdo.",
  },
};

const DELIVERY_FLOW = [
  "Solicitud",
  "Revisión",
  "Confirmación",
  "Acuerdo",
  "Transferencia",
  "Entrega",
];

export default function DeliveryPage() {
  const [selectedPreset, setSelectedPreset] = useState<PresetType>("ready");
  const formData = PACKAGE_PRESETS[selectedPreset];

  const deliveryResult = useMemo(() => {
    return generateDeliveryPackage(formData);
  }, [formData]);

  const selectedCopy = DELIVERY_COPY[selectedPreset];

  return (
    <main id="delivery-page" className="bg-white text-neutral-900 px-6 py-24 md:px-12">
      <section className="mx-auto max-w-6xl">
        <header className="mb-20 text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-neutral-900">
            <Truck className="h-3.5 w-3.5" aria-hidden="true" />
            Delivery Preview™
          </span>

          <h1 className="mx-auto mb-5 max-w-4xl text-4xl font-extrabold tracking-tight text-neutral-950 sm:text-5xl">
            Vista previa de entrega para activos empresariales.
          </h1>

          <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-neutral-500 sm:text-lg">
            Revise qué puede incluir cada modalidad de adquisición antes de
            solicitar una revisión formal de disponibilidad, alcance y
            transferencia.
          </p>
        </header>

        <section className="mb-16">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {(["ready", "growth", "strategic", "enterprise"] as PresetType[]).map(
              (type) => {
                const copy = DELIVERY_COPY[type];
                const isActive = selectedPreset === type;

                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedPreset(type)}
                    className={`rounded-2xl border p-5 text-left transition ${
                      isActive
                        ? "border-neutral-950 bg-neutral-950 text-white"
                        : "border-neutral-200 bg-neutral-50 text-neutral-900 hover:border-neutral-400"
                    }`}
                  >
                    <span
                      className={`mb-2 block text-[10px] font-bold uppercase tracking-widest ${
                        isActive ? "text-neutral-400" : "text-neutral-400"
                      }`}
                    >
                      {copy.subtitle}
                    </span>

                    <h2 className="text-sm font-black uppercase tracking-tight">
                      {copy.title}
                    </h2>

                    <p
                      className={`mt-3 text-[11px] font-light leading-relaxed ${
                        isActive ? "text-neutral-300" : "text-neutral-500"
                      }`}
                    >
                      {copy.bestFor}
                    </p>
                  </button>
                );
              }
            )}
          </div>
        </section>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <aside className="space-y-6 lg:col-span-4">
            <section className="rounded-3xl border border-neutral-200 bg-neutral-50 p-7">
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                Modalidad seleccionada
              </span>

              <h2 className="text-2xl font-extrabold tracking-tight text-neutral-950">
                {selectedCopy.title}
              </h2>

              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-neutral-400">
                {deliveryResult.purchaseType}
              </p>

              <p className="mt-5 text-sm font-light leading-relaxed text-neutral-600">
                {selectedCopy.note}
              </p>

              <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-4">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                  Ventana estimada
                </span>

                <span className="mt-1 block text-sm font-black text-neutral-950">
                  {deliveryResult.estimatedDelivery}
                </span>
              </div>
            </section>

            <section className="rounded-3xl border border-neutral-800 bg-neutral-950 p-7 text-white">
              <div className="mb-4 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                  Alcance condicionado
                </span>
              </div>

              <p className="text-xs font-light leading-relaxed text-neutral-300">
                Esta vista es una referencia comercial. Los elementos finales
                dependen de la modalidad adquirida, disponibilidad del activo,
                validación previa y acuerdo de transferencia correspondiente.
              </p>

              <Link
                to="/transaction-protection"
                className="mt-5 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-white hover:underline"
              >
                Ver Transaction Protection™
                <ArrowRight className="h-3 w-3" />
              </Link>
            </section>
          </aside>

          <section className="space-y-8 lg:col-span-8">
            <article className="overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm sm:p-10">
              <header className="mb-8 border-b border-neutral-100 pb-8">
                <div className="mb-4 flex items-center gap-2">
                  <Package className="h-6 w-6 text-neutral-900" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                    Delivery Scope Preview™
                  </span>
                </div>

                <h3 className="max-w-2xl text-3xl font-extrabold tracking-tight text-neutral-950">
                  Qué puede recibir el comprador bajo esta modalidad.
                </h3>

                <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-neutral-500">
                  ProjectApps™ estructura cada entrega con base en el tipo de
                  activo, la licencia, el estado real del proyecto y el alcance
                  acordado antes de la transferencia.
                </p>
              </header>

              <section className="space-y-10">
                <div>
                  <h4 className="mb-4 flex items-center gap-2 text-sm font-bold text-neutral-950">
                    <Layers className="h-4 w-4 text-neutral-700" />
                    Elementos que pueden estar incluidos
                  </h4>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {deliveryResult.includedAssets.map((asset) => (
                      <div
                        key={asset}
                        className="flex items-center gap-2 rounded-2xl border border-neutral-200 bg-neutral-50 p-4"
                      >
                        <CheckCircle className="h-4 w-4 shrink-0 text-neutral-900" />
                        <span className="text-xs font-bold text-neutral-700">
                          {asset}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-neutral-100 pt-8">
                  <h4 className="mb-4 flex items-center gap-2 text-sm font-bold text-neutral-950">
                    <BookOpen className="h-4 w-4 text-neutral-700" />
                    Alcance operativo posible
                  </h4>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <ScopeCard
                      eyebrow="Implementación"
                      title="Revisión de despliegue"
                      included={deliveryResult.implementationIncluded}
                    />

                    <ScopeCard
                      eyebrow="Documentación"
                      title="Material existente"
                      included={deliveryResult.documentationIncluded}
                    />

                    <ScopeCard
                      eyebrow="Acompañamiento"
                      title="Soporte según alcance"
                      included={deliveryResult.supportIncluded}
                    />
                  </div>
                </div>

                <div className="border-t border-neutral-100 pt-8">
                  <h4 className="mb-4 flex items-center gap-2 text-sm font-bold text-neutral-950">
                    <HeartHandshake className="h-4 w-4 text-neutral-700" />
                    Proceso de entrega
                  </h4>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-6">
                    {DELIVERY_FLOW.map((step, index) => (
                      <div
                        key={step}
                        className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-center"
                      >
                        <span className="mx-auto mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-neutral-950 text-[10px] font-bold text-white">
                          {index + 1}
                        </span>

                        <span className="block text-[10px] font-bold uppercase tracking-wider text-neutral-700">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p className="mt-5 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-xs font-light leading-relaxed text-neutral-600">
                    {deliveryResult.handoverProtocol}. La entrega final se
                    define únicamente después de validar disponibilidad,
                    condiciones de licencia y alcance específico del activo.
                  </p>
                </div>

                <div className="border-t border-neutral-100 pt-8">
                  <h4 className="mb-4 flex items-center gap-2 text-sm font-bold text-neutral-950">
                    <FileCode className="h-4 w-4 text-neutral-700" />
                    Qué no se promete automáticamente
                  </h4>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <ExclusionItem text="No incluye nuevas funcionalidades salvo acuerdo específico." />
                    <ExclusionItem text="No garantiza producción final si el activo es Project ZIP™." />
                    <ExclusionItem text="No incluye hosting, dominio o pagos externos por defecto." />
                    <ExclusionItem text="No entrega materiales confidenciales antes de validación comercial." />
                  </div>
                </div>
              </section>
            </article>

            <nav className="flex flex-wrap items-center justify-between gap-4 pb-10">
              <Link
                to="/what-you-receive"
                className="rounded-xl bg-neutral-100 px-5 py-3 text-xs font-bold uppercase tracking-wider text-neutral-800 transition hover:bg-neutral-200"
              >
                Ver qué recibe el comprador
              </Link>

              <Link
                to="/contact"
                className="flex items-center gap-1.5 rounded-xl bg-neutral-950 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-neutral-800"
              >
                Solicitar Revisión de Entrega
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </nav>
          </section>
        </div>
      </section>
    </main>
  );
}

function ScopeCard({
  eyebrow,
  title,
  included,
}: {
  eyebrow: string;
  title: string;
  included: boolean;
}) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
      <div>
        <span className="block text-[9px] font-bold uppercase tracking-wider text-neutral-400">
          {eyebrow}
        </span>

        <span className="mt-1 block text-xs font-bold text-neutral-800">
          {title}
        </span>
      </div>

      <div className="mt-4">
        {included ? (
          <span className="inline-flex items-center rounded-full border border-emerald-300 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase text-emerald-800">
            Puede aplicar
          </span>
        ) : (
          <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[10px] font-bold uppercase text-neutral-500">
            Según alcance
          </span>
        )}
      </div>
    </div>
  );
}

function ExclusionItem({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
      <span className="text-xs font-light leading-relaxed text-neutral-600">
        {text}
      </span>
    </div>
  );
}