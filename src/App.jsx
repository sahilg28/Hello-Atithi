import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import TripForm from './pages/TripForm'
import BlogCategory from './pages/Blog_Category'
import BlogList1 from './pages/Blog_List1'
// import BlogPost from './pages/BlogPost' 
import DBlogPost from './pages/DBlogPost'
import { Analytics } from "@vercel/analytics/react";
import AdminPanel from './admin/AdminPanel'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <>
    <ToastContainer/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trip-form" element={<TripForm />} />
        <Route path="/blog-category" element={<BlogCategory />} />
        <Route path="/blog-all-you-should-know-about-india" element={<BlogList1 />} />
        {/* <Route path="/blog-post" element={<BlogPost />} /> */}
        <Route path="/:category/:id" element={<DBlogPost />} />
        <Route path="/control" element={<AdminPanel/>}/>
      </Routes>
      <Analytics />
    </Router>
    </>
  )
}

export default App
