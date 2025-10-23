import styles from "./styles/home.module.css";
import GradientButton from "./components/GradientButton";
import IconFace from "./components/ButtonIconFace";
import StarBlock from "./components/StarBlock";
import HeadPhonesIcon from "./components/HeadPhonesIcon";
import CaseIcon from "./components/CaseIcon";
import Image from "next/image";
import LevelsIcon from "./components/LevelsIcon";
import FigmaIcon from "./components/Figmacon";
import TagsIcon from "./components/TagsIcon ";
import CheckIcon from "./components/CheckIcon ";
import ForkIcon from "./components/ForkIcon ";

const HomePage = () => {
  return (
    <div>
      <div className={styles.blackBackground}>
        <div className={styles.blackBackground_container}>
          <div className={styles.blackBackground_left}>
            <StarBlock />
            <div className={styles.main_text}>Turn expert ideas into</div>
            <div className={styles.main_text}>products people pay</div>
            <div className={styles.main_text}>
              for — we{" "}
              <span className="text_blue" style={{ marginLeft: "10px" }}>
                validate first
              </span>
            </div>
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
            <Image
              src={"/images/main.png"}
              alt="Example image with badge"
              width={800}
              height={460}
            />
          </div>
        </div>
      </div>
      <div className={styles.whiteBackground}>
        <div className={styles.container}>
          <div className={styles.left_container}>
            <div className={styles.left_wrapper}>
              <Image
                src={"/images/fig_03.png"}
                alt="Example image with badge"
                width={800}
                height={460}
              />
              <div
                style={{
                  width: "314px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "8px",
                }}
              >
                <span className="text_regular">
                  Market Potential Snapshot — TAM / SAM / SOM + CAGR
                </span>
                <span className="text_small">
                  Essential figures on market scale and growth.
                </span>
                <GradientButton
                  text="Get Market Snapshot"
                  noIcons={true}
                  costumStyles={{ width: "290px" }}
                />
              </div>
            </div>
          </div>
          <div className={styles.right_container}>
            <div className={styles.right_wrapper}>
              <p>The problem </p>
              <p>and its solution</p>
              Most products start in slide decks. <HeadPhonesIcon /> Most
              budgets disappear there too.
              <CaseIcon /> We’ve watched smart experts build for months before
              anyone tried to pay.{" "}
              <span className="text_blue_linethrough">
                We’re not okay with that.
              </span>{" "}
              <Image
                src={"/images/fig_01.png"}
                alt="The problem and its solution"
                width={800}
                height={460}
                className={styles.image}
              />
              For almost four years we shipped builds for early founders. The
              lesson was blunt:{" "}
              <span className="text_blue">don’t code before value.</span> So we
              moved from a dev shop to a zero-to-market studio. <LevelsIcon />{" "}
              Same skills research, design, development but now we insist on
              validation. <FigmaIcon />
              <TagsIcon />
              <CheckIcon />
              <Image
                src={"/images/fig_02.png"}
                alt="Example image with badge"
                width={800}
                height={460}
                className={styles.image}
              />
              We use <span className="text_blue">AI only</span> where it
              actually speeds things up. <ForkIcon />
              The same operator mindset powers our own product,{" "}
              <span className="text_blue">PlanEat AI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
