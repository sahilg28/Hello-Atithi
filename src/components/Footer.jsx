import logo from '../assets/HelloAtithi_Fav.svg';
import textlogo from '../assets/text-logo.png';
import footerPaypal from '../assets/footer-paypal.png';
import footerUpi from '../assets/footer-upi.svg';
import fb from '../assets/fb.webp';
import x from '../assets/x.webp';
import pinterest from '../assets/pinterest.webp';
import ig from '../assets/ig.webp';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="flex items-center ">
          <img src={logo} alt="Hello Atithi Logo" className="w-24 h-24" />
          <img src={textlogo} alt="Hello Atithi Text Logo" className="w-42 h-14" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 text-sm text-white text-center md:text-left">
          <div>
            <h3 className="font-bold text-white mb-2">HOME</h3>
            <ul className="space-y-1">
              <li>How We Work</li>
              <li>India Must Know</li>
              <li>Services & Fees</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">INFORMATION</h3>
            <ul className="space-y-1">
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Payment, Cancellation & Refund</li>
            </ul>
          </div>
        </div>

        <div className="flex space-x-4 mt-6 md:mt-0">
          <a href="https://www.facebook.com/helloatithiindia" target="_blank" rel="noopener noreferrer">
            <img src={fb} alt="Facebook" className="h-6" />
          </a>
          <a href="https://x.com/HelloAtithi" target="_blank" rel="noopener noreferrer">
            <img src={x} alt="Twitter/X" className="h-6" />
          </a>
          <a href="https://in.pinterest.com/helloatithi/" target="_blank" rel="noopener noreferrer">
            <img src={pinterest} alt="Pinterest" className="h-6" />
          </a>
          <a href="https://www.instagram.com/hello_atithi" target="_blank" rel="noopener noreferrer">
            <img src={ig} alt="Instagram" className="h-6" />
          </a>
        </div>
      </div>

      <div className=" border-white border-t-2 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center px-4 text-white text-center md:text-left">
        <p>
          2019-2025 © <span className="text-pink-700">Hello Atithi</span> - All Rights Reserved
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span className="font-semibold">Payment Partner:</span>
          <img src={footerPaypal} alt="Paypal" className="w-20" />
          <img src={footerUpi} alt="UPI" className="w-20" />
        </div>
        <p className="mt-4 md:mt-0 ">
          Incubated by <a href="https://www.aicjklu.in/about" target="_blank" rel="noopener noreferrer" className="text-pink-700 font-semibold">AIC-JKLU</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;