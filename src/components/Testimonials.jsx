import  { useEffect, useState } from 'react';

const testimonialData = [
  {
    title: 'Unforgettable Experience!',
    content: "This tour gave me memories to cherish forever. The guides were amazing, and the destinations were breathtaking!",
    author: "EmilyWanderer",
    location: "USA"
  },
  {
    title: 'Perfectly Organized!',
    content: "Everything was so well-planned, from transport to accommodations. Made exploring India stress-free!",
    author: "RajivTravels",
    location: "UK"
  },
  {
    title: 'A Cultural Delight!',
    content: "I loved immersing myself in India's vibrant culture. This tour made it effortless and enjoyable.",
    author: "GlobalNomad",
    location: "Australia"
  },
  {
    title: 'Highly Recommended!',
    content: "The team was friendly and knowledgeable. They showed us hidden gems we'd never have found ourselves.",
    author: "AnnaExplorer",
    location: "Canada"
  },
  {
    title: 'Amazing Food Tour!',
    content: "The food trail was a highlight. Every meal was an explosion of authentic Indian flavors!",
    author: "FoodieTravels",
    location: "Singapore"
  },
  {
    title: 'A Photographer\'s Dream!',
    content: "Stunning landscapes, colorful festivals, and historic sites. A paradise for photography lovers like me!",
    author: "ShutterBug101",
    location: "Germany"
  },
  {
    title: 'Safe and Fun!',
    content: "As a solo traveler, I felt completely safe and cared for. India is incredible with the right guidance!",
    author: "Solo-Adventurer",
    location: "France"
  },
  {
    title: 'A Journey of a Lifetime!',
    content: "From the Taj Mahal to the beaches of Goa, every moment was magical. Can't wait to come back!",
    author: "MarkWorldWide",
    location: "South Africa"
  }
];

const ScrollingTestimonials = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setPosition((prev) => {
        const newPosition = prev - 1;
        const totalWidth = testimonialData.length * 320; // Card width + gap
        return newPosition <= -totalWidth ? 0 : newPosition;
      });
    }, 30);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="w-screen py-14 items-center justify-center">
      <h1 className="text-center text-3xl font-bold text-pink-700 mb-8">TESTIMONIALS</h1>
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(${position}px)` }}
        >
          {[...testimonialData, ...testimonialData].map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-96 border border-pink-700 p-4"
            >
              <h3 className="text-lg font-semibold mb-3 text-pink-700">{testimonial.title}</h3>
              <p className="text-black mb-4">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-black">{testimonial.author}</p>
                <p className="text-black">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingTestimonials;