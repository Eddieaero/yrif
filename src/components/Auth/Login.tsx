import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Mail, Lock } from 'lucide-react';
import logo from '../../assets/images/logo_dark.png';

const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
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
            <div className="bg-white max-w-md w-full rounded-3xl shadow-xl overflow-hidden animate-fade-in-up">
                <div className="p-8 md:p-10">
                    <div className="text-center mb-10">
                        <Link to="/" className="inline-block mb-4">
                            <img src={logo} alt="YRIF" className="h-12 mx-auto" />
                        </Link>
                        <h1 className="text-2xl font-display font-bold text-brand-navy">Welcome Back</h1>
                        <p className="text-text-secondary mt-2 text-sm">Sign in to access the YRIF Portal</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase tracking-wide text-gray-500">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="email"
                                    defaultValue="student@yrif.tz"
                                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:bg-white transition-all"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <div className="flex justify-between">
                                <label className="text-xs font-bold uppercase tracking-wide text-gray-500">Password</label>
                                <a href="#" className="text-xs font-bold text-brand-blue hover:underline">Forgot?</a>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="password"
                                    defaultValue="password"
                                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:bg-white transition-all"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-brand-navy text-white text-lg font-bold py-3.5 rounded-xl hover:bg-brand-blue transition-all shadow-lg hover:shadow-brand-blue/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                        >
                            {loading ? 'Signing in...' : 'Sign In'}
                            {!loading && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
                        </button>
                    </form>

                    <p className="text-center mt-8 text-sm text-gray-500">
                        Don&apos;t have an account? <Link to="/register" className="font-bold text-brand-navy hover:text-brand-blue">Create Account</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
