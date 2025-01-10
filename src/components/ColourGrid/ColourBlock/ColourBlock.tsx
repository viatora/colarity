import clsx from "clsx";

interface ColourBlockProps {
  isLarge: boolean | undefined;
  colour: string;
}

export default function ColourBlock({ isLarge, colour }: ColourBlockProps) {
  return (
    <div
      className={clsx("col-span-1 ", colour, {
        "row-span-4": isLarge,
        "row-span-1": !isLarge,
      })}
    >
      Div 1
    </div>
  );
}
