import IMG_Q from '../assets/IMG_Q.png';

const ContactUsSection = () => {
    return (
      <section
        className="relative flex flex-col items-center justify-center text-center py-32 px-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMG_Q})` }}
      >
        <h2 className="text-pink-700 text-2xl px-16 italic font-serif font-light max-w-4xl">
          “There are three trips you take to India: the one you think you’re going to have - that you plan for, 
          the one you actually have; and the one you live through once you go back home.”
        </h2>
  
        <div className="mt-10 border border-white px-8 py-6 max-w-lg w-full bg-opacity-10 backdrop-blur-sm rounded-md">
          <p className="text-pink-700 text-lg italic">
            Can’t find it? Don’t worry. Just because it’s not here, doesn’t mean we can’t do it.
            <br />
            WhatsApp us on +91 8077034423
            <br />
            <span className="uppercase font-semibold">We are here 24x7.</span>
          </p>
        </div>
  
        <button className="mt-6 bg-pink-700 text-white text-lg font-semibold py-3 px-6 rounded hover:bg-pink-800 transition">
          CONTACT US
        </button>
      </section>
    );
  };
  
  export default ContactUsSection;