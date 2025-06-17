
import { useParams, Link } from "react-router-dom";
import { getSwordById } from "@/data/swords";
import Navbar from "@/components/Navbar";
import ImageGallery from "@/components/ImageGallery";
import { ArrowLeft } from "lucide-react";

const SwordDetails = () => {
  const { id } = useParams<{ id: string }>();
  const sword = id ? getSwordById(id) : undefined;

  if (!sword) {
    return (
      <div className="min-h-screen bg-slate-900">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Sword Not Found</h1>
          <p className="text-gray-300 mb-8">The sword you're looking for doesn't exist in our collection.</p>
          <Link 
            to="/gallery" 
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          to="/gallery" 
          className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Gallery
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side - Image and Description */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title */}
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{sword.name}</h1>
              <p className="text-xl text-amber-400 font-medium">{sword.type}</p>
            </div>

            {/* Image Gallery */}
            <div>
              <ImageGallery images={sword.images} alt={sword.name} />
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Description</h2>
              <p className="text-gray-300 leading-relaxed">{sword.description}</p>
            </div>
          </div>

          {/* Right side - Specifications and Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Specifications</h2>
              <div className="bg-slate-800 rounded-lg p-6 space-y-3 border border-slate-700">
                {Object.entries(sword.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                    <span className="text-white font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Materials</h2>
              <div className="bg-slate-800 rounded-lg p-6 space-y-3 border border-slate-700">
                {Object.entries(sword.materials).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-gray-400 capitalize">{key}:</span>
                    <span className="text-white font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Forge Time:</span>
                <span className="text-amber-400 font-bold">{sword.forgeTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Price:</span>
                <span className="text-white font-bold">{sword.price}</span>
              </div>
            </div>

            <Link 
              to="/contact" 
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 px-6 rounded-lg font-medium text-center transition-colors block"
            >
              Inquire About This Sword
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwordDetails;
