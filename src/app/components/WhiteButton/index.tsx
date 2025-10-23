import styles from "./index.module.css";

interface WhiteButtonProps {
  text?: string;
  costumStyles?: React.CSSProperties;
}

const WhiteButton: React.FC<WhiteButtonProps> = ({ text, costumStyles }) => {
  return (
    <button className={styles.button} style={costumStyles}>
      <div className={styles.text}>{text}</div>
    </button>
  );
};

export default WhiteButton;
