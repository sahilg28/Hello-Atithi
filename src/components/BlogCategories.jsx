import PropTypes from 'prop-types';
import { ArrowRight } from 'lucide-react';
import imkImage4 from '../assets/IMK-4.webp';
import imkImage5 from '../assets/IMK-5.webp';

const CategoryCard = ({ title, description, imageSrc, onReadMore }) => (
  <div className="bg-white rounded-xl p-3 mb-6" 
       style={{ width: '350px', height: '350px',
        boxShadow: '5px 10px 20px rgba(255,20,147, 0.3)',
        }}>
    <div className="h-full flex flex-col m-2">
      <div className="rounded-lg overflow-hidden flex-shrink-0 h-2/3 border-2 border-black">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy" 
        />
      </div>
      <div className="flex-1 flex flex-col justify-between mt-2">
        <div>
          <h2 className="text-xl font-bold mb-2 text-black">{title}</h2>
          <p className="text-black text-sm">{description}</p>
        </div>
        <div className="flex justify-end">
          <button 
            onClick={onReadMore} 
            className="text-pink-700 hover:text-sky-600 flex items-center gap-1 text-sm font-bold mb-2 cursor-pointer"
            aria-label={`Read more about ${title}`}
            tabIndex={0}
          >
            Read More
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  </div>
);

CategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  onReadMore: PropTypes.func.isRequired,
};

const BlogCategories = () => {
  const categories = [
    {
      title: "Essential Guide: Indian Visa Requirements 2025",
      description: "India Visa Requirements 2025",
      imageSrc: imkImage4,
      onReadMore: () => window.location.href = "/blog-post" 
    },
    {
      title: "India Must Know",
      description: "coming soon!!",
      imageSrc: imkImage5,
      onReadMore: () => {} // No action for this card currently
    },
    {
      title: "India Must Know",
      description: "content here!!",
      imageSrc: imkImage4,
      onReadMore: () => {} // No action for this card currently
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-2 py-6">
      <div className="flex items-center gap-2 mb-6 text-lg">
        <a href="/" className="text-pink-700 font-bold cursor-pointer">HOME</a>
        <span className="text-pink-700 font-bold text-xl mb-1">{">"}</span>
        <a href="/blog-category" className="text-pink-700 font-bold cursor-pointer">CATEGORIES</a>
        <span className="text-pink-700 font-bold text-xl mb-1">{">"}</span>
        <span className="text-pink-700 font-bold ">ALL-YOU-SHOULD-KNOW-ABOUT-INDIA</span>
      </div>
      <hr className="border-t-2 border-pink-700 my-4" />

      <div className="grid grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            description={category.description}
            imageSrc={category.imageSrc}
            onReadMore={category.onReadMore}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogCategories;