import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Card = ({ title, subtitle, to, color }: { title: string; subtitle: string; to: string; color: string }) => (
  <motion.div
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800"
    style={{ background: color }}
  >
    <div className="absolute inset-0 bg-black/45" />
    <div className="relative p-5">
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="text-sm text-slate-100 mt-1">{subtitle}</p>
      <Link to={to} className="inline-block mt-4 px-4 py-2 rounded-xl bg-white text-slate-900 hover:bg-slate-100">
        Ir
      </Link>
    </div>
  </motion.div>
);

export default function HeroCards() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card title="Ciencias Naturales" subtitle="Explora 3D y video" to="/ciencias" color="linear-gradient(135deg,#e0f2fe,#e9d5ff)" />
      <Card title="Pensamiento Lógico" subtitle="Patrones y secuencias" to="/logico" color="linear-gradient(135deg,#dcfce7,#fef9c3)" />
      <Card title="Matemáticas" subtitle="Calculadora y tablas" to="/matematicas" color="linear-gradient(135deg,#fde68a,#fecaca)" />
    </div>
  );
}

