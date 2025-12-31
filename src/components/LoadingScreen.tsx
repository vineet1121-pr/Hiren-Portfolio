import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 px-4 ${progress === 100 ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center w-full max-w-md">
        {/* Camera Icon Animation */}
        <div className="mb-6 sm:mb-8 relative">
          <svg 
            className="w-16 h-16 sm:w-20 md:w-24 sm:h-20 md:h-24 mx-auto text-accent animate-camera-flash" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3z"/>
          </svg>
          
          {/* Flash Effect */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="camera-flash"></div>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 tracking-widest animate-pulse">
          Capturing.....
        </h2>

        {/* Progress Bar */}
        <div className="w-full px-4">
          <div className="h-1.5 sm:h-2 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-accent via-accent-light to-accent rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="mt-2 sm:mt-3 text-accent font-semibold text-base sm:text-lg">
            {progress}%
          </div>
        </div>

        {/* Shutter Animation */}
        <div className="mt-6 sm:mt-8 flex justify-center gap-0.5 sm:gap-1">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="w-0.5 sm:w-1 h-6 sm:h-8 bg-accent rounded-full animate-shutter"
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
