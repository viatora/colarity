import { Colour } from "@/types/Colour";

import colourByLuminance from "@/constructors/colourByLuminance";

export default function generateContrasts(
  colours: Colour[],
  targetRatio: number
): Colour[] {
  // Method that will generate contrasting colours based on the target contrast ratio
  console.log("Target ratio used: ", targetRatio);
  const luminancesLight: number[] = [];
  const luminancesDark: number[] = [];

  // Split the luminances into light and dark categories
  for (const colour of colours) {
    if (colour.textColour === "white") {
      luminancesDark.push(colour.luminance);
    } else {
      luminancesLight.push(colour.luminance);
    }
  }

  const luminance: { [key: string]: number } = {};
  const contrasts: Colour[] = [];

  // Calculate the upper bound for dark colors (luminances < 0.5)
  if (luminancesDark.length > 0) {
    luminance["dark"] =
      targetRatio * Math.max(...luminancesDark) + 0.05 * (targetRatio - 1);
    contrasts.push(colourByLuminance(luminance["dark"]));
  } else {
    // Any color would contrast sufficiently if there are no dark colors
    luminance["dark"] = 1;
  }

  // Calculate the lower bound for light colors (luminances >= 0.5)
  if (luminancesLight.length > 0) {
    luminance["light"] =
      (Math.min(...luminancesLight) + 0.05 - 0.05 * targetRatio) / targetRatio;
    contrasts.push(colourByLuminance(luminance["light"]));
  } else {
    // Any color would contrast sufficiently if there are no light colors
    luminance["light"] = 0;
  }

  // Output the calculated ranges
  console.log("Light Colors Lower Bound:", luminance["light"]);
  console.log("Dark Colors Upper Bound:", luminance["dark"]);

  return contrasts;
}
