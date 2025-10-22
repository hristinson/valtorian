import Image from "next/image";
import styles from "./index.module.css";

const IconFace = () => {
  return (
    <div className={styles.container}>
      <div className={styles.badge}></div>
      <Image
        src={"/images/iconFace.png"}
        alt="Example image with badge"
        width={40}
        height={40}
        className={styles.image}
      />
    </div>
  );
};

export default IconFace;
