import { RGB } from "../../types/colourTypes";

import clamp from "@/utils/clamp";
import linearToSrgb from "@/utils/linearToSrgb";
import srgbToLinear from "@/utils/srgbToLinear";
import randomInRange from "@/utils/randomInRange";

export default function generateRgbFromLuminance(targetLuminance: number): RGB {
  let r = 0,
    g = 0,
    b = 0;

  // Determine if the color should be light or dark
  const isDark = targetLuminance <= 0.1791;

  // Randomly select two channels to fix
  const channels: ("r" | "g" | "b")[] = ["r", "g", "b"];
  const fixedChannels = channels.sort(() => 0.5 - Math.random()).slice(0, 2);

  // Generate the fixed channels within the constrained range
  // Calculate the remaining channel based on the fixed channels and adjusted luminance
  if (fixedChannels.includes("r") && fixedChannels.includes("g")) {
    console.log("b will be calculated");
    r = randomInRange(0, 1);
    g = clamp(
      linearToSrgb(
        randomInRange(
          isDark ? 0 : (targetLuminance - 0.2126 * srgbToLinear(r)) / 0.7152,
          isDark ? (targetLuminance - 0.2126 * srgbToLinear(r)) / 0.7152 : 1
        )
      ),
      0,
      1
    );
    b = clamp(
      linearToSrgb(
        (targetLuminance -
          0.2126 * srgbToLinear(r) -
          0.7152 * srgbToLinear(g)) /
          0.0722
      ),
      0,
      1
    );
    console.log("b = " + b);
  } else if (fixedChannels.includes("r") && fixedChannels.includes("b")) {
    console.log("g will be calculated");
    r = randomInRange(0, 1);
    b = clamp(
      linearToSrgb(
        randomInRange(
          isDark ? 0 : (targetLuminance - 0.2126 * srgbToLinear(r)) / 0.0722,
          isDark ? (targetLuminance - 0.2126 * srgbToLinear(r)) / 0.0722 : 1
        )
      ),
      0,
      1
    );
    g = clamp(
      linearToSrgb(
        (targetLuminance -
          0.2126 * srgbToLinear(r) -
          0.0722 * srgbToLinear(b)) /
          0.7152
      ),
      0,
      1
    );
    console.log("g = " + g);
  } else {
    console.log("r will be calculated");
    g = randomInRange(0, 1);
    b = clamp(
      linearToSrgb(
        randomInRange(
          isDark ? 0 : (targetLuminance - 0.7152 * srgbToLinear(g)) / 0.0722,
          isDark ? (targetLuminance - 0.7152 * srgbToLinear(g)) / 0.0722 : 1
        )
      ),
      0,
      1
    );
    r = clamp(
      linearToSrgb(
        (targetLuminance -
          0.7152 * srgbToLinear(g) -
          0.0722 * srgbToLinear(b)) /
          0.2126
      ),
      0,
      1
    );
    console.log("r = " + r);
  }

  // Convert the channels back to the 0-255 range
  console.log(r, g, b);
  if (isDark) {
    return {
      r: Math.floor(r * 255),
      g: Math.floor(g * 255),
      b: Math.floor(b * 255),
    };
  } else {
    return {
      r: Math.ceil(r * 255),
      g: Math.ceil(g * 255),
      b: Math.ceil(b * 255),
    };
  }
}
