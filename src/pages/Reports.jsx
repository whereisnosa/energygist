import Navbar from "../components/Navbar";
export default function Reports() {
  const reports = [
    "Africa Energy Investment Outlook 2026",
    "Natural Gas Infrastructure Report",
    "Renewable Energy Expansion Analysis",
    "West African Grid Modernisation",
    "Off-grid Solar Market Intelligence",
    "Institutional Energy Trends Report",
  ];

  return (
    
    <div className="bg-[#f6f0e6] min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <p className="uppercase tracking-[0.2em] text-[#c68a2d] text-sm font-semibold">
          Research & Reports
        </p>

        <h1 className="text-6xl font-black mt-5 max-w-4xl">
          Institutional reports for investors and policy leaders.
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {reports.map((report, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] p-8 shadow-xl hover:-translate-y-2 transition"
            >
              <div className="h-64 bg-[#081225] rounded-2xl mb-6"></div>

              <h2 className="text-2xl font-black leading-tight">
                {report}
              </h2>

              <p className="text-gray-600 mt-4">
                Deep institutional analysis and market intelligence.
              </p>

              <button className="mt-6 bg-[#c68a2d] text-white px-5 py-3 rounded-xl">
                Download Report
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}