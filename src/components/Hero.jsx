import { Phone, Mail, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto w-full relative z-10 text-center">
        <div className="animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            Branch Manager | Startup & Funding Consultant
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up delay-100">
          Dhruvpalsinh
          <span className="block text-gradient">Barad</span>
        </h1>

        <p className="text-xl text-gray-400 mb-8 max-w-xl mx-auto animate-fade-in-up delay-200">
          Driving Funding. Scaling Startups. Delivering Results.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in-up delay-300">
          <a
            href="tel:+919898922714"
            className="group flex items-center gap-2 px-6 py-3 bg-primary text-dark-900 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            <Phone size={20} />
            Call Now
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="mailto:dhruvpalsinh@euroasias.com"
            className="group flex items-center gap-2 px-6 py-3 bg-dark-700 border border-gray-600 text-white rounded-lg font-semibold hover:border-primary hover:bg-dark-700/80 transition-all duration-300"
          >
            <Mail size={20} />
            Email Me
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up delay-400">
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Phone className="text-primary" size={22} />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500">Phone</p>
              <p className="text-white font-medium">+91 9898922714</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Mail className="text-primary" size={22} />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-white font-medium">
                dhruvpalsinh@euroasias.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
