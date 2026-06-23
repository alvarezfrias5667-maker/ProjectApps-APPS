export interface IntelligenceInput {
  opportunityType: "Ready Revenue Asset" | "Growth Asset" | "Strategic Asset" | "Enterprise White Label";
  problemDetected: string;
  potentialValue: "Alto" | "Muy Alto" | "Crítico";
  implementationComplexity: "Baja" | "Media" | "Alta";
}

export interface IntelligenceResult {
  assetValueScore: number;
  buildRecommendation: "Build Immediately™" | "Strong Opportunity™" | "Validate Further™" | "Low Priority™";
  marketFit: "High" | "Medium-High" | "Medium" | "Low";
  revenuePotential: "High" | "Medium-High" | "Medium" | "Low";
  complexity: "High" | "Medium" | "Low";
  shortReason: string;
  breakdown: {
    demandScore: number;
    revenuePotentialScore: number;
    reusabilityScore: number;
    competitionScore: number;
    complexityScore: number;
  };
}

export const EXAMPLES_INTELLIGENCE: { input: IntelligenceInput; output: IntelligenceResult }[] = [
  {
    input: {
      opportunityType: "Ready Revenue Asset",
      problemDetected: "Generación manual de certificados",
      potentialValue: "Alto",
      implementationComplexity: "Media"
    },
    output: {
      assetValueScore: 81,
      buildRecommendation: "Strong Opportunity™",
      marketFit: "Medium-High",
      revenuePotential: "Medium-High",
      complexity: "Medium",
      shortReason: "Problema altamente repetitivo con gran capacidad de estandarización y bajo tiempo de go-to-market.",
      breakdown: {
        demandScore: 18,
        revenuePotentialScore: 18,
        reusabilityScore: 20,
        competitionScore: 10,
        complexityScore: 15
      }
    }
  }
];
