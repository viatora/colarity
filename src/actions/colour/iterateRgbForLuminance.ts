// THIS FUNCTION SHOULD UPDATE LUMINANCE AS IT WILL GENERATE AN
// RGB COLOUR THAT IS CLOSE TO THE TARGET LUMINANCE BUT NOT ALWAYS EXACT
// (although it will always err on the side that will increase rather than decrease contrast)

import { RGB } from "../../types/colourTypes";

import generateRgbFromLuminance from "./generateRgbFromLuminance";
import rgbToLuminance from "@/utils/rgbToLuminance";

export default function iterateRgbForLuminance(targetLuminance: number): RGB {
  // Determine if the color should be light or dark
  let rgb: RGB = { r: 0, g: 0, b: 0 };
  const isDark = targetLuminance <= 0.1791;
  let tries = 0;
  let luminanceAdjuster = 0;
  let luminanceIncrement: number;

  if (isDark) {
    // reduce by 10%
    luminanceIncrement = -targetLuminance / 10;
  } else {
    // add 10%
    luminanceIncrement = (1 - targetLuminance) / 10;
  }

  while (tries < 30) {
    rgb = generateRgbFromLuminance(targetLuminance + luminanceAdjuster);
    const luminance = rgbToLuminance(rgb);

    // Break loop if successfully generated high-contrast color
    if (isDark && luminance <= targetLuminance) {
      break;
    } else if (!isDark && luminance >= targetLuminance) {
      break;
    } else {
      console.log(
        `Contrasting color: Try ${
          tries + 1
        } failed as it did not meet appropriate contrast ratio (luminance: ${luminance} / target: ${targetLuminance}), will try again.`
      );
    }
    tries++;
    luminanceAdjuster += luminanceIncrement;
  }
  console.log(rgb);
  return rgb;
}
