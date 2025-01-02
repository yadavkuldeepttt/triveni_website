  import React from "react";
  import Trip from "../components/Trip";
import AboutSection from "../components/aboutUs";
import ServicesSection from "../components/services";

  function Home() {
    return (
      <div className="">
        <div className="flex justify-center items-center">
          <img
            src="/images/home/banner.png"
            alt="banner"
            className="md:w-[50vw] w-full max-w-screen-lg h-fit"
          />
        </div>
        <Trip />
        <AboutSection/>
        <ServicesSection/>
      </div>
    );
  }

  export default Home;
