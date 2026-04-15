import heroImg from '@/assets/hero-illustration.jpg'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6 bg-accent text-accent-foreground">
              🚀 Automate your customer conversations
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Smart Agents for{' '}
              <span className="gradient-text">Every Channel</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Deploy intelligent agents across WhatsApp, Messenger, Instagram
              and more. Sync everything to Google Sheets, your CRM or database —
              automatically.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#cta" className="btn-primary">
                Start Free Trial
              </a>
              <a href="#how" className="btn-outline">
                See How It Works
              </a>
            </div>
          </div>
          <div className="animate-fade-in-up animate-delay-200">
            <img
              src={heroImg}
              alt="Agent connecting messaging platforms to databases and spreadsheets"
              width={1280}
              height={720}
              className="rounded-2xl animate-float"
              style={{ boxShadow: '0 20px 60px -15px hsl(197 71% 52% / 0.25)' }}
            />
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section id="platforms" className="py-20 px-6 section-alt">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            All Your Channels, <span className="gradient-text">One Agent</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Connect once and reach your customers wherever they are.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { emoji: '💬', name: 'WhatsApp' },
              { emoji: '🔵', name: 'Messenger' },
              { emoji: '📸', name: 'Instagram' },
              { emoji: '✈️', name: 'Telegram' },
              { emoji: '💼', name: 'Slack' },
              { emoji: '📧', name: 'Email' },
            ].map((p) => (
              <div key={p.name} className="flex flex-col items-center gap-2">
                <div className="platform-icon">{p.emoji}</div>
                <span className="text-sm font-medium text-muted-foreground">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful <span className="gradient-text">Integrations</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything your agents capture flows directly into the tools you
              already use.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '📊',
                title: 'Google Sheets Sync',
                desc: 'Every lead, conversation and order logs automatically to your spreadsheet in real time.',
              },
              {
                icon: '🗄️',
                title: 'Database Integration',
                desc: 'Connect to MySQL, PostgreSQL, or MongoDB. Store and retrieve customer data instantly.',
              },
              {
                icon: '🤖',
                title: 'AI-Powered Replies',
                desc: 'Smart agents understand context, answer questions and route complex issues to humans.',
              },
              {
                icon: '🔗',
                title: 'CRM Connection',
                desc: 'Sync contacts, deals and pipelines with HubSpot, Salesforce and more.',
              },
              {
                icon: '📈',
                title: 'Analytics Dashboard',
                desc: 'Track response times, conversion rates and agent performance in one place.',
              },
              {
                icon: '🔒',
                title: 'Enterprise Security',
                desc: 'End-to-end encryption, GDPR compliance, and role-based access control built in.',
              },
            ].map((f, i) => (
              <div
                key={f.title}
                className={`feature-card animate-fade-in-up animate-delay-${((i % 3) + 1) * 100}`}
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-20 px-6 section-alt">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground mb-16 max-w-2xl mx-auto">
            Get up and running in three simple steps.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Connect Channels',
                desc: 'Link your WhatsApp, Messenger, and other accounts in minutes.',
              },
              {
                step: '2',
                title: 'Configure Agent',
                desc: 'Set up responses, workflows and integrations with our visual builder.',
              },
              {
                step: '3',
                title: 'Go Live',
                desc: 'Your agent starts handling conversations and syncing data automatically.',
              },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-primary-foreground mb-4"
                  style={{ background: 'var(--hero-gradient)' }}
                >
                  {s.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Simple Pricing</span>
          </h2>
          <p className="text-muted-foreground mb-12">
            No hidden fees. Scale as you grow.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '$29',
                period: '/mo',
                features: [
                  '1 Agent',
                  '2 Channels',
                  'Google Sheets sync',
                  '1,000 messages/mo',
                  'Email support',
                ],
                highlight: false,
              },
              {
                name: 'Pro',
                price: '$79',
                period: '/mo',
                features: [
                  '5 Agents',
                  'All Channels',
                  'Database + CRM sync',
                  '10,000 messages/mo',
                  'Priority support',
                ],
                highlight: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: '',
                features: [
                  'Unlimited Agents',
                  'All Channels',
                  'Custom integrations',
                  'Unlimited messages',
                  'Dedicated account manager',
                ],
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`feature-card text-left ${plan.highlight ? 'ring-2 ring-primary relative' : ''}`}
              >
                {plan.highlight && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-primary-foreground"
                    style={{ background: 'var(--hero-gradient)' }}
                  >
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <span className="text-secondary">✓</span>
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className={
                    plan.highlight
                      ? 'btn-primary w-full text-center'
                      : 'btn-outline w-full text-center'
                  }
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-20 px-6">
        <div
          className="max-w-3xl mx-auto text-center rounded-2xl p-12 md:p-16 text-primary-foreground"
          style={{ background: 'var(--hero-gradient)' }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Automate Your Conversations?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Join thousands of businesses using AgentFlou to connect with
            customers faster.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold bg-background text-foreground transition-all duration-300 hover:-translate-y-0.5"
            style={{ boxShadow: '0 4px 14px rgba(0,0,0,0.15)' }}
          >
            Start Your Free Trial →
          </a>
        </div>
      </section>
    </div>
  )
}
