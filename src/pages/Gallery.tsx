
import Navbar from "@/components/Navbar";
import SwordCard from "@/components/SwordCard";
import { swords } from "@/data/swords";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-800 to-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif">
            The <span className="text-amber-400">Arsenal</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Behold the masterpieces born from fire, steel, and centuries of tradition. 
            Each blade tells a story of craftsmanship and honor.
          </p>
          <div className="w-32 h-1 bg-amber-600 mx-auto"></div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {swords.map((sword) => (
              <SwordCard key={sword.id} sword={sword} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-amber-400 mb-4">Vins Forge</h3>
          <p className="text-gray-300 mb-6">
            Traditional sword crafting with modern precision. Each blade tells a story of fire, steel, and dedication.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="/contact" className="text-gray-400 hover:text-amber-400 transition-colors">
              Contact
            </a>
            <a href="/" className="text-gray-400 hover:text-amber-400 transition-colors">
              About
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;
