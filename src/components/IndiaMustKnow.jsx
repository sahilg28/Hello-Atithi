import IMK1 from '../assets/IMK-1.jpg';
import IMK2 from '../assets/IMK-2.png';
import IMK3 from '../assets/IMK-3.jpg';

const IndiaMustKnow = () => {
  const cards = [
    {
      id: 1,
      title: "Essential Guide: Indian Visa Requirements 2025",
      description: "India Visa Requirements 2025",
      imageUrl: IMK1
    },
    {
      id: 2,
      title: "India Must Know",
      description: "Best places to visit in north India, The best hotels in India. Garam Chai with Doli and Bills Gate.",
      imageUrl: IMK2
    },
    {
      id: 3,
      title: "India Must Know",
      description: "Best places to visit in north India, The best hotels in India. Garam Chai with Doli and Bills Gate.",
      imageUrl: IMK3
    },
    {
      id: 4,
      title: "India Must Know",
      description: "Best places to visit in north India, The best hotels in India. Garam Chai with Doli and Bills Gate.",
      imageUrl: IMK1
    },
    {
      id: 5,
      title: "India Must Know",
      description: "Best places to visit in north India, The best hotels in India. Garam Chai with Doli and Bills Gate.",
      imageUrl: IMK2
    },
    {
      id: 6,
      title: "India Must Know",
      description: "Best places to visit in north India, The best hotels in India. Garam Chai with Doli and Bills Gate.",
      imageUrl: IMK3
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-14">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-pink-700 text-center mb-6">INDIA&apos;S MUST KNOW</h1>
        <div className="w-full h-[2px] bg-pink-700"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {cards.map((card) => (
          <div 
            key={card.id}
            className="w-[380px] bg-white rounded-3xl p-6"
            style={{
              boxShadow: '0 0 20px rgba(255,20,147, 0.3)'
            }}
          >
            <div className="w-full mb-6">
              <div className="rounded-lg overflow-hidden border-black border-2">
                <img
                  src={card.imageUrl}
                  alt="India Must Know"
                  className="w-full h-[200px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="px-2">
              <h2 className="text-2xl font-medium mb-3">{card.title}</h2>
              <p className="text-black text-md mb-2 leading-relaxed">{card.description}</p>
              <div className="text-center">
                <button className="text-pink-700 font-bold text-lg cursor-pointer">READ MORE</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndiaMustKnow;