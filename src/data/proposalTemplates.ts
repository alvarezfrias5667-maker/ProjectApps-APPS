export interface ProposalInput {
  recommendedAsset: string;
  assetValueScore: number;
  annualSavings: number;
  potentialRevenueGain: number;
  paybackPeriod: string;
  roiScore: number;
  clientName?: string;
  clientIndustry?: string;
}

export interface ProposalOutput {
  recommendedAsset: string;
  clientName: string;
  assetValueScore: number;
  annualSavings: number;
  potentialRevenueGain: number;
  paybackPeriod: string;
  roiScore: number;
  implementationTimeline: string;
  recommendation: "Proceed" | "Hold" | "Refine";
  sections: {
    situacionDetectada: string;
    problemaPrincipal: string;
    solucionRecomendada: string;
    impactoEsperado: string;
    roiEstimado: string;
    timelineImplementacion: string;
    entregables: string[];
    recomendacionEjecutiva: string;
  };
  investmentSummary: {
    estimatedImplementationCost: number;
    ongoingMaintenanceValue: string;
    termType: string;
  };
}

export const DETERMINISTIC_TEMPLATES = {
  "Ready Revenue Asset": {
    timeline: "7-14 días",
    maintenance: "Soporte de actualización y hosting ligero incluido en el blueprint comercial",
    deliverables: [
      "Instancia del Activo Comercial con identidad de marca personalizada",
      "Manual operativo y de control de leads paso a paso",
      "Licencia comercial estándar de uso ilimitado perpetuo",
      "Garantía de soporte de acoplamiento técnico inicial de 30 días"
    ]
  },
  "Growth Asset": {
    timeline: "4-6 semanas",
    maintenance: "Soporte Premium Gold de optimización de conversión y analíticas integradas",
    deliverables: [
      "Infraestructura avanzada de embudo transaccional y SEO optimizado",
      "Scripts de analítica integrados en tiempo real y flujos automatizados de checkout",
      "Documentación técnica de transferencia de IP de embudo",
      "Licencia extendida multi-dominio para el corporativo"
    ]
  },
  "Strategic Asset": {
    timeline: "6-12 semanas",
    maintenance: "Soporte prioritized directo nivel L3 con ingenieros centrales de ProjectApps™",
    deliverables: [
      "Transferencia o creación perpetua y limpia del código fuente patentable",
      "Plataforma completa descentralizada o auditada bajo normas de ciberseguridad corporativas",
      "Manuales de nivel de arquitectura e ingeniería del activo",
      "Derechos exclusivos perpetuos de explotación, distribución o venta comercial"
    ]
  },
  "Enterprise White Label": {
    timeline: "4-8 semanas",
    maintenance: "Soporte técnico de reventa continua y consultor de marca asignado",
    deliverables: [
      "Plataforma vestida y personalizada con marca blanca 100% libre de ProjectApps™",
      "Kit de ventas, documentación técnica para reventa a terceros e instructivos",
      "Plataforma paquetizada lista para descarga y aprovisionamiento directo",
      "Licencias ilimitadas para revender bajo su propia estructura de precios"
    ]
  }
};
