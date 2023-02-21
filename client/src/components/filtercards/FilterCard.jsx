import { Link } from 'react-router-dom';
import './FilterCard.css';

function FilterCard({ item }) {
  return (
    <Link className='routeLink' to={`/item/${item._id}`} >
      <div className="TodayGroceryDealsCards">
        <span className="cardBilderContainer">
          <img className="cardBilder" src={item.url} alt="Bild"></img>
        </span>
        <span className="name">
          {item.name.length >= 14 ? <p>{item.name.slice(0, 14) + '...'}</p> : <p>{item.name}</p>}
        </span>
        <span className="PriceRating">
          <p>{item.price}$</p>
          <p>⭐️{item.rating}</p>
        </span>
      </div>
    </Link>

  );
}

export default FilterCard;