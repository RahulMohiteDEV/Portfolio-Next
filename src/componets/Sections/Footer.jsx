import { SparklesIcon, EnvelopeIcon, CommandLineIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

const Footer = () => {
    const socialLinks = [
        { href: 'mailto:mohiterahul8380@gmail.com', icon: <EnvelopeIcon className="h-4 w-4 lg:h-6 lg:w-6 text-emerald-400" /> },
        { href: 'https://github.com/RahulMohiteDEV', icon: <CommandLineIcon className="h-4 w-4 lg:h-6 lg:w-6 text-purple-400" /> },
        { href: 'https://www.linkedin.com/in/rahul-mohite-5039162a1/', icon: <BriefcaseIcon className="h-4 w-4 lg:h-6 lg:w-6 text-amber-400" /> },
        { 
            href: 'https://wa.me/919922935750', 
            icon: (
                <svg className="h-4 w-4 lg:h-6 lg:w-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.49" />
                </svg>
            )
        }
    ];

    return (
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
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 lg:p-3 bg-gray-800 rounded-xl lg:rounded-2xl border-2 border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 hover:border-emerald-400"
                            >
                                {link.icon}
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
    );
};

export default Footer;