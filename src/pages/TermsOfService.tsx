import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">
          Terms of Service
        </h1>
        
        <p className="text-muted-foreground mb-8">
          Last updated: January 2025
        </p>

        <div className="prose prose-lg max-w-none space-y-8 text-foreground/90">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using the services provided by L & M Creative Service INC dba C3 Marketing Hub 
              ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree 
              with any part of these terms, you may not use our services.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Services Description
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              C3 Marketing Hub provides digital marketing services including but not limited to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Google Business Profile optimization and management</li>
              <li>Local SEO services</li>
              <li>Website design and development</li>
              <li>Social media marketing</li>
              <li>Digital advertising campaigns</li>
              <li>Marketing consultation and strategy</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Client Responsibilities
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As a client, you agree to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Provide accurate and complete information necessary for our services</li>
              <li>Respond to requests for information or approvals in a timely manner</li>
              <li>Grant necessary access to your business accounts and platforms as required</li>
              <li>Make payments according to the agreed-upon schedule</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Payment Terms
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                <strong className="text-foreground">Fees:</strong> Service fees are outlined in your 
                individual service agreement. All fees are quoted in US dollars unless otherwise specified.
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Payment Schedule:</strong> Payments are due according 
                to the schedule specified in your service agreement, typically on a monthly basis.
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Late Payments:</strong> Late payments may result in 
                suspension of services. A late fee may be applied to overdue balances.
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Refunds:</strong> Refund policies are specified in 
                individual service agreements. Generally, fees for completed work are non-refundable.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Intellectual Property
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Upon full payment, clients receive ownership of custom content created specifically for them, 
              including website designs, graphics, and written content.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              C3 Marketing Hub retains the right to use completed work in our portfolio and marketing 
              materials unless otherwise agreed in writing. We also retain ownership of any background 
              technology, frameworks, or pre-existing code used to deliver the services.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Confidentiality
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We maintain the confidentiality of all client information and will not disclose business 
              information to third parties except as necessary to provide our services or as required by law.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. Limitation of Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              C3 Marketing Hub (and its parent entity L & M Creative Service INC) shall not be liable for 
              any indirect, incidental, special, consequential, or punitive damages resulting from your 
              use of our services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our total liability shall not exceed the amount paid by you for services in the three (3) 
              months preceding the claim.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. Service Cancellation
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Either party may terminate services with written notice as specified in the service agreement. 
              Upon termination:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>All outstanding fees become immediately due</li>
              <li>We will provide reasonable assistance in transitioning services</li>
              <li>Access to accounts and materials will be transferred as applicable</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              9. Modifications to Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective 
              upon posting to our website. Continued use of our services after modifications constitutes 
              acceptance of the updated terms.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              10. Governing Law
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the laws of 
              the State of California, without regard to its conflict of law provisions.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              11. Contact Information
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For questions about these Terms of Service, please contact us:
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

        <div className="mt-12 pt-8 border-t border-border flex gap-6">
          <Link 
            to="/" 
            className="text-primary hover:underline font-medium"
          >
            ← Volver al inicio
          </Link>
          <Link 
            to="/privacy-policy" 
            className="text-primary hover:underline font-medium"
          >
            Privacy Policy
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;