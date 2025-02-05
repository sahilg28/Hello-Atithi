import PropTypes from 'prop-types';
import discoverImage from '../assets/challenges-discover.png';
import safetyImage from '../assets/challenges-safety.png';
import touristImage from '../assets/challenges-Tourist.png';
import whyImage from '../assets/challenges-when.png';
import payingImage from '../assets/challenges-paying.png';

const Card = ({ image, title, description }) => (
  <div className="relative max-w-md mx-auto">
    <div className="bg-white rounded-lg p-8 shadow-[10px_10px_20px_rgba(255,20,147,0.3)] relative"> 
      <img 
        src={image} 
        alt={title} 
        className="w-full h-50 object-contain mb-4"
        loading="lazy"
      />
      <h3 className="text-pink-700 font-bold text-xl text-center mb-4">{title}</h3>
      <p className="text-black text-center text-md m-4">{description}</p>
      <div className="text-center text-md">
        Click <span className="text-blue-600 font-semibold cursor-pointer">here</span> to know more
      </div>
    </div>
  </div>
);

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Challenges = () => (
  <div className="max-w-7xl mx-auto py-4 px-4 sm:px-4 lg:px-4">
    <h2 className="text-3xl font-bold text-center mb-16 text-pink-700">
      CHALLENGES YOU FACE
    </h2>
    <div className="flex flex-col items-center space-y-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24 w-full ">
        <Card
          image={discoverImage}
          title="Discover India"
          description="Feeling stuck in popular places and missing out on how to mix with locals like the local cooking, traditions, spirituality."
        />
        <Card
          image={safetyImage}
          title="Safety & Fear"
          description="Probably one of the major concerns while you are in India and these issues can appear anytime-anywhere."
        />
        <Card
          image={touristImage}
          title="Tourist Scams"
          description="Remember, 99% you are likely a target. And the feeling of being a victim can worsen the trip experience for you."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24 w-full max-w-4xl">
        <Card
          image={whyImage}
          title="Why-When-How"
          description="Planning is fun (we still encourage you to plan) but how you will differ between promotional and true info."
        />
        <Card
          image={payingImage}
          title="Paying in India"
          description="While planning or in India, unable to book services on your own, stuck at local payments & getting OTPs for booking."
        />
      </div>
    </div>
  </div>
);

export default Challenges;
