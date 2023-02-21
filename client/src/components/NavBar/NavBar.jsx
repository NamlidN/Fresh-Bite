import "./NavBar.css";
import { Link } from "react-router-dom";
import homeClicked from "../../assets/NavBar/home-clicked.svg";
import homeUnclicked from "../../assets/NavBar/home-unclicked.svg";
import ordersClicked from "../../assets/NavBar/orders-clicked.svg";
import ordersUnclicked from "../../assets/NavBar/orders-unclicked.svg";
import wishlistClicked from "../../assets/NavBar/wishlist-clicked.svg";
import wishlistUnclicked from "../../assets/NavBar/wishlist-unclicked.svg";
import profileClicked from "../../assets/NavBar/profile-clicked.svg";
import profileUnclicked from "../../assets/NavBar/profile-unclicked.svg";
import cart from "../../assets/NavBar/cart.svg";

export const NavBar = ({ page }) => {
  return (
    <div className="navbar">
      <Link to="/home">
        <img
          className="navLinkToHome"
          alt="home button"
          src={page !== "Home" ? homeUnclicked : homeClicked}
        />
      </Link>
      <Link to="/order-history">
        <img
          className="navLinkToOrders"
          alt="orders button"
          src={page !== "order-history" ? ordersUnclicked : ordersClicked}
        />
      </Link>
      {/* WARENKORB */}
      <Link to="/cart">
        <img className="navLinkToCart" alt="cart button" src={cart} />
      </Link>
      {/* WARENKORB */}
      <Link to="/wishlist">
        <img
          className="navLinkToWishlist"
          alt="wishlist button"
          src={page !== "wishlist" ? wishlistUnclicked : wishlistClicked}
        />
      </Link>
      <Link to="/profile">
        <img
          className="navLinkToProfile"
          alt="profile button"
          src={page !== "profile" ? profileUnclicked : profileClicked}
        />
      </Link>
    </div>
  );
};
