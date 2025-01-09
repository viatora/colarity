import { RGB } from "../types/colourTypes";

import srgbToLinear from "./srgbToLinear";

export default function rgbToLuminance(rgb: RGB): number {
  return (
    0.2126 * srgbToLinear(rgb.r / 255) +
    0.7152 * srgbToLinear(rgb.g / 255) +
    0.0722 * srgbToLinear(rgb.b / 255)
  );
}
