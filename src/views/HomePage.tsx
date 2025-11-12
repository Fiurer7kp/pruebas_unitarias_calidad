import { motion } from "framer-motion";
import HeroCards from "../components/HeroCards";

export default function HomeContent() {
  return (
    <div className="py-16 px-6 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
          <h1 className="text-4xl md:text-5xl font-extrabold">Plataforma Educativa</h1>
          <p className="text-slate-300 mt-3">Colegio Mentes Creativas</p>
          <p className="text-slate-200 mt-4 max-w-2xl">Explora módulos interactivos para Matemáticas, Ciencias Naturales y Pensamiento Lógico con recursos multimedia.</p>
          <div className="mt-8">
            <HeroCards />
          </div>
        </motion.div>
        <div className="mt-10 text-center text-slate-300">Bienvenido a React</div>
      </div>
    </div>
  );
}
