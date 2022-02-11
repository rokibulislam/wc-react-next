import React from 'react';
import WCAPI from '../../services/wcApi'
import Layout from '../../layout'
import ProductDetails from '../../components/products/ProductDetails'
import RelatedProducts from '../../components/products/RelatedProducts'

const Product = ( { product, statusCode }) => {
    return (
        <Layout>
           <h2> { product.name } </h2>
           <p> { product.description } </p>
           <p> { product.sku } </p>
           <p> { product.price } </p>
                         
            <ul>
                {
                    product.categories.length > 0 && product.categories.map( category => {
                    return (
                        <li> <a href={`/product-category/${category.slug}`}>  { category.name } </a> </li>
                    )})
                } 
            </ul>

            <ul>
                {
                  product.tags.length > 0 && product.tags.map( tag => {
                    return (
                        <li> <a href={`/product-tag/${tag.slug}`}>  { tag.name } </a> </li>
                    )})
                } 
            </ul>

            <RelatedProducts />
        </Layout>
    )
}

Product.getInitialProps = async ({ query, res }) => {
    
    let result = {
        product: false,
        statusCode: 200
    };

    if (query.hasOwnProperty("productData")) {
        result.product = JSON.parse(query.productData);
    } else {
        let woocommerce = new WCAPI();
        let product = await woocommerce.get(`/products/?slug=${query.slug}`);
        result.product = product.data.length ? product.data[0] : false;
    }
    
    if (!result.product && res) {
        result.statusCode = 404;
    }
    return result
}

export default Product;