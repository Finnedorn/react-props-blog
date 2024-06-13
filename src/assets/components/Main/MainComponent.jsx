import CardComponent from "../Card/CardComponent";
import mainStyle from "./Main.module.css";

const MainComponent = () => {
  return (
    <main className={mainStyle.mainWrapper}>
      <h1 style={{
        textAlign: "center",
        padding: "30px 0px",
        fontSize: "2.5rem"
      }}>
        Il mio Blog
      </h1>
      <div className={mainStyle.cardWrapper}>
        <CardComponent/>
      </div>
    </main>
  );
};

export default MainComponent;