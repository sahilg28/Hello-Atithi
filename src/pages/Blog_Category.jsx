import Header from '../components/Header';
import Footer from '../components/Footer';
import heroImage from '../assets/category-herosection.webp'; 
import BlogCategories from '../components/Category';

const BlogCategory = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="relative w-full h-[32rem]">
                <img 
                    src={heroImage} 
                    alt="Blog Category" 
                    className="w-full h-full object-cover"
                />
            </div>
            <BlogCategories />
            <Footer />
        </div>
    );
};

export default BlogCategory;
