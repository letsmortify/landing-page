import React, { useState, useEffect } from "react";
import "@/App.css";
import { Star, MapPin, Phone, Clock, ChevronRight, Award, Menu, X, ExternalLink } from "lucide-react";
import { Button } from "./components/ui/button";

// Constants
const BOOKING_URL = "https://url-shortener.me/DI2X";
const MENU_URL = "https://drive.google.com/file/d/1rO-cVM7lLU6qjKJ5xtufxVW9vN2Li3oI/view?usp=sharing";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Sankalp+Restaurant+Dehradun+GMS+Road";

const LOGO_URL = "https://sankalprestaurants.com/wp-content/uploads/2021/12/Sankalp_thetasteofindia.svg";

const SIGNATURE_DISHES = [
  {
    url: "https://sankalprestaurants.com/wp-content/uploads/2021/08/Sankalp-Restauratn-Website-Signature-Dish-01-1024x819.jpg",
    title: "Signature Dosa",
    desc: "Crispy, golden perfection"
  },
  {
    url: "https://sankalprestaurants.com/wp-content/uploads/2023/08/Chaos-Dosa-1024x683.jpg",
    title: "Chaos Dosa",
    desc: "A fusion of flavors"
  },
  {
    url: "https://sankalprestaurants.com/wp-content/uploads/2023/08/Channai-Pizza-Utthpa-1024x683.jpg",
    title: "Chennai Pizza Uthappam",
    desc: "Modern twist on classic"
  },
  {
    url: "https://sankalprestaurants.com/wp-content/uploads/2023/08/Butter-Uttapam-1024x683.jpg",
    title: "Butter Uthappam",
    desc: "Soft, fluffy, rich"
  }
];

const TESTIMONIALS = [
  {
    name: "Ghumakkad Foodie",
    role: "Local Guide · 42 reviews · 185 photos",
    rating: 5,
    text: "Sankalp Restaurant: one of the most famous south indian restaurant chain in India has now opened its new Restaurant in Dehradun. They serve and amazing range of South Indian food that includes various different kinds of Dosas, Idli and Uttapam. Apart from this they also serve amazing filter coffee and sizzling Brownie.",
    scores: { food: 5, service: 5, atmosphere: 5 }
  },
  {
    name: "Manoj Madhavan",
    role: "Local Guide · 257 reviews · 2008 photos",
    rating: 4,
    text: "Sankalp, a name synonymous with exceptional South Indian cuisine, has earned a spot in the Guinness World Records for preparing the longest dosa—an astounding 30 feet by their chef in Mumbai. The Dehradun branch upholds this legacy with an excellent dining experience. Super crispy dosas, soft fluffy idlis, four varieties of chutney, excellent Kesari Halwa, rich aromatic filter coffee.",
    scores: null
  }
];

const AWARDS = [
  "Guinness World Record Holder",
  "Times Food Award Winner",
  "World's Most Awarded South Indian Brand",
  "Since 1980 - 45+ Years of Excellence"
];

// Components
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar py-4 px-6 ${scrolled ? "scrolled" : "bg-transparent"}`} data-testid="navbar">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center" data-testid="logo-link">
          <img 
            src={LOGO_URL} 
            alt="Sankalp Restaurant" 
            className={`h-12 md:h-14 ${scrolled ? "" : "brightness-0 invert"}`}
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#dishes" 
            className={`font-medium transition-colors ${scrolled ? "text-gray-700 hover:text-[#E35F21]" : "text-white/90 hover:text-white"}`}
            data-testid="nav-dishes"
          >
            Our Dishes
          </a>
          <a 
            href="#testimonials" 
            className={`font-medium transition-colors ${scrolled ? "text-gray-700 hover:text-[#E35F21]" : "text-white/90 hover:text-white"}`}
            data-testid="nav-testimonials"
          >
            Reviews
          </a>
          <a 
            href="#location" 
            className={`font-medium transition-colors ${scrolled ? "text-gray-700 hover:text-[#E35F21]" : "text-white/90 hover:text-white"}`}
            data-testid="nav-location"
          >
            Visit Us
          </a>
          <a 
            href={`tel:+919557135858`}
            className={`flex items-center gap-2 font-medium ${scrolled ? "text-gray-700" : "text-white"}`}
            data-testid="nav-phone"
          >
            <Phone className="w-4 h-4" />
            +91-9557135858
          </a>
          <Button
            asChild
            className="btn-primary rounded-full px-6 py-5 font-semibold"
            data-testid="nav-book-btn"
          >
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book a Table
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden ${scrolled ? "text-gray-700" : "text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="mobile-menu-btn"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-6 px-6 animate-fade-in-up" data-testid="mobile-menu">
          <div className="flex flex-col gap-4">
            <a href="#dishes" className="text-gray-700 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Our Dishes</a>
            <a href="#testimonials" className="text-gray-700 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
            <a href="#location" className="text-gray-700 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Visit Us</a>
            <a href={`tel:+919557135858`} className="flex items-center gap-2 text-gray-700 font-medium py-2">
              <Phone className="w-4 h-4" />
              +91-9557135858
            </a>
            <Button asChild className="btn-primary rounded-full w-full py-5 font-semibold mt-2">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book a Table</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="hero-section" data-testid="hero-section">
      <div 
        className="hero-bg"
        style={{
          backgroundImage: `url(https://sankalprestaurants.com/wp-content/uploads/2021/08/Sankalp-Restauratn-Website-Signature-Dish-01-1024x819.jpg)`
        }}
      >
        <div className="hero-overlay absolute inset-0"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <span className="font-italiana text-[#D4AF37] text-lg md:text-xl tracking-[0.2em] uppercase mb-4 block animate-fade-in-up">
          Dehradun's Finest South Indian Experience
        </span>
        
        <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6 animate-fade-in-up stagger-1">
          Dehradun's Award Winning Choice for Family Get Togethers
        </h1>
        
        <p className="text-white/90 text-base md:text-lg max-w-3xl mx-auto mb-10 animate-fade-in-up stagger-2">
          Experience the authentic taste of world's most awarded South Indian brand. 
          <span className="text-[#D4AF37] font-semibold"> Guinness World Record Holder </span> 
          & <span className="text-[#D4AF37] font-semibold">Times Food Award Winner</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-3">
          <Button
            asChild
            className="btn-primary rounded-full px-10 py-6 text-lg font-semibold"
            data-testid="hero-book-btn"
          >
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book Your Table Now
              <ChevronRight className="w-5 h-5 ml-2 inline" />
            </a>
          </Button>
          
          <Button
            asChild
            variant="outline"
            className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white rounded-full px-10 py-6 text-lg font-medium bg-transparent"
            data-testid="hero-menu-btn"
          >
            <a href={MENU_URL} target="_blank" rel="noopener noreferrer">
              View Our Menu
              <ExternalLink className="w-4 h-4 ml-2 inline" />
            </a>
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-6 mt-12 animate-fade-in-up stagger-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-white/90 text-sm">9:30 AM - 11:00 PM</span>
          </div>
          <div className="w-px h-6 bg-white/30"></div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-white/90 text-sm">GMS Road, Dehradun</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const AwardsMarquee = () => {
  return (
    <section className="bg-[#1A1A1A] py-5 overflow-hidden" data-testid="awards-marquee">
      <div className="marquee-container">
        <div className="marquee-content">
          {[...AWARDS, ...AWARDS, ...AWARDS].map((award, index) => (
            <div key={index} className="flex items-center mx-8">
              <Award className="w-5 h-5 text-[#D4AF37] mr-3" />
              <span className="text-[#D4AF37] font-medium tracking-[0.15em] uppercase text-sm whitespace-nowrap">
                {award}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SignatureDishes = () => {
  return (
    <section id="dishes" className="section-padding bg-[#FAFAF5]" data-testid="dishes-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-italiana text-[#D4AF37] text-base tracking-[0.2em] uppercase mb-3 block">
            Culinary Excellence
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] font-bold">
            Our Signature Dishes
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SIGNATURE_DISHES.map((dish, index) => (
            <div 
              key={index} 
              className="dish-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`dish-card-${index}`}
            >
              <div className="overflow-hidden">
                <img 
                  src={dish.url} 
                  alt={dish.title}
                  className="dish-image"
                  loading="lazy"
                />
              </div>
              <div className="dish-overlay">
                <h3 className="font-playfair text-xl font-semibold mb-1">{dish.title}</h3>
                <p className="text-white/80 text-sm">{dish.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            asChild
            className="btn-primary rounded-full px-8 py-5 font-semibold"
            data-testid="dishes-menu-btn"
          >
            <a href={MENU_URL} target="_blank" rel="noopener noreferrer">
              Explore Full Menu
              <ExternalLink className="w-4 h-4 ml-2 inline" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-white" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-italiana text-[#D4AF37] text-base tracking-[0.2em] uppercase mb-3 block">
            Happy Customers
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] font-bold">
            What Our Guests Say
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card"
              data-testid={`testimonial-card-${index}`}
            >
              <div className="flex items-start gap-4 mb-4 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E35F21] to-[#FF8C42] flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-[#1A1A1A]">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <StarRating rating={testimonial.rating} />
                    <span className="text-sm text-gray-400">
                      {testimonial.rating === 5 ? "3 years ago" : "a year ago"}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-[#4A4A4A] leading-relaxed mb-4">
                {testimonial.text}
              </p>
              
              {testimonial.scores && (
                <div className="bg-[#F5F5F0] rounded-lg px-4 py-3 inline-flex gap-6 text-sm">
                  <span><strong>Food:</strong> {testimonial.scores.food}/5</span>
                  <span><strong>Service:</strong> {testimonial.scores.service}/5</span>
                  <span><strong>Atmosphere:</strong> {testimonial.scores.atmosphere}/5</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MenuCTA = () => {
  return (
    <section className="menu-section py-20 px-6" data-testid="menu-cta-section">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6">
          Discover 180+ Delicious Varieties
        </h2>
        <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
          From classic Masala Dosa to innovative fusion dishes, explore our extensive menu featuring authentic South Indian delicacies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-white text-[#E35F21] hover:bg-gray-100 rounded-full px-10 py-6 text-lg font-semibold transition-all hover:scale-105"
            data-testid="menu-cta-view-btn"
          >
            <a href={MENU_URL} target="_blank" rel="noopener noreferrer">
              View Complete Menu
              <ExternalLink className="w-5 h-5 ml-2 inline" />
            </a>
          </Button>
          <Button
            asChild
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#D4AF37] rounded-full px-10 py-6 text-lg font-medium transition-all"
            data-testid="menu-cta-book-btn"
          >
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Reserve Your Table
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

const LocationSection = () => {
  return (
    <section id="location" className="section-padding bg-[#FAFAF5]" data-testid="location-section">
      <div className="max-w-7xl mx-auto">
        <div className="location-card p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="relative z-10">
              <span className="font-italiana text-[#D4AF37] text-base tracking-[0.2em] uppercase mb-3 block">
                Visit Us
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl text-white font-bold mb-8">
                Sankalp - Taste of South
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#E35F21]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#E35F21]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Address</h4>
                    <p className="text-gray-400 leading-relaxed">
                      Reliance Trends Complex, Behind Hotel Kamla Palace,<br />
                      GMS Road, Dehradun - 248001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Contact</h4>
                    <a 
                      href="tel:+919557135858" 
                      className="text-[#D4AF37] hover:text-[#F3E5AB] transition-colors text-lg font-medium"
                      data-testid="location-phone"
                    >
                      +91-9557135858
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4F7942]/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#4F7942]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Opening Hours</h4>
                    <p className="text-gray-400">
                      <span className="text-white">All Days:</span> 9:30 AM - 11:00 PM
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Button
                  asChild
                  className="btn-primary rounded-full px-8 py-5 font-semibold"
                  data-testid="location-book-btn"
                >
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    Book Your Table
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white rounded-full px-8 py-5 font-medium bg-transparent"
                  data-testid="location-directions-btn"
                >
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                    <MapPin className="w-4 h-4 mr-2 inline" />
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden h-full min-h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.2!2d78.0!3d30.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE4JzAwLjAiTiA3OMKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '300px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sankalp Restaurant Dehradun Location"
                  data-testid="location-map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer py-12 px-6" data-testid="footer">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img 
              src={LOGO_URL} 
              alt="Sankalp Restaurant" 
              className="h-10 brightness-0 invert"
            />
            <span className="text-gray-400 text-sm">
              Taste of South - Dehradun
            </span>
          </div>
          
          <div className="flex items-center gap-6 text-gray-400 text-sm">
            <span>© 2026 Sankalp Restaurants. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://sankalprestaurants.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
              data-testid="footer-website-link"
            >
              www.sankalprestaurants.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingOfferButton = () => {
  const [dismissed, setDismissed] = useState(false);
  
  if (dismissed) return null;
  
  return (
    <div className="floating-offer" data-testid="floating-offer">
      <a 
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center gap-3 bg-gradient-to-r from-[#E35F21] to-[#FF8C42] text-white px-6 py-4 rounded-full shadow-2xl hover:scale-105 transition-transform"
      >
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setDismissed(true);
          }}
          className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 shadow-lg"
          data-testid="floating-offer-close"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="text-left">
          <div className="font-bold text-lg">20% OFF</div>
          <div className="text-xs text-white/90">On Prior Bookings Only!</div>
        </div>
        <ChevronRight className="w-5 h-5" />
      </a>
    </div>
  );
};

function App() {
  return (
    <div className="App" data-testid="app-container">
      <Navbar />
      <HeroSection />
      <AwardsMarquee />
      <SignatureDishes />
      <Testimonials />
      <MenuCTA />
      <LocationSection />
      <Footer />
      <FloatingOfferButton />
    </div>
  );
}

export default App;
