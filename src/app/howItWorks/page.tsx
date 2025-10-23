import styles from "./index.module.css";
import CustomerInterviewIcon from "./icons/customerInterview";
import CVPCanvasIcon from "./icons/cvpCanvas";
import FeaturePrioritizationIcon from "./icons/featurePrioritization";
import DesignDevelopmentIcon from "./icons/designDevelopment";
import FirstTractionIcon from "./icons/firstTraction";
import UnitEconomicsIcon from "./icons/unitEconomics";
import Image from "next/image";
import GradientButton from "../components/GradientButton";
import IconFace from "../components/ButtonIconFace";
import WhiteButton from "../components/WhiteButton";

export default function HowItWorks() {
  return (
    <div>
      <div className={styles.blackBackground}>
        <div className={styles.backgroundContainer}>
          <div className={styles.main_text_white}>How it works</div>
          <div className={styles.grid_container}>
            <div className={styles.grid_item}>
              <CustomerInterviewIcon />
              <div>Customer interview</div>
              <p>We speak with real users (10–15), map jobs/</p>
              <p>pains/gains, test willingness to pay.</p>
            </div>
            <div className={styles.grid_item}>
              <CVPCanvasIcon />
              <div>CVP Canvas</div>
              <p>We turn insights into a simple value </p>
              <p>proposition your users can understand.</p>
            </div>
            <div className={styles.grid_item}>
              <FeaturePrioritizationIcon />
              <div>Feature prioritization</div>
              <p>From interviews we extract and sort features </p>
              <p>(Must / Should / Nice), define the smallest </p>
              <p>useful MVP.</p>
            </div>
            <div className={styles.grid_item}>
              <DesignDevelopmentIcon />
              <div>
                Design & Development <br />
                (MVP)
              </div>
              <p>Web / iOS / Android; analytics included;</p>
              <p>sensible docs and handover.</p>
            </div>
            <div className={styles.grid_item}>
              <FirstTractionIcon />
              <div>
                First traction(right-sized
                <br /> marketing)
              </div>
              <li>B2B: LinkedIn</li>
              <li>B2C: ASO + micro-influencers</li>
            </div>
            <div className={styles.grid_item}>
              <UnitEconomicsIcon />
              <div>
                Unit economics & <br />
                fundraising pack
              </div>
              <p>Lean model, early unit-econ sanity, data room</p>
              <p>structure, deck support and selective intros.</p>
            </div>
          </div>
          <div className={styles.outcome}>
            <p>Outcome: </p> a product and a packet that are fundraising-ready.
          </div>
        </div>
      </div>
      <div className={styles.whiteBackground}>
        <div className={styles.backgroundContainer}>
          <div className={styles.main_text_black}>
            <div>
              More builds{" "}
              <p>
                We`ve <span className="text_blue">delivered 70+ </span>builds
                across healthcare, finance, industrial, education{" "}
              </p>
              <p>
                and marketplaces. We only show what we actually did design,
                development,{" "}
              </p>
              <p>integrations no inflated claims.</p>
            </div>
            <div>
              <GradientButton
                icon={<IconFace />}
                text={"Build My MVP"}
                costumStyles={{
                  height: "56px",
                  width: "243px",
                }}
              />
            </div>
          </div>
          <div className={styles.grid_container}>
            <div className={styles.grid_more_item}>
              <Image
                src={"/images/howItWorks/fig_01.png"}
                alt="AI-Powered UGC Creator Search"
                width={386}
                height={320}
                style={{ marginBottom: "12px" }}
              />
              AI-Powered UGC Creator Search |<br /> Germany
              <div className={styles.inner_buttons}>
                <WhiteButton
                  text={"Pola"}
                  costumStyles={{ marginTop: "12px" }}
                />
                <WhiteButton
                  text={"Web app"}
                  costumStyles={{ marginTop: "12px" }}
                />
              </div>
            </div>
            <div className={styles.grid_more_item}>
              <Image
                src={"/images/howItWorks/fig_02.png"}
                alt="Marketplace for Nurse Recruitment"
                width={386}
                height={320}
                style={{ marginBottom: "12px" }}
              />
              Marketplace for Nurse Recruitment | <br />
              Saudi Arabia
              <div className={styles.inner_buttons}>
                <WhiteButton
                  text={"NurseHub"}
                  costumStyles={{ marginTop: "12px" }}
                />
                <WhiteButton
                  text={"Web app"}
                  costumStyles={{ marginTop: "12px" }}
                />
              </div>
            </div>
            <div className={styles.grid_more_item}>
              <Image
                src={"/images/howItWorks/fig_03.png"}
                alt="Course & E-Book Marketplace | Spain"
                width={386}
                height={320}
                style={{ marginBottom: "12px" }}
              />
              Course & E-Book Marketplace | Spain
              <div className={styles.inner_buttons}>
                <WhiteButton
                  text={"AdemyPro"}
                  costumStyles={{ marginTop: "12px" }}
                />
                <WhiteButton
                  text={"Web app"}
                  costumStyles={{ marginTop: "12px" }}
                />
              </div>
            </div>
            <div className={styles.grid_more_item}>
              <Image
                src={"/images/howItWorks/fig_04.png"}
                alt="AI-Powered Quiz Learning App | France"
                width={386}
                height={320}
                style={{ marginBottom: "12px" }}
              />
              AI-Powered Quiz Learning App | France
              <div className={styles.inner_buttons}>
                <WhiteButton
                  text={"Mila"}
                  costumStyles={{ marginTop: "12px" }}
                />
                <WhiteButton
                  text={"Mobile app "}
                  costumStyles={{ marginTop: "12px" }}
                />
              </div>
            </div>
            <div className={styles.grid_more_item}>
              <Image
                src={"/images/howItWorks/fig_05.png"}
                alt="Cleaning Service Website | Czech Republic"
                width={386}
                height={320}
                style={{ marginBottom: "12px" }}
              />
              Cleaning Service Website | Czech <br />
              Republic
              <div className={styles.inner_buttons}>
                <WhiteButton
                  text={"Uklid"}
                  costumStyles={{ marginTop: "12px" }}
                />
                <WhiteButton
                  text={"Web platform"}
                  costumStyles={{ marginTop: "12px" }}
                />
              </div>
            </div>
            <div className={styles.grid_more_item}>
              <Image
                src={"/images/howItWorks/fig_06.png"}
                alt="Bankruptcy Assistance App & Viber Bot Ukraine"
                width={386}
                height={320}
                style={{ marginBottom: "12px" }}
              />
              Bankruptcy Assistance App & Viber Bot
              <br /> | Ukraine
              <div className={styles.inner_buttons}>
                <WhiteButton
                  text={"Zvilnymo"}
                  costumStyles={{ marginTop: "12px" }}
                />
                <WhiteButton
                  text={"Mobile app"}
                  costumStyles={{ marginTop: "12px" }}
                />
              </div>
            </div>
          </div>
          <div className={styles.outcome}></div>
        </div>
      </div>
    </div>
  );
}
