import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <LoadingScreen />
      <Navbar />

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center">
          <div className="inline-block mb-4 animate-fadeIn">
            <span className="text-accent text-sm sm:text-base font-semibold tracking-widest uppercase">Premium Photography</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            <span className="text-accent font-semibold tracking-widest uppercase block animate-slideInLeft animation-delay-300 animate-text-glow">Hiren Vadher</span>
            <span className="block animate-fadeIn animation-delay-500">Capturing Life from New Heights</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm sm:text-base text-gray-300 mb-4 font-medium animate-slideInUp animation-delay-700">
            <span className="flex items-center hover:text-accent transition-colors cursor-pointer">
              <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
              Drone Photography
            </span>
            <span className="flex items-center hover:text-accent transition-colors cursor-pointer">
              <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
              Cinematic Videography
            </span>
            <span className="flex items-center hover:text-accent transition-colors cursor-pointer">
              <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
              Wedding Moments
            </span>
          </div>
          <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-2 animate-fadeIn animation-delay-800">
            Specializing in aerial perspectives, cinematic storytelling, and unforgettable wedding memories
          </p>
          <Link 
            to="/gallery"
            className="inline-block bg-accent hover:bg-accent-light text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold hover:shadow-2xl hover:shadow-accent/50 transition-all transform hover:scale-105 tracking-wide animate-fadeIn animation-delay-900"
          >
            EXPLORE GALLERY
          </Link>
        </div>

        {/* Specialties Section */}
        <div className="mt-16 sm:mt-32">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block animate-slideInUp">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
                My <span className="bg-gradient-to-r from-[#DAA520] via-[#FFD700] to-[#FFA500] text-transparent bg-clip-text animate-gradient">Specialties</span>
              </h2>
              <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
            </div>
            <p className="text-base sm:text-lg text-gray-400 mt-6 max-w-2xl mx-auto px-4">
              From breathtaking aerial shots to intimate wedding moments, I capture your story from every angle
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Drone Photography",
                icon: (
                  <div className="bg-gradient-to-br from-accent to-accent-light p-4 rounded-2xl">
                    <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2l-4 4h5v7a1 1 0 01-2 0V9H8.414l-4.707 4.707a1 1 0 000 1.414l4.707 4.707L13 15.242V19a1 1 0 01-2 0v-2H7v2a3 3 0 003 3h4a3 3 0 003-3V9.828l4.707-4.707a1 1 0 000-1.414l-4.707-4.707z"/>
                    </svg>
                  </div>
                ),
                description: "Stunning aerial perspectives that showcase landscapes, events, and properties from unique vantage points",
              },
              {
                title: "Cinematic Videography",
                icon: (
                  <div className="bg-gradient-to-br from-accent to-accent-light p-4 rounded-2xl">
                    <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 6a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm2 0v8h8V6H6zm10.553 1.106a1 1 0 011.447 0l2 2.236a1 1 0 010 1.316l-2 2.236a1 1 0 01-1.447 0 1 1 0 010-1.316l1.105-1.236-1.105-1.236a1 1 0 010-1.316z"/>
                    </svg>
                  </div>
                ),
                description: "Film-quality visuals with dramatic lighting, composition, and storytelling that brings your vision to life",
              },
              {
                title: "Wedding Photography",
                icon: (
                  <div className="bg-gradient-to-br from-accent to-accent-light p-4 rounded-2xl">
                    <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>
                ),
                description: "Complete wedding day coverage capturing every precious moment, emotion, and detail of your special day",
              },
              {
                title: "Pre-Wedding Shoots",
                icon: (
                  <div className="bg-gradient-to-br from-accent to-accent-light p-4 rounded-2xl">
                    <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3z"/>
                    </svg>
                  </div>
                ),
                description: "Romantic pre-wedding sessions at stunning locations, capturing your love story before the big day",
              },
            ].map((specialty, index) => (
              <div 
                key={index}
                className={`group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-accent transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 overflow-hidden animate-scaleUp animation-delay-${(index + 1) * 200}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex items-start gap-5">
                  <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {specialty.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                      {specialty.title}
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed">
                      {specialty.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Work Preview */}
        <div className="mt-16 sm:mt-32">
          <div className="text-center mb-8 sm:mb-16">
            <div className="inline-block animate-rotateScale">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
                Featured <span className="bg-gradient-to-r from-[#DAA520] via-[#FFD700] to-[#FFA500] text-transparent bg-clip-text animate-gradient">Work</span>
              </h2>
              <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { id: 1, title: "Aerial Masterpiece", category: "Drone Photography", imageUrl: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&h=600&fit=crop" },
              { id: 2, title: "Wedding Bliss", category: "Wedding Shoot", imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop" },
              { id: 3, title: "Cinematic Story", category: "Cinematic", imageUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop" },
            ].map((work) => (
              <Link 
                key={work.id}
                to="/gallery"
                className={`relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden group shadow-xl animate-slideInUp animation-delay-${work.id * 200}`}
              >
                {/* Image */}
                <img 
                  src={work.imageUrl} 
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {work.category}
                  </span>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <div className="text-center">
                    <span className="text-white text-2xl font-bold block mb-2">{work.title}</span>
                    <span className="text-gray-200 text-sm">Click to view more</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-16 sm:mt-32">
          <div className="text-center mb-8 sm:mb-16">
            <div className="inline-block animate-slideInLeft">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
                What <span className="bg-gradient-to-r from-[#DAA520] via-[#FFD700] to-[#FFA500] text-transparent bg-clip-text animate-gradient">Clients Say</span>
              </h2>
              <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Bride",
                text: "Absolutely stunning work! Our wedding photos exceeded all expectations. Every moment was captured beautifully.",
              },
              {
                name: "Michael Chen",
                role: "Business Owner",
                text: "Professional, creative, and punctual. The corporate event photos were perfect for our marketing materials.",
              },
              {
                name: "Emily Rodriguez",
                role: "Family Portrait Client",
                text: "Made our family feel so comfortable during the session. The photos are treasured memories we'll cherish forever.",
              },
            ].map((testimonial, index) => (
              <div key={index} className={`bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 hover:scale-105 animate-fadeIn animation-delay-${(index + 2) * 200}`}>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
