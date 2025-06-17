
import { Link } from "react-router-dom";
import { sword } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 border-b border-amber-600/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 text-amber-400 hover:text-amber-300 transition-colors">
              <sword className="h-8 w-8" />
              <span className="text-xl font-bold">Vins Forge</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-amber-400 transition-colors font-medium"
            >
              Gallery
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-300 hover:text-amber-400 transition-colors font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
