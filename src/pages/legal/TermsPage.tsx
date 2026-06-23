import LegalLayout from "../../components/LegalLayout";

export default function TermsPage() {
  return (
    <LegalLayout title="Términos y Condiciones de Uso" lastUpdated="22 de Junio, 2026">
      <p>
        El acceso y el uso de este portal comercial público se rigen estrictamente de acuerdo con el clausulado técnico detallado a continuación.
      </p>

      <h2 className="text-lg font-bold text-neutral-900 mt-6 mb-2">1. Propiedad Intelectual e Industrial</h2>
      <p>
        La totalidad del contenido visual, la arquitectura estructural del software, las marcas comerciales expuestas, incluyendo la marca <strong>COMMERCIAL WEBSITE ENGINE™</strong>, así como los textos publicitarios y logotipos, constituyen propiedad intelectual reservada. Queda terminantemente restringida cualquier modalidad de duplicación, retransmisión, distribución directa o indirecta del layout comercial presente sin contar con nuestra anuencia escrita.
      </p>

      <h2 className="text-lg font-bold text-neutral-900 mt-6 mb-2">2. Alcance Limitado del Portal</h2>
      <p>
        Este portal ejerce exclusivamente funciones comerciales públicas para describir nuestra gama de servicios y consultorías técnicas. Ningún contenido expuesto en este portal de marketing constituye una oferta contractual perfecta ni compromete la ejecución e implantación final de arquitecturas específicas hasta que no sea respaldado rigurosamente por un Contrato Marco de Prestación de Servicios (MSA) firmado formalmente por los apoderados legales de ambas partes.
      </p>

      <h2 className="text-lg font-bold text-neutral-900 mt-6 mb-2">3. Restricciones de Uso de la Plataforma</h2>
      <p>
        El usuario se obliga a hacer uso legítimo de este sitio web. Se prohíbe el uso de rastreadores automatizados (web scrapers), inyección de código hostil a través de campos de entrada, o cualquier acción encaminada a interrumpir el ancho de banda o degradar la infraestructura sobre la cual opera el portal del sistema corporativo.
      </p>

      <h2 className="text-lg font-bold text-neutral-900 mt-6 mb-2">4. Modificaciones del Contenido Legal</h2>
      <p>
        Nos reservamos la facultad exclusiva de realizar adaptaciones y revisiones periódicas sobre estos términos del servicio para responder ágilmente a cambios legislativos o ajustes del modelo operativo de nuestra consultora técnica.
      </p>
    </LegalLayout>
  );
}
