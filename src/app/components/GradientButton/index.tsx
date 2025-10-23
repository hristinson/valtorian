import { ReactElement } from "react";
import styles from "./index.module.css";
import GreenDot from "../GreenDot";

interface GradientButtonProps {
  text?: string;
  href?: string;
  onClick?: () => void;
  icon?: ReactElement;
  costumStyles?: React.CSSProperties;
  noIcons?: boolean;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  text,
  onClick,
  icon,
  costumStyles,
  noIcons,
}) => {
  return (
    <button className={styles.button} onClick={onClick} style={costumStyles}>
      {noIcons ? <></> : !icon ? <GreenDot /> : icon}
      <div className={styles.text}>
        <span>{text}</span>
        <span className={styles.icon}>
          {noIcons ? (
            <></>
          ) : (
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.72357 0.749998H9.67853V8.70495M9.1261 1.30242L1.06066 9.36786"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="square"
              />
            </svg>
          )}
        </span>
      </div>
    </button>
  );
};

export default GradientButton;
