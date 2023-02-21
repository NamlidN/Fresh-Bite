import GoBackButton from "../../components/GoBack/GoBackButton";
import WishCard from "../../components/WishCard/WishCard";
import "./Wishlist.css";
import trash from "../../assets/trash.svg";
import emptyWishlist from "../../assets/empty.svg";
import { useState, useEffect } from "react";

const Wishlist = () => {
  const [products, setProducts] = useState([]);

  // Get Wishlist
  useEffect(() => {
    const fetchWishlist = async () => {
      // const url = "http://localhost:9999/api/v1/products/wishlist";
      const railwayUrl =
        "https://freshbite-server.up.railway.app/api/v1/products/wishlist";
      try {
        const response = await fetch(railwayUrl);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWishlist();
  }, []);

  // Clear All
  const clearWishlist = async () => {
    const url =
      "https://freshbite-server.up.railway.app/api/v1/products/wishlist/clear";

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isFav: false }),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setProducts([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveItem = async (id) => {
    // const updatedWishlist = products.map((item) => {
    //   if (item._id === id) {
    //     item.isFav = false;
    //   }
    //   return item;
    // });
    // setProducts(updatedWishlist);

    const updatedWishlist = products.filter((item) => item._id !== id);
    setProducts(updatedWishlist);

    const url = `https://freshbite-server.up.railway.app/api/v1/products/${id}`;
    try {
      await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isFav: false }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="wishlist-main-container">
      <div className="top-header-container wish-top">
        <GoBackButton />
        <h2>Wunschzettel</h2>
        <div className="wishTrash" onClick={clearWishlist}>
          <img src={trash} alt="trashcan icon" className="trashIcon" />
        </div>
      </div>
      <div className="wishlist-wishcards-container">
        {products.length === 0 ? (
          <div className="empty-container">
            <img src={emptyWishlist} alt="empty wishlist" />
          </div>
        ) : (
          products.map((product) => {
            return (
              <WishCard
                key={product._id}
                product={product}
                handleRemoveItem={handleRemoveItem}
              />
            );
          })
        )}
      </div>
    </div>
  );
};
export default Wishlist;
