import { motion } from 'framer-motion';
import { Mail, Star, Medal, Trophy, Github, Linkedin, Instagram, Music } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

export default function AchievementsContact() {
  const formRef = useRef(null);
  const [sent, setSent] = useState(false);
  const [musicOn, setMusicOn] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      // Replace with your EmailJS service/template/public key in env if configured.
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSent(true);
    } catch (err) {
      console.error(err);
      alert('Unable to send right now. Please email sanketh21@GMAIL.com');
    }
  };

  return (
    <section id="achievements" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
          Achievements
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur">
            <div className="flex items-center gap-3 text-blue-600 dark:text-emerald-400">
              <Medal />
              <p className="font-semibold text-gray-900 dark:text-white">Git Training Certification - IIT Bombay</p>
            </div>
            <p className="mt-2 text-gray-700 dark:text-gray-300">Completed formal certification in Git version control.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur">
            <div className="flex items-center gap-3 text-blue-600 dark:text-emerald-400">
              <Star />
              <p className="font-semibold text-gray-900 dark:text-white">NCC Camps & Republic Day Walk</p>
            </div>
            <p className="mt-2 text-gray-700 dark:text-gray-300">Actively participated in national service and parade events.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur">
            <div className="flex items-center gap-3 text-blue-600 dark:text-emerald-400">
              <Trophy />
              <p className="font-semibold text-gray-900 dark:text-white">A Grade in Shooting & NCC Activities</p>
            </div>
            <p className="mt-2 text-gray-700 dark:text-gray-300">Recognized with top performance grade.</p>
          </motion.div>
        </div>

        <div id="contact" className="mt-20 grid lg:grid-cols-2 gap-8 items-start">
          <div className="p-6 rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Contact</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">Email: <a className="underline" href="mailto:sanketh21@GMAIL.com">sanketh21@GMAIL.com</a></p>
            <form ref={formRef} onSubmit={sendEmail} className="mt-6 space-y-3">
              <input name="from_name" required placeholder="Your name" className="w-full px-4 py-2 rounded-lg bg-white/60 dark:bg-white/10 border border-black/5 dark:border-white/10 outline-none focus:ring-2 ring-blue-500" />
              <input type="email" name="reply_to" required placeholder="Your email" className="w-full px-4 py-2 rounded-lg bg-white/60 dark:bg-white/10 border border-black/5 dark:border-white/10 outline-none focus:ring-2 ring-blue-500" />
              <textarea name="message" required placeholder="Message" rows="4" className="w-full px-4 py-2 rounded-lg bg-white/60 dark:bg-white/10 border border-black/5 dark:border-white/10 outline-none focus:ring-2 ring-blue-500" />
              <button type="submit" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-blue-600/40 transition">
                <Mail size={18} /> {sent ? 'Sent!' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="p-6 rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Connect</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">Follow for projects, NCC journey, and more.</p>
            <div className="mt-6 flex items-center gap-4">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/60 dark:bg-white/10 border border-black/5 dark:border-white/10 hover:scale-110 transition"><Github /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/60 dark:bg-white/10 border border-black/5 dark:border-white/10 hover:scale-110 transition"><Linkedin /></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/60 dark:bg-white/10 border border-black/5 dark:border-white/10 hover:scale-110 transition"><Instagram /></a>
              <button onClick={() => setMusicOn((m) => !m)} className={`ml-auto inline-flex items-center gap-2 px-4 py-2 rounded-full border ${musicOn ? 'border-emerald-400 text-emerald-400' : 'border-gray-300 dark:border-white/20 text-gray-800 dark:text-gray-100'}`}>
                <Music size={18} /> {musicOn ? 'Music On' : 'Music Off'}
              </button>
            </div>
            {musicOn && (
              <audio className="mt-4 w-full" controls loop>
                <source src="https://cdn.pixabay.com/download/audio/2023/03/13/audio_c44a69f32b.mp3?filename=calm-piano-143172.mp3" type="audio/mpeg" />
              </audio>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
