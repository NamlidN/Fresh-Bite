import star from "../../assets/star.svg";
import { FcLike } from "react-icons/fc";
import "./WishCard.css";
import { IconContext } from "react-icons/lib";

const WishCard = ({ product, handleRemoveItem }) => {
  return (
    <div className="wish-card-container">
      <div className="wish-card-img-container">
        <img src={product.url} alt={product.name} className="wishImg" />
      </div>
      <div className="wish-card-product-container">
        <div>
          <img src={star} alt="star icon" />
          <span className="wishlist-rating-review">
            {product.rating} ({product.numReviews + " Bewertungen"})
          </span>
        </div>
        <h2>{product.name}</h2>

        <span>
          {product.packUnit + " "}
          {product.unit}
        </span>
      </div>
      <div
        onClick={() => handleRemoveItem(product._id)}
        className="wishlist-like-btn-container"
      >
        <IconContext.Provider value={{ className: "wishlist-like-btn" }}>
          <FcLike />
        </IconContext.Provider>
        <h4 className="wishlist-price-tag">{product.price}€</h4>
      </div>
    </div>
  );
};
export default WishCard;
