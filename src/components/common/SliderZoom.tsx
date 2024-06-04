import "@/assets/styles/components/common/sliderZoom.scss";

interface SliderZoomProps {
  value?: string | number;
  onClick?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  min: number;
  max: number;
}

function SliderZoom({ min, max, onChange, value }: SliderZoomProps) {
  return (
    <>
      <input
        type="range"
        className="slider-zoom input-zoom"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default SliderZoom;
