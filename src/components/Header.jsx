import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logoHres.webp'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-screen bg-white  ">
      <div className=" mx-auto">
        <div className="flex py-2 px-12 items-center justify-around">
          <button
            className="lg:hidden text-rose-600 p-2  "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            tabIndex={0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <Link to="/">
            <div className="flex items-center mt-1 px-4 cursor-pointer">
              <img 
                src={logo} 
                alt="Atithi Logo" 
                className="h-14 w-auto"
                tabIndex={0}
                aria-label="Company Logo"
              />
            </div>
          </Link>

          <div className="text-gray-800 font-medium italic hidden lg:block ">
            24/7 WhatsApp helpline | +91 8077034423
          </div>

          <Link to="/trip-form">
            <button
              className="bg-pink-700 text-white px-4 rounded-sm hover:bg-pink-800 h-14 font-bold shadow-gray-500 shadow-md mt-1 mr-4 "
              tabIndex={0}
              aria-label="Start My Safe Journey"
            >
              START MY SAFE JOURNEY
            </button>
          </Link>
        </div>

        <div className="hidden lg:flex justify-evenly mt-2 bg-pink-700 p-1 w-screen h-16 ">
        <button
            className="text-white font-medium hover:underline decoration-white decoration-2"
            tabIndex={0}
            aria-label="How We Work"
          >
            HOW WE WORK
          </button>

          <button
            className="text-white font-medium hover:underline decoration-white decoration-2"
            tabIndex={0}
            aria-label="Our Blogs"
          >
            INDIAs MUST KNOW
          </button>

          <button
            className="text-white font-medium hover:underline decoration-white decoration-2"
            tabIndex={0}
            aria-label="Service and Fee"
          >
            SERVICE & FEES
          </button>
  
          
          <button
            className="text-white font-medium hover:underline decoration-white decoration-2"
            tabIndex={0}
            aria-label="FAQ"
          >
            FAQ
          </button>
          
          <button
            className="text-white font-medium hover:underline decoration-white decoration-2"
            tabIndex={0}
            aria-label="Contact"
          >
            CONTACT US
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-white z-50">
            <div className="p-4">
              <button
                className="absolute top-4 right-4 text-pink-700"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
                tabIndex={0}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <nav className="flex flex-col mt-12 ">
              <button
                  className=" text-gray-700 font-medium  border-b-2 border-pink-700 py-2"
                  tabIndex={0}
                  aria-label="How We Work"
                >
                  HOW WE WORK
                </button>
                
                <button
                  className="text-gray-700 font-medium  border-b-2 border-pink-700 py-2"
                  tabIndex={0}
                  aria-label="Our Blogs"
                >
                  INDIAs MUST KNOW
                </button>
  
                <button
                  className="text-gray-700 font-medium border-b-2 border-pink-700 py-2"
                  tabIndex={0}
                  aria-label="Service and Fee"
                >
                  SERVICE & FEE
                </button>
                
                <button
                  className="text-gray-700 font-medium  border-b-2 border-pink-700 py-2"
                  tabIndex={0}
                  aria-label="FAQ"
                >
                  FAQ
                </button>
                
                <button
                  className="text-gray-700 font-medium  border-b-2 border-pink-700 py-2"
                  tabIndex={0}
                  aria-label="Contact"
                >
                  CONTACT US
                </button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
