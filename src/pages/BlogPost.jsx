import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogContent from '../components/BlogContent'; 
import imkImage4 from '../assets/IMK-4.webp';

const BlogPost = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="relative w-full h-[32rem]">
                <img 
                    src={imkImage4} 
                    alt="Blog Category" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>
            <BlogContent /> 
            <Footer />
        </div>
    );
};

export default BlogPost;
