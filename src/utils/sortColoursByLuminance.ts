import { Colour } from "@/types/Colour";

export default function sortColoursByLuminance(colours: Colour[]): void {
  colours.sort((a, b) => a.luminance - b.luminance);
}
