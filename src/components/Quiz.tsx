import { useMemo, useState } from "react";

type Q = { q: string; options: string[]; correct: number };

const QUESTIONS: Q[] = [
  { q: "¿Cuál es el continente más grande?", options: ["África", "Asia", "Europa"], correct: 1 },
  { q: "¿Qué animal es el más alto?", options: ["Elefante", "Jirafa", "León"], correct: 1 },
  { q: "¿Cuál planeta es conocido como el rojo?", options: ["Marte", "Venus", "Júpiter"], correct: 0 }
];

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const q = useMemo(() => QUESTIONS[index], [index]);

  const select = (i: number) => {
    if (i === q.correct) setScore((s) => s + 1);
    if (index < QUESTIONS.length - 1) setIndex((n) => n + 1);
  };

  const reset = () => {
    setIndex(0);
    setScore(0);
  };

  return (
    <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-4">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-slate-700 dark:text-slate-200">Quiz interactivo</h2>
        <div className="px-2 py-1 rounded-md bg-emerald-600 text-white">Puntaje {score}/{QUESTIONS.length}</div>
      </div>
      <p className="mt-3 text-slate-700 dark:text-slate-200">{q.q}</p>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
        {q.options.map((op, i) => (
          <button key={i} onClick={() => select(i)} className="px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
            {op}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <button onClick={reset} className="px-3 py-2 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900">Reiniciar</button>
      </div>
    </div>
  );
}

