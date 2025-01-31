import heroBackground from '../assets/hero-background.webp';

const HeroSection = () => {
  return (
    <div className="relative w-screen h-[32rem]">
      <img
        src={heroBackground}
        alt="Hero Background"
        className="w-screen h-full object-cover object-center"
        style={{ objectPosition: 'center 30%' }}
      />
      
      <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white font-bold text-4xl md:text-5xl max-w-3xl mb-4 opacity-90 mt-40">
          MAKE YOUR TRIP TO INDIA
        </h1>
        <h1 className="text-white font-bold text-4xl md:text-5xl max-w-3xl mb-6 opacity-90">
        SAFE AND STRESS-FREE
        </h1>
        
        <button
          className="border-2 rounded-4xl hover:bg-pink-800 text-white px-4 text-2xl py-2 font-bold "
        >
          Starting at $5/day
        </button>
      </div>
    </div>
  )
}

export default HeroSection;
