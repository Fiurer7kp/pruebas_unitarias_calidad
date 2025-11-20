import { useState } from "react";

type City = { name: string; x: number; y: number; info: string };
const cities: City[] = [
  { name: "Bogotá", x: 180, y: 160, info: "Capital de Colombia, ubicada en la región andina." },
  { name: "Medellín", x: 140, y: 200, info: "Ciudad de la eterna primavera, en Antioquia." },
  { name: "Cali", x: 160, y: 250, info: "Capital del Valle del Cauca, famosa por la salsa." },
];

export default function Sociales() {
  const [selected, setSelected] = useState<City | null>(null);

  return (
    <div className="max-w-5xl mx-auto p-2 space-y-6">
      <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">🌎 Sociales</h1>
      <p className="text-slate-600 dark:text-slate-300">Explora el mapa de Colombia y descubre información de sus ciudades principales.</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-4">
          <h2 className="font-semibold text-slate-700 dark:text-slate-200">Mapa de Colombia</h2>
          <svg viewBox="0 0 320 320" role="img" aria-label="Mapa de Colombia" className="w-full h-auto mt-3 rounded-lg bg-slate-100 dark:bg-slate-800">
            <path d="M60 80 L120 60 L180 90 L200 140 L190 190 L150 220 L110 240 L80 210 L70 160 Z" fill="#7dd3fc" stroke="#0ea5e9" strokeWidth="2" />
            {cities.map(c => (
              <g key={c.name} tabIndex={0} onClick={() => setSelected(c)} onKeyDown={(e) => e.key === 'Enter' && setSelected(c)}>
                <circle cx={c.x} cy={c.y} r={6} fill="#f59e0b" stroke="#ef4444" strokeWidth="2">
                  <title>{c.name}</title>
                </circle>
                <text x={c.x + 8} y={c.y + 4} fontSize="12" fill="#334155">{c.name}</text>
              </g>
            ))}
          </svg>
        </div>

        <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-4">
          <h2 className="font-semibold text-slate-700 dark:text-slate-200">Información</h2>
          {selected ? (
            <div className="mt-3">
              <p className="text-slate-700 dark:text-slate-200"><span className="font-semibold">Ciudad:</span> {selected.name}</p>
              <p className="text-slate-700 dark:text-slate-200 mt-1">{selected.info}</p>
            </div>
          ) : (
            <p className="text-slate-700 dark:text-slate-200 mt-3">Haz clic en una ciudad para ver detalles.</p>
          )}
        </div>
      </div>
    </div>
  );
}