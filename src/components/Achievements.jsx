import { useEffect, useState, useRef } from "react";
import { IndianRupee, Calculator, Rocket, FileCheck } from "lucide-react";

const CounterCard = ({
  icon: Icon,
  value,
  suffix = "",
  prefix = "",
  label,
  color,
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div
      ref={ref}
      className="group relative bg-dark-800 border border-gray-700 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        {/* Icon */}
        <div
          className={`w-14 h-14 rounded-xl ${color} flex items-center justify-center mb-6`}
        >
          <Icon className="text-white" size={28} />
        </div>

        {/* Counter */}
        <div className="flex items-baseline gap-1 mb-3">
          <span className="text-sm text-primary font-semibold">{prefix}</span>
          <span className="text-5xl md:text-6xl font-bold text-white">
            {count.toLocaleString()}
          </span>
          <span className="text-3xl font-bold text-primary">{suffix}</span>
        </div>

        {/* Label */}
        <p className="text-gray-400 text-sm uppercase tracking-wider font-medium">
          {label}
        </p>
      </div>
    </div>
  );
};

const Achievements = () => {
  const achievements = [
    {
      icon: IndianRupee,
      value: 250,
      prefix: "₹",
      suffix: "Cr",
      label: "Funding Facilitated",
      color: "bg-primary",
    },
    {
      icon: FileCheck,
      value: 1055,
      suffix: "+",
      label: "Approvals Facilitated",
      color: "bg-amber-500",
    },
    {
      icon: Calculator,
      value: 175,
      suffix: "+",
      label: "Tax Solutions Delivered",
      color: "bg-emerald-500",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Track Record
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Key Achievements
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Proven results that speak for themselves. Here's a snapshot of the
            impact I've made for startups and businesses.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {achievements.map((achievement, index) => (
            <CounterCard key={index} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
