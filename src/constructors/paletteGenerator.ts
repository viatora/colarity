import { Colour } from "@/types/Colour";
import { Palette } from "@/types/Palette";

export default function paletteGenerator(targetRatio: number, numberOfColours: number, ...colours: Colour[]): Palette {
  const hsl = {
    h: randomInRange(0, 1),
    s: randomInRange(0.6, 1),
    l: randomInRange(0.3, 0.7),
  };
  const rgb = hslToRgb(hsl);
  const luminance = rgbToLuminance(rgb);
  return {
    targetRatio,
    numberOfColours,
    unachievableLuminanceRange,

  };
}


targetRatio: number,
    numberOfColours: number,
    ...colours: Colour[]
  ) {
    this.targetRatio = targetRatio;
    this.unachievableLuminanceRange = this.calculateUnachievableLuminanceRange();
    this.colours = colours ?? [];
    this.generateColours(numberOfColours);
    this.contrasts = this.generateContrasts();
    this.sortColoursByLuminance();