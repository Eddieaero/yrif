import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Mail, Lock, Building2 } from 'lucide-react';

const Register = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [role, setRole] = useState('student');

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            navigate('/dashboard');
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-brand-light flex items-center justify-center p-4">
            <div className="bg-white max-w-4xl w-full rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-fade-in-up">
                {/* Visual Side */}
                <div className="md:w-5/12 bg-brand-navy p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="relative z-10">
                        <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8">
                            <ArrowLeft size={16} />
                            <span className="text-sm font-bold">Back to Home</span>
                        </Link>
                        <h2 className="text-3xl font-display font-bold mb-4">Join the Movement.</h2>
                        <p className="text-blue-200 leading-relaxed">
                            Become a part of Tanzania&apos;s largest youth innovation ecosystem.
                        </p>
                    </div>

                    <div className="relative z-10 space-y-4">
                        <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                            <div className="w-8 h-8 rounded-full bg-brand-teal flex items-center justify-center text-white font-bold text-xs ring-4 ring-white/10">1</div>
                            <div className="text-sm font-medium">Create your profile</div>
                        </div>
                        <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm opacity-60">
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xs">2</div>
                            <div className="text-sm font-medium">Connect with mentors</div>
                        </div>
                    </div>

                    {/* Decor */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/30 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-teal/20 rounded-full blur-3xl -ml-16 -mb-16"></div>
                </div>

                {/* Form Side */}
                <div className="md:w-7/12 p-8 md:p-12 relative">
                    <div className="text-center md:text-left mb-8">
                        <h1 className="text-2xl font-bold text-brand-navy mb-2">Create Account</h1>
                        <p className="text-text-secondary text-sm">Choose your role to get started</p>
                    </div>

                    <div className="flex bg-gray-50 p-1 rounded-xl mb-8">
                        {['Student', 'Mentor', 'Partner'].map((r) => (
                            <button
                                key={r}
                                onClick={() => setRole(r.toLowerCase())}
                                className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${role === r.toLowerCase()
                                    ? 'bg-white text-brand-navy shadow-sm'
                                    : 'text-gray-500 hover:text-brand-navy'
                                    }`}
                            >
                                {r}
                            </button>
                        ))}
                    </div>

                    <form onSubmit={handleRegister} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase tracking-wide text-gray-500">First Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input type="text" className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal/50" required placeholder="John" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase tracking-wide text-gray-500">Last Name</label>
                                <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal/50" required placeholder="Doe" />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase tracking-wide text-gray-500">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input type="email" className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal/50" required placeholder="john@example.com" />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase tracking-wide text-gray-500">Institution / Org</label>
                            <div className="relative">
                                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input type="text" className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal/50" required placeholder="University of Dar es Salaam" />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase tracking-wide text-gray-500">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input type="password" className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal/50" required placeholder="Create a strong password" />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-brand-navy text-white text-lg font-bold py-3.5 rounded-xl hover:bg-brand-blue transition-all shadow-lg hover:shadow-brand-blue/30 mt-4"
                        >
                            {loading ? 'Creating Account...' : 'Get Started'}
                        </button>
                    </form>

                    <p className="text-center mt-6 text-sm text-gray-500">
                        Already have an account? <Link to="/login" className="font-bold text-brand-navy hover:text-brand-blue">Sign In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
