import { RGB } from "../types/colourTypes";

export default function rgbToHex(rgb: RGB): string {
  return `#${((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b)
    .toString(16)
    .slice(1)
    .toUpperCase()}`;
}
