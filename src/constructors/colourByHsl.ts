import { Colour } from "@/types/colour";
import { HSL } from "@/types/colourTypes";

import hslToRgb from "@/utils/hslToRgb";
import rgbToHex from "@/utils/rgbToHex";
import rgbToLuminance from "@/utils/rgbToLuminance";
import rgbToXyz from "@/utils/rgbToXyz";

export default function colourByHex(hsl: HSL): Colour {
  const rgb = hslToRgb(hsl);
  const luminance = rgbToLuminance(rgb);
  return {
    name: null,
    hex: rgbToHex(rgb),
    rgb,
    hsl,
    xyz: rgbToXyz(rgb),
    luminance,
    textColour: luminance > 0.1791 ? "black" : "white",
  };
}
