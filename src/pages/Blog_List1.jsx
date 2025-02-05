import Header from '../components/Header';
import Footer from '../components/Footer';
import imkImage1 from '../assets/IMK-1.jpg';
import BlogCategories from '../components/BlogCategories'; // Importing BlogCategories component

const BlogList1 = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="relative w-full h-[32rem]">
        <img 
          src={imkImage1} 
          alt="Blog Category" 
          className="w-full h-full object-cover"
        />
      </div>
      <BlogCategories /> 
      <Footer />
    </div>
  );
};

export default BlogList1;
