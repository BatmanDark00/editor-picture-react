import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "@/assets/styles/components/tool_menu_lateral/edit/basic_concepts/color.scss";

import SliderBase from "@/components/common/SliderBase";

import { setToneCropper } from "@/redux/imageCropperSlice";
import { setComponentMain } from "@/redux/menuLateralEditSlice";

export default function Color() {
  const dispatch = useDispatch();
  const [tone, setTone] = useState<number>(0);
  const [saturation, setSaturation] = useState<number>(0);
  const [temperature, setTemperature] = useState<number>(0);

  const handleToneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTone(parseInt(event.target.value));
    dispatch(setToneCropper(parseInt(event.target.value)));
  };

  const handleSaturationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSaturation(parseInt(event.target.value));
  };

  const handleTemperatureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTemperature(parseInt(event.target.value));
  };

  const clearPropertiesSelected = () => {
    setTone(0);
    setSaturation(0);
    setTemperature(0);

    dispatch(setComponentMain(true));
  };

  return (
    <>
      <div className="menu-color">
        <p>Tono</p>
        <div className="section-slider-change">
          <p>
            {tone}
            <span>°</span>
          </p>
        </div>
        <SliderBase
          className="input-tone"
          value={tone}
          min={-180}
          max={180}
          onChange={handleToneChange}
        />

        <p>Saturacion</p>
        <div className="section-slider-change">
          <p>
            {saturation}
            <span>%</span>
          </p>
        </div>
        <SliderBase
          className="input-saturation"
          value={saturation}
          min={-100}
          max={100}
          onChange={handleSaturationChange}
        />

        <p>Temperatura</p>
         <div className="section-slider-change">
          <p>
            {temperature}
            <span>%</span>
          </p>
        </div>
        <SliderBase
          className="input-temperature"
          value={temperature}
          min={-100}
          max={100}
          onChange={handleTemperatureChange}
        /> 
      </div>
    </>
  );
}
