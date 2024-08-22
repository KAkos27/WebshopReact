import { useContext } from "react";

import { ShopContext } from "../../store/shop-context.jsx";
import noResult from "../../assets/ui-images/no-results.svg";
import "./Items.css";

const Items = () => {
  const { baseItems } = useContext(ShopContext);

  return (
    <div className="items">
      {baseItems.length ? (
        baseItems.map((toy) => (
          <div key={toy.id} className="card">
            <div className="card__image-container">
              <img src={toy.image.src} alt={toy.image.alt} />
            </div>
            <div className="card__info-container">
              <h2>{toy.title}</h2>
              <strong>{toy.description}</strong>
            </div>
            <button>Kosárba</button>
          </div>
        ))
      ) : (
        <div>
          <img src={noResult} />
          <h1>Hoppá!</h1>
          <strong>Úgy tűnik nincs ilyen játék az adatbázisunkban</strong>
        </div>
      )}
    </div>
  );
};

export default Items;
