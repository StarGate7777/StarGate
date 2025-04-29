import img1 from '../assests/SERVING/img1.jpg'
import img2 from '../assests/SERVING/img2.jpg'
import img3 from '../assests/SERVING/img3.jpg'

export default function UniversityJourney() {
    const features = [
      {
        image: img1,
        title: "Get an idea of your acceptance chances to your dream college",
      },
      {
        image: img2,
        title: "Get personalized university and stream recommendations based on your needs",
      },
      {
        image: img3,
        title: "Learn what you can do now to build up your candidacy",
      },
    ];

    const scrollToBottom = () => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    };
  
    return (
      <section className="py-12 px-4 sm:px-6 bg-white text-center overflow-y-hidden">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Don't wait for Cet Result to start your College journey!
          </h2>
          <p className="text-gray-600 mt-2 md:mt-4 md:text-lg">
            Contact us today to schedule a free initial consultation and discuss your college options.
          </p>
        </div>
        
        <div className="mt-8 md:mt-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center w-full max-w-xs sm:max-w-sm text-center px-4 py-6"
            >
              <img 
                src={feature.image} 
                alt={feature.title} 
                className="w-32 h-32 sm:w-32 sm:h-32 mb-4 rounded-full object-cover " 
              />
              <p className="text-gray-800 font-semibold text-sm sm:text-base leading-tight">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
        
        {/* Optional: Add a call-to-action button */}
        <button onClick={scrollToBottom}
         className="mt-8 md:mt-12 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300">
          Schedule Free Consultation
        </button>
      </section>
    );
}