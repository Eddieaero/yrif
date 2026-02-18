import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import logo from '../../assets/images/logo_dark.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3 glass shadow-sm' : 'py-6 bg-transparent'}`}>
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 group">
                        <img src={logo} alt="YRIF Logo" className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {[
                            { name: 'Home', href: '/' },
                            { name: 'About', href: '#about' },
                            { name: 'Programs', href: '#features' },
                            { name: 'Research', href: '#research' },
                            { name: 'Events', href: '#events' },
                            { name: 'Partners', href: '#partners' },
                            { name: 'Contact', href: '#contact' }
                        ].map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    if (item.href.startsWith('#')) {
                                        e.preventDefault();
                                        const element = document.querySelector(item.href);
                                        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                }}
                                className="px-4 py-2 text-sm font-medium text-text-primary hover:text-brand-blue relative group transition-colors"
                            >
                                {item.name}
                                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center opacity-70"></span>
                            </a>
                        ))}
                    </nav>

                    {/* Auth & CTAs */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="flex items-center space-x-1 text-xs font-semibold text-text-secondary hover:text-brand-blue uppercase tracking-wider transition-colors">
                            <Globe size={14} />
                            <span>EN</span>
                        </button>
                        <Link to="/login" className="px-5 py-2.5 text-sm font-semibold text-brand-navy hover:text-brand-blue transition-colors">Login</Link>
                        <Link to="/register" className="bg-brand-navy hover:bg-brand-blue text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg shadow-brand-navy/20 hover:shadow-brand-blue/30 transform hover:-translate-y-0.5">
                            Join YRIF
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-brand-navy hover:text-brand-blue transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/20 animate-fade-in-down">
                        <div className="flex flex-col space-y-4">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'About', href: '#about' },
                                { name: 'Programs', href: '#features' },
                                { name: 'Research', href: '#research' },
                                { name: 'Events', href: '#events' },
                                { name: 'Partners', href: '#partners' },
                                { name: 'Contact', href: '#contact' },
                                { name: 'Login', href: '/login' }
                            ].map((item) => (
                                item.href.startsWith('#') ? (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIsMenuOpen(false);
                                            const element = document.querySelector(item.href);
                                            element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }}
                                        className="text-lg font-medium text-brand-navy hover:text-brand-blue hover:pl-2 transition-all"
                                    >
                                        {item.name}
                                    </a>
                                ) : (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className="text-lg font-medium text-brand-navy hover:text-brand-blue hover:pl-2 transition-all"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            ))}
                            <Link to="/register" className="bg-brand-navy text-white px-6 py-3 rounded-xl text-center font-bold shadow-lg" onClick={() => setIsMenuOpen(false)}>
                                Join YRIF
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
