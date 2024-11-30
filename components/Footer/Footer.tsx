import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white py-8 text-gray-700">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Footer Grid Sections */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:text-left">
                    {/* First Row: Product and Resources */}
                    <div>
                        <h2 className="font-bold text-base text-black mb-4">Product</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Features</a></li>
                            <li><a href="#" className="hover:underline">Pricing</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold text-base text-black mb-4">Resources</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Blog</a></li>
                            <li><a href="#" className="hover:underline">User guides</a></li>
                            <li><a href="#" className="hover:underline">Webinars</a></li>
                        </ul>
                    </div>
                    {/* Second Row: Company and Plans */}
                    <div>
                        <h2 className="font-bold text-base text-black mb-4">Company</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">About us</a></li>
                            <li><a href="#" className="hover:underline">Contact us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold text-base text-black mb-4">Plans & Pricing</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Personal</a></li>
                            <li><a href="#" className="hover:underline">Start up</a></li>
                            <li><a href="#" className="hover:underline">Organization</a></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-10 space-y-6 md:space-y-0">
                    {/* Language Selector */}
                    <div>
                        <select className="border border-gray-300 rounded px-3 py-2 text-sm w-full md:w-auto">
                            <option>English</option>
                            <option>Spanish</option>
                            <option>French</option>
                        </select>
                    </div>

                    {/* Copy-right Text */}
                    <div className="text-center text-sm">
                        <p>
                            &copy; 2024 Brand, Inc. &middot; <a href="#" className="hover:underline">Privacy</a> &middot; <a href="#" className="hover:underline">Terms</a> &middot; <a href="#" className="hover:underline">Sitemap</a>
                        </p>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex justify-center space-x-4 text-gray-500">
                        <a href="#" className="hover:text-blue-500 text-blue-400"><FaTwitter size={20} /></a>
                        <a href="#" className="hover:text-blue-600 text-blue-500"><FaFacebookF size={20} /></a>
                        <a href="#" className="hover:text-blue-600 text-blue-500"><FaLinkedinIn size={20} /></a>
                        <a href="#" className="hover:text-rose-600 text-rose-500"><FaInstagram size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
