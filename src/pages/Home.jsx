import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import HeroSection2 from '../components/HeroSection2'
import Challenges from '../components/Challenges'
import WhatWeDo from '../components/What_WeDo'
import ScrollingTestimonials from '../components/Testimonials'
import IndiaMustKnow from '../components/IndiaMustKnow'
import ContactUsSection from '../components/ContactUsSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen ">
      <Header />
      <HeroSection />
      <HeroSection2 />
      <Challenges />
      <WhatWeDo />
      <ScrollingTestimonials />
      <IndiaMustKnow />
      <ContactUsSection />
      <Footer />
    </div>
  )
}

export default Home
