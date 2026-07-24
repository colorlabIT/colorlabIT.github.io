import { motion } from 'framer-motion';

interface Props {
  jpg: string;
  webp: string;
  alt: string;
  caption: string;
  className?: string;
  delay?: number;
}

export default function GalleryItem({ jpg, webp, alt, caption, className = '', delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02 }}
      tabIndex={0}
      className={`group relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${className}`}
    >
      <picture>
        <source srcSet={webp} type="image/webp" />
        <img
          src={jpg}
          alt={alt}
          title={caption}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </picture>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        <p className="p-4 text-sm font-medium text-white md:text-base">{caption}</p>
      </div>
    </motion.div>
  );
}
