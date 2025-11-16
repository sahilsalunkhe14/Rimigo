import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export function DestinationCard({
  title,
  location,
  description,
  imageUrl,
  duration,
  price
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="article"
      aria-label={`${title} vacation package`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02, boxShadow: "0 12px 40px rgba(0,0,0,0.15)" }}
    >
      <div className="relative h-80 overflow-hidden">
        <motion.img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        <motion.div
          className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full"
          animate={{ y: isHovered ? -3 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-sm font-semibold text-slate-900">{price}</span>
        </motion.div>

        <motion.div
          className="absolute bottom-4 left-4 right-4"
          animate={{ y: isHovered ? -4 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-1">{title}</h3>
          <div className="flex items-center gap-2 text-white/90 text-sm">
            <MapPin size={14} aria-hidden="true" />
            <span>{location}</span>
          </div>
        </motion.div>
      </div>

      <div className="p-6">
        <p className="text-slate-600 leading-relaxed mb-4">{description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Calendar size={16} aria-hidden="true" />
            <span>{duration}</span>
          </div>

          <motion.button
            className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700"
            aria-label={`Learn more about ${title}`}
            whileHover={{ x: 6 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            Explore
            <ArrowRight size={18} aria-hidden="true" />
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
