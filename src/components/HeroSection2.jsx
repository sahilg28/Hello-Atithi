import travelExpertImage from '../assets/travel-expert.webp';

const HeroSection2 = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-40 py-10 px-2 max-w-7xl mx-auto">
            <div className="md:w-6/12 flex items-center justify-center">
                <img 
                    src={travelExpertImage} 
                    alt="Travel Expert" 
                    className="max-w-3xl object-cover hidden md:block h-[600px]" 
                    loading="lazy"
                />
            </div>
            <div className="md:w-8/12 max-w-lg mb-12 ">
                <div className="flex flex-col items-center space-y-8 ">
                    <h1 className="text-sky-600 text-3xl  font-bold text-center mb-12  ">
                        YOUR INDIA TRAVEL EXPERT
                    </h1>
                    <p className="text-black text-center  text-lg  ">
                        We turn your trip to India into a smooth and enriching experience. Navigating new cultures can be tough, especially in the country of 1.4 billion people but we ensure you explore India safely like a local, stress-free at every step.
                    </p>
                    <p className="text-black text-center text-lg">
                        From paying for services in India to interaction with local people, we empower you to handle the complexities of India.
                    </p>
                    <p className="text-black text-center text-lg">
                        Make your trip to India safe and stress-free on your own.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection2;
