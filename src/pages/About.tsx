import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">
            About <span className="text-accent">Me</span>
          </h1>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl shadow-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Drone Photography <span className="text-accent">Specialist</span>
            </h2>
            <p className="text-gray-300 mb-4">
              I'm Hiren Vadher, a licensed drone pilot and professional photographer specializing in aerial photography, 
              cinematic videography, and wedding photography. With over 10 years of experience and state-of-the-art 
              equipment, I capture stunning perspectives that traditional photography simply can't achieve.
            </p>
            <p className="text-gray-300 mb-4">
              From breathtaking aerial landscapes to intimate wedding moments, I combine technical expertise 
              with artistic vision to create images and videos that tell compelling stories. My drone photography 
              adds a unique dimension to every project, whether it's capturing the grandeur of a wedding venue 
              or the sweeping beauty of natural landscapes.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl shadow-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              My <span className="text-accent">Approach</span>
            </h2>
            <p className="text-gray-300 mb-4">
              I, Hiren Vadher, believe in capturing authentic moments from unique perspectives. Whether I'm piloting a drone 
              hundreds of feet in the air or documenting intimate pre-wedding moments, my goal is to create 
              visuals that evoke emotion and preserve memories that last a lifetime.
            </p>
            <p className="text-gray-300 mb-4">
              Every project receives my full creative attention, combining cinematic techniques, perfect timing, 
              and cutting-edge technology to deliver results that exceed expectations.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl shadow-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Equipment & <span className="text-accent">Certifications</span>
            </h2>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                FAA Licensed Commercial Drone Pilot
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                Professional Liability Insurance
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                DJI Mavic 3 Pro & Air 3 Drones
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                Sony Alpha 7R V & Cinema Cameras
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                Professional Gimbals & Stabilization
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Get in <span className="text-accent">Touch</span>
            </h2>
            <p className="text-gray-300 mb-4">
              Interested in working together? I'd love to hear about your project 
              and discuss how we can create something amazing.
            </p>
            <div className="flex gap-4">
              <a 
                href="mailto:contact@example.com"
                className="inline-block bg-accent hover:bg-accent-light text-black px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-accent/50 transition transform hover:scale-105"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
