"use client";
import React from 'react';
import { 
    Twitter, 
    Facebook, 
    Instagram, 
    Linkedin, 
    Send, 
    Phone, 
    Mail, 
    MapPin, 
    ChevronRight,
    ArrowRight
} from 'lucide-react';

// Main App component to display the footer in a realistic context
export default function Foot() {
  return (
    <div className="bg-gray-100  flex flex-col">
        {/* Dummy content to show how the footer sits on a page */}
  
        <Footer />
    </div>
  );
}

// The Modern Footer Component
function Footer() {
    // Data for the footer links, making it easy to update
    const usefulLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Service', href: '/services' },
    ];

    const services = [
        { name: 'SEO', href: '/services/seo' },
        { name: 'SMO', href: '/services/smp' },
        { name: 'Graphic Design', href: '/services/graphic-designing' },
        { name: 'Web Development', href: '/services/website-designing' },
        { name: 'Video Editing', href: '/services/video-editing' },
    ];
    
    const socialLinks = [
        { icon: <Twitter size={20} />, href: '#', 'aria-label': 'Twitter' },
        { icon: <Facebook size={20} />, href: '#', 'aria-label': 'Facebook' },
        { icon: <Instagram size={20} />, href: '#', 'aria-label': 'Instagram' },
        { icon: <Linkedin size={20} />, href: '#', 'aria-label': 'LinkedIn' },
    ];

    return (
        <footer className="bg-slate-900 text-white font-sans overflow-hidden">
            {/* Background decorative gradients */}
            <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none">
                {/* <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-900/50 to-transparent blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-t from-cyan-800/30 to-transparent blur-3xl"></div> */}
            </div>
            
            <div className="relative container mx-auto px-6 py-16">
                {/* Top Section: Main grid with info and links */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    
                    {/* Column 1: Branding and Mission */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold mb-4 text-white tracking-wider">MAITREYA DIGITAL</h2>
                        <p className="text-slate-400 max-w-md mb-6">
                            Stay ahead of the curve with our exclusive updates, industry insights, and special offers delivered straight to your inbox.
                        </p>
                        {/* Newsletter Form */}
                        <form className="flex w-full max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 rounded-l-lg bg-slate-800/50 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                                aria-label="Email for newsletter"
                            />
                            <button
                                type="submit"
                                className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-3 px-5 rounded-r-lg transition-colors duration-300 flex items-center justify-center"
                                aria-label="Subscribe to newsletter"
                            >
                                <Send size={20} />
                            </button>
                        </form>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-white">Useful Links</h3>
                        <ul className="space-y-3">
                            {usefulLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors duration-300 group">
                                        <ChevronRight size={16} className="mr-2 text-cyan-500 group-hover:translate-x-1 transition-transform duration-300" />
                                        <span>{link.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-white">Our Services</h3>
                         <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <a href={service.href} className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors duration-300 group">
                                         <ChevronRight size={16} className="mr-2 text-cyan-500 group-hover:translate-x-1 transition-transform duration-300" />
                                        <span>{service.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section: Contact, Socials, and Copyright */}
                <div className="mt-16 pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Contact Info */}
                    <div className="flex flex-col sm:flex-row gap-6 text-slate-400 text-sm">
                         <div className="flex items-center">
                            <MapPin size={18} className="mr-2 text-cyan-400" />
                            <span>C-1/61, Uttam Nagar, New Delhi</span>
                        </div>
                        <div className="flex items-center">
                            <Phone size={16} className="mr-2 text-cyan-400" />
                            <span>+91 9899790360</span>
                        </div>
                        <div className="flex items-center">
                            <Mail size={16} className="mr-2 text-cyan-400" />
                            <span>info@maitreyainfosolutions.com</span>
                        </div>
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex space-x-4">
                        {socialLinks.map((social) => (
                            <a 
                                key={social['aria-label']} 
                                href={social.href} 
                                aria-label={social['aria-label']}
                                className="w-10 h-10 flex items-center justify-center bg-slate-800/70 rounded-full text-slate-400 hover:text-white hover:bg-cyan-500 transition-all duration-300"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
                 <div className="mt-8 text-center text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} Maitreya Digital. All Rights Reserved. Designed by <a href="#" className="hover:text-cyan-400 transition-colors">Kaushik Vishwas</a>. | <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></p>
                </div>
            </div>
        </footer>
    );
}
