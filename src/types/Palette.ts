import { LuminanceRange } from "./colourTypes";
import { Colour } from "./Colour";

export interface Palette {
  targetRation: number;
  unachievableLuminanceRange: LuminanceRange;
  colours: Colour[];
  constrastColours: Colour[];
}
