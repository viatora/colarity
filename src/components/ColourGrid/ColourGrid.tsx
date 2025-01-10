import ColourBlock from "./ColourBlock/ColourBlock";

export default function ColourGrid() {
  // Max, these variables are what you can change to change the background of the colour blobs
  const primaryColour = `#3b82f6`;
  const secondaryColour = `#34d399`;
  const successColour = `#22c55e`;
  const errorColour = `#ef4444`;
  const warningColour = `#eab308`;
  const infoColour = `#38bdf8`;
  const neutralColour = `#000000`;
  const contrastColour = "white";

  const myColours = [
    { colour: primaryColour, isLarge: true, isPrimary: true },
    { colour: secondaryColour, isLarge: true },
    { colour: successColour, semanticName: "Success" },
    { colour: errorColour, semanticName: "Error" },
    { colour: warningColour, semanticName: "Warning" },
    { colour: infoColour, semanticName: "Info" },
    { colour: primaryColour, isContrastBlock: true },
    { colour: secondaryColour, isContrastBlock: true },
    { colour: neutralColour, semanticName: "Neutral" },
  ];

  return (
    <>
      <div className="grid grid-cols-3 grid-rows-5 gap-1 w-10/12 m-auto h-[600px] mt-10">
        {myColours.map((colour, index) => {
          return (
            <ColourBlock
              key={index}
              colour={colour.colour}
              isLarge={colour.isLarge}
              semanticName={colour.semanticName}
              isContrastBlock={colour.isContrastBlock}
              contrastColour={contrastColour}
              index={index}
              isPrimary={colour.isPrimary}
            />
          );
        })}
      </div>
    </>
  );
}
