import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800/50">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA Banner */}
        <div className="relative bg-gradient-to-r from-primary/20 via-dark-800 to-primary/20 border border-primary/20 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden mb-16">
          {/* Background Effects */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="relative text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Let's Scale Your Startup
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Ready to take your startup to the next level? Get in touch today and let's discuss how I can help you achieve your funding goals.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+919898927609"
                className="group flex items-center gap-3 px-8 py-4 bg-primary text-dark-900 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                <Phone size={22} />
                Call Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:rajpreet@euroasias.com"
                className="group flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <Mail size={22} />
                Send Email
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-dark-800 border border-gray-700 rounded-2xl p-6 hover:border-primary/30 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Phone className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
            <a href="tel:+919898927609" className="text-gray-400 hover:text-primary transition-colors">
              +91 98989 27609
            </a>
          </div>
          
          <div className="bg-dark-800 border border-gray-700 rounded-2xl p-6 hover:border-primary/30 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <a href="mailto:rajpreet@euroasias.com" className="text-gray-400 hover:text-primary transition-colors">
              rajpreet@euroasias.com
            </a>
          </div>
          
          <div className="bg-dark-800 border border-gray-700 rounded-2xl p-6 hover:border-primary/30 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <MapPin className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
            <p className="text-gray-400">India</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Raj Singh. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
