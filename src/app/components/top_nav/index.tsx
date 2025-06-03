'use client';
import Image from "next/image";
import React from "react";
import { FaInstagram, FaLinkedin, FaEnvelope, FaFacebook, FaMapMarkerAlt, FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";
import { Star } from 'lucide-react';

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
    <div className="w-full mx-auto relative h-[600px]">
      {/* Main content section */}
      <div className="flex bg-[#EBF5FA] h-[600px]">
        <div className="container mx-auto flex flex-col md:flex-row items-center  px-4">
          <div className="text-center md:text-left max-w-2xl md:mr-8">
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

      {/* Bottom cards section - absolute at the bottom */}
      <div className="absolute -bottom-[92px] left-0 w-full z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4">

            {/* First Card: Rounded Left */}
            <div className="bg-white p-6 border shadow-md rounded-l-md">
              <h4 className="text-[#002e6d] font-bold text-sm mb-2">
                Featured <span className="text-[#00a6ff]">Roles</span>
              </h4>
              <p className="text-sm text-gray-600">
                If you're seeking a career where your work matters, your voice is valued,
                and your skills are nurtured, Care Direct is the place to grow.
              </p>
            </div>

            {/* Middle Card 1 */}
            <div
              className="bg-[#002e6d] text-white p-6 text-center flex flex-col items-center justify-center"
              style={{ backgroundImage: 'url("/bg-1.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <h5 className="font-semibold text-sm mb-2">Registered Nurses</h5>
              <button className="text-sm bg-white text-[#002e6d] px-4 py-1 rounded-full mt-2">View Job →</button>
            </div>

            {/* Middle Card 2 */}
            <div
              className="bg-[#00a6ff] text-white p-6 text-center flex flex-col items-center justify-center"
              style={{ backgroundImage: 'url("/bg-2.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <h5 className="font-semibold text-sm mb-2">Care Workers & Senior Carers</h5>
              <button className="text-sm bg-white text-[#00a6ff] px-4 py-1 rounded-full mt-2">View Job →</button>
            </div>

            {/* Last Card: Rounded Right */}
            <div
              className="bg-[#003c79] text-white p-6 text-center flex flex-col items-center justify-center rounded-r-md"
              style={{ backgroundImage: 'url("/bg-3.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
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

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useRef } from 'react';
// components/OurServices.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const OurServices = () => {
  const services = [
    {
      title: "Assisted Living",
      description: "In-home care tailored to daily routine and personal needs, with a focus on presenting independence and trust.",
    },
    {
      title: "Residential Care",
      description: "Based the clock support in CSC-regulated care environments. Our professional deliver care with composition and ethical precision.",
    },
    {
      title: "Staffing Solutions",
      description: "Staffing solutions has been responsible for staffing services. Staffing solutions are also responsible for staffing services. Staffing solutions are also responsible for staffing services.",
    }
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Services</h1>
      <h2 className="text-lg text-gray-600 mb-10">Focused Reliable Professional</h2>

      <hr className="border-t border-gray-300 my-8" />

      {/* Desktop Grid View */}
      <div className="hidden md:grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div key={index} className="border border-gray-200 rounded p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
            <a href="#" className="text-blue-600 font-bold text-sm hover:underline">More Info</a>
          </div>
        ))}

        <div className="md:col-span-2 text-center py-4">
          <button className="text-blue-600 font-bold hover:underline">Explore All Services</button>
        </div>
      </div>

      {/* Mobile Carousel View */}
      <div className="md:hidden">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="services-swiper"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="border border-gray-200 rounded p-6 h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                <a href="#" className="text-blue-600 font-bold text-sm hover:underline">More Info</a>
              </div>
            </SwiperSlide>
          ))}

          <SwiperSlide>
            <div className="text-center py-4">
              <button className="text-blue-600 font-bold hover:underline">Explore All Services</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};


import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  image: string;
  title: string;
  description: string;
}

const ServiceCard = ({
  imageSrc = '/images/sample-service.svg',
  heading = 'Card Heading',
  description = 'Your bottom description text goes here.',
}: any) => {
  return (
    <div className="w-[400px] h-[403.08px] border border-[#E0E0E0] rounded-[20px] flex flex-col items-center pt-4">
      {/* Image */}
      <Image
        src={imageSrc}
        alt="Service"
        width={336.64}
        height={189.3}
        className="rounded-[20px] object-cover"
      />

      {/* Inner Content */}
      <div className="w-[373.09px] h-[356.3px] flex flex-col items-center gap-[18px] mt-4">
        <h3 className="font-poppins font-semibold text-[22px] leading-[100%] tracking-normal text-center text-[#084B92]">
          {heading}
        </h3>
        <p className="font-poppins font-light text-[12px] leading-[22px] tracking-normal text-center text-[#888888]">
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
      image: '/images/assisted-living.jpg',
      title: 'Assisted Living',
      description: 'In-home care tailored to daily routines and personal needs with a focus on preserving independence and trust.',
    },
    {
      image: '/images/residential-care.jpg',
      title: 'Residential Care',
      description: 'Round-the-clock support in CQC-regulated care environments. Our professionals deliver care with compassion and clinical precision.',
    },
    {
      image: '/images/staffing-solutions.jpg',
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
    <section className="py-16 bg-white mt-20">
      <div className="container mx-auto px-4">
        {/* Header with button */}

        <div className="flex justify-between items-center mb-8">
          <div>
            {/* Services Label with Icon */}
            <div className="flex items-center bg-[#A8D5BA26] text-[#A8D5BA] font-normal font-ibm text-[16px] leading-[100%] tracking-[0.12em] capitalize rounded-[20px] w-[174px] h-[64px] gap-[10px] px-[25px] py-[12px] mb-2">
              <Image
                src="/services-icon.svg"
                alt="Services Icon"
                width={24}
                height={24}
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
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
            <ArrowButton direction="left" onClick={() => scroll('left')} />
          </div>

          {/* Scrollable cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth px-8"
          >
            {services.map((service: any, index: any) => (
              <ServiceCard
                key={index}
                image={service?.image}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          {/* Right arrow */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
            <ArrowButton direction="right" onClick={() => scroll('right')} />
          </div>
        </div>
      </div>
    </section>
  );
};

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => (
  <div className="text-center mb-8">
    <h2 className="text-3xl font-bold text-primary">{title}</h2>
    {subtitle && (
      <p className="text-gray-600 mt-2">{subtitle}</p>
    )}
  </div>
);

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => (
  <button
    onClick={onClick}
    className={`bg-primary text-white px-6 py-2 rounded-full shadow hover:bg-primary-dark transition ${className}`}
  >
    {text}
  </button>
);

const deliveryItems = [
  {
    title: "From RGN And RMNs To Senior Carers",
    description:
      "We provide fully qualified, ethically recruited professionals for roles in both community and residential settings.",
    icon: "/icons/care-icon-1.svg",
  },
  {
    title: "RMM-Qualified And DBS-Cleared Candidates",
    description: "",
    icon: "/icons/care-icon-2.svg",
  },
  {
    title: "Rigorous Vetting",
    description: "Interviews, references, compliance.",
    icon: "/icons/care-icon-3.svg",
  },
  {
    title: "Structured Onboarding And Role-Specific Induction",
    description: "",
    icon: "/icons/care-icon-4.svg",
  },
  {
    title: "Ongoing Supervision And Quality Reviews",
    description: "",
    icon: "/icons/care-icon-5.svg",
  },
];

export const HowWeDeliverSection: React.FC = () => {
  return (
    <section className="py-12 bg-blue-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Built To Strengthen The UK’s Care Workforce"
          subtitle="Practical support for pressured providers. We deliver professional care teams who are prepared, dependable, and fully compliant."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
          {deliveryItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition text-center flex flex-col items-center"
            >
              <img
                src={item.icon}
                alt={`Icon ${index + 1}`}
                className="w-12 h-12 mb-4"
              />
              <h3 className="font-semibold text-primary text-lg mb-2">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-gray-600 text-sm">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


interface ReasonCardProps {
  number: string;
  title: string;
  description?: string;
}

const ReasonCard: React.FC<ReasonCardProps> = ({ number, title, description }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow hover:shadow-lg transition">
      <div className="text-3xl font-bold text-primary mb-2">{number}</div>
      <h3 className="font-semibold text-lg text-primary mb-1">{title}</h3>
      {description && (
        <p className="text-gray-600 text-sm">{description}</p>
      )}
    </div>
  );
};

const reasons = [
  {
    number: "01",
    title: "Weekly pay at competitive rates",
  },
  {
    number: "02",
    title: "Accredited training aligned to NHS & CQC",
  },
  {
    number: "03",
    title: "Consistent shift planning and weekly rotas",
  },
  {
    number: "04",
    title: "Transport support when needed",
  },
  {
    number: "05",
    title: "Secure bookings and team continuity",
  },
  {
    number: "06",
    title: "Regular supervision and support",
  },
  {
    number: "07",
    title: "Clear career progression",
  },
];

export const WorkWithUsSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="7 Reasons To Work With Us"
          subtitle="Our success comes from the heartfelt connections we build with our incredible members of staff."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {reasons.map((reason: any, index: any) => (
            <ReasonCard
              key={index}
              number={reason.number}
              title={reason.title}
              description={reason?.description}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button text="Start Your Journey With Us" />
        </div>
      </div>
    </section>
  );
};