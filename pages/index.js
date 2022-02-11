import React from 'react'
import Link from "next/link";
import Layout from '../layout'
import WCAPI from '../services/wcApi'

const Home = ( { products }) => { 
  return (
    <Layout>
        { products.length > 0 && products.map( product => {
            return (
            <div className="woocommerce-product" key={product.id}> 
            <Link
          href={{
            pathname: "/product/[slug]",
            query: { productData: JSON.stringify(product) },
          }}
          as={`/product/${product.slug}`}
        >
{product.name}

        </Link>
               <h2> <a  href={`/product/${product.slug}`}> {product.name} </a>  </h2>
               <p> { product.price_html } </p>
              <a> { product.images && product.images.length > 0 ? (
                    <img src={product.images[0].src} alt={product.name} />
                  ) : '' } 
              </a>
            </div>
          )})
        }
    </Layout>
  )
}

Home.getInitialProps = async () => {
  let woocommerce = new WCAPI();
  let products = await woocommerce.get('/products');
  return {
    products : products.data
  }
}

export default Home