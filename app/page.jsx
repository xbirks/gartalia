import Image from "next/image";
import styles from "./page.module.css";
import Intro from "./components/cabecera/intro";
import GridMaster from "./components/grid/gridMaster";
import Empresas from "./components/empresas/empresas";
import Location from "./components/location/location";

 

export default function HomePage() {
  return (
    <div className="master">
      <Intro></Intro>
      <GridMaster></GridMaster>
      <Empresas></Empresas>
      <Location></Location>
    </div>
  );
}
