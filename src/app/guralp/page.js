"use client";

import { usePathname, useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar";
import Home from "../page";
import Plot from "react-plotly.js";
import { useEffect, useState } from "react";

export default function Guralp() {
  const [Loading, setLoading] = useState(true);

  const router = useRouter();

  /*const getContent = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const pathname = usePathname();
    switch (pathname) {
      case "/":
        return <Home />;
      case "/guralp":
        return <Guralp />;
      default:
        return <h1>No encontrado</h1>;
    }
  };*/

  /*useEffect(() => {
    if (Loading) {
      fetch("http://127.0.0.1:8000/")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));

      setLoading(false);
    }
  }, [Loading]);*/

  return (
    <div className="w-full h-full">
      <Sidebar />
      {/*getContent()*/}
      <div className="absolute left-[340px] top-0">
        <Plot
          data={[
            {
              x: [1, 2, 3],
              y: [2, 6, 3],
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "red" },
            },
            { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
          ]}
          layout={{ width: 500, height: 400, title: "A Fancy Plot" }}
        />
      </div>
    </div>
  );
}
