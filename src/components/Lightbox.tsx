import { useEffect } from 'react';

interface LightboxProps {
  image: {
    id: number;
    title: string;
    category: string;
    imageUrl?: string;
  };
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({ image, onClose, onNext, onPrev }: LightboxProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/98 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 sm:top-4 sm:right-4 text-accent hover:text-accent-light transition text-3xl sm:text-4xl z-50 font-bold"
        aria-label="Close"
      >
        ×
      </button>

      {/* Previous button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-2 sm:left-4 text-accent hover:text-accent-light transition text-4xl sm:text-5xl z-50 font-bold"
        aria-label="Previous"
      >
        ‹
      </button>

      {/* Image container */}
      <div 
        className="max-w-7xl w-full h-full flex items-center justify-center px-12 sm:px-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-gray-900 rounded-xl overflow-hidden w-full border border-gray-800 shadow-2xl">
          {image.imageUrl ? (
            <img 
              src={image.imageUrl} 
              alt={image.title}
              className="w-full h-auto max-h-[70vh] sm:max-h-[80vh] object-contain"
            />
          ) : (
            <div className="w-full h-[80vh] flex items-center justify-center">
              <div className="text-center">
                <p className="text-white text-2xl font-semibold mb-2">{image.title}</p>
                <p className="text-gray-400">{image.category}</p>
              </div>
            </div>
          )}
        </div>
        <div className="mt-4 text-center">
          <h3 className="text-white text-xl font-bold">{image.title}</h3>
          <p className="text-accent text-sm tracking-wide">{image.category}</p>
        </div>
      </div>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 text-accent hover:text-accent-light transition text-5xl font-bold"
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
}
