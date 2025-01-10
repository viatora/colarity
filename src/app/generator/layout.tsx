import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full h-24 bg-sky-100 px-10 flex items-center justify-between">
        <h1 className="text-5xl">Colarity</h1>
        <button className="bg-white p-2 rounded-md text-base">Log In</button>
      </div>
      <Navbar />
      <div className="">{children}</div>
    </>
  );
}
