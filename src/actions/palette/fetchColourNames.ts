import { Colour } from "@/types/Colour";

export default async function fetchColourNames(
  colours: Colour[],
  contrasts: Colour[]
): Promise<void> {
  const allColours = colours.concat(contrasts);
  const apiUrl =
    "https://api.color.pizza/v1/?values=" +
    allColours.map((colour) => colour.hex.replace("#", "")).join(",");

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    if (data.colors.length === 0) {
      throw new Error("No colours found in the API response");
    }

    // Update class properties with the API data
    for (let i = 0; i < allColours.length; i++) {
      allColours[i].name = data.colors[i].name;
    }
  } catch (error) {
    console.error("Error fetching colour data:", error);
  }
}
