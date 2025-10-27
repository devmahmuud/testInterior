import { Home, Building2, Palette, Sofa, Layout, Eye, ArrowRight } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: Home,
      title: 'Residential Design',
      description: 'Transform your house into a personalized sanctuary with our comprehensive residential design services that reflect your lifestyle.',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Building2,
      title: 'Commercial Spaces',
      description: 'Create inspiring work environments that boost productivity and reflect your brand identity with modern design principles.',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'Color Consultation',
      description: 'Expert guidance on color schemes that enhance mood, space, and overall aesthetic appeal for any environment.',
      gradient: 'from-pink-400 to-rose-500'
    },
    {
      icon: Sofa,
      title: 'Furniture Selection',
      description: 'Curated furniture pieces that blend style, comfort, and functionality perfectly to complete your space.',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      icon: Layout,
      title: 'Space Planning',
      description: 'Optimize your space with strategic layouts that maximize both form and function for better living.',
      gradient: 'from-purple-400 to-indigo-500'
    },
    {
      icon: Eye,
      title: 'Design Consultation',
      description: 'Professional advice and insights to help you make informed design decisions that last a lifetime.',
      gradient: 'from-amber-400 to-yellow-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider mb-2 block">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
            Comprehensive interior design solutions tailored to your unique vision and lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
              </div>

              <div className="p-8">
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center transform transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-lg`}>
                    <service.icon className="w-10 h-10 text-white" strokeWidth={2} />
                  </div>
                  <div className={`absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500`}></div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex items-center text-yellow-500 font-semibold group-hover:text-yellow-600 transition-all duration-300">
                  <span className="mr-2 text-sm">Learn More</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>

              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-100 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
