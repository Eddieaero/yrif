import { FileText, Download, PlayCircle, ExternalLink, Search } from 'lucide-react';

const Resources = () => {
    const resources = [
        { id: 1, title: 'YRIF Research Guidelines 2024', type: 'PDF', size: '2.4 MB', category: 'Documentation' },
        { id: 2, title: 'Ethics Committee Submission Form', type: 'DOCX', size: '150 KB', category: 'Templates' },
        { id: 3, title: 'How to Write a Winning Proposal', type: 'Video', size: '15 Min', category: 'Tutorials' },
        { id: 4, title: 'National Data Sets Portal', type: 'Link', size: 'External', category: 'Data' },
    ];

    return (
        <div className="space-y-8 animate-fade-in-up">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-display font-bold text-brand-navy">Resources Hub</h1>
                    <p className="text-text-secondary text-sm">Essential tools, guides, and templates for your research</p>
                </div>
                <div className="relative max-w-xs w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search resources..."
                        className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal/50 shadow-sm"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {resources.map((res) => (
                    <div key={res.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-teal/30 transition-all group cursor-pointer">
                        <div className="flex items-start justify-between mb-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center 
                                ${res.type === 'PDF' ? 'bg-red-50 text-red-600' :
                                    res.type === 'DOCX' ? 'bg-blue-50 text-blue-600' :
                                        res.type === 'Video' ? 'bg-purple-50 text-purple-600' : 'bg-gray-50 text-gray-600'}`}>
                                {res.type === 'PDF' && <FileText size={24} />}
                                {res.type === 'DOCX' && <FileText size={24} />}
                                {res.type === 'Video' && <PlayCircle size={24} />}
                                {res.type === 'Link' && <ExternalLink size={24} />}
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-gray-50 px-2 py-1 rounded">
                                {res.type}
                            </span>
                        </div>

                        <h3 className="font-bold text-brand-navy text-sm mb-2 group-hover:text-brand-blue transition-colors line-clamp-2 min-h-[2.5rem]">
                            {res.title}
                        </h3>

                        <div className="flex items-center justify-between text-xs text-gray-500 mt-4 pt-4 border-t border-gray-50">
                            <span>{res.category}</span>
                            <span className="flex items-center gap-1 group-hover:text-brand-teal transition-colors">
                                {res.type === 'Link' ? 'Visit' : 'Download'}
                                {res.type !== 'Link' && <Download size={14} />}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-brand-navy rounded-3xl p-8 text-center text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-2xl font-display font-bold mb-4">Can&apos;t find what you&apos;re looking for?</h2>
                    <p className="text-blue-100 mb-8 max-w-lg mx-auto">Our support team is always ready to help you navigate your research journey.</p>
                    <button className="bg-brand-teal text-white px-8 py-3 rounded-full font-bold hover:bg-teal-500 transition-colors shadow-lg">
                        Request a Resource
                    </button>
                </div>
                {/* Background Shapes */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-brand-blue/30 rounded-full blur-3xl -ml-16 -mt-16"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-teal/20 rounded-full blur-3xl -mr-16 -mb-16"></div>
            </div>
        </div>
    );
};

export default Resources;
