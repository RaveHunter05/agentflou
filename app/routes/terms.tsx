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
                By accessing or using AgentFlou’s services, you agree to be
                bound by these Terms of Service. If you do not agree to these
                terms, please do not use our platform.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">
                2. Description of Service
              </h2>
              <p className="text-muted-foreground">
                AgentFlou is a SaaS platform designed for the integration and
                orchestration of intelligent agents. It enables businesses to
                create, deploy, manage, and automate AI-powered or rule-based
                agents across multiple communication and collaboration channels,
                including WhatsApp, Messenger, Instagram, Telegram, Email,
                Slack, and other supported platforms. <br /> <br /> The service
                allows seamless integration of these agents with external tools
                such as Google Sheets, databases, CRM systems, ERP platforms,
                and any system with an available API. This centralized approach
                helps businesses automate customer support, sales, lead
                generation, internal workflows, and other processes efficiently.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">3. User Accounts</h2>
              <p className="text-muted-foreground">
                You are responsible for maintaining the confidentiality of your
                account credentials. You agree to provide accurate and complete
                information when registering and to notify us immediately of any
                unauthorized access or use of your account.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">4. Acceptable Use</h2>
              <p className="text-muted-foreground">
                You agree not to use AgentFlou for any unlawful, abusive, or
                prohibited activities, including spam, harassment, fraud, or any
                actions that violate applicable laws or the terms of service of
                the third-party platforms we integrate with (such as WhatsApp
                Business API, Meta, Telegram, etc.).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">5. Payment & Billing</h2>
              <p className="text-muted-foreground">
                Paid plans are billed monthly or annually in advance. You may
                request a refund within the first 14 days of your initial
                subscription (subject to our refund policy and excluding cases
                of abuse). We reserve the right to modify pricing with at least
                30 days prior notice. <br /> <br /> Please note that fees
                charged by third-party platforms (such as WhatsApp conversation
                fees, Meta charges, email service providers, etc.) are not
                included in AgentFlou’s pricing and are your sole
                responsibility.
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
                <br /> <br />
                You remain fully responsible for ensuring that you have obtained
                all required consents and permissions from your end users on
                each communication channel, in compliance with applicable data
                protection laws.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">
                7. Service Availability
              </h2>
              <p className="text-muted-foreground">
                We strive for 99.9% uptime but do not guarantee uninterrupted
                service. Scheduled maintenance will be communicated in advance.
                <br /> <br />
                We are not responsible for service interruptions caused by
                third-party platforms (WhatsApp, Telegram, Meta, email
                providers, Slack, etc.) or by factors beyond our reasonable
                control.
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
                </Link>
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
