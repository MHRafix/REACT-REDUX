import { Button } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { selectedProducts, removeSelectedProducts } from '../redux/actions/productActions';

const ProductDetail = () => {
    const { id } = useParams();
    const product = useSelector((state) => state.product);
    const dispatch = useDispatch();

    const getSingleProduct = async () => {
        const res =  await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err) => {
            console.log("Error", err);
        })
        dispatch(selectedProducts(res.data));
    }

    useEffect(() => {
        if(id !== "") getSingleProduct();
        return () => {
            dispatch(removeSelectedProducts());
        }
    }, [id]);

    const {title, image, price} = product;
    return (
        <>
         {Object.keys(product).length === 0 ? <div>Loading...</div>:<div>
            <h1>{title}</h1>
            <img src={image} alt="productImage" /> <br />
            <span>$ {price}</span> <br />
            <Button colorScheme="blue">Add to cart</Button>
            <Link to="/allProducts">Back</Link>
         </div>}
        </>
    );
};

export default ProductDetail;