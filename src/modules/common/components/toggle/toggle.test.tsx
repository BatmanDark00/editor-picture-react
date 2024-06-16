import Toggle from "@/modules/common/components/toggle/Toggle";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Toggle", () => {
       test("Change theme app", () => {
        render(
            <Toggle>
                
            </Toggle>
        );

        const toggle = screen.getByRole("checkbox");
        toggle.click();
       
        fireEvent.click(toggle);        
    });
});