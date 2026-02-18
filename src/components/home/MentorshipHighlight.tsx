import { Link } from 'react-router-dom';
import { Users, UserPlus } from 'lucide-react';

const MentorshipHighlight = () => {
    return (
        <section className="py-20 bg-brand-light relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl mx-auto pointer-events-none">
                <div className="absolute top-20 left-10 w-20 h-20 border-4 border-brand-teal/10 rounded-full"></div>
                <div className="absolute bottom-20 right-10 w-32 h-32 border-4 border-brand-navy/5 rounded-full"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-4xl mx-auto text-center bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-gray-100">
                    <span className="text-brand-navy/60 font-bold uppercase tracking-widest text-sm mb-4 block">Guidance & Growth</span>
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-brand-navy mb-6">
                        Unlock Your Potential with <span className="text-brand-teal">Mentorship</span>
                    </h2>
                    <p className="text-text-secondary text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
                        Connect with experienced researchers and industry professionals who can guide your journey, review your work, and open doors to new opportunities.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link to="/register" className="flex items-center justify-center gap-3 bg-brand-navy text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-blue transition-all hover:-translate-y-1 shadow-lg shadow-brand-navy/20">
                            <UserPlus size={20} />
                            Request Mentorship
                        </Link>
                        <Link to="/register" className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-brand-navy border-2 border-brand-navy hover:bg-brand-navy hover:text-white transition-all hover:-translate-y-1">
                            <Users size={20} />
                            Become a Mentor
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MentorshipHighlight;
