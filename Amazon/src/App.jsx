import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from '../src/Components/Header/Header'
import CarouselEffect from "./Components/Carousel/CarouselEffect";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <CarouselEffect />
    </>
  );
}

export default App
