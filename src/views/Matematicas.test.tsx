import { render, screen } from "@testing-library/react";
import Matematicas from "./Matematicas";

test("renderiza guía y calculadora", () => {
  render(<Matematicas />);
  expect(screen.getByText(/Matemáticas/i)).toBeInTheDocument();
  expect(screen.getByText(/Guía rápida/i)).toBeInTheDocument();
  expect(screen.getByText(/Calculadora Básica/i)).toBeInTheDocument();
  const headings = screen.getAllByText(/Tablas de Multiplicar/i);
  expect(headings.length).toBeGreaterThan(0);
});
