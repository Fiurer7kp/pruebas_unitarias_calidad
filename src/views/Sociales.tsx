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
          <svg viewBox="0 0 360 420" role="img" aria-label="Mapa de Colombia" className="w-full h-auto mt-3 rounded-lg bg-slate-100 dark:bg-slate-800">
            {/* Silueta simplificada de Colombia (costa pacífica, andes y costa caribe) */}
            <path d="M72,90 C90,80 110,70 128,72 C146,74 160,86 170,96 C182,108 196,120 210,130 C222,138 234,146 238,160 C242,174 236,190 232,204 C226,224 220,244 210,258 C200,272 186,282 172,292 C160,300 146,306 132,310 C118,314 104,316 96,306 C88,296 90,278 90,262 C90,246 86,230 82,214 C78,198 74,182 70,166 C66,150 60,132 60,120 C60,108 62,100 72,90 Z M112,54 C120,52 130,48 140,50 C150,52 158,60 164,66 C170,72 174,74 180,78 C186,82 194,88 198,92 C202,96 204,100 200,104 C196,108 188,108 180,106 C172,104 164,100 158,96 C152,92 148,88 142,82 C136,76 128,68 122,62 C116,56 108,56 112,54 Z" fill="#7dd3fc" stroke="#0ea5e9" strokeWidth="2" />
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
