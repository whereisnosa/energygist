import Navbar from "../components/Navbar";
export default function Intelligence() {
  const intelligence = [
    {
      title: "Gas Expansion and Infrastructure Across West Africa",
      category: "Natural Gas",
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Solar Commercialisation Trends in Emerging Markets",
      category: "Renewables",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Africa’s Energy Investment Climate in 2026",
      category: "Investment",
      image:
        "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Grid Modernisation and the Future of Power Distribution",
      category: "Infrastructure",
      image:
        "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Energy Security and Policy Reforms in Africa",
      category: "Policy",
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "The Rise of Institutional Energy Intelligence Platforms",
      category: "Markets",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-[#f6f0e6] min-h-screen text-[#111827]">
        <Navbar />
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        
        <p className="uppercase tracking-[0.2em] text-sm text-[#c68a2d] font-semibold mb-5">
          Editorial Intelligence Platform
        </p>

        <h1 className="text-6xl font-black leading-tight max-w-4xl">
          Institutional-grade intelligence shaping Africa’s energy future.
        </h1>

        <p className="text-xl text-gray-600 mt-8 max-w-2xl leading-relaxed">
          Deep research, sector analysis, policy tracking and investment
          intelligence for professionals across Africa’s energy ecosystem.
        </p>

        {/* SEARCH */}
        <div className="mt-10 flex flex-wrap gap-4">
          
          <input
            type="text"
            placeholder="Search intelligence..."
            className="bg-white px-6 py-4 rounded-xl border border-gray-300 w-full md:w-[400px] outline-none"
          />

          <button className="bg-[#c68a2d] text-white px-6 py-4 rounded-xl font-semibold">
            Search
          </button>
        </div>
      </section>

      {/* FEATURED */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        
        <div className="relative overflow-hidden rounded-[40px]">
          
          <img
            src="https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1600&auto=format&fit=crop"
            className="h-[600px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          <div className="absolute bottom-0 left-0 p-10 max-w-3xl text-white">
            
            <span className="bg-[#c68a2d] px-4 py-2 rounded-full text-sm uppercase tracking-wider">
              Featured Intelligence
            </span>

            <h2 className="text-5xl font-black mt-6 leading-tight">
              Africa’s Energy Transition: Investment, Infrastructure and Risk.
            </h2>

            <p className="text-gray-200 mt-6 text-lg leading-relaxed">
              Strategic analysis into the forces shaping energy investment and
              infrastructure development across African markets.
            </p>

            <button className="mt-8 bg-white text-black px-6 py-4 rounded-xl font-semibold">
              Read Full Intelligence
            </button>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        
        <div className="flex flex-wrap gap-4">
          
          {[
            "All",
            "Policy",
            "Investment",
            "Natural Gas",
            "Infrastructure",
            "Renewables",
            "Markets",
          ].map((item, index) => (
            <button
              key={index}
              className="bg-white border border-gray-300 px-5 py-3 rounded-full hover:bg-black hover:text-white transition"
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {intelligence.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300"
            >
              
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  className="h-72 w-full object-cover hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-8">
                
                <span className="uppercase text-xs tracking-[0.2em] text-[#c68a2d] font-semibold">
                  {item.category}
                </span>

                <h3 className="text-3xl font-black mt-4 leading-tight">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-5 leading-relaxed">
                  Institutional-grade reporting and insight designed for
                  investors, operators and policy leaders.
                </p>

                <button className="mt-7 font-bold hover:translate-x-1 transition">
                  Read Intelligence →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}