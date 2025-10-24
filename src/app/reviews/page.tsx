import styles from "./index.module.css";

export default function Reviews() {
  return (
    <h1 className="text-2xl font-bold">
      <div className={styles.blackBackground}>
        <div className={styles.container}>
          Unfortunately, I didn't have time to finish this page either, <br />
          please take a look, maybe the blog is working?
        </div>
      </div>
    </h1>
  );
}
