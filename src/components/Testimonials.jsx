import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Chen',
    location: 'San Francisco, CA',
    text: 'Rimigo transformed our honeymoon into an unforgettable experience. Every detail was perfect, from the boutique hotels to the surprise sunset dinner. We felt truly taken care of.',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    name: 'Marcus Johnson',
    location: 'London, UK',
    text: 'As someone who travels frequently, I appreciate efficiency. Rimigo delivered a seamless experience that exceeded my expectations. The local insights were invaluable.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    name: 'Elena Rodriguez',
    location: 'Barcelona, Spain',
    text: 'I was skeptical about using a travel service, but Rimigo won me over completely. The personalized itinerary felt like it was designed by someone who truly understood what I wanted.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200'
  }
];

export function Testimonials() {
  return (
    <section id="testimonial" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-4">
            Traveler Stories
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied travelers who have discovered the joy of effortless vacations.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.name}
              className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-300"
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -8, boxShadow: "0 12px 40px rgba(0,0,0,0.12)" }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
            >
              <motion.div
                className="flex items-center gap-1 mb-4"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </motion.div>

              <motion.p
                className="text-slate-700 leading-relaxed mb-6 italic"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                "{testimonial.text}"
              </motion.p>

              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 150 }}
                />
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.location}</div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
