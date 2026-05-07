import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/hooks/use-language";

const TermsOfService = () => {
  const { t, language } = useLanguage();
  const es = language === 'es';

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-2 text-foreground">
          {es ? 'Términos Operativos y de Propiedad Intelectual' : 'Operational Terms and Intellectual Property'}
        </h1>
        <p className="text-muted-foreground mb-8">
          L &amp; M Creative Service INC (DBA C3 Marketing) — {t('legal.lastUpdated')}
        </p>

        <div className="prose prose-lg max-w-none space-y-8 text-foreground/90">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {es ? '1. Uso de Sistemas y Desarrollo a Riesgo (Fase Cero)' : '1. Systems Use and At-Risk Development (Phase Zero)'}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {es
                ? 'C3 Marketing puede ofrecer maquetas, simulaciones y prototipos de sitios web o perfiles de Google sin costo de configuración inicial (Fase Cero). Estos entregables son simulaciones en entornos cerrados. No se registrarán dominios, ni se indexarán sitios web en buscadores, ni se transferirán accesos hasta la formalización de la suscripción y el primer pago. Si el cliente no aprueba el proyecto en el tiempo estipulado, C3 Marketing eliminará las simulaciones y retendrá todos los derechos.'
                : 'C3 Marketing may offer mockups, simulations and prototypes of websites or Google profiles at no initial setup cost (Phase Zero). These deliverables are simulations in closed environments. No domains will be registered, no websites will be indexed in search engines, and no access will be transferred until the subscription is formalized and the first payment is made. If the client does not approve the project within the stipulated time, C3 Marketing will delete the simulations and retain all rights.'}
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {es ? '2. Inteligencia Artificial, Metodologías y Obras Derivadas' : '2. Artificial Intelligence, Methodologies and Derivative Works'}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {es
                ? 'El cliente autoriza el procesamiento de sus datos comerciales iniciales mediante nuestros sistemas de análisis e Inteligencia Artificial (C3 Studio). Mientras que el cliente retiene la propiedad de sus datos comerciales básicos, los textos publicitarios, estructuras y la "Oferta de Valor" resultantes constituyen una "Obra Derivada" propiedad de C3 Marketing. Asimismo, la agencia retiene el 100% de la propiedad intelectual sobre la arquitectura de su software, lógicas de programación y metodologías de ventas.'
                : 'The client authorizes processing of their initial business data through our analysis systems and Artificial Intelligence (C3 Studio). While the client retains ownership of their basic business data, the resulting advertising copy, structures and "Value Offer" constitute a "Derivative Work" owned by C3 Marketing. Likewise, the agency retains 100% intellectual property over its software architecture, programming logic and sales methodologies.'}
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {es ? '3. Adquisición de Derechos (Vesting) y Cancelaciones' : '3. Vesting and Cancellations'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {es
                ? 'Para garantizar resultados en los motores de búsqueda, los planes mensuales (Cimientos, Presencia Digital, Imán Local) requieren un compromiso mínimo forzoso de seis (6) meses.'
                : 'To guarantee results in search engines, monthly plans (Foundations, Digital Presence, Local Magnet) require a forced minimum commitment of six (6) months.'}
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
              <li>
                <strong className="text-foreground">{es ? 'Cancelación anticipada: ' : 'Early cancellation: '}</strong>
                {es
                  ? 'Si el cliente cancela el servicio antes de cumplir el sexto mes, no adquiere ninguna licencia de uso ni derecho de propiedad sobre el diseño web, textos o videos creados por C3 Marketing. El uso continuo de estos activos constituirá una infracción a los Derechos de Autor.'
                  : 'If the client cancels the service before completing the sixth month, they acquire no use license or ownership rights over the web design, copy or videos created by C3 Marketing. Continued use of these assets will constitute a Copyright infringement.'}
              </li>
              <li>
                <strong className="text-foreground">{es ? 'Cumplimiento del contrato: ' : 'Contract fulfillment: '}</strong>
                {es
                  ? 'Al liquidar la sexta (6ta) mensualidad, el cliente adquiere una licencia perpetua y libre de regalías sobre los "Entregables Finales" (textos, videos, diseño web frontal) y es libre de transferirlos a otro proveedor si lo desea.'
                  : 'Upon paying the sixth (6th) monthly installment, the client acquires a perpetual, royalty-free license over the "Final Deliverables" (copy, videos, front-end web design) and is free to transfer them to another provider if they wish.'}
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              {es
                ? 'Bajo ninguna circunstancia se entregarán códigos fuente, bases de datos o acceso a los flujos internos del CRM de C3 Studio.'
                : 'Under no circumstances will source code, databases or access to the internal flows of the C3 Studio CRM be delivered.'}
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {es ? '4. Exención de Responsabilidad (Hold Harmless)' : '4. Hold Harmless'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {es
                ? 'C3 Marketing provee la infraestructura tecnológica y publicitaria; el cliente es el único responsable de sus operaciones, promesas de venta y ética comercial.'
                : 'C3 Marketing provides the technological and advertising infrastructure; the client is solely responsible for their operations, sales promises and commercial ethics.'}
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>{es ? 'C3 Marketing no se hace responsable por disputas legales derivadas de las operaciones del cliente con sus consumidores.' : 'C3 Marketing is not responsible for legal disputes arising from the client\'s operations with their consumers.'}</li>
              <li>{es ? 'C3 Marketing no garantiza un volumen específico de ventas o posición exacta en buscadores, ya que el posicionamiento depende de algoritmos de terceros (Google, Meta).' : 'C3 Marketing does not guarantee a specific sales volume or exact search engine position, since ranking depends on third-party algorithms (Google, Meta).'}</li>
              <li>{es ? 'Si el cliente, sus empleados o terceros modifican el código fuente de la página web o migran el sitio a servidores externos, toda garantía de funcionamiento y seguridad quedará anulada instantáneamente.' : 'If the client, their employees or third parties modify the source code of the website or migrate the site to external servers, all functionality and security warranties will be instantly voided.'}</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {es ? '5. Condiciones de Pago' : '5. Payment Conditions'}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {es
                ? 'Los precios publicados incluyen un descuento pre-aplicado por pagos en Efectivo, ACH o Zelle. Los pagos realizados mediante Tarjeta de Crédito estarán sujetos a un recargo estándar por procesamiento del 3%. Finalizado el plazo de 6 meses, los planes mensuales se renovarán de forma automática mes a mes.'
                : 'Published prices include a pre-applied discount for Cash, ACH or Zelle payments. Payments made by Credit Card will be subject to a standard 3% processing surcharge. After the 6-month term ends, monthly plans will automatically renew on a month-to-month basis.'}
            </p>
          </section>

          {/* Section 6 - A2P 10DLC (kept for compliance) */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {es ? '6. Anexo de Comunicaciones Electrónicas (A2P 10DLC)' : '6. Electronic Communications Addendum (A2P 10DLC)'}
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                <strong className="text-foreground">{es ? 'Consentimiento: ' : 'Consent: '}</strong>
                {es
                  ? 'Al proporcionar tu número de teléfono, aceptas recibir mensajes de texto (SMS) y WhatsApp de C3 Marketing para fines de seguimiento de proyectos y marketing. La frecuencia de mensajes puede variar. Pueden aplicarse tarifas estándar de mensajes y datos.'
                  : 'By providing your phone number, you consent to receiving text messages (SMS) and WhatsApp messages from C3 Marketing for project follow-up and marketing purposes. Message frequency may vary. Standard message and data rates may apply.'}
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">{es ? 'Opt-Out: ' : 'Opt-Out: '}</strong>
                {es
                  ? 'Puedes cancelar la suscripción en cualquier momento enviando "STOP". Para ayuda, envía "HELP".'
                  : 'You can unsubscribe at any time by replying "STOP". For help, reply "HELP".'}
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">{es ? 'Privacidad de Datos: ' : 'Data Privacy: '}</strong>
                {es
                  ? 'No compartimos, vendemos ni cedemos los datos de consentimiento de mensajes con terceros bajo ninguna circunstancia.'
                  : 'We do not share, sell, or transfer message consent data to any third parties under any circumstances.'}
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {es ? 'Información de Contacto' : 'Contact Information'}
            </h2>
            <div className="bg-card p-6 rounded-xl border border-border">
              <p className="font-semibold text-foreground mb-2">L &amp; M Creative Service INC (DBA C3 Marketing)</p>
              <p className="text-muted-foreground">Attn: Carlos Cordero</p>
              <p className="text-muted-foreground">134B Inger Dr, Santa Maria CA 93454</p>
              <p className="text-muted-foreground">
                {es ? 'Teléfono: ' : 'Phone: '}<a href="tel:+18056084843" className="text-primary hover:underline">(805) 608-4843</a>
              </p>
              <p className="text-muted-foreground">
                Email: <a href="mailto:info@c3marketinghub.com" className="text-primary hover:underline">info@c3marketinghub.com</a>
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex gap-6">
          <Link to="/" className="text-primary hover:underline font-medium">
            {t('legal.backToHome')}
          </Link>
          <Link to="/privacy-policy" className="text-primary hover:underline font-medium">
            {es ? 'Política de Privacidad' : 'Privacy Policy'}
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
