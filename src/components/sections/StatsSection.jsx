import { Calendar, Trophy, Users, Zap } from "lucide-react";
import React from "react";
import { Counter } from '../ui';

const stats = [
  {
    icon: Users,
    to: 2000,
    suffix: "+",
    label: "Participants",
  },
  {
    icon: Calendar,
    to: 20,
    suffix: "+",
    label: "Events",
  },
  {
    icon: Trophy,
    to: 10,
    suffix: "L+",
    label: "Prize Money",
  },
  {
    icon: Zap,
    to: 3,
    suffix: "",
    label: "Days of Paridhi",
  },
];

const StatsSection = () => {
  return (
    <div>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Club Statistics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div className="text-center" key={idx}>
              <div className="flex items-center justify-center mb-4">
                <stat.icon className="h-12 w-12" style={{ color: 'var(--yellow-primary)' }} />
              </div>
              <div className="flex items-center justify-center mb-2">
                <Counter
                  from={0}
                  to={stat.to}
                  separator=","
                  direction="up"
                  duration={2}
                  className=" text-3xl font-bold mb-2"
                  style={{ color: 'var(--white)' }}
                />
                {stat.suffix && (
                  <p className=" text-3xl font-bold mb-2" style={{ color: 'var(--white)' }}>
                    {stat.suffix}
                  </p>
                )}
              </div>
              <p style={{ color: 'var(--gray-muted)' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
