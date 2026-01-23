import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/hooks/use-language";

const TermsOfService = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">
          {language === 'es' ? 'Términos de Servicio' : 'Terms of Service'}
        </h1>
        
        <p className="text-muted-foreground mb-8">
          {t('legal.lastUpdated')}
        </p>

        <div className="prose prose-lg max-w-none space-y-8 text-foreground/90">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {language === 'es' ? '1. Aceptación de Términos' : '1. Acceptance of Terms'}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {language === 'es'
                ? 'Al acceder y utilizar los servicios proporcionados por L & M Creative Service INC dba C3 Marketing Hub ("nosotros"), usted acepta estar sujeto a estos Términos de Servicio. Si no está de acuerdo con alguna parte de estos términos, no puede utilizar nuestros servicios.'
                : 'By accessing and using the services provided by L & M Creative Service INC dba C3 Marketing Hub ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.'}
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {language === 'es' ? '2. Descripción de Servicios' : '2. Services Description'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {language === 'es'
                ? 'C3 Marketing Hub proporciona servicios de marketing digital que incluyen, pero no se limitan a:'
                : 'C3 Marketing Hub provides digital marketing services including but not limited to:'}
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>{language === 'es' ? 'Optimización y gestión de Google Business Profile' : 'Google Business Profile optimization and management'}</li>
              <li>{language === 'es' ? 'Servicios de SEO local' : 'Local SEO services'}</li>
              <li>{language === 'es' ? 'Diseño y desarrollo de sitios web' : 'Website design and development'}</li>
              <li>{language === 'es' ? 'Marketing en redes sociales' : 'Social media marketing'}</li>
              <li>{language === 'es' ? 'Campañas de publicidad digital' : 'Digital advertising campaigns'}</li>
              <li>{language === 'es' ? 'Consultoría y estrategia de marketing' : 'Marketing consultation and strategy'}</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {language === 'es' ? '3. Responsabilidades del Cliente' : '3. Client Responsibilities'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {language === 'es' ? 'Como cliente, usted acepta:' : 'As a client, you agree to:'}
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>{language === 'es' ? 'Proporcionar información precisa y completa necesaria para nuestros servicios' : 'Provide accurate and complete information necessary for our services'}</li>
              <li>{language === 'es' ? 'Responder a las solicitudes de información o aprobaciones de manera oportuna' : 'Respond to requests for information or approvals in a timely manner'}</li>
              <li>{language === 'es' ? 'Otorgar el acceso necesario a sus cuentas y plataformas comerciales según sea requerido' : 'Grant necessary access to your business accounts and platforms as required'}</li>
              <li>{language === 'es' ? 'Realizar pagos según el calendario acordado' : 'Make payments according to the agreed-upon schedule'}</li>
              <li>{language === 'es' ? 'Cumplir con todas las leyes y regulaciones aplicables' : 'Comply with all applicable laws and regulations'}</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {language === 'es' ? '4. Términos de Pago' : '4. Payment Terms'}
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                <strong className="text-foreground">{language === 'es' ? 'Tarifas:' : 'Fees:'}</strong> {language === 'es'
                  ? 'Las tarifas de servicio se detallan en su acuerdo de servicio individual. Todas las tarifas se cotizan en dólares estadounidenses a menos que se especifique lo contrario.'
                  : 'Service fees are outlined in your individual service agreement. All fees are quoted in US dollars unless otherwise specified.'}
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">{language === 'es' ? 'Calendario de Pagos:' : 'Payment Schedule:'}</strong> {language === 'es'
                  ? 'Los pagos vencen según el calendario especificado en su acuerdo de servicio, típicamente de forma mensual.'
                  : 'Payments are due according to the schedule specified in your service agreement, typically on a monthly basis.'}
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">{language === 'es' ? 'Pagos Atrasados:' : 'Late Payments:'}</strong> {language === 'es'
                  ? 'Los pagos atrasados pueden resultar en la suspensión de servicios. Se puede aplicar un cargo por mora a los saldos vencidos.'
                  : 'Late payments may result in suspension of services. A late fee may be applied to overdue balances.'}
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">{language === 'es' ? 'Reembolsos:' : 'Refunds:'}</strong> {language === 'es'
                  ? 'Las políticas de reembolso se especifican en los acuerdos de servicio individuales. Generalmente, las tarifas por trabajo completado no son reembolsables.'
                  : 'Refund policies are specified in individual service agreements. Generally, fees for completed work are non-refundable.'}
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {language === 'es' ? '5. Propiedad Intelectual' : '5. Intellectual Property'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {language === 'es'
                ? 'Tras el pago completo, los clientes reciben la propiedad del contenido personalizado creado específicamente para ellos, incluyendo diseños de sitios web, gráficos y contenido escrito.'
                : 'Upon full payment, clients receive ownership of custom content created specifically for them, including website designs, graphics, and written content.'}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {language === 'es'
                ? 'C3 Marketing Hub conserva el derecho de usar el trabajo completado en nuestro portafolio y materiales de marketing a menos que se acuerde lo contrario por escrito. También conservamos la propiedad de cualquier tecnología de fondo, frameworks o código preexistente utilizado para entregar los servicios.'
                : 'C3 Marketing Hub retains the right to use completed work in our portfolio and marketing materials unless otherwise agreed in writing. We also retain ownership of any background technology, frameworks, or pre-existing code used to deliver the services.'}
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {language === 'es' ? '6. Confidencialidad' : '6. Confidentiality'}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {language === 'es'
                ? 'Mantenemos la confidencialidad de toda la información del cliente y no divulgaremos información comercial a terceros excepto según sea necesario para proporcionar nuestros servicios o según lo requiera la ley.'
                : 'We maintain the confidentiality of all client information and will not disclose business information to third parties except as necessary to provide our services or as required by law.'}
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {language === 'es' ? '7. Limitación de Responsabilidad' : '7. Limitation of Liability'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {language === 'es'
                ? 'C3 Marketing Hub (y su entidad matriz L & M Creative Service INC) no será responsable de ningún daño indirecto, incidental, especial, consecuente o punitivo resultante del uso de nuestros servicios.'
                : 'C3 Marketing Hub (and its parent entity L & M Creative Service INC) shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.'}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {language === 'es'
                ? 'Nuestra responsabilidad total no excederá el monto pagado por usted por los servicios en los tres (3) meses anteriores a la reclamación.'
                : 'Our total liability shall not exceed the amount paid by you for services in the three (3) months preceding the claim.'}
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {language === 'es' ? '8. Cancelación del Servicio' : '8. Service Cancellation'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {language === 'es'
                ? 'Cualquiera de las partes puede terminar los servicios con aviso por escrito según lo especificado en el acuerdo de servicio. Al terminar:'
                : 'Either party may terminate services with written notice as specified in the service agreement. Upon termination:'}
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>{language === 'es' ? 'Todos los cargos pendientes vencen inmediatamente' : 'All outstanding fees become immediately due'}</li>
              <li>{language === 'es' ? 'Proporcionaremos asistencia razonable en la transición de servicios' : 'We will provide reasonable assistance in transitioning services'}</li>
              <li>{language === 'es' ? 'El acceso a cuentas y materiales se transferirá según corresponda' : 'Access to accounts and materials will be transferred as applicable'}</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {language === 'es' ? '9. Modificaciones a los Términos' : '9. Modifications to Terms'}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {language === 'es'
                ? 'Nos reservamos el derecho de modificar estos Términos de Servicio en cualquier momento. Los cambios serán efectivos al publicarse en nuestro sitio web. El uso continuado de nuestros servicios después de las modificaciones constituye la aceptación de los términos actualizados.'
                : 'We reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting to our website. Continued use of our services after modifications constitutes acceptance of the updated terms.'}
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {language === 'es' ? '10. Ley Aplicable' : '10. Governing Law'}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {language === 'es'
                ? 'Estos Términos de Servicio se regirán e interpretarán de acuerdo con las leyes del Estado de California, sin tener en cuenta sus disposiciones sobre conflicto de leyes.'
                : 'These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.'}
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {language === 'es' ? '11. Información de Contacto' : '11. Contact Information'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {language === 'es'
                ? 'Para preguntas sobre estos Términos de Servicio, contáctenos:'
                : 'For questions about these Terms of Service, please contact us:'}
            </p>
            <div className="bg-card p-6 rounded-xl border border-border">
              <p className="font-semibold text-foreground mb-2">C3 Marketing Hub</p>
              <p className="text-muted-foreground">Attn: Carlos Cordero</p>
              <p className="text-muted-foreground">134B Inger Dr, Santa Maria CA 93454</p>
              <p className="text-muted-foreground">
                {language === 'es' ? 'Teléfono: ' : 'Phone: '}<a href="tel:+18056084843" className="text-primary hover:underline">(805) 608-4843</a>
              </p>
              <p className="text-muted-foreground">
                Email: <a href="mailto:info@c3marketinghub.com" className="text-primary hover:underline">info@c3marketinghub.com</a>
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex gap-6">
          <Link 
            to="/" 
            className="text-primary hover:underline font-medium"
          >
            {t('legal.backToHome')}
          </Link>
          <Link 
            to="/privacy-policy" 
            className="text-primary hover:underline font-medium"
          >
            {language === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
