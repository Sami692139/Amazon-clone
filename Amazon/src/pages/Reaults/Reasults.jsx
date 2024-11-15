import React, {useEffect, useState} from 'react'
import classes  from "./reasult.module.css";
import LayOut from "../../Components/LayOut/LaOut";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoints';
import ProductCard from '../../Components/Product/ProductCard';
import Loader from '../../Components/Loader/Loader';





const Reasults = () => {
    const [results, setResults] = useState([]);
    const {categoryName} = useParams()
     const [isLoading, setIsLoading] = useState(false);
    // console.log(categoryName)

    useEffect(()=>{
      setIsLoading(true);
          axios
            .get(`${productUrl}/products/category/${categoryName}`)
            .then((res) => {
              setResults(res.data);
               setIsLoading(false);
              
              
            })
            .catch((err) => {
              console.log(err);
               setIsLoading(false);
            });


    },[])
 console.log(results);
  
  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }} category></p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products_container}>
            {results?.map((product) => {
              return <ProductCard key={product.id} product={product} renderDesc={false} renderAdd={true}/>;
            })}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Reasults