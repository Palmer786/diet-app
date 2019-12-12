import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SearchProduct = ({title}) => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const searchProduct = async e => {
    e.preventDefault();
    const fetchQuery = `https://api.nutritionix.com/v1_1/search/${search}?appId=${API_ID}&appKey=${API_KEY}`;
    await axios.get(fetchQuery).then(res => setProducts(res.data.hits));
  };

  const API_ID = "e6f68f18";
  const API_KEY = "b3a5ad3cdc5c8f49ca2c4714ecd9a149";

  return (
    <div>
      <form className="search" onSubmit={searchProduct}>
        <input
          type="text"
          className="search-bar"
          name="search"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button">Search</button>
      </form>
      <div>
        {products.map(product => (
          <div key={product._id}>
            <Link to={`/meals/${title}/${product._id}`}>
              <h2>{product.fields.item_name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchProduct;
