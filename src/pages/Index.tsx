
import Navbar from "@/components/Navbar";
import SwordCard from "@/components/SwordCard";
import { swords } from "@/data/swords";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-800 to-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="text-amber-400">Vins</span> Forge
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Master craftsman specializing in traditional sword forging techniques. 
            Each blade is a work of art, forged with passion and precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#gallery"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View Gallery
            </a>
            <a 
              href="/contact"
              className="border border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Commission a Blade
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Forged Masterpieces</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our collection of handcrafted swords, each piece representing hours of meticulous work and traditional craftsmanship.
            </p>
          </div>
          
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
            <a href="#gallery" className="text-gray-400 hover:text-amber-400 transition-colors">
              Gallery
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
