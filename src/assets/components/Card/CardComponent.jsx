import cardStyle from "../Card/Card.module.css";
import img from "../../img/pokemon_day.jpg";

const CardComponent = () => {
  return (
    <div className={cardStyle.card}>
        <div className={cardStyle.cardImg}>
            <img src={img} alt="img-post" />
        </div>
        <div className={cardStyle.cardBody}>
            <h2 className={cardStyle.cardTitle}>
                Titolo del Post
            </h2>
            <p style={{
                fontSize: "1.3rem",
                padding: "10px 0px"
            }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quam? Laborum odit, dicta repellat maiores amet reiciendis in hic tenetur corrupti vitae. Quis provident temporibus optio nostrum earum praesentium soluta.
            </p>
            <div>
                <a href="#" className={cardStyle.cardBtn}>
                    Leggi di più
                </a>
            </div>
        </div>
    </div>
  );
};

export default CardComponent;