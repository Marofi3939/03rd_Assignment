// import React from "react";

// const Header  = () => {
// return(
// <div>

// <h1 className=" font-extrabold text-5xl">JD PERFUMES  </h1>
// <h4 className="bg-blue-500 pl-[1000px]  ">HOME</h4>
// <h4 className="bg-blue-500 pl-[1100px] ">ABOUT US</h4>
// <h4 className="bg-blue-500 pl-[1200px] ">OUR SERVICES</h4>
// <h4 className="bg-blue-500 pl-[1200px] ">CONTACT US</h4>

// </div>

// )

// }

// export default Header;

import React from 'react'
const Header = () => {
  return (
    <header className='bg-green-400'>
      <div className="bg-gradient-to-bl p-4 flex items-center justify-between">
        <h1 className="text-red-600  font-black  p-2">
          JD PERFUMES
        </h1>
        
        <nav className="flex space-x-5">
          <a href="/app/Home/page.tsx" className="text-red-600  font-sans font-semibold hover:text-blue-700 underline">Home</a>
          <a href="/app/About/page.tsx" className="text-black font-sans font-semibold hover:text-blue-700">About Us</a>
          <a href="/app/Contact/page.tsx"  className="text-black font-sans font-semibold  hover:text-blue-700">Contact Us</a>
        </nav>
      </div>
    </header>
  );
};
export default Header;