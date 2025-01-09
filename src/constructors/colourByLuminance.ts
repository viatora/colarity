import iterateRgbForLuminance from "@/actions/colour/iterateRgbForLuminance";
import { Colour } from "@/types/colour";

import rgbToHex from "@/utils/rgbToHex";
import rgbToHsl from "@/utils/rgbToHsl";
import rgbToXyz from "@/utils/rgbToXyz";

export default function colourByHex(luminance: number): Colour {
  const rgb = iterateRgbForLuminance(luminance);
  return {
    name: null,
    hex: rgbToHex(rgb),
    rgb,
    hsl: rgbToHsl(rgb),
    xyz: rgbToXyz(rgb),
    luminance,
    textColour: luminance > 0.1791 ? "black" : "white",
  };
}
