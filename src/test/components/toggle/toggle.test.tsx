import Toggle from "@/components/toggle/Toggle";
import { render, screen } from "@testing-library/react";

describe("Toggle", () => {
    test("Renderizar componente con etiqueta 'Cambiar Tema'", () => {
        render(
            <Toggle>
                <div>Cambiar Tema</div>
            </Toggle>
        );
        const cambiarTemaLabel = screen.getByText("Cambiar Tema");
        expect(cambiarTemaLabel).toBeDefined();
    });
});