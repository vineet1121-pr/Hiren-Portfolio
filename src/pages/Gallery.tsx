import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Lightbox from '../components/Lightbox';

export default function Gallery() {
  // Sample gallery data - replace with your actual images
  const photos = [
    // Drone Photography
    { id: 1, title: "Aerial Sunset View", category: "Drone Photography", description: "Stunning aerial sunset capture", imageUrl: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&h=600&fit=crop" },
    { id: 2, title: "Mountain Landscape", category: "Drone Photography", description: "Majestic mountains from above", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop" },
    { id: 3, title: "Coastal Aerial", category: "Drone Photography", description: "Breathtaking coastline view", imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop" },
    { id: 4, title: "City Skyline", category: "Drone Photography", description: "Urban landscape from the sky", imageUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=600&fit=crop" },
    { id: 5, title: "Forest Canopy", category: "Drone Photography", description: "Dense forest aerial view", imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop" },
    { id: 6, title: "Beach Waves", category: "Drone Photography", description: "Ocean waves and beach patterns", imageUrl: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop" },
    
    // Cinematic
    { id: 7, title: "Golden Hour Portrait", category: "Cinematic", description: "Cinematic golden hour shot", imageUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop" },
    { id: 8, title: "Urban Noir", category: "Cinematic", description: "Moody city cinematography", imageUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=600&fit=crop" },
    { id: 9, title: "Dramatic Landscape", category: "Cinematic", description: "Epic landscape composition", imageUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop" },
    { id: 10, title: "Story Moment", category: "Cinematic", description: "Narrative-driven capture", imageUrl: "https://images.unsplash.com/photo-1502139214982-d0ad755818d8?w=800&h=600&fit=crop" },
    { id: 11, title: "Ethereal Light", category: "Cinematic", description: "Atmospheric lighting scene", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop" },
    { id: 12, title: "Motion Blur Art", category: "Cinematic", description: "Dynamic motion capture", imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=600&fit=crop" },
    
    // Wedding
    { id: 13, title: "First Kiss", category: "Wedding", description: "The magical first kiss", imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop" },
    { id: 14, title: "Bride's Details", category: "Wedding", description: "Beautiful bridal details", imageUrl: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop" },
    { id: 15, title: "Ceremony Moment", category: "Wedding", description: "Sacred ceremony moment", imageUrl: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop" },
    { id: 16, title: "Reception Dance", category: "Wedding", description: "Joyful reception dance", imageUrl: "https://images.unsplash.com/photo-1525258437537-f9a5f82d0f4e?w=800&h=600&fit=crop" },
    { id: 17, title: "Couple Portrait", category: "Wedding", description: "Stunning couple portrait", imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop" },
    { id: 18, title: "Ring Exchange", category: "Wedding", description: "Intimate ring exchange", imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop" },
    { id: 19, title: "Family Joy", category: "Wedding", description: "Family celebration moments", imageUrl: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&h=600&fit=crop" },
    { id: 20, title: "Venue Beauty", category: "Wedding", description: "Decorated venue details", imageUrl: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop" },
    
    // Pre-Wedding
    { id: 21, title: "Romantic Sunset", category: "Pre-Wedding", description: "Couple at sunset", imageUrl: "https://images.unsplash.com/photo-1529634806980-85c3dd6d430b?w=800&h=600&fit=crop" },
    { id: 22, title: "Beach Romance", category: "Pre-Wedding", description: "Love by the ocean", imageUrl: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop" },
    { id: 23, title: "Garden Stroll", category: "Pre-Wedding", description: "Intimate garden walk", imageUrl: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&h=600&fit=crop" },
    { id: 24, title: "City Love Story", category: "Pre-Wedding", description: "Urban love story", imageUrl: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800&h=600&fit=crop" },
    { id: 25, title: "Candid Moments", category: "Pre-Wedding", description: "Natural candid shots", imageUrl: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop" },
    { id: 26, title: "Adventure Shoot", category: "Pre-Wedding", description: "Adventure-themed session", imageUrl: "https://images.unsplash.com/photo-1523438097201-512ae7d59c44?w=800&h=600&fit=crop" },
  ];

  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = ['All', 'Drone Photography', 'Cinematic', 'Wedding', 'Pre-Wedding'];

  const filteredPhotos = selectedFilter === 'All' 
    ? photos 
    : photos.filter(photo => photo.category === selectedFilter);

  const handleNext = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredPhotos.findIndex(p => p.id === selectedImage);
      const nextIndex = (currentIndex + 1) % filteredPhotos.length;
      setSelectedImage(filteredPhotos[nextIndex].id);
    }
  };

  const handlePrev = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredPhotos.findIndex(p => p.id === selectedImage);
      const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
      setSelectedImage(filteredPhotos[prevIndex].id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            Photo <span className="text-accent">Gallery</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400">
            Explore our diverse portfolio of drone, cinematic, wedding, and pre-wedding photography
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-3 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold transition transform hover:scale-105 ${
                selectedFilter === category
                  ? 'bg-accent text-black shadow-lg shadow-accent/50'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700 hover:border-accent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredPhotos.map((photo) => (
            <div 
              key={photo.id}
              onClick={() => setSelectedImage(photo.id)}
              className="relative h-64 sm:h-80 rounded-xl overflow-hidden group cursor-pointer transform hover:-translate-y-2 transition-all duration-300 shadow-2xl bg-gray-800"
            >
              {/* Image */}
              <img 
                src={photo.imageUrl} 
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-accent text-black px-3 py-1 rounded text-xs font-bold tracking-wide">
                  {photo.category}
                </span>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-white text-2xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition">{photo.title}</h3>
                <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition delay-100">{photo.description}</p>
                <div className="flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transition delay-150">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className="text-white font-semibold">View Full</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Lightbox */}
      {selectedImage !== null && (
        <Lightbox
          image={filteredPhotos.find(p => p.id === selectedImage)!}
          onClose={() => setSelectedImage(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}

      <Footer />
    </div>
  );
}
