import styles from "./index.module.css";
import RightArrowIcon from "../RightArrowcon";
import StarBlock from "../StarBlock";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.up_wrapper}>
          <div className={styles.main_text}>Let's bring your </div>
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
              <p className={styles.underline}>LinkedIn</p>
              <p className={styles.underline}>Instagram</p>
              <p className={styles.underline}>Facebook</p>
              <p className={styles.underline}>Dribbble</p>
              <p className={styles.underline}>Behance</p>
            </p>
          </div>
          <div className={styles.container}>
            <p className={styles.text}>
              <span>Contacts</span>
              <p className={styles.underline}>WhatsApp</p>
              <p className={styles.underline}>Telegram</p>
              <p className={styles.underline}>
                <a href="email: info@valtorian.com">info@valtorian.com</a>
              </p>
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
