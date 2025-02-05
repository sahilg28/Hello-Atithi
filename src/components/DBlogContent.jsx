import IMK5 from '../assets/IMK-5.webp';
import Share_LinkedIn from '../assets/Share_Linkedin.png';
import Share_X from '../assets/Share_X.png';
import Share_Ig from '../assets/Share_Ig.png';
import logoHres from '../assets/logoHres.webp';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BlogContent = ({blog}) => {
  return (
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="flex items-center gap-1 text-lg py-4">
        <Link to="/blog-category">
          <span className="text-pink-700 font-bold cursor-pointer">CATEGORIES</span>
        </Link>
        <span className="text-pink-700 font-bold text-xl mb-1">{">"}</span>
        <Link to="/blog-all-you-should-know-about-india">
          <span className="text-pink-700 font-bold cursor-pointer">INDIA MUST KNOW</span>
        </Link>
        <span className="text-pink-700 font-bold text-xl mb-1">{">"}</span>
        <span className="text-pink-700 font-bold">KNOW THE VISA</span>
        <span className="ml-auto text-pink-700 font-bold">About me</span>
      </div>

      <hr className="border-t-2 border-pink-700 mb-4" />

      <div className="grid grid-cols-4 gap-12">
        <div className="col-span-3">
          <div className="space-y-4">
            <h1 className="text-black text-2xl font-bold underline">{blog.title}</h1>
            
            <p className="text-black text-lg leading-relaxed">
              {blog.description}
            </p>
            <img 
              src={IMK5} 
              alt="Indian visa application process" 
              className="w-220px h-280px rounded-lg"
              loading="lazy"
            />

            <div className='text-xl'>
              {blog.content}    
            </div>
          
          </div>

          <div className="border-t-4 border-pink-700 mt-24 mb-2"></div>
          <div className="mb-6">
            <div className="flex items-center">
              <span className="text-xl font-bold">Share :</span>
              <div className="flex"> 
                <button className="w-16 h-16 rounded-full flex items-center justify-center cursor-pointer">
                  <img src={Share_LinkedIn} alt="Share on LinkedIn" className="w-full h-full mt-4" loading="lazy" />
                </button>
                <button className="w-16 h-16 rounded-full flex items-center justify-center cursor-pointer">
                  <img src={Share_X} alt="Share on Twitter" className="w-full h-full mt-4" loading="lazy" />
                </button>
                <button className="w-16 h-16 rounded-full flex items-center justify-center cursor-pointer">
                  <img src={Share_Ig} alt="Share on Instagram" className="w-full h-full mt-4" loading="lazy" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="space-y-4">
            <img src={logoHres} alt="Logo" className="w-64 h-32  mx-auto" loading="lazy" />
            <div className="space-y-2">
              <p className="text-sm text-black leading-relaxed">
                Expert insights on Indian visa requirements and travel regulations. 
                Stay updated with the latest information for a hassle-free journey to India.
              </p>
              <div>
                <p className="text-xl mt-10 font-bold mb-2">Social</p>
                <div className="border-t-4 border-pink-700  mb-4"></div>
                
                <div className="flex">
                  <button className="w-16 h-16 rounded-full flex items-center justify-center cursor-pointer" aria-label="Share on LinkedIn" tabIndex={0} onClick={() => {/* Add LinkedIn share functionality */}} onKeyDown={(e) => e.key === 'Enter' && {/* Add LinkedIn share functionality */}}>
                    <img src={Share_LinkedIn} alt="Share on LinkedIn" className="w-full h-full" loading="lazy" />
                  </button>
                  <button className="w-16 h-16 rounded-full flex items-center justify-center cursor-pointer" aria-label="Share on Twitter" tabIndex={0} onClick={() => {/* Add Twitter share functionality */}} onKeyDown={(e) => e.key === 'Enter' && {/* Add Twitter share functionality */}}>
                    <img src={Share_X} alt="Share on Twitter" className="w-full h-full" loading="lazy" />
                  </button>
                  <button className="w-16 h-16 rounded-full flex items-center justify-center cursor-pointer" aria-label="Share on Instagram" tabIndex={0} onClick={() => {/* Add Instagram share functionality */}} onKeyDown={(e) => e.key === 'Enter' && {/* Add Instagram share functionality */}}>
                    <img src={Share_Ig} alt="Share on Instagram" className="w-full h-full" loading="lazy" />
                  </button>
                </div>
                <Link to="/trip-form">
                  <button
                    className="bg-pink-700 text-white px-4  h-15 font-semibold text-lg cursor-pointer "
                    tabIndex={0}
                    aria-label="Start My Safe Journey"
                  >
                    START MY SAFE JOURNEY
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <div className="text-center py-12">
        <Link to="/trip-form">
          <button
            className="bg-pink-700 text-white px-4  h-15 font-semibold text-lg cursor-pointer "
            tabIndex={0}
            aria-label="Start My Safe Journey"
          >
            START MY SAFE JOURNEY
          </button>
        </Link>
      </div>

      <section className="py-8">
        <h2 className="text-center text-pink-700 text-2xl font-bold mb-8">YOU MAY ALSO LIKE</h2>
        <div className=" grid grid-cols-3 gap-8">
          {[
            { title: 'India Must Know', description: 'Essential information for planning your trip to India including customs, weather, and local etiquette.' },
            { title: 'States Guide', description: 'Comprehensive guide to Indian states, their unique cultures, and must-visit destinations.' },
            { title: 'City Guide', description: 'Detailed information about major Indian cities, local attractions, and travel tips.' }
          ].map((item) => (
            <div key={item.title} className="rounded-lg overflow-hidden group ">
              <div className=" rounded-lg">
                <div className=" h-50 w-full">
                  <img src={IMK5} alt={item.title} className="w-full h-full object-cover rounded-sm border-2 border-black " loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-black mb-3">
                    {item.description}
                  </p>
                  <a 
                    href="#"
                    className="text-pink-700 text-sm font-medium inline-block"
                  >
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

BlogContent.propTypes = {
  blog: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogContent;