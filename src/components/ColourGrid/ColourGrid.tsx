import ColourBlock from "./ColourBlock/ColourBlock";

export default function ColourGrid() {
  const myColours = [
    { colour: "bg-blue-500", isLarge: true },
    { colour: "bg-red-500", isLarge: true },
    { colour: "bg-green-500" },
    { colour: "bg-purple-500" },
    { colour: "bg-yellow-500" },
    { colour: "bg-pink-500" },
    { colour: "bg-orange-500" },
    { colour: "bg-slate-500" },
    { colour: "bg-sky-500" },
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
            />
          );
        })}
      </div>
    </>
  );
}
