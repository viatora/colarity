import { Colour } from "@/types/Colour";

import colourByHsl from "@/constructors/colourByHsl";
import colourRandom from "@/constructors/colourRandom";
import colourDistances from "@/utils/colourDistances";
import calculateUnachievableLuminanceRange from "@/utils/calculateUnachievableLuminanceRange";

export default function generateColours(
  colours: Colour[],
  numberOfColours: number,
  targetRatio: number
): Colour[] {
  const unachievableLuminanceRange =
    calculateUnachievableLuminanceRange(targetRatio);

  if (colours.length === 0) {
    colours.push(colourRandom());
  }

  const coloursToAdd = numberOfColours - colours.length;

  const hueAdjust = [
    0.1,
    0.2,
    0.3,
    0.4,
    0.5,
    0.6,
    0.7,
    0.8,
    0.9,
    0.25,
    0.75,
    1 / 3,
    2 / 3,
  ];

  for (let i = 0; i < coloursToAdd; i++) {
    let tries = 0;
    let newColour;
    while (tries < 50) {
      const baseColour = colours[colours.length - 1];
      let { h } = baseColour.hsl;
      const { s, l } = baseColour.hsl;
      h = (h + hueAdjust[Math.floor(Math.random() * hueAdjust.length)]) % 1;
      const tempColour = colourByHsl({ h, s, l });

      // Check if the new colour is distinct
      if (Math.min(...colourDistances(colours, tempColour)) <= 8) {
        tries++;
        continue;
      }

      // Check if the new colour's luminance is acceptable
      if (
        tempColour.luminance < unachievableLuminanceRange.min ||
        tempColour.luminance > unachievableLuminanceRange.max
      ) {
        newColour = tempColour;
        break;
      } else if (tries === 49) {
        // Use complementary colour if all tries fail
        h = (h + 0.5) % 1;
        newColour = colourByHsl({ h, s, l });
        break;
      }

      tries++;
    }

    if (newColour) {
      colours.push(newColour);
    }
  }

  return colours;
}
