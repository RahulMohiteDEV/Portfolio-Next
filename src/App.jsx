import { useState, useEffect, useRef } from 'react'; 
import { CodeBracketIcon, CommandLineIcon, RocketLaunchIcon, UserIcon, EnvelopeIcon, BriefcaseIcon, ArrowTopRightOnSquareIcon, StarIcon, SparklesIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Hero from './componets/Sections/Hero';
import About from './componets/Sections/About';
import Skills from './componets/Sections/Skills';
import Projects from './componets/Sections/Project';
import Contact from './componets/Sections/Contact';
import Footer from './componets/Sections/Footer';

const App = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const sectionRefs = {
        home: useRef(null),
        about: useRef(null),
        skills: useRef(null),
        projects: useRef(null),
        contact: useRef(null)
    };

    // Simulate loading
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    // Mouse move effect for parallax
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;

            Object.entries(sectionRefs).forEach(([sectionId, ref]) => {
                if (ref.current) {
                    const sectionTop = ref.current.offsetTop;
                    const sectionHeight = ref.current.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveSection(sectionId);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        setIsMenuOpen(false);
        sectionRefs[sectionId].current.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    };

    // Loading animation
    if (isLoading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
                <div className="flex flex-col items-center">
                    <div className="relative mb-8">
                        <div className="w-20 h-20 md:w-24 md:h-24 border-4 border-emerald-400/20 rounded-full"></div>
                        <div className="w-20 h-20 md:w-24 md:h-24 border-4 border-emerald-400 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <SparklesIcon className="h-6 w-6 md:h-8 md:w-8 text-emerald-400 animate-pulse" />
                        </div>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-emerald-400 mb-4 text-center">
                        Rahul Mohite
                    </h2>
                    <p className="text-gray-400 mb-6 animate-pulse text-center px-4">Crafting digital experiences...</p>
                    <div className="flex space-x-2">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="w-2 h-2 md:w-3 md:h-3 bg-emerald-400 rounded-full animate-bounce"
                                style={{ animationDelay: `${i * 0.2}s` }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 text-gray-200 overflow-x-hidden">
            {/* Mobile Navigation Header */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 lg:hidden">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex justify-between items-center">
                        <a href="#" className="flex items-center group">
                            <SparklesIcon className="h-6 w-6 text-amber-400 mr-2" />
                            <span className="text-lg font-bold text-emerald-400">Rahul</span>
                        </a>
                        
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-emerald-400 transition-all duration-300"
                        >
                            {isMenuOpen ? (
                                <XMarkIcon className="h-6 w-6" />
                            ) : (
                                <Bars3Icon className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50">
                        <div className="container mx-auto px-4 py-4">
                            <div className="space-y-2">
                                {[
                                    { id: 'home', label: 'Home', icon: <SparklesIcon className="h-5 w-5" /> },
                                    { id: 'about', label: 'About', icon: <UserIcon className="h-5 w-5" /> },
                                    { id: 'skills', label: 'Skills', icon: <CodeBracketIcon className="h-5 w-5" /> },
                                    { id: 'projects', label: 'Projects', icon: <RocketLaunchIcon className="h-5 w-5" /> },
                                    { id: 'contact', label: 'Contact', icon: <EnvelopeIcon className="h-5 w-5" /> }
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-300 ${
                                            activeSection === item.id 
                                                ? 'bg-emerald-400/20 text-emerald-400' 
                                                : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                                        }`}
                                    >
                                        <div className={`p-2 rounded-lg mr-3 ${
                                            activeSection === item.id ? 'bg-emerald-400/20' : 'bg-gray-800'
                                        }`}>
                                            {item.icon}
                                        </div>
                                        <span className="font-medium">{item.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Left Side Navigation - Desktop */}
            <nav className="fixed left-0 top-0 h-full w-20 lg:w-24 xl:w-64 z-40 bg-gray-900/95 backdrop-blur-xl border-r border-gray-700/50 shadow-2xl transition-all duration-300 hidden lg:flex">
                <div className="flex flex-col h-full w-full">
                    {/* Logo */}
                    <div className="p-4 lg:p-6 border-b border-gray-700/50">
                        <a href="#" className="flex items-center group">
                            <SparklesIcon className="h-6 w-6 lg:h-8 lg:w-8 text-amber-400 flex-shrink-0" />
                            <span className="ml-3 text-lg lg:text-xl font-bold text-emerald-400 hidden xl:block group-hover:scale-105 transition-transform duration-300">
                                Rahul Mohite
                            </span>
                        </a>
                    </div>

                    {/* Navigation Items */}
                    <div className="flex-1 flex flex-col justify-center py-4 lg:py-8">
                        <div className="space-y-4 lg:space-y-8 px-2 lg:px-4">
                            {[
                                { id: 'home', label: 'Home', icon: <SparklesIcon className="h-5 w-5 lg:h-6 lg:w-6" /> },
                                { id: 'about', label: 'About', icon: <UserIcon className="h-5 w-5 lg:h-6 lg:w-6" /> },
                                { id: 'skills', label: 'Skills', icon: <CodeBracketIcon className="h-5 w-5 lg:h-6 lg:w-6" /> },
                                { id: 'projects', label: 'Projects', icon: <RocketLaunchIcon className="h-5 w-5 lg:h-6 lg:w-6" /> },
                                { id: 'contact', label: 'Contact', icon: <EnvelopeIcon className="h-5 w-5 lg:h-6 lg:w-6" /> }
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`w-full flex items-center group transition-all duration-300 relative ${
                                        activeSection === item.id 
                                            ? 'text-emerald-400 scale-105' 
                                            : 'text-gray-400 hover:text-gray-200'
                                    }`}
                                >
                                    {/* Active indicator */}
                                    <div className={`absolute -left-2 lg:-left-4 w-1 h-6 lg:h-8 bg-emerald-400 rounded-r-lg transition-all duration-300 ${
                                        activeSection === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                                    }`}></div>
                                    
                                    {/* Icon */}
                                    <div className={`p-2 lg:p-3 rounded-xl lg:rounded-2xl transition-all duration-300 flex-shrink-0 ${
                                        activeSection === item.id 
                                            ? 'bg-emerald-400/20 shadow-lg' 
                                            : 'bg-gray-800 group-hover:bg-gray-700/50'
                                    }`}>
                                        {item.icon}
                                    </div>
                                    
                                    {/* Label */}
                                    <span className="ml-3 font-medium hidden xl:block transition-all duration-300 group-hover:translate-x-1 text-sm lg:text-base">
                                        {item.label}
                                    </span>
                                    
                                    {/* Tooltip for small screens */}
                                    <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden lg:block xl:hidden">
                                        {item.label}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="p-4 lg:p-6 border-t border-gray-700/50">
                        <div className="flex justify-center xl:justify-start space-x-3 lg:space-x-4 xl:flex-col xl:space-x-0 xl:space-y-3">
                            {[
                                { href: 'mailto:mohiterahul8380@gmail.com', icon: <EnvelopeIcon className="h-4 w-4 lg:h-5 lg:w-5" />, label: 'Email' },
                                { href: 'https://github.com/RahulMohiteDEV', icon: <CommandLineIcon className="h-4 w-4 lg:h-5 lg:w-5" />, label: 'GitHub' },
                                { href: 'https://www.linkedin.com/in/rahul-mohite-5039162a1/', icon: <BriefcaseIcon className="h-4 w-4 lg:h-5 lg:w-5" />, label: 'LinkedIn' }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center group text-gray-400 hover:text-emerald-400 transition-all duration-300"
                                >
                                    <div className="p-1.5 lg:p-2 rounded-lg bg-gray-800 group-hover:bg-emerald-400/10 transition-colors duration-300">
                                        {social.icon}
                                    </div>
                                    <span className="ml-2 text-xs hidden xl:block">{social.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="lg:ml-20 xl:ml-64 transition-all duration-300 pt-16 lg:pt-0">
                {/* Animated Background Elements */}
                <div className="fixed inset-0 -z-10 overflow-hidden">
                    <div className="absolute top-10 left-5 w-48 h-48 md:w-72 md:h-72 bg-emerald-400/5 rounded-full blur-3xl animate-float-slow"></div>
                    <div className="absolute bottom-20 right-5 w-56 h-56 md:w-96 md:h-96 bg-purple-400/5 rounded-full blur-3xl animate-float-reverse"></div>
                    <div className="absolute top-1/2 left-1/2 w-40 h-40 md:w-64 md:h-64 bg-amber-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
                    
                    {/* Grid pattern */}
                    <div 
                        className="absolute inset-0 opacity-5"
                        style={{
                            backgroundImage: `linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)`,
                            backgroundSize: '40px 40px'
                        }}
                    ></div>
                </div>

                {/* Section Components */}
                <Hero sectionRefs={sectionRefs} scrollToSection={scrollToSection} />
                <About sectionRefs={sectionRefs} />
                <Skills sectionRefs={sectionRefs} />
                <Projects sectionRefs={sectionRefs} />
                <Contact sectionRefs={sectionRefs} />
                <Footer />

                {/* Custom CSS for enhanced animations */}
                <style jsx>{`
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(30px) scale(0.95); }
                        to { opacity: 1; transform: translateY(0) scale(1); }
                    }
                    @keyframes fadeInUp {
                        from { opacity: 0; transform: translateY(40px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes float {
                        0% { transform: translateY(0px) rotate(0deg); }
                        50% { transform: translateY(-10px) rotate(2deg); }
                        100% { transform: translateY(0px) rotate(0deg); }
                    }
                    @keyframes float-slow {
                        0% { transform: translateY(0px) scale(1); }
                        50% { transform: translateY(-20px) scale(1.05); }
                        100% { transform: translateY(0px) scale(1); }
                    }
                    @keyframes float-reverse {
                        0% { transform: translateY(0px) scale(1); }
                        50% { transform: translateY(20px) scale(0.95); }
                        100% { transform: translateY(0px) scale(1); }
                    }
                    @keyframes pulse-slow {
                        0% { opacity: 0.3; transform: scale(1); }
                        50% { opacity: 0.6; transform: scale(1.1); }
                        100% { opacity: 0.3; transform: scale(1); }
                    }
                    .animate-fade-in {
                        animation: fadeIn 1s ease-out forwards;
                    }
                    .animate-fade-in-up {
                        opacity: 0;
                        animation: fadeInUp 0.8s ease-out forwards;
                    }
                    .animate-float {
                        animation: float 6s ease-in-out infinite;
                    }
                    .animate-float-slow {
                        animation: float-slow 8s ease-in-out infinite;
                    }
                    .animate-float-reverse {
                        animation: float-reverse 10s ease-in-out infinite;
                    }
                    .animate-pulse-slow {
                        animation: pulse-slow 4s ease-in-out infinite
                    }
                    
                    /* Custom scrollbar */
                    ::-webkit-scrollbar {
                        width: 6px;
                    }
                    ::-webkit-scrollbar-track {
                        background: #0f172a;
                    }
                    ::-webkit-scrollbar-thumb {
                        background: #10b981;
                        border-radius: 3px;
                    }
                    ::-webkit-scrollbar-thumb:hover {
                        background: #34d399;
                    }

                    /* Smooth scrolling */
                    html {
                        scroll-behavior: smooth;
                    }
                `}</style>
            </div>
        </div>
    );
};

export default App;