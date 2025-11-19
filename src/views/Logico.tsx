import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

export default function Logico() {
  const [sequence, setSequence] = useState<number[]>([2, 4, 6]);
  const [score, setScore] = useState<number>(() => {
    const v = localStorage.getItem("logico_score");
    return v ? parseInt(v, 10) : 0;
  });
  const nextValue = useMemo(() => sequence[sequence.length - 1] + 2, [sequence]);
  const options = useMemo(() => {
    const correct = nextValue;
    const distractors = [correct - 1, correct + 1];
    return [correct, ...distractors].sort(() => Math.random() - 0.5);
  }, [nextValue]);

  useEffect(() => {
    localStorage.setItem("logico_score", String(score));
  }, [score]);

  const choose = (v: number) => {
    if (v === nextValue) {
      setSequence((prev) => [...prev, nextValue]);
      setScore((s) => s + 1);
    } else {
      setScore((s) => (s > 0 ? s - 1 : 0));
    }
  };

  const reset = () => {
    setSequence([2, 4, 6]);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Pensamiento Lógico</h1>
        <p className="text-slate-600 dark:text-slate-300">Aprende a completar patrones de números. Elige el siguiente número de la secuencia.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-4">
            <h2 className="font-semibold text-slate-700 dark:text-slate-200">Guía rápida</h2>
            <ul className="mt-2 list-disc list-inside text-slate-600 dark:text-slate-300">
              <li>Observa la secuencia mostrada.</li>
              <li>Piensa qué número sigue: aquí aumenta de 2 en 2.</li>
              <li>Haz clic en la opción correcta.</li>
              <li>Tu puntaje sube al acertar y baja al fallar.</li>
              <li>Pulsa "Reiniciar" para empezar de nuevo.</li>
            </ul>
          </div>
          <div className="rounded-lg border border-emerald-200 dark:border-emerald-800 p-4 bg-emerald-50 dark:bg-emerald-900/20">
            <p className="font-medium text-emerald-700 dark:text-emerald-300">Puntaje: {score}</p>
          </div>
          <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-4">
            <h2 className="font-semibold text-slate-700 dark:text-slate-200 mb-2">Video: Patrones y series para niños</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-3">Mira el video y luego intenta la secuencia.</p>
            <video controls className="w-full rounded-lg">
              <source src={VIDEOS.logic} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-4">
            <p className="text-slate-700 dark:text-slate-200">Secuencia:</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {sequence.map((n, i) => (
                <motion.span
                  key={i}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 220, damping: 15 }}
                  className="px-3 py-2 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
                >
                  {n}
                </motion.span>
              ))}
              <span className="px-3 py-2">...</span>
            </div>

            <p className="mt-4 text-slate-700 dark:text-slate-200">¿Cuál número sigue?</p>
            <div className="flex gap-3 mt-2">
              {options.map((o, idx) => (
                <button
                  key={idx}
                  onClick={() => choose(o)}
                  className="px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  {o}
                </button>
              ))}
            </div>

            <div className="mt-4">
              <button onClick={reset} className="px-3 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">Reiniciar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { VIDEOS } from "../videos";
