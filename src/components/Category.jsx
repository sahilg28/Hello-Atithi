import PropTypes from 'prop-types';
import { ArrowRight } from 'lucide-react';
import imkImage1 from '../assets/IMK-1.jpg';
import imkImage3 from '../assets/IMK-3.jpg';
import { Link } from 'react-router-dom'; 

const CategoryCard = ({ title, description, image, link }) => (
  <div className="bg-white rounded-xl p-4 mb-6" 
       style={{ 
         boxShadow: '5px 10px 20px rgba(255,20,147, 0.3)',
         background: 'linear-gradient(to right, white, white)',
       }}>
    <div className="flex gap-8 items-start p-2">
      <div className="w-300px h-250px flex-shrink-0">
        <div className="rounded-lg border-2 border-black overflow-hidden h-full">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl text-start font-semibold mb-4 text-black">{title}</h2>
        <p className="text-black text-lg mb-4 pr-6">{description}</p>
        <div className="flex justify-end mt-32 px-4">
          <Link 
            to={link} 
            className="text-pink-700 flex items-end gap-1 text-sm font-bold cursor-pointer hover:text-sky-600"
            aria-label={`View more about ${title}`}
            tabIndex={0}
          >
            View More
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

CategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired, 
};

const BlogCategories = () => {


  const categories = [
    {
      title: "All you should know about India",
      description: "Discover the magic of India! This category explores the country's rich history, diverse culture, and stunning landscapes. Uncover India's heart and soul through captivating stories and insightful articles, from ancient times to today.",
      image: imkImage1,
      link: "/blog-all-you-should-know-about-india", 
    },
    {
      title: "Top Places to Visit in North India",
      description: "North India calls with a mix of experiences, from the Himalayas to the Taj Mahal. This category explores the region's best places to visit, showcasing its rich history, vibrant culture, stunning scenery, and spiritual sites.  Discover ancient forts, lively markets, snowy mountains, and the diverse heart of North India.",
      image: imkImage3,
      link: "/top-places-to-visit-in-north-india", 
    },
    {
      title: "A Culinary Journey Through India",
      description: "Taste your way through India! This category explores the country's amazing food, from flavorful street snacks to rich royal dishes. Discover regional specialties, learn how they're made, and experience the incredible spices and aromas that make Indian food so popular.",
      image: imkImage1,
      link: "/a-culinary-journey-through-india", 
    },
    {
      title: "Exploring Spirituality in India",
      description: "Find your inner peace in India. This section explores holy places and quiet retreats, from ancient temples to peaceful ashrams. Learn about the wisdom that has shaped India's spiritual history, whether you're looking to relax or explore different faiths.",
      image: imkImage3,
      link: "/exploring-spirituality-in-india", 
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-2 py-6">
      <div className="flex items-center gap-2 mb-6 text-lg">
        <Link 
          to="/" 
          className="text-pink-700 font-bold cursor-pointer" 
          aria-label="Go to Home Page"
          tabIndex={0}
        >
          HOME
        </Link>
        <span className="text-pink-700 font-bold text-xl mb-1">{">"}</span>
        <span className="text-pink-700 font-bold">CATEGORIES</span>
      </div>
      <hr className="border-t-2 border-pink-700 my-4" />
      
      <div>
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            description={category.description}
            image={category.image}
            link={category.link} 
          />
        ))}
      </div>
    </div>
  );
};

export default BlogCategories;