import Navbar from "./components/Navbar";
export default function EnergyGistUI() {
  const articles = [
    {
      title: "Nigeria’s Gas Commercialisation Push: Reform Progress and Investor Implications",
      category: "Deep Dive",
      image:
        "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Solar Expansion in North Africa: From Ambition to Bankability",
      category: "Sector Analysis",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "The AfCFTA and Energy Trade: What it Means for Regional Integration",
      category: "Policy",
      image:
        "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const reports = [
    {
      title: "Africa Energy Investment Outlook 2024",
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Off-grid Solar Market Report 2034",
      image:
        "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Natural Gas in West Africa",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-[#f6f0e6] text-[#111827] min-h-screen font-serif">
      {/* NAVBAR */}
      {/* <header className="sticky top-0 z-50 bg-[#f6f0e6]/90 backdrop-blur border-b border-[#d7cbb9]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black tracking-tight">
              THE ENERGY GIST
            </h1>
            <p className="text-[10px] tracking-[0.3em] uppercase text-gray-500">
              Africa’s Institutional-grade Energy Intelligence Platform
            </p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="/intelligence">Intelligence</a>
            <a href="/reports">Reports</a>
            <a href="#">Membership</a>
            <a href="/sponsored">Sponsored Intelligence</a>
            <a href="#">Resources</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="text-sm">Sign in</button>
            <button className="bg-[#c68a2d] text-white px-5 py-2 rounded-md text-sm hover:scale-105 transition">
              Subscribe
            </button>
          </div>
        </div>
      </header> */}

      <Navbar />

      {/* HERO */}
      <section className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 px-6 py-16 items-center">
        <div>
          <p className="uppercase tracking-[0.2em] text-xs text-[#c68a2d] font-semibold mb-5">
            Africa’s Institutional-grade Energy Intelligence
          </p>

          <h2 className="text-5xl lg:text-7xl leading-[1] font-black mb-8">
            Intelligence.
            <br />
            Data. Insight.
            <br />
            Powering decisions
            <br />
            in African energy.
          </h2>

          <p className="text-lg text-gray-700 max-w-xl leading-relaxed mb-8">
            Curated analysis. Deep sector knowledge. Institutional
            perspective for professionals who need intelligence they can act
            on.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-[#c68a2d] hover:bg-[#b37820] transition text-white px-6 py-4 rounded-md font-medium shadow-xl">
              Explore Intelligence
            </button>

            <button className="border border-gray-400 px-6 py-4 rounded-md hover:bg-white transition">
              View Latest Brief
            </button>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
          <img
            src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1600&auto=format&fit=crop"
            className="h-[650px] w-full object-cover group-hover:scale-105 transition duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

          <div className="absolute bottom-0 left-0 p-8 text-white max-w-md">
            <span className="bg-[#c68a2d] px-3 py-1 rounded-full text-xs uppercase tracking-wider">
              Featured Report
            </span>

            <h3 className="text-3xl font-bold mt-4 leading-tight">
              Africa Energy Investment Outlook 2024
            </h3>

            <p className="mt-3 text-gray-200 leading-relaxed">
              Comprehensive analysis of investment trends, policy shifts and
              opportunities across Africa’s energy sector.
            </p>

            <button className="mt-6 bg-white text-black px-5 py-3 rounded-md font-semibold hover:translate-x-1 transition">
              Download Report
            </button>
          </div>
        </div>
      </section>

      {/* TRUSTED */}
      <section className="border-y border-[#d7cbb9] bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <p className="text-center text-sm uppercase tracking-[0.2em] text-gray-500 mb-8">
            Trusted by institutions across Africa and beyond
          </p>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center text-gray-600 font-bold text-lg">
            <div>IFC</div>
            <div>Shell</div>
            <div>World Bank</div>
            <div>TotalEnergies</div>
            <div>AIIM</div>
            <div>AfDB</div>
          </div>
        </div>
      </section>

      {/* LATEST ARTICLES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-5xl font-black mb-3">Latest Intelligence</h2>
            <p className="text-gray-600 text-lg">
              Curated analysis on the issues shaping Africa’s energy future.
            </p>
          </div>

          <button className="hidden md:block border border-gray-400 px-5 py-3 rounded-full hover:bg-black hover:text-white transition">
            View all intelligence
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={article.image}
                  className="h-64 w-full object-cover hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-7">
                <span className="text-xs uppercase tracking-[0.2em] text-[#c68a2d] font-semibold">
                  {article.category}
                </span>

                <h3 className="text-2xl font-bold mt-4 leading-tight">
                  {article.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  Institutional-grade energy analysis and market insight for
                  investors and policymakers.
                </p>

                <button className="mt-6 font-semibold hover:translate-x-1 transition">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="bg-[#081225] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase text-[#d5a24f] tracking-[0.2em] text-sm mb-4">
              Featured Report
            </p>

            <h2 className="text-5xl font-black leading-tight mb-6">
              Africa Energy Investment Outlook 2024
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Comprehensive analysis of investment trends, capital flows, risk
              factors and opportunities across Africa’s energy transition.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-[#c68a2d] text-white px-6 py-4 rounded-md font-semibold">
                Download Report
              </button>

              <button className="border border-white/20 px-6 py-4 rounded-md hover:bg-white hover:text-black transition">
                Learn More
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {reports.map((report, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-3xl group"
              >
                <img
                  src={report.image}
                  className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-5">
                  <h4 className="text-xl font-bold leading-tight">
                    {report.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-5">Membership</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium intelligence. Exclusive access. Institutional-level insight
            for professionals, analysts and investors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-[#e6dac8] hover:-translate-y-2 transition">
            <span className="uppercase tracking-[0.2em] text-xs text-[#c68a2d] font-bold">
              Professional
            </span>

            <h3 className="text-4xl font-black mt-5">Pro</h3>

            <div className="flex items-end gap-2 mt-5 mb-8">
              <span className="text-6xl font-black">$29</span>
              <span className="text-gray-500 mb-2">/ month</span>
            </div>

            <ul className="space-y-4 text-gray-700 mb-10 text-lg">
              <li>✓ Access to all Pro articles</li>
              <li>✓ Weekly Energy Brief</li>
              <li>✓ Deep dive sector analysis</li>
              <li>✓ Investor-focused reports</li>
              <li>✓ Premium newsletters</li>
            </ul>

            <button className="w-full bg-[#c68a2d] text-white py-4 rounded-xl font-semibold hover:opacity-90 transition">
              Start Pro Membership
            </button>
          </div>

          <div className="bg-[#081225] text-white rounded-3xl shadow-2xl p-10 hover:-translate-y-2 transition">
            <span className="uppercase tracking-[0.2em] text-xs text-[#d5a24f] font-bold">
              Institutional
            </span>

            <h3 className="text-4xl font-black mt-5">Custom Access</h3>

            <p className="text-gray-300 text-lg mt-5 leading-relaxed mb-8">
              Tailored intelligence and advisory services for organisations,
              funds and institutional investors.
            </p>

            <ul className="space-y-4 text-gray-200 mb-10 text-lg">
              <li>✓ Dedicated account management</li>
              <li>✓ Bespoke research requests</li>
              <li>✓ Early access to reports</li>
              <li>✓ Executive briefings</li>
              <li>✓ Custom dashboards</li>
            </ul>

            <button className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:bg-gray-200 transition">
              Request Institutional Access
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#081225] text-white py-14 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-black">THE ENERGY GIST</h3>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Africa’s institutional-grade energy intelligence platform.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Platform</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Intelligence</li>
              <li>Reports</li>
              <li>Membership</li>
              <li>Resources</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Stay Updated</h4>
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border border-white/10 rounded-xl px-4 py-4 outline-none"
              />

              <button className="bg-[#c68a2d] py-4 rounded-xl font-semibold hover:opacity-90 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-14 pt-8 border-t border-white/10 text-gray-500 text-sm flex flex-col md:flex-row justify-between gap-4">
          <p>© 2026 The Energy Gist. All rights reserved.</p>
          <p>Designed with editorial luxury and institutional clarity.</p>
        </div>
      </footer>
    </div>
  );
}
