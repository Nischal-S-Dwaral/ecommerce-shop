import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";

const Container = styled.div `
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Products = ({cat, filters, sort}) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    //deps means this effect will run only if there is a change in the mentioned properties
    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get(
                    cat ? `http://localhost:5001/api/products?category=${cat}`
                        : `http://localhost:5001/api/products`
                );
                setProducts(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getProducts();
    },[cat]);

    // Filtering products
    useEffect(() => {
        cat && setFilteredProducts(
            products.filter((item) =>
                Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)
            ))
        );
    },[products, cat, filters]);

    // Sorting products
    useEffect(() => {
        if (sort === 'newest') {
            setFilteredProducts(prev =>
            [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if (sort === 'asc') {
            setFilteredProducts(prev =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setFilteredProducts(prev =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    },[sort]);

    return (
        <Container>
            { cat
                ? filteredProducts.map((product) => (<Product item={product} key={product.id}/>))
                : products.slice(0,8).map((product) => (<Product item={product} key={product.id}/>))
            }
        </Container>
    );
};

export default Products;