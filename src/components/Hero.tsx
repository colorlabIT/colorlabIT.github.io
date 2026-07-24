import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-end overflow-hidden bg-black">
      <picture>
        <source srcSet="/images/hero.webp" type="image/webp" />
        <img
          src="/images/hero.jpg"
          alt="Custom curated marble and walnut kitchen island designed by colorlab."
          width={2048}
          height={1366}
          className="absolute inset-0 h-full w-full object-cover"
          // @ts-expect-error -- fetchpriority is valid HTML but missing from React's DOM typings
          fetchpriority="high"
        />
      </picture>
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      <div className="relative z-10 w-full px-6 pb-16 pt-40 md:px-12 md:pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl font-serif text-5xl leading-[1.05] text-white md:text-7xl"
        >
          Transforming How the Industry Works Together
        </motion.h1>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
          className="mt-8 inline-block rounded-md bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
        >
          Let's Get Started
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="ml-auto mt-10 max-w-md text-right text-white/90 md:text-lg"
        >
          <span className="font-semibold">colorlab.</span> synchronizes design management to
          uphold the highest standards of project quality, eliminating rework and ensuring a
          seamless path from concept to completion.
        </motion.p>
      </div>
    </section>
  );
}
