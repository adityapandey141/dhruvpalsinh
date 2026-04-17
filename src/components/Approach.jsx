import { Lightbulb, Target, TrendingUp } from 'lucide-react'

const Approach = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Approach Card */}
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative bg-dark-800 border border-gray-700 rounded-2xl p-8 md:p-12 hover:border-primary/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center animate-pulse-glow">
                    <Lightbulb className="text-primary" size={32} />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
                    My Approach
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Strategic Financial Solutions
                  </h2>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    Transforms complex financial systems into clear, result-driven strategies focused on long-term success. 
                    I believe in building sustainable growth foundations that empower startups to scale confidently.
                  </p>
                </div>
              </div>
              
              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10 pt-10 border-t border-gray-700">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">100%</p>
                    <p className="text-sm text-gray-500">Client Focus</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">Fast</p>
                    <p className="text-sm text-gray-500">Results Delivery</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 col-span-2 md:col-span-1">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Lightbulb className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">Smart</p>
                    <p className="text-sm text-gray-500">Strategy Planning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Approach
