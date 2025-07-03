// Stats Component with animations
import { AnimatedCounter } from "./AnimatedCounter";
export const StatsSection = () => {
  const stats = [
    {
      number: 100,
      suffix: "+",
      label: "Company Collaboration",
    },
    {
      number: 20,
      suffix: "+",
      label: "Winning Awards",
    },
    {
      number: 300,
      suffix: "K+",
      label: "Join Our Communities",
    },
  ];

  return (
    <div
      id="stats-section"
      className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 mt-16"
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center group hover:scale-110 transition-all duration-500 cursor-pointer"
          style={{ animationDelay: `${index * 200}ms` }}
        >
          <div className="text-4xl md:text-5xl font-bold text-black mb-2 group-hover:text-blue-600 transition-colors duration-300">
            <AnimatedCounter end={stat.number} suffix={stat.suffix} />
          </div>
          <div className="text-gray-600 text-sm font-medium group-hover:text-gray-800 transition-colors duration-300">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};
