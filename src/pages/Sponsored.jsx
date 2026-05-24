import Navbar from "../components/Navbar";
export default function Sponsored() {
  return (
    <div className="bg-[#081225] text-white min-h-screen">

      <section className="max-w-7xl mx-auto px-6 py-24">
        <Navbar />
        <p className="uppercase tracking-[0.2em] text-[#d5a24f] text-sm">
          Sponsored Intelligence
        </p>

        <h1 className="text-6xl font-black mt-6 max-w-4xl">
          Strategic storytelling for energy institutions and brands.
        </h1>

        <p className="text-xl text-gray-300 mt-8 max-w-2xl leading-relaxed">
          Premium editorial campaigns designed for institutions,
          infrastructure firms, energy operators and investment groups.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {[
            "Sponsored Reports",
            "Thought Leadership",
            "Executive Campaigns",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-[30px] p-8"
            >
              <div className="h-20 w-20 rounded-2xl bg-[#c68a2d]"></div>

              <h2 className="text-3xl font-black mt-8">
                {item}
              </h2>

              <p className="text-gray-300 mt-5 leading-relaxed">
                High-level editorial positioning and institutional visibility.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}