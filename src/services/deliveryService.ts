import {
  DeliveryInput,
  DeliveryResult,
  OFFICIAL_DELIVERABLES,
} from "../data/deliveryPackages";

export function generateDeliveryPackage(input: DeliveryInput): DeliveryResult {
  const packageType = input.packageType || "Ready Revenue Asset™";
  const deliveryModel = input.deliveryModel || "Implementation";

  const includedAssets =
    OFFICIAL_DELIVERABLES[packageType] ||
    OFFICIAL_DELIVERABLES["Ready Revenue Asset™"];

  let implementationIncluded = true;
  let documentationIncluded = true;
  let supportIncluded = true;
  let estimatedDelivery = "7-14 días";
  let handoverProtocol =
    "Revisión de implementación, materiales disponibles y orientación inicial según modalidad adquirida.";

  if (packageType === "Strategic Asset™") {
    implementationIncluded = false;
    documentationIncluded = true;
    supportIncluded = true;
    estimatedDelivery = "2-4 semanas";
    handoverProtocol =
      "Revisión estratégica, documentación disponible y materiales transferibles según alcance.";
  } else if (packageType === "Growth Asset™") {
    implementationIncluded = true;
    documentationIncluded = true;
    supportIncluded = false;
    estimatedDelivery = "4-6 semanas";
    handoverProtocol =
      "Revisión de crecimiento, materiales existentes y guía de continuidad según disponibilidad.";
  } else if (packageType === "Enterprise White Label™") {
    implementationIncluded = true;
    documentationIncluded = true;
    supportIncluded = true;
    estimatedDelivery = "4-8 semanas";
    handoverProtocol =
      "Revisión privada de marca blanca, licencia aplicable y materiales transferibles según acuerdo.";
  }

  return {
    purchaseType: packageType,
    includedAssets,
    deliveryFormat: deliveryModel,
    implementationIncluded,
    documentationIncluded,
    supportIncluded,
    estimatedDelivery,
    handoverProtocol,
  };
}