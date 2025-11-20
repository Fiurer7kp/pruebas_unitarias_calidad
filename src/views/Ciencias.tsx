import React from "react";
import SistemaSolar from "./SistemaSolar";

const Ciencias: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-2">
      <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">🌿 Ciencias Naturales</h1>
      <p className="text-slate-600 dark:text-slate-300 mb-6">Explora el Sistema Solar en 3D: observa las órbitas y ajusta la velocidad.</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-4">
            <h2 className="font-semibold text-slate-700 dark:text-slate-200">Guía rápida</h2>
            <ul className="mt-2 list-disc list-inside text-slate-600 dark:text-slate-300">
              <li>Usa el control de velocidad para acelerar o detener las órbitas.</li>
              <li>Observa cómo cada planeta gira alrededor del Sol.</li>
            </ul>
          </div>
        </div>

        <div>
          <SistemaSolar />
        </div>
      </div>
    </div>
  );
};

export default Ciencias;
