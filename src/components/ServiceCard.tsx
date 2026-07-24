import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
  delay?: number;
}

export default function ServiceCard({ title, children, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay }}
    >
      <h3 className="font-serif text-2xl font-medium text-black md:text-3xl">{title}</h3>
      <p className="mt-3 leading-relaxed text-neutral-500">{children}</p>
    </motion.div>
  );
}
