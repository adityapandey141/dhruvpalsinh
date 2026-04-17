import { Rocket, BarChart3, FileCheck2, Users } from 'lucide-react'

const ExpertiseCard = ({ icon: Icon, title, description, color }) => {
  return (
    <div className="group relative bg-dark-800 border border-gray-700 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        {/* Icon */}
        <div className={`w-14 h-14 rounded-xl ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="text-white" size={28} />
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

const Expertise = () => {
  const expertiseAreas = [
    {
      icon: Rocket,
      title: 'Startup Funding',
      description: 'Expert guidance through seed funding, Series A, and growth capital rounds. I connect startups with the right investors and funding sources.',
      color: 'bg-amber-500',
    },
    {
      icon: BarChart3,
      title: 'Financial Structuring',
      description: 'Strategic financial planning and structuring to optimize capital allocation, improve cash flow, and maximize business valuation.',
      color: 'bg-primary',
    },
    {
      icon: FileCheck2,
      title: 'Tax & Compliance',
      description: 'Comprehensive tax solutions and regulatory compliance services ensuring your business stays ahead of all statutory requirements.',
      color: 'bg-emerald-500',
    },
    {
      icon: Users,
      title: 'Client Management',
      description: 'Personalized client relationship management with dedicated support throughout your funding journey and beyond.',
      color: 'bg-blue-500',
    },
  ]

  return (
    <section id="expertise" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            What I Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Core Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive financial services designed to accelerate your startup's growth and ensure sustainable success.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseAreas.map((area, index) => (
            <ExpertiseCard key={index} {...area} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Ready to explore how these services can benefit your startup?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-dark-900 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            Let's Discuss Your Needs
          </a>
        </div>
      </div>
    </section>
  )
}

export default Expertise
