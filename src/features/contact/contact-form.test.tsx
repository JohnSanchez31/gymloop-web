import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "@/test/utils";
import { ContactForm } from "./contact-form";

describe("ContactForm", () => {
  it("muestra errores de validación si se envía vacío", async () => {
    renderWithProviders(<ContactForm />);
    await userEvent.click(screen.getByRole("button", { name: /enviar propuesta/i }));
    expect(await screen.findByText("Ingresa tu nombre")).toBeInTheDocument();
    expect(screen.getByText("Correo inválido")).toBeInTheDocument();
  });
});
