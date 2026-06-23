export interface DeliveryInput {
  packageType:
    | "Strategic Asset™"
    | "Growth Asset™"
    | "Ready Revenue Asset™"
    | "Enterprise White Label™";
  deliveryModel: string;
  licenseType: string;
}

export interface DeliveryResult {
  purchaseType: string;
  includedAssets: string[];
  deliveryFormat: string;
  implementationIncluded: boolean;
  documentationIncluded: boolean;
  supportIncluded: boolean;
  estimatedDelivery: string;
  handoverProtocol: string;
}

export const OFFICIAL_DELIVERABLES: Record<
  | "Strategic Asset™"
  | "Growth Asset™"
  | "Ready Revenue Asset™"
  | "Enterprise White Label™",
  string[]
> = {
  "Strategic Asset™": [
    "Documentación estratégica",
    "Resumen ejecutivo",
    "Materiales de trabajo",
    "Guía de evolución",
  ],

  "Growth Asset™": [
    "Proyecto disponible para revisión",
    "Arquitectura disponible",
    "Guía de continuidad",
    "Documentación disponible",
  ],

  "Ready Revenue Asset™": [
    "Aplicación disponible",
    "Opciones de adaptación",
    "Materiales de implementación",
    "Orientación inicial",
  ],

  "Enterprise White Label™": [
    "Activos disponibles para transferencia",
    "Materiales de marca blanca",
    "Licencia aplicable",
    "Opciones de integración disponibles",
  ],
};