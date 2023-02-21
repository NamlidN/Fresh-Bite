
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
//import {Quantity} from "../ProductDetail/ProductDetail"
import "./Cart.css";
const Cart = () => {
  const location = useLocation();
  console.log(location);
  let shortCart = location.state;
  const [Quantity, setQuantity] = useState(3);
  const [Quantity2, setQuantity2] = useState(4)
  const [price2, setPrice2] = useState(1.29)

  console.log(shortCart);
  const [data, setData] = useState([]);
  let randomSelection = [];
  useEffect(() => {
    fetch("https://freshbite-server.up.railway.app/api/v1/products")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  if (data.length === 0) {
    return;
  } else {
    console.log(data.length);
    console.log(data);
    randomSelection = data.slice(10, 11);
    function DeleteHandler(){
let OpacityBums = document.getElementById("ChangeMe")
let OpacityBums2 = document.getElementById("ChangeMee")
let OpacityBums3 = document.getElementById("M")
OpacityBums.classList.add("change")
OpacityBums2.classList.add("change")
OpacityBums3.classList.add("change")
    }
    return (
      <div className="Cartbody">
        <span className="obenC">
          <Link to="/Home" className="routeLink back">
            <h1 className="pfeil">🏚️</h1>    </Link>
          <h1 className="" > My Cart</h1>
          <button className="DeleteAll" onClick={DeleteHandler} >Delete All</button></span>
        {randomSelection.map((shortCartMap) => {
          return (
            <div className="card" id="ChangeMe">
              <input className="radio" type="radio" ></input>
              <span className="innerCard">
                <img src={shortCartMap.url} alt={shortCartMap.name}></img>
                <span className="detailsCart">
                  <h5 className="cartName">{shortCartMap.name}</h5>
                  <span className="UnitUratingCart">
                    <p>{"1 " + shortCartMap.unit.toUpperCase() + "     ⭐️"}</p>
                    <p>  {shortCartMap.rating}</p>
                  </span>
                  <p> ${shortCartMap.price}
                  </p>
                </span>
                <span className="Rechner2">
                  <button onClick={() => {
                    setQuantity2(Quantity2 > 1 ? Quantity2 - 1 : 1);
                  }}>-</button>
                  <span>
                    <p className="mittelTeil" >{Quantity2}</p>
                  </span>
                  <button onClick={() => {
                    setQuantity2(Quantity2 + 1);
                  }} >+
                  </button>
                </span>
              </span>
            </div>
          );
        })}
        <div className="card" id="ChangeMee">
          <input className="radio" type="radio" ></input>
          <span className="innerCard">
            <img src={shortCart.url} alt={shortCart.name}></img>
            <span className="detailsCart">
              <h5 className="cartName">{shortCart.name}</h5>
              <span className="UnitUratingCart">
                <p>{"1 " + shortCart.unit.toUpperCase() + "     ⭐️"}</p>
                <p>  {shortCart.rating}</p>
              </span>
              <p> ${shortCart.price}</p>
            </span>
            <span className="Rechner2">
              <button onClick={() => {
                setQuantity(Quantity > 1 ? Quantity - 1 : 1);
              }}>-</button>
              <span>
                <p className="mittelTeil" >{Quantity}</p>
              </span>
              <button onClick={() => {
                setQuantity(Quantity + 1);
              }} >+
              </button>
            </span>
          </span>
        </div>
        <span className="CheckoutContainer">
        <button className="checkout" id="M" > Checkout { (Quantity  * shortCart.price + Quantity2 * price2).toFixed(2)   +"€"}</button></span>
      </div>
    );
  }
};
export default Cart;
