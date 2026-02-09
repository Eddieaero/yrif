import { useSelector } from 'react-redux';
import { MessageSquare, Clock, CheckCircle, Plus } from 'lucide-react';
import { RootState } from '../../store/store';

const Mentorship = () => {
    const role = useSelector((state: RootState) => state.auth.role);
    const isStudent = role === 'student';

    // Mock Data
    const mentor = {
        name: 'Dr. Sarah K.',
        role: 'Senior Researcher, NIMR',
        expertise: ['Public Health', 'Data Analysis'],
        status: 'Active',
        nextSession: 'Tue, 12 Mar 10:00 AM'
    };

    const mentees = [
        { id: 1, name: 'John Doe', project: 'Urban Farming AI', status: 'On Track', lastMeeting: '2 days ago' },
        { id: 2, name: 'Jane Smith', project: 'Water Purification', status: 'Needs Review', lastMeeting: '1 week ago' },
    ];

    const requests = [
        { id: 3, name: 'Michael B.', interest: 'Health Tech', status: 'Pending' }
    ];

    return (
        <div className="space-y-8 animate-fade-in-up">
            <div>
                <h1 className="text-2xl font-display font-bold text-brand-navy">Mentorship Center</h1>
                <p className="text-text-secondary text-sm">
                    {isStudent ? 'Connect with experts to guide your research' : 'Guide the next generation of researchers'}
                </p>
            </div>

            {isStudent ? (
                // STUDENT VIEW
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* My Mentor Card */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h2 className="text-lg font-bold text-brand-navy mb-6">Your Assigned Mentor</h2>
                            <div className="flex flex-col sm:flex-row gap-6 items-start">
                                <div className="w-20 h-20 rounded-full bg-brand-light flex items-center justify-center text-2xl font-bold text-brand-navy border-2 border-brand-teal/20">
                                    SK
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-bold text-brand-navy">{mentor.name}</h3>
                                            <p className="text-brand-blue font-medium text-sm">{mentor.role}</p>
                                        </div>
                                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                            {mentor.status}
                                        </span>
                                    </div>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {mentor.expertise.map((exp) => (
                                            <span key={exp} className="px-2 py-1 bg-gray-50 text-gray-600 rounded text-xs border border-gray-100">
                                                {exp}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-6 flex gap-3">
                                        <button className="flex-1 bg-brand-navy text-white py-2.5 rounded-xl text-sm font-bold shadow-lg hover:bg-brand-blue transition-colors flex items-center justify-center gap-2">
                                            <MessageSquare size={16} />
                                            Message
                                        </button>
                                        <button className="flex-1 bg-white border border-gray-200 text-brand-navy py-2.5 rounded-xl text-sm font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                                            <Clock size={16} />
                                            Schedule Session
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <div className="flex items-center gap-4 p-4 bg-brand-light/30 rounded-xl border border-dashed border-gray-200">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-teal shadow-sm">
                                        <CalendarIcon />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs font-bold text-gray-500 uppercase">Next Session</p>
                                        <p className="text-brand-navy font-bold">{mentor.nextSession}</p>
                                    </div>
                                    <button className="text-brand-blue text-sm font-semibold hover:underline">Reschedule</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Actions */}
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-brand-navy to-brand-blue p-6 rounded-2xl text-white shadow-xl relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="font-bold text-lg mb-2">Need Help?</h3>
                                <p className="text-blue-100 text-sm mb-6">Explore our resource library or reach out to the admin if you need a different mentor.</p>
                                <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white w-full py-2.5 rounded-xl text-sm font-bold hover:bg-white hover:text-brand-navy transition-all">
                                    Contact Admin
                                </button>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            ) : (
                // MENTOR/ADMIN VIEW
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <h2 className="text-lg font-bold text-brand-navy mb-4">Active Mentees</h2>
                        <div className="space-y-4">
                            {mentees.map((m) => (
                                <div key={m.id} className="p-4 rounded-xl border border-gray-100 hover:border-brand-teal/30 hover:shadow-sm transition-all flex items-center justify-between group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
                                            {m.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <div className="font-bold text-brand-navy">{m.name}</div>
                                            <div className="text-xs text-text-secondary">{m.project}</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-1">
                                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase
                                            ${m.status === 'On Track' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                                            {m.status}
                                        </span>
                                        <span className="text-[10px] text-gray-400">Met {m.lastMeeting}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-6 py-2.5 border border-dashed border-gray-300 text-gray-500 font-medium rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                            <Plus size={16} />
                            Log Meeting Notes
                        </button>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <h2 className="text-lg font-bold text-brand-navy mb-4">Pending Requests</h2>
                        {requests.length > 0 ? (
                            requests.map((r) => (
                                <div key={r.id} className="p-4 rounded-xl bg-orange-50 border border-orange-100 mb-3">
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <div className="font-bold text-brand-navy">{r.name}</div>
                                            <div className="text-xs text-gray-600">Interested in: {r.interest}</div>
                                        </div>
                                        <span className="bg-white px-2 py-1 rounded text-[10px] font-bold text-orange-600 shadow-sm">New Request</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="flex-1 bg-brand-navy text-white text-xs font-bold py-2 rounded-lg hover:bg-brand-dark">Accept</button>
                                        <button className="flex-1 bg-white border border-gray-200 text-gray-600 text-xs font-bold py-2 rounded-lg hover:bg-gray-50">View Profile</button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-8 text-gray-400">
                                <CheckCircle className="mx-auto mb-2 opacity-50" size={32} />
                                <p className="text-sm">No pending requests</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

const CalendarIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);

export default Mentorship;
