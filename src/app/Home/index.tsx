"use client"
import { TopNav, ServicesSection, Navbar, Feature,  CareWorkforceSection, WorkWithUsSection2, BlogsSection, ContactSection, Footer2 } from "../components/top_nav";

export interface User {
  id: string;
  name?: string;
  email?: string;
  [key: string]: any; // Add other optional fields as needed
}

export interface Ride {
  id: string;
  [key: string]: any; // Add specific ride fields as needed
}

export interface City {
  id: string;
  [key: string]: any; // Add specific city fields as needed
}

export interface Request {
  id: string;
  [key: string]: any; // Add specific request fields as needed
}

export interface Rates {
  [key: string]: any; // Add specific rate fields if known
}
export default function Home() {


  return (
    <div className="flex h-screen  w-screen">
      <div className="flex flex-col w-full overflow-x-hidden overflow-y-scroll" >
        <TopNav />
        <Navbar />
        <Feature />
        <ServicesSection />
        <CareWorkforceSection />
        <WorkWithUsSection2 />
        <BlogsSection />
        <ContactSection />
        <Footer2 />
      </div>
    </div>
  );
}

