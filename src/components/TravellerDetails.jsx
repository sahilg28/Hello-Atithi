import { useState } from 'react';
import fb from '../assets/pink_fb.webp';
import ig from '../assets/pink_ig.webp';
import pinterest from '../assets/pink_pinterest.webp';
import comingSoonImage from '../assets/Coming-soon-banner.webp';

const INDIAN_STATES_AND_UTS = [
  { region: 'North', states: ['Jammu and Kashmir', 'Himachal Pradesh', 'Punjab', 'Haryana', 'Uttarakhand', 'Delhi'] },
  { region: 'South', states: ['Kerala', 'Tamil Nadu', 'Karnataka', 'Andhra Pradesh', 'Telangana', 'Puducherry'] },
  { region: 'East', states: ['West Bengal', 'Odisha', 'Bihar', 'Jharkhand', 'Assam', 'Sikkim'] },
  { region: 'West', states: ['Maharashtra', 'Gujarat', 'Rajasthan', 'Goa'] },
  { region: 'Central', states: ['Madhya Pradesh', 'Chhattisgarh'] },
  { region: 'Union Territories', states: ['Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Ladakh', 'Lakshadweep'] }
];

const TripBookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    country: '',
    email: '',
    destinations: [],
    travelMonth: '',
    travelYear: '',
    planType: '',
    duration: '',
    comments: ''
  });

  const [planCharges, setPlanCharges] = useState(0);

  const handlePlanSelect = (type) => {
    setFormData({ ...formData, planType: type });
    calculatePlanCharges(formData.duration, type);
  };

  const calculatePlanCharges = (days, planType) => {
    const planPrices = { 'Solo': 5, 'Couple': 9, 'Group (up to 4)': 15 };
    if (days && planType) {
      const charges = parseInt(days) * planPrices[planType];
      setPlanCharges(isNaN(charges) ? 0 : charges);
    }
  };

  const handleDurationChange = (days) => {
    setFormData({ ...formData, duration: days });
    calculatePlanCharges(days, formData.planType);
  };

  const handleDestinationChange = (selectedState) => {
    const updatedDestinations = formData.destinations.includes(selectedState)
      ? formData.destinations.filter(dest => dest !== selectedState)
      : [...formData.destinations, selectedState];
    
    setFormData({ ...formData, destinations: updatedDestinations });
  };

  const handleSubmit = (payNow = false) => {
    console.log('Form submitted with payment option:', payNow);
    console.log('Form data:', formData);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      <div className="bg-white rounded-2xl shadow-lg shadow-pink-300 p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-50/50 to-transparent"></div>
        <div className="relative">
          <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-pink-700 pb-4 mb-6">TRAVELLER DETAILS</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-lg text-black mb-2">Your name</label>
              <input
                type="text"
                placeholder="Full name"
                className="w-full px-4 py-2 border border-pink-700 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-800"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-lg text-black mb-2">Your country</label>
              <input
                type="text"
                placeholder="Country name"
                className="w-full px-4 py-2 border border-pink-700 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-800"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-lg text-black mb-2">Email</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full px-4 py-2 border border-pink-700 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-800"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg shadow-pink-300 p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-50/50 to-transparent"></div>
        <div className="relative">
          <h2 className="text-3xl font-bold text-black border-b-2 border-pink-700 pb-4 mb-6">JOURNEY DETAILS</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-lg text-black mb-2">Where are you going? [Can Select Multiple States]</label>
              <div className="w-full border border-pink-700 rounded-md">
                {INDIAN_STATES_AND_UTS.map((region) => (
                  <div key={region.region} className="p-2 border-b border-pink-200">
                    <div className="font-bold text-pink-700 mb-2">{region.region}</div>
                    <div className="grid grid-cols-3 gap-2">
                      {region.states.map((state) => (
                        <label key={state} className="inline-flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox text-pink-700"
                            checked={formData.destinations.includes(state)}
                            onChange={() => handleDestinationChange(state)}
                          />
                          <span className="ml-2">{state}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-lg text-black mb-2">When are you going?</label>
              <div className="grid grid-cols-2 gap-4">
                <select
                  className="w-full px-4 py-2 border border-pink-700 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-800 appearance-none bg-white"
                  value={formData.travelMonth}
                  onChange={(e) => setFormData({ ...formData, travelMonth: e.target.value })}
                >
                  <option value="">Select a month</option>
                  {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(month => (
                    <option key={month} value={month.toLowerCase()}>{month}</option>
                  ))}
                </select>
                <select
                  className="w-full px-4 py-2 border border-pink-700 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-800 appearance-none bg-white"
                  value={formData.travelYear}
                  onChange={(e) => setFormData({ ...formData, travelYear: e.target.value })}
                >
                  <option value="">Select a year</option>
                  {Array.from({ length: 3 }, (_, i) => new Date().getFullYear() + i).map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 space-y-2">
              <h3 className="text-xl font-semibold mb-2">Select your plan</h3>
              <p className="text-md text-black">This plan offers you the ultimate solution for a stress-free and safe journey throughout India.</p>
              <p className="text-md font-medium text-pink-700">Pay only for your trip days in India</p>
              
              <div className="grid grid-cols-3 gap-6">
                {[
                  { type: 'Solo', price: 5, icon: '👤' },
                  { type: 'Couple', price: 9, icon: '👥' },
                  { type: 'Group (up to 4)', price: 15, icon: '👥👥' }
                ].map((plan) => (
                  <div
                    key={plan.type}
                    className={`p-4 rounded-xl text-center cursor-pointer transition-all ${
                      formData.planType === plan.type 
                        ? 'bg-pink-50 border-2 border-pink-800' 
                        : 'border border-pink-700'
                    }`}
                    onClick={() => handlePlanSelect(plan.type)}
                  >
                    <div className="text-4xl mb-3">{plan.icon}</div>
                    <div className="font-medium text-xl mb-2">{plan.type}</div>
                    <div className="text-pink-700 text-4xl font-bold mb-3">${plan.price}<span className="text-xl">/day</span></div>
                    <button
                      className={`w-full py-1 rounded-full text-md font-medium transition-colors ${
                        formData.planType === plan.type
                          ? 'bg-pink-700 text-white'
                          : 'border border-pink-800 text-pink-800 hover:bg-pink-700 hover:text-white'
                      }`}
                    >
                      {formData.planType === plan.type ? 'Selected' : 'Select'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-lg text-black mb-2">How long for?</label>
              <select
                className="w-full px-4 py-2 border border-pink-700 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-800 appearance-none bg-white"
                value={formData.duration}
                onChange={(e) => handleDurationChange(e.target.value)}
              >
                <option value="">Number of days in India</option>
                {Array.from({ length: 180 }, (_, i) => i + 1).map(days => (
                  <option key={days} value={days}>{days} day{days > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>

            <div className="text-2xl font-bold">
              Plan charges
              <span className="text-pink-700  ml-2">${planCharges}</span>
            </div>

            <div>
              <label className="block text-lg text-black mb-2">Any other comments?</label>
              <textarea
                className="w-full px-4 py-2 border border-pink-700 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-800"
                rows="4"
                placeholder="Any differently abled or elderly traveler, any do's or don'ts, any specific requirement"
                value={formData.comments}
                onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-20 mt-12 mb-10">
        <button
          onClick={() => handleSubmit(false)}
          className="px-6 py-4 border-3 border-pink-700 text-pink-700  hover:bg-pink-200 transition-colors font-bold "
        >
          SUBMIT & PAY ON ARRIVAL
        </button>
        <button
          onClick={() => handleSubmit(true)}
          className="px-6 py-4 border-3 border-pink-700 text-pink-700 hover:bg-pink-200 transition-colors font-bold"
        >
          SUBMIT & PAY NOW
        </button>
      </div>

      <hr className="border-t-4 border-pink-700 w-full mb-8" />

      <div className="text-center text-lg  py-8 border-2 border-pink-700 rounded-lg mt-8">
        <p className="text-black ">Can&apos;t find it? Don&apos;t worry. Just because it&apos;s not here, doesn&apos;t mean we can&apos;t do it.</p>
        <p className="text-black font-medium my-1">WhatsApp us on +91 8077034423</p>
        <p className="text-black mb-4">WE ARE HERE 24x7</p>
        <button className="px-6 py-2 bg-pink-700 text-white text-xl rounded hover:bg-pink-800 transition-colors font-medium">
          CONTACT US
        </button>
      </div>

      <div className='px-10 w-full flex justify-center'>
          <img src={comingSoonImage} alt="Coming Soon" className="w-full max-w-7xl h-auto mx-auto" />
      </div>

      <div className="text-center py-4 space-y-4">
        <h2 className="text-3xl font-semibold text-black">WANT TO EXPERIENCE REAL INDIA?</h2>
        <p className="text-black px-12 text-lg max-w-2xl mx-auto">
          Follow us to receive our latest destination inspiration, as well as our travel experience for the year to come.
        </p>
        
        <div className="mt-4">
          <p className="text-lg font-medium mb-4">FOLLOW US ON</p>
          <div className="flex justify-center items-center space-x-6">
            <a href="https://www.facebook.com/helloatithiindia" target="_blank" rel="noopener noreferrer">
              <img src={fb} alt="Facebook" className="h-12 hover:opacity-80 transition-opacity" />
            </a>
            <a href="https://www.instagram.com/hello_atithi" target="_blank" rel="noopener noreferrer">
              <img src={ig} alt="Instagram" className="h-12 hover:opacity-80 transition-opacity" />
            </a>
            <a href="https://in.pinterest.com/helloatithi/" target="_blank" rel="noopener noreferrer">
              <img src={pinterest} alt="Pinterest" className="h-12 hover:opacity-80 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripBookingForm;