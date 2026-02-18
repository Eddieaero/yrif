import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="py-24 bg-brand-navy relative overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center mix-blend-overlay"></div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/60 z-10"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-20 text-center">
                <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight">
                    Ready to Start Your <span className="text-brand-teal">Research Journey</span>?
                </h2>
                <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                    Join thousands of young innovators transforming Tanzania through research. Access funding, mentorship, and a platform to showcase your work.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Link to="/register" className="bg-brand-teal text-brand-navy px-10 py-5 rounded-full text-lg font-bold hover:bg-white transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2 group">
                        Join YRIF
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/contact" className="px-10 py-5 rounded-full text-lg font-bold text-white border-2 border-white/20 hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                        <Mail />
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
