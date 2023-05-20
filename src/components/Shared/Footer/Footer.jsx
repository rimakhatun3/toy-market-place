import React from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import logo from '../../../assets/logos/navLogo.avif'

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#AEE6AC] my-16">
      <div className=" py-6 px-4">
        <div className="flex flex-wrap lg:mx-28">
          <div className="w-full md:w-1/4 lg:w-1/6 mb-4 md:mb-0">
            <img src={logo} alt="Logo" className="h-8 mb-2" />
            <h2 className="text-lg font-bold">Kids Toy</h2>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/6 mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +1 123-456-7890</p>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/6 mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex">
              <a href="https://www.facebook.com" className="mr-2">
                <i className="fab fa-facebook text-xl">
                    <FaFacebook></FaFacebook> 
                </i>
              </a>
              <a href="https://www.twitter.com" className="mr-2">
                <i className="fab fa-twitter text-xl"> <FaGoogle></FaGoogle></i>
              </a>
              <a href="https://www.instagram.com">
                <i className="fab fa-instagram text-xl"><FaGithub></FaGithub></i>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/6">
            <h3 className="text-lg font-bold mb-2">Address</h3>
            <p>123 Street, City, Country</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
        </div>
    );
};

export default Footer;