import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import TripForm from './pages/TripForm'
import BlogCategory from './pages/Blog_Category'
import BlogList1 from './pages/Blog_List1'
import BlogPost from './pages/BlogPost' 
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trip-form" element={<TripForm />} />
        <Route path="/blog-category" element={<BlogCategory />} />
        <Route path="/blog-all-you-should-know-about-india" element={<BlogList1 />} />
        <Route path="/blog-post" element={<BlogPost />} />
      </Routes>
      <Analytics />
    </Router>
  )
}

export default App
