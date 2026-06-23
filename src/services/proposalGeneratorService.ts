import { ProposalInput, ProposalOutput, DETERMINISTIC_TEMPLATES } from "../data/proposalTemplates";

export function generateProposal(input: ProposalInput): ProposalOutput {
  const assetScore = input.assetValueScore;
  const clientName = input.clientName || "Cliente Corporativo";
  const industry = input.clientIndustry || "General Business";

  // Guess the sub-category of the opportunity based on recommended asset name or score
  let detectedType: "Ready Revenue Asset" | "Growth Asset" | "Strategic Asset" | "Enterprise White Label" = "Ready Revenue Asset";
  
  const assetNameLower = input.recommendedAsset.toLowerCase();
  if (assetNameLower.includes("white") || assetNameLower.includes("label") || assetNameLower.includes("empresa")) {
    detectedType = "Enterprise White Label";
  } else if (assetNameLower.includes("compliance") || assetNameLower.includes("guard") || assetNameLower.includes("strategic") || assetScore < 75) {
    detectedType = "Strategic Asset";
  } else if (assetNameLower.includes("conversion") || assetNameLower.includes("growth") || assetScore >= 90) {
    detectedType = "Growth Asset";
  } else {
    detectedType = "Ready Revenue Asset";
  }

  const template = DETERMINISTIC_TEMPLATES[detectedType];

  // Logic to determine executive recommendation
  let execRec: "Proceed" | "Hold" | "Refine" = "Hold";
  if (assetScore >= 75 && input.roiScore >= 3.0) {
    execRec = "Proceed";
  } else if (assetScore >= 55 && input.roiScore >= 1.5) {
    execRec = "Refine";
  }

  // Cost estimates
  let estCost = 6500;
  if (detectedType === "Strategic Asset") {
    estCost = 15000;
  } else if (detectedType === "Enterprise White Label") {
    estCost = 9500;
  } else if (detectedType === "Growth Asset") {
    estCost = 5000;
  } else {
    estCost = 3000;
  }

  // Generate dynamic sections based on data
  const situacionDetectada = `Se ha completado el análisis preliminar de flujos operativos para ${clientName} dentro del sector de ${industry}. Se identificó una inmejorable oportunidad técnica para rentabilizar o automatizar el proceso manual mediante la implementación inmediata del activo digital "${input.recommendedAsset}".`;

  const problemaPrincipal = `La ejecución manual, repetitiva y centralizada del proceso genera ineficiencias críticas que limitan la capacidad de escalabilidad comercial. Esto produce retrasos operacionales innecesarios, elevando los costos directos hora/hombre y provocando pérdidas de ingresos potenciales estimados por demora en la entrega de cara a clientes finales.`;

  const solucionRecomendada = `Desplegar el activo digital "${input.recommendedAsset}" bajo la categoría comercial "${detectedType}". Esto posibilitará resolver la ineficiencia mediante software estandarizado de primer nivel desarrollado por ProjectApps™, reduciendo a cero la dependencia de procesos manuales y habilitando una base de operación ágil listo para ser licenciado o revendido corporativamente.`;

  const impactoEsperado = `Con la automatización de la oportunidad, ${clientName} logrará ahorrar un valor directo estimado de $${input.annualSavings.toLocaleString()} USD anualmente al eliminar tiempos muertos de ingeniería o administración manual. Asimismo, se proyecta abrir nuevas líneas de adquisición de clientes con un impacto de ingresos potenciales de hasta $${input.potentialRevenueGain.toLocaleString()} USD anuales.`;

  const roiEstimado = `El capital invertido en el activo entrega un retorno económico sobresaliente con un payback aproximado de ${input.paybackPeriod}. Esto representa un multiplicador de impacto ROI estimado de ${input.roiScore}x, posicionando este activo como de máxima rentabilidad técnica y bajísima fricción operacional.`;

  const timelineImplementacion = `La implementación se llevará a cabo de forma secuencial en un plazo estimado de ${template.timeline}. Esto contempla la personalización de identidad visual, el aprovisionamiento de la pasarela y las pruebas técnicas de compatibilidad.`;

  const recomendacionEjecutiva = execRec === "Proceed"
    ? `RESOLUCIÓN: Proceder inmediatamente (Proceed). La solidez del Asset Value Score™ de ${assetScore}/100 y el retorno financiero calculado avalan un desarrollo de alta urgencia con go-to-market inmediato.`
    : execRec === "Refine"
      ? `RESOLUCIÓN: Refinar y calibrar alcance (Refine). Se sugiere optimizar la arquitectura del activo o recortar las funcionalidades iniciales para acelerar el retorno y maximizar el payback estimado.`
      : `RESOLUCIÓN: En espera (Hold). Se sugiere priorizar otros activos de la plataforma ProjectApps™ con menor fricción de implementación técnica o mayor volumen de venta orgánica inmediata.`;

  return {
    recommendedAsset: input.recommendedAsset,
    clientName,
    assetValueScore: assetScore,
    annualSavings: input.annualSavings,
    potentialRevenueGain: input.potentialRevenueGain,
    paybackPeriod: input.paybackPeriod,
    roiScore: input.roiScore,
    implementationTimeline: template.timeline,
    recommendation: execRec,
    sections: {
      situacionDetectada,
      problemaPrincipal,
      solucionRecomendada,
      impactoEsperado,
      roiEstimado,
      timelineImplementacion,
      entregables: template.deliverables,
      recomendacionEjecutiva
    },
    investmentSummary: {
      estimatedImplementationCost: estCost,
      ongoingMaintenanceValue: template.maintenance,
      termType: detectedType === "Strategic Asset" ? "Adquisición total de IP perpetua" : "Licenciamiento comercial corporativo"
    }
  };
}
