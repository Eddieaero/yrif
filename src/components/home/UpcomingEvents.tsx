import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const events = [
    {
        id: 1,
        title: "National Youth Innovation Summit 2026",
        date: "Mar 15, 2026",
        location: "Julius Nyerere Convention Centre",
        category: "Summit",
        day: "15",
        month: "MAR"
    },
    {
        id: 2,
        title: "Research Methodologies Workshop",
        date: "Apr 02, 2026",
        location: "UDSM New Library Hall",
        category: "Workshop",
        day: "02",
        month: "APR"
    },
    {
        id: 3,
        title: "Tech-Agri Hackathon",
        date: "Apr 20, 2026",
        location: "Costech Innovation Hub",
        category: "Hackathon",
        day: "20",
        month: "APR"
    }
];

const UpcomingEvents = () => {
    return (
        <section id="events" className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <span className="text-brand-teal font-bold tracking-widest uppercase text-sm mb-2 block">Mark Your Calendar</span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy">Upcoming Events</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Events List */}
                    <div className="lg:col-span-2 space-y-6">
                        {events.map((event) => (
                            <div key={event.id} className="flex flex-col md:flex-row bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group">
                                {/* Date Badge */}
                                <div className="flex-shrink-0 flex md:flex-col items-center justify-center bg-brand-light text-brand-navy rounded-xl p-4 w-full md:w-24 md:h-24 mb-4 md:mb-0 md:mr-6">
                                    <span className="text-xl md:text-2xl font-bold block text-brand-gold">{event.day}</span>
                                    <span className="text-sm font-semibold uppercase tracking-wide">{event.month}</span>
                                </div>

                                {/* Content */}
                                <div className="flex-grow">
                                    <span className="text-xs font-bold text-brand-teal uppercase tracking-wide mb-1 block">
                                        {event.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">
                                        {event.title}
                                    </h3>
                                    <div className="flex flex-col sm:flex-row text-gray-500 text-sm gap-2 sm:gap-6 mb-4">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} />
                                            {event.date}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} />
                                            {event.location}
                                        </div>
                                    </div>
                                </div>

                                {/* Action */}
                                <div className="flex-shrink-0 flex items-center mt-4 md:mt-0">
                                    <Link to="/register" className="w-full md:w-auto px-6 py-2.5 rounded-lg border border-brand-navy text-brand-navy font-semibold hover:bg-brand-navy hover:text-white transition-all text-sm text-center">
                                        Register Now
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Featured / Countdown or Info Card */}
                    <div className="bg-brand-navy text-white rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between">
                        {/* Abstract Bg */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-teal rounded-full blur-3xl opacity-20 -ml-16 -mb-16"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-4">Don't Miss Out!</h3>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                Join our events to network with industry leaders, showcase your research, and learn from the best in the field.
                            </p>

                            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 mb-8">
                                <p className="text-sm text-gray-300 mb-2">Next Event In:</p>
                                <div className="flex gap-4 text-center">
                                    <div>
                                        <div className="text-2xl font-bold text-brand-teal">24</div>
                                        <div className="text-[10px] uppercase tracking-wider">Days</div>
                                    </div>
                                    <div className="text-2xl font-bold text-gray-500">:</div>
                                    <div>
                                        <div className="text-2xl font-bold text-brand-teal">10</div>
                                        <div className="text-[10px] uppercase tracking-wider">Hrs</div>
                                    </div>
                                    <div className="text-2xl font-bold text-gray-500">:</div>
                                    <div>
                                        <div className="text-2xl font-bold text-brand-teal">45</div>
                                        <div className="text-[10px] uppercase tracking-wider">Mins</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link to="/register" className="relative z-10 flex items-center justify-between bg-brand-teal text-brand-navy px-6 py-4 rounded-xl font-bold hover:bg-white transition-colors group">
                            View All Events
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;
