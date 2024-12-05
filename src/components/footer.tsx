import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsCartFill } from 'react-icons/bs';

const Footer = () => {
 return (
   <footer className="bg-black text-white py-8 lg:px-16 mt-9 max-w-7xl mx-auto px-4">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
       <div className="space-y-4">
         <h3 className="text-lg font-bold">Exclusive</h3>
         <p>Subscribe</p>
         <p>Get 10% off your first order</p>
         <div className="relative">
           <input
             type="email"
             placeholder="Enter your email"
             className="bg-transparent border border-gray-400 rounded-full py-2 px-4 w-full pr-10"
           />
           <button className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400 hover:text-white">
             <AiOutlineSearch size={18} />
           </button>
         </div>
       </div>
       <div className="space-y-4">
         <h3 className="text-lg font-bold">Support</h3>
         <p>111 Bijoy sarani, Dhaka, Dhaka 1215, Bangladesh</p>
         <p>exclusive@gmail.com</p>
         <p>+8801618-88888-9999</p>
       </div>
       <div className="space-y-4">
         <h3 className="text-lg font-bold">Account</h3>
         <p>My Account</p>
         <p>Login / Register</p>
         <p>Cart</p>
         <p>Wishlist</p>
         <p>Shop</p>
       </div>
       <div className="space-y-4">
         <h3 className="text-lg font-bold">Quick Link</h3>
         <p>Privacy Policy</p>
         <p>Terms Of Use</p>
         <p>FAQ</p>
         <p>Contact</p>
       </div>
     </div>
     <div className="mt-8 flex justify-end items-center">
       <div className="flex space-x-4">
         <a href="#" className="text-gray-400 hover:text-white">
           <FaFacebook size={20} />
         </a>
         <a href="#" className="text-gray-400 hover:text-white">
           <FaTwitter size={20} />
         </a>
         <a href="#" className="text-gray-400 hover:text-white">
           <FaInstagram size={20} />
         </a>
         <a href="#" className="text-gray-400 hover:text-white">
           <FaLinkedin size={20} />
         </a>
         <a href="#" className="text-gray-400 hover:text-white">
           <BsCartFill size={20} />
         </a>
       </div>
     </div>
     <div className='flex justify-center items-center border-t border-[#FFFFFF] mt-7 w-full'>
     <p className='text-[#ffffffbc] text-base pt-4 '>© Copyright Himol 2022. All right reserved</p>
     </div>
   </footer>
 );
};

export default Footer;