import whatWedoIndiaSafe from '../assets/whatWedo-IndiaSafe.png';
import whatWedoSaves from '../assets/whatWedo-saves.png';
import whatWedoSupport from '../assets/whatWedo-support.png';

const WhatWeDo = () => {
    return (
        <section className="text-center py-14 px-12">
            <h2 className="text-sky-600 text-3xl font-bold mb-14 uppercase">What We Do</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="flex flex-col items-center text-center">
                    <img src={whatWedoIndiaSafe} alt="Makes India easy for you" className="w-52 h-auto mb-4" />
                    <h3 className="text-2xl font-bold text-black">MAKES INDIA EASY FOR YOU</h3>
                    <p className="text-black mt-6 px-10 text-lg ">
                        We simplify the experience at every step. From understanding culture to everyday 
                        issues in India like making payments or communicating with locals, explore India 
                        with confidence. Experience the country without the usual stress or confusion.
                    </p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <img src={whatWedoSaves} alt="Saves You From Scams" className="w-54 h-auto mb-4" />
                    <h3 className="text-2xl font-bold text-black">SAVES YOU FROM SCAMS</h3>
                    <p className="text-black mt-6 px-10 text-lg">
                        We make tourist scams rare, as staying informed and prepared can make all the difference. 
                        Whether it is travel, shopping, or interacting with locals, feel secure knowing 
                        you are safeguarded from the most common traps. With us, spot potential risks before they occur.
                    </p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <img src={whatWedoSupport} alt="Support at Every Step" className="w-52 h-auto mb-4" />
                    <h3 className="text-2xl font-bold text-black">SUPPORT AT EVERY STEP</h3>
                    <p className="text-black mt-6 px-10 text-lg">
                        Traveling to India comes with uncertainties, but dedicated support is available 24/7 to assist you. 
                        Whether it is dealing with an emergency or handling unexpected issues, rely on continuous support. 
                        The goal is to ensure that you feel supported and empowered in India.
                    </p>
                </div>
            </div>

            <div className="mt-10">
                <button className="bg-pink-700 text-white text-lg font-semibold py-4 px-4  hover:bg-pink-800 transition">
                    HOW THIS WORKS
                </button>
            </div>
        </section>
    );
};

export default WhatWeDo;
