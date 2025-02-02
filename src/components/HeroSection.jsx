import heroBackground from '../assets/hero-background.webp';

const HeroSection = () => {
  return (
    <div className="relative w-screen h-[32rem]">
      <img
        src={heroBackground}
        alt="Hero Background"
        className="w-full h-full object-center "
        style={{ objectPosition: 'center 50%' }}
      />
      
      <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white font-medium text-4xl md:text-5xl max-w-4xl mb-2 opacity-85 mt-50">
          MAKE YOUR TRIP TO INDIA
        </h1>
        <h1 className="text-white font-medium text-4xl md:text-5xl max-w-4xl mb-6 opacity-85">
        SAFE AND STRESS-FREE
        </h1>
        
        <button
          className="border-2 rounded-4xl text-white px-4 text-2xl py-2 font-semibold "
        >
          Starting at $5/day
        </button>
      </div>
    </div>
  )
}

export default HeroSection;
