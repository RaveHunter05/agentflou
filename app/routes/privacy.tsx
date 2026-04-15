import { Link } from "react-router";

export default function Privacy() {
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
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-10">
            Last updated: April 15, 2026
          </p>

          <section className="space-y-8 text-foreground/90 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold mb-3">
                1. Information We Collect
              </h2>
              <p className="text-muted-foreground mb-3">
                We collect information that you provide directly, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                <li>Account information (name, email, company)</li>
                <li>Message content processed through our agents</li>
                <li>Integration credentials (Google Sheets, databases)</li>
                <li>Usage data and analytics</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">
                2. How We Use Your Information
              </h2>
              <p className="text-muted-foreground mb-3">
                Your information is used to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                <li>Provide and maintain our messaging agent services</li>
                <li>Process and route messages across platforms</li>
                <li>Sync data with your connected integrations</li>
                <li>Improve our AI and automation capabilities</li>
                <li>Send service-related communications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">
                3. Data Storage & Security
              </h2>
              <p className="text-muted-foreground">
                All data is encrypted at rest and in transit using AES-256 and
                TLS 1.3. We store data in SOC 2 Type II certified data centers.
                Access is restricted on a need-to-know basis with multi-factor
                authentication.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">
                4. Third-Party Integrations
              </h2>
              <p className="text-muted-foreground">
                When you connect third-party services (WhatsApp, Messenger,
                Google Sheets, etc.), we access only the data necessary to
                provide our services. We do not share your data with unrelated
                third parties.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">5. Data Retention</h2>
              <p className="text-muted-foreground">
                We retain your data for the duration of your account. Upon
                account deletion, all associated data is permanently removed
                within 30 days, except where required by law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">6. Your Rights</h2>
              <p className="text-muted-foreground mb-3">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                <li>Access and export your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">7. Cookies</h2>
              <p className="text-muted-foreground">
                We use essential cookies for authentication and preferences.
                Analytics cookies are optional and can be disabled in your
                browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">8. Children's Privacy</h2>
              <p className="text-muted-foreground">
                AgentFlou is not intended for users under 18. We do not
                knowingly collect data from minors.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">
                9. Changes to This Policy
              </h2>
              <p className="text-muted-foreground">
                We may update this policy periodically. Material changes will be
                communicated via email or in-app notification at least 30 days
                before taking effect.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">10. Contact</h2>
              <p className="text-muted-foreground">
                For privacy-related inquiries, please{" "}
                <Link to="/contact" className="text-primary hover:underline">
                  contact us
                </Link>{" "}
                or email privacy@agentflou.io.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
