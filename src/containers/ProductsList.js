import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';

const ProductsList = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const getProducts = async () => {
        const res = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log("Error", err);
        });

        dispatch(setProducts(res.data));
        
    }

    useEffect(() => {
        getProducts();
    }, []);
    
    return (
        <div>
            <ProductComponent />
        </div>
    );
};

export default ProductsList;