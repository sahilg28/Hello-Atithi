import IMG_Q from '../assets/IMG_Q.png';

const ContactUsSection = () => {
    return (
      <section
        className="relative flex flex-col items-center justify-center text-center py-28 px-6 w-screen h-screen bg-cover bg-bottom"
        style={{ backgroundImage: `url(${IMG_Q})` }}
      >
        <h2 className="text-pink-700 text-2xl px-16 italic font-serif  max-w-4xl mb-20">
          “There are three trips you take to India: the one you think you’re going to have - that you plan for, 
          the one you actually have; and the one you live through once you go back home.”
        </h2>
  
        <div className="mt-10 border-white border-2 px-8 py-6 max-w-3xl h-[150px]  bg-opacity-10 backdrop-blur-xs ">
          <p className="text-white text- italic">
            Can’t find it? Don’t worry. Just because it’s not here, doesn’t mean we can’t do it.
            <br />
            WhatsApp us on +91 8077034423
            <br />
            <span className="uppercase font-semibold">We are here 24x7.</span>
          </p>
          <button className="mt-6 bg-pink-700 rounded-lg hover:bg-pink-800 cursor-pointer text-white text-lg font-semibold py-2 px-4 ">
            CONTACT US
          </button>
        </div>
      </section>
    );
  };
  
  export default ContactUsSection;