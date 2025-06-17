
import { useState } from "react";
import { ArrowLeft, ArrowRight, ZoomIn, X } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

const ImageGallery = ({ images, alt }: ImageGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openZoom = () => {
    setIsZoomed(true);
  };

  const closeZoom = () => {
    setIsZoomed(false);
  };

  if (images.length === 0) return null;

  return (
    <>
      {/* Main Gallery */}
      <div className="relative group">
        <div className="relative w-full h-80 bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
          <img
            src={images[currentImageIndex]}
            alt={`${alt} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-contain cursor-pointer"
            onClick={openZoom}
          />
          
          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Zoom indicator */}
          <div className="absolute top-2 right-2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
            <ZoomIn className="w-4 h-4" onClick={openZoom} />
          </div>

          {/* Image counter */}
          {images.length > 1 && (
            <div className="absolute bottom-2 right-2 bg-black/60 text-white px-2 py-1 rounded text-sm">
              {currentImageIndex + 1} / {images.length}
            </div>
          )}
        </div>

        {/* Thumbnail navigation */}
        {images.length > 1 && (
          <div className="flex gap-2 mt-4 overflow-x-auto">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-16 h-16 rounded border-2 overflow-hidden ${
                  index === currentImageIndex 
                    ? 'border-amber-400' 
                    : 'border-slate-600 hover:border-slate-500'
                }`}
              >
                <img
                  src={image}
                  alt={`${alt} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Zoomed Modal */}
      {isZoomed && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50" onClick={closeZoom}>
          <div className="relative max-w-full max-h-full p-4">
            <img
              src={images[currentImageIndex]}
              alt={`${alt} - Zoomed`}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={closeZoom}
              className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Navigation in zoom mode */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
