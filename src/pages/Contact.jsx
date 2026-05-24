import Navbar from "../components/Navbar";
export default function Contact() {
  return (
    <div className="bg-[#081225] text-white min-h-screen">
        <Navbar />
      <section className="max-w-5xl mx-auto px-6 py-24">

        <p className="uppercase tracking-[0.2em] text-[#d5a24f] text-sm">
          Contact
        </p>

        <h1 className="text-6xl font-black mt-6">
          Let’s talk intelligence.
        </h1>

        <form className="grid gap-6 mt-16">

          <input
            type="text"
            placeholder="Full Name"
            className="bg-white/10 border border-white/10 rounded-2xl px-6 py-5 outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="bg-white/10 border border-white/10 rounded-2xl px-6 py-5 outline-none"
          />

          <textarea
            placeholder="Your Message"
            rows="6"
            className="bg-white/10 border border-white/10 rounded-2xl px-6 py-5 outline-none"
          ></textarea>

          <button className="bg-[#c68a2d] py-5 rounded-2xl font-semibold">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}