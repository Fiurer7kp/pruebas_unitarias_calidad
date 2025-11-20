import { render, screen } from "@testing-library/react";
import Sociales from "./Sociales";

test("renderiza mapa de Colombia y hotspots", () => {
  render(<Sociales />);
  expect(screen.getByText(/Sociales/i)).toBeInTheDocument();
  expect(screen.getByRole("img", { name: /Mapa de Colombia/i })).toBeInTheDocument();
  const labels = screen.getAllByText(/Bogotá/i);
  expect(labels.length).toBeGreaterThan(0);
});
