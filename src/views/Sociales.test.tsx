import { render, screen } from "@testing-library/react";
import Sociales from "./Sociales";

test("renderiza mapa de Colombia y hotspots", () => {
  render(<Sociales />);
  expect(screen.getByText(/Sociales/i)).toBeInTheDocument();
  expect(screen.getByRole("img", { name: /Mapa de Colombia/i })).toBeInTheDocument();
  expect(screen.getByText(/Bogotá/i)).toBeInTheDocument();
});