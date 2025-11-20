import { render, screen } from "@testing-library/react";
import Ciencias from "./Ciencias";

test("renderiza guía y sistema solar en Ciencias", () => {
  render(<Ciencias />);
  expect(screen.getByText(/Ciencias Naturales/i)).toBeInTheDocument();
  expect(screen.getByText(/Guía rápida/i)).toBeInTheDocument();
  expect(screen.getByText(/Sistema Solar/i)).toBeInTheDocument();
});
