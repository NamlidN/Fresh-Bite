import React, { useState, useEffect } from 'react';
import { fetchData } from '../fetchData';
import { Link, useNavigate } from 'react-router-dom';
//import MultiRangeSlider from "multi-range-slider-react";
import { MdArrowBackIos } from 'react-icons/md';

import './Slider.css';
import './FilterPage2.css';



const Filter = () => {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await fetchData("https://freshbite-server.up.railway.app/api/v1/products");

            setProducts(products);
        };
        fetchProducts();
    }, []);

    // duplikate entfernen
    const dupcat = [...new Map(products.map((p) => [p.category]))];
    const updatecat = [...new Map(dupcat.map((i) => i))];

    const [categoryFilter, setCategoryFilter] = useState('');
    const [priceFilter, setPriceFilter] = useState(2);
    const [riceFilter, setRiceFilter] = useState(15);
    const [sortOrder, setSortOrder] = useState('');

    const apply = (event, value) => {
        setCategoryFilter(event.target.value);
        setPriceFilter(value);
        setRiceFilter(value);
        setSortOrder(event.target.value);



        navigate(`/filtered`, { state: filteredProducts });
    };

    const filteredProducts = products
        .filter((product) => {
            if (categoryFilter === '') {
                return true;
            }
            return product.category === categoryFilter;
        })
        .filter((product) => {
            if (priceFilter === 0) {
                return true;
            }
            return product.price >= priceFilter && product.price <= riceFilter;
        })
        .sort((a, b) => {
            if (sortOrder === 'lowest') {
                return a.price - b.price;
            } else if (sortOrder === 'highest') {
                return b.price - a.price;
            } else if (sortOrder === 'best') {
                return b.rating - a.rating;
            }
        });

    const handleClear = () => {
        setCategoryFilter('');
        setSortOrder('');
        setRiceFilter(15);
        setPriceFilter(2);

    };



    return (
        <main>
          <span className="obenC">
        <Link to="/Home" className="routeLink back">
          <h1 className="pfeil">🏚️</h1>
        </Link>
        <h1 className="GDeals" > Filter</h1></span>
            <div className='ff-container' >
                <div className='sort-container' >
                    <p>Sort By</p>
                    <button className='sort-btn' value="lowest" onClick={(e) => { setSortOrder(e.target.value); e.target.classList.toggle("active"); }} >Lowest Price</button>
                    <button className='sort-btn' value="highest" onClick={(e) => { setSortOrder(e.target.value); e.target.classList.toggle("active"); }} >Highest Price</button>
                    <button className='sort-btn' value="best" onClick={(e) => { setSortOrder(e.target.value); e.target.classList.toggle("active"); }} >Best Rating</button>
                </div>
                <div>
                    <button id="clear" onClick={handleClear} >All Clear</button>
                </div>
            </div>
            <section className='slider-container' >
                <div className='min-div' >
                    <p> Min {priceFilter} </p>
                    <input type="range"
                        id="minR"
                        min="2"
                        max="8"
                        step="0.1"
                        value={priceFilter}
                        onChange={(e) => setPriceFilter(e.target.value)}
                    />
                </div>
                <div className='max-div' >
                    <p> Max {riceFilter} </p>
                    <input type="range"
                        id="maxR"
                        min="8"
                        max="15"
                        step="0.1"
                        value={riceFilter}
                        onChange={(e) => setRiceFilter(e.target.value)}
                    />
                </div>
            </section>
            <div>
                {
                    updatecat.map((item, index) => {
                        return (
                            <button className='cat-btn' onClick={e => { setCategoryFilter(e.target.value); e.target.classList.toggle("active"); }} value={item[0]} key={index}>
                                {item[0]}
                            </button>
                        );
                    })
                }
            </div>
            <div className='submit-btn' >
                <button id="submit_btn" onClick={apply} type="submit" >Apply</button>
            </div>
        </main>


    );
};

export default Filter;















{/* <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
                <option value="lowest"  >Lowest Price</option>
                <option value="highest"   >Highest Price</option>
                <option value="best"  >Best Rating</option>
            </select>  */}