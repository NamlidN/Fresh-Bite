import { FcLike } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import "./ProductCard.css";

import { Link } from "react-router-dom";

const ProductCard = ({ datas }) => {
  const [isFavorite, setIsFavorite] = useState(datas.isFav);

  // Favorite(Wishlist)
  const toggleFavorite = async () => {
    try {
      const url = `https://freshbite-server.up.railway.app/api/v1/products/item/${datas._id}/fav`;
      const response = await fetch(url, {
        method: "POST",
      });
      const data = await response.json();
      setIsFavorite(data.isFav);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <span className="FAVSchmutz TodayGroceryDealsCards">
    <Link
       state={datas}
      to={`/item/${datas._id}`}
      className="TodayGroceryDealsCards "
    >
      <span className="cardBilderContainer">
        <img className="cardBilder" src={datas.url} alt="Bild"></img>
      </span>
      <span className="name">
        <p className="name2">{datas.name}</p>
      </span>
      <span className="PriceRating">
        <p className="PriceRating2" >{datas.price}€</p>
        <p className="PriceRating2" >⭐️{datas.rating}</p>
        
      </span>
    </Link>
    <div className="Fav" onClick={toggleFavorite}>
      {isFavorite ? <FcLike /> : <FaRegHeart />}
    </div>
  </span>

  );
};
export default ProductCard;
