import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="h-10 w-screen bg-sky-200 flex justify-between px-10 items-center">
        <Link href={"/generator"}>Generate</Link>
        <Link href={"/generator/ui-preview"}>Preview</Link>
        <Link href={"/generator/swatch"}>Swatch</Link>
      </div>
    </>
  );
}
