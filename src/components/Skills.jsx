import { motion } from 'framer-motion';
import { Cpu, Database, GitBranch, Globe, LineChart, Code, Boxes, School } from 'lucide-react';

const skills = [
  { icon: Code, name: 'Java' },
  { icon: Code, name: 'Python' },
  { icon: Database, name: 'SQL' },
  { icon: LineChart, name: 'Power BI' },
  { icon: Cpu, name: 'IoT' },
  { icon: GitBranch, name: 'Git' },
  { icon: Boxes, name: 'Data Analysis' },
  { icon: Globe, name: 'Web Development' },
];

export default function Skills() {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 p-6 rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur"
          >
            <div className="flex items-center gap-3 text-blue-600 dark:text-emerald-400">
              <School />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">About</h2>
            </div>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              I’m Sanketh, pursuing Master of Computer Applications at RNS Institute of Technology (RNSIT), Bangalore. I love building useful products, exploring IoT, and contributing to tech communities as an NCC cadet.
            </p>
          </motion.div>

          <div className="lg:col-span-2">
            <motion.h2
              id="skills"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
            >
              Skills
            </motion.h2>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
              {skills.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group p-5 rounded-xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-gradient-to-br from-blue-500/15 to-purple-500/15 text-blue-600 dark:text-emerald-400">
                      <s.icon size={22} />
                    </div>
                    <p className="font-medium text-gray-800 dark:text-gray-100">{s.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
