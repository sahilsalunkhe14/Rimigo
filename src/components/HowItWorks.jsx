import { Search, Calendar, Plane, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: Search,
    title: 'Discover',
    description:
      'Browse our curated collection of destinations or tell us your dream vacation and let our AI suggest perfect matches.'
  },
  {
    icon: Calendar,
    title: 'Customize',
    description:
      'Tailor every detail to your preferences. Adjust activities, accommodations, and pace to match your style.'
  },
  {
    icon: Sparkles,
    title: 'Relax',
    description:
      'We handle all bookings, reservations, and logistics. Your personal concierge is available 24/7 during your trip.'
  },
  {
    icon: Plane,
    title: 'Experience',
    description:
      'Embark on your journey with confidence. Every detail is organized, so you can focus on creating memories.'
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-4">
            Effortless Planning
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From inspiration to departure, we streamline every step of your journey.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.title}
                className="relative group"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -6 }}
              >
                <div className="text-center">
                  <motion.div
                    className="relative inline-block mb-6"
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-blue-100 rounded-2xl blur-xl opacity-50"
                      animate={{ opacity: [0.4, 0.7, 0.4] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    />

                    <motion.div
                      className="relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 shadow-lg"
                      whileHover={{ scale: 1.12 }}
                      transition={{ type: "spring", stiffness: 180, damping: 12 }}
                    >
                      <Icon size={32} className="text-white" />
                    </motion.div>

                    <motion.div
                      className="absolute -top-2 -right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold text-blue-600 shadow-md"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {index + 1}
                    </motion.div>
                  </motion.div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
