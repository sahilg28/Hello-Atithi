import Header from '../components/Header';
import Footer from '../components/Footer';
import DBlogContent from '../components/DBlogContent'; 
import imkImage4 from '../assets/IMK-4.webp';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const apiUrl = import.meta.env.VITE_API_URL;

const BlogPost = () => {
    const [blog, setBlog] = useState({});
    const {id} = useParams();

    useEffect(() => {
        ( async () => {
           try{
             const res = await fetch(`${apiUrl}/api/blogs/${id}`);
             const data = await res.json();
             setBlog(data.data)
             console.log("Blog: ", data)
           }catch(error){
             console.log("Error while fetching blog: ", error);
           }
         })();
       }, [id])

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
            <DBlogContent blog={blog} /> 
            <Footer />
        </div>
    );
};

export default BlogPost;
