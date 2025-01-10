import { LuminanceRange } from "@/types/colourTypes";

export default function calculateUnachievableLuminanceRange(
  targetRatio: number
): LuminanceRange {
  // Calculate the upper bound for when the luminance is the lighter color (L1)
  const upperBoundL1 = targetRatio * 0.05 - 0.05;

  // Calculate the lower bound for when the luminance is the darker color (L2)
  const lowerBoundL2 = (1 + 0.05) / targetRatio - 0.05;

  // If the bounds overlap or are invalid, return min > max
  if (lowerBoundL2 >= upperBoundL1) {
    return {
      min: 1,
      max: 0,
    }; // All colors can achieve the contrast ratio
  }

  // Otherwise, return the range that cannot achieve the contrast ratio
  return {
    min: lowerBoundL2,
    max: upperBoundL1,
  };
}
