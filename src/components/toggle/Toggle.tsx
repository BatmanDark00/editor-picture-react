import React from "react";
import useDarkMode from "@/hooks/useDarkMode";

const Toggle: React.FC = () => {    
    const { toggleDarkMode } = useDarkMode();

    return (
        <div className="toggle-container">
          <input
            type="checkbox"
            id="check"
            className="toggle"
            onChange={toggleDarkMode}
          />
          <label htmlFor="check">Cambiar Tema</label>
        </div>
    );
};

export default Toggle;
