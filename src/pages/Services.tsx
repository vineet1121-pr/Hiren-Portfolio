import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Services() {
  const services = [
    {
      title: "Drone Photography & Videography",
      price: "Starting at ₹65,000",
      features: [
        "Up to 2 hours of flight time",
        "4K aerial video footage",
        "High-resolution photos",
        "Multiple location coverage",
        "Professional editing",
        "Raw files included",
        "Commercial license available",
      ],
      popular: true,
    },
    {
      title: "Wedding Photography",
      price: "Starting at ₹2,00,000",
      features: [
        "Full day coverage (8-10 hours)",
        "2 professional photographers",
        "Drone aerial shots included",
        "500+ edited photos",
        "Engagement session",
        "Online gallery & print release",
        "Custom wedding album",
      ],
      popular: true,
    },
    {
      title: "Pre-Wedding Shoot",
      price: "Starting at ₹65,000",
      features: [
        "2-3 hour session",
        "2 location changes",
        "Drone shots included",
        "Costume changes allowed",
        "100+ edited photos",
        "Cinematic video clips",
        "Online gallery",
      ],
      popular: false,
    },
    {
      title: "Cinematic Video Production",
      price: "Starting at ₹95,000",
      features: [
        "Professional cinematography",
        "Drone aerial footage",
        "4K video quality",
        "Color grading & editing",
        "Background music & effects",
        "Multiple format delivery",
        "Highlight reel included",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3">
              Services & <span className="bg-gradient-to-r from-[#DAA520] via-[#FFD700] to-[#FFA500] text-transparent bg-clip-text">Pricing</span>
            </h1>
            <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
          </div>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-2">
            Professional drone photography, cinematic videography, and wedding photography packages. All packages include professional editing and digital delivery.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br from-gray-900 to-gray-800 border ${
                service.popular ? 'border-accent shadow-2xl shadow-accent/20' : 'border-gray-700'
              } rounded-xl shadow-2xl p-8 hover:border-accent transition-all hover:-translate-y-1 transform relative`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-black px-4 py-1 rounded-full text-sm font-bold tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-3xl font-bold text-accent mb-6">
                {service.price}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-accent hover:bg-accent-light text-black px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-accent/50 transition transform hover:scale-105">
                Book Now
              </button>
            </div>
          ))}
        </div>

        {/* My Specialties */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
                Why Choose <span className="bg-gradient-to-r from-[#DAA520] via-[#FFD700] to-[#FFA500] text-transparent bg-clip-text">Me</span>
              </h2>
              <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Drone Expertise */}
            <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-accent transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex items-start gap-5">
                <div className="flex-shrink-0 text-accent group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    Drone Expertise
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Licensed and insured drone pilot with years of aerial photography experience. Capture breathtaking perspectives impossible with traditional photography.
                  </p>
                </div>
              </div>
            </div>

            {/* Cinematic Quality */}
            <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-accent transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex items-start gap-5">
                <div className="flex-shrink-0 text-accent group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    Cinematic Quality
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Film-grade equipment and professional color grading for stunning, movie-quality visuals that tell your unique story beautifully.
                  </p>
                </div>
              </div>
            </div>

            {/* Fast Turnaround */}
            <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-accent transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex items-start gap-5">
                <div className="flex-shrink-0 text-accent group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    Fast Turnaround
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Receive your professionally edited photos and videos within 2-3 weeks. Rush delivery available for urgent events and special occasions.
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Service */}
            <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-accent transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex items-start gap-5">
                <div className="flex-shrink-0 text-accent group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    Professional Service
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Dedicated professional approach ensuring every detail is captured perfectly. Your satisfaction is our top priority from start to finish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add-ons Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
                Available <span className="bg-gradient-to-r from-[#DAA520] via-[#FFD700] to-[#FFA500] text-transparent bg-clip-text">Add-Ons</span>
              </h2>
              <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { 
                name: "Extended Coverage", 
                price: "₹3,000/hr", 
                icon: (
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
                  </svg>
                )
              },
              { 
                name: "Same Day Edit", 
                price: "₹18,000", 
                icon: (
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
                  </svg>
                )
              },
              { 
                name: "Photo Album", 
                price: "₹11,000", 
                icon: (
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
                  </svg>
                )
              },
              { 
                name: "Additional Drone Shots", 
                price: "₹5,500", 
                icon: (
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2l-4 4h5v7a1 1 0 01-2 0V9H8.414l-4.707 4.707a1 1 0 000 1.414l4.707 4.707L13 15.242V19a1 1 0 01-2 0v-2H7v2a3 3 0 003 3h4a3 3 0 003-3V9.828l4.707-4.707a1 1 0 000-1.414l-4.707-4.707z"/>
                  </svg>
                )
              },
            ].map((addon, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6 text-center hover:border-accent transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-1 transform"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-[#DAA520] via-[#FFD700] to-[#FFA500] p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {addon.icon}
                  </div>
                </div>
                <h4 className="font-bold text-white text-lg mb-3">{addon.name}</h4>
                <p className="text-accent font-bold text-2xl">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Book?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Get in touch to discuss your photography needs and check availability
          </p>
          <a 
            href="/contact"
            className="inline-block bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition"
          >
            Contact Me
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
