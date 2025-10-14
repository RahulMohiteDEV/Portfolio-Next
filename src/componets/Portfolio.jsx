import { useState, useEffect, useRef } from 'react'; 
import { CodeBracketIcon, CommandLineIcon, RocketLaunchIcon, UserIcon, EnvelopeIcon, BriefcaseIcon, ArrowTopRightOnSquareIcon, StarIcon, SparklesIcon } from '@heroicons/react/24/outline';

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

    // Color theme configuration - Solid colors only
    const colors = {
        primary: '#10b981', // Emerald
        secondary: '#8b5cf6', // Purple
        accent: '#f59e0b', // Amber
        dark: '#0f172a', // Dark blue-gray
        darker: '#020617', // Near black
        light: '#f1f5f9', // Light blue-gray
        background: '#0f172a'
    };

    // Simulate loading
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);
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
            const scrollPosition = window.scrollY + 200;

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
        sectionRefs[sectionId].current.scrollIntoView({ behavior: 'smooth' });
    };

    // Loading animation
    if (isLoading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
                <div className="flex flex-col items-center">
                    <div className="relative mb-8">
                        <div className="w-24 h-24 border-4 border-emerald-400/20 rounded-full"></div>
                        
                        <div className="w-24 h-24 border-4 border-emerald-400 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <SparklesIcon className="h-8 w-8 text-emerald-400 animate-pulse" />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-emerald-400 mb-4">
                        Rahul Mohite
                    </h2>
                    <p className="text-gray-400 mb-6 animate-pulse">Loading Creative Portfolio...</p>
                    <div className="flex space-x-3">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="w-3 h-3 bg-emerald-400 rounded-full animate-bounce"
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
            {/* Animated Background Elements */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                {/* Animated geometric shapes */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/5 rounded-full blur-3xl animate-float-slow"></div>
                <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl animate-float-reverse"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
                
                {/* Grid pattern */}
                <div 
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}
                ></div>
            </div>

            {/* Navigation */}
            <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-2xl font-bold text-emerald-400 relative group">
                            <span className="relative z-10 flex items-center">
                                <SparklesIcon className="h-6 w-6 mr-2 text-amber-400" />
                                Rahul Mohite
                            </span>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-8">
                            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className={`capitalize transition-all duration-300 relative group px-3 py-2 rounded-lg ${
                                        activeSection === item 
                                            ? 'bg-gray-800 text-emerald-400 shadow-lg' 
                                            : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                                    }`}
                                >
                                    {item}
                                    <span className={`absolute bottom-0 left-3 right-3 h-0.5 bg-emerald-400 transition-all duration-300 ${
                                        activeSection === item ? 'scale-100' : 'scale-0 group-hover:scale-100'
                                    }`}></span>
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-3 bg-gray-800 rounded-xl text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:bg-gray-700/50"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <div className="w-6 h-6 relative">
                                <span className={`absolute left-0 top-1 w-6 h-0.5 bg-current transition-all duration-300 ${
                                    isMenuOpen ? 'rotate-45 top-3 bg-emerald-400' : 'bg-current'
                                }`}></span>
                                <span className={`absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300 ${
                                    isMenuOpen ? 'opacity-0' : ''
                                }`}></span>
                                <span className={`absolute left-0 top-5 w-6 h-0.5 bg-current transition-all duration-300 ${
                                    isMenuOpen ? '-rotate-45 top-3 bg-emerald-400' : 'bg-current'
                                }`}></span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50">
                        <div className="container mx-auto px-6 py-4 flex flex-col space-y-2">
                            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className={`capitalize py-4 px-4 text-left transition-all duration-300 rounded-xl group ${
                                        activeSection === item 
                                            ? 'bg-gray-800 text-emerald-400 shadow-lg' 
                                            : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                                    }`}
                                >
                                    <span className="flex items-center">
                                        <div className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 ${
                                            activeSection === item 
                                                ? 'bg-emerald-400 scale-125' 
                                                : 'bg-gray-600 group-hover:bg-emerald-400'
                                        }`}></div>
                                        {item}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" ref={sectionRefs.home} className="min-h-screen flex items-center pt-24 pb-20 relative overflow-hidden">
                
                <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between relative z-10">
                    <div className="lg:w-1/2 mt-12 lg:mt-0">
                        <div className="animate-fade-in">
                            {/* Badge */}
                            <div className="inline-flex items-center px-6 py-3 bg-gray-800 rounded-2xl border border-gray-700 mb-8 shadow-2xl">
                                <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                                <span className="text-emerald-400 font-semibold text-sm">Full Stack Developer</span>
                                <div className="ml-3 px-2 py-1 bg-amber-400/10 rounded-lg">
                                    <span className="text-amber-400 text-xs font-bold">Available</span>
                                </div>
                            </div>

                            {/* Main heading */}
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                                <span className="block text-gray-300">Hi, I'm</span>
                                <span className="text-emerald-400 relative">
                                    Rahul Mohite
                                </span>
                            </h1>

                            {/* Description */}
                            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-8">
                                I craft <span className="text-emerald-400 font-semibold">digital experiences</span> that blend 
                                innovative technology with elegant design. Passionate about building 
                                <span className="text-purple-400 font-semibold"> scalable solutions</span> that make a real impact.
                            </p>

                            {/* CTA Buttons - No Gradients */}
                            <div className="flex flex-wrap gap-6">
                                <button
                                    onClick={() => scrollToSection('projects')}
                                    className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl transition-all duration-300 transform hover:-translate-y-2 flex items-center shadow-2xl hover:shadow-3xl relative overflow-hidden group"
                                >
                                    <span className="relative z-10 flex items-center">
                                        <RocketLaunchIcon className="h-6 w-6 mr-3" />
                                        Explore Projects
                                    </span>
                                </button>
                                
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="px-8 py-4 border-2 border-gray-700 rounded-2xl hover:border-emerald-400 hover:bg-emerald-400/5 transition-all duration-300 transform hover:-translate-y-2 flex items-center shadow-2xl hover:shadow-3xl group"
                                >
                                    <EnvelopeIcon className="h-6 w-6 mr-3 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                                    Let's Connect
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Profile Image Section */}
                    <div className="lg:w-2/5 flex justify-center">
                        <div className="relative animate-float">
                            {/* Outer glow */}
                            <div className="absolute inset-0 bg-emerald-400 rounded-3xl blur-xl opacity-20 animate-pulse"></div>
                            
                            {/* Main container */}
                            <div className="relative w-80 h-80 md:w-96 md:h-96 bg-gray-800 rounded-3xl border-2 border-gray-700 shadow-2xl overflow-hidden group">
                                {/* Profile content */}
                                <div className="relative w-full h-full flex items-center justify-center p-8">
                                    <div className="text-center">
                                        <div className="w-48 h-48 mx-auto mb-6 rounded-2xl bg-gray-700 border-2 border-gray-600 flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                                            <UserIcon className="h-20 w-20 text-gray-400 group-hover:text-emerald-400 transition-colors duration-500" />
                                        </div>
                                        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 backdrop-blur-sm">
                                            <div className="text-sm text-gray-400">Full Stack Developer</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" ref={sectionRefs.about} className="py-24 relative overflow-hidden">
                {/* Section background */}
                <div className="absolute inset-0 bg-gray-800/30"></div>
                
                {/* Decorative elements */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-emerald-400/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-20 left-10 w-32 h-32 bg-purple-400/10 rounded-full blur-xl"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="text-emerald-400">
                                About Me
                            </span>
                        </h2>
                        <div className="w-32 h-1 bg-emerald-400 mx-auto rounded-full mb-4"></div>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                            Passionate developer crafting digital solutions with precision and creativity
                        </p>
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
                        {/* Visual Section */}
                        <div className="relative group">
                            {/* Main card */}
                            <div className="relative bg-gray-800 rounded-3xl p-8 border-2 border-gray-700 shadow-2xl transform group-hover:scale-105 transition-transform duration-700">
                                {/* Decorative corners */}
                                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-emerald-400 opacity-60"></div>
                                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-purple-400 opacity-60"></div>
                                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-amber-400 opacity-60"></div>
                                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-emerald-400 opacity-60"></div>

                                <div className="text-center">
                                    <div className="w-64 h-64 mx-auto mb-8 rounded-2xl bg-gray-700 border-2 border-gray-600 flex items-center justify-center shadow-2xl">
                                        <UserIcon className="h-32 w-32 text-gray-400" />
                                    </div>
                                    
                                    <div className="grid grid-cols-3 gap-4 mb-8">
                                        {['React', 'Node.js', 'MongoDB'].map((tech, i) => (
                                            <div key={i} className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                                                <div className="text-xs text-gray-400">{tech}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="space-y-8">
                            <h3 className="text-4xl font-bold text-gray-300">
                                Crafting Digital Excellence
                            </h3>
                            
                            <div className="space-y-6">
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    I'm a passionate <span className="text-emerald-400 font-semibold">Full-Stack Developer</span> with 6 months of hands-on experience building scalable web applications. I thrive on turning complex challenges into elegant, user-centric solutions.
                                </p>
                                
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    My journey began with curiosity about how digital experiences are crafted, and has evolved into a dedication to creating applications that genuinely improve people's lives and workflows.
                                </p>

                                <p className="text-gray-300 leading-relaxed text-lg">
                                    When I'm not coding, I'm exploring emerging technologies, contributing to open-source projects, or diving into the latest trends in web development and UI/UX design.
                                </p>
                            </div>

                            {/* Skills highlights */}
                            <div className="grid grid-cols-2 gap-6 py-6">
                                {[
                                    { icon: '⚡', text: 'Fast Learning' },
                                    { icon: '🎯', text: 'Problem Solving' },
                                    { icon: '🔧', text: 'Clean Code' },
                                    { icon: '🚀', text: 'Modern Tech' }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center space-x-3 bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                                        <span className="text-2xl">{item.icon}</span>
                                        <span className="text-gray-300 font-medium">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Action Buttons - No Gradients */}
                            <div className="flex flex-wrap gap-6 pt-6">
                                <button
                                    onClick={() => {
                                        const link = document.createElement("a");
                                        link.href = "/Rahul Mohite.pdf";
                                        link.download = "Rahul_Mohite_Resume.pdf";
                                        document.body.appendChild(link);
                                        link.click();
                                        document.body.removeChild(link);
                                    }}
                                    className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-2xl hover:shadow-3xl flex items-center group"
                                >
                                    <svg className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                    Download Resume
                                </button>
                                
                                <button
                                    onClick={() => scrollToSection('projects')}
                                    className="px-8 py-4 border-2 border-gray-700 text-gray-300 rounded-2xl hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300 transform hover:-translate-y-1 flex items-center group"
                                >
                                    <CodeBracketIcon className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                                    View Projects
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" ref={sectionRefs.skills} className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/50"></div>
                
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="text-emerald-400">
                                Technical Skills
                            </span>
                        </h2>
                        <div className="w-32 h-1 bg-emerald-400 mx-auto rounded-full mb-4"></div>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                            Technologies and tools I use to bring ideas to life
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                category: 'Frontend Development',
                                skills: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Bootstrap'],
                                icon: <CodeBracketIcon className="h-8 w-8 text-emerald-400" />,
                                color: 'emerald'
                            },
                            {
                                category: 'Backend Development',
                                skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
                                icon: <CommandLineIcon className="h-8 w-8 text-purple-400" />,
                                color: 'purple',
                                badge: 'Growing Expertise'
                            },
                            {
                                category: 'Tools & Technologies',
                                skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Responsive Design'],
                                icon: <RocketLaunchIcon className="h-8 w-8 text-amber-400" />,
                                color: 'amber'
                            }
                        ].map((skillGroup, index) => (
                            <div
                                key={index}
                                className="group relative bg-gray-800 rounded-3xl border-2 border-gray-700 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3"
                            >
                                {/* Header - Solid Color */}
                                <div className={`bg-${skillGroup.color}-500 h-2 rounded-t-3xl`}></div>
                                
                                {/* Content */}
                                <div className="p-8">
                                    <div className="flex items-center mb-6">
                                        <div className="p-3 bg-gray-700 rounded-xl shadow-lg">
                                            {skillGroup.icon}
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-xl font-bold text-gray-200">{skillGroup.category}</h3>
                                            {skillGroup.badge && (
                                                <div className="inline-flex items-center px-3 py-1 bg-amber-400/10 border border-amber-400/20 rounded-full mt-1">
                                                    <StarIcon className="h-3 w-3 text-amber-400 mr-1" />
                                                    <span className="text-amber-400 text-xs font-bold">{skillGroup.badge}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-wrap gap-3">
                                        {skillGroup.skills.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="px-4 py-2 bg-gray-700 text-gray-200 rounded-xl text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-600 hover:border-emerald-400"
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
            <section id="projects" ref={sectionRefs.projects} className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-800/20"></div>
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="text-emerald-400">
                                Featured Projects
                            </span>
                        </h2>
                        <div className="w-32 h-1 bg-emerald-400 mx-auto rounded-full mb-4"></div>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                            A showcase of my recent work and creative solutions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Soil Report Generator',
                                description: 'A comprehensive, multilingual web application for soil analysis and reporting that helps farmers and agricultural professionals analyze soil nutrients With responsive design.',
                                technologies: ['React', 'JavaScript', 'Tailwind CSS','Recharts','html2canvas'],
                                demoLink: 'https://soil-report-generator-b12a.vercel.app/',
                                featured: true,
                                bgImage: '/Soil.jpg'
                            },
                            {
                                title: 'Task Management App',
                                description: 'Productivity application for managing tasks with drag-and-drop functionality, categories, and local storage persistence.',
                                technologies: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
                                demoLink: '#',
                                featured: false,
                                bgImage: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
                            },
                            {
                                title: 'Weather Dashboard',
                                description: 'Real-time weather application with location detection, 5-day forecast, and interactive weather maps.',
                                technologies: ['JavaScript', 'API Integration', 'CSS3', 'HTML5', 'Chart.js'],
                                demoLink: '#',
                                featured: false,
                                bgImage: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
                            }
                        ].map((project, index) => (
                            <div
                                key={index}
                                className="group relative bg-gray-800 rounded-3xl border-2 border-gray-700 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden"
                            >
                                {project.featured && (
                                    <div className="absolute top-4 left-4 bg-amber-500 text-gray-900 text-xs font-bold px-4 py-2 rounded-full z-10 flex items-center shadow-lg">
                                        <StarIcon className="h-3 w-3 mr-1" />
                                        Featured Project
                                    </div>
                                )}
                                
                                {/* Project image/icon with background image */}
                                <div 
                                    className="h-48 relative overflow-hidden bg-gray-700"
                                    style={{
                                        backgroundImage: `url('${project.bgImage}')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                >
                                    
                                    {/* Content overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center p-6 relative z-10">
                                            <CodeBracketIcon className="h-16 w-16 mx-auto mb-4 text-emerald-400 opacity-90 drop-shadow-lg" />
                                            <span className="text-white font-semibold text-lg drop-shadow-lg">{project.title}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Project content */}
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-gray-200 mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        {project.description}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-lg text-xs font-medium border border-gray-600">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <div className="flex justify-between items-center">
                                        <a
                                            href={project.demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl group/link"
                                        >
                                            <span>Live Demo</span>
                                            <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                                        </a>
                                        <span className="text-gray-500 text-sm">#{String(index + 1).padStart(2, '0')}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" ref={sectionRefs.contact} className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/50"></div>
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="text-emerald-400">
                                Get In Touch
                            </span>
                        </h2>
                        <div className="w-32 h-1 bg-emerald-400 mx-auto rounded-full mb-4"></div>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                            Let's discuss your next project or opportunity
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <div className="bg-gray-800 rounded-3xl border-2 border-gray-700 shadow-2xl p-8 transform hover:shadow-3xl transition-all duration-500">
                                <h3 className="text-3xl font-bold mb-8 text-gray-200">
                                    Send Message
                                </h3>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium mb-3 text-gray-400">Your Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                className="w-full px-4 py-3 bg-gray-700 border-2 border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-white transition-all duration-300 shadow-lg"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium mb-3 text-gray-400">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="w-full px-4 py-3 bg-gray-700 border-2 border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-white transition-all duration-300 shadow-lg"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium mb-3 text-gray-400">Subject</label>
                                            <input
                                                type="text"
                                                id="subject"
                                                className="w-full px-4 py-3 bg-gray-700 border-2 border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-white transition-all duration-300 shadow-lg"
                                                placeholder="Project Discussion"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium mb-3 text-gray-400">Your Message</label>
                                            <textarea
                                                id="message"
                                                rows="5"
                                                className="w-full px-4 py-3 bg-gray-700 border-2 border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-white transition-all duration-300 shadow-lg"
                                                placeholder="Hello, I would like to talk about..."
                                            ></textarea>
                                        </div>
                                    </div>
                                    <button 
                                        type="submit" 
                                        className="w-full px-6 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-2xl hover:shadow-3xl font-bold text-lg"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-3xl font-bold mb-6 text-gray-200">
                                        Contact Information
                                    </h3>
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 gap-6">
                                    {[
                                        {
                                            icon: <EnvelopeIcon className="h-6 w-6 text-emerald-400" />,
                                            title: 'Email',
                                            content: 'mohiterahul8380@gmail.com',
                                            link: 'mailto:mohiterahul8380@gmail.com'
                                        },
                                        {
                                            icon: <CommandLineIcon className="h-6 w-6 text-purple-400" />,
                                            title: 'GitHub',
                                            content: 'RahulMohiteDEV',
                                            link: 'https://github.com/RahulMohiteDEV'
                                        },
                                        {
                                            icon: <BriefcaseIcon className="h-6 w-6 text-amber-400" />,
                                            title: 'LinkedIn',
                                            content: 'Rahul Mohite',
                                            link: 'https://www.linkedin.com/in/rahul-mohite-5039162a1/'
                                        },
                                        {
                                            icon: (
                                                <svg className="h-6 w-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
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
                                            className="flex items-center p-6 bg-gray-800 rounded-2xl border-2 border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
                                        >
                                            <div className="p-4 rounded-xl bg-gray-700 group-hover:bg-emerald-400/10 transition-colors duration-300">
                                                {contact.icon}
                                            </div>
                                            <div className="ml-6">
                                                <h4 className="font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">
                                                    {contact.title}
                                                </h4>
                                                <p className="text-gray-400 text-sm mt-1">{contact.content}</p>
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
            <footer className="py-16 bg-gray-900 border-t border-gray-700/50 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center">
                        <a href="#" className="text-3xl font-bold text-emerald-400 mb-6 inline-block">
                            <span className="flex items-center justify-center">
                                <SparklesIcon className="h-8 w-8 mr-3 text-amber-400" />
                                Rahul Mohite
                            </span>
                        </a>
                        <p className="text-gray-400 mb-8 max-w-md mx-auto text-lg">
                            Full Stack Developer passionate about creating exceptional digital experiences
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex justify-center space-x-6 mb-8">
                            {['mailto:mohiterahul8380@gmail.com', 'https://github.com/RahulMohiteDEV', 'https://www.linkedin.com/in/rahul-mohite-5039162a1/', 'https://wa.me/919922935750'].map((link, index) => (
                                <a
                                    key={index}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gray-800 rounded-2xl border-2 border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 hover:border-emerald-400"
                                >
                                    {link.includes('mailto') && <EnvelopeIcon className="h-6 w-6 text-emerald-400" />}
                                    {link.includes('github') && <CommandLineIcon className="h-6 w-6 text-purple-400" />}
                                    {link.includes('linkedin') && <BriefcaseIcon className="h-6 w-6 text-amber-400" />}
                                    {link.includes('wa.me') && (
                                        <svg className="h-6 w-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.49" />
                                        </svg>
                                    )}
                                </a>
                            ))}
                        </div>
                        
                        <div className="border-t border-gray-700/50 pt-8">
                            <p className="text-gray-500">
                                © {new Date().getFullYear()} Rahul Mohite. Crafted with passion and precision.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

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
                    50% { transform: translateY(-20px) rotate(3deg); }
                    100% { transform: translateY(0px) rotate(0deg); }
                }
                @keyframes float-slow {
                    0% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(-30px) scale(1.05); }
                    100% { transform: translateY(0px) scale(1); }
                }
                @keyframes float-reverse {
                    0% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(30px) scale(0.95); }
                    100% { transform: translateY(0px) scale(1); }
                }
                @keyframes pulse-slow {
                    0% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 0.6; transform: scale(1.1); }
                    100% { opacity: 0.3; transform: scale(1); }
                }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
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
                .animate-bounce-slow {
                    animation: bounce-slow 3s ease-in-out infinite;
                }
                
                /* Custom scrollbar */
                ::-webkit-scrollbar {
                    width: 8px;
                }
                ::-webkit-scrollbar-track {
                    background: #0f172a;
                }
                ::-webkit-scrollbar-thumb {
                    background: #10b981;
                    border-radius: 4px;
                }
                ::-webkit-scrollbar-thumb:hover {
                    background: #34d399;
                }
            `}</style>
        </div>
    );
};

export default Portfolio;