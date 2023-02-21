import { Link, useLocation } from "react-router-dom";
import FilterCard from "../filtercards/FilterCard";
import Nomatch from "./Nomatch";
import FetchError from "./FetchError";

import "./filtered.css";
import GoBackButton from "../GoBack/GoBackButton";

const Filtered = () => {
  const location = useLocation();
  console.log(location.state);

  return (
    <main>
  <span className="obenC">

        <h1 className="GDeals" ><GoBackButton /> </h1>
        <Link to="/Home" className="routeLink back">
        </Link></span>
        
      {location.state.length === 0 && <Nomatch />}
      {!location.state && <FetchError />}
      {location.state && (
        <div className="filtered-container">
          {location.state.map((item, index) => {
            return (
              <Link
                className="TodayGroceryDealsCards "
                to={`/item/${item._id}`}
              >
                <div key={index}>
                  <FilterCard item={item} />
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </main>
  );
};

export default Filtered;
