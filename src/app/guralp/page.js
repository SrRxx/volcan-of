"use client";

import { usePathname, useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar";
import Home from "../page";

export default function Guralp() {
  const router = useRouter();

  const getContent = () => {
    const pathname = usePathname();
    switch (pathname) {
      case "/":
        return <Home />;
      case "/guralp":
        return <Guralp />;
      default:
        return <h1>No encontrado</h1>;
    }
  };

  return (
    <div className="w-full h-full">
      <Sidebar />
      {getContent()}
    </div>
  );
}
