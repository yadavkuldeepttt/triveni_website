import React from "react";
import Trip from "../components/Trip";

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
    </div>
  );
}

export default Home;
