import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import logo from '../assets/text-logo.png';
import { Link } from 'react-router-dom';
const apiUrl = import.meta.env.VITE_API_URL;
import { House } from "lucide-react";

function AdminPanel() {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBlog, setNewBlog] = useState({ _id: "", title: '', description: '', content: '' });
  const [reload, setReload] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const openAddModal = () => {
    setNewBlog({ _id: "", title: '', description: '', content: '' });
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/blogs/get`);
        const data = await res.json();
        setBlogs(data.data);
        setNewBlog({ _id: "", title: '', description: '', content: '' });
        console.log("Data fetched : ", data.data);
      } catch (error) {
        console.error('Error while fetching blogs:', error);
      }
    };
    fetchBlogs();
  }, [reload]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddBlog = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${apiUrl}/api/blogs/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBlog),
      });

      const data = await res.json();
      if (data.success) {
        setReload(p => !p);
        toast.success("Blog Created Successfully");

        closeModal();
      } else {
        console.error('Error creating blog:', data.message);
      }
    } catch (error) {
      console.error('Error while adding blog:', error);
    }
  };

  const handleEditBlog = async (id) => {
    const blogToEdit = blogs.find((blog) => blog._id === id);
    setNewBlog(blogToEdit);
    openModal(); 
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const {_id: id} = newBlog;
    try {
      const res = await fetch(`${apiUrl}/api/blogs/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBlog), 
      });

      const data = await res.json();
      console.log("data: ", data);

      if (data.success) {
        setReload(p => !p);
        toast.success("Blog Updated Successfully");
        closeModal();
      } else {
        console.error('Error updating blog:', data.message);
      }
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  const handleDeleteBlog = async (id) => {
    try {
      const res = await fetch(`${apiUrl}/api/blogs/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
        toast.success("Blog Deleted Successfully");
      } else {
        console.error('Error deleting blog:', data.message);
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-white rounded-lg">
      <div className="md:col-span-1 w-96">
        <div className="bg-pink-700 h-full">
          <div className='pt-5 px-6 bg-black'>
            <img src={logo} className='w-full' />
          </div>

          <ul className='mt-3 p-1'>
              <li className='bg-white cursor-pointer rounded p-2 text-black font-semibold flex gap-1'>
                  <Link to="/" className="text-pink-700 font-bold cursor-pointer" aria-label="Go to Home Page" tabIndex={0}>
                      <span className="flex items-center gap-2"><House color='black'/><span> Home</span></span>
                  </Link>
              </li>
          </ul>
        </div>
      </div>
      
      <div className="md:col-span-2">
        <div className="border-b">
          <h1 className="text-xl font-semibold p-3">Admin Panel</h1>
        </div>
        <div className="p-10">
          <div className="flex justify-end mb-6">
            <button
              onClick={openAddModal}
              className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Create Blog
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="px-4 py-2 border-b">Title</th>
                  <th className="px-4 py-2 border-b">Description</th>
                  <th className="px-4 py-2 border-b">Content</th>
                  <th className="px-4 py-2 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                
                {!blogs.length && <tr><td colSpan="4" className='text-center p-2' >No Blogs Found</td></tr>}

                {blogs.map((blog) => (
                  <tr key={blog._id}>
                    <td className="px-4 py-2 border-b">{blog.title}</td>
                    <td className="px-4 py-2 border-b">{blog.description}</td>
                    <td className="px-4 py-2 border-b">{blog.content}</td>
                    <td className="px-4 py-2 border-b">
                      <button
                        onClick={() => handleEditBlog(blog._id)}
                        className="px-4 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteBlog(blog._id)}
                        className="px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {isModalOpen && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg w-96 md:w-1/2 lg:w-1/3">
                <h2 className="text-2xl font-semibold mb-4">
                  {newBlog._id ? 'Edit Blog' : 'Create Blog'}
                </h2>
                <form onSubmit={newBlog._id ? handleEditSubmit : handleAddBlog} className="space-y-4">
                  <div>
                    <label htmlFor="title" className="block text-lg font-medium">Title</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={newBlog.title}
                      onChange={handleInputChange}
                      required
                      className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-lg font-medium">Description</label>
                    <input
                      type="text"
                      id="description"
                      name="description"
                      value={newBlog.description}
                      onChange={handleInputChange}
                      required
                      className="mt-2 p-2 w-full border border-gray-300 rounded"
                    />
                  </div>

                  <div>
                    <label htmlFor="content" className="block text-lg font-medium">Content</label>
                    <textarea
                      id="content"
                      name="content"
                      value={newBlog.content}
                      onChange={handleInputChange}
                      required
                      className="mt-2 p-2 w-full border border-gray-300 rounded"
                      rows="4"
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      {newBlog._id ? 'Update Blog' : 'Create Blog'}
                    </button>
                    <button
                      type="button"
                      onClick={closeModal}
                      className="ml-4 px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
