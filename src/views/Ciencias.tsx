import React from "react";
import QuizAnimales from "../components/QuizAnimales";

const Ciencias: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6">
        🐘 Ciencias Naturales - Quiz de Animales
      </h1>
      <p className="text-slate-600 dark:text-slate-300 mb-8">
        Pon a prueba tus conocimientos sobre el reino animal con este quiz educativo.
      </p>
      <QuizAnimales />
    </div>
  );
};

export default Ciencias;