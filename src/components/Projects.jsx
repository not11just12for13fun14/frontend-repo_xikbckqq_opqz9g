import { motion } from 'framer-motion';
import { Cpu, MapPin } from 'lucide-react';

const projects = [
  {
    title: 'Crop Prediction and Smart Advisory System',
    subtitle: 'AI + IoT + Geo-tagging',
    desc: 'Predicts optimal crops based on soil, weather, and location data with smart advisory for farmers.',
    tags: ['AI', 'IoT', 'Geo-tagging', 'Data'],
  },
  {
    title: 'LOG Gas Detection System',
    subtitle: 'IoT internship project',
    desc: 'Low-cost gas detection with real-time alerts and safety dashboard for industrial environments.',
    tags: ['IoT', 'Sensors', 'Safety'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
          Projects
        </motion.h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6 hover:shadow-2xl hover:-translate-y-1 transition"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-2 text-blue-600 dark:text-emerald-400">
                  <Cpu size={18} />
                  <MapPin size={18} />
                  <span className="text-sm">{p.subtitle}</span>
                </div>
                <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">{p.title}</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-blue-700 dark:text-emerald-300 border border-blue-600/20 dark:border-emerald-400/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
