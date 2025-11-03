import { useState, useEffect, useRef } from 'react'; 
import { CodeBracketIcon, CommandLineIcon, RocketLaunchIcon, UserIcon, EnvelopeIcon, BriefcaseIcon, ArrowTopRightOnSquareIcon, StarIcon, SparklesIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Portfolio = () => {
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

                {/* Hero Section */}
                <section id="home" ref={sectionRefs.home} className="min-h-screen flex items-center py-12 lg:py-20 relative overflow-hidden">
                    <div className="container mx-auto px-4 sm:px-6 flex flex-col-reverse lg:flex-row items-center justify-between relative z-10">
                        <div className="lg:w-1/2 mt-8 lg:mt-0">
                            <div className="animate-fade-in">
                                {/* Badge */}
                                <div className="inline-flex items-center px-4 py-2 lg:px-6 lg:py-3 bg-gray-800 rounded-xl lg:rounded-2xl border border-gray-700 mb-6 lg:mb-8 shadow-xl lg:shadow-2xl">
                                    <div className="w-2 h-2 lg:w-3 lg:h-3 bg-emerald-400 rounded-full mr-2 lg:mr-3 animate-pulse"></div>
                                    <span className="text-emerald-400 font-semibold text-xs lg:text-sm">Full Stack Developer</span>
                                    <div className="ml-2 lg:ml-3 px-1.5 py-0.5 lg:px-2 lg:py-1 bg-amber-400/10 rounded">
                                        <span className="text-amber-400 text-xs font-bold">Available</span>
                                    </div>
                                </div>

                                {/* Main heading */}
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 lg:mb-6">
                                    <span className="block text-gray-300 text-3xl sm:text-4xl md:text-5xl">Hi, I'm</span>
                                    <span className="text-emerald-400 relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                                        Rahul Mohite
                                    </span>
                                </h1>

                                {/* Description */}
                                <p className="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed mb-6 lg:mb-8">
                                    I craft <span className="text-emerald-400 font-semibold">digital experiences</span> that blend 
                                    innovative technology with elegant design. Passionate about building 
                                    <span className="text-purple-400 font-semibold"> scalable solutions</span> that make a real impact.
                                </p>

                                {/* CTA Buttons */}
                                <div className="flex flex-wrap gap-4 lg:gap-6">
                                    <button
                                        onClick={() => scrollToSection('projects')}
                                        className="px-6 py-3 lg:px-8 lg:py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl lg:rounded-2xl transition-all duration-300 transform hover:-translate-y-1 lg:hover:-translate-y-2 flex items-center shadow-xl lg:shadow-2xl hover:shadow-3xl relative overflow-hidden group text-sm lg:text-base"
                                    >
                                        <span className="relative z-10 flex items-center">
                                            <RocketLaunchIcon className="h-5 w-5 lg:h-6 lg:w-6 mr-2 lg:mr-3" />
                                            Explore Projects
                                        </span>
                                    </button>
                                    
                                    <button
                                        onClick={() => scrollToSection('contact')}
                                        className="px-6 py-3 lg:px-8 lg:py-4 border-2 border-gray-700 rounded-xl lg:rounded-2xl hover:border-emerald-400 hover:bg-emerald-400/5 transition-all duration-300 transform hover:-translate-y-1 lg:hover:-translate-y-2 flex items-center shadow-xl lg:shadow-2xl hover:shadow-3xl group text-sm lg:text-base"
                                    >
                                        <EnvelopeIcon className="h-5 w-5 lg:h-6 lg:w-6 mr-2 lg:mr-3 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                                        Let's Connect
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Profile Image Section */}
                        <div className="lg:w-2/5 flex justify-center">
                            <div className="relative animate-float">
                                {/* Outer glow */}
                                <div className="absolute inset-0 bg-emerald-400 rounded-2xl lg:rounded-3xl blur-xl opacity-20 animate-pulse"></div>
                                
                                {/* Main container */}
                                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gray-800 rounded-2xl lg:rounded-3xl border-2 border-gray-700 shadow-2xl overflow-hidden group">
                                    <div className="relative w-full h-full flex items-center justify-center p-6 lg:p-8">
                                        <div className="text-center">
                                            <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto mb-4 lg:mb-6 rounded-xl lg:rounded-2xl bg-gray-700 border-2 border-gray-600 flex items-center justify-center shadow-xl lg:shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                                                <UserIcon className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-gray-400 group-hover:text-emerald-400 transition-colors duration-500" />
                                            </div>
                                            <div className="bg-gray-800/50 rounded-lg lg:rounded-xl p-3 lg:p-4 border border-gray-700 backdrop-blur-sm">
                                                <div className="text-xs lg:text-sm text-gray-400">Full Stack Developer</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" ref={sectionRefs.about} className="py-16 lg:py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gray-800/30"></div>
                    
                    <div className="absolute top-5 right-5 lg:top-10 lg:right-10 w-12 h-12 lg:w-20 lg:h-20 bg-emerald-400/10 rounded-full blur-xl"></div>
                    <div className="absolute bottom-10 left-5 lg:bottom-20 lg:left-10 w-20 h-20 lg:w-32 lg:h-32 bg-purple-400/10 rounded-full blur-xl"></div>

                    <div className="container mx-auto px-4 sm:px-6 relative z-10">
                        <div className="text-center mb-12 lg:mb-20">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">
                                <span className="text-emerald-400">
                                    About Me
                                </span>
                            </h2>
                            <div className="w-20 lg:w-32 h-1 bg-emerald-400 mx-auto rounded-full mb-3 lg:mb-4"></div>
                            <p className="text-gray-400 text-base lg:text-lg max-w-3xl mx-auto">
                                Passionate developer crafting digital solutions with precision and creativity
                            </p>
                        </div>

                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-16 items-center">
                            {/* Visual Section */}
                            <div className="relative group order-2 xl:order-1">
                                <div className="relative bg-gray-800 rounded-2xl lg:rounded-3xl p-6 lg:p-8 border-2 border-gray-700 shadow-2xl transform group-hover:scale-105 transition-transform duration-700">
                                    {/* Decorative corners */}
                                    <div className="absolute top-3 left-3 lg:top-4 lg:left-4 w-6 h-6 lg:w-8 lg:h-8 border-t-2 border-l-2 border-emerald-400 opacity-60"></div>
                                    <div className="absolute top-3 right-3 lg:top-4 lg:right-4 w-6 h-6 lg:w-8 lg:h-8 border-t-2 border-r-2 border-purple-400 opacity-60"></div>
                                    <div className="absolute bottom-3 left-3 lg:bottom-4 lg:left-4 w-6 h-6 lg:w-8 lg:h-8 border-b-2 border-l-2 border-amber-400 opacity-60"></div>
                                    <div className="absolute bottom-3 right-3 lg:bottom-4 lg:right-4 w-6 h-6 lg:w-8 lg:h-8 border-b-2 border-r-2 border-emerald-400 opacity-60"></div>

                                    <div className="text-center">
                                        <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto mb-6 lg:mb-8 rounded-xl lg:rounded-2xl bg-gray-700 border-2 border-gray-600 flex items-center justify-center shadow-2xl">
                                            <UserIcon className="h-20 w-20 sm:h-24 sm:w-24 lg:h-32 lg:w-32 text-gray-400" />
                                        </div>
                                        
                                        <div className="grid grid-cols-3 gap-3 lg:gap-4 mb-6 lg:mb-8">
                                            {['React', 'Node.js', 'MongoDB'].map((tech, i) => (
                                                <div key={i} className="bg-gray-800/50 rounded-lg p-2 lg:p-3 border border-gray-700">
                                                    <div className="text-xs text-gray-400">{tech}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="space-y-6 lg:space-y-8 order-1 xl:order-2">
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300">
                                    Crafting Digital Excellence
                                </h3>
                                
                                <div className="space-y-4 lg:space-y-6">
                                    <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                                        I'm a passionate <span className="text-emerald-400 font-semibold">Full-Stack Developer</span> with hands-on experience building scalable web applications. I thrive on turning complex challenges into elegant, user-centric solutions that make a real difference.
                                    </p>
                                    
                                    <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                                        My journey in tech started with curiosity about how things work behind the screen. From building my first website to developing full-stack applications, every project has been a learning experience that fuels my passion for creating meaningful digital solutions.
                                    </p>

                                    
                                </div>

                                {/* Skills highlights */}
                                <div className="grid grid-cols-2 gap-4 lg:gap-6 py-4 lg:py-6">
                                    {[
                                        { icon: '⚡', text: 'Fast Learning' },
                                        { icon: '🎯', text: 'Problem Solving' },
                                        { icon: '🔧', text: 'Clean Code' },
                                        { icon: '🚀', text: 'Modern Tech' }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center space-x-2 lg:space-x-3 bg-gray-800/50 rounded-lg lg:rounded-xl p-3 lg:p-4 border border-gray-700">
                                            <span className="text-xl lg:text-2xl">{item.icon}</span>
                                            <span className="text-gray-300 font-medium text-sm lg:text-base">{item.text}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-4 lg:gap-6 pt-4 lg:pt-6">
                                    <button
                                        onClick={() => {
                                            const link = document.createElement("a");
                                            link.href = "/Rahul Mohite.pdf";
                                            link.download = "Rahul_Mohite_Resume.pdf";
                                            document.body.appendChild(link);
                                            link.click();
                                            document.body.removeChild(link);
                                        }}
                                        className="px-6 py-3 lg:px-8 lg:py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl lg:rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-xl lg:shadow-2xl hover:shadow-3xl flex items-center group text-sm lg:text-base"
                                    >
                                        <svg className="h-4 w-4 lg:h-5 lg:w-5 mr-2 lg:mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                        Download Resume
                                    </button>
                                    
                                    <button
                                        onClick={() => scrollToSection('projects')}
                                        className="px-6 py-3 lg:px-8 lg:py-4 border-2 border-gray-700 text-gray-300 rounded-xl lg:rounded-2xl hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300 transform hover:-translate-y-1 flex items-center group text-sm lg:text-base"
                                    >
                                        <CodeBracketIcon className="h-4 w-4 lg:h-5 lg:w-5 mr-2 lg:mr-3 group-hover:scale-110 transition-transform duration-300" />
                                        View Projects
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" ref={sectionRefs.skills} className="py-16 lg:py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gray-900/50"></div>
                    
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0)`,
                            backgroundSize: '30px 30px'
                        }}></div>
                    </div>

                    <div className="container mx-auto px-4 sm:px-6 relative z-10">
                        <div className="text-center mb-12 lg:mb-20">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">
                                <span className="text-emerald-400">
                                    Technical Skills
                                </span>
                            </h2>
                            <div className="w-20 lg:w-32 h-1 bg-emerald-400 mx-auto rounded-full mb-3 lg:mb-4"></div>
                            <p className="text-gray-400 text-base lg:text-lg max-w-3xl mx-auto">
                                Technologies and tools I use to bring ideas to life
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                {
                                    category: 'Frontend Development',
                                    skills: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Bootstrap'],
                                    icon: <CodeBracketIcon className="h-6 w-6 lg:h-8 lg:w-8 text-emerald-400" />,
                                    color: 'emerald'
                                },
                                {
                                    category: 'Backend Development',
                                    skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
                                    icon: <CommandLineIcon className="h-6 w-6 lg:h-8 lg:w-8 text-purple-400" />,
                                    color: 'purple',
                                    badge: 'Growing Expertise'
                                },
                                {
                                    category: 'Tools & Technologies',
                                    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Responsive Design'],
                                    icon: <RocketLaunchIcon className="h-6 w-6 lg:h-8 lg:w-8 text-amber-400" />,
                                    color: 'amber'
                                }
                            ].map((skillGroup, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-gray-800 rounded-2xl lg:rounded-3xl border-2 border-gray-700 shadow-xl lg:shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 lg:hover:-translate-y-3"
                                >
                                    {/* Header */}
                                    <div className={`bg-${skillGroup.color}-500 h-2 rounded-t-2xl lg:rounded-t-3xl`}></div>
                                    
                                    {/* Content */}
                                    <div className="p-6 lg:p-8">
                                        <div className="flex items-center mb-4 lg:mb-6">
                                            <div className="p-2 lg:p-3 bg-gray-700 rounded-lg lg:rounded-xl shadow-lg">
                                                {skillGroup.icon}
                                            </div>
                                            <div className="ml-3 lg:ml-4">
                                                <h3 className="text-lg lg:text-xl font-bold text-gray-200">{skillGroup.category}</h3>
                                                {skillGroup.badge && (
                                                    <div className="inline-flex items-center px-2 py-0.5 lg:px-3 lg:py-1 bg-amber-400/10 border border-amber-400/20 rounded-full mt-1">
                                                        <StarIcon className="h-2 w-2 lg:h-3 lg:w-3 text-amber-400 mr-1" />
                                                        <span className="text-amber-400 text-xs font-bold">{skillGroup.badge}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-wrap gap-2 lg:gap-3">
                                            {skillGroup.skills.map((skill, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1.5 lg:px-4 lg:py-2 bg-gray-700 text-gray-200 rounded-lg lg:rounded-xl text-xs lg:text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-600 hover:border-emerald-400"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" ref={sectionRefs.projects} className="py-16 lg:py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gray-800/20"></div>
                    
                    <div className="container mx-auto px-4 sm:px-6 relative z-10">
                        <div className="text-center mb-12 lg:mb-20">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">
                                <span className="text-emerald-400">
                                    Featured Projects
                                </span>
                            </h2>
                            <div className="w-20 lg:w-32 h-1 bg-emerald-400 mx-auto rounded-full mb-3 lg:mb-4"></div>
                            <p className="text-gray-400 text-base lg:text-lg max-w-3xl mx-auto">
                                A showcase of my recent work and creative solutions
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                {
                                    title: 'Soil Report Generator',
                                    description: 'A comprehensive, multilingual web application for soil analysis and reporting that helps farmers and agricultural professionals analyze soil nutrients with responsive design.',
                                    technologies: ['React', 'HTML5', 'JavaScript', 'Tailwind CSS','Recharts','html2canvas'],
                                    demoLink: 'https://soil-report-generator-b12a.vercel.app/',
                                    featured: true,
                                    bgImage: '/Soil.jpg'
                                },
                                {
                                    title: 'Task Management System',
                                    description: 'Organize everything in one clean platform that works offline—no setup or subscriptions needed. Perfect for small teams who want to track progress and assign tasks.',
                                    technologies: ['React', 'HTML5', 'Tailwind CSS', 'JavaScript', 'Local Storage'],
                                    demoLink: 'https://employee-task-management-system-ten.vercel.app/',
                                    featured: false,
                                    bgImage: '/EMS.png'
                                },
                              
                            ].map((project, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-gray-800 rounded-2xl lg:rounded-3xl border-2 border-gray-700 shadow-xl lg:shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 lg:hover:-translate-y-4 overflow-hidden"
                                >
                                    {project.featured && (
                                        <div className="absolute top-3 left-3 lg:top-4 lg:left-4 bg-amber-500 text-gray-900 text-xs font-bold px-3 py-1 lg:px-4 lg:py-2 rounded-full z-10 flex items-center shadow-lg">
                                            <StarIcon className="h-2 w-2 lg:h-3 lg:w-3 mr-1" />
                                            Featured
                                        </div>
                                    )}
                                    
                                    {/* Project image */}
                                    <div 
                                        className="h-48 lg:h-64 relative overflow-hidden bg-gray-700"
                                        style={{
                                            backgroundImage: `url('${project.bgImage}')`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat'
                                        }}
                                    ></div>

                                    {/* Project content */}
                                    <div className="p-6 lg:p-8">
                                        <h3 className="text-lg lg:text-xl font-bold text-gray-200 mb-3 lg:mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">
                                            {project.description}
                                        </p>
                                        
                                        <div className="flex flex-wrap gap-1.5 lg:gap-2 mb-4 lg:mb-6">
                                            {project.technologies.map((tech, i) => (
                                                <span key={i} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs border border-gray-600">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        <div className="flex justify-between items-center">
                                            <a
                                                href={project.demoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center px-4 py-2 lg:px-6 lg:py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg lg:rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl group/link text-sm lg:text-base"
                                            >
                                                <span>Live Demo</span>
                                                <ArrowTopRightOnSquareIcon className="h-3 w-3 lg:h-4 lg:w-4 ml-1 lg:ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                                            </a>
                                            <span className="text-gray-500 text-xs lg:text-sm">#{String(index + 1).padStart(2, '0')}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" ref={sectionRefs.contact} className="py-16 lg:py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gray-900/50"></div>
                    
                    <div className="container mx-auto px-4 sm:px-6 relative z-10">
                        <div className="text-center mb-12 lg:mb-20">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">
                                <span className="text-emerald-400">
                                    Get In Touch
                                </span>
                            </h2>
                            <div className="w-20 lg:w-32 h-1 bg-emerald-400 mx-auto rounded-full mb-3 lg:mb-4"></div>
                            <p className="text-gray-400 text-base lg:text-lg max-w-3xl mx-auto">
                                Let's discuss your next project or opportunity
                            </p>
                        </div>

                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                                {/* Contact Form */}
                                <div className="bg-gray-800 rounded-2xl lg:rounded-3xl border-2 border-gray-700 shadow-xl lg:shadow-2xl p-6 lg:p-8 transform hover:shadow-3xl transition-all duration-500">
                                    <h3 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 text-gray-200">
                                        Send Message
                                    </h3>
                                    <form className="space-y-4 lg:space-y-6">
                                        <div className="grid grid-cols-1 gap-4 lg:gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium mb-2 lg:mb-3 text-gray-400">Your Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    className="w-full px-3 py-2 lg:px-4 lg:py-3 bg-gray-700 border-2 border-gray-600 rounded-lg lg:rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-white transition-all duration-300 shadow-lg text-sm lg:text-base"
                                                    placeholder="Your Name"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium mb-2 lg:mb-3 text-gray-400">Email Address</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    className="w-full px-3 py-2 lg:px-4 lg:py-3 bg-gray-700 border-2 border-gray-600 rounded-lg lg:rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-white transition-all duration-300 shadow-lg text-sm lg:text-base"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="subject" className="block text-sm font-medium mb-2 lg:mb-3 text-gray-400">Subject</label>
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    className="w-full px-3 py-2 lg:px-4 lg:py-3 bg-gray-700 border-2 border-gray-600 rounded-lg lg:rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-white transition-all duration-300 shadow-lg text-sm lg:text-base"
                                                    placeholder="Project Discussion"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="message" className="block text-sm font-medium mb-2 lg:mb-3 text-gray-400">Your Message</label>
                                                <textarea
                                                    id="message"
                                                    rows="4"
                                                    className="w-full px-3 py-2 lg:px-4 lg:py-3 bg-gray-700 border-2 border-gray-600 rounded-lg lg:rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-white transition-all duration-300 shadow-lg text-sm lg:text-base"
                                                    placeholder="Hello, I would like to talk about..."
                                                ></textarea>
                                            </div>
                                        </div>
                                        <button 
                                            type="submit" 
                                            className="w-full px-6 py-3 lg:px-6 lg:py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl lg:rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-xl lg:shadow-2xl hover:shadow-3xl font-bold text-sm lg:text-lg"
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                </div>

                                {/* Contact Information */}
                                <div className="space-y-6 lg:space-y-8">
                                    <div>
                                        <h3 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-gray-200">
                                            Contact Information
                                        </h3>
                                        <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
                                            Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 lg:gap-6">
                                        {[
                                            {
                                                icon: <EnvelopeIcon className="h-5 w-5 lg:h-6 lg:w-6 text-emerald-400" />,
                                                title: 'Email',
                                                content: 'mohiterahul8380@gmail.com',
                                                link: 'mailto:mohiterahul8380@gmail.com'
                                            },
                                            {
                                                icon: <CommandLineIcon className="h-5 w-5 lg:h-6 lg:w-6 text-purple-400" />,
                                                title: 'GitHub',
                                                content: 'RahulMohiteDEV',
                                                link: 'https://github.com/RahulMohiteDEV'
                                            },
                                            {
                                                icon: <BriefcaseIcon className="h-5 w-5 lg:h-6 lg:w-6 text-amber-400" />,
                                                title: 'LinkedIn',
                                                content: 'Rahul Mohite',
                                                link: 'https://www.linkedin.com/in/rahul-mohite-5039162a1/'
                                            },
                                            {
                                                icon: (
                                                    <svg className="h-5 w-5 lg:h-6 lg:w-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.49" />
                                                    </svg>
                                                ),
                                                title: 'WhatsApp',
                                                content: '+91 9922935750',
                                                link: 'https://wa.me/919922935750'
                                            }
                                        ].map((contact, index) => (
                                            <a
                                                key={index}
                                                href={contact.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center p-4 lg:p-6 bg-gray-800 rounded-xl lg:rounded-2xl border-2 border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 lg:hover:-translate-y-2 group cursor-pointer"
                                            >
                                                <div className="p-2 lg:p-4 rounded-lg bg-gray-700 group-hover:bg-emerald-400/10 transition-colors duration-300">
                                                    {contact.icon}
                                                </div>
                                                <div className="ml-4 lg:ml-6">
                                                    <h4 className="font-semibold text-gray-200 group-hover:text-white transition-colors duration-300 text-sm lg:text-base">
                                                        {contact.title}
                                                    </h4>
                                                    <p className="text-gray-400 text-xs lg:text-sm mt-1">{contact.content}</p>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-12 lg:py-16 bg-gray-900 border-t border-gray-700/50 relative overflow-hidden">
                    <div className="container mx-auto px-4 sm:px-6 relative z-10">
                        <div className="text-center">
                            <a href="#" className="text-2xl lg:text-3xl font-bold text-emerald-400 mb-4 lg:mb-6 inline-block">
                                <span className="flex items-center justify-center">
                                    <SparklesIcon className="h-6 w-6 lg:h-8 lg:w-8 mr-2 lg:mr-3 text-amber-400" />
                                    Rahul Mohite
                                </span>
                            </a>
                            <p className="text-gray-400 mb-6 lg:mb-8 max-w-md mx-auto text-sm lg:text-lg">
                                Full Stack Developer passionate about creating exceptional digital experiences
                            </p>
                            
                            {/* Social Links */}
                            <div className="flex justify-center space-x-4 lg:space-x-6 mb-6 lg:mb-8">
                                {['mailto:mohiterahul8380@gmail.com', 'https://github.com/RahulMohiteDEV', 'https://www.linkedin.com/in/rahul-mohite-5039162a1/', 'https://wa.me/919922935750'].map((link, index) => (
                                    <a
                                        key={index}
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 lg:p-3 bg-gray-800 rounded-xl lg:rounded-2xl border-2 border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 hover:border-emerald-400"
                                    >
                                        {link.includes('mailto') && <EnvelopeIcon className="h-4 w-4 lg:h-6 lg:w-6 text-emerald-400" />}
                                        {link.includes('github') && <CommandLineIcon className="h-4 w-4 lg:h-6 lg:w-6 text-purple-400" />}
                                        {link.includes('linkedin') && <BriefcaseIcon className="h-4 w-4 lg:h-6 lg:w-6 text-amber-400" />}
                                        {link.includes('wa.me') && (
                                            <svg className="h-4 w-4 lg:h-6 lg:w-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.49" />
                                            </svg>
                                        )}
                                    </a>
                                ))}
                            </div>
                            
                            <div className="border-t border-gray-700/50 pt-6 lg:pt-8">
                                <p className="text-gray-500 text-sm lg:text-base">
                                    © {new Date().getFullYear()} Rahul Mohite. Crafted with passion and precision.
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

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
    );
};

export default Portfolio;