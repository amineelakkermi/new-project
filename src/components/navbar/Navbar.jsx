import React, { useState } from 'react'
import { navLinks } from '../../constants'
import { menu , close, heroImg } from '../../assets'



const Navbar = () => {
  
  
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  


  return (
    <nav className={`w-full  flex py-4   items-center navbar p-4`}>
      <img src={heroImg} alt="logo" className=" w-[77px] z-30 object-cover " />
      
     
     

      <ul className=" list-none lg:flex  hidden justify-end items-center flex-1  gap-4">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`relative font-poppins font-medium cursor-pointer text-[16px] duration-300 text-white   
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id} `}>{nav.title}</a>
          </li>
          
        ))}
              <button className='md:block hidden start-button py-2 px-4 rounded-[50px] w-[130px]'><a href="#start" className='text-white'>Get Started</a></button>

      </ul>

     
    

      <div

      className={`lg:hidden flex   flex-1 justify-end items-center`}  >
         
         <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-[pointer]"
          onClick={() => setToggle(!toggle) }
          
          />
       
       
      
        <div
          className={`${
            !toggle ? "hidden" : "flex"  
          } flex-col gap-10 z-20 p-6 bg-[dark] absolute top-20 right-0 mx-10 my-2 w-[full] rounded-xl bg-[#011]  justify-center items-center sidebar`}
        >
      
        <ul className="list-none flex justify-center items-center  gap-8 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] 
                text-white
                ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title) && setToggle(toggle)
                 
                }
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            
            <button className='md:block hidden start-button py-2 px-4 rounded-[50px] w-[130px]'><a href="#start" className='text-white'>Get Started</a></button>

          </ul>
          <button className='start-button py-2 px-4 rounded-[50px] w-[130px]'><a href="#start" className='text-white'>Get Started</a></button>

        </div>
      </div>
     

    </nav>
  );
};





















export default Navbar;