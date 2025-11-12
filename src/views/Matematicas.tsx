import React from "react";
import CalculadoraBasica from "../components/CalculadoraBasica";
import MultiplicationTable from "../components/MultiplicationTable";

const Matematicas: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-2 space-y-6">
      <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">🧮 Matemáticas</h1>
      <p className="text-slate-600 dark:text-slate-300">Practica operaciones básicas y tablas de multiplicar.</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-4">
            <h2 className="font-semibold text-slate-700 dark:text-slate-200">Guía rápida</h2>
            <ul className="mt-2 list-disc list-inside text-slate-600 dark:text-slate-300">
              <li>Usa la calculadora para sumar, restar, multiplicar y dividir.</li>
              <li>Genera la tabla del número que elijas.</li>
              <li>Observa los resultados y repite para aprender mejor.</li>
            </ul>
          </div>

          <CalculadoraBasica />
        </div>

        <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-4">
          <MultiplicationTable />
        </div>
      </div>
    </div>
  );
};

export default Matematicas;
