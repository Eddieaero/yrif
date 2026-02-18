import { Users, FileText, Calendar, Handshake } from 'lucide-react';

const metrics = [
    { icon: Users, value: '5,000+', label: 'Youth Members' },
    { icon: FileText, value: '120+', label: 'Research Projects' },
    { icon: Calendar, value: '50+', label: 'Events Hosted' },
    { icon: Handshake, value: '30+', label: 'Partners' },
];

const ImpactMetrics = () => {
    return (
        <section className="py-20 bg-brand-navy text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-teal rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-gold rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Impact in Numbers</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Building a legacy of innovation and research excellence across Tanzania according to national development priorities.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {metrics.map((metric, index) => {
                        const Icon = metric.icon;
                        return (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-brand-teal/20 transition-all duration-300 transform group-hover:scale-110 border border-white/5">
                                    <Icon size={32} className="text-brand-gold" />
                                </div>
                                <h3 className="text-4xl md:text-5xl font-bold mb-2 text-white">{metric.value}</h3>
                                <p className="text-gray-400 font-medium uppercase tracking-wider text-sm">{metric.label}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ImpactMetrics;
