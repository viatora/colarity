export default function linearToSrgb(cLinear: number): number {
  return cLinear <= 0.0031308
    ? cLinear * 12.92
    : 1.055 * Math.pow(cLinear, 1 / 2.4) - 0.055;
}
