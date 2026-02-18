import { FileText, Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const researchItems = [
    {
        id: 1,
        title: "Sustainable Agriculture Techniques in Arid Regions",
        author: "Sarah M. Juma",
        category: "Agriculture",
        date: "Feb 10, 2026",
        abstract: "An in-depth analysis of drip irrigation and drought-resistant crops suitable for Dodoma region."
    },
    {
        id: 2,
        title: "AI-Driven Healthcare Diagnostics for Rural Clinics",
        author: "David K. Mlay",
        category: "Health Tech",
        date: "Jan 28, 2026",
        abstract: "Proposed framework for deploying lightweight AI models to assist diagnosis in remote areas."
    },
    {
        id: 3,
        title: "Renewable Energy Adoption Trends in Urban Centers",
        author: "Grace L. Shirima",
        category: "Energy",
        date: "Jan 15, 2026",
        abstract: "Survey results on solar power adoption rates among SMEs in Dar es Salaam."
    }
];

const FeaturedResearch = () => {
    return (
        <section id="research" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-brand-teal font-bold tracking-widest uppercase text-sm mb-2 block">Latest Findings</span>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy">Featured Research</h2>
                    </div>
                    <Link to="/register" className="group flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-blue transition-colors">
                        View All Research
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {researchItems.map((item) => (
                        <div key={item.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                            <div className="flex justify-between items-start mb-4">
                                <span className="bg-brand-gold/10 text-brand-gold px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                    {item.category}
                                </span>
                                <span className="text-gray-400 text-xs">{item.date}</span>
                            </div>

                            <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-blue transition-colors line-clamp-2">
                                {item.title}
                            </h3>

                            <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-2">
                                {item.author}
                            </p>

                            <p className="text-text-secondary text-base mb-6 line-clamp-3">
                                {item.abstract}
                            </p>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                <span className="text-sm font-semibold text-gray-400 flex items-center gap-2">
                                    <FileText size={16} />
                                    PDF
                                </span>
                                <button className="text-brand-teal hover:text-brand-navy font-semibold text-sm flex items-center gap-2 transition-colors">
                                    <Download size={18} />
                                    Download
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedResearch;
