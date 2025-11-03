import { CodeBracketIcon, CommandLineIcon, RocketLaunchIcon, StarIcon } from '@heroicons/react/24/outline';

const Skills = ({ sectionRefs }) => {
    return (
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
    );
};

export default Skills;