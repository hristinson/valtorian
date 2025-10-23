import styles from "./index.module.css";
import RightArrowIcon from "../RightArrowcon";
import StarBlock from "../StarBlock";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.up_wrapper}>
          <div className={styles.main_text}>Let`s bring your </div>
          <div className={styles.main_text}>
            <span className="text_blue">
              ideas to life <RightArrowIcon />
            </span>
          </div>
        </div>
        <div className={styles.down_wrapper}>
          <div className={styles.container}>
            <p className={styles.text}>
              <span>Company</span>
              Home
              <br />
              Portfolio
              <br />
              Reviews
              <br />
              About
            </p>
          </div>
          <div className={styles.container}>
            <p className={styles.text}>
              <span>Social</span>
              <span className={styles.underline}>LinkedIn</span>
              <br />
              <span className={styles.underline}>Instagram</span>
              <br />
              <span className={styles.underline}>Facebook</span>
              <br />
              <span className={styles.underline}>Dribbble</span>
              <br />
              <span className={styles.underline}>Behance</span>
            </p>
          </div>
          <div className={styles.container}>
            <p className={styles.text}>
              <span>Contacts</span>
              <span className={styles.underline}>WhatsApp</span>
              <br />
              <span className={styles.underline}>Telegram</span>
              <br />
              <span className={styles.underline}>
                <a href="email: info@valtorian.com">info@valtorian.com</a>
              </span>
            </p>
          </div>
          <div className={styles.container}>
            <StarBlock />
          </div>
        </div>
        <div className={styles.underline_wrapper}>
          <span>@ Valtorian 2025. All rights reserved.</span>
          <span>Privacy Policy </span>
        </div>
      </div>
    </footer>
  );
}
