import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">
          Privacy Policy & SMS Terms of Service
        </h1>
        
        <p className="text-muted-foreground mb-8">
          Last Updated: January 2025
        </p>
        
        <div className="prose prose-lg max-w-none space-y-8 text-foreground/90">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Information Collection
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              C3 Marketing Hub collects information you provide directly to us, such as your name, 
              phone number, and email address, when you request a consultation, fill out a form on 
              our website, or engage our marketing services.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Information Sharing (Strict No-Sharing Policy)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not sell, trade, or rent Users' personal identification information to others.
            </p>
            <p className="text-muted-foreground leading-relaxed font-medium bg-primary/5 p-4 rounded-lg border border-primary/20">
              <strong>CRITICAL PRIVACY NOTICE:</strong> No mobile information will be shared with third parties 
              or affiliates for marketing or promotional purposes. All the above categories exclude text messaging 
              originator opt-in data and consent; this information will not be shared with any third parties.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. SMS/Mobile Messaging Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              By consenting to C3 Marketing Hub's SMS/text messaging service, you agree to receive recurring 
              SMS/text messages from and on behalf of C3 Marketing Hub through your wireless provider to the 
              mobile number you provided, even if your mobile number is registered on any state or federal Do Not Call list.
            </p>
            
            <div className="space-y-4 bg-card p-6 rounded-xl border border-border">
              <div>
                <h3 className="font-semibold text-foreground">Program Description:</h3>
                <p className="text-muted-foreground">
                  Messages are strictly for account management, including monthly performance reports, 
                  billing alerts, project updates, and appointment confirmations for strategy sessions with Carlos Cordero.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground">Fees:</h3>
                <p className="text-muted-foreground">
                  Message and data rates may apply. Check your mobile plan and contact your wireless provider for details.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground">Frequency:</h3>
                <p className="text-muted-foreground">
                  Message frequency varies based on your account activity and current projects.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground">Opt-Out:</h3>
                <p className="text-muted-foreground">
                  You may opt-out of the Service at any time. Text the single keyword command <strong>STOP</strong> to{" "}
                  <a href="tel:+18056084843" className="text-primary hover:underline">(805) 608-4843</a> or reply STOP 
                  to any message to cancel. You'll receive a one-time opt-out confirmation text message.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground">Support:</h3>
                <p className="text-muted-foreground">
                  For Service support or assistance, text <strong>HELP</strong> to{" "}
                  <a href="tel:+18056084843" className="text-primary hover:underline">(805) 608-4843</a> or email{" "}
                  <a href="mailto:info@c3marketinghub.com" className="text-primary hover:underline">info@c3marketinghub.com</a>.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground">Carriers:</h3>
                <p className="text-muted-foreground">
                  The mobile carriers (AT&T, T-Mobile, Verizon, etc.) are not liable for delayed or undelivered messages.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Data Security
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate data collection, storage, and processing practices and security measures 
              to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our SMS Terms, please contact:
            </p>
            <div className="bg-card p-6 rounded-xl border border-border">
              <p className="font-semibold text-foreground mb-2">C3 Marketing Hub</p>
              <p className="text-muted-foreground">Attn: Carlos Cordero</p>
              <p className="text-muted-foreground">134B Inger Dr, Santa Maria CA 93454</p>
              <p className="text-muted-foreground">
                Phone: <a href="tel:+18056084843" className="text-primary hover:underline">(805) 608-4843</a>
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
            ← Volver al inicio
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;