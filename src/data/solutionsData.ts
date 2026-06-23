export interface Solution {
  id: string;
  internalCode: string;
  publicName: string;
  publicCategory: string;
  publicDescription: string;
  industries: string[];
  sizes: string[];
  problems: string[];
  objectives: string[];
  budgets: string[];
  expectedBenefit: string;
  estimatedTime: string;
  acquisitionModels: string[];
  additionalDetails: string[];
}

export const SOLUTIONS: Solution[] = [
  {
    id: "credential-compliance-system",
    internalCode: "CR-001",
    publicName: "Credential & Compliance System™",
    publicCategory: "Document Intelligence",
    publicDescription:
      "Activo orientado a organizar, validar y acelerar procesos relacionados con credenciales, certificaciones y documentación operativa.",
    industries: ["servicios", "finanzas", "salud"],
    sizes: ["pequena", "mediana"],
    problems: ["procesos", "lentitud"],
    objectives: ["cumplimiento", "reducir_costos"],
    budgets: ["bajo", "medio"],
    expectedBenefit:
      "Puede reducir fricción operativa en procesos documentales y mejorar la trazabilidad de cumplimiento.",
    estimatedTime: "1 a 2 semanas",
    acquisitionModels: ["Commercial License", "Project ZIP™", "Implementation Review"],
    additionalDetails: [
      "Validación documental disponible según alcance",
      "Estructura preparada para procesos de revisión",
      "Materiales entregables sujetos a modalidad adquirida",
    ],
  },
  {
    id: "visibility-acquisition-system",
    internalCode: "VO-001",
    publicName: "Visibility & Acquisition System™",
    publicCategory: "Marketing & Growth Intelligence",
    publicDescription:
      "Activo enfocado en mejorar visibilidad comercial, detectar oportunidades de adquisición y fortalecer presencia digital.",
    industries: ["ecommerce", "tecnologia", "servicios"],
    sizes: ["pequena", "mediana", "grande"],
    problems: ["conversion", "lentitud"],
    objectives: ["aumentar_ventas", "automatizar"],
    budgets: ["bajo", "medio"],
    expectedBenefit:
      "Puede ayudar a identificar fugas de visibilidad y mejorar decisiones comerciales relacionadas con adquisición.",
    estimatedTime: "1 a 2 semanas",
    acquisitionModels: ["Commercial License", "White Label Option", "Implementation Review"],
    additionalDetails: [
      "Evaluación de presencia digital",
      "Señales de oportunidad comercial",
      "Estructura adaptable según categoría de negocio",
    ],
  },
  {
    id: "rapid-launch-system",
    internalCode: "LQ-001",
    publicName: "Rapid Launch System™",
    publicCategory: "Product Discovery",
    publicDescription:
      "Activo diseñado para acelerar validación, lanzamiento y estructuración inicial de iniciativas digitales.",
    industries: ["ecommerce", "servicios"],
    sizes: ["pequena", "mediana"],
    problems: ["lentitud", "conversion"],
    objectives: ["aumentar_ventas", "automatizar"],
    budgets: ["bajo", "medio"],
    expectedBenefit:
      "Puede reducir tiempo de preparación para iniciativas digitales y mejorar velocidad de salida al mercado.",
    estimatedTime: "2 semanas",
    acquisitionModels: ["Commercial License", "Project ZIP™", "Implementation Review"],
    additionalDetails: [
      "Estructura inicial de lanzamiento",
      "Flujo de validación comercial",
      "Componentes disponibles según estado real del activo",
    ],
  },
  {
    id: "security-validation-system",
    internalCode: "SS-001",
    publicName: "Security Validation System™",
    publicCategory: "Security & Trust Intelligence",
    publicDescription:
      "Activo orientado a revisar riesgos, exposición operativa y señales de seguridad dentro de entornos digitales.",
    industries: ["tecnologia", "finanzas", "salud"],
    sizes: ["mediana", "grande"],
    problems: ["seguridad", "escalabilidad"],
    objectives: ["cumplimiento", "reducir_costos"],
    budgets: ["medio", "alto"],
    expectedBenefit:
      "Puede apoyar procesos de revisión preventiva y priorización de riesgos digitales.",
    estimatedTime: "2 a 3 semanas",
    acquisitionModels: ["Commercial License", "White Label Option", "Implementation Review"],
    additionalDetails: [
      "Evaluación de señales de riesgo",
      "Estructura adaptable a procesos internos",
      "Alcance sujeto a modalidad y disponibilidad",
    ],
  },
  {
    id: "deployment-readiness-system",
    internalCode: "BR-001",
    publicName: "Deployment Readiness System™",
    publicCategory: "Infrastructure & Platform Intelligence",
    publicDescription:
      "Activo enfocado en preparar estructuras técnicas, despliegues y bases operativas para proyectos digitales.",
    industries: ["tecnologia", "ecommerce", "finanzas"],
    sizes: ["mediana", "grande"],
    problems: ["escalabilidad", "lentitud"],
    objectives: ["automatizar", "reducir_costos"],
    budgets: ["medio", "alto"],
    expectedBenefit:
      "Puede reducir fricción de preparación técnica y mejorar consistencia en despliegues iniciales.",
    estimatedTime: "2 a 4 semanas",
    acquisitionModels: ["Commercial License", "Project ZIP™", "White Label Option"],
    additionalDetails: [
      "Estructura técnica disponible según estado",
      "Documentación existente cuando aplique",
      "Preparado para revisión previa de alcance",
    ],
  },
  {
    id: "workflow-blueprint-system",
    internalCode: "WB-001",
    publicName: "Workflow Blueprint System™",
    publicCategory: "Operations Intelligence",
    publicDescription:
      "Activo orientado a estructurar procesos, flujos de trabajo y documentación operativa para ejecución empresarial.",
    industries: ["manufactura", "finanzas", "servicios"],
    sizes: ["mediana", "grande"],
    problems: ["procesos", "escalabilidad"],
    objectives: ["automatizar", "cumplimiento"],
    budgets: ["medio", "alto"],
    expectedBenefit:
      "Puede facilitar organización de procesos internos y acelerar definición de estructuras operativas.",
    estimatedTime: "3 a 4 semanas",
    acquisitionModels: ["Strategic Acquisition", "Project ZIP™", "Commercial License"],
    additionalDetails: [
      "Mapeo de procesos",
      "Documentación operativa disponible",
      "Roadmap sujeto al estado real del activo",
    ],
  },
  {
    id: "transaction-proof-system",
    internalCode: "TP-001",
    publicName: "Transaction Proof System™",
    publicCategory: "Compliance Intelligence",
    publicDescription:
      "Activo enfocado en validación, registro y trazabilidad de operaciones comerciales y documentos transaccionales.",
    industries: ["finanzas", "ecommerce", "servicios"],
    sizes: ["mediana", "grande"],
    problems: ["seguridad", "procesos"],
    objectives: ["cumplimiento", "automatizar"],
    budgets: ["medio", "alto"],
    expectedBenefit:
      "Puede mejorar trazabilidad comercial y soporte documental para procesos de validación.",
    estimatedTime: "3 semanas",
    acquisitionModels: ["Commercial License", "White Label Option", "Project ZIP™"],
    additionalDetails: [
      "Registro estructurado de operaciones",
      "Validación documental disponible según alcance",
      "Material técnico sujeto a revisión previa",
    ],
  },
  {
    id: "growth-asset-portfolio",
    internalCode: "GA-001",
    publicName: "Growth Asset Portfolio™",
    publicCategory: "Growth Intelligence",
    publicDescription:
      "Conjunto de activos orientados a adquisición, conversión, crecimiento y expansión comercial.",
    industries: ["ecommerce", "tecnologia", "servicios", "manufactura"],
    sizes: ["pequena", "mediana", "grande"],
    problems: ["conversion", "procesos"],
    objectives: ["aumentar_ventas", "automatizar"],
    budgets: ["medio", "alto"],
    expectedBenefit:
      "Puede ayudar a identificar oportunidades de crecimiento y acelerar iniciativas comerciales.",
    estimatedTime: "4 a 6 semanas",
    acquisitionModels: ["Growth Acquisition", "Commercial License", "White Label Option"],
    additionalDetails: [
      "Activos sujetos a disponibilidad",
      "Categorías organizadas por objetivo de negocio",
      "Información detallada disponible después de solicitud",
    ],
  },
  {
    id: "strategic-asset-portfolio",
    internalCode: "SA-001",
    publicName: "Strategic Asset Portfolio™",
    publicCategory: "Decision Intelligence",
    publicDescription:
      "Conjunto de activos estratégicos orientados a propiedad intelectual, dirección operativa y decisiones de alto impacto.",
    industries: ["finanzas", "salud", "tecnologia", "manufactura"],
    sizes: ["grande"],
    problems: ["seguridad", "escalabilidad", "procesos"],
    objectives: ["cumplimiento", "reducir_costos", "automatizar"],
    budgets: ["alto"],
    expectedBenefit:
      "Puede apoyar decisiones estratégicas, adquisición de IP y aceleración de iniciativas empresariales.",
    estimatedTime: "6 a 12 semanas",
    acquisitionModels: ["Strategic Acquisition", "White Label Option", "Project ZIP™"],
    additionalDetails: [
      "Información privada disponible mediante validación",
      "Materiales transferibles según modalidad adquirida",
      "Alcance sujeto a disponibilidad y acuerdo",
    ],
  },
];