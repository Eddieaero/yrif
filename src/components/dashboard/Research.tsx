import { useState } from 'react';
import { Plus, FileText, Download, MessageSquare } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Research = () => {
    const role = useSelector((state: RootState) => state.auth.role);
    const isStudent = role === 'student';

    const [papers] = useState([
        {
            id: 1,
            title: 'Sustainable Agriculture in Arid Regions of Dodoma',
            author: 'Alice Smith',
            date: '2024-02-15',
            status: 'Under Review',
            category: 'Agriculture'
        },
        {
            id: 2,
            title: 'AI-Powered Traffic Management System for Dar es Salaam',
            author: 'David M.',
            date: '2024-03-01',
            status: 'Approved',
            category: 'Technology'
        },
        {
            id: 3,
            title: 'Impact of Mobile Money on Rural Economy',
            author: 'Sarah Johnson',
            date: '2024-01-20',
            status: 'Published',
            category: 'Economics'
        },
    ]);

    return (
        <div className="space-y-6 animate-fade-in-up">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-display font-bold text-brand-navy">
                        {isStudent ? 'My Research' : 'Research Portal'}
                    </h1>
                    <p className="text-text-secondary text-sm">
                        {isStudent ? 'Track and manage your research submissions' : 'Review and manage platform research submissions'}
                    </p>
                </div>
                {isStudent && (
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-brand-teal text-white rounded-xl text-sm font-bold hover:bg-teal-600 shadow-lg shadow-teal-500/20 transition-all hover:scale-105">
                        <Plus size={18} />
                        New Submission
                    </button>
                )}
            </div>

            {/* List */}
            <div className="grid grid-cols-1 gap-4">
                {papers.map((paper) => (
                    <div key={paper.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:border-brand-teal/30 hover:shadow-md transition-all group flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                <FileText size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-brand-navy text-lg group-hover:text-brand-blue transition-colors">{paper.title}</h3>
                                <div className="flex flex-wrap items-center gap-3 text-sm mt-1">
                                    <span className="text-text-secondary">By {paper.author}</span>
                                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                    <span className="text-gray-400">{paper.date}</span>
                                    <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-600 text-xs font-medium">{paper.category}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 pl-16 md:pl-0">
                            <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide
                                 ${paper.status === 'Published' ? 'bg-green-100 text-green-700' :
                                    paper.status === 'Approved' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'}`}>
                                {paper.status}
                            </div>

                            <div className="flex gap-2">
                                <button className="p-2 text-gray-400 hover:text-brand-navy hover:bg-gray-50 rounded-lg transition-colors" title="View Comments">
                                    <MessageSquare size={18} />
                                </button>
                                <button className="p-2 text-gray-400 hover:text-brand-teal hover:bg-gray-50 rounded-lg transition-colors" title="Download">
                                    <Download size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Research;
