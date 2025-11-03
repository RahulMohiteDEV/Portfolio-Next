import { EnvelopeIcon, CommandLineIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

const Contact = ({ sectionRefs }) => {
    const contacts = [
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
    ];

    return (
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
                                {contacts.map((contact, index) => (
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
    );
};

export default Contact;