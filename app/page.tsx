import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src="https://api.dicebear.com/6.x/bottts/png"
        width="300"
        height="300"
        alt={""}
      />
    </main>
  );
}
