import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Logico from "./Logico";

describe("Logico view", () => {
  test("muestra secuencia y permite elegir siguiente número", async () => {
    const user = userEvent.setup();
    render(<Logico />);

    expect(screen.getByText(/Pensamiento Lógico/i)).toBeInTheDocument();
    expect(screen.getByText(/Secuencia:/i)).toBeInTheDocument();

    const optionBtns = screen.getAllByRole("button");
    const nextBtn = optionBtns.find((b) => /\d+/.test(b.textContent || ""));
    if (nextBtn) {
      await user.click(nextBtn);
      expect(screen.getByText(/Puntaje:/i)).toBeInTheDocument();
    }
  });
});

