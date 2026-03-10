export default function Website() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-cyan-50 text-slate-900">
      <header className="border-b border-emerald-100 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-xl font-semibold tracking-tight text-slate-950">Fabel Analytics</h1>
            <p className="text-sm text-emerald-700">AI &amp; Decision Intelligence for Startups</p>
          </div>
          <a
            href="#contact"
            className="rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700"
          >
            Book a Call
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-700 shadow-sm">
                Helping founders turn data into decisions
              </p>
              <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                AI-powered analytics tools for startups, founders, and small businesses.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
                I build decision dashboards, predictive analytics tools, and lightweight AI apps that help businesses understand their data and act faster.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700"
                >
                  Explore Services
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-emerald-200 bg-white px-5 py-3 text-sm font-medium text-emerald-700 shadow-sm transition hover:bg-emerald-50"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/90 p-6 shadow-md ring-1 ring-emerald-100 backdrop-blur">
                <p className="text-sm text-emerald-600">Service</p>
                <h3 className="mt-2 text-lg font-semibold">AI Decision Dashboards</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Clear, automated dashboards with business-ready insights.
                </p>
              </div>
              <div className="rounded-3xl bg-white/90 p-6 shadow-md ring-1 ring-emerald-100 backdrop-blur">
                <p className="text-sm text-emerald-600">Service</p>
                <h3 className="mt-2 text-lg font-semibold">Predictive Analytics</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Forecast sales, demand, or customer trends using your business data.
                </p>
              </div>
              <div className="rounded-3xl bg-white/90 p-6 shadow-md ring-1 ring-emerald-100 backdrop-blur sm:col-span-2">
                <p className="text-sm text-emerald-600">Service</p>
                <h3 className="mt-2 text-lg font-semibold">Lightweight AI Apps</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Simple tools your team or clients can use to upload data, ask questions, and get faster answers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-600">Services</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">What I help businesses build</h2>
            <p className="mt-4 leading-7 text-slate-700">
              I focus on practical solutions that help founders save time, understand performance, and make better decisions.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white/90 p-6 shadow-md ring-1 ring-emerald-100 backdrop-blur">
              <h3 className="text-xl font-semibold">Analytics Dashboards</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Transform spreadsheet chaos or scattered reporting into clean, useful dashboards.
              </p>
            </div>
            <div className="rounded-3xl bg-white/90 p-6 shadow-md ring-1 ring-emerald-100 backdrop-blur">
              <h3 className="text-xl font-semibold">Forecasting &amp; Trends</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Build forecasting tools that help teams predict sales, demand, and operational patterns.
              </p>
            </div>
            <div className="rounded-3xl bg-white/90 p-6 shadow-md ring-1 ring-emerald-100 backdrop-blur">
              <h3 className="text-xl font-semibold">AI Insights Apps</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Create simple apps that explain data, surface risks, and support decisions faster.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-[2rem] bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 px-8 py-12 text-white shadow-lg">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-100">Why work with me</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight">A blend of analytics, AI, and business decision thinking</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/15 p-4 backdrop-blur-sm">
                  <h3 className="font-semibold">Business-first</h3>
                  <p className="mt-2 text-sm leading-6 text-emerald-50">Focused on solving real business problems, not just showcasing tools.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/15 p-4 backdrop-blur-sm">
                  <h3 className="font-semibold">Fast to launch</h3>
                  <p className="mt-2 text-sm leading-6 text-emerald-50">Simple, lightweight solutions that can be delivered quickly.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/15 p-4 backdrop-blur-sm">
                  <h3 className="font-semibold">Data-driven</h3>
                  <p className="mt-2 text-sm leading-6 text-emerald-50">Strong foundation in analytics, KPIs, and reporting logic.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/15 p-4 backdrop-blur-sm">
                  <h3 className="font-semibold">AI-enabled</h3>
                  <p className="mt-2 text-sm leading-6 text-emerald-50">Use modern AI tools where they create real value for users.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-600">Sample solutions</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">What founders can expect</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Here are a few examples of the types of lightweight, high-value solutions I can build for startups and small businesses.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white/90 p-6 shadow-md ring-1 ring-emerald-100 backdrop-blur">
              <p className="text-sm font-medium text-emerald-600">Example 01</p>
              <h3 className="mt-2 text-xl font-semibold">Startup KPI Dashboard</h3>
              <p className="mt-3 leading-7 text-slate-600">
                A clean dashboard for tracking revenue, customer growth, churn, and operational performance in one place.
              </p>
            </div>
            <div className="rounded-3xl bg-white/90 p-6 shadow-md ring-1 ring-emerald-100 backdrop-blur">
              <p className="text-sm font-medium text-emerald-600">Example 02</p>
              <h3 className="mt-2 text-xl font-semibold">Sales Forecasting Tool</h3>
              <p className="mt-3 leading-7 text-slate-600">
                A practical forecasting solution that helps founders anticipate demand, trends, and future sales patterns.
              </p>
            </div>
            <div className="rounded-3xl bg-white/90 p-6 shadow-md ring-1 ring-emerald-100 backdrop-blur">
              <p className="text-sm font-medium text-emerald-600">Example 03</p>
              <h3 className="mt-2 text-xl font-semibold">AI Insights App</h3>
              <p className="mt-3 leading-7 text-slate-600">
                A simple app that lets users upload data and receive fast, understandable business insights.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-600">About</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">A practical partner for startup analytics and AI execution</h2>
              <p className="mt-4 leading-7 text-slate-700">
                I bring hands-on experience across analytics, reporting, and AI tooling to help small teams move from raw data to useful decisions. My focus is on building solutions that are simple, actionable, and aligned with real business needs.
              </p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-white to-emerald-50 p-8 shadow-md ring-1 ring-emerald-100">
              <h3 className="text-xl font-semibold">Typical project outcomes</h3>
              <ul className="mt-4 space-y-3 leading-7 text-slate-700">
                <li>• Less manual reporting</li>
                <li>• Clearer KPI visibility</li>
                <li>• Faster business insights</li>
                <li>• Better decision support</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-[2rem] bg-gradient-to-br from-white to-cyan-50 p-10 shadow-md ring-1 ring-emerald-100">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-600">Contact</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">Let’s talk about your data and AI needs</h2>
              <p className="mt-4 leading-7 text-slate-700">
                If you’re a founder or small business looking to turn data into practical insights, I’d be glad to explore what you need.
              </p>
              <div className="mt-8 space-y-3">
                <div className="inline-flex rounded-2xl border border-emerald-200 bg-white px-5 py-3 text-sm font-medium text-emerald-700 shadow-md">
                  fabel.notes@gmail.com
                </div>
                <p className="text-sm text-slate-500">Best for startup dashboards, forecasting tools, and lightweight AI apps.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
