import styles from "./index.module.css";
import PeopleIcon from "../components/PeopleIcon";
import HandStarIcon from "../components/HandStarIcon";
import LampIcon from "../components/LampIcon";
import BlackCheckboxIcon from "../components/BlackCheckboxIcon";
import PenIcon from "../components/PenIcon";
import GradientButton from "../components/GradientButton";
import IconFace from "../components/ButtonIconFace";
import Image from "next/image";

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
            <div className={styles.abaut_text_gradient}>
              {" "}
              Because we refuse to waste your runway. We start at the kitchen
              table with your users, not in a pitch deck.
              <PeopleIcon />
              We translate their words into a{" "}
              <span className={styles.white_mark}>value proposition</span>, cut
              your idea to the{" "}
              <span className={styles.white_mark}>smallest useful thing</span>,
              and build that cleanly. <HandStarIcon />
              <LampIcon />
              <BlackCheckboxIcon />
            </div>
            Then we put it in front of real people and read the signals
            together. If the signals are weak, we adjust. <PenIcon />
            If they’re strong, you’ve got an{" "}
            <span className="text_blue">
              {" "}
              MVP and a fundraising-ready packet
            </span>
          </div>
        </div>
      </div>
      <div className={styles.whiteBackground}>
        <div className={styles.backgroundContainer}>
          <div className={styles.whiteBackgroundContainer}>
            <div className={styles.main_text_black}>
              Market Potential
              <br />
              <span className="text_blue">Snapshot — TAM /</span>
              <br />
              <span className="text_blue">SAM / SOM + CAGR</span>
            </div>
            <div className={styles.gray_mark}>
              We estimate market size and an initial acquisition <br />
              efficiency metric, then tell you if it’s worth <br />
              validating now, or what to change.
            </div>
          </div>
          <div className={styles.outcome}>
            <div className={styles.market_size_text}>
              You get: a 2-page PDF <br />
              (assumptions, numbers, sources,
              <br /> CAGR, risks, next steps)
            </div>
          </div>
          <div className={styles.downContainer}>
            <div className={styles.leftContainer}>
              <div className={styles.main_text_black}>
                Meet with a <br />
                specialist
              </div>
              <div className={styles.gray_mark}>
                We estimate market size and an initial acquisition <br />
                efficiency metric, then tell you if it’s worth <br />
                validating now, or what to change.
              </div>
              <GradientButton
                icon={<IconFace />}
                text={"Schedule time"}
                costumStyles={{
                  height: "56px",
                  width: "243px",
                  marginTop: "48px",
                  marginBottom: "24px",
                }}
              />
              Or write to us at{" "}
              <a href="email: di@valtorian.com">di@valtorian.com</a>
            </div>
            <div>
              <div className={styles.grid_container}>
                <div className={styles.grid_item}>
                  <Image
                    src={"/images/abaut/face_01.png"}
                    alt=";-)"
                    width={280}
                    height={240}
                  />
                </div>
                <div className={styles.grid_item}>
                  <Image
                    src={"/images/abaut/face_02.png"}
                    alt=";-)"
                    width={280}
                    height={240}
                  />
                </div>
                <div className={styles.grid_item}>
                  <Image
                    src={"/images/abaut/face_03.png"}
                    alt=";-)"
                    width={280}
                    height={240}
                  />
                </div>
                <div className={styles.grid_item}>
                  <Image
                    src={"/images/abaut/face_04.png"}
                    alt=";-)"
                    width={280}
                    height={240}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
