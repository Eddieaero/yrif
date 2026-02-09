import { useState } from 'react';
import { MapPin, Clock, Plus, Users, CheckCircle } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Events = () => {
    const role = useSelector((state: RootState) => state.auth.role);
    const isAdmin = role === 'admin';

    const [events, setEvents] = useState([
        {
            id: 1,
            title: 'National Youth Innovation Summit 2024',
            date: '2024-06-15',
            time: '09:00 AM - 05:00 PM',
            location: 'Julius Nyerere International Convention Centre',
            category: 'Conference',
            attendees: 120,
            status: 'Open',
            registered: true
        },
        {
            id: 2,
            title: 'Research Methodology Workshop',
            date: '2024-04-10',
            time: '10:00 AM - 01:00 PM',
            location: 'Online (Zoom)',
            category: 'Workshop',
            attendees: 45,
            status: 'Open',
            registered: false
        },
        {
            id: 3,
            title: 'Agri-Tech Hackathon',
            date: '2024-05-20',
            time: '08:00 AM',
            location: 'COSTECH Innovation Hub',
            category: 'Competition',
            attendees: 80,
            status: 'Closing Soon',
            registered: false
        }
    ]);

    const handleRegister = (id: number) => {
        setEvents(events.map(ev => ev.id === id ? { ...ev, registered: !ev.registered } : ev));
    };

    return (
        <div className="space-y-8 animate-fade-in-up">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-display font-bold text-brand-navy">Events & Competitions</h1>
                    <p className="text-text-secondary text-sm">Discover and participate in research opportunities</p>
                </div>
                {isAdmin && (
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-brand-navy text-white rounded-xl text-sm font-bold shadow-lg hover:bg-brand-dark transition-all">
                        <Plus size={18} />
                        Create Event
                    </button>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                    <div key={event.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all">
                        <div className="h-32 bg-brand-light relative">
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-navy shadow-sm">
                                {event.category}
                            </div>
                            <div className="absolute -bottom-6 left-6 w-16 h-16 bg-white rounded-xl border border-gray-100 flex flex-col items-center justify-center shadow-sm z-10">
                                <span className="text-xs font-bold text-red-500 uppercase">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
                                <span className="text-xl font-bold text-brand-navy">{new Date(event.date).getDate()}</span>
                            </div>
                        </div>

                        <div className="pt-10 p-6 flex-1 flex flex-col">
                            <h3 className="text-lg font-bold text-brand-navy mb-3 line-clamp-2">{event.title}</h3>

                            <div className="space-y-3 mb-6 flex-1">
                                <div className="flex items-start gap-3 text-sm text-gray-600">
                                    <Clock size={16} className="text-brand-teal mt-0.5" />
                                    <span>{event.time}</span>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-gray-600">
                                    <MapPin size={16} className="text-brand-teal mt-0.5" />
                                    <span>{event.location}</span>
                                </div>
                                {isAdmin && (
                                    <div className="flex items-start gap-3 text-sm text-gray-600">
                                        <Users size={16} className="text-brand-teal mt-0.5" />
                                        <span>{event.attendees} Registered</span>
                                    </div>
                                )}
                            </div>

                            {!isAdmin ? (
                                <button
                                    onClick={() => handleRegister(event.id)}
                                    className={`w-full py-2.5 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2
                                    ${event.registered
                                            ? 'bg-green-50 text-green-700 hover:bg-green-100'
                                            : 'bg-brand-navy text-white hover:bg-brand-blue shadow-lg shadow-brand-navy/20'}`}
                                >
                                    {event.registered ? (
                                        <>
                                            <CheckCircle size={16} />
                                            Registered
                                        </>
                                    ) : 'Register Now'}
                                </button>
                            ) : (
                                <button className="w-full py-2.5 rounded-xl border border-gray-200 text-brand-navy font-bold text-sm hover:bg-gray-50 transition-colors">
                                    Manage Event
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
