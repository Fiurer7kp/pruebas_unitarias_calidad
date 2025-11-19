import React from "react";
import ThreeDemoView from "./ThreeDemoView";
import Quiz from "../components/Quiz";
import { VIDEOS } from "../videos";

const Ciencias: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-2">
      <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">🌿 Ciencias Naturales</h1>
      <p className="text-slate-600 dark:text-slate-300 mb-6">Explora formas en 3D (cubo, esfera, cono, toro, plano y tetraedro), cambia su color y mira un video corto.</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-4">
            <h2 className="font-semibold text-slate-700 dark:text-slate-200">Guía rápida</h2>
            <ul className="mt-2 list-disc list-inside text-slate-600 dark:text-slate-300">
              <li>Usa los botones para cambiar el color del cubo.</li>
              <li>Observa cómo rota y piensa en sus caras y vértices.</li>
              <li>¿Qué otras figuras conoces? Prisma, esfera, pirámide.</li>
            </ul>
          </div>

          <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-4">
            <h2 className="font-semibold text-slate-700 dark:text-slate-200 mb-2">Video: Figuras 3D para niños</h2>
            <video controls className="w-full rounded-lg">
              <source src={VIDEOS.science} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>

          <Quiz />
        </div>

        <div>
          <ThreeDemoView />
        </div>
      </div>
    </div>
  );
};

export default Ciencias;
