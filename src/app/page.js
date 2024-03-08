"use client";

import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import { FunnelIcon, HomeIcon, MapPinIcon } from "@heroicons/react/20/solid";
import Map from "./components/Map";
import ListSearch from "./components/ListSearch";

export default function Home() {
  const [emplazamientos, setE] = useState([]);
  const [estaciones, setES] = useState([]);
  const [sensores, setS] = useState([]);
  
  // Item seleccionado
  const [_selected, _setSelected] = useState({});

  const [Loading, setLoading] = useState(true);
  const [volcanes] = useState([
    { name: "Volcán Galeras", lat: 1.2166666666667, long: -77.366666666667 },
    { name: "Volcán Chiles", lat: 0.82111111, long: -77.935 },
    { name: "Volcán Cumbal", lat: 0.95583333333333, long: -77.883333333333 },
  ]);

  useEffect(() => {
    if (Loading) {
      // Emplazamientos
      setE([
        {
          id: 1,
          name: "Emplazamiento 1",
          type: 1,
          pos: { lat: 1.21955094115755, long: -77.3578839888642 },
          icon: <MapPinIcon className="w-full h-auto" />,
          color: "red",
        },
        {
          id: 2,
          name: "Emplazamiento 2",
          type: 1,
          pos: { lat: 0.9540927518215625, long: -77.8861141204834 },
          icon: <MapPinIcon className="w-full h-auto" />,
          color: "green",
        },
      ]);
      // Estaciones
      setES([
        {
          id: 1,
          name: "Estación 1",
          type: 2,
          emplazamiento: 1,
          icon: <HomeIcon className="w-full h-auto" />,
        },
        {
          id: 2,
          name: "Estación 2",
          type: 2,
          emplazamiento: 1,
          icon: <HomeIcon className="w-full h-auto" />,
        }
      ])
      // Sensores
      setS([
        {
          id: 1,
          name: "Sensor 1",
          type: 3,
          emplazamiento: 1,
          estacion: 1
        },
        {
          id: 2,
          name: "Sensor 2",
          type: 3,
          emplazamiento: 1,
          estacion: 2
        }
      ])
      setLoading(false);
    }

    const adMap = document.querySelector(".maplibregl-control-container");

    if (adMap) {
      //adMap.remove();
    }
  }, [emplazamientos, estaciones, sensores]);
  return (
    <>
      <div className="w-full h-full">
        <Sidebar emplazamientos={emplazamientos} estaciones={estaciones} sensores={sensores} setE={setE} setES={setES} setS={setS} _selected={_selected} _setSelected={_setSelected} />
        <ListSearch volcanes={volcanes} />
        <Map _selected={_selected} _setSelected={_setSelected} />
      </div>
    </>
  );
}
