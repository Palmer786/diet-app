import React, { useState, useEffect } from "react";
import AddProduct from "./AddProduct";
import axios from "axios";

const ProductDetail = ({ match }) => {
  const [product, setProduct] = useState("");
  const API_ID = "e6f68f18";
  const API_KEY = "b3a5ad3cdc5c8f49ca2c4714ecd9a149";
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const fetchQuery = `https://api.nutritionix.com/v1_1/item?id=${match.params.id}&appId=${API_ID}&appKey=${API_KEY}`;
    await axios.get(fetchQuery).then(res => setProduct(res.data));
  };

  return (
    <div>
      <h2>{product.item_name}</h2>
      <h3>Brand: {product.brand_name}</h3>
      <p>Calories: {product.nf_calories}</p>
      <p>Proteins: {product.nf_protein}</p>
      <p>Fats: {product.nf_total_fat}</p>
      <p>Carbohydrates: {product.nf_total_carbohydrate}</p>
      <p>Weight: {product.nf_serving_weight_grams} g.</p>
      <AddProduct title={match.params.title} id={match.params.id} name={product.item_name} calories={product.nf_calories} proteins={product.nf_protein} fats={product.nf_total_fat} carbohydrates={product.nf_total_carbohydrate} />
    </div>
  );
};

export default ProductDetail;
