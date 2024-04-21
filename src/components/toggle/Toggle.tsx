
import useDarkMode from "@/hooks/useDarkMode";

export default function Toggle() {

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
}