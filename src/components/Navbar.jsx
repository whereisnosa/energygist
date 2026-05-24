import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#f6f0e6]/90 backdrop-blur border-b border-[#d7cbb9]">
      
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        <div>
          <h1 className="text-2xl font-black tracking-tight">
            THE ENERGY GIST
          </h1>

          <p className="text-[10px] tracking-[0.3em] uppercase text-gray-500">
            Africa’s Institutional-grade Energy Intelligence
          </p>
        </div>

        {/* NAV LINKS */}
        <nav className="hidden lg:flex gap-8 text-sm font-medium">
          
          <Link to="/intelligence">Intelligence</Link>

          <Link to="/reports">Reports</Link>

          <Link to="/sponsored">Sponsored</Link>

          <Link to="/product">Products</Link>

          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>
        </nav>

        {/* BUTTONS */}
        <div className="flex items-center gap-3">
          
          <button className="text-sm">
            Sign in
          </button>

          <button className="bg-[#c68a2d] text-white px-5 py-2 rounded-md text-sm hover:scale-105 transition">
            Subscribe
          </button>
        </div>
      </div>
    </header>
  );
}