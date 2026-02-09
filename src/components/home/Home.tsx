import Hero from './Hero';
import Partners from './Partners';
import AboutSection from './AboutSection';
import Features from './Features';

const Home = () => {
    return (
        <div className="flex flex-col">
            <Hero />
            <Partners />
            <AboutSection />
            <Features />
        </div>
    );
};

export default Home;
