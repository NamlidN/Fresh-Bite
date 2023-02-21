import { Link } from "react-router-dom";
import "./OrderHistory.css"
const OrderHistory = () => {
  const history = [
    { number: "EW878965", price: "69€", date: "25 May, 11:00am", status: "Pending", status2: "Paid" },
    { number: "SD458963", price: "235€", date: "14 February, 01:20pm", status: "Processing", status2: "Paid" },
    { number: "WS589632", price: "236€", date: "25 May, 00:00am", status: "Canceled", status2: "Refunded" },
    { number: "QW458963", price: "268€", date: "22 May, 5:00pm", status: "Picked", status2: "Paid" },
    { number: "EW878965", price: "420€", date: "20 April, 4:20am", status: "Canceled", status2: "Refunded" },
    { number: "DH878983", price: "60€", date: "15 May, 8:00am", status: "Shipped", status2: "Refunded" }
  ];
  return (
    <div className="OrderPage">
    <span className="obenC">
      <Link to="/Home" className="routeLink back">
        <h1 className="pfeil">🔙</h1>    </Link>
      <h1 className="" >Order History</h1></span>
      {history.map((orders, i)=>{
   return   <div className="OrderContainer" key={i}>
    <span className="OrderNumberAndPrice">
      <h1 className="OrderNumber">{orders.number}</h1>
      <h3 className="OrderPrice">{orders.price}</h3>
    </span>
    <span className="DateAndStatusContainer">
      <span className="St1And2">
        <p className={orders.status}>{orders.status}</p>
        <p className={orders.status2}>{orders.status2}</p>
      </span>
      <p className="OrderDate">{orders.date}</p>
    </span>
   </div>
      })}
      </div>
  );
};
export default OrderHistory;
