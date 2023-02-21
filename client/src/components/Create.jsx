import { useRef } from "react";

const Create = () => {
  const nameRef = useRef();
  const catRef = useRef();
  const fileRef = useRef();
  const priceRef = useRef();
  const descRef = useRef();
  const originRef = useRef();
  const packUnitRef = useRef();
  const ratingRef = useRef();
  const unitRef = useRef();
  const favRef = useRef();
  const saleRef = useRef();
  const reviewRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const file = fileRef.current.files[0];

    const fileForm = new FormData();
    fileForm.append("file", file);
    fileForm.append("upload_preset", "gxvi0yf0");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dxiwysn1u/image/upload",
      {
        method: "POST",
        body: fileForm,
      }
    );

    const data = await response.json();
    console.log(data);

    const item = {
      name: nameRef.current.value,
      category: catRef.current.value,
      price: priceRef.current.value,
      description: descRef.current.value,
      origin: originRef.current.value,
      packUnit: packUnitRef.current.value,
      rating: ratingRef.current.value,
      url: data.secure_url,
      unit: unitRef.current.value,
      isFav: favRef.current.value,
      sale: saleRef.current.value,
      numReviews: reviewRef.current.value,
    };

    console.log(item);
    const url = "http://localhost:9999/api/v1/products";
    const railwayUrl =
      "https://freshbite-server.up.railway.app/api/v1/products";

    try {
      const backendResponse = await fetch(railwayUrl, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(item),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="create">
      <h2 className="page-title">Add a new Prodcut</h2>
      <form className="form">
        <label>
          <span>Name</span>
          <input type="text" name="title" required ref={nameRef} />
        </label>
        <label>
          <span>Price</span>
          <input name="price" type="number" required ref={priceRef} />
        </label>
        <label>
          <span>Origin</span>
          <input name="origin" type="text" required ref={originRef} />
        </label>
        <label>
          <span>Verpackungseinheit</span>
          <input name="packUnit" type="number" required ref={packUnitRef} />
        </label>
        <label>
          <span>Rating</span>
          <input name="rating" type="number" required ref={ratingRef} />
        </label>
        <label>
          <span>Review Number</span>
          <input name="rating" type="number" required ref={reviewRef} />
        </label>
        <label>
          <span>Unit</span>
          <select name="unit" ref={unitRef}>
            <option name="unit" value="kg">
              kg
            </option>
            <option name="unit" value="stück">
              piece
            </option>
            <option name="unit" value="g">
              gramm
            </option>
          </select>
        </label>
        <label>
          <span>Favorite</span>
          <select name="unit" ref={favRef}>
            <option name="unit" value="false">
              false
            </option>
            <option name="unit" value="true">
              true
            </option>
          </select>
        </label>
        <label>
          <span>Angebot (Sale)</span>
          <select name="unit" ref={saleRef}>
            <option name="unit" value="false">
              false
            </option>
            <option name="unit" value="true">
              true
            </option>
          </select>
        </label>
        <label></label>
        <label>
          <span>Category</span>
          <select name="category" ref={catRef}>
            <option name="category" value="obst">
              Obst
            </option>
            <option name="category" value="gemuese">
              Gemuese
            </option>
            <option name="category" value="fleisch">
              Fleisch
            </option>
            <option name="category" value="fisch">
              Fisch
            </option>
            <option name="category" value="veggie">
              Veggie
            </option>
            <option name="category" value="tiefkuehl">
              Tiefkuehl
            </option>
            <option name="category" value="getraenke">
              Getraenke
            </option>
            <option name="category" value="eier&milch">
              Eier & Milch
            </option>
            <option name="category" value="feinkost">
              Feinkost
            </option>
          </select>
        </label>
        <br />
        <br />
        <span>Picture</span>
        <br />
        <br />
        <input type="file" name="image" ref={fileRef} />
        <label>
          <span>Description</span>
          <textarea name="text" required ref={descRef} />
        </label>
        <button className="btn" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
};

export default Create;
