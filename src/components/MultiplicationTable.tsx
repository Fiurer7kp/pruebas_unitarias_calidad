// src\components\MultiplicationTable.tsx
import { useState } from "react";

export default function MultiplicationTable() {
  const [number, setNumber] = useState<number | null>(null);
  const [table, setTable] = useState<number[]>([]);

  const generateTable = () => {
    if (number === null || isNaN(number)) return;
    const result = Array.from({ length: 10 }, (_, i) => (i + 1) * number);
    console.log(result);
    setTable(result);
  };
  const speakTable = () => {
    const synth = (window as any).speechSynthesis;
    if (!synth || number === null || isNaN(number) || table.length === 0) return;
    const text = table.map((v, i) => `${number} por ${i + 1} igual ${v}`).join(". ");
    const u = new (window as any).SpeechSynthesisUtterance(text);
    synth.cancel();
    synth.speak(u);
  };

  return (
    <div className="h-full w-full p-6">
      <h1 className="text-2xl font-bold mb-4">Tablas de Multiplicar</h1>

      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <input
          type="number"
          className="border rounded-lg p-2 w-32"
          placeholder="Número"
          value={number ?? ""}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button
          onClick={generateTable}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Generar
        </button>
        {table.length > 0 && (
          <button
            onClick={speakTable}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Leer
          </button>
        )}
      </div>

      {table.length > 0 && (
        <div className="bg-gray-100 rounded-lg p-4 shadow">
          <h2 className="text-lg font-semibold mb-2">Tabla del {number}</h2>
          <ul className="space-y-1">
            {table.map((value, index) => (
              <li key={index} className="text-gray-700">
                {number} × {index + 1} = {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
