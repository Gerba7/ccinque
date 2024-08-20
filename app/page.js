import Image from "next/image";
import styles from "./page.module.css";
import Cover from "./ui/components/Home/Cover/Cover";
import MapRow from "./ui/components/Home/MapRow/MapRow";
import HowWeWork from "./ui/components/Home/HowWeWork/HowWeWork";
import WhoWeAre from "./ui/components/Home/WhoWeAre/WhoWeAre";
import Mission from "./ui/components/Home/Mission/Mission";
import Office from "./ui/components/Home/Office/Office";
import ContactRow from "./ui/components/Home/ContactRow/ContactRow";
import Services from "./ui/components/Home/Services/Services";
import Test from "./ui/components/Home/Test/Test";
import WhoWeAre2 from "./ui/components/Home/WhoWeAre2/WhoWeAre2";

export default function Home() {
  return (
    <main className={styles.main}>
      <Cover />
      <HowWeWork />
      <WhoWeAre2 />
      {/* <WhoWeAre /> */}
      <Services />
      <Mission />
      <Office />
      <ContactRow />
      <MapRow />
    </main>
  );
}
