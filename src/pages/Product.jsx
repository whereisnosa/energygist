import Navbar from "../components/Navbar";
export default function Product() {
  return (
    <div className="bg-[#f6f0e6] min-h-screen">
        <Navbar />
      <section className="max-w-7xl mx-auto px-6 py-24">

        <p className="uppercase tracking-[0.2em] text-[#c68a2d] text-sm font-semibold">
          Platform Products
        </p>

        <h1 className="text-6xl font-black mt-6 max-w-4xl">
          Institutional tools built for energy professionals.
        </h1>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {[
            "Market Intelligence Dashboard",
            "Energy Risk Monitor",
            "Investment Tracker",
          ].map((product, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-[30px] shadow-xl hover:-translate-y-2 transition"
            >
              <div className="h-20 w-20 bg-[#081225] rounded-2xl"></div>

              <h2 className="text-3xl font-black mt-8 leading-tight">
                {product}
              </h2>

              <p className="text-gray-600 mt-5 leading-relaxed">
                Premium intelligence systems for investors and institutions.
              </p>

              <button className="mt-8 bg-[#c68a2d] text-white px-5 py-3 rounded-xl">
                Explore Product
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}