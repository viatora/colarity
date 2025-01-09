import { RGB, HSL, XYZ } from "./colourTypes";

export interface Colour {
  name: string | null;
  hex: string;
  rgb: RGB;
  hsl: HSL;
  xyz: XYZ;
  luminance: number;
  textColour: string;
}
