import LegalLayout from "../../components/LegalLayout";

export default function DisclaimerPage() {
  return (
    <LegalLayout title="Exención de Responsabilidad" lastUpdated="22 de Junio, 2026">
      <p>
        El presente documento fija el marco de exclusiones de carácter legal que rigen el material expuesto o distribuido a través de este portal público.
      </p>

      <h2 className="text-lg font-bold text-neutral-900 mt-6 mb-2">1. Naturaleza Únicamente Informativa</h2>
      <p>
        La información comercial contenida en este portal se ofrece con fines puramente publicitarios, informativos y de relaciones públicas comerciales. Aunque el material técnico recopilado ha sido redactado cuidadosamente por nuestros ingenieros asesores, no se asume garantía explícita o implícita respecto del nivel final de adaptabilidad, vigencia exacta o precisión total aplicable a las particularidades operativas de su empresa.
      </p>

      <h2 className="text-lg font-bold text-neutral-900 mt-6 mb-2">2. Ausencia de Diagnóstico Técnico Directo</h2>
      <p>
        Ningún contenido alojado en estas secciones reemplaza o hace las veces de un servicio de auditoría técnica formal, estudio de viabilidad de sistemas, o diagnóstico técnico individualizado. Las especificaciones operativas concretas de sus infraestructuras deben ser auditadas en profundidad por personal competente de forma directa e independiente.
      </p>

      <h2 className="text-lg font-bold text-neutral-900 mt-6 mb-2">3. Exoneración de Daños indirectos</h2>
      <p>
        <strong>COMMERCIAL WEBSITE ENGINE™</strong>, así como sus directivos, colaboradores o filiales, declinan toda responsabilidad legal por perjuicios o pérdidas operativas incidentales, indirectas, interrupciones laborales, fallos en la transferencia de datos o lucro cesante que pudieran derivarse directa o indirectamente del acceso del usuario al sitio web, de su interpretación libre sobre los artículos explicativos expuestos o del uso eventual del portal.
      </p>

      <h2 className="text-lg font-bold text-neutral-900 mt-6 mb-2">4. Convenio sobre Jurisdicción Competente</h2>
      <p>
        Cualquier reclamación emanada del uso o acceso a las páginas comerciales e informacionales aquí descritas se resolverá amistosamente en primera instancia, y de persistir el desacuerdo, ante la jurisdicción territorial de los tribunales de Madrid, España.
      </p>
    </LegalLayout>
  );
}
