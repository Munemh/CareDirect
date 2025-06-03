"use client"
import { TopNav,  ServicesSection, Navbar, Feature, OurServices, HowWeDeliverSection, WorkWithUsSection } from "../components/top_nav";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title } from "chart.js";
import SwiperCarousel from "../components/Crousal";
import { Background, TextContent } from "../components/Background";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title);

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
      <div className="flex flex-col w-full" >
        <TopNav />
        <Navbar />

        <Feature />
        <ServicesSection />
        <HowWeDeliverSection />
        <WorkWithUsSection />
        {/* <OurServices /> */}
        {/* <SwiperCarousel />
          <TextContent />
          <HomeSection />
          <AboutUsCard />
          <ServicesSection />
          <Footer /> */}
      </div>
    </div>
  );
}

