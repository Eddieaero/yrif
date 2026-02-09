import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logo from '../../assets/images/logo_dark.png'; // Note: You might want a light version for footer, or use filter

const Footer = () => {
    return (
        <footer className="bg-brand-navy text-white pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        {/* White logo filter for dark background */}
                        <img src={logo} alt="YRIF" className="h-12 mb-6 brightness-0 invert" />
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            Empowering Tanzanian youth to participate in research, innovation, and knowledge generation aligned with national development priorities.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-brand-teal transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-brand-teal transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-brand-teal transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="hover:text-brand-teal transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Organization</h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><a href="#" className="hover:text-brand-teal transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-brand-teal transition-colors">Board of Directors</a></li>
                            <li><a href="#" className="hover:text-brand-teal transition-colors">Partners</a></li>
                            <li><a href="#" className="hover:text-brand-teal transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-brand-teal transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Research & Innovation</h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><a href="#" className="hover:text-brand-teal transition-colors">Research Portal</a></li>
                            <li><a href="#" className="hover:text-brand-teal transition-colors">Submit Paper</a></li>
                            <li><a href="#" className="hover:text-brand-teal transition-colors">Innovation Grants</a></li>
                            <li><a href="#" className="hover:text-brand-teal transition-colors">Mentorship Program</a></li>
                            <li><a href="#" className="hover:text-brand-teal transition-colors">Library</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="text-brand-teal mt-0.5" />
                                <span>Dar es Salaam, Tanzania<br />Victoria Noble Center, 3rd Floor</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-brand-teal" />
                                <span>+255 123 456 789</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-brand-teal" />
                                <span>info@yrif.org</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} YRIF. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-brand-teal">Privacy Policy</a>
                        <a href="#" className="hover:text-brand-teal">Terms of Service</a>
                        <a href="#" className="hover:text-brand-teal">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
