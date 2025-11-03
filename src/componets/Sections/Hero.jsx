import { RocketLaunchIcon, EnvelopeIcon, UserIcon, SparklesIcon } from '@heroicons/react/24/outline';

const Hero = ({ sectionRefs, scrollToSection }) => {
    return (
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
    );
};

export default Hero;