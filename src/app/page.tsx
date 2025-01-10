import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen flex bg-red-500 justify-center items-center">
      <button className="bg-white p-2 rounded-md hover:bg-slate-200">
        <Link href="generator">Get Started</Link>
      </button>
    </div>
  );
}
