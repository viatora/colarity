import { Colour } from "@/types/Colour";

export default function colourDistances(
  colours: Colour[],
  tempColour: Colour
): number[] {
  const { x: x1, y: y1, z: z1 } = tempColour.xyz;
  return colours.map((colour) => {
    const { x: x2, y: y2, z: z2 } = colour.xyz;
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2);
  });
}
