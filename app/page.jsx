import Image from "next/image";
import styles from "./page.module.css";
import Intro from "./components/cabecera/intro";
import GridMaster from "./components/grid/gridMaster";

 

export default function HomePage() {
  return (
    <div className="master">
      <Intro></Intro>
      <GridMaster></GridMaster>
    </div>
  );
}
