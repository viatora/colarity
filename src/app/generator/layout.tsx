import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full h-10 bg-pink-300"></div>
      <div className="w-full h-36 bg-sky-200 text-7xl pl-10 flex items-center">
        COLARITY
      </div>
      <Navbar />
      <div className="">{children}</div>
    </>
  );
}
