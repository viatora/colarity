import { RGB, XYZ } from "../types/colourTypes";

import srgbToLinear from "./srgbToLinear";

export default function rgbToXyz(rgb: RGB): XYZ {
  const r = srgbToLinear(rgb.r / 255) * 100;
  const g = srgbToLinear(rgb.g / 255) * 100;
  const b = srgbToLinear(rgb.b / 255) * 100;

  // Observer = 2°, Illuminant = D65
  const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
  const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
  const z = r * 0.0193 + g * 0.1192 + b * 0.9505;

  return { x, y, z };
}
