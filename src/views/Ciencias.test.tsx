import { render, screen } from "@testing-library/react";
import Ciencias from "./Ciencias";

test("renderiza guía y video en Ciencias", () => {
  render(<Ciencias />);
  expect(screen.getByText(/Ciencias Naturales/i)).toBeInTheDocument();
  expect(screen.getByText(/Guía rápida/i)).toBeInTheDocument();
  const vids = screen.getAllByText(/Video/i);
  expect(vids.length).toBeGreaterThan(0);
  const videoEl = document.querySelector("video");
  expect(videoEl).not.toBeNull();
});
