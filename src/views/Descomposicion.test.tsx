import { render, screen, fireEvent } from "@testing-library/react";
import Descomposicion from "./Descomposicion";

test("renderiza el componente Descomposicion correctamente", () => {
  render(<Descomposicion />);
  expect(screen.getByText(/Descomposición de Figuras 🔧/i)).toBeInTheDocument();
});

test("muestra el estado inicial con cubo seleccionado", () => {
  render(<Descomposicion />);
  expect(screen.getByRole("heading", { level: 4, name: /Cubo/i })).toBeInTheDocument();
  // Verificar que los números están presentes (hay múltiples, pero al menos uno)
  const numbers = screen.getAllByText("6");
  expect(numbers.length).toBeGreaterThan(0); // Caras del cubo
  expect(screen.getAllByText("12").length).toBeGreaterThan(0); // Aristas del cubo
  expect(screen.getAllByText("8").length).toBeGreaterThan(0); // Vértices del cubo
});

test("cambia a pirámide cuando se selecciona", () => {
  render(<Descomposicion />);
  const piramideButton = screen.getByRole("button", { name: /Pirámide Triangular/i });
  fireEvent.click(piramideButton);
  expect(screen.getByRole("heading", { level: 4, name: /Pirámide Triangular/i })).toBeInTheDocument();
  // Verificar que los números están presentes
  expect(screen.getAllByText("4").length).toBeGreaterThan(0); // Caras y vértices de la pirámide
  expect(screen.getAllByText("6").length).toBeGreaterThan(0); // Aristas de la pirámide
});

test("cambia a cono cuando se selecciona", () => {
  render(<Descomposicion />);
  const conoButton = screen.getByRole("button", { name: /Cono/i });
  fireEvent.click(conoButton);
  expect(screen.getByRole("heading", { level: 4, name: /Cono/i })).toBeInTheDocument();
  // Verificar que los números están presentes
  expect(screen.getAllByText("2").length).toBeGreaterThan(0); // Caras del cono
  expect(screen.getAllByText("1").length).toBeGreaterThan(0); // Aristas y vértices del cono
});

test("muestra la fórmula de Euler", () => {
  render(<Descomposicion />);
  expect(screen.getByText(/C - A \+ V = 2/i)).toBeInTheDocument();
});

test("calcula correctamente la fórmula de Euler para el cubo", () => {
  render(<Descomposicion />);
  expect(screen.getByText(/Para Cubo: 6 - 12 \+ 8 = 2/i)).toBeInTheDocument();
});

test("muestra el footer con autores", () => {
  render(<Descomposicion />);
  expect(screen.getByText(/Sebastian Coral & Daniela Torres — 2025/i)).toBeInTheDocument();
});