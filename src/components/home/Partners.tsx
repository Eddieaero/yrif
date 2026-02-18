
const Partners = () => {
    // Partner institution names
    const partners = [
        'University of Dar es Salaam',
        'Sokoine University of Agriculture',
        'Institute of Finance Management',
        'Muhimbili University',
        'Mbeya University',
        'Dar es Salaam Institute of Technology',
        'National Institute for Medical Research',
        'Tanzania Commission for Science and Technology',
        'Nelson Mandela African Institution',
        'Ardhi University'
    ];

    return (
        <section id="partners" className="py-16 bg-gradient-to-b from-brand-light via-white to-white border-b border-gray-100 overflow-hidden">
            <div className="container mx-auto px-4 text-center mb-8">
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Trusted by Leading Institutions</p>
            </div>

            {/* Infinite Scroll Container */}
            <div className="relative">
                {/* Left fade overlay */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none"></div>

                {/* Right fade overlay */}
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none"></div>

                <div className="flex animate-scroll">
                    {/* First set of logos */}
                    {partners.map((partner, index) => (
                        <div
                            key={`first-${index}`}
                            className="flex-shrink-0 mx-8 flex items-center justify-center"
                        >
                            <div className="bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                                <p className="text-brand-navy font-semibold text-lg whitespace-nowrap">{partner}</p>
                            </div>
                        </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {partners.map((partner, index) => (
                        <div
                            key={`second-${index}`}
                            className="flex-shrink-0 mx-8 flex items-center justify-center"
                        >
                            <div className="bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                                <p className="text-brand-navy font-semibold text-lg whitespace-nowrap">{partner}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
