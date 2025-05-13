import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {

    console.log("Product component rendered");
    const { productId } = useParams();
    console.log(productId);
    
    return (
        <div>

        </div>
    )
};

export default Product;
