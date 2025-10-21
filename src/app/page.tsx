// export default function HomePage() {
//   return <h1 className="text-2xl font-bold">Це головна сторінка</h1>;
// }

import styles from "./styles/home.module.css";
// import Header from "@/components/header";

const HomePage = () => {
  return (
    <div>
      {/* <Header /> */}
      <div className={styles.blackBackground}>
        <h1>test</h1>
      </div>
      <div className={styles.whiteBackground}>
        <h1>test</h1>
      </div>
    </div>
  );
};

export default HomePage;
