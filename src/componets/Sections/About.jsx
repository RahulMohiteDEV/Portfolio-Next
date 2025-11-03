import { UserIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const About = ({ sectionRefs }) => {
    const downloadResume = () => {
        const link = document.createElement("a");
        link.href = "/Rahul Mohite.pdf";
        link.download = "Rahul_Mohite_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
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
                                onClick={downloadResume}
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
    );
};

export default About;