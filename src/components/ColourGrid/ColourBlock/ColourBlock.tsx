import clsx from "clsx";

interface ColourBlockProps {
  isLarge: boolean | undefined;
  isContrastBlock: boolean | undefined;
  colour: string;
  semanticName: string | undefined;
  contrastColour: string | undefined;
  index: number;
}

export default function ColourBlock({
  isLarge,
  isContrastBlock,
  colour,
  semanticName,
  contrastColour,
  index,
}: ColourBlockProps) {
  return (
    <div
      className={clsx("col-span-1 flex justify-center items-center", {
        "row-span-4": isLarge,
        "row-span-1": !isLarge,
        "rounded-tl-3xl": index === 0,

        "rounded-tr-3xl": index === 2,
        "rounded-bl-3xl": index === 6,
        "rounded-br-3xl": index === 8,
      })}
      // apparently we have to use inline styles here because clsx and tailwind don't play well with dynamic values in props
      // "Since bg-[${colour}] syntax doesn’t dynamically support arbitrary hex codes, use style for true dynamic values"
      style={{ backgroundColor: colour }}
    >
      {semanticName ? (
        <p className={clsx({ "text-white": semanticName === "Neutral" })}>
          {semanticName}
        </p>
      ) : undefined}

      {isContrastBlock ? (
        <p className="text-3xl" style={{ color: contrastColour }}>
          Lorem Ipsum
        </p>
      ) : undefined}
    </div>
  );
}
