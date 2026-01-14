import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from "axios";
import ProductCard from '../components/ProductCard'
import FullPageLoader from '../components/FullPageLoader';
import Error from '../components/Error';
import HeroSection from '../components/HeroSection';
import { useApp } from "../context/AppContext";

function Home() {
        const { cart, wishlist, user, products } = useApp();  
        // const [products, setProducts] = useState([]);
        // const [error, setError] = useState(false);
        // const [loading, setLoading] = useState(false);

        // if(loading){
        //   return ( 
        //     <>
        //      <FullPageLoader />
        //     </>
        //   )
        // }

        // if (error) {
        //   return (
        //     <>
        //       <Error />
        //     </>
        //   )
        // }
        
        
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 py-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            productId={product.id}
            productName={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Home