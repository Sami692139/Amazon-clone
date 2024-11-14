import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from '../src/Components/Header/Header'
import CarouselEffect from "./Components/Carousel/CarouselEffect";
import Category from './Components/Category/Category';
import Product from './Components/Product/Product';
// import CategoryCard from './Components/Category/CategoryCard';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <CarouselEffect />
      <Category/>
      <Product/>
    </>
  );
}

export default App
