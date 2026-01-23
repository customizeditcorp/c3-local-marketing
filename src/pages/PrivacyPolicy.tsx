import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/hooks/use-language";

const PrivacyPolicy = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">
          {language === 'es' ? 'Política de Privacidad y Términos SMS' : 'Privacy Policy & SMS Terms of Service'}
        </h1>
        
        <p className="text-muted-foreground mb-8">
          {t('legal.lastUpdated')}
        </p>
        
        <div className="prose prose-lg max-w-none space-y-8 text-foreground/90">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {language === 'es' ? '1. Recopilación de Información' : '1. Information Collection'}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {language === 'es' 
                ? 'C3 Marketing Hub recopila la información que nos proporciona directamente, como su nombre, número de teléfono y dirección de correo electrónico, cuando solicita una consulta, completa un formulario en nuestro sitio web o contrata nuestros servicios de marketing.'
                : 'C3 Marketing Hub collects information you provide directly to us, such as your name, phone number, and email address, when you request a consultation, fill out a form on our website, or engage our marketing services.'}
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {language === 'es' ? '2. Compartir Información (Política Estricta de No Compartir)' : '2. Information Sharing (Strict No-Sharing Policy)'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {language === 'es'
                ? 'No vendemos, comerciamos ni alquilamos la información de identificación personal de los usuarios a terceros.'
                : 'We do not sell, trade, or rent Users\' personal identification information to others.'}
            </p>
            <p className="text-muted-foreground leading-relaxed font-medium bg-primary/5 p-4 rounded-lg border border-primary/20">
              <strong>{language === 'es' ? 'AVISO CRÍTICO DE PRIVACIDAD:' : 'CRITICAL PRIVACY NOTICE:'}</strong> {language === 'es'
                ? 'No se compartirá información móvil con terceros o afiliados con fines de marketing o promocionales. Todas las categorías anteriores excluyen los datos de consentimiento de opt-in de mensajes de texto; esta información no se compartirá con terceros.'
                : 'No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.'}
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {language === 'es' ? '3. Términos de Mensajería SMS/Móvil' : '3. SMS/Mobile Messaging Terms'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {language === 'es'
                ? 'Al dar su consentimiento al servicio de mensajería SMS/texto de C3 Marketing Hub, usted acepta recibir mensajes SMS/texto recurrentes de y en nombre de C3 Marketing Hub a través de su proveedor inalámbrico al número móvil que proporcionó, incluso si su número móvil está registrado en cualquier lista estatal o federal de No Llamar.'
                : 'By consenting to C3 Marketing Hub\'s SMS/text messaging service, you agree to receive recurring SMS/text messages from and on behalf of C3 Marketing Hub through your wireless provider to the mobile number you provided, even if your mobile number is registered on any state or federal Do Not Call list.'}
            </p>
            
            <div className="space-y-4 bg-card p-6 rounded-xl border border-border">
              <div>
                <h3 className="font-semibold text-foreground">{language === 'es' ? 'Descripción del Programa:' : 'Program Description:'}</h3>
                <p className="text-muted-foreground">
                  {language === 'es'
                    ? 'Los mensajes son estrictamente para gestión de cuenta, incluyendo informes de rendimiento mensuales, alertas de facturación, actualizaciones de proyecto y confirmaciones de citas para sesiones de estrategia con Carlos Cordero.'
                    : 'Messages are strictly for account management, including monthly performance reports, billing alerts, project updates, and appointment confirmations for strategy sessions with Carlos Cordero.'}
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground">{language === 'es' ? 'Tarifas:' : 'Fees:'}</h3>
                <p className="text-muted-foreground">
                  {language === 'es'
                    ? 'Pueden aplicarse tarifas de mensaje y datos. Consulte su plan móvil y contacte a su proveedor inalámbrico para más detalles.'
                    : 'Message and data rates may apply. Check your mobile plan and contact your wireless provider for details.'}
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground">{language === 'es' ? 'Frecuencia:' : 'Frequency:'}</h3>
                <p className="text-muted-foreground">
                  {language === 'es'
                    ? 'La frecuencia de mensajes varía según la actividad de su cuenta y proyectos actuales.'
                    : 'Message frequency varies based on your account activity and current projects.'}
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground">{language === 'es' ? 'Cancelación:' : 'Opt-Out:'}</h3>
                <p className="text-muted-foreground">
                  {language === 'es'
                    ? 'Puede cancelar el servicio en cualquier momento. Envíe el comando STOP a '
                    : 'You may opt-out of the Service at any time. Text the single keyword command STOP to '}
                  <a href="tel:+18056084843" className="text-primary hover:underline">(805) 608-4843</a>
                  {language === 'es' ? ' o responda STOP a cualquier mensaje para cancelar.' : ' or reply STOP to any message to cancel.'}
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground">{language === 'es' ? 'Soporte:' : 'Support:'}</h3>
                <p className="text-muted-foreground">
                  {language === 'es' ? 'Para soporte, envíe HELP a ' : 'For Service support or assistance, text HELP to '}
                  <a href="tel:+18056084843" className="text-primary hover:underline">(805) 608-4843</a>
                  {language === 'es' ? ' o escriba a ' : ' or email '}
                  <a href="mailto:info@c3marketinghub.com" className="text-primary hover:underline">info@c3marketinghub.com</a>.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground">{language === 'es' ? 'Operadores:' : 'Carriers:'}</h3>
                <p className="text-muted-foreground">
                  {language === 'es'
                    ? 'Los operadores móviles (AT&T, T-Mobile, Verizon, etc.) no son responsables de mensajes retrasados o no entregados.'
                    : 'The mobile carriers (AT&T, T-Mobile, Verizon, etc.) are not liable for delayed or undelivered messages.'}
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {language === 'es' ? '4. Seguridad de Datos' : '4. Data Security'}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {language === 'es'
                ? 'Implementamos prácticas apropiadas de recopilación, almacenamiento y procesamiento de datos y medidas de seguridad para proteger contra el acceso no autorizado, alteración, divulgación o destrucción de su información personal.'
                : 'We implement appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.'}
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {language === 'es' ? '5. Contáctenos' : '5. Contact Us'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {language === 'es'
                ? 'Si tiene alguna pregunta sobre esta Política de Privacidad o nuestros Términos SMS, contáctenos:'
                : 'If you have any questions about this Privacy Policy or our SMS Terms, please contact:'}
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

        <div className="mt-12 pt-8 border-t border-border">
          <Link 
            to="/" 
            className="text-primary hover:underline font-medium"
          >
            {t('legal.backToHome')}
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
