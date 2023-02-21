import Product from "../models/Product.js";

// GET - ALL
export const getAllProducts = async (req, res) => {
  try {
    // rufe alle Produkte aus der DB
    const allProducts = await Product.find();
    // Sende die Produkte als JSON an den Client zurück, mit dem HTTP-Statuscode 200 (OK).
    res.status(200).json(allProducts);

    if (!allProducts) {
      return res.status(404).json({ message: "Produkte nicht gefunden!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// POST - ADD
export const addProduct = async (req, res) => {
  // console.log(req.body);

  try {
    // erstelle ein neues Produkt mit den Daten aus dem Anfragekörper
    const newProduct = await Product.create(req.body);
    res.status(200).json(newProduct);

    if (!newProduct) {
      return res.status(404).json({ message: "Hinzufügen fehlgeschlagen!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// GET - ONE PRODUCT
export const getOneProduct = async (req, res) => {
  const params = req.params.id;
  // console.log(params);

  try {
    // Suche nach spezifischem Produkt anhand der Id
    const oneProduct = await Product.findById(params);
    res.status(200).json(oneProduct);

    if (!oneProduct) {
      return res.status(404).json({ message: "Produkt nicht gefunden" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// POST - TOGGLE FAVORITE(WISH)
export const toggleFavorite = async (req, res) => {
  try {
    const { id } = req.params;
    const good = await Product.findById(id);

    if (!good) {
      return res.status(404).json({ message: "Produkt nicht gefunden" });
    }

    // Ändern des Werts von "fav"
    good.isFav = !good.isFav;

    // Speichern des aktualisierten Produkts in der Datenbank
    await good.save();

    // Senden des aktualisierten Produkts als JSON-Antwort
    res.json(good);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET - FILTER WISHLIST
export const filterWishlist = async (req, res) => {
  try {
    // rufe alle Produkte aus der DB
    const filteredWishlist = await Product.find({ isFav: true });
    // Sende die Produkte als JSON an den Client zurück, mit dem HTTP-Statuscode 200 (OK).
    res.status(200).json(filteredWishlist);

    if (!filteredWishlist) {
      return res.status(404).json({ message: "Produkte nicht gefunden!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// PUT - CLEAR WISHLIST
export const clearWishlist = async (req, res) => {
  try {
    const result = await Product.updateMany({ isFav: true }, { isFav: false });
    res.json(result);
    // filterIsFav.isFav = false;
    // await filterIsFav.save();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// PUT - DELETE ITEM FROM WISHLIST
export const deleteItemFromWishlist = async (req, res) => {
  const id = req.params.id;
  const isFav = req.body.isFav;

  try {
    const result = await Product.updateOne({ _id: id }, { isFav });
    res.status(200).json(result);
  } catch (error) {}
};
