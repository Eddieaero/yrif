import Hero from './Hero';
import AboutSection from './AboutSection';
import Features from './Features';
import FeaturedResearch from './FeaturedResearch';
import UpcomingEvents from './UpcomingEvents';
import ImpactMetrics from './ImpactMetrics';
import MentorshipHighlight from './MentorshipHighlight';
import Partners from './Partners';
import CTASection from './CTASection';

const Home = () => {
    return (
        <div className="flex flex-col">
            <Hero />
            <AboutSection />
            <Features />
            <FeaturedResearch />
            <UpcomingEvents />
            <ImpactMetrics />
            <MentorshipHighlight />
            <Partners />
            <CTASection />
        </div>
    );
};

export default Home;
