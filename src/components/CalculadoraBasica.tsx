import React, { useState } from "react";

const CalculadoraBasica: React.FC = () => {
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [resultado, setResultado] = useState<number | string>("");
  const [operacion, setOperacion] = useState<string>("+");

  const calcular = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResultado("Error: Ingresa números válidos");
      return;
    }

    switch (operacion) {
      case "+": setResultado(n1 + n2); break;
      case "-": setResultado(n1 - n2); break;
      case "*": setResultado(n1 * n2); break;
      case "/": 
        if (n2 === 0) {
          setResultado("Error: No se puede dividir por 0");
        } else {
          setResultado(n1 / n2);
        }
        break;
      default: setResultado("Operación no válida");
    }
  };

  const limpiar = () => {
    setNum1("");
    setNum2("");
    setResultado("");
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 text-center">
        Calculadora Básica
      </h2>
      
      <div className="space-y-4">
        <div className="flex gap-2">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Número 1"
            className="flex-1 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100"
          />
          
          <select
            value={operacion}
            onChange={(e) => setOperacion(e.target.value)}
            className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100"
          >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">×</option>
            <option value="/">÷</option>
          </select>
          
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Número 2"
            className="flex-1 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100"
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={calcular}
            className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-md transition"
          >
            Calcular
          </button>
          <button
            onClick={limpiar}
            className="flex-1 bg-slate-500 hover:bg-slate-600 text-white py-2 px-4 rounded-md transition"
          >
            Limpiar
          </button>
        </div>

        {resultado && (
          <div className="mt-4 p-3 bg-slate-100 dark:bg-slate-700 rounded-md">
            <p className="text-lg font-semibold text-slate-800 dark:text-slate-100 text-center">
              Resultado: {resultado}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalculadoraBasica;