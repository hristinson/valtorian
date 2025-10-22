import styles from "./styles/home.module.css";
import GradientButton from "./components/GradientButton";
import IconFace from "./components/ButtonIconFace";
import StarBlock from "./components/StarBlock";

const HomePage = () => {
  return (
    <div>
      <div className={styles.blackBackground}>
        <div className={styles.blackBackground_container}>
          <div className={styles.blackBackground_left}>
            <StarBlock />
            <div className={styles.main_text}>Turn expert ideas into</div>
            <div className={styles.main_text}>products people pay</div>
            <div className={styles.main_text}>for — we validate first</div>
            <div className={styles.small_text}>
              Don’t waste months coding what no one wants. We validate your
              idea, build fast, and arm you with traction & a fundraise-ready
              packet.
            </div>
            <GradientButton
              icon={<IconFace />}
              text={"Validate My Idea"}
              costumStyles={{ height: "56px", width: "243px" }}
            />
          </div>
          <div className={styles.image_container}>
            <img src="/images/main.png" />
          </div>
        </div>
      </div>
      <div className={styles.whiteBackground}>
        <h1>test</h1>
      </div>
    </div>
  );
};

export default HomePage;
