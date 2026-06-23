import LegalLayout from "../../components/LegalLayout";

export default function PrivacyPage() {
  return (
    <LegalLayout title="Políticas de Privacidad" lastUpdated="22 de Junio, 2026">
      <p>
        Para <strong>COMMERCIAL WEBSITE ENGINE™</strong>, la confidencialidad, la privacidad de los datos y el cumplimiento normativo son de máxima importancia para la confianza de nuestros clientes, socios y de la comunidad de negocios en general.
      </p>

      <h2 className="text-lg font-bold text-neutral-900 mt-6 mb-2">1. Recopilación de Información</h2>
      <p>
        La única información recopilada voluntariamente en este portal comercial público es aquella suministrada explícitamente por el usuario a través de nuestro formulario de consulta corporativa. Esto incluye datos personales y profesionales de contacto estrictamente necesarios, tales como nombre completo, denominación de la empresa, dirección de correo electrónico corporativo y la descripción puntual del requerimiento técnico.
      </p>

      <h2 className="text-lg font-bold text-neutral-900 mt-6 mb-2">2. Uso de la Información Suministrada</h2>
      <p>
        Los datos provistos serán procesados de forma automatizada por nuestro equipo de relaciones técnicas con la finalidad exclusiva de estructurar las respuestas a sus consultas operativas, preparar cotizaciones personalizadas o programar llamadas de validación comercial externa. En ningún caso se transferirán, venderán ni arrendarán estos datos a terceros sin una autorización escrita previa y formal.
      </p>

      <h2 className="text-lg font-bold text-neutral-900 mt-6 mb-2">3. Retención y Medidas de Seguridad</h2>
      <p>
        Adoptamos medidas lógicas de ingeniería para salvaguardar de accesos no autorizados, pérdidas accidentales o alteraciones maliciosas los datos estructurados en nuestros sistemas. Retenemos dicha información de contacto conforme a los plazos estrictos marcados por las normativas de gobernanza de información comercial aplicables, o hasta que el titular asiente formalmente su solicitud de remoción inmediata.
      </p>

      <h2 className="text-lg font-bold text-neutral-900 mt-6 mb-2">4. Canales de Derechos de Acceso</h2>
      <p>
        Usted conserva el derecho de acceder, rectificar o revocar el consentimiento del tratamiento de su información. Para proceder con cualquier solicitud de ejercicio de derechos del titular, por favor interactúe directamente mediante nuestros canales formales descritos en la sección de contacto, dirigiéndose a nuestro Delegado de Protección de Datos (DPO) adjuntando su requerimiento específico.
      </p>
    </LegalLayout>
  );
}
