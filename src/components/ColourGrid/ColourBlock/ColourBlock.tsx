import clsx from "clsx";

interface ColourBlockProps {
  isLarge: boolean | undefined;
  colour: string;
  semanticName: string | undefined;
}

export default function ColourBlock({
  isLarge,
  colour,
  semanticName,
}: ColourBlockProps) {
  return (
    <div
      className={clsx("col-span-1 flex justify-center items-center", {
        "row-span-4": isLarge,
        "row-span-1": !isLarge,
      })}
      // apparently we have to use inline styles here because clsx and tailwind don't play well with dynamic values in props
      style={{ backgroundColor: colour }}
    >
      {semanticName ? (
        <p className={clsx({ "text-white": semanticName === "Neutral" })}>
          {semanticName}
        </p>
      ) : undefined}
    </div>
  );
}
