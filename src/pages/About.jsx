import Navbar from "../components/Navbar";
export default function About() {
  return (
    <div className="bg-[#f6f0e6] min-h-screen">
        <Navbar />
      <section className="max-w-6xl mx-auto px-6 py-24">

        <p className="uppercase tracking-[0.2em] text-[#c68a2d] text-sm font-semibold">
          About The Energy Gist
        </p>

        <h1 className="text-6xl font-black mt-6 max-w-4xl leading-tight">
          A modern intelligence platform focused on Africa’s energy transition.
        </h1>

        <p className="text-xl text-gray-700 mt-10 leading-relaxed max-w-3xl">
          The Energy Gist delivers premium institutional-grade reporting,
          strategic analysis and market intelligence across Africa’s energy
          ecosystem.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-20">

          <div className="bg-white p-10 rounded-[30px] shadow-xl">
            <h2 className="text-3xl font-black">
              Our Mission
            </h2>

            <p className="text-gray-600 mt-6 leading-relaxed">
              To simplify complex energy developments into actionable
              intelligence for investors, policymakers and operators.
            </p>
          </div>

          <div className="bg-[#081225] text-white p-10 rounded-[30px] shadow-xl">
            <h2 className="text-3xl font-black">
              Our Vision
            </h2>

            <p className="text-gray-300 mt-6 leading-relaxed">
              To become Africa’s leading institutional intelligence platform
              for energy and infrastructure markets.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}