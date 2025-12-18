import React, { useState, useEffect } from 'react';
import { Sparkles, Home, Building2, Droplet, Bug, Phone, Mail, MapPin, Clock, Award, Users, CheckCircle2, ArrowRight } from 'lucide-react';

export default function PCSCareWebsite() {
  const [activeService, setActiveService] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Home Cleaning",
      description: "Professional deep cleaning services for your home with eco-friendly products",
      features: ["Deep cleaning", "Sanitization", "Floor care"]
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Office Cleaning",
      description: "Complete office maintenance and cleaning solutions for professional spaces",
      features: ["Daily cleaning", "Carpet care", "Furniture polish"]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Marble Polish",
      description: "Expert marble polishing and restoration using advanced machinery",
      features: ["Polish & shine", "Stain removal", "Protection coating"]
    },
    {
      icon: <Droplet className="w-8 h-8" />,
      title: "Sofa & Carpet",
      description: "Specialized cleaning for upholstery, sofas, and carpets",
      features: ["Steam cleaning", "Stain treatment", "Odor removal"]
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: "Pest Control",
      description: "Safe and effective pest control solutions for homes and offices",
      features: ["Inspection", "Treatment", "Prevention"]
    }
  ];

  const testimonials = [
    {
      text: "Very good service and attitude by the staff of PCS Care. Work wise, so professional and more keen on customer satisfaction.",
      author: "Satisfied Customer"
    },
    {
      text: "On-time service, completely satisfied with the excellent work and even within the budget. Staff was professional, polite, and hygienic.",
      author: "Happy Client"
    },
    {
      text: "Done intensive cleaning services today. I was really impressed with PCS staff, who followed all COVID protocols.",
      author: "Office Manager"
    }
  ];

  const cities = ["Hyderabad", "Pune", "Bengaluru", "Chennai", "Mumbai"];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'DM Sans', sans-serif;
        }

        .doodle-svg {
          position: absolute;
          opacity: 0.08;
          pointer-events: none;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes drawLine {
          from {
            stroke-dashoffset: 100;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }

        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(255, 107, 0, 0.2);
        }

        .underline-effect {
          position: relative;
          display: inline-block;
        }

        .underline-effect::after {
          content: '';
          position: absolute;
          width: 0;
          height: 3px;
          bottom: -5px;
          left: 0;
          background: linear-gradient(90deg, #ff6b00, #ff8c00);
          transition: width 0.4s ease;
        }

        .underline-effect:hover::after {
          width: 100%;
        }

        .service-card {
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,107,0,0.1), transparent);
          transition: left 0.5s ease;
        }

        .service-card:hover::before {
          left: 100%;
        }

        .sparkle {
          animation: float 3s ease-in-out infinite;
        }

        .btn-primary {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .btn-primary:hover::before {
          width: 300px;
          height: 300px;
        }

        .doodle-circle {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
        }

        .animate-draw {
          animation: drawLine 2s ease-out forwards;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .contact-link {
          transition: all 0.3s ease;
        }

        .contact-link:hover {
          color: #ff6b00;
          transform: translateX(5px);
        }

        .nav-link {
          position: relative;
          display: inline-block;
          padding: 0.5rem 0;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background: #ff6b00;
          transition: width 0.4s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link:hover {
          color: #ff6b00;
        }

        .navbar {
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      {/* Navigation Bar */}
      <nav className={`navbar fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'scrolled' : 'bg-white/80 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative w-16 h-16">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Outer circle with orange border */}
                  <circle cx="50" cy="50" r="48" fill="white" stroke="#ff6b00" strokeWidth="2"/>
                  
                  {/* "SINCE 2005" text curved on top */}
                  <path id="topCurve" d="M 15,50 A 35,35 0 0,1 85,50" fill="none"/>
                  <text fontSize="6" fontWeight="bold" fill="#000">
                    <textPath href="#topCurve" startOffset="50%" textAnchor="middle">
                      SINCE 2005
                    </textPath>
                  </text>
                  
                  {/* PCS text */}
                  <text x="50" y="45" fontSize="24" fontWeight="black" fill="#ff6b00" textAnchor="middle" fontFamily="Arial Black, sans-serif">
                    PCS
                  </text>
                  
                  {/* CARE text */}
                  <text x="50" y="62" fontSize="16" fontWeight="bold" fill="#000" textAnchor="middle" fontFamily="Arial, sans-serif">
                    CARE
                  </text>
                  
                  {/* "PROFESSIONAL CLEANING SERVICES" curved on bottom */}
                  <path id="bottomCurve" d="M 15,50 A 35,35 0 0,0 85,50" fill="none"/>
                  <text fontSize="4.5" fontWeight="600" fill="#000">
                    <textPath href="#bottomCurve" startOffset="50%" textAnchor="middle">
                      PROFESSIONAL CLEANING SERVICES
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="nav-link font-semibold text-gray-800">
                Home
              </a>
              <a href="#about" className="nav-link font-semibold text-gray-800">
                About Us
              </a>
              <div className="relative group">
                <a href="#services" className="nav-link font-semibold text-gray-800 flex items-center gap-1">
                  Corporate Services
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M6 8L2 4h8L6 8z"/>
                  </svg>
                </a>
              </div>
              <div className="relative group">
                <a href="#services" className="nav-link font-semibold text-gray-800 flex items-center gap-1">
                  Home Services
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M6 8L2 4h8L6 8z"/>
                  </svg>
                </a>
              </div>
              <a href="#contact" className="nav-link font-semibold text-gray-800">
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray-800">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Doodled SVG Background Elements */}
      <svg className="doodle-svg" style={{ top: '10%', left: '5%' }} width="200" height="200" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" fill="none" stroke="#ff6b00" strokeWidth="3" strokeDasharray="5,5" className="doodle-circle animate-draw" />
      </svg>
      <svg className="doodle-svg sparkle" style={{ top: '30%', right: '10%' }} width="100" height="100" viewBox="0 0 100 100">
        <path d="M50,10 L55,40 L85,45 L60,60 L70,90 L50,75 L30,90 L40,60 L15,45 L45,40 Z" fill="#ff6b00" opacity="0.3" />
      </svg>
      <svg className="doodle-svg" style={{ bottom: '20%', left: '15%' }} width="150" height="150" viewBox="0 0 150 150">
        <rect x="30" y="30" width="90" height="90" fill="none" stroke="#000000" strokeWidth="2" transform="rotate(15 75 75)" opacity="0.3" />
      </svg>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-gray-50"></div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="fade-in-up stagger-1 opacity-0">
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                PCS Care
              </span>
            </h1>
          </div>
          
          <div className="fade-in-up stagger-2 opacity-0">
            <p className="text-2xl md:text-3xl mb-8 text-gray-900 font-medium">
              Professional Cleaning & Maintenance Services
            </p>
          </div>
          
          <div className="fade-in-up stagger-3 opacity-0">
            <p className="text-lg md:text-xl mb-12 text-gray-700 max-w-3xl mx-auto leading-relaxed">
              State-of-the-art cleaning solutions for homes and offices using eco-friendly, bio-degradable chemicals. 
              <span className="font-semibold text-orange-600"> 19+ years of excellence</span> in professional care.
            </p>
          </div>
          
          <div className="fade-in-up stagger-4 opacity-0 flex flex-wrap gap-4 justify-center">
            <button className="btn-primary px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all">
              Book Now <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-black text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all border-2 border-black hover:bg-gray-900">
              Schedule Site Visit
            </button>
          </div>

          <div className="fade-in-up stagger-5 opacity-0 mt-16 flex flex-wrap justify-center gap-8">
            {[
              { icon: <Award />, text: "19+ Years" },
              { icon: <Users />, text: "10,000+ Clients" },
              { icon: <CheckCircle2 />, text: "Eco-Friendly" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-800">
                <div className="text-orange-600">{item.icon}</div>
                <span className="font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M15 5 L15 25 M8 18 L15 25 L22 18" stroke="#ff6b00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-24 px-6 bg-gray-50 ${isVisible['services'] ? 'fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our <span className="text-orange-600">Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Comprehensive cleaning and maintenance solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-card hover-lift bg-white rounded-2xl p-8 shadow-lg cursor-pointer border-2 border-transparent hover:border-orange-500 transition-all ${isVisible['services'] ? 'scale-in stagger-' + (index + 1) : 'opacity-0'}`}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className={`inline-block p-4 rounded-xl mb-6 bg-gradient-to-br from-orange-100 to-orange-50 text-orange-600 transform transition-transform ${activeService === index ? 'scale-110 rotate-6' : ''}`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900 underline-effect">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className={`mt-6 pt-6 border-t border-gray-200 transform transition-all ${activeService === index ? 'translate-x-2' : ''}`}>
                  <span className="text-orange-600 font-semibold inline-flex items-center gap-2">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section id="about" className={`py-24 px-6 bg-white ${isVisible['about'] ? 'fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
            We Serve <span className="text-orange-600">Across India</span>
          </h2>
          <p className="text-xl text-gray-700 mb-12">
            Available in major cities with professional teams ready to serve you
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {cities.map((city, index) => (
              <div
                key={index}
                className={`hover-lift bg-white px-8 py-4 rounded-full shadow-lg font-semibold text-lg text-gray-800 border-2 border-orange-200 hover:border-orange-600 hover:bg-orange-50 transition-all ${isVisible['about'] ? 'scale-in stagger-' + (index + 1) : 'opacity-0'}`}
              >
                <MapPin className="inline-block w-5 h-5 mr-2 text-orange-600" />
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={`py-24 px-6 bg-gray-50 ${isVisible['testimonials'] ? 'fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              What Our <span className="text-orange-600">Clients Say</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`hover-lift bg-white rounded-2xl p-8 shadow-lg border-l-4 border-orange-600 ${isVisible['testimonials'] ? 'scale-in stagger-' + (index + 1) : 'opacity-0'}`}
              >
                <svg className="w-12 h-12 text-orange-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <div className="flex gap-1 text-orange-500">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-24 px-6 bg-gradient-to-br from-gray-900 to-black text-white ${isVisible['contact'] ? 'fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Get In <span className="text-orange-500">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">
              Ready to experience professional cleaning services? Contact us today!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className={`hover-lift bg-white/10 backdrop-blur-sm rounded-2xl p-6 ${isVisible['contact'] ? 'scale-in stagger-1' : 'opacity-0'}`}>
                <a href="tel:+919876543210" className="contact-link flex items-start gap-4">
                  <div className="p-3 bg-orange-600 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <p className="text-gray-300 underline-effect">+91 98765 43210</p>
                    <p className="text-gray-300 underline-effect">+91 98765 43211</p>
                  </div>
                </a>
              </div>

              <div className={`hover-lift bg-white/10 backdrop-blur-sm rounded-2xl p-6 ${isVisible['contact'] ? 'scale-in stagger-2' : 'opacity-0'}`}>
                <a href="mailto:info@pcscare.in" className="contact-link flex items-start gap-4">
                  <div className="p-3 bg-orange-600 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-300 underline-effect">info@pcscare.in</p>
                    <p className="text-gray-300 underline-effect">support@pcscare.in</p>
                  </div>
                </a>
              </div>

              <div className={`hover-lift bg-white/10 backdrop-blur-sm rounded-2xl p-6 ${isVisible['contact'] ? 'scale-in stagger-3' : 'opacity-0'}`}>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-600 rounded-lg">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Working Hours</h3>
                    <p className="text-gray-300">Monday - Saturday: 8:00 AM - 8:00 PM</p>
                    <p className="text-gray-300">Sunday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`bg-white rounded-2xl p-8 shadow-2xl ${isVisible['contact'] ? 'scale-in stagger-4' : 'opacity-0'}`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-600 focus:outline-none transition-colors text-gray-800"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-600 focus:outline-none transition-colors text-gray-800"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-600 focus:outline-none transition-colors text-gray-800"
                />
                <select className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-600 focus:outline-none transition-colors text-gray-800">
                  <option>Select Service</option>
                  {services.map((service, i) => (
                    <option key={i}>{service.title}</option>
                  ))}
                </select>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-600 focus:outline-none transition-colors resize-none text-gray-800"
                ></textarea>
                <button
                  type="submit"
                  className="btn-primary w-full px-6 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-300 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-black text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              PCS Care
            </h3>
            <p className="text-orange-500">Professional Cleaning & Maintenance Services</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {cities.map((city, i) => (
              <span key={i} className="text-sm">{city}</span>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-sm">
              © 2024 PCS Care. All rights reserved. | 19+ Years of Excellence in Professional Cleaning
            </p>
            <p className="text-xs mt-2 text-gray-500">
              Eco-friendly • Bio-degradable • Professional
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
