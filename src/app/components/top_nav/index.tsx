'use client';
import Image from "next/image";
import React, { useRef, useState } from "react";
import { FaInstagram, FaLinkedin, FaEnvelope, FaFacebook, FaMapMarkerAlt, FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";
import { Star } from 'lucide-react';
import DeliverIcon1 from '../../../../public/deliver-1.svg'
import DeliverIcon0 from '../../../../public/deliver-0.svg'
import ServicesIcon from '../../../../public/services-icon.svg'
import WorkIcon from '../../../../public/workIcon.svg'
import BlogIcon from '../../../../public/blogIcon.svg'
import ContactIcon from '../../../../public/contactIcon.svg'
export function TopNav() {
  return (
    <div className="bg-[#002e6d] text-white text-xs md:text-sm px-4 py-2">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-6">
        {/* Email */}
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <Image src="/mail.svg" alt="Mail" width={14} height={14} />
            <span>info@caredirectrecruitment.co.uk</span>
          </div>
          <div className="bg-[#D9D9D9] w-[2.14px] h-[22px]" />
          {/* Phone */}
          <div className="flex items-center gap-2">
            <Image src="/phone-call.svg" alt="Phone" width={14} height={14} />
            <span>01424 715 739</span>
          </div>
        </div>
        {/* Social icons */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-[#03A9F4]">
            <span>Quick Apply</span>
          </div>
          <div className="bg-[#D9D9D9] w-[2.14px] h-[22px]" />

          <div className="flex items-center gap-2 text-[#03A9F4]">
            <span>Quick Care</span>
          </div>
          <div className="bg-[#D9D9D9] w-[2.14px] h-[22px]" />

          <a href="#" aria-label="Facebook">
            <Image src="/facebook.svg" alt="Facebook" width={14} height={14} />
          </a>
          <a href="#" aria-label="Twitter">
            <Image src="/twitter.svg" alt="Twitter" width={14} height={14} />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Image src="/linkedIn.svg" alt="LinkedIn" width={14} height={14} />
          </a>
          <a href="#" aria-label="instagram">
            <Image src="/insta.svg" alt="Instagram" width={14} height={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
export function Navbar({ activePage = 'home' }) {
  const links = [
    { name: 'Home', href: '#', id: 'home' },
    { name: 'About Us', href: '#', id: 'about' },
    { name: 'Our Services', href: '#', id: 'services' },
    { name: 'Career', href: '#', id: 'career' },
    { name: 'Contact', href: '#', id: 'contact' },
  ];

  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={180} height={50} />
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`relative ${activePage === link.id ? 'text-blue-900' : 'hover:text-blue-900'} transition-colors group`}
            >
              {link.name}
              <span className={`absolute left-1/2 -bottom-1 h-0.5 bg-blue-900 transform -translate-x-1/2 transition-all ${activePage === link.id ? 'w-4' : 'w-0 group-hover:w-4'
                }`}></span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
export function Feature() {
  return (
    <div className="w-full h-[600px] relative">
      {/* Main content section */}
      <div className="flex bg-[#EBF5FA] h-[600px]">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
          {/* Text Section */}
          <div className="text-center md:text-left max-w-2xl md:mr-8 ml-[100px]">
            <div className="inline-flex items-center gap-2 bg-[#e6f5ef] text-[#7cb597] px-3 py-1 rounded-full text-xs font-semibold mb-4">
              <Image src="/verified.svg" alt="Verified Icon" width={16} height={16} />
              12 years of trusted care solutions
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-[#002e6d]">
              Quality Care Starts With The Right People!
            </h2>
            <h3 className="text-[#00a6ff] text-2xl md:text-3xl font-extrabold leading-tight mb-4">
              That's Exactly What We Deliver.
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Every nurse and carer is DBS-checked, RGN and RMN-qualified where required, and trained to meet NHS-aligned standards, regulated by the CQC.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <button className="bg-[#002e6d] text-white text-sm px-5 py-2 rounded-full shadow hover:opacity-90">
                Find Trusted Local Care
              </button>
              <button className="border border-[#00a6ff] text-[#00a6ff] text-sm px-5 py-2 rounded-full hover:bg-[#e6f7ff]">
                Staff Your Facility
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center md:justify-end">
            <Image
              src="/user-group.png"
              alt="Care Worker"
              width={640}
              height={500}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Bottom cards section */}
      <div className="absolute -bottom-[70px] left-0 z-10">
        <div className="container px-4 " >
          <div className="ml-[175px] flex h-[187px] border border-[#D9D9D9] rounded-[20px]">
            {/* First Card */}
            <div className="w-[270px] h-full bg-white p-6 rounded-l-[20px]">
              <h4 className="text-[#002e6d] font-bold text-sm mb-2">
                Featured <span className="text-[#00a6ff]">Roles</span>
              </h4>
              <p className="text-sm text-gray-600">
                If you're seeking a career where your work matters, your voice is valued,
                and your skills are nurtured, Care Direct is the place to grow.
              </p>
            </div>

            {/* Second Card */}
            <div
              className="w-[250px] h-full text-white p-6 text-center flex flex-col items-center justify-center"
              style={{
                backgroundColor: '#002e6d',
                backgroundImage: 'url("/bg-1.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <h5 className="font-semibold text-sm mb-2">Registered Nurses</h5>
              <button className="text-sm bg-white text-[#002e6d] px-4 py-1 rounded-full mt-2">View Job →</button>
            </div>

            {/* Third Card */}
            <div
              className="w-[260px] h-full text-white p-6 text-center flex flex-col items-center justify-center"
              style={{
                backgroundColor: '#00a6ff',
                backgroundImage: 'url("/bg-2.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <h5 className="font-semibold text-sm mb-2">Care Workers & Senior Carers</h5>
              <button className="text-sm bg-white text-[#00a6ff] px-4 py-1 rounded-full mt-2">View Job →</button>
            </div>

            {/* Fourth Card */}
            <div
              className="w-[280px] h-full text-white p-6 text-center flex flex-col items-center justify-center rounded-r-[20px]"
              style={{
                backgroundColor: '#003c79',
                backgroundImage: 'url("/bg-3.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <h5 className="font-semibold text-sm mb-2">Join Our Team</h5>
              <button className="text-sm bg-white text-[#003c79] px-4 py-1 rounded-full mt-2">Careers →</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}


import { ChevronLeft, ChevronRight } from 'lucide-react';
import { log } from "console";

interface ArrowButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white border border-gray-300 rounded-full p-2 shadow-md hover:bg-gray-100 transition"
      aria-label={`Scroll ${direction}`}
    >
      {direction === 'left' ? (
        <ChevronLeft className="w-5 h-5 text-primary" />
      ) : (
        <ChevronRight className="w-5 h-5 text-primary" />
      )}
    </button>
  );
};


interface ServiceCardProps {
  imageSrc: string;
  heading: string;
  description: string;
}

const ServiceCard = ({
  imageSrc = '/service-1.png',
  heading = 'Card Heading',
  description = 'Your bottom description text goes here.',
}: ServiceCardProps) => {
  return (
    <div className="w-[400px] h-[420.08px] flex flex-col items-center relative overflow-hidden">
      {/* Image */}
      <Image
        src={imageSrc}
        alt="Service"
        width={336.64}
        height={189.3}
        className="rounded-[20px] object-cover z-10"
      />

      {/* Inner Content */}
      <div className="w-[373.09px] h-[295.3px] border border-[#E0E0E0] rounded-[20px] flex flex-col items-center justify-end gap-[18px] pt-[120px] pb-[40px] px-[20px] -mt-[80px]">
        <h3 className="font-poppins font-semibold text-[22px] leading-[100%] tracking-normal text-center text-[#084B92]">
          {heading}
        </h3>
        <p className="font-poppins font-light text-[12px] leading-[22px] tracking-normal text-center text-[#888888] max-w-[280px]">
          {description}
        </p>
        <div className="w-[153px] h-[44px] flex items-center justify-center gap-[8px] px-[32px] py-[15px] rounded-[100px] border border-[#084B92] cursor-pointer hover:bg-[#084B92] hover:text-white transition">
          <p className="font-heebo font-semibold text-[14px] leading-[100%] capitalize">
            More Info
          </p>
        </div>
      </div>
    </div>
  );
};

export const ServicesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      image: '/service-1.png',
      title: 'Assisted Living',
      description: 'In-home care tailored to daily routines and personal needs with a focus on preserving independence and trust.',
    },
    {
      image: '/service-2.png',
      title: 'Residential Care',
      description: 'Round-the-clock support in CQC-regulated care environments. Our professionals deliver care with compassion and clinical precision.',
    },
    {
      image: '/service-3.png',
      title: 'Staffing Solutions',
      description: 'Flexible, fast-response recruitment across South East & East of England. Built for healthcare realities.',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -320 : 320,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 bg-white mt-20 px-20">
      <div className="container mx-auto px-4">
        {/* Header with button */}

        <div className="flex justify-between items-center mb-8">
          <div>
            {/* Services Label with Icon */}
            <div className="flex items-center bg-[#A8D5BA26] text-[#A8D5BA] font-normal font-ibm text-[16px] leading-[100%] tracking-[0.12em] capitalize rounded-[20px] rounded-br-none w-[180px] h-[64px] gap-[10px] px-[25px] py-[12px] mb-2">
              <ServicesIcon
              />
              Services
            </div>
            {/* Main heading */}
            <h2 className="font-ibm font-bold text-[42px] leading-[100%] tracking-normal">
              <span className="text-[#084B92]">Our</span>{' '}
              <span className="text-[#03A9F4]">Services</span>
            </h2>
            <p className="font-poppins font-light text-[12px] leading-[22px] tracking-normal text-[#888888] text-center mt-1">
              Focused. Reliable. Professional.
            </p>
          </div>

          <button className="bg-[#084B92] text-white font-ibm text-[16px] font-normal capitalize w-[306px] h-[66px] gap-[14px] px-[40px] py-[15px] rounded-[100px] hover:bg-primary-dark transition">
            Explore All Services &rarr;
          </button>
        </div>

        {/* Cards with arrows */}
        <div className="relative">
          {/* Left arrow */}
          <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-20">
            <ArrowButton direction="left" onClick={() => scroll('left')} />
          </div>

          {/* Scrollable cards */}
          <div
            ref={scrollRef}
            className="flex overflow-x-hidden gap-2 px-12"
          >
            {services.map((service: any, index: any) => (
              <ServiceCard
                key={index}
                imageSrc={service?.image}
                heading={service.title}
                description={service.description}
              />
            ))}
          </div>

          {/* Right arrow */}
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
            <ArrowButton direction="right" onClick={() => scroll('right')} />
          </div>
        </div>

      </div>
    </section>
  );
};
// components/DoctorCard.jsx
export const DoctorCard = ({ doctor }: any) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-gray-200 rounded-full mr-4 overflow-hidden">
            {doctor.image ? (
              <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-blue-100 flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
              </div>
            )}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
            <p className="text-blue-600 font-medium">{doctor.specialty}</p>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <span className="text-sm">📍 {doctor.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <span className="text-sm">⭐ {doctor.rating} ({doctor.reviews} reviews)</span>
          </div>
          <div className="flex items-center text-gray-600">
            <span className="text-sm">💰 ${doctor.price}/consultation</span>
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

// components/DoctorsGrid.jsx
export const DoctorsGrid = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      location: "New York, NY",
      rating: 4.8,
      reviews: 124,
      price: 150,
      image: null
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Pediatrician",
      location: "Los Angeles, CA",
      rating: 4.9,
      reviews: 89,
      price: 120,
      image: null
    },
    {
      id: 3,
      name: "Dr. Emily Davis",
      specialty: "Dermatologist",
      location: "Chicago, IL",
      rating: 4.7,
      reviews: 156,
      price: 130,
      image: null
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Top Doctors
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with experienced healthcare professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
};

// components/ServiceSection.jsx
export const ServiceSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="md:flex items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-12 h-12 bg-blue-400 rounded-full"></div>
                </div>
                <p className="text-gray-600">Healthcare Professional</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Quality Healthcare Services
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We provide comprehensive healthcare services with experienced professionals
              dedicated to your well-being and recovery.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "24/7 Emergency Care",
                "Specialized Treatment Plans",
                "Modern Medical Equipment",
                "Experienced Medical Staff"
              ].map((service, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// components/Footer.jsx
export const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">HealthCare</h3>
            <p className="text-blue-200 mb-4">
              Your trusted partner in healthcare, providing quality medical services.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram'].map((social) => (
                <div key={social} className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center hover:bg-blue-700 cursor-pointer transition-colors">
                  <div className="w-5 h-5 bg-white rounded-full"></div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#" className="hover:text-white transition-colors">General Medicine</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Specialist Care</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Emergency Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Preventive Care</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Doctors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Appointments</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-blue-200">
              <div>📍 123 Healthcare St, Medical City</div>
              <div>📞 +1 (555) 123-4567</div>
              <div>✉️ info@healthcare.com</div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 text-center text-blue-200">
          <p>&copy; 2024 HealthCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};




interface WorkforceCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isHighlighted?: boolean;
  index?: number
}

const WorkforceCard: React.FC<WorkforceCardProps> = ({
  number,
  title,
  description,
  icon,
  isHighlighted = false,
  index = 0
}) => {

  // ${isHighlighted ? 'shadow-lg' : 'opacity-60'}
  return (
    <div className={`
      relative bg-white rounded-2xl p-8 h-48 flex flex-col justify-between
      transition-all duration-300 hover:opacity-100 hover:shadow-lg h-[221px]
    `}>
      {/* Icon */}
      <div className={`flex 
      ${index == 0 ? 'justify-center' : ''}
       mb-4`}>
        {icon}
      </div>

      {/* Number */}
      <div className="absolute top-6 right-6">
        <span className="text-6xl font-bold text-gray-100 select-none">
          {number}
        </span>
      </div>

      {/* Content */}
      <div className="text-center">
        <h3 className={`
          text-lg font-semibold mb-3 leading-tight
          ${isHighlighted ? 'text-gray-900' : 'text-gray-500'}
        `}>
          {title}
        </h3>
        <p className={`
          text-xs leading-relaxed
          ${isHighlighted ? 'text-gray-600' : 'text-gray-400'}
        `}>
          {description}
        </p>
      </div>
    </div>
  );
};

const HandshakeIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    className={`text-blue-400 ${className}`}
    fill="currentColor"
  >
    <path d="M8 18c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H10c-1.1 0-2-.9-2-2V18zm4 2v8h16v-8H12zm6-8c0-1.1.9-2 2-2s2 .9 2 2v2h-4v-2z" />
  </svg>
);

const HeartIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    className={`text-blue-400 ${className}`}
    fill="currentColor"
  >
    <path d="M20 30l-1.45-1.32C10.4 21.48 6 17.52 6 12.5 6 8.42 9.42 5 13.5 5c2.54 0 4.99 1.22 6.5 3.16C21.51 6.22 23.96 5 26.5 5 30.58 5 34 8.42 34 12.5c0 5.02-4.4 8.98-12.55 16.18L20 30z" />
  </svg>
);

export const CareWorkforceSection: React.FC = () => {
  const workforceData = [
    {
      number: "",
      title: "How We Deliver",
      description: "",
      icon: <DeliverIcon0 />,
      isHighlighted: true
    },
    {
      number: "01",
      title: "",
      description: "From RGN and RMNs to senior carers, we provide fully qualified, ethically recruited professionals for roles in both community and residential settings.",
      icon: <DeliverIcon1 />,
      isHighlighted: false
    },
    {
      number: "02",
      title: "",
      description: "RNM-qualified and DBS-cleared candidates.",
      icon: <DeliverIcon1 />,
      isHighlighted: false
    },
    {
      number: "03",
      title: "",
      description: "Rigorous vetting: interviews, references, compliance.",
      icon: <DeliverIcon1 />,
      isHighlighted: false
    },
    {
      number: "04",
      title: "",
      description: "Structured onboarding and role-specific induction",
      icon: <DeliverIcon1 />,
      isHighlighted: false
    },
    {
      number: "05",
      title: "",
      description: "Ongoing supervision and quality reviews",
      icon: <DeliverIcon1 />,
      isHighlighted: false
    }
  ];

  return (
    <section className="py-16 px-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Container with Gradient Background */}
        <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-12 overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>

          {/* Header */}
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Built To Strengthen The UK's Care Workforce
            </h2>
            <p className="text-blue-100 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              Practical Support for Pressured Providers From fast-minute staff shortages to long-term workforce planning,
              <br />
              we deliver professional care teams who are prepared, dependable, and fully compliant.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {workforceData.map((item, index) => (
              <WorkforceCard
                key={index}
                index={index}
                number={item.number}
                title={item.title}
                description={item.description}
                icon={item.icon}
                isHighlighted={item.isHighlighted}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export const WorkWithUsSection2: React.FC = () => {
  const reasons = [
    {
      number: "01",
      title: "Weekly Day of consultative visits",
      description: ""
    },
    {
      number: "02",
      title: "Accredited Training aligned to NVQ & CQC",
      description: ""
    },
    {
      number: "03",
      title: "Consistent shift planning and weekend rota",
      description: ""
    },
    {
      number: "04",
      title: "Transport support when required",
      description: ""
    },
    {
      number: "05",
      title: "Secure bookings and team continuity",
      description: ""
    },
    {
      number: "06",
      title: "Regular supervision and support",
      description: ""
    },
    {
      number: "07",
      title: "Clear career progression",
      description: ""
    },
    {
      number: "08",
      title: "",
      description: ""
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50  px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left Side - Content */}
          <div className="lg:w-1/2">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center bg-[#A8D5BA26] text-[#A8D5BA] font-normal font-ibm text-[16px] leading-[100%] tracking-[0.12em] capitalize rounded-[20px] rounded-br-none w-[250px] h-[64px] gap-[10px] px-[25px] py-[12px] mb-2">
                <WorkIcon />
                Work With Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                7 Reasons To <span className="text-blue-500">Work With Us</span>
              </h2>
              <p className="text-gray-600 text-xs leading-relaxed">
                As a care provider recruitment agency, our success comes from the heartfelt connections we build with our incredible members of staff. If you're thinking about joining our family, here are six wonderful reasons to Join us  - career advancements.
              </p>
            </div>

            {/* Reasons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {reasons.slice(0, 8).map((reason, index) => {
                return index != 7 ?
                  <div key={index} className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow" style={{ width: '270.99755859375px', height: '101.246337890625px', borderRadius: '10px' }}>
                    <div className="flex items-center gap-4 h-full">
                      <span className="text-3xl font-bold text-gray-200 leading-none">
                        {reason.number}
                      </span>
                      <div className="flex flex-col items-center justify-center flex-1">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                          <div className="w-5 h-5 bg-blue-500 rounded"></div>
                        </div>
                        <h3 className="font-semibold text-gray-900 text-sm leading-tight text-center">
                          {reason.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  :
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
                    Start Your Journey With Us
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xs">→</span>
                    </div>
                  </button>
              })}
            </div>
          </div>

          {/* Right Side - Image with Floating Icons */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              {/* Main Image Circle */}
              <img
                src="/roundImage.png"
                alt={"workWithUs"}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
// components/BlogsSection.tsx
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

export const BlogsSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "How to Choose Home Care that Feels Like Family",
      excerpt: "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium, donec dictum.",
      author: "Joanna Wellick",
      date: "June 28, 2018",
      image: "/blog-1.png",
      category: "Aenean Eleifend"
    },
    {
      id: "2",
      title: "Why Compassionate Care Is Our Core Value",
      excerpt: "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium, donec dictum.",
      author: "Joanna Wellick",
      date: "June 28, 2018",
      image: "/blog-2.png",
      category: "Aenean Eleifend"
    },
    {
      id: "3",
      title: "A Day in the Life of a Caregiver",
      excerpt: "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum.",
      author: "Joanna Wellick",
      date: "June 28, 2018",
      image: "/blog-3.png",
      category: "Aenean Eleifend"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50 px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <div className="flex items-center bg-[#A8D5BA26] text-[#A8D5BA] font-normal font-ibm text-[16px] leading-[100%] tracking-[0.12em] capitalize rounded-[20px] rounded-br-none w-[150px] h-[64px] gap-[10px] px-[25px] py-[12px] mb-2">
              <BlogIcon />
              Blog
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Care Direct <span className="text-blue-500">Blogs</span>
            </h2>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
            Read All Articles
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xs">→</span>
            </div>
          </button>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white h-[601px] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              {/* Image */}
              <div className="relative h-[254px] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-[347px] justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
                  </p>
                </div>

                {/* Bottom Info */}
                <div className="flex flex-col gap-3">
                  {/* Top row: avatar, name, horizontal line, date */}
                  <div className="flex items-center w-full">
                    <img
                      src={'/williamImage.svg'}
                      alt={post.author}
                      className="w-8 h-8 rounded-full object-cover mr-2"
                    />
                    <span className="text-sm font-medium text-gray-900">{post.author}</span>
                    <div className="flex-grow border-t border-gray-300 mx-3"></div>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>

                  {/* Learn More link */}
                  <div className="flex justify-center items-center gap-2 text-sky-500 font-medium cursor-pointer hover:underline">
                    <span>Learn More</span>
                    <div className="w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center text-white text-sm">
                      →
                    </div>
                  </div>
                </div>
              </div>
            </article>

          ))}
        </div>
      </div>
    </section>
  );
};

// components/ContactSection.tsx
export const ContactSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Left Side - Image */}
          <div className="lg:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-full">
              <img
                src="/contact.png"
                alt="Elderly woman using phone"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:w-1/2 flex">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex-1">
              {/* Header */}
              <div className="mb-8">
                {/* <div className="inline-flex items-center bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <span className="mr-2">📞</span>
                  Contact
                </div> */}
                <div className="flex items-center bg-[#A8D5BA26] text-[#A8D5BA] font-normal font-ibm text-[16px] leading-[100%] tracking-[0.12em] capitalize rounded-[20px] rounded-br-none w-[170px] h-[64px] gap-[10px] px-[25px] py-[12px] mb-2">
                  <ContactIcon />
                  Contact
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Get In <span className="text-blue-500">Touch</span>
                </h2>
              </div>

              {/* Form */}
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter Phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-500">
                    <option>Select Of Service</option>
                    <option>Home Care</option>
                    <option>Nursing Care</option>
                    <option>Respite Care</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Type Your Message"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  ></textarea>
                </div>

                {/* reCAPTCHA placeholder */}
                <div className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg bg-gray-50">
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="text-sm text-gray-600">I'm not a robot</span>
                  <div className="ml-auto">
                    <div className="w-8 h-8 bg-gray-400 rounded"></div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Contact Us
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xs">→</span>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// components/Footer.tsx
export const Footer2: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Email submitted:', email);
    // Handle subscription logic here
  };
  return (
    <footer className="bg-gradient-to-b from-blue-600 via-blue-700 to-blue-800 text-white relative mt-[80px]">
      {/* Newsletter Section */}
      <div className="absolute -top-[100px] left-1/2 transform -translate-x-1/2 z-10 w-full">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-cyan-400 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Like Our Services?
            </h3>
            <p className="text-white/90 mb-6">
              Subscribe us to get the latest news and updates
            </p>
            <div className="w-[650px]  mx-auto">
              <div className="relative">
                <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 text-gray-700 placeholder-gray-400 focus:outline-none bg-transparent"
                  />
                  <button
                    onClick={handleSubmit}
                    className="bg-cyan-400 hover:bg-cyan-500 text-white font-semibold px-8 py-4 my-2 rounded-full transition-colors duration-200 mr-1"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter you email address"
                className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none"
              />
              <button className="bg-white text-cyan-400 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors">
                Subscribe
              </button>
            </div> */}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="px-4 py-12 pt-32 mt-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-4">
                CARE DIRECT<br />
                RECRUITMENT LTD
              </h3>
              <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                Care Direct Recruitment Ltd has built a reputation for
                trust by prioritising client relationships and trusted
                family care solutions for your loved ones.
              </p>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 cursor-pointer">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 cursor-pointer">
                  <span className="text-sm">in</span>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 cursor-pointer">
                  <span className="text-sm">ig</span>
                </div>
              </div>
            </div>

            {/* Pages */}
            <div>
              <h4 className="font-semibold mb-4">Pages</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Our Services</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Clients</a></li>
              </ul>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Vacancies</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-blue-100 mb-1">Call Us (24/7)</p>
                  <p className="font-semibold">01604 785781</p>
                </div>
                <div>
                  <p className="text-blue-100 mb-1">Email Us</p>
                  <p className="font-semibold">info@caredirectrecruitment.co.uk</p>
                </div>
                <div>
                  <p className="text-blue-100 mb-1">Address</p>
                  <p className="font-semibold">
                    Saint Georges Way, Industrial, Bam
                    Land, Leicester LE4 8HQ, United
                    Kingdom
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-600 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 text-sm mb-4 md:mb-0">
            Copyright © 2023 AVS Digital
          </p>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <span className="text-xs text-gray-900">G</span>
              </div>
              <span className="text-blue-100 text-sm">Get it on Google Play</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <span className="text-xs text-gray-900">🍎</span>
              </div>
              <span className="text-blue-100 text-sm">Download on the App Store</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};