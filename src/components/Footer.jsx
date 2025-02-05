import { Link } from 'react-router-dom';
import logo from '../assets/HelloAtithi_Fav.svg';
import textlogo from '../assets/text-logo.png';
import footerPaypal from '../assets/footer-paypal.png';
import footerUpi from '../assets/footer-upi.svg';
import fb from '../assets/fb.webp';
import x from '../assets/x.webp';
import pinterest from '../assets/pinterest.webp';
import ig from '../assets/ig.webp';
import footerBg from '../assets/footer-bg.png';

const Footer = () => {
  return (
    <footer 
      className="relative bg-cover bg-center py-10 px-6" 
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          <div className="flex flex-col">
            <div className="flex items-center  mb-2">
              <img src={logo} alt="Hello Atithi Logo" className="w-24 h-24" loading="lazy" />
              <img src={textlogo} alt="Hello Atithi Text Logo" className="h-10" loading="lazy" />
            </div>
            <p className="text-white  font-semibold mt-16 tracking-wider">YOUR INDIA TRAVEL EXPERT</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8">
            <div>
              <h3 className="text-white font-bold mb-6 tracking-wide">HOME</h3>
              <ul className="space-y-5 text-white/90 text-sm">
                <li className="hover:text-white"><Link to="/blog-category">INDIA MUST KNOW</Link></li>
                <li className="hover:text-white"><Link to="#">HOW WE WORK</Link></li>
                <li className="hover:text-white"><Link to="#">SERVICES & FEES</Link></li>
                <li className="hover:text-white"><Link to="#">CONTACT US</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-6 tracking-wide">INFORMATION</h3>
              <ul className="space-y-5 text-white/90 text-sm">
                <li className="hover:text-white"><Link to="#">FAQ</Link></li>
                <li className="hover:text-white"><Link to="#">PRIVACY POLICY</Link></li>
                <li className="hover:text-white"><Link to="#">TERMS & CONDITIONS</Link></li>
                <li className="hover:text-white"><Link to="#">PAYMENT, CANCELLATION AND REFUND</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex items-center space-x-6 mt-20 gap-3 mr-4 ">
            <a href="https://www.facebook.com/helloatithiindia" target="_blank" rel="noopener noreferrer">
              <img src={fb} alt="Facebook" className="w-4 h-9 opacity-90 hover:opacity-100" loading="lazy" />
            </a>
            <a href="https://x.com/HelloAtithi" target="_blank" rel="noopener noreferrer">
              <img src={x} alt="Twitter/X" className="w-9 h-9 opacity-90 hover:opacity-100" loading="lazy" />
            </a>
            <a href="https://in.pinterest.com/helloatithi/" target="_blank" rel="noopener noreferrer">
              <img src={pinterest} alt="Pinterest" className="w-9 h-9 opacity-90 hover:opacity-100" loading="lazy" />
            </a>
            <a href="https://www.instagram.com/hello_atithi" target="_blank" rel="noopener noreferrer">
              <img src={ig} alt="Instagram" className="w-9 h-9 opacity-90 hover:opacity-100" loading="lazy" />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t-2 border-white">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-semibold">
            <p className="text-white text-sm">
              2019-2025 © <span className="text-[#FF1654]">Hello Atithi</span> - All Rights Reserved
            </p>
            <div className="flex items-center gap-4">
              <span className="text-white text-sm whitespace-nowrap">Payment Partner:</span>
              <img src={footerPaypal} alt="Paypal" className="h-6" loading="lazy" />
              <img src={footerUpi} alt="UPI" className="h-6 bg-white rounded-md px-2" loading="lazy" />
            </div>
            <p className="text-white text-sm">
              Incubated by <a href="https://www.aicjklu.in/about" target="_blank" rel="noopener noreferrer" className="text-[#FF1654] font-semibold">AIC-JKLU</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;