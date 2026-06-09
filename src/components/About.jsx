import { CheckCircle, Rocket, Shield, TrendingUp } from "lucide-react";

const About = () => {
  const highlights = [
    "Strategic Startup Funding",
    "Government-backed Opportunities",
    "Financial Structuring",
    "Compliance Management",
  ];

  const stats = [
    { icon: Rocket, label: "Startups Helped", value: "280+" },
    { icon: Shield, label: "Success Rate", value: "95%" },
    { icon: TrendingUp, label: "Growth Achieved", value: "3x" },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
              5.5+ Years Driving Startups to Success
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              With extensive experience in startup funding and financial
              consulting, I specialize in transforming ambitious ideas into
              funded realities. My approach combines deep industry knowledge
              with personalized strategies tailored to each client's unique
              needs.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              I focus on strategic funding, financial structuring, and
              government-backed opportunities to help startups not just survive,
              but thrive in competitive markets.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle
                    className="text-primary flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats Cards */}
          <div className="space-y-6">
            {/* Main Card */}
            <div className="bg-dark-800 border border-gray-700 rounded-2xl p-8 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />

              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-2">
                  My Focus Areas
                </h3>
                <p className="text-gray-400 mb-6">
                  Specialized expertise in key financial domains
                </p>

                <div className="space-y-4">
                  {["Startups", "Funding", "Compliance"].map((area, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <span className="text-gray-300">{area}</span>
                      <div className="flex-1 mx-4 h-2 bg-dark-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-1000"
                          style={{ width: `${95 - index * 5}%` }}
                        />
                      </div>
                      <span className="text-primary font-semibold">
                        {95 - index * 5}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-dark-800 border border-gray-700 rounded-xl p-4 text-center hover:border-primary/30 transition-colors"
                >
                  <stat.icon className="text-primary mx-auto mb-2" size={24} />
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
