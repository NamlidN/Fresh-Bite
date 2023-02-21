import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from '../fetchData';
import FilterCard from '../filtercards/FilterCard';
import { BsFilterLeft } from 'react-icons/bs';

// styles
import './Filter.css';


const Filter = () => {
    const [products, setProducts] = useState([]);
    // const [cat, setCat] = useState("");
    useEffect(() => {
        const fetchProducts = async () => {
            const products = await fetchData("https://freshbite-server.up.railway.app/api/v1/products");

            setProducts(products);
        };
        fetchProducts();

    }, []);
    
    console.log(products);

    //duplicate aus category entfernen
    const dupcat = [...new Map(products.map((p) => [p.category]))];
    const updatecat = [...new Map(dupcat.map((i) => i))];
    //console.log(updatecat);

    const [categoryFilter, setCategoryFilter] = useState('');
    const filteredProducts = products
        .filter((product) => {
            if (categoryFilter === '') {
                return true;
            }
            return product.category === categoryFilter;
        });
    const [search, setSearch] = useState('');
    return (
        <main>

            <div className='search-container' >
              <Link to={`/filterpage2`}  className="routeLink back" >  <span>
                    <BsFilterLeft className='filter-icon' />
                </span></Link>

                <input onChange={(e) => setSearch(e.target.value)} className='input' placeholder='🔎' style={{ textAlign: 'left' }}  ></input>
            </div>
            <div className='button-container' >
                <div>
                    <button className='filter-btn' onClick={e => { setCategoryFilter(e.target.value); }} >All</button>
                </div>
                <div className='btnContainer2'>
                    {
                        updatecat.map((item, index) => {
                            return (
                                <button className='filter-btn2' onClick={e => { setCategoryFilter(e.target.value); }} value={item[0]} key={index}>
                                    {item[0]}
                                </button>
                            );
                        })
                    }
                </div>
            </div>
            <div className='products-container' >
                {filteredProducts.filter((item) => {
                    return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search);
                }).map((item, index) => {
                    return (
                        <div key={index} >
                            <FilterCard item={item} />
                        </div>
                    );
                })}
            </div>
        </main >
    );
};

export default Filter;


