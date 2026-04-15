import { Link } from "react-router";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-extrabold gradient-text">
            AgentFlou
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto prose-custom">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-10">
            Last updated: April 15, 2026
          </p>

          <section className="space-y-8 text-foreground/90 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold mb-3">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using AgentFlou's services, you agree to be
                bound by these Terms of Service. If you do not agree, please do
                not use our platform.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">
                2. Description of Service
              </h2>
              <p className="text-muted-foreground">
                AgentFlou provides an automated messaging agent platform that
                enables businesses to communicate with customers across multiple
                channels including WhatsApp, Messenger, Instagram, and other
                platforms, with integrations to Google Sheets, databases, and
                CRM systems.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">3. User Accounts</h2>
              <p className="text-muted-foreground">
                You are responsible for maintaining the confidentiality of your
                account credentials. You agree to provide accurate information
                and to notify us immediately of any unauthorized use of your
                account.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">4. Acceptable Use</h2>
              <p className="text-muted-foreground">
                You agree not to use AgentFlou for spam, harassment, illegal
                activities, or any purpose that violates applicable laws or the
                terms of the messaging platforms we integrate with.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">5. Payment & Billing</h2>
              <p className="text-muted-foreground">
                Paid plans are billed monthly or annually. Refunds are available
                within the first 14 days. We reserve the right to modify pricing
                with 30 days advance notice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">6. Data & Privacy</h2>
              <p className="text-muted-foreground">
                Your data is handled in accordance with our{" "}
                <Link to="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                . We do not sell your data to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">
                7. Service Availability
              </h2>
              <p className="text-muted-foreground">
                We strive for 99.9% uptime but do not guarantee uninterrupted
                service. Scheduled maintenance will be communicated in advance.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">
                8. Limitation of Liability
              </h2>
              <p className="text-muted-foreground">
                AgentFlou shall not be liable for any indirect, incidental, or
                consequential damages arising from your use of the service. Our
                total liability is limited to the fees paid in the preceding 12
                months.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">9. Termination</h2>
              <p className="text-muted-foreground">
                Either party may terminate the agreement at any time. Upon
                termination, your data will be available for export for 30 days,
                after which it will be deleted.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">10. Contact</h2>
              <p className="text-muted-foreground">
                For questions about these terms, please{" "}
                <Link to="/contact" className="text-primary hover:underline">
                  contact us
                </Link>{" "}
                or email legal@agentflou.com.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
