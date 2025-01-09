import { LuminanceRange } from "./colourTypes";
import { Colour } from "./colour";

export interface Palette {
  targetRation: number;
  unachievableLuminanceRange: LuminanceRange;
  colours: Colour[];
  constrastColours: Colour[];
}
