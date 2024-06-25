import { useState } from "react";
import "@/modules/photo_editor/components/main/footer/menuFooter.scss";

import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonBase from "@/components/common/ButtonBase";
import SliderZoom from "@/components/common/SliderZoom";
import { setZoomValue } from "@/modules/photo_editor/states/cropper/imageCropperSlice";

export default function MenuFooter () {
  const [sliderZoom, setSliderZoom] = useState<number>(0);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleZoomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newZoomValue = parseInt(e.target.value);
    setSliderZoom(newZoomValue)
    dispatch(setZoomValue(newZoomValue));
  };

  const handleOnkeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSliderZoom(parseInt(sliderZoom.toString()));
    }
    console.log(sliderZoom, "entrando");
  };

   const moreZoom = () => {
    const newZoom = Math.min(sliderZoom + 20, 100);
    setSliderZoom(newZoom);
    dispatch(setZoomValue(newZoom))
  };

  const lessZoom = () => {
    const newZoom = Math.max(sliderZoom - 20, 0);
    setSliderZoom(newZoom);
    dispatch(setZoomValue(newZoom))
  }; 


  const expandFullScreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    }
    setIsFullScreen(true);
  };

  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    setIsFullScreen(false);
  };


  return (
    <>
      <footer id="menu-footer">
        <div>
           <ButtonBase disabled>
            <FontAwesomeIcon icon={["fas", "layer-group"]} />
          </ButtonBase>
           <ButtonBase disabled>
            <FontAwesomeIcon icon={["fas", "clone"]} />
          </ButtonBase>
           <ButtonBase disabled>
            <FontAwesomeIcon icon={["fas", "border-all"]} />
          </ButtonBase>
        </div>

        <div>
          <div className="div-buttom-expand">
            <ButtonBase
              onClick={expandFullScreen}
            >
              <FontAwesomeIcon icon={["fas", "expand"]} />
            </ButtonBase>
          </div>
          <div className="div-buttom-compress">
            <ButtonBase
              onClick={exitFullScreen}
            >
              <FontAwesomeIcon icon={["fas", "compress"]} />
            </ButtonBase>
          </div>
          <div className="div-buttom-minus">
            <ButtonBase onClick={lessZoom}>
              <FontAwesomeIcon icon={["fas", "minus"]} />
            </ButtonBase>
          </div>
          <div className="section-slider">
            <SliderZoom
              min={0}
              max={100}
              value={sliderZoom}
              onChange={handleZoomChange}
            />
            <div
              className="div-range-slider-zoom"
              style={{ width: `${2 * sliderZoom}px`}}
            >
              {sliderZoom}
            </div>
          </div>
          <div className="div-buttom-plus">
            <ButtonBase onClick={moreZoom}>
              <FontAwesomeIcon icon={["fas", "plus"]} />
            </ButtonBase>
          </div>
          <div className="slider-data">
            <input
              type="number"
              value={sliderZoom}
              className="input-slider-zoom"
              onChange={handleZoomChange}
              onKeyDown={handleOnkeyDown}
              // onBlur={handleInputBlur}
            />
            <span className="value-minus">%</span>
          </div>
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
