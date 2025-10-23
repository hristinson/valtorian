import styles from "./index.module.css";

export default function AboutPage() {
  return (
    <div>
      <div className={styles.blackBackground}>
        <div className={styles.black_backgroundContainer}>
          <div className={styles.main_text_white}>
            Why founders <br />
            <div className="text_blue">choose us?</div>
          </div>
          <div className={styles.abaut_text}>
            Because we refuse to waste your runway. We start at the kitchen
            table with your users, not in a pitch deck. We translate their words
            into a value proposition, cut your idea to the smallest useful
            thing, and build that cleanly
            <br />
            <br />
            Then we put it in front of real people and read the signals
            together. If the signals are weak, we adjust. If they’re strong,
            you’ve got an{" "}
            <span className="text_blue">
              {" "}
              MVP and a fundraising-ready packet
            </span>
          </div>
        </div>
      </div>
      <div className={styles.whiteBackground}>
        <div className={styles.backgroundContainer}>
          <div className={styles.main_text_black}>
            <div>_</div>
          </div>
          <div className={styles.outcome}></div>
        </div>
      </div>
    </div>
  );
}
