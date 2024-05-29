import { useState } from "react";
import "@/assets/styles/components/picture/menuFooter.scss";
import Slider from "@/components/common/Slider"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MenuFooter() {
  const [temperature, setTemperature] = useState<number>(0);

  const handleTemperatureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTemperature(parseInt(event.target.value));
  };

  return (
    <>
      <footer id="menu-footer">
        <div>
          <button disabled>
            <FontAwesomeIcon icon={["fas", "layer-group"]} />
          </button>
          <button disabled>
            <FontAwesomeIcon icon={["fas", "clone"]} />
          </button>
          <button disabled>
            <FontAwesomeIcon icon={["fas", "border-all"]} />
          </button>
        </div>

        <div>
          <button disabled>
            <FontAwesomeIcon icon={["fas", "expand"]} />
          </button>
          <button disabled>
            {" "}
            <FontAwesomeIcon icon={["fas", "compress"]} />
          </button>
          <button disabled>
            <FontAwesomeIcon icon={["fas", "minus"]} />
          </button>
          <div className="section-slider">
            <Slider
              className="input-zoom"
              value={temperature}
              min={-100}
              max={100}
              onChange={handleTemperatureChange}
            />
          </div>
          <button disabled>
            {" "}
            <FontAwesomeIcon icon={["fas", "plus"]} />
          </button>
          <button disabled>
            <FontAwesomeIcon icon={["fas", "bars"]} />
          </button>
        </div>

        <div>
          <button disabled>
            <FontAwesomeIcon icon={["fas", "rotate"]} />
          </button>
          <button disabled>
            <FontAwesomeIcon icon={["fas", "arrow-turn-up"]} rotation={270} />
          </button>
          <button disabled>
            <FontAwesomeIcon icon={["fas", "arrow-turn-down"]} rotation={270} />
          </button>
          <button disabled>
            <FontAwesomeIcon icon={["fas", "clock-rotate-left"]} />
          </button>
        </div>
      </footer>
    </>
  );
}
