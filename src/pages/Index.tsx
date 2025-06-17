
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { Flame, Hammer, Award, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-amber-950/10 to-slate-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
            <span className="text-amber-400">Vins</span> Forge
          </h1>
          <p className="text-2xl md:text-3xl text-amber-200 mb-4 font-serif italic">
            "Where Steel Meets Soul"
          </p>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Master craftsman dedicated to the ancient art of sword forging. 
            Each blade is born from fire, shaped by tradition, and tempered with decades of passion.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/gallery"
              className="bg-amber-600 hover:bg-amber-500 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-amber-500/25 transform hover:scale-105"
            >
              Behold the Arsenal
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-amber-500/25 transform hover:scale-105"
            >
              Commission a Legend
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-amber-400 mb-6 font-serif">The Master's Tale</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                For over two decades, I have dedicated my life to the ancient craft of blade forging. 
                What began as fascination with medieval weaponry has evolved into a lifelong pursuit of perfection, 
                where every strike of the hammer carries the weight of tradition.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                In my forge, the old ways live on. Each sword is hand-forged using time-honored techniques 
                passed down through generations of master smiths. From the selection of steel to the final polish, 
                every step is performed with meticulous attention to detail and respect for the craft.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                My blades are not mere replicas—they are functional works of art, capable of serving both 
                as stunning display pieces and as testament to the enduring power of traditional craftsmanship.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-slate-900/50 p-8 rounded-lg border border-amber-600/20 text-center transform hover:scale-105 transition-transform duration-300">
                <Flame className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">The Forge</h3>
                <p className="text-gray-300">Where fire and steel unite in ancient harmony</p>
              </div>
              
              <div className="bg-slate-900/50 p-8 rounded-lg border border-amber-600/20 text-center transform hover:scale-105 transition-transform duration-300">
                <Hammer className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">The Craft</h3>
                <p className="text-gray-300">Traditional techniques perfected over decades</p>
              </div>
              
              <div className="bg-slate-900/50 p-8 rounded-lg border border-amber-600/20 text-center transform hover:scale-105 transition-transform duration-300">
                <Award className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">The Legacy</h3>
                <p className="text-gray-300">Each blade tells a story of excellence</p>
              </div>
              
              <div className="bg-slate-900/50 p-8 rounded-lg border border-amber-600/20 text-center transform hover:scale-105 transition-transform duration-300">
                <Users className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">The Bond</h3>
                <p className="text-gray-300">Connecting warriors across time through steel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-gradient-to-r from-amber-900/20 via-amber-800/10 to-amber-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-3xl md:text-4xl font-serif italic text-amber-200 mb-8 leading-relaxed">
            "A sword is more than metal and edge—it is the embodiment of the smith's soul, 
            forged in fire and tempered with honor."
          </blockquote>
          <cite className="text-xl text-amber-400 font-bold">- Vins, Master Bladesmith</cite>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-amber-600/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-amber-400 mb-4 font-serif">Vins Forge</h3>
          <p className="text-gray-300 mb-6 text-lg">
            Where legends are forged in fire and tempered in tradition.
          </p>
          <div className="flex justify-center space-x-8">
            <Link to="/contact" className="text-gray-400 hover:text-amber-400 transition-colors text-lg">
              Contact
            </Link>
            <Link to="/gallery" className="text-gray-400 hover:text-amber-400 transition-colors text-lg">
              Gallery
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
