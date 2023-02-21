import express from "express";
const router = express.Router();

import {
  getAllProducts,
  addProduct,
  getOneProduct,
  toggleFavorite,
  filterWishlist,
  clearWishlist,
  deleteItemFromWishlist,
} from "../controller/productController.js";

router.route("/").get(getAllProducts).post(addProduct);
router.route("/item/:id").get(getOneProduct);

// Favorite
router.route("/item/:id/fav").post(toggleFavorite);

// Wishlist
router.route("/wishlist").get(filterWishlist);

// Clear Wishlist
router.route("/wishlist/clear").put(clearWishlist);

// Delete Item from Wishlist
router.route("/wishlist/:id").put(deleteItemFromWishlist);

export default router;
