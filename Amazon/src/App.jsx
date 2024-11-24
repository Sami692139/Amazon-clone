import { useContext, useEffect, useState } from 'react'
import {auth} from './Utility/firebase'
import './App.css'
// import Header from '../src/Components/Header/Header'
import Routing from './Router';
import { DataContext } from './Components/DataProvider/DataProvider';
import { Type } from './Utility/action.type';




function App() {
  const [count, setCount] = useState(0)
  const [{user}, dispatch]= useContext(DataContext)
  useEffect(()=>{
   auth.onAuthStateChanged((authUser)=>{
    if(authUser){
      console.log(authUser)
      dispatch({
        type:Type.SET_USER,
        user: authUser
      })
    }else{
       dispatch({
         type: Type.SET_USER,
         user: null
       });
    }
   })
  },[])

  return (
   
    <Routing/>
      
    
  );
}

export default App
