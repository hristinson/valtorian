import styles from "../styles/home.module.css";

const HomePage = () => {
  return (
    <div>
      <div className={styles.blackBackground}>
        <h1 className={styles.text}>test</h1>
      </div>
      <div className={styles.whiteBackground}>
        <h1 className={styles.whiteText}>test</h1>
      </div>
    </div>
  );
};

export default HomePage;
