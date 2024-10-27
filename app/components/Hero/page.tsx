import React from 'react'
import Image from 'next/image';
import Perfume from "../../../public/assets/perfume_1.jpg";


const Hero = () => {
  return (
    <section className="relative  flex items-center w-full bg-cover justify-center h-screen">
      <Image 
        src={Perfume} 
        alt="This is Cap Image" 
        width={600} // Half of the original width
        height={200} // Adjust height as necessary to maintain aspect ratio
        className="absolute top-0 bg-cover w-full object-cover opacity-50 " // Apply opacity, cover half the width
      />
      <div className="relative z-10 mb-[230px] mls-[330px] text-center">
        <h1 className="text-yellow-600  font-semibold font-sans p-1 text-2xl">
        Unleash Your Essence: Embrace the Power of Fragrance!
        </h1>
        <button className="mt-4 px-4  py-2  text-white rounded hover:bg-green-600 text-2xl">
          Explore
        </button>
      </div>
    </section>
  );
};
export default Hero;