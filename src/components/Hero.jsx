import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const titles = ['MCA Student', 'Developer', 'NCC Cadet'];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white dark:from-black/60 dark:via-black/40 dark:to-black" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 text-center lg:text-left">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-sm uppercase tracking-widest text-blue-600 dark:text-emerald-400">
            👋 Hi, I’m Sanketh
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-rose-500 dark:from-emerald-400 dark:via-cyan-400 dark:to-blue-400">
            MCA Student | Developer | NCC Cadet
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-4 text-gray-700 dark:text-gray-300">
            RNS Institute of Technology (RNSIT), Bangalore
          </motion.p>
          <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition">
              View Projects
            </a>
            <a href="#contact" className="px-5 py-2.5 rounded-full border border-gray-300 dark:border-white/20 text-gray-900 dark:text-gray-100 hover:bg-white/10 transition">
              Contact Me
            </a>
          </div>
        </div>

        <div className="lg:col-span-6">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-rose-500/10 pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center p-6"
              >
                <p className="text-sm text-gray-600 dark:text-gray-400">Focused on</p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  Java • Python • SQL • Power BI • IoT • Git • Data Analysis • Web Dev
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
