import { useContext } from "react";

import { ShopContext } from "../../store/shop-context.jsx";
import noResults from "../../assets/ui-images/no-results.svg";
import "./Items.css";

const Items = () => {
  const { baseItems, addItemToCart } = useContext(ShopContext);

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
            <button onClick={() => addItemToCart(toy.id)}>Kosárba</button>
          </div>
        ))
      ) : (
        <div>
          <img src={noResults} />
          <h1>Hoppá!</h1>
          <strong>Úgy tűnik nincs ilyen játék az adatbázisunkban</strong>
        </div>
      )}
    </div>
  );
};

export default Items;
