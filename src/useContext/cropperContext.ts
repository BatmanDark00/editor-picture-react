import { createContext, useContext } from "react";



export const CropperContext = createContext({ tone: 0,
    setTone: () => {} });

export function useCropperContext() {
  const tone = useContext(CropperContext);

  console.log("Tone", tone);

  if (!tone) {
    throw new Error("useCropperContext must be used within a CropperContext");
  }

  return tone;
}
