import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container flex flex-col justify-between py-3 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a href="/" className="flex justify-center space-x-3 lg:justify-start">
            <span className="self-center text-2xl font-semibold">Streamify</span>
          </a>
        </div>
        
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-4 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase">Content</h3>
            <ul className="space-y-1">
              <li><a href="#">New Movies</a></li>
              <li><a href="#">TV Shows</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase">Streamify</h3>
            <ul className="space-y-1">
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase">Follow Us</h3>
            <div className="flex space-x-3">
              <a href="#" title="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32">
                  <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                </svg>
              </a>
              <a href="#" title="Twitter">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                </svg>
              </a>
              <a href="#" title="Instagram">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="instaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#F58529", stopOpacity: 1 }} />
                      <stop offset="50%" style={{ stopColor: "#DD2A7B", stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: "#515BD4", stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <path fill="url(#instaGradient)" d="M7.5,2h9c3,0,5.5,2.5,5.5,5.5v9c0,3-2.5,5.5-5.5,5.5h-9C4.5,22,2,19.5,2,16.5v-9C2,4.5,4.5,2,7.5,2z M16.5,4h-9 C5.67,4,4,5.67,4,7.5v9C4,18.33,5.67,20,7.5,20h9c1.83,0,3.5-1.67,3.5-3.5v-9C20,5.67,18.33,4,16.5,4z M12,7.5 c2.48,0,4.5,2.02,4.5,4.5s-2.02,4.5-4.5,4.5s-4.5-2.02-4.5-4.5S9.52,7.5,12,7.5z M12,9c-1.66,0-3,1.34-3,3s1.34,3,3,3 s3-1.34,3-3S13.66,9,12,9z M17,5.5c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S16.45,5.5,17,5.5z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-3 text-center">
        <p>&copy; 2025 Streamify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
