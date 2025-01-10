import ColourBlock from "./ColourBlock/ColourBlock";

export default function ColourGrid() {
  const myColours = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <div className="grid grid-cols-3 grid-rows-5 gap-4 w-10/12 m-auto h-96">
        <div className="row-span-4 col-span-1 bg-blue-500">Div 1</div>
        <div className="row-span-4 col-span-1 bg-red-500">Div 2</div>

        <div className="row-span-1 col-span-1 bg-green-500">Div 3</div>
        <div className="row-span-1 col-span-1 bg-yellow-500">Div 4</div>
        <div className="row-span-1 col-span-1 bg-purple-500">Div 5</div>

        <div className="row-span-1 col-span-1 bg-pink-500">Div 6</div>
        <div className="row-span-1 col-span-1 bg-indigo-500">Div 7</div>
        <div className="row-span-1 col-span-1 bg-orange-500">Div 8</div>
        <div className="row-span-1 col-span-1 bg-orange-500">Div 8</div>
      </div>
    </>
  );
}
