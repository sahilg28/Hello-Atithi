import PropTypes from 'prop-types';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import imkImage5 from '../assets/IMK-5.webp';
const apiUrl = import.meta.env.VITE_API_URL;

const CategoryCard = ({ title, description, imageSrc, link }) => {
  const truncatedDescription = description.length > 80 ? `${description.slice(0, 25)}...` : description;
  return (
    <div className="bg-white rounded-xl p-3 mb-6 " 
         style={{ width: '360px', height: '380px',
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
            <h2 className="text-xl font-bold mb-1 text-black">{title}</h2>
            <p className="text-black text-sm ">{truncatedDescription}</p>
          </div>
          <div className="flex justify-end">
            <Link 
              to={link}
              className="text-pink-700 hover:text-sky-600 flex items-center gap-1 text-sm font-bold mb-2 cursor-pointer"
              aria-label={`Read more about ${title}`}
              tabIndex={0}
            >
              Read More
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

const BlogCategories = () => {
  
  const [categoriesData, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
   ( async () => {
      try{
        setLoading(true);
        const res = await fetch(`${apiUrl}/api/blogs/get`);
        const data = await res.json();
        const modifiedData = data?.data?.map(d => {
          const {_id: id, title, description, content} = d;
          return {
            title,
            description,
            content,
            link: encodeURIComponent(id)
          }
        });
        setCategories(modifiedData)
        console.log("Blogs: ", data)
      }catch(error){
        console.log("Error while fetching blogs: ", error);
      } finally{
        setLoading(false);
      }
    })();
  }, [])

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

      {loading && <div className='font-semibold flex items-center justify-center w-full'><p>Loading...</p></div>}

     { !loading && <div className="grid grid-cols-3 gap-4">
        {categoriesData.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            description={category.description}
            imageSrc={imkImage5}
            link={category.link}
          />
        ))}
      </div>}
    </div>
  );
};

export default BlogCategories;