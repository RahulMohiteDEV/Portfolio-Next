import { ArrowTopRightOnSquareIcon, StarIcon } from '@heroicons/react/24/outline';

const Projects = ({ sectionRefs }) => {
    const projects = [
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
    ];

    return (
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
                    {projects.map((project, index) => (
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
    );
};

export default Projects;