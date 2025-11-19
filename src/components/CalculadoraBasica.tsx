import React, { useState } from "react";

const CalculadoraBasica: React.FC = () => {
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [resultado, setResultado] = useState<number | string>("");
  const [operacion, setOperacion] = useState<string>("+");
  const [voz, setVoz] = useState<boolean>(false);
  const hablar = (texto: string) => {
    if (!voz) return;
    const synth = (window as any).speechSynthesis;
    if (!synth) return;
    const u = new (window as any).SpeechSynthesisUtterance(texto);
    synth.cancel();
    synth.speak(u);
  };

  const calcular = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResultado("Error: Ingresa números válidos");
      return;
    }

    let res: number | string = "";
    switch (operacion) {
      case "+": res = n1 + n2; break;
      case "-": res = n1 - n2; break;
      case "*": res = n1 * n2; break;
      case "/":
        res = n2 === 0 ? "Error: No se puede dividir por 0" : n1 / n2;
        break;
      default: res = "Operación no válida";
    }
    setResultado(res);
    if (typeof res === "number") hablar(`El resultado es ${res}`);
  };

  const limpiar = () => {
    setNum1("");
    setNum2("");
    setResultado("");
  };

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 text-center">
        Calculadora Básica
      </h2>
      
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-2">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Número 1"
            className="flex-1 min-w-0 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100"
          />
          
          <select
            value={operacion}
            onChange={(e) => setOperacion(e.target.value)}
            className="w-20 shrink-0 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100"
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
            className="flex-1 min-w-0 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100"
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
          <button
            onClick={() => setVoz((v) => !v)}
            className={"px-4 py-2 rounded-md transition " + (voz ? "bg-indigo-600 text-white" : "bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-100")}
          >
            Voz {voz ? "On" : "Off"}
          </button>
        </div>

        {resultado && (
          <div className="mt-4 p-3 bg-slate-100 dark:bg-slate-700 rounded-md">
            <p className="text-lg font-semibold text-slate-800 dark:text-slate-100 text-center">
              Resultado: {resultado}
            </p>
          </div>
        )}

        <div className="mt-2">
          <p className="text-sm text-slate-700 dark:text-slate-200 mb-2">Ejemplos divertidos:</p>
          <div className="flex flex-wrap gap-2">
            {[
              { a: "3", b: "5", op: "+", label: "3 + 5" },
              { a: "6", b: "4", op: "-", label: "6 - 4" },
              { a: "7", b: "8", op: "*", label: "7 × 8" },
              { a: "12", b: "3", op: "/", label: "12 ÷ 3" },
            ].map((ex, i) => (
              <button
                key={i}
                onClick={() => { setNum1(ex.a); setNum2(ex.b); setOperacion(ex.op); hablar(`Ejemplo: ${ex.label}`); }}
                className="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                {ex.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculadoraBasica;