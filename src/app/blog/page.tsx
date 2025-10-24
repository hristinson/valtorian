import styles from "./index.module.css";

export default function Blog() {
  return (
    <h1 className="text-2xl font-bold">
      <div className={styles.blackBackground}>
        <div className={styles.container}>
          I probably didn't find or understand how to make this page. But I
          think
          <br />
          that if we continue to communicate, you will explain to me how to do
          it,
          <br />
          thank you!
        </div>
      </div>
    </h1>
  );
}
