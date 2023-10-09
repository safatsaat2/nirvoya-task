"use client"
import React, { useEffect, useState } from 'react';


const ProductDetail =  ({params}) => {
    const id = params.productid
    const [product, setProduct] = useState([]);

    useEffect(() => {
      fetch('/featureProduct.json') // Use the relative URL path
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((data) => setProduct(data))
        .catch((error) => {
          console.error('Error fetching data:', error);
          // Handle the error, e.g., show an error message to the user
        });
    }, []);

    console.log(product)

    const newProduct = product.find(pro => pro.id == id)

    console.log(newProduct)


    return (
        <div>
            hi
        </div>
    );
};

export default ProductDetail;