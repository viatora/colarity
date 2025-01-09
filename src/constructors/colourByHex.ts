import { Colour } from "@/types/colour";

import hexToRgb from "@/utils/hexToRgb";
import rgbToHsl from "@/utils/rgbToHsl";
import rgbToLuminance from "@/utils/rgbToLuminance";
import rgbToXyz from "@/utils/rgbToXyz";

export default function colourByHex(hex: string): Colour {
  const rgb = hexToRgb(hex);
  const luminance = rgbToLuminance(rgb);
  return {
    name: null,
    hex: hex,
    rgb,
    hsl: rgbToHsl(rgb),
    xyz: rgbToXyz(rgb),
    luminance,
    textColour: luminance > 0.1791 ? "black" : "white",
  };
}
