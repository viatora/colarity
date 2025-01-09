import { Colour } from "@/types/Colour";

import hslToRgb from "@/utils/hslToRgb";
import randomInRange from "@/utils/randomInRange";
import rgbToHex from "@/utils/rgbToHex";
import rgbToLuminance from "@/utils/rgbToLuminance";
import rgbToXyz from "@/utils/rgbToXyz";

export default function colourRandom(): Colour {
  const hsl = {
    h: randomInRange(0, 1),
    s: randomInRange(0.6, 1),
    l: randomInRange(0.3, 0.7),
  };
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
