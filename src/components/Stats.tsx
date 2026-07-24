import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 50, suffix: '+', label: 'Years of Expertise' },
  { value: 2000, suffix: '+', label: 'Homes Served' },
  { value: 100, suffix: '+', label: 'Clients' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-serif text-5xl text-black md:text-6xl">
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:gap-6">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
        >
          <Counter value={stat.value} suffix={stat.suffix} />
          <p className="mt-2 text-sm uppercase tracking-wide text-neutral-500">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
